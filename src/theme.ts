import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00205b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6B7280',
    },
    background: {
      default: '#f7f9fb',
      paper: '#fff',
    },
    divider: '#E5E7EB',
    text: {
      primary: '#00205b',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    // Headline-1
    h1: {
      fontWeight: 700,
      fontSize: '2.714rem', // 38px
      lineHeight: '3.214rem', // 45px
      color: '#00205b',
    },
    // Headline-2
    h2: {
      fontWeight: 700,
      fontSize: '2.143rem', // 30px
      lineHeight: '2.714rem', // 38px
      color: '#00205b',
    },
    // Title-1
    h3: {
      fontWeight: 700,
      fontSize: '1.571rem', // 22px
      lineHeight: '2.071rem', // 29px
      color: '#00205b',
    },
    // Title-2
    h4: {
      fontWeight: 700,
      fontSize: '1.286rem', 
      lineHeight: '1.571rem',
      color: '#00205b',
    },
    // Subtitle-1
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.086rem', 
      lineHeight: '1.571rem', 
      color: '#00205b',
    },
    // Subtitle-2
    subtitle2: {
      fontWeight: 600,
      fontSize: '0.943rem', 
      lineHeight: '1.571rem',
      color: '#00205b',
    },
    // Body-1
    body1: {
      fontWeight: 400,
      fontSize: '0.857rem', 
      lineHeight: '1rem', 
      color: '#00205b',
    },
    // Body-2
    body2: {
      fontWeight: 400,
      fontSize: '0.714rem', // 10px
      lineHeight: '1rem', // 14px
      color: '#00205b',
    },
    // Caption-1
    caption: {
      fontWeight: 400,
      fontSize: '0.571rem', 
      lineHeight: '1rem', 
      color: '#6B7280',
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.85rem',
          minHeight: '28px',
          minWidth: '28px',
          padding: '4px 12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
          width: '28px',
          height: '28px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
        },
      },
    },
  },
});


export default theme; 