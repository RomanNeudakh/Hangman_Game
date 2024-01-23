export class Canvas {
    constructor(container) {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        container.appendChild(this.canvas)
        this.fitToContainer(this.canvas)
        // addEventListener('resize', () => this.fitToContainer(this.canvas))
        this.img = new Image();
        this.img.src = './assets/1.svg'
        this.img_2 = new Image();
        this.img_2.src = './assets/2.svg'
        this.img_3 = new Image();
        this.img_3.src = './assets/3.svg'
        this.img_4 = new Image();
        this.img_4.src = './assets/4.svg'
        this.img_5 = new Image();
        this.img_5.src = './assets/5.svg'
        this.img_6 = new Image();
        this.img_6.src = './assets/6.svg'
    }
    fitToContainer(cnv) {
        cnv.width = cnv.offsetWidth;
        cnv.height = cnv.offsetHeight;
    }
    init() {
        this.context.beginPath()
        this.context.fillStyle = 'black'
        this.context.rect(10, 390, 80, 10)
        this.context.rect(45, 30, 10, 390)
        this.context.rect(45, 30, 180, 10)
        this.context.rect(225, 30, 10, 40)
        this.context.fill()
        this.context.closePath()
    }
    drowHead() {
        this.context.beginPath()
        this.context.drawImage(this.img, 200, 70, 60, 60);
        this.context.stroke();
        this.context.closePath()
    }
    drowBody() {
        this.context.beginPath()
        this.context.fillStyle = 'white'
        this.context.rect(200, 70, 60, 60)
        this.context.fill();
        this.context.drawImage(this.img_2, 200, 70, 60, 60);
        this.context.fillStyle = 'black'
        this.context.fillRect(228, 130, 5, 130)
        this.context.closePath()
    }
    drowLeftHand() {
        this.context.beginPath()
        this.context.fillStyle = 'white'
        this.context.rect(200, 70, 60, 60)
        this.context.fill();
        this.context.drawImage(this.img_3, 200, 70, 60, 60);
        this.context.fillStyle = 'black'
        this.context.translate(228, 145);
        this.context.rotate(45*Math.PI/180)
        this.context.translate(-228, -145);
        this.context.fillRect(228, 145, 5, 100)
        this.context.closePath()
        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }
    drowRightHand() {
        this.context.beginPath()
        this.context.fillStyle = 'white'
        this.context.rect(200, 70, 60, 60)
        this.context.fill();
        this.context.drawImage(this.img_4, 200, 70, 60, 60);
        this.context.fillStyle = 'black'
        this.context.translate(228, 145);
        this.context.rotate(310*Math.PI/180)
        this.context.translate(-228, -145);
        this.context.fillRect(228, 145, 5, 100)
        this.context.closePath()
        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }
    drowLeftFoot() {
        this.context.beginPath()
        this.context.fillStyle = 'white'
        this.context.rect(200, 70, 60, 60)
        this.context.fill();
        this.context.drawImage(this.img_5, 200, 70, 60, 60);
        this.context.fillStyle = 'black'
        this.context.translate(228, 260);
        this.context.rotate(45*Math.PI/180)
        this.context.translate(-228, -260);
        this.context.fillRect(228, 260, 5, 100)
        this.context.closePath()
        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }
    drowRightFoot() {
        this.context.beginPath()
        this.context.fillStyle = 'white'
        this.context.rect(200, 70, 60, 60)
        this.context.fill();
        this.context.drawImage(this.img_6, 200, 70, 60, 60);
        this.context.fillStyle = 'black'
        this.context.translate(228, 260);
        this.context.rotate(310*Math.PI/180)
        this.context.translate(-228, -260);
        this.context.fillRect(228, 260, 5, 100)
        this.context.closePath()
    }
}