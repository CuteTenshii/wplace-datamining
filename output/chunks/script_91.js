import "./Bzak7iHL.js";
import {
  k as ye,
  p as te,
  t as v,
  i as t,
  m as J,
  a,
  b as re,
  e as he,
  u as K,
  h as fe,
  d as l,
  s,
  c as C,
  r as n,
  l as O,
  f as E,
  o as T,
  n as B
} from "./D5GL_E7i.js";
import {
  s as g
} from "./BATewRf7.js";
import {
  i as Q
} from "./unjGrhDm.js";
import {
  e as ve,
  i as ue
} from "./Clrj6tX0.js";
import {
  c as ke
} from "./BkCB8krf.js";
import {
  s as q,
  a as N,
  c as _e
} from "./Ce1mtF2R.js";
import {
  p as V
} from "./LT-XNHCk.js";
import {
  h as ne
} from "./B4t60IST.js";
import {
  m as e
} from "./XL5Wf48w.js";
import {
  s as ee
} from "./BMTVjKyu.js";
var Pe = C('<div class="absolute inset-0 z-20 flex items-center justify-center"><div class="flex flex-col items-center gap-2.5"><div class="text-base-content/60 flex h-14 w-14 items-center justify-center rounded-full bg-white/75"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></div> <span class="text-base-content/85 text-sm font-semibold"> </span> <button class="bg-neutral/75 hover:bg-neutral/90 mt-0.5 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </button></div></div>'),
  Le = C("<button>&#8249;</button>"),
  ze = C('<button class="bg-neutral/55 hover:bg-neutral/80 absolute right-2 bottom-3 z-10 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> </button>'),
  Ce = C('<div><img class="block h-full w-full object-cover"/></div>'),
  Re = C("<button>&#8250;</button>"),
  Ue = C("<button></button>"),
  je = C('<div class="relative mb-6 flex flex-wrap items-center" role="region" aria-roledescription="carousel" tabindex="0"><div class="relative w-full touch-pan-y overflow-hidden rounded-lg" role="group"><!> <!> <!> <div></div> <!></div> <p aria-live="polite"> </p> <div></div></div>');

