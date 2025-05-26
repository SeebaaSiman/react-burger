import { AboutContent, AboutImage, AboutSectionContainer } from "../../../ui/styles/home-style";
import about from "../../../assets/about.jpg";
import { restaurantInfo } from "../../../services/db/local-info";
export const AboutSection = ({ nosotrosRef }) => {
  return (
    <AboutSectionContainer>
      <AboutContent ref={nosotrosRef}>
        <h2>Nuestra Historia</h2>
        {restaurantInfo.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polyline points='12 6 12 12 16 14'></polyline>
          </svg>
          <span>Abierto todos los días: 18:00 - 23:00</span>
        </div>
      </AboutContent>
      <AboutImage>
        <img src={about} alt='Interior de React Burger' />
      </AboutImage>
    </AboutSectionContainer>
  );
};
