const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Bf-oYpH9.js", "./_fg_EdZg.js", "./DhUcoEdH.js", "./CxdjnXYc.js", "./CQHMXUZ-.js", "./-d8bC4tg.js"]))) => i.map(i => d[i]);
import {
  At as e,
  Ct as t,
  E as n,
  J as r,
  Jt as i,
  K as a,
  Nt as o,
  Ot as s,
  Tt as c,
  U as l,
  X as u,
  _t as d,
  a as f,
  d as p,
  o as m,
  qt as h,
  rn as g,
  st as _,
  tn as v,
  v as y,
  vt as b,
  wt as x
} from "./DhUcoEdH.js";
import {
  a as S
} from "./CxdjnXYc.js";
import "./B8UK1oE5.js";
import {
  C,
  G as w,
  g as T,
  h as ee,
  n as E,
  q as D,
  tt as O
} from "./_fg_EdZg.js";
import {
  t as k
} from "./CQHMXUZ-.js";
import {
  n as A,
  t as j
} from "./-d8bC4tg.js";
import {
  t as te
} from "./DUNwNXs2.js";
import {
  t as M
} from "./8UDvpwwv.js";
import {
  r as N
} from "./BKXYuc3v.js";
var P = D(`Haptics`, {
    web: () => S(() => import(`./Bf-oYpH9.js`).then(e => new e.HapticsWeb), __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url)
  }),
  F, I = {
    success: {
      pattern: [{
        duration: 30,
        intensity: .5
      }, {
        delay: 60,
        duration: 40,
        intensity: 1
      }]
    },
    warning: {
      pattern: [{
        duration: 40,
        intensity: .8
      }, {
        delay: 100,
        duration: 40,
        intensity: .6
      }]
    },
    error: {
      pattern: [{
        duration: 40,
        intensity: .9
      }, {
        delay: 40,
        duration: 40,
        intensity: .9
      }, {
        delay: 40,
        duration: 40,
        intensity: .9
      }]
    },
    light: {
      pattern: [{
        duration: 15,
        intensity: .4
      }]
    },
    medium: {
      pattern: [{
        duration: 25,
        intensity: .7
      }]
    },
    heavy: {
      pattern: [{
        duration: 35,
        intensity: 1
      }]
    },
    soft: {
      pattern: [{
        duration: 40,
        intensity: .5
      }]
    },
    rigid: {
      pattern: [{
        duration: 10,
        intensity: 1
      }]
    },
    selection: {
      pattern: [{
        duration: 8,
        intensity: .3
      }]
    },
    nudge: {
      pattern: [{
        duration: 80,
        intensity: .8
      }, {
        delay: 80,
        duration: 50,
        intensity: .3
      }]
    },
    buzz: {
      pattern: [{
        duration: 1e3,
        intensity: 1
      }]
    }
  },
  L = 16,
  R = 184,
  z = 1e3,
  B = 20;

function V(e) {
  if (typeof e == `number`) return {
    vibrations: [{
      duration: e
    }]
  };
  if (typeof e == `string`) {
    let t = I[e];
    return t ? {
      vibrations: t.pattern.map(e => ({
        ...e
      }))
    } : (console.warn(`[web-haptics] Unknown preset: "${e}"`), null)
  }
  if (Array.isArray(e)) {
    if (e.length === 0) return {
      vibrations: []
    };
    if (typeof e[0] == `number`) {
      let t = e,
        n = [];
      for (let e = 0; e < t.length; e += 2) {
        let r = e > 0 ? t[e - 1] : 0;
        n.push({
          ...r > 0 && {
            delay: r
          },
          duration: t[e]
        })
      }
      return {
        vibrations: n
      }
    }
    return {
      vibrations: e.map(e => ({
        ...e
      }))
    }
  }
  return {
    vibrations: e.pattern.map(e => ({
      ...e
    }))
  }
}

