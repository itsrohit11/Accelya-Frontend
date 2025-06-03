import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: '#00205b', color: '#fff', height: 54, minHeight: 54, display: 'flex', alignItems: 'center', px: 3, mt: 4 }}>
    <Typography sx={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 700, fontStyle: 'italic', fontSize: '1.35rem', letterSpacing: 1, color: '#fff', flex: '0 0 auto' }}>
      accelya
    </Typography>
    <Box sx={{ flex: 1 }} />
    <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.95rem', flex: '0 0 auto' }}>
      © Copyright 2024 Accelya - All rights reserved
    </Typography>
  </Box>
);

export default Footer; 