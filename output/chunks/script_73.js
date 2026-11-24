import {
  Ft as e,
  Gt as t,
  Ht as n,
  Lt as r,
  Nt as i,
  Ut as a,
  Vt as o,
  Wt as s,
  _t as c,
  pt as l
} from "./DXDHrD2o.js";
import {
  t as u
} from "./BjfSTdKe.js";
import {
  P as d,
  t as f
} from "./BGd5Vphg.js";
import {
  u as p
} from "./DLjVt9Xl.js";
import {
  d as m,
  f as ee
} from "./DkM-4ZnI.js";
var h = 6e4;
3 * h;
var te = 15e4,
  ne = 15e3,
  re = 5e3,
  ie = 6e4,
  g = 250,
  _ = 1e4,
  ae = [`stripe`, `fastspring`],
  oe = [`everyone`, `new_customers`, `returning_customers`],
  v = /^[A-Z]{3}$/,
  se = /^[1-9]\d{0,9}$/,
  ce = 2147483647;

function le(e) {
  return e.iosShell ? `ios` : e.twa ? `android` : `web`
}
var ue = `fastspring`;

function y(e) {
  return (e == null ? void 0 : e.toUpperCase()) === `BR` ? `BRL` : `USD`
}

function b(e, t) {
  return t.toUpperCase() === `BRL` ? e * 4 : e
}

function x(e, t) {
  let n = t.toUpperCase();
  return n === `USD` ? `$${ee(e,n)}` : n === `BRL` ? `R$${ee(e,n).replace(`.`,`,`)}` : m(e, n)
}

