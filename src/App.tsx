import { Route, Routes } from 'react-router-dom';
import LeftNavMenu from './components/menus/LeftNavMenu';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { HomePage } from './pages/dashboard/HomePage';
import { SecondPage } from './pages/dashboard/SecondPage';

export default function App() {
  return (
    <>
      <LeftNavMenu />
      <div className="app">
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/second-page" element={<SecondPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}
