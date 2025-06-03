import React, { useState } from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, IconButton, Chip, Select, MenuItem, Button, Divider, Menu, SelectChangeEvent, InputBase, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const statusStyles: Record<string, any> = {
  Analysis: { bg: '#e6eefc', dot: '#3b82f6', text: '#00205b' },
  Complete: { bg: '#e6f4ea', dot: '#34d399', text: '#065f46' },
  'In progress': { bg: '#fef7e0', dot: '#fbbf24', text: '#92400e' },
  Blocked: { bg: '#fde8e8', dot: '#f87171', text: '#991b1b' },
  Disabled: { bg: '#f3f4f6', dot: '#9ca3af', text: '#6b7280' },
};

const rows = [
  { type: 'Reservation System', code: '123,456,789.08', country: 'USA', currency: '123,456,789.08', status: 'Analysis' },
  { type: 'Revenue Management System', code: '123,456,789.08', country: 'Spain', currency: '123,456,789.08', status: 'Complete' },
  { type: 'Cargo Management System', code: '123,456,789.08', country: 'USA', currency: '123,456,789.08', status: 'Complete' },
  { type: 'Loyalty Program', code: '123,456,789.08', country: 'Spain', currency: '123,456,789.08', status: 'Analysis' },
  { type: 'Seats', code: '123,456,789.08', country: 'Germany', currency: '123,456,789.08', status: 'In progress' },
  { type: 'Luggage', code: '123,456,789.08', country: 'Spain', currency: '123,456,789.08', status: 'Blocked' },
  { type: 'Check-in', code: '123,456,789.08', country: 'Paris', currency: '123,456,789.08', status: 'Blocked' },
  { type: 'Cargo management...', code: '123,456,789.08', country: 'Paris', currency: '123,456,789.08', status: 'In progress' },
  { type: 'Business Intelligence', code: '123,456,789.08', country: 'Japan', currency: '123,456,789.08', status: 'Disabled' },
  { type: 'E-Commerce Platform', code: '123,456,789.08', country: 'Canada', currency: '123,456,789.08', status: 'Analysis' },
];

const cellSx = {
  border: '1px solid #E5E7EB',
  borderLeft: 'none',
  borderRight: 'none',
  px: 2,
  py: 0.5,
  bgcolor: '#fff',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  fontWeight: 600,
};

const headerSx = {
  ...cellSx,
  bgcolor: '#f7f9fb',
  fontWeight: 600,
  fontSize: '0.743rem',
  color: '#00205b',
  borderTop: 'none',
  py: 0.5,
  fontFamily: 'Segoe UI, Arial, sans-serif',
  borderBottom: '2px solid #E5E7EB',
};

const typeIcons: Record<string, React.ReactNode> = {
  'Reservation System': <ApartmentOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Revenue Management System': <AccountBalanceOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Cargo Management System': <Inventory2OutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Loyalty Program': <EmojiEventsOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Seats': <EventSeatOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Luggage': <WorkOutlineIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Check-in': <FlightTakeoffOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Cargo management...': <Inventory2OutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'Business Intelligence': <BarChartOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
  'E-Commerce Platform': <ShoppingCartOutlinedIcon sx={{ fontSize: 16, color: '#000', mr: 0.5 }} />,
};

const statusOptions = ['Analysis', 'Complete', 'In progress', 'Blocked', 'Disabled'];

