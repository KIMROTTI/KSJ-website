import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import email from "assets/icons/contact/email.svg";
import instargram from "assets/icons/contact/instargram.svg";
import twitter from "assets/icons/contact/twitter.svg";
import { Mobile, Pc } from "device";
import menu from "assets/icons/menu/menu.svg";
import xbutton from "assets/icons/xbutton.svg";
import mobile_contact from "assets/icons/menu/social_contact.svg";
import mobile_instargram from "assets/icons/menu/social_instargram.svg";
import mobile_twitter from "assets/icons/menu/social_twitter.svg";

const Wrapper = styled.header`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 99;
  /* background: ${(props) =>
    props.ishome === "/" ? "transparent" : "#1B1A1A"}; */
`;

const Container = styled.div`
  /* width: 1200px; */
  max-width: calc(100vw - 400px);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoBox = styled(Link)`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
`;

const LogoText = styled.span`
  font-family: "Alumni Sans";
  font-size: 1.75rem;
  color: #dedede;
  &:hover {
    color: #ffffff;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 212px;
  height: auto;
  margin-left: auto;
`;

const MenuBox = styled(Link)`
  width: auto;
  height: auto;
  text-align: center;
  text-decoration: none;
`;

const MenuText = styled.span`
  font-family: "Alumni Sans";
  font-size: 1.5rem;
  color: #dedede;
  &:hover {
    color: #ffffff;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-left: 60px;
`;

const ContactBox = styled.a`
  width: 36px;
  height: 36px;
  margin: 0 12px;
  display: flex;
`;

const ContactImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MobileWrapper = styled.header`
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  z-index: 99;
  top: 0;
  background: ${(props) => (props.ishome === "" ? "transparent" : "#1B1A1A")};
`;

const MobileLogoBox = styled.div`
  width: auto;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const MobileLogoLink = styled(Link)`
  font-family: "Alumni Sans";
  font-size: 1.75rem;
  color: #dedede;
  text-decoration: none;
  &:hover {
    color: #b9b9b9;
  }
`;

const MobileMenuBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const MobileMenuImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.9;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  /* padding: 0 24px; */
`;

const ToggleXBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ToogleXbutton = styled.img``;

const TooggleMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
`;

const ToggleMenuBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleMenuLink = styled(Link)`
  margin-top: 12px;
  font-family: "Alumni Sans";
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;

const ToggleSocialWrapper = styled.div`
  width: 140px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const ToggleSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const ToggleSocialImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = ({ ishome }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Pc>
        <Wrapper ishome={ishome}>
          <Container>
            <LogoBox to="/">
              <LogoText>KIM SUNG JAE</LogoText>
            </LogoBox>
            <MenuWrapper>
              <MenuBox to="/profile">
                <MenuText>PROFILE</MenuText>
              </MenuBox>
              <MenuBox to="/artworks">
                <MenuText>ART WORKS</MenuText>
              </MenuBox>
            </MenuWrapper>
            <ContactWrapper>
              <ContactBox href="https://twitter.com/pinn_sj" target="_blank">
                <ContactImage src={twitter} />
              </ContactBox>
              <ContactBox
                href="https://www.instagram.com/pinn_999/"
                target="_blank"
              >
                <ContactImage src={instargram} />
              </ContactBox>
              <ContactBox href="mailto:rlatjdwo0824@gmail.com">
                <ContactImage src={email} />
              </ContactBox>
            </ContactWrapper>
          </Container>
        </Wrapper>
      </Pc>
      <Mobile>
        {ishome === "/" ? null : (
          <MobileWrapper ishome={ishome}>
            <MobileLogoBox>
              <MobileLogoLink to="/">KIM SUNG JAE</MobileLogoLink>
            </MobileLogoBox>

            {isToggled === true ? (
              <ToggleWrapper>
                <ToggleXBox>
                  <ToogleXbutton
                    src={xbutton}
                    onClick={() => {
                      setIsToggled(false);
                    }}
                  />
                </ToggleXBox>
                <TooggleMenuWrapper>
                  <ToggleMenuBox>
                    <ToggleMenuLink to="/" onClick={() => setIsToggled(false)}>
                      Home
                    </ToggleMenuLink>
                    <ToggleMenuLink
                      to="/profile"
                      onClick={() => setIsToggled(false)}
                    >
                      PROFILE
                    </ToggleMenuLink>

                    <ToggleMenuLink
                      to="/artworks"
                      onClick={() => setIsToggled(false)}
                    >
                      ART WORKS
                    </ToggleMenuLink>
                  </ToggleMenuBox>
                  <ToggleSocialWrapper>
                    <ToggleSocialLink
                      href="https://twitter.com/pinn_sj"
                      target="_blank"
                    >
                      <ToggleSocialImg src={mobile_twitter} />
                    </ToggleSocialLink>
                    <ToggleSocialLink
                      href="https://www.instagram.com/pinn_999/"
                      target="_blank"
                    >
                      <ToggleSocialImg src={mobile_instargram} />
                    </ToggleSocialLink>
                    <ToggleSocialLink href="mailto:rlatjdwo0824@gmail.com">
                      <ToggleSocialImg src={mobile_contact} />
                    </ToggleSocialLink>
                  </ToggleSocialWrapper>
                </TooggleMenuWrapper>
              </ToggleWrapper>
            ) : (
              <MobileMenuBox>
                <MobileMenuImg
                  src={menu}
                  onClick={() => {
                    setIsToggled(true);
                  }}
                />
              </MobileMenuBox>
            )}
          </MobileWrapper>
        )}
      </Mobile>
    </>
  );
};

export default Header;
