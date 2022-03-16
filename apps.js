function askName(){
    var name = prompt("enter your name:")
    return name
}


function greeting(a) { //parameter
    alert(`Welcome back, ${a}.`)
}

greeting(askName()) //argument
