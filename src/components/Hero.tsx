import React from "react";
import styled from "styled-components";
import { Slider } from "./Slider";

export const Hero = () => {
  return (
    <HeroContainer>
      {/* <ImageCostum src={zdj1} alt={"xx"}/> */}
      <div style={{ width: "30%", height: "500px", margin: "100px" }}>
        <Slider />
      </div>
      {/* <Left>
        <h2>Zdjęcia Dzieci</h2>
        <img src={zdj1} alt="loading Error"></img>
      </Left>
      <Right>
        <img src={zdj1} alt="loading Error"></img>
        <h2>Zdjęcia Dzieci</h2>
      </Right> */}
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  align-items: center;
  background-color: #e2b4bd;
`;
const Left = styled.div`
  flex: 0.5;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin: 1vh;
  > img {
    width: 30vh;
    height: 45vh;
    filter: blur(2px);
  }
`;
const Right = styled.div`
  flex: 0.5;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin: 1vh;
  > img {
    width: 40vh;
    height: 60vh;
  }
`;
