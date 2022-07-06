import DashboardIcon from "@mui/icons-material/Dashboard";
import BiotechIcon from "@mui/icons-material/Biotech";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentIcon from "@mui/icons-material/Payment";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReportIcon from "@mui/icons-material/Report";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"


const content = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
    slug: "dashboard",
    check: "dashboard"
  },
  {
    icon: BookIcon,
    text: "Patient",
    slug: "patient",
  },
  {
    icon: BiotechIcon,
    text: "Clinics",
    slug: "clinics",
    items: [
      {
        text: "All Clinics",
        slug: "all-clinics",
      },
      {
        text: "Diagnostic Center",
        slug: "diagnostic-center",
      },
    ],
  },
  {
    icon: GroupIcon,
    text: "Doctors",
    slug: "doctors",
    items: [
      { text: "Doctor List", slug: "doctor-list" },
      { text: "Create Doctor", slug: "create-doctor" },
      { text: "Schedule List", slug: "schedule-list" },
      { text: "Add Schedule", slug: "add-schedule" },
      { text: "Unapproved Doctor", slug: "unapproved-doctor" },
    ],
  },
  // {
  //   icon: CalendarMonthIcon,
  //   text: "Doctors Schedule",
  //   slug: "doctor-schedule",
  //   items: [
  //     { text: "Schedule List", slug: "schedule-list" },
  //     { text: "Add Schedule", slug: "add-schedule" },
  //   ],
  // },
  {
    icon: DomainAddIcon,
    text: "Department",
    slug: "department",
    items: [
      { text: "Department List", slug: "department-list" },
      { text: "Add Department", slug: "add-department" },
    ],
  },
  {
    icon: BookOnlineIcon,
    text: "Appointment",
    slug: "appointment",
    items: [
      { text: "Appointment List", slug: "appointment-list" },
      { text: "Add Appointment", slug: "add-appointment" },
    ],
  },
  {
    icon: PaymentIcon,
    text: "Payments",
    slug: "payments",
    items: [
      {
        text: "Add",
        slug: "add",
      },
      {
        text: "Admin Payment Details",
        slug: "admin-payment-details",
      },
      {
        text: "Payment Gateway Setting",
        slug: "payment=gateway-setting",
      },
    ],
  },
  {
    icon: CoPresentIcon,
    text: "Commission",
    slug: "commission",
    items: [
      {
        text: "Clinic",
        slug: "clinics",
      },
      {
        text: "Doctor",
        slug: "doctors",
      },
    ],
  },
  {
    icon: ReportIcon,
    text: "Report",
    slug: "report",
    items: [
      {
        text: "Patient Wise Report",
        slug: "patient-wise",
      },
      {
        text: "Doctor Wise Report",
        slug: "doctor-wise",
      },
    ],
  },
  {
    icon: AccountBoxIcon,
    text: "Admin Profile",
    slug: "admin-profile",
  },
  {
    icon: AccountBoxIcon,
    text: "User Permission",
    slug: "user-permission",
  },
  {
    icon: LogoutIcon,
    text: "Logout",
    slug: "logout",
  },
];


export default content;
