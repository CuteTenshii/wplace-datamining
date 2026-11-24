var e = {
  settings: [`interface`, `accessibility`, `privacy`, `sounds`, `controls`, `notifications`],
  store: [`items`, `pictures`, `frames`, `fonts`, `styles`, `flags`, `bundles`],
  profile: [`social`, `photo`, `frame`, `style`, `flag`, `badges`],
  info: [`how-to-play`, `rules`, `socials`],
  search: [],
  favorites: [],
  leaderboard: [`regions`, `countries`, `players`, `alliances`],
  alliances: [`settings`, `store`, `activity`, `members`, `requests`, `templates`, `headquarters`, `invites`],
  "alliance-gallery": [],
  overlays: [],
  notifications: [],
  "payment-history": [],
  droplets: [],
  prism: [],
  events: [],
  login: []
};

function t(t) {
  var n;
  let r = t.replace(/^#/, ``),
    i = r.indexOf(`?`),
    a = i < 0 ? r : r.slice(0, i),
    o = new URLSearchParams(i < 0 ? `` : r.slice(i + 1));
  if ([...o.keys()].some(e => ![`text`, `occurrence`, `period`, `country`, `region`].includes(e)) || [`text`, `occurrence`, `period`, `country`, `region`].some(e => o.getAll(e).length > 1)) return null;
  let s = (n = o.get(`text`)) == null ? void 0 : n.trim(),
    c = o.get(`occurrence`);
  if (c !== null && (!s || !/^[1-9][0-9]{0,3}$/.test(c)) || o.has(`text`) && (!s || s.length > 500 || [...s].some(e => e.charCodeAt(0) < 32 || e === `�`))) return null;
  let l;
  try {
    l = decodeURIComponent(a)
  } catch {
    return null
  }
  let u = l.split(`/`);
  if (u.length > 3 || u.some(e => !/^[a-zA-Z0-9_-]+$/.test(e))) return null;
  let [d, f, p] = u;
  if (!Object.prototype.hasOwnProperty.call(e, d)) return null;
  let m = e[d];
  if (f && !m.includes(f)) return null;
  let h = o.get(`period`),
    g = o.get(`country`),
    _ = o.get(`region`);
  return h !== null && (d !== `leaderboard` || ![`today`, `week`, `month`, `all-time`].includes(h)) || g !== null && (d !== `leaderboard` || ![`regions`, `players`].includes(f) || !/^[1-9][0-9]{0,2}$/.test(g)) || _ !== null && (d !== `leaderboard` || f !== `players` || !g || !/^[1-9][0-9]{0,9}$/.test(_) || Number(_) > 2147483647) ? null : {
    panel: d,
    section: f,
    target: p,
    ...h ? {
      period: h
    } : {},
    ...g ? {
      country: Number(g)
    } : {},
    ..._ ? {
      region: Number(_)
    } : {},
    ...s ? {
      text: s
    } : {},
    ...c ? {
      occurrence: Number(c)
    } : {}
  }
}

function n(e) {
  return [e.panel, e.section, e.target].filter(Boolean).join(`/`)
}

function r(e) {
  let t = new URLSearchParams;
  return e.period && t.set(`period`, e.period), e.country && t.set(`country`, String(e.country)), e.region && t.set(`region`, String(e.region)), e.text && (t.set(`text`, e.text), e.occurrence && t.set(`occurrence`, String(e.occurrence))), `#${n(e)}${t.size?`?${t}`:``}`
}

function i(e) {
  return e.panel === `alliances` ? !!e.section : e.panel === `settings` ? e.section === `privacy` || e.section === `notifications` && !!e.target && ![`charges`, `flag-refund`, `events`, `updates`, `patch-notes`, `dismiss-hint`].includes(e.target) : [`profile`, `store`, `notifications`, `payment-history`].includes(e.panel)
}
export {
  t as i, n, i as r, r as t
};