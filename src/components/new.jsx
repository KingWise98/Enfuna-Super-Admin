"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// ==================== MATERIAL UI CORE IMPORTS ====================
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Collapse from '@mui/material/Collapse';
import Skeleton from '@mui/material/Skeleton';

// ==================== MUI ICONS - ORGANIZED BY CATEGORY ====================
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import MotorcycleIcon from '@mui/icons-material/BikeScooterOutlined';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SavingsIcon from '@mui/icons-material/Savings';
import MoneyIcon from '@mui/icons-material/Money';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DownloadIcon from '@mui/icons-material/Download';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import BuildIcon from '@mui/icons-material/Build';
import InsightsIcon from '@mui/icons-material/Insights';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import VerifiedIcon from '@mui/icons-material/Verified';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FlagIcon from '@mui/icons-material/Flag';
import ChurchIcon from '@mui/icons-material/Church';

// PDF Library
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// Chart Libraries
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  Legend, ResponsiveContainer, Area, AreaChart
} from 'recharts';

// ==================== UGANDA PUBLIC HOLIDAYS 2024 ====================
const UGANDA_HOLIDAYS = [
  { month: 1, day: 1, name: "New Year's Day", icon: StarsIcon, color: '#FFD700' },
  { month: 1, day: 26, name: "NRM Liberation Day", icon: FlagIcon, color: '#C8102E' },
  { month: 2, day: 16, name: "Archbishop Janani Luwum Day", icon: ChurchIcon, color: '#800080' },
  { month: 3, day: 8, name: "International Women's Day", icon: CelebrationIcon, color: '#FF69B4' },
  { month: 5, day: 1, name: "Labour Day", icon: CelebrationIcon, color: '#FF4500' },
  { month: 6, day: 3, name: "Uganda Martyrs' Day", icon: ChurchIcon, color: '#8B0000' },
  { month: 6, day: 9, name: "National Heroes' Day", icon: FlagIcon, color: '#FFD700' },
  { month: 10, day: 9, name: "Independence Day", icon: FlagIcon, color: '#000000' },
  { month: 12, day: 25, name: "Christmas Day", icon: StarsIcon, color: '#FF0000' },
  { month: 12, day: 26, name: "Boxing Day", icon: CelebrationIcon, color: '#FFD700' },
];

// ==================== UGANDA DUMMY DATA - COMPREHENSIVE ====================
// Riders Data (Boda Boda)
const DUMMY_RIDERS = [
  { 
    id: 'RDR-KLA-001', 
    full_names: 'John Mukasa', 
    email: 'john.mukasa@gmail.com', 
    phone_number: '+256 772 123456', 
    status: 'active', 
    total_trips: 342, 
    total_earnings: 4500000,
    total_deliveries: 89,
    rating: 4.8,
    created_at: '2024-01-15T08:30:00',
    vehicle_type: 'Boda Boda',
    motorcycle_model: 'Bajaj Boxer 150',
    license_plate: 'UXB 123K',
    rider_type: 'full_time',
    is_verified: true,
    is_agent: true,
    wallet_balance: 450000,
    profile_photo: null,
    stage: 'Kamwokya Stage',
    division: 'Central Division',
    district: 'Kampala'
  },
  { 
    id: 'RDR-KLA-002', 
    full_names: 'Sarah Akello', 
    email: 'sarah.akello@yahoo.com', 
    phone_number: '+256 701 234567', 
    status: 'active', 
    total_trips: 256, 
    total_earnings: 3200000,
    total_deliveries: 45,
    rating: 4.6,
    created_at: '2024-02-20T10:00:00',
    vehicle_type: 'Boda Boda',
    motorcycle_model: 'TVS Star HLX 125',
    license_plate: 'UAA 456B',
    rider_type: 'part_time',
    is_verified: true,
    is_agent: false,
    wallet_balance: 320000,
    profile_photo: null,
    stage: 'Wandegeya Stage',
    division: 'Central Division',
    district: 'Kampala'
  },
  { 
    id: 'RDR-KLA-003', 
    full_names: 'David Ochieng', 
    email: 'david.ochieng@gmail.com', 
    phone_number: '+256 782 345678', 
    status: 'pending', 
    total_trips: 0, 
    total_earnings: 0,
    total_deliveries: 0,
    rating: 0,
    created_at: '2024-03-10T14:00:00',
    vehicle_type: 'Boda Boda',
    motorcycle_model: 'Honda CG 125',
    license_plate: 'UAD 789C',
    rider_type: 'full_time',
    is_verified: false,
    is_agent: false,
    wallet_balance: 0,
    profile_photo: null,
    stage: 'Nakawa Stage',
    division: 'Nakawa Division',
    district: 'Kampala'
  },
  { 
    id: 'RDR-KLA-004', 
    full_names: 'Grace Nambi', 
    email: 'grace.nambi@outlook.com', 
    phone_number: '+256 753 456789', 
    status: 'active', 
    total_trips: 523, 
    total_earnings: 6800000,
    total_deliveries: 156,
    rating: 4.9,
    created_at: '2023-11-05T09:00:00',
    vehicle_type: 'Boda Boda',
    motorcycle_model: 'Yamaha Crypton 115',
    license_plate: 'UAE 012D',
    rider_type: 'full_time',
    is_verified: true,
    is_agent: true,
    wallet_balance: 680000,
    profile_photo: null,
    stage: 'Old Taxi Park Stage',
    division: 'Central Division',
    district: 'Kampala'
  },
  { 
    id: 'RDR-KLA-005', 
    full_names: 'Peter Ssali', 
    email: 'peter.ssali@gmail.com', 
    phone_number: '+256 774 567890', 
    status: 'inactive', 
    total_trips: 89, 
    total_earnings: 1100000,
    total_deliveries: 23,
    rating: 4.2,
    created_at: '2024-01-30T11:00:00',
    vehicle_type: 'Boda Boda',
    motorcycle_model: 'Bajaj CT 100',
    license_plate: 'UAF 345E',
    rider_type: 'part_time',
    is_verified: true,
    is_agent: false,
    wallet_balance: 110000,
    profile_photo: null,
    stage: 'Kawempe Stage',
    division: 'Kawempe Division',
    district: 'Kampala'
  },
  {
    id: 'RDR-KLA-006',
    full_names: 'Aisha Namubiru',
    email: 'aisha.namubiru@gmail.com',
    phone_number: '+256 775 678901',
    status: 'active',
    total_trips: 678,
    total_earnings: 8900000,
    total_deliveries: 201,
    rating: 4.7,
    created_at: '2023-08-15T07:30:00',
    vehicle_type: 'Boda Boda',
    motorcycle_model: 'Honda Ace 110',
    license_plate: 'UAG 678F',
    rider_type: 'full_time',
    is_verified: true,
    is_agent: true,
    wallet_balance: 890000,
    profile_photo: null,
    stage: 'Ntinda Stage',
    division: 'Nakawa Division',
    district: 'Kampala'
  }
];

// Trips Data
const DUMMY_TRIPS = [
  { 
    id: 'TRP-20241001', 
    rider_name: 'John Mukasa', 
    rider_id: 'RDR-KLA-001',
    customer_name: 'Alice Nabatanzi',
    pickup_location: 'Kamwokya, Kampala', 
    destination: 'Nakasero Market, Kampala', 
    trip_fare: 15000, 
    payment_method: 'mobile_money',
    payment_provider: 'MTN Mobile Money',
    status: 'completed', 
    duration: '25 min',
    distance: '5.2 km',
    created_at: '2024-03-25T08:30:00',
    completed_at: '2024-03-25T08:55:00'
  },
  { 
    id: 'TRP-20241002', 
    rider_name: 'Aisha Namubiru', 
    rider_id: 'RDR-KLA-006',
    customer_name: 'Robert Sejjoba',
    pickup_location: 'Ntinda Trading Centre', 
    destination: 'Kampala Road', 
    trip_fare: 12000, 
    payment_method: 'cash',
    payment_provider: null,
    status: 'completed', 
    duration: '20 min',
    distance: '4.1 km',
    created_at: '2024-03-25T09:15:00',
    completed_at: '2024-03-25T09:35:00'
  },
  { 
    id: 'TRP-20241003', 
    rider_name: 'Grace Nambi', 
    rider_id: 'RDR-KLA-004',
    customer_name: 'Henry Mudoola',
    pickup_location: 'Makerere University Gate', 
    destination: 'Wandegeya Shopping Centre', 
    trip_fare: 8000, 
    payment_method: 'wallet',
    payment_provider: 'Enfuna Wallet',
    status: 'completed', 
    duration: '15 min',
    distance: '3.0 km',
    created_at: '2024-03-25T10:00:00',
    completed_at: '2024-03-25T10:15:00'
  },
  { 
    id: 'TRP-20241004', 
    rider_name: 'John Mukasa', 
    rider_id: 'RDR-KLA-001',
    customer_name: 'Guest Rider',
    pickup_location: 'Owino Market, Kampala', 
    destination: 'Kisenyi, Kampala', 
    trip_fare: 10000, 
    payment_method: 'mobile_money',
    payment_provider: 'Airtel Money',
    status: 'pending', 
    duration: '20 min',
    distance: '3.8 km',
    created_at: '2024-03-25T11:30:00',
    completed_at: null
  },
  { 
    id: 'TRP-20241005', 
    rider_name: 'Sarah Akello', 
    rider_id: 'RDR-KLA-002',
    customer_name: 'Martha Auma',
    pickup_location: 'Acacia Mall, Kisimenti', 
    destination: 'Lugogo, Kampala', 
    trip_fare: 12000, 
    payment_method: 'cash',
    payment_provider: null,
    status: 'cancelled', 
    duration: '0 min',
    distance: '2.5 km',
    created_at: '2024-03-25T13:45:00',
    completed_at: null
  },
  {
    id: 'TRP-20241006',
    rider_name: 'Aisha Namubiru',
    rider_id: 'RDR-KLA-006',
    customer_name: 'Faith Amongi',
    pickup_location: 'Mulago Hospital',
    destination: 'Kololo Airstrip',
    trip_fare: 18000,
    payment_method: 'wallet',
    payment_provider: 'Enfuna Wallet',
    status: 'completed',
    duration: '30 min',
    distance: '6.5 km',
    created_at: '2024-03-25T14:00:00',
    completed_at: '2024-03-25T14:30:00'
  }
];

// Expenses Data
const DUMMY_EXPENSES = [
  { 
    id: 'EXP-20241001', 
    rider_name: 'John Mukasa', 
    rider_id: 'RDR-KLA-001',
    category: 'Fuel', 
    amount: 25000, 
    expense_type: 'operational',
    description: 'Petrol for daily operations',
    receipt_url: null,
    status: 'approved',
    created_at: '2024-03-25T06:30:00',
    approved_by: 'System Admin'
  },
  { 
    id: 'EXP-20241002', 
    rider_name: 'Aisha Namubiru', 
    rider_id: 'RDR-KLA-006',
    category: 'Maintenance', 
    amount: 85000, 
    expense_type: 'repair',
    description: 'Brake pad replacement and chain adjustment',
    receipt_url: null,
    status: 'approved',
    created_at: '2024-03-24T10:00:00',
    approved_by: 'System Admin'
  },
  { 
    id: 'EXP-20241003', 
    rider_name: 'Grace Nambi', 
    rider_id: 'RDR-KLA-004',
    category: 'Insurance', 
    amount: 120000, 
    expense_type: 'monthly',
    description: 'Third-party motorcycle insurance renewal',
    receipt_url: null,
    status: 'pending',
    created_at: '2024-03-20T08:00:00',
    approved_by: null
  },
  { 
    id: 'EXP-20241004', 
    rider_name: 'Sarah Akello', 
    rider_id: 'RDR-KLA-002',
    category: 'Parking', 
    amount: 5000, 
    expense_type: 'daily',
    description: 'Stage parking fee - Wandegeya',
    receipt_url: null,
    status: 'approved',
    created_at: '2024-03-25T07:00:00',
    approved_by: 'System Admin'
  },
  { 
    id: 'EXP-20241005', 
    rider_name: 'Peter Ssali', 
    rider_id: 'RDR-KLA-005',
    category: 'Repairs', 
    amount: 45000, 
    expense_type: 'repair',
    description: 'Tyre puncture repair and tube replacement',
    receipt_url: null,
    status: 'rejected',
    created_at: '2024-03-23T14:00:00',
    approved_by: 'System Admin',
    rejection_reason: 'Insufficient documentation'
  }
];

// Deliveries Data
const DUMMY_DELIVERIES = [
  {
    id: 'DEL-20241001',
    rider_name: 'Grace Nambi',
    rider_id: 'RDR-KLA-004',
    customer_name: 'Sunrise Electronics',
    pickup_location: 'Kikuubo, Kampala',
    drop_off_location: 'Ntinda, Kampala',
    package_type: 'Electronics',
    package_weight: '2.5 kg',
    delivery_fee: 15000,
    payment_method: 'mobile_money',
    status: 'completed',
    created_at: '2024-03-25T10:30:00',
    completed_at: '2024-03-25T11:15:00'
  },
  {
    id: 'DEL-20241002',
    rider_name: 'John Mukasa',
    rider_id: 'RDR-KLA-001',
    customer_name: 'Tropical Fresh Foods',
    pickup_location: 'Nakawa Market',
    drop_off_location: 'Kololo, Kampala',
    package_type: 'Food',
    package_weight: '5.0 kg',
    delivery_fee: 12000,
    payment_method: 'cash',
    status: 'completed',
    created_at: '2024-03-25T11:00:00',
    completed_at: '2024-03-25T11:35:00'
  },
  {
    id: 'DEL-20241003',
    rider_name: 'Aisha Namubiru',
    rider_id: 'RDR-KLA-006',
    customer_name: 'Kampala Auto Parts',
    pickup_location: 'Industrial Area, Kampala',
    drop_off_location: 'Kawempe, Kampala',
    package_type: 'Auto Parts',
    package_weight: '8.0 kg',
    delivery_fee: 20000,
    payment_method: 'wallet',
    status: 'pending',
    created_at: '2024-03-25T12:00:00',
    completed_at: null
  }
];

