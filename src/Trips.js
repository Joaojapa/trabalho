import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import './Trips.css';
import logo from './logo.png'; // Caminho para a logo

function Trips() {
  const navigate = useNavigate();

  // Função de navegação ao clicar na logo
  const goToHome = () => {
    navigate('/home'); // Redireciona para a página inicial
  };

  return (
    <div className="trips-container">
      <img
        src={logo}
        alt="GoPlaneje Logo"
        className="viagem-logo" // Usando a nova classe viagem-logo
        onClick={goToHome} // Chama a função ao clicar na logo
      />
      <h1 className="trips-title">✈️ Suas Viagens</h1>
      <div className="trips-content">
        <p className="trips-message">
          🧳 Você ainda não tem nenhuma viagem planejada.
        </p>
        <p className="trips-subtext">
          Comece agora e planeje sua próxima aventura!
        </p>
      </div>
    </div>
  );
}

export default Trips;
