import React from 'react';
import { Header } from './components/header';
import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"

const Home = () => (
  <Box>Home</Box>
);

const Posts = () => (
  <Box>posts</Box>
);

function App() {
  return (
    <Box>
      <Header />
      <Container
        sx={{
          mt: 4,
        }}
        maxWidth="sm">
        <ReactKeycloakProvider initOptions={{ onLoad: 'login-required' }} authClient={keycloak}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="posts" element={<Posts />} />
            </Routes>
          </BrowserRouter>
        </ReactKeycloakProvider>
      </Container>
    </Box>
  );
}

export default App;
