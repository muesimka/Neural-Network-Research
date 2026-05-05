// state.js

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

// обработка клавиш
window.addEventListener('keydown', (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = true;
  }
});

window.addEventListener('keyup', (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = false;
  }
});

// начальное состояние игрока
let player = {
  x: 100,
  y: 100,
  width: 50,
  height: 50,
  speed: 5,
};

// получить текущее состояние
export function getPlayer() {
  return { ...player };
}

// обновление ввода (движение)
export function updateInput() {
  if (keys.ArrowUp) player.y -= player.speed;
  if (keys.ArrowDown) player.y += player.speed;
  if (keys.ArrowLeft) player.x -= player.speed;
  if (keys.ArrowRight) player.x += player.speed;

  return { ...player };
}
