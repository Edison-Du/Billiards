import { Vector2D } from "../util/vector2D.mjs";
import { Ball } from "../game_objects/ball.mjs";
import { Consts } from "../consts.mjs";
import { Player } from "./player.mjs";
import { ClassicGame } from "./classicGame.mjs";

export class TwoPlayerGame extends ClassicGame {

    static numBallsEach = 7;

    constructor(seed=0) {
        super(seed);
    }

    initializeBalls() {
        /** Break Orientation of 15 balls **/
        let breakOffset = new Vector2D(700, 250);
        for (let i = 0; i < 5; i++) {
            for (let j = i%2; j <= i; j += 2) {
                let p1 = new Vector2D(i*Math.sqrt(3), j).scale(Ball.RADIUS).add(breakOffset);
                let p2 = new Vector2D(i*Math.sqrt(3), -j).scale(Ball.RADIUS).add(breakOffset);

                if (j != 0) {
                    this.balls.push(new Ball(p2.x, p2.y, Consts.playerColours[0]));
                    this.balls.push(new Ball(p1.x, p1.y, Consts.playerColours[1]));
                }
                else {
                    this.balls.push(new Ball(p2.x, p2.y, Consts.playerColours[(i ? 0 : 1)]));
                }
            }
        }
        // set middle ball to 8 ball, and bring to index 1
        this.balls[4].colour = Consts.eightBallColour;
        [this.balls[1], this.balls[4]] = [this.balls[4], this.balls[1]];
    }

    initializePlayers() {
        for (let i = 0; i < 2; i++) {
            this.players.push(new Player());
            this.runningColourCount[Consts.playerColours[i]] = TwoPlayerGame.numBallsEach;
        }
    }
}