function H(e, t) {
  if (t >= 1) return [e];
  if (t <= 0) return [];
  let n = Math.max(1, Math.round(B * t)),
    r = B - n,
    i = [],
    a = e;
  for (; a >= B;) i.push(n), i.push(r), a -= B;
  if (a > 0) {
    let e = Math.max(1, Math.round(a * t));
    i.push(e);
    let n = a - e;
    n > 0 && i.push(n)
  }
  return i
}

function U(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = Math.max(0, Math.min(1, i.intensity ?? t)),
      o = i.delay ?? 0;
    o > 0 && (n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += o : (n.length === 0 && n.push(0), n.push(o)));
    let s = H(i.duration, a);
    if (s.length === 0) {
      n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += i.duration : i.duration > 0 && (n.push(0), n.push(i.duration));
      continue
    }
    for (let e of s) n.push(e)
  }
  return n
}
var W = 0,
  ne = (F = class e {
    constructor(e) {
      g(this, `hapticLabel`, null), g(this, `domInitialized`, !1), g(this, `instanceId`, void 0), g(this, `debug`, void 0), g(this, `showSwitch`, void 0), g(this, `rafId`, null), g(this, `patternResolve`, null), g(this, `audioCtx`, null), g(this, `audioFilter`, null), g(this, `audioGain`, null), g(this, `audioBuffer`, null), this.instanceId = ++W, this.debug = (e == null ? void 0 : e.debug) ?? !1, this.showSwitch = (e == null ? void 0 : e.showSwitch) ?? !1
    }
    async trigger(t = [{
      duration: 25,
      intensity: .7
    }], n) {
      let r = V(t);
      if (!r) return;
      let {
        vibrations: i
      } = r;
      if (i.length === 0) return;
      let a = Math.max(0, Math.min(1, (n == null ? void 0 : n.intensity) ?? .5));
      for (let e of i)
        if (e.duration > z && (e.duration = z), !Number.isFinite(e.duration) || e.duration < 0 || e.delay !== void 0 && (!Number.isFinite(e.delay) || e.delay < 0)) {
          console.warn(`[web-haptics] Invalid vibration values. Durations and delays must be finite non-negative numbers.`);
          return
        } if (e.isSupported && navigator.vibrate(U(i, a)), !e.isSupported || this.debug) {
        var o;
        if (this.ensureDOM(), !this.hapticLabel) return;
        this.debug && await this.ensureAudio(), this.stopPattern();
        let e = (((o = i[0]) == null ? void 0 : o.delay) ?? 0) === 0;
        if (e && (this.hapticLabel.click(), this.debug && this.audioCtx)) {
          let e = Math.max(0, Math.min(1, i[0].intensity ?? a));
          this.playClick(e)
        }
        await this.runPattern(i, a, e)
      }
    }
    cancel() {
      this.stopPattern(), e.isSupported && navigator.vibrate(0)
    }
    destroy() {
      this.stopPattern(), this.hapticLabel && (this.hapticLabel.remove(), this.hapticLabel = null, this.domInitialized = !1), this.audioCtx && (this.audioCtx.close(), this.audioCtx = null, this.audioFilter = null, this.audioGain = null, this.audioBuffer = null)
    }
    setDebug(e) {
      this.debug = e, !e && this.audioCtx && (this.audioCtx.close(), this.audioCtx = null, this.audioFilter = null, this.audioGain = null, this.audioBuffer = null)
    }
    setShowSwitch(e) {
      if (this.showSwitch = e, this.hapticLabel) {
        let t = this.hapticLabel.querySelector(`input`);
        this.hapticLabel.style.display = e ? `` : `none`, t && (t.style.display = e ? `` : `none`)
      }
    }
    stopPattern() {
      var e;
      this.rafId !== null && (cancelAnimationFrame(this.rafId), this.rafId = null), (e = this.patternResolve) == null || e.call(this), this.patternResolve = null
    }
    runPattern(e, t, n) {
      return new Promise(r => {
        this.patternResolve = r;
        let i = [],
          a = 0;
        for (let n of e) {
          let e = Math.max(0, Math.min(1, n.intensity ?? t)),
            r = n.delay ?? 0;
          r > 0 && (a += r, i.push({
            end: a,
            isOn: !1,
            intensity: 0
          })), a += n.duration, i.push({
            end: a,
            isOn: !0,
            intensity: e
          })
        }
        let o = a,
          s = 0,
          c = -1,
          l = e => {
            s === 0 && (s = e);
            let t = e - s;
            if (t >= o) {
              this.rafId = null, this.patternResolve = null, r();
              return
            }
            let a = i[0];
            for (let e of i)
              if (t < e.end) {
                a = e;
                break
              } if (a.isOn) {
              var u, d;
              let t = L + (1 - a.intensity) * R;
              c === -1 ? (c = e, n || ((u = this.hapticLabel) == null || u.click(), this.debug && this.audioCtx && this.playClick(a.intensity), n = !0)) : e - c >= t && ((d = this.hapticLabel) == null || d.click(), this.debug && this.audioCtx && this.playClick(a.intensity), c = e)
            }
            this.rafId = requestAnimationFrame(l)
          };
        this.rafId = requestAnimationFrame(l)
      })
    }
    playClick(e) {
      if (!this.audioCtx || !this.audioFilter || !this.audioGain || !this.audioBuffer) return;
      let t = this.audioBuffer.getChannelData(0);
      for (let e = 0; e < t.length; e++) t[e] = (Math.random() * 2 - 1) * Math.exp(-e / 25);
      this.audioGain.gain.value = .5 * e;
      let n = 2e3 + e * 2e3,
        r = 1 + (Math.random() - .5) * .3;
      this.audioFilter.frequency.value = n * r;
      let i = this.audioCtx.createBufferSource();
      i.buffer = this.audioBuffer, i.connect(this.audioFilter), i.onended = () => i.disconnect(), i.start()
    }
    async ensureAudio() {
      var e;
      if (!this.audioCtx && typeof AudioContext < `u`) {
        this.audioCtx = new AudioContext, this.audioFilter = this.audioCtx.createBiquadFilter(), this.audioFilter.type = `bandpass`, this.audioFilter.frequency.value = 4e3, this.audioFilter.Q.value = 8, this.audioGain = this.audioCtx.createGain(), this.audioFilter.connect(this.audioGain), this.audioGain.connect(this.audioCtx.destination), this.audioBuffer = this.audioCtx.createBuffer(1, this.audioCtx.sampleRate * .004, this.audioCtx.sampleRate);
        let e = this.audioBuffer.getChannelData(0);
        for (let t = 0; t < e.length; t++) e[t] = (Math.random() * 2 - 1) * Math.exp(-t / 25)
      }((e = this.audioCtx) == null ? void 0 : e.state) === `suspended` && await this.audioCtx.resume()
    }
    ensureDOM() {
      if (this.domInitialized || typeof document > `u`) return;
      let e = `web-haptics-${this.instanceId}`,
        t = document.createElement(`label`);
      t.setAttribute(`for`, e), t.textContent = `Haptic feedback`, t.style.position = `fixed`, t.style.bottom = `10px`, t.style.left = `10px`, t.style.padding = `5px 10px`, t.style.backgroundColor = `rgba(0, 0, 0, 0.7)`, t.style.color = `white`, t.style.fontFamily = `sans-serif`, t.style.fontSize = `14px`, t.style.borderRadius = `4px`, t.style.zIndex = `9999`, t.style.userSelect = `none`, this.hapticLabel = t;
      let n = document.createElement(`input`);
      n.type = `checkbox`, n.setAttribute(`switch`, ``), n.id = e, n.style.all = `initial`, n.style.appearance = `auto`, this.showSwitch || (t.style.display = `none`, n.style.display = `none`), t.appendChild(n), document.body.appendChild(t), this.domInitialized = !0
    }
  }, g(F, `isSupported`, typeof navigator < `u` && typeof navigator.vibrate == `function`), F),
  G = navigator.maxTouchPoints > 0 ? new ne : null,
  K = w.isNativePlatform() && w.isPluginAvailable(`Haptics`),
  q = {
    success: A.Success,
    warning: A.Warning,
    error: A.Error
  },
  J = {
    light: j.Light,
    soft: j.Light,
    selection: j.Light,
    medium: j.Medium,
    rigid: j.Medium,
    heavy: j.Heavy
  },
  Y = K || !!G;

