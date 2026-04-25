import "./Bzak7iHL.js";
import {
  o as B
} from "./DHNZVpiV.js";
import {
  K as G,
  x as H,
  W as J,
  w as O,
  bl as Q,
  k as U,
  p as V,
  h as u,
  i as c,
  l as X,
  f as Y,
  a as o,
  b as Z,
  e as I,
  t as z,
  d as p,
  r as $,
  c as x,
  m as ee,
  u as te
} from "./C21-Odj5.js";
import {
  i as F
} from "./CHICDTuh.js";
import {
  a as q
} from "./BO7gtcmY.js";
import {
  p as r
} from "./C7i991D2.js";

function ae(w, e, i) {
  G(() => {
    var n = H(() => e(w, i == null ? void 0 : i()) || {});
    if (i && (n != null && n.update)) {
      var b = !1,
        h = {};
      J(() => {
        var s = i();
        O(s), b && Q(h, s) && (h = s, n.update(s))
      }), b = !0
    }
    if (n != null && n.destroy) return () => n.destroy()
  })
}
let v = I(!1);
var le = x("<div></div>"),
  re = x('<button type="button" class="btn">Retry</button>'),
  ie = x('<span class="loading loading-spinner loading-lg"></span>'),
  ne = x("<div><!></div>");

function ve(w, e) {
  V(e, !0);
  let i = r(e, "widgetId", 15),
    n = r(e, "appearance", 3, "always"),
    b = r(e, "language", 3, "auto"),
    h = r(e, "execution", 3, "render"),
    s = r(e, "retryInterval", 3, 8e3),
    D = r(e, "retry", 3, "auto"),
    K = r(e, "refreshExpired", 3, "auto"),
    S = r(e, "theme", 3, "auto"),
    T = r(e, "size", 3, "normal"),
    L = r(e, "tabIndex", 3, 0);
  r(e, "reset", 15)(() => {
    var t;
    i() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(i()))
  });
  const M = te(() => ({
      sitekey: e.siteKey,
      callback: (t, a) => {
        var l;
        (l = e.callback) == null || l.call(e, t, a)
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
      "refresh-expired": K(),
      "retry-interval": s(),
      tabindex: L(),
      appearance: n(),
      execution: h(),
      language: b(),
      action: e.action,
      retry: D(),
      theme: S(),
      cData: e.cData,
      size: T()
    })),
    g = (t, a) => {
      let l = window.turnstile.render(t, a);
      return i(l), {
        destroy() {
          window.turnstile.remove(l)
        },
        update(m) {
          window.turnstile.remove(l), l = window.turnstile.render(t, m), i(l)
        }
      }
    };
  let y = I(!1),
    _ = I(!1),
    f;

  function E() {
    const t = document.createElement("script");
    t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => u(v, !0), {
      once: !0
    }), document.head.appendChild(t)
  }

  function R() {
    u(_, !1), f && clearTimeout(f), f = setTimeout(() => {
      (!c(v) || !c(y)) && u(_, !0)
    }, 5e3)
  }

  function N() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(t => t.remove()), u(v, !1), E(), R()
  }
  B(() => (u(y, !0), c(v) || E(), R(), () => {
    u(y, !1), f && clearTimeout(f)
  }));
  var j = X(),
    P = Y(j);
  {
    var W = t => {
        var a = le();
        let l;
        ae(a, (m, C) => g == null ? void 0 : g(m, C), () => c(M)), z(() => l = q(a, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", l, {
          flexible: T() == "flexible"
        })), o(t, a)
      },
      A = t => {
        var a = ne(),
          l = p(a);
        {
          var m = d => {
              var k = re();
              ee("click", k, N), o(d, k)
            },
            C = d => {
              var k = ie();
              o(d, k)
            };
          F(l, d => {
            c(_) ? d(m) : d(C, !1)
          })
        }
        $(a), z(() => q(a, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), o(t, a)
      };
    F(P, t => {
      c(v) && c(y) ? t(W) : t(A, !1)
    })
  }
  o(w, j), Z()
}
U(["click"]);
export {
  ve as T, ae as a
};