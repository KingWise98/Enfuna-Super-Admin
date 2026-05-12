import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { StyledCard } from '../../styles/styledComponents';
import { WEEKLY_TRIPS_DATA, MONTHLY_REVENUE_DATA, STATUS_DISTRIBUTION, PAYMENT_METHODS_DATA, DISPUTE_STATUS_DATA, AGENT_PERFORMANCE_DATA } from '../../utils/constants';
import { formatCurrency } from '../../utils/helpers';

const AnalyticsTab = () => {
  const [dateFilter, setDateFilter] = useState({ type: 'all' });

  const applyDateFilter = (type) => {
    setDateFilter({ type });
  };

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#1E293B' }}>
        Analytics & Insights
      </Typography>
      
      {/* Filter Row */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant={dateFilter.type === 'week' ? 'contained' : 'outlined'}
          onClick={() => applyDateFilter('week')}
          size="small"
        >
          This Week
        </Button>
        <Button
          variant={dateFilter.type === 'month' ? 'contained' : 'outlined'}
          onClick={() => applyDateFilter('month')}
          size="small"
        >
          This Month
        </Button>
        <Button
          variant={dateFilter.type === 'all' ? 'contained' : 'outlined'}
          onClick={() => applyDateFilter('all')}
          size="small"
        >
          All Time
        </Button>
      </Box>
      
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} lg={8}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="h6" fontWeight="bold">Revenue Trend</Typography>
              <Typography variant="caption" color="text.secondary">Daily revenue breakdown for selected period</Typography>
            </Box>
            <Box sx={{ p: 2, height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WEEKLY_TRIPS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `UGX ${value.toLocaleString()}`} />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" stroke="#0025DD" fill="#0025DD" fillOpacity={0.1} name="Revenue (UGX)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Monthly Profit Chart */}
        <Grid item xs={12} lg={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="h6" fontWeight="bold">Monthly Profit</Typography>
            </Box>
            <Box sx={{ p: 2, height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MONTHLY_REVENUE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `UGX ${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="profit" fill="#10B981" name="Profit" />
                  <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Status Distribution */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="h6" fontWeight="bold">Rider Status Distribution</Typography>
            </Box>
            <Box sx={{ p: 2, height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={STATUS_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {STATUS_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Payment Methods */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="h6" fontWeight="bold">Payment Methods</Typography>
            </Box>
            <Box sx={{ p: 2, height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PAYMENT_METHODS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {PAYMENT_METHODS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Dispute Status */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="h6" fontWeight="bold">Dispute Resolution Status</Typography>
            </Box>
            <Box sx={{ p: 2, height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DISPUTE_STATUS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {DISPUTE_STATUS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Agent Performance */}
        <Grid item xs={12}>
          <StyledCard>
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="h6" fontWeight="bold">Top Agent Performance</Typography>
            </Box>
            <Box sx={{ p: 2, height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={AGENT_PERFORMANCE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#6366F1" />
                  <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="referrals" fill="#6366F1" name="Total Referrals" />
                  <Bar yAxisId="right" dataKey="commission" fill="#10B981" name="Total Commission (UGX)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsTab;