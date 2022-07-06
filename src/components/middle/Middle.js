import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddSchedule from "../doctorSchedule/addDoctor/AddSchedule";
import Spinner from "../spinner/Spinner";
import UserPermission from "../userPermission/UserPermission";
import UnapprovedDoctorData from "../doctors/unapprovedDoctor/UnapprovedDoctorData";
const DashboardMain = React.lazy(() =>
  import("../dashboardMain/DashboardMain")
);
const Patient = React.lazy(() => import("../patient/Patient"));
const Clinic = React.lazy(() => import("../clinics/Clinics"));
const Doctor = React.lazy(() => import("../doctors/Doctors"));
const NewDoctor = React.lazy(() => import("../doctors/newDoctor/NewDoctor"));
const DoctorSchedule = React.lazy(() =>
  import("../doctorSchedule/DoctorSchedule")
);
const Department = React.lazy(() => import("../department/Department"));
const NewDepartment = React.lazy(() =>
  import("../department/newDepartment/NewDepartment")
);
const Fees = React.lazy(() => import("../appointment/Fees"));
const Appointment = React.lazy(() => import("../appointment/Appointment"));
const AddAppointment = React.lazy(() =>
  import("../appointment/AddAppointment")
);
const Report = React.lazy(() => import("../report/Report"));
const Payments = React.lazy(() => import("../payments/Payments"));
const Commission = React.lazy(() => import("../commission/Commission"));
const AdminProfile = React.lazy(() => import("../adminProfile/AdminProfile"));
const FeeClinic = React.lazy(() => import("../appointment/AppointmentList"));
const AddPayment = React.lazy(() => import("../payments/AddPayment"));
const AddDoctor = React.lazy(() =>
  import("../doctorSchedule/addDoctor/AddDoctor")
);

const Middle = () => {
  const params = useParams();
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/patient" element={<Patient />}></Route>
        <Route
          path="/clinics"
          element={<Navigate replace to="/clinics/all-clinics" />}
        ></Route>
        <Route path="/clinics/all-clinics" element={<Clinic />}></Route>
        <Route path="/clinics/diagnostic-center" element={<Clinic />}></Route>
        <Route
          path="/doctors"
          element={<Navigate replace to="/doctors/doctor-list" />}
        ></Route>
        <Route path="/doctors/doctor-list" element={<Doctor />}></Route>
        <Route path="/doctors/create-doctor" element={<NewDoctor />}></Route>
        <Route path="/doctors/schedule-list" element={<DoctorSchedule />}></Route>
        <Route path="/doctors/add-schedule" element={<AddDoctor />}></Route>
        <Route path="/doctors/unapproved-doctor" element={<UnapprovedDoctorData />}></Route>
        {/* <Route
          path="/doctor-schedule"
          element={<Navigate replace to="/doctors-schedule/schedule-list" />}
        ></Route> */}
        {/* <Route
          path="/doctors-schedule/schedule-list"
          element={<DoctorSchedule />}
        ></Route>
        <Route
          path="/doctors-schedule/add-schedule"
          element={<DoctorSchedule />}
        ></Route> */}
        <Route
          path="/department"
          element={<Navigate replace to="/department/department-list" />}
        ></Route>
        <Route
          path="/department/department-list"
          element={<Department />}
        ></Route>
        <Route
          path="/department/add-department"
          element={<NewDepartment />}
        ></Route>
        {/* <Route path="/fees" element={<Fees />}></Route>
      <Route path="/fees/clinic" element={<FeeClinic />}></Route> */}
        <Route
          path="/appointment"
          element={<Navigate replace to="/appointment/appointment-list" />}
        ></Route>
        <Route
          path="/appointment/appointment-list"
          element={<Appointment />}
        ></Route>
        <Route
          path="/appointment/add-appointment"
          element={<AddAppointment />}
        ></Route>
        <Route
          path="/doctor-schedule/add-schedule"
          element={<AddDoctor />}
        ></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/fees" element={<Fees />}></Route>
        <Route path="/fees/clinic" element={<FeeClinic />}></Route>
        <Route path="/payments" element={<Payments />}></Route>
        <Route path="/payments/add" element={<AddPayment />}></Route>
        <Route path="/commission" element={<Commission />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/admin-profile" element={<AdminProfile />}></Route>
        <Route path="/user-permission" element={<UserPermission />}></Route>
      </Routes>
    </React.Suspense>
  );
};

export default Middle;
