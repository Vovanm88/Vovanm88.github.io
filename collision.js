function collide(ball1, ball2, dT) {
    if (ball1.test_collision_time(ball2, dT)) {
        let m1 = ball1.m;
        let m2 = ball2.m;
        let v1 = ball1.v;
        let v2 = ball2.v;
        let nv1 = new vec2d(0, 0);
        let nv2 = new vec2d(0, 0);
        nv1 = v2.mul(2 * m2).sum(v1.mul(m1 - m2));
        nv2 = v1.mul(2 * m1).sum(v2.mul(m2 - m1));
        let mlt = 1 / (m1 + m2);
        nv1 = nv1.mul(mlt);
        nv2 = nv2.mul(mlt);
        ball1.v = nv1;
        ball2.v = nv2;
        return true;
    }
    return false;
}