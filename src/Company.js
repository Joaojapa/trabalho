import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import './Company.css';
import logo from './logo.png';

function Company() {
  const navigate = useNavigate();

  // Função de navegação ao clicar na logo
  const goToHome = () => {
    navigate('/home'); // Redireciona para a página inicial
  };

  return (
    <div className="company-container">
      <img
        src={logo}
        alt="GoPlaneje Logo"
        className="empresa-logo" // Usa a classe modificada
        onClick={goToHome} // Chama a função de navegação ao clicar
      />
      <h1 className="company-title">🏢 Sobre a GoPlaneje</h1>
      <div className="company-content">
        <p className="company-message">
          Bem-vindo à GoPlaneje! Somos uma empresa focada em proporcionar as melhores experiências de viagem.
        </p>
        <p className="company-subtext">
          Nossa missão é facilitar o planejamento das suas viagens com segurança, conforto e economia.
        </p>
        <div className="team-info">
          <h2 className="team-title">Nossa Equipe</h2>
          <p className="team-details">
            CEO: <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-campos-pires?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">João Vitor Campos Pires</a>
          </p>
          <p className="team-details">
            CO-CEO: <a href="https://www.linkedin.com/in/samuel-rodrigues-lima?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Samuel Rodrigues Da Rocha Lima</a>
          </p>
          <p className="team-message">
            A criação do front-end foi realizada por João Vitor Campos Pires, enquanto o back-end ficou sob responsabilidade de Samuel Rodrigues Da Rocha Lima.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Company;
