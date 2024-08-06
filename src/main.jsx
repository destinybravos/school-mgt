import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import BaseLayout from './layouts/BaseLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/app/Dashboard';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import OtpRequest from './pages/auth/OtpRequest';
import Result from './pages/app/Result';
import Attendance from './pages/app/Attendance';
import StudentTable from './pages/app/StudentTable';
import Departments from './pages/app/Departments';
// import student_Table from './pages/app/student_Table';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Base Layout routes */}
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutPage />} />
          <Route path='contact-us' element={<ContactPage />} />
        </Route>

        {/* Auth Layout routes */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/otp-verification' functionelement={<OtpRequest />} />
        </Route>

        {/* App Layout routes */}
        <Route element={<AppLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/result' element={<Result />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/students' element={<StudentTable />} />
          <Route path='/department' element={<Departments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
