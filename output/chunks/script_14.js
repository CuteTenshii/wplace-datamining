const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Dm9i_L6H.js", "./DXDHrD2o.js", "./CyFWViRh.js", "./a7QZC4SB.js", "./DtJdFIA8.js", "./pKOrQQBa.js", "./FnlLczIa.js", "./BrohplP5.js", "./MIjkXV5b.js"]))) => i.map(i => d[i]);
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
import {
  a as l
} from "./CyFWViRh.js";
var u = [`none`, `protanopia`, `deuteranopia`, `tritanopia`],
  d = {
    protanopia: [.152286, 1.052583, -.204868, .114503, .786281, .099216, -.003882, -.048116, 1.051998],
    deuteranopia: [.367322, .860646, -.227968, .280085, .672501, .047413, -.01182, .04294, .968881],
    tritanopia: [1.255528, -.076749, -.178779, -.078411, .930809, .147602, .004733, .691367, .3039]
  };

function f(e, t) {
  let n = Number.isFinite(t) ? Math.min(100, Math.max(0, t)) / 100 : 0,
    r = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  if (e === `none` || n === 0) return r;
  let i = d[e],
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
var p = [`plop`, `smallPlop`, `bigPlop`, `smallDropplet`, `droppletAndPlop`, `notification1`, `playerNotification`, `purchaseSuccess`, `purchaseFail`],
  m = `wplace:settings:v1`,
  h = [`charges`, `events`, `updates`, `patchNotes`, `dismissHint`],
  g = 800;

function _(e, t) {
  return typeof e == `number` && Number.isFinite(e) ? Math.round(Math.min(100, Math.max(0, e))) : t
}
var v = new WeakMap,
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
  M = new WeakMap,
  N = new WeakSet,
  P = class {
    get alerts() {
      return c(o(v, this))
    }
    set alerts(t) {
      e(o(v, this), t, !0)
    }
    get artOpacity() {
      return c(o(y, this))
    }
    set artOpacity(t) {
      e(o(y, this), t, !0)
    }
    get colorblindMode() {
      return c(o(b, this))
    }
    set colorblindMode(t) {
      e(o(b, this), t, !0)
    }
    get colorblindStrength() {
      return c(o(x, this))
    }
    set colorblindStrength(t) {
      e(o(x, this), t, !0)
    }
    get oldUi() {
      return c(o(S, this))
    }
    set oldUi(t) {
      e(o(S, this), t, !0)
    }
    get nativeCursor() {
      return c(o(C, this))
    }
    set nativeCursor(t) {
      e(o(C, this), t, !0), document.documentElement.toggleAttribute(`data-native-cursor`, t)
    }
    get showStoreWhilePainting() {
      return c(o(w, this))
    }
    set showStoreWhilePainting(t) {
      e(o(w, this), t, !0)
    }
    get showHotspots() {
      return c(o(T, this))
    }
    set showHotspots(t) {
      e(o(T, this), t, !0)
    }
    get showAllianceHqPins() {
      return c(o(E, this))
    }
    set showAllianceHqPins(t) {
      e(o(E, this), t, !0)
    }
    get sounds() {
      return c(o(D, this))
    }
    set sounds(t) {
      e(o(D, this), t, !0)
    }
    constructor() {
      t(this, N), s(this, v, r(i({
        charges: !0,
        events: !0,
        updates: !0,
        patchNotes: !0,
        dismissHint: !0
      }))), s(this, y, r(100)), s(this, b, r(`none`)), s(this, x, r(100)), s(this, S, r(!1)), s(this, C, r(!1)), s(this, w, r(!0)), s(this, T, r(!0)), s(this, E, r(!0)), s(this, D, r(i(Object.fromEntries(p.map(e => [e, 50]))))), s(this, O, void 0), s(this, k, null), s(this, A, !1), s(this, j, 0), s(this, M, void 0), this.nativeCursor = !1;
      let e = a(N, this, F).call(this);
      e && (a(N, this, I).call(this, e), n(A, this, e.dirty === !0))
    }
    save() {
      var e;
      n(j, this, (e = o(j, this), e++, e)), n(A, this, !0);
      let t = a(N, this, R).call(this);
      return o(k, this) !== null && (clearTimeout(o(M, this)), n(M, this, setTimeout(() => void a(N, this, z).call(this), g))), t
    }
    async useAccount(e) {
      if (clearTimeout(o(M, this)), n(k, this, e), e === null) return;
      let t = a(N, this, F).call(this),
        r = o(j, this),
        i;
      try {
        o(O, this) ?? n(O, this, (await l(async () => {
          let {
            api: e
          } = await import(`./Dm9i_L6H.js`).then(e => e.n);
          return {
            api: e
          }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url)).api), i = (await o(O, this).getPlayerSettings()).settings
      } catch {
        return
      }
      o(k, this) === e && (o(j, this) !== r || (t == null ? void 0 : t.dirty) === !0 && t.userId === e ? n(A, this, !0) : i && typeof i == `object` ? (a(N, this, I).call(this, i), n(A, this, !1)) : n(A, this, t !== null), a(N, this, R).call(this), await a(N, this, z).call(this))
    }
    start() {
      window.addEventListener(`wplace:online`, () => void a(N, this, z).call(this)), window.addEventListener(`pagehide`, () => void a(N, this, z).call(this, !0))
    }
  };

function F() {
  try {
    let e = JSON.parse(localStorage.getItem(m) ?? `null`);
    return e && typeof e == `object` ? e : null
  } catch {
    return null
  }
}

function I(e) {
  var t, n;
  for (let t of h) {
    var r;
    typeof((r = e.alerts) == null ? void 0 : r[t]) == `boolean` && (this.alerts[t] = e.alerts[t])
  }
  typeof((t = e.alerts) == null ? void 0 : t.patchNotes) != `boolean` && (this.alerts.patchNotes = this.alerts.updates), this.artOpacity = _(e.artOpacity, 100), u.includes(e.colorblindMode) && (this.colorblindMode = e.colorblindMode), this.colorblindStrength = _(e.colorblindStrength, 100), typeof e.oldUi == `boolean` && (this.oldUi = e.oldUi), typeof e.nativeCursor == `boolean` && (this.nativeCursor = e.nativeCursor), typeof e.showStoreWhilePainting == `boolean` && (this.showStoreWhilePainting = e.showStoreWhilePainting), typeof e.showHotspots == `boolean` && (this.showHotspots = e.showHotspots), typeof e.showAllianceHqPins == `boolean` && (this.showAllianceHqPins = e.showAllianceHqPins);
  for (let t of p) this.sounds[t] = _((n = e.sounds) == null ? void 0 : n[t], 50)
}

function L() {
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

function R() {
  try {
    return localStorage.setItem(m, JSON.stringify({
      ...a(N, this, L).call(this),
      userId: o(k, this),
      dirty: o(A, this)
    })), !0
  } catch {
    return !1
  }
}
async function z(e = !1) {
  clearTimeout(o(M, this));
  let t = o(k, this);
  if (t === null || !o(A, this) || !o(O, this)) return;
  let r = o(j, this);
  try {
    if (await o(O, this).savePlayerSettings(a(N, this, L).call(this), e), o(k, this) !== t || o(j, this) !== r) return;
    n(A, this, !1), a(N, this, R).call(this)
  } catch {}
}
var B = new P;
B.start();
export {
  f as i, B as n, u as r, p as t
};