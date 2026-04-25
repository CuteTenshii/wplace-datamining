import {
  ay as t,
  Z as k,
  U as E,
  x as i,
  W as b,
  az as C,
  A as n,
  aA as w,
  aB as B,
  X as S
} from "./C21-Odj5.js";

function W(e, v, c = v) {
  var f = new WeakSet;
  t(e, "input", async l => {
    var d = l ? e.defaultValue : e.value;
    if (d = u(e) ? m(d) : d, c(d), k !== null && f.add(k), await E(), d !== (d = v())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        o = e.value.length;
      if (e.value = d ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (n && e.defaultValue !== e.value || i(v) == null && e.value) && (c(u(e) ? m(e.value) : e.value), k !== null && f.add(k)), b(() => {
    var l = v();
    if (e === document.activeElement) {
      var d = C ?? k;
      if (f.has(d)) return
    }
    u(e) && l === m(e.value) || e.type === "date" && !l && !e.value || l !== e.value && (e.value = l ?? "")
  })
}
const _ = new Set;

function q(e, v, c, f, l = f) {
  var d = c.getAttribute("type") === "checkbox",
    r = e;
  let s = !1;
  if (v !== null)
    for (var o of v) r = r[o] ?? (r[o] = []);
  r.push(c), t(c, "change", () => {
    var a = c.__value;
    d && (a = y(r, a, c.checked)), l(a)
  }, () => l(d ? [] : null)), b(() => {
    var a = f();
    if (n && c.defaultChecked !== c.checked) {
      s = !0;
      return
    }
    d ? (a = a || [], c.checked = a.includes(c.__value)) : c.checked = w(c.__value, a)
  }), B(() => {
    var a = r.indexOf(c);
    a !== -1 && r.splice(a, 1)
  }), _.has(r) || (_.add(r), S(() => {
    r.sort((a, h) => a.compareDocumentPosition(h) === 4 ? -1 : 1), _.delete(r)
  })), S(() => {
    if (s) {
      var a;
      if (d) a = y(r, a, c.checked);
      else {
        var h = r.find(A => A.checked);
        a = h == null ? void 0 : h.__value
      }
      l(a)
    }
  })
}

function x(e, v, c = v) {
  t(e, "change", f => {
    var l = f ? e.defaultChecked : e.checked;
    c(l)
  }), (n && e.defaultChecked !== e.checked || i(v) == null) && c(e.checked), b(() => {
    var f = v();
    e.checked = !!f
  })
}

function y(e, v, c) {
  for (var f = new Set, l = 0; l < e.length; l += 1) e[l].checked && f.add(e[l].__value);
  return c || f.delete(v), Array.from(f)
}

function u(e) {
  var v = e.type;
  return v === "number" || v === "range"
}

function m(e) {
  return e === "" ? null : +e
}
export {
  x as a, W as b, q as c
};