// Groups Data (Savings Groups for Riders)
const DUMMY_GROUPS = [
  {
    id: 'GRP-001',
    name: 'Kamwokya Riders SACCO',
    description: 'Savings and credit group for Kamwokya stage riders',
    group_type: 'savings',
    member_count: 25,
    max_members: 50,
    contrib_amount: 50000,
    contrib_frequency: 'weekly',
    total_pool: 1250000,
    is_public: true,
    created_at: '2024-01-01T00:00:00',
    admin_rider: 'John Mukasa',
    status: 'active'
  },
  {
    id: 'GRP-002',
    name: 'Wandegeya Boda Welfare',
    description: 'Welfare group for Wandegeya riders',
    group_type: 'welfare',
    member_count: 18,
    max_members: 30,
    contrib_amount: 30000,
    contrib_frequency: 'monthly',
    total_pool: 540000,
    is_public: false,
    created_at: '2024-02-15T00:00:00',
    admin_rider: 'Sarah Akello',
    status: 'active'
  },
  {
    id: 'GRP-003',
    name: 'Ntinda Investment Club',
    description: 'Investment group for long-term savings',
    group_type: 'investment',
    member_count: 30,
    max_members: 50,
    contrib_amount: 100000,
    contrib_frequency: 'monthly',
    total_pool: 3000000,
    is_public: true,
    created_at: '2023-06-01T00:00:00',
    admin_rider: 'Aisha Namubiru',
    status: 'active'
  },
  {
    id: 'GRP-004',
    name: 'Old Taxi Park Riders',
    description: 'Daily savings group for Old Taxi Park stage',
    group_type: 'savings',
    member_count: 40,
    max_members: 60,
    contrib_amount: 20000,
    contrib_frequency: 'daily',
    total_pool: 800000,
    is_public: true,
    created_at: '2023-09-01T00:00:00',
    admin_rider: 'Grace Nambi',
    status: 'active'
  }
];

// Wallets Data
const DUMMY_WALLETS = [
  { 
    id: 'WAL-001', 
    rider_name: 'John Mukasa', 
    rider_id: 'RDR-KLA-001',
    balance: 450000, 
    available_balance: 380000, 
    reserved_balance: 70000, 
    currency: 'UGX', 
    is_active: true,
    total_deposits: 4500000,
    total_withdrawals: 4050000,
    last_transaction: '2024-03-25T10:00:00'
  },
  { 
    id: 'WAL-002', 
    rider_name: 'Sarah Akello', 
    rider_id: 'RDR-KLA-002',
    balance: 320000, 
    available_balance: 300000, 
    reserved_balance: 20000, 
    currency: 'UGX', 
    is_active: true,
    total_deposits: 3200000,
    total_withdrawals: 2880000,
    last_transaction: '2024-03-24T15:00:00'
  },
  { 
    id: 'WAL-003', 
    rider_name: 'Grace Nambi', 
    rider_id: 'RDR-KLA-004',
    balance: 680000, 
    available_balance: 650000, 
    reserved_balance: 30000, 
    currency: 'UGX', 
    is_active: true,
    total_deposits: 6800000,
    total_withdrawals: 6120000,
    last_transaction: '2024-03-25T09:00:00'
  },
  { 
    id: 'WAL-004', 
    rider_name: 'Aisha Namubiru', 
    rider_id: 'RDR-KLA-006',
    balance: 890000, 
    available_balance: 870000, 
    reserved_balance: 20000, 
    currency: 'UGX', 
    is_active: true,
    total_deposits: 8900000,
    total_withdrawals: 8010000,
    last_transaction: '2024-03-25T11:00:00'
  },
  { 
    id: 'WAL-005', 
    rider_name: 'Peter Ssali', 
    rider_id: 'RDR-KLA-005',
    balance: 110000, 
    available_balance: 90000, 
    reserved_balance: 20000, 
    currency: 'UGX', 
    is_active: false,
    total_deposits: 1100000,
    total_withdrawals: 990000,
    last_transaction: '2024-03-20T08:00:00'
  }
];

// Contacts Data
const DUMMY_CONTACTS = [
  { 
    id: 'CNT-001', 
    full_name: 'Alice Nabatanzi', 
    type: 'customer', 
    phone: '+256 776 123456', 
    email: 'alice.n@gmail.com', 
    bussiness_name: 'Tropical Fresh Foods', 
    location: 'Nakawa, Kampala', 
    loyalty_points: 850, 
    status: 'active',
    total_trips: 45,
    total_spent: 675000,
    created_at: '2024-01-10T00:00:00'
  },
  { 
    id: 'CNT-002', 
    full_name: 'Robert Sejjoba', 
    type: 'supplier', 
    phone: '+256 783 234567', 
    email: 'robert.s@yahoo.com', 
    bussiness_name: 'Kampala Auto Parts', 
    location: 'Kisenyi, Kampala', 
    loyalty_points: 1200, 
    status: 'active',
    total_orders: 78,
    total_spent: 2340000,
    created_at: '2023-08-15T00:00:00'
  },
  { 
    id: 'CNT-003', 
    full_name: 'Martha Auma', 
    type: 'employee', 
    phone: '+256 701 345678', 
    email: 'martha.a@gmail.com', 
    bussiness_name: 'Enfuna Uganda Ltd', 
    location: 'Kololo, Kampala', 
    loyalty_points: 450, 
    status: 'active',
    total_trips: 0,
    total_spent: 0,
    created_at: '2024-03-01T00:00:00'
  },
  { 
    id: 'CNT-004', 
    full_name: 'Henry Mudoola', 
    type: 'customer', 
    phone: '+256 754 456789', 
    email: 'henry.m@outlook.com', 
    bussiness_name: 'Sunrise Electronics', 
    location: 'Kikuubo, Kampala', 
    loyalty_points: 2300, 
    status: 'active',
    total_trips: 156,
    total_spent: 2340000,
    created_at: '2023-06-20T00:00:00'
  },
  { 
    id: 'CNT-005', 
    full_name: 'Faith Amongi', 
    type: 'supplier', 
    phone: '+256 782 567890', 
    email: 'faith.a@gmail.com', 
    bussiness_name: 'Safety First Equipment', 
    location: 'Industrial Area, Kampala', 
    loyalty_points: 680, 
    status: 'inactive',
    total_orders: 34,
    total_spent: 1020000,
    created_at: '2023-05-10T00:00:00'
  }
];

// Withdrawals Data
const DUMMY_WITHDRAWALS = [
  {
    id: 'WTH-001',
    rider_name: 'John Mukasa',
    rider_id: 'RDR-KLA-001',
    amount: 150000,
    payment_method: 'mobile_money',
    phone_number: '+256 772 123456',
    status: 'pending',
    created_at: '2024-03-25T08:00:00'
  },
  {
    id: 'WTH-002',
    rider_name: 'Aisha Namubiru',
    rider_id: 'RDR-KLA-006',
    amount: 200000,
    payment_method: 'mobile_money',
    phone_number: '+256 775 678901',
    status: 'pending',
    created_at: '2024-03-25T09:30:00'
  },
  {
    id: 'WTH-003',
    rider_name: 'Grace Nambi',
    rider_id: 'RDR-KLA-004',
    amount: 300000,
    payment_method: 'bank_transfer',
    phone_number: '+256 753 456789',
    status: 'approved',
    created_at: '2024-03-24T14:00:00',
    approved_at: '2024-03-24T16:00:00'
  },
  {
    id: 'WTH-004',
    rider_name: 'Sarah Akello',
    rider_id: 'RDR-KLA-002',
    amount: 100000,
    payment_method: 'mobile_money',
    phone_number: '+256 701 234567',
    status: 'rejected',
    created_at: '2024-03-23T10:00:00',
    rejection_reason: 'Insufficient balance'
  }
];

// Agents Data
const DUMMY_AGENTS = [
  {
    id: 'AGT-001',
    rider_name: 'John Mukasa',
    rider_id: 'RDR-KLA-001',
    referral_code: 'JMUK2024',
    total_referrals: 45,
    active_referrals: 38,
    total_commission: 2250000,
    available_commission: 1800000,
    is_active: true,
    commission_rate: 5,
    created_at: '2024-02-01T00:00:00',
    tier: 'Gold',
    region: 'Central Kampala',
    status: 'approved'
  },
  {
    id: 'AGT-002',
    rider_name: 'Grace Nambi',
    rider_id: 'RDR-KLA-004',
    referral_code: 'GNAM2024',
    total_referrals: 67,
    active_referrals: 55,
    total_commission: 3350000,
    available_commission: 2800000,
    is_active: true,
    commission_rate: 7,
    created_at: '2023-12-01T00:00:00',
    tier: 'Platinum',
    region: 'Central Kampala',
    status: 'approved'
  },
  {
    id: 'AGT-003',
    rider_name: 'Aisha Namubiru',
    rider_id: 'RDR-KLA-006',
    referral_code: 'ANAM2023',
    total_referrals: 89,
    active_referrals: 72,
    total_commission: 4450000,
    available_commission: 3900000,
    is_active: true,
    commission_rate: 10,
    created_at: '2023-09-01T00:00:00',
    tier: 'Diamond',
    region: 'Nakawa Division',
    status: 'approved'
  },
  {
    id: 'AGT-004',
    rider_name: 'David Ochieng',
    rider_id: 'RDR-KLA-003',
    referral_code: 'DOCH2024',
    total_referrals: 0,
    active_referrals: 0,
    total_commission: 0,
    available_commission: 0,
    is_active: false,
    commission_rate: 3,
    created_at: '2024-03-20T00:00:00',
    tier: 'Bronze',
    region: 'Nakawa Division',
    status: 'pending'
  }
];

// Agent Applications Data
const DUMMY_AGENT_APPLICATIONS = [
  {
    id: 'APP-001',
    rider_name: 'Peter Ssali',
    rider_id: 'RDR-KLA-005',
    email: 'peter.ssali@gmail.com',
    phone: '+256 774 567890',
    experience: '2 years as boda rider',
    reason: 'I want to help grow the platform by referring new riders',
    status: 'pending',
    applied_at: '2024-03-20T10:00:00'
  },
  {
    id: 'APP-002',
    rider_name: 'Sarah Akello',
    rider_id: 'RDR-KLA-002',
    email: 'sarah.akello@yahoo.com',
    phone: '+256 701 234567',
    experience: '1 year as boda rider',
    reason: 'I have a large network of riders in Wandegeya',
    status: 'pending',
    applied_at: '2024-03-22T14:00:00'
  }
];

// Disputes Data
const DUMMY_DISPUTES = [
  {
    id: 'DSP-001',
    ticket_number: 'TKT-20240325-001',
    rider_name: 'John Mukasa',
    rider_id: 'RDR-KLA-001',
    customer_name: 'Alice Nabatanzi',
    trip_id: 'TRP-20241001',
    title: 'Overcharged for trip',
    description: 'Customer claims she was charged UGX 15,000 instead of UGX 10,000 for a short distance trip.',
    status: 'pending',
    priority: 'high',
    category: 'pricing',
    created_at: '2024-03-25T09:00:00',
    messages: [
      { id: 'msg1', sender: 'customer', sender_name: 'Alice Nabatanzi', message: 'I was charged UGX 15,000 but the distance was only 5km.', timestamp: '2024-03-25T09:00:00', is_read: true },
      { id: 'msg2', sender: 'rider', sender_name: 'John Mukasa', message: 'The customer agreed to the fare before the trip started.', timestamp: '2024-03-25T09:15:00', is_read: true },
      { id: 'msg3', sender: 'admin', sender_name: 'Admin Support', message: 'Thank you for reporting. We are investigating this issue.', timestamp: '2024-03-25T09:30:00', is_read: true }
    ],
    resolution_notes: null,
    resolved_at: null,
    resolved_by: null
  },
  {
    id: 'DSP-002',
    ticket_number: 'TKT-20240325-002',
    rider_name: 'Aisha Namubiru',
    rider_id: 'RDR-KLA-006',
    customer_name: 'Robert Sejjoba',
    trip_id: 'TRP-20241002',
    title: 'Rider took wrong route',
    description: 'Customer complains the rider took a longer route than necessary, increasing the fare.',
    status: 'investigating',
    priority: 'medium',
    category: 'route',
    created_at: '2024-03-25T10:30:00',
    messages: [
      { id: 'msg1', sender: 'customer', sender_name: 'Robert Sejjoba', message: 'The rider went through Jinja Road instead of the shorter route.', timestamp: '2024-03-25T10:30:00', is_read: true },
      { id: 'msg2', sender: 'rider', sender_name: 'Aisha Namubiru', message: 'Jinja Road had less traffic, so it was faster.', timestamp: '2024-03-25T10:45:00', is_read: true },
      { id: 'msg3', sender: 'admin', sender_name: 'Admin Support', message: 'We are looking into the route taken.', timestamp: '2024-03-25T11:00:00', is_read: false }
    ],
    resolution_notes: null,
    resolved_at: null,
    resolved_by: null
  },
  {
    id: 'DSP-003',
    ticket_number: 'TKT-20240324-001',
    rider_name: 'Grace Nambi',
    rider_id: 'RDR-KLA-004',
    customer_name: 'Henry Mudoola',
    trip_id: 'TRP-20241003',
    title: 'Item damaged during delivery',
    description: 'Customer reports that the delivered item (electronics) was damaged upon arrival.',
    status: 'resolved',
    priority: 'high',
    category: 'damage',
    created_at: '2024-03-24T14:00:00',
    messages: [
      { id: 'msg1', sender: 'customer', sender_name: 'Henry Mudoola', message: 'The box was crushed and the electronics inside are damaged.', timestamp: '2024-03-24T14:00:00', is_read: true },
      { id: 'msg2', sender: 'rider', sender_name: 'Grace Nambi', message: 'The package was already damaged when I picked it up.', timestamp: '2024-03-24T14:30:00', is_read: true },
      { id: 'msg3', sender: 'admin', sender_name: 'Admin Support', message: 'We have reviewed the case. Partial refund issued to customer.', timestamp: '2024-03-24T16:00:00', is_read: true }
    ],
    resolution_notes: 'Partial refund of UGX 8,000 issued to customer. Rider not at fault.',
    resolved_at: '2024-03-24T16:00:00',
    resolved_by: 'Admin Support'
  }
];

// Chat Messages Data (for dispute chat)
const DUMMY_CHAT_MESSAGES = [
  { id: 'chat1', dispute_id: 'DSP-001', sender: 'customer', sender_name: 'Alice Nabatanzi', message: 'Hello, I have an issue with my trip.', timestamp: '2024-03-25T09:00:00' },
  { id: 'chat2', dispute_id: 'DSP-001', sender: 'system', sender_name: 'System', message: 'Ticket created successfully. An admin will assist you shortly.', timestamp: '2024-03-25T09:00:05' },
  { id: 'chat3', dispute_id: 'DSP-001', sender: 'rider', sender_name: 'John Mukasa', message: 'Is there a problem? The fare was agreed upon.', timestamp: '2024-03-25T09:15:00' },
  { id: 'chat4', dispute_id: 'DSP-001', sender: 'admin', sender_name: 'Admin Support', message: 'I will look into this matter. Please provide any evidence if available.', timestamp: '2024-03-25T09:30:00' },
  { id: 'chat5', dispute_id: 'DSP-002', sender: 'customer', sender_name: 'Robert Sejjoba', message: 'The rider took a very long route.', timestamp: '2024-03-25T10:30:00' },
  { id: 'chat6', dispute_id: 'DSP-002', sender: 'system', sender_name: 'System', message: 'Ticket created. Priority: Medium', timestamp: '2024-03-25T10:30:10' },
];

