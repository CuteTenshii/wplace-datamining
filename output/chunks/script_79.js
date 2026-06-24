import {
  P as c,
  u as f
} from "./Bijea84s.js";
const w = "wplace-auth";

function m() {
  var o;
  const e = window.open(`${c}/auth/google?popup=1`, "wplace-oauth", "width=480,height=720");
  return e ? ((o = e.focus) == null || o.call(e), new Promise(u => {
    let s = !1,
      r, i;
    const t = async () => {
      s || (s = !0, window.removeEventListener("message", n), clearInterval(r), clearTimeout(i), u(await f.refresh()))
    }, n = a => {
      var l;
      if (a.origin === location.origin && ((l = a.data) == null ? void 0 : l.type) === w) {
        try {
          e.close()
        } catch {}
        t()
      }
    };
    window.addEventListener("message", n), r = setInterval(() => {
      e.closed && t()
    }, 500), i = setTimeout(() => t(), 300 * 1e3)
  })) : Promise.resolve(!1)
}
export {
  w as A, m as l
};