import {
  Ft as e,
  Lt as t,
  Nt as n,
  Vt as r,
  Wt as i,
  pt as a,
  un as o
} from "./DXDHrD2o.js";
import {
  W as s,
  a as c,
  o as l
} from "./BiTo61FT.js";

function u(e, t) {
  if (!(e === void 0 && !t.startsWith(`personal-hq:`))) {
    if (!m(e) || e.type !== `headquarters` || t !== `personal-hq:${e.userId}:${e.allianceId}:${e.overlayId}` || !Number.isSafeInteger(e.userId) || e.userId <= 0 || !Number.isSafeInteger(e.allianceId) || e.allianceId <= 0 || !Number.isSafeInteger(e.overlayId) || e.overlayId >= 0 || !Number.isSafeInteger(e.originX) || !Number.isSafeInteger(e.originY) || typeof e.imageRevision != `string` || !Number.isSafeInteger(e.revision) || ![`normal`, `center`, `diagonal`].includes(String(e.pixelMode))) throw Error(`Invalid overlay canvas.`);
    return {
      type: `headquarters`,
      userId: e.userId,
      allianceId: e.allianceId,
      overlayId: e.overlayId,
      originX: e.originX,
      originY: e.originY,
      imageRevision: e.imageRevision,
      revision: e.revision,
      pixelMode: e.pixelMode
    }
  }
}
var d = [7, 8, 9, 12, 15, 18, 19, 21, 23, 24, 26, 27, 30, 31, 34, 39, 42, 43, 45, 48, 50, 52, 54, 55, 57, 59, 62],
  f = `template-overlays`,
  p = `overlay-tag-catalog`;

function m(e) {
  return typeof e == `object` && !!e
}

function h(e) {
  return typeof e == `number` && Number.isFinite(e)
}

function g(e) {
  return e === `compuphase` || e === `ciede2000` ? e : `lab`
}

function _(e) {
  if (e === `all` || e === `free` || e === `template` || e === `unlocked`) return e
}

function v(e) {
  if (!Array.isArray(e)) return;
  let t = new Uint8Array(s.colors.length),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    typeof i != `number` || !Number.isInteger(i) || i <= 0 || i >= s.colors.length || t[i] !== 0 || (t[i] = 1, n.push(i))
  }
  return n.length > 0 ? n : void 0
}

function y(e) {
  return e.normalize(`NFC`).toLowerCase()
}

function b(e) {
  let t = 2166136261;
  for (let n of y(e)) t ^= n.codePointAt(0) ?? 0, t = Math.imul(t, 16777619);
  return d[(t >>> 0) % d.length]
}

function x(e, t) {
  return typeof e == `number` && Number.isInteger(e) && e > 0 && e < s.colors.length ? e : b(t)
}

function S(e, t = []) {
  let n = [],
    r = (e, t) => {
      if (typeof e != `string` || n.length >= 64) return;
      let r = C(e);
      !r || n.some(e => y(e.name) === y(r)) || n.push({
        name: r,
        colorIdx: x(t, r)
      })
    };
  if (Array.isArray(e))
    for (let t of e) m(t) && r(t.name, t.colorIdx);
  for (let e of t) {
    let t = e.tags ?? [];
    for (let n = 0; n < t.length; n += 1) {
      var i;
      r(t[n], (i = e.tagColorIdxs) == null ? void 0 : i[n])
    }
  }
  return n
}