// Chart Data for Analytics - Enhanced with more data points
const WEEKLY_TRIPS_DATA = [
  { name: 'Mon', trips: 145, revenue: 2175000, deliveries: 32, expenses: 350000 },
  { name: 'Tue', trips: 167, revenue: 2505000, deliveries: 38, expenses: 380000 },
  { name: 'Wed', trips: 189, revenue: 2835000, deliveries: 41, expenses: 420000 },
  { name: 'Thu', trips: 156, revenue: 2340000, deliveries: 35, expenses: 390000 },
  { name: 'Fri', trips: 178, revenue: 2670000, deliveries: 44, expenses: 460000 },
  { name: 'Sat', trips: 210, revenue: 3150000, deliveries: 52, expenses: 550000 },
  { name: 'Sun', trips: 134, revenue: 2010000, deliveries: 28, expenses: 280000 },
];

const MONTHLY_REVENUE_DATA = [
  { name: 'Jan', revenue: 18500000, expenses: 3200000, profit: 15300000 },
  { name: 'Feb', revenue: 19200000, expenses: 3450000, profit: 15750000 },
  { name: 'Mar', revenue: 21000000, expenses: 3800000, profit: 17200000 },
  { name: 'Apr', revenue: 19800000, expenses: 3600000, profit: 16200000 },
  { name: 'May', revenue: 20500000, expenses: 3750000, profit: 16750000 },
  { name: 'Jun', revenue: 21500000, expenses: 3900000, profit: 17600000 },
];

const STATUS_DISTRIBUTION = [
  { name: 'Active', value: 980, color: '#10B981' },
  { name: 'Inactive', value: 120, color: '#6B7280' },
  { name: 'Pending', value: 150, color: '#F59E0B' },
  { name: 'Suspended', value: 35, color: '#EF4444' },
];

const PAYMENT_METHODS_DATA = [
  { name: 'Mobile Money', value: 65, color: '#0025DD' },
  { name: 'Cash', value: 25, color: '#10B981' },
  { name: 'Wallet', value: 10, color: '#8B5CF6' },
];

const DISPUTE_STATUS_DATA = [
  { name: 'Pending', value: 15, color: '#F59E0B' },
  { name: 'Investigating', value: 8, color: '#6366F1' },
  { name: 'Resolved', value: 22, color: '#10B981' },
  { name: 'Escalated', value: 5, color: '#EF4444' },
];

const AGENT_PERFORMANCE_DATA = [
  { name: 'John M.', referrals: 45, commission: 2250000 },
  { name: 'Grace N.', referrals: 67, commission: 3350000 },
  { name: 'Aisha N.', referrals: 89, commission: 4450000 },
];

// ==================== ENHANCED STYLED COMPONENTS ====================
const StyledCard = styled(Card)(({ theme, variant }) => ({
  borderRadius: variant === 'stat' ? 16 : 20,
  boxShadow: variant === 'stat' 
    ? '0 4px 12px rgba(0,0,0,0.05)' 
    : '0 8px 32px rgba(0,0,0,0.06)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  border: '1px solid rgba(0,0,0,0.04)',
  '&:hover': {
    transform: variant !== 'stat' ? 'translateY(-2px)' : 'translateY(-4px)',
    boxShadow: variant !== 'stat' 
      ? '0 12px 40px rgba(0,37,221,0.08)' 
      : '0 8px 24px rgba(0,0,0,0.1)',
  },
}));

const GradientCard = styled(Box)(({ theme, gradient }) => ({
  background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: 20,
  padding: theme.spacing(3),
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  }
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  backgroundColor: '#FFFFFF',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  borderRight: '1px solid rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  overflowY: 'auto',
  overflowX: 'hidden',
  zIndex: 1100,
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: '3px',
  },
  [theme.breakpoints.down('md')]: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
    '&.open': {
      transform: 'translateX(0)',
    },
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  marginLeft: 280,
  minHeight: '100vh',
  backgroundColor: '#F8FAFC',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

const StatusChip = styled(Chip)(({ status, theme }) => {
  const statusStyles = {
    active: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    completed: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    approved: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    resolved: { bg: alpha('#10B981', 0.1), color: '#065F46', border: '1px solid rgba(16, 185, 129, 0.2)' },
    pending: { bg: alpha('#F59E0B', 0.1), color: '#92400E', border: '1px solid rgba(245, 158, 11, 0.2)' },
    investigating: { bg: alpha('#6366F1', 0.1), color: '#3730A3', border: '1px solid rgba(99, 102, 241, 0.2)' },
    escalated: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    inactive: { bg: alpha('#6B7280', 0.1), color: '#374151', border: '1px solid rgba(107, 114, 128, 0.2)' },
    cancelled: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    rejected: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    suspended: { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
    'not solved': { bg: alpha('#EF4444', 0.1), color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' },
  };
  
  const style = statusStyles[status?.toLowerCase()] || { bg: alpha('#6B7280', 0.1), color: '#374151' };
  
  return {
    backgroundColor: style.bg,
    color: style.color,
    fontWeight: 600,
    fontSize: '0.7rem',
    height: 24,
    borderRadius: '8px',
    border: style.border,
    '& .MuiChip-label': {
      px: 1,
      textTransform: 'capitalize',
    }
  };
});

const SearchBar = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    transition: 'all 0.2s ease',
    fontSize: '0.875rem',
    '& fieldset': {
      borderColor: 'rgba(0,0,0,0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0,37,221,0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0025DD',
      borderWidth: '2px',
    },
  },
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: 12,
  padding: variant === 'small' ? '6px 12px' : '8px 20px',
  fontWeight: 600,
  textTransform: 'none',
  gap: 6,
  fontSize: '0.8rem',
  '&:hover': {
    transform: 'translateY(-1px)',
  },
}));

const DashboardCard = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  border: '1px solid rgba(0,0,0,0.06)',
  overflow: 'hidden',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
}));

const ChatBubble = styled(Box)(({ theme, isUser }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: isUser ? 'flex-end' : 'flex-start',
  marginBottom: theme.spacing(1.5),
  '& .message-content': {
    maxWidth: '80%',
    padding: theme.spacing(1, 1.5),
    borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
    backgroundColor: isUser ? '#0025DD' : '#E5E7EB',
    color: isUser ? 'white' : '#1F2937',
    wordBreak: 'break-word',
  },
  '& .message-sender': {
    fontSize: '0.7rem',
    color: '#6B7280',
    marginBottom: theme.spacing(0.3),
    marginLeft: isUser ? 0 : theme.spacing(1),
    marginRight: isUser ? theme.spacing(1) : 0,
  }
}));

// ==================== GREETING FUNCTION ====================
const getDynamicGreeting = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  
  const holiday = UGANDA_HOLIDAYS.find(h => h.month === month && h.day === day);
  
  if (holiday) {
    return {
      text: holiday.name,
      icon: holiday.icon,
      color: holiday.color || '#0025DD',
      isHoliday: true
    };
  }
  
  if (hour >= 5 && hour < 12) return { text: "Good Morning", icon: WbSunnyIcon, color: '#F59E0B' };
  if (hour >= 12 && hour < 17) return { text: "Good Afternoon", icon: WbSunnyIcon, color: '#F59E0B' };
  if (hour >= 17 && hour < 21) return { text: "Good Evening", icon: NightsStayIcon, color: '#6366F1' };
  return { text: "Good Night", icon: NightsStayIcon, color: '#4B5563' };
};

// ==================== SCROLL TO TOP BUTTON ====================
function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          zIndex: 1000,
        }}
      >
        <Fab
          size="medium"
          aria-label="scroll back to top"
          sx={{
            bgcolor: '#0025DD',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,37,221,0.4)',
            '&:hover': { bgcolor: '#001DB0' },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

// ==================== MOBILE RESPONSIVE DETAILS MODAL COMPONENTS ====================
const DetailField = ({ label, value, icon: Icon, color }) => (
  <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
      {Icon && <Icon sx={{ fontSize: { xs: 13, sm: 14 }, color: color || '#64748B' }} />}
      <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ fontSize: { xs: '0.65rem', sm: '0.7rem' } }}>
        {label}
      </Typography>
    </Box>
    <Typography variant="body2" fontWeight={500} sx={{ pl: Icon ? 2.5 : 0, fontSize: { xs: '0.8rem', sm: '0.875rem' }, wordBreak: 'break-word' }}>
      {value || 'N/A'}
    </Typography>
  </Box>
);

const DetailSection = ({ title, children, icon: Icon, color }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: { xs: 1.5, sm: 2, md: 2.5 }, 
      borderRadius: { xs: 2, sm: 3 }, 
      bgcolor: 'white', 
      border: '1px solid rgba(0,0,0,0.06)',
      height: '100%',
      mb: { xs: 1.5, sm: 2 }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: { xs: 1.5, sm: 2 } }}>
      {Icon && <Icon sx={{ color: color || '#0025DD', fontSize: { xs: 18, sm: 20 } }} />}
      <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#1E293B', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
        {title}
      </Typography>
    </Box>
    <Divider sx={{ mb: { xs: 1.5, sm: 2 } }} />
    {children}
  </Paper>
);

