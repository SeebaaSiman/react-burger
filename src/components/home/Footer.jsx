import { FooterContainer, FooterGrid, FooterButton } from "../../ui/styles/home-style";

const enlacesRapidos = [
  { id: 1, texto: "Menú", href: "menu" },
  { id: 2, texto: "Nosotros", href: "nosotros" },
  { id: 3, texto: "Ubicación", href: "ubicacion" },
];

function Footer({ contactoRef, scrollToCategory }) {
  return (
    <FooterContainer ref={contactoRef}>
      <FooterGrid>
        <div>
          <h3>React Burger</h3>
          <p>Hamburguesas con el sabor de la programación, donde cada bocado es una experiencia única.</p>
        </div>

        <div>
          <h3>Enlaces Rápidos</h3>
          <ul>
            {enlacesRapidos.map((enlace) => (
              <li key={enlace.id}>
                <a onClick={() => scrollToCategory(enlace.href)}>{enlace.texto}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Horarios</h3>
          <ul>
            <li>Lunes - Viernes: 11:00 - 23:00</li>
            <li>Sábados y Domingos: 12:00 - 00:00</li>
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul>
            <li>(123) 456-7890</li>
            <li>info@reactburger.com</li>
            <li>
              Av. Programación 404, Colonia Desarrollo
              <br />
              Ciudad Tecnológica, CP 12345
            </li>
          </ul>
        </div>
      </FooterGrid>

      <FooterButton>
        <p>© {new Date().getFullYear()} React Burger. Todos los derechos reservados.</p>
      </FooterButton>
    </FooterContainer>
  );
}

export default Footer;
