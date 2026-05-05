class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.playerState = null;
  }

  start() {
    if (!window.getPlayer || !window.updateInput) {
      console.error('input.js не подключён или функции не доступны');
      return;
    }

    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');

    this.playerState = window.getPlayer();

    this.update();
  }

  update() {
    const gameLoop = () => {
      this.playerState = window.updateInput();

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawPlayer();

      requestAnimationFrame(gameLoop);
    };

    gameLoop();
  }

  drawPlayer() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(
      this.playerState.x,
      this.playerState.y,
      this.playerState.width,
      this.playerState.height
    );
  }
}

window.game = new Game();
window.game.start();
