// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LostItemsPage from './pages/LostItemsPage';
import FoundItemsPage from './pages/FoundItemsPage';
import ReportLostPage from './pages/ReportLostPage';
import ReportFoundPage from './pages/ReportFoundPage';
import MyPostPage from './pages/MyPostPage';
import ItemDetailPage from './pages/ItemDetailPage';

import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';

import AdminDashboard from './pages/admin/AdminDashboard';
import AllItemsPage from './pages/admin/AllItemsPage';
import UserManagementPage from './pages/admin/UserManagementPage';

import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/lost-items" element={<LostItemsPage />} />
          <Route path="/found-items" element={<FoundItemsPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />

          {/* Protected user routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/report-lost" element={<ReportLostPage />} />
            <Route path="/report-found" element={<ReportFoundPage />} />
            <Route path="/my-posts" element={<MyPostPage />} />
          </Route>

          {/* Admin routes */}
          <Route element={<PrivateRoute requireAdmin />}>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="all-items" element={<AllItemsPage />} />
              <Route path="users" element={<UserManagementPage />} />
            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
