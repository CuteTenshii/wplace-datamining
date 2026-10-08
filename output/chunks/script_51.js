const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Cm1JWmQB.js", "./CzXEc-K8.js", "./D2z8HFb7.js", "./DP7ilGQK.js", "./a7QZC4SB.js", "./HVsDxreN.js", "./Bpg9SJXw.js", "./pKOrQQBa.js", "./DOmS4MBC.js", "./BrtrtlEe.js", "./-d8bC4tg.js"]))) => i.map(i => d[i]);
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
} from "./njokBD2q.js";
import {
  t as O
} from "./BMA24uln.js";
import {
  t as k
} from "./Bpg9SJXw.js";
import {
  E as te,
  N as ne,
  T as re,
  dt as A,
  lt as j,
  n as M,
  yt as N
} from "./CzXEc-K8.js";
import {
  n as P,
  t as F
} from "./-d8bC4tg.js";
import {
  t as ie
} from "./wq-G885-.js";
import {
  t as ae
} from "./CrumhOK-.js";
import {
  r as oe
} from "./DG8R2unG.js";

function I(e, t, n, r = 14) {
  let i = t.split(`,`)[0].trim().replaceAll(/['"]/g, ``),
    a = i === `Pixelify Sans` ? 11 : i === `WPlace Pixel Mono` ? 10 : 0;
  if (!a) return e;
  let o = a / (Number.isFinite(n) && n > 0 ? n : 1);
  return Math.min(e, Math.max(Math.min(e, r), Math.round(e / o) * o))
}
var L = A(`Haptics`, {
    web: () => T(() => import(`./Cm1JWmQB.js`).then(e => new e.HapticsWeb), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), import.meta.url)
  }),
  R, z = {
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
  B = 16,
  V = 184,
  H = 1e3,
  U = 20;

function W(e) {
  if (typeof e == `number`) return {
    vibrations: [{
      duration: e
    }]
  };
  if (typeof e == `string`) {
    let t = z[e];
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

function G(e, t) {
  if (t >= 1) return [e];
  if (t <= 0) return [];
  let n = Math.max(1, Math.round(U * t)),
    r = U - n,
    i = [],
    a = e;
  for (; a >= U;) i.push(n), i.push(r), a -= U;
  if (a > 0) {
    let e = Math.max(1, Math.round(a * t));
    i.push(e);
    let n = a - e;
    n > 0 && i.push(n)
  }
  return i
}

function K(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = Math.max(0, Math.min(1, i.intensity ?? t)),
      o = i.delay ?? 0;
    o > 0 && (n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += o : (n.length === 0 && n.push(0), n.push(o)));
    let s = G(i.duration, a);
    if (s.length === 0) {
      n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += i.duration : i.duration > 0 && (n.push(0), n.push(i.duration));
      continue
    }
    for (let e of s) n.push(e)
  }
  return n
}
var q = 0,
  se = (R = class e {
    constructor(e) {
      x(this, `hapticLabel`, null), x(this, `domInitialized`, !1), x(this, `instanceId`, void 0), x(this, `debug`, void 0), x(this, `showSwitch`, void 0), x(this, `rafId`, null), x(this, `patternResolve`, null), x(this, `audioCtx`, null), x(this, `audioFilter`, null), x(this, `audioGain`, null), x(this, `audioBuffer`, null), this.instanceId = ++q, this.debug = (e == null ? void 0 : e.debug) ?? !1, this.showSwitch = (e == null ? void 0 : e.showSwitch) ?? !1
    }
    async trigger(t = [{
      duration: 25,
      intensity: .7
    }], n) {
      let r = W(t);
      if (!r) return;
      let {
        vibrations: i
      } = r;
      if (i.length === 0) return;
      let a = Math.max(0, Math.min(1, (n == null ? void 0 : n.intensity) ?? .5));
      for (let e of i)
        if (e.duration > H && (e.duration = H), !Number.isFinite(e.duration) || e.duration < 0 || e.delay !== void 0 && (!Number.isFinite(e.delay) || e.delay < 0)) {
          console.warn(`[web-haptics] Invalid vibration values. Durations and delays must be finite non-negative numbers.`);
          return
        } if (e.isSupported && navigator.vibrate(K(i, a)), !e.isSupported || this.debug) {
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
              let t = B + (1 - a.intensity) * V;
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
  }, x(R, `isSupported`, typeof navigator < `u` && typeof navigator.vibrate == `function`), R),
  J = navigator.maxTouchPoints > 0 ? new se : null,
  Y = j.isNativePlatform() && j.isPluginAvailable(`Haptics`),
  ce = {
    success: P.Success,
    warning: P.Warning,
    error: P.Error
  },
  le = {
    light: F.Light,
    soft: F.Light,
    selection: F.Light,
    medium: F.Medium,
    rigid: F.Medium,
    heavy: F.Heavy
  },
  ue = Y || !!J;

function X(e) {
  if (!N.haptics) return;
  let t = typeof e == `string` ? ce[e] : void 0;
  if (!Y) {
    J == null || J.trigger(e);
    return
  }
  if (t) {
    L.notification({
      type: t
    }).catch(() => {});
    return
  }
  if (typeof e == `string`) {
    let t = le[e];
    if (t) {
      L.impact({
        style: t
      }).catch(() => {});
      return
    }
  }
  me(de(e))
}

function de(e) {
  if (e == null) return [{
    duration: 25,
    intensity: .7
  }];
  if (typeof e == `number`) return [{
    duration: e
  }];
  if (typeof e == `string`) {
    let t = z[e];
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
var fe = 80;

function pe(e = 1) {
  return e < .5 ? F.Light : e < .8 ? F.Medium : F.Heavy
}
var Z = e => new Promise(t => setTimeout(t, e));
async function me(e) {
  for (let {
      duration: t,
      intensity: n,
      delay: r
    }
    of e) r && await Z(r), t >= fe ? await L.vibrate({
    duration: t
  }).catch(() => {}) : L.impact({
    style: pe(n)
  }).catch(() => {}), await Z(t)
}
var he = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  ge = l(`<canvas></canvas>`);

function Q(e, t) {
  f(t, !0);
  let n = m(t, `width`, 15, 0),
    r = b(t, he),
    i = o(0),
    a = o(null);
  C(() => {
    if (!S(a)) return;
    let e = S(a),
      r = e.getContext(`2d`);
    if (!r) return;
    let o = t.value,
      s = t.color ?? `#394e6a`,
      c = getComputedStyle(e).getPropertyValue(t.mono ? `--font-mono` : `--font-sans`),
      l = O.current || 1,
      u = (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16) * .875,
      d = E.pixelFonts && !D.standard ? I(t.fontSize, c, l, u) : t.fontSize,
      f = `${t.weight??`normal`} ${d}px ${c}`,
      p = !0;

    function m() {
      if (!p || !r) return;
      r.font = f, r.textBaseline = `alphabetic`;
      let t = r.measureText(o),
        a = Math.ceil(Math.max(0, t.actualBoundingBoxLeft) * l) / l,
        c = Math.ceil(Math.max(0, t.actualBoundingBoxAscent) * l) / l,
        u = Math.ceil((a + Math.max(t.width, t.actualBoundingBoxRight)) * l) / l,
        d = Math.ceil((c + Math.max(0, t.actualBoundingBoxDescent)) * l) / l;
      e.width = Math.max(1, Math.round(u * l)), e.height = Math.max(1, Math.round(d * l)), r.setTransform(l, 0, 0, l, 0, 0), r.font = f, r.textBaseline = `alphabetic`, r.fillStyle = s, r.fillText(o, a, c), n(u), v(i, d)
    }
    return m(), document.fonts.load(f, o).then(m, () => {}), document.fonts.addEventListener(`loadingdone`, m), () => {
      p = !1, document.fonts.removeEventListener(`loadingdone`, m)
    }
  });
  var s = ge();
  w(s, () => ({
    style: `width: ${n()??``}px; height: ${S(i)??``}px`,
    ...r
  })), g(s, e => v(a, e), () => S(a)), u(e, s), d()
}
var _e = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `onclick`]),
  ve = l(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  ye = l(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  be = l(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  xe = l(`<span><!></span>`),
  Se = l(`<span> </span>`),
  Ce = l(`<span><!> <!></span>`),
  we = l(`<!> <div><span> </span> <!></div>`, 1),
  Te = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  Ee = l(`<button><div><!></div> <!></button>`);

function De(l, x) {
  f(x, !0);
  let C = m(x, `showCooldown`, 3, !0),
    T = m(x, `compact`, 3, !1),
    O = b(x, _e),
    A = o(0),
    j = o(void 0),
    P = o(void 0),
    F = i(() => x.cooldownMs ?? M.cooldown),
    I = i(() => N.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    L = i(() => {
      let e = M.timeoutUntil;
      if (!e || e.getTime() <= N.now) return;
      let t = te(e, N.now);
      return {
        isBan: t,
        countdown: t ? null : re(e, N.now)
      }
    });

  function R({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  oe(() => [x.loading, x.maxWidth, T()], () => {
    v(P, void 0), requestAnimationFrame(() => {
      if (!S(j)) return;
      let e = S(j).offsetWidth;
      !T() && !x.loading && x.maxWidth !== void 0 && e + 20 > x.maxWidth ? v(P, 16 * (x.maxWidth / e) * .8) : v(P, void 0)
    })
  });
  var z = Ee(),
    B = e => {
      var t;
      X(`heavy`), (t = x.onclick) == null || t.call(x, e)
    };
  w(z, () => ({
    ...O,
    onclick: B,
    class: `btn btn-lg sm:btn-xl relative ${S(L)?S(L).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${x.class??``}`,
    style: `max-width: ${x.maxWidth?`${x.maxWidth}px`:`none`}
	${S(P)?`;--paint-font-size: ${S(P)}px`:``}`,
    [p]: {
      compact: T(),
      "pixel-fonts": E.pixelFonts && !D.standard,
      "w-max": T(),
      scaled: S(P) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var V = n(z);
  let H;
  var U = n(V),
    W = e => {
      var i = ye(),
        o = t(i);
      ae(o, {
        class: `size-6`
      });
      var s = c(o, 2),
        l = n(s),
        d = c(l),
        f = e => {
          var t = ve(),
            r = n(t, !0);
          _(t), h(e => a(r, e), [() => R(S(L).countdown)]), u(e, t)
        };
      r(d, e => {
        S(L).countdown && e(f)
      }), _(s), h(e => a(l, `${e??``} `), [() => S(L).isBan ? k.banned() : k.timeout()]), u(e, i)
    },
    G = o => {
      var l = we(),
        d = t(l);
      {
        let e = i(() => T() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        ie(d, {
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
          let o = i(() => x.chargeMax ?? M.data.charges.max),
            l = i(() => x.chargeMax === void 0 && M.data.charges.infinite);
          var d = Ce();
          let f;
          var p = n(d),
            m = e => {
              var t = be();
              u(e, t)
            },
            g = t => {
              var r = xe();
              let a;
              var c = n(r);
              {
                let e = i(() => T() ? `max-w-full object-contain` : void 0),
                  t = i(() => S(P) ?? 16),
                  n = i(() => `${Math.floor(x.charges)}/${S(o)}`),
                  r = i(() => x.disabled ? S(I) : `#ffffff`);
                Q(c, {
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
                    return S(A)
                  },
                  set width(e) {
                    v(A, e, !0)
                  }
                })
              }
              _(r), h(t => {
                a = s(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": T()
                }), e(r, `width: ${t??``}px`)
              }, [() => (Math.floor(S(A) / 5) + 1) * 5]), u(t, r)
            };
          r(p, e => {
            S(l) ? e(m) : e(g, -1)
          });
          var y = c(p, 2),
            b = e => {
              var t = Se();
              let r;
              var i = n(t);
              _(t), h(e => {
                r = s(t, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, r, {
                  "shrink-0": T()
                }), a(i, `(${e??``})`)
              }, [() => ne(S(F))]), u(e, t)
            };
          r(y, e => {
            !S(l) && C() && x.charges < S(o) && S(F) !== void 0 && e(b)
          }), _(d), h(() => f = s(d, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": T(),
            "max-w-full": T()
          })), u(t, d)
        };
      r(g, e => {
        x.charges !== void 0 && M.data && e(b)
      }), _(f), h((e, t) => {
        s(f, 1, y(T() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(p, 1, y(T() ? `max-w-full truncate` : void 0), `svelte-naszew`), ee(p, `title`, e), a(m, t)
      }, [() => T() ? k.paint() : void 0, () => k.paint()]), u(o, l)
    };
  r(U, e => {
    S(L) ? e(W) : e(G, -1)
  }), _(V), g(V, e => v(j, e), () => S(j));
  var K = c(V, 2),
    q = e => {
      var t = Te();
      u(e, t)
    };
  r(K, e => {
    x.loading && e(q)
  }), _(z), h(() => H = s(V, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, H, {
    "min-w-0": T(),
    "max-w-full": T()
  })), u(l, z), d()
}

function Oe(e, t, n) {
  return e < t ? t : e > n ? n : e
}

function $(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n
}

function ke(e) {
  if (e < 1e3) return String(e);
  let t = [`K`, `M`, `B`, `T`, `Q`],
    n = 0,
    r = e / 1e3;
  for (; Math.round(r) >= 1e3 && n < t.length - 1;) r /= 1e3, n++;
  return `${$(r,+(r<10))}${t[n]}`
}
export {
  Q as a, I as c, De as i, ke as n, ue as o, $ as r, X as s, Oe as t
};