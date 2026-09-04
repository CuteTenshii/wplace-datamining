function e(e) {
  let t;

  function n(n) {
    if (e.disabled || t || n.changedTouches.length !== 1) {
      t = void 0;
      return
    }
    let r = n.changedTouches[0];
    t = {
      id: r.identifier,
      x: r.clientX,
      y: r.clientY
    }
  }

  function r(e) {
    if (!t) return;
    let n = Array.from(e.changedTouches).find(e => e.identifier === (t == null ? void 0 : t.id));
    n && Math.hypot(n.clientX - t.x, n.clientY - t.y) > 10 && (t = void 0)
  }

  function i(n) {
    if (!t) return;
    let r = Array.from(n.changedTouches).find(e => e.identifier === (t == null ? void 0 : t.id));
    if (!r) return;
    let i = t;
    t = void 0;
    let a = e.getBoundingClientRect();
    e.disabled || !n.cancelable || Math.hypot(r.clientX - i.x, r.clientY - i.y) > 10 || r.clientX < a.left || r.clientX > a.right || r.clientY < a.top || r.clientY > a.bottom || (n.preventDefault(), e.click())
  }

  function a() {
    t = void 0
  }
  return e.addEventListener(`touchstart`, n, {
    passive: !0
  }), e.addEventListener(`touchmove`, r, {
    passive: !0
  }), e.addEventListener(`touchend`, i, {
    passive: !1
  }), e.addEventListener(`touchcancel`, a), {
    destroy() {
      e.removeEventListener(`touchstart`, n), e.removeEventListener(`touchmove`, r), e.removeEventListener(`touchend`, i), e.removeEventListener(`touchcancel`, a)
    }
  }
}
export {
  e as t
};