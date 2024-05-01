import {Physics} from "../../_snowpack/pkg/phaser.js";
export class Player extends Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.player_speed = 500;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.keyW = scene.input.keyboard.addKey("W");
    this.keyA = scene.input.keyboard.addKey("A");
    this.keyS = scene.input.keyboard.addKey("S");
    this.keyD = scene.input.keyboard.addKey("D");
    this.keySpace = scene.input.keyboard.addKey(32);
    this.initAnimations();
  }
  update() {
    this.setVelocity(0);
    if (this.keyW.isDown) {
      this.setVelocityY(-this.player_speed);
    }
    if (this.keyA.isDown) {
      this.setVelocityX(-this.player_speed);
    }
    if (this.keyS.isDown) {
      this.setVelocityY(this.player_speed);
    }
    if (this.keyD.isDown) {
      this.setVelocityX(this.player_speed);
    }
    if (!(this.keyA.isDown || this.keyD.isDown || this.keyW.isDown || this.keyS.isDown)) {
      this.state = "idle";
    }
    if (this.keyA.isDown || this.keyD.isDown || this.keyW.isDown || this.keyS.isDown) {
      this.state = "move";
    }
    if (this.keyA?.isDown || this.keyD?.isDown) {
      this.checkFlip();
    }
    if (this.state === "move") {
      this.play("run", true);
    }
    if (this.state === "idle") {
      this.play("idle", true);
    }
  }
  checkFlip() {
    if (this.body.velocity.x < 0) {
      this.setFlipX(true);
      this.setCircle(14, 21, 35);
    } else {
      this.setFlipX(false);
      this.setCircle(14, 28, 35);
    }
  }
  initAnimations() {
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNames("nightborne", {
        prefix: "run_",
        start: 1,
        end: 6
      }),
      frameRate: 6
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("nightborne", {
        prefix: "idle_",
        start: 1,
        end: 9
      }),
      frameRate: 9
    });
    this.anims.create({
      key: "hurt",
      frames: this.anims.generateFrameNames("nightborne", {
        prefix: "hurt_",
        start: 1,
        end: 5
      }),
      frameRate: 15
    });
    this.anims.create({
      key: "die",
      frames: this.anims.generateFrameNames("nightborne", {
        prefix: "die_",
        start: 1,
        end: 23
      }),
      frameRate: 23
    });
    this.anims.create({
      key: "atk",
      frames: this.anims.generateFrameNames("nightborne", {
        prefix: "atk_",
        start: 1,
        end: 12
      }),
      frameRate: 36
    });
  }
}
