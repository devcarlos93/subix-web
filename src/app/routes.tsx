import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '@app/layouts/DashboardLayout'
import NotFoundPage from '@pages/NotFoundPage'
import {LoginPage, RegisterPage} from '@features/auth'
import { DashboardPage } from '@features/dashboard'
import {SuccessRegisterPage} from "@features/auth/pages/SuccessRegisterPage.tsx";
import {requireAuth, requireGuest, smartRootRedirect} from "@shared/lib/auth-guard.ts";

export const appRoutes = createBrowserRouter([

  { path: '/login', element: <LoginPage />, loader: requireGuest },
  { path: '/register', element: <RegisterPage />, loader: requireGuest },
  { path: '/register/success', element: <SuccessRegisterPage />, loader: requireGuest },

  {
    path: '/',
    loader: smartRootRedirect,
  },

  {
    element: <DashboardLayout />,
    loader: requireAuth,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
    ],
  },

  { path: '*', element: <NotFoundPage /> },
])
