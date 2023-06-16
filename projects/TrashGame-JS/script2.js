document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    const blockSize = 20;
    const column = canvas.width / blockSize; // kolom = vertikal
    const row = column; //row = horizontal\

    let xks = 0;
    let yks = 0;
    let xs = 0;
    let ys = 0;
    
    let ketangkap=false;
    
    let cth = 0;
    
    let score = 0;    
    
    let heart = 3;
    
    let level = "Easy";
    
    let mx = 0;
    let my = 0;

    let border = {

        color : "Black",
        size : blockSize,
        width : canvas.width,
        height : canvas.height,

        draw : function () {
            // console.log(canvas.width, canvas.height  ,this.width, this.height, this.size)
            ctx.fillStyle = this.color;
            const top = ctx.fillRect(0, 0, this.width, this.size);
            const right = ctx.fillRect(this.width-this.size, 0, this.size, this.height);
            const bottom = ctx.fillRect(0, this.height-this.size, this.width, this.size);
            const left = ctx.fillRect(0, 0, this.size, this.height);
        }
    }
    let gameOverText = {

        font : "60px Courier",
        color : "Black",
        align : "center",
        baseline : "middle",

        draw : function (){
            clearInterval(mainloop);
            let x = canvas.width/2;
            let y = canvas.height/2;
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.textAlign = this.align;
            ctx.textBaseline = this.baseline;
            ctx.fillText(`Game Over`, x, y);
        }
    }

    let scoreText = {

        font : "20px Courier",
        color : "LightBlue",
        align : "left",
        baseline : "top",

        draw : function () {
            let x = 20;
            let y = 0;
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.textAlign = this.align;
            ctx.textBaseline = this.baseline;
            ctx.fillText(`Score : ${score}`, x, y);
        }

    }

    let heartText = {

        font : "20px Courier",
        color : "LightBlue",
        align : "left",
        baseline : "top",

        draw : function () {
            let x = 180;
            let y = 0;
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.textAlign = this.align;
            ctx.textBaseline = this.baseline;
            ctx.fillText(`Heart : ${heart}`, x, y);
        }

    }

    let levelText = {

        font : "20px Courier",
        color : "LightBlue",
        align : "left",
        baseline : "top",

        draw : function () {
            let x = 333;
            let y = 0;
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            ctx.textAlign = this.align;
            ctx.textBaseline = this.baseline;
            ctx.fillText(`Level : ${level}`, x, y);
        }

    }

    function Gambar(gambar,row,column){
          base_image = new Image();
          base_image.src = gambar;
          ctx.drawImage(base_image, row, column);
    }

    function make_background(){
        Gambar("assets/Background.png",0,0);
    }

    function scoring(){
        if(xks <= xs+60 && xks >= xs-110){
            if(ys <= yks+100 && ys>=yks-50){
                if(cth !== 0){    
                    score++;
                    ketangkap=true;
                }else{
                    gameOverText.draw();
                }           
            }
        } else{
            if(heart === 0){
                gameOverText.draw();
            }
        }
    }


    class Sampah{

        random (angka){
            cth = Math.floor(Math.random() * angka);
        }

        randomRS (){
            xs = Math.floor(Math.random() * 375)+25;
        }

        drawSampah (){
            if (cth === 1 &&!ketangkap) {
                 Gambar("assets/Sampah1.png",xs,ys);
            }else if (cth === 2 &&!ketangkap) {
                Gambar("assets/Sampah2.png",xs,ys);
            }else if (cth === 3 &&!ketangkap) {
                Gambar("assets/Sampah3.png",xs,ys);
            }else if (cth === 4 &&!ketangkap){
                Gambar("assets/Sampah4.png",xs,ys);
            }else if (cth === 6 &&!ketangkap){
                Gambar("assets/Sampah6.png",xs,ys);
            }else if (cth === 7 &&!ketangkap){
                Gambar ("assets/Sampah7.png",xs,ys);
            }else if (cth === 8 &&!ketangkap){
                Gambar ("assets/Sampah8.png",xs,ys);
            }else if (cth === 5 &&!ketangkap){
                Gambar("assets/Sampah5.png",xs,ys);
            }else if (cth === 0 &&!ketangkap){
                 Gambar("assets/Poop.png",xs,ys);
            }
        }

        jatuhnyaSampah(){
            if(score<=15){
                ys+=8;
            }else if(score>15 && score<=30){
                ys+=12;
                level="Medium";
            }else if(score>30 && score<=50){
                ys+=18;
                level="Hard";
            }else{
                ys+=20;
                level="Extreme";
            }
        }

        detect(){
            if(ys>=canvas.height-75){
                ketangkap=true;
                if(cth !== 0){
                    heart--;
                }
            }
            if(ketangkap === true){
                ys=0;
                ketangkap=false;
                cth=0;
                sampah.random(9);
                sampah.randomRS();
            }
        }
    }

    class KotakSampah{

        drawKotakSampah(){
            Gambar("assets/Trashcan.png",xks,yks);
        }

        gerakanKotakSampah(){
            xks=mx-60;
            yks=my-60;
        }

        detectcursor(event){
            if (event) {
                mx = event.offsetX;
                my = event.offsetY;
            }
        }
    }

    let sampah = new Sampah();
    let kotaksampah = new KotakSampah();

    sampah.random(9);
    sampah.randomRS();

    let mainloop = setInterval( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        make_background();
        kotaksampah.detectcursor();
        sampah.drawSampah();
        kotaksampah.drawKotakSampah();
        sampah.jatuhnyaSampah();
        kotaksampah.gerakanKotakSampah();
        scoring();
        sampah.detect();
        border.draw();
        scoreText.draw();
        heartText.draw();
        levelText.draw();

    }, 25)

    document.querySelector("#canvas").addEventListener('mousemove', function (event) {
        kotaksampah.detectcursor(event);
    })

})