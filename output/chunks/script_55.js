function O(r) {
  const t = r - 1;
  return t * t * t + 1
}

function Z(r, {
  from: t,
  to: a
}, u = {}) {
  var {
    delay: f = 0,
    duration: n = i => Math.sqrt(i) * 120,
    easing: p = O
  } = u, s = getComputedStyle(r), y = s.transform === "none" ? "" : s.transform, [h, v] = s.transformOrigin.split(" ").map(parseFloat);
  h /= r.clientWidth, v /= r.clientHeight;
  var c = W(r),
    g = r.clientWidth / a.width / c,
    d = r.clientHeight / a.height / c,
    x = t.left + t.width * h,
    m = t.top + t.height * v,
    w = a.left + a.width * h,
    S = a.top + a.height * v,
    l = (x - w) * g,
    o = (m - S) * d,
    $ = t.width / a.width,
    z = t.height / a.height;
  return {
    delay: f,
    duration: typeof n == "function" ? n(Math.sqrt(l * l + o * o)) : n,
    easing: p,
    css: (i, e) => {
      var C = e * l,
        q = e * o,
        H = i + e * $,
        M = i + e * z;
      return `transform: ${y} translate(${C}px, ${q}px) scale(${H}, ${M});`
    }
  }
}

function W(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
export {
  Z as f
};