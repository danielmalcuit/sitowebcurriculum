var counter = 0;

function aggiungi(){
    counter++;
    document.getElementById("number").innerHTML = counter;
}
function sottrai(){;
    if(counter != 0){
        counter--
    }
    document.getElementById("number").innerHTML = counter;
}