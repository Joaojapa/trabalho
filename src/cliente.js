import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cliente.css';
import logo from './logo.png';
import botImage from './bot.png';

function ClienteChat() {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState('');
  const [rating, setRating] = useState(0);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);
  const [supportMessages, setSupportMessages] = useState([]);
  const [supportInput, setSupportInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() !== '' && rating > 0) {
      const newMessage = { text: input, stars: rating, fromBot: false };
      setMessages([...messages, newMessage]);
      setInput('');
      setRating(0);
    }
  };

  const handleDeleteMessage = (index) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  };

  const handleSupportSendMessage = () => {
    if (supportInput.trim() !== '') {
      setSupportMessages([...supportMessages, { text: supportInput, fromBot: false }]);
      setSupportInput('');
      setTimeout(() => {
        const botResponses = [
          "Bem-vindo ao GoPlaneje! O que posso ajudar?",
          "A GoPlaneje é uma empresa especializada em planejamento de viagens, não vendemos passagens aéreas, mas oferecemos serviços de apoio para sua viagem, como conversão de moedas e tabelas com as moedas mais usadas.",
          "Se precisar de mais ajuda, é só avisar!"
        ];

        botResponses.forEach((response, index) => {
          setTimeout(() => {
            setSupportMessages((prevMessages) => [
              ...prevMessages,
              { text: response, fromBot: true }
            ]);
          }, index * 1500);
        });
      }, 1000);
    }
  };

  const handleSupportToggle = () => {
    setIsSupportChatOpen(!isSupportChatOpen);
  };

  return (
    <div className="chat-container">
      <img
        src={logo}
        alt="GoPlaneje"
        className="chat-logo"
        onClick={() => navigate('/home')}
      />
      <h1 className="chat-title">💬 Canal do Cliente</h1>

      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="chat-placeholder">Nenhum feedback ainda. Seja o primeiro a comentar!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.fromBot ? 'bot-message' : 'client-message'}`}>
              {msg.fromBot && <img src={botImage} alt="Bot" className="bot-avatar" />}
              <span className="chat-text">{msg.text}</span>
              <span className="chat-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < msg.stars ? 'filled-star' : 'empty-star'}>★</span>
                ))}
              </span>
              <button className="delete-button" onClick={() => handleDeleteMessage(index)}>
                ❌
              </button>
            </div>
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escreva seu feedback..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <div className="rating">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`star ${rating >= num ? 'selected' : ''}`}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleSendMessage}>Enviar</button>
      </div>

      <button className="support-button" onClick={handleSupportToggle}>🗨️</button>

      {isSupportChatOpen && (
        <div className="support-chat-box">
          <div className="support-chat">
            {supportMessages.length === 0 ? (
              <p className="chat-placeholder">Digite sua dúvida ou mensagem...</p>
            ) : (
              supportMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.fromBot ? 'bot-message' : 'client-message'}`}>
                  {msg.fromBot && <img src={botImage} alt="Bot" className="bot-avatar" />}
                  <span className="chat-text">{msg.text}</span>
                </div>
              ))
            )}
            <div className="chat-input">
              <input
                type="text"
                placeholder="Escreva sua mensagem..."
                value={supportInput}
                onChange={(e) => setSupportInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSupportSendMessage()}
              />
              <button onClick={handleSupportSendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClienteChat;
