import "./Bzak7iHL.js";
import "./CMfXY_iA.js";
import {
  p as O,
  d as n,
  r as m,
  t as d,
  a as p,
  b as k,
  s as v,
  w as o,
  x as c,
  c as f
} from "./B66BVdRM.js";
import {
  s as g
} from "./D1f3t9ko.js";
import {
  i as z
} from "./BLRpBUXo.js";
import {
  a as A
} from "./D6WlI9xC.js";
import {
  i as M
} from "./Bfby74As.js";
import {
  p as b
} from "./DFHlj6pU.js";
import {
  R as x,
  a as u
} from "./BXcryQ_k.js";
import {
  L
} from "./BvaPD6eg.js";
var N = f('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  j = f('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  B = f("<span><!></span>");

function J(R, i) {
  O(i, !1);
  let a = b(i, "role", 8),
    h = b(i, "big", 8, !1);
  M();
  var t = B();
  let _;
  var w = n(t);
  {
    var y = r => {
        var e = N(),
          s = n(e);
        L(s, {
          size: "none"
        });
        var l = v(s, 1, !0);
        m(e), d(() => g(l, (o(x), o(a()), c(() => x[a()])))), p(r, e)
      },
      E = r => {
        var e = j(),
          s = n(e);
        L(s, {
          size: "small"
        });
        var l = v(s, 1, !0);
        m(e), d(() => g(l, (o(u), o(a()), c(() => u[a()])))), p(r, e)
      };
    z(w, r => {
      h() ? r(y) : r(E, !1)
    })
  }
  m(t), d(() => _ = A(t, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, _, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader" || a() === "discord_leader"
  })), p(R, t), k()
}
export {
  J as R
};