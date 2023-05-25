import { Mobile, Pc } from "device";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  /* width: 1200px; */
  max-width: calc(100vw - 400px);
  width: 100%;
  height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: auto;
  height: 240px;
  display: flex;
  flex-direction: column;
`;

const ProfileTitle = styled.span`
  font-family: "Alumni Sans";
  text-align: center;
`;

const ProfileText = styled.span`
  margin-top: 8px;
  text-align: center;
`;
const Profile = () => {
  return (
    <div>
      <Pc>
        <Wrapper>
          <Container>
            <TextBox>
              <ProfileTitle>Email</ProfileTitle>
              <ProfileText>rlatjdwo0824@gmail.com</ProfileText>

              <ProfileTitle style={{ marginTop: "64px" }}>
                Techninal Stack
              </ProfileTitle>
              <ProfileText>
                Clip studio, After effect, photoshop, Pro Tools
              </ProfileText>
            </TextBox>
          </Container>
        </Wrapper>
      </Pc>
      <Mobile>
        <Wrapper>
          <Container>
            <TextBox>
              <ProfileTitle>Email</ProfileTitle>
              <ProfileText>rlatjdwo0824@gmail.com</ProfileText>

              <ProfileTitle style={{ marginTop: "64px" }}>
                Techninal Stack
              </ProfileTitle>
              <ProfileText>
                Clip studio, After effect, photoshop, Pro Tools
              </ProfileText>
            </TextBox>
          </Container>
        </Wrapper>
      </Mobile>
    </div>
  );
};

export default Profile;
