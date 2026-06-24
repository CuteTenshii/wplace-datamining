import {
  T as w,
  P,
  u as T
} from "./D2EF9Wn0.js";
import {
  f as U
} from "./DstqyuRl.js";
const A = "wplace-auth";

function E(t) {
  const e = new URL(`/auth/${t}`, P);
  return e.search = new URLSearchParams({
    r: "/login/popup-callback"
  }).toString(), e.href
}

function S(t) {
  var i;
  const e = window.open(E(t), "wplace-oauth", "width=480,height=720");
  return e ? ((i = e.focus) == null || i.call(e), new Promise(d => {
    let o = !1,
      n;
    const c = new AbortController,
      a = r => {
        if (!o) {
          o = !0, c.abort(), n == null || n(), clearTimeout(s);
          try {
            e.close()
          } catch {}
          d(r)
        }
      },
      l = async () => {
        o || m(e) && a(await T.refresh())
      }, g = r => {
        var f, h;
        r.origin === location.origin && r.source === e && ((f = r.data) == null ? void 0 : f.type) === A && (((h = r.data) == null ? void 0 : h.ok) === !1 ? a(!1) : l())
      };
    window.addEventListener("message", g, {
      signal: c.signal
    }), n = U(l, {
      interval: 1500
    });
    let s = u();

    function u() {
      return clearTimeout(s), s = setTimeout(() => {
        if (!m(e)) return u();
        a(!1)
      }, w.second * 30)
    }
  })) : Promise.resolve(!1)
}

function m(t) {
  try {
    return (t == null ? void 0 : t.closed) ?? !0
  } catch {
    return !1
  }
}
export {
  A,
  S as l
};