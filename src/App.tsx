import { Link, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LeftNavMenu from './components/menus/LeftNavMenu';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { HomePage } from './pages/dashboard/HomePage';
import { SecondPage } from './pages/dashboard/SecondPage';
import siteLogo from './images/site-logo.png'

console.log(`siteLogo`, siteLogo);

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <header className="col">
        <h1 className="site-title">
          <Link to="/" className="f-c jc-c site-logo">
            <img src={siteLogo} />
            { t('site-name') }
          </Link>
        </h1>

        <LeftNavMenu />
      </header>

      <main className="col ph-40">
        <Routes>
          <Route element={ <DashboardLayout /> }>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/second-page" element={ <SecondPage /> } />
          </Route>
        </Routes>
      </main>
    </>
  );
}
