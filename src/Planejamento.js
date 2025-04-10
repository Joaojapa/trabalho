import React, { useState } from 'react';
import './Planejamento.css';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const destinos = {
  'Estados Unidos': {
    cidades: {
      Orlando: {
        quantoLevar: 'US$ 3000 por 1 semana',
        passagem: 'A partir de US$ 600 ida e volta',
        visto: 'Visto de turismo B2 obrigatório',
        hoteis: [
          'Rosen Inn at Pointe Orlando - US$ 70/noite',
          'Avanti International Resort - US$ 75/noite'
        ],
        pontosTuristicos: ['Disney World', 'Universal Studios', 'SeaWorld', 'ICON Park']
      },
      Califórnia: {
        quantoLevar: 'US$ 3500 por 1 semana',
        passagem: 'A partir de US$ 700 ida e volta',
        visto: 'Visto de turismo B2 obrigatório',
        hoteis: [
          'Travelodge by Wyndham - US$ 80/noite',
          'Days Inn by Wyndham - US$ 85/noite'
        ],
        pontosTuristicos: ['Hollywood', 'Santa Monica Pier', 'Golden Gate Bridge', 'Yosemite']
      },
      Mississippi: {
        quantoLevar: 'US$ 2500 por 1 semana',
        passagem: 'A partir de US$ 550 ida e volta',
        visto: 'Visto de turismo B2 obrigatório',
        hoteis: [
          'La Quinta Inn - US$ 65/noite',
          'Red Roof Inn - US$ 60/noite'
        ],
        pontosTuristicos: ['Vicksburg National Military Park', 'Biloxi Beach', 'Natchez Trace Parkway']
      }
    }
  },
  França: {
    cidades: {
      Paris: {
        quantoLevar: '€ 3000 por 1 semana',
        passagem: 'A partir de € 700 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Hotel ibis Paris - € 80/noite',
          'HotelF1 Paris Porte de Châtillon - € 65/noite'
        ],
        pontosTuristicos: ['Torre Eiffel', 'Museu do Louvre', 'Catedral de Notre-Dame', 'Montmartre']
      },
      Nice: {
        quantoLevar: '€ 2800 por 1 semana',
        passagem: 'A partir de € 750 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Hotel Ozz by Happyculture - € 70/noite',
          'Ibis Budget Nice Californie Lenval - € 60/noite'
        ],
        pontosTuristicos: ['Promenade des Anglais', 'Castle Hill', 'Old Town (Vieux Nice)']
      },
      Lyon: {
        quantoLevar: '€ 2600 por 1 semana',
        passagem: 'A partir de € 720 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'ibis Lyon Part Dieu - € 75/noite',
          'Hotel du Helder - € 65/noite'
        ],
        pontosTuristicos: ['Basilique Notre-Dame de Fourvière', 'Vieux Lyon', 'Parc de la Tête d\'Or']
      }
    }
  },
  Japão: {
    cidades: {
      Tóquio: {
        quantoLevar: '¥ 400000 (~R$ 13000) por 1 semana',
        passagem: 'A partir de R$ 6000 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'APA Hotel - ¥ 8000/noite',
          'Hotel Gracery Shinjuku - ¥ 10000/noite'
        ],
        pontosTuristicos: ['Tokyo Tower', 'Shibuya Crossing', 'Templo Senso-ji', 'Akihabara']
      },
      Osaka: {
        quantoLevar: '¥ 380000 (~R$ 12500) por 1 semana',
        passagem: 'A partir de R$ 6200 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Hotel Monterey Grasmere - ¥ 9500/noite',
          'Daiwa Roynet Hotel - ¥ 8500/noite'
        ],
        pontosTuristicos: ['Castelo de Osaka', 'Dotonbori', 'Universal Studios Japan']
      },
      Quioto: {
        quantoLevar: '¥ 370000 (~R$ 12200) por 1 semana',
        passagem: 'A partir de R$ 6300 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Sakura Terrace - ¥ 9000/noite',
          'Hotel Mystays Kyoto - ¥ 8700/noite'
        ],
        pontosTuristicos: ['Templo Kinkaku-ji', 'Fushimi Inari Taisha', 'Bosque de Bambu de Arashiyama']
      }
    }
  },
  Itália: {
    cidades: {
      Roma: {
        quantoLevar: '€ 2800 por 1 semana',
        passagem: 'A partir de € 680 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Hotel Impero - € 75/noite',
          'Hotel Andreotti - € 70/noite'
        ],
        pontosTuristicos: ['Coliseu', 'Fontana di Trevi', 'Vaticano', 'Pantheon']
      },
      Veneza: {
        quantoLevar: '€ 2700 por 1 semana',
        passagem: 'A partir de € 700 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Hotel Arlecchino - € 85/noite',
          'Hotel Antiche Figure - € 80/noite'
        ],
        pontosTuristicos: ['Grande Canal', 'Piazza San Marco', 'Palácio Ducal']
      },
      Milão: {
        quantoLevar: '€ 2900 por 1 semana',
        passagem: 'A partir de € 750 ida e volta',
        visto: 'Dispensa de visto por até 90 dias (para brasileiros)',
        hoteis: [
          'Ibis Milano Centro - € 70/noite',
          'Hotel Berna - € 80/noite'
        ],
        pontosTuristicos: ['Catedral de Milão', 'Galeria Vittorio Emanuele II', 'Castelo Sforzesco']
      }
    }
  }
};

