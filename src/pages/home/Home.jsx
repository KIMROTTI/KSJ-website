import { Mobile, Pc } from "device";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import home_video from "assets/videos/home/home_video.mp4";
import home_poster from "assets/images/home/home_poster.webp";
import home_mobile from "assets/images/home/home_mobile.webp";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 200px;
`;
const Container = styled.div`
  width: 1200px;
  height: 100%;
  min-height: calc(100vh - 84px);
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  /* opacity: 0.15; */
`;

const MobileBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  opacity: 0.7;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 36px;
`;

const MobileTitleBox = styled(Link)`
  width: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const MobileTitleText = styled.span`
  margin-top: 12px;
  font-family: "Helvetica";
  font-size: 1rem;
  font-weight: 400;
  color: #dedede;
  text-align: center;
  line-height: 100%;
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  padding-bottom: 100px;
`;

const MenuLink = styled(Link)`
  margin-top: 48px;
  text-decoration: none;
`;

const MenuText = styled.span`
  color: #dedede;
  font-family: "Alumni Sans";
  font-size: 1.25rem;
`;
const Home = ({ setIshome }) => {
  useEffect(() => {
    setIshome(window.location.pathname);
    return () => setIshome("");
  }, []);
  return (
    <>
      <Pc>
        <Wrapper>
          <BackgroundVideo
            // src="https://deuffzfddmyq6.cloudfront.net/videos/motel_1.mp4"
            src={home_video}
            // poster={home_poster}
            preload="none"
            autoPlay
            loop
            muted
          />
          <Container></Container>
        </Wrapper>
      </Pc>
      <Mobile>
        <MobileBackgroundImage
          // src="https://deuffzfddmyq6.cloudfront.net/images/i5.jpg"
          src={home_mobile}
          loading="lazy"
        />
        <MobileWrapper>
          <MobileTitleBox>
            <MobileTitleText>K</MobileTitleText>

            <MobileTitleText>I</MobileTitleText>

            <MobileTitleText>M</MobileTitleText>
            <br />
            <MobileTitleText>S</MobileTitleText>

            <MobileTitleText>U</MobileTitleText>

            <MobileTitleText>N</MobileTitleText>

            <MobileTitleText>G</MobileTitleText>
            <br />
            <MobileTitleText>J</MobileTitleText>

            <MobileTitleText>A</MobileTitleText>

            <MobileTitleText>E</MobileTitleText>
          </MobileTitleBox>
          <MenuWrapper>
            <MenuLink to="/profile">
              <MenuText>PROFILE</MenuText>
            </MenuLink>
            <MenuLink to="/artworks">
              <MenuText>ART WORKS</MenuText>
            </MenuLink>
          </MenuWrapper>
        </MobileWrapper>
      </Mobile>
    </>
  );
};

export default Home;
