import { useEffect, useState } from "react";
import { useToast } from "../store/context/ToastContext";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
export const phoneRegex = /^(\+54)?\s?(\d{10,11})$/;

export const useForm = (initialValues = {}, validate) => {
  const { showToast } = useToast();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const runValidation = (fieldValues = values) => {
    let temp = validate ? validate(fieldValues) : {};
    setErrors({ ...errors, ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    runValidation(newValues); // Validación en tiempo real
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validate(values);
  };
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (credentials) {
      showToast({ message: `${credentials}`, type: "error" });
      setTimeout(() => {
        setCredentials(null);
      }, 2000);
    }
  }, [credentials]);
  return {
    values,
    setCredentials,
    resetForm,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    runValidation,
    setValues,
  };
};
