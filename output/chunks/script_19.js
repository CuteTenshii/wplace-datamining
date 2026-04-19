import {
  bt as D,
  a0 as R,
  a3 as Y,
  K as q,
  A as T,
  ay as x,
  Z as M,
  aB as rr,
  ag as ir,
  bu as fr,
  aA as ar,
  az as tr,
  bv as er,
  bw as ur,
  bx as sr,
  by as or,
  i as cr,
  bz as lr,
  bA as nr,
  bB as C,
  H as B,
  bC as vr,
  m as dr,
  k as br,
  bD as gr,
  bE as hr,
  bF as Ar,
  bG as _r,
  X as Sr,
  bH as Tr,
  bI as Nr
} from "./B66BVdRM.js";

function Er(r, f) {
  var i = void 0,
    a;
  D(() => {
    i !== (i = f()) && (a && (R(a), a = null), i && (a = Y(() => {
      q(() => i(r))
    })))
  })
}

function F(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = F(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function Or() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = F(r)) && (a && (a += " "), a += f);
  return a
}

function pr(r) {
  return typeof r == "object" ? Or(r) : r ?? ""
}
const K = [...` 	
\r\f \v\uFEFF`];

function Ir(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var t of Object.keys(i))
      if (i[t]) a = a ? a + " " + t : t;
      else if (a.length)
      for (var e = t.length, u = 0;
        (u = a.indexOf(t, u)) >= 0;) {
        var o = u + e;
        (u === 0 || K.includes(a[u - 1])) && (o === a.length || K.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function V(r, f = !1) {
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

function kr(r, f) {
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
      const E = r.length;
      for (var d = 0; d < E; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : e ? e === s && (e = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? e = s : s === "(" ? u++ : s === ")" && u--, !o && e === !1 && u === 0) {
          if (s === ":" && h === -1) h = d;
          else if (s === ";" || d === E - 1) {
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
    return a && (i += V(a)), t && (i += V(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Lr(r, f, i, a, t, e) {
  var u = r.__className;
  if (T || u !== i || u === void 0) {
    var o = Ir(i, a, e);
    (!T || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r.__className = i
  } else if (e && t !== e)
    for (var n in e) {
      var v = !!e[n];
      (t == null || v !== !!t[n]) && r.classList.toggle(n, v)
    }
  return e
}

function G(r, f = {}, i, a) {
  for (var t in i) {
    var e = i[t];
    f[t] !== e && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, e, a))
  }
}

function Cr(r, f, i, a) {
  var t = r.__style;
  if (T || t !== f) {
    var e = kr(f, a);
    (!T || e !== r.getAttribute("style")) && (e == null ? r.removeAttribute("style") : r.style.cssText = e), r.__style = f
  } else a && (Array.isArray(a) ? (G(r, i == null ? void 0 : i[0], a[0]), G(r, i == null ? void 0 : i[1], a[1], "important")) : G(r, i, a));
  return a
}

function y(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!ir(f)) return fr();
    for (var a of r.options) a.selected = f.includes(L(a));
    return
  }
  for (a of r.options) {
    var t = L(a);
    if (ar(t, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function X(r) {
  var f = new MutationObserver(() => {
    y(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), rr(() => {
    f.disconnect()
  })
}

function Ur(r, f, i = f) {
  var a = new WeakSet,
    t = !0;
  x(r, "change", e => {
    var u = e ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), L);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && L(n)
    }
    i(o), M !== null && a.add(M)
  }), q(() => {
    var e = f();
    if (r === document.activeElement) {
      var u = tr ?? M;
      if (a.has(u)) return
    }
    if (y(r, e, t), t && e === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (e = L(o), i(e))
    }
    r.__value = e, t = !1
  }), X(r)
}

function L(r) {
  return "__value" in r ? r.__value : r.value
}
const I = Symbol("class"),
  k = Symbol("style"),
  Z = Symbol("is custom element"),
  W = Symbol("is html"),
  yr = C ? "link" : "LINK",
  wr = C ? "input" : "INPUT",
  Pr = C ? "option" : "OPTION",
  Mr = C ? "select" : "SELECT",
  jr = C ? "progress" : "PROGRESS";

function Gr(r) {
  if (T) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            w(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var t = r.checked;
            w(r, "checked", null), r.checked = t
          }
        }
      };
    r.__on_r = i, Sr(i), Tr()
  }
}

function $r(r, f) {
  var i = P(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== jr) || (r.value = f ?? "")
}

function Br(r, f) {
  var i = P(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function Rr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function w(r, f, i, a) {
  var t = P(r);
  T && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === yr) || t[f] !== (t[f] = i) && (f === "loading" && (r[er] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && J(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function qr(r, f, i, a, t = !1, e = !1) {
  if (T && t && r.nodeName === wr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || Gr(u)
  }
  var n = P(r),
    v = n[Z],
    h = !n[W];
  let d = T && v;
  d && B(!1);
  var s = f || {},
    N = r.nodeName === Pr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = pr(i.class) : (a || i[I]) && (i.class = null), i[k] && (i.style ?? (i.style = null));
  var E = J(r);
  for (const c in i) {
    let l = i[c];
    if (N && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var p = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lr(r, p, l, a, f == null ? void 0 : f[I], i[I]), s[c] = l, s[I] = i[I];
      continue
    }
    if (c === "style") {
      Cr(r, l, f == null ? void 0 : f[k], i[k]), s[c] = l, s[k] = i[k];
      continue
    }
    var A = s[c];
    if (!(l === A && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var H = c[0] + c[1];
      if (H !== "$$")
        if (H === "on") {
          const _ = {},
            O = "$$" + c;
          let g = c.slice(2);
          var U = Nr(g);
          if (vr(g) && (g = g.slice(0, -7), _.capture = !0), !U && A) {
            if (l != null) continue;
            r.removeEventListener(g, s[O], _), s[O] = null
          }
          if (U) dr(g, r, l), br([g]);
          else if (l != null) {
            let Q = function(m) {
              s[c].call(this, m)
            };
            s[O] = gr(g, r, Q, _)
          }
        } else if (c === "style") w(r, c, l);
      else if (c === "autofocus") hr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && N) Rr(r, l);
      else {
        var b = c;
        h || (b = Ar(b));
        var $ = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !$)
          if (n[c] = null, b === "value" || b === "checked") {
            let _ = r;
            const O = f === void 0;
            if (b === "value") {
              let g = _.defaultValue;
              _.removeAttribute(b), _.defaultValue = g, _.value = _.__value = O ? g : null
            } else {
              let g = _.defaultChecked;
              _.removeAttribute(b), _.defaultChecked = g, _.checked = O ? g : !1
            }
          } else r.removeAttribute(c);
        else $ || E.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = _r)) : typeof l != "function" && w(r, b, l)
      }
    }
  }
  return d && B(!0), s
}

function Kr(r, f, i = [], a = [], t = [], e, u = !1, o = !1) {
  ur(t, i, a, n => {
    var v = void 0,
      h = {},
      d = r.nodeName === Mr,
      s = !1;
    if (D(() => {
        var S = f(...n.map(cr)),
          E = qr(r, v, S, e, u, o);
        s && d && "value" in S && y(r, S.value);
        for (let A of Object.getOwnPropertySymbols(h)) S[A] || R(h[A]);
        for (let A of Object.getOwnPropertySymbols(S)) {
          var p = S[A];
          A.description === lr && (!v || p !== v[A]) && (h[A] && R(h[A]), h[A] = Y(() => Er(r, () => p))), E[A] = p
        }
        v = E
      }), d) {
      var N = r;
      q(() => {
        y(N, v.value, !0), X(N)
      })
    }
    s = !0
  })
}

function P(r) {
  return r.__attributes ?? (r.__attributes = {
    [Z]: r.nodeName.includes("-"),
    [W]: r.namespaceURI === sr
  })
}
var z = new Map;

function J(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = z.get(f);
  if (i) return i;
  z.set(f, i = []);
  for (var a, t = r, e = Element.prototype; e !== t;) {
    a = nr(t);
    for (var u in a) a[u].set && i.push(u);
    t = or(t)
  }
  return i
}
export {
  I as C, k as S, Lr as a, Ur as b, pr as c, Kr as d, Er as e, Cr as f, $r as g, Br as h, Or as i, X as j, y as k, Gr as r, w as s
};