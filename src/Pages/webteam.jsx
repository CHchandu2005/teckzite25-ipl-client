import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import styled from 'styled-components';

const developers = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=160&h=160&fit=crop",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com"
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "sarah@example.com"
  }
];

const TeamsContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.2;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
`;

const WebTeam = () => {
  return (
    <TeamsContainer>
      <Content>
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
      </Content>
    </TeamsContainer>
  );
};

export default WebTeam;
