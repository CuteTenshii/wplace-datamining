import {
  B as e,
  Et as t,
  G as n,
  H as r,
  Jt as i,
  O as a,
  Pt as o,
  Tt as s,
  U as c,
  V as l,
  X as u,
  Y as d,
  Yt as f,
  Z as p,
  a as m,
  ct as h,
  et as g,
  jt as _,
  k as v,
  kt as y,
  nn as b,
  nt as x,
  q as S,
  tn as C,
  tt as w,
  vt as T,
  wt as E,
  x as D,
  z as O
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as k
} from "./ciZYZuIg.js";
var A = p(`<div class="absolute inset-0 z-20 flex items-center justify-center"><div class="flex flex-col items-center gap-2.5"><div class="text-base-content/60 flex h-14 w-14 items-center justify-center rounded-full bg-white/75"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></div> <span class="text-base-content/85 text-sm font-semibold"> </span> <button class="bg-neutral/75 hover:bg-neutral/90 mt-0.5 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </button></div></div>`),
  j = p(`<button>&#8249;</button>`),
  M = p(`<button class="bg-neutral/55 hover:bg-neutral/80 absolute right-2 bottom-3 z-10 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> </button>`),
  ee = p(`<div><img class="block h-full w-full object-cover"/></div>`),
  te = p(`<button>&#8250;</button>`),
  ne = p(`<button></button>`),
  re = p(`<div class="relative mb-6 flex flex-wrap items-center" role="region" aria-roledescription="carousel" tabindex="0"><div class="relative w-full touch-pan-y overflow-hidden rounded-lg" role="group"><!> <!> <!> <div></div> <!></div> <p aria-live="polite"> </p> <div></div></div>`);

function N(e, s) {
  f(s, !0);
  let l = m(s, `sensitive`, 3, !1),
    u = _(0),
    p = _(!1),
    g = 0,
    v = o(() => l() && !h(p));

  function C(e) {
    e === h(u) || e < 0 || e >= s.cards.length || y(u, e, !0)
  }
  var w = re(),
    O = E(w),
    N = E(O),
    P = e => {
      var n = A(),
        r = E(n),
        i = t(E(r), 2),
        a = E(i, !0);
      b(i);
      var o = t(i, 2),
        s = t(E(o));
      b(o), b(r), b(n), T((e, t) => {
        S(a, e), S(s, ` ${t??``}`)
      }, [() => k.carousel_sensitive_image(), () => k.carousel_click_to_reveal()]), x(`click`, o, () => {
        y(p, !0)
      }), d(e, n)
    };
  n(N, e => {
    h(v) && e(P)
  });
  var F = t(N, 2),
    I = e => {
      var t = j();
      a(t, 1, `absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] left-2`), T(e => {
        D(t, `aria-label`, e), t.disabled = h(u) === 0
      }, [() => k.carousel_previous()]), x(`click`, t, () => C(h(u) - 1)), d(e, t)
    };
  n(F, e => {
    h(v) || e(I)
  });
  var L = t(F, 2),
    R = e => {
      var n = M(),
        r = t(E(n));
      b(n), T((e, t) => {
        D(n, `aria-label`, e), S(r, ` ${t??``}`)
      }, [() => k.carousel_hide_sensitive_content(), () => k.carousel_hide()]), x(`click`, n, () => {
        y(p, !1)
      }), d(e, n)
    };
  n(L, e => {
    l() && !h(v) && e(R)
  });
  var z = t(L, 2);
  let B;
  r(z, 21, () => s.cards, c, (e, t, n) => {
    var r = ee(),
      i = E(r);
    b(r), T(() => {
      a(r, 1, `border-base-300 bg-base-100 w-full overflow-hidden rounded-lg border transition-opacity duration-300 [grid-area:1/1] ${n===h(u)?`pointer-events-auto opacity-100`:`pointer-events-none opacity-0`}`), D(r, `aria-hidden`, n !== h(u)), D(i, `src`, h(t).src), D(i, `alt`, h(t).alt)
    }), d(e, r)
  }), b(z);
  var V = t(z, 2),
    H = e => {
      var t = te();
      a(t, 1, `absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] right-2`), T(e => {
        D(t, `aria-label`, e), t.disabled = h(u) === s.cards.length - 1
      }, [() => k.carousel_next()]), x(`click`, t, () => C(h(u) + 1)), d(e, t)
    };
  n(V, e => {
    h(v) || e(H)
  }), b(O);
  var U = t(O, 2);
  let W;
  var G = E(U, !0);
  b(U);
  var K = t(U, 2);
  let q;
  r(K, 21, () => s.cards, c, (e, t, n) => {
    var r = ne();
    T(e => {
      a(r, 1, `h-2 w-2 rounded-full border-none p-0 transition-all ${n===h(u)?`bg-base-content/60 scale-125`:`bg-base-300 hover:bg-base-content/40`}`), D(r, `aria-label`, e)
    }, [() => k.carousel_image_x_of_y({
      current: n + 1,
      total: s.cards.length
    })]), x(`click`, r, () => C(n)), d(e, r)
  }), b(K), b(w), T(e => {
    D(w, `aria-label`, e), B = a(z, 1, `grid w-full overflow-hidden py-1`, null, B, {
      "blur-[75px]": h(v),
      "saturate-[1.1]": h(v),
      "scale-[1.08]": h(v),
      "pointer-events-none": h(v),
      "select-none": h(v)
    }), W = a(U, 1, `text-base-content/80 mt-2.5 min-h-6 w-full text-center text-sm leading-normal font-bold`, null, W, {
      "opacity-0": h(v)
    }), S(G, s.cards[h(u)].caption), q = a(K, 1, `mt-3 flex w-full justify-center gap-2 pb-1`, null, q, {
      "opacity-0": h(v)
    })
  }, [() => k.carousel_image_carousel()]), x(`keydown`, w, e => {
    h(v) || (e.key === `ArrowLeft` ? (e.preventDefault(), C(h(u) - 1)) : e.key === `ArrowRight` && (e.preventDefault(), C(h(u) + 1)))
  }), x(`pointerdown`, O, e => {
    h(v) || e.pointerType === `touch` && (g = e.clientX)
  }), x(`pointerup`, O, e => {
    if (!h(v) && e.pointerType === `touch`) {
      let t = e.clientX - g;
      t > 50 ? C(h(u) - 1) : t < -50 && C(h(u) + 1)
    }
  }), d(e, w), i()
}
w([`keydown`, `pointerdown`, `pointerup`, `click`]);
var P = p(`<span> </span>`),
  F = p(`<h3><!> <!> <!></h3>`),
  I = p(`<h4><!> <!> <!></h4>`);

