// player.js — отвечает за состояние и логику персонажа
export class Player {
    constructor(x = 400, y = 300) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.width = 40;
        this.height = 40;
        this.color = 'red';
    }

    // Основное движение (вызывается из input)
    move(dx, dy) {
        this.x += dx * this.speed;
        this.y += dy * this.speed;
    }

    // Ограничение по границам экрана
    clamp(maxWidth, maxHeight) {
        this.x = Math.max(0, Math.min(this.x, maxWidth - this.width));
        this.y = Math.max(0, Math.min(this.y, maxHeight - this.height));
    }

    // Обновление (можно добавить анимацию, здоровье и т.д. позже)
    update() {
        // Пока пусто, можно расширять
    }

    // Получить данные для отрисовки
    getRenderData() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: this.color
        };
    }
}

// Создаём одного игрока (singleton для простоты)
export const player = new Player();
