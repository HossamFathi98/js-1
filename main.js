document.getElementById("res").onclick = function () {
    let x = +(document.getElementById("x").value) ;
    let y = +(document.getElementById("y").value) ;
    let sel = document.getElementById("sel")
    let value = sel.options[sel.selectedIndex].text;
    if (value == "+") {
        document.getElementById("res-h").innerText = "The Sum = "+ (x + y) ;
    }else if (value == "-") {
        document.getElementById("res-h").innerText ="The Sub = "+ (x - y) ;
    }else if (value == "*") {
        document.getElementById("res-h").innerText = "The Multi = "+ (x * y) ;
    }else {
        document.getElementById("res-h").innerText ="The Div = "+ (x / y) ;
    }
}
