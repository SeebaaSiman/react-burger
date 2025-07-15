import { useCart } from "../../store/context/CartContext";
import { phoneRegex, useForm } from "../../hooks/useForm";
import { DirectionFormInputContainer, DirectionFormPage } from "../../ui/styles/login-form-style";
import { SpinnerLoader } from "../loader/SpinnerLoader";

const validateDirection = (values) => {
  let temp = {};
  if (!values.address || values.address.trim().length < 5) temp.address = "Dirección inválida";
  else temp.address = "";

  if (!values.phone) temp.phone = "Teléfono obligatorio";
  else if (!phoneRegex.test(values.phone.replace(/\D/g, ""))) temp.phone = "Teléfono inválido";
  else temp.phone = "";

  return temp;
};

export const DirectionForm = ({ onClose }) => {
  const { cartState, selectUserDirection } = useCart();
  const initialState = cartState.direction || {
    address: "",
    phone: "",
  };
  const { values, errors, touched, isSubmitting, setIsSubmitting, handleChange, handleBlur, runValidation } = useForm(
    initialState,
    validateDirection
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      if (runValidation(values)) {
        selectUserDirection(values);
        onClose();
      }
      setIsSubmitting(false);
    }, 2000);
  };
  return (
    <DirectionFormPage onSubmit={handleSubmit}>
      <h2>Dirección de entrega</h2>
      <p>Envíos únicamente dentro de la ciudad de La Plata</p>

      <DirectionFormInputContainer>
        <input name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} required />
        <label>Dirección</label>

        {touched.address && errors.address && <span style={{ color: "red" }}>{errors.address}</span>}
        {touched.address && !errors.address && values.address && (
          <span style={{ color: "#b1f7c3" }}>Dirección válida</span>
        )}
      </DirectionFormInputContainer>

      <DirectionFormInputContainer>
        <input name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} required />
        <label>Teléfono</label>

        {touched.phone && errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        {touched.phone && !errors.phone && values.phone && <span style={{ color: "#b1f7c3" }}>Teléfono válido</span>}
      </DirectionFormInputContainer>
      <button
        type='submit'
        disabled={isSubmitting || Object.values(errors).some((e) => e) || !values.address || !values.phone}
        onClick={handleSubmit}
      >
        {isSubmitting ? <SpinnerLoader /> : "Actualizar dirección"}
      </button>
    </DirectionFormPage>
  );
};
