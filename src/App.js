
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';
import './index.css';
import { DashboardRoutes } from './routers/Dashboardroutes';
import injectContext from './store/appContext';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Intro />}>
      </Route>
      <Route path="/*" element={<DashboardRoutes />}>
      </Route>

    </Routes>
  </BrowserRouter>

}

export default injectContext(App);
