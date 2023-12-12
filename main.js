var x = 0;
var y = 100;
var dx = 2;
var dy = 2;
var draw, rect, circ, line;
var radius = 1;
var k_hooka = 5;
var x_podvesa = 50;
var y_podvesa = 1;
var mass = 1;
var dlina = 20;
var szhat = 10;
//constructor(mass = 1, radius = 1, len = 3, k = 1, x = 0, y = 0)
var pend = new pendulum(mass, radius, dlina, k_hooka, x_podvesa, y_podvesa);
var pend2 = new pendulum(mass, radius, dlina, k_hooka, x_podvesa + 5, y_podvesa);
pend.ball.v = new vec2d(10, 0);

var p_circ, p_line;
var p_circ2, p_line2;
SVG.on(document, 'DOMContentLoaded', function() {
    draw = SVG().addTo('#draw_field').size(1000, 1000);
    let crds_ = pend.getBallCoords(szhat);
    let thrd_ = pend.getThreadCoords(szhat);
    let tens_ = pend.getTensionWidth(szhat);

    p_line = draw.line(thrd_).stroke({ color: '#648800', width: (tens_), linecap: 'round' });
    p_circ = draw.circle(crds_[2]).move(crds_[0], crds_[1]).fill('#886400');

    let crds2_ = pend2.getBallCoords(szhat);
    let thrd2_ = pend2.getThreadCoords(szhat);
    let tens2_ = pend2.getTensionWidth(szhat);
    p_line2 = draw.line(thrd2_).stroke({ color: '#008864', width: tens2_, linecap: 'round' });
    p_circ2 = draw.circle(crds2_[2]).move(crds2_[0], crds2_[1]).fill('#006488');
    setInterval(function() {
        collide(pend.ball, pend2.ball, (20 / 1000));
        thrd_ = pend.getThreadCoords(szhat);
        tens_ = pend.getTensionWidth(szhat);
        p_line.plot(thrd_).stroke({ color: '#648800', width: tens_, linecap: 'round' });;
        crds_ = pend.getBallCoords(szhat);
        p_circ.move(crds_[0], crds_[1]);
        pend.step((20 / 1000));

        tens2_ = pend2.getTensionWidth(szhat);

        thrd2_ = pend2.getThreadCoords(szhat);
        p_line2.plot(thrd2_).stroke({ color: '#008864', width: tens2_, linecap: 'round' });
        crds2_ = pend2.getBallCoords(szhat);
        p_circ2.move(crds2_[0], crds2_[1]);
        pend2.step((20 / 1000));
    }, 20);
});