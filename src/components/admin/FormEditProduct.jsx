import { Fragment } from "react";
import { useForm } from "../../hooks/useForm";
import {
  FormBtnContainerAdmin,
  FormEditProductPage,
  InputContainer,
  InputTitle,
} from "../../ui/styles/login-form-style";
import { SpinnerLoader } from "../loader/SpinnerLoader";

const validateProduct = (values) => {
  let temp = {};

  if (!values.name || values.name.trim().length < 3) {
    temp.name = "El nombre es obligatorio y debe tener al menos 3 caracteres";
  } else {
    temp.name = "";
  }

  if (!values.price) {
    temp.price = "El precio es obligatorio";
  } else if (isNaN(Number(values.price)) || Number(values.price) <= 0) {
    temp.price = "El precio debe ser un número mayor a 0";
  } else {
    temp.price = "";
  }

  if (!values.description || values.description.trim().length < 10) {
    temp.description = "La descripción es obligatoria y debe tener al menos 10 caracteres";
  } else {
    temp.description = "";
  }

  return temp;
};
export const FormEditProduct = ({ clickedItem, fn, onCloseModal, deleteProduct, modal }) => {
  const { values, errors, touched, isSubmitting, setIsSubmitting, handleChange, handleBlur, runValidation, resetForm } =
    useForm(clickedItem, validateProduct);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const isValid = runValidation(values);
      if (isValid) {
        fn(values);
        onCloseModal();
      }
      setIsSubmitting(false);
    }, 2000);
  };

  const arrInputsTag = [
    { title: "Nombre del producto", placeholder: "Nombre del producto", name: "name", type: "text" },
    { title: "Precio", placeholder: "Precio", name: "price", type: "number" },
    { title: "Imagen (URL)", placeholder: "URL de la imagen", name: "image", type: "text" },
    { title: "Descripción", placeholder: "Descripción", name: "description", type: "text" },
  ];

  const onCancel = () => {
    resetForm();
    onCloseModal();
  };
  const onDelete = () => {
    deleteProduct(clickedItem.id);
    onCloseModal();
  };
  return (
    <FormEditProductPage>
      {clickedItem &&
        arrInputsTag.map((item, index) => (
          <Fragment key={index}>
            {item.name === "image" && clickedItem.image && (
              <img src={clickedItem.image} style={{ margin: "auto" }} width='120px' height='120px' />
            )}
            <InputContainer>
              <InputTitle>{item.title}</InputTitle>
              <input
                name={item.name}
                placeholder={item.title}
                type={item.type}
                value={values[item.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                min={item.name === "price" ? 1 : undefined}
              />
            </InputContainer>
            {touched.name && errors[item.name] && (
              <span style={{ color: "red", fontSize: "0.9em" }}>{errors[item.name]}</span>
            )}
            {touched[item.name] && !errors[item.name] && values[item.name] && (
              <span style={{ color: "green", fontSize: "0.9em" }}>{item.title} validado</span>
            )}
          </Fragment>
        ))}
      <FormBtnContainerAdmin>
        {modal && (
          <button onClick={onDelete} className='form-edit-delete'>
            Eliminar
          </button>
        )}
        <button onClick={onCancel} className='form-edit-cancel'>
          Cancelar
        </button>
        <button onClick={handleSubmit}>{isSubmitting ? <SpinnerLoader /> : "Actualizar"}</button>
      </FormBtnContainerAdmin>
    </FormEditProductPage>
  );
};
