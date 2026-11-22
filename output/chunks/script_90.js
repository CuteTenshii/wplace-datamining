import {
  N as e,
  j as t,
  t as n
} from "./BtR3X4cL.js";
var r = `button, a[href], input, select, textarea, label, summary, [contenteditable]:not([contenteditable="false"]), [role="button"], [role="link"], [role="menuitem"], [role="option"], [role="tab"], [role="slider"]`;

function i(i, a, o) {
  let s = new Set,
    c = new Set;

  function l(t) {
    let n = t.target;
    return t.pointerType === `touch` || !e(t.button) || !(n instanceof Element) || n.closest(r) ? !1 : n.closest(`dialog`) === ((o == null ? void 0 : o.closest(`dialog`)) ?? null)
  }

  function u(e) {
    c.delete(e.button), l(e) && (s.add(e.button), n.isMouseButtonBound(e.button) && c.add(e.button), i(e))
  }

  function d(e) {
    s.delete(e.button) && (a == null || a(e))
  }
  let f = e => u(e),
    p = e => {
      e.button <= 0 || (t(e, e.button) ? u(e) : d(e))
    },
    m = e => d(e),
    h = () => s.clear(),
    g = e => {
      c.has(e.button) && e.preventDefault()
    },
    _ = [
      [`pointerdown`, f],
      [`pointermove`, p],
      [`pointerup`, m],
      [`pointercancel`, h],
      [`blur`, h],
      [`mousedown`, g],
      [`pointerup`, g],
      [`mouseup`, g],
      [`auxclick`, g],
      [`contextmenu`, g]
    ];
  for (let [e, t] of _) window.addEventListener(e, t, !0);
  return () => {
    for (let [e, t] of _) window.removeEventListener(e, t, !0)
  }
}
export {
  i as t
};