import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { alpha } from '@mui/material/styles';

import { StyledCard, SearchBar, ActionButton } from '../../styles/styledComponents';
import { StatusChip } from '../../styles/styledComponents';
import { exportToPDF } from '../../utils/pdfExport';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import ErrorIcon from '@mui/icons-material/Error';

const DataTable = ({ 
  title, 
  data, 
  columns, 
  type, 
  extraButtons, 
  onAdd,
  onViewDetails,
  onBlockUser,
  onDeleteUser,
  onEditContact,
  onOpenDisputeChat,
  hasPermission = {},
  showSearch = true,
  showStatusFilter = false,
  isMobile = false
}) => {
  const [localSearch, setLocalSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredData = data.filter(item => {
    const searchable = columns.map(col => {
      const value = typeof col.render === 'function' 
        ? col.render(item) 
        : item[col.key];
      return String(value || '').toLowerCase();
    }).join(' ');
    
    const matchesSearch = searchable.includes(localSearch.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status?.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleExport = () => {
    const exportColumns = columns.map(col => ({
      key: col.key,
      header: col.label
    }));
    exportToPDF(filteredData, `${title} Report`, exportColumns);
  };

  const statusOptions = ['all', 'active', 'pending', 'completed', 'inactive', 'cancelled', 'suspended', 'investigating', 'resolved'];

  return (
    <StyledCard>
      {/* Header */}
      <Box sx={{ 
        p: { xs: 1.5, sm: 2, md: 2.5 }, 
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        bgcolor: '#FFFFFF'
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'stretch', sm: 'center' }, 
          gap: { xs: 1.5, sm: 2 }, 
          mb: 2 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: '#1E293B' }}>
              {title}
            </Typography>
            <Chip 
              label={`${data.length} records`} 
              size="small" 
              sx={{ bgcolor: alpha('#0025DD', 0.08), color: '#0025DD', fontWeight: 600 }} 
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {onAdd && (
              <ActionButton
                variant="contained"
                startIcon={<AddIcon />}
                onClick={onAdd}
                sx={{ bgcolor: '#0025DD', '&:hover': { bgcolor: '#001DB0' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
              >
                Add New
              </ActionButton>
            )}
            {extraButtons}
            <ActionButton
              variant="outlined"
              startIcon={<FileDownloadIcon />}
              onClick={handleExport}
              sx={{ borderColor: '#0025DD', color: '#0025DD', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
            >
              Export
            </ActionButton>
          </Box>
        </Box>
        
        {/* Search and Filters */}
        {showSearch && (
          <Box sx={{ display: 'flex', gap: 1.5, flexDirection: { xs: 'column', sm: 'row' } }}>
            <SearchBar
              fullWidth
              size="small"
              placeholder={`Search ${title.toLowerCase()}...`}
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                setPage(0);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#94A3B8' }} />
                  </InputAdornment>
                ),
              }}
              sx={{ flex: 1 }}
            />
            {showStatusFilter && (
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(0);
                  }}
                  label="Status"
                >
                  {statusOptions.map(opt => (
                    <MenuItem key={opt} value={opt}>
                      {opt === 'all' ? 'All Statuses' : opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Box>
        )}
      </Box>

      {/* Table */}
      <TableContainer sx={{ 
        overflowX: 'auto',
        '&::-webkit-scrollbar': { height: '6px' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: '3px' }
      }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ bgcolor: '#F8FAFC' }}>
              <TableCell sx={{ fontWeight: 700, fontSize: { xs: '0.65rem', sm: '0.75rem' }, color: '#64748B', textTransform: 'uppercase' }}>
                #
              </TableCell>
              {columns.map((col) => (
                <TableCell 
                  key={col.key} 
                  sx={{ 
                    fontWeight: 700, 
                    fontSize: { xs: '0.65rem', sm: '0.75rem' }, 
                    color: '#64748B',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
              <TableCell sx={{ fontWeight: 700, fontSize: { xs: '0.65rem', sm: '0.75rem' }, color: '#64748B', textTransform: 'uppercase' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center" sx={{ py: { xs: 4, sm: 6 } }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <ErrorIcon sx={{ color: '#94A3B8', fontSize: { xs: 36, sm: 48 } }} />
                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                      No records found
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Try adjusting your search or filter criteria
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, index) => (
                <TableRow key={item.id} hover>
                  <TableCell sx={{ color: '#94A3B8', fontSize: '0.8rem' }}>
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell key={col.key} sx={{ maxWidth: { xs: 120, sm: 180, md: 250 }, whiteSpace: 'nowrap' }}>
                      {col.render ? col.render(item) : (
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          {item[col.key] || 'N/A'}
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <Tooltip title="View Details" arrow>
                        <IconButton 
                          size="small" 
                          onClick={() => onViewDetails?.(item, type)}
                          sx={{ bgcolor: alpha('#0025DD', 0.05) }}
                        >
                          <VisibilityIcon fontSize="small" sx={{ color: '#0025DD' }} />
                        </IconButton>
                      </Tooltip>
                      {type === 'dispute' && hasPermission.canManageDisputes && (
                        <Tooltip title="Open Chat" arrow>
                          <IconButton 
                            size="small"
                            onClick={() => onOpenDisputeChat?.(item)}
                            sx={{ bgcolor: alpha('#6366F1', 0.05) }}
                          >
                            <ChatIcon fontSize="small" sx={{ color: '#6366F1' }} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {(type === 'rider' || type === 'contact' || type === 'group') && hasPermission.canManageRiders && (
                        <>
                          {(type === 'rider' || type === 'group') && (
                            <Tooltip title={item.status === 'active' ? 'Block' : 'Unblock'} arrow>
                              <IconButton 
                                size="small"
                                onClick={() => onBlockUser?.(item, type)}
                                sx={{ bgcolor: alpha(item.status === 'active' ? '#EF4444' : '#10B981', 0.05) }}
                              >
                                <BlockIcon fontSize="small" sx={{ color: item.status === 'active' ? '#EF4444' : '#10B981' }} />
                              </IconButton>
                            </Tooltip>
                          )}
                          {type === 'contact' && (
                            <Tooltip title="Edit" arrow>
                              <IconButton 
                                size="small"
                                onClick={() => onEditContact?.(item)}
                                sx={{ bgcolor: alpha('#F59E0B', 0.05) }}
                              >
                                <EditIcon fontSize="small" sx={{ color: '#F59E0B' }} />
                              </IconButton>
                            </Tooltip>
                          )}
                          <Tooltip title="Delete" arrow>
                            <IconButton 
                              size="small"
                              onClick={() => onDeleteUser?.(item, type)}
                              sx={{ bgcolor: alpha('#EF4444', 0.05) }}
                            >
                              <DeleteIcon fontSize="small" sx={{ color: '#EF4444' }} />
                            </IconButton>
                          </Tooltip>
                        </>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25, 50]}
        labelRowsPerPage="Rows:"
        sx={{
          borderTop: '1px solid rgba(0,0,0,0.06)',
          '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': { fontSize: { xs: '0.7rem', sm: '0.8rem' } },
        }}
      />
    </StyledCard>
  );
};

export default DataTable;