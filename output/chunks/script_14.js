import {
  Ft as e,
  Gt as t,
  Ht as n,
  Lt as r,
  Nt as i,
  Ut as a,
  Vt as o,
  Wt as s,
  pt as c
} from "./DXDHrD2o.js";
var l = [`none`, `protanopia`, `deuteranopia`, `tritanopia`],
  u = {
    protanopia: [.152286, 1.052583, -.204868, .114503, .786281, .099216, -.003882, -.048116, 1.051998],
    deuteranopia: [.367322, .860646, -.227968, .280085, .672501, .047413, -.01182, .04294, .968881],
    tritanopia: [1.255528, -.076749, -.178779, -.078411, .930809, .147602, .004733, .691367, .3039]
  };

function d(e, t) {
  let n = Number.isFinite(t) ? Math.min(100, Math.max(0, t)) / 100 : 0,
    r = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  if (e === `none` || n === 0) return r;
  let i = u[e],
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
var f = [`plop`, `smallPlop`, `bigPlop`, `smallDropplet`, `droppletAndPlop`, `notification1`, `playerNotification`, `purchaseSuccess`, `purchaseFail`],
  p = `wplace:settings:v1`,
  m = [`charges`, `events`, `updates`, `patchNotes`, `dismissHint`],
  h = 800;

function g(e, t) {
  return typeof e == `number` && Number.isFinite(e) ? Math.round(Math.min(100, Math.max(0, e))) : t
}
var _ = new WeakMap,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap,
  x = new WeakMap,
  S = new WeakMap,
  C = new WeakMap,
  w = new WeakMap,
  T = new WeakMap,
  E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakMap,
  j = new WeakMap,
  M = new WeakSet,
  N = class {
    get alerts() {
      return c(o(_, this))
    }
    set alerts(t) {
      e(o(_, this), t, !0)
    }
    get artOpacity() {
      return c(o(v, this))
    }
    set artOpacity(t) {
      e(o(v, this), t, !0)
    }
    get colorblindMode() {
      return c(o(y, this))
    }
    set colorblindMode(t) {
      e(o(y, this), t, !0)
    }
    get colorblindStrength() {
      return c(o(b, this))
    }
    set colorblindStrength(t) {
      e(o(b, this), t, !0)
    }
    get oldUi() {
      return c(o(x, this))
    }
    set oldUi(t) {
      e(o(x, this), t, !0)
    }
    get nativeCursor() {
      return c(o(S, this))
    }
    set nativeCursor(t) {
      e(o(S, this), t, !0), document.documentElement.toggleAttribute(`data-native-cursor`, t)
    }
    get showStoreWhilePainting() {
      return c(o(C, this))
    }
    set showStoreWhilePainting(t) {
      e(o(C, this), t, !0)
    }
    get showHotspots() {
      return c(o(w, this))
    }
    set showHotspots(t) {
      e(o(w, this), t, !0)
    }
    get showAllianceHqPins() {
      return c(o(T, this))
    }
    set showAllianceHqPins(t) {
      e(o(T, this), t, !0)
    }
    get sounds() {
      return c(o(E, this))
    }
    set sounds(t) {
      e(o(E, this), t, !0)
    }
    constructor() {
      t(this, M), s(this, _, r(i({
        charges: !0,
        events: !0,
        updates: !0,
        patchNotes: !0,
        dismissHint: !0
      }))), s(this, v, r(100)), s(this, y, r(`none`)), s(this, b, r(100)), s(this, x, r(!1)), s(this, S, r(!1)), s(this, C, r(!0)), s(this, w, r(!0)), s(this, T, r(!0)), s(this, E, r(i(Object.fromEntries(f.map(e => [e, 50]))))), s(this, D, void 0), s(this, O, null), s(this, k, !1), s(this, A, 0), s(this, j, void 0), this.nativeCursor = !1;
      let e = a(M, this, P).call(this);
      e && (a(M, this, F).call(this, e), n(k, this, e.dirty === !0))
    }
    save() {
      var e;
      n(A, this, (e = o(A, this), e++, e)), n(k, this, !0);
      let t = a(M, this, L).call(this);
      return o(O, this) !== null && (clearTimeout(o(j, this)), n(j, this, setTimeout(() => void a(M, this, R).call(this), h))), t
    }
    async useAccount(e, t) {
      if (clearTimeout(o(j, this)), n(O, this, e), n(D, this, t), e === null) return;
      let r = a(M, this, P).call(this),
        i = o(A, this),
        s;
      try {
        s = (await t.getPlayerSettings()).settings
      } catch {
        return
      }
      o(O, this) === e && (o(A, this) !== i || (r == null ? void 0 : r.dirty) === !0 && r.userId === e ? n(k, this, !0) : s && typeof s == `object` ? (a(M, this, F).call(this, s), n(k, this, !1)) : n(k, this, r !== null), a(M, this, L).call(this), await a(M, this, R).call(this))
    }
    start() {
      window.addEventListener(`wplace:online`, () => void a(M, this, R).call(this)), window.addEventListener(`pagehide`, () => void a(M, this, R).call(this, !0))
    }
  };

function P() {
  try {
    let e = JSON.parse(localStorage.getItem(p) ?? `null`);
    return e && typeof e == `object` ? e : null
  } catch {
    return null
  }
}

function F(e) {
  var t, n;
  for (let t of m) {
    var r;
    typeof((r = e.alerts) == null ? void 0 : r[t]) == `boolean` && (this.alerts[t] = e.alerts[t])
  }
  typeof((t = e.alerts) == null ? void 0 : t.patchNotes) != `boolean` && (this.alerts.patchNotes = this.alerts.updates), this.artOpacity = g(e.artOpacity, 100), l.includes(e.colorblindMode) && (this.colorblindMode = e.colorblindMode), this.colorblindStrength = g(e.colorblindStrength, 100), typeof e.oldUi == `boolean` && (this.oldUi = e.oldUi), typeof e.nativeCursor == `boolean` && (this.nativeCursor = e.nativeCursor), typeof e.showStoreWhilePainting == `boolean` && (this.showStoreWhilePainting = e.showStoreWhilePainting), typeof e.showHotspots == `boolean` && (this.showHotspots = e.showHotspots), typeof e.showAllianceHqPins == `boolean` && (this.showAllianceHqPins = e.showAllianceHqPins);
  for (let t of f) this.sounds[t] = g((n = e.sounds) == null ? void 0 : n[t], 50)
}

function I() {
  return {
    alerts: {
      ...this.alerts
    },
    artOpacity: this.artOpacity,
    colorblindMode: this.colorblindMode,
    colorblindStrength: this.colorblindStrength,
    oldUi: this.oldUi,
    nativeCursor: this.nativeCursor,
    showStoreWhilePainting: this.showStoreWhilePainting,
    showHotspots: this.showHotspots,
    showAllianceHqPins: this.showAllianceHqPins,
    sounds: {
      ...this.sounds
    }
  }
}

function L() {
  try {
    return localStorage.setItem(p, JSON.stringify({
      ...a(M, this, I).call(this),
      userId: o(O, this),
      dirty: o(k, this)
    })), !0
  } catch {
    return !1
  }
}
async function R(e = !1) {
  clearTimeout(o(j, this));
  let t = o(O, this);
  if (t === null || !o(k, this) || !o(D, this)) return;
  let r = o(A, this);
  try {
    if (await o(D, this).savePlayerSettings(a(M, this, I).call(this), e), o(O, this) !== t || o(A, this) !== r) return;
    n(k, this, !1), a(M, this, L).call(this)
  } catch {}
}
var z = new N;
z.start();
export {
  d as i, z as n, l as r, f as t
};