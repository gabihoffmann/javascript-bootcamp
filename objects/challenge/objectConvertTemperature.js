// function to convert the Temperature in the return is the temperature object
let convertTemperature = function (temp) {
    return{
        fahrenheit: temp,
        celsius: (temp - 32) * 5/9 ,
        kelvin:  ((temp - 32) * 5/9) + 273.15
    }

};

let temps = convertTemperature(74);
console.log(temps)

