//import "vector2d";
//import "physical_object";
//import "physical_thread";
//import "physical_ball";
//import "fixed_point";
class pendulum {
    constructor(mass = 1, radius = 1, len = 3, k = 1, x = 0, y = 0) {
        this.ball = new physical_ball(mass, radius, x, y + len);
        this.point = new fixed_point(x, y);
        this.string = new physical_thread(len, k, this.point, this.ball);
    }
    step(dT) {
        let frc = this.string.calc_force(dT);
        this.ball.recalc_force(frc[1]);
        this.ball.make_step(dT);
    }
    getBallCoords() {
        return [this.ball.pos.x - this.ball.r, this.ball.pos.y - this.ball.r, this.ball.r * 2];
    }
    getThreadCoords() {
        return [this.point.pos.x, this.point.pos.y, this.ball.pos.x, this.ball.pos.y];
    }
}