import {
  Et as e,
  G as t,
  Jt as n,
  O as r,
  Y as i,
  Yt as a,
  Z as o,
  a as s,
  nn as c,
  q as l,
  vt as u,
  wt as d
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as f
} from "./mhrqN-wc.js";
import {
  n as p,
  t as m
} from "./CFxT1r6Q.js";
var h = o(`<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>`),
  g = o(`<span><!></span>`);

function _(o, _) {
  a(_, !0);
  let v = s(_, `big`, 3, !1);
  var y = g();
  let b;
  var x = d(y),
    S = t => {
      var n = h(),
        r = d(n);
      f(r, {
        size: `none`
      });
      var a = e(r, 1, !0);
      c(n), u(() => l(a, m[_.role])), i(t, n)
    },
    C = t => {
      var n = h(),
        r = d(n);
      f(r, {
        size: `small`
      });
      var a = e(r, 1, !0);
      c(n), u(() => l(a, p[_.role])), i(t, n)
    };
  t(x, e => {
    v() ? e(S) : e(C, -1)
  }), c(y), u(() => b = r(y, 1, `badge badge-sm ml-0.5 inline-flex items-center justify-center pt-0.5 leading-none font-semibold whitespace-nowrap shadow`, null, b, {
    "badge-info": _.role === `admin`,
    "badge-secondary": _.role === `sac` || _.role === `game_master` || _.role === `game_master_leader` || _.role === `dev`,
    "badge-warning": _.role === `discord_mod` || _.role === `discord_leader`
  })), i(o, y), n()
}
export {
  _ as t
};