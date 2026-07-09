import { useState } from "react";

export default function NovaOrdemServico() {

  const [dados, setDados] = useState({
    cliente: "",
    telefone: "",
    cidade: "",
    bairro: "",
    endereco: "",
    numero: "",
    complemento: "",
    tecnico: "",
    tipo: "",
    prioridade: "Normal",
    data: "",
    hora: "",
    observacoes: "",
  });

  function alterar(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  }

  function salvar() {
    alert("Próximo passo vamos salvar no Firebase.");
  }

  return (

    <div style={{ padding:30 }}>

      <h1
        style={{
          color:"#0F2D73",
          marginBottom:25,
          fontSize:34
        }}
      >
        📋 Nova Ordem de Serviço
      </h1>

      <div
        style={{
          background:"#FFF",
          borderRadius:20,
          padding:30,
          boxShadow:"0 10px 30px rgba(0,0,0,.08)"
        }}
      >

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:20
          }}
        >

          <Campo titulo="Cliente" name="cliente" value={dados.cliente} onChange={alterar}/>
          <Campo titulo="Telefone" name="telefone" value={dados.telefone} onChange={alterar}/>
          <Campo titulo="Cidade" name="cidade" value={dados.cidade} onChange={alterar}/>
          <Campo titulo="Bairro" name="bairro" value={dados.bairro} onChange={alterar}/>
          <Campo titulo="Endereço" name="endereco" value={dados.endereco} onChange={alterar}/>
          <Campo titulo="Número" name="numero" value={dados.numero} onChange={alterar}/>
          <Campo titulo="Complemento" name="complemento" value={dados.complemento} onChange={alterar}/>

          <Select
            titulo="Tipo de Serviço"
            name="tipo"
            value={dados.tipo}
            onChange={alterar}
            opcoes={[
              "Instalação Nova",
              "Manutenção",
              "Mudança de Endereço",
              "Troca de ONU",
              "Troca de Drop",
              "Suporte",
            ]}
          />

          <Select
            titulo="Prioridade"
            name="prioridade"
            value={dados.prioridade}
            onChange={alterar}
            opcoes={[
              "Normal",
              "Urgente",
              "Emergência",
            ]}
          />

          <Campo titulo="Data" type="date" name="data" value={dados.data} onChange={alterar}/>
          <Campo titulo="Hora" type="time" name="hora" value={dados.hora} onChange={alterar}/>

        </div>

        <div style={{ marginTop:20 }}>

          <label
            style={{
              display:"block",
              marginBottom:8,
              fontWeight:"bold"
            }}
          >
            Observações
          </label>

          <textarea
            rows="5"
            name="observacoes"
            value={dados.observacoes}
            onChange={alterar}
            style={{
              width:"100%",
              padding:15,
              borderRadius:12,
              border:"1px solid #CBD5E1",
              resize:"vertical",
              boxSizing:"border-box"
            }}
          />

        </div>

        <div
          style={{
            display:"flex",
            justifyContent:"flex-end",
            gap:15,
            marginTop:30
          }}
        >

          <button
            style={{
              background:"#CBD5E1",
              border:0,
              padding:"14px 22px",
              borderRadius:12,
              cursor:"pointer"
            }}
          >
            Cancelar
          </button>

          <button
            onClick={salvar}
            style={{
              background:"#2563EB",
              color:"#FFF",
              border:0,
              padding:"14px 28px",
              borderRadius:12,
              cursor:"pointer",
              fontWeight:"bold"
            }}
          >
            💾 Salvar Ordem de Serviço
          </button>

        </div>

      </div>

    </div>

  );

}

function Campo({ titulo, ...props }) {
  return (
    <div>
      <label
        style={{
          display:"block",
          marginBottom:8,
          fontWeight:"bold"
        }}
      >
        {titulo}
      </label>

      <input
        {...props}
        style={{
          width:"100%",
          padding:14,
          borderRadius:10,
          border:"1px solid #CBD5E1",
          boxSizing:"border-box"
        }}
      />
    </div>
  );
}

function Select({
  titulo,
  opcoes,
  ...props
}) {
  return (
    <div>
      <label
        style={{
          display:"block",
          marginBottom:8,
          fontWeight:"bold"
        }}
      >
        {titulo}
      </label>

      <select
        {...props}
        style={{
          width:"100%",
          padding:14,
          borderRadius:10,
          border:"1px solid #CBD5E1",
          boxSizing:"border-box"
        }}
      >
        <option value="">Selecione...</option>

        {opcoes.map(opcao => (
          <option
            key={opcao}
            value={opcao}
          >
            {opcao}
          </option>
        ))}

      </select>
    </div>
  );
}