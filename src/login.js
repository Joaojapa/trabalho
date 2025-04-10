import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from './logo.png';
import { EyeOff, Eye } from 'lucide-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-page-body');
    return () => {
      document.body.classList.remove('login-page-body');
    };
  }, []);

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === username && u.senha === password
    );

    if (usuarioEncontrado) {
      setError('');
      navigate('/home');
    } else {
      setError('Usuário ou senha incorretos');
      const errorTimeout = setTimeout(() => {
        setError('');
      }, 5000);
      return () => clearTimeout(errorTimeout);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" className="login-logo-image" />
        </div>
        <div className="login-title">Entrar</div>
        <div className="login-subtitle">Faça login e comece a planejar suas viagens!</div>

        <div className="login-input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="E-mail"
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className="login-input-group" id="login-input-password">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            onKeyDown={handleKeyPress}
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Lembrar-se de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button className="login-button" onClick={handleLogin}>Entrar</button>

        {error && <p className="error-message">{error}</p>}

        <div className="register-link">
          Não tem uma conta?{' '}
          <span
            onClick={() => navigate('/cadastro')}
            style={{ cursor: 'pointer', color: '#55adff', textDecoration: 'underline' }}
          >
            Cadastre-se
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
