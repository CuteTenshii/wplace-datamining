import "./Bzak7iHL.js";
import "./B7vrJrEX.js";
import {
  p as O,
  d as n,
  r as m,
  t as d,
  a as p,
  b as k,
  s as v,
  at as o,
  L as c,
  c as f
} from "./Dbe4PVAU.js";
import {
  s as g
} from "./C_mo-lyU.js";
import {
  i as z
} from "./Icl9dwnj.js";
import {
  a as A
} from "./B7_gUtXa.js";
import {
  i as M
} from "./BVnIq1Qc.js";
import {
  p as b
} from "./K9AHFDoV.js";
import {
  R as x,
  a as u
} from "./DX1r3K5G.js";
import {
  L
} from "./Cskb-8mx.js";
var N = f('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  j = f('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  B = f("<span><!></span>");

function J(R, i) {
  O(i, !1);
  let a = b(i, "role", 8),
    h = b(i, "big", 8, !1);
  M();
  var s = B();
  let _;
  var y = n(s);
  {
    var w = r => {
        var e = N(),
          t = n(e);
        L(t, {
          size: "none"
        });
        var l = v(t, 1, !0);
        m(e), d(() => g(l, (o(x), o(a()), c(() => x[a()])))), p(r, e)
      },
      E = r => {
        var e = j(),
          t = n(e);
        L(t, {
          size: "small"
        });
        var l = v(t, 1, !0);
        m(e), d(() => g(l, (o(u), o(a()), c(() => u[a()])))), p(r, e)
      };
    z(y, r => {
      h() ? r(w) : r(E, !1)
    })
  }
  m(s), d(() => _ = A(s, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, _, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader" || a() === "discord_leader"
  })), p(R, s), k()
}
export {
  J as R
};