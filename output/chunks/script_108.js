import "./Bzak7iHL.js";
import {
  p as R,
  d as i,
  r as l,
  t as m,
  a as n,
  b as h,
  s as f,
  c as g
} from "./BKnGt6Ki.js";
import {
  s as _
} from "./DbGfTWgr.js";
import {
  i as w
} from "./C31cMBCe.js";
import {
  a as E
} from "./Czze0tKx.js";
import {
  p as y
} from "./Bu-IUIdW.js";
import {
  R as O,
  a as z
} from "./TTfhDrzz.js";
import {
  L as v
} from "./DOyCRYNQ.js";
var c = g('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  A = g("<span><!></span>");

function T(b, e) {
  R(e, !0);
  let p = y(e, "big", 3, !1);
  var s = A();
  let d;
  var u = i(s);
  {
    var x = r => {
        var a = c(),
          t = i(a);
        v(t, {
          size: "none"
        });
        var o = f(t, 1, !0);
        l(a), m(() => _(o, O[e.role])), n(r, a)
      },
      L = r => {
        var a = c(),
          t = i(a);
        v(t, {
          size: "small"
        });
        var o = f(t, 1, !0);
        l(a), m(() => _(o, z[e.role])), n(r, a)
      };
    w(u, r => {
      p() ? r(x) : r(L, -1)
    })
  }
  l(s), m(() => d = E(s, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center pt-0.5 leading-none font-semibold whitespace-nowrap shadow", null, d, {
    "badge-info": e.role === "admin",
    "badge-secondary": e.role === "sac" || e.role === "game_master" || e.role === "game_master_leader" || e.role === "dev",
    "badge-warning": e.role === "discord_mod" || e.role === "discord_leader"
  })), n(b, s), h()
}
export {
  T as R
};