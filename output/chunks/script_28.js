import "./Bzak7iHL.js";
import {
  p as j,
  f as P,
  d as t,
  r,
  s,
  A as B,
  aR as E,
  aH as F,
  t as h,
  b as L,
  c as H
} from "./DiiYHD7c.js";
import {
  s as i
} from "./BDBCFYzV.js";
import {
  i as R
} from "./CtTP525L.js";
import {
  b as W
} from "./CHMHDjSt.js";
import "./CfhQTYOZ.js";
import {
  g as l
} from "./C5GsJ62f.js";
import {
  L as q
} from "./PgXwYLdC.js";
const w = () => "By continuing, you agree to our",
  z = () => "Ao continuar, você concorda com nossos",
  C = (a = {}, e = {}) => (e.locale ?? l()) === "en" ? w() : z(),
  D = () => "Terms of Service",
  G = () => "Termos de Serviço",
  I = (a = {}, e = {}) => (e.locale ?? l()) === "en" ? D() : G(),
  J = () => "and",
  K = () => "e",
  M = (a = {}, e = {}) => (e.locale ?? l()) === "en" ? J() : K(),
  N = () => "Privacy Policy",
  O = () => "Política de privacidade",
  Q = (a = {}, e = {}) => (e.locale ?? l()) === "en" ? N() : O(),
  U = () => "We are experiencing technical problems. Sorry for the inconvenience 🙇‍♂️",
  V = () => "Estamos enfrentando problemas técnicos. Pedimos desculpas pelo inconveniente 🙇‍♂️",
  X = (a = {}, e = {}) => (e.locale ?? l()) === "en" ? U() : V();
var Y = P('<p class="my-2 text-center text-lg"> </p>'),
  Z = P('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-sm"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a></p></div>');

function ie(a, e) {
  j(e, !0);
  let o = E(null);
  var m = Z(),
    u = t(m),
    k = t(u);
  q(k, {
    hasText: !0
  }), r(u);
  var p = s(u, 2),
    d = t(p),
    S = t(d);
  {
    var T = n => {
      var c = Y(),
        v = t(c, !0);
      r(c), h(f => i(v, f), [() => X()]), L(n, c)
    };
    R(S, n => {
      n(T)
    })
  }
  r(d), r(p), W(p, n => F(o, n), () => B(o));
  var x = s(p, 2),
    y = t(x),
    _ = s(y),
    A = t(_, !0);
  r(_);
  var b = s(_),
    g = s(b),
    $ = t(g, !0);
  r(g), r(x), r(m), h((n, c, v, f) => {
    i(y, `${n??""} `), i(A, c), i(b, ` ${v??""} `), i($, f)
  }, [() => C(), () => I(), () => M(), () => Q()]), L(a, m), H()
}
export {
  ie as L
};