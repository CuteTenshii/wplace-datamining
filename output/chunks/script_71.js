import {
  n as e
} from "./B9mVy3Q1.js";
import {
  t
} from "./DPY9s8JT.js";
import {
  t as n
} from "./Hth4yPu_.js";
var r = {
  BIF: 0,
  CLP: 0,
  DJF: 0,
  GNF: 0,
  ISK: 0,
  JPY: 0,
  KMF: 0,
  KRW: 0,
  PYG: 0,
  RWF: 0,
  UGX: 0,
  UYI: 0,
  VND: 0,
  VUV: 0,
  XAF: 0,
  XOF: 0,
  XPF: 0,
  BHD: 3,
  IQD: 3,
  JOD: 3,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  TND: 3,
  CLF: 4,
  UYW: 4
};

function i(e) {
  return r[e.toUpperCase()] ?? 2
}

function a(e, t) {
  let n = i(t),
    r = e < 0,
    a = Math.abs(Math.trunc(e)).toString();
  if (n === 0) return (r ? `-` : ``) + a;
  let o = a.padStart(n + 1, `0`);
  return (r ? `-` : ``) + o.slice(0, o.length - n) + `.` + o.slice(o.length - n)
}

function o(e, t) {
  let n = e.trim().replace(`,`, `.`);
  if (!/^\d+(\.\d+)?$/.test(n)) return null;
  let r = i(t),
    [a, o = ``] = n.split(`.`),
    s = o.replace(/0+$/, ``);
  if (s.length > r) return null;
  let c = (a + s.padEnd(r, `0`)).replace(/^0+(?=\d)/, ``),
    l = Number(c);
  return Number.isSafeInteger(l) ? l : null
}

function s(e, t, n) {
  let r = i(t);
  try {
    return new Intl.NumberFormat(n ?? d(), {
      style: `currency`,
      currency: t.toUpperCase(),
      minimumFractionDigits: r,
      maximumFractionDigits: r
    }).format(Number(a(e, t)))
  } catch {
    return `${a(e,t)} ${t.toUpperCase()}`
  }
}

function c(e, t = !0) {
  let n = e / 100,
    r = Number.isInteger(n) ? n.toFixed(0) : n.toFixed(2).replace(/0+$/, ``);
  return !t || e === 0 ? `${r}%` : `${e>0?`+`:``}${r}%`
}

function l(e, t) {
  return new Intl.NumberFormat(t ?? d()).format(e)
}

function u(e, t) {
  if (!e) return `-`;
  let n = new Date(e);
  return Number.isNaN(n.getTime()) ? `-` : new Intl.DateTimeFormat(t ?? d(), {
    dateStyle: `medium`,
    timeStyle: `short`
  }).format(n)
}

function d() {
  return t(e())
}
var f = [`stripe`, `fastspring`, `google_play`, `app_store`];

function p(e) {
  switch (e) {
    case `stripe`:
      return `Stripe`;
    case `fastspring`:
      return `FastSpring`;
    case `google_play`:
      return `Google Play`;
    case `app_store`:
      return `App Store`;
    case `abacatepay`:
      return `AbacatePay`;
    default:
      return n.commerce_provider_unknown()
  }
}
var m = {
    neutral: `badge-ghost`,
    info: `badge-info`,
    success: `badge-success badge-soft`,
    warning: `badge-warning badge-soft`,
    error: `badge-error badge-soft`
  },
  h = {
    draft: `neutral`,
    awaiting_approval: `warning`,
    approved: `info`,
    scheduled: `info`,
    queued: `info`,
    applying: `info`,
    verifying: `info`,
    active: `success`,
    partially_applied: `error`,
    failed: `error`,
    manual_action_required: `warning`,
    reconciling: `info`,
    cancelled: `neutral`,
    rejected: `neutral`,
    rolled_back: `neutral`
  },
  g = {
    pending: `neutral`,
    queued: `info`,
    applying: `info`,
    verifying: `info`,
    succeeded: `success`,
    failed: `error`,
    unknown_outcome: `warning`,
    manual_action_required: `warning`,
    cancelled: `neutral`,
    skipped: `neutral`
  },
  _ = {
    draft: `neutral`,
    awaiting_approval: `warning`,
    approved: `info`,
    provisioning: `info`,
    scheduled: `info`,
    active: `success`,
    partially_available: `warning`,
    ended: `neutral`,
    cancelled: `neutral`,
    failed: `error`,
    rejected: `neutral`
  },
  v = {
    SUPPORTED_AUTOMATICALLY: `success`,
    SUPPORTED_WITH_LIMITATIONS: `info`,
    REQUIRES_MANUAL_ACTION: `warning`,
    UNSUPPORTED: `error`,
    NOT_VERIFIED: `neutral`
  };

