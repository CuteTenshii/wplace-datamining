import {
  bp as Q,
  Z as y,
  a1 as W,
  T as G,
  bq as D,
  K as E,
  br as K,
  av as ar,
  a2 as R,
  ax as tr,
  ag as ur,
  bs as er,
  aw as sr,
  bt as or,
  bu as cr,
  bv as lr,
  bw as nr,
  bx as vr,
  i as dr,
  by as br,
  bz as gr,
  bA as w,
  Q as V,
  bB as hr,
  m as Ar,
  l as _r,
  bC as Sr,
  bD as Tr,
  bE as Er,
  bF as pr,
  bG as Nr,
  ap as Cr,
  bH as Lr,
  bI as Or
} from "./DUZ_qUVk.js";

function Ir(r, f) {
  var i = void 0,
    a;
  Q(() => {
    i !== (i = f()) && (a && (y(a), a = null), i && (a = W(() => {
      G(() => i(r))
    })))
  })
}

function X(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = X(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function kr() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = X(r)) && (a && (a += " "), a += f);
  return a
}

function wr(r) {
  return typeof r == "object" ? kr(r) : r ?? ""
}
const Y = [...` 	
\r\f \v\uFEFF`];

function Mr(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var t of Object.keys(i))
      if (i[t]) a = a ? a + " " + t : t;
      else if (a.length)
      for (var u = t.length, e = 0;
        (e = a.indexOf(t, e)) >= 0;) {
        var o = e + u;
        (e === 0 || Y.includes(a[e - 1])) && (o === a.length || Y.includes(a[o])) ? a = (e === 0 ? "" : a.substring(0, e)) + a.substring(o + 1): e = o
      }
  }
  return a === "" ? null : a
}

function F(r, f = !1) {
  var i = f ? " !important;" : ";",
    a = "";
  for (var t of Object.keys(r)) {
    var u = r[t];
    u != null && u !== "" && (a += " " + t + ": " + u + i)
  }
  return a
}

