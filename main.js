var x = 0;
var y = 100;
var dx = 2;
var dy = 2;
var draw, rect, circ, line;
var radius = 1;
var k_hooka = 1;
var x_podvesa = 50;
var y_podvesa = 1;
var mass = 1;
var dlina = 20;
var szhat = 10;
//constructor(mass = 1, radius = 1, len = 3, k = 1, x = 0, y = 0)
var pend = new pendulum(mass, radius, dlina, k_hooka, x_podvesa, y_podvesa);
pend.ball.v = new vec2d(10, 0);
var p_circ, p_line;
SVG.on(document, 'DOMContentLoaded', function() {
    draw = SVG().addTo('#draw_field').size(1000, 1000);
    let crds_ = pend.getBallCoords();
    let thrd_ = pend.getThreadCoords();
    p_circ = draw.circle(crds_[2] * szhat).move(crds_[0] * szhat, crds_[1] * szhat).fill('#886400');
    p_line = draw.line(thrd_).stroke({ color: '#648800', width: 1, linecap: 'round' });
    setInterval(function() {
        thrd_ = pend.getThreadCoords();
        p_line.plot(thrd_[0] * szhat, thrd_[1] * szhat, thrd_[2] * szhat, thrd_[3] * szhat);
        crds_ = pend.getBallCoords();
        p_circ.move(crds_[0] * szhat, crds_[1] * szhat);
        pend.step((20 / 1000));
    }, 20);
});