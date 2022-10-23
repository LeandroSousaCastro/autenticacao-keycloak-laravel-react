import * as React from 'react';
import { Header } from './components/header';
import { Routes, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
