import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import fundoLogin from "../assets/logos/login-bg.png";

import "../styles/login.css";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [erro, setErro] = useState("");

  const [loading, setLoading] = useState(false);

  async function fazerLogin() {

    try {

      setLoading(true);

      setErro("");

      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      navigate("/");

    } catch (e) {

      console.error(e);

      setErro("Email ou senha inválidos.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div

      className="login-page"

      style={{
        backgroundImage:`url(${fundoLogin})`
      }}

    >

      <div className="login-overlay">

        <div className="login-card">

          <div className="login-header">

            <h1 className="login-title">

              ARS <span>CONNECT</span>

            </h1>

            <p className="login-subtitle">

              Plataforma Inteligente de Gestão e Monitoramento

            </p>

          </div>

          <div className="login-form">

            <input

              className="login-input"

              placeholder="E-mail"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

            />

            <input

              className="login-input"

              type={

                mostrarSenha

                  ? "text"

                  : "password"

              }

              placeholder="Senha"

              value={senha}

              onChange={(e)=>setSenha(e.target.value)}

            />
                        <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                  checked={mostrarSenha}
                  onChange={() =>
                    setMostrarSenha(!mostrarSenha)
                  }
                />

                Mostrar senha

              </label>

              <span className="forgot-password">

                Esqueci minha senha

              </span>

            </div>

            {

              erro && (

                <div className="login-error">

                  {erro}

                </div>

              )

            }

            <button

              className="login-button"

              onClick={fazerLogin}

              disabled={loading}

            >

              {

                loading

                  ? "Entrando..."

                  : "ENTRAR"

              }

            </button>

            <div className="status-box">

              <div className="status-item">

                🟢 Firebase Online

              </div>

              <div className="status-item">

                🟢 Servidor Online

              </div>

              <div className="status-item">

                🟢 Login Seguro

              </div>

            </div>

            <div className="login-footer">

              <div className="footer-title">

                ARS CONNECT

              </div>

              <div>

                Enterprise Edition

              </div>

              <div>

                Versão 1.0

              </div>

              <div>

                © 2026 ARS CONNECT

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
