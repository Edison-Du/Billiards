export class MathUtil {
    // solves for the roots of ax^2 + bx + c = 0
    // post: returns {x1, x2}, it is given that x1 <= x2
    // if no solutions, then {Nan, Nan}
    static solveQuadratic(a, b, c) {
        let discr = b*b - 4*a*c;
        // conditions
        if (a == 0 || discr < 0) {
            return {x1: NaN, x2: Nan};
        }
        discr = Math.sqrt(discr);
        return {x1: (-b-discr)/(2*a), x2: (-b+discr)/(2*a)};
    }
    /**
     * @param {Vector2D} a 
     * @param {Vector2D} b 
     * return distance between a and b
     */
    static dist(a, b) {
        return a.dist(b);
    }
}

// module.exports = {
//     Vect2D, 
//     Vector2D
// }