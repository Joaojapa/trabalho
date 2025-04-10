import React from 'react';
import './Alerta.css';

function Alerta({ mensagem, onClose }) {
  return (
    <div className="alerta-container">
      <div className="alerta-box">
        <h3>GoPlaneje</h3>
        <p>{mensagem}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Alerta;
