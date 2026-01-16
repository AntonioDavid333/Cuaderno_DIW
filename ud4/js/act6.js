let ctx6=document.getElementById("ctx6").getContext("2d")

ctx6.beginPath()
ctx6.moveTo(10,125)
ctx6.lineTo(390,125)

ctx6.bezierCurveTo(10,125,Math.PI*1,20)

ctx6.lineWidth=1
ctx6.strokeStyle="darkred"

