class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.playerState = null;
  }

  start() {
    // создаём canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');

    // получаем начальное состояние игрока
    this.playerState = getPlayer();

    this.update();
  }

  update() {
    const gameLoop = () => {
      // === INPUT ===
      this.playerState = updateInput();

      // === LOGIC ===
      // тут можно добавить физику, коллизии и т.д.

      // === RENDER ===
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
game.start();
