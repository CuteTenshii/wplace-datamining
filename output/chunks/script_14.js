import {
  Bt as e,
  Lt as t,
  Nt as n,
  jt as r,
  kt as i,
  ut as a
} from "./D2z8HFb7.js";
var o = [`none`, `protanopia`, `deuteranopia`, `tritanopia`],
  s = {
    protanopia: [.152286, 1.052583, -.204868, .114503, .786281, .099216, -.003882, -.048116, 1.051998],
    deuteranopia: [.367322, .860646, -.227968, .280085, .672501, .047413, -.01182, .04294, .968881],
    tritanopia: [1.255528, -.076749, -.178779, -.078411, .930809, .147602, .004733, .691367, .3039]
  };

function c(e, t) {
  let n = Number.isFinite(t) ? Math.min(100, Math.max(0, t)) / 100 : 0,
    r = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  if (e === `none` || n === 0) return r;
  let i = s[e],
    a = {
      protanopia: 0,
      deuteranopia: 1,
      tritanopia: 2
    } [e];
  for (let e = 0; e < 3; e++)
    if (e !== a)
      for (let t = 0; t < 3; t++) {
        let o = Number(e === t) - i[e * 3 + t],
          s = Number(a === t) - i[a * 3 + t];
        r[e * 5 + t] += n * (o + .7 * s)
      }
  return r
}
var l = [`plop`, `smallPlop`, `bigPlop`, `smallDropplet`, `droppletAndPlop`, `notification1`, `playerNotification`, `purchaseSuccess`, `purchaseFail`],
  u = `wplace:settings:v1`;

function d(e, t) {
  return typeof e == `number` && Number.isFinite(e) ? Math.round(Math.min(100, Math.max(0, e))) : t
}
var f = new WeakMap,
  p = new WeakMap,
  m = new WeakMap,
  h = new WeakMap,
  g = new WeakMap,
  _ = new WeakMap,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap,
  x = new class {
    get alerts() {
      return a(t(f, this))
    }
    set alerts(e) {
      r(t(f, this), e, !0)
    }
    get artOpacity() {
      return a(t(p, this))
    }
    set artOpacity(e) {
      r(t(p, this), e, !0)
    }
    get colorblindMode() {
      return a(t(m, this))
    }
    set colorblindMode(e) {
      r(t(m, this), e, !0)
    }
    get colorblindStrength() {
      return a(t(h, this))
    }
    set colorblindStrength(e) {
      r(t(h, this), e, !0)
    }
    get oldUi() {
      return a(t(g, this))
    }
    set oldUi(e) {
      r(t(g, this), e, !0)
    }
    get nativeCursor() {
      return a(t(_, this))
    }
    set nativeCursor(e) {
      r(t(_, this), e, !0), document.documentElement.toggleAttribute(`data-native-cursor`, e)
    }
    get showHotspots() {
      return a(t(v, this))
    }
    set showHotspots(e) {
      r(t(v, this), e, !0)
    }
    get showAllianceHqPins() {
      return a(t(y, this))
    }
    set showAllianceHqPins(e) {
      r(t(y, this), e, !0)
    }
    get sounds() {
      return a(t(b, this))
    }
    set sounds(e) {
      r(t(b, this), e, !0)
    }
    constructor() {
      e(this, f, n(i({
        charges: !0,
        events: !0,
        updates: !0
      }))), e(this, p, n(100)), e(this, m, n(`none`)), e(this, h, n(100)), e(this, g, n(!1)), e(this, _, n(!1)), e(this, v, n(!0)), e(this, y, n(!0)), e(this, b, n(i(Object.fromEntries(l.map(e => [e, 50]))))), this.nativeCursor = !1;
      try {
        var t;
        let e = JSON.parse(localStorage.getItem(u) ?? `{}`);
        if (!e || typeof e != `object`) return;
        for (let t of [`charges`, `events`, `updates`]) {
          var r;
          typeof((r = e.alerts) == null ? void 0 : r[t]) == `boolean` && (this.alerts[t] = e.alerts[t])
        }
        this.artOpacity = d(e.artOpacity, 100), o.includes(e.colorblindMode) && (this.colorblindMode = e.colorblindMode), this.colorblindStrength = d(e.colorblindStrength, 100), typeof e.oldUi == `boolean` && (this.oldUi = e.oldUi), typeof e.nativeCursor == `boolean` && (this.nativeCursor = e.nativeCursor), typeof e.showHotspots == `boolean` && (this.showHotspots = e.showHotspots), typeof e.showAllianceHqPins == `boolean` && (this.showAllianceHqPins = e.showAllianceHqPins);
        for (let n of l) this.sounds[n] = d((t = e.sounds) == null ? void 0 : t[n], 50)
      } catch {}
    }
    save() {
      try {
        return localStorage.setItem(u, JSON.stringify({
          alerts: this.alerts,
          artOpacity: this.artOpacity,
          colorblindMode: this.colorblindMode,
          colorblindStrength: this.colorblindStrength,
          oldUi: this.oldUi,
          nativeCursor: this.nativeCursor,
          showHotspots: this.showHotspots,
          showAllianceHqPins: this.showAllianceHqPins,
          sounds: this.sounds
        })), !0
      } catch {
        return !1
      }
    }
  };
export {
  c as i, x as n, o as r, l as t
};