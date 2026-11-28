import {
  Bt as e,
  Ft as t,
  Lt as n,
  Nt as r,
  Vt as i,
  Wt as a,
  pt as o,
  un as s,
  wt as c,
  xt as l
} from "./DXDHrD2o.js";
import {
  n as ee
} from "./BFn3PD48.js";
import {
  t as te
} from "./8HR2Zb1u.js";
import {
  t as u
} from "./Oa2KIPWU.js";
import {
  F as ne,
  H as d,
  qt as f,
  wt as re,
  xt as p
} from "./A7V6N8We.js";
import {
  t as ie
} from "./DFpoEB9G.js";
import {
  o as ae
} from "./Ba3MSsmk.js";
import {
  t as oe
} from "./O8RStsDP.js";
var se = [u.territory_team_blue, u.territory_team_orange, u.territory_team_green, u.territory_team_purple],
  ce = e => se[e](),
  le = [u.territory_ordinal_1, u.territory_ordinal_2, u.territory_ordinal_3, u.territory_ordinal_4],
  ue = e => le[e](),
  m = () => te(ee()),
  de = e => e.toLocaleString(m()),
  fe = (e, t = 2) => e.toLocaleString(m(), {
    notation: `compact`,
    maximumFractionDigits: t
  }),
  pe = e => new Intl.ListFormat(m(), {
    type: `conjunction`
  }).format(e),
  h = d.territory,
  g = ne,
  _ = Date.parse(h.startsAt),
  v = _ + h.hours * p.hour,
  y = h.scoreMinutes * p.minute;
h.hours * p.hour / y;
var b = h.broadcastMs,
  x = d.seasons[g].tileSize,
  S = h.arena.size,
  C = {
    x: h.arena.tileX * x,
    y: h.arena.tileY * x
  },
  w = h.teams.map((e, t) => {
    let [n, r] = [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1]
    ][t], i = S - h.homeSize;
    return {
      x: n * i,
      y: r * i,
      width: h.homeSize,
      height: h.homeSize
    }
  });

function me(e, t) {
  let n = e - C.x,
    r = t - C.y;
  return n >= 0 && r >= 0 && n < S && r < S ? {
    x: n,
    y: r
  } : null
}

function T(e, t) {
  return w.findIndex(n => e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height)
}
var E = new ie(x),
  D = d.seasons[g].zoom;

function he(e, t) {
  let [n, r] = E.latLonToPixels(e, t, D), i = me(Math.floor(n), Math.floor(r));
  return i ? T(i.x, i.y) : -1
}

function ge({
  x: e,
  y: t,
  width: n,
  height: r
}) {
  return [
    [e, t],
    [e + n, t],
    [e + n, t + r],
    [e, t + r]
  ].map(([e, t]) => {
    let [n, r] = E.pixelsToLatLon(C.x + e, C.y + t, D);
    return [r, n]
  })
}
var _e = (e, t) => 1 + e * 3 + t,
  O = e => e === 0 ? -1 : Math.floor((e - 1) / 3),
  ve = e => e !== 0 && (e - 1) % 3 == 2;

function ye(e) {
  let {
    color: t,
    dark: n
  } = h.teams[e];
  return [n, t]
}

function be(e) {
  let [t, n, r] = d.colors[e].rgb;
  return ae({
    r: t,
    g: n,
    b: r
  })
}
var k = [
  [0, 0, 0, 0], ...h.teams.flatMap(e => {
    let [t, n] = [e.dark, e.color].map(e => d.colors[e].rgb);
    return [
      [...t, 255],
      [...n, 255],
      [...t, 255]
    ]
  })
];

function A(e) {
  let t = Math.floor((e - _) / p.day);
  return Math.max(0, Math.min(t, h.dayMultipliers.length - 1))
}

function xe(e) {
  return h.dayMultipliers[A(e)]
}

function Se(e, t) {
  let {
    pixelsPerDroplet: n,
    teamMultipliers: r
  } = h.droplets;
  return Math.floor(e / n * r[t])
}

