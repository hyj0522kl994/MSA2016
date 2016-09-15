document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("enter");
    myButton.addEventListener("click", myFunction);
    function myFunction() {
        $("#Name").html("Please wait ..");
        var input = $('#Input').val();
        if (input === "") {
            $("#Input").html("Please Enter The City Again!");
        }
        else {
            $.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=bfaf0741692b8643e450f65d24a14b79", function (data) {
                console.log(data);
                if (input.toUpperCase() === data.name.toUpperCase()) {
                    $("#Name").html("City:  " + data.name + ", " + data.sys.country);
                    $("#Temp").html("Temperature:  " + (data.main.temp - 273.15).toFixed(2) + " &deg;C");
                    $("#Humid").html("Humidity:  " + data.main.humidity);
                    $("#Wind").html("Wind Speed:  " + data.wind.speed + " m/s");
                }
                else {
                    $("#Name").html("Sorry, We can't find your CITY!!");
                }
            });
        }
    }
});
