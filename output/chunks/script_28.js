const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./CI3dlBOI.js", "./DXDHrD2o.js", "./gElyL89X.js", "./jKWTp3qA.js", "./BwlJHClZ.js", "./p48y03k_.js", "./Bx5qbGTA.js", "./a7QZC4SB.js", "./yKNWaSNN.js", "./pKOrQQBa.js", "./DzedHffB.js", "./BrohplP5.js", "./Ckw7SQBH.js", "./DZ8axt2R.js", "./DCEagYC0.js"]))) => i.map(i => d[i]);
import {
  Xt as e,
  Yt as t
} from "./DXDHrD2o.js";
import "./gElyL89X.js";
import {
  o as n
} from "./p48y03k_.js";
import {
  It as r,
  pt as i
} from "./Bx5qbGTA.js";
import {
  t as a
} from "./CiG2sj81.js";
import {
  s as o
} from "./BGL3fwXZ.js";
import {
  t as s
} from "./DCEagYC0.js";
var c = e({
  status: `unavailable`
});
async function l() {
  let e = t(c);
  if (e.status === `available`) {
    c.set({
      status: `prompting`
    });
    try {
      return await e.event.prompt()
    } finally {
      t(c).status === `prompting` && c.set({
        status: `unavailable`
      })
    }
  }
}

function u() {
  return window.matchMedia(`(display-mode: standalone)`).matches || `standalone` in window.navigator && window.navigator.standalone === !0
}
var d = new s(`twa:force_twa`, void 0, {
  syncTabs: !1,
  storage: `session`
});

function f() {
  return a.isIOSApp() ? `ios` : !u() || d.current === !1 ? `web` : d.current || document.referrer.startsWith(`android-app://`) ? `android` : `web`
}

function p() {
  let e = `last-unfocus`,
    t = new AbortController,
    s = window.pwaInstallPrompt;
  if (window.pwaInstallPrompt = void 0, s && c.set({
      status: `available`,
      event: s
    }), window.addEventListener(`beforeinstallprompt`, e => {
      e.preventDefault(), window.pwaInstallPrompt === e && (window.pwaInstallPrompt = void 0), c.set({
        status: `available`,
        event: e
      })
    }, {
      signal: t.signal
    }), window.addEventListener(`appinstalled`, () => {
      c.set({
        status: `installed`
      })
    }, {
      signal: t.signal
    }), u() && queueMicrotask(async () => {
      let {
        TWAServices: e
      } = await n(async () => {
        let {
          TWAServices: e
        } = await import(`./CI3dlBOI.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), import.meta.url);
      await e.onInit(t)
    }), u() || a.isIOSApp()) {
    let n = () => {
        let t = localStorage.getItem(e);
        if (t) {
          let e = parseInt(t, 10);
          Date.now() - e > 5 * i.minute && window.location.reload()
        }
      },
      a = () => {
        localStorage.setItem(e, Date.now().toString());
        let t = r.map;
        if (t) {
          let e = t.getCenter(),
            n = t.getZoom();
          o(e, n)
        }
      };
    document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `visible` ? n() : a()
    }, {
      signal: t.signal
    }), window.addEventListener(`pageshow`, n, {
      signal: t.signal
    }), window.addEventListener(`pagehide`, a, {
      signal: t.signal
    })
  }
  return () => {
    t.abort(), c.set({
      status: `unavailable`
    })
  }
}
export {
  f as a, c as i, u as n, p as o, l as r, d as t
};