import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Typography, Paper, Divider, Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CurrentList from './CurrentList';

const FormSection = () => {
  const [insightOpen, setInsightOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedValue(event.target.value);
  return (
    <Box sx={{ bgcolor: '#f3f4f6', border: '2px solid #E5E7EB', borderRadius: 2, p: 4, mb: 3, width: '90%', mx: '32px' }}>
      <Typography variant="h6" sx={{ color: '#00205b', fontWeight: 600, mb: 3, fontFamily: 'Segoe UI Semibold, Segoe UI, Arial, sans-serif', fontSize: '1.5rem' }}>
        Form Section
      </Typography>
      <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={3}>
          <Typography variant="body2" sx={{ color: '#000', fontWeight: 600, mb: 1, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Label</Typography>
          <TextField
            select
            fullWidth
            size="small"
            label="Select the Option"
            value={selectedValue}
            onChange={handleSelectChange}
            sx={{ bgcolor: '#fff', borderRadius: 1, fontFamily: 'Inter, Arial, sans-serif' }}
            SelectProps={{ IconComponent: KeyboardArrowDownIcon }}
          >
            <MenuItem value="1">Option 1</MenuItem>
            <MenuItem value="2">Option 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4.5}>
          <Typography variant="body2" sx={{ color: '#000', fontWeight: 600, mb: 1, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Label</Typography>
          <TextField fullWidth size="small" placeholder="Introduce your details here" sx={{ bgcolor: '#fff', borderRadius: 1, fontFamily: 'Inter, Arial, sans-serif' }} />
        </Grid>
        <Grid item xs={4.5}>
          <Typography variant="body2" sx={{ color: '#000', fontWeight: 600, mb: 1, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Label</Typography>
          <TextField fullWidth size="small" placeholder="Introduce your details here" sx={{ bgcolor: '#fff', borderRadius: 1, fontFamily: 'Inter, Arial, sans-serif' }} />
        </Grid>
      </Grid>
      <Paper elevation={0} sx={{  border: '1px solid #E5E7EB', borderRadius: 2, mt: 2, bgcolor: '#fff', fontFamily: 'Inter, Arial, sans-serif' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 3, pt: 2, pb: 1 }}>
          <Typography variant="h6" sx={{ color: '#00205b', fontWeight: 600, flex: 1, fontFamily: 'Segoe UI Semibold, Segoe UI, Arial, sans-serif', fontSize: '1.25rem' }}>
            Insight & Intelligence
          </Typography>
          <IconButton onClick={() => setInsightOpen((open) => !open)}>
            {insightOpen ? <KeyboardArrowUpIcon sx={{ color: '#00205b' }} /> : <KeyboardArrowDownIcon sx={{ color: '#00205b' }} />}
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: '#E5E7EB' }} />
        <Collapse in={insightOpen}>
          <Box sx={{ p: 3, pt: 2 }}>
            <Grid container spacing={3}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Grid item xs={12} sm={6} md={2.4} key={i}>
                  <Paper elevation={3} sx={{ p: 2.5, minHeight: 50, borderRadius: 2, border: '1px solid #E5E7EB', boxShadow: '0 2px 8px 0 rgba(16,30,54,0.10)', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Inter, Arial, sans-serif' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.143rem', color: '#00205b', mb: 0.5, fontFamily: 'Inter, Arial, sans-serif' }}>
                      Title
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '0.857rem', color: '#6B7280', fontFamily: 'Inter, Arial, sans-serif' }}>
                      Subtitle
                    </Typography>
                  </Paper>
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={2.4} key={5}>
                <Paper elevation={3} sx={{ p: 2.5, minHeight: 50, borderRadius: 2, border: '1px solid #E5E7EB', boxShadow: '0 2px 8px 0 rgba(16,30,54,0.10)', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Inter, Arial, sans-serif' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.143rem', color: '#00205b', mb: 0.5, fontFamily: 'Inter, Arial, sans-serif' }}>
                    Title
                  </Typography>
                  <Typography sx={{ fontWeight: 400, fontSize: '0.857rem', color: '#6B7280', fontFamily: 'Inter, Arial, sans-serif' }}>
                    Subtitle
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Collapse>
      </Paper>
      <Box mt={4}>
        <CurrentList />
      </Box>
    </Box>
  );
};

export default FormSection; 