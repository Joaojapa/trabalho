import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { EyeOff, Eye } from 'lucide-react';
import Alerta from './Alerta';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!nome || !email || !senha || !repetirSenha) {
      setMensagemErro('Preencha todos os campos!');
      return;
    }

    if (senha !== repetirSenha) {
      setMensagemErro('As senhas não coincidem!');
      return;
    }

    const senhaForte = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!senhaForte.test(senha)) {
      setMensagemErro('A senha deve ter pelo menos 8 caracteres, um número, uma letra maiúscula e um caractere especial.');
      return;
    }

    localStorage.setItem('cadastro', JSON.stringify({ nome, email, senha }));
    navigate('/verificar-codigo');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-title">Cadastro</div>
        <div className="login-subtitle">Crie sua conta!</div>

        {mensagemErro && (
          <Alerta mensagem={mensagemErro} onClose={() => setMensagemErro('')} />
        )}

        <div className="login-input-group">
          <input
            type="text"
            placeholder="Primeiro nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="login-input-group">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input-group" id="login-input-password">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="login-input-group" id="login-input-password">
          <input
            type={showRepeatPassword ? "text" : "password"}
            placeholder="Repita a senha"
            value={repetirSenha}
            onChange={(e) => setRepetirSenha(e.target.value)}
          />
          <button type="button" onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
            {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="login-button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Cadastro;