function X(e) {
  if (!O.haptics) return;
  let t = typeof e == `string` ? q[e] : void 0;
  if (!K) {
    G == null || G.trigger(e);
    return
  }
  if (t) {
    P.notification({
      type: t
    }).catch(() => {});
    return
  }
  if (typeof e == `string`) {
    let t = J[e];
    if (t) {
      P.impact({
        style: t
      }).catch(() => {});
      return
    }
  }
  oe(re(e))
}

function re(e) {
  if (e == null) return [{
    duration: 25,
    intensity: .7
  }];
  if (typeof e == `number`) return [{
    duration: e
  }];
  if (typeof e == `string`) {
    let t = I[e];
    return (t == null ? void 0 : t.pattern.map(e => ({
      ...e
    }))) ?? []
  }
  if (Array.isArray(e)) {
    if (typeof e[0] == `number`) {
      let t = e,
        n = [];
      for (let e = 0; e < t.length; e += 2) n.push({
        duration: t[e],
        delay: e > 0 ? t[e - 1] : 0
      });
      return n
    }
    return e
  }
  return e.pattern
}
var ie = 80;

function ae(e = 1) {
  return e < .5 ? j.Light : e < .8 ? j.Medium : j.Heavy
}
var Z = e => new Promise(t => setTimeout(t, e));
async function oe(e) {
  for (let {
      duration: t,
      intensity: n,
      delay: r
    }
    of e) r && await Z(r), t >= ie ? await P.vibrate({
    duration: t
  }).catch(() => {}) : P.impact({
    style: ae(n)
  }).catch(() => {}), await Z(t)
}
var se = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  ce = u(`<canvas></canvas>`);

