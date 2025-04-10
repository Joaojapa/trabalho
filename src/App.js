import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import './App.css';
import './login.css'
import logo from './logo.png';
import axios from 'axios'; // Importa o Axios para fazer a requisição

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [maxBudget, setMaxBudget] = useState(0);
  const [airline, setAirline] = useState('');
  const [countries, setCountries] = useState([]); // Estado para armazenar os países

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const sortedCountries = response.data
          .map(country => country.name.common)
          .sort();
        setCountries(sortedCountries);
      })
      .catch(error => {
        console.error("Erro ao carregar países:", error);
  
        // Fallback: lista básica de países se a API falhar (ex: na Vercel)
        setCountries([
          "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
          "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
          "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
          "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
          "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
          "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
          "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark",
          "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
          "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
          "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
          "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
          "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
          "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
          "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
          "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
          "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
          "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
          "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
          "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
          "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
          "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
          "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
          "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
          "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
          "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
          "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
          "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
          "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
          "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
          "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        
        ]);
      });
  }, []);
  
  const airlinesList = [
    "Avianca", "Avianca Brasil", "Azul Linhas Aéreas Brasileiras", "British Airways", "Emirates", "Gol Linhas Aéreas", 
    "KLM Royal Dutch Airlines", "LATAM Airlines Group", "Nacional Linhas Aéreas", "Passaredo", "Qatar Airways", 
    "Santos Dumont", "TAM Airlines", "Trip Linhas Aéreas", "WebJet Linhas Aéreas", "Air France", "American Airlines"
  ];

  const handleSearch = () => {
    if (!origin || !destination || !departureDate || !returnDate || !time || !airline) {
      setError(language === 'pt' ? 'Por favor, preencha todos os campos.' : 'Please fill in all fields.');
      setTimeout(() => setError(''), 5000);
      return;
    }
  
    setError('');
    alert(`${language === 'pt' ? 'Buscando viagens' : 'Searching for trips'} de ${origin} para ${destination} 
      ${language === 'pt' ? 'ida em' : 'departure on'} ${departureDate}, 
      ${language === 'pt' ? 'volta em' : 'return on'} ${returnDate} às ${time}, 
      ${language === 'pt' ? 'orçamento máximo: R$' : 'max budget: R$'} ${parseInt(maxBudget).toLocaleString('pt-BR')}
      ${language === 'pt' ? 'companhia aérea: ' : 'airline: '} ${airline}`);
  
    navigate('/resultado', {
      state: {
        origin,
        destination,
        departureDate,
        returnDate,
        time,
        airline,
        maxBudget,
      },
    });
  };
  

  

  const switchLanguage = (lang) => setLanguage(lang);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="app-container">
      {error && <div className="notification">{error}</div>}

      <header className="header">
        <div className="logo">
          <img src={logo} alt="GoPlaneje Logo" className="logo-image" />
        </div>

        <nav className="nav-menu">
          <a href="/trips">{language === 'pt' ? 'SUAS VIAGEM' : 'YOUR TRIP'}</a>
          <a href="/cliente">{language === 'pt' ? 'CANAL DO CLIENTE' : 'CUSTOMER SERVICE'}</a>
          <a href="/notices">{language === 'pt' ? 'AVISOS' : 'NOTICES'}</a>
          <a href="/company">{language === 'pt' ? 'A EMPRESA' : 'THE COMPANY'}</a>
        </nav>

        <div className="menu-hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <div className="language-switch">
          <button className={`lang-btn ${language === 'pt' ? 'active' : ''}`} onClick={() => switchLanguage('pt')}>PT</button>
          <button className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => switchLanguage('en')}>EN</button>
        </div>
      </header>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-logo">
          <img src={logo} alt="GoPlaneje Logo" className="side-menu-logo-image" />
        </div>
        <nav className="side-menu-links">
          <a href="/moedas">Moedas</a>
          <a href="/Converter">Converter moedas</a>
          <a href="/planejamento">Dicas de viagem</a>
          <a href="/orcamento">Orçamento de Viagem</a>
          <a href="/calendario">Calendário</a>
          <a href='https://earth.google.com/web'>Mapa Mundial</a>
          <a href="#" className="logout-link" onClick={handleLogout}>
            {language === 'pt' ? 'Sair' : 'Log out'}
          </a>
        </nav>
      </div>

      <div className="main-container">
        <div className="form-container">
          <div className="app-input-group">
            <label>{language === 'pt' ? 'Onde você está?' : 'Where are you from?'}</label>
            <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
              <option value="">{language === 'pt' ? 'Selecione' : 'Select'}</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="app-input-group">
            <label>{language === 'pt' ? 'Para onde vai?' : 'Where are you going?'}</label>
            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">{language === 'pt' ? 'Selecione' : 'Select'}</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="app-input-group">
            <label>{language === 'pt' ? 'Ida' : 'Departure'}</label>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </div>

          <div className="app-input-group">
            <label>{language === 'pt' ? 'Volta' : 'Return'}</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </div>

          <div className="app-input-group">
            <label>{language === 'pt' ? 'Hora' : 'Time'}</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>

          <div className="app-input-group">
            <label>{language === 'pt' ? 'companhia aérea' : 'Which airline do you prefer?'}</label>
            <select value={airline} onChange={(e) => setAirline(e.target.value)}>
              <option value="">{language === 'pt' ? 'Selecione' : 'Select'}</option>
              {airlinesList.map((airline, index) => (
                <option key={index} value={airline}>{airline}</option>
              ))}
            </select>
          </div>

          <div className="app-input-group">
            <label>{language === 'pt' ? 'Quanto pretende gastar?' : 'How much do you plan to spend?'}</label>
            <div className="budget-slider-container">
              <input
                type="range"
                min="0"
                max="100000"
                step="500"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
              />
              <span className="budget-value">R$ {parseInt(maxBudget).toLocaleString('pt-BR')}</span>
            </div>
          </div>

          <button className="search-button" onClick={handleSearch}>
            {language === 'pt' ? 'Ir' : 'Go'}
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-section">
          <h4>Atendimento</h4>
          <p>📞 <a href="https://wa.me/5561994040955" target="_blank" rel="noopener noreferrer">(61) 99404-0955</a></p>
          <p>📧 goplaneje@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/goplaneje" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Úteis</h4>
          <p>Política de Privacidade</p>
          <p>Termos de Serviço</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