// ==================== MAIN COMPONENT ====================
const SuperAdminDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();
  
  // User Role State
  const [currentUserRole, setCurrentUserRole] = useState('super_admin'); // super_admin, admin, agent, viewer
  const [userPermissions, setUserPermissions] = useState({
    canManageAgents: true,
    canManageDisputes: true,
    canViewAnalytics: true,
    canManageRiders: true,
    canManageTrips: true,
    canManageGroups: true,
    canManageWallets: true,
    canManageContacts: true,
    canManageExpenses: true,
  });
  
  // Dummy admin user
  const user = {
    full_names: 'Walter Sultan',
    email: 'admin@enfuna.ug',
    role: 'super_admin',
    user_id: 'ADM-001',
    avatar: null
  };

  // State Management
  const [activeTab, setActiveTab] = useState(0);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  // Data States
  const [dashboardStats] = useState({
    totalRiders: 1250,
    activeRiders: 980,
    totalTrips: 15420,
    todayTrips: 342,
    totalDeliveries: 3240,
    todayDeliveries: 78,
    totalRevenue: 285000000,
    todayRevenue: 15200000,
    platformFees: 28500000,
    totalExpenses: 45000000,
    pendingExpenses: 3200000,
    totalGroups: 85,
    activeGroups: 72,
    groupPool: 25000000,
    totalWallets: 1250,
    totalWalletBalance: 185000000,
    totalContacts: 850,
    activeContacts: 720,
    totalAgents: 45,
    activeAgents: 38,
    totalAgentCommissions: 15000000,
    pendingWithdrawals: 12,
    pendingWithdrawalAmount: 3500000,
    averageRating: 4.5,
    customerSatisfaction: 92,
    totalDisputes: 45,
    pendingDisputes: 23,
    resolvedDisputes: 22,
  });

  // Dummy Data
  const [riders, setRiders] = useState(DUMMY_RIDERS);
  const [trips] = useState(DUMMY_TRIPS);
  const [expenses] = useState(DUMMY_EXPENSES);
  const [deliveries] = useState(DUMMY_DELIVERIES);
  const [groups, setGroups] = useState(DUMMY_GROUPS);
  const [withdrawals] = useState(DUMMY_WITHDRAWALS);
  const [wallets] = useState(DUMMY_WALLETS);
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);
  const [agents, setAgents] = useState(DUMMY_AGENTS);
  const [agentApplications, setAgentApplications] = useState(DUMMY_AGENT_APPLICATIONS);
  const [disputes, setDisputes] = useState(DUMMY_DISPUTES);
  const [chatMessages, setChatMessages] = useState(DUMMY_CHAT_MESSAGES);
  
  // Filter States
  const [dateFilter, setDateFilter] = useState({ type: 'all', startDate: null, endDate: null });
  const [filterOpen, setFilterOpen] = useState(false);
  
  // UI States
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState({ open: false, item: null, type: '' });
  const [blockConfirmDialog, setBlockConfirmDialog] = useState({ open: false, item: null, type: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [newMessage, setNewMessage] = useState('');
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [disputeChatOpen, setDisputeChatOpen] = useState(false);
  const [agentCommissionDialog, setAgentCommissionDialog] = useState({ open: false, agent: null, newCommission: 0 });
  const [adjustCommissionDialog, setAdjustCommissionDialog] = useState({ open: false, agent: null });

  const greeting = getDynamicGreeting();

  // Utility Functions
  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return '0';
    return amount.toLocaleString('en-UG');
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      showSnackbar('Dashboard data refreshed successfully', 'success');
    }, 1500);
  };
  
  // Filter Functions
  const applyDateFilter = (type) => {
    const now = new Date();
    let startDate = null;
    let endDate = now;
    
    switch(type) {
      case 'today':
        startDate = new Date(now.setHours(0, 0, 0, 0));
        break;
      case 'week':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        startDate = new Date(now);
        startDate.setMonth(now.getMonth() - 1);
        break;
      case 'all':
      default:
        startDate = null;
        break;
    }
    
    setDateFilter({ type, startDate, endDate: now });
    showSnackbar(`Filter applied: ${type}`, 'success');
  };
  
  const filterDataByDate = (data, dateField = 'created_at') => {
    if (!dateFilter.startDate) return data;
    return data.filter(item => {
      const itemDate = new Date(item[dateField]);
      return itemDate >= dateFilter.startDate && itemDate <= dateFilter.endDate;
    });
  };

  const handleViewDetails = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedItem(null);
    setModalType('');
  };

  // Role-Based Access Check
  const hasPermission = (permission) => {
    return userPermissions[permission] === true;
  };

  // Change User Role (for demo purposes)
  const changeUserRole = (role) => {
    setCurrentUserRole(role);
    switch(role) {
      case 'super_admin':
        setUserPermissions({
          canManageAgents: true,
          canManageDisputes: true,
          canViewAnalytics: true,
          canManageRiders: true,
          canManageTrips: true,
          canManageGroups: true,
          canManageWallets: true,
          canManageContacts: true,
          canManageExpenses: true,
        });
        break;
      case 'admin':
        setUserPermissions({
          canManageAgents: true,
          canManageDisputes: true,
          canViewAnalytics: true,
          canManageRiders: true,
          canManageTrips: true,
          canManageGroups: true,
          canManageWallets: true,
          canManageContacts: true,
          canManageExpenses: false,
        });
        break;
      case 'agent':
        setUserPermissions({
          canManageAgents: false,
          canManageDisputes: true,
          canViewAnalytics: false,
          canManageRiders: false,
          canManageTrips: false,
          canManageGroups: false,
          canManageWallets: true,
          canManageContacts: true,
          canManageExpenses: false,
        });
        break;
      default:
        break;
    }
    showSnackbar(`Role switched to ${role.replace('_', ' ')}`, 'info');
  };

  // Admin: Block/Unblock User
  const handleBlockUser = (item, type) => {
    setBlockConfirmDialog({ open: true, item, type });
  };

  const confirmBlockUser = () => {
    const { item, type } = blockConfirmDialog;
    if (type === 'rider') {
      setRiders(prevRiders => 
        prevRiders.map(rider => 
          rider.id === item.id 
            ? { ...rider, status: rider.status === 'active' ? 'suspended' : 'active' }
            : rider
        )
      );
      showSnackbar(`${item.full_names} has been ${item.status === 'active' ? 'blocked' : 'unblocked'} successfully`, 'success');
    } else if (type === 'group') {
      setGroups(prevGroups =>
        prevGroups.map(group =>
          group.id === item.id
            ? { ...group, status: group.status === 'active' ? 'suspended' : 'active' }
            : group
        )
      );
      showSnackbar(`Group "${item.name}" has been ${item.status === 'active' ? 'suspended' : 'activated'}`, 'success');
    }
    setBlockConfirmDialog({ open: false, item: null, type: '' });
  };

  // Admin: Delete User with Confirmation Popup
  const handleDeleteUser = (item, type) => {
    setDeleteConfirmDialog({ open: true, item, type });
  };

  const confirmDeleteUser = () => {
    const { item, type } = deleteConfirmDialog;
    if (type === 'rider') {
      setRiders(prevRiders => prevRiders.filter(rider => rider.id !== item.id));
      showSnackbar(`${item.full_names} has been deleted successfully`, 'error');
    } else if (type === 'contact') {
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== item.id));
      showSnackbar(`${item.full_name} has been deleted successfully`, 'error');
    } else if (type === 'group') {
      setGroups(prevGroups => prevGroups.filter(group => group.id !== item.id));
      showSnackbar(`Group "${item.name}" has been deleted successfully`, 'error');
    }
    setDeleteConfirmDialog({ open: false, item: null, type: '' });
  };

  // Agent Management Functions
  const handleApproveAgent = (application) => {
    const newAgent = {
      id: `AGT-00${agents.length + 1}`,
      rider_name: application.rider_name,
      rider_id: application.rider_id,
      referral_code: `${application.rider_name.substring(0, 4).toUpperCase()}${Math.floor(Math.random() * 10000)}`,
      total_referrals: 0,
      active_referrals: 0,
      total_commission: 0,
      available_commission: 0,
      is_active: true,
      commission_rate: 3,
      created_at: new Date().toISOString(),
      tier: 'Bronze',
      region: 'Kampala',
      status: 'approved'
    };
    setAgents([...agents, newAgent]);
    setAgentApplications(agentApplications.filter(app => app.id !== application.id));
    setRiders(prevRiders =>
      prevRiders.map(rider =>
        rider.id === application.rider_id
          ? { ...rider, is_agent: true }
          : rider
      )
    );
    showSnackbar(`${application.rider_name} has been approved as an agent`, 'success');
  };
  
  const handleDenyAgent = (application) => {
    setAgentApplications(agentApplications.filter(app => app.id !== application.id));
    showSnackbar(`Agent application for ${application.rider_name} has been denied`, 'info');
  };
  
  const handleRemoveAgent = (agent) => {
    setAgents(agents.filter(a => a.id !== agent.id));
    setRiders(prevRiders =>
      prevRiders.map(rider =>
        rider.id === agent.rider_id
          ? { ...rider, is_agent: false }
          : rider
      )
    );
    showSnackbar(`${agent.rider_name} has been removed as an agent`, 'info');
  };
  
  const handleAdjustCommission = (agent, newRate) => {
    setAgents(agents.map(a =>
      a.id === agent.id
        ? { ...a, commission_rate: newRate }
        : a
    ));
    setAdjustCommissionDialog({ open: false, agent: null });
    showSnackbar(`Commission rate for ${agent.rider_name} updated to ${newRate}%`, 'success');
  };

  // Dispute Management Functions
  const handleResolveDispute = (dispute, resolution) => {
    setDisputes(disputes.map(d =>
      d.id === dispute.id
        ? {
            ...d,
            status: 'resolved',
            resolution_notes: resolution,
            resolved_at: new Date().toISOString(),
            resolved_by: user.full_names
          }
        : d
    ));
    showSnackbar(`Dispute ${dispute.ticket_number} marked as resolved`, 'success');
  };
  
  const handleUpdateDisputeStatus = (dispute, newStatus) => {
    setDisputes(disputes.map(d =>
      d.id === dispute.id
        ? { ...d, status: newStatus }
        : d
    ));
    showSnackbar(`Dispute status updated to ${newStatus}`, 'success');
  };
  
  const handleSendChatMessage = () => {
    if (!newMessage.trim() || !selectedDispute) return;
    
    const newMsg = {
      id: `msg${Date.now()}`,
      sender: 'admin',
      sender_name: user.full_names,
      message: newMessage,
      timestamp: new Date().toISOString(),
      is_read: true
    };
    
    setDisputes(disputes.map(d =>
      d.id === selectedDispute.id
        ? { ...d, messages: [...d.messages, newMsg] }
        : d
    ));
    
    setChatMessages([...chatMessages, {
      id: `chat${Date.now()}`,
      dispute_id: selectedDispute.id,
      sender: 'admin',
      sender_name: user.full_names,
      message: newMessage,
      timestamp: new Date().toISOString()
    }]);
    
    setNewMessage('');
  };
  
  const openDisputeChat = (dispute) => {
    setSelectedDispute(dispute);
    setDisputeChatOpen(true);
  };

  // Contact Management
  const handleOpenAddContact = () => {
    setCurrentContact({
      full_name: "",
      type: "customer",
      phone: "+256 ",
      email: "",
      location: "",
      bussiness_name: "",
      loyalty_points: 0,
      status: "active"
    });
    setContactDialogOpen(true);
  };

  const handleOpenEditContact = (contact) => {
    setCurrentContact(contact);
    setContactDialogOpen(true);
  };

  const handleSaveContact = () => {
    if (currentContact.id) {
      setContacts(contacts.map(c => c.id === currentContact.id ? currentContact : c));
      showSnackbar('Contact updated successfully', 'success');
    } else {
      const newContact = {
        ...currentContact,
        id: `CNT-${String(contacts.length + 1).padStart(3, '0')}`,
        created_at: new Date().toISOString()
      };
      setContacts([...contacts, newContact]);
      showSnackbar('Contact added successfully', 'success');
    }
    setContactDialogOpen(false);
  };

  // PDF Export
  const exportToPDF = (data, title, columns) => {
    try {
      const doc = new jsPDF('landscape');
      
      doc.setFillColor(0, 37, 221);
      doc.rect(0, 0, doc.internal.pageSize.width, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.text('Enfuna Uganda', 14, 22);
      doc.setFontSize(12);
      doc.text('Rider Management System', 14, 32);
      
      doc.setTextColor(0, 37, 221);
      doc.setFontSize(16);
      doc.text(title, 14, 55);
      
      doc.setTextColor(100);
      doc.setFontSize(9);
      doc.text(`Generated: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' })}`, 14, 63);
      
      autoTable(doc, {
        startY: 70,
        head: [columns.map(c => c.header)],
        body: data.map(item => columns.map(c => item[c.key] || 'N/A')),
        theme: 'striped',
        headStyles: { 
          fillColor: [0, 37, 221],
          fontSize: 9,
          fontStyle: 'bold',
          halign: 'left'
        },
        bodyStyles: {
          fontSize: 8,
        },
        alternateRowStyles: {
          fillColor: [248, 250, 252]
        },
        margin: { top: 10 }
      });
      
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`Page ${i} of ${pageCount} | Enfuna Uganda Admin Dashboard`, 
          doc.internal.pageSize.width - 100, 
          doc.internal.pageSize.height - 10
        );
      }
      
      doc.save(`enfuna-${title.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`);
      showSnackbar('Report exported successfully!', 'success');
    } catch (error) {
      showSnackbar('Failed to export PDF', 'error');
    }
  };

  // Dashboard Stats Configuration
  const statsCards = [
    { 
      label: 'Total Riders', 
      value: dashboardStats.totalRiders.toLocaleString(), 
      subValue: `${dashboardStats.activeRiders} active`, 
      icon: MotorcycleIcon, 
      color: '#0025DD',
      gradient: 'linear-gradient(135deg, #0025DD 0%, #4F46E5 100%)',
      change: '+12%',
      changeType: 'up'
    },
    { 
      label: 'Total Revenue', 
      value: `UGX ${formatCurrency(dashboardStats.totalRevenue)}`, 
      subValue: `Today: UGX ${formatCurrency(dashboardStats.todayRevenue)}`, 
      icon: AccountBalanceWalletIcon, 
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      change: '+18%',
      changeType: 'up'
    },
    { 
      label: 'Total Trips', 
      value: dashboardStats.totalTrips.toLocaleString(), 
      subValue: `${dashboardStats.todayTrips} today`, 
      icon: DirectionsBikeIcon, 
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      change: '+8%',
      changeType: 'up'
    },
    { 
      label: 'Active Groups', 
      value: dashboardStats.activeGroups, 
      subValue: `Pool: UGX ${formatCurrency(dashboardStats.groupPool)}`, 
      icon: GroupsIcon, 
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      change: '+5%',
      changeType: 'up'
    },
    { 
      label: 'Total Wallets', 
      value: dashboardStats.totalWallets.toLocaleString(), 
      subValue: `UGX ${formatCurrency(dashboardStats.totalWalletBalance)} balance`, 
      icon: AccountBalanceIcon, 
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      change: '+15%',
      changeType: 'up'
    },
    { 
      label: 'Total Contacts', 
      value: dashboardStats.totalContacts.toLocaleString(), 
      subValue: `${dashboardStats.activeContacts} active`, 
      icon: ContactsIcon, 
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
      change: '+10%',
      changeType: 'up'
    },
    { 
      label: 'Rider Agents', 
      value: dashboardStats.totalAgents, 
      subValue: `${dashboardStats.activeAgents} active`, 
      icon: PersonAddIcon, 
      color: '#6366F1',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
      change: '+22%',
      changeType: 'up'
    },
    { 
      label: 'Open Disputes', 
      value: dashboardStats.pendingDisputes, 
      subValue: `${dashboardStats.resolvedDisputes} resolved`, 
      icon: SupportAgentIcon, 
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      change: '+8%',
      changeType: 'up'
    },
  ];

  // Sidebar Navigation
  const sidebarItems = [
    { label: 'Dashboard', icon: DashboardIcon, tab: 0 },
    { label: 'Riders', icon: MotorcycleIcon, tab: 1, badge: riders.length, permission: 'canManageRiders' },
    { label: 'Trips', icon: DirectionsBikeIcon, tab: 2, badge: trips.length, permission: 'canManageTrips' },
    { label: 'Deliveries', icon: LocalShippingIcon, tab: 3, badge: deliveries.length, permission: 'canManageTrips' },
    { label: 'Expenses', icon: ReceiptIcon, tab: 4, badge: expenses.filter(e => e.status === 'pending').length, permission: 'canManageExpenses' },
    { label: 'Groups', icon: GroupsIcon, tab: 5, badge: groups.length, permission: 'canManageGroups' },
    { label: 'Wallets', icon: AccountBalanceIcon, tab: 6, badge: wallets.length, permission: 'canManageWallets' },
    { label: 'Contacts', icon: ContactsIcon, tab: 7, badge: contacts.length, permission: 'canManageContacts' },
    { label: 'Agents', icon: PersonAddIcon, tab: 8, badge: agents.length + agentApplications.length, permission: 'canManageAgents' },
    { label: 'Disputes', icon: SupportAgentIcon, tab: 9, badge: disputes.filter(d => d.status !== 'resolved').length, permission: 'canManageDisputes' },
    { label: 'Analytics', icon: BarChartIcon, tab: 10, permission: 'canViewAnalytics' },
    { label: 'Withdrawals', icon: PaymentIcon, tab: 11, badge: withdrawals.filter(w => w.status === 'pending').length, permission: 'canManageWallets' },
  ];

  // ==================== ENHANCED ANALYTICS TAB ====================
  const renderAnalyticsTab = () => (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 }, width: '100%', overflowX: 'hidden' }}>
      {/* Header with Title and Actions */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        gap: 2, 
        mb: 3 
      }}>
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }, color: '#1E293B' }}>
            Analytics & Insights Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, mt: 0.5 }}>
            Monitor key performance metrics, revenue trends, and business intelligence data
          </Typography>
        </Box>
        <ActionButton
          variant="outlined"
          startIcon={<FileDownloadIcon />}
          onClick={() => exportToPDF([...WEEKLY_TRIPS_DATA, ...MONTHLY_REVENUE_DATA], 'Analytics Report', [{ key: 'name', header: 'Period' }, { key: 'trips', header: 'Trips' }, { key: 'revenue', header: 'Revenue (UGX)' }])}
          sx={{ borderColor: '#0025DD', color: '#0025DD' }}
        >
          Export Report
        </ActionButton>
      </Box>
      
      {/* Filter Row - Mobile Responsive */}
      <Box sx={{ 
        mb: 3, 
        display: 'flex', 
        gap: 1.5, 
        flexWrap: 'wrap', 
        justifyContent: { xs: 'center', sm: 'flex-start' },
        '& .MuiButton-root': { px: { xs: 1.5, sm: 2 }, py: { xs: 0.5, sm: 1 }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }
      }}>
        {['today', 'week', 'month', 'all'].map((filter) => (
          <Button
            key={filter}
            variant={dateFilter.type === filter ? 'contained' : 'outlined'}
            onClick={() => applyDateFilter(filter)}
            sx={{ 
              borderRadius: 20,
              textTransform: 'capitalize',
              ...(dateFilter.type === filter && { bgcolor: '#0025DD', '&:hover': { bgcolor: '#001DB0' } })
            }}
          >
            {filter === 'today' ? 'Today' : filter === 'week' ? 'This Week' : filter === 'month' ? 'This Month' : 'All Time'}
          </Button>
        ))}
      </Box>
      
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        {/* Revenue Trend Chart - Full width on mobile */}
        <Grid item xs={12} lg={8}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Revenue & Expenses Trend
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Daily breakdown for selected period
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="Revenue" size="small" sx={{ bgcolor: alpha('#0025DD', 0.1), color: '#0025DD' }} />
                <Chip label="Expenses" size="small" sx={{ bgcolor: alpha('#EF4444', 0.1), color: '#EF4444' }} />
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 300, md: 350 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WEEKLY_TRIPS_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0025DD" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0025DD" stopOpacity={0.01}/>
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0.01}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} tickFormatter={(value) => `UGX ${(value / 1000).toFixed(0)}k`} />
                  <RechartsTooltip 
                    formatter={(value) => [`UGX ${value.toLocaleString()}`, '']}
                    contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: { xs: 10, sm: 12 } }}
                  />
                  <Legend wrapperStyle={{ fontSize: { xs: 10, sm: 12 } }} />
                  <Area type="monotone" dataKey="revenue" stroke="#0025DD" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue" />
                  <Area type="monotone" dataKey="expenses" stroke="#EF4444" fill="url(#colorExpenses)" strokeWidth={2} name="Expenses" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Trips & Deliveries Chart */}
        <Grid item xs={12} lg={4}>
          <StyledCard variant="chart" sx={{ height: '100%' }}>
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Trips & Deliveries
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Weekly comparison
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 300, md: 350 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={WEEKLY_TRIPS_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis yAxisId="left" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <RechartsTooltip contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }} />
                  <Legend wrapperStyle={{ fontSize: { xs: 10, sm: 12 } }} />
                  <Bar yAxisId="left" dataKey="trips" fill="#0025DD" name="Trips" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="deliveries" fill="#10B981" name="Deliveries" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Monthly Profit Chart */}
        <Grid item xs={12} md={6}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Monthly Profit Analysis
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Revenue vs Expenses comparison
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 280, md: 320 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MONTHLY_REVENUE_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} tickFormatter={(value) => `UGX ${(value / 1000000).toFixed(0)}M`} />
                  <RechartsTooltip 
                    formatter={(value) => [`UGX ${value.toLocaleString()}`, '']}
                    contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }}
                  />
                  <Legend wrapperStyle={{ fontSize: { xs: 10, sm: 12 } }} />
                  <Bar dataKey="revenue" fill="#0025DD" name="Revenue" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="#EF4444" name="Expenses" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="profit" fill="#10B981" name="Profit" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Profit Trend Line Chart */}
        <Grid item xs={12} md={6}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Profit Growth Trend
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Month-over-month profit increase
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 280, md: 320 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={MONTHLY_REVENUE_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} tickFormatter={(value) => `UGX ${(value / 1000000).toFixed(0)}M`} />
                  <RechartsTooltip 
                    formatter={(value) => [`UGX ${value.toLocaleString()}`, 'Profit']}
                    contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }}
                  />
                  <Legend wrapperStyle={{ fontSize: { xs: 10, sm: 12 } }} />
                  <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: '#10B981' }} name="Profit" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Status Distribution - Pie Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Rider Status Distribution
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 280, md: 300 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={STATUS_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 40 : 60}
                    outerRadius={isMobile ? 60 : 90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => {
                      const percentage = (percent * 100).toFixed(0);
                      return isMobile && percentage < 10 ? '' : `${name}: ${percentage}%`;
                    }}
                    labelLine={!isMobile}
                  >
                    {STATUS_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }} />
                  <Legend 
                    wrapperStyle={{ fontSize: { xs: 8, sm: 10, md: 12 }, paddingTop: 10 }}
                    layout={isMobile ? 'horizontal' : 'vertical'}
                    align={isMobile ? 'center' : 'right'}
                    verticalAlign={isMobile ? 'bottom' : 'middle'}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Payment Methods - Pie Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Payment Methods
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Transaction distribution
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 280, md: 300 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PAYMENT_METHODS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 40 : 60}
                    outerRadius={isMobile ? 60 : 90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => isMobile ? `${value}%` : `${name}: ${value}%`}
                  >
                    {PAYMENT_METHODS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }} />
                  <Legend 
                    wrapperStyle={{ fontSize: { xs: 8, sm: 10, md: 12 }, paddingTop: 10 }}
                    layout={isMobile ? 'horizontal' : 'vertical'}
                    align={isMobile ? 'center' : 'right'}
                    verticalAlign={isMobile ? 'bottom' : 'middle'}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Dispute Status - Pie Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Dispute Resolution Status
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Current open vs resolved cases
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 280, md: 300 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DISPUTE_STATUS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 40 : 60}
                    outerRadius={isMobile ? 60 : 90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => isMobile ? `${value}` : `${name}: ${value}`}
                  >
                    {DISPUTE_STATUS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }} />
                  <Legend 
                    wrapperStyle={{ fontSize: { xs: 8, sm: 10, md: 12 }, paddingTop: 10 }}
                    layout={isMobile ? 'horizontal' : 'vertical'}
                    align={isMobile ? 'center' : 'right'}
                    verticalAlign={isMobile ? 'bottom' : 'middle'}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* Agent Performance Chart */}
        <Grid item xs={12}>
          <StyledCard variant="chart">
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5 }, 
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                  Top Agent Performance
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Referrals vs Commission earned
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 1, sm: 2 }, height: { xs: 250, sm: 300, md: 350 } }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={AGENT_PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis yAxisId="left" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: { xs: 8, sm: 10, md: 12 } }} tickFormatter={(value) => `UGX ${(value / 1000000).toFixed(0)}M`} />
                  <RechartsTooltip contentStyle={{ borderRadius: 12, fontSize: { xs: 10, sm: 12 } }} />
                  <Legend wrapperStyle={{ fontSize: { xs: 10, sm: 12 } }} />
                  <Bar yAxisId="left" dataKey="referrals" fill="#6366F1" name="Total Referrals" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="commission" fill="#10B981" name="Total Commission (UGX)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </StyledCard>
        </Grid>
        
        {/* KPI Summary Cards for Analytics */}
        <Grid item xs={12}>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
            <Grid item xs={6} sm={3}>
              <DashboardCard sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
                  {dashboardStats.totalTrips.toLocaleString()}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Total Completed Trips
                </Typography>
              </DashboardCard>
            </Grid>
            <Grid item xs={6} sm={3}>
              <DashboardCard sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" color="#10B981" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
                  {dashboardStats.customerSatisfaction}%
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Customer Satisfaction
                </Typography>
              </DashboardCard>
            </Grid>
            <Grid item xs={6} sm={3}>
              <DashboardCard sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" color="#F59E0B" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
                  {dashboardStats.averageRating}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Average Rider Rating
                </Typography>
              </DashboardCard>
            </Grid>
            <Grid item xs={6} sm={3}>
              <DashboardCard sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" color="#8B5CF6" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
                  {dashboardStats.activeGroups}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                  Active Savings Groups
                </Typography>
              </DashboardCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );

  // ============ AGENT MANAGEMENT TAB ============
  const renderAgentsTab = () => (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#1E293B' }}>
        Agent Management
      </Typography>
      
      {/* Pending Applications */}
      {agentApplications.length > 0 && hasPermission('canManageAgents') && (
        <StyledCard sx={{ mb: 3 }}>
          <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.06)', bgcolor: alpha('#F59E0B', 0.05) }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonAddIcon sx={{ color: '#F59E0B' }} />
              <Typography variant="h6" fontWeight="bold">Pending Agent Applications ({agentApplications.length})</Typography>
            </Box>
          </Box>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: '#F8FAFC' }}>
                  <TableCell>Rider Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell>Applied On</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {agentApplications.map((app) => (
                  <TableRow key={app.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">{app.rider_name}</Typography>
                    </TableCell>
                    <TableCell>{app.email}</TableCell>
                    <TableCell>{app.phone}</TableCell>
                    <TableCell>{app.experience}</TableCell>
                    <TableCell>{new Date(app.applied_at).toLocaleDateString()}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <ActionButton
                          size="small"
                          variant="contained"
                          startIcon={<CheckIcon />}
                          onClick={() => handleApproveAgent(app)}
                          sx={{ bgcolor: '#10B981' }}
                        >
                          Approve
                        </ActionButton>
                        <ActionButton
                          size="small"
                          variant="outlined"
                          startIcon={<CloseIcon />}
                          onClick={() => handleDenyAgent(app)}
                          sx={{ borderColor: '#EF4444', color: '#EF4444' }}
                        >
                          Deny
                        </ActionButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledCard>
      )}
      
      {/* Active Agents Table */}
      <DataTable
        title="Active Agents"
        data={agents.filter(a => a.status === 'approved')}
        type="agent"
        showStatusFilter
        columns={[
          { key: 'rider_name', label: 'Agent', render: (a) => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 28, height: 28, bgcolor: '#6366F1', fontSize: '0.8rem' }}>
                {a.rider_name?.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight="bold">{a.rider_name}</Typography>
                <Chip label={a.tier} size="small" sx={{ height: 18, fontSize: '0.6rem', bgcolor: alpha('#6366F1', 0.1), color: '#6366F1' }} />
              </Box>
            </Box>
          )},
          { key: 'referral_code', label: 'Referral Code' },
          { key: 'total_referrals', label: 'Referrals' },
          { key: 'total_commission', label: 'Total Commission', render: (a) => `UGX ${formatCurrency(a.total_commission)}` },
          { key: 'commission_rate', label: 'Commission Rate', render: (a) => `${a.commission_rate}%` },
          { key: 'region', label: 'Region' },
          { key: 'is_active', label: 'Status', render: (a) => <StatusChip status={a.is_active ? 'active' : 'inactive'} label={a.is_active ? 'Active' : 'Inactive'} /> },
        ]}
        extraButtons={hasPermission('canManageAgents') && (
          <ActionButton
            variant="outlined"
            startIcon={<SettingsIcon />}
            onClick={() => showSnackbar('Agent settings coming soon', 'info')}
          >
            Settings
          </ActionButton>
        )}
      />
    </Box>
  );

  // ============ DISPUTE MANAGEMENT TAB ============
  const renderDisputesTab = () => (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#1E293B' }}>
        Dispute Management
      </Typography>
      
      {/* Filter Row */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography variant="body2" fontWeight="bold">Filter by status:</Typography>
        <Button size="small" variant="outlined" onClick={() => applyDateFilter('all')}>All</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#F59E0B', color: '#F59E0B' }}>Pending</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#6366F1', color: '#6366F1' }}>Investigating</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#10B981', color: '#10B981' }}>Resolved</Button>
        <Button size="small" variant="outlined" sx={{ borderColor: '#EF4444', color: '#EF4444' }}>Escalated</Button>
      </Box>
      
      <DataTable
        title="Support Tickets & Disputes"
        data={disputes}
        type="dispute"
        showStatusFilter
        columns={[
          { key: 'ticket_number', label: 'Ticket #', render: (d) => (
            <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0025DD' }}>
              {d.ticket_number}
            </Typography>
          )},
          { key: 'title', label: 'Title', render: (d) => (
            <Typography variant="body2" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {d.title}
            </Typography>
          )},
          { key: 'rider_name', label: 'Rider' },
          { key: 'customer_name', label: 'Customer' },
          { key: 'category', label: 'Category', render: (d) => (
            <Chip label={d.category} size="small" />
          )},
          { key: 'priority', label: 'Priority', render: (d) => (
            <Chip 
              label={d.priority} 
              size="small" 
              sx={{ bgcolor: d.priority === 'high' ? alpha('#EF4444', 0.1) : alpha('#F59E0B', 0.1), color: d.priority === 'high' ? '#991B1B' : '#92400E' }}
            />
          )},
          { key: 'status', label: 'Status', render: (d) => <StatusChip status={d.status} label={d.status} /> },
        ]}
        extraButtons={
          <ActionButton
            variant="contained"
            startIcon={<SupportAgentIcon />}
            sx={{ bgcolor: '#0025DD' }}
          >
            Manage Tickets
          </ActionButton>
        }
      />
      
      {/* Quick Stats */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6} md={3}>
          <DashboardCard sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="#F59E0B">{disputes.filter(d => d.status === 'pending').length}</Typography>
            <Typography variant="caption" color="text.secondary">Pending Tickets</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={6} md={3}>
          <DashboardCard sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="#6366F1">{disputes.filter(d => d.status === 'investigating').length}</Typography>
            <Typography variant="caption" color="text.secondary">Under Investigation</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={6} md={3}>
          <DashboardCard sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="#10B981">{disputes.filter(d => d.status === 'resolved').length}</Typography>
            <Typography variant="caption" color="text.secondary">Resolved</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={6} md={3}>
          <DashboardCard sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="#EF4444">{disputes.filter(d => d.priority === 'high' && d.status !== 'resolved').length}</Typography>
            <Typography variant="caption" color="text.secondary">High Priority</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );

  // ============ GENERIC TABLE COMPONENT ============
  const DataTable = ({ 
    title, 
    data, 
    columns, 
    type, 
    extraButtons, 
    onAdd,
    showSearch = true,
    showStatusFilter = false,
    showBlockDelete = false
  }) => {
    const [localSearch, setLocalSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredData = data.filter(item => {
      const searchable = columns.map(col => {
        const value = typeof col.accessor === 'function' 
          ? col.accessor(item) 
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
            <Grid container spacing={1.5} alignItems="center">
              <Grid item xs={12} sm={showStatusFilter ? 8 : 12} md={showStatusFilter ? 8 : 8}>
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
                />
              </Grid>
              {showStatusFilter && (
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={statusFilter}
                      onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setPage(0);
                      }}
                      label="Status"
                    >
                      <MenuItem value="all">All Statuses</MenuItem>
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                      <MenuItem value="inactive">Inactive</MenuItem>
                      <MenuItem value="cancelled">Cancelled</MenuItem>
                      <MenuItem value="suspended">Suspended</MenuItem>
                      <MenuItem value="investigating">Investigating</MenuItem>
                      <MenuItem value="resolved">Resolved</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )}
            </Grid>
          )}
        </Box>

        {/* Table */}
        <TableContainer sx={{ 
          overflowX: 'auto',
          '&::-webkit-scrollbar': { 
            height: '6px',
            width: '6px' 
          },
          '&::-webkit-scrollbar-thumb': { 
            backgroundColor: 'rgba(0,0,0,0.15)',
            borderRadius: '3px' 
          }
        }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ bgcolor: '#F8FAFC' }}>
                <TableCell sx={{ fontWeight: 700, fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  #
                </TableCell>
                {columns.map((col) => (
                  <TableCell 
                    key={col.key} 
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, 
                      color: '#64748B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
                <TableCell sx={{ fontWeight: 700, fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length + 2} align="center" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <ErrorIcon sx={{ color: '#94A3B8', fontSize: { xs: 36, sm: 48 } }} />
                      <Typography variant="body1" color="text.secondary" fontWeight="bold" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
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
                  <TableRow 
                    key={item.id} 
                    hover 
                    sx={{ 
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell sx={{ color: '#94A3B8', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' } }}>
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    {columns.map((col) => (
                      <TableCell key={col.key} sx={{ maxWidth: { xs: 120, sm: 180, md: 250 }, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {col.render ? col.render(item) : (
                          <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' } }}>
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
                            onClick={() => handleViewDetails(item, type)}
                            sx={{ 
                              bgcolor: alpha('#0025DD', 0.05),
                              '&:hover': { bgcolor: alpha('#0025DD', 0.1) }
                            }}
                          >
                            <VisibilityIcon fontSize="small" sx={{ color: '#0025DD' }} />
                          </IconButton>
                        </Tooltip>
                        {type === 'dispute' && hasPermission('canManageDisputes') && (
                          <Tooltip title="Open Chat" arrow>
                            <IconButton 
                              size="small"
                              onClick={() => openDisputeChat(item)}
                              sx={{ bgcolor: alpha('#6366F1', 0.05) }}
                            >
                              <ChatIcon fontSize="small" sx={{ color: '#6366F1' }} />
                            </IconButton>
                          </Tooltip>
                        )}
                        {(type === 'rider' || type === 'contact' || type === 'group') && hasPermission('canManageRiders') && (
                          <>
                            {type === 'rider' && (
                              <Tooltip title={item.status === 'active' ? 'Block User' : 'Unblock User'} arrow>
                                <IconButton 
                                  size="small"
                                  onClick={() => handleBlockUser(item, type)}
                                  sx={{ 
                                    bgcolor: alpha(item.status === 'active' ? '#EF4444' : '#10B981', 0.05),
                                    '&:hover': { bgcolor: alpha(item.status === 'active' ? '#EF4444' : '#10B981', 0.1) }
                                  }}
                                >
                                  <BlockIcon fontSize="small" sx={{ color: item.status === 'active' ? '#EF4444' : '#10B981' }} />
                                </IconButton>
                              </Tooltip>
                            )}
                            {type === 'group' && (
                              <Tooltip title={item.status === 'active' ? 'Suspend Group' : 'Activate Group'} arrow>
                                <IconButton 
                                  size="small"
                                  onClick={() => handleBlockUser(item, 'group')}
                                  sx={{ 
                                    bgcolor: alpha(item.status === 'active' ? '#EF4444' : '#10B981', 0.05),
                                    '&:hover': { bgcolor: alpha(item.status === 'active' ? '#EF4444' : '#10B981', 0.1) }
                                  }}
                                >
                                  <BlockIcon fontSize="small" sx={{ color: item.status === 'active' ? '#EF4444' : '#10B981' }} />
                                </IconButton>
                              </Tooltip>
                            )}
                            {type === 'contact' && (
                              <Tooltip title="Edit" arrow>
                                <IconButton 
                                  size="small"
                                  onClick={() => handleOpenEditContact(item)}
                                  sx={{ 
                                    bgcolor: alpha('#F59E0B', 0.05),
                                    '&:hover': { bgcolor: alpha('#F59E0B', 0.1) }
                                  }}
                                >
                                  <EditIcon fontSize="small" sx={{ color: '#F59E0B' }} />
                                </IconButton>
                              </Tooltip>
                            )}
                            <Tooltip title="Delete" arrow>
                              <IconButton 
                                size="small"
                                onClick={() => handleDeleteUser(item, type)}
                                sx={{ 
                                  bgcolor: alpha('#EF4444', 0.05),
                                  '&:hover': { bgcolor: alpha('#EF4444', 0.1) }
                                }}
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
            '.MuiTablePagination-selectLabel': { fontSize: { xs: '0.7rem', sm: '0.8rem' } },
            '.MuiTablePagination-displayedRows': { fontSize: { xs: '0.7rem', sm: '0.8rem' } },
            '.MuiTablePagination-select': { fontSize: { xs: '0.7rem', sm: '0.8rem' } },
            '.MuiTablePagination-actions': { '& .MuiIconButton-root': { p: { xs: 0.5, sm: 1 } } },
          }}
        />
      </StyledCard>
    );
  };

  // ============ ALL TAB RENDERERS ============
  const renderRidersTab = () => (
    <DataTable
      title="🇺🇬 Riders Management - Boda Boda"
      data={riders}
      type="rider"
      showStatusFilter
      columns={[
        { key: 'full_names', label: 'Rider', render: (r) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 }, bgcolor: '#0025DD', fontSize: '0.8rem', fontWeight: 'bold' }}>
              {r.full_names?.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body2" fontWeight="bold" noWrap sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {r.full_names}
              </Typography>
              <Typography variant="caption" color="text.secondary">{r.rider_type?.replace('_', ' ')}</Typography>
            </Box>
          </Box>
        )},
        { key: 'phone_number', label: 'Phone' },
        { key: 'stage', label: 'Stage', render: (r) => r.stage || 'N/A' },
        { key: 'motorcycle_model', label: 'Motorcycle', render: (r) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <MotorcycleIcon sx={{ fontSize: 16, color: '#64748B' }} />
            <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
              {r.motorcycle_model}
            </Typography>
          </Box>
        )},
        { key: 'total_trips', label: 'Trips', render: (r) => (
          <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            {r.total_trips?.toLocaleString()}
          </Typography>
        )},
        { key: 'total_earnings', label: 'Earnings', render: (r) => (
          <Typography variant="body2" fontWeight="bold" color="#10B981" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            UGX {formatCurrency(r.total_earnings)}
          </Typography>
        )},
        { key: 'rating', label: 'Rating', render: (r) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ fontSize: 14, color: '#F59E0B' }} />
            <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
              {r.rating || '0.0'}
            </Typography>
          </Box>
        )},
        { key: 'status', label: 'Status', render: (r) => <StatusChip status={r.status} label={r.status} /> },
      ]}
    />
  );

  const renderTripsTab = () => (
    <DataTable
      title="🏍️ Trips Management"
      data={trips}
      type="trip"
      showStatusFilter
      columns={[
        { key: 'id', label: 'Trip ID', render: (t) => (
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0025DD', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            {t.id}
          </Typography>
        )},
        { key: 'rider_name', label: 'Rider' },
        { key: 'pickup_location', label: 'Pickup', render: (t) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: 14, color: '#0025DD' }} />
            <Typography variant="body2" sx={{ 
              maxWidth: { xs: 80, sm: 120, md: 150 }, 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap',
              fontSize: { xs: '0.7rem', sm: '0.8rem' }
            }}>
              {t.pickup_location}
            </Typography>
          </Box>
        )},
        { key: 'destination', label: 'Destination', render: (t) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: 14, color: '#EF4444' }} />
            <Typography variant="body2" sx={{ 
              maxWidth: { xs: 80, sm: 120, md: 150 }, 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap',
              fontSize: { xs: '0.7rem', sm: '0.8rem' }
            }}>
              {t.destination}
            </Typography>
          </Box>
        )},
        { key: 'trip_fare', label: 'Fare', render: (t) => (
          <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            UGX {formatCurrency(t.trip_fare)}
          </Typography>
        )},
        { key: 'payment_method', label: 'Payment', render: (t) => (
          <Chip 
            label={t.payment_method?.replace('_', ' ')} 
            size="small" 
            sx={{ 
              fontSize: { xs: '0.6rem', sm: '0.7rem' }, 
              textTransform: 'capitalize',
              bgcolor: t.payment_method === 'mobile_money' ? alpha('#10B981', 0.1) : alpha('#6B7280', 0.1),
              color: t.payment_method === 'mobile_money' ? '#065F46' : '#374151',
            }} 
          />
        )},
        { key: 'status', label: 'Status', render: (t) => <StatusChip status={t.status} label={t.status} /> },
      ]}
    />
  );

  // ============ CONTACT DIALOG ============
  const renderContactDialog = () => (
    <Dialog 
      open={contactDialogOpen} 
      onClose={() => setContactDialogOpen(false)}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
      TransitionComponent={Slide}
      PaperProps={{ sx: { borderRadius: { xs: 2, sm: 3 } } }}
    >
      <Box sx={{ bgcolor: '#0025DD', color: 'white', p: { xs: 2, sm: 2.5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            {currentContact?.id ? 'Edit Contact' : 'Add New Contact'}
          </Typography>
          <IconButton onClick={() => setContactDialogOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name *" value={currentContact?.full_name || ''} 
              onChange={(e) => setCurrentContact({...currentContact, full_name: e.target.value})}
              placeholder="e.g., Jane Nakamya" size="small" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Type</InputLabel>
              <Select label="Type" value={currentContact?.type || 'customer'}
                onChange={(e) => setCurrentContact({...currentContact, type: e.target.value})}>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="supplier">Supplier</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select label="Status" value={currentContact?.status || 'active'}
                onChange={(e) => setCurrentContact({...currentContact, status: e.target.value})}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone Number *" value={currentContact?.phone || '+256 '}
              onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})}
              placeholder="+256 7XX XXXXXX" size="small" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" type="email" value={currentContact?.email || ''}
              onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})}
              placeholder="email@example.com" size="small" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Business Name" value={currentContact?.bussiness_name || ''}
              onChange={(e) => setCurrentContact({...currentContact, bussiness_name: e.target.value})}
              placeholder="e.g., Kampala Fresh Foods" size="small" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Location" value={currentContact?.location || ''}
              onChange={(e) => setCurrentContact({...currentContact, location: e.target.value})}
              placeholder="e.g., Nakawa, Kampala" size="small" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: { xs: 2, sm: 2.5 }, borderTop: '1px solid rgba(0,0,0,0.08)', flexDirection: isMobile ? 'column' : 'row', gap: 1 }}>
        <Button onClick={() => setContactDialogOpen(false)} sx={{ color: '#64748B' }} fullWidth={isMobile}>Cancel</Button>
        <ActionButton variant="contained" sx={{ bgcolor: '#0025DD' }} onClick={handleSaveContact} startIcon={<SaveIcon />} fullWidth={isMobile}>
          {currentContact?.id ? 'Update Contact' : 'Add Contact'}
        </ActionButton>
      </DialogActions>
    </Dialog>
  );

  // ============ DELETE CONFIRMATION DIALOG ============
  const renderDeleteConfirmDialog = () => (
    <Dialog
      open={deleteConfirmDialog.open}
      onClose={() => setDeleteConfirmDialog({ open: false, item: null, type: '' })}
      PaperProps={{ sx: { borderRadius: 3, maxWidth: 400, mx: 2 } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#EF4444', color: 'white' }}>
        <WarningIcon />
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          Confirm Delete
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <DialogContentText>
          Are you sure you want to delete <strong>{deleteConfirmDialog.item?.full_names || deleteConfirmDialog.item?.full_name || deleteConfirmDialog.item?.name}</strong>?
          This action cannot be undone and will permanently remove all associated data.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1, flexDirection: isMobile ? 'column' : 'row' }}>
        <Button 
          onClick={() => setDeleteConfirmDialog({ open: false, item: null, type: '' })}
          variant="outlined"
          sx={{ borderColor: '#64748B', color: '#64748B' }}
          fullWidth={isMobile}
        >
          Cancel
        </Button>
        <Button 
          onClick={confirmDeleteUser}
          variant="contained"
          sx={{ bgcolor: '#EF4444', '&:hover': { bgcolor: '#DC2626' } }}
          startIcon={<DeleteIcon />}
          fullWidth={isMobile}
        >
          Delete Permanently
        </Button>
      </DialogActions>
    </Dialog>
  );

  // ============ BLOCK CONFIRMATION DIALOG ============
  const renderBlockConfirmDialog = () => (
    <Dialog
      open={blockConfirmDialog.open}
      onClose={() => setBlockConfirmDialog({ open: false, item: null, type: '' })}
      PaperProps={{ sx: { borderRadius: 3, maxWidth: 400, mx: 2 } }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        bgcolor: blockConfirmDialog.item?.status === 'active' ? '#EF4444' : '#10B981', 
        color: 'white' 
      }}>
        <BlockIcon />
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          {blockConfirmDialog.item?.status === 'active' ? 'Confirm Block/Suspend' : 'Confirm Activate'}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <DialogContentText>
          Are you sure you want to {blockConfirmDialog.item?.status === 'active' ? 'block/suspend' : 'activate'} <strong>{blockConfirmDialog.item?.full_names || blockConfirmDialog.item?.name}</strong>?
          {blockConfirmDialog.item?.status === 'active' 
            ? ' This user/group will no longer be able to access the platform or perform any actions.'
            : ' This user/group will regain full access to the platform.'}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1, flexDirection: isMobile ? 'column' : 'row' }}>
        <Button 
          onClick={() => setBlockConfirmDialog({ open: false, item: null, type: '' })}
          variant="outlined"
          sx={{ borderColor: '#64748B', color: '#64748B' }}
          fullWidth={isMobile}
        >
          Cancel
        </Button>
        <Button 
          onClick={confirmBlockUser}
          variant="contained"
          sx={{ bgcolor: blockConfirmDialog.item?.status === 'active' ? '#EF4444' : '#10B981' }}
          fullWidth={isMobile}
        >
          {blockConfirmDialog.item?.status === 'active' ? 'Yes, Block/Suspend' : 'Yes, Activate'}
        </Button>
      </DialogActions>
    </Dialog>
  );

  // ============ COMMISSION ADJUSTMENT DIALOG ============
  const renderCommissionDialog = () => (
    <Dialog
      open={adjustCommissionDialog.open}
      onClose={() => setAdjustCommissionDialog({ open: false, agent: null })}
      PaperProps={{ sx: { borderRadius: 3, maxWidth: 400, mx: 2 } }}
    >
      <DialogTitle sx={{ bgcolor: '#0025DD', color: 'white' }}>
        Adjust Commission Rate
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <DialogContentText sx={{ mb: 2 }}>
          Set new commission rate for {adjustCommissionDialog.agent?.rider_name}
        </DialogContentText>
        <TextField
          fullWidth
          type="number"
          label="Commission Rate (%)"
          defaultValue={adjustCommissionDialog.agent?.commission_rate || 5}
          onChange={(e) => setAdjustCommissionDialog({ ...adjustCommissionDialog, newCommission: parseInt(e.target.value) })}
          InputProps={{ endAdornment: '%' }}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={() => setAdjustCommissionDialog({ open: false, agent: null })}>Cancel</Button>
        <Button 
          variant="contained" 
          sx={{ bgcolor: '#0025DD' }}
          onClick={() => handleAdjustCommission(adjustCommissionDialog.agent, adjustCommissionDialog.newCommission || 5)}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );

  // ============ DISPUTE CHAT DIALOG ============
  const renderDisputeChatDialog = () => (
    <Dialog
      open={disputeChatOpen}
      onClose={() => setDisputeChatOpen(false)}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{ sx: { borderRadius: { xs: 0, sm: 3 } } }}
    >
      <Box sx={{ bgcolor: '#0025DD', color: 'white', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {selectedDispute?.ticket_number} - {selectedDispute?.title}
            </Typography>
            <Typography variant="caption">
              {selectedDispute?.rider_name} vs {selectedDispute?.customer_name}
            </Typography>
          </Box>
          <IconButton onClick={() => setDisputeChatOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogContent sx={{ p: 2, bgcolor: '#F8FAFC' }}>
        <Box sx={{ height: 400, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
          {selectedDispute?.messages?.map((msg) => (
            <ChatBubble key={msg.id} isUser={msg.sender === 'admin'}>
              <Typography variant="caption" className="message-sender">
                {msg.sender_name} • {new Date(msg.timestamp).toLocaleTimeString()}
              </Typography>
              <Box className="message-content">
                <Typography variant="body2">{msg.message}</Typography>
              </Box>
            </ChatBubble>
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type your response..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
        />
        <IconButton onClick={handleSendChatMessage} sx={{ bgcolor: '#0025DD', color: 'white', borderRadius: 2, ml: 1 }}>
          <SendIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );

  // ============ DASHBOARD TAB ============
  const renderDashboardTab = () => (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
      {/* Welcome Header */}
      <GradientCard 
        gradient={greeting.isHoliday 
          ? `linear-gradient(135deg, ${greeting.color} 0%, ${greeting.color}cc 100%)`
          : 'linear-gradient(135deg, #0025DD 0%, #4F46E5 100%)'
        }
        sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 2, sm: 3 } }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          justifyContent: 'space-between', 
          gap: 2 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap' }}>
            {greeting.icon && (
              <Box sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                borderRadius: '50%', 
                width: { xs: 48, sm: 56 }, 
                height: { xs: 48, sm: 56 }, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <greeting.icon sx={{ fontSize: { xs: 24, sm: 28 } }} />
              </Box>
            )}
            <Box>
              <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                {greeting.text}, {user.full_names?.split(' ')[0]}!
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {new Date().toLocaleDateString('en-UG', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  timeZone: 'Africa/Kampala'
                })}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5, display: 'block', fontSize: { xs: '0.6rem', sm: '0.65rem' } }}>
                Enfuna Rider System Admin Dashboard • Kampala, Uganda 🇺🇬
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1, alignSelf: { xs: 'flex-end', sm: 'center' } }}>
            <ActionButton
              variant="contained"
              startIcon={refreshing ? <CircularProgress size={18} color="inherit" /> : <RefreshIcon />}
              onClick={handleRefresh}
              disabled={refreshing}
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                px: { xs: 1.5, sm: 2 }
              }}
            >
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </ActionButton>
            <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.15)' }}>
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Box>
      </GradientCard>

      {/* Key Metrics */}
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: { xs: 1.5, sm: 2 }, color: '#1E293B', fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
          Key Performance Metrics
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
          {statsCards.map((stat, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <DashboardCard>
                <Box sx={{ 
                  background: stat.gradient,
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                  }
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box sx={{ flex: 1, mr: 1, minWidth: 0 }}>
                      <Typography variant="caption" sx={{ 
                        opacity: 0.9, 
                        fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.65rem' }, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.5px',
                        display: 'block'
                      }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" sx={{ 
                        mt: 0.5, 
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' }, 
                        lineHeight: 1.2,
                        wordBreak: 'break-word'
                      }}>
                        {stat.value}
                      </Typography>
                    </Box>
                    <stat.icon sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, opacity: 0.9, flexShrink: 0 }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                    <Typography variant="caption" sx={{ 
                      opacity: 0.85, 
                      fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.65rem' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {stat.subValue}
                    </Typography>
                    {stat.change && (
                      <Chip
                        label={stat.change}
                        size="small"
                        sx={{
                          height: 18,
                          fontSize: '0.6rem',
                          bgcolor: stat.changeType === 'up' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)',
                          color: 'white',
                          flexShrink: 0,
                        }}
                        icon={stat.changeType === 'up' ? <TrendingUpIcon sx={{ fontSize: 12 }} /> : <TrendingDownIcon sx={{ fontSize: 12 }} />}
                      />
                    )}
                  </Box>
                </Box>
              </DashboardCard>
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
                <Chip label={trips.length} size="small" sx={{ bgcolor: alpha('#0025DD', 0.1), color: '#0025DD' }} />
              </Box>
              <Button 
                size="small" 
                onClick={() => setActiveTab(2)} 
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
                            onClick={() => handleViewDetails(trip, 'trip')}
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
                <Chip 
                  label={`${disputes.filter(d => d.status !== 'resolved').length} open`} 
                  size="small" 
                  sx={{ bgcolor: alpha('#EF4444', 0.1), color: '#EF4444' }} 
                />
              </Box>
              <Button 
                size="small" 
                onClick={() => setActiveTab(9)} 
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
                        <Chip 
                          label={dispute.priority} 
                          size="small" 
                          sx={{ 
                            bgcolor: dispute.priority === 'high' ? alpha('#EF4444', 0.1) : alpha('#F59E0B', 0.1),
                            color: dispute.priority === 'high' ? '#991B1B' : '#92400E',
                            fontSize: { xs: '0.6rem', sm: '0.7rem' }
                          }} 
                        />
                      </TableCell>
                      <TableCell>
                        <StatusChip status={dispute.status} label={dispute.status} size="small" />
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="View Details" arrow>
                          <IconButton 
                            size="small" 
                            onClick={() => handleViewDetails(dispute, 'dispute')}
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
                onClick={() => setActiveTab(6)} 
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
                  {wallets.map((wallet) => (
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
                            onClick={() => handleViewDetails(wallet, 'wallet')}
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
                onClick={() => setActiveTab(5)} 
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
                  {groups.map((group) => (
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
                            onClick={() => handleViewDetails(group, 'group')}
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

  // ============ SIDEBAR RENDER ============
  const renderSidebar = () => (
    <SidebarContainer className={mobileSidebarOpen ? 'open' : ''}>
      <GradientCard gradient="linear-gradient(135deg, #0025DD 0%, #4F46E5 100%)" sx={{ borderRadius: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <MotorcycleIcon sx={{ fontSize: 28 }} />
          <Typography variant="h5" fontWeight="bold">
            Enfuna
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem' }}>
          System Admin
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mt: 0.5 }}>
          🇺🇬 Kampala, Uganda
        </Typography>
      </GradientCard>
      
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar 
          sx={{ 
            bgcolor: '#0025DD', 
            width: 40, 
            height: 40,
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {user.full_names?.charAt(0) || 'A'}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" fontWeight="bold" noWrap>
            {user.full_names}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {currentUserRole.replace('_', ' ').toUpperCase()}
          </Typography>
        </Box>
        <Tooltip title="Switch Role (Demo)">
          <IconButton size="small" onClick={() => {
            const roles = ['super_admin', 'admin', 'agent'];
            const currentIndex = roles.indexOf(currentUserRole);
            const nextRole = roles[(currentIndex + 1) % roles.length];
            changeUserRole(nextRole);
          }}>
            <AdminPanelSettingsIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Divider />
      
      <List sx={{ flex: 1, px: 1, py: 2 }}>
        {sidebarItems.map((item) => {
          const isActive = activeTab === item.tab;
          if (item.permission && !hasPermission(item.permission)) return null;
          
          return (
            <ListItem 
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                setMobileSidebarOpen(false);
              }}
              sx={{ 
                borderRadius: 2, 
                mb: 0.5,
                cursor: 'pointer',
                bgcolor: isActive ? alpha('#0025DD', 0.08) : 'transparent',
                borderLeft: isActive ? '3px solid #0025DD' : '3px solid transparent',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: alpha('#0025DD', 0.04),
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <item.icon sx={{ 
                  color: isActive ? '#0025DD' : '#64748B',
                  fontSize: 20,
                  transition: 'color 0.2s'
                }} />
              </ListItemIcon>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#0025DD' : '#334155',
                  fontSize: '0.85rem',
                }}
              />
              {item.badge > 0 && (
                <Box
                  sx={{
                    bgcolor: isActive ? '#0025DD' : '#EF4444',
                    color: 'white',
                    borderRadius: '50%',
                    width: 22,
                    height: 22,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                  }}
                >
                  {item.badge}
                </Box>
              )}
            </ListItem>
          );
        })}
      </List>
      
      <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)', bgcolor: '#F8FAFC' }}>
        <ActionButton
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          sx={{ borderColor: '#DC2626', color: '#DC2626' }}
        >
          Logout
        </ActionButton>
      </Box>
    </SidebarContainer>
  );

  // ============ DETAILS MODAL RENDERER ============
  const renderDetailsModal = () => {
    if (!selectedItem) return null;

    const getStatusColor = (status) => {
      const colors = {
        active: '#10B981',
        completed: '#10B981',
        approved: '#10B981',
        resolved: '#10B981',
        pending: '#F59E0B',
        investigating: '#6366F1',
        escalated: '#EF4444',
        inactive: '#6B7280',
        suspended: '#EF4444',
        cancelled: '#EF4444',
        rejected: '#EF4444',
      };
      return colors[status?.toLowerCase()] || '#6B7280';
    };

    const renderRiderDetails = () => (
      <Box>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          gap: 2, 
          mb: 3, 
          pb: 3, 
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          <Avatar sx={{ 
            width: { xs: 60, sm: 72 }, 
            height: { xs: 60, sm: 72 }, 
            bgcolor: '#0025DD', 
            fontSize: { xs: 24, sm: 28 }, 
            fontWeight: 'bold' 
          }}>
            {selectedItem.full_names?.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
              {selectedItem.full_names}
            </Typography>
            <Typography variant="body2" color="text.secondary">{selectedItem.id}</Typography>
            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" useFlexGap>
              <Chip 
                label={selectedItem.status} 
                size="small" 
                sx={{ bgcolor: alpha(getStatusColor(selectedItem.status), 0.1), color: getStatusColor(selectedItem.status), fontWeight: 600 }}
              />
              {selectedItem.is_verified && (
                <Chip 
                  icon={<VerifiedUserIcon sx={{ fontSize: 14 }} />}
                  label="Verified" 
                  size="small" 
                  sx={{ bgcolor: alpha('#10B981', 0.1), color: '#10B981', fontWeight: 600 }}
                />
              )}
              {selectedItem.is_agent && (
                <Chip 
                  icon={<AdminPanelSettingsIcon sx={{ fontSize: 14 }} />}
                  label="Agent" 
                  size="small" 
                  sx={{ bgcolor: alpha('#6366F1', 0.1), color: '#6366F1', fontWeight: 600 }}
                />
              )}
            </Stack>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DetailSection title="Personal Information" icon={PersonIcon} color="#0025DD">
              <DetailField label="Full Name" value={selectedItem.full_names} icon={PersonIcon} color="#0025DD" />
              <DetailField label="Email Address" value={selectedItem.email} icon={EmailIcon} color="#6366F1" />
              <DetailField label="Phone Number" value={selectedItem.phone_number} icon={PhoneIcon} color="#10B981" />
              <DetailField label="Member Since" value={new Date(selectedItem.created_at).toLocaleDateString('en-UG')} icon={CalendarTodayIcon} color="#F59E0B" />
            </DetailSection>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DetailSection title="Vehicle Information" icon={MotorcycleIcon} color="#F59E0B">
              <DetailField label="Vehicle Type" value={selectedItem.vehicle_type} icon={DirectionsBikeIcon} color="#F59E0B" />
              <DetailField label="Motorcycle Model" value={selectedItem.motorcycle_model} icon={TwoWheelerIcon} color="#8B5CF6" />
              <DetailField label="License Plate" value={selectedItem.license_plate} icon={LocalShippingIcon} color="#06B6D4" />
              <DetailField label="Rider Type" value={selectedItem.rider_type?.replace('_', ' ')} icon={WorkIcon} color="#EC4899" />
            </DetailSection>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DetailSection title="Location Details" icon={LocationOnIcon} color="#EF4444">
              <DetailField label="Stage" value={selectedItem.stage} icon={LocationOnIcon} color="#EF4444" />
              <DetailField label="Division" value={selectedItem.division} icon={BusinessIcon} color="#8B5CF6" />
              <DetailField label="District" value={selectedItem.district} icon={FlagIcon} color="#0025DD" />
            </DetailSection>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DetailSection title="Performance Metrics" icon={InsightsIcon} color="#10B981">
              <Grid container spacing={1.5}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: { xs: 1, sm: 2 }, bgcolor: alpha('#0025DD', 0.05), borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                      {selectedItem.total_trips?.toLocaleString() || '0'}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem' } }}>
                      Total Trips
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: { xs: 1, sm: 2 }, bgcolor: alpha('#10B981', 0.05), borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="#10B981" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                      UGX {formatCurrency(selectedItem.total_earnings)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem' } }}>
                      Total Earnings
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: { xs: 1, sm: 2 }, bgcolor: alpha('#F59E0B', 0.05), borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                      <StarIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#F59E0B' }} />
                      <Typography variant="h6" fontWeight="bold" color="#F59E0B" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        {selectedItem.rating || '0.0'}
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem' } }}>
                      Rating
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: { xs: 1, sm: 2 }, bgcolor: alpha('#8B5CF6', 0.05), borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="#8B5CF6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                      {selectedItem.total_deliveries || '0'}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem' } }}>
                      Deliveries
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </DetailSection>
          </Grid>
        </Grid>

        {hasPermission('canManageRiders') && (
          <>
            <Divider sx={{ my: { xs: 2, sm: 3 } }} />
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'flex-end',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
              <ActionButton
                variant="contained"
                fullWidth={isMobile}
                startIcon={selectedItem.status === 'active' ? <BlockIcon /> : <CheckIcon />}
                onClick={() => {
                  handleBlockUser(selectedItem, 'rider');
                  handleCloseDetailsModal();
                }}
                sx={{ bgcolor: selectedItem.status === 'active' ? '#EF4444' : '#10B981' }}
              >
                {selectedItem.status === 'active' ? 'Block User' : 'Unblock User'}
              </ActionButton>
              <ActionButton
                variant="outlined"
                fullWidth={isMobile}
                startIcon={<DeleteIcon />}
                onClick={() => {
                  handleDeleteUser(selectedItem, 'rider');
                  handleCloseDetailsModal();
                }}
                sx={{ borderColor: '#EF4444', color: '#EF4444' }}
              >
                Delete User
              </ActionButton>
            </Box>
          </>
        )}
      </Box>
    );

    const renderDisputeDetails = () => (
      <Box>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          gap: 2, 
          mb: 3, 
          pb: 3, 
          borderBottom: '1px solid rgba(0,0,0,0.1)' 
        }}>
          <Box sx={{ bgcolor: alpha('#EF4444', 0.1), borderRadius: 2, p: 1.5, display: 'flex' }}>
            <SupportAgentIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: '#EF4444' }} />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
              {selectedItem.ticket_number}
            </Typography>
            <Typography variant="body2" color="text.secondary">{selectedItem.title}</Typography>
            <Stack direction="row" spacing={1} mt={0.5} flexWrap="wrap" useFlexGap>
              <Chip label={selectedItem.status} size="small" status={selectedItem.status} />
              <Chip 
                label={selectedItem.priority} 
                size="small" 
                sx={{ bgcolor: selectedItem.priority === 'high' ? alpha('#EF4444', 0.1) : alpha('#F59E0B', 0.1), color: selectedItem.priority === 'high' ? '#991B1B' : '#92400E' }}
              />
              <Chip label={selectedItem.category} size="small" />
            </Stack>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DetailSection title="Dispute Information" icon={InfoIcon} color="#EF4444">
              <DetailField label="Rider" value={selectedItem.rider_name} icon={MotorcycleIcon} color="#0025DD" />
              <DetailField label="Customer" value={selectedItem.customer_name} icon={PersonIcon} color="#8B5CF6" />
              <DetailField label="Trip ID" value={selectedItem.trip_id} icon={DirectionsBikeIcon} color="#F59E0B" />
              <DetailField label="Created" value={new Date(selectedItem.created_at).toLocaleString('en-UG')} icon={CalendarTodayIcon} color="#F59E0B" />
              {selectedItem.resolved_at && (
                <DetailField label="Resolved" value={new Date(selectedItem.resolved_at).toLocaleString('en-UG')} icon={CheckCircleIcon} color="#10B981" />
              )}
            </DetailSection>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DetailSection title="Description" icon={DescriptionIcon} color="#6366F1">
              <Typography variant="body2" sx={{ p: 1, bgcolor: '#F8FAFC', borderRadius: 2 }}>
                {selectedItem.description}
              </Typography>
              {selectedItem.resolution_notes && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="#10B981">Resolution Notes:</Typography>
                  <Typography variant="body2" sx={{ p: 1, bgcolor: alpha('#10B981', 0.05), borderRadius: 2 }}>
                    {selectedItem.resolution_notes}
                  </Typography>
                </Box>
              )}
            </DetailSection>
          </Grid>
          <Grid item xs={12}>
            <DetailSection title="Chat History" icon={ChatIcon} color="#0025DD">
              <Box sx={{ maxHeight: 300, overflowY: 'auto', p: 1 }}>
                {selectedItem.messages?.map((msg) => (
                  <ChatBubble key={msg.id} isUser={msg.sender === 'admin'}>
                    <Typography variant="caption" className="message-sender">
                      {msg.sender_name} • {new Date(msg.timestamp).toLocaleTimeString()}
                    </Typography>
                    <Box className="message-content">
                      <Typography variant="body2">{msg.message}</Typography>
                    </Box>
                  </ChatBubble>
                ))}
              </Box>
              {hasPermission('canManageDisputes') && selectedItem.status !== 'resolved' && (
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Type a reply..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
                  />
                  <IconButton onClick={handleSendChatMessage} sx={{ bgcolor: '#0025DD', color: 'white', borderRadius: 2 }}>
                    <SendIcon />
                  </IconButton>
                </Box>
              )}
            </DetailSection>
          </Grid>
        </Grid>

        {hasPermission('canManageDisputes') && selectedItem.status !== 'resolved' && (
          <>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <ActionButton
                variant="outlined"
                startIcon={<PendingIcon />}
                onClick={() => handleUpdateDisputeStatus(selectedItem, 'investigating')}
                sx={{ borderColor: '#F59E0B', color: '#F59E0B' }}
              >
                Mark Investigating
              </ActionButton>
              <ActionButton
                variant="contained"
                startIcon={<CheckCircleOutlineIcon />}
                onClick={() => {
                  const resolution = prompt('Enter resolution notes:');
                  if (resolution) handleResolveDispute(selectedItem, resolution);
                }}
                sx={{ bgcolor: '#10B981' }}
              >
                Mark Resolved
              </ActionButton>
            </Box>
          </>
        )}
      </Box>
    );

    // Simplified renderers for other types
    const renderGenericDetails = () => (
      <Box>
        <Typography variant="body1">Details for {modalType}</Typography>
        <pre>{JSON.stringify(selectedItem, null, 2)}</pre>
      </Box>
    );

    switch (modalType) {
      case 'rider': return renderRiderDetails();
      case 'dispute': return renderDisputeDetails();
      default: return renderGenericDetails();
    }
  };

  // ============ TAB CONTENT ROUTER ============
  const renderTabContent = () => {
    switch (activeTab) {
      case 0: return renderDashboardTab();
      case 1: return renderRidersTab();
      case 2: return renderTripsTab();
      case 3: return (
        <DataTable title="📦 Deliveries Management" data={deliveries} type="delivery" showStatusFilter
          columns={[
            { key: 'id', label: 'Delivery ID', render: (d) => (
              <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0025DD', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {d.id}
              </Typography>
            )},
            { key: 'rider_name', label: 'Rider' },
            { key: 'package_type', label: 'Package' },
            { key: 'pickup_location', label: 'From', render: (d) => (
              <Typography variant="body2" sx={{ maxWidth: { xs: 80, sm: 120, md: 150 }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {d.pickup_location}
              </Typography>
            )},
            { key: 'drop_off_location', label: 'To', render: (d) => (
              <Typography variant="body2" sx={{ maxWidth: { xs: 80, sm: 120, md: 150 }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {d.drop_off_location}
              </Typography>
            )},
            { key: 'delivery_fee', label: 'Fee', render: (d) => (
              <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(d.delivery_fee)}
              </Typography>
            )},
            { key: 'status', label: 'Status', render: (d) => <StatusChip status={d.status} label={d.status} /> },
          ]}
        />
      );
      case 4: return (
        <DataTable title="💰 Expenses Management" data={expenses} type="expense" showStatusFilter
          columns={[
            { key: 'id', label: 'Expense ID', render: (e) => (
              <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#EF4444', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {e.id}
              </Typography>
            )},
            { key: 'rider_name', label: 'Rider' },
            { key: 'category', label: 'Category', render: (e) => (
              <Chip label={e.category} size="small" sx={{ bgcolor: alpha('#F59E0B', 0.1), color: '#92400E' }} />
            )},
            { key: 'amount', label: 'Amount', render: (e) => (
              <Typography variant="body2" fontWeight="bold" color="#EF4444" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(e.amount)}
              </Typography>
            )},
            { key: 'description', label: 'Description', render: (e) => (
              <Typography variant="body2" sx={{ maxWidth: { xs: 100, sm: 150, md: 200 }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {e.description || 'N/A'}
              </Typography>
            )},
            { key: 'status', label: 'Status', render: (e) => <StatusChip status={e.status} label={e.status} /> },
          ]}
        />
      );
      case 5: return (
        <DataTable title="👥 Savings Groups" data={groups} type="group" showStatusFilter
          columns={[
            { key: 'name', label: 'Group Name', render: (g) => (
              <Box>
                <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                  {g.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">{g.group_type}</Typography>
              </Box>
            )},
            { key: 'admin_rider', label: 'Admin' },
            { key: 'member_count', label: 'Members', render: (g) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={(g.member_count / g.max_members) * 100} 
                  sx={{ height: 6, borderRadius: 3, bgcolor: alpha('#8B5CF6', 0.1), '& .MuiLinearProgress-bar': { bgcolor: '#8B5CF6' }, width: { xs: 50, sm: 80 } }}
                />
                <Typography variant="caption">{g.member_count}/{g.max_members}</Typography>
              </Box>
            )},
            { key: 'contrib_amount', label: 'Contribution', render: (g) => (
              <Box>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                  UGX {formatCurrency(g.contrib_amount)}
                </Typography>
                <Typography variant="caption" color="text.secondary">{g.contrib_frequency}</Typography>
              </Box>
            )},
            { key: 'total_pool', label: 'Total Pool', render: (g) => (
              <Typography variant="body2" fontWeight="bold" color="#8B5CF6" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(g.total_pool)}
              </Typography>
            )},
            { key: 'status', label: 'Status', render: (g) => <StatusChip status={g.status} label={g.status} /> },
          ]}
        />
      );
      case 6: return (
        <DataTable title="💳 Wallet Management" data={wallets} type="wallet" showStatusFilter
          columns={[
            { key: 'rider_name', label: 'Rider', render: (w) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, bgcolor: '#06B6D4', fontSize: '0.7rem' }}>
                  {w.rider_name?.charAt(0)}
                </Avatar>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                  {w.rider_name}
                </Typography>
              </Box>
            )},
            { key: 'balance', label: 'Balance', render: (w) => (
              <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(w.balance)}
              </Typography>
            )},
            { key: 'available_balance', label: 'Available', render: (w) => (
              <Typography variant="body2" fontWeight="bold" color="#10B981" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(w.available_balance)}
              </Typography>
            )},
            { key: 'reserved_balance', label: 'Reserved', render: (w) => (
              <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(w.reserved_balance)}
              </Typography>
            )},
            { key: 'total_deposits', label: 'Total Deposits', render: (w) => (
              <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(w.total_deposits)}
              </Typography>
            )},
            { key: 'is_active', label: 'Status', render: (w) => (
              <StatusChip status={w.is_active ? 'active' : 'inactive'} label={w.is_active ? 'Active' : 'Inactive'} />
            )},
          ]}
        />
      );
      case 7: return (
        <DataTable title="📇 Contacts Management" data={contacts} type="contact" showStatusFilter 
          onAdd={handleOpenAddContact}
          columns={[
            { key: 'full_name', label: 'Name', render: (c) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 }, bgcolor: '#8B5CF6', fontSize: '0.8rem' }}>
                  {c.full_name?.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="body2" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                    {c.full_name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">{c.email}</Typography>
                </Box>
              </Box>
            )},
            { key: 'type', label: 'Type', render: (c) => (
              <Chip label={c.type} size="small" sx={{ bgcolor: alpha('#8B5CF6', 0.1), color: '#6D28D9', fontWeight: 600 }} />
            )},
            { key: 'phone', label: 'Phone' },
            { key: 'bussiness_name', label: 'Business' },
            { key: 'location', label: 'Location' },
            { key: 'loyalty_points', label: 'Points', render: (c) => (
              <Typography variant="body2" fontWeight="bold" color="#F59E0B" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {c.loyalty_points || 0}
              </Typography>
            )},
            { key: 'status', label: 'Status', render: (c) => <StatusChip status={c.status} label={c.status} /> },
          ]}
        />
      );
      case 8: return renderAgentsTab();
      case 9: return renderDisputesTab();
      case 10: return renderAnalyticsTab();
      case 11: return (
        <DataTable title="🏦 Withdrawal Requests" data={withdrawals} type="withdrawal" showStatusFilter
          columns={[
            { key: 'id', label: 'Request ID', render: (w) => (
              <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {w.id}
              </Typography>
            )},
            { key: 'rider_name', label: 'Rider' },
            { key: 'amount', label: 'Amount', render: (w) => (
              <Typography variant="body2" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                UGX {formatCurrency(w.amount)}
              </Typography>
            )},
            { key: 'payment_method', label: 'Method', render: (w) => (
              <Chip label={w.payment_method?.replace('_', ' ')} size="small" sx={{ textTransform: 'capitalize' }} />
            )},
            { key: 'phone_number', label: 'Phone' },
            { key: 'created_at', label: 'Requested', render: (w) => (
              <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                {new Date(w.created_at).toLocaleDateString('en-UG')}
              </Typography>
            )},
            { key: 'status', label: 'Status', render: (w) => <StatusChip status={w.status} label={w.status} /> },
          ]}
        />
      );
      default: return null;
    }
  };

  // ============ MAIN RENDER ============
  return (
    <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', minHeight: '100vh' }}>
      {renderSidebar()}
      
      <Drawer open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: 280 } }}>
        {renderSidebar()}
      </Drawer>
      
      <MainContent>
        {/* Mobile Header */}
        {isTablet && (
          <Box sx={{ 
            p: { xs: 1.5, sm: 2 }, 
            bgcolor: 'white', 
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            position: 'sticky', 
            top: 0, 
            zIndex: 100,
          }}>
            <IconButton onClick={() => setMobileSidebarOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MotorcycleIcon sx={{ color: '#0025DD' }} />
              <Typography variant="h6" fontWeight="bold" color="#0025DD" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                Enfuna
              </Typography>
            </Box>
            <IconButton onClick={handleRefresh} disabled={refreshing}>
              {refreshing ? <CircularProgress size={20} /> : <RefreshIcon />}
            </IconButton>
          </Box>
        )}
        
        {/* Mobile Tab Navigation */}
        {isTablet && (
          <Paper sx={{ borderRadius: 0, position: 'sticky', top: isMobile ? 56 : 64, zIndex: 99 }}>
            <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} variant="scrollable" scrollButtons="auto"
              sx={{ 
                bgcolor: 'white', 
                borderBottom: '1px solid rgba(0,0,0,0.08)', 
                '& .MuiTab-root': { 
                  minHeight: { xs: 44, sm: 48 }, 
                  textTransform: 'none', 
                  fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
                  px: { xs: 1, sm: 1.5 }
                } 
              }}>
              {sidebarItems.filter(item => !item.permission || hasPermission(item.permission)).map(item => (
                <Tab key={item.tab} label={item.label} icon={<item.icon sx={{ fontSize: { xs: 14, sm: 16 } }} />} iconPosition="start" />
              ))}
            </Tabs>
          </Paper>
        )}
        
        {/* Main Content */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress size={48} sx={{ color: '#0025DD' }} />
              <Typography sx={{ mt: 2, color: 'text.secondary' }}>Loading Enfuna Dashboard...</Typography>
            </Box>
          </Box>
        ) : (
          renderTabContent()
        )}
      </MainContent>

      {/* Details Modal */}
      {showDetailsModal && (
        <Dialog 
          open={showDetailsModal} 
          onClose={handleCloseDetailsModal}
          maxWidth="lg"
          fullWidth
          fullScreen={isMobile}
          TransitionComponent={Slide}
          PaperProps={{ 
            sx: { 
              borderRadius: { xs: 0, sm: 4 },
              bgcolor: '#F8FAFC',
              mx: { xs: 0, sm: 2 },
              my: { xs: 0, sm: 2 },
            } 
          }}
        >
          <Box sx={{ bgcolor: '#0025DD', color: 'white', p: { xs: 2, sm: 2.5 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                {modalType === 'rider' ? 'Rider Details' : 
                 modalType === 'trip' ? 'Trip Details' :
                 modalType === 'expense' ? 'Expense Details' :
                 modalType === 'contact' ? 'Contact Details' :
                 modalType === 'wallet' ? 'Wallet Details' :
                 modalType === 'group' ? 'Group Details' :
                 modalType === 'agent' ? 'Agent Details' :
                 modalType === 'delivery' ? 'Delivery Details' :
                 modalType === 'withdrawal' ? 'Withdrawal Details' :
                 modalType === 'dispute' ? 'Dispute Details' : 'Details'}
              </Typography>
              <IconButton onClick={handleCloseDetailsModal} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <DialogContent sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
            {renderDetailsModal()}
          </DialogContent>
          <DialogActions sx={{ p: { xs: 2, sm: 2.5 }, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <Button onClick={handleCloseDetailsModal} sx={{ color: '#64748B' }}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
      
      {contactDialogOpen && renderContactDialog()}
      {renderDeleteConfirmDialog()}
      {renderBlockConfirmDialog()}
      {adjustCommissionDialog.open && renderCommissionDialog()}
      {disputeChatOpen && renderDisputeChatDialog()}
      
      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Snackbar */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={4000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
        TransitionComponent={Slide}
        sx={{ 
          '& .MuiAlert-root': { 
            borderRadius: { xs: 2, sm: 2 }, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)', 
            minWidth: { xs: '90vw', sm: 300 },
            maxWidth: { xs: '95vw', sm: 400 }
          } 
        }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}
          variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SuperAdminDashboard;