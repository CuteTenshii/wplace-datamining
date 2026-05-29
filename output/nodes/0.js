var Qn = Object.defineProperty;
var In = o => {
  throw TypeError(o)
};
var Zn = (o, t, n) => t in o ? Qn(o, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : o[t] = n;
var It = (o, t, n) => Zn(o, typeof t != "symbol" ? t + "" : t, n),
  an = (o, t, n) => t.has(o) || In("Cannot " + n);
var p = (o, t, n) => (an(o, t, "read from private field"), n ? n.call(o) : t.get(o)),
  gt = (o, t, n) => t.has(o) ? In("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, n),
  pe = (o, t, n, f) => (an(o, t, "write to private field"), f ? f.call(o, n) : t.set(o, n), n),
  En = (o, t, n) => (an(o, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as fe
} from "../chunks/DMoMXVXI.js";
import {
  p as Yt,
  d as et,
  a as v,
  r as X,
  t as Tt,
  b as Xt,
  c as dt,
  bJ as Re,
  P as Jn,
  O as Tn,
  Q as $n,
  e as J,
  g as vn,
  I as Ut,
  h as _,
  i as r,
  L as ke,
  s as Et,
  l as ae,
  v as rn,
  u as E,
  aJ as qt,
  q as Q,
  f as G,
  k as on,
  bp as Dn,
  w as Ke,
  bK as Mn,
  n as Bn,
  bH as ti
} from "../chunks/Dbe4PVAU.js";
import {
  c as ei,
  s as Bt
} from "../chunks/C_mo-lyU.js";
import {
  i as st
} from "../chunks/Icl9dwnj.js";
import {
  s as Ht
} from "../chunks/2Od2egA-.js";
import {
  v as ni
} from "../chunks/RmsLDsli.js";
import {
  l as Rt,
  n as le,
  o as ii,
  j as fn,
  a as ln,
  t as ye,
  u as Qe,
  p as xn,
  q as ri,
  r as un,
  v as Sn,
  w as Nn,
  x as oi,
  y as Ln,
  z as si,
  A as ai,
  T as li
} from "../chunks/QUpYfTET.js";
import {
  a as Hn,
  i as sn,
  b as Ot,
  s as An,
  c as mn,
  w as ui,
  d as ci,
  e as di,
  f as pn,
  n as Pn,
  m as Xe,
  g as hi,
  A as fi,
  h as mi,
  j as pi,
  k as _i,
  l as gi
} from "../chunks/Cfg0FnGE.js";
import {
  k as vi
} from "../chunks/ryCN0oNh.js";
import {
  c as ue,
  a as Jt,
  s as bt,
  b as cn,
  d as Ce,
  S as yi,
  k as Ci,
  e as Un
} from "../chunks/B7_gUtXa.js";
import {
  c as bi,
  d as wi
} from "../chunks/DqVoli-1.js";
import {
  p as k,
  s as Oe,
  r as Te
} from "../chunks/K9AHFDoV.js";
import {
  _ as Ii
} from "../chunks/Dp1pzeXC.js";
import {
  e as Ze
} from "../chunks/sR4NyGSS.js";
import {
  c as $t
} from "../chunks/BKLQopM3.js";
import {
  b as yn
} from "../chunks/BVz9wMiQ.js";
import {
  t as Ei
} from "../chunks/CPcsbTWB.js";
import {
  g as ne
} from "../chunks/BhCkpOlh.js";
import "../chunks/B7vrJrEX.js";
const Ti = !0,
  _l = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Ti
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Di = () => "Input the code",
  xi = () => "Insira o código",
  Si = () => "输入验证码",
  Ni = () => "Code eingeben",
  Li = () => "Introduce el código",
  Ai = () => "Entrez le code",
  Pi = () => "Inserisci il codice",
  ki = () => "コードを入力してください。",
  Oi = () => "Wpisz kod",
  Ri = () => "Введите код",
  Mi = () => "Введіть код",
  Bi = () => "Nhập mã",
  Hi = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Di() : n === "pt" ? xi() : n === "ch" ? Si() : n === "de" ? Ni() : n === "es" ? Li() : n === "fr" ? Ai() : n === "it" ? Pi() : n === "jp" ? ki() : n === "pl" ? Oi() : n === "ru" ? Ri() : n === "uk" ? Mi() : Bi()
  },
  Ui = () => "Not a valid phone number",
  Wi = () => "Não é um número válido",
  Vi = () => "不是有效的电话号码",
  ji = () => "Keine gültige Telefonnummer",
  zi = () => "No es un número de teléfono válido",
  Fi = () => "Numéro non valide",
  Gi = () => "Numero non valido",
  Ki = () => "有効な電話番号ではありません。",
  qi = () => "To nie jest prawidłowy numer telefonu",
  Yi = () => "Неверный номер телефона",
  Xi = () => "Некоректний номер телефону",
  Qi = () => "Không phải số điện thoại hợp lệ",
  Zi = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Ui() : n === "pt" ? Wi() : n === "ch" ? Vi() : n === "de" ? ji() : n === "es" ? zi() : n === "fr" ? Fi() : n === "it" ? Gi() : n === "jp" ? Ki() : n === "pl" ? qi() : n === "ru" ? Yi() : n === "uk" ? Xi() : Qi()
  },
  Ji = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  $i = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  tr = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  er = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  nr = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  ir = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  rr = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  or = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  sr = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  ar = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  lr = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  ur = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  cr = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Ji() : n === "pt" ? $i() : n === "ch" ? tr() : n === "de" ? er() : n === "es" ? nr() : n === "fr" ? ir() : n === "it" ? rr() : n === "jp" ? or() : n === "pl" ? sr() : n === "ru" ? ar() : n === "uk" ? lr() : ur()
  },
  dr = () => "Phone verification",
  hr = () => "Verificação de telefone",
  fr = () => "电话验证",
  mr = () => "Telefon-Verifizierung",
  pr = () => "Verificación de teléfono",
  _r = () => "Vérification du téléphone",
  gr = () => "Verifica del telefono",
  vr = () => "電話番号の確認",
  yr = () => "Weryfikacja telefonu",
  Cr = () => "Подтверждение телефона",
  br = () => "Підтвердження телефону",
  wr = () => "Xác minh số điện thoại",
  Ir = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? dr() : n === "pt" ? hr() : n === "ch" ? fr() : n === "de" ? mr() : n === "es" ? pr() : n === "fr" ? _r() : n === "it" ? gr() : n === "jp" ? vr() : n === "pl" ? yr() : n === "ru" ? Cr() : n === "uk" ? br() : wr()
  },
  Er = () => "Verify your phone number to keep painting. This helps us block bots and multi-accounting to keep a fair experience for everyone.",
  Tr = () => "Verifique seu número de telefone para continuar pintando. Isso nos ajuda a bloquear bots e o uso de várias contas para garantir uma experiência justa para todos.",
  Dr = () => "请验证你的电话号码以继续绘画。这有助于我们阻止机器人和多账号行为，为所有人提供公平的体验。",
  xr = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots und Multi-Accounting zu blockieren, damit alle ein faires Erlebnis haben.",
  Sr = () => "Verifica tu número de teléfono para seguir pintando. Esto nos ayuda a bloquear bots y el uso de varias cuentas para garantizar una experiencia justa para todos.",
  Nr = () => "Vérifiez votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et les comptes multiples afin de garantir une expérience équitable pour tous.",
  Lr = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a bloccare bot e account multipli per garantire un'esperienza equa a tutti.",
  Ar = () => "描き続けるには電話番号の確認が必要です。これはボットや複数アカウントの利用を防ぎ、すべてのプレイヤーに公平な体験を提供するための手順です。",
  Pr = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to blokować boty i zakładanie wielu kont, aby zapewnić wszystkim uczciwą rozgrywkę.",
  kr = () => "Подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам блокировать ботов и мультиаккаунты, обеспечивая честные условия для всех.",
  Or = () => "Підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам блокувати ботів і мультиакаунти, щоб забезпечити чесні умови для всіх.",
  Rr = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi chặn bot và việc dùng nhiều tài khoản để mang lại trải nghiệm công bằng cho mọi người.",
  Mr = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Er() : n === "pt" ? Tr() : n === "ch" ? Dr() : n === "de" ? xr() : n === "es" ? Sr() : n === "fr" ? Nr() : n === "it" ? Lr() : n === "jp" ? Ar() : n === "pl" ? Pr() : n === "ru" ? kr() : n === "uk" ? Or() : Rr()
  },
  Br = () => "Phone successfully verified",
  Hr = () => "Telefone verificado com sucesso",
  Ur = () => "电话验证成功",
  Wr = () => "Telefon erfolgreich verifiziert",
  Vr = () => "Teléfono verificado correctamente",
  jr = () => "Téléphone vérifié avec succès",
  zr = () => "Telefono verificato con successo",
  Fr = () => "電話番号を確認しました。",
  Gr = () => "Telefon został pomyślnie zweryfikowany",
  Kr = () => "Телефон успешно подтверждён",
  qr = () => "Телефон успішно підтверджено",
  Yr = () => "Đã xác minh số điện thoại thành công",
  Xr = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Br() : n === "pt" ? Hr() : n === "ch" ? Ur() : n === "de" ? Wr() : n === "es" ? Vr() : n === "fr" ? jr() : n === "it" ? zr() : n === "jp" ? Fr() : n === "pl" ? Gr() : n === "ru" ? Kr() : n === "uk" ? qr() : Yr()
  },
  Qr = () => "Resend Code",
  Zr = () => "Reenviar Código",
  Jr = () => "重新发送验证码",
  $r = () => "Code erneut senden",
  to = () => "Reenviar código",
  eo = () => "Renvoyer le code",
  no = () => "Reinvia codice",
  io = () => "コードを再送信",
  ro = () => "Wyślij kod ponownie",
  oo = () => "Отправить код ещё раз",
  so = () => "Надіслати код ще раз",
  ao = () => "Gửi lại mã",
  lo = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Qr() : n === "pt" ? Zr() : n === "ch" ? Jr() : n === "de" ? $r() : n === "es" ? to() : n === "fr" ? eo() : n === "it" ? no() : n === "jp" ? io() : n === "pl" ? ro() : n === "ru" ? oo() : n === "uk" ? so() : ao()
  },
  uo = () => "Send Code",
  co = () => "Enviar o código",
  ho = () => "发送验证码",
  fo = () => "Code senden",
  mo = () => "Enviar código",
  po = () => "Envoyer le code",
  _o = () => "Invia codice",
  go = () => "コードを送信",
  vo = () => "Wyślij kod",
  yo = () => "Отправить код",
  Co = () => "Надіслати код",
  bo = () => "Gửi mã",
  wo = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? uo() : n === "pt" ? co() : n === "ch" ? ho() : n === "de" ? fo() : n === "es" ? mo() : n === "fr" ? po() : n === "it" ? _o() : n === "jp" ? go() : n === "pl" ? vo() : n === "ru" ? yo() : n === "uk" ? Co() : bo()
  },
  Io = o => `Sent to ${o.phone}`,
  Eo = o => `Enviado para ${o.phone}`,
  To = o => `已发送至 ${o.phone}`,
  Do = o => `An ${o.phone} gesendet`,
  xo = o => `Enviado a ${o.phone}`,
  So = o => `Envoyé à ${o.phone}`,
  No = o => `Inviato a ${o.phone}`,
  Lo = o => `${o.phone} に送信しました`,
  Ao = o => `Wysłano na ${o.phone}`,
  Po = o => `Отправлено на ${o.phone}`,
  ko = o => `Надіслано на ${o.phone}`,
  Oo = o => `Đã gửi tới ${o.phone}`,
  Ro = (o, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Io(o) : n === "pt" ? Eo(o) : n === "ch" ? To(o) : n === "de" ? Do(o) : n === "es" ? xo(o) : n === "fr" ? So(o) : n === "it" ? No(o) : n === "jp" ? Lo(o) : n === "pl" ? Ao(o) : n === "ru" ? Po(o) : n === "uk" ? ko(o) : Oo(o)
  },
  Mo = o => `Code sent to ${o.phone} via ${o.channel}`,
  Bo = o => `Código enviado para ${o.phone} via ${o.channel}`,
  Ho = o => `验证码已通过${o.channel}发送至${o.phone}`,
  Uo = o => `Code an ${o.phone} per ${o.channel} gesendet`,
  Wo = o => `Código enviado a ${o.phone} por ${o.channel}`,
  Vo = o => `Code envoyé à ${o.phone} par ${o.channel}`,
  jo = o => `Codice inviato a ${o.phone} tramite ${o.channel}`,
  zo = o => `コードを${o.channel}で${o.phone}に送信しました`,
  Fo = o => `Kod wysłany do ${o.phone} przez ${o.channel}`,
  Go = o => `Код отправлен на ${o.phone} через ${o.channel}`,
  Ko = o => `Код надіслано на ${o.phone} через ${o.channel}`,
  qo = o => `Mã đã được gửi tới ${o.phone} qua ${o.channel}`,
  Yo = (o, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Mo(o) : n === "pt" ? Bo(o) : n === "ch" ? Ho(o) : n === "de" ? Uo(o) : n === "es" ? Wo(o) : n === "fr" ? Vo(o) : n === "it" ? jo(o) : n === "jp" ? zo(o) : n === "pl" ? Fo(o) : n === "ru" ? Go(o) : n === "uk" ? Ko(o) : qo(o)
  },
  Xo = () => "Try another number",
  Qo = () => "Tentar outro número",
  Zo = () => "请尝试使用其他号码",
  Jo = () => "Andere Nummer versuchen",
  $o = () => "Prueba con otro número",
  ts = () => "Essayez un autre numéro",
  es = () => "Prova un altro numero",
  ns = () => "別の番号をお試しください。",
  is = () => "Spróbuj innego numeru",
  rs = () => "Попробуйте другой номер",
  os = () => "Спробувати інший номер",
  ss = () => "Thử số khác",
  as = (o = {}, t = {}) => {
    const n = t.locale ?? ne();
    return n === "en" ? Xo() : n === "pt" ? Qo() : n === "ch" ? Zo() : n === "de" ? Jo() : n === "es" ? $o() : n === "fr" ? ts() : n === "it" ? es() : n === "jp" ? ns() : n === "pl" ? is() : n === "ru" ? rs() : n === "uk" ? os() : ss()
  },
  ls = Array(12).fill(0);
var us = dt('<div class="sonner-loading-bar"></div>'),
  cs = dt('<div><div class="sonner-spinner"></div></div>');