function H(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Pr(r, f) {
  if (f) {
    var i = "",
      a, t;
    if (Array.isArray(f) ? (a = f[0], t = f[1]) : a = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var u = !1,
        e = 0,
        o = !1,
        n = [];
      a && n.push(...Object.keys(a).map(H)), t && n.push(...Object.keys(t).map(H));
      var v = 0,
        h = -1;
      const N = r.length;
      for (var d = 0; d < N; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : u ? u === s && (u = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? u = s : s === "(" ? e++ : s === ")" && e--, !o && u === !1 && e === 0) {
          if (s === ":" && h === -1) h = d;
          else if (s === ";" || d === N - 1) {
            if (h !== -1) {
              var p = H(r.substring(v, h).trim());
              if (!n.includes(p)) {
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
    return a && (i += F(a)), t && (i += F(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Rr(r, f, i, a, t, u) {
  var e = r[D];
  if (E || e !== i || e === void 0) {
    var o = Mr(i, a, u);
    (!E || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r[D] = i
  } else if (u && t !== u)
    for (var n in u) {
      var v = !!u[n];
      (t == null || v !== !!t[n]) && r.classList.toggle(n, v)
    }
  return u
}

function j(r, f = {}, i, a) {
  for (var t in i) {
    var u = i[t];
    f[t] !== u && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, u, a))
  }
}

function Hr(r, f, i, a) {
  var t = r[K];
  if (E || t !== f) {
    var u = Pr(f, a);
    (!E || u !== r.getAttribute("style")) && (u == null ? r.removeAttribute("style") : r.style.cssText = u), r[K] = f
  } else a && (Array.isArray(a) ? (j(r, i == null ? void 0 : i[0], a[0]), j(r, i == null ? void 0 : i[1], a[1], "important")) : j(r, i, a));
  return a
}

function M(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!ur(f)) return er();
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

function J(r) {
  var f = new MutationObserver(() => {
    M(r, r.__value)
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
  ar(r, "change", u => {
    var e = u ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(e), I);
    else {
      var n = r.querySelector(e) ?? r.querySelector("option:not([disabled])");
      o = n && I(n)
    }
    i(o), r.__value = o, R !== null && a.add(R)
  }), G(() => {
    var u = f();
    if (r === document.activeElement) {
      var e = R;
      if (a.has(e)) return
    }
    if (M(r, u, t), t && u === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (u = I(o), i(u))
    }
    r.__value = u, t = !1
  }), J(r)
}

function I(r) {
  return "__value" in r ? r.__value : r.value
}
const L = Symbol("class"),
  O = Symbol("style"),
  m = Symbol("is custom element"),
  x = Symbol("is html"),
  jr = w ? "link" : "LINK",
  z = w ? "input" : "INPUT",
  yr = w ? "option" : "OPTION",
  Gr = w ? "select" : "SELECT",
  qr = w ? "progress" : "PROGRESS";

function Ur(r) {
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
    r[Nr] = i, Cr(i), Lr()
  }
}

function Vr(r, f) {
  var i = P(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== qr) || (r.value = f ?? "")
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
  E && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === jr) || t[f] !== (t[f] = i) && (f === "loading" && (r[or] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && rr(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Br(r, f, i, a, t = !1, u = !1) {
  if (E && t && r.nodeName === z) {
    var e = r,
      o = e.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || Ur(e)
  }
  var n = P(r),
    v = n[m],
    h = !n[x];
  let d = E && v;
  d && V(!1);
  var s = f || {},
    p = r.nodeName === yr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = wr(i.class) : (a || i[L]) && (i.class = null), i[O] && (i.style ?? (i.style = null));
  var N = rr(r);
  if (r.nodeName === z && "type" in i && ("value" in i || "__value" in i)) {
    var T = i.type;
    (T !== s.type || T === void 0 && r.hasAttribute("type")) && (s.type = T, k(r, "type", T))
  }
  for (const c in i) {
    let l = i[c];
    if (p && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var _ = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rr(r, _, l, a, f == null ? void 0 : f[L], i[L]), s[c] = l, s[L] = i[L];
      continue
    }
    if (c === "style") {
      Hr(r, l, f == null ? void 0 : f[O], i[O]), s[c] = l, s[O] = i[O];
      continue
    }
    var q = s[c];
    if (!(l === q && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var U = c[0] + c[1];
      if (U !== "$$")
        if (U === "on") {
          const A = {},
            C = "$$" + c;
          let g = c.slice(2);
          var $ = Or(g);
          if (hr(g) && (g = g.slice(0, -7), A.capture = !0), !$ && q) {
            if (l != null) continue;
            r.removeEventListener(g, s[C], A), s[C] = null
          }
          if ($) Ar(g, r, l), _r([g]);
          else if (l != null) {
            let ir = function(fr) {
              s[c].call(this, fr)
            };
            s[C] = Sr(g, r, ir, A)
          }
        } else if (c === "style") k(r, c, l);
      else if (c === "autofocus") Tr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && p) $r(r, l);
      else {
        var b = c;
        h || (b = Er(b));
        var B = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !B)
          if (n[c] = null, b === "value" || b === "checked") {
            let A = r;
            const C = f === void 0;
            if (b === "value") {
              let g = A.defaultValue;
              A.removeAttribute(b), A.defaultValue = g, A.value = A.__value = C ? g : null
            } else {
              let g = A.defaultChecked;
              A.removeAttribute(b), A.defaultChecked = g, A.checked = C ? g : !1
            }
          } else r.removeAttribute(c);
        else B || N.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = pr)) : typeof l != "function" && k(r, b, l)
      }
    }
  }
  return d && V(!0), s
}

function Fr(r, f, i = [], a = [], t = [], u, e = !1, o = !1) {
  cr(t, i, a, n => {
    var v = void 0,
      h = {},
      d = r.nodeName === Gr,
      s = !1;
    if (Q(() => {
        var S = f(...n.map(dr)),
          N = Br(r, v, S, u, e, o);
        s && d && "value" in S && M(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || y(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var T = S[_];
          _.description === br && (!v || T !== v[_]) && (h[_] && y(h[_]), h[_] = W(() => Ir(r, () => T))), N[_] = T
        }
        v = N
      }), d) {
      var p = r;
      G(() => {
        M(p, v.value, !0), J(p)
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
var Z = new Map;

function rr(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = Z.get(f);
  if (i) return i;
  Z.set(f, i = []);
  for (var a, t = r, u = Element.prototype; u !== t;) {
    a = gr(t);
    for (var e in a) a[e].set && e !== "innerHTML" && e !== "textContent" && e !== "innerText" && i.push(e);
    t = vr(t)
  }
  return i
}
export {
  L as C, O as S, Rr as a, Fr as b, wr as c, Ir as d, Hr as e, Kr as f, Vr as g, Yr as h, kr as i, J as j, M as k, Ur as r, k as s
};