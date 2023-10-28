import React from "react";
import { keyframes, styled } from "styled-components";

const ScopeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
`;

const scope = keyframes`
from {
transform: scale(0.1);
}
to{
    transform: scale(1);
}
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 600px;

  max-height: 600px;
  position: relative;
  /* background-color: #110f0f; */
  overflow: hidden;

  /* transform: scale(1.2);
  transition: transform 0.5s; */
  animation: ${scope} 0.15s;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const VideoContent = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageScope = ({ setScopeContent, scopeContent }) => {
  return (
    <ScopeWrapper
      onClick={() => {
        setScopeContent(null);
      }}
    >
      <ImageBox>
        {scopeContent?.type === "img" ? (
          <ImageContent src={scopeContent?.url} />
        ) : (
          <VideoContent
            src={scopeContent?.url}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          />
        )}
      </ImageBox>
    </ScopeWrapper>
  );
};

export default ImageScope;
