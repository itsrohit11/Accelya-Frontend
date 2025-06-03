import React from 'react';
import Header from './components/Header';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ bgcolor: '#f7f9fb', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ mt: 5 }} />
      <FormSection />
      <Box sx={{ mb: 5 }} />
      <Footer />
    </Box>
  );
}

export default App;
