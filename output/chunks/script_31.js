import {
  $ as e,
  At as t,
  Et as n,
  G as r,
  It as i,
  Mt as a,
  Ot as o,
  X as s,
  Z as c,
  a as l,
  an as u,
  lt as d,
  o as f,
  y as p,
  zt as m
} from "./CX37corp.js";
import "./B8UK1oE5.js";
import {
  M as h,
  l as g,
  u as _
} from "./KKBJjshp.js";
var v = `template-overlays`;

function y(e) {
  return typeof e == `object` && !!e
}

function b(e) {
  return typeof e == `number` && Number.isFinite(e)
}

function x(e) {
  return e === `compuphase` || e === `ciede2000` ? e : `lab`
}

function S(e) {
  if (e === `all` || e === `free` || e === `template` || e === `unlocked`) return e
}

function C(e) {
  if (!Array.isArray(e)) return;
  let t = new Uint8Array(h.colors.length),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    typeof i != `number` || !Number.isInteger(i) || i <= 0 || i >= h.colors.length || t[i] !== 0 || (t[i] = 1, n.push(i))
  }
  return n.length > 0 ? n : void 0
}

function w(e) {
  if (!y(e)) return null;
  let t = e.north,
    n = e.south,
    r = e.west,
    i = e.east;
  return !b(t) || !b(n) || !b(r) || !b(i) ? null : {
    north: t,
    south: n,
    west: r,
    east: i
  }
}

function T(e) {
  if (!y(e)) return null;
  let t = e.id,
    n = e.name,
    r = w(e.bounds),
    i = e.originalWidth,
    a = e.originalHeight,
    o = e.opacity,
    s = e.visible,
    c = e.order;
  return typeof t != `string` || t.length === 0 || typeof n != `string` || !r || !b(i) || !b(a) || !b(o) || !b(c) || typeof s != `boolean` ? null : {
    id: t,
    name: n,
    bounds: r,
    originalWidth: i,
    originalHeight: a,
    opacity: o,
    visible: s,
    locked: typeof e.locked == `boolean` && e.locked,
    colorMetric: x(e.colorMetric),
    dithering: typeof e.dithering == `boolean` && e.dithering,
    useLegacyColors: e.useLegacyColors === !0,
    colorPaletteMode: S(e.colorPaletteMode),
    templateColorIdxs: C(e.templateColorIdxs),
    order: c,
    hasPlaced: typeof e.hasPlaced != `boolean` || e.hasPlaced,
    updatedAt: b(e.updatedAt) ? e.updatedAt : Date.now()
  }
}

