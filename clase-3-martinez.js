let camino = prompt("Te encuentras perdido en el bosque, ves 3 posibles caminos Izquierda , Derecha o medio \n cual eliges?")

while(camino != "izquierda"){
    alert("Decides ir por "+camino+"\n caminas un largo rato al no encontrar salida vuelves sobre tus pasos al punto de partida")

    camino=prompt("Que camino eliges esta vez? \n Izquierda, derecha o medio?")


}
alert("tomas el camino "+camino+" luego de caminar un rato ves las luces de la ciudad y logras escapar del bosque! ")

for(let i =parseInt(prompt("ingrese un numero"));i<10;i++){
    alert("Su numero ahora es"+i)
}


for (let i = 0; i<10; i++){
    console.log(i)
}