function Planejamento() {
  const navigate = useNavigate();
  const [paisSelecionado, setPaisSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');

  const handlePaisChange = (e) => {
    setPaisSelecionado(e.target.value);
    setCidadeSelecionada('');
  };

  const handleCidadeChange = (e) => {
    setCidadeSelecionada(e.target.value);
  };

  const cidadesDisponiveis = paisSelecionado ? Object.keys(destinos[paisSelecionado].cidades) : [];
  const infoDestino = paisSelecionado && cidadeSelecionada
    ? destinos[paisSelecionado].cidades[cidadeSelecionada]
    : null;

  return (
    <div className="planejamento-container">
      <img
        src={logo}
        alt="GoPlaneje"
        className="planejamento-logo"
        onClick={() => navigate('/home')}
      />

      <h1 className="planejamento-title">📘 Dicas de Viagem</h1>
      <p className="planejamento-subtext">
        Selecione o país e a cidade para ver informações úteis para sua viagem.
      </p>

      <div className="planejamento-content">
        <select value={paisSelecionado} onChange={handlePaisChange} className="planejamento-select">
          <option value="">Selecione um país</option>
          {Object.keys(destinos).map((pais) => (
            <option key={pais} value={pais}>{pais}</option>
          ))}
        </select>

        {cidadesDisponiveis.length > 0 && (
          <select value={cidadeSelecionada} onChange={handleCidadeChange} className="planejamento-select">
            <option value="">Selecione uma cidade</option>
            {cidadesDisponiveis.map((cidade) => (
              <option key={cidade} value={cidade}>{cidade}</option>
            ))}
          </select>
        )}

        {infoDestino && (
          <div className="planejamento-detalhes">
            <div className="planejamento-item">
              <span className="planejamento-highlight">💰 Quanto levar:</span> {infoDestino.quantoLevar}
            </div>
            <div className="planejamento-item">
              <span className="planejamento-highlight">✈️ Passagem:</span> {infoDestino.passagem}
            </div>
            <div className="planejamento-item">
              <span className="planejamento-highlight">🛂 Visto:</span> {infoDestino.visto}
            </div>
            <div className="planejamento-item">
              <span className="planejamento-highlight">🏨 Hotéis:</span>
              <ul>
                {infoDestino.hoteis.map((hotel, index) => (
                  <li key={index}>{hotel}</li>
                ))}
              </ul>
            </div>
            <div className="planejamento-item">
              <span className="planejamento-highlight">📍 Pontos turísticos:</span> {infoDestino.pontosTuristicos.join(', ')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Planejamento;
