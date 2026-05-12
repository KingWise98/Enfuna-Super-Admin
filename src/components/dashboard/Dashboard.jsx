import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';

import { StyledCard, DashboardCard } from '../../styles/styledComponents';
import StatsCard from './StatsCard';
import GreetingHeader from './GreetingHeader';
import { StatusChip } from '../../styles/styledComponents';
import { formatCurrency } from '../../utils/helpers';

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Dashboard = ({ 
  dashboardStats, 
  trips, 
  disputes, 
  wallets, 
  groups,
  onViewDetails,
  onTabChange,
  onRefresh,
  refreshing,
  user,
  isMobile
}) => {
  const statsCards = [
    { 
      label: 'Total Riders', 
      value: dashboardStats.totalRiders.toLocaleString(), 
      subValue: `${dashboardStats.activeRiders} active`, 
      icon: 'MotorcycleIcon', 
      gradient: 'linear-gradient(135deg, #0025DD 0%, #4F46E5 100%)',
      change: '+12%',
      changeType: 'up'
    },
    { 
      label: 'Total Revenue', 
      value: `UGX ${formatCurrency(dashboardStats.totalRevenue)}`, 
      subValue: `Today: UGX ${formatCurrency(dashboardStats.todayRevenue)}`, 
      icon: 'AccountBalanceWalletIcon', 
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      change: '+18%',
      changeType: 'up'
    },
    { 
      label: 'Total Trips', 
      value: dashboardStats.totalTrips.toLocaleString(), 
      subValue: `${dashboardStats.todayTrips} today`, 
      icon: 'DirectionsBikeIcon', 
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      change: '+8%',
      changeType: 'up'
    },
    { 
      label: 'Active Groups', 
      value: dashboardStats.activeGroups, 
      subValue: `Pool: UGX ${formatCurrency(dashboardStats.groupPool)}`, 
      icon: 'GroupsIcon', 
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      change: '+5%',
      changeType: 'up'
    },
    { 
      label: 'Total Wallets', 
      value: dashboardStats.totalWallets.toLocaleString(), 
      subValue: `UGX ${formatCurrency(dashboardStats.totalWalletBalance)} balance`, 
      icon: 'AccountBalanceIcon', 
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      change: '+15%',
      changeType: 'up'
    },
    { 
      label: 'Total Contacts', 
      value: dashboardStats.totalContacts.toLocaleString(), 
      subValue: `${dashboardStats.activeContacts} active`, 
      icon: 'ContactsIcon', 
      gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
      change: '+10%',
      changeType: 'up'
    },
    { 
      label: 'Rider Agents', 
      value: dashboardStats.totalAgents, 
      subValue: `${dashboardStats.activeAgents} active`, 
      icon: 'PersonAddIcon', 
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
      change: '+22%',
      changeType: 'up'
    },
    { 
      label: 'Open Disputes', 
      value: dashboardStats.pendingDisputes, 
      subValue: `${dashboardStats.resolvedDisputes} resolved`, 
      icon: 'SupportAgentIcon', 
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      change: '+8%',
      changeType: 'up'
    },
  ];

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      {/* Welcome Header */}
      <GreetingHeader user={user} onRefresh={onRefresh} refreshing={refreshing} isMobile={isMobile} />
      
      {/* Key Metrics */}
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: { xs: 1.5, sm: 2 }, color: '#1E293B', fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
          Key Performance Metrics
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
          {statsCards.map((stat, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <StatsCard stat={stat} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Quick Overview Cards */}
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        {/* Recent Trips */}
        <Grid item xs={12} lg={6}>
          <StyledCard>
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DirectionsBikeIcon sx={{ color: '#0025DD', fontSize: { xs: 20, sm: 24 } }} />
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' } }}>
                  Recent Trips
                </Typography>
              </Box>
              <Button 
                size="small" 
                onClick={() => onTabChange(2)} 
                endIcon={<ArrowForwardIcon />}
                sx={{ color: '#0025DD', textTransform: 'none', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
              >
                View All
              </Button>
            </Box>
            <TableContainer sx={{ maxHeight: { xs: 300, sm: 350, md: 400 } }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Rider</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Route</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="right">Fare</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trips.slice(0, 5).map((trip) => (
                    <TableRow key={trip.id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, bgcolor: '#0025DD', fontSize: '0.7rem' }}>
                            {trip.rider_name?.charAt(0)}
                          </Avatar>
                          <Typography variant="body2" noWrap sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                            {trip.rider_name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ 
                          maxWidth: { xs: 80, sm: 120, md: 150 }, 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap',
                          fontSize: { xs: '0.7rem', sm: '0.8rem' }
                        }}>
                          {trip.pickup_location}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          UGX {formatCurrency(trip.trip_fare)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <StatusChip status={trip.status} label={trip.status} size="small" />
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="View Details" arrow>
                          <IconButton 
                            size="small" 
                            onClick={() => onViewDetails(trip, 'trip')}
                            sx={{ bgcolor: alpha('#0025DD', 0.05) }}
                          >
                            <VisibilityIcon fontSize="small" sx={{ color: '#0025DD' }} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>

        {/* Recent Disputes */}
        <Grid item xs={12} lg={6}>
          <StyledCard>
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SupportAgentIcon sx={{ color: '#EF4444', fontSize: { xs: 20, sm: 24 } }} />
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' } }}>
                  Recent Disputes
                </Typography>
              </Box>
              <Button 
                size="small" 
                onClick={() => onTabChange(9)} 
                endIcon={<ArrowForwardIcon />}
                sx={{ color: '#EF4444', textTransform: 'none', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
              >
                View All
              </Button>
            </Box>
            <TableContainer sx={{ maxHeight: { xs: 300, sm: 350, md: 400 } }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Ticket #</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Priority</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {disputes.slice(0, 5).map((dispute) => (
                    <TableRow key={dispute.id} hover>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          {dispute.ticket_number}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ 
                          maxWidth: { xs: 100, sm: 150 }, 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap',
                          fontSize: { xs: '0.7rem', sm: '0.8rem' }
                        }}>
                          {dispute.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <StatusChip status={dispute.priority} label={dispute.priority} size="small" />
                      </TableCell>
                      <TableCell>
                        <StatusChip status={dispute.status} label={dispute.status} size="small" />
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="View Details" arrow>
                          <IconButton 
                            size="small" 
                            onClick={() => onViewDetails(dispute, 'dispute')}
                            sx={{ bgcolor: alpha('#EF4444', 0.05) }}
                          >
                            <VisibilityIcon fontSize="small" sx={{ color: '#EF4444' }} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>

        {/* Wallet Balances */}
        <Grid item xs={12} lg={6}>
          <StyledCard>
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountBalanceIcon sx={{ color: '#06B6D4', fontSize: { xs: 20, sm: 24 } }} />
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' } }}>
                  Wallet Balances
                </Typography>
              </Box>
              <Button 
                size="small" 
                onClick={() => onTabChange(6)} 
                endIcon={<ArrowForwardIcon />}
                sx={{ color: '#06B6D4', textTransform: 'none', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
              >
                View All
              </Button>
            </Box>
            <TableContainer sx={{ maxHeight: { xs: 300, sm: 350 } }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Rider</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="right">Balance</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="right">Available</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {wallets.slice(0, 5).map((wallet) => (
                    <TableRow key={wallet.id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, bgcolor: '#06B6D4', fontSize: '0.7rem' }}>
                            {wallet.rider_name?.charAt(0)}
                          </Avatar>
                          <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                            {wallet.rider_name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          UGX {formatCurrency(wallet.balance)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" color="#10B981" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          UGX {formatCurrency(wallet.available_balance)}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="View Details" arrow>
                          <IconButton 
                            size="small" 
                            onClick={() => onViewDetails(wallet, 'wallet')}
                            sx={{ bgcolor: alpha('#06B6D4', 0.05) }}
                          >
                            <VisibilityIcon fontSize="small" sx={{ color: '#06B6D4' }} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>

        {/* Savings Groups */}
        <Grid item xs={12} lg={6}>
          <StyledCard>
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupsIcon sx={{ color: '#8B5CF6', fontSize: { xs: 20, sm: 24 } }} />
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' } }}>
                  Savings Groups
                </Typography>
              </Box>
              <Button 
                size="small" 
                onClick={() => onTabChange(5)} 
                endIcon={<ArrowForwardIcon />}
                sx={{ color: '#8B5CF6', textTransform: 'none', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
              >
                View All
              </Button>
            </Box>
            <TableContainer sx={{ maxHeight: { xs: 300, sm: 350 } }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Group</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>Members</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="right">Pool</TableCell>
                    <TableCell sx={{ fontWeight: 600, bgcolor: '#F8FAFC', fontSize: { xs: '0.7rem', sm: '0.75rem' } }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groups.slice(0, 5).map((group) => (
                    <TableRow key={group.id} hover>
                      <TableCell>
                        <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          {group.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">{group.group_type}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          {group.member_count}/{group.max_members}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" fontWeight="bold" color="#8B5CF6" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                          UGX {formatCurrency(group.total_pool)}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="View Details" arrow>
                          <IconButton 
                            size="small" 
                            onClick={() => onViewDetails(group, 'group')}
                            sx={{ bgcolor: alpha('#8B5CF6', 0.05) }}
                          >
                            <VisibilityIcon fontSize="small" sx={{ color: '#8B5CF6' }} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;