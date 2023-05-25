import React from "react";
import { styled } from "styled-components";
import { ifile } from "data/data.js";

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
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 400px;
  }
`;

const MainContentBox = styled.div`
  width: 100%;
  height: 400px;
`;
const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Illustration = () => {
  return (
    <div>
      <FileWrapper>
        {ifile?.map((content) => (
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

export default Illustration;
