import { createBrowserRouter, redirect } from 'react-router-dom'
import DashboardLayout from '@app/layouts/DashboardLayout'
import NotFoundPage from '@pages/NotFoundPage'
import { LoginPage, RegisterPage } from '@features/auth'
import { DashboardPage } from '@features/dashboard'

export const appRoutes = createBrowserRouter([
  // === Públicas (sin layout) ===
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },

  // === Redirect raíz ===
  // TODO: validar token de localStorage. Si existe → /dashboard, si no → /login.
  {
    path: '/',
    loader: () => redirect('/login'),
  },

  // === Privadas (DashboardLayout: sidebar + header) ===
  // TODO: agregar loader con guard de auth aquí.
  {
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
    ],
  },

  // === 404 ===
  { path: '*', element: <NotFoundPage /> },
])
