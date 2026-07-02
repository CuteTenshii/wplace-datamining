var Zn = Object.defineProperty;
var wn = o => {
  throw TypeError(o)
};
var Qn = (o, t, n) => t in o ? Zn(o, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : o[t] = n;
var It = (o, t, n) => Qn(o, typeof t != "symbol" ? t + "" : t, n),
  sn = (o, t, n) => t.has(o) || wn("Cannot " + n);
var v = (o, t, n) => (sn(o, t, "read from private field"), n ? n.call(o) : t.get(o)),
  vt = (o, t, n) => t.has(o) ? wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, n),
  me = (o, t, n, f) => (sn(o, t, "write to private field"), f ? f.call(o, n) : t.set(o, n), n),
  In = (o, t, n) => (sn(o, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as he
} from "../chunks/BtGY2hia.js";
import {
  p as Yt,
  d as nt,
  a as g,
  r as J,
  t as Tt,
  b as Xt,
  c as ft,
  bJ as Re,
  E as Jn,
  D as En,
  F as $n,
  e as tt,
  g as gn,
  y as Mt,
  h as p,
  i as r,
  B as Pe,
  s as Et,
  l as oe,
  v as nn,
  u as E,
  aI as qt,
  q as $,
  f as G,
  k as rn,
  bm as Tn,
  w as Ge,
  bK as Mn,
  n as Bn,
  bH as ti
} from "../chunks/DmPVOt2G.js";
import {
  c as ei,
  s as Ht
} from "../chunks/DhqkUb9U.js";
import {
  i as st
} from "../chunks/CPZ_RRGr.js";
import {
  s as Ut
} from "../chunks/BAb2Drqf.js";
import {
  v as ni
} from "../chunks/E08PMILm.js";
import {
  L as Ot,
  M as ae,
  N as ii,
  g as hn,
  a as an,
  t as ve,
  u as Xe,
  O as Dn,
  Q as ri,
  R as ln,
  U as Sn,
  V as xn,
  X as oi,
  Y as si,
  Z as ai,
  p as Nn,
  _ as li,
  T as ui
} from "../chunks/Clc6E9hk.js";
import {
  A as ci
} from "../chunks/NG3uhibl.js";
import {
  s as di,
  a as hi
} from "../chunks/BZte7Sfq.js";
import {
  a as Hn,
  i as on,
  b as kt,
  s as fi,
  c as fn,
  w as mi,
  d as pi,
  e as _i,
  f as mn,
  n as An,
  m as Ye,
  g as gi,
  h as vi,
  j as yi
} from "../chunks/Cj0ekp_y.js";
import {
  k as Ci
} from "../chunks/DBDgQuS6.js";
import {
  c as le,
  a as Qt,
  s as bt,
  b as un,
  e as ye,
  S as bi,
  h as wi,
  f as Un
} from "../chunks/tuZNrlvy.js";
import {
  p as P,
  s as ke,
  r as Ee
} from "../chunks/D4ILXblz.js";
import {
  _ as Ii
} from "../chunks/Dp1pzeXC.js";
import {
  e as Ze
} from "../chunks/BVZolyyS.js";
import {
  c as Jt
} from "../chunks/Dq1RO3AA.js";
import {
  b as vn
} from "../chunks/CqzYBvze.js";
import {
  t as Ei
} from "../chunks/Ct12j0u0.js";
import {
  g as se
} from "../chunks/BhCkpOlh.js";
import {
  p as Ti
} from "../chunks/BTQgEZ2f.js";
import "../chunks/N7IJUCQt.js";
import {
  f as Di
} from "../chunks/DstqyuRl.js";
const Si = !0,
  cl = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Si
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  xi = () => "Input the code",
  Ni = () => "Insira o código",
  Ai = () => "输入验证码",
  Li = () => "Code eingeben",
  Pi = () => "Introduce el código",
  ki = () => "Entrez le code",
  Ri = () => "Inserisci il codice",
  Oi = () => "コードを入力してください。",
  Mi = () => "Wpisz kod",
  Bi = () => "Введите код",
  Hi = () => "Введіть код",
  Ui = () => "Nhập mã",
  Wi = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? xi() : n === "pt" ? Ni() : n === "ch" ? Ai() : n === "de" ? Li() : n === "es" ? Pi() : n === "fr" ? ki() : n === "it" ? Ri() : n === "jp" ? Oi() : n === "pl" ? Mi() : n === "ru" ? Bi() : n === "uk" ? Hi() : Ui()
  },
  Vi = () => "Not a valid phone number",
  Fi = () => "Não é um número válido",
  ji = () => "不是有效的电话号码",
  zi = () => "Keine gültige Telefonnummer",
  Gi = () => "No es un número de teléfono válido",
  Ki = () => "Numéro non valide",
  qi = () => "Numero non valido",
  Yi = () => "有効な電話番号ではありません。",
  Xi = () => "To nie jest prawidłowy numer telefonu",
  Zi = () => "Неверный номер телефона",
  Qi = () => "Некоректний номер телефону",
  Ji = () => "Không phải số điện thoại hợp lệ",
  $i = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Vi() : n === "pt" ? Fi() : n === "ch" ? ji() : n === "de" ? zi() : n === "es" ? Gi() : n === "fr" ? Ki() : n === "it" ? qi() : n === "jp" ? Yi() : n === "pl" ? Xi() : n === "ru" ? Zi() : n === "uk" ? Qi() : Ji()
  },
  tr = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  er = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  nr = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  ir = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  rr = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  or = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  sr = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  ar = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  lr = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  ur = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  cr = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  dr = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  hr = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? tr() : n === "pt" ? er() : n === "ch" ? nr() : n === "de" ? ir() : n === "es" ? rr() : n === "fr" ? or() : n === "it" ? sr() : n === "jp" ? ar() : n === "pl" ? lr() : n === "ru" ? ur() : n === "uk" ? cr() : dr()
  },
  fr = () => "Verify your phone number to keep painting. This helps us block bots and multi-accounting to keep a fair experience for everyone.",
  mr = () => "Verifique seu número de telefone para continuar pintando. Isso nos ajuda a bloquear bots e o uso de várias contas para garantir uma experiência justa para todos.",
  pr = () => "请验证你的电话号码以继续绘画。这有助于我们阻止机器人和多账号行为，为所有人提供公平的体验。",
  _r = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots und Multi-Accounting zu blockieren, damit alle ein faires Erlebnis haben.",
  gr = () => "Verifica tu número de teléfono para seguir pintando. Esto nos ayuda a bloquear bots y el uso de varias cuentas para garantizar una experiencia justa para todos.",
  vr = () => "Vérifiez votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et les comptes multiples afin de garantir une expérience équitable pour tous.",
  yr = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a bloccare bot e account multipli per garantire un'esperienza equa a tutti.",
  Cr = () => "描き続けるには電話番号の確認が必要です。これはボットや複数アカウントの利用を防ぎ、すべてのプレイヤーに公平な体験を提供するための手順です。",
  br = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to blokować boty i zakładanie wielu kont, aby zapewnić wszystkim uczciwą rozgrywkę.",
  wr = () => "Подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам блокировать ботов и мультиаккаунты, обеспечивая честные условия для всех.",
  Ir = () => "Підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам блокувати ботів і мультиакаунти, щоб забезпечити чесні умови для всіх.",
  Er = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi chặn bot và việc dùng nhiều tài khoản để mang lại trải nghiệm công bằng cho mọi người.",
  Tr = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? fr() : n === "pt" ? mr() : n === "ch" ? pr() : n === "de" ? _r() : n === "es" ? gr() : n === "fr" ? vr() : n === "it" ? yr() : n === "jp" ? Cr() : n === "pl" ? br() : n === "ru" ? wr() : n === "uk" ? Ir() : Er()
  },
  Dr = () => "Phone successfully verified",
  Sr = () => "Telefone verificado com sucesso",
  xr = () => "电话验证成功",
  Nr = () => "Telefon erfolgreich verifiziert",
  Ar = () => "Teléfono verificado correctamente",
  Lr = () => "Téléphone vérifié avec succès",
  Pr = () => "Telefono verificato con successo",
  kr = () => "電話番号を確認しました。",
  Rr = () => "Telefon został pomyślnie zweryfikowany",
  Or = () => "Телефон успешно подтверждён",
  Mr = () => "Телефон успішно підтверджено",
  Br = () => "Đã xác minh số điện thoại thành công",
  Hr = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Dr() : n === "pt" ? Sr() : n === "ch" ? xr() : n === "de" ? Nr() : n === "es" ? Ar() : n === "fr" ? Lr() : n === "it" ? Pr() : n === "jp" ? kr() : n === "pl" ? Rr() : n === "ru" ? Or() : n === "uk" ? Mr() : Br()
  },
  Ur = () => "Resend Code",
  Wr = () => "Reenviar Código",
  Vr = () => "重新发送验证码",
  Fr = () => "Code erneut senden",
  jr = () => "Reenviar código",
  zr = () => "Renvoyer le code",
  Gr = () => "Reinvia codice",
  Kr = () => "コードを再送信",
  qr = () => "Wyślij kod ponownie",
  Yr = () => "Отправить код ещё раз",
  Xr = () => "Надіслати код ще раз",
  Zr = () => "Gửi lại mã",
  Qr = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Ur() : n === "pt" ? Wr() : n === "ch" ? Vr() : n === "de" ? Fr() : n === "es" ? jr() : n === "fr" ? zr() : n === "it" ? Gr() : n === "jp" ? Kr() : n === "pl" ? qr() : n === "ru" ? Yr() : n === "uk" ? Xr() : Zr()
  },
  Jr = () => "Send Code",
  $r = () => "Enviar o código",
  to = () => "发送验证码",
  eo = () => "Code senden",
  no = () => "Enviar código",
  io = () => "Envoyer le code",
  ro = () => "Invia codice",
  oo = () => "コードを送信",
  so = () => "Wyślij kod",
  ao = () => "Отправить код",
  lo = () => "Надіслати код",
  uo = () => "Gửi mã",
  co = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Jr() : n === "pt" ? $r() : n === "ch" ? to() : n === "de" ? eo() : n === "es" ? no() : n === "fr" ? io() : n === "it" ? ro() : n === "jp" ? oo() : n === "pl" ? so() : n === "ru" ? ao() : n === "uk" ? lo() : uo()
  },
  ho = o => `Sent to ${o.phone}`,
  fo = o => `Enviado para ${o.phone}`,
  mo = o => `已发送至 ${o.phone}`,
  po = o => `An ${o.phone} gesendet`,
  _o = o => `Enviado a ${o.phone}`,
  go = o => `Envoyé à ${o.phone}`,
  vo = o => `Inviato a ${o.phone}`,
  yo = o => `${o.phone} に送信しました`,
  Co = o => `Wysłano na ${o.phone}`,
  bo = o => `Отправлено на ${o.phone}`,
  wo = o => `Надіслано на ${o.phone}`,
  Io = o => `Đã gửi tới ${o.phone}`,
  Eo = (o, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? ho(o) : n === "pt" ? fo(o) : n === "ch" ? mo(o) : n === "de" ? po(o) : n === "es" ? _o(o) : n === "fr" ? go(o) : n === "it" ? vo(o) : n === "jp" ? yo(o) : n === "pl" ? Co(o) : n === "ru" ? bo(o) : n === "uk" ? wo(o) : Io(o)
  },
  To = o => `Code sent to ${o.phone} via ${o.channel}`,
  Do = o => `Código enviado para ${o.phone} via ${o.channel}`,
  So = o => `验证码已通过${o.channel}发送至${o.phone}`,
  xo = o => `Code an ${o.phone} per ${o.channel} gesendet`,
  No = o => `Código enviado a ${o.phone} por ${o.channel}`,
  Ao = o => `Code envoyé à ${o.phone} par ${o.channel}`,
  Lo = o => `Codice inviato a ${o.phone} tramite ${o.channel}`,
  Po = o => `コードを${o.channel}で${o.phone}に送信しました`,
  ko = o => `Kod wysłany do ${o.phone} przez ${o.channel}`,
  Ro = o => `Код отправлен на ${o.phone} через ${o.channel}`,
  Oo = o => `Код надіслано на ${o.phone} через ${o.channel}`,
  Mo = o => `Mã đã được gửi tới ${o.phone} qua ${o.channel}`,
  Bo = (o, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? To(o) : n === "pt" ? Do(o) : n === "ch" ? So(o) : n === "de" ? xo(o) : n === "es" ? No(o) : n === "fr" ? Ao(o) : n === "it" ? Lo(o) : n === "jp" ? Po(o) : n === "pl" ? ko(o) : n === "ru" ? Ro(o) : n === "uk" ? Oo(o) : Mo(o)
  },
  Ho = () => "Try another number",
  Uo = () => "Tentar outro número",
  Wo = () => "请尝试使用其他号码",
  Vo = () => "Andere Nummer versuchen",
  Fo = () => "Prueba con otro número",
  jo = () => "Essayez un autre numéro",
  zo = () => "Prova un altro numero",
  Go = () => "別の番号をお試しください。",
  Ko = () => "Spróbuj innego numeru",
  qo = () => "Попробуйте другой номер",
  Yo = () => "Спробувати інший номер",
  Xo = () => "Thử số khác",
  Zo = (o = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Ho() : n === "pt" ? Uo() : n === "ch" ? Wo() : n === "de" ? Vo() : n === "es" ? Fo() : n === "fr" ? jo() : n === "it" ? zo() : n === "jp" ? Go() : n === "pl" ? Ko() : n === "ru" ? qo() : n === "uk" ? Yo() : Xo()
  },
  Qo = Array(12).fill(0);