function Ce(e) {
  return e >= v ? null : e < _ ? _ + y : _ + (Math.floor((e - _) / y) + 1) * y
}

function we(e, t, n, {
  max: r,
  cooldownMs: i
}) {
  if (e >= r) return {
    value: r,
    nextIn: null
  };
  let a = Math.floor((n - t) / i),
    o = Math.min(r, e + a);
  return {
    value: o,
    nextIn: o >= r ? null : i - (n - t) % i
  }
}

function Te(e) {
  let t = new DataView(e),
    n = t.getUint32(0, !0),
    r = t.getUint32(4, !0),
    i = t.getFloat64(8, !0),
    a = [],
    o = null,
    s = 16;
  for (let e = 0; e < r; e++) {
    let r = i - t.getUint16(s, !0);
    if (s += 2, t.getUint8(s) === 0) {
      let i = t.getUint16(s + 1, !0),
        c = t.getUint16(s + 3, !0);
      a.push({
        kind: `pixel`,
        seq: n + e,
        at: r,
        x: i,
        y: c,
        code: t.getUint8(s + 5)
      }), o = {
        x: i,
        y: c
      }, s += 6;
      continue
    }
    let c = {
        kind: `fill`,
        seq: n + e,
        at: r,
        code: t.getUint8(s + 1),
        origin: o,
        spans: [],
        count: 0,
        x0: S,
        y0: S,
        x1: -1,
        y1: -1
      },
      l = t.getUint32(s + 2, !0);
    s += 6;
    for (let e = 0; e < l; e++, s += 6) {
      let e = t.getUint16(s, !0),
        n = t.getUint16(s + 2, !0),
        r = t.getUint16(s + 4, !0);
      c.spans.push(e, n, r), c.count += r, c.x0 = Math.min(c.x0, n), c.y0 = Math.min(c.y0, e), c.x1 = Math.max(c.x1, n + r - 1), c.y1 = Math.max(c.y1, e)
    }
    a.push(c), o = null
  }
  return {
    first: n,
    sentAt: i,
    events: a
  }
}

