import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Orcamento.css';
import logo from './logo.png';

function Orcamento() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  const editarOrcamento = () => {
    alert('📝 Em breve você poderá editar os valores do orçamento diretamente por aqui!');
  };

  const criarNovoOrcamento = () => {
    alert('➕ Funcionalidade de criar novo orçamento em desenvolvimento!');
  };

  return (
    <div className="orcamento-container">
      <img
        src={logo}
        alt="GoPlaneje Logo"
        className="orcamento-logo"
        onClick={goToHome}
      />
      <h1 className="orcamento-title">💸 Orçamento da Viagem</h1>

      <div className="orcamento-card">
        <h2 className="orcamento-destino">🌍 Lisboa, Portugal</h2>
        <ul className="orcamento-lista">
          <li>✈️ Passagem Aérea: R$ 3.200,00</li>
          <li>🏨 Hospedagem (10 noites): R$ 2.000,00</li>
          <li>🍝 Alimentação: R$ 800,00</li>
          <li>🎫 Passeios e Ingressos: R$ 700,00</li>
          <li>🚇 Transporte local: R$ 300,00</li>
        </ul>
        <h3 className="orcamento-total">Total: R$ 7.000,00</h3>
        <button className="orcamento-btn" onClick={editarOrcamento}>
          Editar Orçamento
        </button>
      </div>

      <button className="novo-orcamento-btn" onClick={criarNovoOrcamento}>
        ➕ Novo Orçamento
      </button>

      <p className="orcamento-subtext">
        Planeje bem e aproveite cada centavo da sua aventura! 🌍✨
      </p>
    </div>
  );
}

export default Orcamento;
