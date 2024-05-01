import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.80/dist/phaser.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }
        }
    },
    scene: [],
    backgroundColor: '#21213B'
};

export default new Phaser.Game(config);