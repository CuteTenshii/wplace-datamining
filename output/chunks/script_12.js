import {
  At as e,
  Lt as t,
  Ot as n,
  Pt as r,
  rn as i,
  st as a
} from "./DhUcoEdH.js";
import {
  S as o,
  dt as s
} from "./CEp7IPwc.js";
import {
  t as c
} from "./BsQK2KsC.js";

function l(e, {
  interval: t,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now(),
    i = () => typeof document > `u` || document.visibilityState === `visible`;
  async function a() {
    let t = r;
    try {
      r = Date.now(), await e()
    } catch (e) {
      console.error(e), r = t
    }
  }
  let o = setInterval(() => {
    i() && a()
  }, t);
  n && a();
  async function s() {
    Date.now() - r >= t && await a()
  }
  let c = new AbortController;
  return typeof document < `u` && (document.addEventListener(`visibilitychange`, () => s(), {
    signal: c.signal
  }), document.addEventListener(`resume`, () => s(), {
    signal: c.signal
  })), typeof window < `u` && (window.addEventListener(`pageshow`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`focus`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`online`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`wplace:online`, () => s(), {
    signal: c.signal
  })), () => {
    clearInterval(o), c.abort()
  }
}
var u = void 0,
  d = new Set;

function f(e) {
  return d.add(e), () => d.delete(e)
}

function p(e) {
  return u = e, b({
    type: `previewPixels`,
    data: e
  })
}

function m() {
  return u = void 0, b({
    type: `clearPixelPreview`
  })
}
async function h(e) {
  await b({
    type: `paintPixels`,
    data: e
  });
  for (let t of d) try {
    t(e)
  } catch (e) {
    console.error(`Canvas paint listener failed.`, e)
  }
}

function g() {
  return b({
    type: `refreshPixelArt`
  })
}
async function _() {
  u || await b({
    type: `clearPixelPreview`
  })
}
var v = 1e4,
  y = 0;

function b(e) {
  let t = y++,
    n = {
      ...e,
      id: t
    };
  return new Promise((e, r) => {
    let i = navigator.serviceWorker;
    if (!i) {
      r(Error(`Service Workers are not supported/enabled in your browser. Some features might not work properly.`));
      return
    }
    let a = !1,
      o = e => {
        var n;
        ((n = e.data) == null ? void 0 : n.id) === t && c()
      },
      s = () => {
        clearTimeout(u), i.removeEventListener(`message`, o)
      },
      c = () => {
        a || (a = !0, s(), e())
      },
      l = e => {
        a || (a = !0, s(), r(e))
      },
      u = setTimeout(() => l(Error(`Timed out waiting for service worker response`)), v);
    i.addEventListener(`message`, o);
    let d = e => {
        try {
          e.postMessage(n)
        } catch (e) {
          l(e instanceof Error ? e : Error(String(e)))
        }
      },
      f = i.controller;
    f ? d(f) : i.ready.then(e => {
      if (a) return;
      let t = e.active;
      t ? d(t) : l(Error(`Service worker registration not active`))
    }, e => l(e instanceof Error ? e : Error(String(e))))
  })
}

function x({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}
var S = new WeakMap,
  C = new WeakMap,
  w = class {
    constructor() {
      t(this, S, e(`loading`)), t(this, C, e(!1)), i(this, `controller`, void 0), i(this, `publicKey`, ``), i(this, `subscription`, void 0), i(this, `lastPreferences`, ``)
    }
    get state() {
      return a(r(S, this))
    }
    set state(e) {
      n(r(S, this), e, !0)
    }
    get busy() {
      return a(r(C, this))
    }
    set busy(e) {
      n(r(C, this), e, !0)
    }
    start(e) {
      var t;
      (t = this.controller) == null || t.abort();
      let n = new AbortController;
      return this.controller = n, this.subscription = void 0, this.publicKey = ``, this.lastPreferences = ``, this.busy = !1, this.state = `loading`, e !== void 0 && this.refresh(), () => n.abort()
    }
    async refresh() {
      var e;
      let t = (e = this.controller) == null ? void 0 : e.signal;
      if (!(!t || t.aborted)) {
        if (!window.isSecureContext || !(`Notification` in window) || !(`serviceWorker` in navigator) || !(`PushManager` in window)) {
          this.state = `unsupported`;
          return
        }
        this.busy = !0;
        try {
          let e = await o.getNotificationPushConfig(t);
          if (t.aborted) return;
          if (this.publicKey = e.publicKey, !this.publicKey) {
            this.state = `unavailable`;
            return
          }
          if (Notification.permission === `denied`) {
            this.state = `blocked`;
            return
          }
          let n = await navigator.serviceWorker.getRegistration(),
            r = await (n == null ? void 0 : n.pushManager.getSubscription());
          if (t.aborted) return;
          this.subscription = r ?? void 0;
          let i = r ? await o.getNotificationPushStatus(r.endpoint, t) : {
            enabled: !1
          };
          if (t.aborted) return;
          this.state = i.enabled && Notification.permission === `granted` ? `on` : `off`
        } catch {
          t.aborted || (this.state = `error`)
        } finally {
          t.aborted || (this.busy = !1)
        }
      }
    }
    async enable() {
      var e;
      let t = (e = this.controller) == null ? void 0 : e.signal;
      if (!(!t || t.aborted || this.busy || !this.publicKey)) {
        this.busy = !0;
        try {
          let e = await Notification.requestPermission();
          if (t.aborted) return;
          if (e !== `granted`) {
            this.state = e === `denied` ? `blocked` : `off`;
            return
          }
          let n = await E(t);
          if (t.aborted) return;
          let r = Uint8Array.from(atob(this.publicKey.replace(/-/g, `+`).replace(/_/g, `/`)), e => e.charCodeAt(0)),
            i = await n.pushManager.getSubscription();
          if (i && !T(i.options.applicationServerKey, r) && (await i.unsubscribe(), i = null), t.aborted || (i ?? (i = await n.pushManager.subscribe({
              userVisibleOnly: !0,
              applicationServerKey: r
            })), t.aborted)) return;
          this.subscription = i;
          let a = c.device_notifications_body(),
            l = s.muted,
            u = c.device_notifications_charges_full();
          await o.subscribeNotificationPush(i.toJSON(), a, l, u, t), t.aborted || (this.lastPreferences = JSON.stringify([a, l, u]), this.state = `on`)
        } catch {
          t.aborted || (this.state = `error`)
        } finally {
          t.aborted || (this.busy = !1)
        }
      }
    }
    async disable() {
      var e;
      let t = (e = this.controller) == null ? void 0 : e.signal;
      if (!(!t || t.aborted || this.busy || !this.subscription)) {
        this.busy = !0;
        try {
          if (await o.unsubscribeNotificationPush(this.subscription.endpoint, t), t.aborted) return;
          this.state = `off`
        } catch {
          t.aborted || (this.state = `error`)
        } finally {
          t.aborted || (this.busy = !1)
        }
      }
    }
    async syncPreferences(e, t, n) {
      var r;
      let i = (r = this.controller) == null ? void 0 : r.signal,
        a = JSON.stringify([e, t, n]);
      if (!(!i || i.aborted || this.state !== `on` || this.busy || !this.subscription || this.lastPreferences === a)) {
        this.busy = !0;
        try {
          let r = await o.updateNotificationPushPreferences(this.subscription.endpoint, e, t, n, i);
          i.aborted || (this.lastPreferences = a, r.enabled || (this.state = `off`))
        } catch {
          i.aborted || (this.state = `error`)
        } finally {
          i.aborted || (this.busy = !1)
        }
      }
    }
  };

function T(e, t) {
  if (!e) return !1;
  let n = new Uint8Array(e);
  return n.length === t.length && n.every((e, n) => e === t[n])
}

function E(e) {
  return new Promise((t, n) => {
    let r = () => {
        clearTimeout(a), e.removeEventListener(`abort`, i)
      },
      i = () => {
        r(), n(e.reason)
      },
      a = setTimeout(() => {
        r(), n(Error(`Service worker unavailable`))
      }, 1e4);
    if (e.addEventListener(`abort`, i, {
        once: !0
      }), e.aborted) {
      i();
      return
    }
    navigator.serviceWorker.ready.then(e => {
      r(), t(e)
    }, e => {
      r(), n(e)
    })
  })
}
var D = new w;
export {
  p as a, _ as c, h as i, l, m as n, g as o, x as r, f as s, D as t
};