function askName() {
    var name = prompt("Enter your name");
    return name
}

function greeting(a) {
    alert(`Welcome back, ${a}! I hope you are well.`);
}

var n = askName()


function temp() {
    var tempNum = prompt("What is the tempurature you'd like me to process?");
    return tempNum
}


function farOrCelc(name, temp) {
    var tempType = prompt(`The temputature you entered is ${temp}. Would you like to convert it from \n Celcius to Farenheight? (type f) \n Or \n Farenheight to Celcius (type c)? `)

    if (tempType == "c") {
        var convert1 = ((`${temp}`) - 32) * 5 / 9
    alert(`Your number converted from Farenheight to Celcius is ${temp} to ${convert1}`)
        
    } else if (tempType == "f") {
        var convert2 = (`${temp}`) * 9 / 5 + 32
    alert(`Your number converted from Celcius to Farenheight is ${temp} to ${convert2}`)
    
    }
}

farOrCelc(greeting(n),temp())