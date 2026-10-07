var e = [{
  locale: `en`,
  lang: `en`,
  ogLocale: `en_US`,
  gameLocale: `en`,
  name: `English`
}, {
  locale: `pt-br`,
  lang: `pt-BR`,
  ogLocale: `pt_BR`,
  gameLocale: `pt`,
  name: `Português (Brasil)`
}, {
  locale: `es`,
  lang: `es`,
  ogLocale: `es_ES`,
  gameLocale: `es`,
  name: `Español`
}];

function t(t) {
  return e.some(e => e.locale === t)
}

function n(e) {
  return `/${e}/how-to-play`
}

function r(t) {
  return e.find(e => n(e.locale) === t)
}

function i(t) {
  var r;
  return n(((r = e.find(e => e.gameLocale === t)) == null ? void 0 : r.locale) ?? `en`)
}
export {
  t as a, e as i, n, i as r, r as t
};