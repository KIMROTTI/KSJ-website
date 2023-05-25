import React, { useState } from "react";
import { styled } from "styled-components";

import Animation from "./Animation";
import Illustration from "./Illustration";
import { Mobile, Pc } from "device";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 84px;
`;

const Containner = styled.div`
  width: 100%;
  max-width: calc(100vw - 400px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 24px;
  display: flex;
`;

const TitleText = styled.span`
  font-family: "Alumni Sans";
  font-size: 1.5rem;
`;

const SubTitleBox = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 212px;
    justify-content: space-between;
  }
`;

const SubTitleText = styled.span`
  font-size: 0.825rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;

const CategoryButton = styled.button`
  width: auto;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* margin: 0 6px; */
  /* padding: 1px; */
  background-color: transparent;

  color: ${(props) => (props.toggle === "true" ? "#ffffff" : "#c8c8c8")};
  border: none;
  font-size: 0.825rem;
  font-family: 400;

  &:hover {
    color: #9e9e9e;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
    padding: 0;
    &:hover {
      color: #ffffff;
    }
  }
`;

const CategoryHr = styled.div`
  width: 1px;
  height: 12px;
  background-color: white;
  margin: 0;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  /* margin-top: 64px; */
`;

const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const ArtWorks = () => {
  const [category, setCategory] = useState("a");
  return (
    <div>
      <Pc>
        <Wrapper>
          <Containner>
            <TitleBox>
              <TitleText>ART WORKS</TitleText>
            </TitleBox>
            <SubTitleBox>
              <SubTitleText>ANIMATION & ILLUSTRATION WORKS</SubTitleText>
              <CategoryButton
                toggle={String(category === "a")}
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  console.log("a");
                  setCategory("a");
                }}
              >
                ANIMATION
              </CategoryButton>
              <CategoryHr />
              <CategoryButton
                toggle={String(category === "i")}
                style={{ marginRight: "0" }}
                onClick={() => {
                  console.log("i");
                  setCategory("i");
                }}
              >
                SKETCHES & ILLUSTRATION
              </CategoryButton>
            </SubTitleBox>
            {category === "a" ? <Animation /> : <Illustration />}
          </Containner>
        </Wrapper>
      </Pc>
      <Mobile>
        <MobileWrapper>
          <MobileContainer>
            <TitleBox>
              <TitleText>ART WORKS</TitleText>
            </TitleBox>
            <SubTitleBox>
              <CategoryButton
                toggle={String(category === "a")}
                onClick={() => {
                  console.log("a");
                  setCategory("a");
                }}
              >
                ANIMATION
              </CategoryButton>
              <CategoryHr />
              <CategoryButton
                toggle={String(category === "i")}
                style={{ marginRight: "0" }}
                onClick={() => {
                  console.log("i");
                  setCategory("i");
                }}
              >
                SKETCHES & ILLUSTRATION
              </CategoryButton>
            </SubTitleBox>
            {category === "a" ? <Animation /> : <Illustration />}
          </MobileContainer>
        </MobileWrapper>
      </Mobile>
    </div>
  );
};

export default ArtWorks;
