import "./Bzak7iHL.js";
import {
  o as B
} from "./Cqtrw3J3.js";
import {
  w as G,
  A as H,
  X as J,
  z as O,
  bm as Q,
  k as U,
  p as V,
  h as u,
  i as c,
  l as W,
  f as Y,
  a as o,
  b as Z,
  e as I,
  t as j,
  d as p,
  r as $,
  c as x,
  m as ee,
  u as te
} from "./BC180BoF.js";
import {
  i as F
} from "./CYlrjl7C.js";
import {
  a as q
} from "./Bbytcfj7.js";
import {
  p as l
} from "./BQ15Turv.js";

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
var re = x("<div></div>"),
  le = x('<button type="button" class="btn">Retry</button>'),
  ie = x('<span class="loading loading-spinner loading-lg"></span>'),
  ne = x("<div><!></div>");

function ve(w, e) {
  V(e, !0);
  let i = l(e, "widgetId", 15),
    n = l(e, "appearance", 3, "always"),
    b = l(e, "language", 3, "auto"),
    h = l(e, "execution", 3, "render"),
    s = l(e, "retryInterval", 3, 8e3),
    D = l(e, "retry", 3, "auto"),
    S = l(e, "refreshExpired", 3, "auto"),
    A = l(e, "theme", 3, "auto"),
    T = l(e, "size", 3, "normal"),
    K = l(e, "tabIndex", 3, 0);
  l(e, "reset", 15)(() => {
    var t;
    i() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(i()))
  });
  const L = te(() => ({
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
      "retry-interval": s(),
      tabindex: K(),
      appearance: n(),
      execution: h(),
      language: b(),
      action: e.action,
      retry: D(),
      theme: A(),
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
  let y = I(!1),
    _ = I(!1),
    f;

  function E() {
    const t = document.createElement("script");
    t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => u(v, !0), {
      once: !0
    }), document.head.appendChild(t)
  }

  function z() {
    u(_, !1), f && clearTimeout(f), f = setTimeout(() => {
      (!c(v) || !c(y)) && u(_, !0)
    }, 5e3)
  }

  function M() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(t => t.remove()), u(v, !1), E(), z()
  }
  B(() => (u(y, !0), c(v) || E(), z(), () => {
    u(y, !1), f && clearTimeout(f)
  }));
  var R = W(),
    N = Y(R);
  {
    var P = t => {
        var a = re();
        let r;
        ae(a, (m, C) => g == null ? void 0 : g(m, C), () => c(L)), j(() => r = q(a, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", r, {
          flexible: T() == "flexible"
        })), o(t, a)
      },
      X = t => {
        var a = ne(),
          r = p(a);
        {
          var m = d => {
              var k = le();
              ee("click", k, M), o(d, k)
            },
            C = d => {
              var k = ie();
              o(d, k)
            };
          F(r, d => {
            c(_) ? d(m) : d(C, !1)
          })
        }
        $(a), j(() => q(a, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), o(t, a)
      };
    F(N, t => {
      c(v) && c(y) ? t(P) : t(X, !1)
    })
  }
  o(w, R), Z()
}
U(["click"]);
export {
  ve as T, ae as a
};