function L(r, i) {
  let c = m(i, `level`, 3, 3),
    l = m(i, `compact`, 3, !1),
    f = m(i, `class`, 3, ``),
    p = o(() => i.showNumber ?? !l());
  var g = u(),
    _ = s(g),
    v = r => {
      var o = F(),
        c = E(o),
        m = e => {
          var t = P(),
            n = E(t, !0);
          b(t), T(() => S(n, i.number)), d(e, t)
        };
      n(c, e => {
        h(p) && e(m)
      });
      var g = t(c, 2);
      e(g, () => i.children);
      var _ = t(g, 2),
        v = t => {
          var n = u(),
            r = s(n);
          e(r, () => i.badges), d(t, n)
        };
      n(_, e => {
        i.badges && e(v)
      }), b(o), T(() => a(o, 1, `text-base-content/90 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${l()?`text-lg`:`text-2xl`} ${f()??``}`)), d(r, o)
    },
    y = r => {
      var o = I(),
        c = E(o),
        m = e => {
          var t = P(),
            n = E(t, !0);
          b(t), T(() => S(n, i.number)), d(e, t)
        };
      n(c, e => {
        h(p) && e(m)
      });
      var g = t(c, 2);
      e(g, () => i.children);
      var _ = t(g, 2),
        v = t => {
          var n = u(),
            r = s(n);
          e(r, () => i.badges), d(t, n)
        };
      n(_, e => {
        i.badges && e(v)
      }), b(o), T(() => a(o, 1, `text-base-content/85 mt-7 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${l()?`text-base`:`text-lg`} ${f()??``}`)), d(r, o)
    };
  n(_, e => {
    c() === 3 ? e(v) : e(y, -1)
  }), d(r, g)
}
var R = p(`<p class="text-base-content/90 mb-5 text-sm leading-relaxed"><!></p>`);

function z(t, n) {
  var r = R(),
    i = E(r);
  e(i, () => n.children), b(r), d(t, r)
}
var B = p(`<section><!></section>`);