function y(e) {
  return h[e] ?? `neutral`
}

function b(e) {
  return g[e] ?? `neutral`
}

function x(e) {
  return _[e] ?? `neutral`
}

function S(e) {
  return v[e] ?? `neutral`
}
var C = {
  draft: () => n.commerce_status_draft(),
  awaiting_approval: () => n.commerce_status_awaiting_approval(),
  approved: () => n.commerce_status_approved(),
  scheduled: () => n.commerce_status_scheduled(),
  queued: () => n.commerce_status_queued(),
  applying: () => n.commerce_status_applying(),
  verifying: () => n.commerce_status_verifying(),
  active: () => n.commerce_status_active(),
  partially_applied: () => n.commerce_status_partially_applied(),
  failed: () => n.commerce_status_failed(),
  manual_action_required: () => n.commerce_status_manual_action_required(),
  reconciling: () => n.commerce_status_reconciling(),
  cancelled: () => n.commerce_status_cancelled(),
  rejected: () => n.commerce_status_rejected(),
  rolled_back: () => n.commerce_status_rolled_back(),
  pending: () => n.commerce_status_pending(),
  succeeded: () => n.commerce_status_succeeded(),
  unknown_outcome: () => n.commerce_status_unknown_outcome(),
  skipped: () => n.commerce_status_skipped(),
  provisioning: () => n.commerce_status_provisioning(),
  partially_available: () => n.commerce_status_partially_available(),
  publishing: () => n.commerce_status_publishing(),
  published: () => n.commerce_status_published(),
  ended: () => n.commerce_status_ended(),
  paid: () => n.commerce_status_paid(),
  refunded: () => n.commerce_status_refunded(),
  partially_refunded: () => n.commerce_status_partially_refunded(),
  disputed: () => n.commerce_status_disputed(),
  chargeback: () => n.commerce_status_chargeback(),
  ok: () => n.commerce_status_ok(),
  missing: () => n.commerce_status_missing(),
  error: () => n.commerce_status_error(),
  not_configured: () => n.commerce_status_not_configured(),
  unsupported: () => n.commerce_status_unsupported(),
  reserved: () => n.commerce_status_reserved(),
  redeemed: () => n.commerce_status_redeemed(),
  released: () => n.commerce_status_released(),
  ready: () => n.commerce_status_ready(),
  partially_ready: () => n.commerce_status_partially_ready(),
  deactivated: () => n.commerce_status_deactivated()
};

function w(e) {
  let t = C[e];
  if (t) return t();
  let n = e.replace(/_/g, ` `);
  return n.charAt(0).toUpperCase() + n.slice(1)
}

function T(e) {
  switch (e) {
    case `SUPPORTED_AUTOMATICALLY`:
      return n.commerce_capability_automatic();
    case `SUPPORTED_WITH_LIMITATIONS`:
      return n.commerce_capability_limited();
    case `REQUIRES_MANUAL_ACTION`:
      return n.commerce_capability_manual();
    case `UNSUPPORTED`:
      return n.commerce_capability_unsupported();
    case `NOT_VERIFIED`:
      return n.commerce_capability_not_verified()
  }
}
var E = `\\t\\n\\v\\f\\r \\u0085\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000`,
  D = RegExp(`^[${E}]+|[${E}]+$`, `g`);

function O(e) {
  return e.replace(D, ``)
}

function k(e) {
  return [...O(e)].length
}

function A(e) {
  return e * 2
}
export {
  w as _, y as a, O as b, c, s as d, a as f, p as g, x as h, S as i, l, o as m, m as n, i as o, b as p, T as r, d as s, f as t, u, A as v, k as y
};