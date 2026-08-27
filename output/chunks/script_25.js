import {
  bv as J,
  a1 as H,
  a4 as X,
  W as G,
  bw as D,
  N as E,
  bx as K,
  ay as ar,
  a5 as R,
  aA as tr,
  aj as er,
  by as ur,
  az as sr,
  bz as or,
  bA as cr,
  bB as lr,
  bC as nr,
  bD as vr,
  i as dr,
  bE as br,
  bF as Ar,
  bG as M,
  T as V,
  bH as hr,
  m as gr,
  k as _r,
  bI as Sr,
  bJ as Tr,
  bK as Er,
  bL as Nr,
  bM as Lr,
  as as Cr,
  bN as Or,
  bO as pr
} from "./D5GL_E7i.js";

function Ir(r, f) {
  var i = void 0,
    a;
  J(() => {
    i !== (i = f()) && (a && (H(a), a = null), i && (a = X(() => {
      G(() => i(r))
    })))
  })
}

function Z(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = Z(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function kr() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = Z(r)) && (a && (a += " "), a += f);
  return a
}

function Mr(r) {
  return typeof r == "object" ? kr(r) : r ?? ""
}
const Y = [...` 	
\r\f \v\uFEFF`];

function wr(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var t of Object.keys(i))
      if (i[t]) a = a ? a + " " + t : t;
      else if (a.length)
      for (var e = t.length, u = 0;
        (u = a.indexOf(t, u)) >= 0;) {
        var o = u + e;
        (u === 0 || Y.includes(a[u - 1])) && (o === a.length || Y.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function z(r, f = !1) {
  var i = f ? " !important;" : ";",
    a = "";
  for (var t of Object.keys(r)) {
    var e = r[t];
    e != null && e !== "" && (a += " " + t + ": " + e + i)
  }
  return a
}

function j(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Pr(r, f) {
  if (f) {
    var i = "",
      a, t;
    if (Array.isArray(f) ? (a = f[0], t = f[1]) : a = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var e = !1,
        u = 0,
        o = !1,
        n = [];
      a && n.push(...Object.keys(a).map(j)), t && n.push(...Object.keys(t).map(j));
      var v = 0,
        h = -1;
      const L = r.length;
      for (var d = 0; d < L; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : e ? e === s && (e = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? e = s : s === "(" ? u++ : s === ")" && u--, !o && e === !1 && u === 0) {
          if (s === ":" && h === -1) h = d;
          else if (s === ";" || d === L - 1) {
            if (h !== -1) {
              var N = j(r.substring(v, h).trim());
              if (!n.includes(N)) {
                s !== ";" && d++;
                var S = r.substring(v, d).trim();
                i += " " + S + ";"
              }
            }
            v = d + 1, h = -1
          }
        }
      }
    }
    return a && (i += z(a)), t && (i += z(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Rr(r, f, i, a, t, e) {
  var u = r[D];
  if (E || u !== i || u === void 0) {
    var o = wr(i, a, e);
    (!E || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r[D] = i
  } else if (e && t !== e)
    for (var n in e) {
      var v = !!e[n];
      (t == null || v !== !!t[n]) && r.classList.toggle(n, v)
    }
  return e
}

function y(r, f = {}, i, a) {
  for (var t in i) {
    var e = i[t];
    f[t] !== e && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, e, a))
  }
}

function jr(r, f, i, a) {
  var t = r[K];
  if (E || t !== f) {
    var e = Pr(f, a);
    (!E || e !== r.getAttribute("style")) && (e == null ? r.removeAttribute("style") : r.style.cssText = e), r[K] = f
  } else a && (Array.isArray(a) ? (y(r, i == null ? void 0 : i[0], a[0]), y(r, i == null ? void 0 : i[1], a[1], "important")) : y(r, i, a));
  return a
}

function w(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!er(f)) return ur();
    for (var a of r.options) a.selected = f.includes(I(a));
    return
  }
  for (a of r.options) {
    var t = I(a);
    if (sr(t, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function Q(r) {
  var f = new MutationObserver(() => {
    w(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), tr(() => {
    f.disconnect()
  })
}

function Kr(r, f, i = f) {
  var a = new WeakSet,
    t = !0;
  ar(r, "change", e => {
    var u = e ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), I);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && I(n)
    }
    i(o), r.__value = o, R !== null && a.add(R)
  }), G(() => {
    var e = f();
    if (r === document.activeElement) {
      var u = R;
      if (a.has(u)) return
    }
    if (w(r, e, t), t && e === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (e = I(o), i(e))
    }
    r.__value = e, t = !1
  }), Q(r)
}

function I(r) {
  return "__value" in r ? r.__value : r.value
}
const O = Symbol("class"),
  p = Symbol("style"),
  m = Symbol("is custom element"),
  x = Symbol("is html"),
  yr = M ? "link" : "LINK",
  F = M ? "input" : "INPUT",
  Hr = M ? "option" : "OPTION",
  Gr = M ? "select" : "SELECT",
  Ur = M ? "progress" : "PROGRESS";

function qr(r) {
  if (E) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            k(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var t = r.checked;
            k(r, "checked", null), r.checked = t
          }
        }
      };
    r[Lr] = i, Cr(i), Or()
  }
}

function Vr(r, f) {
  var i = P(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== Ur) || (r.value = f ?? "")
}

function Yr(r, f) {
  var i = P(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function $r(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function k(r, f, i, a) {
  var t = P(r);
  E && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === yr) || t[f] !== (t[f] = i) && (f === "loading" && (r[or] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && rr(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Br(r, f, i, a, t = !1, e = !1) {
  if (E && t && r.nodeName === F) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || qr(u)
  }
  var n = P(r),
    v = n[m],
    h = !n[x];
  let d = E && v;
  d && V(!1);
  var s = f || {},
    N = r.nodeName === Hr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = Mr(i.class) : (a || i[O]) && (i.class = null), i[p] && (i.style ?? (i.style = null));
  var L = rr(r);
  if (r.nodeName === F && "type" in i && ("value" in i || "__value" in i)) {
    var T = i.type;
    (T !== s.type || T === void 0 && r.hasAttribute("type")) && (s.type = T, k(r, "type", T))
  }
  for (const c in i) {
    let l = i[c];
    if (N && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var _ = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rr(r, _, l, a, f == null ? void 0 : f[O], i[O]), s[c] = l, s[O] = i[O];
      continue
    }
    if (c === "style") {
      jr(r, l, f == null ? void 0 : f[p], i[p]), s[c] = l, s[p] = i[p];
      continue
    }
    var U = s[c];
    if (!(l === U && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var q = c[0] + c[1];
      if (q !== "$$")
        if (q === "on") {
          const g = {},
            C = "$$" + c;
          let A = c.slice(2);
          var $ = pr(A);
          if (hr(A) && (A = A.slice(0, -7), g.capture = !0), !$ && U) {
            if (l != null) continue;
            r.removeEventListener(A, s[C], g), s[C] = null
          }
          if ($) gr(A, r, l), _r([A]);
          else if (l != null) {
            let ir = function(fr) {
              s[c].call(this, fr)
            };
            s[C] = Sr(A, r, ir, g)
          }
        } else if (c === "style") k(r, c, l);
      else if (c === "autofocus") Tr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && N) $r(r, l);
      else {
        var b = c;
        h || (b = Er(b));
        var B = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !B)
          if (n[c] = null, b === "value" || b === "checked") {
            let g = r;
            const C = f === void 0;
            if (b === "value") {
              let A = g.defaultValue;
              g.removeAttribute(b), g.defaultValue = A, g.value = g.__value = C ? A : null
            } else {
              let A = g.defaultChecked;
              g.removeAttribute(b), g.defaultChecked = A, g.checked = C ? A : !1
            }
          } else r.removeAttribute(c);
        else B || L.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = Nr)) : typeof l != "function" && k(r, b, l)
      }
    }
  }
  return d && V(!0), s
}

function zr(r, f, i = [], a = [], t = [], e, u = !1, o = !1) {
  cr(t, i, a, n => {
    var v = void 0,
      h = {},
      d = r.nodeName === Gr,
      s = !1;
    if (J(() => {
        var S = f(...n.map(dr)),
          L = Br(r, v, S, e, u, o);
        s && d && "value" in S && w(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || H(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var T = S[_];
          _.description === br && (!v || T !== v[_]) && (h[_] && H(h[_]), h[_] = X(() => Ir(r, () => T))), L[_] = T
        }
        v = L
      }), d) {
      var N = r;
      G(() => {
        w(N, v.value, !0), Q(N)
      })
    }
    s = !0
  })
}

function P(r) {
  var f;
  return r[f = lr] ?? (r[f] = {
    [m]: r.nodeName.includes("-"),
    [x]: r.namespaceURI === nr
  })
}
var W = new Map;

function rr(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = W.get(f);
  if (i) return i;
  W.set(f, i = []);
  for (var a, t = r, e = Element.prototype; e !== t;) {
    a = Ar(t);
    for (var u in a) a[u].set && u !== "innerHTML" && u !== "textContent" && u !== "innerText" && i.push(u);
    t = vr(t)
  }
  return i
}
export {
  O as C, p as S, Rr as a, jr as b, Mr as c, Kr as d, zr as e, Ir as f, Vr as g, Yr as h, Q as i, w as j, kr as k, qr as r, k as s
};