const chaveApi = "0cbfab45039570fe5268f3d8527c9414";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const caixaBusca = document.querySelector('.busca input')
const buscaBtn = document.querySelector('.busca button')
const iconeClima = document.querySelector('.icone-clima')

document.querySelector('.clima').style.display = 'none'
async function checarClima(city) {
    const resposta = await fetch(apiUrl + city + `&appid=${chaveApi}`);
    var dados = await resposta.json();

    console.log(dados)

    document.querySelector('.cidade').innerHTML = dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + `ºC`
    document.querySelector('.humidade').innerHTML = dados.main.humidity + `%`
    document.querySelector('.vento').innerHTML = dados.wind.speed + ` km/h`

    if(dados.weather[0].main == "Clouds") {
        iconeClima.src = "images/clouds.png"
    } else if(dados.weather[0].main == "Rain") {
        iconeClima.src = "images/rain.png"
    } else if(dados.weather[0].main == "Clear") {
        iconeClima.src = "images/clear.png"
    } else if(dados.weather[0].main == "Drizzle") {
        iconeClima.src = "images/drizzle.png"
    } else if(dados.weather[0].main == "Mist") {
        iconeClima.src = "images/mist.png"
    } else if(dados.weather[0].main == "Snow") {
        iconeClima.src = "images/snow.png"
    } 

}

buscaBtn.addEventListener('click', ()=> {
    checarClima(caixaBusca.value);
    document.querySelector('.clima').style.display = 'block'
})