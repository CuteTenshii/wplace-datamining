function w(r, {
  interval: s,
  immediate: a = !1
}) {
  let i = a ? -1 / 0 : Date.now();
  const d = () => typeof document > "u" || document.visibilityState === "visible";
  async function t() {
    const o = i;
    try {
      i = Date.now(), await r()
    } catch (l) {
      console.error(l), i = o
    }
  }
  const c = setInterval(() => {
    d() && t()
  }, s);
  a && t();
  async function e() {
    Date.now() - i >= s && await t()
  }
  const n = new AbortController;
  return typeof document < "u" && (document.addEventListener("visibilitychange", () => e(), {
    signal: n.signal
  }), document.addEventListener("resume", () => e(), {
    signal: n.signal
  })), typeof window < "u" && (window.addEventListener("pageshow", () => e(), {
    signal: n.signal
  }), window.addEventListener("focus", () => e(), {
    signal: n.signal
  }), window.addEventListener("online", () => e(), {
    signal: n.signal
  }), window.addEventListener("wplace:online", () => e(), {
    signal: n.signal
  })), () => {
    clearInterval(c), n.abort()
  }
}
export {
  w as f
};