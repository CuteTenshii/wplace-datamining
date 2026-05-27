import "./Bzak7iHL.js";
import "./CI2tMiMM.js";
import {
  p as O,
  d as n,
  r as m,
  t as d,
  a as p,
  b as k,
  s as v,
  aq as o,
  I as c,
  c as f
} from "./Cky4CUzE.js";
import {
  s as g
} from "./CNvJ8k3a.js";
import {
  i as z
} from "./7HE79MnC.js";
import {
  a as A
} from "./BYB6eTwl.js";
import {
  i as M
} from "./C1ReaBsL.js";
import {
  p as b
} from "./D5qy60-S.js";
import {
  R as x,
  a as u
} from "./DX1r3K5G.js";
import {
  L
} from "./DST0pM6Z.js";
var N = f('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  j = f('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  q = f("<span><!></span>");

function J(R, i) {
  O(i, !1);
  let a = b(i, "role", 8),
    h = b(i, "big", 8, !1);
  M();
  var t = q();
  let _;
  var y = n(t);
  {
    var w = r => {
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
    z(y, r => {
      h() ? r(w) : r(E, !1)
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