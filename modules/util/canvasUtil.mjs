import { Vector2D } from "./vector2D.mjs";

export class CanvasUtil {

    /**
     * 
     * @param {*} ctx 
     * @param {Vector2D} start 
     * @param {Vector2D} end 
     * @param {*} strokeWidth 
     * @param {*} strokeColour 
     */
    static drawLine(ctx, start, end, strokeWidth, strokeColour) {
        ctx.beginPath();

        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);

        // appearance
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColour;
        ctx.stroke();

        ctx.closePath();
    }

    /**
     * 
     * @param {*} ctx 
     * @param {Vector2D} center 
     * @param {*} radius 
     * @param {*} strokeWidth 
     * @param {*} strokeColour 
     * @param {*} fillColour 
     */
    static drawCircle(ctx, center, radius, strokeWidth, strokeColour, fillColour) {
        ctx.beginPath();

        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);

        // appearance
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColour;
        ctx.fillStyle = fillColour;
        if (strokeWidth != null) {
            ctx.stroke();
        }
        if (fillColour != null) {
            ctx.fill();
        }

        ctx.closePath();
    }

    /**
     * 
     * @param {*} ctx 
     * @param {Vector2D} position top left position 
     * @param {Vector2D} dimensions 
     * @param {*} strokeWidth 
     * @param {*} strokeColour 
     * @param {*} fillColour 
     */
    static drawRectangle(ctx, position, dimensions, strokeWidth, strokeColour, fillColour) {
        ctx.beginPath();

        ctx.moveTo(position.x               , position.y);
        ctx.lineTo(position.x + dimensions.x, position.y);
        ctx.lineTo(position.x + dimensions.x, position.y + dimensions.y);
        ctx.lineTo(position.x               , position.y + dimensions.y);
        ctx.lineTo(position.x               , position.y);

        // appearance
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColour;
        ctx.fillStyle = fillColour;
        if (strokeWidth != null) {
            ctx.stroke();
        }
        if (fillColour != null) {
            ctx.fill();
        }

        ctx.closePath();
    }
}