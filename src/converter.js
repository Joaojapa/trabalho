import React, { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './converter.css';
import logo from './logo.png';

const Converter = () => {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const navigate = useNavigate();

  const convertCurrency = () => {
    const rate = 0.169; // 1 BRL = 0.169 USD
    setExchangeRate(rate);
    setConvertedAmount((amount * rate).toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="converter-container">
      <img src={logo} alt="Logo" className="empresa-logo" onClick={() => navigate('/home')} />

      {/* Logo Central + Título */}
      <div className="central-header">
        <img src={logo} alt="Logo Central" className="central-logo" />
      </div>

      <div className="converter-card">
        <label>Quantidade</label>
        <div className="input-group">
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CAD">CAD</option>
          </select>
        </div>

        <div className="exchange-wrapper">
          <FaExchangeAlt className="exchange-icon" onClick={swapCurrencies} />
        </div>

        <label>Converter para</label>
        <div className="input-group">
          <input type="text" value={convertedAmount} readOnly />
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CAD">CAD</option>
          </select>
        </div>

        <button className="converter-button" onClick={convertCurrency}>Converter</button>
      </div>
    </div>
  );
};

export default Converter;
