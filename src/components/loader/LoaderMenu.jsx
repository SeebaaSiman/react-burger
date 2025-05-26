import { FeaturedBurgersLoaderContainer } from "../../ui/styles/home-style";
import { LoaderBalls } from "./LoaderBalls";

export const LoaderMenu = () => {
  return (
    <FeaturedBurgersLoaderContainer>
      <LoaderBalls color={"#000"} />
      <p>Cargando menú...</p>
    </FeaturedBurgersLoaderContainer>
  );
};