function j(e, t, n) {
  if (t.kind === `pixel`) {
    let r = t.y * S + t.x;
    e[r] = t.code, n == null || n.push(r);
    return
  }
  for (let r = 0; r < t.spans.length; r += 3) {
    let i = t.spans[r] * S + t.spans[r + 1];
    if (e.fill(t.code, i, i + t.spans[r + 2]), n)
      for (let e = i; e < i + t.spans[r + 2]; e++) n.push(e)
  }
}
var M = 1e5,
  N = Int8Array.from({
    length: 256
  }, (e, t) => O(t)),
  Ee = 3e3,
  De = class {
    constructor() {
      s(this, `cells`, new Uint8Array(S * S)), s(this, `shown`, new Uint8Array(S * S)), s(this, `linked`, new Uint8Array(S * S)), s(this, `prevLinked`, new Uint8Array(S * S)), s(this, `relinked`, []), s(this, `stale`, !0), s(this, `relinkedAt`, -1 / 0), s(this, `queue`, new Int32Array(S * S)), s(this, `home`, new Uint8Array(S * S)), w.forEach((e, t) => {
        for (let n = e.y; n < e.y + e.height; n++) this.home.fill(t + 1, n * S + e.x, n * S + e.x + e.width)
      })
    }
    teamBounds(e) {
      let [t, n, r, i] = [S, S, -1, -1];
      for (let a = 0; a < this.cells.length; a++) {
        if (O(this.cells[a]) !== e) continue;
        let o = a % S,
          s = (a - o) / S;
        o < t && (t = o), o > r && (r = o), s < n && (n = s), i = s
      }
      return r < 0 ? w[e] : {
        x: t,
        y: n,
        width: r - t + 1,
        height: i - n + 1
      }
    }
    load(e) {
      this.cells.set(e), this.shown.set(e), this.stale = !0
    }
    apply(e) {
      if (this.stale || this.cutsLink(e)) {
        j(this.cells, e), this.stale = !0;
        return
      }
      j(this.cells, e), this.extend(e)
    }
    cutsLink(e) {
      let {
        cells: t,
        linked: n
      } = this, r = N[e.code], i = e => n[e] === 1 && N[t[e]] !== r;
      if (e.kind === `pixel`) return i(e.y * S + e.x);
      for (let t = 0; t < e.spans.length; t += 3) {
        let n = e.spans[t] * S + e.spans[t + 1];
        for (let r = n; r < n + e.spans[t + 2]; r++)
          if (i(r)) return !0
      }
      return !1
    }
    extend(e) {
      let {
        cells: t,
        linked: n,
        home: r,
        queue: i
      } = this, a = N[e.code];
      if (a < 0) return;
      let o = 0,
        s = e => {
          if (n[e]) return;
          let s = e % S,
            c = e => n[e] === 1 && N[t[e]] === a;
          (r[e] === a + 1 || s > 0 && c(e - 1) || s < S - 1 && c(e + 1) || e >= S && c(e - S) || e < t.length - S && c(e + S)) && (n[e] = 1, i[o++] = e)
        };
      if (e.kind === `pixel`) s(e.y * S + e.x);
      else
        for (let t = 0; t < e.spans.length; t += 3) {
          let n = e.spans[t] * S + e.spans[t + 1];
          for (let r = n; r < n + e.spans[t + 2]; r++) s(r)
        }
      o && this.spread(o, !0)
    }
    show(e, t) {
      j(this.shown, e, t)
    }
    showAll() {
      this.shown.set(this.cells)
    }
    get needsRelink() {
      return this.stale
    }
    refresh(e = !1) {
      this.stale && (e || performance.now() - this.relinkedAt >= Ee) && this.relink()
    }
    relink() {
      this.stale = !1, this.relinkedAt = performance.now(), [this.linked, this.prevLinked] = [this.prevLinked, this.linked];
      let {
        cells: e,
        linked: t,
        prevLinked: n,
        queue: r
      } = this;
      t.fill(0);
      let i = 0;
      w.forEach((n, a) => {
        for (let o = n.y; o < n.y + n.height; o++)
          for (let s = n.x; s < n.x + n.width; s++) {
            let n = o * S + s;
            N[e[n]] === a && (t[n] = 1, r[i++] = n)
          }
      }), this.spread(i, !1);
      let a = this.relinked;
      if (a) {
        for (let e = 0; e < t.length; e++)
          if (t[e] !== n[e]) {
            if (a.length >= M) {
              this.relinked = null;
              return
            }
            a.push(e)
          }
      }
    }
    spread(e, t) {
      let {
        cells: n,
        linked: r,
        queue: i
      } = this, a = (t, a) => {
        r[t] || N[n[t]] !== a || (r[t] = 1, i[e++] = t)
      };
      for (let r = 0; r < e; r++) {
        let e = i[r];
        t && this.relinked && (this.relinked.length >= M ? this.relinked = null : this.relinked.push(e));
        let o = N[n[e]],
          s = e % S;
        s > 0 && a(e - 1, o), s < S - 1 && a(e + 1, o), e >= S && a(e - S, o), e < n.length - S && a(e + S, o)
      }
    }
    canExpand(e, t, n, r, i) {
      return this.refresh(), this.canExpandAsLinked(e, t, n, r, i)
    }
    canExpandAsLinked(e, t, n, r, i) {
      if (t < 0 || n < 0 || t >= S || n >= S) return !1;
      let a = n * S + t;
      if (N[this.cells[a]] === e || this.home[a] && this.home[a] !== e + 1) return !1;
      let o = t => N[this.cells[t]] === e && (r || this.linked[t] === 1) || !!(i != null && i.has(t));
      return t > 0 && o(a - 1) || t < S - 1 && o(a + 1) || n > 0 && o(a - S) || n < S - 1 && o(a + S)
    }
    expandable(e, t, n, r) {
      r.fill(0);
      let i = [],
        {
          cells: a,
          linked: o,
          home: s
        } = this,
        c = t => {
          r[t] || N[a[t]] === e || s[t] && s[t] !== e + 1 || (r[t] = 1, i.push(t))
        },
        l = e => {
          let t = e % S;
          t > 0 && c(e - 1), t < S - 1 && c(e + 1), e >= S && c(e - S), e < S * (S - 1) && c(e + S)
        };
      for (let n = 0; n < a.length; n++) N[a[n]] === e && (t || o[n]) && l(n);
      for (let e of n) l(e);
      return i
    }
  },
  Oe = 10 * p.second,
  P = oe.PUBLIC_TERRITORY_URL || ``,
  F = 64,
  ke = 100,
  Ae = 1e3,
  je = 5e4;
