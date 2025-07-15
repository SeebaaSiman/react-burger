import { useRef, useState } from "react";
import styled from "styled-components";

export const Card3D = ({ fn, stylearea, bgimage, children }) => {
  const [{ rotateX, rotateY, translateX, translateY }, setRotate] = useState({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();

    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    const rotateY = (mouseX / (cardRect.width / 2)) * 15;
    const rotateX = -(mouseY / (cardRect.height / 2)) * 15;

    const translateX = mouseX * 0.05;
    const translateY = mouseY * 0.05;

    setRotate({ rotateX, rotateY, translateX, translateY });
  };

  const handleMouseLeave = () => {
    setRotate({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  };
  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
        gridArea: `${stylearea}`,
        backgroundImage: bgimage ? `url(${bgimage})` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: bgimage ? "pointer" : undefined,
      }}
      onClick={fn}
    >
      {children}
    </Card>
  );
};
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.cardShadow};
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* gap: 8px; */
  user-select: none;
`;
