// Moedas.js
import React from 'react';
import './Moedas.css';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function Moedas() {
  const navigate = useNavigate();

  const moedasMaisUsadas = [
    { nome: 'Dólar Americano (USD)', pais: 'Estados Unidos' },
    { nome: 'Euro (EUR)', pais: 'União Europeia' },
    { nome: 'Iene Japonês (JPY)', pais: 'Japão' },
    { nome: 'Libra Esterlina (GBP)', pais: 'Reino Unido' },
    { nome: 'Dólar Australiano (AUD)', pais: 'Austrália' },
    { nome: 'Dólar Canadense (CAD)', pais: 'Canadá' },
    { nome: 'Franco Suíço (CHF)', pais: 'Suíça' },
    { nome: 'Yuan Chinês (CNY)', pais: 'China' },
    { nome: 'Dólar de Hong Kong (HKD)', pais: 'Hong Kong' },
    { nome: 'Rúpia Indiana (INR)', pais: 'Índia' },
  ];

  return (
    <div className="moedas-container">
      <img
        src={logo}
        alt="GoPlaneje"
        className="moedas-logo"
        onClick={() => navigate('/home')}
      />
      <h1 className="moedas-title">💱 Moedas Mais Usadas no Mundo</h1>
      <p className="moedas-subtext">Confira as principais moedas utilizadas globalmente:</p>

      <div className="moedas-content">
        <table className="moedas-tabela">
          <thead>
            <tr>
              <th>#</th>
              <th>Moeda</th>
              <th>País/Região</th>
            </tr>
          </thead>
          <tbody>
            {moedasMaisUsadas.map((moeda, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{moeda.nome}</td>
                <td>{moeda.pais}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Moedas;
