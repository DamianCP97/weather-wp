document.addEventListener('DOMContentLoaded', () => {
    const APIurl = 'https://api.weatherapi.com/v1/current.json?key=b35029aeaf2c4c4ab25101705242504&lang=es&q=';
    const ciudad = document.getElementById('ciudad').textContent.toLowerCase();
    const urlFinal = APIurl + ciudad;

    fetch(urlFinal)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de respuesta');
            }

            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            // Aquí puedes trabajar con los datos obtenidos
            const nombreCiudad = document.getElementById('nombre-ciudad');
            nombreCiudad.innerText = data.location.name;

            const temperatura = document.getElementById('temperatura');
            temperatura.innerText = 'Temperatura: ' + data.current.temp_c + '°C';

            const iconoTiempo = document.getElementById('icono-tiempo');
            iconoTiempo.src = data.current.condition.icon;

            const humedad = document.getElementById('humedad');
            humedad.innerText = 'Humedad: ' + data.current.humidity + '%';

            //Obtener la hora
            const horaCompleta = data.location.localtime.split(' ')[1]; //Coge solo la parte de la hora e ignora la fecha
            const hora = document.getElementById('hora');
            hora.innerText = 'Hora: ' + horaCompleta;
        })
        .catch(error => {
            console.error('Hubo un problema:', error);
        });
});