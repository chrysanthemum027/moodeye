import React, { useEffect, useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InfoElementWrapper from "../../components/InfoElementWrapper";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../../api/users";
import Loading from "../LoadingPage";

function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function showUser() {
      try {
        const loadedUser = await fetchUserProfile(
          sessionStorage.getItem("userID")
        );
        setUser(loadedUser);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    showUser();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>Your profile</h1>
            <InfoElementWrapper>
              <span>First name:</span>
              <span>{user.firstName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Last name:</span>
              <span>{user.lastName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Username:</span>
              <span>{user.nickName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Birthday:</span>
              <span>{user.birthDay}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Username:</span>
              <span>{user.userName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Moodeye-Name:</span>
              <span>{user.moodsterName}</span>
            </InfoElementWrapper>
            <Link to="/main/profile/change">Edit profile...</Link>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Profile;
