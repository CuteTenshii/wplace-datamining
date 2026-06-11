import "./Bzak7iHL.js";
import "./CE_13Z4f.js";
import {
  p as k,
  d as n,
  r as m,
  t as d,
  a as p,
  b as z,
  s as _,
  at as o,
  L as c,
  c as R
} from "./CV6xI6o5.js";
import {
  s as v
} from "./hBdZmm-r.js";
import {
  i as A
} from "./iywslKou.js";
import {
  a as M
} from "./g3dAVNmx.js";
import {
  i as N
} from "./BMPMTaQp.js";
import {
  p as g
} from "./BQ880tYw.js";
import {
  R as b,
  a as u
} from "./DX1r3K5G.js";
import {
  L as x
} from "./DxYjsNvA.js";
var L = R('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  j = R("<span><!></span>");

function I(h, i) {
  k(i, !1);
  let a = g(i, "role", 8),
    w = g(i, "big", 8, !1);
  N();
  var s = j();
  let f;
  var y = n(s);
  {
    var E = r => {
        var e = L(),
          t = n(e);
        x(t, {
          size: "none"
        });
        var l = _(t, 1, !0);
        m(e), d(() => v(l, (o(b), o(a()), c(() => b[a()])))), p(r, e)
      },
      O = r => {
        var e = L(),
          t = n(e);
        x(t, {
          size: "small"
        });
        var l = _(t, 1, !0);
        m(e), d(() => v(l, (o(u), o(a()), c(() => u[a()])))), p(r, e)
      };
    A(y, r => {
      w() ? r(E) : r(O, -1)
    })
  }
  m(s), d(() => f = M(s, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, f, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader" || a() === "discord_leader"
  })), p(h, s), z()
}
export {
  I as R
};