import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { UnderConstruction } from '../pages/UnderConstruction';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="em-breve" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}