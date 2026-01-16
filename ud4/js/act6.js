let ctx6=document.getElementById("ctx6").getContext("2d")

ctx6.beginPath()
ctx6.moveTo(10,125)

ctx6.bezierCurveTo(
    150,20,
    250,230,
    390,125,


)

ctx6.lineWidth=1
ctx6.strokeStyle="darkred"
ctx6.stroke()



