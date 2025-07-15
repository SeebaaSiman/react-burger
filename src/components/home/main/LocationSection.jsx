import { LocationSectionContainer } from "../../../ui/styles/home-style";
import { ButtonArrow } from "../../buttons/ButtonArrow";

export const LocationSection = ({ ubicacionRef }) => {
  return (
    <LocationSectionContainer ref={ubicacionRef}>
      <div>
        <h2>Nuestra Ubicación</h2>
        <p>Encuéntranos en el corazón de la ciudad, con fácil acceso y estacionamiento disponible.</p>
      </div>

      <div>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8200413751106!2d-57.93499522500176!3d-34.910965373788265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e61126c74ea3%3A0x7178349c562567f0!2sEstadio%20Juan%20Carmelo%20Zerillo!5e0!3m2!1ses!2sar!4v1747425816237!5m2!1ses!2sar'
            width='100%'
            height='100%'
             style={{ border: 0, borderRadius: "0.5rem" }}
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div>
          <h3>Dirección</h3>
          <p>
            Av. Programación 404, Colonia Desarrollo
            <br />
            Ciudad Tecnológica, CP 12345
          </p>
          <h3 >Contacto</h3>
          <p>
            Teléfono: (123) 456-7890
            <br />
            Email: info@reactburger.com
          </p>
          <ButtonArrow text={"Cómo llegar"} />
        </div>
      </div>
    </LocationSectionContainer>
  );
};
