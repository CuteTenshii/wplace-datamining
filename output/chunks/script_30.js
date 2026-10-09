import {
  Bt as e,
  Lt as t,
  Nt as n,
  jt as r,
  on as i,
  ut as a
} from "./D2z8HFb7.js";
import {
  t as o
} from "./D3UrmB6s.js";
import {
  S as s,
  yt as c
} from "./DlfqLR0-.js";
var l = new WeakMap,
  u = new WeakMap,
  d = class {
    constructor() {
      e(this, l, n(`loading`)), e(this, u, n(!1)), i(this, `controller`, void 0), i(this, `publicKey`, ``), i(this, `subscription`, void 0), i(this, `needsFreshSubscription`, !1), i(this, `lastPreferences`, ``)
    }
    get state() {
      return a(t(l, this))
    }
    set state(e) {
      r(t(l, this), e, !0)
    }
    get busy() {
      return a(t(u, this))
    }
    set busy(e) {
      r(t(u, this), e, !0)
    }
    start(e) {
      var t;
      (t = this.controller) == null || t.abort();
      let n = new AbortController;
      return this.controller = n, this.subscription = void 0, this.needsFreshSubscription = !1, this.publicKey = ``, this.lastPreferences = ``, this.busy = !1, this.state = `loading`, e !== void 0 && this.refresh(), () => n.abort()
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
          let e = await s.getNotificationPushConfig(t);
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
          let i = r ? await s.getNotificationPushStatus(r.endpoint, t) : {
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
        this.state === `off` && (this.needsFreshSubscription = !0), this.busy = !0;
        try {
          let e = await Notification.requestPermission();
          if (t.aborted) return;
          if (e !== `granted`) {
            this.state = e === `denied` ? `blocked` : `off`;
            return
          }
          let n = await p(t);
          if (t.aborted) return;
          let r = Uint8Array.from(atob(this.publicKey.replace(/-/g, `+`).replace(/_/g, `/`)), e => e.charCodeAt(0)),
            i = await n.pushManager.getSubscription();
          if (t.aborted || (i && (this.needsFreshSubscription || !f(i.options.applicationServerKey, r)) && (await i.unsubscribe(), i = null), t.aborted) || (i ?? (i = await n.pushManager.subscribe({
              userVisibleOnly: !0,
              applicationServerKey: r
            })), t.aborted)) return;
          this.subscription = i, this.needsFreshSubscription = !1;
          let a = o.device_notifications_body(),
            l = c.muted,
            u = o.device_notifications_charges_full();
          await s.subscribeNotificationPush(i.toJSON(), a, l, u, t), t.aborted || (this.lastPreferences = JSON.stringify([a, l, u]), this.state = `on`)
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
          if (await s.unsubscribeNotificationPush(this.subscription.endpoint, t), t.aborted) return;
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
          let r = await s.updateNotificationPushPreferences(this.subscription.endpoint, e, t, n, i);
          i.aborted || (this.lastPreferences = a, r.enabled || (this.state = `off`))
        } catch {
          i.aborted || (this.state = `error`)
        } finally {
          i.aborted || (this.busy = !1)
        }
      }
    }
  };

function f(e, t) {
  if (!e) return !1;
  let n = new Uint8Array(e);
  return n.length === t.length && n.every((e, n) => e === t[n])
}

function p(e) {
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
var m = new d;
export {
  m as t
};