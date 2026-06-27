import {
  T as m,
  P as w,
  u as d
} from "./DRnS8Zxq.js";
import {
  f as P
} from "./DstqyuRl.js";
const U = "wplace-auth";

function A(t) {
  const e = new URL(`/auth/${t}`, w);
  return e.search = new URLSearchParams({
    r: "/login/popup-callback"
  }).toString(), e.href
}

function C(t) {
  var o;
  const e = window.open(A(t), "wplace-oauth", "width=480,height=720");
  return e ? ((o = e.focus) == null || o.call(e), new Promise(f => {
    let a = !1,
      n;
    const i = new AbortController,
      s = r => {
        if (!a) {
          a = !0, i.abort(), n == null || n(), clearTimeout(g);
          try {
            e.close()
          } catch {}
          f(r)
        }
      },
      c = async () => {
        if (!a) {
          if (await d.refresh()) {
            s(!0);
            return
          }
          E(e) && s(!1)
        }
      }, h = r => {
        var l, u;
        r.origin === location.origin && r.source === e && ((l = r.data) == null ? void 0 : l.type) === U && (((u = r.data) == null ? void 0 : u.ok) === !1 ? s(!1) : c())
      };
    window.addEventListener("message", h, {
      signal: i.signal
    }), n = P(c, {
      interval: 1500
    });
    const g = setTimeout(() => s(!1), 5 * m.minute)
  })) : Promise.resolve(!1)
}

function E(t) {
  try {
    return (t == null ? void 0 : t.closed) ?? !0
  } catch {
    return !1
  }
}
export {
  U as A, C as l
};