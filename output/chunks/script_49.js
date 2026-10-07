const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./vKcszeCV.js", "./CZtdCIYn.js", "./D2z8HFb7.js", "./DP7ilGQK.js", "./a7QZC4SB.js", "./HVsDxreN.js", "./Bpg9SJXw.js", "./pKOrQQBa.js", "./Bz1_WS0V.js", "./-d8bC4tg.js"]))) => i.map(i => d[i]);
import {
  D as e,
  Dt as t,
  Et as n,
  G as r,
  It as i,
  J as a,
  Nt as o,
  O as s,
  Ot as c,
  Q as l,
  X as u,
  Xt as d,
  Zt as f,
  _ as p,
  a as m,
  bt as h,
  f as g,
  in as _,
  jt as v,
  k as y,
  o as b,
  on as x,
  ut as S,
  x as ee,
  xt as C,
  y as w
} from "./D2z8HFb7.js";
import {
  a as T
} from "./DP7ilGQK.js";
import "./B8UK1oE5.js";
import {
  n as E
} from "./HVsDxreN.js";
import {
  t as D
} from "./Bpg9SJXw.js";
import {
  E as O,
  N as te,
  T as ne,
  dt as k,
  lt as A,
  n as j,
  yt as M
} from "./CZtdCIYn.js";
import {
  n as N,
  t as P
} from "./-d8bC4tg.js";
import {
  t as F
} from "./CmpYgWf9.js";
import {
  t as re
} from "./B05-qCW5.js";
import {
  r as ie
} from "./BTkb9x1Z.js";
var I = k(`Haptics`, {
    web: () => T(() => import(`./vKcszeCV.js`).then(e => new e.HapticsWeb), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), import.meta.url)
  }),
  L, R = {
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
  z = 16,
  B = 184,
  V = 1e3,
  H = 20;

function U(e) {
  if (typeof e == `number`) return {
    vibrations: [{
      duration: e
    }]
  };
  if (typeof e == `string`) {
    let t = R[e];
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

function W(e, t) {
  if (t >= 1) return [e];
  if (t <= 0) return [];
  let n = Math.max(1, Math.round(H * t)),
    r = H - n,
    i = [],
    a = e;
  for (; a >= H;) i.push(n), i.push(r), a -= H;
  if (a > 0) {
    let e = Math.max(1, Math.round(a * t));
    i.push(e);
    let n = a - e;
    n > 0 && i.push(n)
  }
  return i
}

function G(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = Math.max(0, Math.min(1, i.intensity ?? t)),
      o = i.delay ?? 0;
    o > 0 && (n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += o : (n.length === 0 && n.push(0), n.push(o)));
    let s = W(i.duration, a);
    if (s.length === 0) {
      n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += i.duration : i.duration > 0 && (n.push(0), n.push(i.duration));
      continue
    }
    for (let e of s) n.push(e)
  }
  return n
}
var K = 0,
  q = (L = class e {
    constructor(e) {
      x(this, `hapticLabel`, null), x(this, `domInitialized`, !1), x(this, `instanceId`, void 0), x(this, `debug`, void 0), x(this, `showSwitch`, void 0), x(this, `rafId`, null), x(this, `patternResolve`, null), x(this, `audioCtx`, null), x(this, `audioFilter`, null), x(this, `audioGain`, null), x(this, `audioBuffer`, null), this.instanceId = ++K, this.debug = (e == null ? void 0 : e.debug) ?? !1, this.showSwitch = (e == null ? void 0 : e.showSwitch) ?? !1
    }
    async trigger(t = [{
      duration: 25,
      intensity: .7
    }], n) {
      let r = U(t);
      if (!r) return;
      let {
        vibrations: i
      } = r;
      if (i.length === 0) return;
      let a = Math.max(0, Math.min(1, (n == null ? void 0 : n.intensity) ?? .5));
      for (let e of i)
        if (e.duration > V && (e.duration = V), !Number.isFinite(e.duration) || e.duration < 0 || e.delay !== void 0 && (!Number.isFinite(e.delay) || e.delay < 0)) {
          console.warn(`[web-haptics] Invalid vibration values. Durations and delays must be finite non-negative numbers.`);
          return
        } if (e.isSupported && navigator.vibrate(G(i, a)), !e.isSupported || this.debug) {
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
              let t = z + (1 - a.intensity) * B;
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
  }, x(L, `isSupported`, typeof navigator < `u` && typeof navigator.vibrate == `function`), L),
  J = navigator.maxTouchPoints > 0 ? new q : null,
  Y = A.isNativePlatform() && A.isPluginAvailable(`Haptics`),
  ae = {
    success: N.Success,
    warning: N.Warning,
    error: N.Error
  },
  X = {
    light: P.Light,
    soft: P.Light,
    selection: P.Light,
    medium: P.Medium,
    rigid: P.Medium,
    heavy: P.Heavy
  },
  oe = Y || !!J;

function Z(e) {
  if (!M.haptics) return;
  let t = typeof e == `string` ? ae[e] : void 0;
  if (!Y) {
    J == null || J.trigger(e);
    return
  }
  if (t) {
    I.notification({
      type: t
    }).catch(() => {});
    return
  }
  if (typeof e == `string`) {
    let t = X[e];
    if (t) {
      I.impact({
        style: t
      }).catch(() => {});
      return
    }
  }
  ue(se(e))
}

function se(e) {
  if (e == null) return [{
    duration: 25,
    intensity: .7
  }];
  if (typeof e == `number`) return [{
    duration: e
  }];
  if (typeof e == `string`) {
    let t = R[e];
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
var ce = 80;

function le(e = 1) {
  return e < .5 ? P.Light : e < .8 ? P.Medium : P.Heavy
}
var Q = e => new Promise(t => setTimeout(t, e));
async function ue(e) {
  for (let {
      duration: t,
      intensity: n,
      delay: r
    }
    of e) r && await Q(r), t >= ce ? await I.vibrate({
    duration: t
  }).catch(() => {}) : I.impact({
    style: le(n)
  }).catch(() => {}), await Q(t)
}
var de = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  fe = l(`<canvas></canvas>`);

function $(e, t) {
  f(t, !0);
  let n = m(t, `width`, 15, 0),
    r = b(t, de),
    i = o(0),
    a = o(null);
  C(() => {
    if (!S(a)) return;
    let e = S(a),
      r = e.getContext(`2d`);
    if (!r) return;
    let o = t.value,
      s = t.color ?? `#394e6a`;
    E.pixelFonts;
    let c = getComputedStyle(e).getPropertyValue(t.mono ? `--font-mono` : `--font-sans`),
      l = `${t.weight??`normal`} ${t.fontSize}px ${c}`,
      u = window.devicePixelRatio || 1,
      d = !0;

    function f() {
      if (!d || !r) return;
      r.font = l, r.textBaseline = `alphabetic`;
      let t = r.measureText(o),
        a = Math.max(0, t.actualBoundingBoxLeft),
        c = Math.ceil(Math.max(0, t.actualBoundingBoxAscent)),
        f = Math.ceil(a + Math.max(t.width, t.actualBoundingBoxRight)),
        p = Math.ceil(c + Math.max(0, t.actualBoundingBoxDescent));
      e.width = Math.max(1, Math.ceil(f * u)), e.height = Math.max(1, Math.ceil(p * u)), r.setTransform(u, 0, 0, u, 0, 0), r.font = l, r.textBaseline = `alphabetic`, r.fillStyle = s, r.fillText(o, a, c), n(f), v(i, p, !0)
    }
    return f(), document.fonts.load(l, o).then(f, () => {}), document.fonts.addEventListener(`loadingdone`, f), () => {
      d = !1, document.fonts.removeEventListener(`loadingdone`, f)
    }
  });
  var s = fe();
  w(s, () => ({
    style: `width: ${n()??``}px; height: ${S(i)??``}px`,
    ...r
  })), g(s, e => v(a, e), () => S(a)), u(e, s), d()
}
var pe = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `onclick`]),
  me = l(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  he = l(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  ge = l(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  _e = l(`<span><!></span>`),
  ve = l(`<span> </span>`),
  ye = l(`<span><!> <!></span>`),
  be = l(`<!> <div><span> </span> <!></div>`, 1),
  xe = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  Se = l(`<button><div><!></div> <!></button>`);

function Ce(l, x) {
  f(x, !0);
  let C = m(x, `showCooldown`, 3, !0),
    T = m(x, `compact`, 3, !1),
    E = b(x, pe),
    k = o(0),
    A = o(void 0),
    N = o(void 0),
    P = i(() => x.cooldownMs ?? j.cooldown),
    I = i(() => M.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    L = i(() => {
      let e = j.timeoutUntil;
      if (!e || e.getTime() <= M.now) return;
      let t = O(e, M.now);
      return {
        isBan: t,
        countdown: t ? null : ne(e, M.now)
      }
    });

  function R({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  ie(() => [x.loading, x.maxWidth, T()], () => {
    v(N, void 0), requestAnimationFrame(() => {
      if (!S(A)) return;
      let e = S(A).offsetWidth;
      !T() && !x.loading && x.maxWidth !== void 0 && e + 20 > x.maxWidth ? v(N, 16 * (x.maxWidth / e) * .8) : v(N, void 0)
    })
  });
  var z = Se(),
    B = e => {
      var t;
      Z(`heavy`), (t = x.onclick) == null || t.call(x, e)
    };
  w(z, () => ({
    ...E,
    onclick: B,
    class: `btn btn-lg sm:btn-xl relative ${S(L)?S(L).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${x.class??``}`,
    style: `max-width: ${x.maxWidth?`${x.maxWidth}px`:`none`}
	${S(N)?`;font-size: ${S(N)}px`:``}`,
    [p]: {
      compact: T(),
      "w-max": T()
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var V = n(z);
  let H;
  var U = n(V),
    W = e => {
      var i = he(),
        o = t(i);
      re(o, {
        class: `size-6`
      });
      var s = c(o, 2),
        l = n(s),
        d = c(l),
        f = e => {
          var t = me(),
            r = n(t, !0);
          _(t), h(e => a(r, e), [() => R(S(L).countdown)]), u(e, t)
        };
      r(d, e => {
        S(L).countdown && e(f)
      }), _(s), h(e => a(l, `${e??``} `), [() => S(L).isBan ? D.banned() : D.timeout()]), u(e, i)
    },
    G = o => {
      var l = be(),
        d = t(l);
      {
        let e = i(() => T() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        F(d, {
          get class() {
            return S(e)
          }
        })
      }
      var f = c(d, 2),
        p = n(f),
        m = n(p, !0);
      _(p);
      var g = c(p, 2),
        b = t => {
          let o = i(() => x.chargeMax ?? j.data.charges.max),
            l = i(() => x.chargeMax === void 0 && j.data.charges.infinite);
          var d = ye();
          let f;
          var p = n(d),
            m = e => {
              var t = ge();
              u(e, t)
            },
            g = t => {
              var r = _e();
              let a;
              var c = n(r);
              {
                let e = i(() => T() ? `max-w-full object-contain` : void 0),
                  t = i(() => S(N) ?? 16),
                  n = i(() => `${Math.floor(x.charges)}/${S(o)}`),
                  r = i(() => x.disabled ? S(I) : `#ffffff`);
                $(c, {
                  get class() {
                    return S(e)
                  },
                  weight: 600,
                  get fontSize() {
                    return S(t)
                  },
                  get value() {
                    return S(n)
                  },
                  get color() {
                    return S(r)
                  },
                  get width() {
                    return S(k)
                  },
                  set width(e) {
                    v(k, e, !0)
                  }
                })
              }
              _(r), h(t => {
                a = s(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": T()
                }), e(r, `width: ${t??``}px`)
              }, [() => (Math.floor(S(k) / 5) + 1) * 5]), u(t, r)
            };
          r(p, e => {
            S(l) ? e(m) : e(g, -1)
          });
          var y = c(p, 2),
            b = e => {
              var t = ve();
              let r;
              var i = n(t);
              _(t), h(e => {
                r = s(t, 1, `paint-button-cooldown w-7 text-xs svelte-naszew`, null, r, {
                  "shrink-0": T()
                }), a(i, `(${e??``})`)
              }, [() => te(S(P))]), u(e, t)
            };
          r(y, e => {
            !S(l) && C() && x.charges < S(o) && S(P) !== void 0 && e(b)
          }), _(d), h(() => f = s(d, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": T(),
            "max-w-full": T()
          })), u(t, d)
        };
      r(g, e => {
        x.charges !== void 0 && j.data && e(b)
      }), _(f), h((e, t) => {
        s(f, 1, y(T() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(p, 1, y(T() ? `max-w-full truncate` : void 0), `svelte-naszew`), ee(p, `title`, e), a(m, t)
      }, [() => T() ? D.paint() : void 0, () => D.paint()]), u(o, l)
    };
  r(U, e => {
    S(L) ? e(W) : e(G, -1)
  }), _(V), g(V, e => v(A, e), () => S(A));
  var K = c(V, 2),
    q = e => {
      var t = xe();
      u(e, t)
    };
  r(K, e => {
    x.loading && e(q)
  }), _(z), h(() => H = s(V, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, H, {
    "min-w-0": T(),
    "max-w-full": T()
  })), u(l, z), d()
}
export {
  Z as i, $ as n, oe as r, Ce as t
};