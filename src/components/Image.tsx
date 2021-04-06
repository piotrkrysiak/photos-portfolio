import React from "react";
import styled from "styled-components";
const theme = {
  main: "mediumseagreen",
};

export const ImageCostum = ({ src, alt }: any) => {
  return (
    <ImageContainer primary={false} before={alt}>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div<any>`
  border-radius: 30px;
  position: relative;
  height: 500px;

  &:after {
    content: "${(props) => props.before}";
    text-shadow: 5px 5px #424242;
    width: 100px;
    height: 100px;
    position: absolute;
    font-size: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(120%, -50%);
    color: white;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
  }
`;
