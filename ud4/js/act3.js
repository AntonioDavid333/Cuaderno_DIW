console.log("script cargado")
let ctx3=document.getElementById("ctx3").getContext("2d")
console.log(200/3)

ctx3.beginPath()
ctx3.moveTo(2,0)
ctx3.lineTo(2,200)
ctx3.lineWidth=4
ctx3.strokeStyle="red"
ctx3.stroke()

ctx3.beginPath()
ctx3.moveTo(12,0)
ctx3.lineTo(12,200)
ctx3.lineWidth=4
ctx3.strokeStyle="lightgreen"
ctx3.stroke()

ctx3.beginPath()
ctx3.moveTo(22,0)
ctx3.lineTo(22,200)
ctx3.lineWidth=4
ctx3.strokeStyle="lightgreen"
ctx3.stroke()

ctx3.beginPath()
ctx3.moveTo(32,0)
ctx3.lineTo(32,200)
ctx3.lineWidth=4
ctx3.strokeStyle="lightgreen"
ctx3.stroke()

/*FLECHAS*/

ctx3.beginPath()
ctx3.moveTo(50,70)
ctx3.lineTo(75,0)
ctx3.lineTo(100,70)
ctx3.lineWidth=4
ctx3.strokeStyle="blue"
ctx3.stroke()

ctx3.beginPath()
ctx3.moveTo(50,140)
ctx3.lineTo(75,70)
ctx3.lineTo(100,140)
ctx3.lineWidth=4
ctx3.strokeStyle="blue"
ctx3.stroke()

ctx3.beginPath()
ctx3.moveTo(50,200)
ctx3.lineTo(75,140)
ctx3.lineTo(100,200)
ctx3.lineWidth=4
ctx3.strokeStyle="blue"
ctx3.stroke()