import "./Bzak7iHL.js";
import {
  o as G
} from "./BahYQMKR.js";
import {
  k as H,
  I as J,
  R as O,
  aq as Q,
  bd as U,
  p as V,
  h as f,
  i as c,
  m as W,
  f as X,
  a as o,
  b as Y,
  e as C,
  t as q,
  d as Z,
  r as p,
  c as x,
  u as $
} from "./Cky4CUzE.js";
import {
  d as ee,
  a as te
} from "./rpJmCiEU.js";
import {
  i as z
} from "./7HE79MnC.js";
import {
  a as F
} from "./BYB6eTwl.js";
import {
  p as l
} from "./D5qy60-S.js";

function ae(w, e, i) {
  H(() => {
    var n = J(() => e(w, i == null ? void 0 : i()) || {});
    if (i && (n != null && n.update)) {
      var b = !1,
        h = {};
      O(() => {
        var d = i();
        Q(d), b && U(h, d) && (h = d, n.update(d))
      }), b = !0
    }
    if (n != null && n.destroy) return () => n.destroy()
  })
}
let v = C(!1);
var re = x("<div></div>"),
  le = x('<button type="button" class="btn">Retry</button>'),
  ie = x('<span class="loading loading-spinner loading-lg"></span>'),
  ne = x("<div><!></div>");

function be(w, e) {
  V(e, !0);
  let i = l(e, "widgetId", 15),
    n = l(e, "appearance", 3, "always"),
    b = l(e, "language", 3, "auto"),
    h = l(e, "execution", 3, "render"),
    d = l(e, "retryInterval", 3, 8e3),
    D = l(e, "retry", 3, "auto"),
    S = l(e, "refreshExpired", 3, "auto"),
    K = l(e, "theme", 3, "auto"),
    T = l(e, "size", 3, "normal"),
    L = l(e, "tabIndex", 3, 0);
  l(e, "reset", 15)(() => {
    var t;
    i() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(i()))
  });
  const M = $(() => ({
      sitekey: e.siteKey,
      callback: (t, a) => {
        var r;
        (r = e.callback) == null || r.call(e, t, a)
      },
      "error-callback": t => {
        var a;
        (a = e.errorCallback) == null || a.call(e, t)
      },
      "timeout-callback": () => {
        var t;
        (t = e.timeoutCallback) == null || t.call(e)
      },
      "expired-callback": () => {
        var t;
        (t = e.expiredCallback) == null || t.call(e)
      },
      "before-interactive-callback": () => {
        var t;
        (t = e.beforeInteractiveCallback) == null || t.call(e)
      },
      "after-interactive-callback": () => {
        var t;
        (t = e.afterInteractiveCallback) == null || t.call(e)
      },
      "unsupported-callback": () => {
        var t;
        return (t = e.unsupportedCallback) == null ? void 0 : t.call(e)
      },
      "response-field-name": e.responseFieldName ?? e.formsField ?? "cf-turnstile-response",
      "response-field": e.responseField ?? e.forms ?? !0,
      "refresh-expired": S(),
      "retry-interval": d(),
      tabindex: L(),
      appearance: n(),
      execution: h(),
      language: b(),
      action: e.action,
      retry: D(),
      theme: K(),
      cData: e.cData,
      size: T()
    })),
    g = (t, a) => {
      let r = window.turnstile.render(t, a);
      return i(r), {
        destroy() {
          window.turnstile.remove(r)
        },
        update(m) {
          window.turnstile.remove(r), r = window.turnstile.render(t, m), i(r)
        }
      }
    };
  let y = C(!1),
    _ = C(!1),
    u;

  function E() {
    const t = document.createElement("script");
    t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => f(v, !0), {
      once: !0
    }), document.head.appendChild(t)
  }

  function R() {
    f(_, !1), u && clearTimeout(u), u = setTimeout(() => {
      (!c(v) || !c(y)) && f(_, !0)
    }, 5e3)
  }

  function N() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(t => t.remove()), f(v, !1), E(), R()
  }
  G(() => (f(y, !0), c(v) || E(), R(), () => {
    f(y, !1), u && clearTimeout(u)
  }));
  var j = W(),
    P = X(j);
  {
    var A = t => {
        var a = re();
        let r;
        ae(a, (m, I) => g == null ? void 0 : g(m, I), () => c(M)), q(() => r = F(a, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", r, {
          flexible: T() == "flexible"
        })), o(t, a)
      },
      B = t => {
        var a = ne(),
          r = Z(a);
        {
          var m = s => {
              var k = le();
              te("click", k, N), o(s, k)
            },
            I = s => {
              var k = ie();
              o(s, k)
            };
          z(r, s => {
            c(_) ? s(m) : s(I, !1)
          })
        }
        p(a), q(() => F(a, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), o(t, a)
      };
    z(P, t => {
      c(v) && c(y) ? t(A) : t(B, !1)
    })
  }
  o(w, j), Y()
}
ee(["click"]);
export {
  be as T, ae as a
};