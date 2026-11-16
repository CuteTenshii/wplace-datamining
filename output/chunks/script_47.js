import {
  Ft as e,
  Lt as t,
  Nt as n,
  gt as r,
  pt as i,
  wt as a
} from "./DXDHrD2o.js";
var o = n({
    request: null
  }),
  s = `input:not(:disabled):not([type="hidden"]), select:not(:disabled), textarea:not(:disabled), button:not(:disabled), summary, a[href], [tabindex]`;

function c(e) {
  for (let t = e; t; t = t.parentElement) t instanceof HTMLDetailsElement && (t.open = !0)
}

function l(e) {
  e instanceof HTMLDetailsElement && (e = e.querySelector(`summary`) ?? e);
  let t = e.matches(s) ? e : e.closest(`button, a[href], summary, label`) ?? e.querySelector(s) ?? e,
    n = t instanceof HTMLLabelElement ? t.control ?? t : t,
    r = n.hasAttribute(`tabindex`);
  !r && !n.matches(s) && (n.tabIndex = -1), n.focus({
    preventScroll: !0
  }), e.scrollIntoView({
    block: `center`,
    behavior: `instant`
  }), e.setAttribute(`data-game-link-highlight`, ``);
  let i = () => e.removeAttribute(`data-game-link-highlight`);
  return document.addEventListener(`pointerdown`, i, {
    once: !0
  }), document.addEventListener(`keydown`, i, {
    once: !0
  }), () => {
    i(), !r && n.getAttribute(`tabindex`) === `-1` && n.removeAttribute(`tabindex`), document.removeEventListener(`pointerdown`, i), document.removeEventListener(`keydown`, i)
  }
}

function u(s, u) {
  let d = t(n(u));
  return a(() => {
    s.dataset.gameLink = i(d);
    let e = o.request;
    if (!i(d) || (e == null ? void 0 : e.path) !== i(d)) return;
    let t = !1,
      n;
    return r().then(async () => {
      t || !s.isConnected || (c(s), await r(), !t && !e.text && (n = l(s)))
    }), () => {
      t = !0, n == null || n()
    }
  }), {
    update: t => {
      e(d, t, !0)
    }
  }
}
export {
  c as i, o as n, u as r, l as t
};