async function Me(e) {
  let t = await createImageBitmap(e, {
      premultiplyAlpha: `none`,
      colorSpaceConversion: `none`
    }),
    n = document.createElement(`canvas`);
  n.width = S, n.height = S;
  let r = n.getContext(`2d`, {
    willReadFrequently: !0
  });
  r.drawImage(t, 0, 0);
  let i = r.getImageData(0, 0, S, S).data,
    a = new Map(k.map(([e, t, n], r) => [e << 16 | t << 8 | n, r])),
    o = new Uint8Array(S * S);
  for (let e = 0; e < o.length; e++) {
    let t = e * 4;
    i[t + 3] < 128 || (o[e] = a.get(i[t] << 16 | i[t + 1] << 8 | i[t + 2]) ?? Ne(i[t], i[t + 1], i[t + 2]))
  }
  return o
}

function Ne(e, t, n) {
  let r = 0,
    i = 1 / 0;
  for (let a = 1; a < k.length; a++) {
    let [o, s, c] = k[a], l = (e - o) ** 2 + (t - s) ** 2 + (n - c) ** 2;
    l < i && (i = l, r = a)
  }
  return r
}
var I = new WeakMap,
  L = new WeakMap,
  R = new WeakMap,
  z = new WeakMap,
  B = new WeakMap,
  V = new WeakMap,
  H = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakMap,
  X = new WeakMap,
  Z = new WeakMap,
  Q = new WeakMap,
  $ = new WeakMap,
  Pe = new class {
    get me() {
      return o(i(I, this))
    }
    set me(e) {
      t(i(I, this), e, !0)
    }
    get teams() {
      return o(i(L, this))
    }
    set teams(e) {
      t(i(L, this), e, !0)
    }
    get authed() {
      return o(i(R, this))
    }
    set authed(e) {
      t(i(R, this), e, !0)
    }
    get synced() {
      return o(i(z, this))
    }
    set synced(e) {
      t(i(z, this), e, !0)
    }
    get lastTick() {
      return o(i(B, this))
    }
    set lastTick(e) {
      t(i(B, this), e, !0)
    }
    get painting() {
      return o(i(V, this))
    }
    set painting(e) {
      t(i(V, this), e, !0)
    }
    get now() {
      return o(i(H, this))
    }
    set now(e) {
      t(i(H, this), e)
    }
    get started() {
      return o(i(U, this))
    }
    set started(e) {
      t(i(U, this), e)
    }
    get ended() {
      return o(i(W, this))
    }
    set ended(e) {
      t(i(W, this), e)
    }
    get live() {
      return o(i(G, this))
    }
    set live(e) {
      t(i(G, this), e)
    }
    get multiplier() {
      return o(i(K, this))
    }
    set multiplier(e) {
      t(i(K, this), e)
    }
    get day() {
      return o(i(q, this))
    }
    set day(e) {
      t(i(q, this), e)
    }
    get nextScore() {
      return o(i(J, this))
    }
    set nextScore(e) {
      t(i(J, this), e)
    }
    get refillAt() {
      return o(i(Y, this))
    }
    set refillAt(e) {
      t(i(Y, this), e, !0)
    }
    get refillNow() {
      return o(i(X, this))
    }
    set refillNow(e) {
      t(i(X, this), e)
    }
    get charges() {
      return o(i(Z, this))
    }
    set charges(e) {
      t(i(Z, this), e)
    }
    get swaps() {
      return o(i(Q, this))
    }
    set swaps(e) {
      t(i(Q, this), e)
    }
    get ranking() {
      return o(i($, this))
    }
    set ranking(e) {
      t(i($, this), e)
    }
    constructor() {
      a(this, I, n(null)), a(this, L, n(r([]))), a(this, R, n(!1)), a(this, z, n(!1)), a(this, B, n(null)), a(this, V, n(null)), a(this, H, e(() => Math.floor(f.now / p.second) * p.second)), a(this, U, e(() => this.now >= _)), a(this, W, e(() => this.now >= v)), a(this, G, e(() => this.started && !this.ended)), a(this, K, e(() => xe(this.now))), a(this, q, e(() => A(this.now))), a(this, J, e(() => Ce(this.now))), a(this, Y, n(0)), a(this, X, e(() => Math.max(f.now, this.refillAt))), a(this, Z, e(() => this.me ? we(this.me.charges, this.me.chargesAt, this.refillNow, h.charges) : null)), a(this, Q, e(() => this.me ? we(this.me.swaps, this.me.swapsAt, this.refillNow, h.swaps) : null)), a(this, $, e(() => this.teams.map((e, t) => ({
        ...e,
        team: t
      })).sort((e, t) => t.score - e.score || t.land - e.land))), s(this, `board`, new De), s(this, `listeners`, new Set), s(this, `captureListeners`, new Set), s(this, `liveFrom`, 1 / 0), s(this, `replaying`, !1), s(this, `userId`, void 0), s(this, `seq`, 0), s(this, `needSnapshot`, !0), s(this, `snapshotAt`, 0), s(this, `ws`, null), s(this, `watchers`, 0), s(this, `retries`, 0), s(this, `retryTimer`, void 0), s(this, `idleTimer`, void 0), s(this, `nextId`, 1), s(this, `sentAt`, new Map), s(this, `acks`, new Map), s(this, `seqWaiters`, []), s(this, `queue`, []), s(this, `head`, 0), s(this, `shownSeq`, 0), s(this, `playFrame`, void 0), s(this, `lastPlay`, void 0), s(this, `clockSamples`, []), s(this, `clockBase`, 0), s(this, `targetDelay`, b * 3), s(this, `delay`, b * 3), s(this, `pending`, new Set), s(this, `play`, e => {
        this.playFrame = void 0;
        let t = e - (this.lastPlay ?? e);
        this.lastPlay = e, this.delay += (this.targetDelay - this.delay) * Math.min(1, t / p.second);
        let n = e - this.clockBase - this.delay,
          r = [],
          i = !1;
        for (; this.head < this.queue.length && this.queue[this.head].at <= n;) {
          let e = this.queue[this.head++];
          if (this.board.show(e, r), this.shownSeq = e.seq, i || (i = e.seq > this.liveFrom), e.kind === `fill` && e.code !== 0 && e.seq > this.liveFrom)
            for (let t of this.captureListeners) t(e)
        }
        this.head === this.queue.length ? (this.queue = [], this.head = 0) : this.head > 1e4 && (this.queue = this.queue.slice(this.head), this.head = 0), r.length && (this.replaying = !i, this.notify(r), this.replaying = !1), this.queue.length ? this.playFrame = requestAnimationFrame(this.play) : this.lastPlay = void 0
      }), P && l(() => {
        c(() => {
          var e, t;
          let n = (e = re.data) == null ? void 0 : e.id;
          n !== this.userId && (this.userId = n, (t = this.ws) == null || t.close())
        }), c(() => {
          var e, t;
          let n = Math.min(((e = this.charges) == null ? void 0 : e.nextIn) ?? 1 / 0, ((t = this.swaps) == null ? void 0 : t.nextIn) ?? 1 / 0);
          if (n === 1 / 0) return;
          let r = this.refillNow + n,
            i = setTimeout(() => this.refillAt = Date.now(), r - Date.now());
          return () => clearTimeout(i)
        })
      })
    }
    watch() {
      return clearTimeout(this.idleTimer), this.watchers++ === 0 && !this.ws && this.connect(), () => {
        --this.watchers > 0 || (this.idleTimer = setTimeout(() => this.disconnect(), 30 * p.second))
      }
    }
    setPending(e, t) {
      t ? this.pending.add(e) : this.pending.delete(e), this.notify([e])
    }
    clearPending() {
      if (!this.pending.size) return;
      let e = [...this.pending];
      this.pending.clear(), this.notify(e)
    }
    onChange(e) {
      return this.listeners.add(e), () => this.listeners.delete(e)
    }
    onCapture(e) {
      return this.captureListeners.add(e), () => this.captureListeners.delete(e)
    }
    notify(e) {
      for (let t of this.listeners) t(e)
    }
    drawn() {
      this.seqWaiters = this.seqWaiters.filter(e => e.seq > this.shownSeq || (e.resolve(), !1))
    }
    disconnect() {
      clearTimeout(this.retryTimer);
      let e = this.ws;
      this.ws = null, e == null || e.close(), this.synced = !1
    }
    async fetchSnapshot() {
      let e = await fetch(`${P}/snapshot`, {
        cache: `no-store`
      });
      if (!e.ok) throw Error(`snapshot ${e.status}`);
      return {
        seq: Number(e.headers.get(`X-Territory-Seq`)),
        cells: await Me(await e.blob())
      }
    }
    loadSnapshot({
      seq: e,
      cells: t
    }) {
      this.board.load(t), this.queue = [], this.head = 0, this.seq = e, this.shownSeq = e, this.needSnapshot = !1, this.snapshotAt = Date.now(), this.notify(null)
    }
    async peek() {
      if (!(!P || this.ws || Date.now() - this.snapshotAt < 30 * p.second)) {
        this.snapshotAt = Date.now();
        try {
          let e = await this.fetchSnapshot();
          this.ws || this.loadSnapshot(e)
        } catch (e) {
          console.warn(`[territory] snapshot failed`, e)
        }
      }
    }
    async connect() {
      if (!P || this.watchers === 0) return;
      try {
        this.needSnapshot && this.loadSnapshot(await this.fetchSnapshot())
      } catch (e) {
        console.warn(`[territory] snapshot failed`, e), this.scheduleReconnect();
        return
      }
      let e = new WebSocket(`${P.replace(/^http/,`ws`)}/ws?since=${this.seq}`);
      e.binaryType = `arraybuffer`, this.ws = e, e.onmessage = t => {
        this.ws === e && (typeof t.data == `string` ? this.onText(JSON.parse(t.data)) : this.onFrame(t.data))
      }, e.onclose = t => {
        console.info(`[territory] socket closed`, {
          code: t.code,
          reason: t.reason
        });
        for (let {
            reject: e
          }
          of this.acks.values()) e(Error(`disconnected`));
        this.acks.clear(), this.synced = !1, this.ws === e && (this.ws = null, this.scheduleReconnect())
      }
    }
    scheduleReconnect() {
      if (this.watchers === 0) return;
      let e = Math.min(30 * p.second, p.second * 2 ** this.retries++);
      this.retryTimer = setTimeout(() => void this.connect(), e)
    }
    onText(e) {
      switch (e.t) {
        case `hello`:
          this.me = e.me, this.teams = e.teams, this.authed = e.authed, this.liveFrom = e.seq, this.synced = !0, this.retries = 0;
          break;
        case `teams`:
          this.teams = e.teams;
          break;
        case `tick`:
          this.teams = e.teams, this.lastTick = {
            tick: e.tick,
            gains: e.gains,
            at: Date.now()
          };
          break;
        case `resync`:
          this.needSnapshot = !0;
          break;
        case `ack`: {
          var t;
          let n = e;
          (t = this.acks.get(n.id)) == null || t.resolve(n), this.acks.delete(n.id);
          break
        }
      }
    }
    onFrame(e) {
      let {
        first: t,
        sentAt: n,
        events: r
      } = Te(e);
      if (t > this.seq + 1) {
        var i;
        console.info(`[territory] missed events, reloading the canvas`, {
          have: this.seq,
          got: t
        }), this.needSnapshot = !0, (i = this.ws) == null || i.close();
        return
      }
      this.fitDelay(performance.now() - n);
      for (let e of r) e.seq <= this.seq || (this.board.apply(e), this.seq = e.seq, e.seq <= this.liveFrom && (e.at = -1 / 0), this.queue.push(e));
      if (document.hidden || this.queue.length - this.head > je) {
        this.board.showAll(), this.queue = [], this.head = 0, this.shownSeq = this.seq, this.notify(null);
        return
      }
      this.playFrame ?? (this.playFrame = requestAnimationFrame(this.play))
    }
    fitDelay(e) {
      this.clockSamples.push(e), this.clockSamples.length > ke && this.clockSamples.shift();
      let t = [...this.clockSamples].sort((e, t) => e - t);
      this.clockBase = t[0];
      let n = t[Math.floor((t.length - 1) * .95)] - this.clockBase;
      this.targetDelay = Math.min(Ae, b + n + 10)
    }
    request(e) {
      let t = this.ws;
      if (!t || t.readyState !== WebSocket.OPEN) return Promise.reject(Error(`disconnected`));
      let n = this.nextId++;
      return new Promise((r, i) => {
        let a = setTimeout(() => {
            this.acks.delete(n), i(Error(u.territory_busy()))
          }, Oe),
          o = e => {
            clearTimeout(a), e()
          };
        this.acks.set(n, {
          resolve: e => o(() => r(e)),
          reject: e => o(() => i(e))
        }), t.send(JSON.stringify({
          ...e,
          id: n
        }))
      })
    }
    async leaderboard() {
      let e = await fetch(`${P}/leaderboard`, {
        credentials: `include`
      });
      if (!e.ok) throw Error(`leaderboard ${e.status}`);
      return e.json()
    }
    async pixel(e, t) {
      let n = await fetch(`${P}/pixel?x=${e}&y=${t}`);
      if (!n.ok) throw Error(`pixel ${n.status}`);
      return n.json()
    }
    async join() {
      let e = await this.request({
        t: `join`
      });
      if (e.error) throw Error(e.error);
      this.me = e.me ?? null
    }
    paint(e) {
      let t = performance.now();
      this.sentAt.size > 5e4 && this.sentAt.clear();
      for (let {
          x: n,
          y: r
        }
        of e) this.sentAt.set(r * S + n, t);
      return this.send(`paint`, e, `no-charges`)
    }
    sentByMe(e, t) {
      let n = this.sentAt.get(t * S + e);
      return n !== void 0 && performance.now() - n < 3e4
    }
    swap(e, t) {
      return this.send(`swap`, e, `no-swaps`, t)
    }
    async send(e, t, n, r) {
      let i = {
          painted: 0,
          refused: 0,
          seq: 0
        },
        a = 0;
      for (let o = 0; o < t.length; o += F) {
        let s = t.slice(o, o + F).map(({
            x: e,
            y: t
          }) => [e, t]),
          c = await this.request({
            t: e,
            pixels: s,
            code: r
          });
        if (c.error === `rate-limited`) throw Error(u.territory_busy());
        if (c.error === `suspended`) throw Error(u.account_suspended_message());
        if (c.error) throw Error(c.error);
        let l = c.result;
        if (l.me && (this.me = l.me), a = Math.max(a, l.seq), i.painted += l.painted, i.refused += l.refused, i.reason = l.reason ?? i.reason, l.reason === n) break
      }
      return a > this.shownSeq && await this.waitForSeq(a), i
    }
    waitForSeq(e) {
      return new Promise(t => {
        let n = {
          seq: e,
          resolve: t
        };
        this.seqWaiters.push(n), setTimeout(() => {
          this.seqWaiters = this.seqWaiters.filter(e => e !== n), t()
        }, 2 * p.second)
      })
    }
  };
export {
  de as C, pe as S, ce as T, ge as _, y as a, me as b, v as c, _e as d, be as f, ve as g, T as h, w as i, g as l, he as m, C as n, S as o, Se as p, k as r, h as s, Pe as t, _ as u, ye as v, ue as w, fe as x, O as y
};