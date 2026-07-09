class WeatherService {

  async obterClima() {

    try {

      const latitude = -29.1681;
      const longitude = -51.1794;

      const resposta = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      );

      const dados = await resposta.json();

      return dados.current;

    } catch (erro) {

      console.error("Erro ao obter clima:", erro);

      return null;

    }

  }

}

export default new WeatherService();