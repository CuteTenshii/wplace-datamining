import {
  At as e,
  Ct as t,
  Ft as n,
  Gt as r,
  Ht as i,
  Lt as a,
  M as o,
  Nt as s,
  Q as c,
  Ut as l,
  Vt as u,
  Wt as d,
  _t as f,
  a as p,
  cn as m,
  et as ee,
  nt as te,
  pt as h
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  t as g
} from "./DmHqBA5r.js";
import {
  P as ne,
  t as _
} from "./C-DBsccD.js";
import {
  d as v
} from "./Dl4zXbqu.js";
import {
  d as re,
  f as ie
} from "./KqQgZxZo.js";
var ae = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAAXNSR0IArs4c6QAAACpJREFUeNpj+AsEZ86ASIa/DAwMZ84ACRDzDBigMs/AARITq1oUwxBWAADaREUdDMswKwAAAABJRU5ErkJggg==`,
  oe = te(`<span aria-hidden="true"> </span>`);

function se(n, r) {
  let i = p(r, `class`, 3, ``);
  var a = oe(),
    s = e(a, !0);
  m(a), t(() => {
    o(a, 1, `ring-base-100 pointer-events-none inline-flex h-4 min-w-4 items-center justify-center rounded-[var(--game-radius,9999px)] bg-red-500 px-1 text-[10px] leading-none font-extrabold whitespace-nowrap text-white tabular-nums shadow-md ring-2 ${i()??``}`), c(s, r.label)
  }), ee(n, a)
}
var ce = 6e4;
3 * ce;
var le = 15e4,
  ue = 15e3,
  de = 5e3,
  fe = 6e4,
  y = 250,
  b = 1e4,
  pe = [`stripe`, `fastspring`],
  me = [`everyone`, `new_customers`, `returning_customers`],
  x = /^[A-Z]{3}$/,
  he = /^[1-9]\d{0,9}$/,
  ge = 2147483647;

function _e(e) {
  return e.iosShell ? `ios` : e.twa ? `android` : `web`
}
var ve = `fastspring`;

function S(e) {
  return (e == null ? void 0 : e.toUpperCase()) === `BR` ? `BRL` : `USD`
}

function C(e, t) {
  return t.toUpperCase() === `BRL` ? e * 4 : e
}

function w(e, t) {
  let n = t.toUpperCase();
  return n === `USD` ? `$${ie(e,n)}` : n === `BRL` ? `R$${ie(e,n).replace(`.`,`,`)}` : re(e, n)
}

function T(e, t, n) {
  if (!Number.isSafeInteger(e) || e <= 0) return null;
  let r = t.toUpperCase(),
    i;
  if (n.discountType === `percent`) {
    let t = n.percentBps;
    if (!E(t)) return null;
    let r = e * t;
    if (!Number.isSafeInteger(r)) return null;
    let a = r % b;
    i = (r - a) / b + +(a * 2 >= b)
  } else if (n.discountType === `fixed`) {
    var a;
    let e = (a = n.fixedAmounts) == null ? void 0 : a[r];
    if (typeof e != `number` || !Number.isSafeInteger(e) || e <= 0) return null;
    i = e
  } else return null;
  let o = e - i;
  return i <= 0 || o <= 0 ? null : {
    currency: r,
    originalMinor: e,
    discountMinor: i,
    finalMinor: o
  }
}

function E(e) {
  return typeof e == `number` && Number.isInteger(e) && e > 0 && e <= 9e3
}

function D(e) {
  return typeof e == `object` && !!e && !Array.isArray(e)
}

function O(e) {
  return pe.includes(e)
}

function ye(e) {
  return me.includes(e)
}

function k(e) {
  return typeof e == `number` && Number.isSafeInteger(e) && e > 0
}

function be(e) {
  return e == null ? null : typeof e == `number` && Number.isInteger(e) && e > 0 && e <= ge ? e : void 0
}

function xe(e) {
  if (!Array.isArray(e)) return [];
  let t = [];
  for (let n of e) {
    if (!D(n)) continue;
    let {
      currency: e,
      amountMinor: r
    } = n;
    typeof e != `string` || !x.test(e) || k(r) && t.push({
      currency: e,
      amountMinor: r
    })
  }
  return t
}

function Se(e) {
  if (!D(e)) return null;
  let t = {};
  for (let [n, r] of Object.entries(e)) x.test(n) && k(r) && (t[n] = r);
  return Object.keys(t).length ? t : null
}

function Ce(e) {
  if (!D(e)) return null;
  let {
    id: t,
    kind: n,
    discountType: r,
    percentBps: i,
    fixedAmounts: a,
    startsAt: o,
    endsAt: s,
    providers: c,
    eligibility: l
  } = e;
  if (typeof t != `number` || !Number.isSafeInteger(t) || n !== `sale` || typeof o != `string` || typeof s != `string`) return null;
  let u = Date.parse(o),
    d = Date.parse(s);
  if (!Number.isFinite(u) || !Number.isFinite(d) || d <= u) return null;
  let f = Array.isArray(c) ? c.filter(O) : [];
  if (!f.length || !ye(l)) return null;
  let p = be(e.perUserLimit);
  if (p === void 0) return null;
  let m = {
    id: t,
    kind: n,
    startsAt: o,
    endsAt: s,
    providers: f,
    eligibility: l,
    perUserLimit: p
  };
  if (r === `percent`) return E(i) ? {
    ...m,
    discountType: r,
    percentBps: i,
    fixedAmounts: null
  } : null;
  if (r === `fixed`) {
    let e = Se(a);
    return e ? {
      ...m,
      discountType: r,
      percentBps: null,
      fixedAmounts: e
    } : null
  }
  return null
}

function we(e) {
  if (!D(e) || !D(e.products)) return null;
  let t = {};
  for (let [n, r] of Object.entries(e.products)) {
    if (!he.test(n) || !D(r)) continue;
    let e = {};
    if (D(r.prices))
      for (let [t, n] of Object.entries(r.prices)) {
        if (!O(t)) continue;
        let r = xe(n);
        r.length && (e[t] = r)
      }
    t[n] = {
      promotion: Ce(r.promotion),
      prices: e
    }
  }
  return {
    revision: typeof e.revision == `string` ? e.revision : ``,
    generatedAt: typeof e.generatedAt == `string` ? e.generatedAt : ``,
    promotionsEnabled: e.promotionsEnabled === !0,
    couponEntry: e.couponEntry === !0,
    products: t
  }
}
var Te = Object.entries(ne.products).flatMap(([e, t]) => {
  if (t.priceCurrency !== `fiat` || !t.lookupKey) return [];
  let n = t.items.map(e => e.name),
    r = n.includes(`Prism`) ? `prism` : n.includes(`Droplet`) ? `droplets` : null;
  return r ? [{
    productId: Number(e),
    priceCents: t.price ?? 0,
    currency: r
  }] : []
});

function Ee(e) {
  let t = e && v.hidden(e);
  if (!e || !t) return [];
  let n = [`droplets`, `prism`].flatMap(t => v.products(e, t).filter(e => e.priceCurrency === `fiat`).map(e => ({
    productId: e.id,
    priceCents: e.price,
    currency: t
  })));
  return [...Te.filter(e => !t.has(e.productId)), ...n]
}

function A(e) {
  let t = e.filter(e => (e == null ? void 0 : e.kind) === `sale`);
  if (!t.length) return null;
  let n = Math.min(...t.map(e => e.endsAt)),
    r = t.map(e => e.promotion.discountType === `percent` ? e.promotion.percentBps : null);
  if (r.some(e => typeof e != `number`)) return {
    kind: `generic`,
    endsAt: n
  };
  let i = r,
    a = Math.max(...i);
  return {
    kind: i.every(e => e === a) ? `percent` : `up_to`,
    percentBps: a,
    endsAt: n
  }
}

function j(e, t) {
  return new Intl.NumberFormat(t ?? N(), {
    maximumFractionDigits: 2
  }).format(e / 100)
}

function De(e) {
  return e.promotion.discountType === `percent` && e.promotion.percentBps ? g.store_offer_badge_percent({
    percent: j(e.promotion.percentBps)
  }) : g.store_offer_badge_fixed({
    amount: w(e.estimate.discountMinor, e.estimate.currency)
  })
}

function Oe(e) {
  switch (e) {
    case `new_customers`:
      return g.store_offer_new_customers_only();
    case `returning_customers`:
      return g.store_offer_returning_customers_only();
    case `everyone`:
      return null
  }
}

function ke(e) {
  return typeof e != `number` || !Number.isInteger(e) || e <= 0 ? null : g.store_offer_per_customer_limit({
    count: new Intl.NumberFormat(N()).format(e)
  })
}

function Ae(e) {
  return e.kind === `generic` ? `%` : g.store_offer_badge_percent({
    percent: j(e.percentBps)
  })
}

function je(e) {
  return e ? {
    label: Ae(e),
    title: M(e)
  } : null
}

function M(e) {
  if (e.kind === `generic`) return g.store_offer_notice_generic();
  let t = j(e.percentBps);
  return e.kind === `percent` ? g.store_offer_notice_percent({
    percent: t
  }) : g.store_offer_notice_up_to({
    percent: t
  })
}

function Me(e, t) {
  let n = e - t;
  if (!Number.isFinite(n) || n <= 0) return null;
  let r = Math.ceil(n / 6e4);
  if (r < 60) return g.store_offer_ends_in_minutes({
    minutes: r
  });
  let i = Math.floor(r / 60);
  return i < 24 ? g.store_offer_ends_in_hours({
    hours: i,
    minutes: r % 60
  }) : g.store_offer_ends_in_days({
    days: Math.floor(i / 24),
    hours: i % 24
  })
}

function Ne(e) {
  return new Date(e).toISOString()
}

function N() {
  return typeof navigator > `u` ? void 0 : navigator.language
}
var Pe = /^[A-Z0-9]{4,32}$/;

function Fe(e) {
  return e.toUpperCase().replace(/[\s_-]+/g, ``)
}

function Ie(e, t) {
  let n = (Array.isArray(e.estimate) ? e.estimate : []).filter(e => D(e) && typeof e.currency == `string` && x.test(e.currency) && k(e.originalMinor) && k(e.discountedMinor) && e.discountedMinor <= e.originalMinor);
  return n.find(e => e.currency === t.toUpperCase()) ?? n[0] ?? null
}

function Le(e, t) {
  var n;
  let r = e.promotion;
  if ((r == null ? void 0 : r.discountType) === `percent` && E(r.percentBps)) return g.store_offer_badge_percent({
    percent: j(r.percentBps)
  });
  let i = t.toUpperCase(),
    a = (r == null ? void 0 : r.discountType) === `fixed` ? (n = r.fixedAmounts) == null ? void 0 : n[i] : void 0;
  if (k(a)) return g.store_offer_badge_fixed({
    amount: w(a, i)
  });
  let o = Ie(e, t);
  return !o || o.discountedMinor >= o.originalMinor ? null : g.store_offer_badge_fixed({
    amount: w(o.originalMinor - o.discountedMinor, o.currency)
  })
}

function Re(e, t) {
  return new Promise((n, r) => {
    let i = setTimeout(() => r(Error(`Store offers request timed out`)), t);
    e.then(e => {
      clearTimeout(i), n(e)
    }, e => {
      clearTimeout(i), r(e)
    })
  })
}

function ze() {
  return _.hasServerTimeEstimate() ? _.getEstimatedServerNowMs() : Date.now()
}
var P = new WeakMap,
  F = new WeakMap,
  I = new WeakMap,
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
  q = new WeakSet,
  J = new WeakMap,
  Be = class {
    get now() {
      return h(u(P, this))
    }
    set now(e) {
      n(u(P, this), e, !0)
    }
    constructor(e = {}) {
      r(this, q), d(this, P, a(s(Date.now()))), d(this, F, a(null)), d(this, I, a(!1)), d(this, L, a(null)), d(this, R, []), d(this, z, !1), d(this, B, 0), d(this, V, null), d(this, H, -1 / 0), d(this, U, void 0), d(this, W, void 0), d(this, G, void 0), d(this, K, void 0), d(this, J, () => {
        if (u(z, this)) {
          if (l(q, this, X).call(this)) {
            clearTimeout(u(U, this)), clearTimeout(u(W, this));
            return
          }
          l(q, this, Q).call(this), u(K, this).call(this) - u(H, this) >= l(q, this, Ke).call(this) ? this.refresh() : l(q, this, Z).call(this)
        }
      }), i(G, this, e.client), i(K, this, e.clock ?? ze)
    }
    get platform() {
      return h(u(L, this))
    }
    get failed() {
      return h(u(I, this))
    }
    get couponEntry() {
      var e;
      return ((e = l(q, this, He).call(this)) == null ? void 0 : e.couponEntry) === !0
    }
    watch(e, t = {}) {
      return f(() => {
        let n = {
          platform: e,
          background: t.background === !0
        };
        u(R, this).push(n), l(q, this, We).call(this, e);
        let r = !0;
        return () => f(() => {
          if (!r) return;
          r = !1;
          let e = u(R, this).indexOf(n);
          e >= 0 && u(R, this).splice(e, 1);
          let t = u(R, this).at(-1);
          t ? t.platform !== h(u(L, this)) && l(q, this, We).call(this, t.platform) : l(q, this, Ge).call(this)
        })
      })
    }
    refresh() {
      let e = h(u(L, this));
      if (!e) return Promise.resolve();
      if (u(V, this)) return u(V, this);
      let t = u(B, this),
        r = u(G, this) ?? _;
      i(H, this, u(K, this).call(this)), clearTimeout(u(U, this));
      let a = (async () => {
        let i = null;
        try {
          i = we(await Re(r.getStoreOffers(e), ue))
        } catch {
          i = null
        }
        t === u(B, this) && (i ? (n(u(F, this), {
          offers: i,
          platform: e,
          fetchedAt: u(K, this).call(this)
        }), n(u(I, this), !1)) : n(u(I, this), !0))
      })().finally(() => {
        u(V, this) === a && i(V, this, null), !(t !== u(B, this) || !u(z, this)) && (l(q, this, Q).call(this), l(q, this, Z).call(this))
      });
      return i(V, this, a), a
    }
    promotionFor(e, t) {
      var n;
      let r = (n = l(q, this, He).call(this)) == null || (n = n.products[String(e)]) == null ? void 0 : n.promotion;
      if (!r || !r.providers.includes(t)) return null;
      let i = Date.parse(r.startsAt),
        a = Date.parse(r.endsAt);
      return this.now >= i && this.now < a ? r : null
    }
    saleSummary(e, t) {
      let n = S(e);
      return A(Ee(h(u(L, this))).filter(e => !t || e.currency === t).map(e => {
        var t;
        return (t = this.packPricing({
          productId: e.productId,
          provider: `fastspring`,
          currency: n,
          fallbackMinor: C(e.priceCents, n)
        })) == null ? void 0 : t.offer
      }))
    }
    verifiedPrices(e, t) {
      var n;
      return ((n = l(q, this, Ue).call(this)) == null || (n = n.products[String(e)]) == null || (n = n.prices) == null ? void 0 : n[t]) ?? []
    }
    verifiedPrice(e, t, n) {
      let r = n.toUpperCase();
      return this.verifiedPrices(e, t).find(e => e.currency === r) ?? null
    }
    packPricing(e) {
      if (h(u(L, this)) !== `web`) return null;
      let t = this.verifiedPrice(e.productId, e.provider, e.currency),
        n = t ? {
          amountMinor: t.amountMinor,
          currency: t.currency,
          verified: !0
        } : {
          amountMinor: e.fallbackMinor,
          currency: e.currency.toUpperCase(),
          verified: !1
        },
        r = this.promotionFor(e.productId, e.provider),
        i = r ? T(n.amountMinor, n.currency, r) : null,
        a = r && i ? {
          kind: `sale`,
          promotion: r,
          estimate: i,
          verifiedPrice: n.verified,
          endsAt: Date.parse(r.endsAt)
        } : null,
        o = l(q, this, Ve).call(this, e, n);
      return {
        price: n,
        offer: o && (!a || o.estimate.discountMinor >= a.estimate.discountMinor) ? o : a,
        sale: a
      }
    }
  };

function Ve(e, t) {
  let n = e.coupon;
  if (!n || !n.validation.productIds.includes(e.productId)) return null;
  let {
    promotion: r
  } = n.validation, i = Date.parse(r.endsAt);
  if (!Number.isFinite(i) || this.now >= i) return null;
  let a = T(t.amountMinor, t.currency, r);
  return a ? {
    kind: `coupon`,
    code: n.code,
    promotion: r,
    estimate: a,
    verifiedPrice: t.verified,
    endsAt: i
  } : null
}

function Y() {
  let e = h(u(F, this));
  return h(u(L, this)) === `web` && (e == null ? void 0 : e.platform) === `web` ? e : null
}

function He() {
  let e = l(q, this, Y).call(this);
  return !e || h(u(I, this)) || !e.offers.promotionsEnabled ? null : this.now - e.fetchedAt <= 18e4 ? e.offers : null
}

function Ue() {
  let e = l(q, this, Y).call(this);
  return e && this.now - e.fetchedAt <= 6e5 ? e.offers : null
}

function We(e) {
  if (u(z, this) || (i(z, this, !0), typeof document < `u` && document.addEventListener(`visibilitychange`, u(J, this))), v.load(e), l(q, this, Q).call(this), h(u(L, this)) !== e) {
    var t;
    n(u(L, this), e, !0), i(B, this, (t = u(B, this), t++, t)), i(V, this, null), this.refresh();
    return
  }
  u(K, this).call(this) - u(H, this) >= de ? this.refresh() : l(q, this, Z).call(this)
}

function Ge() {
  i(z, this, !1), clearTimeout(u(U, this)), clearTimeout(u(W, this)), typeof document < `u` && document.removeEventListener(`visibilitychange`, u(J, this))
}

function Ke() {
  return u(R, this).some(e => !e.background) ? ce : le
}

function X() {
  return typeof document < `u` && document.visibilityState === `hidden`
}

function Z() {
  if (clearTimeout(u(U, this)), !u(z, this) || l(q, this, X).call(this) || u(V, this)) return;
  let e = Math.max(0, u(H, this) + l(q, this, Ke).call(this) - u(K, this).call(this));
  i(U, this, setTimeout(() => void this.refresh(), e))
}

function Q() {
  this.now = u(K, this).call(this), clearTimeout(u(W, this)), !(!u(z, this) || l(q, this, X).call(this)) && i(W, this, setTimeout(() => l(q, this, Q).call(this), l(q, this, qe).call(this)))
}

function qe() {
  var e;
  let t = fe,
    n = ((e = l(q, this, Y).call(this)) == null ? void 0 : e.offers.products) ?? {};
  for (let e of Object.values(n)) {
    let n = e.promotion;
    if (n)
      for (let e of [Date.parse(n.startsAt), Date.parse(n.endsAt)]) {
        let n = e - this.now;
        n > 0 && n + y < t && (t = n + y)
      }
  }
  return Math.max(t, y)
}
var Je = new Be,
  $ = new WeakMap,
  Ye = new class {
    constructor() {
      d(this, $, a(null))
    }
    get(e) {
      let t = h(u($, this));
      return t && t.userId === e ? t.coupon : null
    }
    set(e, t) {
      n(u($, this), {
        userId: e,
        coupon: t
      })
    }
    clear() {
      n(u($, this), null)
    }
  };
export {
  ae as S, Ye as _, C as a, A as b, j as c, De as d, Oe as f, M as g, je as h, Ie as i, Ne as l, _e as m, Pe as n, Me as o, ke as p, Le as r, w as s, ve as t, Fe as u, S as v, se as x, Je as y
};