function S(e, t, n) {
  if (!Number.isSafeInteger(e) || e <= 0) return null;
  let r = t.toUpperCase(),
    i;
  if (n.discountType === `percent`) {
    let t = n.percentBps;
    if (!C(t)) return null;
    let r = e * t;
    if (!Number.isSafeInteger(r)) return null;
    let a = r % _;
    i = (r - a) / _ + +(a * 2 >= _)
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

function C(e) {
  return typeof e == `number` && Number.isInteger(e) && e > 0 && e <= 9e3
}

function w(e) {
  return typeof e == `object` && !!e && !Array.isArray(e)
}

function T(e) {
  return ae.includes(e)
}

function de(e) {
  return oe.includes(e)
}

function E(e) {
  return typeof e == `number` && Number.isSafeInteger(e) && e > 0
}

function fe(e) {
  return e == null ? null : typeof e == `number` && Number.isInteger(e) && e > 0 && e <= ce ? e : void 0
}

function pe(e) {
  if (!Array.isArray(e)) return [];
  let t = [];
  for (let n of e) {
    if (!w(n)) continue;
    let {
      currency: e,
      amountMinor: r
    } = n;
    typeof e != `string` || !v.test(e) || E(r) && t.push({
      currency: e,
      amountMinor: r
    })
  }
  return t
}

function me(e) {
  if (!w(e)) return null;
  let t = {};
  for (let [n, r] of Object.entries(e)) v.test(n) && E(r) && (t[n] = r);
  return Object.keys(t).length ? t : null
}

function he(e) {
  if (!w(e)) return null;
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
  let f = Array.isArray(c) ? c.filter(T) : [];
  if (!f.length || !de(l)) return null;
  let p = fe(e.perUserLimit);
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
  if (r === `percent`) return C(i) ? {
    ...m,
    discountType: r,
    percentBps: i,
    fixedAmounts: null
  } : null;
  if (r === `fixed`) {
    let e = me(a);
    return e ? {
      ...m,
      discountType: r,
      percentBps: null,
      fixedAmounts: e
    } : null
  }
  return null
}

function ge(e) {
  if (!w(e) || !w(e.products)) return null;
  let t = {};
  for (let [n, r] of Object.entries(e.products)) {
    if (!se.test(n) || !w(r)) continue;
    let e = {};
    if (w(r.prices))
      for (let [t, n] of Object.entries(r.prices)) {
        if (!T(t)) continue;
        let r = pe(n);
        r.length && (e[t] = r)
      }
    t[n] = {
      promotion: he(r.promotion),
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
var _e = Object.entries(d.products).flatMap(([e, t]) => {
  if (t.priceCurrency !== `fiat` || !t.lookupKey) return [];
  let n = t.items.map(e => e.name),
    r = n.includes(`Prism`) ? `prism` : n.includes(`Droplet`) ? `droplets` : null;
  return r ? [{
    productId: Number(e),
    priceCents: t.price ?? 0,
    currency: r
  }] : []
});

function ve(e) {
  let t = e && p.hidden(e);
  if (!e || !t) return [];
  let n = [`droplets`, `prism`].flatMap(t => p.products(e, t).filter(e => e.priceCurrency === `fiat`).map(e => ({
    productId: e.id,
    priceCents: e.price,
    currency: t
  })));
  return [..._e.filter(e => !t.has(e.productId)), ...n]
}

function D(e) {
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

function O(e, t) {
  return new Intl.NumberFormat(t ?? A(), {
    maximumFractionDigits: 2
  }).format(e / 100)
}

function ye(e) {
  return e.promotion.discountType === `percent` && e.promotion.percentBps ? u.store_offer_badge_percent({
    percent: O(e.promotion.percentBps)
  }) : u.store_offer_badge_fixed({
    amount: x(e.estimate.discountMinor, e.estimate.currency)
  })
}

function be(e) {
  switch (e) {
    case `new_customers`:
      return u.store_offer_new_customers_only();
    case `returning_customers`:
      return u.store_offer_returning_customers_only();
    case `everyone`:
      return null
  }
}

function xe(e) {
  return typeof e != `number` || !Number.isInteger(e) || e <= 0 ? null : u.store_offer_per_customer_limit({
    count: new Intl.NumberFormat(A()).format(e)
  })
}

function Se(e) {
  return e.kind === `generic` ? `%` : u.store_offer_badge_percent({
    percent: O(e.percentBps)
  })
}

function Ce(e) {
  return e ? {
    label: Se(e),
    title: k(e)
  } : null
}

function k(e) {
  if (e.kind === `generic`) return u.store_offer_notice_generic();
  let t = O(e.percentBps);
  return e.kind === `percent` ? u.store_offer_notice_percent({
    percent: t
  }) : u.store_offer_notice_up_to({
    percent: t
  })
}

function we(e, t) {
  let n = e - t;
  if (!Number.isFinite(n) || n <= 0) return null;
  let r = Math.ceil(n / 6e4);
  if (r < 60) return u.store_offer_ends_in_minutes({
    minutes: r
  });
  let i = Math.floor(r / 60);
  return i < 24 ? u.store_offer_ends_in_hours({
    hours: i,
    minutes: r % 60
  }) : u.store_offer_ends_in_days({
    days: Math.floor(i / 24),
    hours: i % 24
  })
}

function Te(e) {
  return new Date(e).toISOString()
}

function A() {
  return typeof navigator > `u` ? void 0 : navigator.language
}
var Ee = /^[A-Z0-9]{4,32}$/;

function De(e) {
  return e.toUpperCase().replace(/[\s_-]+/g, ``)
}

function j(e, t) {
  let n = (Array.isArray(e.estimate) ? e.estimate : []).filter(e => w(e) && typeof e.currency == `string` && v.test(e.currency) && E(e.originalMinor) && E(e.discountedMinor) && e.discountedMinor <= e.originalMinor);
  return n.find(e => e.currency === t.toUpperCase()) ?? n[0] ?? null
}

function Oe(e, t) {
  var n;
  let r = e.promotion;
  if ((r == null ? void 0 : r.discountType) === `percent` && C(r.percentBps)) return u.store_offer_badge_percent({
    percent: O(r.percentBps)
  });
  let i = t.toUpperCase(),
    a = (r == null ? void 0 : r.discountType) === `fixed` ? (n = r.fixedAmounts) == null ? void 0 : n[i] : void 0;
  if (E(a)) return u.store_offer_badge_fixed({
    amount: x(a, i)
  });
  let o = j(e, t);
  return !o || o.discountedMinor >= o.originalMinor ? null : u.store_offer_badge_fixed({
    amount: x(o.originalMinor - o.discountedMinor, o.currency)
  })
}

function ke(e, t) {
  return new Promise((n, r) => {
    let i = setTimeout(() => r(Error(`Store offers request timed out`)), t);
    e.then(e => {
      clearTimeout(i), n(e)
    }, e => {
      clearTimeout(i), r(e)
    })
  })
}

function Ae() {
  return f.hasServerTimeEstimate() ? f.getEstimatedServerNowMs() : Date.now()
}
var M = new WeakMap,
  N = new WeakMap,
  P = new WeakMap,
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
  G = new WeakSet,
  K = new WeakMap,
  je = class {
    get now() {
      return l(o(M, this))
    }
    set now(t) {
      e(o(M, this), t, !0)
    }
    constructor(e = {}) {
      t(this, G), s(this, M, r(i(Date.now()))), s(this, N, r(null)), s(this, P, r(!1)), s(this, F, r(null)), s(this, I, []), s(this, L, !1), s(this, R, 0), s(this, z, null), s(this, B, -1 / 0), s(this, V, void 0), s(this, H, void 0), s(this, U, void 0), s(this, W, void 0), s(this, K, () => {
        if (o(L, this)) {
          if (a(G, this, X).call(this)) {
            clearTimeout(o(V, this)), clearTimeout(o(H, this));
            return
          }
          a(G, this, Q).call(this), o(W, this).call(this) - o(B, this) >= a(G, this, Y).call(this) ? this.refresh() : a(G, this, Z).call(this)
        }
      }), n(U, this, e.client), n(W, this, e.clock ?? Ae)
    }
    get platform() {
      return l(o(F, this))
    }
    get failed() {
      return l(o(P, this))
    }
    get couponEntry() {
      var e;
      return ((e = a(G, this, J).call(this)) == null ? void 0 : e.couponEntry) === !0
    }
    watch(e, t = {}) {
      return c(() => {
        let n = {
          platform: e,
          background: t.background === !0
        };
        o(I, this).push(n), a(G, this, Pe).call(this, e);
        let r = !0;
        return () => c(() => {
          if (!r) return;
          r = !1;
          let e = o(I, this).indexOf(n);
          e >= 0 && o(I, this).splice(e, 1);
          let t = o(I, this).at(-1);
          t ? t.platform !== l(o(F, this)) && a(G, this, Pe).call(this, t.platform) : a(G, this, Fe).call(this)
        })
      })
    }
    refresh() {
      let t = l(o(F, this));
      if (!t) return Promise.resolve();
      if (o(z, this)) return o(z, this);
      let r = o(R, this),
        i = o(U, this) ?? f;
      n(B, this, o(W, this).call(this)), clearTimeout(o(V, this));
      let s = (async () => {
        let n = null;
        try {
          n = ge(await ke(i.getStoreOffers(t), ne))
        } catch {
          n = null
        }
        r === o(R, this) && (n ? (e(o(N, this), {
          offers: n,
          platform: t,
          fetchedAt: o(W, this).call(this)
        }), e(o(P, this), !1)) : e(o(P, this), !0))
      })().finally(() => {
        o(z, this) === s && n(z, this, null), !(r !== o(R, this) || !o(L, this)) && (a(G, this, Q).call(this), a(G, this, Z).call(this))
      });
      return n(z, this, s), s
    }
    promotionFor(e, t) {
      var n;
      let r = (n = a(G, this, J).call(this)) == null || (n = n.products[String(e)]) == null ? void 0 : n.promotion;
      if (!r || !r.providers.includes(t)) return null;
      let i = Date.parse(r.startsAt),
        o = Date.parse(r.endsAt);
      return this.now >= i && this.now < o ? r : null
    }
    saleSummary(e, t) {
      let n = y(e);
      return D(ve(l(o(F, this))).filter(e => !t || e.currency === t).map(e => {
        var t;
        return (t = this.packPricing({
          productId: e.productId,
          provider: `fastspring`,
          currency: n,
          fallbackMinor: b(e.priceCents, n)
        })) == null ? void 0 : t.offer
      }))
    }
    verifiedPrices(e, t) {
      var n;
      return ((n = a(G, this, Ne).call(this)) == null || (n = n.products[String(e)]) == null || (n = n.prices) == null ? void 0 : n[t]) ?? []
    }
    verifiedPrice(e, t, n) {
      let r = n.toUpperCase();
      return this.verifiedPrices(e, t).find(e => e.currency === r) ?? null
    }
    packPricing(e) {
      if (l(o(F, this)) !== `web`) return null;
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
        i = r ? S(n.amountMinor, n.currency, r) : null,
        s = r && i ? {
          kind: `sale`,
          promotion: r,
          estimate: i,
          verifiedPrice: n.verified,
          endsAt: Date.parse(r.endsAt)
        } : null,
        c = a(G, this, Me).call(this, e, n);
      return {
        price: n,
        offer: c && (!s || c.estimate.discountMinor >= s.estimate.discountMinor) ? c : s,
        sale: s
      }
    }
  };

function Me(e, t) {
  let n = e.coupon;
  if (!n || !n.validation.productIds.includes(e.productId)) return null;
  let {
    promotion: r
  } = n.validation, i = Date.parse(r.endsAt);
  if (!Number.isFinite(i) || this.now >= i) return null;
  let a = S(t.amountMinor, t.currency, r);
  return a ? {
    kind: `coupon`,
    code: n.code,
    promotion: r,
    estimate: a,
    verifiedPrice: t.verified,
    endsAt: i
  } : null
}

function q() {
  let e = l(o(N, this));
  return l(o(F, this)) === `web` && (e == null ? void 0 : e.platform) === `web` ? e : null
}

function J() {
  let e = a(G, this, q).call(this);
  return !e || l(o(P, this)) || !e.offers.promotionsEnabled ? null : this.now - e.fetchedAt <= 18e4 ? e.offers : null
}

function Ne() {
  let e = a(G, this, q).call(this);
  return e && this.now - e.fetchedAt <= 6e5 ? e.offers : null
}

function Pe(t) {
  if (o(L, this) || (n(L, this, !0), typeof document < `u` && document.addEventListener(`visibilitychange`, o(K, this))), p.load(t), a(G, this, Q).call(this), l(o(F, this)) !== t) {
    var r;
    e(o(F, this), t, !0), n(R, this, (r = o(R, this), r++, r)), n(z, this, null), this.refresh();
    return
  }
  o(W, this).call(this) - o(B, this) >= re ? this.refresh() : a(G, this, Z).call(this)
}

function Fe() {
  n(L, this, !1), clearTimeout(o(V, this)), clearTimeout(o(H, this)), typeof document < `u` && document.removeEventListener(`visibilitychange`, o(K, this))
}

function Y() {
  return o(I, this).some(e => !e.background) ? h : te
}

function X() {
  return typeof document < `u` && document.visibilityState === `hidden`
}

function Z() {
  if (clearTimeout(o(V, this)), !o(L, this) || a(G, this, X).call(this) || o(z, this)) return;
  let e = Math.max(0, o(B, this) + a(G, this, Y).call(this) - o(W, this).call(this));
  n(V, this, setTimeout(() => void this.refresh(), e))
}

function Q() {
  this.now = o(W, this).call(this), clearTimeout(o(H, this)), !(!o(L, this) || a(G, this, X).call(this)) && n(H, this, setTimeout(() => a(G, this, Q).call(this), a(G, this, Ie).call(this)))
}

function Ie() {
  var e;
  let t = ie,
    n = ((e = a(G, this, q).call(this)) == null ? void 0 : e.offers.products) ?? {};
  for (let e of Object.values(n)) {
    let n = e.promotion;
    if (n)
      for (let e of [Date.parse(n.startsAt), Date.parse(n.endsAt)]) {
        let n = e - this.now;
        n > 0 && n + g < t && (t = n + g)
      }
  }
  return Math.max(t, g)
}
var Le = new je,
  $ = new WeakMap,
  Re = new class {
    constructor() {
      s(this, $, r(null))
    }
    get(e) {
      let t = l(o($, this));
      return t && t.userId === e ? t.coupon : null
    }
    set(t, n) {
      e(o($, this), {
        userId: t,
        coupon: n
      })
    }
    clear() {
      e(o($, this), null)
    }
  };
export {
  Re as _, b as a, D as b, O as c, ye as d, be as f, k as g, Ce as h, j as i, Te as l, le as m, Ee as n, we as o, xe as p, Oe as r, x as s, ue as t, De as u, y as v, Le as y
};