function Q(t, n) {
  i(n, !0);
  let a = f(n, `width`, 15, 0),
    c = m(n, se),
    l = o(() => Math.ceil(n.fontSize)),
    u = e(null),
    d = window.devicePixelRatio ?? 1;
  b(() => {
    let e = _(u).getContext(`2d`);
    e.textBaseline = `top`, e.font = `${n.weight??`normal`} ${n.fontSize}px ${n.mono?`"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`:`"Geist", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`}`, e.fillStyle = n.color ?? `#394e6a`, e.setTransform(d, 0, 0, d, 0, 0), e.clearRect(0, 0, a(), _(l)), e.fillText(n.value, 0, 0);
    let t = e.measureText(n.value);
    a(Math.ceil(t.actualBoundingBoxRight)), s(l, t.actualBoundingBoxDescent)
  });
  var g = ce();
  y(g, () => ({
    width: a() * d,
    height: _(l) * d,
    style: `width: ${a()??``}px; height: ${_(l)??``}px`,
    ...c
  })), p(g, e => s(u, e), () => _(u)), r(t, g), h()
}
var le = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `onclick`]),
  ue = u(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  $ = u(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  de = u(`<span class="text-xl leading-none font-semibold" aria-hidden="true">&infin;</span>`),
  fe = u(`<span><!></span>`),
  pe = u(`<span class="w-7 text-xs"> </span>`),
  me = u(`<span class="flex items-center gap-1 sm:mt-px"><!> <!></span>`),
  he = u(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  ge = u(`<button><div class="flex items-center gap-1.5"><!></div> <!></button>`);

function _e(u, g) {
  i(g, !0);
  let b = f(g, `showCooldown`, 3, !0),
    S = m(g, le),
    w = e(0),
    D = e(void 0),
    A = e(void 0),
    j = o(() => g.cooldownMs ?? E.cooldown),
    P = o(() => O.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    F = o(() => {
      let e = E.timeoutUntil;
      if (!e || e.getTime() <= O.now) return;
      let t = T(e, O.now);
      return {
        isBan: t,
        countdown: t ? null : ee(e, O.now)
      }
    });

  function I({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  N(() => [g.loading, g.maxWidth], () => {
    s(A, void 0), requestAnimationFrame(() => {
      if (!_(D)) return;
      let e = _(D).offsetWidth;
      !g.loading && g.maxWidth !== void 0 && e + 20 > g.maxWidth ? s(A, 16 * (g.maxWidth / e) * .8) : s(A, void 0)
    })
  });
  var L = ge(),
    R = e => {
      var t;
      X(`heavy`), (t = g.onclick) == null || t.call(g, e)
    };
  y(L, () => ({
    ...S,
    onclick: R,
    class: `btn btn-lg sm:btn-xl relative ${_(F)?_(F).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${g.class??``}`,
    style: `max-width: ${g.maxWidth?`${g.maxWidth}px`:`none`}
	${_(A)?`;font-size: ${_(A)}px`:``}`
  }));
  var z = t(L),
    B = t(z),
    V = e => {
      var n = $(),
        i = x(n);
      M(i, {
        class: `size-6`
      });
      var o = c(i, 2),
        s = t(o),
        u = c(s),
        f = e => {
          var n = ue(),
            i = t(n, !0);
          v(n), d(e => a(i, e), [() => I(_(F).countdown)]), r(e, n)
        };
      l(u, e => {
        _(F).countdown && e(f)
      }), v(o), d(e => a(s, `${e??``} `), [() => _(F).isBan ? k.banned() : k.timeout()]), r(e, n)
    },
    H = e => {
      var i = $(),
        u = x(i);
      te(u, {
        class: `size-6`
      });
      var f = c(u, 2),
        p = t(f),
        m = c(p),
        h = e => {
          let i = o(() => g.chargeMax ?? E.data.charges.max),
            u = o(() => g.chargeMax === void 0 && E.data.charges.infinite);
          var f = me(),
            p = t(f),
            m = e => {
              var t = de();
              r(e, t)
            },
            h = e => {
              var a = fe(),
                c = t(a);
              {
                let e = o(() => _(A) ?? 16),
                  t = o(() => `${Math.floor(g.charges)}/${_(i)}`),
                  n = o(() => g.disabled ? _(P) : `#ffffff`);
                Q(c, {
                  weight: 600,
                  get fontSize() {
                    return _(e)
                  },
                  get value() {
                    return _(t)
                  },
                  get color() {
                    return _(n)
                  },
                  get width() {
                    return _(w)
                  },
                  set width(e) {
                    s(w, e, !0)
                  }
                })
              }
              v(a), d(e => n(a, `width: ${e??``}px`), [() => (Math.floor(_(w) / 5) + 1) * 5]), r(e, a)
            };
          l(p, e => {
            _(u) ? e(m) : e(h, -1)
          });
          var y = c(p, 2),
            x = e => {
              var n = pe(),
                i = t(n);
              v(n), d(e => a(i, `(${e??``})`), [() => C(_(j))]), r(e, n)
            };
          l(y, e => {
            !_(u) && b() && g.charges < _(i) && _(j) !== void 0 && e(x)
          }), v(f), r(e, f)
        };
      l(m, e => {
        g.charges !== void 0 && E.data && e(h)
      }), v(f), d(e => a(p, `${e??``} `), [() => k.paint()]), r(e, i)
    };
  l(B, e => {
    _(F) ? e(V) : e(H, -1)
  }), v(z), p(z, e => s(D, e), () => _(D));
  var U = c(z, 2),
    W = e => {
      var t = he();
      r(e, t)
    };
  l(U, e => {
    g.loading && e(W)
  }), v(L), r(u, L), h()
}
export {
  X as i, Q as n, Y as r, _e as t
};