function V(t, n) {
  let r = m(n, `compact`, 3, !1),
    i = m(n, `class`, 3, `mb-7 pt-2 md:mb-9 md:pt-3`);
  var o = B(),
    s = E(o);
  e(s, () => n.children), b(o), T(() => a(o, 1, v(r() ? `` : i()))), d(t, o)
}
var H = `` + new URL(`../assets/griefing1.mrf_QTk2.png`, import.meta.url).href,
  U = `` + new URL(`../assets/griefing2.HP5n4LVA.png`, import.meta.url).href,
  W = `` + new URL(`../assets/pgriefing1.Cxw7Oxbm.png`, import.meta.url).href,
  G = `` + new URL(`../assets/pgriefing2.cEou4X11.png`, import.meta.url).href,
  K = p(`<span><!></span>`);

function q(t, n) {
  let r = {
    error: `badge-error bg-error/20`,
    warn: `badge-warning bg-warning/20`,
    warning: `badge-warning bg-warning/20`,
    success: `badge-success bg-success/20`
  };
  var i = K(),
    o = E(i);
  e(o, () => n.children), b(i), T(() => a(i, 1, `badge badge-soft ${r[n.level]??``} badge-sm text-[10px] font-extrabold tracking-wide uppercase`)), d(t, i)
}
var ie = p(`<!> <!> <!> <div class="mb-2 flex gap-1"><!></div> <!>`, 1),
  ae = p(`<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>`, 1),
  oe = p(`<div><!> <!></div>`);

