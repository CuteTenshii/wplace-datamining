var e = function(e, t) {
    return new URL(e, t).href
  },
  t = {},
  n = function(n, r, i) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let n = document.getElementsByTagName(`link`),
        o = document.querySelector(`meta[property=csp-nonce]`),
        s = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute(`nonce`));

      function c(e) {
        return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
          status: `fulfilled`,
          value: e
        }), e => ({
          status: `rejected`,
          reason: e
        }))))
      }

      function l(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href
      }
      a = c(r.map(r => {
        if (r = e(r, i), r = l(r), r in t) return;
        t[r] = !0;
        let a = r.endsWith(`.css`);
        for (let e = n.length - 1; e >= 0; e--) {
          let t = n[e];
          if (t.href === r && (!a || t.rel === `stylesheet`)) return
        }
        let o = document.createElement(`link`);
        if (o.rel = a ? `stylesheet` : `modulepreload`, a || (o.as = `script`), o.crossOrigin = ``, o.href = r, s && o.setAttribute(`nonce`, s), document.head.appendChild(o), a) return new Promise((e, t) => {
          o.addEventListener(`load`, e), o.addEventListener(`error`, () => t(Error(`Unable to preload CSS for ${r}`)))
        })
      }))
    }

    function o(e) {
      let t = new Event(`vite:preloadError`, {
        cancelable: !0
      });
      if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
    }
    return a.then(e => {
      for (let t of e || []) t.status === `rejected` && o(t.reason);
      return n().catch(o)
    })
  },
  r = [`en`, `pt`, `ch`, `de`, `es`, `fr`, `it`, `jp`, `pl`, `ru`, `uk`, `vi`],
  i = Object.assign({
    "../../../messages/ch.json": () => n(() => import(`./DcnMRZKB.js`), [], import.meta.url),
    "../../../messages/de.json": () => n(() => import(`./2XaogCru.js`), [], import.meta.url),
    "../../../messages/en.json": () => n(() => import(`./B8PJ7G1q.js`), [], import.meta.url),
    "../../../messages/es.json": () => n(() => import(`./DKJ2PMvE.js`), [], import.meta.url),
    "../../../messages/fr.json": () => n(() => import(`./DnL5FNxn.js`), [], import.meta.url),
    "../../../messages/it.json": () => n(() => import(`./Di1ZkzKs.js`), [], import.meta.url),
    "../../../messages/jp.json": () => n(() => import(`./DNddrNC_.js`), [], import.meta.url),
    "../../../messages/pl.json": () => n(() => import(`./jCCq9L0A.js`), [], import.meta.url),
    "../../../messages/pt.json": () => n(() => import(`./dawrqyXC.js`), [], import.meta.url),
    "../../../messages/ru.json": () => n(() => import(`./BUzzeW3J.js`), [], import.meta.url),
    "../../../messages/uk.json": () => n(() => import(`./BfOUTxHV.js`), [], import.meta.url),
    "../../../messages/vi.json": () => n(() => import(`./BeoBaXvi.js`), [], import.meta.url)
  }),
  a = new Map,
  o = `PARAGLIDE_LOCALE`,
  s = `en`,
  c, l;

function u() {
  return s
}

function d(e) {
  return typeof e == `string` && r.includes(e)
}
async function f(e) {
  let t = a.get(e);
  if (!t) {
    let n = i[`../../../messages/${e}.json`];
    if (!n) throw Error(`No message catalog is configured for locale "${e}"`);
    t = n().then(t => v(e, t.default)), a.set(e, t)
  }
  let n = await t;
  c = l ? {
    ...n,
    ...v(e, await l(e))
  } : n, s = e
}
async function p(e) {
  l = e, await f(s)
}
async function m() {
  if (typeof window > `u`) {
    await f(`en`);
    return
  }
  await f(g() ?? _() ?? `en`)
}

function h() {
  if (!c) throw Error(`The message catalog was used before initializeLocale() completed`);
  return c
}

function g() {
  try {
    let e = localStorage.getItem(o);
    return d(e) ? e : void 0
  } catch {
    return
  }
}

function _() {
  for (let e of navigator.languages ?? []) {
    let t = e.toLowerCase();
    if (d(t)) return t;
    let n = t.split(`-`)[0];
    if (d(n)) return n
  }
}

function v(e, t) {
  if (typeof t != `object` || !t || Array.isArray(t)) throw Error(`The message catalog for locale "${e}" is not an object`);
  return t
}
export {
  o as a, p as i, u as n, n as o, m as r, h as t
};