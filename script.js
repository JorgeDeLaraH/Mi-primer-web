function obtenerDia(){
    let date= new Date(2021,09,31);
    let day=date.getDay();
    let month= date.getMonth();
    console.log(`Dia: ${day} Mes: ${month}`)
    switch(day){
        case 0: console.log("Domingo");
        break;
        case 1: console.log("Lunes");
        break;
        case 2: console.log("Martes");
        break;
        case 3: console.log("Miercoles");
        break;
        case 4: console.log("Jueves");
        break;
        case 5: console.log("Viernes");
        break;
        case 6: console.log("Sabado");
        break;
    }
}
obtenerDia();

function arreglo10(valor){
    const indice=valor;
    var arreglo= new Array();
    for(let i=1;i<=valor;i++){
        arreglo.push(i);
    }
    var serie="";
    for(let j=0;j<=valor;j++){
        serie+= `${arreglo[j]} `;
    }
    console.log(serie)
}
palabra="palabra"
arreglo10(palabra.len);
alert('Hola soy una alerta');