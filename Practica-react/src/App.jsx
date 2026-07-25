import { Layout } from './componets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './routes/private-routes'
import {
  InicioPage,
  NosotrosPage,
  ContactosPage,
  TeamsPage,
  PersonajePage,
  LoginPage,
  RegistroPage,
  Dashboard,
  ProductosPage
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/productos"
          element={
            <PrivateRoutes>
              <ProductosPage />
            </PrivateRoutes>
          }
        />
        <Route path="/" element={<Layout><InicioPage /></Layout>} />
        <Route path="/nosotros" element={<Layout><NosotrosPage /></Layout>} />
        <Route path="/teams" element={<Layout><TeamsPage /></Layout>} />
        <Route path="/contactos" element={<Layout><ContactosPage /></Layout>} />
        <Route path="/personajes" element={<Layout><PersonajePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App