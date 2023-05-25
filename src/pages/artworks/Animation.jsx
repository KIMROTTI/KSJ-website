import React from "react";
import { styled } from "styled-components";
import { afile } from "data/data.js";

const FileWrapper = styled.ul`
  margin-top: 20px;
  width: 100%;
  height: 100%;

  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FileBox = styled.li`
  margin-top: 12px;
  width: 32.8%;
  height: 300px;
  background-color: #050519;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 400px;
  }
`;
const FileImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

const FileVideo = styled.video`
  width: 100%;
  height: 100%;
`;

const MainContentBox = styled.div`
  width: 100%;
  height: 400px;
`;
const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`;
const Animation = () => {
  return (
    <div>
      <FileWrapper>
        <MainContentBox>
          <MainVideo
            src="https://deuffzfddmyq6.cloudfront.net/artworks/main.mp4"
            poster="https://deuffzfddmyq6.cloudfront.net/artworks/lastcomp4.png"
            // autoPlay
            // loop
            preload="auto"
            controls={true}
          />
        </MainContentBox>
        {afile?.map((content) => (
          <>
            {content.type === "img" ? (
              <FileBox>
                <FileImage src={content.url} loading="lazy" />
              </FileBox>
            ) : (
              <FileBox>
                <FileVideo src={content.url} />
              </FileBox>
            )}
          </>
        ))}
      </FileWrapper>
    </div>
  );
};

export default Animation;
