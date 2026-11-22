var e = [`gclid`, `gbraid`, `wbraid`, `fbclid`, `ttclid`, `msclkid`, `twclid`],
  t = `wplace:visitor-id`,
  n = `wplace:touches`,
  r = 100,
  i = 200,
  a = 18e5,
  o = [
    [`utm_source`, `utmSource`],
    [`utm_medium`, `utmMedium`],
    [`utm_campaign`, `utmCampaign`],
    [`utm_content`, `utmContent`],
    [`utm_term`, `utmTerm`]
  ],
  s = [`accounts.google.com`, `discord.com`, `id.twitch.tv`, `appleid.apple.com`],
  c = [`stripe.com`, `onfastspring.com`, `fastspring.com`],
  l = `/payment/`;

function u(e, t) {
  return (e == null ? void 0 : e.trim().slice(0, t)) || void 0
}

function d(e, t) {
  return e === t || e.endsWith(`.${t}`)
}

function f(e, t) {
  if (!e) return;
  let n;
  try {
    n = new URL(e)
  } catch {
    return
  }
  if (n.protocol !== `http:` && n.protocol !== `https:`) return;
  let r = n.hostname.toLowerCase(),
    i = t.toLowerCase().split(`.`).slice(-2).join(`.`);
  if (!(!r || d(r, i)) && !s.includes(r) && !c.some(e => d(r, e))) return r
}

function p(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  return typeof t.at == `string` && !Number.isNaN(Date.parse(t.at)) && typeof t.landingPath == `string`
}

function m() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`
}

function h() {
  try {
    let e = JSON.parse(localStorage.getItem(n) ?? `null`);
    if (typeof e != `object` || !e) return null;
    let {
      first: t,
      last: r,
      userId: i
    } = e;
    if (!p(t)) return null;
    let a = {
      first: t,
      last: p(r) ? r : null
    };
    return typeof i == `number` && (a.userId = i), a
  } catch {
    return null
  }
}

function g(e) {
  try {
    localStorage.setItem(n, JSON.stringify(e))
  } catch {}
}

function _(e, t) {
  return e.utmSource === t.utmSource && e.utmMedium === t.utmMedium && e.utmCampaign === t.utmCampaign && e.referrerHost === t.referrerHost
}

function v() {
  try {
    return localStorage.getItem(t) !== null
  } catch {
    return !1
  }
}

function y(t, n, s = new Date) {
  let c = {
    at: s.toISOString(),
    landingPath: t.pathname.slice(0, i) || `/`
  };
  for (let [e, n] of o) {
    let i = u(t.searchParams.get(e), r);
    i && (c[n] = i)
  }
  let d = e.find(e => t.searchParams.has(e));
  d && (c.clickIdKind = d);
  let p = t.pathname.startsWith(l) ? void 0 : f(n, t.hostname);
  p && (c.referrerHost = p);
  let m = o.some(([, e]) => c[e] !== void 0) || !!d || !!p,
    y = h();
  if (!y) {
    v() ? g({
      first: {
        at: c.at,
        landingPath: c.landingPath,
        unknown: !0
      },
      last: m ? c : null
    }) : g({
      first: c,
      last: null
    });
    return
  }
  if (!m) return;
  let b = y.last ?? y.first;
  _(b, c) && s.getTime() - Date.parse(b.at) < a || g({
    ...y,
    last: c
  })
}

function b(e, t = new Date) {
  let n = h();
  if (!n || e === null || n.userId === e) return n;
  let r = n.userId === void 0 ? {
    ...n,
    userId: e
  } : {
    first: {
      at: t.toISOString(),
      landingPath: `/`,
      unknown: !0
    },
    last: null,
    userId: e
  };
  return g(r), r
}
export {
  b as i, y as n, m as r, t
};