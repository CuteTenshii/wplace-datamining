const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BiymsgR8.js", "./DXDHrD2o.js", "./C0zwTQsw.js", "./NrE1x-Kk.js", "./BLUc1uLr.js", "./D6rWhY4a.js", "./BiTo61FT.js", "./a7QZC4SB.js", "./DwvdnolT.js", "./pKOrQQBa.js", "./MIjkXV5b.js", "./FnlLczIa.js", "./BrohplP5.js", "./NwTlnbFM.js"]))) => i.map(i => d[i]);
import {
  Xt as e,
  Yt as t
} from "./DXDHrD2o.js";
import "./C0zwTQsw.js";
import {
  a as n
} from "./D6rWhY4a.js";
import {
  N as r,
  vt as i
} from "./BiTo61FT.js";
import {
  t as a
} from "./B6HDVYVT.js";
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
        } = await import(`./BiymsgR8.js`).then(e => e.i);
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