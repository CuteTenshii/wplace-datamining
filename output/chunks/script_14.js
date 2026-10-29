import {
  Ft as e,
  Lt as t,
  Nt as n,
  Vt as r,
  Wt as i,
  pt as a
} from "./DXDHrD2o.js";
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
  x = new WeakMap,
  S = new class {
    get alerts() {
      return a(r(f, this))
    }
    set alerts(t) {
      e(r(f, this), t, !0)
    }
    get artOpacity() {
      return a(r(p, this))
    }
    set artOpacity(t) {
      e(r(p, this), t, !0)
    }
    get colorblindMode() {
      return a(r(m, this))
    }
    set colorblindMode(t) {
      e(r(m, this), t, !0)
    }
    get colorblindStrength() {
      return a(r(h, this))
    }
    set colorblindStrength(t) {
      e(r(h, this), t, !0)
    }
    get oldUi() {
      return a(r(g, this))
    }
    set oldUi(t) {
      e(r(g, this), t, !0)
    }
    get nativeCursor() {
      return a(r(_, this))
    }
    set nativeCursor(t) {
      e(r(_, this), t, !0), document.documentElement.toggleAttribute(`data-native-cursor`, t)
    }
    get showStoreWhilePainting() {
      return a(r(v, this))
    }
    set showStoreWhilePainting(t) {
      e(r(v, this), t, !0)
    }
    get showHotspots() {
      return a(r(y, this))
    }
    set showHotspots(t) {
      e(r(y, this), t, !0)
    }
    get showAllianceHqPins() {
      return a(r(b, this))
    }
    set showAllianceHqPins(t) {
      e(r(b, this), t, !0)
    }
    get sounds() {
      return a(r(x, this))
    }
    set sounds(t) {
      e(r(x, this), t, !0)
    }
    constructor() {
      i(this, f, t(n({
        charges: !0,
        events: !0,
        updates: !0
      }))), i(this, p, t(100)), i(this, m, t(`none`)), i(this, h, t(100)), i(this, g, t(!1)), i(this, _, t(!1)), i(this, v, t(!0)), i(this, y, t(!0)), i(this, b, t(!0)), i(this, x, t(n(Object.fromEntries(l.map(e => [e, 50]))))), this.nativeCursor = !1;
      try {
        var e;
        let t = JSON.parse(localStorage.getItem(u) ?? `{}`);
        if (!t || typeof t != `object`) return;
        for (let e of [`charges`, `events`, `updates`]) {
          var r;
          typeof((r = t.alerts) == null ? void 0 : r[e]) == `boolean` && (this.alerts[e] = t.alerts[e])
        }
        this.artOpacity = d(t.artOpacity, 100), o.includes(t.colorblindMode) && (this.colorblindMode = t.colorblindMode), this.colorblindStrength = d(t.colorblindStrength, 100), typeof t.oldUi == `boolean` && (this.oldUi = t.oldUi), typeof t.nativeCursor == `boolean` && (this.nativeCursor = t.nativeCursor), typeof t.showStoreWhilePainting == `boolean` && (this.showStoreWhilePainting = t.showStoreWhilePainting), typeof t.showHotspots == `boolean` && (this.showHotspots = t.showHotspots), typeof t.showAllianceHqPins == `boolean` && (this.showAllianceHqPins = t.showAllianceHqPins);
        for (let n of l) this.sounds[n] = d((e = t.sounds) == null ? void 0 : e[n], 50)
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
          showStoreWhilePainting: this.showStoreWhilePainting,
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
  c as i, S as n, o as r, l as t
};