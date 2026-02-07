import React from "react";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

/* Page Layout */
const Page = styled.div`
  display: flex;
  min-height: 100vh;
  background: #0f172a;
  font-family: Montserrat, sans-serif;
   width: 100%;
  min-height: 100vh;
`;

/* Main Area */
const Container = styled.div`
  flex: 1;

  margin-left: 230px;
  margin-top: 60px;

  padding: 30px;

  color: white;
`;

/* Profile Card */
const ProfileCard = styled.div`
  max-width: 800px;

  margin: auto;

  background: #020617;

  border-radius: 20px;

  padding: 30px;

  box-shadow: 0 0 30px rgba(0, 229, 255, 0.2);

  display: flex;
  gap: 30px;

  align-items: center;

  flex-wrap: wrap;
`;

/* Profile Image */
const Avatar = styled.img`
  width: 140px;
  height: 140px;

  border-radius: 50%;

  object-fit: cover;

  border: 3px solid #00e5ff;
`;

/* Info Section */
const Info = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

/* Name */
const Name = styled.h2`
  color: #00e5ff;
`;

/* Text */
const Text = styled.p`
  opacity: 0.9;
`;

/* Stats */
const Stats = styled.div`
  display: flex;

  gap: 20px;

  margin-top: 15px;

  flex-wrap: wrap;
`;

/* Stat Box */
const Stat = styled.div`
  background: #020617;

  padding: 15px 20px;

  border-radius: 12px;

  text-align: center;

  min-width: 120px;

  border-left: 4px solid #00e5ff;
`;

/* Button */
const Button = styled.button`
  margin-top: 20px;

  background: #00e5ff;

  color: #020617;

  border: none;

  padding: 10px 20px;

  border-radius: 8px;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  width: fit-content;

  &:hover {
    background: white;
    transform: scale(1.05);
  }
`;

function Profile() {
  /* Demo Data */
  const user = {
    name: "Admin User",
    email: "admin@gmail.com",
    role: "Student / Developer",
    avatar: "https://i.pravatar.cc/150?img=3",

    expenses: 30000,
    tasks: 20,
    workouts: 15,
  };

  return (
    <Page>
      <Sidebar />
      <Navbar />

      <Container>
        <h1>👤 Profile</h1>

        <ProfileCard>

          {/* Avatar */}
          <Avatar src={user.avatar} alt="Profile" />

          {/* Info */}
          <Info>

            <Name>{user.name}</Name>

            <Text>📧 {user.email}</Text>
            <Text>💼 {user.role}</Text>

            {/* Stats */}
            <Stats>

              <Stat>
                <h4>Expenses</h4>
                <p>{user.expenses}</p>
              </Stat>

              <Stat>
                <h4>Tasks</h4>
                <p>{user.tasks}</p>
              </Stat>

              <Stat>
                <h4>Workouts</h4>
                <p>{user.workouts}</p>
              </Stat>

            </Stats>

            {/* Button */}
            <Button>Edit Profile</Button>

          </Info>

        </ProfileCard>

      </Container>
    </Page>
  );
}

export default Profile;