function E(e) {
  let t = JSON.parse(e);
  if (!Array.isArray(t)) return null;
  let n = [];
  for (let e = 0; e < t.length; e++) {
    let r = T(t[e]);
    r && n.push(r)
  }
  return n
}
var D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new class {
    get templates() {
      return d(i(D, this))
    }
    set templates(e) {
      t(i(D, this), e, !0)
    }
    get activeTemplateId() {
      return d(i(O, this))
    }
    set activeTemplateId(e) {
      t(i(O, this), e, !0)
    }
    get placementSession() {
      return d(i(k, this))
    }
    set placementSession(e) {
      t(i(k, this), e, !0)
    }
    subscribeChange(e) {
      return this.changeListeners.add(e), () => this.changeListeners.delete(e)
    }
    emitChange(e) {
      for (let t of this.changeListeners) try {
        t(e)
      } catch (e) {
        console.error(`Overlay change listener failed.`, e)
      }
    }
    constructor() {
      m(this, D, a(o([]))), m(this, O, a(null)), m(this, k, a(!1)), u(this, `suppressPersist`, !1), u(this, `persistTimeout`, null), u(this, `changeListeners`, new Set), u(this, `flushPersist`, () => {
        this.suppressPersist || (this.persistTimeout !== null && (window.clearTimeout(this.persistTimeout), this.persistTimeout = null), localStorage.setItem(v, JSON.stringify(this.templates.filter(e => !e.serverManaged))))
      });
      {
        let e = localStorage.getItem(v);
        if (e) try {
          let t = E(e);
          if (!t) {
            localStorage.removeItem(v);
            return
          }
          this.templates = t
        } catch {
          localStorage.removeItem(v)
        }
        window.addEventListener(`pagehide`, this.flushPersist)
      }
    }
    persist() {
      this.suppressPersist || (this.persistTimeout !== null && window.clearTimeout(this.persistTimeout), this.persistTimeout = window.setTimeout(this.flushPersist, 120))
    }
    commitPendingChanges() {
      this.suppressPersist = !1, this.persistTimeout !== null && (window.clearTimeout(this.persistTimeout), this.persistTimeout = null), localStorage.setItem(v, JSON.stringify(this.templates.filter(e => !e.serverManaged)))
    }
    replaceServerManaged(e) {
      let t = this.templates.filter(e => e.serverManaged);
      if (t.length === 0 && e.length === 0) return;
      let n = new Set(e.map(e => e.id));
      this.templates = [...this.templates.filter(e => !e.serverManaged), ...e], this.activeTemplateId && t.some(e => e.id === this.activeTemplateId) && !n.has(this.activeTemplateId) && (this.activeTemplateId = null)
    }
    add(e) {
      for (let e of this.templates) e.order++;
      e.order = 0, b(e.updatedAt) || (e.updatedAt = Date.now()), this.templates.push(e), this.persist(), this.emitChange({
        kind: `add`,
        id: e.id
      })
    }
    remove(e) {
      let t = this.templates.some(t => t.id === e);
      this.templates = this.templates.filter(t => t.id !== e), this.activeTemplateId === e && (this.activeTemplateId = null), this.persist(), t && this.emitChange({
        kind: `remove`,
        id: e
      })
    }
    update(e, t) {
      let n = this.templates.findIndex(t => t.id === e);
      if (n === -1) return;
      let r = t.updatedAt === void 0 ? {
        ...t,
        updatedAt: Date.now()
      } : t;
      Object.assign(this.templates[n], r), !this.templates[n].serverManaged && (this.persist(), this.emitChange({
        kind: `update`,
        id: e
      }))
    }
    reorder(e, t) {
      if (e < 0 || e >= this.templates.length || t < 0 || t >= this.templates.length) return;
      let n = this.sorted,
        [r] = n.splice(e, 1);
      n.splice(t, 0, r);
      for (let e = 0; e < n.length; e++) {
        let t = this.templates.findIndex(t => t.id === n[e].id);
        t !== -1 && (this.templates[t].order = e)
      }
      this.persist()
    }
    getById(e) {
      return this.templates.find(t => t.id === e)
    }
    get sorted() {
      return Array.isArray(this.templates) ? [...this.templates].sort((e, t) => e.order - t.order) : []
    }
  },
  j;
(function(e) {
  async function t(e) {
    return {
      ...e,
      image: {
        dataUrl: await g(e.image.data),
        width: e.image.width,
        height: e.image.height
      }
    }
  }
  e.toJson = t;
  async function n(e, t) {
    return {
      ...e,
      image: {
        data: _(e.image.dataUrl),
        width: e.image.width,
        height: e.image.height
      },
      order: t
    }
  }
  e.fromJson = n
})(j || (j = {}));
var M = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  N = e(`<svg><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Z"></path></svg>`),
  P = e(`<svg><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z"></path></svg>`);

function F(e, t) {
  let i = l(t, `filled`, 3, !1),
    a = f(t, M);
  var o = c(),
    u = n(o),
    d = e => {
      var t = N();
      p(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...a
      })), s(e, t)
    },
    m = e => {
      var t = P();
      p(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...a
      })), s(e, t)
    };
  r(u, e => {
    i() ? e(d) : e(m, -1)
  }), s(e, o)
}
export {
  j as n, A as r, F as t
};