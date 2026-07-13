import { useEffect, useState } from "react";

import {
  ouvirEmpresas,
  cadastrarEmpresa,
} from "../../services/EmpresaService";

export default function Empresas() {

  const [empresas, setEmpresas] = useState([]);

  const [nome, setNome] = useState("");

  const [cnpj, setCnpj] = useState("");

  const [telefone, setTelefone] = useState("");

  const [email, setEmail] = useState("");

  const [plano, setPlano] = useState("Enterprise");

  useEffect(() => {

    const unsubscribe =
      ouvirEmpresas(setEmpresas);

    return () => unsubscribe();

  }, []);

  async function salvar() {

    if (!nome) {

      alert("Informe o nome da empresa.");

      return;

    }

    await cadastrarEmpresa({

      nome,

      cnpj,

      telefone,

      email,

      plano,

    });

    setNome("");
    setCnpj("");
    setTelefone("");
    setEmail("");

  }

  return (

    <div>

      <h1
        style={{
          color:"#071B52",
          marginTop:0,
        }}
      >
        🏢 Empresas
      </h1>

      <div
        style={{
          background:"#FFF",
          padding:25,
          borderRadius:20,
          marginBottom:25,
          boxShadow:"0 10px 25px rgba(0,0,0,.08)",
        }}
      >

        <input
          placeholder="Nome"
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
          style={campo}
        />

        <input
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e)=>setCnpj(e.target.value)}
          style={campo}
        />

        <input
          placeholder="Telefone"
          value={telefone}
          onChange={(e)=>setTelefone(e.target.value)}
          style={campo}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={campo}
        />

        <select
          value={plano}
          onChange={(e)=>setPlano(e.target.value)}
          style={campo}
        >

          <option>Basic</option>

          <option>Pro</option>

          <option>Enterprise</option>

        </select>

        <button
          onClick={salvar}
          style={botao}
        >
          Salvar Empresa
        </button>

      </div>

      <div
        style={{
          display:"grid",
          gap:15,
        }}
      >

        {empresas.map((empresa)=>(

          <div
            key={empresa.id}
            style={{
              background:"#FFF",
              padding:20,
              borderRadius:18,
              boxShadow:"0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h3
              style={{
                marginTop:0,
                color:"#071B52",
              }}
            >
              {empresa.nome}
            </h3>

            <div>CNPJ: {empresa.cnpj}</div>

            <div>Email: {empresa.email}</div>

            <div>Plano: {empresa.plano}</div>

            <div>

              {empresa.ativa
                ? "🟢 Ativa"
                : "🔴 Suspensa"}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

const campo = {

  width:"100%",

  padding:14,

  borderRadius:12,

  border:"1px solid #CBD5E1",

  marginBottom:15,

  fontSize:15,

};

const botao = {

  width:"100%",

  padding:15,

  background:"#2563EB",

  color:"#FFF",

  border:0,

  borderRadius:12,

  fontWeight:"bold",

  cursor:"pointer",

};