function ce(G, o) {
  te(o, !0);
  let p = V(o, "sensitive", 3, !1),
    u = he(0),
    b = he(!1),
    R = 0,
    P = K(() => p() && !t(b));

  function f(d) {
    d === t(u) || d < 0 || d >= o.cards.length || fe(u, d, !0)
  }
  var A = je(),
    k = l(A),
    x = l(k);
  {
    var w = d => {
      var _ = Pe(),
        U = l(_),
        h = s(l(U), 2),
        M = l(h, !0);
      n(h);
      var j = s(h, 2),
        D = s(l(j));
      n(j), n(U), n(_), v((Y, F) => {
        g(M, Y), g(D, ` ${F??""}`)
      }, [() => e.carousel_sensitive_image(), () => e.carousel_click_to_reveal()]), J("click", j, () => {
        fe(b, !0)
      }), a(d, _)
    };
    Q(x, d => {
      t(P) && d(w)
    })
  }
  var m = s(x, 2);
  {
    var z = d => {
      var _ = Le();
      N(_, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] left-2"), v(U => {
        q(_, "aria-label", U), _.disabled = t(u) === 0
      }, [() => e.carousel_previous()]), J("click", _, () => f(t(u) - 1)), a(d, _)
    };
    Q(m, d => {
      t(P) || d(z)
    })
  }
  var $ = s(m, 2);
  {
    var L = d => {
      var _ = ze(),
        U = s(l(_));
      n(_), v((h, M) => {
        q(_, "aria-label", h), g(U, ` ${M??""}`)
      }, [() => e.carousel_hide_sensitive_content(), () => e.carousel_hide()]), J("click", _, () => {
        fe(b, !1)
      }), a(d, _)
    };
    Q($, d => {
      p() && !t(P) && d(L)
    })
  }
  var y = s($, 2);
  let r;
  ve(y, 21, () => o.cards, ue, (d, _, U) => {
    var h = Ce(),
      M = l(h);
    n(h), v(() => {
      N(h, 1, `border-base-300 bg-base-100 w-full overflow-hidden rounded-lg border transition-opacity duration-300 [grid-area:1/1] ${U===t(u)?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`), q(h, "aria-hidden", U !== t(u)), q(M, "src", t(_).src), q(M, "alt", t(_).alt)
    }), a(d, h)
  }), n(y);
  var i = s(y, 2);
  {
    var c = d => {
      var _ = Re();
      N(_, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] right-2"), v(U => {
        q(_, "aria-label", U), _.disabled = t(u) === o.cards.length - 1
      }, [() => e.carousel_next()]), J("click", _, () => f(t(u) + 1)), a(d, _)
    };
    Q(i, d => {
      t(P) || d(c)
    })
  }
  n(k);
  var I = s(k, 2);
  let Z;
  var se = l(I, !0);
  n(I);
  var H = s(I, 2);
  let X;
  ve(H, 21, () => o.cards, ue, (d, _, U) => {
    var h = Ue();
    v(M => {
      N(h, 1, `h-2 w-2 rounded-full border-none p-0 transition-all ${U===t(u)?"bg-base-content/60 scale-125":"bg-base-300 hover:bg-base-content/40"}`), q(h, "aria-label", M)
    }, [() => e.carousel_image_x_of_y({
      current: U + 1,
      total: o.cards.length
    })]), J("click", h, () => f(U)), a(d, h)
  }), n(H), n(A), v(d => {
    q(A, "aria-label", d), r = N(y, 1, "grid w-full overflow-hidden py-1", null, r, {
      "blur-[75px]": t(P),
      "saturate-[1.1]": t(P),
      "scale-[1.08]": t(P),
      "pointer-events-none": t(P),
      "select-none": t(P)
    }), Z = N(I, 1, "text-base-content/80 mt-2.5 min-h-6 w-full text-center text-sm leading-normal font-bold", null, Z, {
      "opacity-0": t(P)
    }), g(se, o.cards[t(u)].caption), X = N(H, 1, "mt-3 flex w-full justify-center gap-2 pb-1", null, X, {
      "opacity-0": t(P)
    })
  }, [() => e.carousel_image_carousel()]), J("keydown", A, d => {
    t(P) || (d.key === "ArrowLeft" ? (d.preventDefault(), f(t(u) - 1)) : d.key === "ArrowRight" && (d.preventDefault(), f(t(u) + 1)))
  }), J("pointerdown", k, d => {
    t(P) || d.pointerType === "touch" && (R = d.clientX)
  }), J("pointerup", k, d => {
    if (!t(P) && d.pointerType === "touch") {
      const _ = d.clientX - R;
      _ > 50 ? f(t(u) - 1) : _ < -50 && f(t(u) + 1)
    }
  }), a(G, A), re()
}
ye(["keydown", "pointerdown", "pointerup", "click"]);
var we = C("<span> </span>"),
  Ge = C("<h3><!> <!> <!></h3>"),
  Me = C("<h4><!> <!> <!></h4>");

function ie(G, o) {
  let p = V(o, "level", 3, 3),
    u = V(o, "compact", 3, !1),
    b = V(o, "class", 3, "");
  const R = K(() => o.showNumber ?? !u());
  var P = O(),
    f = E(P);
  {
    var A = x => {
        var w = Ge(),
          m = l(w);
        {
          var z = r => {
            var i = we(),
              c = l(i, !0);
            n(i), v(() => g(c, o.number)), a(r, i)
          };
          Q(m, r => {
            t(R) && r(z)
          })
        }
        var $ = s(m, 2);
        ee($, () => o.children);
        var L = s($, 2);
        {
          var y = r => {
            var i = O(),
              c = E(i);
            ee(c, () => o.badges), a(r, i)
          };
          Q(L, r => {
            o.badges && r(y)
          })
        }
        n(w), v(() => N(w, 1, `text-base-content/90 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${u()?"text-lg":"text-2xl"} ${b()??""}`)), a(x, w)
      },
      k = x => {
        var w = Me(),
          m = l(w);
        {
          var z = r => {
            var i = we(),
              c = l(i, !0);
            n(i), v(() => g(c, o.number)), a(r, i)
          };
          Q(m, r => {
            t(R) && r(z)
          })
        }
        var $ = s(m, 2);
        ee($, () => o.children);
        var L = s($, 2);
        {
          var y = r => {
            var i = O(),
              c = E(i);
            ee(c, () => o.badges), a(r, i)
          };
          Q(L, r => {
            o.badges && r(y)
          })
        }
        n(w), v(() => N(w, 1, `text-base-content/85 mt-7 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${u()?"text-base":"text-lg"} ${b()??""}`)), a(x, w)
      };
    Q(f, x => {
      p() === 3 ? x(A) : x(k, -1)
    })
  }
  a(G, P)
}
var Ae = C('<p class="text-base-content/90 mb-5 text-sm leading-relaxed"><!></p>');

