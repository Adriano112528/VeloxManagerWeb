import { useEffect, useState } from "react";

import {
  cadastrarTecnico,
  editarTecnico,
} from "../services/CadastroTecnicoService";

export default function NovoTecnico() {

  const inicial = {
    nome: "",
    telefone: "",
    email: "",
    cpf: "",
    cidade: "",
    equipe: "",
    veiculo: "",
    placa: "",
    senha: "",
    confirmarSenha: "",
  };

  const [dados, setDados] = useState(inicial);

  const [salvando, setSalvando] = useState(false);

  const [editando, setEditando] = useState(false);

  const [idTecnico, setIdTecnico] = useState("");

  useEffect(() => {

    const tecnico =
      localStorage.getItem("tecnicoEditar");

    if (!tecnico) return;

    const dadosTecnico =
      JSON.parse(tecnico);

    setDados({
      ...inicial,
      ...dadosTecnico,
    });

    setIdTecnico(dadosTecnico.id);

    setEditando(true);

  }, []);

  function alterar(e) {

    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });

  }

  async function salvar() {

    if (!dados.nome.trim()) {
      alert("Informe o nome.");
      return;
    }

    if (!dados.email.trim()) {
      alert("Informe o e-mail.");
      return;
    }

    if (!dados.telefone.trim()) {
      alert("Informe o telefone.");
      return;
    }

    if (!editando) {

      if (dados.senha !== dados.confirmarSenha) {
        alert("As senhas não conferem.");
        return;
      }

    }

    try {

      setSalvando(true);

      if (editando) {

        await editarTecnico(
          idTecnico,
          dados
        );

        alert("✅ Técnico atualizado.");

      } else {

        await cadastrarTecnico(
          dados
        );

        alert("✅ Técnico cadastrado.");

      }

      localStorage.removeItem(
        "tecnicoEditar"
      );

      setDados(inicial);

      setEditando(false);

      setIdTecnico("");

    } catch (erro) {

      console.error(erro);

      alert("Erro ao salvar.");

    } finally {

      setSalvando(false);

    }

  }

  return (

    <div
      style={{
        padding: 30,
      }}
    >

      <h1
        style={{
          marginBottom: 25,
          color: "#0F2D73",
        }}
      >
        {editando
          ? "✏️ Editar Técnico"
          : "👷 Novo Técnico"}
      </h1>

      <div
        style={{
          background: "#FFF",
          borderRadius: 22,
          padding: 30,
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >

          <Campo
            titulo="Nome Completo"
            name="nome"
            value={dados.nome}
            onChange={alterar}
          />

          <Campo
            titulo="Telefone"
            name="telefone"
            value={dados.telefone}
            onChange={alterar}
          />

          <Campo
            titulo="E-mail"
            name="email"
            value={dados.email}
            onChange={alterar}
          />

          <Campo
            titulo="CPF"
            name="cpf"
            value={dados.cpf}
            onChange={alterar}
          />

          <Campo
            titulo="Cidade"
            name="cidade"
            value={dados.cidade}
            onChange={alterar}
          />

          <div>

            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: "bold",
                color: "#334155",
              }}
            >
              Equipe
            </label>

            <select
              name="equipe"
              value={dados.equipe}
              onChange={alterar}
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 10,
                border: "1px solid #CBD5E1",
                fontSize: 15,
              }}
            >
              <option value="">Selecione...</option>
              <option value="Caxias">Caxias</option>
              <option value="Taquara">Taquara</option>
              <option value="Sapucaia">Sapucaia</option>
            </select>

          </div>

          <Campo
            titulo="Veículo"
            name="veiculo"
            value={dados.veiculo}
            onChange={alterar}
          />

          <Campo
            titulo="Placa"
            name="placa"
            value={dados.placa}
            onChange={alterar}
          />

          {!editando && (
            <>
              <Campo
                titulo="Senha Inicial"
                type="password"
                name="senha"
                value={dados.senha}
                onChange={alterar}
              />

              <Campo
                titulo="Confirmar Senha"
                type="password"
                name="confirmarSenha"
                value={dados.confirmarSenha}
                onChange={alterar}
              />
            </>
          )}

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 15,
            marginTop: 35,
          }}
        >

          <button
            onClick={() => {

              localStorage.removeItem(
                "tecnicoEditar"
              );

              setDados(inicial);

              setEditando(false);

            }}
            style={{
              background: "#CBD5E1",
              border: 0,
              padding: "14px 24px",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cancelar
          </button>

          <button
            onClick={salvar}
            disabled={salvando}
            style={{
              background: "#2563EB",
              color: "#FFF",
              border: 0,
              padding: "14px 28px",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {salvando
              ? "Salvando..."
              : editando
                ? "💾 Atualizar Técnico"
                : "💾 Salvar Técnico"}
          </button>

        </div>

      </div>

    </div>

  );

}

function Campo({
  titulo,
  name,
  value,
  onChange,
  type = "text",
}) {

  return (

    <div>

      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontWeight: "bold",
          color: "#334155",
        }}
      >
        {titulo}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 10,
          border: "1px solid #CBD5E1",
          fontSize: 15,
          boxSizing: "border-box",
        }}
      />

    </div>

  );

}