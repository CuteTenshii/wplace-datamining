import {
  F as C,
  G as t,
  l as o,
  z as i,
  H as m,
  I as E,
  h as b,
  J as A,
  K as V,
  L as S
} from "./B6s--CY1.js";

function q(e, r, l = r) {
  var f = C(),
    v = new WeakSet;
  t(e, "input", d => {
    var a = d ? e.defaultValue : e.value;
    if (a = u(e) ? n(a) : a, l(a), o !== null && v.add(o), f && a !== (a = r())) {
      var _ = e.selectionStart,
        s = e.selectionEnd;
      e.value = a ?? "", s !== null && (e.selectionStart = _, e.selectionEnd = Math.min(s, e.value.length))
    }
  }), (b && e.defaultValue !== e.value || i(r) == null && e.value) && (l(u(e) ? n(e.value) : e.value), o !== null && v.add(o)), m(() => {
    var d = r();
    if (e === document.activeElement) {
      var a = E ?? o;
      if (v.has(a)) return
    }
    u(e) && d === n(e.value) || e.type === "date" && !d && !e.value || d !== e.value && (e.value = d ?? "")
  })
}
const k = new Set;

function z(e, r, l, f, v = f) {
  var d = l.getAttribute("type") === "checkbox",
    a = e;
  let _ = !1;
  if (r !== null)
    for (var s of r) a = a[s] ?? (a[s] = []);
  a.push(l), t(l, "change", () => {
    var c = l.__value;
    d && (c = w(a, c, l.checked)), v(c)
  }, () => v(d ? [] : null)), m(() => {
    var c = f();
    if (b && l.defaultChecked !== l.checked) {
      _ = !0;
      return
    }
    d ? (c = c || [], l.checked = c.includes(l.__value)) : l.checked = A(l.__value, c)
  }), V(() => {
    var c = a.indexOf(l);
    c !== -1 && a.splice(c, 1)
  }), k.has(a) || (k.add(a), S(() => {
    a.sort((c, h) => c.compareDocumentPosition(h) === 4 ? -1 : 1), k.delete(a)
  })), S(() => {
    if (_) {
      var c;
      if (d) c = w(a, c, l.checked);
      else {
        var h = a.find(y => y.checked);
        c = h == null ? void 0 : h.__value
      }
      v(c)
    }
  })
}

function B(e, r, l = r) {
  t(e, "change", f => {
    var v = f ? e.defaultChecked : e.checked;
    l(v)
  }), (b && e.defaultChecked !== e.checked || i(r) == null) && l(e.checked), m(() => {
    var f = r();
    e.checked = !!f
  })
}

function w(e, r, l) {
  for (var f = new Set, v = 0; v < e.length; v += 1) e[v].checked && f.add(e[v].__value);
  return l || f.delete(r), Array.from(f)
}

function u(e) {
  var r = e.type;
  return r === "number" || r === "range"
}

function n(e) {
  return e === "" ? null : +e
}
export {
  q as a, B as b, z as c
};