function W(G, o) {
  var p = Ae(),
    u = l(p);
  ee(u, () => o.children), n(p), a(G, p)
}
var Ne = C("<section><!></section>");

function le(G, o) {
  let p = V(o, "compact", 3, !1),
    u = V(o, "class", 3, "mb-7 pt-2 md:mb-9 md:pt-3");
  var b = Ne(),
    R = l(b);
  ee(R, () => o.children), n(b), v(() => N(b, 1, _e(p() ? "" : u()))), a(G, b)
}
const Te = "" + new URL("../assets/griefing1.mrf_QTk2.png", import.meta.url).href,
  Be = "" + new URL("../assets/griefing2.HP5n4LVA.png", import.meta.url).href,
  De = "" + new URL("../assets/pgriefing1.Cxw7Oxbm.png", import.meta.url).href,
  Ee = "" + new URL("../assets/pgriefing2.cEou4X11.png", import.meta.url).href;
var Ie = C("<span><!></span>");

function S(G, o) {
  const p = {
    error: "badge-error bg-error/20",
    warn: "badge-warning bg-warning/20",
    warning: "badge-warning bg-warning/20",
    success: "badge-success bg-success/20"
  };
  var u = Ie(),
    b = l(u);
  ee(b, () => o.children), n(u), v(() => N(u, 1, `badge badge-soft ${p[o.level]??""} badge-sm text-[10px] font-extrabold tracking-wide uppercase`)), a(G, u)
}
var Xe = C('<!> <!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  He = C('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  Qe = C("<div><!> <!></div>");

function Ve(G, o) {
  te(o, !0);
  let p = V(o, "compact", 3, !1),
    u = K(() => [{
      src: Te,
      alt: "griefing1",
      caption: e.guideline_caption_scribbling()
    }, {
      src: Be,
      alt: "griefing2",
      caption: e.guideline_caption_drawing_over_no_intent()
    }]),
    b = K(() => [{
      src: De,
      alt: "pgriefing1",
      caption: e.guideline_caption_flag_over_artworks()
    }, {
      src: Ee,
      alt: "pgriefing2",
      caption: e.guideline_caption_pattern_over_artworks()
    }]);
  var R = Qe(),
    P = l(R);
  le(P, {
    get compact() {
      return p()
    },
    class: "mb-4 md:mb-5",
    children: (A, k) => {
      var x = Xe(),
        w = E(x);
      W(w, {
        children: (r, i) => {
          var c = O(),
            I = E(c);
          ne(I, () => e.guideline_griefing_definition()), a(r, c)
        }
      });
      var m = s(w, 2);
      ie(m, {
        level: 3,
        number: "2.1",
        get compact() {
          return p()
        },
        showNumber: !0,
        class: "mt-9",
        children: (r, i) => {
          B();
          var c = T();
          v(I => g(c, I), [() => e.guideline_clear_griefing()]), a(r, c)
        },
        $$slots: {
          default: !0
        }
      });
      var z = s(m, 2);
      W(z, {
        children: (r, i) => {
          var c = O(),
            I = E(c);
          ne(I, () => e.guideline_clear_griefing_description()), a(r, c)
        }
      });
      var $ = s(z, 2),
        L = l($);
      S(L, {
        level: "error",
        children: (r, i) => {
          B();
          var c = T();
          v(I => g(c, I), [() => e.guideline_badge_timeout()]), a(r, c)
        }
      }), n($);
      var y = s($, 2);
      ce(y, {
        get cards() {
          return t(u)
        }
      }), a(A, x)
    },
    $$slots: {
      default: !0
    }
  });
  var f = s(P, 2);
  le(f, {
    get compact() {
      return p()
    },
    children: (A, k) => {
      var x = He(),
        w = E(x);
      ie(w, {
        level: 3,
        number: "2.2",
        get compact() {
          return p()
        },
        showNumber: !0,
        children: (y, r) => {
          B();
          var i = T();
          v(c => g(i, c), [() => e.guideline_gray_area()]), a(y, i)
        },
        $$slots: {
          default: !0
        }
      });
      var m = s(w, 2);
      W(m, {
        children: (y, r) => {
          var i = O(),
            c = E(i);
          ne(c, () => e.guideline_gray_area_description()), a(y, i)
        }
      });
      var z = s(m, 2),
        $ = l(z);
      S($, {
        level: "warning",
        children: (y, r) => {
          B();
          var i = T();
          v(c => g(i, c), [() => e.guideline_badge_timeout_risk()]), a(y, i)
        }
      }), n(z);
      var L = s(z, 2);
      ce(L, {
        get cards() {
          return t(b)
        }
      }), a(A, x)
    },
    $$slots: {
      default: !0
    }
  }), n(R), v(() => N(R, 1, _e(p() ? "space-y-4" : ""))), a(G, R), re()
}
const Oe = "" + new URL("../assets/borde1.2HTtxzDt.png", import.meta.url).href,
  Se = "" + new URL("../assets/borde2.CN89IOz0.png", import.meta.url).href,
  qe = "" + new URL("../assets/borde4.D9VfQfkE.png", import.meta.url).href,
  We = "" + new URL("../assets/borde5.DkmTTj5N.png", import.meta.url).href,
  Ze = "" + new URL("../assets/borde6.CtRHeorl.png", import.meta.url).href;
var Fe = C('<!> <!> <ul class="marker:text-error mb-5 list-disc pl-5"><li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li></ul> <div class="mb-2 flex gap-1"><!> <!></div>', 1),
  Je = C('<!> <!> <div class="mb-2 flex gap-1"><!> <!></div> <!>', 1),
  Ke = C("<div><!> <!></div>");

function Ye(G, o) {
  te(o, !0);
  let p = V(o, "compact", 3, !1),
    u = K(() => [{
      src: Oe,
      alt: "borde1",
      caption: e.guideline_caption_highly_suggestive()
    }, {
      src: Se,
      alt: "borde2",
      caption: e.guideline_caption_suggestive_fetishist()
    }, {
      src: qe,
      alt: "borde4",
      caption: e.guideline_caption_mild_gore()
    }, {
      src: We,
      alt: "borde5",
      caption: e.guideline_caption_non_explicit_suggestive()
    }, {
      src: Ze,
      alt: "borde6",
      caption: e.guideline_caption_non_explicit_suggestive()
    }]);
  var b = Ke(),
    R = l(b);
  le(R, {
    get compact() {
      return p()
    },
    class: "mb-4 pt-2 md:mb-5 md:pt-3",
    children: (f, A) => {
      var k = Fe(),
        x = E(k);
      ie(x, {
        level: 3,
        number: "1.1",
        get compact() {
          return p()
        },
        showNumber: !0,
        children: (h, M) => {
          B();
          var j = T();
          v(D => g(j, D), [() => e.guideline_zero_tolerance_content()]), a(h, j)
        },
        $$slots: {
          default: !0
        }
      });
      var w = s(x, 2);
      W(w, {
        children: (h, M) => {
          var j = O(),
            D = E(j);
          ne(D, () => e.guideline_zero_tolerance_description()), a(h, j)
        }
      });
      var m = s(w, 2),
        z = l(m),
        $ = l(z, !0);
      n(z);
      var L = s(z, 2),
        y = l(L, !0);
      n(L);
      var r = s(L, 2),
        i = l(r, !0);
      n(r);
      var c = s(r, 2),
        I = l(c, !0);
      n(c);
      var Z = s(c, 2),
        se = l(Z, !0);
      n(Z);
      var H = s(Z, 2),
        X = l(H, !0);
      n(H), n(m);
      var d = s(m, 2),
        _ = l(d);
      S(_, {
        level: "error",
        children: (h, M) => {
          B();
          var j = T();
          v(D => g(j, D), [() => e.guideline_badge_permanent_ban()]), a(h, j)
        }
      });
      var U = s(_, 2);
      S(U, {
        level: "warning",
        children: (h, M) => {
          B();
          var j = T();
          v(D => g(j, D), [() => e.guideline_badge_artwork_removal()]), a(h, j)
        }
      }), n(d), v((h, M, j, D, Y, F) => {
        g($, h), g(y, M), g(i, j), g(I, D), g(se, Y), g(X, F)
      }, [() => e.guideline_zero_tolerance_explicit_sexual(), () => e.guideline_zero_tolerance_sexualization_minors(), () => e.guideline_zero_tolerance_extreme_gore(), () => e.guideline_zero_tolerance_hate_speech(), () => e.guideline_zero_tolerance_doxxing(), () => e.guideline_zero_tolerance_extreme_hostility()]), a(f, k)
    },
    $$slots: {
      default: !0
    }
  });
  var P = s(R, 2);
  le(P, {
    get compact() {
      return p()
    },
    children: (f, A) => {
      var k = Je(),
        x = E(k);
      ie(x, {
        level: 3,
        number: "1.2",
        get compact() {
          return p()
        },
        showNumber: !0,
        children: (y, r) => {
          B();
          var i = T();
          v(c => g(i, c), [() => e.guideline_suggestive_content()]), a(y, i)
        },
        $$slots: {
          default: !0
        }
      });
      var w = s(x, 2);
      W(w, {
        children: (y, r) => {
          var i = O(),
            c = E(i);
          ne(c, () => e.guideline_suggestive_content_description()), a(y, i)
        }
      });
      var m = s(w, 2),
        z = l(m);
      S(z, {
        level: "success",
        children: (y, r) => {
          B();
          var i = T();
          v(c => g(i, c), [() => e.guideline_badge_allowed()]), a(y, i)
        }
      });
      var $ = s(z, 2);
      S($, {
        level: "warning",
        children: (y, r) => {
          B();
          var i = T();
          v(c => g(i, c), [() => e.guideline_badge_community_cleanup()]), a(y, i)
        }
      }), n(m);
      var L = s(m, 2);
      ce(L, {
        get cards() {
          return t(u)
        }
      }), a(f, k)
    },
    $$slots: {
      default: !0
    }
  }), n(b), v(() => N(b, 1, _e(p() ? "space-y-4" : ""))), a(G, b), re()
}
const et = "" + new URL("../assets/mapclean1.CXzD9GTn.png", import.meta.url).href,
  tt = "" + new URL("../assets/mapclean2.B1--Lv8s.png", import.meta.url).href,
  rt = "" + new URL("../assets/mapclean3.zxc4kxhZ.png", import.meta.url).href;
var at = C('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1);

function nt(G, o) {
  te(o, !0);
  let p = V(o, "compact", 3, !1),
    u = K(() => [{
      src: et,
      alt: "mapclean1",
      caption: e.guideline_caption_remove_patterns()
    }, {
      src: tt,
      alt: "mapclean2",
      caption: e.guideline_caption_remove_inappropriate()
    }, {
      src: rt,
      alt: "mapclean3",
      caption: e.guideline_caption_remove_flags()
    }]);
  le(G, {
    get compact() {
      return p()
    },
    children: (b, R) => {
      var P = at(),
        f = E(P);
      ie(f, {
        level: 4,
        number: "2.3.2.",
        get compact() {
          return p()
        },
        children: (m, z) => {
          B();
          var $ = T();
          v(L => g($, L), [() => e.guideline_map_cleanup_heading()]), a(m, $)
        },
        $$slots: {
          default: !0
        }
      });
      var A = s(f, 2);
      W(A, {
        children: (m, z) => {
          B();
          var $ = T();
          v(L => g($, L), [() => e.guideline_map_cleanup_description()]), a(m, $)
        }
      });
      var k = s(A, 2),
        x = l(k);
      S(x, {
        level: "success",
        children: (m, z) => {
          B();
          var $ = T();
          v(L => g($, L), [() => e.guideline_badge_allowed()]), a(m, $)
        }
      }), n(k);
      var w = s(k, 2);
      ce(w, {
        get cards() {
          return t(u)
        }
      }), a(b, P)
    },
    $$slots: {
      default: !0
    }
  }), re()
}

function it(G, o) {
  te(o, !0), V(o, "compact", 3, !1), W(G, {
    children: (p, u) => {
      var b = O(),
        R = E(b);
      ne(R, () => e.guideline_multi_accounts_description()), a(p, b)
    }
  }), re()
}
const lt = "" + new URL("../assets/ngriefing1.CQEoQ-5k.png", import.meta.url).href,
  st = "" + new URL("../assets/ngriefing2.CA1282Nq.png", import.meta.url).href,
  ot = "" + new URL("../assets/ngriefing3.l-WuAkT6.png", import.meta.url).href;
var dt = C('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  ct = C("<div><!> <!></div>");

function vt(G, o) {
  te(o, !0);
  let p = V(o, "compact", 3, !1),
    u = K(() => [{
      src: ot,
      alt: "ngriefing3",
      caption: e.guideline_caption_drawing_over_another()
    }, {
      src: lt,
      alt: "ngriefing1",
      caption: e.guideline_caption_artwork_over_flag()
    }, {
      src: st,
      alt: "ngriefing2",
      caption: e.guideline_caption_drawing_over_pattern()
    }]);
  var b = ct(),
    R = l(b);
  W(R, {
    children: (f, A) => {
      B();
      var k = T();
      v(x => g(k, x), [() => e.guideline_territorial_intro()]), a(f, k)
    }
  });
  var P = s(R, 2);
  le(P, {
    get compact() {
      return p()
    },
    children: (f, A) => {
      var k = dt(),
        x = E(k);
      ie(x, {
        level: 4,
        number: "2.3.1.",
        get compact() {
          return p()
        },
        children: (L, y) => {
          B();
          var r = T();
          v(i => g(r, i), [() => e.guideline_territorial_disputes_heading()]), a(L, r)
        },
        $$slots: {
          default: !0
        }
      });
      var w = s(x, 2);
      W(w, {
        children: (L, y) => {
          B();
          var r = T();
          v(i => g(r, i), [() => e.guideline_territorial_disputes_description()]), a(L, r)
        }
      });
      var m = s(w, 2),
        z = l(m);
      S(z, {
        level: "success",
        children: (L, y) => {
          B();
          var r = T();
          v(i => g(r, i), [() => e.guideline_badge_allowed()]), a(L, r)
        }
      }), n(m);
      var $ = s(m, 2);
      ce($, {
        get cards() {
          return t(u)
        }
      }), a(f, k)
    },
    $$slots: {
      default: !0
    }
  }), n(b), v(() => N(b, 1, _e(p() ? "space-y-4" : ""))), a(G, b), re()
}
var ut = C('<details><summary class="collapse-title flex min-h-0! gap-3.5 py-3.5! ps-4! sm:gap-4 sm:ps-5!"><div></div> <div class="min-w-0 flex-1"><div class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div></summary> <div class="collapse-content p-0!"><div class="border-base-content/5 border-t px-4 py-5 sm:px-5"><!></div></div></details>'),
  _t = C('<div><div></div> <div class="min-w-0 flex-1"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div>'),
  gt = C('<div><div><svg class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span> </span></div> <!></div>');

function zt(G, o) {
  te(o, !0);
  let p = V(o, "showExtraInfo", 3, !0),
    u = K(() => [{
      label: e.rules_group_prohibited(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
      badgeLevel: "error",
      classes: {
        header: "bg-error/10 text-error",
        button: "border-error/30 bg-error/5 hover:bg-error/10",
        index: "bg-error/12 text-error"
      },
      rules: [{
        title: e.rules_title_inappropriate_content(),
        content: Ye,
        description: e.rules_desc_inappropriate_content(),
        badge: {
          label: e.rules_badge_permanent_ban(),
          type: "ban"
        }
      }, {
        title: e.rules_title_griefing(),
        content: Ve,
        description: e.rules_desc_griefing(),
        badge: {
          label: e.rules_badge_timeout(),
          type: "ban"
        }
      }, {
        title: e.rules_title_multi_accounts_and_bots(),
        content: it,
        description: e.rules_desc_multi_accounts_and_bots(),
        badge: {
          label: e.rules_badge_permanent_ban(),
          type: "ban"
        }
      }]
    }, {
      label: e.rules_group_fair_play(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      badgeLevel: "success",
      classes: {
        header: "bg-success/10 text-success",
        button: "border-success/30 bg-success/5 hover:bg-success/10",
        index: "bg-success/12 text-success"
      },
      rules: [{
        title: e.rules_title_territorial_disputes(),
        content: vt,
        description: e.rules_desc_territorial_disputes(),
        badge: {
          label: e.rules_badge_allowed(),
          type: "allowed"
        },
        allowed: !0
      }, {
        title: e.rules_title_map_cleanup(),
        content: nt,
        description: e.rules_desc_map_cleanup(),
        badge: {
          label: e.rules_badge_allowed(),
          type: "allowed"
        },
        allowed: !0
      }]
    }]);
  var b = O(),
    R = E(b);
  ve(R, 17, () => t(u), ue, (P, f, A) => {
    var k = gt();
    N(k, 1, "overflow-hidden rounded-xl", null, {}, {
      "mt-3": A > 0
    });
    var x = l(k),
      w = l(x),
      m = l(w);
    n(w);
    var z = s(w, 2),
      $ = l(z, !0);
    n(z), n(x);
    var L = s(x, 2);
    ve(L, 17, () => t(f).rules, ue, (y, r, i) => {
      var c = O(),
        I = E(c);
      {
        var Z = H => {
            var X = ut(),
              d = l(X),
              _ = l(d);
            _.textContent = i + 1;
            var U = s(_, 2),
              h = l(U),
              M = l(h),
              j = l(M),
              D = l(j),
              Y = l(D, !0);
            n(D);
            var F = s(D, 2);
            {
              var ge = de => {
                S(de, {
                  get level() {
                    return t(f).badgeLevel
                  },
                  children: (be, pt) => {
                    B();
                    var xe = T();
                    v(() => g(xe, t(r).badge.label)), a(be, xe)
                  }
                })
              };
              Q(F, de => {
                t(r).badge && de(ge)
              })
            }
            n(j);
            var ae = s(j, 2),
              pe = l(ae, !0);
            n(ae), n(M), n(h), n(U), n(d);
            var me = s(d, 2),
              oe = l(me),
              $e = l(oe);
            ke($e, () => t(r).content, (de, be) => {
              be(de, {
                compact: !0
              })
            }), n(oe), n(me), n(X), v(() => {
              N(X, 1, `collapse-arrow collapse rounded-none border-l-[3px] ${t(f).classes.button??""} ${i>0?"border-base-content/5 border-t":""}`), N(_, 1, `${t(f).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), g(Y, t(r).title), g(pe, t(r).description)
            }), a(H, X)
          },
          se = H => {
            var X = _t(),
              d = l(X);
            d.textContent = i + 1;
            var _ = s(d, 2),
              U = l(_),
              h = l(U),
              M = l(h),
              j = l(M, !0);
            n(M);
            var D = s(M, 2);
            {
              var Y = ae => {
                S(ae, {
                  get level() {
                    return t(f).badgeLevel
                  },
                  children: (pe, me) => {
                    B();
                    var oe = T();
                    v(() => g(oe, t(r).badge.label)), a(pe, oe)
                  }
                })
              };
              Q(D, ae => {
                t(r).badge && ae(Y)
              })
            }
            n(h);
            var F = s(h, 2),
              ge = l(F, !0);
            n(F), n(U), n(_), n(X), v(() => {
              N(X, 1, `${t(f).classes.button??""} flex w-full cursor-auto gap-3.5 border-l-[3px] px-4 py-3.5 text-left sm:gap-4 sm:px-5 ${i>0?"border-base-content/5 border-t":""}`), N(d, 1, `${t(f).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), g(j, t(r).title), g(ge, t(r).description)
            }), a(H, X)
          };
        Q(I, H => {
          p() ? H(Z) : H(se, -1)
        })
      }
      a(y, c)
    }), n(k), v(() => {
      N(x, 1, `${t(f).classes.header??""} flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest uppercase`), q(m, "d", t(f).icon), g($, t(f).label)
    }), a(P, k)
  }), a(G, b), re()
}
export {
  Ye as G, zt as R, Ve as a, vt as b, nt as c, it as d
};