import {
  At as e,
  It as t,
  Mt as n,
  Ot as r,
  lt as i,
  zt as a
} from "./R3px7NU1.js";
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
      return i(t(f, this))
    }
    set alerts(n) {
      e(t(f, this), n, !0)
    }
    get artOpacity() {
      return i(t(p, this))
    }
    set artOpacity(n) {
      e(t(p, this), n, !0)
    }
    get colorblindMode() {
      return i(t(m, this))
    }
    set colorblindMode(n) {
      e(t(m, this), n, !0)
    }
    get colorblindStrength() {
      return i(t(h, this))
    }
    set colorblindStrength(n) {
      e(t(h, this), n, !0)
    }
    get oldUi() {
      return i(t(g, this))
    }
    set oldUi(n) {
      e(t(g, this), n, !0)
    }
    get nativeCursor() {
      return i(t(_, this))
    }
    set nativeCursor(n) {
      e(t(_, this), n, !0), document.documentElement.toggleAttribute(`data-native-cursor`, n)
    }
    get showStoreWhilePainting() {
      return i(t(v, this))
    }
    set showStoreWhilePainting(n) {
      e(t(v, this), n, !0)
    }
    get showHotspots() {
      return i(t(y, this))
    }
    set showHotspots(n) {
      e(t(y, this), n, !0)
    }
    get showAllianceHqPins() {
      return i(t(b, this))
    }
    set showAllianceHqPins(n) {
      e(t(b, this), n, !0)
    }
    get sounds() {
      return i(t(x, this))
    }
    set sounds(n) {
      e(t(x, this), n, !0)
    }
    constructor() {
      a(this, f, n(r({
        charges: !0,
        events: !0,
        updates: !0
      }))), a(this, p, n(100)), a(this, m, n(`none`)), a(this, h, n(100)), a(this, g, n(!1)), a(this, _, n(!1)), a(this, v, n(!0)), a(this, y, n(!0)), a(this, b, n(!0)), a(this, x, n(r(Object.fromEntries(l.map(e => [e, 50]))))), this.nativeCursor = !1;
      try {
        var e;
        let n = JSON.parse(localStorage.getItem(u) ?? `{}`);
        if (!n || typeof n != `object`) return;
        for (let e of [`charges`, `events`, `updates`]) {
          var t;
          typeof((t = n.alerts) == null ? void 0 : t[e]) == `boolean` && (this.alerts[e] = n.alerts[e])
        }
        this.artOpacity = d(n.artOpacity, 100), o.includes(n.colorblindMode) && (this.colorblindMode = n.colorblindMode), this.colorblindStrength = d(n.colorblindStrength, 100), typeof n.oldUi == `boolean` && (this.oldUi = n.oldUi), typeof n.nativeCursor == `boolean` && (this.nativeCursor = n.nativeCursor), typeof n.showStoreWhilePainting == `boolean` && (this.showStoreWhilePainting = n.showStoreWhilePainting), typeof n.showHotspots == `boolean` && (this.showHotspots = n.showHotspots), typeof n.showAllianceHqPins == `boolean` && (this.showAllianceHqPins = n.showAllianceHqPins);
        for (let t of l) this.sounds[t] = d((e = n.sounds) == null ? void 0 : e[t], 50)
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