const CurrentList = () => {
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const openFilter = Boolean(filterAnchorEl);
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };
  const handleStatusSelect = (status: string) => {
    setStatusFilter(status);
    setFilterAnchorEl(null);
  };
  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(Number(event.target.value));
  };
  const filteredRows = statusFilter ? rows.filter(row => row.status === statusFilter) : rows;
  const totalRows = rows.length;
  const displayRows = Math.min(rowsPerPage, totalRows);
  const totalPages = 20;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [newOpen, setNewOpen] = useState(false);
  const [newForm, setNewForm] = useState({
    type: '',
    code: '',
    country: '',
    currency: '',
    status: '',
  });
  const handleNewChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setNewForm(f => ({ ...f, [name!]: value }));
  };
  const handleNewSubmit = () => {
    // Add submit logic here
    setNewOpen(false);
  };

  return (
    <Paper sx={{ p: 3, mb: 3, boxShadow: 'none', border: '1px solid #E5E7EB', borderRadius: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h3" sx={{ color: '#00205b', fontWeight: 600, fontFamily: 'Segoe UI Semibold, Segoe UI, Arial, sans-serif', fontSize: '1.6rem', lineHeight: '2.1rem' }}>Current List</Typography>
        <Box display="flex" alignItems="center" gap={1}>
          {searchOpen && (
            <Paper sx={{ bgcolor: '#fff', borderRadius: 6, boxShadow: '0 2px 8px 0 rgba(16,30,54,0.10)', p: 0.5, pl: 2, pr: 1, display: 'flex', alignItems: 'center', minWidth: 180, maxWidth: 260 }}>
              <InputBase
                autoFocus
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search..."
                sx={{ flex: 1, fontSize: '0.9rem', fontFamily: 'Inter, Arial, sans-serif', color: '#00205b' }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton onClick={() => setSearchOpen(false)} size="small">
                <CloseIcon sx={{ color: '#00205b' }} />
              </IconButton>
            </Paper>
          )}
          <IconButton size="small" onClick={() => setSearchOpen(open => !open)}><SearchIcon /></IconButton>
          <IconButton size="small" onClick={handleFilterClick}><FilterListIcon /></IconButton>
          <Menu anchorEl={filterAnchorEl} open={openFilter} onClose={handleFilterClose}>
            <MenuItem selected={statusFilter === ''} onClick={() => handleStatusSelect('')}>All</MenuItem>
            {statusOptions.map(option => (
              <MenuItem key={option} selected={statusFilter === option} onClick={() => handleStatusSelect(option)}>{option}</MenuItem>
            ))}
          </Menu>
          <Button variant="contained" startIcon={<AddIcon sx={{ fontSize: 16 }} />} sx={{ ml: 1, bgcolor: '#00205b', textTransform: 'none', borderRadius: 2, boxShadow: 0, fontSize: '0.95rem', minHeight: 28, minWidth: 28 }} onClick={() => setNewOpen(true)}>New</Button>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ ...headerSx, fontSize: '1.05rem', fontWeight: 600, borderBottom: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Type</Typography></TableCell>
              <TableCell align="left" sx={{ ...headerSx, fontSize: '1.05rem', fontWeight: 600, borderBottom: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Numeric code</Typography></TableCell>
              <TableCell align="left" sx={{ ...headerSx, fontSize: '1.05rem', fontWeight: 600, borderBottom: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Country Name</Typography></TableCell>
              <TableCell align="left" sx={{ ...headerSx, fontSize: '1.05rem', fontWeight: 600, borderBottom: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Currency</Typography></TableCell>
              <TableCell align="left" sx={{ ...headerSx, fontSize: '1.05rem', fontWeight: 600, borderBottom: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Status</Typography></TableCell>
              <TableCell align="center" sx={{ ...headerSx, fontSize: '1.05rem', fontWeight: 600, borderBottom: 'none' }}><Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, idx) => (
              <TableRow key={idx} sx={idx === 0 ? { '& td': { borderTop: '8px solid #f7f9fb' } } : {}}>
                <TableCell align="left" sx={cellSx}>
                  <Box display="flex" alignItems="center">
                    {typeIcons[row.type]}
                    <Typography variant="body2" sx={{ color: '#000', fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem' }}>{row.type}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="left" sx={cellSx}><Typography variant="body2" sx={{ color: '#000', fontWeight: 400, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem' }}>{row.code}</Typography></TableCell>
                <TableCell align="left" sx={cellSx}><Typography variant="body2" sx={{ color: '#000', fontWeight: 400, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem' }}>{row.country}</Typography></TableCell>
                <TableCell align="left" sx={cellSx}><Typography variant="body2" sx={{ color: '#000', fontWeight: 400, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.95rem' }}>{row.currency}</Typography></TableCell>
                <TableCell align="left" sx={cellSx}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 0.8, py: 0.2, borderRadius: 999, bgcolor: statusStyles[row.status].bg }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: statusStyles[row.status].dot, mr: 0.5 }} />
                    <Typography sx={{ color: statusStyles[row.status].text, fontWeight: 400, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '0.85rem' }}>{row.status}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <IconButton size="small" sx={{ color: '#00205b', p: 0.5 }}><EditIcon fontSize="small" /></IconButton>
                    <IconButton size="small" sx={{ color: '#00205b', p: 0.5 }}><ContentCopyIcon fontSize="small" /></IconButton>
                    <IconButton size="small" sx={{ color: '#00205b', p: 0.5 }}><DeleteIcon fontSize="small" /></IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination area */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} sx={{ bgcolor: '#f7f9fb', borderRadius: 3, px: 1, py: 0.5, fontSize: '0.7rem' }}>
        <Typography variant="caption" sx={{ color: '#6B7280', fontWeight: 400, fontSize: '0.7rem' }}>
          Records per page
          <Select
            size="small"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            IconComponent={KeyboardArrowDownIcon}
            sx={{ mx: 1, minWidth: 48, fontSize: '0.7rem' }}
            MenuProps={{ PaperProps: { sx: { fontSize: '0.7rem' } } }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
          {rowsPerPage} of 20
        </Typography>
        <Box display="flex" alignItems="center" gap={1} sx={{ bgcolor: '#f7f9fb', borderRadius: 3, px: 2, py: 1 }}>
          <IconButton
            size="small"
            sx={{ border: '1.5px solid #bfc9da', bgcolor: '#fff', borderRadius: '50%', width: 28, height: 28 }}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ChevronLeftIcon fontSize="small" sx={{ color: '#00205b' }} />
          </IconButton>
          {[1, 2, 3, 4, 5].map((page) => (
            <IconButton
              key={page}
              size="small"
              onClick={() => handlePageChange(page)}
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                bgcolor: currentPage === page ? '#00205b' : 'transparent',
                color: currentPage === page ? '#fff' : '#00205b',
                border: currentPage === page ? 'none' : 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                mx: 0.1,
                transition: 'background 0.2s',
                '&:hover': {
                  bgcolor: currentPage === page ? '#00205b' : '#e3e8f0',
                },
              }}
            >
              {page}
            </IconButton>
          ))}
          <Typography variant="caption" sx={{ mx: 1, color: '#00205b', fontWeight: 700, fontSize: '0.9rem' }}>...</Typography>
          <IconButton
            size="small"
            onClick={() => handlePageChange(totalPages)}
            sx={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              bgcolor: currentPage === totalPages ? '#00205b' : 'transparent',
              color: currentPage === totalPages ? '#fff' : '#00205b',
              border: currentPage === totalPages ? 'none' : 'none',
              fontWeight: 700,
              fontSize: '0.9rem',
              mx: 0.1,
              transition: 'background 0.2s',
              '&:hover': {
                bgcolor: currentPage === totalPages ? '#00205b' : '#e3e8f0',
              },
            }}
          >
            {totalPages}
          </IconButton>
          <IconButton
            size="small"
            sx={{ border: '1.5px solid #bfc9da', bgcolor: '#fff', borderRadius: '50%', width: 28, height: 28 }}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ChevronRightIcon fontSize="small" sx={{ color: '#00205b' }} />
          </IconButton>
        </Box>
      </Box>
      <Dialog open={newOpen} onClose={() => setNewOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600, fontFamily: 'Segoe UI, Arial, sans-serif', color: '#00205b' }}>Add New Entry</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          <TextField
            select
            size="small"
            label="Type"
            name="type"
            value={newForm.type}
            onChange={handleNewChange}
            fullWidth
            sx={{ fontSize: '0.95rem' }}
          >
            {Object.keys(typeIcons).map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            label="Numeric code"
            name="code"
            value={newForm.code}
            onChange={handleNewChange}
            fullWidth
            sx={{ fontSize: '0.95rem' }}
          />
          <TextField
            size="small"
            label="Country Name"
            name="country"
            value={newForm.country}
            onChange={handleNewChange}
            fullWidth
            sx={{ fontSize: '0.95rem' }}
          />
          <TextField
            size="small"
            label="Currency"
            name="currency"
            value={newForm.currency}
            onChange={handleNewChange}
            fullWidth
            sx={{ fontSize: '0.95rem' }}
          />
          <TextField
            select
            size="small"
            label="Status"
            name="status"
            value={newForm.status}
            onChange={handleNewChange}
            fullWidth
            sx={{ fontSize: '0.95rem' }}
          >
            {statusOptions.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewOpen(false)} sx={{ textTransform: 'none' }}>Cancel</Button>
          <Button onClick={handleNewSubmit} variant="contained" sx={{ bgcolor: '#00205b', textTransform: 'none' }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default CurrentList; 