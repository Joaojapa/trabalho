import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './login';
import Cadastro from './Cadastro';
import VerificarCodigo from './VerificarCodigo';
import ResultadoViagem from './ResultadoViagem'; // <- ADICIONADO AQUI
import Notices from './Notices';
import Trips from './Trips';
import Company from './Company';
import Cliente from './cliente';
import Calendario from './Calendario';
import Converter from './converter';
import Planejamento from './Planejamento';
import Moedas from './Moedas';
import Orcamento from './Orcamento';

import './index.css';
import './login.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/verificar-codigo" element={<VerificarCodigo />} />
      <Route path="/home" element={<App />} />
      <Route path="/resultado" element={<ResultadoViagem />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/company" element={<Company />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/planejamento" element={<Planejamento />} />
      <Route path="/moedas" element={<Moedas />} />
      <Route path="/orcamento" element={<Orcamento />} />
    </Routes>
  </BrowserRouter>
);
