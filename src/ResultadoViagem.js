import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResultadoViagem.css';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBuilding
} from 'react-icons/fa';
import logo from './logo.png';

const ResultadoViagem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    origin,
    destination,
    departureDate,
    returnDate,
    airline,
    maxBudget
  } = location.state || {};

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
          <span><strong>Origem:</strong> {origin}</span>
        </div>
        <div className="resultado-info">
          <FaPlaneArrival className="resultado-icon" />
          <span><strong>Destino:</strong> {destination}</span>
        </div>
        <div className="resultado-info">
          <FaCalendarAlt className="resultado-icon" />
          <span><strong>Data de Ida:</strong> {departureDate}</span>
        </div>
        <div className="resultado-info">
          <FaCalendarAlt className="resultado-icon" />
          <span><strong>Data de Volta:</strong> {returnDate}</span>
        </div>
        <div className="resultado-info">
          <FaBuilding className="resultado-icon" />
          <span><strong>Companhia:</strong> {airline}</span>
        </div>
        <div className="resultado-info">
          <FaMoneyBillWave className="resultado-icon" />
          <span><strong>Orçamento:</strong> R$ {parseInt(maxBudget).toLocaleString('pt-BR')}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultadoViagem;
