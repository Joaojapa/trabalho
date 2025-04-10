import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./Calendario.css";

function Calendario() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <div className="calendario-container">
      <img 
        src={logo} 
        alt="Logo" 
        className="calendario-logo" 
        onClick={() => navigate("/home")} 
      />
      <h1 className="calendario-title">📅 Calendário de Viagens</h1>
      <p className="calendario-subtext">Selecione uma data para ver suas viagens programadas.</p>

      <div className="calendario-content">
        <Calendar onChange={setDate} value={date} className="react-calendar menor" />
        <p className="calendario-date">Data selecionada: {date.toLocaleDateString("pt-BR")}</p>
      </div>
    </div>
  );
}

export default Calendario;