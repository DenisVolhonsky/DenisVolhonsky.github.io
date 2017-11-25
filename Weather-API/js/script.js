
$(document).ready(function (){
    town();
    $('#rez').on('click', weather);
    // weather();
});

function weather() {
    $.get( "http://api.openweathermap.org/data/2.5/weather",
        {
            "id": $('#city option:selected').val(),
            "appid": "ee60a56d516461352f04a28877459c45"
        },
        function (data) {
            var out='';
            out+=`
                        <p class="data">Страна: <b>${data.sys.country}</b></p>
                        <p class="data">Название города: <b>${data.name}</b></p>
                        <p class="data">Температура: <b>${(Math.round(data.main.temp-273))}&deg;С</b></p>
                        <p class="data">Влажность: <b>${data.main.humidity}%</b></p>
                        <p class="data">Давление: <b>${Math.round(data.main.pressure*0.75)} кПа</b></p>
                        <p class="data">Видимость: <b>${data.visibility/1000}км</b></p>
                        <p class="data">Скорость ветра: <b>${data.wind.speed} м/с</b></p>
                        <p class="data">Облачность: <b>${data.weather[0].description}</b></p>
                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="wheather_icon">
            `;
            $('.out').html(out);
        }
    );
}

function town() {
    $.getJSON(
        'city.list.json',
        function (data) {
            var city= `<option value="" selected></option>`;

            for(var key in data) {
                if(data[key].country == "UA") {
                    city += `<option value="${data[key].id}">${data[key].name}</option>`;
                }
            }
            $('#city').html(city);
    });
}