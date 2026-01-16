console.log("script cargado")
    let ctx=document.getElementById("ctx1").getContext("2d")

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(200,500)

    /* ctx.moveTo(500,500) */
    ctx.lineTo(400,0)
    ctx.lineWidth=1
    ctx.strokeStyle="red"
    ctx.stroke()