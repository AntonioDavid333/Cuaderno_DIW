paisaje=document.getElementById("lienzo").getContext("2d")

    paisaje.fillStyle="#B5CDFF"
    paisaje.fillRect(0,0,500,300)

    
    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*1.8,130*2.2)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()


    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*2,130*2)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*1.6,130*2.4)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"

    paisaje.stroke()
    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*1,130*3)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*6,130*1)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*7,130*1)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*-1,130*1)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290,0)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(0,0)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"

    paisaje.stroke()
    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(500,0)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(200,0)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(0,300)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*2,130*-2)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*-1.6,130*-2.4)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"

    paisaje.stroke()
    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*1,130*-3)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.beginPath()
    paisaje.moveTo(290,130)
    paisaje.lineTo(290*6,130*-1)
    paisaje.lineWidth=3
    paisaje.strokeStyle="orange"
    paisaje.stroke()

    paisaje.fillStyle="#F8FF5A";
    paisaje.beginPath();
    paisaje.arc(290,130,54,0,Math.PI*2,true);
    paisaje.closePath;
    paisaje.fill();

    paisaje.fillStyle="rgba(232,236,247,0.5)";
    paisaje.beginPath();
    paisaje.arc(10,200,80,0,Math.PI*2, true);
    paisaje.arc(88,220,46,0,Math.PI*2, true);
    paisaje.arc(154,199,30,0,Math.PI*2, true);
    paisaje.arc(232,210,62,0,Math.PI*2, true);
    paisaje.arc(320,205,25,0,Math.PI*2, true);
    paisaje.arc(380,200,44,0,Math.PI*2, true);
    paisaje.arc(442,208,23,0,Math.PI*2, true);
    paisaje.arc(498,200,41,0,Math.PI*2, true);
    paisaje.closePath;
    paisaje.fill();

    var gr=paisaje.createLinearGradient(0,200,0,280);
    gr.addColorStop(0,"#D3DEF3");
    gr.addColorStop(1,"#0628A4");
    paisaje.fillStyle=gr;
    paisaje.fillRect(0,200,500,300);

    paisaje.beginPath();
    paisaje.fillStyle="#656652";
    paisaje.strokeStyle="#3C3F09"
    paisaje.moveTo(300,219);
    paisaje.lineTo(360,219);
    paisaje.lineTo(368,203);
    paisaje.lineTo(296,206);
    paisaje.lineTo(300,219);
    paisaje.closePath;
    paisaje.stroke();
    paisaje.fill();

    paisaje.beginPath();
    paisaje.fillStyle="#3c3f09"
    paisaje.beginPath()
    paisaje.moveTo(300,219)
    paisaje.lineTo(360,219)
    paisaje.lineTo(364,212);
    paisaje.lineTo(298,214);
    paisaje.lineTo(300,219);
    paisaje.fill();

    paisaje.fillStyle="#867048";
    paisaje.beginPath();
    paisaje.moveTo(314,205);
    paisaje.lineTo(330,101);
    paisaje.lineTo(334,103);
    paisaje.lineTo(322,204);
    paisaje.fill();

    paisaje.fillStyle="rgba(210,151,50,0.6)";
    paisaje.beginPath();
    paisaje.moveTo(333,105);
    paisaje.lineTo(378,194);
    paisaje.lineTo(322,188);
    paisaje.lineTo(333,105);
    paisaje.closePath;
    paisaje.fill();

    paisaje.fillStyle="#2E7B10";
    paisaje.beginPath();
    paisaje.arc(100,250,45,-0.3,Math.PI*1.1, true);
    paisaje.arc(135,246,33,-0.3,Math.PI*1.1, true);
    paisaje.closePath;
    paisaje.fill();

    /* paisaje.fillStyle="orange";
    paisaje.beginPath();
    paisaje.arc(290,130,100,0,Math.PI*1,true);
    paisaje.closePath;
    paisaje.fill(); */

    paisaje.fillStyle="#Ffffff";
    paisaje.beginPath();
    paisaje.arc(50,130,10,0,Math.PI*1.1,true);
    paisaje.lineWidth=3
    paisaje.strokeStyle="black"
    paisaje.stroke()
    paisaje.fillStyle="#Ffffff";
    paisaje.beginPath();
    paisaje.arc(70,130,10,0,Math.PI*1.1,true);
    paisaje.lineWidth=3
    paisaje.strokeStyle="black"
    paisaje.stroke()

    paisaje.fillStyle="#Ffffff";
    paisaje.beginPath();
    paisaje.arc(90,150,10,0,Math.PI*1.1,true);
    paisaje.lineWidth=3
    paisaje.strokeStyle="black"
    paisaje.stroke()
    paisaje.fillStyle="#Ffffff";
    paisaje.beginPath();
    paisaje.arc(110,150,10,0,Math.PI*1.1,true);
    paisaje.lineWidth=3
    paisaje.strokeStyle="black"
    paisaje.stroke()