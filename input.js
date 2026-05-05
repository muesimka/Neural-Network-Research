const keys = {};
let player = {
    x: 400,
    y: 300,
    speed: 5,
    width: 40,
    height: 40
};

// Обработчики клавиш
window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Основная функция обновления (вызывается каждый кадр)
export function updateInput() {
    let moved = false;

    if (keys['w'] || keys['arrowup']) {
        player.y -= player.speed;
        moved = true;
    }
    if (keys['s'] || keys['arrowdown']) {
        player.y += player.speed;
        moved = true;
    }
    if (keys['a'] || keys['arrowleft']) {
        player.x -= player.speed;
        moved = true;
    }
    if (keys['d'] || keys['arrowright']) {
        player.x += player.speed;
        moved = true;
    }

    // Ограничение по границам экрана (можно убрать или изменить)
    player.x = Math.max(0, Math.min(player.x, 800 - player.width));
    player.y = Math.max(0, Math.min(player.y, 600 - player.height));

    return player; // возвращаем актуальное состояние персонажа
}

// Получить текущее состояние игрока (для Core)
export function getPlayer() {
    return player;
}

// Если нужно сбросить позицию
export function resetPlayer(x = 400, y = 300) {
    player.x = x;
    player.y = y;
}
