import { useEffect, useState } from "react";
import WeatherService from "../../services/WeatherService";

function obterIcone(codigo) {

  if (codigo === 0) {
    return "☀️";
  }

  if ([1, 2].includes(codigo)) {
    return "🌤️";
  }

  if (codigo === 3) {
    return "☁️";
  }

  if ([45, 48].includes(codigo)) {
    return "🌫️";
  }

  if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(codigo)) {
    return "🌧️";
  }

  if ([71,73,75,77,85,86].includes(codigo)) {
    return "❄️";
  }

  if ([95,96,99].includes(codigo)) {
    return "⛈️";
  }

  return "🌦️";
}

function descricaoClima(codigo){

  if(codigo===0) return "Céu Limpo";

  if([1,2].includes(codigo))
    return "Parcialmente Nublado";

  if(codigo===3)
    return "Nublado";

  if([45,48].includes(codigo))
    return "Neblina";

  if([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(codigo))
    return "Chuva";

  if([71,73,75,77,85,86].includes(codigo))
    return "Neve";

  if([95,96,99].includes(codigo))
    return "Tempestade";

  return "Indefinido";
}

function corStatus(codigo){

  if([95,96,99].includes(codigo))
    return "#EF4444";

  if([61,63,65,80,81,82].includes(codigo))
    return "#F59E0B";

  return "#22C55E";

}

function textoStatus(codigo){

  if([95,96,99].includes(codigo))
    return "Operação Comprometida";

  if([61,63,65,80,81,82].includes(codigo))
    return "Atenção";

  return "Condições Ideais";

}

export default function WeatherCard(){

  const [clima,setClima]=useState(null);

  useEffect(()=>{

    async function carregar(){

      const dados=
        await WeatherService.obterClima();

      setClima(dados);

    }

    carregar();

    const timer=
      setInterval(carregar,600000);

    return ()=>clearInterval(timer);

  },[]);

  if(!clima){

    return(

      <div
        style={{
          background:"#FFF",
          borderRadius:22,
          padding:30,
          boxShadow:"0 12px 30px rgba(0,0,0,.08)"
        }}
      >

        Carregando clima...

      </div>

    );

  }

  const icone =
    obterIcone(clima.weather_code);

  const descricao =
    descricaoClima(clima.weather_code);

  const statusCor =
    corStatus(clima.weather_code);

  const statusTexto =
    textoStatus(clima.weather_code);
      return (

    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 22,
        padding: 28,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >

      {/* CABEÇALHO */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <h2
          style={{
            margin: 0,
            color: "#0F2D73",
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          🌦 Clima Operacional
        </h2>

        <div
          style={{
            fontSize: 60,
          }}
        >
          {icone}
        </div>

      </div>

      {/* TEMPERATURA */}

      <div
        style={{
          marginTop: 15,
        }}
      >

        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#2563EB",
            lineHeight: 1,
          }}
        >
          {clima.temperature_2m}°C
        </div>

        <div
          style={{
            marginTop: 10,
            color: "#64748B",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {descricao}
        </div>

      </div>

      {/* DADOS */}

      <div
        style={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          fontSize: 17,
        }}
      >

        <div>
          📍 <strong>Caxias do Sul - RS</strong>
        </div>

        <div>
          💧 Umidade:
          <strong> {clima.relative_humidity_2m}%</strong>
        </div>

        <div>
          🌬 Vento:
          <strong> {clima.wind_speed_10m} km/h</strong>
        </div>

      </div>

      {/* STATUS */}

      <div
        style={{
          marginTop: 30,
          background: statusCor,
          color: "#FFFFFF",
          padding: "14px 18px",
          borderRadius: 14,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {statusTexto}
      </div>

      {/* RODAPÉ */}

      <div
        style={{
          marginTop: 18,
          textAlign: "center",
          color: "#94A3B8",
          fontSize: 13,
        }}
      >
        🔄 Atualização automática a cada 10 minutos
      </div>

    </div>

  );

}