function J(e, n) {
  f(n, !0);
  let r = m(n, `compact`, 3, !1),
    c = o(() => [{
      src: H,
      alt: `griefing1`,
      caption: k.guideline_caption_scribbling()
    }, {
      src: U,
      alt: `griefing2`,
      caption: k.guideline_caption_drawing_over_no_intent()
    }]),
    p = o(() => [{
      src: W,
      alt: `pgriefing1`,
      caption: k.guideline_caption_flag_over_artworks()
    }, {
      src: G,
      alt: `pgriefing2`,
      caption: k.guideline_caption_pattern_over_artworks()
    }]);
  var _ = oe(),
    y = E(_);
  V(y, {
    get compact() {
      return r()
    },
    class: `mb-4 md:mb-5`,
    children: (e, n) => {
      var i = ie(),
        a = s(i);
      z(a, {
        children: (e, t) => {
          var n = u(),
            r = s(n);
          l(r, () => k.guideline_griefing_definition()), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var o = t(a, 2);
      L(o, {
        level: 3,
        number: `2.1`,
        get compact() {
          return r()
        },
        showNumber: !0,
        class: `mt-9`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_clear_griefing()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var f = t(o, 2);
      z(f, {
        children: (e, t) => {
          var n = u(),
            r = s(n);
          l(r, () => k.guideline_clear_griefing_description()), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var p = t(f, 2);
      q(E(p), {
        level: `error`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_timeout()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), b(p), N(t(p, 2), {
        get cards() {
          return h(c)
        }
      }), d(e, i)
    },
    $$slots: {
      default: !0
    }
  }), V(t(y, 2), {
    get compact() {
      return r()
    },
    children: (e, n) => {
      var i = ae(),
        a = s(i);
      L(a, {
        level: 3,
        number: `2.2`,
        get compact() {
          return r()
        },
        showNumber: !0,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_gray_area()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var o = t(a, 2);
      z(o, {
        children: (e, t) => {
          var n = u(),
            r = s(n);
          l(r, () => k.guideline_gray_area_description()), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var c = t(o, 2);
      q(E(c), {
        level: `warning`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_timeout_risk()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), b(c), N(t(c, 2), {
        get cards() {
          return h(p)
        }
      }), d(e, i)
    },
    $$slots: {
      default: !0
    }
  }), b(_), T(() => a(_, 1, v(r() ? `space-y-4` : ``))), d(e, _), i()
}
var se = `` + new URL(`../assets/borde1.2HTtxzDt.png`, import.meta.url).href,
  ce = `` + new URL(`../assets/borde2.CN89IOz0.png`, import.meta.url).href,
  le = `` + new URL(`../assets/borde4.D9VfQfkE.png`, import.meta.url).href,
  ue = `` + new URL(`../assets/borde5.DkmTTj5N.png`, import.meta.url).href,
  de = `` + new URL(`../assets/borde6.CtRHeorl.png`, import.meta.url).href,
  fe = p(`<!> <!> <ul class="marker:text-error mb-5 list-disc pl-5"><li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li></ul> <div class="mb-2 flex gap-1"><!> <!></div>`, 1),
  pe = p(`<!> <!> <div class="mb-2 flex gap-1"><!> <!></div> <!>`, 1),
  me = p(`<div><!> <!></div>`);

function Y(e, n) {
  f(n, !0);
  let r = m(n, `compact`, 3, !1),
    c = o(() => [{
      src: se,
      alt: `borde1`,
      caption: k.guideline_caption_highly_suggestive()
    }, {
      src: ce,
      alt: `borde2`,
      caption: k.guideline_caption_suggestive_fetishist()
    }, {
      src: le,
      alt: `borde4`,
      caption: k.guideline_caption_mild_gore()
    }, {
      src: ue,
      alt: `borde5`,
      caption: k.guideline_caption_non_explicit_suggestive()
    }, {
      src: de,
      alt: `borde6`,
      caption: k.guideline_caption_non_explicit_suggestive()
    }]);
  var p = me(),
    _ = E(p);
  V(_, {
    get compact() {
      return r()
    },
    class: `mb-4 pt-2 md:mb-5 md:pt-3`,
    children: (e, n) => {
      var i = fe(),
        a = s(i);
      L(a, {
        level: 3,
        number: `1.1`,
        get compact() {
          return r()
        },
        showNumber: !0,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_zero_tolerance_content()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var o = t(a, 2);
      z(o, {
        children: (e, t) => {
          var n = u(),
            r = s(n);
          l(r, () => k.guideline_zero_tolerance_description()), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var c = t(o, 2),
        f = E(c),
        p = E(f, !0);
      b(f);
      var m = t(f, 2),
        h = E(m, !0);
      b(m);
      var _ = t(m, 2),
        v = E(_, !0);
      b(_);
      var y = t(_, 2),
        x = E(y, !0);
      b(y);
      var w = t(y, 2),
        D = E(w, !0);
      b(w);
      var O = t(w, 2),
        A = E(O, !0);
      b(O), b(c);
      var j = t(c, 2),
        M = E(j);
      q(M, {
        level: `error`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_permanent_ban()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), q(t(M, 2), {
        level: `warning`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_artwork_removal()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), b(j), T((e, t, n, r, i, a) => {
        S(p, e), S(h, t), S(v, n), S(x, r), S(D, i), S(A, a)
      }, [() => k.guideline_zero_tolerance_explicit_sexual(), () => k.guideline_zero_tolerance_sexualization_minors(), () => k.guideline_zero_tolerance_extreme_gore(), () => k.guideline_zero_tolerance_hate_speech(), () => k.guideline_zero_tolerance_doxxing(), () => k.guideline_zero_tolerance_extreme_hostility()]), d(e, i)
    },
    $$slots: {
      default: !0
    }
  }), V(t(_, 2), {
    get compact() {
      return r()
    },
    children: (e, n) => {
      var i = pe(),
        a = s(i);
      L(a, {
        level: 3,
        number: `1.2`,
        get compact() {
          return r()
        },
        showNumber: !0,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_suggestive_content()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var o = t(a, 2);
      z(o, {
        children: (e, t) => {
          var n = u(),
            r = s(n);
          l(r, () => k.guideline_suggestive_content_description()), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var f = t(o, 2),
        p = E(f);
      q(p, {
        level: `success`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_allowed()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), q(t(p, 2), {
        level: `warning`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_community_cleanup()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), b(f), N(t(f, 2), {
        get cards() {
          return h(c)
        }
      }), d(e, i)
    },
    $$slots: {
      default: !0
    }
  }), b(p), T(() => a(p, 1, v(r() ? `space-y-4` : ``))), d(e, p), i()
}
var he = `` + new URL(`../assets/mapclean1.CXzD9GTn.png`, import.meta.url).href,
  ge = `` + new URL(`../assets/mapclean2.B1--Lv8s.png`, import.meta.url).href,
  _e = `` + new URL(`../assets/mapclean3.zxc4kxhZ.png`, import.meta.url).href,
  ve = p(`<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>`, 1);

function X(e, n) {
  f(n, !0);
  let r = m(n, `compact`, 3, !1),
    a = o(() => [{
      src: he,
      alt: `mapclean1`,
      caption: k.guideline_caption_remove_patterns()
    }, {
      src: ge,
      alt: `mapclean2`,
      caption: k.guideline_caption_remove_inappropriate()
    }, {
      src: _e,
      alt: `mapclean3`,
      caption: k.guideline_caption_remove_flags()
    }]);
  V(e, {
    get compact() {
      return r()
    },
    children: (e, n) => {
      var i = ve(),
        o = s(i);
      L(o, {
        level: 4,
        number: `2.3.2.`,
        get compact() {
          return r()
        },
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_map_cleanup_heading()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var c = t(o, 2);
      z(c, {
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_map_cleanup_description()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var l = t(c, 2);
      q(E(l), {
        level: `success`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_allowed()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), b(l), N(t(l, 2), {
        get cards() {
          return h(a)
        }
      }), d(e, i)
    },
    $$slots: {
      default: !0
    }
  }), i()
}

function Z(e, t) {
  f(t, !0), m(t, `compact`, 3, !1), z(e, {
    children: (e, t) => {
      var n = u(),
        r = s(n);
      l(r, () => k.guideline_multi_accounts_description()), d(e, n)
    },
    $$slots: {
      default: !0
    }
  }), i()
}
var ye = `` + new URL(`../assets/ngriefing1.CQEoQ-5k.png`, import.meta.url).href,
  be = `` + new URL(`../assets/ngriefing2.CA1282Nq.png`, import.meta.url).href,
  xe = `` + new URL(`../assets/ngriefing3.l-WuAkT6.png`, import.meta.url).href,
  Se = p(`<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>`, 1),
  Q = p(`<div><!> <!></div>`);

function $(e, n) {
  f(n, !0);
  let r = m(n, `compact`, 3, !1),
    c = o(() => [{
      src: xe,
      alt: `ngriefing3`,
      caption: k.guideline_caption_drawing_over_another()
    }, {
      src: ye,
      alt: `ngriefing1`,
      caption: k.guideline_caption_artwork_over_flag()
    }, {
      src: be,
      alt: `ngriefing2`,
      caption: k.guideline_caption_drawing_over_pattern()
    }]);
  var l = Q(),
    u = E(l);
  z(u, {
    children: (e, t) => {
      C();
      var n = g();
      T(e => S(n, e), [() => k.guideline_territorial_intro()]), d(e, n)
    },
    $$slots: {
      default: !0
    }
  }), V(t(u, 2), {
    get compact() {
      return r()
    },
    children: (e, n) => {
      var i = Se(),
        a = s(i);
      L(a, {
        level: 4,
        number: `2.3.1.`,
        get compact() {
          return r()
        },
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_territorial_disputes_heading()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var o = t(a, 2);
      z(o, {
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_territorial_disputes_description()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      });
      var l = t(o, 2);
      q(E(l), {
        level: `success`,
        children: (e, t) => {
          C();
          var n = g();
          T(e => S(n, e), [() => k.guideline_badge_allowed()]), d(e, n)
        },
        $$slots: {
          default: !0
        }
      }), b(l), N(t(l, 2), {
        get cards() {
          return h(c)
        }
      }), d(e, i)
    },
    $$slots: {
      default: !0
    }
  }), b(l), T(() => a(l, 1, v(r() ? `space-y-4` : ``))), d(e, l), i()
}
var Ce = p(`<details><summary class="collapse-title flex min-h-0! gap-3.5 py-3.5! ps-4! sm:gap-4 sm:ps-5!"><div></div> <div class="min-w-0 flex-1"><div class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div></summary> <div class="collapse-content p-0!"><div class="border-base-content/5 border-t px-4 py-5 sm:px-5"><!></div></div></details>`),
  we = p(`<div><div></div> <div class="min-w-0 flex-1"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div>`),
  Te = p(`<div><div><svg class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span> </span></div> <!></div>`);

function Ee(e, l) {
  f(l, !0);
  let p = m(l, `showExtraInfo`, 3, !0),
    _ = o(() => [{
      label: k.rules_group_prohibited(),
      icon: `M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z`,
      badgeLevel: `error`,
      classes: {
        header: `bg-error/10 text-error`,
        button: `border-error/30 bg-error/5 hover:bg-error/10`,
        index: `bg-error/12 text-error`
      },
      rules: [{
        title: k.rules_title_inappropriate_content(),
        content: Y,
        description: k.rules_desc_inappropriate_content(),
        badge: {
          label: k.rules_badge_permanent_ban(),
          type: `ban`
        }
      }, {
        title: k.rules_title_griefing(),
        content: J,
        description: k.rules_desc_griefing(),
        badge: {
          label: k.rules_badge_timeout(),
          type: `ban`
        }
      }, {
        title: k.rules_title_multi_accounts_and_bots(),
        content: Z,
        description: k.rules_desc_multi_accounts_and_bots(),
        badge: {
          label: k.rules_badge_permanent_ban(),
          type: `ban`
        }
      }]
    }, {
      label: k.rules_group_fair_play(),
      icon: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      badgeLevel: `success`,
      classes: {
        header: `bg-success/10 text-success`,
        button: `border-success/30 bg-success/5 hover:bg-success/10`,
        index: `bg-success/12 text-success`
      },
      rules: [{
        title: k.rules_title_territorial_disputes(),
        content: $,
        description: k.rules_desc_territorial_disputes(),
        badge: {
          label: k.rules_badge_allowed(),
          type: `allowed`
        },
        allowed: !0
      }, {
        title: k.rules_title_map_cleanup(),
        content: X,
        description: k.rules_desc_map_cleanup(),
        badge: {
          label: k.rules_badge_allowed(),
          type: `allowed`
        },
        allowed: !0
      }]
    }]);
  var v = u(),
    y = s(v);
  r(y, 17, () => h(_), c, (e, i, o) => {
    var l = Te();
    a(l, 1, `overflow-hidden rounded-xl`, null, {}, {
      "mt-3": o > 0
    });
    var f = E(l),
      m = E(f),
      _ = E(m);
    b(m);
    var v = t(m, 2),
      y = E(v, !0);
    b(v), b(f);
    var x = t(f, 2);
    r(x, 17, () => h(i).rules, c, (e, r, o) => {
      var c = u(),
        l = s(c),
        f = e => {
          var s = Ce(),
            c = E(s),
            l = E(c);
          l.textContent = o + 1;
          var u = t(l, 2),
            f = E(u),
            p = E(f),
            m = E(p),
            _ = E(m),
            v = E(_, !0);
          b(_);
          var y = t(_, 2),
            x = e => {
              q(e, {
                get level() {
                  return h(i).badgeLevel
                },
                children: (e, t) => {
                  C();
                  var n = g();
                  T(() => S(n, h(r).badge.label)), d(e, n)
                },
                $$slots: {
                  default: !0
                }
              })
            };
          n(y, e => {
            h(r).badge && e(x)
          }), b(m);
          var w = t(m, 2),
            D = E(w, !0);
          b(w), b(p), b(f), b(u), b(c);
          var k = t(c, 2),
            A = E(k),
            j = E(A);
          O(j, () => h(r).content, (e, t) => {
            t(e, {
              compact: !0
            })
          }), b(A), b(k), b(s), T(() => {
            a(s, 1, `collapse-arrow collapse rounded-none border-l-[3px] ${h(i).classes.button??``} ${o>0?`border-base-content/5 border-t`:``}`), a(l, 1, `${h(i).classes.index??``} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), S(v, h(r).title), S(D, h(r).description)
          }), d(e, s)
        },
        m = e => {
          var s = we(),
            c = E(s);
          c.textContent = o + 1;
          var l = t(c, 2),
            u = E(l),
            f = E(u),
            p = E(f),
            m = E(p, !0);
          b(p);
          var _ = t(p, 2),
            v = e => {
              q(e, {
                get level() {
                  return h(i).badgeLevel
                },
                children: (e, t) => {
                  C();
                  var n = g();
                  T(() => S(n, h(r).badge.label)), d(e, n)
                },
                $$slots: {
                  default: !0
                }
              })
            };
          n(_, e => {
            h(r).badge && e(v)
          }), b(f);
          var y = t(f, 2),
            x = E(y, !0);
          b(y), b(u), b(l), b(s), T(() => {
            a(s, 1, `${h(i).classes.button??``} flex w-full cursor-auto gap-3.5 border-l-[3px] px-4 py-3.5 text-left sm:gap-4 sm:px-5 ${o>0?`border-base-content/5 border-t`:``}`), a(c, 1, `${h(i).classes.index??``} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), S(m, h(r).title), S(x, h(r).description)
          }), d(e, s)
        };
      n(l, e => {
        p() ? e(f) : e(m, -1)
      }), d(e, c)
    }), b(l), T(() => {
      a(f, 1, `${h(i).classes.header??``} flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest uppercase`), D(_, `d`, h(i).icon), S(y, h(i).label)
    }), d(e, l)
  }), d(e, v), i()
}
export {
  Y as a, X as i, $ as n, J as o, Z as r, Ee as t
};