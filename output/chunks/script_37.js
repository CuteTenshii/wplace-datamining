import {
  D as e,
  Et as t,
  G as n,
  It as r,
  J as i,
  Nt as a,
  O as o,
  Ot as s,
  Pt as c,
  Q as l,
  S as u,
  X as d,
  Xt as f,
  Zt as p,
  a as m,
  b as h,
  bt as g,
  et as _,
  in as v,
  it as y,
  jt as b,
  mt as x,
  rt as S,
  ut as C,
  x as w,
  xt as T
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as E
} from "./Bpg9SJXw.js";
import {
  S as D,
  n as O
} from "./CZtdCIYn.js";
import {
  n as k
} from "./AaJzQw0Y.js";
var A = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAAXNSR0IArs4c6QAAACpJREFUeNpj+AsEZ86ASIa/DAwMZ84ACRDzDBigMs/AARITq1oUwxBWAADaREUdDMswKwAAAABJRU5ErkJggg==`,
  j = l(`<img class="pixelated bg-base-200" alt="User profile"/>`),
  M = l(`<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square max-w-none"/>`),
  N = l(`<div class="relative isolate w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <!> <div> </div></div>`);

function P(a, c) {
  let l = r(() => c.level % 1 * 360);
  var u = N(),
    f = s(t(u), 2),
    p = s(f, 2),
    m = t(p),
    h = t(m),
    _ = e => {
      k(e, {
        get userId() {
          return c.userId
        },
        get seed() {
          return c.avatarSeed
        }
      })
    },
    y = e => {
      var t = j();
      g(() => w(t, `src`, c.pictureUrl)), d(e, t)
    };
  n(h, e => {
    c.pictureUrl ? e(y, -1) : e(_)
  }), v(m), v(p);
  var b = s(p, 2),
    x = t => {
      var n = M();
      e(n, `width: 67.87878787878788px;`), g(() => w(n, `src`, c.frameUrl)), d(t, n)
    };
  n(b, e => {
    c.frameUrl && e(x)
  });
  var S = s(b, 2);
  let T;
  var E = t(S, !0);
  v(S), v(u), g(t => {
    e(f, `--angle: ${C(l)??``}deg; --color: var(--color-secondary)`), T = o(S, 1, `text-primary-content bg-secondary absolute bottom-0 z-20 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold`, null, T, {
      "left-0": c.level > 99,
      "-left-1": c.level > 99
    }), i(E, t)
  }, [() => Math.floor(c.level)]), d(a, u)
}
var F = l(`<div class="mt-2 flex flex-wrap items-center gap-2 text-sm"><p role="alert" class="text-error min-w-0 break-words"> </p> <button class="btn btn-ghost btn-sm min-h-11"> </button></div>`),
  I = l(`<div class="border-base-content/10 border-t py-3 text-left"><label class="flex min-h-11 cursor-pointer items-center justify-between gap-4"><span class="min-w-0 text-sm font-medium break-words"> </span> <input type="checkbox" class="checkbox checkbox-sm shrink-0"/></label> <p class="text-base-content/80 mt-1 text-xs leading-relaxed break-words"> </p> <!></div>`);

function L(e, r) {
  let o = _();
  p(r, !0);
  let l = m(r, `active`, 3, !0),
    S = a(!1),
    k = a(!1),
    A = a(!1),
    j = a(``),
    M = 0,
    N = a(0);
  T(() => {
    var e;
    let t = (e = O.data) == null ? void 0 : e.id,
      n = l();
    C(N);
    let r = ++M,
      i = new AbortController;
    return b(S, !1), b(k, !1), b(A, !1), b(j, ``), t && n && x(() => void P(r, i.signal)), () => {
      i.abort(), M++
    }
  });
  async function P(e, t) {
    try {
      let n = await D.getAppStoreConsumptionConsent(t);
      if (e !== M || t.aborted) return;
      b(S, n.granted, !0), b(k, !0)
    } catch {
      e === M && !t.aborted && b(j, E.settings_load_error(), !0)
    }
  }
  async function L(e) {
    if (C(A) || !C(k)) return;
    let t = M;
    b(A, !0), b(j, ``);
    try {
      let n = await D.setAppStoreConsumptionConsent(e);
      t === M && b(S, n.granted, !0)
    } catch {
      t === M && (b(j, E.settings_save_error(), !0), b(k, !1))
    } finally {
      t === M && b(A, !1)
    }
  }
  var R = I(),
    z = t(R),
    B = t(z),
    V = t(B, !0);
  v(B);
  var H = s(B, 2);
  h(H), v(z);
  var U = s(z, 2),
    W = t(U, !0);
  v(U);
  var G = s(U, 2),
    K = e => {
      var n = F(),
        r = t(n),
        a = t(r, !0);
      v(r);
      var o = s(r, 2),
        l = t(o, !0);
      v(o), v(n), g(e => {
        i(a, C(j)), i(l, e)
      }, [() => E.try_again()]), y(`click`, o, () => c(N)), d(e, n)
    };
  n(G, e => {
    C(j) && e(K)
  }), v(R), g((e, t) => {
    w(z, `for`, o), i(V, e), w(H, `id`, o), u(H, C(S)), H.disabled = !C(k) || C(A), w(H, `aria-describedby`, `${o}-description`), w(U, `id`, `${o}-description`), i(W, t)
  }, [() => E.appstore_consent_label(), () => E.appstore_consent_description()]), y(`change`, H, e => {
    let t = e.currentTarget.checked;
    e.currentTarget.checked = C(S), L(t)
  }), d(e, R), f()
}
S([`change`, `click`]);
export {
  P as n, A as r, L as t
};