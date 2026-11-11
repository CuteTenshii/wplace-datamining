const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BKE-WMeR.js", "./DXDHrD2o.js", "./CfKUWwDW.js", "./CuEs_gYZ.js", "./DtJdFIA8.js", "./CyFWViRh.js", "./Dm9i_L6H.js", "./a7QZC4SB.js", "./BxjIJ8nh.js", "./pKOrQQBa.js", "./FnlLczIa.js", "./BrohplP5.js", "./MIjkXV5b.js", "./NwTlnbFM.js"]))) => i.map(i => d[i]);
import {
  Xt as e,
  Yt as t
} from "./DXDHrD2o.js";
import "./CfKUWwDW.js";
import {
  a as n
} from "./CyFWViRh.js";
import {
  X as r,
  ht as i
} from "./Dm9i_L6H.js";
import {
  t as a
} from "./BcT9l4fl.js";
import {
  s as o
} from "./BGL3fwXZ.js";
var s = e({
  status: `unavailable`
});
async function c() {
  let e = t(s);
  if (e.status === `available`) {
    s.set({
      status: `prompting`
    });
    try {
      return await e.event.prompt()
    } finally {
      t(s).status === `prompting` && s.set({
        status: `unavailable`
      })
    }
  }
}

function l() {
  return window.matchMedia(`(display-mode: standalone)`).matches || `standalone` in window.navigator && window.navigator.standalone === !0
}

function u() {
  let e = `last-unfocus`,
    t = new AbortController,
    c = window.pwaInstallPrompt;
  if (window.pwaInstallPrompt = void 0, c && s.set({
      status: `available`,
      event: c
    }), window.addEventListener(`beforeinstallprompt`, e => {
      e.preventDefault(), window.pwaInstallPrompt === e && (window.pwaInstallPrompt = void 0), s.set({
        status: `available`,
        event: e
      })
    }, {
      signal: t.signal
    }), window.addEventListener(`appinstalled`, () => {
      s.set({
        status: `installed`
      })
    }, {
      signal: t.signal
    }), l() && queueMicrotask(async () => {
      let {
        TWAServices: e
      } = await n(async () => {
        let {
          TWAServices: e
        } = await import(`./BKE-WMeR.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), import.meta.url);
      await e.onInit(t)
    }), l() || a.isIOSApp()) {
    let n = () => {
        let t = localStorage.getItem(e);
        if (t) {
          let e = parseInt(t, 10);
          Date.now() - e > 5 * r.minute && window.location.reload()
        }
      },
      a = () => {
        localStorage.setItem(e, Date.now().toString());
        let t = i.map;
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
    t.abort(), s.set({
      status: `unavailable`
    })
  }
}
export {
  u as i, c as n, s as r, l as t
};