function ds(o, t) {
  Yt(t, !0);
  var n = cs(),
    f = et(n);
  Ze(f, 23, () => ls, (g, w) => `spinner-bar-${w}`, (g, w) => {
    var x = us();
    v(g, x)
  }), X(f), X(n), Tt(g => {
    Jt(n, 1, g), bt(n, "data-visible", t.visible)
  }, [() => ue(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), v(o, n), Xt()
}
const hs = typeof window < "u" ? window : void 0;

function fs(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var be, Me;
class ms {
  constructor(t = {}) {
    gt(this, be);
    gt(this, Me);
    const {
      window: n = hs,
      document: f = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (pe(this, be, f), pe(this, Me, ei(g => {
      const w = Re(n, "focusin", g),
        x = Re(n, "focusout", g);
      return () => {
        w(), x()
      }
    })))
  }
  get current() {
    var t;
    return (t = p(this, Me)) == null || t.call(this), p(this, be) ? fs(p(this, be)) : null
  }
}
be = new WeakMap, Me = new WeakMap;
new ms;
var Be, ce;
class ps {
  constructor(t) {
    gt(this, Be);
    gt(this, ce);
    pe(this, Be, t), pe(this, ce, Symbol(t))
  }
  get key() {
    return p(this, ce)
  }
  exists() {
    return Jn(p(this, ce))
  }
  get() {
    const t = Tn(p(this, ce));
    if (t === void 0) throw new Error(`Context "${p(this,Be)}" not found`);
    return t
  }
  getOr(t) {
    const n = Tn(p(this, ce));
    return n === void 0 ? t : n
  }
  set(t) {
    return $n(p(this, ce), t)
  }
}
Be = new WeakMap, ce = new WeakMap;
const _s = new ps("<Toaster/>");

function qe(o) {
  return o.label !== void 0
}

function gs() {
  let o = J(vn(typeof document < "u" ? document.hidden : !1));
  return Ut(() => Re(document, "visibilitychange", () => {
    _(o, document.hidden, !0)
  })), {
    get current() {
      return r(o)
    }
  }
}
const kn = 4e3,
  vs = 14,
  ys = 45,
  Cs = 200,
  bs = .05,
  ws = {
    toast: "",
    title: "",
    description: "",
    loader: "",
    closeButton: "",
    cancelButton: "",
    actionButton: "",
    action: "",
    warning: "",
    error: "",
    success: "",
    default: "",
    info: "",
    loading: ""
  };

function Is(o) {
  const [t, n] = o.split("-"), f = [];
  return t && f.push(t), n && f.push(n), f
}

function On(o) {
  return 1 / (1.5 + Math.abs(o) / 20)
}
var Es = dt("<div><!></div>"),
  Ts = dt('<button data-close-button=""><!></button>'),
  Ds = dt('<div data-icon=""><!> <!></div>'),
  xs = dt('<div data-description=""><!></div>'),
  Ss = dt('<button data-button="" data-cancel=""> </button>'),
  Ns = dt('<button data-button=""> </button>'),
  Ls = dt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  As = dt('<li data-sonner-toast=""><!> <!></li>');

function Ps(o, t) {
  Yt(t, !0);
  const n = P => {
    var U = Q(),
      rt = G(U);
    {
      var ut = m => {
          var At = Es(),
            l = et(At);
          Ht(l, () => t.loadingIcon), X(At), Tt(e => {
            Jt(At, 1, e), bt(At, "data-visible", r(H) === "loading")
          }, [() => {
            var e, i, s;
            return ue(le((e = r(q)) == null ? void 0 : e.loader, (s = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), v(m, At)
        },
        tt = m => {
          {
            let At = E(() => {
                var e, i;
                return le((e = r(q)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              l = E(() => r(H) === "loading");
            ds(m, {
              get class() {
                return r(At)
              },
              get visible() {
                return r(l)
              }
            })
          }
        };
      st(rt, m => {
        t.loadingIcon ? m(ut) : m(tt, !1)
      })
    }
    v(P, U)
  };
  let f = k(t, "cancelButtonStyle", 3, ""),
    g = k(t, "actionButtonStyle", 3, ""),
    w = k(t, "descriptionClass", 3, ""),
    x = k(t, "unstyled", 3, !1),
    B = k(t, "defaultRichColors", 3, !1);
  const W = {
    ...ws
  };
  let L = J(!1),
    y = J(!1),
    D = J(!1),
    N = J(!1),
    $ = J(!1),
    R = J(0),
    Z = J(0),
    O = t.toast.duration || t.duration || kn,
    b = J(void 0),
    S = J(null),
    K = J(null);
  const I = E(() => t.index === 0),
    V = E(() => t.index + 1 <= t.visibleToasts),
    H = E(() => t.toast.type),
    pt = E(() => t.toast.dismissable !== !1),
    St = E(() => t.toast.class || ""),
    T = E(() => t.toast.descriptionClass || ""),
    it = E(() => Rt.heights.findIndex(P => P.toastId === t.toast.id) || 0),
    ht = E(() => t.toast.closeButton ?? t.closeButton),
    Nt = E(() => t.toast.duration ?? t.duration ?? kn);
  let xt = null;
  const Lt = E(() => t.position.split("-")),
    Mt = E(() => Rt.heights.reduce((P, U, rt) => rt >= r(it) ? P : P + U.height, 0)),
    ie = gs(),
    at = E(() => t.toast.invert || t.invert),
    Ft = E(() => r(H) === "loading"),
    q = E(() => ({
      ...W,
      ...t.classes
    })),
    mt = E(() => t.toast.title),
    yt = E(() => t.toast.description);
  let Ct = J(0),
    re = J(0);
  const A = E(() => Math.round(r(it) * vs + r(Mt)));
  Ut(() => {
    r(mt), r(yt);
    let P;
    t.expanded || t.expandByDefault ? P = 1 : P = 1 - t.index * bs;
    const U = ke(() => r(b));
    if (U === void 0) return;
    U.style.setProperty("height", "auto");
    const rt = U.offsetHeight,
      ut = U.getBoundingClientRect().height,
      tt = Math.round(ut / P + Number.EPSILON & 100) / 100;
    U.style.removeProperty("height");
    let m;
    Math.abs(tt - rt) < 1 ? m = tt : m = rt, _(Z, m, !0), ke(() => {
      Rt.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function F() {
    _(y, !0), _(R, r(A), !0), Rt.removeHeight(t.toast.id), setTimeout(() => {
      Rt.remove(t.toast.id)
    }, Cs)
  }
  let wt;
  const lt = E(() => t.toast.promise && r(H) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Wt() {
    _(Ct, new Date().getTime(), !0), wt = setTimeout(() => {
      var P, U;
      (U = (P = t.toast).onAutoClose) == null || U.call(P, t.toast), F()
    }, O)
  }

  function te() {
    if (r(re) < r(Ct)) {
      const P = new Date().getTime() - r(Ct);
      O = O - P
    }
    _(re, new Date().getTime(), !0)
  }
  Ut(() => {
    t.toast.updated && (clearTimeout(wt), O = r(Nt), Wt())
  }), Ut(() => (r(lt) || (t.expanded || t.interacting || ie.current ? te() : Wt()), () => clearTimeout(wt))), fe(() => {
    var U;
    _(L, !0);
    const P = (U = r(b)) == null ? void 0 : U.getBoundingClientRect().height;
    return _(Z, P, !0), Rt.setHeight({
      toastId: t.toast.id,
      height: P
    }), () => {
      Rt.removeHeight(t.toast.id)
    }
  }), Ut(() => {
    t.toast.delete && ke(() => {
      var P, U;
      F(), (U = (P = t.toast).onDismiss) == null || U.call(P, t.toast)
    })
  });
  const ge = P => {
      if (r(Ft)) return;
      _(R, r(A), !0);
      const U = P.target;
      U.setPointerCapture(P.pointerId), U.tagName !== "BUTTON" && (_(D, !0), xt = {
        x: P.clientX,
        y: P.clientY
      })
    },
    oe = () => {
      var m, At, l, e, i, s;
      if (r(N) || !r(pt)) return;
      xt = null;
      const P = Number(((m = r(b)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        U = Number(((At = r(b)) == null ? void 0 : At.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        rt = new Date().getTime() - 0,
        ut = r(S) === "x" ? P : U,
        tt = Math.abs(ut) / rt;
      if (Math.abs(ut) >= ys || tt > .11) {
        _(R, r(A), !0), (e = (l = t.toast).onDismiss) == null || e.call(l, t.toast), r(S) === "x" ? _(K, P > 0 ? "right" : "left", !0) : _(K, U > 0 ? "down" : "up", !0), F(), _(N, !0);
        return
      } else(i = r(b)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (s = r(b)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      _($, !1), _(D, !1), _(S, null)
    },
    Vt = P => {
      var At, l, e;
      if (!xt || !r(pt) || (((At = window.getSelection()) == null ? void 0 : At.toString().length) ?? -1) > 0) return;
      const rt = P.clientY - xt.y,
        ut = P.clientX - xt.x,
        tt = t.swipeDirections ?? Is(t.position);
      !r(S) && (Math.abs(ut) > 1 || Math.abs(rt) > 1) && _(S, Math.abs(ut) > Math.abs(rt) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (r(S) === "y") {
        if (tt.includes("top") || tt.includes("bottom"))
          if (tt.includes("top") && rt < 0 || tt.includes("bottom") && rt > 0) m.y = rt;
          else {
            const i = rt * On(rt);
            m.y = Math.abs(i) < Math.abs(rt) ? i : rt
          }
      } else if (r(S) === "x" && (tt.includes("left") || tt.includes("right")))
        if (tt.includes("left") && ut < 0 || tt.includes("right") && ut > 0) m.x = ut;
        else {
          const i = ut * On(ut);
          m.x = Math.abs(i) < Math.abs(ut) ? i : ut
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && _($, !0), (l = r(b)) == null || l.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = r(b)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    jt = () => {
      _(D, !1), _(S, null), xt = null
    },
    Pt = E(() => t.toast.icon ? t.toast.icon : r(H) === "success" ? t.successIcon : r(H) === "error" ? t.errorIcon : r(H) === "warning" ? t.warningIcon : r(H) === "info" ? t.infoIcon : r(H) === "loading" ? t.loadingIcon : null);
  var Y = As();
  bt(Y, "tabindex", 0);
  let me;
  var De = et(Y);
  {
    var xe = P => {
      var U = Ts(),
        rt = et(U);
      Ht(rt, () => t.closeIcon ?? qt), X(U), Tt(ut => {
        bt(U, "aria-label", t.closeButtonAriaLabel), bt(U, "data-disabled", r(Ft)), Jt(U, 1, ut)
      }, [() => {
        var ut, tt, m;
        return ue(le((ut = r(q)) == null ? void 0 : ut.closeButton, (m = (tt = t.toast) == null ? void 0 : tt.classes) == null ? void 0 : m.closeButton))
      }]), ae("click", U, () => {
        var ut, tt;
        r(Ft) || !r(pt) || (F(), (tt = (ut = t.toast).onDismiss) == null || tt.call(ut, t.toast))
      }), v(P, U)
    };
    st(De, P => {
      r(ht) && !t.toast.component && r(H) !== "loading" && t.closeIcon !== null && P(xe)
    })
  }
  var Se = Et(De, 2);
  {
    var ve = P => {
        const U = E(() => t.toast.component);
        var rt = Q(),
          ut = G(rt);
        $t(ut, () => r(U), (tt, m) => {
          m(tt, Oe(() => t.toast.componentProps, {
            closeToast: F
          }))
        }), v(P, rt)
      },
      Ne = P => {
        var U = Ls(),
          rt = G(U);
        {
          var ut = h => {
            var d = Ds(),
              C = et(d);
            {
              var M = j => {
                var z = Q(),
                  vt = G(z);
                {
                  var nt = ot => {
                      var Gt = Q(),
                        zt = G(Gt);
                      $t(zt, () => t.toast.icon, (Dt, kt) => {
                        kt(Dt, {})
                      }), v(ot, Gt)
                    },
                    ft = ot => {
                      n(ot)
                    };
                  st(vt, ot => {
                    t.toast.icon ? ot(nt) : ot(ft, !1)
                  })
                }
                v(j, z)
              };
              st(C, j => {
                (t.toast.promise || r(H) === "loading") && j(M)
              })
            }
            var _t = Et(C, 2);
            {
              var ct = j => {
                var z = Q(),
                  vt = G(z);
                {
                  var nt = Dt => {
                      var kt = Q(),
                        ee = G(kt);
                      $t(ee, () => t.toast.icon, (Yn, Xn) => {
                        Xn(Yn, {})
                      }), v(Dt, kt)
                    },
                    ft = Dt => {
                      var kt = Q(),
                        ee = G(kt);
                      Ht(ee, () => t.successIcon ?? qt), v(Dt, kt)
                    },
                    ot = Dt => {
                      var kt = Q(),
                        ee = G(kt);
                      Ht(ee, () => t.errorIcon ?? qt), v(Dt, kt)
                    },
                    Gt = Dt => {
                      var kt = Q(),
                        ee = G(kt);
                      Ht(ee, () => t.warningIcon ?? qt), v(Dt, kt)
                    },
                    zt = Dt => {
                      var kt = Q(),
                        ee = G(kt);
                      Ht(ee, () => t.infoIcon ?? qt), v(Dt, kt)
                    };
                  st(vt, Dt => {
                    t.toast.icon ? Dt(nt) : r(H) === "success" ? Dt(ft, 1) : r(H) === "error" ? Dt(ot, 2) : r(H) === "warning" ? Dt(Gt, 3) : r(H) === "info" && Dt(zt, 4)
                  })
                }
                v(j, z)
              };
              st(_t, j => {
                t.toast.type !== "loading" && j(ct)
              })
            }
            X(d), Tt(j => Jt(d, 1, j), [() => {
              var j, z, vt;
              return ue(le((j = r(q)) == null ? void 0 : j.icon, (vt = (z = t.toast) == null ? void 0 : z.classes) == null ? void 0 : vt.icon))
            }]), v(h, d)
          };
          st(rt, h => {
            (r(H) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(Pt) !== null || t.toast.icon) && h(ut)
          })
        }
        var tt = Et(rt, 2),
          m = et(tt),
          At = et(m);
        {
          var l = h => {
            var d = Q(),
              C = G(d);
            {
              var M = ct => {
                  const j = E(() => t.toast.title);
                  var z = Q(),
                    vt = G(z);
                  $t(vt, () => r(j), (nt, ft) => {
                    ft(nt, Oe(() => t.toast.componentProps))
                  }), v(ct, z)
                },
                _t = ct => {
                  var j = Dn();
                  Tt(() => Bt(j, t.toast.title)), v(ct, j)
                };
              st(C, ct => {
                typeof t.toast.title != "string" ? ct(M) : ct(_t, !1)
              })
            }
            v(h, d)
          };
          st(At, h => {
            t.toast.title && h(l)
          })
        }
        X(m);
        var e = Et(m, 2);
        {
          var i = h => {
            var d = xs(),
              C = et(d);
            {
              var M = ct => {
                  const j = E(() => t.toast.description);
                  var z = Q(),
                    vt = G(z);
                  $t(vt, () => r(j), (nt, ft) => {
                    ft(nt, Oe(() => t.toast.componentProps))
                  }), v(ct, z)
                },
                _t = ct => {
                  var j = Dn();
                  Tt(() => Bt(j, t.toast.description)), v(ct, j)
                };
              st(C, ct => {
                typeof t.toast.description != "string" ? ct(M) : ct(_t, !1)
              })
            }
            X(d), Tt(ct => Jt(d, 1, ct), [() => {
              var ct, j;
              return ue(le(w(), r(T), (ct = r(q)) == null ? void 0 : ct.description, (j = t.toast.classes) == null ? void 0 : j.description))
            }]), v(h, d)
          };
          st(e, h => {
            t.toast.description && h(i)
          })
        }
        X(tt);
        var s = Et(tt, 2);
        {
          var a = h => {
            var d = Q(),
              C = G(d);
            {
              var M = j => {
                  var z = Q(),
                    vt = G(z);
                  $t(vt, () => t.toast.cancel, (nt, ft) => {
                    ft(nt, {})
                  }), v(j, z)
                },
                _t = j => {
                  var z = Ss(),
                    vt = et(z, !0);
                  X(z), Tt(nt => {
                    cn(z, t.toast.cancelButtonStyle ?? f()), Jt(z, 1, nt), Bt(vt, t.toast.cancel.label)
                  }, [() => {
                    var nt, ft, ot;
                    return ue(le((nt = r(q)) == null ? void 0 : nt.cancelButton, (ot = (ft = t.toast) == null ? void 0 : ft.classes) == null ? void 0 : ot.cancelButton))
                  }]), ae("click", z, nt => {
                    var ft, ot;
                    qe(t.toast.cancel) && r(pt) && ((ot = (ft = t.toast.cancel) == null ? void 0 : ft.onClick) == null || ot.call(ft, nt), F())
                  }), v(j, z)
                },
                ct = E(() => qe(t.toast.cancel));
              st(C, j => {
                typeof t.toast.cancel == "function" ? j(M) : r(ct) && j(_t, 1)
              })
            }
            v(h, d)
          };
          st(s, h => {
            t.toast.cancel && h(a)
          })
        }
        var c = Et(s, 2);
        {
          var u = h => {
            var d = Q(),
              C = G(d);
            {
              var M = j => {
                  var z = Q(),
                    vt = G(z);
                  $t(vt, () => t.toast.action, (nt, ft) => {
                    ft(nt, {})
                  }), v(j, z)
                },
                _t = j => {
                  var z = Ns(),
                    vt = et(z, !0);
                  X(z), Tt(nt => {
                    cn(z, t.toast.actionButtonStyle ?? g()), Jt(z, 1, nt), Bt(vt, t.toast.action.label)
                  }, [() => {
                    var nt, ft, ot;
                    return ue(le((nt = r(q)) == null ? void 0 : nt.actionButton, (ot = (ft = t.toast) == null ? void 0 : ft.classes) == null ? void 0 : ot.actionButton))
                  }]), ae("click", z, nt => {
                    var ft;
                    qe(t.toast.action) && ((ft = t.toast.action) == null || ft.onClick(nt), !nt.defaultPrevented && F())
                  }), v(j, z)
                },
                ct = E(() => qe(t.toast.action));
              st(C, j => {
                typeof t.toast.action == "function" ? j(M) : r(ct) && j(_t, 1)
              })
            }
            v(h, d)
          };
          st(c, h => {
            t.toast.action && h(u)
          })
        }
        Tt(h => Jt(m, 1, h), [() => {
          var h, d, C;
          return ue(le((h = r(q)) == null ? void 0 : h.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), v(P, U)
      };
    st(Se, P => {
      t.toast.component ? P(ve) : P(Ne, !1)
    })
  }
  X(Y), yn(Y, P => _(b, P), () => r(b)), Tt((P, U, rt) => {
    Jt(Y, 1, P), bt(Y, "data-rich-colors", t.toast.richColors ?? B()), bt(Y, "data-styled", !(t.toast.component || t.toast.unstyled || x())), bt(Y, "data-mounted", r(L)), bt(Y, "data-promise", U), bt(Y, "data-swiped", r($)), bt(Y, "data-removed", r(y)), bt(Y, "data-visible", r(V)), bt(Y, "data-y-position", r(Lt)[0]), bt(Y, "data-x-position", r(Lt)[1]), bt(Y, "data-index", t.index), bt(Y, "data-front", r(I)), bt(Y, "data-swiping", r(D)), bt(Y, "data-dismissable", r(pt)), bt(Y, "data-type", r(H)), bt(Y, "data-invert", r(at)), bt(Y, "data-swipe-out", r(N)), bt(Y, "data-swipe-direction", r(K)), bt(Y, "data-expanded", rt), me = cn(Y, `${t.style} ${t.toast.style}`, me, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Rt.toasts.length - t.index,
      "--offset": `${r(y)?r(R):r(A)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(Z)}px`
    })
  }, [() => {
    var P, U, rt, ut, tt, m;
    return ue(le(t.class, r(St), (P = r(q)) == null ? void 0 : P.toast, (rt = (U = t.toast) == null ? void 0 : U.classes) == null ? void 0 : rt.toast, (ut = r(q)) == null ? void 0 : ut[r(H)], (m = (tt = t.toast) == null ? void 0 : tt.classes) == null ? void 0 : m[r(H)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(L))]), ae("pointermove", Y, Vt), ae("pointerup", Y, oe), ae("pointerdown", Y, ge), rn("dragend", Y, jt), v(o, Y), Xt()
}
on(["pointermove", "pointerup", "pointerdown", "click"]);
var ks = Ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Os(o) {
  var t = ks();
  v(o, t)
}
var Rs = Ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Ms(o) {
  var t = Rs();
  v(o, t)
}
var Bs = Ke('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Hs(o) {
  var t = Bs();
  v(o, t)
}
var Us = Ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Ws(o) {
  var t = Us();
  v(o, t)
}
var Vs = Ke('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function js(o) {
  var t = Vs();
  v(o, t)
}
const zs = 3,
  Wn = "24px",
  Vn = "16px",
  Fs = 4e3,
  Gs = 356,
  Ks = 14,
  dn = "dark",
  Ye = "light";

function qs(o, t) {
  const n = {};
  return [o, t].forEach((f, g) => {
    const w = g === 1,
      x = w ? "--mobile-offset" : "--offset",
      B = w ? Vn : Wn;

    function W(L) {
      ["top", "right", "bottom", "left"].forEach(y => {
        n[`${x}-${y}`] = typeof L == "number" ? `${L}px` : L
      })
    }
    typeof f == "number" || typeof f == "string" ? W(f) : typeof f == "object" ? ["top", "right", "bottom", "left"].forEach(L => {
      const y = f[L];
      y === void 0 ? n[`${x}-${L}`] = B : n[`${x}-${L}`] = typeof y == "number" ? `${y}px` : y
    }) : W(B)
  }), n
}
var Ys = dt("<ol></ol>"),
  Xs = dt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function Qs(o, t) {
  Yt(t, !0);

  function n(A) {
    return A !== "system" ? A : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? dn : Ye
  }
  let f = k(t, "invert", 3, !1),
    g = k(t, "position", 3, "bottom-right"),
    w = k(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    x = k(t, "expand", 3, !1),
    B = k(t, "closeButton", 3, !1),
    W = k(t, "offset", 3, Wn),
    L = k(t, "mobileOffset", 3, Vn),
    y = k(t, "theme", 3, "light"),
    D = k(t, "richColors", 3, !1),
    N = k(t, "duration", 3, Fs),
    $ = k(t, "visibleToasts", 3, zs),
    R = k(t, "toastOptions", 19, () => ({})),
    Z = k(t, "dir", 7, "auto"),
    O = k(t, "gap", 3, Ks),
    b = k(t, "containerAriaLabel", 3, "Notifications"),
    S = k(t, "closeButtonAriaLabel", 3, "Close toast"),
    K = Te(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function I() {
    if (Z() !== "auto") return Z();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const A = document.documentElement.getAttribute("dir");
    return A === "auto" || !A ? (ke(() => Z(window.getComputedStyle(document.documentElement).direction ?? "ltr")), Z()) : (ke(() => Z(A)), A)
  }
  const V = E(() => Array.from(new Set([g(), ...Rt.toasts.filter(A => A.position).map(A => A.position)].filter(Boolean))));
  let H = J(!1),
    pt = J(!1),
    St = J(vn(n(y()))),
    T = J(void 0),
    it = J(null),
    ht = J(!1);
  const Nt = E(() => w().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ut(() => {
    Rt.toasts.length <= 1 && _(H, !1)
  }), Ut(() => {
    const A = Rt.toasts.filter(F => F.dismiss && !F.delete);
    if (A.length > 0) {
      const F = Rt.toasts.map(wt => A.find(Wt => Wt.id === wt.id) ? {
        ...wt,
        delete: !0
      } : wt);
      Rt.toasts = F
    }
  }), Ut(() => () => {
    r(T) && r(it) && (r(it).focus({
      preventScroll: !0
    }), _(it, null), _(ht, !1))
  }), fe(() => (Rt.reset(), Re(document, "keydown", F => {
    var lt, Wt;
    w().every(te => F[te] || F.code === te) && (_(H, !0), (lt = r(T)) == null || lt.focus()), F.code === "Escape" && (document.activeElement === r(T) || (Wt = r(T)) != null && Wt.contains(document.activeElement)) && _(H, !1)
  }))), Ut(() => {
    if (y() !== "system" && _(St, y()), typeof window < "u") {
      y() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? _(St, dn) : _(St, Ye));
      const A = window.matchMedia("(prefers-color-scheme: dark)"),
        F = ({
          matches: wt
        }) => {
          _(St, wt ? dn : Ye, !0)
        };
      "addEventListener" in A ? A.addEventListener("change", F) : A.addListener(F)
    }
  });
  const xt = A => {
      var F;
      (F = t.onblur) == null || F.call(t, A), r(ht) && !A.currentTarget.contains(A.relatedTarget) && (_(ht, !1), r(it) && (r(it).focus({
        preventScroll: !0
      }), _(it, null)))
    },
    Lt = A => {
      var wt;
      (wt = t.onfocus) == null || wt.call(t, A), !(A.target instanceof HTMLElement && A.target.dataset.dismissable === "false") && (r(ht) || (_(ht, !0), _(it, A.relatedTarget, !0)))
    },
    Mt = A => {
      var wt;
      (wt = t.onpointerdown) == null || wt.call(t, A), !(A.target instanceof HTMLElement && A.target.dataset.dismissable === "false") && _(pt, !0)
    },
    ie = A => {
      var F;
      (F = t.onmouseenter) == null || F.call(t, A), _(H, !0)
    },
    at = A => {
      var F;
      (F = t.onmouseleave) == null || F.call(t, A), r(pt) || _(H, !1)
    },
    Ft = A => {
      var F;
      (F = t.onmousemove) == null || F.call(t, A), _(H, !0)
    },
    q = A => {
      var F;
      (F = t.ondragend) == null || F.call(t, A), _(H, !1)
    },
    mt = A => {
      var F;
      (F = t.onpointerup) == null || F.call(t, A), _(pt, !1)
    };
  _s.set(new ii);
  var yt = Xs();
  bt(yt, "tabindex", -1);
  var Ct = et(yt);
  {
    var re = A => {
      var F = Q(),
        wt = G(F);
      Ze(wt, 18, () => r(V), lt => lt, (lt, Wt, te, ge) => {
        const oe = E(() => {
            const [Pt, Y] = Wt.split("-");
            return {
              y: Pt,
              x: Y
            }
          }),
          Vt = E(() => qs(W(), L()));
        var jt = Ys();
        Ce(jt, Pt => {
          var Y;
          return {
            tabindex: -1,
            dir: Pt,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(St),
            "data-y-position": r(oe).y,
            "data-x-position": r(oe).x,
            style: t.style,
            onblur: xt,
            onfocus: Lt,
            onmouseenter: ie,
            onmousemove: Ft,
            onmouseleave: at,
            ondragend: q,
            onpointerdown: Mt,
            onpointerup: mt,
            ...K,
            [yi]: {
              "--front-toast-height": `${(Y=Rt.heights[0])==null?void 0:Y.height}px`,
              "--width": `${Gs}px`,
              "--gap": `${O()}px`,
              "--offset-top": r(Vt)["--offset-top"],
              "--offset-right": r(Vt)["--offset-right"],
              "--offset-bottom": r(Vt)["--offset-bottom"],
              "--offset-left": r(Vt)["--offset-left"],
              "--mobile-offset-top": r(Vt)["--mobile-offset-top"],
              "--mobile-offset-right": r(Vt)["--mobile-offset-right"],
              "--mobile-offset-bottom": r(Vt)["--mobile-offset-bottom"],
              "--mobile-offset-left": r(Vt)["--mobile-offset-left"]
            }
          }
        }, [I], void 0, void 0, "svelte-smjlix"), Ze(jt, 23, () => Rt.toasts.filter(Pt => !Pt.position && r(te) === 0 || Pt.position === Wt), Pt => Pt.id, (Pt, Y, me, De) => {
          {
            const xe = s => {
                var a = Q(),
                  c = G(a);
                {
                  var u = d => {
                      var C = Q(),
                        M = G(C);
                      Ht(M, () => t.successIcon ?? qt), v(d, C)
                    },
                    h = d => {
                      Os(d)
                    };
                  st(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              Se = s => {
                var a = Q(),
                  c = G(a);
                {
                  var u = d => {
                      var C = Q(),
                        M = G(C);
                      Ht(M, () => t.errorIcon ?? qt), v(d, C)
                    },
                    h = d => {
                      Ms(d)
                    };
                  st(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              ve = s => {
                var a = Q(),
                  c = G(a);
                {
                  var u = d => {
                      var C = Q(),
                        M = G(C);
                      Ht(M, () => t.warningIcon ?? qt), v(d, C)
                    },
                    h = d => {
                      Hs(d)
                    };
                  st(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              Ne = s => {
                var a = Q(),
                  c = G(a);
                {
                  var u = d => {
                      var C = Q(),
                        M = G(C);
                      Ht(M, () => t.infoIcon ?? qt), v(d, C)
                    },
                    h = d => {
                      Ws(d)
                    };
                  st(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              P = s => {
                var a = Q(),
                  c = G(a);
                {
                  var u = d => {
                      var C = Q(),
                        M = G(C);
                      Ht(M, () => t.closeIcon ?? qt), v(d, C)
                    },
                    h = d => {
                      js(d)
                    };
                  st(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              };
            let U = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.duration) ?? N()
              }),
              rt = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.class) ?? ""
              }),
              ut = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.descriptionClass) || ""
              }),
              tt = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.style) ?? ""
              }),
              m = E(() => R().classes || {}),
              At = E(() => R().unstyled ?? !1),
              l = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              i = E(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.closeButtonAriaLabel) ?? S()
              });
            Ps(Pt, {
              get index() {
                return r(me)
              },
              get toast() {
                return r(Y)
              },
              get defaultRichColors() {
                return D()
              },
              get duration() {
                return r(U)
              },
              get class() {
                return r(rt)
              },
              get descriptionClass() {
                return r(ut)
              },
              get invert() {
                return f()
              },
              get visibleToasts() {
                return $()
              },
              get closeButton() {
                return B()
              },
              get interacting() {
                return r(pt)
              },
              get position() {
                return Wt
              },
              get style() {
                return r(tt)
              },
              get classes() {
                return r(m)
              },
              get unstyled() {
                return r(At)
              },
              get cancelButtonStyle() {
                return r(l)
              },
              get actionButtonStyle() {
                return r(e)
              },
              get closeButtonAriaLabel() {
                return r(i)
              },
              get expandByDefault() {
                return x()
              },
              get expanded() {
                return r(H)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: xe,
              errorIcon: Se,
              warningIcon: ve,
              infoIcon: Ne,
              closeIcon: P,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), X(jt), yn(jt, Pt => _(T, Pt), () => r(T)), Tt(() => jt.dir = jt.dir), v(lt, jt)
      }), v(A, F)
    };
    st(Ct, A => {
      Rt.toasts.length > 0 && A(re)
    })
  }
  X(yt), Tt(() => bt(yt, "aria-label", `${b()??""} ${r(Nt)??""}`)), v(o, yt), Xt()
}
let Le = J(!1);
var Zs = dt("<div></div>"),
  Js = dt('<button type="button" class="btn">Retry</button>'),
  $s = dt('<span class="loading loading-spinner loading-lg"></span>'),
  ta = dt('<div class="flex h-16 items-center justify-center"><!></div>');

function ea(o, t) {
  Yt(t, !0);
  let n = k(t, "theme", 19, () => fn.theme === "dark" ? "dark" : "light"),
    f = k(t, "size", 3, "normal");
  const g = E(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: f(),
      callback: O => {
        var b;
        return (b = t.callback) == null ? void 0 : b.call(t, O)
      },
      "error-callback": O => {
        var b;
        return (b = t.errorCallback) == null ? void 0 : b.call(t, O)
      },
      "expired-callback": () => {
        var O;
        return (O = t.expiredCallback) == null ? void 0 : O.call(t)
      }
    })),
    w = (O, b) => {
      var K;
      let S = window.hcaptcha.render(O, b);
      return (K = t.onload) == null || K.call(t), {
        destroy() {
          var I;
          (I = window.hcaptcha) == null || I.remove(S)
        },
        update(I) {
          var V;
          (V = window.hcaptcha) == null || V.remove(S), S = window.hcaptcha.render(O, I)
        }
      }
    };
  let x = J(!1),
    B = J(!1),
    W;

  function L() {
    const O = document.createElement("script");
    O.type = "text/javascript", O.src = "https://js.hcaptcha.com/1/api.js?render=explicit", O.async = !0, O.defer = !0, O.addEventListener("load", () => _(Le, !0), {
      once: !0
    }), document.head.appendChild(O)
  }

  function y() {
    _(B, !1), W && clearTimeout(W), W = setTimeout(() => {
      (!r(Le) || !r(x)) && _(B, !0)
    }, 5e3)
  }

  function D() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(O => O.remove()), _(Le, !1), L(), y()
  }
  fe(() => (_(x, !0), r(Le) || L(), y(), () => {
    _(x, !1), W && clearTimeout(W)
  }));
  var N = Q(),
    $ = G(N);
  {
    var R = O => {
        var b = Zs();
        Hn(b, (S, K) => w == null ? void 0 : w(S, K), () => r(g)), v(O, b)
      },
      Z = O => {
        var b = ta(),
          S = et(b);
        {
          var K = V => {
              var H = Js();
              ae("click", H, D), v(V, H)
            },
            I = V => {
              var H = $s();
              v(V, H)
            };
          st(S, V => {
            r(B) ? V(K) : V(I, !1)
          })
        }
        X(b), v(O, b)
      };
    st($, O => {
      r(Le) && r(x) ? O(R) : O(Z, !1)
    })
  }
  v(o, N), Xt()
}
on(["click"]);

function Cn(...o) {
  return Ei(Ci(o))
}
var na = dt("<div><!></div>");

function ia(o, t) {
  Yt(t, !0);
  let n = k(t, "ref", 15, null),
    f = Te(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var g = na();
  Ce(g, x => ({
    class: x,
    ...f
  }), [() => Cn("flex items-center", t.class)]);
  var w = et(g);
  Ht(w, () => t.children ?? qt), X(g), yn(g, x => n(x), () => n()), v(o, g), Xt()
}
var He, Je;
class ra {
  constructor(t, n) {
    gt(this, He, () => {});
    gt(this, Je, E(() => p(this, He).call(this)));
    let f;
    n !== void 0 && (f = n), pe(this, He, () => {
      try {
        return f
      } finally {
        f = t()
      }
    })
  }
  get current() {
    return r(p(this, Je))
  }
}
He = new WeakMap, Je = new WeakMap;
const oa = 1,
  sa = 9,
  aa = 11;

function la(o) {
  return sn(o) && o.nodeType === oa && typeof o.nodeName == "string"
}

function jn(o) {
  return sn(o) && o.nodeType === sa
}

function ua(o) {
  var t;
  return sn(o) && ((t = o.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function ca(o) {
  return sn(o) && o.nodeType !== void 0
}

function da(o) {
  return ca(o) && o.nodeType === aa && "host" in o
}

function ha(o) {
  return jn(o) ? o : ua(o) ? o.document : (o == null ? void 0 : o.ownerDocument) ?? document
}

function zn(o) {
  var t;
  return da(o) ? zn(o.host) : jn(o) ? o.defaultView ?? window : la(o) ? ((t = o.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function fa(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var Ue;
class ma {
  constructor(t) {
    It(this, "element");
    gt(this, Ue, E(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    It(this, "getDocument", () => ha(this.root));
    It(this, "getWindow", () => this.getDocument().defaultView ?? window);
    It(this, "getActiveElement", () => fa(this.root));
    It(this, "isActiveElement", t => t === this.getActiveElement());
    It(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    It(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    It(this, "setTimeout", (t, n) => this.getWindow().setTimeout(t, n));
    It(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = Ot(t) : this.element = t
  }
  get root() {
    return r(p(this, Ue))
  }
  set root(t) {
    _(p(this, Ue), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Ue = new WeakMap;
const pa = 18,
  Fn = 40,
  _a = `${Fn}px`,
  ga = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function va({
  containerRef: o,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: f,
  domContext: g
}) {
  let w = J(!1),
    x = J(!1),
    B = J(!1);

  function W() {
    const y = n.current;
    return y === "none" ? !1 : y === "increase-width" && r(w) && r(x)
  }

  function L() {
    const y = o.current,
      D = t.current;
    if (!y || !D || r(B) || n.current === "none") return;
    const N = y,
      $ = N.getBoundingClientRect().left + N.offsetWidth,
      R = N.getBoundingClientRect().top + N.offsetHeight / 2,
      Z = $ - pa,
      O = R;
    g.querySelectorAll(ga).length === 0 && g.getDocument().elementFromPoint(Z, O) === y || (_(w, !0), _(B, !0))
  }
  return Ut(() => {
    const y = o.current;
    if (!y || n.current === "none") return;

    function D() {
      const R = zn(y).innerWidth - y.getBoundingClientRect().right;
      _(x, R >= Fn)
    }
    D();
    const N = setInterval(D, 1e3);
    return () => {
      clearInterval(N)
    }
  }), Ut(() => {
    const y = f.current || g.getActiveElement() === t.current;
    if (n.current === "none" || !y) return;
    const D = setTimeout(L, 0),
      N = setTimeout(L, 2e3),
      $ = setTimeout(L, 5e3),
      R = setTimeout(() => {
        _(B, !0)
      }, 6e3);
    return () => {
      clearTimeout(D), clearTimeout(N), clearTimeout($), clearTimeout(R)
    }
  }), {
    get hasPwmBadge() {
      return r(w)
    },
    get willPushPwmBadge() {
      return W()
    },
    PWM_BADGE_SPACE_WIDTH: _a
  }
}
const Gn = di({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  ya = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Qt, we, de, Kt, Zt, Ie, se, he, _e, Ee, $e, We, Ve, tn, en, Kn, je, ze, nn, Fe;
const bn = class bn {
  constructor(t) {
    gt(this, en);
    It(this, "opts");
    It(this, "attachment");
    gt(this, Qt, An(null));
    gt(this, we, J(!1));
    It(this, "inputAttachment", mn(p(this, Qt)));
    gt(this, de, An(!1));
    gt(this, Kt, J(null));
    gt(this, Zt, J(null));
    gt(this, Ie, new ra(() => this.opts.value.current ?? ""));
    gt(this, se, E(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    gt(this, he, J(vn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    gt(this, _e);
    gt(this, Ee);
    It(this, "domContext");
    It(this, "onkeydown", t => {
      const n = t.key;
      ya.includes(n) || t.ctrlKey || t.metaKey || n && r(p(this, se)) && !r(p(this, se)).test(n) && t.preventDefault()
    });
    gt(this, $e, E(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    gt(this, We, E(() => ({
      id: this.opts.id.current,
      [Gn.root]: "",
      style: r(p(this, $e)),
      ...this.attachment
    })));
    gt(this, Ve, E(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    gt(this, tn, E(() => ({
      position: "absolute",
      inset: 0,
      width: p(this, _e).willPushPwmBadge ? `calc(100% + ${p(this,_e).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: p(this, _e).willPushPwmBadge ? `inset(0 ${p(this,_e).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
      height: "100%",
      display: "flex",
      textAlign: this.opts.textAlign.current,
      opacity: "1",
      color: "transparent",
      pointerEvents: "all",
      background: "transparent",
      caretColor: "transparent",
      border: "0 solid transparent",
      outline: "0 solid transparent",
      boxShadow: "none",
      lineHeight: "1",
      letterSpacing: "-.5em",
      fontSize: "var(--bits-pin-input-root-height)",
      fontFamily: "monospace",
      fontVariantNumeric: "tabular-nums"
    })));
    gt(this, je, () => {
      var Z;
      const t = p(this, Qt).current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        _(p(this, Kt), null), _(p(this, Zt), null);
        return
      }
      const f = t.selectionStart,
        g = t.selectionEnd,
        w = t.selectionDirection ?? "none",
        x = t.maxLength,
        B = t.value,
        W = r(p(this, he)).prev;
      let L = -1,
        y = -1,
        D;
      if (B.length !== 0 && f !== null && g !== null) {
        const O = f === g,
          b = f === B.length && B.length < x;
        if (O && !b) {
          const S = f;
          if (S === 0) L = 0, y = 1, D = "forward";
          else if (S === x) L = S - 1, y = S, D = "backward";
          else if (x > 1 && B.length > 1) {
            let K = 0;
            if (W[0] !== null && W[1] !== null) {
              D = S < W[1] ? "backward" : "forward";
              const I = W[0] === W[1] && W[0] < x;
              D === "backward" && !I && (K = -1)
            }
            L = K + S, y = K + S + 1
          }
        }
        L !== -1 && y !== -1 && L !== y && ((Z = p(this, Qt).current) == null || Z.setSelectionRange(L, y, D))
      }
      const N = L !== -1 ? L : f,
        $ = y !== -1 ? y : g,
        R = D ?? w;
      _(p(this, Kt), N, !0), _(p(this, Zt), $, !0), r(p(this, he)).prev = [N, $, R]
    });
    It(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(p(this, se)) && !r(p(this, se)).test(n)) {
        t.preventDefault();
        return
      }
      typeof p(this, Ie).current == "string" && n.length < p(this, Ie).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    It(this, "onfocus", t => {
      const n = p(this, Qt).current;
      if (n) {
        const f = Math.min(n.value.length, this.opts.maxLength.current - 1),
          g = n.value.length;
        n.setSelectionRange(f, g), _(p(this, Kt), f, !0), _(p(this, Zt), g, !0)
      }
      p(this, de).current = !0
    });
    It(this, "onpaste", t => {
      var y, D, N, $;
      const n = p(this, Qt).current;
      if (!n) return;
      const f = R => {
          const Z = n.selectionStart === null ? void 0 : n.selectionStart,
            O = n.selectionEnd === null ? void 0 : n.selectionEnd,
            b = Z !== O,
            S = this.opts.value.current;
          return (b ? S.slice(0, Z) + R + S.slice(O) : S.slice(0, Z) + R + S.slice(Z)).slice(0, this.opts.maxLength.current)
        },
        g = R => R.length > 0 && r(p(this, se)) && !r(p(this, se)).test(R);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!p(this, Ee).isIOS || !t.clipboardData || !n)) {
        const R = f((D = t.clipboardData) == null ? void 0 : D.getData("text/plain"));
        g(R) && t.preventDefault();
        return
      }
      const w = ((N = t.clipboardData) == null ? void 0 : N.getData("text/plain")) ?? "",
        x = ($ = this.opts.pasteTransformer) != null && $.current ? this.opts.pasteTransformer.current(w) : w;
      t.preventDefault();
      const B = f(x);
      if (g(B)) return;
      n.value = B, this.opts.value.current = B;
      const W = Math.min(B.length, this.opts.maxLength.current - 1),
        L = B.length;
      n.setSelectionRange(W, L), _(p(this, Kt), W, !0), _(p(this, Zt), L, !0)
    });
    It(this, "onmouseover", t => {
      _(p(this, we), !0)
    });
    It(this, "onmouseleave", t => {
      _(p(this, we), !1)
    });
    It(this, "onblur", t => {
      if (r(p(this, he)).willSyntheticBlur) {
        r(p(this, he)).willSyntheticBlur = !1;
        return
      }
      p(this, de).current = !1
    });
    gt(this, ze, E(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(p(this, tn)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(p(this, Kt)),
        "data-pin-input-input-mse": r(p(this, Zt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(p(this, se))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: ci(this.opts.disabled.current),
        onpaste: this.onpaste,
        oninput: this.oninput,
        onkeydown: this.onkeydown,
        onmouseover: this.onmouseover,
        onmouseleave: this.onmouseleave,
        onfocus: this.onfocus,
        onblur: this.onblur,
        ...this.inputAttachment
      }
    }));
    gt(this, nn, E(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const f = p(this, de).current && r(p(this, Kt)) !== null && r(p(this, Zt)) !== null && (r(p(this, Kt)) === r(p(this, Zt)) && n === r(p(this, Kt)) || n >= r(p(this, Kt)) && n < r(p(this, Zt))),
        g = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: g,
        isActive: f,
        hasFakeCaret: f && g === null
      }
    })));
    gt(this, Fe, E(() => ({
      cells: r(p(this, nn)),
      isFocused: p(this, de).current,
      isHovering: r(p(this, we))
    })));
    var n;
    this.opts = t, this.attachment = mn(this.opts.ref), this.domContext = new ma(t.ref), pe(this, Ee, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), pe(this, _e, va({
      containerRef: this.opts.ref,
      inputRef: p(this, Qt),
      isFocused: p(this, de),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), fe(() => {
      const f = p(this, Qt).current,
        g = this.opts.ref.current;
      if (!f || !g) return;
      p(this, Ee).value.current !== f.value && (this.opts.value.current = f.value), r(p(this, he)).prev = [f.selectionStart, f.selectionEnd, f.selectionDirection ?? "none"];
      const w = Re(this.domContext.getDocument(), "selectionchange", p(this, je), {
        capture: !0
      });
      p(this, je).call(this), this.domContext.getActiveElement() === f && (p(this, de).current = !0), this.domContext.getElementById("pin-input-style") || En(this, en, Kn).call(this);
      const x = () => {
        g && g.style.setProperty("--bits-pin-input-root-height", `${f.clientHeight}px`)
      };
      x();
      const B = new ResizeObserver(x);
      return B.observe(f), () => {
        w(), B.disconnect()
      }
    }), ui([() => this.opts.value.current, () => p(this, Qt).current], () => {
      Ca(() => {
        const f = p(this, Qt).current;
        if (!f) return;
        f.dispatchEvent(new Event("input"));
        const g = f.selectionStart,
          w = f.selectionEnd,
          x = f.selectionDirection ?? "none";
        g !== null && w !== null && (_(p(this, Kt), g, !0), _(p(this, Zt), w, !0), r(p(this, he)).prev = [g, w, x])
      }, this.domContext)
    }), Ut(() => {
      const f = this.opts.value.current,
        g = p(this, Ie).current,
        w = this.opts.maxLength.current,
        x = this.opts.onComplete.current;
      g !== void 0 && f !== g && g.length < w && f.length === w && x(f)
    })
  }
  static create(t) {
    return new bn(t)
  }
  get rootProps() {
    return r(p(this, We))
  }
  set rootProps(t) {
    _(p(this, We), t)
  }
  get inputWrapperProps() {
    return r(p(this, Ve))
  }
  set inputWrapperProps(t) {
    _(p(this, Ve), t)
  }
  get inputProps() {
    return r(p(this, ze))
  }
  set inputProps(t) {
    _(p(this, ze), t)
  }
  get snippetProps() {
    return r(p(this, Fe))
  }
  set snippetProps(t) {
    _(p(this, Fe), t)
  }
};
Qt = new WeakMap, we = new WeakMap, de = new WeakMap, Kt = new WeakMap, Zt = new WeakMap, Ie = new WeakMap, se = new WeakMap, he = new WeakMap, _e = new WeakMap, Ee = new WeakMap, $e = new WeakMap, We = new WeakMap, Ve = new WeakMap, tn = new WeakMap, en = new WeakSet, Kn = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const f = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Ae(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Ae(n.sheet, `[data-pin-input-input]:autofill { ${f} }`), Ae(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${f} }`), Ae(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Ae(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, je = new WeakMap, ze = new WeakMap, nn = new WeakMap, Fe = new WeakMap;
let _n = bn;
var Ge;
const wn = class wn {
  constructor(t) {
    It(this, "opts");
    It(this, "attachment");
    gt(this, Ge, E(() => ({
      id: this.opts.id.current,
      [Gn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = mn(this.opts.ref)
  }
  static create(t) {
    return new wn(t)
  }
  get props() {
    return r(p(this, Ge))
  }
  set props(t) {
    _(p(this, Ge), t)
  }
};
Ge = new WeakMap;
let gn = wn;

function Ca(o, t) {
  const n = t.setTimeout(o, 0),
    f = t.setTimeout(o, 10),
    g = t.setTimeout(o, 50);
  return [n, f, g]
}

function Ae(o, t) {
  try {
    o.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var ba = dt("<div><!> <div><input/></div></div>");

function wa(o, t) {
  const n = Mn();
  Yt(t, !0);
  let f = k(t, "id", 19, () => pn(n)),
    g = k(t, "inputId", 19, () => `${pn(n)}-input`),
    w = k(t, "ref", 15, null),
    x = k(t, "maxlength", 3, 6),
    B = k(t, "textalign", 3, "left"),
    W = k(t, "inputmode", 3, "numeric"),
    L = k(t, "onComplete", 3, Pn),
    y = k(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    D = k(t, "class", 3, ""),
    N = k(t, "autocomplete", 3, "one-time-code"),
    $ = k(t, "disabled", 3, !1),
    R = k(t, "value", 15, ""),
    Z = k(t, "onValueChange", 3, Pn),
    O = Te(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const b = _n.create({
      id: Ot(() => f()),
      ref: Ot(() => w(), T => w(T)),
      inputId: Ot(() => g()),
      autocomplete: Ot(() => N()),
      maxLength: Ot(() => x()),
      textAlign: Ot(() => B()),
      disabled: Ot(() => $()),
      inputmode: Ot(() => W()),
      pattern: Ot(() => t.pattern),
      onComplete: Ot(() => L()),
      value: Ot(() => R(), T => {
        R(T), Z()(T)
      }),
      pushPasswordManagerStrategy: Ot(() => y()),
      pasteTransformer: Ot(() => t.pasteTransformer)
    }),
    S = E(() => Xe(O, b.inputProps)),
    K = E(() => Xe(b.rootProps, {
      class: D()
    })),
    I = E(() => Xe(b.inputWrapperProps, {}));
  var V = ba();
  Ce(V, () => ({
    ...r(K)
  }));
  var H = et(V);
  Ht(H, () => t.children ?? qt, () => b.snippetProps);
  var pt = Et(H, 2);
  Ce(pt, () => ({
    ...r(I)
  }));
  var St = et(pt);
  Ce(St, () => ({
    ...r(S)
  }), void 0, void 0, void 0, void 0, !0), X(pt), X(V), v(o, V), Xt()
}
var Ia = dt("<div><!></div>");

function Ea(o, t) {
  const n = Mn();
  Yt(t, !0);
  let f = k(t, "id", 19, () => pn(n)),
    g = k(t, "ref", 15, null),
    w = Te(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const x = gn.create({
      id: Ot(() => f()),
      ref: Ot(() => g(), N => g(N)),
      cell: Ot(() => t.cell)
    }),
    B = E(() => Xe(w, x.props));
  var W = Q(),
    L = G(W);
  {
    var y = N => {
        var $ = Q(),
          R = G($);
        Ht(R, () => t.child, () => ({
          props: r(B)
        })), v(N, $)
      },
      D = N => {
        var $ = Ia();
        Ce($, () => ({
          ...r(B)
        }));
        var R = et($);
        Ht(R, () => t.children ?? qt), X($), v(N, $)
      };
    st(L, N => {
      t.child ? N(y) : N(D, !1)
    })
  }
  v(o, W), Xt()
}
var Ta = dt('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Da = dt(" <!>", 1);

function xa(o, t) {
  Yt(t, !0);
  let n = k(t, "ref", 15, null),
    f = Te(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var g = Q(),
    w = G(g);
  {
    let x = E(() => Cn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    $t(w, () => Ea, (B, W) => {
      W(B, Oe({
        get cell() {
          return t.cell
        },
        get class() {
          return r(x)
        }
      }, () => f, {
        get ref() {
          return n()
        },
        set ref(L) {
          n(L)
        },
        children: (L, y) => {
          Bn();
          var D = Da(),
            N = G(D),
            $ = Et(N);
          {
            var R = Z => {
              var O = Ta();
              v(Z, O)
            };
            st($, Z => {
              t.cell.hasFakeCaret && Z(R)
            })
          }
          Tt(() => Bt(N, `${t.cell.char??""} `)), v(L, D)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  v(o, g), Xt()
}

function Sa(o, t) {
  Yt(t, !0);
  let n = k(t, "ref", 15, null),
    f = k(t, "value", 15, ""),
    g = Te(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var w = Q(),
    x = G(w);
  {
    let B = E(() => Cn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    $t(x, () => wa, (W, L) => {
      L(W, Oe({
        get class() {
          return r(B)
        }
      }, () => g, {
        get ref() {
          return n()
        },
        set ref(y) {
          n(y)
        },
        get value() {
          return f()
        },
        set value(y) {
          f(y)
        }
      }))
    })
  }
  v(o, w), Xt()
}
var hn = {
    exports: {}
  },
  Rn;

function Na() {
  return Rn || (Rn = 1, (function(o) {
    (function(t) {
      o.exports ? o.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var n = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          g = Object.getOwnPropertyNames,
          w = Object.prototype.hasOwnProperty,
          x = (l, e) => {
            for (var i in e) n(l, i, {
              get: e[i],
              enumerable: !0
            })
          },
          B = (l, e, i, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of g(e)) !w.call(l, a) && a !== i && n(l, a, {
                get: () => e[a],
                enumerable: !(s = f(e, a)) || s.enumerable
              });
            return l
          },
          W = l => B(n({}, "__esModule", {
            value: !0
          }), l),
          L = {};
        x(L, {
          Iti: () => rt,
          default: () => At
        });
        var y = [
            ["af", "93", 0, null, "0"],
            ["ax", "358", 1, ["18", "4"], "0"],
            ["al", "355", 0, null, "0"],
            ["dz", "213", 0, null, "0"],
            ["as", "1", 5, ["684"], "1"],
            ["ad", "376"],
            ["ao", "244"],
            ["ai", "1", 6, ["264"], "1"],
            ["ag", "1", 7, ["268"], "1"],
            ["ar", "54", 0, null, "0"],
            ["am", "374", 0, null, "0"],
            ["aw", "297"],
            ["ac", "247"],
            ["au", "61", 0, ["4"], "0"],
            ["at", "43", 0, null, "0"],
            ["az", "994", 0, null, "0"],
            ["bs", "1", 8, ["242"], "1"],
            ["bh", "973"],
            ["bd", "880", 0, null, "0"],
            ["bb", "1", 9, ["246"], "1"],
            ["by", "375", 0, null, "8"],
            ["be", "32", 0, null, "0"],
            ["bz", "501"],
            ["bj", "229"],
            ["bm", "1", 10, ["441"], "1"],
            ["bt", "975"],
            ["bo", "591", 0, null, "0"],
            ["ba", "387", 0, null, "0"],
            ["bw", "267"],
            ["br", "55", 0, null, "0"],
            ["io", "246"],
            ["vg", "1", 11, ["284"], "1"],
            ["bn", "673"],
            ["bg", "359", 0, null, "0"],
            ["bf", "226"],
            ["bi", "257"],
            ["kh", "855", 0, null, "0"],
            ["cm", "237"],
            ["ca", "1", 1, ["204", "226", "236", "249", "250", "257", "263", "289", "306", "343", "354", "365", "367", "368", "382", "403", "416", "418", "428", "431", "437", "438", "450", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905", "942"], "1"],
            ["cv", "238"],
            ["bq", "599", 1, ["3", "4", "7"]],
            ["ky", "1", 12, ["345"], "1"],
            ["cf", "236"],
            ["td", "235"],
            ["cl", "56"],
            ["cn", "86", 0, null, "0"],
            ["cx", "61", 2, ["4", "89164"], "0"],
            ["cc", "61", 1, ["4", "89162"], "0"],
            ["co", "57", 0, null, "0"],
            ["km", "269"],
            ["cg", "242"],
            ["cd", "243", 0, null, "0"],
            ["ck", "682"],
            ["cr", "506"],
            ["ci", "225"],
            ["hr", "385", 0, null, "0"],
            ["cu", "53", 0, null, "0"],
            ["cw", "599", 0],
            ["cy", "357"],
            ["cz", "420"],
            ["dk", "45"],
            ["dj", "253"],
            ["dm", "1", 13, ["767"], "1"],
            ["do", "1", 2, ["809", "829", "849"], "1"],
            ["ec", "593", 0, null, "0"],
            ["eg", "20", 0, null, "0"],
            ["sv", "503"],
            ["gq", "240"],
            ["er", "291", 0, null, "0"],
            ["ee", "372"],
            ["sz", "268"],
            ["et", "251", 0, null, "0"],
            ["fk", "500"],
            ["fo", "298"],
            ["fj", "679"],
            ["fi", "358", 0, ["4"], "0"],
            ["fr", "33", 0, null, "0"],
            ["gf", "594", 0, null, "0"],
            ["pf", "689"],
            ["ga", "241"],
            ["gm", "220"],
            ["ge", "995", 0, null, "0"],
            ["de", "49", 0, null, "0"],
            ["gh", "233", 0, null, "0"],
            ["gi", "350"],
            ["gr", "30"],
            ["gl", "299"],
            ["gd", "1", 14, ["473"], "1"],
            ["gp", "590", 0, null, "0"],
            ["gu", "1", 15, ["671"], "1"],
            ["gt", "502"],
            ["gg", "44", 1, ["1481", "7781", "7839", "7911"], "0"],
            ["gn", "224"],
            ["gw", "245"],
            ["gy", "592"],
            ["ht", "509"],
            ["hn", "504"],
            ["hk", "852"],
            ["hu", "36", 0, null, "06"],
            ["is", "354"],
            ["in", "91", 0, null, "0"],
            ["id", "62", 0, null, "0"],
            ["ir", "98", 0, null, "0"],
            ["iq", "964", 0, null, "0"],
            ["ie", "353", 0, null, "0"],
            ["im", "44", 2, ["1624", "74576", "7524", "7624", "7924"], "0"],
            ["il", "972", 0, null, "0"],
            ["it", "39", 0, ["3"]],
            ["jm", "1", 4, ["658", "876"], "1"],
            ["jp", "81", 0, null, "0"],
            ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"], "0"],
            ["jo", "962", 0, null, "0"],
            ["kz", "7", 1, ["33", "7"], "8"],
            ["ke", "254", 0, null, "0"],
            ["ki", "686", 0, null, "0"],
            ["xk", "383", 0, null, "0"],
            ["kw", "965"],
            ["kg", "996", 0, null, "0"],
            ["la", "856", 0, null, "0"],
            ["lv", "371"],
            ["lb", "961", 0, null, "0"],
            ["ls", "266"],
            ["lr", "231", 0, null, "0"],
            ["ly", "218", 0, null, "0"],
            ["li", "423", 0, null, "0"],
            ["lt", "370", 0, null, "0"],
            ["lu", "352"],
            ["mo", "853"],
            ["mg", "261", 0, null, "0"],
            ["mw", "265", 0, null, "0"],
            ["my", "60", 0, null, "0"],
            ["mv", "960"],
            ["ml", "223"],
            ["mt", "356"],
            ["mh", "692", 0, null, "1"],
            ["mq", "596", 0, null, "0"],
            ["mr", "222"],
            ["mu", "230"],
            ["yt", "262", 1, ["269", "639"], "0"],
            ["mx", "52"],
            ["fm", "691"],
            ["md", "373", 0, null, "0"],
            ["mc", "377", 0, null, "0"],
            ["mn", "976", 0, null, "0"],
            ["me", "382", 0, null, "0"],
            ["ms", "1", 16, ["664"], "1"],
            ["ma", "212", 0, ["6", "7"], "0"],
            ["mz", "258"],
            ["mm", "95", 0, null, "0"],
            ["na", "264", 0, null, "0"],
            ["nr", "674"],
            ["np", "977", 0, null, "0"],
            ["nl", "31", 0, null, "0"],
            ["nc", "687"],
            ["nz", "64", 0, null, "0"],
            ["ni", "505"],
            ["ne", "227"],
            ["ng", "234", 0, null, "0"],
            ["nu", "683"],
            ["nf", "672"],
            ["kp", "850", 0, null, "0"],
            ["mk", "389", 0, null, "0"],
            ["mp", "1", 17, ["670"], "1"],
            ["no", "47", 0, ["4", "9"]],
            ["om", "968"],
            ["pk", "92", 0, null, "0"],
            ["pw", "680"],
            ["ps", "970", 0, null, "0"],
            ["pa", "507"],
            ["pg", "675"],
            ["py", "595", 0, null, "0"],
            ["pe", "51", 0, null, "0"],
            ["ph", "63", 0, null, "0"],
            ["pl", "48"],
            ["pt", "351"],
            ["pr", "1", 3, ["787", "939"], "1"],
            ["qa", "974"],
            ["re", "262", 0, null, "0"],
            ["ro", "40", 0, null, "0"],
            ["ru", "7", 0, ["33"], "8"],
            ["rw", "250", 0, null, "0"],
            ["ws", "685"],
            ["sm", "378"],
            ["st", "239"],
            ["sa", "966", 0, null, "0"],
            ["sn", "221"],
            ["rs", "381", 0, null, "0"],
            ["sc", "248"],
            ["sl", "232", 0, null, "0"],
            ["sg", "65"],
            ["sx", "1", 21, ["721"], "1"],
            ["sk", "421", 0, null, "0"],
            ["si", "386", 0, null, "0"],
            ["sb", "677"],
            ["so", "252", 0, null, "0"],
            ["za", "27", 0, null, "0"],
            ["kr", "82", 0, null, "0"],
            ["ss", "211", 0, null, "0"],
            ["es", "34"],
            ["lk", "94", 0, null, "0"],
            ["bl", "590", 1, null, "0"],
            ["sh", "290"],
            ["kn", "1", 18, ["869"], "1"],
            ["lc", "1", 19, ["758"], "1"],
            ["mf", "590", 2, null, "0"],
            ["pm", "508", 0, null, "0"],
            ["vc", "1", 20, ["784"], "1"],
            ["sd", "249", 0, null, "0"],
            ["sr", "597"],
            ["sj", "47", 1, ["4", "79", "9"]],
            ["se", "46", 0, null, "0"],
            ["ch", "41", 0, null, "0"],
            ["sy", "963", 0, null, "0"],
            ["tw", "886", 0, null, "0"],
            ["tj", "992"],
            ["tz", "255", 0, null, "0"],
            ["th", "66", 0, null, "0"],
            ["tl", "670"],
            ["tg", "228"],
            ["tk", "690"],
            ["to", "676"],
            ["tt", "1", 22, ["868"], "1"],
            ["tn", "216"],
            ["tr", "90", 0, null, "0"],
            ["tm", "993", 0, null, "8"],
            ["tc", "1", 23, ["649"], "1"],
            ["tv", "688"],
            ["vi", "1", 24, ["340"], "1"],
            ["ug", "256", 0, null, "0"],
            ["ua", "380", 0, null, "0"],
            ["ae", "971", 0, null, "0"],
            ["gb", "44", 0, null, "0"],
            ["us", "1", 0, null, "1"],
            ["uy", "598", 0, null, "0"],
            ["uz", "998"],
            ["vu", "678"],
            ["va", "39", 1, ["06698", "3"]],
            ["ve", "58", 0, null, "0"],
            ["vn", "84", 0, null, "0"],
            ["wf", "681"],
            ["eh", "212", 1, ["5288", "5289", "6", "7"], "0"],
            ["ye", "967", 0, null, "0"],
            ["zm", "260", 0, null, "0"],
            ["zw", "263", 0, null, "0"]
          ],
          D = [];
        for (const l of y) D.push({
          name: "",
          iso2: l[0],
          dialCode: l[1],
          priority: l[2] || 0,
          areaCodes: l[3] || null,
          nodeById: {},
          nationalPrefix: l[4] || null,
          normalisedName: "",
          initials: "",
          dialCodePlus: ""
        });
        var N = D,
          $ = {
            ad: "Andorra",
            ae: "United Arab Emirates",
            af: "Afghanistan",
            ag: "Antigua & Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "American Samoa",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Åland Islands",
            az: "Azerbaijan",
            ba: "Bosnia & Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgium",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "St. Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Caribbean Netherlands",
            br: "Brazil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Cocos (Keeling) Islands",
            cd: "Congo - Kinshasa",
            cf: "Central African Republic",
            cg: "Congo - Brazzaville",
            ch: "Switzerland",
            ci: "Côte d’Ivoire",
            ck: "Cook Islands",
            cl: "Chile",
            cm: "Cameroon",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cape Verde",
            cw: "Curaçao",
            cx: "Christmas Island",
            cy: "Cyprus",
            cz: "Czechia",
            de: "Germany",
            dj: "Djibouti",
            dk: "Denmark",
            dm: "Dominica",
            do: "Dominican Republic",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egypt",
            eh: "Western Sahara",
            er: "Eritrea",
            es: "Spain",
            et: "Ethiopia",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falkland Islands",
            fm: "Micronesia",
            fo: "Faroe Islands",
            fr: "France",
            ga: "Gabon",
            gb: "United Kingdom",
            gd: "Grenada",
            ge: "Georgia",
            gf: "French Guiana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Greenland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Equatorial Guinea",
            gr: "Greece",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hong Kong SAR China",
            hn: "Honduras",
            hr: "Croatia",
            ht: "Haiti",
            hu: "Hungary",
            id: "Indonesia",
            ie: "Ireland",
            il: "Israel",
            im: "Isle of Man",
            in: "India",
            io: "British Indian Ocean Territory",
            iq: "Iraq",
            ir: "Iran",
            is: "Iceland",
            it: "Italy",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kyrgyzstan",
            kh: "Cambodia",
            ki: "Kiribati",
            km: "Comoros",
            kn: "St. Kitts & Nevis",
            kp: "North Korea",
            kr: "South Korea",
            kw: "Kuwait",
            ky: "Cayman Islands",
            kz: "Kazakhstan",
            la: "Laos",
            lb: "Lebanon",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lithuania",
            lu: "Luxembourg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Morocco",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "St. Martin",
            mg: "Madagascar",
            mh: "Marshall Islands",
            mk: "North Macedonia",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Macao SAR China",
            mp: "Northern Mariana Islands",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "New Caledonia",
            ne: "Niger",
            nf: "Norfolk Island",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Netherlands",
            no: "Norway",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "French Polynesia",
            pg: "Papua New Guinea",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Poland",
            pm: "St. Pierre & Miquelon",
            pr: "Puerto Rico",
            ps: "Palestinian Territories",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russia",
            rw: "Rwanda",
            sa: "Saudi Arabia",
            sb: "Solomon Islands",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Sweden",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenia",
            sj: "Svalbard & Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "South Sudan",
            st: "São Tomé & Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Eswatini",
            tc: "Turks & Caicos Islands",
            td: "Chad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turkey",
            tt: "Trinidad & Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraine",
            ug: "Uganda",
            us: "United States",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatican City",
            vc: "St. Vincent & Grenadines",
            ve: "Venezuela",
            vg: "British Virgin Islands",
            vi: "U.S. Virgin Islands",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis & Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "South Africa",
            zm: "Zambia",
            zw: "Zimbabwe"
          },
          R = $,
          Z = {
            selectedCountryAriaLabel: "Change country, selected ${countryName} (${dialCode})",
            noCountrySelected: "Select country",
            countryListAriaLabel: "List of countries",
            searchPlaceholder: "Search",
            clearSearchAriaLabel: "Clear search",
            zeroSearchResults: "No results found",
            oneSearchResult: "1 result found",
            multipleSearchResults: "${count} results found",
            ac: "Ascension Island",
            xk: "Kosovo"
          },
          O = Z,
          b = {
            ...R,
            ...O
          },
          S = b,
          K = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          I = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          V = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          H = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          pt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          St = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          T = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          it = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          ht = {
            NANP: "1"
          },
          Nt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          xt = {
            ISO2: "us"
          },
          Lt = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Mt = {
            AUTO: "auto"
          },
          ie = {
            COUNTRY_CODE: "countryCode",
            DIAL_CODE: "dialCode"
          },
          at = {
            EXPANDED: "aria-expanded",
            LABEL: "aria-label",
            SELECTED: "aria-selected",
            ACTIVE_DESCENDANT: "aria-activedescendant",
            HASPOPUP: "aria-haspopup",
            CONTROLS: "aria-controls",
            HIDDEN: "aria-hidden",
            AUTOCOMPLETE: "aria-autocomplete",
            MODAL: "aria-modal"
          },
          Ft = l => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(l).matches,
          q = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const l = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = Ft("(max-width: 500px)"),
                i = Ft("(max-height: 600px)"),
                s = Ft("(pointer: coarse)");
              return l || e || s && i
            }
            return !1
          },
          mt = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: Lt.POLITE,
            containerClass: "",
            countryOrder: null,
            countrySearch: !0,
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            fixDropdownWidth: !0,
            formatAsYouType: !0,
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: null,
            i18n: {},
            initialCountry: "",
            loadUtils: null,
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            showFlags: !0,
            separateDialCode: !1,
            strictMode: !1,
            useFullscreenPopup: q(),
            validationNumberTypes: ["MOBILE"]
          },
          yt = (l, e) => {
            l.useFullscreenPopup && (l.fixDropdownWidth = !1), l.onlyCountries.length === 1 && (l.initialCountry = l.onlyCountries[0]), l.separateDialCode && (l.nationalMode = !1), l.allowDropdown && !l.showFlags && !l.separateDialCode && (l.nationalMode = !1), l.useFullscreenPopup && !l.dropdownContainer && (l.dropdownContainer = document.body), l.i18n = {
              ...e,
              ...l.i18n
            }
          },
          Ct = l => l.replace(/\D/g, ""),
          re = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          A = (l, e) => {
            const i = re(e),
              s = [],
              a = [],
              c = [],
              u = [],
              h = [],
              d = [];
            for (const M of l) M.iso2 === i ? s.push(M) : M.normalisedName.startsWith(i) ? a.push(M) : M.normalisedName.includes(i) ? c.push(M) : i === M.dialCode || i === M.dialCodePlus ? u.push(M) : M.dialCodePlus.includes(i) ? h.push(M) : M.initials.includes(i) && d.push(M);
            const C = (M, _t) => M.priority - _t.priority;
            return [...s.sort(C), ...a.sort(C), ...c.sort(C), ...u.sort(C), ...h.sort(C), ...d.sort(C)]
          },
          F = (l, e) => {
            const i = e.toLowerCase();
            for (const s of l)
              if (s.name.toLowerCase().startsWith(i)) return s;
            return null
          },
          wt = l => Object.keys(l).filter(e => !!l[e]).join(" "),
          lt = (l, e, i) => {
            const s = document.createElement(l);
            return e && Object.entries(e).forEach(([a, c]) => s.setAttribute(a, c)), i && i.appendChild(s), s
          },
          Wt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${at.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          te = l => {
            const e = `iti-${l}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${at.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          ge = class {
            constructor(l, e, i) {
              this.highlightedItem = null, this.selectedItem = null, l.dataset.intlTelInputId = i.toString(), this.telInput = l, this.options = e, this.id = i, this.hadInitialPlaceholder = !!l.getAttribute("placeholder"), this.isRTL = !!this.telInput.closest("[dir=rtl]"), this.options.separateDialCode && (this.originalPaddingLeft = this.telInput.style.paddingLeft)
            }
            generateMarkup(l) {
              this.countries = l, this._prepareTelInput();
              const e = this._createWrapperAndInsert();
              this._maybeBuildCountryContainer(e), e.appendChild(this.telInput), this._maybeUpdateInputPaddingAndReveal(), this._maybeBuildHiddenInputs(e)
            }
            _prepareTelInput() {
              var l;
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !((l = this.telInput.form) != null && l.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off")
            }
            _createWrapperAndInsert() {
              const {
                allowDropdown: l,
                showFlags: e,
                containerClass: i,
                useFullscreenPopup: s
              } = this.options, a = wt({
                iti: !0,
                "iti--allow-dropdown": l,
                "iti--show-flags": e,
                "iti--inline-dropdown": !s,
                [i]: !!i
              }), c = lt("div", {
                class: a
              });
              return this.isRTL && c.setAttribute("dir", "ltr"), this.telInput.before(c), c
            }
            _maybeBuildCountryContainer(l) {
              const {
                allowDropdown: e,
                separateDialCode: i,
                showFlags: s
              } = this.options;
              if (e || s || i) {
                this.countryContainer = lt("div", {
                  class: `iti__country-container ${I.V_HIDE}`
                }, l), e ? (this.selectedCountry = lt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [at.EXPANDED]: "false",
                  [at.LABEL]: this.options.i18n.noCountrySelected,
                  [at.HASPOPUP]: "dialog",
                  [at.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = lt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const a = lt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = lt("div", {
                  class: I.FLAG
                }, a), e && (this.dropdownArrow = lt("div", {
                  class: "iti__arrow",
                  [at.HIDDEN]: "true"
                }, a)), i && (this.selectedDialCode = lt("div", {
                  class: "iti__selected-dial-code"
                }, this.selectedCountry)), e && this._buildDropdownContent()
              }
            }
            _buildDropdownContent() {
              const {
                fixDropdownWidth: l,
                useFullscreenPopup: e,
                countrySearch: i,
                i18n: s,
                dropdownContainer: a,
                containerClass: c
              } = this.options, u = l ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = lt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${I.HIDE} ${u}`,
                  role: "dialog",
                  [at.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), i && this._buildSearchUI(), this.countryList = lt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [at.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), i && this.updateSearchResultsA11yText(), a) {
                const h = wt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = lt("div", {
                  class: h
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: l
              } = this.options, e = lt("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = lt("span", {
                class: "iti__search-icon",
                [at.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = Wt(), this.searchInput = lt("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: l.searchPlaceholder,
                role: "combobox",
                [at.EXPANDED]: "true",
                [at.LABEL]: l.searchPlaceholder,
                [at.CONTROLS]: `iti-${this.id}__country-listbox`,
                [at.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = lt("button", {
                type: "button",
                class: `iti__search-clear ${I.HIDE}`,
                [at.LABEL]: l.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = te(this.id), this.searchResultsA11yText = lt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = lt("div", {
                class: `iti__no-results ${I.HIDE}`,
                [at.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = l.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(I.V_HIDE))
            }
            _maybeBuildHiddenInputs(l) {
              var i, s;
              const {
                hiddenInput: e
              } = this.options;
              if (e) {
                const a = this.telInput.getAttribute("name") || "",
                  c = e(a);
                if (c.phone) {
                  const u = (i = this.telInput.form) == null ? void 0 : i.querySelector(`input[name="${c.phone}"]`);
                  u ? this.hiddenInput = u : (this.hiddenInput = lt("input", {
                    type: "hidden",
                    name: c.phone
                  }), l.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = lt("input", {
                    type: "hidden",
                    name: c.country
                  }), l.appendChild(this.hiddenInputCountry))
                }
              }
            }
            _appendListItems() {
              const l = document.createDocumentFragment();
              for (let e = 0; e < this.countries.length; e++) {
                const i = this.countries[e],
                  s = wt({
                    [I.COUNTRY_ITEM]: !0
                  }),
                  a = lt("li", {
                    id: `iti-${this.id}__item-${i.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [at.SELECTED]: "false"
                  });
                a.dataset.dialCode = i.dialCode, a.dataset.countryCode = i.iso2, i.nodeById[this.id] = a, this.options.showFlags && lt("div", {
                  class: `${I.FLAG} iti__${i.iso2}`
                }, a);
                const c = lt("span", {
                  class: "iti__country-name"
                }, a);
                c.textContent = i.name;
                const u = lt("span", {
                  class: "iti__dial-code"
                }, a);
                this.isRTL && u.setAttribute("dir", "ltr"), u.textContent = `+${i.dialCode}`, l.appendChild(a)
              }
              this.countryList.appendChild(l)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const l = this.options.separateDialCode ? it.SANE_SELECTED_WITH_DIAL_WIDTH : it.SANE_SELECTED_NO_DIAL_WIDTH,
                  i = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || l) + it.INPUT_PADDING_EXTRA_LEFT;
                this.telInput.style.paddingLeft = `${i}px`
              }
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                let l;
                try {
                  l = window.top.document.body
                } catch {
                  l = document.body
                }
                const e = this.telInput.parentNode.cloneNode(!1);
                e.style.visibility = "hidden", l.appendChild(e);
                const i = this.countryContainer.cloneNode();
                e.appendChild(i);
                const s = this.selectedCountry.cloneNode(!0);
                i.appendChild(s);
                const a = s.offsetWidth;
                return l.removeChild(e), a
              }
              return 0
            }
            updateSearchResultsA11yText() {
              const {
                i18n: l
              } = this.options, e = this.countryList.childElementCount;
              let i;
              e === 0 ? i = l.zeroSearchResults : l.searchResultsText ? i = l.searchResultsText(e) : e === 1 ? i = l.oneSearchResult : i = l.multipleSearchResults.replace("${count}", e.toString()), this.searchResultsA11yText.textContent = i
            }
            scrollTo(l) {
              const e = this.countryList,
                i = document.documentElement.scrollTop,
                s = e.offsetHeight,
                a = e.getBoundingClientRect().top + i,
                c = a + s,
                u = l.offsetHeight,
                h = l.getBoundingClientRect().top + i,
                d = h + u,
                C = h - a + e.scrollTop;
              if (h < a) e.scrollTop = C;
              else if (d > c) {
                const M = s - u;
                e.scrollTop = C - M
              }
            }
            highlightListItem(l, e) {
              const i = this.highlightedItem;
              if (i && i.classList.remove(I.HIGHLIGHT), this.highlightedItem = l, this.highlightedItem && (this.highlightedItem.classList.add(I.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(at.ACTIVE_DESCENDANT, s)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(l) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== l && (this.selectedItem.setAttribute(at.SELECTED, "false"), this.selectedItem = null), l && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${l}"]`);
                e && (e.setAttribute(at.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(l) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const i of l) {
                const s = i.nodeById[this.id];
                s && (this.countryList.appendChild(s), e && (this.highlightListItem(s, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(I.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(I.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const l = this.telInput.parentNode;
              l.before(this.telInput), l.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const e of this.countries) delete e.nodeById[this.id];
              this.countries = null
            }
          },
          oe = l => {
            const {
              onlyCountries: e,
              excludeCountries: i
            } = l;
            if (e.length) {
              const s = e.map(a => a.toLowerCase());
              return N.filter(a => s.includes(a.iso2))
            } else if (i.length) {
              const s = i.map(a => a.toLowerCase());
              return N.filter(a => !s.includes(a.iso2))
            }
            return N
          },
          Vt = (l, e) => {
            for (const i of l) {
              const s = i.iso2.toLowerCase();
              e.i18n[s] && (i.name = e.i18n[s])
            }
          },
          jt = l => {
            const e = new Set;
            let i = 0;
            const s = {},
              a = (u, h) => {
                if (!u || !h) return;
                h.length > i && (i = h.length), s.hasOwnProperty(h) || (s[h] = []);
                const d = s[h];
                d.includes(u) || d.push(u)
              },
              c = [...l].sort((u, h) => u.priority - h.priority);
            for (const u of c) {
              e.has(u.dialCode) || e.add(u.dialCode);
              for (let h = 1; h < u.dialCode.length; h++) {
                const d = u.dialCode.substring(0, h);
                a(u.iso2, d)
              }
              if (a(u.iso2, u.dialCode), u.areaCodes) {
                const h = s[u.dialCode][0];
                for (const d of u.areaCodes) {
                  for (let C = 1; C < d.length; C++) {
                    const M = d.substring(0, C),
                      _t = u.dialCode + M;
                    a(h, _t), a(u.iso2, _t)
                  }
                  a(u.iso2, u.dialCode + d)
                }
              }
            }
            return {
              dialCodes: e,
              dialCodeMaxLen: i,
              dialCodeToIso2Map: s
            }
          },
          Pt = (l, e) => {
            e.countryOrder && (e.countryOrder = e.countryOrder.map(i => i.toLowerCase())), l.sort((i, s) => {
              const {
                countryOrder: a
              } = e;
              if (a) {
                const c = a.indexOf(i.iso2),
                  u = a.indexOf(s.iso2),
                  h = c > -1,
                  d = u > -1;
                if (h || d) return h && d ? c - u : h ? -1 : 1
              }
              return i.name.localeCompare(s.name)
            })
          },
          Y = l => {
            for (const e of l) e.normalisedName = re(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(i => i[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          me = (l, e, i, s) => {
            let a = l;
            if (i && e) {
              e = `+${s.dialCode}`;
              const c = a[e.length] === " " || a[e.length] === "-" ? e.length + 1 : e.length;
              a = a.substring(c)
            }
            return a
          },
          De = (l, e, i, s, a) => {
            const c = i ? i.formatNumberAsYouType(l, s.iso2) : l,
              {
                dialCode: u
              } = s;
            return a && e.charAt(0) !== "+" && c.includes(`+${u}`) ? (c.split(`+${u}`)[1] || "").trim() : c
          },
          xe = (l, e, i, s) => {
            if (i === 0 && !s) return 0;
            let a = 0;
            for (let c = 0; c < e.length; c++) {
              if (/[+0-9]/.test(e[c]) && a++, a === l && !s) return c + 1;
              if (s && a === l + 1) return c
            }
            return e.length
          },
          Se = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ve = l => {
            const e = Ct(l);
            if (e.startsWith(ht.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return Se.includes(i)
            }
            return !1
          };
        for (const l of N) l.name = S[l.iso2];
        var Ne = 0,
          P = new Set(N.map(l => l.iso2)),
          U = l => P.has(l),
          rt = class qn {
            constructor(e, i = {}) {
              this.id = Ne++, this.options = {
                ...mt,
                ...i
              }, yt(this.options, S), this.ui = new ge(e, this.options, this.id), this.isAndroid = qn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = oe(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: c
              } = jt(this.countries);
              this.dialCodes = s, this.dialCodeMaxLen = a, this.dialCodeToIso2Map = c, this.countryByIso2 = new Map(this.countries.map(u => [u.iso2, u])), this._init()
            }
            static _getIsAndroid() {
              return typeof navigator < "u" ? /Android/i.test(navigator.userAgent) : !1
            }
            _updateNumeralSet(e) {
              /[\u0660-\u0669]/.test(e) ? this.userNumeralSet = "arabic-indic" : /[\u06F0-\u06F9]/.test(e) ? this.userNumeralSet = "persian" : this.userNumeralSet = "ascii"
            }
            _mapAsciiToUserNumerals(e) {
              if (this.userNumeralSet || this._updateNumeralSet(this.ui.telInput.value), this.userNumeralSet === "ascii") return e;
              const i = this.userNumeralSet === "arabic-indic" ? 1632 : 1776;
              return e.replace(/[0-9]/g, s => String.fromCharCode(i + Number(s)))
            }
            _normaliseNumerals(e) {
              if (!e) return "";
              if (this._updateNumeralSet(e), this.userNumeralSet === "ascii") return e;
              const i = this.userNumeralSet === "arabic-indic" ? 1632 : 1776,
                s = this.userNumeralSet === "arabic-indic" ? /[\u0660-\u0669]/g : /[\u06F0-\u06F9]/g;
              return e.replace(s, a => String.fromCharCode(48 + (a.charCodeAt(0) - i)))
            }
            _getTelInputValue() {
              const e = this.ui.telInput.value.trim();
              return this._normaliseNumerals(e)
            }
            _setTelInputValue(e) {
              this.ui.telInput.value = this._mapAsciiToUserNumerals(e)
            }
            _createInitPromises() {
              const e = new Promise((s, a) => {
                  this.resolveAutoCountryPromise = s, this.rejectAutoCountryPromise = a
                }),
                i = new Promise((s, a) => {
                  this.resolveUtilsScriptPromise = s, this.rejectUtilsScriptPromise = a
                });
              return Promise.all([e, i])
            }
            _init() {
              this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
            }
            _processCountryData() {
              Vt(this.countries, this.options), Pt(this.countries, this.options), Y(this.countries)
            }
            _setInitialState(e = !1) {
              const i = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(i),
                a = this._getTelInputValue(),
                u = s && s.startsWith("+") && (!a || !a.startsWith("+")) ? s : a,
                h = this._getDialCode(u),
                d = ve(u),
                {
                  initialCountry: C,
                  geoIpLookup: M
                } = this.options,
                _t = C === Mt.AUTO && M;
              if (h && !d) this._updateCountryFromNumber(u);
              else if (!_t || e) {
                const ct = C ? C.toLowerCase() : "";
                U(ct) ? this._setCountry(ct) : h && d ? this._setCountry(xt.ISO2) : this._setCountry("")
              }
              u && this._updateValFromNumber(u)
            }
            _initListeners() {
              this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.ui.hiddenInput || this.ui.hiddenInputCountry) && this.ui.telInput.form && this._initHiddenInputListener()
            }
            _initHiddenInputListener() {
              var i;
              const e = () => {
                this.ui.hiddenInput && (this.ui.hiddenInput.value = this.getNumber()), this.ui.hiddenInputCountry && (this.ui.hiddenInputCountry.value = this.selectedCountryData.iso2 || "")
              };
              (i = this.ui.telInput.form) == null || i.addEventListener("submit", e, {
                signal: this.abortController.signal
              })
            }
            _initDropdownListeners() {
              const e = this.abortController.signal,
                i = u => {
                  this.ui.dropdownContent.classList.contains(I.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", i, {
                signal: e
              });
              const a = () => {
                this.ui.dropdownContent.classList.contains(I.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", a, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(I.HIDE) && [V.ARROW_UP, V.ARROW_DOWN, V.SPACE, V.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === V.TAB && this._closeDropdown()
              };
              this.ui.countryContainer.addEventListener("keydown", c, {
                signal: e
              })
            }
            _initRequests() {
              const {
                loadUtils: e,
                initialCountry: i,
                geoIpLookup: s
              } = this.options;
              if (e && !m.utils) {
                const c = () => {
                  var u;
                  (u = m.attachUtils(e)) == null || u.catch(() => {})
                };
                if (m.documentReady()) c();
                else {
                  const u = () => {
                    c()
                  };
                  window.addEventListener("load", u, {
                    signal: this.abortController.signal
                  })
                }
              } else this.resolveUtilsScriptPromise();
              i === Mt.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              m.autoCountry ? this.handleAutoCountry() : m.startedLoadingAutoCountry || (m.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const i = e.toLowerCase();
                U(i) ? (m.autoCountry = i, setTimeout(() => tt("handleAutoCountry"))) : (this._setInitialState(!0), tt("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), tt("rejectAutoCountryPromise")
              }))
            }
            _openDropdownWithPlus() {
              this._openDropdown(), this.ui.searchInput.value = "+", this._filterCountriesByQuery("")
            }
            _initTelInputListeners() {
              this._bindInputListener(), this._maybeBindKeydownListener(), this._maybeBindPasteListener()
            }
            _bindInputListener() {
              const {
                strictMode: e,
                formatAsYouType: i,
                separateDialCode: s,
                allowDropdown: a,
                countrySearch: c
              } = this.options;
              let u = !1;
              pt.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const h = d => {
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && a && c) {
                  const z = this.ui.telInput.selectionStart || 0,
                    vt = C.substring(0, z - 1),
                    nt = C.substring(z);
                  this._setTelInputValue(vt + nt), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const M = (d == null ? void 0 : d.data) && pt.NON_PLUS_NUMERIC.test(d.data),
                  _t = (d == null ? void 0 : d.inputType) === H.PASTE && C;
                M || _t && !e ? u = !0 : pt.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const ct = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  j = this.userNumeralSet === "ascii";
                if (i && !u && !ct && j) {
                  const z = this.ui.telInput.selectionStart || 0,
                    nt = C.substring(0, z).replace(pt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ft = (d == null ? void 0 : d.inputType) === H.DELETE_FWD,
                    ot = this._getFullNumber(),
                    Gt = De(ot, C, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    zt = xe(nt, Gt, z, ft);
                  this._setTelInputValue(Gt), this.ui.telInput.setSelectionRange(zt, zt)
                }
              };
              this.ui.telInput.addEventListener("input", h, {
                signal: this.abortController.signal
              })
            }
            _maybeBindKeydownListener() {
              const {
                strictMode: e,
                separateDialCode: i,
                allowDropdown: s,
                countrySearch: a
              } = this.options;
              if (e || i) {
                const c = u => {
                  if (u.key && u.key.length === 1 && !u.altKey && !u.ctrlKey && !u.metaKey) {
                    if (i && s && a && u.key === "+") {
                      u.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (e) {
                      const h = this._getTelInputValue(),
                        C = !h.startsWith("+") && this.ui.telInput.selectionStart === 0 && u.key === "+",
                        M = this._normaliseNumerals(u.key),
                        _t = /^[0-9]$/.test(M),
                        ct = i ? _t : C || _t,
                        j = this.ui.telInput,
                        z = j.selectionStart,
                        vt = j.selectionEnd,
                        nt = h.slice(0, z),
                        ft = h.slice(vt),
                        ot = nt + u.key + ft,
                        Gt = this._getFullNumber(ot),
                        zt = m.utils.getCoreNumber(Gt, this.selectedCountryData.iso2),
                        Dt = this.maxCoreNumberLength && zt.length > this.maxCoreNumberLength,
                        ee = this._getNewCountryFromNumber(Gt) !== null;
                      (!ct || Dt && !ee && !C) && u.preventDefault()
                    }
                  }
                };
                this.ui.telInput.addEventListener("keydown", c, {
                  signal: this.abortController.signal
                })
              }
            }
            _maybeBindPasteListener() {
              if (this.options.strictMode) {
                const e = i => {
                  i.preventDefault();
                  const s = this.ui.telInput,
                    a = s.selectionStart,
                    c = s.selectionEnd,
                    u = this._getTelInputValue(),
                    h = u.slice(0, a),
                    d = u.slice(c),
                    C = this.selectedCountryData.iso2,
                    M = i.clipboardData.getData("text"),
                    _t = this._normaliseNumerals(M),
                    ct = a === 0 && c > 0,
                    j = !u.startsWith("+") || ct,
                    z = _t.replace(pt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    vt = z.startsWith("+"),
                    nt = z.replace(/\+/g, ""),
                    ft = vt && j ? `+${nt}` : nt;
                  let ot = h + ft + d;
                  if (ot.length > 5) {
                    let zt = m.utils.getCoreNumber(ot, C);
                    for (; zt.length === 0 && ot.length > 0;) ot = ot.slice(0, -1), zt = m.utils.getCoreNumber(ot, C);
                    if (!zt) return;
                    if (this.maxCoreNumberLength && zt.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const Dt = zt.length - this.maxCoreNumberLength;
                        ot = ot.slice(0, ot.length - Dt)
                      } else return
                  }
                  this._setTelInputValue(ot);
                  const Gt = a + ft.length;
                  s.setSelectionRange(Gt, Gt), s.dispatchEvent(new InputEvent("input", {
                    bubbles: !0
                  }))
                };
                this.ui.telInput.addEventListener("paste", e, {
                  signal: this.abortController.signal
                })
              }
            }
            _cap(e) {
              const i = Number(this.ui.telInput.getAttribute("maxlength"));
              return i && e.length > i ? e.substring(0, i) : e
            }
            _trigger(e, i = {}) {
              const s = new CustomEvent(e, {
                bubbles: !0,
                cancelable: !0,
                detail: i
              });
              this.ui.telInput.dispatchEvent(s)
            }
            _openDropdown() {
              const {
                fixDropdownWidth: e,
                countrySearch: i
              } = this.options;
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(I.HIDE), this.ui.selectedCountry.setAttribute(at.EXPANDED, "true"), this._setDropdownPosition(), i) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(I.ARROW_UP), this._trigger(K.OPEN_COUNTRY_DROPDOWN)
            }
            _setDropdownPosition() {
              if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.ui.dropdown), !this.options.useFullscreenPopup) {
                const e = this.ui.telInput.getBoundingClientRect(),
                  i = this.ui.telInput.offsetHeight;
                if (this.options.dropdownContainer) {
                  this.ui.dropdown.style.top = `${e.top+i}px`, this.ui.dropdown.style.left = `${e.left}px`;
                  const s = () => this._closeDropdown();
                  window.addEventListener("scroll", s, {
                    signal: this.dropdownAbortController.signal
                  })
                }
              }
            }
            _bindDropdownListeners() {
              const e = this.dropdownAbortController.signal;
              this._bindDropdownMouseoverListener(e), this._bindDropdownCountryClickListener(e), this._bindDropdownClickOffListener(e), this._bindDropdownKeydownListener(e), this.options.countrySearch && this._bindDropdownSearchListeners(e)
            }
            _bindDropdownMouseoverListener(e) {
              const i = s => {
                var c;
                const a = (c = s.target) == null ? void 0 : c.closest(`.${I.COUNTRY_ITEM}`);
                a && this.ui.highlightListItem(a, !1)
              };
              this.ui.countryList.addEventListener("mouseover", i, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const i = s => {
                var c;
                const a = (c = s.target) == null ? void 0 : c.closest(`.${I.COUNTRY_ITEM}`);
                a && this._selectListItem(a)
              };
              this.ui.countryList.addEventListener("click", i, {
                signal: e
              })
            }
            _bindDropdownClickOffListener(e) {
              const i = s => {
                !!s.target.closest(`#iti-${this.id}__dropdown-content`) || this._closeDropdown()
              };
              setTimeout(() => {
                document.documentElement.addEventListener("click", i, {
                  signal: e
                })
              }, 0)
            }
            _bindDropdownKeydownListener(e) {
              let i = "",
                s = null;
              const a = c => {
                [V.ARROW_UP, V.ARROW_DOWN, V.ENTER, V.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === V.ARROW_UP || c.key === V.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === V.ENTER ? this._handleEnterKey() : c.key === V.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && pt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), i += c.key.toLowerCase(), this._searchForCountry(i), s = setTimeout(() => {
                  i = ""
                }, St.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", a, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const i = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(I.HIDE) : this.ui.searchClearButton.classList.add(I.HIDE)
              };
              let s = null;
              const a = () => {
                s && clearTimeout(s), s = setTimeout(() => {
                  i(), s = null
                }, 100)
              };
              this.ui.searchInput.addEventListener("input", a, {
                signal: e
              });
              const c = () => {
                this.ui.searchInput.value = "", this.ui.searchInput.focus(), i()
              };
              this.ui.searchClearButton.addEventListener("click", c, {
                signal: e
              })
            }
            _searchForCountry(e) {
              const i = F(this.countries, e);
              if (i) {
                const s = i.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let i;
              e === "" ? i = this.countries : i = A(this.countries, e), this.ui.filterCountries(i)
            }
            _handleUpDownKey(e) {
              var s, a;
              let i = e === V.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === V.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let i = e;
              if (this.options.formatOnDisplay && m.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !i.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: a,
                    INTERNATIONAL: c
                  } = m.utils.numberFormat,
                  u = s ? a : c;
                i = m.utils.formatNumber(i, this.selectedCountryData.iso2, u)
              }
              i = this._beforeSetNumber(i), this._setTelInputValue(i)
            }
            _updateCountryFromNumber(e) {
              const i = this._getNewCountryFromNumber(e);
              return i !== null ? this._setCountry(i) : !1
            }
            _ensureHasDialCode(e) {
              const {
                dialCode: i,
                nationalPrefix: s
              } = this.selectedCountryData;
              if (e.startsWith("+") || !i) return e;
              const u = s && e.startsWith(s) && !this.options.separateDialCode ? e.substring(1) : e;
              return `+${i}${u}`
            }
            _getNewCountryFromNumber(e) {
              const i = e.indexOf("+");
              let s = i ? e.substring(i) : e;
              const a = this.selectedCountryData.iso2,
                c = this.selectedCountryData.dialCode;
              s = this._ensureHasDialCode(s);
              const u = this._getDialCode(s, !0),
                h = Ct(s);
              if (u) {
                const d = Ct(u),
                  C = this.dialCodeToIso2Map[d];
                if (C.length === 1) return C[0] === a ? null : C[0];
                if (!a && this.defaultCountry && C.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === ht.NANP && ve(h)) return null;
                const {
                  areaCodes: _t,
                  priority: ct
                } = this.selectedCountryData;
                if (_t) {
                  const ft = _t.map(ot => `${c}${ot}`);
                  for (const ot of ft)
                    if (h.startsWith(ot)) return null
                }
                const z = _t && !(ct === 0) && h.length > d.length,
                  vt = a && C.includes(a) && !z,
                  nt = a === C[0];
                if (!vt && !nt) return C[0]
              } else if (s.startsWith("+") && h.length) {
                const d = this.selectedCountryData.dialCode || "";
                return d && d.startsWith(h) ? null : ""
              } else if ((!s || s === "+") && !a) return this.defaultCountry;
              return null
            }
            _setCountry(e) {
              const {
                separateDialCode: i,
                showFlags: s,
                i18n: a,
                allowDropdown: c
              } = this.options, u = this.selectedCountryData.iso2 || "";
              if (c && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const h = e && s ? `${I.FLAG} iti__${e}` : `${I.FLAG} ${I.GLOBE}`;
                let d, C;
                if (e) {
                  const {
                    name: M,
                    dialCode: _t
                  } = this.selectedCountryData;
                  C = M, d = a.selectedCountryAriaLabel.replace("${countryName}", M).replace("${dialCode}", `+${_t}`)
                } else C = a.noCountrySelected, d = a.noCountrySelected;
                this.ui.selectedCountryInner.className = h, this.ui.selectedCountry.setAttribute("title", C), this.ui.selectedCountry.setAttribute(at.LABEL, d)
              }
              if (i) {
                const h = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                this.ui.selectedDialCode.textContent = h, this.ui.updateInputPadding()
              }
              return this._updatePlaceholder(), this._updateMaxLength(), u !== e
            }
            _updateMaxLength() {
              const {
                strictMode: e,
                placeholderNumberType: i,
                validationNumberTypes: s
              } = this.options, {
                iso2: a
              } = this.selectedCountryData;
              if (e && m.utils)
                if (a) {
                  const c = m.utils.numberType[i];
                  let u = m.utils.getExampleNumber(a, !1, c, !0),
                    h = u;
                  for (; m.utils.isPossibleNumber(u, a, s);) h = u, u += "0";
                  const d = m.utils.getCoreNumber(h, a);
                  this.maxCoreNumberLength = d.length, a === "by" && (this.maxCoreNumberLength = d.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: e,
                placeholderNumberType: i,
                nationalMode: s,
                customPlaceholder: a
              } = this.options, c = e === Lt.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === Lt.POLITE;
              if (m.utils && c) {
                const u = m.utils.numberType[i];
                let h = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, s, u) : "";
                h = this._beforeSetNumber(h), typeof a == "function" && (h = a(h, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", h)
              }
            }
            _selectListItem(e) {
              const i = e.dataset[ie.COUNTRY_CODE],
                s = this._setCountry(i);
              this._closeDropdown();
              const a = e.dataset[ie.DIAL_CODE];
              if (this._updateDialCode(a), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(I.HIDE) || (this.ui.dropdownContent.classList.add(I.HIDE), this.ui.selectedCountry.setAttribute(at.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(at.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(I.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(I.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(K.CLOSE_COUNTRY_DROPDOWN))
            }
            _updateDialCode(e) {
              const i = this._getTelInputValue(),
                s = `+${e}`;
              let a;
              if (i.startsWith("+")) {
                const c = this._getDialCode(i);
                c ? a = i.replace(c, s) : a = s, this._setTelInputValue(a)
              }
            }
            _getDialCode(e, i) {
              let s = "";
              if (e.startsWith("+")) {
                let a = "",
                  c = !1;
                for (let u = 0; u < e.length; u++) {
                  const h = e.charAt(u);
                  if (/[0-9]/.test(h)) {
                    if (a += h, !!!this.dialCodeToIso2Map[a]) break;
                    if (this.dialCodes.has(a)) {
                      if (s = e.substring(0, u + 1), c = !0, !i) break
                    } else i && c && (s = e.substring(0, u + 1));
                    if (a.length === this.dialCodeMaxLen) break
                  }
                }
              }
              return s
            }
            _getFullNumber(e) {
              const i = e ? this._normaliseNumerals(e) : this._getTelInputValue(),
                {
                  dialCode: s
                } = this.selectedCountryData;
              let a;
              const c = Ct(i);
              return this.options.separateDialCode && !i.startsWith("+") && s && c ? a = `+${s}` : a = "", a + i
            }
            _beforeSetNumber(e) {
              const i = this._getDialCode(e),
                s = me(e, i, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(K.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Mt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(I.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (m.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), m.instances instanceof Map ? m.instances.delete(this.id) : delete m.instances[this.id])
            }
            getExtension() {
              return m.utils ? m.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (m.utils) {
                const {
                  iso2: i
                } = this.selectedCountryData, s = this._getFullNumber(), a = m.utils.formatNumber(s, i, e);
                return this._mapAsciiToUserNumerals(a)
              }
              return ""
            }
            getNumberType() {
              return m.utils ? m.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : T.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (m.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return m.utils.getValidationError(this._getFullNumber(), e)
              }
              return T.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: i
              } = this.selectedCountryData;
              if (e === Nt.DIAL_CODE && m.utils) {
                const s = this._getFullNumber(),
                  a = m.utils.getCoreNumber(s, i);
                if (a[0] === Nt.MOBILE_PREFIX && a.length !== Nt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return m.utils ? m.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!m.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const i = u => e ? this._utilsIsValidNumber(u) : this._utilsIsPossibleNumber(u),
                s = this._getFullNumber(),
                a = s.search(pt.ALPHA_UNICODE);
              if (a > -1 && !this.options.allowPhonewords) {
                const u = s.substring(0, a),
                  h = i(u),
                  d = i(s);
                return h && d
              }
              return i(s)
            }
            _utilsIsValidNumber(e) {
              return m.utils ? m.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const i = e == null ? void 0 : e.toLowerCase();
              if (!U(i)) throw new Error(`Invalid country code: '${i}'`);
              const s = this.selectedCountryData.iso2;
              if (e && i !== s || !e && s) {
                if (this._setCountry(i), this._updateDialCode(this.selectedCountryData.dialCode), this.options.formatOnDisplay) {
                  const c = this._getTelInputValue();
                  this._updateValFromNumber(c)
                }
                this._triggerCountryChange()
              }
            }
            setNumber(e) {
              const i = this._normaliseNumerals(e),
                s = this._updateCountryFromNumber(i);
              this._updateValFromNumber(i), s && this._triggerCountryChange(), this._trigger(K.INPUT, {
                isSetNumber: !0
              })
            }
            setPlaceholderNumberType(e) {
              this.options.placeholderNumberType = e, this._updatePlaceholder()
            }
            setDisabled(e) {
              this.ui.telInput.disabled = e, e ? this.ui.selectedCountry.setAttribute("disabled", "true") : this.ui.selectedCountry.removeAttribute("disabled")
            }
          },
          ut = l => {
            if (!m.utils && !m.startedLoadingUtilsScript) {
              let e;
              if (typeof l == "function") try {
                e = Promise.resolve(l())
              } catch (i) {
                return Promise.reject(i)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof l}`));
              return m.startedLoadingUtilsScript = !0, e.then(i => {
                const s = i == null ? void 0 : i.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return m.utils = s, tt("handleUtils"), !0
              }).catch(i => {
                throw tt("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          tt = (l, ...e) => {
            Object.values(m.instances).forEach(i => {
              const s = i[l];
              typeof s == "function" && s.apply(i, e)
            })
          },
          m = Object.assign((l, e) => {
            const i = new rt(l, e);
            return m.instances[i.id] = i, l.iti = i, i
          }, {
            defaults: mt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => N,
            getInstance: l => {
              const e = l.dataset.intlTelInputId;
              return e ? m.instances[e] : null
            },
            instances: {},
            attachUtils: ut,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          At = m;
        return W(L)
      })();
      return t.default
    })
  })(hn)), hn.exports
}
var La = Na();
const Aa = hi(La);
var Pa = dt('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  ka = dt('<span class="w-8"> </span>'),
  Oa = dt('<span class="loading loading-spinner center-absolute absolute"></span>'),
  Ra = dt('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  Ma = dt('<span class="w-8"> </span>'),
  Ba = dt('<span class="loading loading-spinner center-absolute absolute"></span>'),
  Ha = dt('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  Ua = dt('<div class="flex h-full w-full flex-col items-center"><!></div>');

function Wa(o, t) {
  Yt(t, !0);
  let n = k(t, "verifyingPhone", 15, ""),
    f = J(!0),
    g = J(0),
    w = J(!1);
  const x = E(() => r(g) > 0 || r(w));
  let B = J(!1),
    W = J(""),
    L = J(void 0);
  const y = E(() => {
    var b;
    return `phone:${(b=Qe.data)==null?void 0:b.id}`
  });
  Ut(() => {
    const b = localStorage.getItem(r(y));
    b && n(b)
  }), fe(() => {
    ln.getOtpCooldown().then(K => {
      _(g, K.cooldownMs, !0)
    }).catch(K => {
      ye.error(K.message)
    }).finally(() => {
      _(f, !1)
    });
    const b = 1e3,
      S = setInterval(() => {
        _(g, Math.max(0, r(g) - b), !0)
      }, b);
    return () => {
      clearInterval(S)
    }
  });
  async function D(b) {
    try {
      _(w, !0);
      const S = await ln.sendOtp(b),
        K = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      ye.info(Yo({
        channel: K[S.channel],
        phone: S.phone
      }), {
        duration: 1e4
      }), n(S.phone), _(g, S.cooldownMs, !0), localStorage.setItem(r(y), n())
    } catch (S) {
      ye.error(S.message)
    } finally {
      _(w, !1)
    }
  }
  Ut(() => {
    r(W).length === 6 && (_(B, !0), (async () => {
      try {
        await ln.verifyChallenge({
          type: "otp",
          code: r(W)
        }), ye.success(Xr()), localStorage.removeItem(r(y)), t.onsuccess(n())
      } catch (b) {
        ye.error(b.message)
      } finally {
        _(W, ""), _(B, !1)
      }
    })())
  });
  var N = Ua(),
    $ = et(N);
  {
    var R = b => {
        var S = Pa();
        v(b, S)
      },
      Z = b => {
        var S = Ra(),
          K = G(S),
          I = et(K),
          V = et(I),
          H = et(V, !0);
        X(V);
        var pt = Et(V, 2),
          St = et(pt, !0);
        X(pt), X(I);
        var T = Et(I, 2),
          it = et(T);
        Un(it, () => q => {
          var mt, yt;
          return _(L, Aa(q, {
            strictMode: !0,
            initialCountry: ((yt = (mt = Qe.data) == null ? void 0 : mt.country) == null ? void 0 : yt.toLocaleLowerCase()) ?? "br",
            loadUtils: () => Ii(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: document.body
          })), () => {
            var Ct;
            (Ct = r(L)) == null || Ct.destroy()
          }
        });
        var ht = Et(it, 2),
          Nt = et(ht),
          xt = Et(Nt);
        {
          var Lt = q => {
            var mt = ka(),
              yt = et(mt);
            X(mt), Tt(Ct => Bt(yt, `(${Ct??""})`), [() => xn(r(g))]), v(q, mt)
          };
          st(xt, q => {
            r(g) > 0 && q(Lt)
          })
        }
        var Mt = Et(xt, 2);
        {
          var ie = q => {
            var mt = Oa();
            v(q, mt)
          };
          st(Mt, q => {
            r(w) && q(ie)
          })
        }
        X(ht), X(T), X(K);
        var at = Et(K, 2),
          Ft = et(at, !0);
        X(at), Tt((q, mt, yt, Ct) => {
          Bt(H, q), Bt(St, mt), ht.disabled = r(x), Bt(Nt, `${yt??""} `), Bt(Ft, Ct)
        }, [() => Ir(), () => Mr(), () => wo(), () => cr()]), rn("submit", T, async () => {
          var mt;
          if (r(x)) return;
          if (!((mt = r(L)) != null && mt.isValidNumber())) {
            ye.error(Zi());
            return
          }
          const q = r(L).getNumber();
          await D(q)
        }), v(b, S)
      },
      O = b => {
        var S = Ha(),
          K = G(S),
          I = et(K),
          V = et(I, !0);
        X(I);
        var H = Et(I, 2),
          pt = et(H, !0);
        X(H), X(K);
        var St = Et(K, 2),
          T = et(St);
        {
          const q = (mt, yt) => {
            let Ct = () => yt == null ? void 0 : yt().cells;
            var re = Q(),
              A = G(re);
            $t(A, () => ia, (F, wt) => {
              wt(F, {
                class: "border-primary",
                children: (lt, Wt) => {
                  var te = Q(),
                    ge = G(te);
                  Ze(ge, 16, Ct, oe => oe, (oe, Vt) => {
                    var jt = Q(),
                      Pt = G(jt);
                    $t(Pt, () => xa, (Y, me) => {
                      me(Y, {
                        get cell() {
                          return Vt
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), v(oe, jt)
                  }), v(lt, te)
                },
                $$slots: {
                  default: !0
                }
              })
            }), v(mt, re)
          };
          $t(T, () => Sa, (mt, yt) => {
            yt(mt, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return r(B)
              },
              get value() {
                return r(W)
              },
              set value(Ct) {
                _(W, Ct, !0)
              },
              children: q,
              $$slots: {
                default: !0
              }
            })
          })
        }
        X(St);
        var it = Et(St, 2),
          ht = et(it),
          Nt = et(ht),
          xt = Et(Nt);
        {
          var Lt = q => {
            var mt = Ma(),
              yt = et(mt);
            X(mt), Tt(Ct => Bt(yt, `(${Ct??""})`), [() => xn(r(g))]), v(q, mt)
          };
          st(xt, q => {
            r(g) > 0 && q(Lt)
          })
        }
        var Mt = Et(xt, 2);
        {
          var ie = q => {
            var mt = Ba();
            v(q, mt)
          };
          st(Mt, q => {
            r(w) && q(ie)
          })
        }
        X(ht);
        var at = Et(ht, 2),
          Ft = et(at, !0);
        X(at), X(it), Tt((q, mt, yt, Ct) => {
          Bt(V, q), Bt(pt, mt), ht.disabled = r(x), Bt(Nt, `${yt??""} `), Bt(Ft, Ct)
        }, [() => Hi(), () => Ro({
          phone: n()
        }), () => lo(), () => as()]), ae("click", ht, async () => {
          await D(n())
        }), ae("click", at, () => {
          n("")
        }), v(b, S)
      };
    st($, b => {
      r(f) ? b(R) : n() ? b(O, !1) : b(Z, 1)
    })
  }
  X(N), v(o, N), Xt()
}
on(["click"]);
let Pe = J(!1);
var Va = dt("<div></div>"),
  ja = dt('<button type="button" class="btn">Retry</button>'),
  za = dt('<span class="loading loading-spinner loading-lg"></span>'),
  Fa = dt("<div><!></div>");

function Ga(o, t) {
  Yt(t, !0);
  let n = k(t, "widgetId", 15),
    f = k(t, "appearance", 3, "always"),
    g = k(t, "language", 3, "auto"),
    w = k(t, "execution", 3, "render"),
    x = k(t, "retryInterval", 3, 8e3),
    B = k(t, "retry", 3, "auto"),
    W = k(t, "refreshExpired", 3, "auto"),
    L = k(t, "theme", 3, "auto"),
    y = k(t, "size", 3, "normal"),
    D = k(t, "tabIndex", 3, 0);
  k(t, "reset", 15)(() => {
    var T;
    n() && ((T = window == null ? void 0 : window.turnstile) == null || T.reset(n()))
  });
  const $ = E(() => ({
      sitekey: t.siteKey,
      callback: (T, it) => {
        var ht;
        (ht = t.callback) == null || ht.call(t, T, it)
      },
      "error-callback": T => {
        var it;
        (it = t.errorCallback) == null || it.call(t, T)
      },
      "timeout-callback": () => {
        var T;
        (T = t.timeoutCallback) == null || T.call(t)
      },
      "expired-callback": () => {
        var T;
        (T = t.expiredCallback) == null || T.call(t)
      },
      "before-interactive-callback": () => {
        var T;
        (T = t.beforeInteractiveCallback) == null || T.call(t)
      },
      "after-interactive-callback": () => {
        var T;
        (T = t.afterInteractiveCallback) == null || T.call(t)
      },
      "unsupported-callback": () => {
        var T;
        return (T = t.unsupportedCallback) == null ? void 0 : T.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? "cf-turnstile-response",
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": W(),
      "retry-interval": x(),
      tabindex: D(),
      appearance: f(),
      execution: w(),
      language: g(),
      action: t.action,
      retry: B(),
      theme: L(),
      cData: t.cData,
      size: y()
    })),
    R = (T, it) => {
      let ht = window.turnstile.render(T, it);
      return n(ht), {
        destroy() {
          window.turnstile.remove(ht)
        },
        update(Nt) {
          window.turnstile.remove(ht), ht = window.turnstile.render(T, Nt), n(ht)
        }
      }
    };
  let Z = J(!1),
    O = J(!1),
    b;

  function S() {
    const T = document.createElement("script");
    T.type = "text/javascript", T.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", T.async = !0, T.addEventListener("load", () => _(Pe, !0), {
      once: !0
    }), document.head.appendChild(T)
  }

  function K() {
    _(O, !1), b && clearTimeout(b), b = setTimeout(() => {
      (!r(Pe) || !r(Z)) && _(O, !0)
    }, 5e3)
  }

  function I() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(T => T.remove()), _(Pe, !1), S(), K()
  }
  fe(() => (_(Z, !0), r(Pe) || S(), K(), () => {
    _(Z, !1), b && clearTimeout(b)
  }));
  var V = Q(),
    H = G(V);
  {
    var pt = T => {
        var it = Va();
        let ht;
        Hn(it, (Nt, xt) => R == null ? void 0 : R(Nt, xt), () => r($)), Tt(() => ht = Jt(it, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", ht, {
          flexible: y() == "flexible"
        })), v(T, it)
      },
      St = T => {
        var it = Fa(),
          ht = et(it);
        {
          var Nt = Lt => {
              var Mt = ja();
              ae("click", Mt, I), v(Lt, Mt)
            },
            xt = Lt => {
              var Mt = za();
              v(Lt, Mt)
            };
          st(ht, Lt => {
            r(O) ? Lt(Nt) : Lt(xt, !1)
          })
        }
        X(it), Tt(() => Jt(it, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), v(T, it)
      };
    st(H, T => {
      r(Pe) && r(Z) ? T(pt) : T(St, !1)
    })
  }
  v(o, V), Xt()
}
on(["click"]);
var Ka = dt('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function qa(o, t) {
  Yt(t, !0);
  const n = E(() => un.current !== null),
    f = E(() => {
      var D;
      return (D = un.current) == null ? void 0 : D.tier
    });
  let g = J("");
  var w = Ka(),
    x = et(w);
  let B;
  var W = et(x),
    L = et(W);
  {
    var y = D => {
      var N = Q(),
        $ = G(N);
      vi($, () => un.errorCount, R => {
        var Z = Q(),
          O = G(Z);
        {
          var b = I => {
              {
                let V = E(() => bi.trim());
                Ga(I, {
                  get siteKey() {
                    return r(V)
                  },
                  callback: H => Nn(H),
                  errorCallback: () => Sn()
                })
              }
            },
            S = I => {
              {
                let V = E(() => wi.trim());
                ea(I, {
                  get siteKey() {
                    return r(V)
                  },
                  callback: H => Nn(H),
                  errorCallback: () => Sn()
                })
              }
            },
            K = I => {
              Wa(I, {
                onsuccess: () => oi(),
                get verifyingPhone() {
                  return r(g)
                },
                set verifyingPhone(V) {
                  _(g, V, !0)
                }
              })
            };
          st(O, I => {
            r(f) === 2 ? I(b) : r(f) === 3 ? I(S, 1) : r(f) === 4 && I(K, 2)
          })
        }
        v(R, Z)
      }), v(D, N)
    };
    st(L, D => {
      r(n) && D(y)
    })
  }
  X(W), X(x), Bn(2), X(w), Un(w, () => D => {
    Ut(() => {
      r(n) ? D.show() : D.close()
    })
  }), Tt(() => B = Jt(x, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, B, {
    "h-84": r(f) === 4 && !r(g)
  })), rn("close", w, () => ri()), v(o, w), Xt()
}
var Ya = dt('<span class="hidden"> </span> <!> <!> <!>', 1);

function gl(o, t) {
  Yt(t, !0), fe(() => {
    const y = mi();
    Ln.init(), si(), setTimeout(() => {
      Qe.data && ai()
    }, 5e3);
    const D = pi(async () => {
      await Qe.refresh()
    }, {
      interval: li.hour,
      immediate: !0
    });
    let N = setInterval(() => {
      _i()
    }, 5e3);
    return () => {
      clearTimeout(N), y(), D(), Ln.cleanup()
    }
  });
  const n = "muted";
  fe(() => {
    fn.muted = localStorage.getItem(n) === "1"
  }), Ut(() => {
    {
      const y = fn.muted;
      document.querySelectorAll("audio").forEach(D => {
        D.muted = y
      });
      for (const D of Object.values(fi).filter(N => N instanceof Audio)) D.muted = y, y || (D.volume = .3);
      localStorage.setItem(n, Number(y).toString())
    }
  }), fe(() => {});
  var f = Ya();
  rn("beforeunload", ti, () => {
    gi()
  });
  var g = G(f),
    w = et(g);
  X(g);
  var x = Et(g, 2);
  {
    var B = y => {
      var D = Q(),
        N = G(D);
      Ht(N, () => t.children), v(y, D)
    };
    st(x, y => {
      y(B, !1)
    })
  }
  var W = Et(x, 2);
  qa(W, {});
  var L = Et(W, 2);
  Qs(L, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Tt(() => Bt(w, `Version: ${ni}`)), v(o, f), Xt()
}
export {
  gl as component, _l as universal
};