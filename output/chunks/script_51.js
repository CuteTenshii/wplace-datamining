const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BxrGh7mQ.js", "./DlfqLR0-.js", "./D2z8HFb7.js", "./B4266N1A.js", "./a7QZC4SB.js", "./16AH6ZqH.js", "./D3UrmB6s.js", "./pKOrQQBa.js", "./DOmS4MBC.js", "./BrtrtlEe.js", "./-d8bC4tg.js"]))) => i.map(i => d[i]);
import {
  on as e
} from "./D2z8HFb7.js";
import {
  a as t
} from "./B4266N1A.js";
import {
  dt as n,
  lt as r,
  yt as i
} from "./DlfqLR0-.js";
import {
  n as a,
  t as o
} from "./-d8bC4tg.js";
var s = n(`Haptics`, {
    web: () => t(() => import(`./BxrGh7mQ.js`).then(e => new e.HapticsWeb), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), import.meta.url)
  }),
  c, l = {
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
  u = 16,
  d = 184,
  f = 1e3,
  p = 20;

function m(e) {
  if (typeof e == `number`) return {
    vibrations: [{
      duration: e
    }]
  };
  if (typeof e == `string`) {
    let t = l[e];
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

function h(e, t) {
  if (t >= 1) return [e];
  if (t <= 0) return [];
  let n = Math.max(1, Math.round(p * t)),
    r = p - n,
    i = [],
    a = e;
  for (; a >= p;) i.push(n), i.push(r), a -= p;
  if (a > 0) {
    let e = Math.max(1, Math.round(a * t));
    i.push(e);
    let n = a - e;
    n > 0 && i.push(n)
  }
  return i
}

function g(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = Math.max(0, Math.min(1, i.intensity ?? t)),
      o = i.delay ?? 0;
    o > 0 && (n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += o : (n.length === 0 && n.push(0), n.push(o)));
    let s = h(i.duration, a);
    if (s.length === 0) {
      n.length > 0 && n.length % 2 == 0 ? n[n.length - 1] += i.duration : i.duration > 0 && (n.push(0), n.push(i.duration));
      continue
    }
    for (let e of s) n.push(e)
  }
  return n
}
var _ = 0,
  v = (c = class t {
    constructor(t) {
      e(this, `hapticLabel`, null), e(this, `domInitialized`, !1), e(this, `instanceId`, void 0), e(this, `debug`, void 0), e(this, `showSwitch`, void 0), e(this, `rafId`, null), e(this, `patternResolve`, null), e(this, `audioCtx`, null), e(this, `audioFilter`, null), e(this, `audioGain`, null), e(this, `audioBuffer`, null), this.instanceId = ++_, this.debug = (t == null ? void 0 : t.debug) ?? !1, this.showSwitch = (t == null ? void 0 : t.showSwitch) ?? !1
    }
    async trigger(e = [{
      duration: 25,
      intensity: .7
    }], n) {
      let r = m(e);
      if (!r) return;
      let {
        vibrations: i
      } = r;
      if (i.length === 0) return;
      let a = Math.max(0, Math.min(1, (n == null ? void 0 : n.intensity) ?? .5));
      for (let e of i)
        if (e.duration > f && (e.duration = f), !Number.isFinite(e.duration) || e.duration < 0 || e.delay !== void 0 && (!Number.isFinite(e.delay) || e.delay < 0)) {
          console.warn(`[web-haptics] Invalid vibration values. Durations and delays must be finite non-negative numbers.`);
          return
        } if (t.isSupported && navigator.vibrate(g(i, a)), !t.isSupported || this.debug) {
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
      this.stopPattern(), t.isSupported && navigator.vibrate(0)
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
              var f, p;
              let t = u + (1 - a.intensity) * d;
              c === -1 ? (c = e, n || ((f = this.hapticLabel) == null || f.click(), this.debug && this.audioCtx && this.playClick(a.intensity), n = !0)) : e - c >= t && ((p = this.hapticLabel) == null || p.click(), this.debug && this.audioCtx && this.playClick(a.intensity), c = e)
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
  }, e(c, `isSupported`, typeof navigator < `u` && typeof navigator.vibrate == `function`), c),
  y = navigator.maxTouchPoints > 0 ? new v : null,
  b = r.isNativePlatform() && r.isPluginAvailable(`Haptics`),
  x = {
    success: a.Success,
    warning: a.Warning,
    error: a.Error
  },
  S = {
    light: o.Light,
    soft: o.Light,
    selection: o.Light,
    medium: o.Medium,
    rigid: o.Medium,
    heavy: o.Heavy
  },
  C = b || !!y;

function w(e) {
  if (!i.haptics) return;
  let t = typeof e == `string` ? x[e] : void 0;
  if (!b) {
    y == null || y.trigger(e);
    return
  }
  if (t) {
    s.notification({
      type: t
    }).catch(() => {});
    return
  }
  if (typeof e == `string`) {
    let t = S[e];
    if (t) {
      s.impact({
        style: t
      }).catch(() => {});
      return
    }
  }
  k(T(e))
}

function T(e) {
  if (e == null) return [{
    duration: 25,
    intensity: .7
  }];
  if (typeof e == `number`) return [{
    duration: e
  }];
  if (typeof e == `string`) {
    let t = l[e];
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
var E = 80;

function D(e = 1) {
  return e < .5 ? o.Light : e < .8 ? o.Medium : o.Heavy
}
var O = e => new Promise(t => setTimeout(t, e));
async function k(e) {
  for (let {
      duration: t,
      intensity: n,
      delay: r
    }
    of e) r && await O(r), t >= E ? await s.vibrate({
    duration: t
  }).catch(() => {}) : s.impact({
    style: D(n)
  }).catch(() => {}), await O(t)
}
export {
  w as n, C as t
};