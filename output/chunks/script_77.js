import {
  At as e,
  It as t,
  Mt as n,
  an as r,
  lt as i,
  zt as a
} from "./R3px7NU1.js";
import {
  t as o
} from "./Bk7pXTla.js";
var s = `selected-color`,
  c = `template-build-highlight-selected-color`,
  l = `template-build-highlight-incorrect-pixels`,
  u = `template-build-highlight-unpainted-pixels`,
  d = `template-build-use-only-unlocked-colors`,
  f = `template-build-show-palette-numbers`,
  p = `template-build-color-palette-mode`,
  m = new Set([`all`, `free`, `template`, `unlocked`]);

function h(e) {
  return !e || !m.has(e) ? null : e
}
var g = new WeakMap,
  _ = new WeakMap,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap,
  x = new WeakMap,
  S = new WeakMap,
  C = new WeakMap,
  w = new WeakMap,
  T = new WeakMap,
  E = new class {
    get selectedColor() {
      return i(t(g, this))
    }
    set selectedColor(n) {
      e(t(g, this), n, !0)
    }
    get showPaletteNumbers() {
      return i(t(_, this))
    }
    set showPaletteNumbers(n) {
      e(t(_, this), n, !0)
    }
    get highlightSelectedColor() {
      return i(t(v, this))
    }
    set highlightSelectedColor(n) {
      e(t(v, this), n, !0)
    }
    get highlightIncorrectPixels() {
      return i(t(y, this))
    }
    set highlightIncorrectPixels(n) {
      e(t(y, this), n, !0)
    }
    get highlightUnpaintedPixels() {
      return i(t(b, this))
    }
    set highlightUnpaintedPixels(n) {
      e(t(b, this), n, !0)
    }
    get colorPaletteMode() {
      return i(t(x, this))
    }
    set colorPaletteMode(n) {
      e(t(x, this), n, !0)
    }
    get remainingColorsTemplateId() {
      return i(t(S, this))
    }
    set remainingColorsTemplateId(n) {
      e(t(S, this), n, !0)
    }
    get remainingColorCounts() {
      return i(t(C, this))
    }
    set remainingColorCounts(n) {
      e(t(C, this), n)
    }
    get remainingColorTotal() {
      return i(t(w, this))
    }
    set remainingColorTotal(n) {
      e(t(w, this), n, !0)
    }
    get remainingColorsLoading() {
      return i(t(T, this))
    }
    set remainingColorsLoading(n) {
      e(t(T, this), n, !0)
    }
    constructor() {
      r(this, `onColorReselect`, void 0), a(this, g, n(1)), a(this, _, n(o.local.get(f) !== `false`)), a(this, v, n(!1)), a(this, y, n(!1)), a(this, b, n(!1)), a(this, x, n(`all`)), a(this, S, n(null)), a(this, C, n([])), a(this, w, n(0)), a(this, T, n(!1));
      let e = Number(localStorage.getItem(s));
      Number.isInteger(e) && e >= 0 && (this.selectedColor = e), this.highlightSelectedColor = o.local.get(c) === `true`, this.highlightIncorrectPixels = localStorage.getItem(l) === `true`, this.highlightUnpaintedPixels = localStorage.getItem(u) === `true`;
      let t = h(localStorage.getItem(p));
      if (t) {
        this.colorPaletteMode = t;
        return
      }
      localStorage.getItem(d) === `true` && (this.colorPaletteMode = `unlocked`)
    }
    setShowPaletteNumbers(e) {
      this.showPaletteNumbers = e, o.local.set(f, String(e))
    }
    setSelectedColor(e) {
      this.selectedColor = e
    }
    setHighlightSelectedColor(e) {
      this.highlightSelectedColor = e, o.local.set(c, String(e))
    }
    setHighlightIncorrectPixels(e) {
      this.highlightIncorrectPixels = e, localStorage.setItem(l, e ? `true` : `false`)
    }
    setHighlightUnpaintedPixels(e) {
      this.highlightUnpaintedPixels = e, localStorage.setItem(u, e ? `true` : `false`)
    }
    setColorPaletteMode(e) {
      this.colorPaletteMode = e, localStorage.setItem(p, e), localStorage.removeItem(d)
    }
    setRemainingColors(e, t, n) {
      let r = [];
      for (let e of t) !Number.isInteger(e.colorIdx) || e.colorIdx < 0 || !Number.isSafeInteger(e.count) || e.count < 0 || (r[e.colorIdx] = e.count);
      let i = r.reduce((e, t) => e + t, 0);
      this.remainingColorsTemplateId = e, this.remainingColorCounts = r, this.remainingColorTotal = i, this.remainingColorsLoading = n
    }
    clearRemainingColors() {
      this.remainingColorsTemplateId = null, this.remainingColorCounts = [], this.remainingColorTotal = 0, this.remainingColorsLoading = !1
    }
  };
export {
  E as t
};