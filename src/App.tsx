import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      {/* Aqui entraria um componente de Navbar global */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Futuras rotas institucionais */}
        {/* <Route path="/servicos" element={<Servicos />} /> */}
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </BrowserRouter>
  );
}