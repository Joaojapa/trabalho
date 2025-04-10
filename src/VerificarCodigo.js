import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './login.css';

function VerificarCodigo() {
  const [codigo, setCodigo] = useState('');
  const [codigoEnviado, setCodigoEnviado] = useState('');
  const navigate = useNavigate();

  const dadosCadastro = JSON.parse(localStorage.getItem('cadastro'));
  const { email, nome, senha } = dadosCadastro || {};

  useEffect(() => {
    if (!email) {
      alert('Dados de cadastro não encontrados.');
      navigate('/');
      return;
    }

    const codigoGerado = Math.floor(100000 + Math.random() * 900000).toString();
    setCodigoEnviado(codigoGerado);

    const templateParams = {
      to_email: email,
      code: codigoGerado,
      fname: nome
    };

    emailjs.send(
      'service_1zc8p4t',
      'template_0fur25i',
      templateParams,
      'FcxLieZHxOrUH8vmv'
    )
      .then(() => {
        alert('Código enviado para seu e-mail!');
      })
      .catch((err) => {
        console.error('Erro ao enviar e-mail:', err);
        alert('Erro ao enviar o código.');
      });
  }, [email, nome, navigate]);

  const verificar = () => {
    if (codigo === codigoEnviado) {
      alert('Cadastro finalizado com sucesso!');

      const cadastro = JSON.parse(localStorage.getItem('cadastro'));

      if (cadastro) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const jaExiste = usuarios.some((u) => u.email === cadastro.email);

        if (!jaExiste) {
          usuarios.push({
            nome: cadastro.nome,
            email: cadastro.email,
            senha: cadastro.senha
          });
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
      }

      localStorage.removeItem('cadastro');
      navigate('/home');
    } else {
      alert('Código incorreto. Verifique seu e-mail.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-title">Verificação</div>
        <div className="login-subtitle">Digite o código que foi enviado ao seu e-mail.</div>

        <div className="login-input-group">
          <input
            type="text"
            placeholder="Código de verificação"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={verificar}>
          Verificar
        </button>
      </div>
    </div>
  );
}

export default VerificarCodigo;