var Jo = ft('<div class="sonner-loading-bar"></div>'),
  $o = ft('<div><div class="sonner-spinner"></div></div>');

function ts(o, t) {
  Yt(t, !0);
  var n = $o(),
    f = nt(n);
  Ze(f, 23, () => Qo, (_, w) => `spinner-bar-${w}`, (_, w) => {
    var S = Jo();
    g(_, S)
  }), J(f), J(n), Tt(_ => {
    Qt(n, 1, _), bt(n, "data-visible", t.visible)
  }, [() => le(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), g(o, n), Xt()
}
const es = typeof window < "u" ? window : void 0;

function ns(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var Ce, Oe;
class is {
  constructor(t = {}) {
    vt(this, Ce);
    vt(this, Oe);
    const {
      window: n = es,
      document: f = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (me(this, Ce, f), me(this, Oe, ei(_ => {
      const w = Re(n, "focusin", _),
        S = Re(n, "focusout", _);
      return () => {
        w(), S()
      }
    })))
  }
  get current() {
    var t;
    return (t = v(this, Oe)) == null || t.call(this), v(this, Ce) ? ns(v(this, Ce)) : null
  }
}
Ce = new WeakMap, Oe = new WeakMap;
new is;
var Me, ue;
class rs {
  constructor(t) {
    vt(this, Me);
    vt(this, ue);
    me(this, Me, t), me(this, ue, Symbol(t))
  }
  get key() {
    return v(this, ue)
  }
  exists() {
    return Jn(v(this, ue))
  }
  get() {
    const t = En(v(this, ue));
    if (t === void 0) throw new Error(`Context "${v(this,Me)}" not found`);
    return t
  }
  getOr(t) {
    const n = En(v(this, ue));
    return n === void 0 ? t : n
  }
  set(t) {
    return $n(v(this, ue), t)
  }
}
Me = new WeakMap, ue = new WeakMap;
const os = new rs("<Toaster/>");

function Ke(o) {
  return o.label !== void 0
}

function ss() {
  let o = tt(gn(typeof document < "u" ? document.hidden : !1));
  return Mt(() => Re(document, "visibilitychange", () => {
    p(o, document.hidden, !0)
  })), {
    get current() {
      return r(o)
    }
  }
}
const Ln = 4e3,
  as = 14,
  ls = 45,
  us = 200,
  cs = .05,
  ds = {
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

function hs(o) {
  const [t, n] = o.split("-"), f = [];
  return t && f.push(t), n && f.push(n), f
}

function Pn(o) {
  return 1 / (1.5 + Math.abs(o) / 20)
}
var fs = ft("<div><!></div>"),
  ms = ft('<button data-close-button=""><!></button>'),
  ps = ft('<div data-icon=""><!> <!></div>'),
  _s = ft('<div data-description=""><!></div>'),
  gs = ft('<button data-button="" data-cancel=""> </button>'),
  vs = ft('<button data-button=""> </button>'),
  ys = ft('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Cs = ft('<li data-sonner-toast=""><!> <!></li>');

function bs(o, t) {
  Yt(t, !0);
  const n = k => {
    var U = $(),
      rt = G(U);
    {
      var ut = m => {
          var Lt = fs(),
            l = nt(Lt);
          Ut(l, () => t.loadingIcon), J(Lt), Tt(e => {
            Qt(Lt, 1, e), bt(Lt, "data-visible", r(O) === "loading")
          }, [() => {
            var e, i, s;
            return le(ae((e = r(Z)) == null ? void 0 : e.loader, (s = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), g(m, Lt)
        },
        et = m => {
          {
            let Lt = E(() => {
                var e, i;
                return ae((e = r(Z)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              l = E(() => r(O) === "loading");
            ts(m, {
              get class() {
                return r(Lt)
              },
              get visible() {
                return r(l)
              }
            })
          }
        };
      st(rt, m => {
        t.loadingIcon ? m(ut) : m(et, -1)
      })
    }
    g(k, U)
  };
  let f = P(t, "cancelButtonStyle", 3, ""),
    _ = P(t, "actionButtonStyle", 3, ""),
    w = P(t, "descriptionClass", 3, ""),
    S = P(t, "unstyled", 3, !1),
    B = P(t, "defaultRichColors", 3, !1);
  const W = {
    ...ds
  };
  let A = tt(!1),
    y = tt(!1),
    T = tt(!1),
    N = tt(!1),
    Y = tt(!1),
    H = tt(0),
    X = tt(0),
    R = t.toast.duration || t.duration || Ln,
    b = tt(void 0),
    D = tt(null),
    K = tt(null);
  const I = E(() => t.index === 0),
    j = E(() => t.index + 1 <= t.visibleToasts),
    O = E(() => t.toast.type),
    _t = E(() => t.toast.dismissable !== !1),
    Dt = E(() => t.toast.class || ""),
    x = E(() => t.toast.descriptionClass || ""),
    q = E(() => Ot.heights.findIndex(k => k.toastId === t.toast.id) || 0),
    dt = E(() => t.toast.closeButton ?? t.closeButton),
    Nt = E(() => t.toast.duration ?? t.duration ?? Ln);
  let xt = null;
  const At = E(() => t.position.split("-")),
    Bt = E(() => Ot.heights.reduce((k, U, rt) => rt >= r(q) ? k : k + U.height, 0)),
    ee = ss(),
    at = E(() => t.toast.invert || t.invert),
    zt = E(() => r(O) === "loading"),
    Z = E(() => ({
      ...W,
      ...t.classes
    })),
    mt = E(() => t.toast.title),
    yt = E(() => t.toast.description);
  let Ct = tt(0),
    ne = tt(0);
  const L = E(() => Math.round(r(q) * as + r(Bt)));
  Mt(() => {
    r(mt), r(yt);
    let k;
    t.expanded || t.expandByDefault ? k = 1 : k = 1 - t.index * cs;
    const U = Pe(() => r(b));
    if (U === void 0) return;
    U.style.setProperty("height", "auto");
    const rt = U.offsetHeight,
      ut = U.getBoundingClientRect().height,
      et = Math.round(ut / k + Number.EPSILON & 100) / 100;
    U.style.removeProperty("height");
    let m;
    Math.abs(et - rt) < 1 ? m = et : m = rt, p(X, m, !0), Pe(() => {
      Ot.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function z() {
    p(y, !0), p(H, r(L), !0), Ot.removeHeight(t.toast.id), setTimeout(() => {
      Ot.remove(t.toast.id)
    }, us)
  }
  let wt;
  const lt = E(() => t.toast.promise && r(O) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Wt() {
    p(Ct, new Date().getTime(), !0), wt = setTimeout(() => {
      var k, U;
      (U = (k = t.toast).onAutoClose) == null || U.call(k, t.toast), z()
    }, R)
  }

  function $t() {
    if (r(ne) < r(Ct)) {
      const k = new Date().getTime() - r(Ct);
      R = R - k
    }
    p(ne, new Date().getTime(), !0)
  }
  Mt(() => {
    t.toast.updated && (clearTimeout(wt), R = r(Nt), Wt())
  }), Mt(() => (r(lt) || (t.expanded || t.interacting || ee.current ? $t() : Wt()), () => clearTimeout(wt))), he(() => {
    var U;
    p(A, !0);
    const k = (U = r(b)) == null ? void 0 : U.getBoundingClientRect().height;
    return p(X, k, !0), Ot.setHeight({
      toastId: t.toast.id,
      height: k
    }), () => {
      Ot.removeHeight(t.toast.id)
    }
  }), Mt(() => {
    t.toast.delete && Pe(() => {
      var k, U;
      z(), (U = (k = t.toast).onDismiss) == null || U.call(k, t.toast)
    })
  });
  const _e = k => {
      if (r(zt)) return;
      p(H, r(L), !0);
      const U = k.target;
      U.setPointerCapture(k.pointerId), U.tagName !== "BUTTON" && (p(T, !0), xt = {
        x: k.clientX,
        y: k.clientY
      })
    },
    ie = () => {
      var m, Lt, l, e, i, s;
      if (r(N) || !r(_t)) return;
      xt = null;
      const k = Number(((m = r(b)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        U = Number(((Lt = r(b)) == null ? void 0 : Lt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        rt = new Date().getTime() - 0,
        ut = r(D) === "x" ? k : U,
        et = Math.abs(ut) / rt;
      if (Math.abs(ut) >= ls || et > .11) {
        p(H, r(L), !0), (e = (l = t.toast).onDismiss) == null || e.call(l, t.toast), r(D) === "x" ? p(K, k > 0 ? "right" : "left", !0) : p(K, U > 0 ? "down" : "up", !0), z(), p(N, !0);
        return
      } else(i = r(b)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (s = r(b)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      p(Y, !1), p(T, !1), p(D, null)
    },
    Vt = k => {
      var Lt, l, e;
      if (!xt || !r(_t) || (((Lt = window.getSelection()) == null ? void 0 : Lt.toString().length) ?? -1) > 0) return;
      const rt = k.clientY - xt.y,
        ut = k.clientX - xt.x,
        et = t.swipeDirections ?? hs(t.position);
      !r(D) && (Math.abs(ut) > 1 || Math.abs(rt) > 1) && p(D, Math.abs(ut) > Math.abs(rt) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (r(D) === "y") {
        if (et.includes("top") || et.includes("bottom"))
          if (et.includes("top") && rt < 0 || et.includes("bottom") && rt > 0) m.y = rt;
          else {
            const i = rt * Pn(rt);
            m.y = Math.abs(i) < Math.abs(rt) ? i : rt
          }
      } else if (r(D) === "x" && (et.includes("left") || et.includes("right")))
        if (et.includes("left") && ut < 0 || et.includes("right") && ut > 0) m.x = ut;
        else {
          const i = ut * Pn(ut);
          m.x = Math.abs(i) < Math.abs(ut) ? i : ut
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && p(Y, !0), (l = r(b)) == null || l.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = r(b)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    Ft = () => {
      p(T, !1), p(D, null), xt = null
    },
    Pt = E(() => t.toast.icon ? t.toast.icon : r(O) === "success" ? t.successIcon : r(O) === "error" ? t.errorIcon : r(O) === "warning" ? t.warningIcon : r(O) === "info" ? t.infoIcon : r(O) === "loading" ? t.loadingIcon : null);
  var Q = Cs();
  bt(Q, "tabindex", 0);
  let fe;
  var Te = nt(Q);
  {
    var De = k => {
      var U = ms(),
        rt = nt(U);
      Ut(rt, () => t.closeIcon ?? qt), J(U), Tt(ut => {
        bt(U, "aria-label", t.closeButtonAriaLabel), bt(U, "data-disabled", r(zt)), Qt(U, 1, ut)
      }, [() => {
        var ut, et, m;
        return le(ae((ut = r(Z)) == null ? void 0 : ut.closeButton, (m = (et = t.toast) == null ? void 0 : et.classes) == null ? void 0 : m.closeButton))
      }]), oe("click", U, () => {
        var ut, et;
        r(zt) || !r(_t) || (z(), (et = (ut = t.toast).onDismiss) == null || et.call(ut, t.toast))
      }), g(k, U)
    };
    st(Te, k => {
      r(dt) && !t.toast.component && r(O) !== "loading" && t.closeIcon !== null && k(De)
    })
  }
  var Se = Et(Te, 2);
  {
    var ge = k => {
        const U = E(() => t.toast.component);
        var rt = $(),
          ut = G(rt);
        Jt(ut, () => r(U), (et, m) => {
          m(et, ke(() => t.toast.componentProps, {
            closeToast: z
          }))
        }), g(k, rt)
      },
      xe = k => {
        var U = ys(),
          rt = G(U);
        {
          var ut = h => {
            var d = ps(),
              C = nt(d);
            {
              var M = V => {
                var F = $(),
                  gt = G(F);
                {
                  var it = ot => {
                      var Gt = $(),
                        jt = G(Gt);
                      Jt(jt, () => t.toast.icon, (St, Rt) => {
                        Rt(St, {})
                      }), g(ot, Gt)
                    },
                    ht = ot => {
                      n(ot)
                    };
                  st(gt, ot => {
                    t.toast.icon ? ot(it) : ot(ht, -1)
                  })
                }
                g(V, F)
              };
              st(C, V => {
                (t.toast.promise || r(O) === "loading") && V(M)
              })
            }
            var pt = Et(C, 2);
            {
              var ct = V => {
                var F = $(),
                  gt = G(F);
                {
                  var it = St => {
                      var Rt = $(),
                        te = G(Rt);
                      Jt(te, () => t.toast.icon, (Yn, Xn) => {
                        Xn(Yn, {})
                      }), g(St, Rt)
                    },
                    ht = St => {
                      var Rt = $(),
                        te = G(Rt);
                      Ut(te, () => t.successIcon ?? qt), g(St, Rt)
                    },
                    ot = St => {
                      var Rt = $(),
                        te = G(Rt);
                      Ut(te, () => t.errorIcon ?? qt), g(St, Rt)
                    },
                    Gt = St => {
                      var Rt = $(),
                        te = G(Rt);
                      Ut(te, () => t.warningIcon ?? qt), g(St, Rt)
                    },
                    jt = St => {
                      var Rt = $(),
                        te = G(Rt);
                      Ut(te, () => t.infoIcon ?? qt), g(St, Rt)
                    };
                  st(gt, St => {
                    t.toast.icon ? St(it) : r(O) === "success" ? St(ht, 1) : r(O) === "error" ? St(ot, 2) : r(O) === "warning" ? St(Gt, 3) : r(O) === "info" && St(jt, 4)
                  })
                }
                g(V, F)
              };
              st(pt, V => {
                t.toast.type !== "loading" && V(ct)
              })
            }
            J(d), Tt(V => Qt(d, 1, V), [() => {
              var V, F, gt;
              return le(ae((V = r(Z)) == null ? void 0 : V.icon, (gt = (F = t.toast) == null ? void 0 : F.classes) == null ? void 0 : gt.icon))
            }]), g(h, d)
          };
          st(rt, h => {
            (r(O) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(Pt) !== null || t.toast.icon) && h(ut)
          })
        }
        var et = Et(rt, 2),
          m = nt(et),
          Lt = nt(m);
        {
          var l = h => {
            var d = $(),
              C = G(d);
            {
              var M = ct => {
                  const V = E(() => t.toast.title);
                  var F = $(),
                    gt = G(F);
                  Jt(gt, () => r(V), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), g(ct, F)
                },
                pt = ct => {
                  var V = Tn();
                  Tt(() => Ht(V, t.toast.title)), g(ct, V)
                };
              st(C, ct => {
                typeof t.toast.title != "string" ? ct(M) : ct(pt, -1)
              })
            }
            g(h, d)
          };
          st(Lt, h => {
            t.toast.title && h(l)
          })
        }
        J(m);
        var e = Et(m, 2);
        {
          var i = h => {
            var d = _s(),
              C = nt(d);
            {
              var M = ct => {
                  const V = E(() => t.toast.description);
                  var F = $(),
                    gt = G(F);
                  Jt(gt, () => r(V), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), g(ct, F)
                },
                pt = ct => {
                  var V = Tn();
                  Tt(() => Ht(V, t.toast.description)), g(ct, V)
                };
              st(C, ct => {
                typeof t.toast.description != "string" ? ct(M) : ct(pt, -1)
              })
            }
            J(d), Tt(ct => Qt(d, 1, ct), [() => {
              var ct, V;
              return le(ae(w(), r(x), (ct = r(Z)) == null ? void 0 : ct.description, (V = t.toast.classes) == null ? void 0 : V.description))
            }]), g(h, d)
          };
          st(e, h => {
            t.toast.description && h(i)
          })
        }
        J(et);
        var s = Et(et, 2);
        {
          var a = h => {
            var d = $(),
              C = G(d);
            {
              var M = V => {
                  var F = $(),
                    gt = G(F);
                  Jt(gt, () => t.toast.cancel, (it, ht) => {
                    ht(it, {})
                  }), g(V, F)
                },
                pt = V => {
                  var F = gs(),
                    gt = nt(F, !0);
                  J(F), Tt(it => {
                    un(F, t.toast.cancelButtonStyle ?? f()), Qt(F, 1, it), Ht(gt, t.toast.cancel.label)
                  }, [() => {
                    var it, ht, ot;
                    return le(ae((it = r(Z)) == null ? void 0 : it.cancelButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.cancelButton))
                  }]), oe("click", F, it => {
                    var ht, ot;
                    Ke(t.toast.cancel) && r(_t) && ((ot = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || ot.call(ht, it), z())
                  }), g(V, F)
                },
                ct = E(() => Ke(t.toast.cancel));
              st(C, V => {
                typeof t.toast.cancel == "function" ? V(M) : r(ct) && V(pt, 1)
              })
            }
            g(h, d)
          };
          st(s, h => {
            t.toast.cancel && h(a)
          })
        }
        var c = Et(s, 2);
        {
          var u = h => {
            var d = $(),
              C = G(d);
            {
              var M = V => {
                  var F = $(),
                    gt = G(F);
                  Jt(gt, () => t.toast.action, (it, ht) => {
                    ht(it, {})
                  }), g(V, F)
                },
                pt = V => {
                  var F = vs(),
                    gt = nt(F, !0);
                  J(F), Tt(it => {
                    un(F, t.toast.actionButtonStyle ?? _()), Qt(F, 1, it), Ht(gt, t.toast.action.label)
                  }, [() => {
                    var it, ht, ot;
                    return le(ae((it = r(Z)) == null ? void 0 : it.actionButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.actionButton))
                  }]), oe("click", F, it => {
                    var ht;
                    Ke(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(it), !it.defaultPrevented && z())
                  }), g(V, F)
                },
                ct = E(() => Ke(t.toast.action));
              st(C, V => {
                typeof t.toast.action == "function" ? V(M) : r(ct) && V(pt, 1)
              })
            }
            g(h, d)
          };
          st(c, h => {
            t.toast.action && h(u)
          })
        }
        Tt(h => Qt(m, 1, h), [() => {
          var h, d, C;
          return le(ae((h = r(Z)) == null ? void 0 : h.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), g(k, U)
      };
    st(Se, k => {
      t.toast.component ? k(ge) : k(xe, -1)
    })
  }
  J(Q), vn(Q, k => p(b, k), () => r(b)), Tt((k, U, rt) => {
    Qt(Q, 1, k), bt(Q, "data-rich-colors", t.toast.richColors ?? B()), bt(Q, "data-styled", !(t.toast.component || t.toast.unstyled || S())), bt(Q, "data-mounted", r(A)), bt(Q, "data-promise", U), bt(Q, "data-swiped", r(Y)), bt(Q, "data-removed", r(y)), bt(Q, "data-visible", r(j)), bt(Q, "data-y-position", r(At)[0]), bt(Q, "data-x-position", r(At)[1]), bt(Q, "data-index", t.index), bt(Q, "data-front", r(I)), bt(Q, "data-swiping", r(T)), bt(Q, "data-dismissable", r(_t)), bt(Q, "data-type", r(O)), bt(Q, "data-invert", r(at)), bt(Q, "data-swipe-out", r(N)), bt(Q, "data-swipe-direction", r(K)), bt(Q, "data-expanded", rt), fe = un(Q, `${t.style} ${t.toast.style}`, fe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Ot.toasts.length - t.index,
      "--offset": `${r(y)?r(H):r(L)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(X)}px`
    })
  }, [() => {
    var k, U, rt, ut, et, m;
    return le(ae(t.class, r(Dt), (k = r(Z)) == null ? void 0 : k.toast, (rt = (U = t.toast) == null ? void 0 : U.classes) == null ? void 0 : rt.toast, (ut = r(Z)) == null ? void 0 : ut[r(O)], (m = (et = t.toast) == null ? void 0 : et.classes) == null ? void 0 : m[r(O)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(A))]), oe("pointermove", Q, Vt), oe("pointerup", Q, ie), oe("pointerdown", Q, _e), nn("dragend", Q, Ft), g(o, Q), Xt()
}
rn(["pointermove", "pointerup", "pointerdown", "click"]);
var ws = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Is(o) {
  var t = ws();
  g(o, t)
}
var Es = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Ts(o) {
  var t = Es();
  g(o, t)
}
var Ds = Ge('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Ss(o) {
  var t = Ds();
  g(o, t)
}
var xs = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Ns(o) {
  var t = xs();
  g(o, t)
}
var As = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function Ls(o) {
  var t = As();
  g(o, t)
}
const Ps = 3,
  Wn = "24px",
  Vn = "16px",
  ks = 4e3,
  Rs = 356,
  Os = 14,
  cn = "dark",
  qe = "light";

function Ms(o, t) {
  const n = {};
  return [o, t].forEach((f, _) => {
    const w = _ === 1,
      S = w ? "--mobile-offset" : "--offset",
      B = w ? Vn : Wn;

    function W(A) {
      ["top", "right", "bottom", "left"].forEach(y => {
        n[`${S}-${y}`] = typeof A == "number" ? `${A}px` : A
      })
    }
    typeof f == "number" || typeof f == "string" ? W(f) : typeof f == "object" ? ["top", "right", "bottom", "left"].forEach(A => {
      const y = f[A];
      y === void 0 ? n[`${S}-${A}`] = B : n[`${S}-${A}`] = typeof y == "number" ? `${y}px` : y
    }) : W(B)
  }), n
}
var Bs = new Set(["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]),
  Hs = ft("<ol></ol>"),
  Us = ft('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>');

function Ws(o, t) {
  Yt(t, !0);

  function n(L) {
    return L !== "system" ? L : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? cn : qe
  }
  let f = P(t, "invert", 3, !1),
    _ = P(t, "position", 3, "bottom-right"),
    w = P(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    S = P(t, "expand", 3, !1),
    B = P(t, "closeButton", 3, !1),
    W = P(t, "offset", 3, Wn),
    A = P(t, "mobileOffset", 3, Vn),
    y = P(t, "theme", 3, "light"),
    T = P(t, "richColors", 3, !1),
    N = P(t, "duration", 3, ks),
    Y = P(t, "visibleToasts", 3, Ps),
    H = P(t, "toastOptions", 19, () => ({})),
    X = P(t, "dir", 7, "auto"),
    R = P(t, "gap", 3, Os),
    b = P(t, "containerAriaLabel", 3, "Notifications"),
    D = P(t, "closeButtonAriaLabel", 3, "Close toast"),
    K = Ee(t, Bs);

  function I() {
    if (X() !== "auto") return X();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const L = document.documentElement.getAttribute("dir");
    return L === "auto" || !L ? (Pe(() => X(window.getComputedStyle(document.documentElement).direction ?? "ltr")), X()) : (Pe(() => X(L)), L)
  }
  const j = E(() => Array.from(new Set([_(), ...Ot.toasts.filter(L => L.position).map(L => L.position)].filter(Boolean))));
  let O = tt(!1),
    _t = tt(!1),
    Dt = tt(gn(n(y()))),
    x = tt(void 0),
    q = tt(null),
    dt = tt(!1);
  const Nt = E(() => w().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Mt(() => {
    Ot.toasts.length <= 1 && p(O, !1)
  }), Mt(() => {
    const L = Ot.toasts.filter(z => z.dismiss && !z.delete);
    if (L.length > 0) {
      const z = Ot.toasts.map(wt => L.find(Wt => Wt.id === wt.id) ? {
        ...wt,
        delete: !0
      } : wt);
      Ot.toasts = z
    }
  }), Mt(() => () => {
    r(x) && r(q) && (r(q).focus({
      preventScroll: !0
    }), p(q, null), p(dt, !1))
  }), he(() => (Ot.reset(), Re(document, "keydown", z => {
    var lt, Wt;
    w().every($t => z[$t] || z.code === $t) && (p(O, !0), (lt = r(x)) == null || lt.focus()), z.code === "Escape" && (document.activeElement === r(x) || (Wt = r(x)) != null && Wt.contains(document.activeElement)) && p(O, !1)
  }))), Mt(() => {
    if (y() !== "system" && p(Dt, y()), typeof window < "u") {
      y() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? p(Dt, cn) : p(Dt, qe));
      const L = window.matchMedia("(prefers-color-scheme: dark)"),
        z = ({
          matches: wt
        }) => {
          p(Dt, wt ? cn : qe, !0)
        };
      "addEventListener" in L ? L.addEventListener("change", z) : L.addListener(z)
    }
  });
  const xt = L => {
      var z;
      (z = t.onblur) == null || z.call(t, L), r(dt) && !L.currentTarget.contains(L.relatedTarget) && (p(dt, !1), r(q) && (r(q).focus({
        preventScroll: !0
      }), p(q, null)))
    },
    At = L => {
      var wt;
      (wt = t.onfocus) == null || wt.call(t, L), !(L.target instanceof HTMLElement && L.target.dataset.dismissable === "false") && (r(dt) || (p(dt, !0), p(q, L.relatedTarget, !0)))
    },
    Bt = L => {
      var wt;
      (wt = t.onpointerdown) == null || wt.call(t, L), !(L.target instanceof HTMLElement && L.target.dataset.dismissable === "false") && p(_t, !0)
    },
    ee = L => {
      var z;
      (z = t.onmouseenter) == null || z.call(t, L), p(O, !0)
    },
    at = L => {
      var z;
      (z = t.onmouseleave) == null || z.call(t, L), r(_t) || p(O, !1)
    },
    zt = L => {
      var z;
      (z = t.onmousemove) == null || z.call(t, L), p(O, !0)
    },
    Z = L => {
      var z;
      (z = t.ondragend) == null || z.call(t, L), p(O, !1)
    },
    mt = L => {
      var z;
      (z = t.onpointerup) == null || z.call(t, L), p(_t, !1)
    };
  os.set(new ii);
  var yt = Us();
  bt(yt, "tabindex", -1);
  var Ct = nt(yt);
  {
    var ne = L => {
      var z = $(),
        wt = G(z);
      Ze(wt, 18, () => r(j), lt => lt, (lt, Wt, $t, _e) => {
        const ie = E(() => {
            const [Pt, Q] = Wt.split("-");
            return {
              y: Pt,
              x: Q
            }
          }),
          Vt = E(() => Ms(W(), A()));
        var Ft = Hs();
        ye(Ft, Pt => {
          var Q;
          return {
            tabindex: -1,
            dir: Pt,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(Dt),
            "data-y-position": r(ie).y,
            "data-x-position": r(ie).x,
            style: t.style,
            onblur: xt,
            onfocus: At,
            onmouseenter: ee,
            onmousemove: zt,
            onmouseleave: at,
            ondragend: Z,
            onpointerdown: Bt,
            onpointerup: mt,
            ...K,
            [bi]: {
              "--front-toast-height": `${(Q=Ot.heights[0])==null?void 0:Q.height}px`,
              "--width": `${Rs}px`,
              "--gap": `${R()}px`,
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
        }, [() => I()], void 0, void 0, "svelte-wiukfn"), Ze(Ft, 23, () => Ot.toasts.filter(Pt => !Pt.position && r($t) === 0 || Pt.position === Wt), Pt => Pt.id, (Pt, Q, fe, Te) => {
          {
            const De = s => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        M = G(C);
                      Ut(M, () => t.successIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Is(d)
                    };
                  st(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(h, 1)
                  })
                }
                g(s, a)
              },
              Se = s => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        M = G(C);
                      Ut(M, () => t.errorIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ts(d)
                    };
                  st(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(h, 1)
                  })
                }
                g(s, a)
              },
              ge = s => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        M = G(C);
                      Ut(M, () => t.warningIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ss(d)
                    };
                  st(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(h, 1)
                  })
                }
                g(s, a)
              },
              xe = s => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        M = G(C);
                      Ut(M, () => t.infoIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ns(d)
                    };
                  st(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(h, 1)
                  })
                }
                g(s, a)
              },
              k = s => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        M = G(C);
                      Ut(M, () => t.closeIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ls(d)
                    };
                  st(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(h, 1)
                  })
                }
                g(s, a)
              };
            let U = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.duration) ?? N()
              }),
              rt = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.class) ?? ""
              }),
              ut = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.descriptionClass) || ""
              }),
              et = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.style) ?? ""
              }),
              m = E(() => H().classes || {}),
              Lt = E(() => H().unstyled ?? !1),
              l = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              i = E(() => {
                var s;
                return ((s = H()) == null ? void 0 : s.closeButtonAriaLabel) ?? D()
              });
            bs(Pt, {
              get index() {
                return r(fe)
              },
              get toast() {
                return r(Q)
              },
              get defaultRichColors() {
                return T()
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
                return Y()
              },
              get closeButton() {
                return B()
              },
              get interacting() {
                return r(_t)
              },
              get position() {
                return Wt
              },
              get style() {
                return r(et)
              },
              get classes() {
                return r(m)
              },
              get unstyled() {
                return r(Lt)
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
                return S()
              },
              get expanded() {
                return r(O)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: De,
              errorIcon: Se,
              warningIcon: ge,
              infoIcon: xe,
              closeIcon: k,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), J(Ft), vn(Ft, Pt => p(x, Pt), () => r(x)), Tt(() => Ft.dir = Ft.dir), g(lt, Ft)
      }), g(L, z)
    };
    st(Ct, L => {
      Ot.toasts.length > 0 && L(ne)
    })
  }
  J(yt), Tt(() => bt(yt, "aria-label", `${b()??""} ${r(Nt)??""}`)), g(o, yt), Xt()
}
let Ne = tt(!1);
var Vs = ft("<div></div>"),
  Fs = ft('<button type="button" class="btn">Retry</button>'),
  js = ft('<span class="loading loading-spinner loading-lg"></span>'),
  zs = ft('<div class="flex h-16 items-center justify-center"><!></div>');

function Gs(o, t) {
  Yt(t, !0);
  let n = P(t, "theme", 19, () => hn.theme === "dark" ? "dark" : "light"),
    f = P(t, "size", 3, "normal");
  const _ = E(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: f(),
      callback: R => {
        var b;
        return (b = t.callback) == null ? void 0 : b.call(t, R)
      },
      "error-callback": R => {
        var b;
        return (b = t.errorCallback) == null ? void 0 : b.call(t, R)
      },
      "expired-callback": () => {
        var R;
        return (R = t.expiredCallback) == null ? void 0 : R.call(t)
      }
    })),
    w = (R, b) => {
      var K;
      let D = window.hcaptcha.render(R, b);
      return (K = t.onload) == null || K.call(t), {
        destroy() {
          var I;
          (I = window.hcaptcha) == null || I.remove(D)
        },
        update(I) {
          var j;
          (j = window.hcaptcha) == null || j.remove(D), D = window.hcaptcha.render(R, I)
        }
      }
    };
  let S = tt(!1),
    B = tt(!1),
    W;

  function A() {
    const R = document.createElement("script");
    R.type = "text/javascript", R.src = "https://js.hcaptcha.com/1/api.js?render=explicit", R.async = !0, R.defer = !0, R.addEventListener("load", () => p(Ne, !0), {
      once: !0
    }), document.head.appendChild(R)
  }

  function y() {
    p(B, !1), W && clearTimeout(W), W = setTimeout(() => {
      (!r(Ne) || !r(S)) && p(B, !0)
    }, 5e3)
  }

  function T() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(R => R.remove()), p(Ne, !1), A(), y()
  }
  he(() => (p(S, !0), r(Ne) || A(), y(), () => {
    p(S, !1), W && clearTimeout(W)
  }));
  var N = $(),
    Y = G(N);
  {
    var H = R => {
        var b = Vs();
        Hn(b, (D, K) => w == null ? void 0 : w(D, K), () => r(_)), g(R, b)
      },
      X = R => {
        var b = zs(),
          D = nt(b);
        {
          var K = j => {
              var O = Fs();
              oe("click", O, T), g(j, O)
            },
            I = j => {
              var O = js();
              g(j, O)
            };
          st(D, j => {
            r(B) ? j(K) : j(I, -1)
          })
        }
        J(b), g(R, b)
      };
    st(Y, R => {
      r(Ne) && r(S) ? R(H) : R(X, -1)
    })
  }
  g(o, N), Xt()
}
rn(["click"]);

function yn(...o) {
  return Ei(wi(o))
}
var Ks = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "children"]),
  qs = ft("<div><!></div>");

function Ys(o, t) {
  Yt(t, !0);
  let n = P(t, "ref", 15, null),
    f = Ee(t, Ks);
  var _ = qs();
  ye(_, S => ({
    class: S,
    ...f
  }), [() => yn("flex items-center", t.class)]);
  var w = nt(_);
  Ut(w, () => t.children ?? qt), J(_), vn(_, S => n(S), () => n()), g(o, _), Xt()
}
var Be, Qe;
class Xs {
  constructor(t, n) {
    vt(this, Be, () => {});
    vt(this, Qe, E(() => v(this, Be).call(this)));
    let f;
    n !== void 0 && (f = n), me(this, Be, () => {
      try {
        return f
      } finally {
        f = t()
      }
    })
  }
  get current() {
    return r(v(this, Qe))
  }
}
Be = new WeakMap, Qe = new WeakMap;
const Zs = 1,
  Qs = 9,
  Js = 11;

function $s(o) {
  return on(o) && o.nodeType === Zs && typeof o.nodeName == "string"
}

function Fn(o) {
  return on(o) && o.nodeType === Qs
}

function ta(o) {
  var t;
  return on(o) && ((t = o.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function ea(o) {
  return on(o) && o.nodeType !== void 0
}

function na(o) {
  return ea(o) && o.nodeType === Js && "host" in o
}

function ia(o) {
  return Fn(o) ? o : ta(o) ? o.document : (o == null ? void 0 : o.ownerDocument) ?? document
}

function jn(o) {
  var t;
  return na(o) ? jn(o.host) : Fn(o) ? o.defaultView ?? window : $s(o) ? ((t = o.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function ra(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var He;
class oa {
  constructor(t) {
    It(this, "element");
    vt(this, He, E(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    It(this, "getDocument", () => ia(this.root));
    It(this, "getWindow", () => this.getDocument().defaultView ?? window);
    It(this, "getActiveElement", () => ra(this.root));
    It(this, "isActiveElement", t => t === this.getActiveElement());
    It(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    It(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    It(this, "setTimeout", (t, n) => this.getWindow().setTimeout(t, n));
    It(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = kt(t) : this.element = t
  }
  get root() {
    return r(v(this, He))
  }
  set root(t) {
    p(v(this, He), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
He = new WeakMap;
const sa = 18,
  zn = 40,
  aa = `${zn}px`,
  la = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function ua({
  containerRef: o,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: f,
  domContext: _
}) {
  let w = tt(!1),
    S = tt(!1),
    B = tt(!1);

  function W() {
    const y = n.current;
    return y === "none" ? !1 : y === "increase-width" && r(w) && r(S)
  }

  function A() {
    const y = o.current,
      T = t.current;
    if (!y || !T || r(B) || n.current === "none") return;
    const N = y,
      Y = N.getBoundingClientRect().left + N.offsetWidth,
      H = N.getBoundingClientRect().top + N.offsetHeight / 2,
      X = Y - sa,
      R = H;
    _.querySelectorAll(la).length === 0 && _.getDocument().elementFromPoint(X, R) === y || (p(w, !0), p(B, !0))
  }
  return Mt(() => {
    const y = o.current;
    if (!y || n.current === "none") return;

    function T() {
      const H = jn(y).innerWidth - y.getBoundingClientRect().right;
      p(S, H >= zn)
    }
    T();
    const N = setInterval(T, 1e3);
    return () => {
      clearInterval(N)
    }
  }), Mt(() => {
    const y = f.current || _.getActiveElement() === t.current;
    if (n.current === "none" || !y) return;
    const T = setTimeout(A, 0),
      N = setTimeout(A, 2e3),
      Y = setTimeout(A, 5e3),
      H = setTimeout(() => {
        p(B, !0)
      }, 6e3);
    return () => {
      clearTimeout(T), clearTimeout(N), clearTimeout(Y), clearTimeout(H)
    }
  }), {
    get hasPwmBadge() {
      return r(w)
    },
    get willPushPwmBadge() {
      return W()
    },
    PWM_BADGE_SPACE_WIDTH: aa
  }
}
const Gn = _i({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  ca = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var be, ce, Kt, Zt, we, re, de, pe, Ie, Je, Ue, We, $e, tn, Kn, Ve, Fe, en, je;
const Cn = class Cn {
  constructor(t) {
    vt(this, tn);
    It(this, "opts");
    It(this, "attachment");
    It(this, "inputAttachment");
    vt(this, be, tt(!1));
    vt(this, ce, fi(!1));
    vt(this, Kt, tt(null));
    vt(this, Zt, tt(null));
    vt(this, we, new Xs(() => this.opts.value.current ?? ""));
    vt(this, re, E(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    vt(this, de, tt(gn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    vt(this, pe);
    vt(this, Ie);
    It(this, "domContext");
    It(this, "onkeydown", t => {
      const n = t.key;
      ca.includes(n) || t.ctrlKey || t.metaKey || n && r(v(this, re)) && !r(v(this, re)).test(n) && t.preventDefault()
    });
    vt(this, Je, E(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    vt(this, Ue, E(() => ({
      id: this.opts.id.current,
      [Gn.root]: "",
      style: r(v(this, Je)),
      ...this.attachment
    })));
    vt(this, We, E(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    vt(this, $e, E(() => ({
      position: "absolute",
      inset: 0,
      width: v(this, pe).willPushPwmBadge ? `calc(100% + ${v(this,pe).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: v(this, pe).willPushPwmBadge ? `inset(0 ${v(this,pe).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
    vt(this, Ve, () => {
      var X;
      const t = this.opts.inputRef.current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        p(v(this, Kt), null), p(v(this, Zt), null);
        return
      }
      const f = t.selectionStart,
        _ = t.selectionEnd,
        w = t.selectionDirection ?? "none",
        S = t.maxLength,
        B = t.value,
        W = r(v(this, de)).prev;
      let A = -1,
        y = -1,
        T;
      if (B.length !== 0 && f !== null && _ !== null) {
        const R = f === _,
          b = f === B.length && B.length < S;
        if (R && !b) {
          const D = f;
          if (D === 0) A = 0, y = 1, T = "forward";
          else if (D === S) A = D - 1, y = D, T = "backward";
          else if (S > 1 && B.length > 1) {
            let K = 0;
            if (W[0] !== null && W[1] !== null) {
              T = D < W[1] ? "backward" : "forward";
              const I = W[0] === W[1] && W[0] < S;
              T === "backward" && !I && (K = -1)
            }
            A = K + D, y = K + D + 1
          }
        }
        A !== -1 && y !== -1 && A !== y && ((X = this.opts.inputRef.current) == null || X.setSelectionRange(A, y, T))
      }
      const N = A !== -1 ? A : f,
        Y = y !== -1 ? y : _,
        H = T ?? w;
      p(v(this, Kt), N, !0), p(v(this, Zt), Y, !0), r(v(this, de)).prev = [N, Y, H]
    });
    It(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(v(this, re)) && !r(v(this, re)).test(n)) {
        t.preventDefault();
        return
      }
      typeof v(this, we).current == "string" && n.length < v(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    It(this, "onfocus", t => {
      const n = this.opts.inputRef.current;
      if (n) {
        const f = Math.min(n.value.length, this.opts.maxLength.current - 1),
          _ = n.value.length;
        n.setSelectionRange(f, _), p(v(this, Kt), f, !0), p(v(this, Zt), _, !0)
      }
      v(this, ce).current = !0
    });
    It(this, "onpaste", t => {
      var y, T, N, Y;
      const n = this.opts.inputRef.current;
      if (!n) return;
      const f = H => {
          const X = n.selectionStart === null ? void 0 : n.selectionStart,
            R = n.selectionEnd === null ? void 0 : n.selectionEnd,
            b = X !== R,
            D = this.opts.value.current;
          return (b ? D.slice(0, X) + H + D.slice(R) : D.slice(0, X) + H + D.slice(X)).slice(0, this.opts.maxLength.current)
        },
        _ = H => H.length > 0 && r(v(this, re)) && !r(v(this, re)).test(H);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!v(this, Ie).isIOS || !t.clipboardData || !n)) {
        const H = f((T = t.clipboardData) == null ? void 0 : T.getData("text/plain"));
        _(H) && t.preventDefault();
        return
      }
      const w = ((N = t.clipboardData) == null ? void 0 : N.getData("text/plain")) ?? "",
        S = (Y = this.opts.pasteTransformer) != null && Y.current ? this.opts.pasteTransformer.current(w) : w;
      t.preventDefault();
      const B = f(S);
      if (_(B)) return;
      n.value = B, this.opts.value.current = B;
      const W = Math.min(B.length, this.opts.maxLength.current - 1),
        A = B.length;
      n.setSelectionRange(W, A), p(v(this, Kt), W, !0), p(v(this, Zt), A, !0)
    });
    It(this, "onmouseover", t => {
      p(v(this, be), !0)
    });
    It(this, "onmouseleave", t => {
      p(v(this, be), !1)
    });
    It(this, "onblur", t => {
      if (r(v(this, de)).willSyntheticBlur) {
        r(v(this, de)).willSyntheticBlur = !1;
        return
      }
      v(this, ce).current = !1
    });
    vt(this, Fe, E(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(v(this, $e)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(v(this, Kt)),
        "data-pin-input-input-mse": r(v(this, Zt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(v(this, re))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: pi(this.opts.disabled.current),
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
    vt(this, en, E(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const f = v(this, ce).current && r(v(this, Kt)) !== null && r(v(this, Zt)) !== null && (r(v(this, Kt)) === r(v(this, Zt)) && n === r(v(this, Kt)) || n >= r(v(this, Kt)) && n < r(v(this, Zt))),
        _ = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: _,
        isActive: f,
        hasFakeCaret: f && _ === null
      }
    })));
    vt(this, je, E(() => ({
      cells: r(v(this, en)),
      isFocused: v(this, ce).current,
      isHovering: r(v(this, be))
    })));
    var n;
    this.opts = t, this.attachment = fn(this.opts.ref), this.inputAttachment = fn(this.opts.inputRef), this.domContext = new oa(t.ref), me(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), me(this, pe, ua({
      containerRef: this.opts.ref,
      inputRef: this.opts.inputRef,
      isFocused: v(this, ce),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), he(() => {
      const f = this.opts.inputRef.current,
        _ = this.opts.ref.current;
      if (!f || !_) return;
      v(this, Ie).value.current !== f.value && (this.opts.value.current = f.value), r(v(this, de)).prev = [f.selectionStart, f.selectionEnd, f.selectionDirection ?? "none"];
      const w = Re(this.domContext.getDocument(), "selectionchange", v(this, Ve), {
        capture: !0
      });
      v(this, Ve).call(this), this.domContext.getActiveElement() === f && (v(this, ce).current = !0), this.domContext.getElementById("pin-input-style") || In(this, tn, Kn).call(this);
      const S = () => {
        _ && _.style.setProperty("--bits-pin-input-root-height", `${f.clientHeight}px`)
      };
      S();
      const B = new ResizeObserver(S);
      return B.observe(f), () => {
        w(), B.disconnect()
      }
    }), mi([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
      da(() => {
        const f = this.opts.inputRef.current;
        if (!f) return;
        f.dispatchEvent(new Event("input"));
        const _ = f.selectionStart,
          w = f.selectionEnd,
          S = f.selectionDirection ?? "none";
        _ !== null && w !== null && (p(v(this, Kt), _, !0), p(v(this, Zt), w, !0), r(v(this, de)).prev = [_, w, S])
      }, this.domContext)
    }), Mt(() => {
      const f = this.opts.value.current,
        _ = v(this, we).current,
        w = this.opts.maxLength.current,
        S = this.opts.onComplete.current;
      _ !== void 0 && f !== _ && _.length < w && f.length === w && S(f)
    })
  }
  static create(t) {
    return new Cn(t)
  }
  get rootProps() {
    return r(v(this, Ue))
  }
  set rootProps(t) {
    p(v(this, Ue), t)
  }
  get inputWrapperProps() {
    return r(v(this, We))
  }
  set inputWrapperProps(t) {
    p(v(this, We), t)
  }
  get inputProps() {
    return r(v(this, Fe))
  }
  set inputProps(t) {
    p(v(this, Fe), t)
  }
  get snippetProps() {
    return r(v(this, je))
  }
  set snippetProps(t) {
    p(v(this, je), t)
  }
};
be = new WeakMap, ce = new WeakMap, Kt = new WeakMap, Zt = new WeakMap, we = new WeakMap, re = new WeakMap, de = new WeakMap, pe = new WeakMap, Ie = new WeakMap, Je = new WeakMap, Ue = new WeakMap, We = new WeakMap, $e = new WeakMap, tn = new WeakSet, Kn = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const f = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Ae(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Ae(n.sheet, `[data-pin-input-input]:autofill { ${f} }`), Ae(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${f} }`), Ae(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Ae(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, Ve = new WeakMap, Fe = new WeakMap, en = new WeakMap, je = new WeakMap;
let pn = Cn;
var ze;
const bn = class bn {
  constructor(t) {
    It(this, "opts");
    It(this, "attachment");
    vt(this, ze, E(() => ({
      id: this.opts.id.current,
      [Gn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = fn(this.opts.ref)
  }
  static create(t) {
    return new bn(t)
  }
  get props() {
    return r(v(this, ze))
  }
  set props(t) {
    p(v(this, ze), t)
  }
};
ze = new WeakMap;
let _n = bn;

function da(o, t) {
  const n = t.setTimeout(o, 0),
    f = t.setTimeout(o, 10),
    _ = t.setTimeout(o, 50);
  return [n, f, _]
}

function Ae(o, t) {
  try {
    o.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var ha = new Set(["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "inputRef", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]),
  fa = ft("<div><!> <div><input/></div></div>");

function ma(o, t) {
  const n = Mn();
  Yt(t, !0);
  let f = P(t, "id", 19, () => mn(n)),
    _ = P(t, "inputId", 19, () => `${mn(n)}-input`),
    w = P(t, "ref", 15, null),
    S = P(t, "inputRef", 15, null),
    B = P(t, "maxlength", 3, 6),
    W = P(t, "textalign", 3, "left"),
    A = P(t, "inputmode", 3, "numeric"),
    y = P(t, "onComplete", 3, An),
    T = P(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    N = P(t, "class", 3, ""),
    Y = P(t, "autocomplete", 3, "one-time-code"),
    H = P(t, "disabled", 3, !1),
    X = P(t, "value", 15, ""),
    R = P(t, "onValueChange", 3, An),
    b = Ee(t, ha);
  const D = pn.create({
      id: kt(() => f()),
      ref: kt(() => w(), q => w(q)),
      inputRef: kt(() => S(), q => S(q)),
      inputId: kt(() => _()),
      autocomplete: kt(() => Y()),
      maxLength: kt(() => B()),
      textAlign: kt(() => W()),
      disabled: kt(() => H()),
      inputmode: kt(() => A()),
      pattern: kt(() => t.pattern),
      onComplete: kt(() => y()),
      value: kt(() => X(), q => {
        X(q), R()(q)
      }),
      pushPasswordManagerStrategy: kt(() => T()),
      pasteTransformer: kt(() => t.pasteTransformer)
    }),
    K = E(() => Ye(b, D.inputProps)),
    I = E(() => Ye(D.rootProps, {
      class: N()
    })),
    j = E(() => Ye(D.inputWrapperProps, {}));
  var O = fa();
  ye(O, () => ({
    ...r(I)
  }));
  var _t = nt(O);
  Ut(_t, () => t.children ?? qt, () => D.snippetProps);
  var Dt = Et(_t, 2);
  ye(Dt, () => ({
    ...r(j)
  }));
  var x = nt(Dt);
  ye(x, () => ({
    ...r(K)
  }), void 0, void 0, void 0, void 0, !0), J(Dt), J(O), g(o, O), Xt()
}
var pa = new Set(["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]),
  _a = ft("<div><!></div>");

function ga(o, t) {
  const n = Mn();
  Yt(t, !0);
  let f = P(t, "id", 19, () => mn(n)),
    _ = P(t, "ref", 15, null),
    w = Ee(t, pa);
  const S = _n.create({
      id: kt(() => f()),
      ref: kt(() => _(), N => _(N)),
      cell: kt(() => t.cell)
    }),
    B = E(() => Ye(w, S.props));
  var W = $(),
    A = G(W);
  {
    var y = N => {
        var Y = $(),
          H = G(Y);
        Ut(H, () => t.child, () => ({
          props: r(B)
        })), g(N, Y)
      },
      T = N => {
        var Y = _a();
        ye(Y, () => ({
          ...r(B)
        }));
        var H = nt(Y);
        Ut(H, () => t.children ?? qt), J(Y), g(N, Y)
      };
    st(A, N => {
      t.child ? N(y) : N(T, -1)
    })
  }
  g(o, W), Xt()
}
var va = new Set(["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]),
  ya = ft('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Ca = ft(" <!>", 1);

function ba(o, t) {
  Yt(t, !0);
  let n = P(t, "ref", 15, null),
    f = Ee(t, va);
  var _ = $(),
    w = G(_);
  {
    let S = E(() => yn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(w, () => ga, (B, W) => {
      W(B, ke({
        get cell() {
          return t.cell
        },
        get class() {
          return r(S)
        }
      }, () => f, {
        get ref() {
          return n()
        },
        set ref(A) {
          n(A)
        },
        children: (A, y) => {
          Bn();
          var T = Ca(),
            N = G(T),
            Y = Et(N);
          {
            var H = X => {
              var R = ya();
              g(X, R)
            };
            st(Y, X => {
              t.cell.hasFakeCaret && X(H)
            })
          }
          Tt(() => Ht(N, `${t.cell.char??""} `)), g(A, T)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  g(o, _), Xt()
}
var wa = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);

function Ia(o, t) {
  Yt(t, !0);
  let n = P(t, "ref", 15, null),
    f = P(t, "value", 15, ""),
    _ = Ee(t, wa);
  var w = $(),
    S = G(w);
  {
    let B = E(() => yn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(S, () => ma, (W, A) => {
      A(W, ke({
        get class() {
          return r(B)
        }
      }, () => _, {
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
  g(o, w), Xt()
}
var dn = {
    exports: {}
  },
  kn;

function Ea() {
  return kn || (kn = 1, (function(o) {
    (function(t) {
      o.exports ? o.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var n = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          _ = Object.getOwnPropertyNames,
          w = Object.prototype.hasOwnProperty,
          S = (l, e) => {
            for (var i in e) n(l, i, {
              get: e[i],
              enumerable: !0
            })
          },
          B = (l, e, i, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of _(e)) !w.call(l, a) && a !== i && n(l, a, {
                get: () => e[a],
                enumerable: !(s = f(e, a)) || s.enumerable
              });
            return l
          },
          W = l => B(n({}, "__esModule", {
            value: !0
          }), l),
          A = {};
        S(A, {
          Iti: () => rt,
          default: () => Lt
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
          T = [];
        for (const l of y) T.push({
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
        var N = T,
          Y = {
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
          H = Y,
          X = {
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
          R = X,
          b = {
            ...H,
            ...R
          },
          D = b,
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
          j = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          O = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          _t = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          Dt = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          x = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          q = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          dt = {
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
          At = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Bt = {
            AUTO: "auto"
          },
          ee = {
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
          zt = l => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(l).matches,
          Z = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const l = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = zt("(max-width: 500px)"),
                i = zt("(max-height: 600px)"),
                s = zt("(pointer: coarse)");
              return l || e || s && i
            }
            return !1
          },
          mt = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: At.POLITE,
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
            useFullscreenPopup: Z(),
            validationNumberTypes: ["MOBILE"]
          },
          yt = (l, e) => {
            l.useFullscreenPopup && (l.fixDropdownWidth = !1), l.onlyCountries.length === 1 && (l.initialCountry = l.onlyCountries[0]), l.separateDialCode && (l.nationalMode = !1), l.allowDropdown && !l.showFlags && !l.separateDialCode && (l.nationalMode = !1), l.useFullscreenPopup && !l.dropdownContainer && (l.dropdownContainer = document.body), l.i18n = {
              ...e,
              ...l.i18n
            }
          },
          Ct = l => l.replace(/\D/g, ""),
          ne = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          L = (l, e) => {
            const i = ne(e),
              s = [],
              a = [],
              c = [],
              u = [],
              h = [],
              d = [];
            for (const M of l) M.iso2 === i ? s.push(M) : M.normalisedName.startsWith(i) ? a.push(M) : M.normalisedName.includes(i) ? c.push(M) : i === M.dialCode || i === M.dialCodePlus ? u.push(M) : M.dialCodePlus.includes(i) ? h.push(M) : M.initials.includes(i) && d.push(M);
            const C = (M, pt) => M.priority - pt.priority;
            return [...s.sort(C), ...a.sort(C), ...c.sort(C), ...u.sort(C), ...h.sort(C), ...d.sort(C)]
          },
          z = (l, e) => {
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
          $t = l => {
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
          _e = class {
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
              }, e), this.searchClearButton.innerHTML = $t(this.id), this.searchResultsA11yText = lt("span", {
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
                const l = this.options.separateDialCode ? q.SANE_SELECTED_WITH_DIAL_WIDTH : q.SANE_SELECTED_NO_DIAL_WIDTH,
                  i = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || l) + q.INPUT_PADDING_EXTRA_LEFT;
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
          ie = l => {
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
          Ft = l => {
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
                      pt = u.dialCode + M;
                    a(h, pt), a(u.iso2, pt)
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
          Q = l => {
            for (const e of l) e.normalisedName = ne(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(i => i[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          fe = (l, e, i, s) => {
            let a = l;
            if (i && e) {
              e = `+${s.dialCode}`;
              const c = a[e.length] === " " || a[e.length] === "-" ? e.length + 1 : e.length;
              a = a.substring(c)
            }
            return a
          },
          Te = (l, e, i, s, a) => {
            const c = i ? i.formatNumberAsYouType(l, s.iso2) : l,
              {
                dialCode: u
              } = s;
            return a && e.charAt(0) !== "+" && c.includes(`+${u}`) ? (c.split(`+${u}`)[1] || "").trim() : c
          },
          De = (l, e, i, s) => {
            if (i === 0 && !s) return 0;
            let a = 0;
            for (let c = 0; c < e.length; c++) {
              if (/[+0-9]/.test(e[c]) && a++, a === l && !s) return c + 1;
              if (s && a === l + 1) return c
            }
            return e.length
          },
          Se = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ge = l => {
            const e = Ct(l);
            if (e.startsWith(dt.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return Se.includes(i)
            }
            return !1
          };
        for (const l of N) l.name = D[l.iso2];
        var xe = 0,
          k = new Set(N.map(l => l.iso2)),
          U = l => k.has(l),
          rt = class qn {
            constructor(e, i = {}) {
              this.id = xe++, this.options = {
                ...mt,
                ...i
              }, yt(this.options, D), this.ui = new _e(e, this.options, this.id), this.isAndroid = qn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = ie(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: c
              } = Ft(this.countries);
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
              Vt(this.countries, this.options), Pt(this.countries, this.options), Q(this.countries)
            }
            _setInitialState(e = !1) {
              const i = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(i),
                a = this._getTelInputValue(),
                u = s && s.startsWith("+") && (!a || !a.startsWith("+")) ? s : a,
                h = this._getDialCode(u),
                d = ge(u),
                {
                  initialCountry: C,
                  geoIpLookup: M
                } = this.options,
                pt = C === Bt.AUTO && M;
              if (h && !d) this._updateCountryFromNumber(u);
              else if (!pt || e) {
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
                this.ui.dropdownContent.classList.contains(I.HIDE) && [j.ARROW_UP, j.ARROW_DOWN, j.SPACE, j.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === j.TAB && this._closeDropdown()
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
              i === Bt.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              m.autoCountry ? this.handleAutoCountry() : m.startedLoadingAutoCountry || (m.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const i = e.toLowerCase();
                U(i) ? (m.autoCountry = i, setTimeout(() => et("handleAutoCountry"))) : (this._setInitialState(!0), et("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), et("rejectAutoCountryPromise")
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
              _t.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const h = d => {
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && a && c) {
                  const F = this.ui.telInput.selectionStart || 0,
                    gt = C.substring(0, F - 1),
                    it = C.substring(F);
                  this._setTelInputValue(gt + it), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const M = (d == null ? void 0 : d.data) && _t.NON_PLUS_NUMERIC.test(d.data),
                  pt = (d == null ? void 0 : d.inputType) === O.PASTE && C;
                M || pt && !e ? u = !0 : _t.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const ct = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  V = this.userNumeralSet === "ascii";
                if (i && !u && !ct && V) {
                  const F = this.ui.telInput.selectionStart || 0,
                    it = C.substring(0, F).replace(_t.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (d == null ? void 0 : d.inputType) === O.DELETE_FWD,
                    ot = this._getFullNumber(),
                    Gt = Te(ot, C, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    jt = De(it, Gt, F, ht);
                  this._setTelInputValue(Gt), this.ui.telInput.setSelectionRange(jt, jt)
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
                        pt = /^[0-9]$/.test(M),
                        ct = i ? pt : C || pt,
                        V = this.ui.telInput,
                        F = V.selectionStart,
                        gt = V.selectionEnd,
                        it = h.slice(0, F),
                        ht = h.slice(gt),
                        ot = it + u.key + ht,
                        Gt = this._getFullNumber(ot),
                        jt = m.utils.getCoreNumber(Gt, this.selectedCountryData.iso2),
                        St = this.maxCoreNumberLength && jt.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Gt) !== null;
                      (!ct || St && !te && !C) && u.preventDefault()
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
                    pt = this._normaliseNumerals(M),
                    ct = a === 0 && c > 0,
                    V = !u.startsWith("+") || ct,
                    F = pt.replace(_t.NON_PLUS_NUMERIC_GLOBAL, ""),
                    gt = F.startsWith("+"),
                    it = F.replace(/\+/g, ""),
                    ht = gt && V ? `+${it}` : it;
                  let ot = h + ht + d;
                  if (ot.length > 5) {
                    let jt = m.utils.getCoreNumber(ot, C);
                    for (; jt.length === 0 && ot.length > 0;) ot = ot.slice(0, -1), jt = m.utils.getCoreNumber(ot, C);
                    if (!jt) return;
                    if (this.maxCoreNumberLength && jt.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const St = jt.length - this.maxCoreNumberLength;
                        ot = ot.slice(0, ot.length - St)
                      } else return
                  }
                  this._setTelInputValue(ot);
                  const Gt = a + ht.length;
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
                [j.ARROW_UP, j.ARROW_DOWN, j.ENTER, j.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === j.ARROW_UP || c.key === j.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === j.ENTER ? this._handleEnterKey() : c.key === j.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && _t.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), i += c.key.toLowerCase(), this._searchForCountry(i), s = setTimeout(() => {
                  i = ""
                }, Dt.HIDDEN_SEARCH_RESET_MS))
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
              const i = z(this.countries, e);
              if (i) {
                const s = i.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let i;
              e === "" ? i = this.countries : i = L(this.countries, e), this.ui.filterCountries(i)
            }
            _handleUpDownKey(e) {
              var s, a;
              let i = e === j.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === j.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
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
                if (c === dt.NANP && ge(h)) return null;
                const {
                  areaCodes: pt,
                  priority: ct
                } = this.selectedCountryData;
                if (pt) {
                  const ht = pt.map(ot => `${c}${ot}`);
                  for (const ot of ht)
                    if (h.startsWith(ot)) return null
                }
                const F = pt && !(ct === 0) && h.length > d.length,
                  gt = a && C.includes(a) && !F,
                  it = a === C[0];
                if (!gt && !it) return C[0]
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
                    dialCode: pt
                  } = this.selectedCountryData;
                  C = M, d = a.selectedCountryAriaLabel.replace("${countryName}", M).replace("${dialCode}", `+${pt}`)
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
              } = this.options, c = e === At.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === At.POLITE;
              if (m.utils && c) {
                const u = m.utils.numberType[i];
                let h = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, s, u) : "";
                h = this._beforeSetNumber(h), typeof a == "function" && (h = a(h, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", h)
              }
            }
            _selectListItem(e) {
              const i = e.dataset[ee.COUNTRY_CODE],
                s = this._setCountry(i);
              this._closeDropdown();
              const a = e.dataset[ee.DIAL_CODE];
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
                s = fe(e, i, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(K.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Bt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(I.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
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
              return m.utils ? m.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : x.UNKNOWN_NUMBER_TYPE
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
              return x.UNKNOWN_VALIDATION_ERROR
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
                a = s.search(_t.ALPHA_UNICODE);
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
                return m.utils = s, et("handleUtils"), !0
              }).catch(i => {
                throw et("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          et = (l, ...e) => {
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
          Lt = m;
        return W(A)
      })();
      return t.default
    })
  })(dn)), dn.exports
}
var Ta = Ea();
const Da = gi(Ta);
var Sa = ft('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  Rn = ft('<span class="w-8"> </span>'),
  On = ft('<span class="loading loading-spinner center-absolute absolute"></span>'),
  xa = ft('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  Na = ft('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  Aa = ft('<div class="flex h-full w-full flex-col items-center"><!></div>');

function La(o, t) {
  Yt(t, !0);
  let n = P(t, "verifyingPhone", 15, ""),
    f = tt(!0),
    _ = tt(0),
    w = tt(!1);
  const S = E(() => r(_) > 0 || r(w));
  let B = tt(!1),
    W = tt(""),
    A = tt(void 0);
  const y = E(() => {
    var b;
    return `phone:${(b=Xe.data)==null?void 0:b.id}`
  });
  Mt(() => {
    const b = localStorage.getItem(r(y));
    b && n(b)
  }), he(() => {
    an.getOtpCooldown().then(K => {
      p(_, K.cooldownMs, !0)
    }).catch(K => {
      ve.error(K.message)
    }).finally(() => {
      p(f, !1)
    });
    const b = 1e3,
      D = setInterval(() => {
        p(_, Math.max(0, r(_) - b), !0)
      }, b);
    return () => {
      clearInterval(D)
    }
  });
  async function T(b) {
    try {
      p(w, !0);
      const D = await an.sendOtp(b),
        K = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      ve.info(Bo({
        channel: K[D.channel],
        phone: D.phone
      }), {
        duration: 15e3
      }), n(D.phone), p(_, D.cooldownMs, !0), localStorage.setItem(r(y), n())
    } catch (D) {
      ve.error(D.message)
    } finally {
      p(w, !1)
    }
  }
  Mt(() => {
    r(W).length === 6 && (p(B, !0), (async () => {
      try {
        await an.verifyChallenge({
          type: "otp",
          code: r(W)
        }), ve.success(Hr()), localStorage.removeItem(r(y)), t.onsuccess(n())
      } catch (b) {
        ve.error(b.message)
      } finally {
        p(W, ""), p(B, !1)
      }
    })())
  });
  var N = Aa(),
    Y = nt(N);
  {
    var H = b => {
        var D = Sa();
        g(b, D)
      },
      X = b => {
        var D = xa(),
          K = G(D),
          I = nt(K),
          j = nt(I),
          O = nt(j, !0);
        J(j);
        var _t = Et(j, 2),
          Dt = nt(_t, !0);
        J(_t), J(I);
        var x = Et(I, 2),
          q = nt(x);
        Un(q, () => Z => {
          var mt, yt;
          return p(A, Da(Z, {
            strictMode: !0,
            initialCountry: ((yt = (mt = Xe.data) == null ? void 0 : mt.country) == null ? void 0 : yt.toLocaleLowerCase()) ?? "br",
            loadUtils: () => Ii(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: document.body
          })), () => {
            var Ct;
            (Ct = r(A)) == null || Ct.destroy()
          }
        });
        var dt = Et(q, 2),
          Nt = nt(dt),
          xt = Et(Nt);
        {
          var At = Z => {
            var mt = Rn(),
              yt = nt(mt);
            J(mt), Tt(Ct => Ht(yt, `(${Ct??""})`), [() => Dn(r(_))]), g(Z, mt)
          };
          st(xt, Z => {
            r(_) > 0 && Z(At)
          })
        }
        var Bt = Et(xt, 2);
        {
          var ee = Z => {
            var mt = On();
            g(Z, mt)
          };
          st(Bt, Z => {
            r(w) && Z(ee)
          })
        }
        J(dt), J(x), J(K);
        var at = Et(K, 2),
          zt = nt(at, !0);
        J(at), Tt((Z, mt, yt, Ct) => {
          Ht(O, Z), Ht(Dt, mt), dt.disabled = r(S), Ht(Nt, `${yt??""} `), Ht(zt, Ct)
        }, [() => Ti(), () => Tr(), () => co(), () => hr()]), nn("submit", x, async () => {
          var mt;
          if (r(S)) return;
          if (!((mt = r(A)) != null && mt.isValidNumber())) {
            ve.error($i());
            return
          }
          const Z = r(A).getNumber();
          await T(Z)
        }), g(b, D)
      },
      R = b => {
        var D = Na(),
          K = G(D),
          I = nt(K),
          j = nt(I, !0);
        J(I);
        var O = Et(I, 2),
          _t = nt(O, !0);
        J(O), J(K);
        var Dt = Et(K, 2),
          x = nt(Dt);
        {
          const Z = (mt, yt) => {
            let Ct = () => yt == null ? void 0 : yt().cells;
            var ne = $(),
              L = G(ne);
            Jt(L, () => Ys, (z, wt) => {
              wt(z, {
                class: "border-primary",
                children: (lt, Wt) => {
                  var $t = $(),
                    _e = G($t);
                  Ze(_e, 16, Ct, ie => ie, (ie, Vt) => {
                    var Ft = $(),
                      Pt = G(Ft);
                    Jt(Pt, () => ba, (Q, fe) => {
                      fe(Q, {
                        get cell() {
                          return Vt
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), g(ie, Ft)
                  }), g(lt, $t)
                },
                $$slots: {
                  default: !0
                }
              })
            }), g(mt, ne)
          };
          Jt(x, () => Ia, (mt, yt) => {
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
                p(W, Ct, !0)
              },
              children: Z,
              $$slots: {
                default: !0
              }
            })
          })
        }
        J(Dt);
        var q = Et(Dt, 2),
          dt = nt(q),
          Nt = nt(dt),
          xt = Et(Nt);
        {
          var At = Z => {
            var mt = Rn(),
              yt = nt(mt);
            J(mt), Tt(Ct => Ht(yt, `(${Ct??""})`), [() => Dn(r(_))]), g(Z, mt)
          };
          st(xt, Z => {
            r(_) > 0 && Z(At)
          })
        }
        var Bt = Et(xt, 2);
        {
          var ee = Z => {
            var mt = On();
            g(Z, mt)
          };
          st(Bt, Z => {
            r(w) && Z(ee)
          })
        }
        J(dt);
        var at = Et(dt, 2),
          zt = nt(at, !0);
        J(at), J(q), Tt((Z, mt, yt, Ct) => {
          Ht(j, Z), Ht(_t, mt), dt.disabled = r(S), Ht(Nt, `${yt??""} `), Ht(zt, Ct)
        }, [() => Wi(), () => Eo({
          phone: n()
        }), () => Qr(), () => Zo()]), oe("click", dt, async () => {
          await T(n())
        }), oe("click", at, () => {
          n("")
        }), g(b, D)
      };
    st(Y, b => {
      r(f) ? b(H) : n() ? b(R, -1) : b(X, 1)
    })
  }
  J(N), g(o, N), Xt()
}
rn(["click"]);
let Le = tt(!1);
var Pa = ft("<div></div>"),
  ka = ft('<button type="button" class="btn">Retry</button>'),
  Ra = ft('<span class="loading loading-spinner loading-lg"></span>'),
  Oa = ft("<div><!></div>");

function Ma(o, t) {
  Yt(t, !0);
  let n = P(t, "widgetId", 15),
    f = P(t, "appearance", 3, "always"),
    _ = P(t, "language", 3, "auto"),
    w = P(t, "execution", 3, "render"),
    S = P(t, "retryInterval", 3, 8e3),
    B = P(t, "retry", 3, "auto"),
    W = P(t, "refreshExpired", 3, "auto"),
    A = P(t, "theme", 3, "auto"),
    y = P(t, "size", 3, "normal"),
    T = P(t, "tabIndex", 3, 0);
  P(t, "reset", 15)(() => {
    var x;
    n() && ((x = window == null ? void 0 : window.turnstile) == null || x.reset(n()))
  });
  const Y = E(() => ({
      sitekey: t.siteKey,
      callback: (x, q) => {
        var dt;
        (dt = t.callback) == null || dt.call(t, x, q)
      },
      "error-callback": x => {
        var q;
        (q = t.errorCallback) == null || q.call(t, x)
      },
      "timeout-callback": () => {
        var x;
        (x = t.timeoutCallback) == null || x.call(t)
      },
      "expired-callback": () => {
        var x;
        (x = t.expiredCallback) == null || x.call(t)
      },
      "before-interactive-callback": () => {
        var x;
        (x = t.beforeInteractiveCallback) == null || x.call(t)
      },
      "after-interactive-callback": () => {
        var x;
        (x = t.afterInteractiveCallback) == null || x.call(t)
      },
      "unsupported-callback": () => {
        var x;
        return (x = t.unsupportedCallback) == null ? void 0 : x.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? "cf-turnstile-response",
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": W(),
      "retry-interval": S(),
      tabindex: T(),
      appearance: f(),
      execution: w(),
      language: _(),
      action: t.action,
      retry: B(),
      theme: A(),
      cData: t.cData,
      size: y()
    })),
    H = (x, q) => {
      let dt = window.turnstile.render(x, q);
      return n(dt), {
        destroy() {
          window.turnstile.remove(dt)
        },
        update(Nt) {
          window.turnstile.remove(dt), dt = window.turnstile.render(x, Nt), n(dt)
        }
      }
    };
  let X = tt(!1),
    R = tt(!1),
    b;

  function D() {
    const x = document.createElement("script");
    x.type = "text/javascript", x.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", x.async = !0, x.addEventListener("load", () => p(Le, !0), {
      once: !0
    }), document.head.appendChild(x)
  }

  function K() {
    p(R, !1), b && clearTimeout(b), b = setTimeout(() => {
      (!r(Le) || !r(X)) && p(R, !0)
    }, 5e3)
  }

  function I() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(x => x.remove()), p(Le, !1), D(), K()
  }
  he(() => (p(X, !0), r(Le) || D(), K(), () => {
    p(X, !1), b && clearTimeout(b)
  }));
  var j = $(),
    O = G(j);
  {
    var _t = x => {
        var q = Pa();
        let dt;
        Hn(q, (Nt, xt) => H == null ? void 0 : H(Nt, xt), () => r(Y)), Tt(() => dt = Qt(q, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", dt, {
          flexible: y() == "flexible"
        })), g(x, q)
      },
      Dt = x => {
        var q = Oa(),
          dt = nt(q);
        {
          var Nt = At => {
              var Bt = ka();
              oe("click", Bt, I), g(At, Bt)
            },
            xt = At => {
              var Bt = Ra();
              g(At, Bt)
            };
          st(dt, At => {
            r(R) ? At(Nt) : At(xt, -1)
          })
        }
        J(q), Tt(() => Qt(q, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), g(x, q)
      };
    st(O, x => {
      r(Le) && r(X) ? x(_t) : x(Dt, -1)
    })
  }
  g(o, j), Xt()
}
rn(["click"]);
var Ba = ft('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Ha(o, t) {
  Yt(t, !0);
  const n = E(() => ln.current !== null),
    f = E(() => {
      var T;
      return (T = ln.current) == null ? void 0 : T.tier
    });
  let _ = tt("");
  var w = Ba(),
    S = nt(w);
  let B;
  var W = nt(S),
    A = nt(W);
  {
    var y = T => {
      var N = $(),
        Y = G(N);
      Ci(Y, () => ln.errorCount, H => {
        var X = $(),
          R = G(X);
        {
          var b = I => {
              {
                let j = E(() => si.trim());
                Ma(I, {
                  get siteKey() {
                    return r(j)
                  },
                  callback: O => xn(O),
                  errorCallback: () => Sn()
                })
              }
            },
            D = I => {
              {
                let j = E(() => ai.trim());
                Gs(I, {
                  get siteKey() {
                    return r(j)
                  },
                  callback: O => xn(O),
                  errorCallback: () => Sn()
                })
              }
            },
            K = I => {
              La(I, {
                onsuccess: () => oi(),
                get verifyingPhone() {
                  return r(_)
                },
                set verifyingPhone(j) {
                  p(_, j, !0)
                }
              })
            };
          st(R, I => {
            r(f) === 2 ? I(b) : r(f) === 3 ? I(D, 1) : r(f) === 4 && I(K, 2)
          })
        }
        g(H, X)
      }), g(T, N)
    };
    st(A, T => {
      r(n) && T(y)
    })
  }
  J(W), J(S), Bn(2), J(w), Un(w, () => T => {
    Mt(() => {
      r(n) ? T.show() : T.close()
    })
  }), Tt(() => B = Qt(S, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, B, {
    "h-84": r(f) === 4 && !r(_)
  })), nn("close", w, () => ri()), g(o, w), Xt()
}
var Ua = ft('<span class="hidden"> </span> <!> <!> <!>', 1);

function dl(o, t) {
  Yt(t, !0), he(() => {
    const y = di();
    Nn.init();
    let T = tt(!1);
    Mt(() => {
      r(T) || Xe.data && (p(T, !0), hi.loadTWA())
    }), li();
    const N = Di(async () => {
      await Xe.refresh()
    }, {
      interval: ui.hour,
      immediate: !0
    });
    let Y = setInterval(() => {
      vi()
    }, 5e3);
    return () => {
      clearTimeout(Y), y(), N(), Nn.cleanup()
    }
  });
  const n = "muted";
  he(() => {
    hn.muted = localStorage.getItem(n) === "1"
  }), Mt(() => {
    {
      const y = hn.muted;
      document.querySelectorAll("audio").forEach(T => {
        T.muted = y
      });
      for (const T of Object.values(ci).filter(N => N instanceof Audio)) T.muted = y, y || (T.volume = .3);
      localStorage.setItem(n, Number(y).toString())
    }
  }), he(() => {});
  var f = Ua();
  nn("beforeunload", ti, () => {
    yi()
  });
  var _ = G(f),
    w = nt(_);
  J(_);
  var S = Et(_, 2);
  {
    var B = y => {
      var T = $(),
        N = G(T);
      Ut(N, () => t.children), g(y, T)
    };
    st(S, y => {
      y(B, -1)
    })
  }
  var W = Et(S, 2);
  Ha(W, {});
  var A = Et(W, 2);
  Ws(A, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Tt(() => Ht(w, `Version: ${ni}`)), g(o, f), Xt()
}
export {
  dl as component, cl as universal
};