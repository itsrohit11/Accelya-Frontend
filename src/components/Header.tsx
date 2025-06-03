import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Menu, MenuItem, Button, Badge, Modal, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const products = [
  'Flight Booking',
  'Loyalty Program',
  'Ancillary Services',
  'Revenue Management',
  'Cargo Management',
  'Airport Services',
  'In-flight Entertainment',
  'Crew Management',
  'E-Ticketing',
  'Customer Analytics',
];

const customers = [
  'Delta Air Lines',
  'American Airlines',
  'United Airlines',
  'Emirates',
  'Lufthansa',
  'Air France',
  'Singapore Airlines',
  'Qatar Airways',
  'British Airways',
  'Turkish Airlines',
];

const menuPaperProps = {
  sx: {
    bgcolor: '#00205b',
    color: '#fff',
    mt: 1,
    borderRadius: 2,
    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
    minWidth: 220,
    '& .MuiMenuItem-root': {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      '&:hover': {
        bgcolor: '#00205b',
        color: '#90caf9',
      },
      transition: 'all 0.2s',
    },
  },
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  bgcolor: 'rgba(0,0,0,0.25)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1300,
};

const searchBarStyle = {
  width: 400,
  bgcolor: '#fff',
  borderRadius: 3,
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
  p: 2,
  display: 'flex',
  alignItems: 'center',
};

const Header = () => {
  const [anchorProducts, setAnchorProducts] = useState<null | HTMLElement>(null);
  const [anchorCustomers, setAnchorCustomers] = useState<null | HTMLElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [anchorProfile, setAnchorProfile] = useState<null | HTMLElement>(null);
  const [anchorNotif, setAnchorNotif] = useState<null | HTMLElement>(null);
  const notifications = [
    'System update available',
    'New user registered',
    'Server backup completed',
    'Password changed successfully',
    'New support ticket received',
    'Monthly report is ready',
    'Unusual login detected',
    'Subscription renewed',
    'Database optimized',
    'API limit reached',
  ];

  const handleMenuOpen = (setter: any) => (event: React.MouseEvent<HTMLElement>) => {
    setter(event.currentTarget);
  };
  const handleMenuClose = (setter: any) => () => {
    setter(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#00205b', boxShadow: 'none', height: 54, justifyContent: 'center' }}>
      <Toolbar sx={{ minHeight: 54, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, fontStyle: 'italic', mr: 3, fontFamily: 'Nunito Sans, Arial, sans-serif', fontSize: '1.35rem', letterSpacing: 1, color: '#fff', display: 'flex', alignItems: 'center', height: 1 }}>accelya</Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 1.5, alignItems: 'center', height: 1 }}>
          {/* Products Dropdown */}
          <Box>
            <Button
              endIcon={<KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 18, ml: 0.5 }} />}
              sx={{ color: '#fff', textTransform: 'none', fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem', px: 0, minWidth: 0, mr: 2, '&:hover': { bgcolor: 'transparent' } }}
              onClick={handleMenuOpen(setAnchorProducts)}
            >
              Products
            </Button>
            <Menu
              anchorEl={anchorProducts}
              open={Boolean(anchorProducts)}
              onClose={handleMenuClose(setAnchorProducts)}
              PaperProps={menuPaperProps}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              elevation={8}
            >
              {products.map((product) => (
                <MenuItem key={product}>{product}</MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="body1" sx={{ cursor: 'pointer', color: '#fff', fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem', mr: 2 }}>Services</Typography>
          {/* Our Customers Dropdown */}
          <Box>
            <Button
              endIcon={<KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 18, ml: 0.5 }} />}
              sx={{ color: '#fff', textTransform: 'none', fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem', px: 0, minWidth: 0, mr: 2, '&:hover': { bgcolor: 'transparent' } }}
              onClick={handleMenuOpen(setAnchorCustomers)}
            >
              Our customers
            </Button>
            <Menu
              anchorEl={anchorCustomers}
              open={Boolean(anchorCustomers)}
              onClose={handleMenuClose(setAnchorCustomers)}
              PaperProps={menuPaperProps}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              elevation={8}
            >
              {customers.map((customer) => (
                <MenuItem key={customer}>{customer}</MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: 1 }}>
          <IconButton
            sx={{ border: '1.5px solid #90caf9', color: '#fff', width: 32, height: 32, bgcolor: searchOpen ? '#00205b' : 'inherit' }}
            onClick={() => setSearchOpen((open) => !open)}
          >
            <SearchIcon sx={{ fontSize: 20 }} />
          </IconButton>
          {searchOpen && (
            <Paper sx={{ bgcolor: 'transparent', borderRadius: 3, boxShadow: 'none', p: 0.5, pl: 1, pr: 0.5, display: 'flex', alignItems: 'center', minWidth: 140, maxWidth: 180, height: 32, border: '1.5px solid #fff' }}>
              <InputBase
                autoFocus
                placeholder="Search..."
                sx={{ flex: 1, fontSize: '0.95rem', fontFamily: 'Segoe UI, Arial, sans-serif', color: '#fff', '::placeholder': { color: '#fff', opacity: 1 } }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton onClick={() => setSearchOpen(false)} size="small" sx={{ p: 0.5, ml: 0.5, height: 24, width: 24 }}>
                <CloseIcon sx={{ color: '#fff', fontSize: 18 }} />
              </IconButton>
            </Paper>
          )}
          <Badge badgeContent={3} color="success" overlap="circular" sx={{ mr: 1.2 }}>
            <IconButton
              sx={{ border: '1.5px solid #90caf9', color: '#fff', width: 32, height: 32, bgcolor: anchorNotif ? '#00205b' : 'inherit' }}
              onClick={e => setAnchorNotif(e.currentTarget)}
            >
              <NotificationsIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Badge>
          <Menu
            anchorEl={anchorNotif}
            open={Boolean(anchorNotif)}
            onClose={() => setAnchorNotif(null)}
            PaperProps={{ sx: { mt: 1, borderRadius: 2, minWidth: 300, maxWidth: 340, bgcolor: '#00205b', color: '#fff', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)', p: 1 } }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            elevation={8}
          >
            <Box sx={{ p: 1, pb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#fff' }}>Notifications</Typography>
              {notifications.slice(0, 5).map((note, idx) => (
                <Box key={idx} sx={{ mb: 1, px: 1, py: 0.5, borderRadius: 1, bgcolor: '#17407b', color: '#fff', fontSize: '0.97rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                  {note}
                </Box>
              ))}
              {notifications.length === 0 && (
                <Typography variant="body2" sx={{ color: '#bfc9da' }}>No notifications</Typography>
              )}
            </Box>
          </Menu>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={e => setAnchorProfile(e.currentTarget)}>
            <Avatar sx={{ width: 28, height: 28, ml: 1 }}>CH</Avatar>
            <Box ml={1}>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '1rem' }}>Courtney Henry</Typography>
              <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', display: 'block' }}>Administrator</Typography>
            </Box>
            <KeyboardArrowDownIcon sx={{ color: '#fff', ml: 0.5, fontSize: 20 }} />
          </Box>
          <Menu
            anchorEl={anchorProfile}
            open={Boolean(anchorProfile)}
            onClose={() => setAnchorProfile(null)}
            PaperProps={menuPaperProps}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            elevation={8}
          >
            <MenuItem onClick={() => setAnchorProfile(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorProfile(null)}>Settings</MenuItem>
            <MenuItem onClick={() => setAnchorProfile(null)}>Support</MenuItem>
            <MenuItem onClick={() => setAnchorProfile(null)}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 