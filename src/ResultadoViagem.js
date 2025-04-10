import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultadoViagem.css';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaClock, FaMoneyBillWave, FaBuilding } from 'react-icons/fa';
import logo from './logo.png'; // troque se o nome do seu logo for diferente

const ResultadoViagem = () => {
  const navigate = useNavigate();

  return (
    <div className="resultado-container">
      <img
        src={logo}
        alt="Logo"
        className="resultado-logo"
        onClick={() => navigate('/home')}
      />
      <h1 className="resultado-title">Resultado da Sua Viagem</h1>

      <div className="resultado-box">
        <div className="resultado-info">
          <FaPlaneDeparture className="resultado-icon" />
          <span><strong>Origem:</strong> São Paulo</span>
        </div>
        <div className="resultado-info">
          <FaPlaneArrival className="resultado-icon" />
          <span><strong>Destino:</strong> Nova York</span>
        </div>
        <div className="resultado-info">
          <FaCalendarAlt className="resultado-icon" />
          <span><strong>Data de Ida:</strong> 10/05/2025</span>
        </div>
        <div className="resultado-info">
          <FaCalendarAlt className="resultado-icon" />
          <span><strong>Data de Volta:</strong> 20/05/2025</span>
        </div>
        <div className="resultado-info">
          <FaClock className="resultado-icon" />
          <span><strong>Horário:</strong> 09:00</span>
        </div>
        <div className="resultado-info">
          <FaBuilding className="resultado-icon" />
          <span><strong>Companhia:</strong> Delta Airlines</span>
        </div>
        <div className="resultado-info">
          <FaMoneyBillWave className="resultado-icon" />
          <span><strong>Orçamento:</strong> R$ 5.000</span>
        </div>
      </div>

      <button className="resultado-voltar" onClick={() => navigate('/home')}>
        Voltar para o Início
      </button>
    </div>
  );
};

export default ResultadoViagem;
