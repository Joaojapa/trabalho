import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Notices.css';
import logo from './logo.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const notices = [
  {
    title: 'Greve nos aeroportos da Europa',
    icon: '⚠️',
    description:
      '✈️ Passageiros com voos entre os dias 15 e 20 de Abril devem verificar com a companhia aérea possíveis atrasos ou cancelamentos devido à paralisação em aeroportos de Paris e Frankfurt.',
  },
  {
    title: 'Passaporte vencido?',
    icon: '🛂',
    description:
      'Verifique se seu passaporte está válido por pelo menos 6 meses antes da data de retorno da viagem para evitar problemas na imigração.',
  },
  {
    title: 'Requisitos de visto atualizados',
    icon: '📝',
    description:
      'Alguns países mudaram os requisitos de visto em Abril. Verifique se o destino da sua viagem exige visto eletrônico (eVisa) ou presencial.',
  },
  {
    title: 'Clima extremo nos EUA',
    icon: '🌪️',
    description:
      '⚠️ Fortes tempestades estão previstas para o sul dos EUA. Consulte sua companhia aérea sobre mudanças nos horários de voo.',
  },
  {
    title: 'Desconto em hotéis parceiros',
    icon: '🏨',
    description:
      'Clientes GoPlaneje têm até 20% de desconto em hotéis selecionados! Verifique a aba de Dicas de Viagem.',
  },
  {
    title: 'Nova política de bagagem',
    icon: '🧳',
    description:
      'Algumas companhias reduziram o peso permitido na bagagem de mão para 8kg. Consulte antes de viajar.',
  },
  {
    title: 'Vacinação obrigatória para Ásia',
    icon: '💉',
    description:
      'Alguns países asiáticos exigem vacinação contra febre amarela. Leve o Certificado Internacional de Vacinação.',
  },
  {
    title: 'Horário de verão nos EUA',
    icon: '⏰',
    description:
      'O horário de verão começou nos EUA. Fique atento às diferenças de fuso ao marcar compromissos ou conexões.',
  },
];

function Notices() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const goToHome = () => navigate('/home');
  const nextNotice = () => setIndex((prev) => (prev + 1) % notices.length);
  const prevNotice = () => setIndex((prev) => (prev - 1 + notices.length) % notices.length);

  const { title, icon, description } = notices[index];

  return (
    <div className="notices-container">
      <img src={logo} alt="GoPlaneje Logo" className="aviso-logo" onClick={goToHome} />
      <h1 className="notices-title">📢 Avisos Importantes</h1>

      <div className="notices-wrapper">
        <FaArrowLeft className="arrow-icon" onClick={prevNotice} />
        <div className="notices-card">
          <div className="notices-header">
            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{icon}</span>
            <strong>{title}</strong>
          </div>
          <p className="notices-description">{description}</p>
          <button className="notices-button" onClick={() => alert('Mais detalhes em breve.')}>
            Ver Detalhes
          </button>
        </div>
        <FaArrowRight className="arrow-icon" onClick={nextNotice} />
      </div>

      <p className="notices-footer">
        🔔 Fique atento! Novos avisos aparecerão aqui assim que forem atualizados.
      </p>
    </div>
  );
}

export default Notices;
