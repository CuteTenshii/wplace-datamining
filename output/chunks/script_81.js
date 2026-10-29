import {
  Ft as e,
  Lt as t,
  Vt as n,
  Wt as r,
  pt as i,
  un as a
} from "./DXDHrD2o.js";
import {
  t as o
} from "./C9LeLpt8.js";
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
      return i(n(g, this))
    }
    set selectedColor(t) {
      e(n(g, this), t, !0)
    }
    get showPaletteNumbers() {
      return i(n(_, this))
    }
    set showPaletteNumbers(t) {
      e(n(_, this), t, !0)
    }
    get highlightSelectedColor() {
      return i(n(v, this))
    }
    set highlightSelectedColor(t) {
      e(n(v, this), t, !0)
    }
    get highlightIncorrectPixels() {
      return i(n(y, this))
    }
    set highlightIncorrectPixels(t) {
      e(n(y, this), t, !0)
    }
    get highlightUnpaintedPixels() {
      return i(n(b, this))
    }
    set highlightUnpaintedPixels(t) {
      e(n(b, this), t, !0)
    }
    get colorPaletteMode() {
      return i(n(x, this))
    }
    set colorPaletteMode(t) {
      e(n(x, this), t, !0)
    }
    get remainingColorsTemplateId() {
      return i(n(S, this))
    }
    set remainingColorsTemplateId(t) {
      e(n(S, this), t, !0)
    }
    get remainingColorCounts() {
      return i(n(C, this))
    }
    set remainingColorCounts(t) {
      e(n(C, this), t)
    }
    get remainingColorTotal() {
      return i(n(w, this))
    }
    set remainingColorTotal(t) {
      e(n(w, this), t, !0)
    }
    get remainingColorsLoading() {
      return i(n(T, this))
    }
    set remainingColorsLoading(t) {
      e(n(T, this), t, !0)
    }
    constructor() {
      a(this, `onColorReselect`, void 0), r(this, g, t(1)), r(this, _, t(o.local.get(f) !== `false`)), r(this, v, t(!1)), r(this, y, t(!1)), r(this, b, t(!1)), r(this, x, t(`all`)), r(this, S, t(null)), r(this, C, t([])), r(this, w, t(0)), r(this, T, t(!1));
      let e = Number(localStorage.getItem(s));
      Number.isInteger(e) && e >= 0 && (this.selectedColor = e), this.highlightSelectedColor = o.local.get(c) === `true`, this.highlightIncorrectPixels = localStorage.getItem(l) === `true`, this.highlightUnpaintedPixels = localStorage.getItem(u) === `true`;
      let n = h(localStorage.getItem(p));
      if (n) {
        this.colorPaletteMode = n;
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