function C(e) {
  let t = e.normalize(`NFC`).trim().replace(/^(?:#\s*)+/, ``).replace(/\s+/g, `-`).slice(0, 24);
  return /[\uD800-\uDBFF]$/.test(t) ? t.slice(0, -1) : t
}

function w(e) {
  if (!Array.isArray(e)) return [];
  let t = [];
  for (let n of e) {
    if (typeof n != `string`) continue;
    let e = C(n);
    if (!(!e || t.some(t => y(t) === y(e))) && (t.push(e), t.length === 8)) break
  }
  return t
}

function T(e, t) {
  if (!Array.isArray(e)) return {
    tags: [],
    tagColorIdxs: []
  };
  let n = Array.isArray(t) ? t : [],
    r = [],
    i = [];
  for (let t = 0; t < e.length; t += 1) {
    let a = e[t];
    if (typeof a != `string`) continue;
    let o = C(a);
    if (!(!o || r.some(e => y(e) === y(o))) && (r.push(o), i.push(x(n[t], o)), r.length === 8)) break
  }
  return {
    tags: r,
    tagColorIdxs: i
  }
}

function E(e) {
  if (!m(e)) return null;
  let t = e.north,
    n = e.south,
    r = e.west,
    i = e.east;
  return !h(t) || !h(n) || !h(r) || !h(i) ? null : {
    north: t,
    south: n,
    west: r,
    east: i
  }
}

function D(e, t) {
  if (!m(e)) return null;
  let n = e.id,
    r = e.name,
    i = E(e.bounds),
    a = e.originalWidth,
    o = e.originalHeight,
    s = e.opacity,
    c = e.visible,
    l = e.order;
  if (typeof n != `string` || n.length === 0 || typeof r != `string` || !i || !h(a) || !h(o) || !h(s) || !h(l) || typeof c != `boolean`) return null;
  let d = typeof e.locked == `boolean` && e.locked,
    f = g(e.colorMetric),
    p = typeof e.dithering == `boolean` && e.dithering,
    y = e.useLegacyColors === !0,
    b = _(e.colorPaletteMode),
    x = v(e.templateColorIdxs),
    {
      tags: S,
      tagColorIdxs: C
    } = T(e.tags, e.tagColorIdxs),
    w = typeof e.hasPlaced != `boolean` || e.hasPlaced,
    D = h(e.updatedAt) ? e.updatedAt : t;
  return {
    id: n,
    name: r,
    bounds: i,
    originalWidth: a,
    originalHeight: o,
    opacity: s,
    visible: c,
    locked: d,
    colorMetric: f,
    dithering: p,
    useLegacyColors: y,
    colorPaletteMode: b,
    templateColorIdxs: x,
    tags: S.length > 0 ? S : void 0,
    tagColorIdxs: C.length > 0 ? C : void 0,
    order: l,
    hasPlaced: w,
    updatedAt: D,
    canvas: u(e.canvas, n)
  }
}

function O(e, t = Date.now()) {
  let n = JSON.parse(e);
  if (!Array.isArray(n)) return null;
  let r = [];
  for (let e = 0; e < n.length; e++) try {
    let i = D(n[e], t);
    i && r.push(i)
  } catch {}
  let i = JSON.stringify(r);
  return {
    templates: r,
    serialized: i,
    migrated: i !== e
  }
}
var k = new WeakMap,
  A = new WeakMap,
  j = new WeakMap,
  M = new WeakMap,
  N = new class {
    get templates() {
      return a(r(k, this))
    }
    set templates(t) {
      e(r(k, this), t, !0)
    }
    get tagCatalog() {
      return a(r(A, this))
    }
    set tagCatalog(t) {
      e(r(A, this), t, !0)
    }
    get activeTemplateId() {
      return a(r(j, this))
    }
    set activeTemplateId(t) {
      e(r(j, this), t, !0)
    }
    get placementSession() {
      return a(r(M, this))
    }
    set placementSession(t) {
      e(r(M, this), t, !0)
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
      i(this, k, t(n([]))), i(this, A, t(n([]))), i(this, j, t(null)), i(this, M, t(!1)), o(this, `suppressPersist`, !1), o(this, `persistTimeout`, null), o(this, `changeListeners`, new Set), o(this, `flushPersist`, () => {
        this.suppressPersist || (this.persistTimeout !== null && (window.clearTimeout(this.persistTimeout), this.persistTimeout = null), localStorage.setItem(f, JSON.stringify(this.templates.filter(e => !e.serverManaged))), localStorage.setItem(p, JSON.stringify(this.tagCatalog)))
      });
      {
        let e = localStorage.getItem(f);
        if (e) try {
          let t = O(e);
          if (!t) {
            localStorage.removeItem(f);
            return
          }
          if (this.templates = t.templates, t.migrated) try {
            localStorage.setItem(f, t.serialized)
          } catch (e) {
            console.error(`Failed to persist migrated overlay metadata.`, e)
          }
        } catch {
          localStorage.removeItem(f)
        }
        let t = localStorage.getItem(p),
          n = [];
        if (t) try {
          n = JSON.parse(t)
        } catch {
          localStorage.removeItem(p)
        }
        this.tagCatalog = S(n, this.templates), this.alignTemplateTagColors();
        try {
          localStorage.setItem(p, JSON.stringify(this.tagCatalog))
        } catch (e) {
          console.error(`Failed to persist the overlay tag catalog.`, e)
        }
        window.addEventListener(`pagehide`, this.flushPersist)
      }
    }
    alignTemplateTagColors(e) {
      let t = e ? [e] : this.templates;
      for (let e of t) {
        var n;
        (n = e.tags) != null && n.length && (e.tagColorIdxs = e.tags.map(e => {
          var t;
          return ((t = this.tagCatalog.find(t => y(t.name) === y(e))) == null ? void 0 : t.colorIdx) ?? b(e)
        }))
      }
    }
    ensureTemplateTags(e) {
      let t = S(this.tagCatalog, [e]);
      t.length !== this.tagCatalog.length && (this.tagCatalog = t), this.alignTemplateTagColors(e)
    }
    persist() {
      this.suppressPersist || (this.persistTimeout !== null && window.clearTimeout(this.persistTimeout), this.persistTimeout = window.setTimeout(this.flushPersist, 120))
    }
    commitPendingChanges() {
      this.suppressPersist = !1, this.persistTimeout !== null && (window.clearTimeout(this.persistTimeout), this.persistTimeout = null), localStorage.setItem(f, JSON.stringify(this.templates.filter(e => !e.serverManaged))), localStorage.setItem(p, JSON.stringify(this.tagCatalog))
    }
    replaceServerManaged(e) {
      let t = this.templates.filter(e => e.serverManaged);
      if (t.length === 0 && e.length === 0) return;
      let n = new Set(e.map(e => e.id));
      this.templates = [...this.templates.filter(e => !e.serverManaged), ...e], this.activeTemplateId && t.some(e => e.id === this.activeTemplateId) && !n.has(this.activeTemplateId) && (this.activeTemplateId = null)
    }
    add(e) {
      this.ensureTemplateTags(e);
      for (let e of this.templates) e.order++;
      e.order = 0, h(e.updatedAt) || (e.updatedAt = Date.now()), this.templates.push(e), this.persist(), this.emitChange({
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
      Object.assign(this.templates[n], r), (t.tags !== void 0 || t.tagColorIdxs !== void 0) && this.ensureTemplateTags(this.templates[n]), !this.templates[n].serverManaged && (this.persist(), this.emitChange({
        kind: `update`,
        id: e
      }))
    }
    createTag(e, t) {
      let n = C(e);
      return !n || this.tagCatalog.length >= 64 || this.tagCatalog.some(e => y(e.name) === y(n)) ? !1 : (this.tagCatalog = [...this.tagCatalog, {
        name: n,
        colorIdx: x(t, n)
      }], this.persist(), !0)
    }
    updateTag(e, t, n) {
      let r = y(e),
        i = this.tagCatalog.findIndex(e => y(e.name) === r),
        a = C(t);
      if (i === -1 || !a || this.tagCatalog.some((e, t) => t !== i && y(e.name) === y(a))) return !1;
      let o = x(n, a),
        s = Date.now();
      for (let e of this.templates) {
        var c;
        e.serverManaged || !((c = e.tags) != null && c.some(e => y(e) === r)) || (e.tags = e.tags.map(e => y(e) === r ? a : e), e.tagColorIdxs = e.tags.map((t, n) => {
          var r;
          return y(t) === y(a) ? o : ((r = e.tagColorIdxs) == null ? void 0 : r[n]) ?? b(t)
        }), e.updatedAt = s, this.emitChange({
          kind: `update`,
          id: e.id
        }))
      }
      return this.tagCatalog[i] = {
        name: a,
        colorIdx: o
      }, this.tagCatalog = [...this.tagCatalog], this.persist(), !0
    }
    deleteTag(e) {
      let t = y(e);
      if (!this.tagCatalog.some(e => y(e.name) === t)) return !1;
      this.tagCatalog = this.tagCatalog.filter(e => y(e.name) !== t);
      let n = Date.now();
      for (let e of this.templates) {
        var r;
        if (e.serverManaged || !((r = e.tags) != null && r.some(e => y(e) === t))) continue;
        let i = e.tags.map((t, n) => {
          var r;
          return {
            tag: t,
            colorIdx: (r = e.tagColorIdxs) == null ? void 0 : r[n]
          }
        }).filter(e => y(e.tag) !== t);
        e.tags = i.length > 0 ? i.map(e => e.tag) : void 0, e.tagColorIdxs = i.length > 0 ? i.map(e => e.colorIdx ?? b(e.tag)) : void 0, e.updatedAt = n, this.emitChange({
          kind: `update`,
          id: e.id
        })
      }
      return this.persist(), !0
    }
    reorder(e, t) {
      let n = this.sorted.filter(e => !e.serverManaged && !e.canvas);
      if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
      let [r] = n.splice(e, 1);
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
  P;
(function(e) {
  async function t(e) {
    return {
      ...e,
      image: {
        dataUrl: await c(e.image.data),
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
        data: l(e.image.dataUrl),
        width: e.image.width,
        height: e.image.height
      },
      order: t
    }
  }
  e.fromJson = n
})(P || (P = {}));
export {
  w as a, u as c, T as i, b as n, N as o, C as r, y as s, P as t
};