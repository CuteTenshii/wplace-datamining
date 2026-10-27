import {
  Bt as e,
  Lt as t,
  Nt as n,
  jt as r,
  lt as i,
  on as a
} from "./DTpxYwnW.js";
import {
  t as o
} from "./CoBQ4hlC.js";
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
    set selectedColor(e) {
      r(t(g, this), e, !0)
    }
    get showPaletteNumbers() {
      return i(t(_, this))
    }
    set showPaletteNumbers(e) {
      r(t(_, this), e, !0)
    }
    get highlightSelectedColor() {
      return i(t(v, this))
    }
    set highlightSelectedColor(e) {
      r(t(v, this), e, !0)
    }
    get highlightIncorrectPixels() {
      return i(t(y, this))
    }
    set highlightIncorrectPixels(e) {
      r(t(y, this), e, !0)
    }
    get highlightUnpaintedPixels() {
      return i(t(b, this))
    }
    set highlightUnpaintedPixels(e) {
      r(t(b, this), e, !0)
    }
    get colorPaletteMode() {
      return i(t(x, this))
    }
    set colorPaletteMode(e) {
      r(t(x, this), e, !0)
    }
    get remainingColorsTemplateId() {
      return i(t(S, this))
    }
    set remainingColorsTemplateId(e) {
      r(t(S, this), e, !0)
    }
    get remainingColorCounts() {
      return i(t(C, this))
    }
    set remainingColorCounts(e) {
      r(t(C, this), e)
    }
    get remainingColorTotal() {
      return i(t(w, this))
    }
    set remainingColorTotal(e) {
      r(t(w, this), e, !0)
    }
    get remainingColorsLoading() {
      return i(t(T, this))
    }
    set remainingColorsLoading(e) {
      r(t(T, this), e, !0)
    }
    constructor() {
      a(this, `onColorReselect`, void 0), e(this, g, n(1)), e(this, _, n(o.local.get(f) !== `false`)), e(this, v, n(!1)), e(this, y, n(!1)), e(this, b, n(!1)), e(this, x, n(`all`)), e(this, S, n(null)), e(this, C, n([])), e(this, w, n(0)), e(this, T, n(!1));
      let t = Number(localStorage.getItem(s));
      Number.isInteger(t) && t >= 0 && (this.selectedColor = t), this.highlightSelectedColor = o.local.get(c) === `true`, this.highlightIncorrectPixels = localStorage.getItem(l) === `true`, this.highlightUnpaintedPixels = localStorage.getItem(u) === `true`;
      let r = h(localStorage.getItem(p));
      if (r) {
        this.colorPaletteMode = r;
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