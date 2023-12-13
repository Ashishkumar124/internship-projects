const calculateTemp = () => {

    const numberTemp = document.getElementById("temp").value;
    // console.log(numberTemp);
    
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);
const celToFah = (cel) => {
    let Fahrenheit = Math.round((cel * 9/5) + 32);
    return Fahrenheit;
}

const fahToCal = (fahr) => {
    let Celsius = Math.round((fahr -32) * 5/9);
    return Celsius;
}

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML = `= ${result} Fahrenheit`;
    }else{
        result = fahToCal(numberTemp);
        document.getElementById("resultContainer").innerHTML = `= ${result} Celsius`;
        }

    }
