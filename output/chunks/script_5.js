var e = `https://wplace.live`,
  t = [{
    locale: `en`,
    lang: `en`,
    gameLocale: `en`,
    name: `English`
  }, {
    locale: `pt-br`,
    lang: `pt-BR`,
    gameLocale: `pt`,
    name: `Português (Brasil)`
  }, {
    locale: `es`,
    lang: `es`,
    gameLocale: `es`,
    name: `Español`
  }, {
    locale: `de`,
    lang: `de`,
    gameLocale: `de`,
    name: `Deutsch`
  }, {
    locale: `fr`,
    lang: `fr`,
    gameLocale: `fr`,
    name: `Français`
  }, {
    locale: `it`,
    lang: `it`,
    gameLocale: `it`,
    name: `Italiano`
  }, {
    locale: `pl`,
    lang: `pl`,
    gameLocale: `pl`,
    name: `Polski`
  }, {
    locale: `ru`,
    lang: `ru`,
    gameLocale: `ru`,
    name: `Русский`
  }, {
    locale: `uk`,
    lang: `uk`,
    gameLocale: `uk`,
    name: `Українська`
  }, {
    locale: `vi`,
    lang: `vi`,
    gameLocale: `vi`,
    name: `Tiếng Việt`
  }, {
    locale: `ja`,
    lang: `ja`,
    gameLocale: `jp`,
    name: `日本語`
  }, {
    locale: `zh-cn`,
    lang: `zh-CN`,
    gameLocale: `ch`,
    name: `简体中文`
  }],
  n = [`/how-to-play`, `/guides/overlays`, `/guides/alliances`, `/about`];

function r(e) {
  return t.some(t => t.locale === e)
}

function i(e) {
  return n.includes(e)
}

function a(e, t) {
  return t === `en` ? e : `/${t}${e}`
}

function o(e) {
  return t.find(({
    locale: t
  }) => t !== `en` && n.some(n => e === a(n, t)))
}

function s(e) {
  var n;
  return ((n = t.find(t => t.gameLocale === e)) == null ? void 0 : n.locale) ?? `en`
}
export {
  a,
  t as c,
  r as i,
  o as n,
  n as o,
  i as r,
  s,
  e as t
};