import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './Components/ScrollToTop'
import Scroll from './Components/Scroll'
import Layout from './Layout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Form from './pages/Form'
import Mobile from './pages/Mobile'
import TechtoHome from './pages/TechtoHome'
import It from './pages/It'
import DigitalMarketing from './pages/DigitalMarketing'
import Cyber from './pages/Cyber'
import AIML from './pages/AIML'
import DevOps from './pages/DevOps'
import VR from './pages/VR'
import BlockChain from './pages/BlockChain'
import CustomSoftware from './pages/CustomSoftware'
import Cloud from './pages/Cloud'
import Services from './Components/Services'
import GameDevelopment from './pages/GameDevelopment'
import AdminPanel from './Components/Admin/AdminPanel'
import LoginPage from './Context/LoginPage'
import ProtectedRoute from './Context/ProtectedRoute.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'

const Routing = [
  { path: '/', element: <HomePage /> },
  { path: '/aboutus', element: <AboutUs /> },
  { path: '/privacy', element: <PrivacyPolicy /> },
  { path: '/form', element: <Form /> },
  { path: '/Allservice', element: <Services /> },
  { path: '/mobile', element: <Mobile /> },
  { path: '/techtohome', element: <TechtoHome /> },
  { path: '/ItConsulting', element: <It /> },
  { path: '/one', element: <TechtoHome /> },
  { path: '/two', element: <DigitalMarketing /> },
  { path: '/three', element: <Cyber /> },
  { path: '/four', element: <It /> },
  { path: '/five', element: <AIML /> },
  { path: '/six', element: <DevOps /> },
  { path: '/seven', element: <VR /> },
  { path: '/eight', element: <Mobile /> },
  { path: '/nine', element: <BlockChain /> },
  { path: '/ten', element: <CustomSoftware /> },
  { path: '/eleven', element: <Cloud /> },
  { path: '/twelve', element: <GameDevelopment /> },
]

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Scroll />
        <ToastContainer />

        <Routes>
          {/* Public Routes under main layout */}
          <Route element={<Layout />}>
            {Routing.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>

          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Admin Panel */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* Fallback for 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
