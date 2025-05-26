import { useNavigate } from "react-router-dom";
import { ButtonGroup, PageNotFound } from "../ui/styles/page-error-style";
import { BackButton, HomeButton } from "../ui/styles/Buttons-style";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <PageNotFound>
      <div>
        <h1>¡Ups! Página no encontrada</h1>
        <p>
          La página que buscas no existe o fue movida.
          <br />
          ¿Te perdiste en el menú? ¡Volvé a la Home o regresá a la página anterior!
        </p>
        <ButtonGroup>
          <BackButton onClick={() => navigate(-1)}> Volver atrás</BackButton>
          <HomeButton onClick={() => navigate("/")}>Ir a Home</HomeButton>
        </ButtonGroup>
      </div>
    </PageNotFound>
  );
};

export default NotFound;
