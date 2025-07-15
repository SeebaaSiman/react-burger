import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../store/context/AuthContext";
import { arrBentoInfo } from "../../services/db/bento-info";
import { device } from "../../ui/styles/device";
import styled from "styled-components";
import { getNameOfMail } from "../../utils/getNameOfMail";
import { Card3D } from "../../components/admin/Card3D";

const Dashboard = () => {
  const { user, admin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user || !admin) navigate("./login");
  }, []);

  const [handleNavigation] = useOutletContext();
  const onNavigate = (id, to) => {
    if (to) {
      handleNavigation(id, to);
    } else return;
  };

  return (
    <GridContainer>
      {arrBentoInfo.map((bento, index) => (
        <Card3D key={index} fn={() => onNavigate(bento.id, bento.to)} stylearea={bento.area} bgimage={bento.image}>
          <p>{bento.text === "user name" ? `${getNameOfMail(admin)}` : `${bento.text} `}</p>
          {bento.icon}
        </Card3D>
      ))}
    </GridContainer>
  );
};

export default Dashboard;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1.5vw;
  padding: 1vw;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgApp};
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "name   name    clientes"
    "productos productos clientes"
    "productos productos editar"
    "productos productos  setting";

  @media ${device.mobileL} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "name   clientes  clientes  clientes"
      "productos productos editar editar"
      "productos productos editar editar"
      "setting setting   setting setting";
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "name name name clientes clientes"
      "productos productos productos productos productos"
      "productos productos productos productos productos"
      "productos productos productos productos productos"
      "editar editar setting setting  setting"
      "editar editar setting setting setting";
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      "name   name name  name clientes clientes"
      "editar editar productos productos clientes clientes"
      "editar editar productos productos setting setting"
      "editar editar productos productos setting setting"
      "editar editar productos   productos setting setting";
  }
  div {
    grid-area: "name";
    background-color: ${(props) => props.theme.primaryText};
  }
  div p {
    color: ${(props) => props.theme.secondaryButtons};
    margin-bottom: auto;
    margin-right: auto;
    background-color: ${(props) => props.theme.bgApp};
    padding: 4px 8px;
    border-radius: 6px;
    box-shadow: ${(props) => props.theme.cardShadow};
    line-height: 1em;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  div svg {
    margin-bottom: auto;
    margin-left: auto;
    background-color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.cardShadow};
    padding: 4px;
    border-radius: 50%;
  }
`;
