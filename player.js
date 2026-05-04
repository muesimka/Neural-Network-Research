class Player{
  constructor(x, y, width, heigth){
    this.x: x;
    this.y: y;
    this.width = window.DATA.PLAYER.width;
    this.heigth = window.DATA.PLAYER.heigth
  }
}
window.Player = new Player();
