import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ifile } from "data/data.js";
import ImageScope from "components/scrope/ImageScope";

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
  /* height: 300px; */

  background-color: #050519;

  height: 0;
  padding-top: 28%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    /* max-height: 400px; */
    height: 0;
    padding-top: 60%;
  }
`;
const FileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

const FileVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// const MainContentBox = styled.div`
//   width: 100%;
//   height: 400px;
// `;
// const MainVideo = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
const Illustration = () => {
  const [scopeContent, setScopeContent] = useState(null);

  useEffect(() => {
    return () => {
      setScopeContent(null);
    };
  }, []);
  return (
    <FileWrapper>
      {scopeContent === null ? null : (
        <ImageScope
          setScopeContent={setScopeContent}
          scopeContent={scopeContent}
        />
      )}
      {ifile?.map((content, index) => (
        <>
          {content.type === "img" ? (
            <FileBox key={index}>
              <FileImage
                src={content.url}
                loading="lazy"
                onClick={() => {
                  setScopeContent(content);
                }}
              />
            </FileBox>
          ) : (
            <FileBox key={index}>
              <FileVideo
                src={content.url}
                onClick={() => {
                  setScopeContent(content);
                }}
              />
            </FileBox>
          )}
        </>
      ))}
    </FileWrapper>
  );
};

export default Illustration;
