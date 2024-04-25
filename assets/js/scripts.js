document.addEventListener('DOMContentLoaded', () => {
    /* const APIurl = 'https://api.weatherapi.com/v1/current.json?key=b35029aeaf2c4c4ab25101705242504&lang=es&q=';
    const ciudad = document.getElementById('ciudad').textContent.toLowerCase();
    const urlFinal = APIurl + ciudad; */

    const ejemplo = {"location":{"name":"Madrid","region":"Madrid","country":"Spain","lat":40.4,"lon":-3.68,"tz_id":"Europe/Madrid","localtime_epoch":1714043711,"localtime":"2024-04-25 13:15"},"current":{"last_updated_epoch":1714042800,"last_updated":"2024-04-25 13:00","temp_c":16.0,"temp_f":60.8,"is_day":1,"condition":{"text":"Soleado","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":2.2,"wind_kph":3.6,"wind_degree":260,"wind_dir":"W","pressure_mb":1010.0,"pressure_in":29.83,"precip_mm":0.0,"precip_in":0.0,"humidity":45,"cloud":0,"feelslike_c":16.0,"feelslike_f":60.8,"vis_km":10.0,"vis_miles":6.0,"uv":5.0,"gust_mph":8.0,"gust_kph":12.9}};

    console.log(ejemplo.location.name);

    const nombreCiudad = document.getElementById('nombre-ciudad');
    nombreCiudad.innerText = ejemplo.location.name;

    const temperatura = document.getElementById('temperatura');
    temperatura.innerText = ejemplo.current.temp_c;

    const iconoTiempo = document.getElementById('icono-tiempo');
    iconoTiempo.src = ejemplo.current.condition.icon;

    const humedad = document.getElementById('humedad');
    humedad.innerText = ejemplo.current.humidity;

    //Obtener la hora
    const fecha = new Date();

    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();

    // Formatear la hora como una cadena
    const horaActual = horas + ':' + minutos;

    const hora = document.getElementById('hora');
    hora.innerText = horaActual;
});