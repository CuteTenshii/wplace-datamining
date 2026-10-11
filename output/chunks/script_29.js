const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./CBxH788_.js", "./D2z8HFb7.js", "./BjvBT4hB.js", "./BUwaBRtp.js", "./Cwzi4Meo.js", "./_a63otDQ.js", "./BrWCIlim.js", "./a7QZC4SB.js", "./_ECOYRJZ.js", "./pKOrQQBa.js", "./MIjkXV5b.js", "./BXIgRkw7.js", "./BrtrtlEe.js", "./DbaxEh4p.js"]))) => i.map(i => d[i]);
import {
  Gt as e,
  Kt as t
} from "./D2z8HFb7.js";
import "./BjvBT4hB.js";
import {
  a as n
} from "./_a63otDQ.js";
import {
  O as r,
  ft as i
} from "./BrWCIlim.js";
import {
  t as a
} from "./D5k8Ih7K.js";
import {
  o
} from "./C8yDr8fi.js";
var s = t({
  status: `unavailable`
});
async function c() {
  let t = e(s);
  if (t.status === `available`) {
    s.set({
      status: `prompting`
    });
    try {
      return await t.event.prompt()
    } finally {
      e(s).status === `prompting` && s.set({
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
        } = await import(`./CBxH788_.js`).then(e => e.i);
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