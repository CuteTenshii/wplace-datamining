import {
  un as e
} from "./DXDHrD2o.js";
import {
  b as t,
  y as n
} from "./CsWLVvH6.js";
import {
  n as r
} from "./pKOrQQBa.js";
import {
  r as i
} from "./DJf9i38S.js";
var a = 200,
  o = 25,
  s = 56e3,
  c = 200,
  l = 2e3,
  u = 8e3,
  d = 512,
  f = 2e3,
  p = 1e4,
  m = 3e5,
  h = /\b(?:https?|chrome-extension|moz-extension|safari-web-extension|safari-extension|webkit-masked-url|capacitor|file):\/\/[^\s()'"<>]+/gi,
  g = /^ResizeObserver loop/,
  _ = [`chrome-extension:`, `moz-extension:`, `safari-web-extension:`, `safari-extension:`, `webkit-masked-url:`];

function v(e) {
  return e.split(`/`).map(e => /^[\w.~%-]{24,}$/.test(e) ? `:token` : e).join(`/`)
}

function y(e) {
  return e.replace(h, e => {
    var t;
    let n = ((t = e.match(/(?::\d+){1,2}$/)) == null ? void 0 : t[0]) ?? ``,
      [, r = ``, i = ``] = e.slice(0, e.length - n.length).replace(/[?#].*$/, ``).match(/^([a-z-]+:\/\/[^/]*)(.*)$/i) ?? [];
    return r + v(i) + n
  })
}

function b(e, t) {
  return e.length > t ? e.slice(0, t) : e
}

function x(e) {
  let t = 2166136261,
    n = 84696351;
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    t = Math.imul(t ^ i, 16777619), n = Math.imul(n ^ i, 16777619)
  }
  let r = e => (e >>> 0).toString(16).padStart(8, `0`);
  return r(t) + r(n)
}

function S(e) {
  var t;
  return (t = e.match(h)) == null ? void 0 : t[0]
}

function C(e, t) {
  if (!e) return `unknown`;
  try {
    let n = new URL(e);
    return _.includes(n.protocol) ? `extension` : t.includes(n.origin) ? `app` : `third_party`
  } catch {
    return `unknown`
  }
}

function w(e) {
  var t;
  return e === null ? `null` : typeof e == `object` ? ((t = e.constructor) == null ? void 0 : t.name) || `Object` : typeof e
}
var T = [`name`, `message`, `code`, `status`, `statusText`, `type`, `reason`];

function E(e) {
  if (typeof e == `string`) return e;
  if (typeof e != `object` || !e) return String(e);
  try {
    let t = e,
      n = T.flatMap(e => {
        let n = t[e];
        return [`string`, `number`, `boolean`].includes(typeof n) ? [`${e}=${b(String(n),200)}`] : []
      }),
      r = Object.keys(t).slice(0, 20).join(`, `);
    return [...n, `keys: ${r||`(none)`}`].join(` `)
  } catch {
    return `(unreadable)`
  }
}

function D(e) {
  if (e instanceof Error) {
    let t = e.stack ?? ``,
      {
        cause: n
      } = e;
    if (n !== void 0) {
      let e = D(n);
      t += `\nCaused by: ${e.stack||`${e.name}: ${e.message}`}`
    }
    return {
      name: e.name || `Error`,
      message: e.message,
      stack: t
    }
  }
  return {
    name: w(e),
    message: E(e),
    stack: ``
  }
}
var O = class {
  constructor(t) {
    e(this, `options`, void 0), e(this, `sessionId`, i()), e(this, `pending`, new Map), e(this, `dropped`, 0), e(this, `staleBuild`, !1), e(this, `lastRequest`, void 0), e(this, `timer`, void 0), e(this, `timerDue`, 1 / 0), e(this, `repeatDelay`, p), e(this, `sending`, !1), e(this, `reporting`, !1), e(this, `now`, void 0), e(this, `handleErrorEvent`, e => {
      if (typeof ErrorEvent < `u` && e instanceof ErrorEvent) {
        let r = e.error ? D(e.error) : {
          name: `Error`,
          message: e.message || `Script error.`,
          stack: ``
        };
        if (!e.error && g.test(r.message)) {
          var t, n;
          r.stack = ((t = (n = this.options).resizeObservers) == null ? void 0 : t.call(n)) ?? ``
        }!r.stack && e.filename && (r.stack = `at ${e.filename}:${e.lineno}:${e.colno}`), r.url = e.filename || void 0, this.record(`error`, r);
        return
      }
      let r = e.target;
      r instanceof HTMLScriptElement && r.src ? this.record(`resource`, k(`script`, r.src)) : r instanceof HTMLLinkElement && r.href && this.record(`resource`, k(`link[rel=${r.rel}]`, r.href))
    }), e(this, `handleRejection`, e => {
      this.record(`unhandledrejection`, D(e.reason))
    }), e(this, `flushNow`, () => {
      this.flush(!0)
    }), this.options = t, this.now = t.now ?? Date.now
  }
  markStaleBuild() {
    this.staleBuild = !0
  }
  noteFailedRequest(e) {
    this.lastRequest = {
      ...e,
      path: b(v(e.path.split(/[?#]/)[0]), d),
      at: this.now()
    }
  }
  report(e, {
    kind: t = `manual`,
    status: n
  } = {}) {
    this.record(t, D(e), n)
  }
  record(e, t, n) {
    if (!this.reporting) {
      this.reporting = !0;
      try {
        let r = b(y(t.message), l),
          i = b(y(t.stack), u),
          o = b(t.name, c),
          s = S(i) ?? t.url,
          p = x([e, o, r.replace(/\d+/g, `#`), s ?? ``, n ?? ``].join(`|`)),
          m = this.now(),
          h = this.pending.get(p);
        if (h) {
          h.unsent++, h.lastSeen = m, h.lastRequest = this.lastRequest, this.schedule(this.repeatDelay);
          return
        }
        if (this.pending.size >= a) {
          this.dropped++, this.schedule(this.repeatDelay);
          return
        }
        this.pending.set(p, {
          fingerprint: p,
          kind: e,
          source: C(s, this.options.appOrigins()),
          name: o,
          message: r,
          stack: i,
          path: b(v(this.options.path()), d),
          status: n,
          firstSeen: m,
          lastSeen: m,
          lastRequest: this.lastRequest,
          unsent: 1,
          reported: !1
        }), this.schedule(f)
      } catch {} finally {
        this.reporting = !1
      }
    }
  }
  schedule(e) {
    let t = this.now() + e;
    this.timer !== void 0 && this.timerDue <= t || (clearTimeout(this.timer), this.timerDue = t, this.timer = setTimeout(() => {
      this.timer = void 0, this.timerDue = 1 / 0, this.flush(!1)
    }, e))
  }
  takeBatch() {
    let e = [],
      t = 0,
      n = !0;
    for (let r of this.pending.values()) {
      if (r.unsent === 0) continue;
      if (e.length >= o) break;
      let {
        unsent: i,
        reported: a,
        ...c
      } = r, l = {
        ...c,
        count: i
      }, u = JSON.stringify(l).length;
      if (e.length > 0 && t + u > s) break;
      t += u, e.push(l), a || (n = !1)
    }
    return {
      errors: e,
      onlyRepeats: n
    }
  }
  async flush(e) {
    if (this.sending) return;
    let {
      errors: t,
      onlyRepeats: n
    } = this.takeBatch(), r = this.dropped;
    if (t.length === 0 && r === 0) return;
    for (let e of t) {
      let t = this.pending.get(e.fingerprint);
      t && (t.unsent -= e.count)
    }
    this.dropped = 0, this.sending = !0;
    let i = `failed`;
    try {
      i = await this.options.send({
        visitorId: this.options.visitorId(),
        sessionId: this.sessionId,
        appVersion: this.options.appVersion,
        playerBuild: this.options.playerBuild,
        staleBuild: this.staleBuild,
        errors: t,
        dropped: r
      }, e)
    } catch {} finally {
      this.sending = !1
    }
    if (i !== `failed`) {
      for (let e of t) {
        let t = this.pending.get(e.fingerprint);
        t && (t.reported = !0)
      }
      this.repeatDelay = n ? Math.min(this.repeatDelay * 2, m) : p
    } else {
      for (let e of t) {
        let t = this.pending.get(e.fingerprint);
        t && (t.unsent += e.count)
      }
      this.dropped += r, this.repeatDelay = Math.min(this.repeatDelay * 2, m)
    }
    let a = this.nextSend();
    a === `new` && i === `delivered` ? this.schedule(f) : a && this.schedule(this.repeatDelay)
  }
  nextSend() {
    let e = this.dropped > 0 ? `repeat` : void 0;
    for (let t of this.pending.values())
      if (t.unsent !== 0) {
        if (!t.reported) return `new`;
        e = `repeat`
      } return e
  }
};

function k(e, t) {
  return {
    name: `ResourceError`,
    message: `Failed to load ${e} ${y(t)}`,
    stack: ``,
    url: t
  }
}

function A(e) {
  let t = [...e.classList].slice(0, 4).map(e => `.${e}`);
  return b(e.localName + t.join(``), 120)
}

function j(e = window) {
  let t = e.ResizeObserver;
  if (typeof t != `function`) return () => ``;
  let n = [],
    r = !1;
  return e.ResizeObserver = class extends t {
    constructor(e) {
      var t;
      let i = ((t = Error().stack) == null ? void 0 : t.split(`
`)) ?? [];
      /^Error\b/.test(i[0] ?? ``) && i.shift();
      let a = i.slice(1, 6).map(e => `    ${e.trim()}`).join(`
`);
      super((t, i) => {
        n.push({
          site: a,
          targets: t.map(e => e.target)
        }), r || (r = !0, requestAnimationFrame(() => {
          n = [], r = !1
        })), e.call(i, t, i)
      })
    }
  }, () => {
    let e = new Set;
    for (let {
        site: t,
        targets: r
      }
      of [...n].reverse()) {
      let n = [...new Set(r.map(A))].slice(0, 4).join(`, `);
      e.add(`ResizeObserver callback for ${n||`(no targets)`}\n${t}`)
    }
    return [...e].join(`
`)
  }
}

function M() {
  try {
    return localStorage.getItem(`wplace:visitor-id`) ?? void 0
  } catch {
    return
  }
}

function N() {
  let e = [location.origin];
  try {
    e.push(new URL(t(`/`), location.href).origin)
  } catch {}
  return e
}
var P;

function F() {
  if (P) return P;
  let e = `${r}/frontend/errors`;
  return P = new O({
    appVersion: n,
    playerBuild: `a8e7c5fc2492df79cfc739e`,
    appOrigins: N,
    visitorId: M,
    path: () => location.pathname,
    resizeObservers: j(),
    send: async (t, n) => {
      var r, i;
      let a = JSON.stringify(t);
      if (n && (r = (i = navigator).sendBeacon) != null && r.call(i, e, a)) return `delivered`;
      let o = await fetch(e, {
        method: `POST`,
        credentials: `include`,
        keepalive: n,
        body: a
      });
      return o.ok ? `delivered` : o.status === 400 ? `rejected` : `failed`
    }
  }), window.addEventListener(`error`, P.handleErrorEvent, !0), window.addEventListener(`unhandledrejection`, P.handleRejection), window.addEventListener(`pagehide`, P.flushNow), document.addEventListener(`visibilitychange`, () => {
    document.visibilityState === `hidden` && (P == null || P.flushNow())
  }), P
}

function I(e, t) {
  P == null || P.report(e, t)
}

function L(e) {
  P == null || P.noteFailedRequest(e)
}

function R() {
  P == null || P.markStaleBuild()
}
export {
  I as i, R as n, L as r, F as t
};