var Kn = Object.defineProperty;
var Cn = s => {
  throw TypeError(s)
};
var qn = (s, t, n) => t in s ? Kn(s, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : s[t] = n;
var jt = (s, t, n) => qn(s, typeof t != "symbol" ? t + "" : t, n),
  rn = (s, t, n) => t.has(s) || Cn("Cannot " + n);
var v = (s, t, n) => (rn(s, t, "read from private field"), n ? n.call(s) : t.get(s)),
  yt = (s, t, n) => t.has(s) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, n),
  me = (s, t, n, f) => (rn(s, t, "write to private field"), f ? f.call(s, n) : t.set(s, n), n),
  bn = (s, t, n) => (rn(s, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as he
} from "../chunks/CRTPBFbF.js";
import {
  p as Yt,
  d as nt,
  a as g,
  r as Z,
  t as Et,
  b as Xt,
  c as ft,
  bm as Re,
  F as Yn,
  E as wn,
  G as Xn,
  e as $,
  g as pn,
  y as Ot,
  h as p,
  i as r,
  B as Pe,
  s as It,
  m as oe,
  q as en,
  u as E,
  n as qt,
  w as J,
  f as G,
  l as nn,
  v as In,
  k as ze,
  bM as Rn,
  o as On,
  bK as Qn
} from "../chunks/DUZ_qUVk.js";
import {
  c as Zn,
  s as Bt
} from "../chunks/DtUyTUmd.js";
import {
  i as st
} from "../chunks/BLc2SwOK.js";
import {
  s as Ht
} from "../chunks/b7oAWk-Y.js";
import {
  v as Jn
} from "../chunks/DHU8hq7Q.js";
import {
  I as Rt,
  J as ae,
  K as $n,
  g as cn,
  b as on,
  t as ve,
  u as Ye,
  L as En,
  M as ti,
  N as sn,
  O as Tn,
  Q as Dn,
  R as ei,
  i as xn,
  U as ni,
  T as ii
} from "../chunks/gj3a2jtj.js";
import {
  A as ri
} from "../chunks/Cy-App57.js";
import {
  s as oi,
  a as si
} from "../chunks/D2YUk7P9.js";
import {
  a as Mn,
  g as ai,
  s as li,
  b as dn,
  D as ui,
  w as ci,
  c as di,
  d as hi,
  e as hn,
  n as Sn,
  f as kt,
  m as qe,
  h as fi,
  i as mi,
  j as pi,
  k as _i
} from "../chunks/aEUr1F6v.js";
import {
  k as gi
} from "../chunks/BSwVEwq1.js";
import {
  c as le,
  a as Zt,
  s as bt,
  e as an,
  b as ye,
  S as vi,
  i as yi,
  d as Bn
} from "../chunks/M4i-R8Gk.js";
import {
  b as Ci,
  c as bi
} from "../chunks/CftFOTTa.js";
import {
  p as A,
  s as ke,
  r as Ee
} from "../chunks/DXFW01RN.js";
import {
  _ as wi
} from "../chunks/Dp1pzeXC.js";
import {
  e as Xe
} from "../chunks/BuccT-Wn.js";
import {
  c as Jt
} from "../chunks/DWgZLcia.js";
import {
  b as _n
} from "../chunks/DhSIbJcI.js";
import {
  t as Ii
} from "../chunks/Ct12j0u0.js";
import {
  g as se
} from "../chunks/BhCkpOlh.js";
import {
  p as Ei,
  k as Ti
} from "../chunks/DoQwV0WM.js";
import "../chunks/CC8rAinp.js";
const Di = !0,
  $a = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Di
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  xi = () => "Input the code",
  Si = () => "Insira o código",
  Ni = () => "输入验证码",
  Li = () => "Code eingeben",
  Ai = () => "Introduce el código",
  Pi = () => "Entrez le code",
  ki = () => "Inserisci il codice",
  Ri = () => "コードを入力してください。",
  Oi = () => "Wpisz kod",
  Mi = () => "Введите код",
  Bi = () => "Введіть код",
  Hi = () => "Nhập mã",
  Ui = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? xi() : n === "pt" ? Si() : n === "ch" ? Ni() : n === "de" ? Li() : n === "es" ? Ai() : n === "fr" ? Pi() : n === "it" ? ki() : n === "jp" ? Ri() : n === "pl" ? Oi() : n === "ru" ? Mi() : n === "uk" ? Bi() : Hi()
  },
  Wi = () => "Not a valid phone number",
  Fi = () => "Não é um número válido",
  Vi = () => "不是有效的电话号码",
  ji = () => "Keine gültige Telefonnummer",
  zi = () => "No es un número de teléfono válido",
  Gi = () => "Numéro non valide",
  Ki = () => "Numero non valido",
  qi = () => "有効な電話番号ではありません。",
  Yi = () => "To nie jest prawidłowy numer telefonu",
  Xi = () => "Неверный номер телефона",
  Qi = () => "Некоректний номер телефону",
  Zi = () => "Không phải số điện thoại hợp lệ",
  Ji = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Wi() : n === "pt" ? Fi() : n === "ch" ? Vi() : n === "de" ? ji() : n === "es" ? zi() : n === "fr" ? Gi() : n === "it" ? Ki() : n === "jp" ? qi() : n === "pl" ? Yi() : n === "ru" ? Xi() : n === "uk" ? Qi() : Zi()
  },
  $i = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  tr = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  er = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  nr = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  ir = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  rr = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  or = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  sr = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  ar = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  lr = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  ur = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  cr = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  dr = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? $i() : n === "pt" ? tr() : n === "ch" ? er() : n === "de" ? nr() : n === "es" ? ir() : n === "fr" ? rr() : n === "it" ? or() : n === "jp" ? sr() : n === "pl" ? ar() : n === "ru" ? lr() : n === "uk" ? ur() : cr()
  },
  hr = () => "Verify your phone number to keep painting. This helps us block bots and multi-accounting to keep a fair experience for everyone.",
  fr = () => "Verifique seu número de telefone para continuar pintando. Isso nos ajuda a bloquear bots e o uso de várias contas para garantir uma experiência justa para todos.",
  mr = () => "请验证你的电话号码以继续绘画。这有助于我们阻止机器人和多账号行为，为所有人提供公平的体验。",
  pr = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots und Multi-Accounting zu blockieren, damit alle ein faires Erlebnis haben.",
  _r = () => "Verifica tu número de teléfono para seguir pintando. Esto nos ayuda a bloquear bots y el uso de varias cuentas para garantizar una experiencia justa para todos.",
  gr = () => "Vérifiez votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et les comptes multiples afin de garantir une expérience équitable pour tous.",
  vr = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a bloccare bot e account multipli per garantire un'esperienza equa a tutti.",
  yr = () => "描き続けるには電話番号の確認が必要です。これはボットや複数アカウントの利用を防ぎ、すべてのプレイヤーに公平な体験を提供するための手順です。",
  Cr = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to blokować boty i zakładanie wielu kont, aby zapewnić wszystkim uczciwą rozgrywkę.",
  br = () => "Подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам блокировать ботов и мультиаккаунты, обеспечивая честные условия для всех.",
  wr = () => "Підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам блокувати ботів і мультиакаунти, щоб забезпечити чесні умови для всіх.",
  Ir = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi chặn bot và việc dùng nhiều tài khoản để mang lại trải nghiệm công bằng cho mọi người.",
  Er = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? hr() : n === "pt" ? fr() : n === "ch" ? mr() : n === "de" ? pr() : n === "es" ? _r() : n === "fr" ? gr() : n === "it" ? vr() : n === "jp" ? yr() : n === "pl" ? Cr() : n === "ru" ? br() : n === "uk" ? wr() : Ir()
  },
  Tr = () => "Phone successfully verified",
  Dr = () => "Telefone verificado com sucesso",
  xr = () => "电话验证成功",
  Sr = () => "Telefon erfolgreich verifiziert",
  Nr = () => "Teléfono verificado correctamente",
  Lr = () => "Téléphone vérifié avec succès",
  Ar = () => "Telefono verificato con successo",
  Pr = () => "電話番号を確認しました。",
  kr = () => "Telefon został pomyślnie zweryfikowany",
  Rr = () => "Телефон успешно подтверждён",
  Or = () => "Телефон успішно підтверджено",
  Mr = () => "Đã xác minh số điện thoại thành công",
  Br = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Tr() : n === "pt" ? Dr() : n === "ch" ? xr() : n === "de" ? Sr() : n === "es" ? Nr() : n === "fr" ? Lr() : n === "it" ? Ar() : n === "jp" ? Pr() : n === "pl" ? kr() : n === "ru" ? Rr() : n === "uk" ? Or() : Mr()
  },
  Hr = () => "Resend Code",
  Ur = () => "Reenviar Código",
  Wr = () => "重新发送验证码",
  Fr = () => "Code erneut senden",
  Vr = () => "Reenviar código",
  jr = () => "Renvoyer le code",
  zr = () => "Reinvia codice",
  Gr = () => "コードを再送信",
  Kr = () => "Wyślij kod ponownie",
  qr = () => "Отправить код ещё раз",
  Yr = () => "Надіслати код ще раз",
  Xr = () => "Gửi lại mã",
  Qr = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Hr() : n === "pt" ? Ur() : n === "ch" ? Wr() : n === "de" ? Fr() : n === "es" ? Vr() : n === "fr" ? jr() : n === "it" ? zr() : n === "jp" ? Gr() : n === "pl" ? Kr() : n === "ru" ? qr() : n === "uk" ? Yr() : Xr()
  },
  Zr = () => "Send Code",
  Jr = () => "Enviar o código",
  $r = () => "发送验证码",
  to = () => "Code senden",
  eo = () => "Enviar código",
  no = () => "Envoyer le code",
  io = () => "Invia codice",
  ro = () => "コードを送信",
  oo = () => "Wyślij kod",
  so = () => "Отправить код",
  ao = () => "Надіслати код",
  lo = () => "Gửi mã",
  uo = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Zr() : n === "pt" ? Jr() : n === "ch" ? $r() : n === "de" ? to() : n === "es" ? eo() : n === "fr" ? no() : n === "it" ? io() : n === "jp" ? ro() : n === "pl" ? oo() : n === "ru" ? so() : n === "uk" ? ao() : lo()
  },
  co = s => `Sent to ${s.phone}`,
  ho = s => `Enviado para ${s.phone}`,
  fo = s => `已发送至 ${s.phone}`,
  mo = s => `An ${s.phone} gesendet`,
  po = s => `Enviado a ${s.phone}`,
  _o = s => `Envoyé à ${s.phone}`,
  go = s => `Inviato a ${s.phone}`,
  vo = s => `${s.phone} に送信しました`,
  yo = s => `Wysłano na ${s.phone}`,
  Co = s => `Отправлено на ${s.phone}`,
  bo = s => `Надіслано на ${s.phone}`,
  wo = s => `Đã gửi tới ${s.phone}`,
  Io = (s, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? co(s) : n === "pt" ? ho(s) : n === "ch" ? fo(s) : n === "de" ? mo(s) : n === "es" ? po(s) : n === "fr" ? _o(s) : n === "it" ? go(s) : n === "jp" ? vo(s) : n === "pl" ? yo(s) : n === "ru" ? Co(s) : n === "uk" ? bo(s) : wo(s)
  },
  Eo = s => `Code sent to ${s.phone} via ${s.channel}`,
  To = s => `Código enviado para ${s.phone} via ${s.channel}`,
  Do = s => `验证码已通过${s.channel}发送至${s.phone}`,
  xo = s => `Code an ${s.phone} per ${s.channel} gesendet`,
  So = s => `Código enviado a ${s.phone} por ${s.channel}`,
  No = s => `Code envoyé à ${s.phone} par ${s.channel}`,
  Lo = s => `Codice inviato a ${s.phone} tramite ${s.channel}`,
  Ao = s => `コードを${s.channel}で${s.phone}に送信しました`,
  Po = s => `Kod wysłany do ${s.phone} przez ${s.channel}`,
  ko = s => `Код отправлен на ${s.phone} через ${s.channel}`,
  Ro = s => `Код надіслано на ${s.phone} через ${s.channel}`,
  Oo = s => `Mã đã được gửi tới ${s.phone} qua ${s.channel}`,
  Mo = (s, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Eo(s) : n === "pt" ? To(s) : n === "ch" ? Do(s) : n === "de" ? xo(s) : n === "es" ? So(s) : n === "fr" ? No(s) : n === "it" ? Lo(s) : n === "jp" ? Ao(s) : n === "pl" ? Po(s) : n === "ru" ? ko(s) : n === "uk" ? Ro(s) : Oo(s)
  },
  Bo = () => "Try another number",
  Ho = () => "Tentar outro número",
  Uo = () => "请尝试使用其他号码",
  Wo = () => "Andere Nummer versuchen",
  Fo = () => "Prueba con otro número",
  Vo = () => "Essayez un autre numéro",
  jo = () => "Prova un altro numero",
  zo = () => "別の番号をお試しください。",
  Go = () => "Spróbuj innego numeru",
  Ko = () => "Попробуйте другой номер",
  qo = () => "Спробувати інший номер",
  Yo = () => "Thử số khác",
  Xo = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Bo() : n === "pt" ? Ho() : n === "ch" ? Uo() : n === "de" ? Wo() : n === "es" ? Fo() : n === "fr" ? Vo() : n === "it" ? jo() : n === "jp" ? zo() : n === "pl" ? Go() : n === "ru" ? Ko() : n === "uk" ? qo() : Yo()
  },
  Qo = Array(12).fill(0);
var Zo = ft('<div class="sonner-loading-bar"></div>'),
  Jo = ft('<div><div class="sonner-spinner"></div></div>');

function $o(s, t) {
  Yt(t, !0);
  var n = Jo(),
    f = nt(n);
  Xe(f, 23, () => Qo, (_, T) => `spinner-bar-${T}`, (_, T) => {
    var I = Zo();
    g(_, I)
  }), Z(f), Z(n), Et(_ => {
    Zt(n, 1, _), bt(n, "data-visible", t.visible)
  }, [() => le(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), g(s, n), Xt()
}
const ts = typeof window < "u" ? window : void 0;

function es(s) {
  let t = s.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var Ce, Oe;
class ns {
  constructor(t = {}) {
    yt(this, Ce);
    yt(this, Oe);
    const {
      window: n = ts,
      document: f = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (me(this, Ce, f), me(this, Oe, Zn(_ => {
      const T = Re(n, "focusin", _),
        I = Re(n, "focusout", _);
      return () => {
        T(), I()
      }
    })))
  }
  get current() {
    var t;
    return (t = v(this, Oe)) == null || t.call(this), v(this, Ce) ? es(v(this, Ce)) : null
  }
}
Ce = new WeakMap, Oe = new WeakMap;
new ns;
var Me, ue;
class is {
  constructor(t) {
    yt(this, Me);
    yt(this, ue);
    me(this, Me, t), me(this, ue, Symbol(t))
  }
  get key() {
    return v(this, ue)
  }
  exists() {
    return Yn(v(this, ue))
  }
  get() {
    const t = wn(v(this, ue));
    if (t === void 0) throw new Error(`Context "${v(this,Me)}" not found`);
    return t
  }
  getOr(t) {
    const n = wn(v(this, ue));
    return n === void 0 ? t : n
  }
  set(t) {
    return Xn(v(this, ue), t)
  }
}
Me = new WeakMap, ue = new WeakMap;
const rs = new is("<Toaster/>");

function Ge(s) {
  return s.label !== void 0
}

function os() {
  let s = $(pn(typeof document < "u" ? document.hidden : !1));
  return Ot(() => Re(document, "visibilitychange", () => {
    p(s, document.hidden, !0)
  })), {
    get current() {
      return r(s)
    }
  }
}
const Nn = 4e3,
  ss = 14,
  as = 45,
  ls = 200,
  us = .05,
  cs = {
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

function ds(s) {
  const [t, n] = s.split("-"), f = [];
  return t && f.push(t), n && f.push(n), f
}

function Ln(s) {
  return 1 / (1.5 + Math.abs(s) / 20)
}
var hs = ft("<div><!></div>"),
  fs = ft('<button data-close-button=""><!></button>'),
  ms = ft('<div data-icon=""><!> <!></div>'),
  ps = ft('<div data-description=""><!></div>'),
  _s = ft('<button data-button="" data-cancel=""> </button>'),
  gs = ft('<button data-button=""> </button>'),
  vs = ft('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  ys = ft('<li data-sonner-toast=""><!> <!></li>');

function Cs(s, t) {
  Yt(t, !0);
  const n = O => {
    var W = J(),
      rt = G(W);
    {
      var ut = m => {
          var Lt = hs(),
            l = nt(Lt);
          Ht(l, () => t.loadingIcon), Z(Lt), Et(e => {
            Zt(Lt, 1, e), bt(Lt, "data-visible", r(R) === "loading")
          }, [() => {
            var e, i, o;
            return le(ae((e = r(X)) == null ? void 0 : e.loader, (o = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : o.loader, "sonner-loader"))
          }]), g(m, Lt)
        },
        et = m => {
          {
            let Lt = E(() => {
                var e, i;
                return ae((e = r(X)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              l = E(() => r(R) === "loading");
            $o(m, {
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
    g(O, W)
  };
  let f = A(t, "cancelButtonStyle", 3, ""),
    _ = A(t, "actionButtonStyle", 3, ""),
    T = A(t, "descriptionClass", 3, ""),
    I = A(t, "unstyled", 3, !1),
    B = A(t, "defaultRichColors", 3, !1);
  const F = {
    ...cs
  };
  let S = $(!1),
    y = $(!1),
    P = $(!1),
    w = $(!1),
    Y = $(!1),
    M = $(0),
    tt = $(0),
    k = t.toast.duration || t.duration || Nn,
    b = $(void 0),
    D = $(null),
    K = $(null);
  const N = E(() => t.index === 0),
    U = E(() => t.index + 1 <= t.visibleToasts),
    R = E(() => t.toast.type),
    mt = E(() => t.toast.dismissable !== !1),
    Tt = E(() => t.toast.class || ""),
    x = E(() => t.toast.descriptionClass || ""),
    q = E(() => Rt.heights.findIndex(O => O.toastId === t.toast.id) || 0),
    dt = E(() => t.toast.closeButton ?? t.closeButton),
    St = E(() => t.toast.duration ?? t.duration ?? Nn);
  let xt = null;
  const Nt = E(() => t.position.split("-")),
    Mt = E(() => Rt.heights.reduce((O, W, rt) => rt >= r(q) ? O : O + W.height, 0)),
    ee = os(),
    at = E(() => t.toast.invert || t.invert),
    zt = E(() => r(R) === "loading"),
    X = E(() => ({
      ...F,
      ...t.classes
    })),
    pt = E(() => t.toast.title),
    vt = E(() => t.toast.description);
  let Ct = $(0),
    ne = $(0);
  const L = E(() => Math.round(r(q) * ss + r(Mt)));
  Ot(() => {
    r(pt), r(vt);
    let O;
    t.expanded || t.expandByDefault ? O = 1 : O = 1 - t.index * us;
    const W = Pe(() => r(b));
    if (W === void 0) return;
    W.style.setProperty("height", "auto");
    const rt = W.offsetHeight,
      ut = W.getBoundingClientRect().height,
      et = Math.round(ut / O + Number.EPSILON & 100) / 100;
    W.style.removeProperty("height");
    let m;
    Math.abs(et - rt) < 1 ? m = et : m = rt, p(tt, m, !0), Pe(() => {
      Rt.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function z() {
    p(y, !0), p(M, r(L), !0), Rt.removeHeight(t.toast.id), setTimeout(() => {
      Rt.remove(t.toast.id)
    }, ls)
  }
  let wt;
  const lt = E(() => t.toast.promise && r(R) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Ut() {
    p(Ct, new Date().getTime(), !0), wt = setTimeout(() => {
      var O, W;
      (W = (O = t.toast).onAutoClose) == null || W.call(O, t.toast), z()
    }, k)
  }

  function $t() {
    if (r(ne) < r(Ct)) {
      const O = new Date().getTime() - r(Ct);
      k = k - O
    }
    p(ne, new Date().getTime(), !0)
  }
  Ot(() => {
    t.toast.updated && (clearTimeout(wt), k = r(St), Ut())
  }), Ot(() => (r(lt) || (t.expanded || t.interacting || ee.current ? $t() : Ut()), () => clearTimeout(wt))), he(() => {
    var W;
    p(S, !0);
    const O = (W = r(b)) == null ? void 0 : W.getBoundingClientRect().height;
    return p(tt, O, !0), Rt.setHeight({
      toastId: t.toast.id,
      height: O
    }), () => {
      Rt.removeHeight(t.toast.id)
    }
  }), Ot(() => {
    t.toast.delete && Pe(() => {
      var O, W;
      z(), (W = (O = t.toast).onDismiss) == null || W.call(O, t.toast)
    })
  });
  const _e = O => {
      if (r(zt)) return;
      p(M, r(L), !0);
      const W = O.target;
      W.setPointerCapture(O.pointerId), W.tagName !== "BUTTON" && (p(P, !0), xt = {
        x: O.clientX,
        y: O.clientY
      })
    },
    ie = () => {
      var m, Lt, l, e, i, o;
      if (r(w) || !r(mt)) return;
      xt = null;
      const O = Number(((m = r(b)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        W = Number(((Lt = r(b)) == null ? void 0 : Lt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        rt = new Date().getTime() - 0,
        ut = r(D) === "x" ? O : W,
        et = Math.abs(ut) / rt;
      if (Math.abs(ut) >= as || et > .11) {
        p(M, r(L), !0), (e = (l = t.toast).onDismiss) == null || e.call(l, t.toast), r(D) === "x" ? p(K, O > 0 ? "right" : "left", !0) : p(K, W > 0 ? "down" : "up", !0), z(), p(w, !0);
        return
      } else(i = r(b)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (o = r(b)) == null || o.style.setProperty("--swipe-amount-y", "0px");
      p(Y, !1), p(P, !1), p(D, null)
    },
    Wt = O => {
      var Lt, l, e;
      if (!xt || !r(mt) || (((Lt = window.getSelection()) == null ? void 0 : Lt.toString().length) ?? -1) > 0) return;
      const rt = O.clientY - xt.y,
        ut = O.clientX - xt.x,
        et = t.swipeDirections ?? ds(t.position);
      !r(D) && (Math.abs(ut) > 1 || Math.abs(rt) > 1) && p(D, Math.abs(ut) > Math.abs(rt) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (r(D) === "y") {
        if (et.includes("top") || et.includes("bottom"))
          if (et.includes("top") && rt < 0 || et.includes("bottom") && rt > 0) m.y = rt;
          else {
            const i = rt * Ln(rt);
            m.y = Math.abs(i) < Math.abs(rt) ? i : rt
          }
      } else if (r(D) === "x" && (et.includes("left") || et.includes("right")))
        if (et.includes("left") && ut < 0 || et.includes("right") && ut > 0) m.x = ut;
        else {
          const i = ut * Ln(ut);
          m.x = Math.abs(i) < Math.abs(ut) ? i : ut
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && p(Y, !0), (l = r(b)) == null || l.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = r(b)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    Ft = () => {
      p(P, !1), p(D, null), xt = null
    },
    At = E(() => t.toast.icon ? t.toast.icon : r(R) === "success" ? t.successIcon : r(R) === "error" ? t.errorIcon : r(R) === "warning" ? t.warningIcon : r(R) === "info" ? t.infoIcon : r(R) === "loading" ? t.loadingIcon : null);
  var Q = ys();
  bt(Q, "tabindex", 0);
  let fe;
  var Te = nt(Q);
  {
    var De = O => {
      var W = fs(),
        rt = nt(W);
      Ht(rt, () => t.closeIcon ?? qt), Z(W), Et(ut => {
        bt(W, "aria-label", t.closeButtonAriaLabel), bt(W, "data-disabled", r(zt)), Zt(W, 1, ut)
      }, [() => {
        var ut, et, m;
        return le(ae((ut = r(X)) == null ? void 0 : ut.closeButton, (m = (et = t.toast) == null ? void 0 : et.classes) == null ? void 0 : m.closeButton))
      }]), oe("click", W, () => {
        var ut, et;
        r(zt) || !r(mt) || (z(), (et = (ut = t.toast).onDismiss) == null || et.call(ut, t.toast))
      }), g(O, W)
    };
    st(Te, O => {
      r(dt) && !t.toast.component && r(R) !== "loading" && t.closeIcon !== null && O(De)
    })
  }
  var xe = It(Te, 2);
  {
    var ge = O => {
        const W = E(() => t.toast.component);
        var rt = J(),
          ut = G(rt);
        Jt(ut, () => r(W), (et, m) => {
          m(et, ke(() => t.toast.componentProps, {
            closeToast: z
          }))
        }), g(O, rt)
      },
      Se = O => {
        var W = vs(),
          rt = G(W);
        {
          var ut = h => {
            var d = ms(),
              C = nt(d);
            {
              var H = V => {
                var j = J(),
                  gt = G(j);
                {
                  var it = ot => {
                      var Gt = J(),
                        Vt = G(Gt);
                      Jt(Vt, () => t.toast.icon, (Dt, Pt) => {
                        Pt(Dt, {})
                      }), g(ot, Gt)
                    },
                    ht = ot => {
                      n(ot)
                    };
                  st(gt, ot => {
                    t.toast.icon ? ot(it) : ot(ht, -1)
                  })
                }
                g(V, j)
              };
              st(C, V => {
                (t.toast.promise || r(R) === "loading") && V(H)
              })
            }
            var _t = It(C, 2);
            {
              var ct = V => {
                var j = J(),
                  gt = G(j);
                {
                  var it = Dt => {
                      var Pt = J(),
                        te = G(Pt);
                      Jt(te, () => t.toast.icon, (zn, Gn) => {
                        Gn(zn, {})
                      }), g(Dt, Pt)
                    },
                    ht = Dt => {
                      var Pt = J(),
                        te = G(Pt);
                      Ht(te, () => t.successIcon ?? qt), g(Dt, Pt)
                    },
                    ot = Dt => {
                      var Pt = J(),
                        te = G(Pt);
                      Ht(te, () => t.errorIcon ?? qt), g(Dt, Pt)
                    },
                    Gt = Dt => {
                      var Pt = J(),
                        te = G(Pt);
                      Ht(te, () => t.warningIcon ?? qt), g(Dt, Pt)
                    },
                    Vt = Dt => {
                      var Pt = J(),
                        te = G(Pt);
                      Ht(te, () => t.infoIcon ?? qt), g(Dt, Pt)
                    };
                  st(gt, Dt => {
                    t.toast.icon ? Dt(it) : r(R) === "success" ? Dt(ht, 1) : r(R) === "error" ? Dt(ot, 2) : r(R) === "warning" ? Dt(Gt, 3) : r(R) === "info" && Dt(Vt, 4)
                  })
                }
                g(V, j)
              };
              st(_t, V => {
                t.toast.type !== "loading" && V(ct)
              })
            }
            Z(d), Et(V => Zt(d, 1, V), [() => {
              var V, j, gt;
              return le(ae((V = r(X)) == null ? void 0 : V.icon, (gt = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : gt.icon))
            }]), g(h, d)
          };
          st(rt, h => {
            (r(R) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(At) !== null || t.toast.icon) && h(ut)
          })
        }
        var et = It(rt, 2),
          m = nt(et),
          Lt = nt(m);
        {
          var l = h => {
            var d = J(),
              C = G(d);
            {
              var H = ct => {
                  const V = E(() => t.toast.title);
                  var j = J(),
                    gt = G(j);
                  Jt(gt, () => r(V), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), g(ct, j)
                },
                _t = ct => {
                  var V = In();
                  Et(() => Bt(V, t.toast.title)), g(ct, V)
                };
              st(C, ct => {
                typeof t.toast.title != "string" ? ct(H) : ct(_t, -1)
              })
            }
            g(h, d)
          };
          st(Lt, h => {
            t.toast.title && h(l)
          })
        }
        Z(m);
        var e = It(m, 2);
        {
          var i = h => {
            var d = ps(),
              C = nt(d);
            {
              var H = ct => {
                  const V = E(() => t.toast.description);
                  var j = J(),
                    gt = G(j);
                  Jt(gt, () => r(V), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), g(ct, j)
                },
                _t = ct => {
                  var V = In();
                  Et(() => Bt(V, t.toast.description)), g(ct, V)
                };
              st(C, ct => {
                typeof t.toast.description != "string" ? ct(H) : ct(_t, -1)
              })
            }
            Z(d), Et(ct => Zt(d, 1, ct), [() => {
              var ct, V;
              return le(ae(T(), r(x), (ct = r(X)) == null ? void 0 : ct.description, (V = t.toast.classes) == null ? void 0 : V.description))
            }]), g(h, d)
          };
          st(e, h => {
            t.toast.description && h(i)
          })
        }
        Z(et);
        var o = It(et, 2);
        {
          var a = h => {
            var d = J(),
              C = G(d);
            {
              var H = V => {
                  var j = J(),
                    gt = G(j);
                  Jt(gt, () => t.toast.cancel, (it, ht) => {
                    ht(it, {})
                  }), g(V, j)
                },
                _t = V => {
                  var j = _s(),
                    gt = nt(j, !0);
                  Z(j), Et(it => {
                    an(j, t.toast.cancelButtonStyle ?? f()), Zt(j, 1, it), Bt(gt, t.toast.cancel.label)
                  }, [() => {
                    var it, ht, ot;
                    return le(ae((it = r(X)) == null ? void 0 : it.cancelButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.cancelButton))
                  }]), oe("click", j, it => {
                    var ht, ot;
                    Ge(t.toast.cancel) && r(mt) && ((ot = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || ot.call(ht, it), z())
                  }), g(V, j)
                },
                ct = E(() => Ge(t.toast.cancel));
              st(C, V => {
                typeof t.toast.cancel == "function" ? V(H) : r(ct) && V(_t, 1)
              })
            }
            g(h, d)
          };
          st(o, h => {
            t.toast.cancel && h(a)
          })
        }
        var c = It(o, 2);
        {
          var u = h => {
            var d = J(),
              C = G(d);
            {
              var H = V => {
                  var j = J(),
                    gt = G(j);
                  Jt(gt, () => t.toast.action, (it, ht) => {
                    ht(it, {})
                  }), g(V, j)
                },
                _t = V => {
                  var j = gs(),
                    gt = nt(j, !0);
                  Z(j), Et(it => {
                    an(j, t.toast.actionButtonStyle ?? _()), Zt(j, 1, it), Bt(gt, t.toast.action.label)
                  }, [() => {
                    var it, ht, ot;
                    return le(ae((it = r(X)) == null ? void 0 : it.actionButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.actionButton))
                  }]), oe("click", j, it => {
                    var ht;
                    Ge(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(it), !it.defaultPrevented && z())
                  }), g(V, j)
                },
                ct = E(() => Ge(t.toast.action));
              st(C, V => {
                typeof t.toast.action == "function" ? V(H) : r(ct) && V(_t, 1)
              })
            }
            g(h, d)
          };
          st(c, h => {
            t.toast.action && h(u)
          })
        }
        Et(h => Zt(m, 1, h), [() => {
          var h, d, C;
          return le(ae((h = r(X)) == null ? void 0 : h.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), g(O, W)
      };
    st(xe, O => {
      t.toast.component ? O(ge) : O(Se, -1)
    })
  }
  Z(Q), _n(Q, O => p(b, O), () => r(b)), Et((O, W, rt) => {
    Zt(Q, 1, O), bt(Q, "data-rich-colors", t.toast.richColors ?? B()), bt(Q, "data-styled", !(t.toast.component || t.toast.unstyled || I())), bt(Q, "data-mounted", r(S)), bt(Q, "data-promise", W), bt(Q, "data-swiped", r(Y)), bt(Q, "data-removed", r(y)), bt(Q, "data-visible", r(U)), bt(Q, "data-y-position", r(Nt)[0]), bt(Q, "data-x-position", r(Nt)[1]), bt(Q, "data-index", t.index), bt(Q, "data-front", r(N)), bt(Q, "data-swiping", r(P)), bt(Q, "data-dismissable", r(mt)), bt(Q, "data-type", r(R)), bt(Q, "data-invert", r(at)), bt(Q, "data-swipe-out", r(w)), bt(Q, "data-swipe-direction", r(K)), bt(Q, "data-expanded", rt), fe = an(Q, `${t.style} ${t.toast.style}`, fe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Rt.toasts.length - t.index,
      "--offset": `${r(y)?r(M):r(L)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(tt)}px`
    })
  }, [() => {
    var O, W, rt, ut, et, m;
    return le(ae(t.class, r(Tt), (O = r(X)) == null ? void 0 : O.toast, (rt = (W = t.toast) == null ? void 0 : W.classes) == null ? void 0 : rt.toast, (ut = r(X)) == null ? void 0 : ut[r(R)], (m = (et = t.toast) == null ? void 0 : et.classes) == null ? void 0 : m[r(R)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(S))]), oe("pointermove", Q, Wt), oe("pointerup", Q, ie), oe("pointerdown", Q, _e), en("dragend", Q, Ft), g(s, Q), Xt()
}
nn(["pointermove", "pointerup", "pointerdown", "click"]);
var bs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function ws(s) {
  var t = bs();
  g(s, t)
}
var Is = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Es(s) {
  var t = Is();
  g(s, t)
}
var Ts = ze('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Ds(s) {
  var t = Ts();
  g(s, t)
}
var xs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Ss(s) {
  var t = xs();
  g(s, t)
}
var Ns = ze('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function Ls(s) {
  var t = Ns();
  g(s, t)
}
const As = 3,
  Hn = "24px",
  Un = "16px",
  Ps = 4e3,
  ks = 356,
  Rs = 14,
  ln = "dark",
  Ke = "light";

function Os(s, t) {
  const n = {};
  return [s, t].forEach((f, _) => {
    const T = _ === 1,
      I = T ? "--mobile-offset" : "--offset",
      B = T ? Un : Hn;

    function F(S) {
      ["top", "right", "bottom", "left"].forEach(y => {
        n[`${I}-${y}`] = typeof S == "number" ? `${S}px` : S
      })
    }
    typeof f == "number" || typeof f == "string" ? F(f) : typeof f == "object" ? ["top", "right", "bottom", "left"].forEach(S => {
      const y = f[S];
      y === void 0 ? n[`${I}-${S}`] = B : n[`${I}-${S}`] = typeof y == "number" ? `${y}px` : y
    }) : F(B)
  }), n
}
var Ms = new Set(["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]),
  Bs = ft("<ol></ol>"),
  Hs = ft('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>');

function Us(s, t) {
  Yt(t, !0);

  function n(L) {
    return L !== "system" ? L : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : Ke
  }
  let f = A(t, "invert", 3, !1),
    _ = A(t, "position", 3, "bottom-right"),
    T = A(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    I = A(t, "expand", 3, !1),
    B = A(t, "closeButton", 3, !1),
    F = A(t, "offset", 3, Hn),
    S = A(t, "mobileOffset", 3, Un),
    y = A(t, "theme", 3, "light"),
    P = A(t, "richColors", 3, !1),
    w = A(t, "duration", 3, Ps),
    Y = A(t, "visibleToasts", 3, As),
    M = A(t, "toastOptions", 19, () => ({})),
    tt = A(t, "dir", 7, "auto"),
    k = A(t, "gap", 3, Rs),
    b = A(t, "containerAriaLabel", 3, "Notifications"),
    D = A(t, "closeButtonAriaLabel", 3, "Close toast"),
    K = Ee(t, Ms);

  function N() {
    if (tt() !== "auto") return tt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const L = document.documentElement.getAttribute("dir");
    return L === "auto" || !L ? (Pe(() => tt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), tt()) : (Pe(() => tt(L)), L)
  }
  const U = E(() => Array.from(new Set([_(), ...Rt.toasts.filter(L => L.position).map(L => L.position)].filter(Boolean))));
  let R = $(!1),
    mt = $(!1),
    Tt = $(pn(n(y()))),
    x = $(void 0),
    q = $(null),
    dt = $(!1);
  const St = E(() => T().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ot(() => {
    Rt.toasts.length <= 1 && p(R, !1)
  }), Ot(() => {
    const L = Rt.toasts.filter(z => z.dismiss && !z.delete);
    if (L.length > 0) {
      const z = Rt.toasts.map(wt => L.find(Ut => Ut.id === wt.id) ? {
        ...wt,
        delete: !0
      } : wt);
      Rt.toasts = z
    }
  }), Ot(() => () => {
    r(x) && r(q) && (r(q).focus({
      preventScroll: !0
    }), p(q, null), p(dt, !1))
  }), he(() => (Rt.reset(), Re(document, "keydown", z => {
    var lt, Ut;
    T().every($t => z[$t] || z.code === $t) && (p(R, !0), (lt = r(x)) == null || lt.focus()), z.code === "Escape" && (document.activeElement === r(x) || (Ut = r(x)) != null && Ut.contains(document.activeElement)) && p(R, !1)
  }))), Ot(() => {
    if (y() !== "system" && p(Tt, y()), typeof window < "u") {
      y() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? p(Tt, ln) : p(Tt, Ke));
      const L = window.matchMedia("(prefers-color-scheme: dark)"),
        z = ({
          matches: wt
        }) => {
          p(Tt, wt ? ln : Ke, !0)
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
    Nt = L => {
      var wt;
      (wt = t.onfocus) == null || wt.call(t, L), !(L.target instanceof HTMLElement && L.target.dataset.dismissable === "false") && (r(dt) || (p(dt, !0), p(q, L.relatedTarget, !0)))
    },
    Mt = L => {
      var wt;
      (wt = t.onpointerdown) == null || wt.call(t, L), !(L.target instanceof HTMLElement && L.target.dataset.dismissable === "false") && p(mt, !0)
    },
    ee = L => {
      var z;
      (z = t.onmouseenter) == null || z.call(t, L), p(R, !0)
    },
    at = L => {
      var z;
      (z = t.onmouseleave) == null || z.call(t, L), r(mt) || p(R, !1)
    },
    zt = L => {
      var z;
      (z = t.onmousemove) == null || z.call(t, L), p(R, !0)
    },
    X = L => {
      var z;
      (z = t.ondragend) == null || z.call(t, L), p(R, !1)
    },
    pt = L => {
      var z;
      (z = t.onpointerup) == null || z.call(t, L), p(mt, !1)
    };
  rs.set(new $n);
  var vt = Hs();
  bt(vt, "tabindex", -1);
  var Ct = nt(vt);
  {
    var ne = L => {
      var z = J(),
        wt = G(z);
      Xe(wt, 18, () => r(U), lt => lt, (lt, Ut, $t, _e) => {
        const ie = E(() => {
            const [At, Q] = Ut.split("-");
            return {
              y: At,
              x: Q
            }
          }),
          Wt = E(() => Os(F(), S()));
        var Ft = Bs();
        ye(Ft, At => {
          var Q;
          return {
            tabindex: -1,
            dir: At,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(Tt),
            "data-y-position": r(ie).y,
            "data-x-position": r(ie).x,
            style: t.style,
            onblur: xt,
            onfocus: Nt,
            onmouseenter: ee,
            onmousemove: zt,
            onmouseleave: at,
            ondragend: X,
            onpointerdown: Mt,
            onpointerup: pt,
            ...K,
            [vi]: {
              "--front-toast-height": `${(Q=Rt.heights[0])==null?void 0:Q.height}px`,
              "--width": `${ks}px`,
              "--gap": `${k()}px`,
              "--offset-top": r(Wt)["--offset-top"],
              "--offset-right": r(Wt)["--offset-right"],
              "--offset-bottom": r(Wt)["--offset-bottom"],
              "--offset-left": r(Wt)["--offset-left"],
              "--mobile-offset-top": r(Wt)["--mobile-offset-top"],
              "--mobile-offset-right": r(Wt)["--mobile-offset-right"],
              "--mobile-offset-bottom": r(Wt)["--mobile-offset-bottom"],
              "--mobile-offset-left": r(Wt)["--mobile-offset-left"]
            }
          }
        }, [() => N()], void 0, void 0, "svelte-wiukfn"), Xe(Ft, 23, () => Rt.toasts.filter(At => !At.position && r($t) === 0 || At.position === Ut), At => At.id, (At, Q, fe, Te) => {
          {
            const De = o => {
                var a = J(),
                  c = G(a);
                {
                  var u = d => {
                      var C = J(),
                        H = G(C);
                      Ht(H, () => t.successIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      ws(d)
                    };
                  st(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              xe = o => {
                var a = J(),
                  c = G(a);
                {
                  var u = d => {
                      var C = J(),
                        H = G(C);
                      Ht(H, () => t.errorIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Es(d)
                    };
                  st(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              ge = o => {
                var a = J(),
                  c = G(a);
                {
                  var u = d => {
                      var C = J(),
                        H = G(C);
                      Ht(H, () => t.warningIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ds(d)
                    };
                  st(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              Se = o => {
                var a = J(),
                  c = G(a);
                {
                  var u = d => {
                      var C = J(),
                        H = G(C);
                      Ht(H, () => t.infoIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ss(d)
                    };
                  st(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              O = o => {
                var a = J(),
                  c = G(a);
                {
                  var u = d => {
                      var C = J(),
                        H = G(C);
                      Ht(H, () => t.closeIcon ?? qt), g(d, C)
                    },
                    h = d => {
                      Ls(d)
                    };
                  st(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              };
            let W = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.duration) ?? w()
              }),
              rt = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.class) ?? ""
              }),
              ut = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.descriptionClass) || ""
              }),
              et = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.style) ?? ""
              }),
              m = E(() => M().classes || {}),
              Lt = E(() => M().unstyled ?? !1),
              l = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.cancelButtonStyle) ?? ""
              }),
              e = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.actionButtonStyle) ?? ""
              }),
              i = E(() => {
                var o;
                return ((o = M()) == null ? void 0 : o.closeButtonAriaLabel) ?? D()
              });
            Cs(At, {
              get index() {
                return r(fe)
              },
              get toast() {
                return r(Q)
              },
              get defaultRichColors() {
                return P()
              },
              get duration() {
                return r(W)
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
                return r(mt)
              },
              get position() {
                return Ut
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
                return I()
              },
              get expanded() {
                return r(R)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: De,
              errorIcon: xe,
              warningIcon: ge,
              infoIcon: Se,
              closeIcon: O,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), Z(Ft), _n(Ft, At => p(x, At), () => r(x)), Et(() => Ft.dir = Ft.dir), g(lt, Ft)
      }), g(L, z)
    };
    st(Ct, L => {
      Rt.toasts.length > 0 && L(ne)
    })
  }
  Z(vt), Et(() => bt(vt, "aria-label", `${b()??""} ${r(St)??""}`)), g(s, vt), Xt()
}
let Ne = $(!1);
var Ws = ft("<div></div>"),
  Fs = ft('<button type="button" class="btn">Retry</button>'),
  Vs = ft('<span class="loading loading-spinner loading-lg"></span>'),
  js = ft('<div class="flex h-16 items-center justify-center"><!></div>');

function zs(s, t) {
  Yt(t, !0);
  let n = A(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    f = A(t, "size", 3, "normal");
  const _ = E(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: f(),
      callback: k => {
        var b;
        return (b = t.callback) == null ? void 0 : b.call(t, k)
      },
      "error-callback": k => {
        var b;
        return (b = t.errorCallback) == null ? void 0 : b.call(t, k)
      },
      "expired-callback": () => {
        var k;
        return (k = t.expiredCallback) == null ? void 0 : k.call(t)
      }
    })),
    T = (k, b) => {
      var K;
      let D = window.hcaptcha.render(k, b);
      return (K = t.onload) == null || K.call(t), {
        destroy() {
          var N;
          (N = window.hcaptcha) == null || N.remove(D)
        },
        update(N) {
          var U;
          (U = window.hcaptcha) == null || U.remove(D), D = window.hcaptcha.render(k, N)
        }
      }
    };
  let I = $(!1),
    B = $(!1),
    F;

  function S() {
    const k = document.createElement("script");
    k.type = "text/javascript", k.src = "https://js.hcaptcha.com/1/api.js?render=explicit", k.async = !0, k.defer = !0, k.addEventListener("load", () => p(Ne, !0), {
      once: !0
    }), document.head.appendChild(k)
  }

  function y() {
    p(B, !1), F && clearTimeout(F), F = setTimeout(() => {
      (!r(Ne) || !r(I)) && p(B, !0)
    }, 5e3)
  }

  function P() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(k => k.remove()), p(Ne, !1), S(), y()
  }
  he(() => (p(I, !0), r(Ne) || S(), y(), () => {
    p(I, !1), F && clearTimeout(F)
  }));
  var w = J(),
    Y = G(w);
  {
    var M = k => {
        var b = Ws();
        Mn(b, (D, K) => T == null ? void 0 : T(D, K), () => r(_)), g(k, b)
      },
      tt = k => {
        var b = js(),
          D = nt(b);
        {
          var K = U => {
              var R = Fs();
              oe("click", R, P), g(U, R)
            },
            N = U => {
              var R = Vs();
              g(U, R)
            };
          st(D, U => {
            r(B) ? U(K) : U(N, -1)
          })
        }
        Z(b), g(k, b)
      };
    st(Y, k => {
      r(Ne) && r(I) ? k(M) : k(tt, -1)
    })
  }
  g(s, w), Xt()
}
nn(["click"]);

function gn(...s) {
  return Ii(yi(s))
}
var Gs = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "children"]),
  Ks = ft("<div><!></div>");

function qs(s, t) {
  Yt(t, !0);
  let n = A(t, "ref", 15, null),
    f = Ee(t, Gs);
  var _ = Ks();
  ye(_, I => ({
    class: I,
    ...f
  }), [() => gn("flex items-center", t.class)]);
  var T = nt(_);
  Ht(T, () => t.children ?? qt), Z(_), _n(_, I => n(I), () => n()), g(s, _), Xt()
}
var Be, Qe;
class Ys {
  constructor(t, n) {
    yt(this, Be, () => {});
    yt(this, Qe, E(() => v(this, Be).call(this)));
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
const Xs = 18,
  Wn = 40,
  Qs = `${Wn}px`,
  Zs = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Js({
  containerRef: s,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: f,
  domContext: _
}) {
  let T = $(!1),
    I = $(!1),
    B = $(!1);

  function F() {
    const y = n.current;
    return y === "none" ? !1 : y === "increase-width" && r(T) && r(I)
  }

  function S() {
    const y = s.current,
      P = t.current;
    if (!y || !P || r(B) || n.current === "none") return;
    const w = y,
      Y = w.getBoundingClientRect().left + w.offsetWidth,
      M = w.getBoundingClientRect().top + w.offsetHeight / 2,
      tt = Y - Xs,
      k = M;
    _.querySelectorAll(Zs).length === 0 && _.getDocument().elementFromPoint(tt, k) === y || (p(T, !0), p(B, !0))
  }
  return Ot(() => {
    const y = s.current;
    if (!y || n.current === "none") return;

    function P() {
      const M = ai(y).innerWidth - y.getBoundingClientRect().right;
      p(I, M >= Wn)
    }
    P();
    const w = setInterval(P, 1e3);
    return () => {
      clearInterval(w)
    }
  }), Ot(() => {
    const y = f.current || _.getActiveElement() === t.current;
    if (n.current === "none" || !y) return;
    const P = setTimeout(S, 0),
      w = setTimeout(S, 2e3),
      Y = setTimeout(S, 5e3),
      M = setTimeout(() => {
        p(B, !0)
      }, 6e3);
    return () => {
      clearTimeout(P), clearTimeout(w), clearTimeout(Y), clearTimeout(M)
    }
  }), {
    get hasPwmBadge() {
      return r(T)
    },
    get willPushPwmBadge() {
      return F()
    },
    PWM_BADGE_SPACE_WIDTH: Qs
  }
}
const Fn = hi({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  $s = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var be, ce, Kt, Qt, we, re, de, pe, Ie, Ze, He, Ue, Je, $e, Vn, We, Fe, tn, Ve;
const vn = class vn {
  constructor(t) {
    yt(this, $e);
    jt(this, "opts");
    jt(this, "attachment");
    jt(this, "inputAttachment");
    yt(this, be, $(!1));
    yt(this, ce, li(!1));
    yt(this, Kt, $(null));
    yt(this, Qt, $(null));
    yt(this, we, new Ys(() => this.opts.value.current ?? ""));
    yt(this, re, E(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    yt(this, de, $(pn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    yt(this, pe);
    yt(this, Ie);
    jt(this, "domContext");
    jt(this, "onkeydown", t => {
      const n = t.key;
      $s.includes(n) || t.ctrlKey || t.metaKey || n && r(v(this, re)) && !r(v(this, re)).test(n) && t.preventDefault()
    });
    yt(this, Ze, E(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    yt(this, He, E(() => ({
      id: this.opts.id.current,
      [Fn.root]: "",
      style: r(v(this, Ze)),
      ...this.attachment
    })));
    yt(this, Ue, E(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    yt(this, Je, E(() => ({
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
    yt(this, We, () => {
      var tt;
      const t = this.opts.inputRef.current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        p(v(this, Kt), null), p(v(this, Qt), null);
        return
      }
      const f = t.selectionStart,
        _ = t.selectionEnd,
        T = t.selectionDirection ?? "none",
        I = t.maxLength,
        B = t.value,
        F = r(v(this, de)).prev;
      let S = -1,
        y = -1,
        P;
      if (B.length !== 0 && f !== null && _ !== null) {
        const k = f === _,
          b = f === B.length && B.length < I;
        if (k && !b) {
          const D = f;
          if (D === 0) S = 0, y = 1, P = "forward";
          else if (D === I) S = D - 1, y = D, P = "backward";
          else if (I > 1 && B.length > 1) {
            let K = 0;
            if (F[0] !== null && F[1] !== null) {
              P = D < F[1] ? "backward" : "forward";
              const N = F[0] === F[1] && F[0] < I;
              P === "backward" && !N && (K = -1)
            }
            S = K + D, y = K + D + 1
          }
        }
        S !== -1 && y !== -1 && S !== y && ((tt = this.opts.inputRef.current) == null || tt.setSelectionRange(S, y, P))
      }
      const w = S !== -1 ? S : f,
        Y = y !== -1 ? y : _,
        M = P ?? T;
      p(v(this, Kt), w, !0), p(v(this, Qt), Y, !0), r(v(this, de)).prev = [w, Y, M]
    });
    jt(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(v(this, re)) && !r(v(this, re)).test(n)) {
        t.preventDefault();
        return
      }
      typeof v(this, we).current == "string" && n.length < v(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    jt(this, "onfocus", t => {
      const n = this.opts.inputRef.current;
      if (n) {
        const f = Math.min(n.value.length, this.opts.maxLength.current - 1),
          _ = n.value.length;
        n.setSelectionRange(f, _), p(v(this, Kt), f, !0), p(v(this, Qt), _, !0)
      }
      v(this, ce).current = !0
    });
    jt(this, "onpaste", t => {
      var y, P, w, Y;
      const n = this.opts.inputRef.current;
      if (!n) return;
      const f = M => {
          const tt = n.selectionStart === null ? void 0 : n.selectionStart,
            k = n.selectionEnd === null ? void 0 : n.selectionEnd,
            b = tt !== k,
            D = this.opts.value.current;
          return (b ? D.slice(0, tt) + M + D.slice(k) : D.slice(0, tt) + M + D.slice(tt)).slice(0, this.opts.maxLength.current)
        },
        _ = M => M.length > 0 && r(v(this, re)) && !r(v(this, re)).test(M);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!v(this, Ie).isIOS || !t.clipboardData || !n)) {
        const M = f((P = t.clipboardData) == null ? void 0 : P.getData("text/plain"));
        _(M) && t.preventDefault();
        return
      }
      const T = ((w = t.clipboardData) == null ? void 0 : w.getData("text/plain")) ?? "",
        I = (Y = this.opts.pasteTransformer) != null && Y.current ? this.opts.pasteTransformer.current(T) : T;
      t.preventDefault();
      const B = f(I);
      if (_(B)) return;
      n.value = B, this.opts.value.current = B;
      const F = Math.min(B.length, this.opts.maxLength.current - 1),
        S = B.length;
      n.setSelectionRange(F, S), p(v(this, Kt), F, !0), p(v(this, Qt), S, !0)
    });
    jt(this, "onmouseover", t => {
      p(v(this, be), !0)
    });
    jt(this, "onmouseleave", t => {
      p(v(this, be), !1)
    });
    jt(this, "onblur", t => {
      if (r(v(this, de)).willSyntheticBlur) {
        r(v(this, de)).willSyntheticBlur = !1;
        return
      }
      v(this, ce).current = !1
    });
    yt(this, Fe, E(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(v(this, Je)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(v(this, Kt)),
        "data-pin-input-input-mse": r(v(this, Qt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(v(this, re))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: di(this.opts.disabled.current),
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
    yt(this, tn, E(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const f = v(this, ce).current && r(v(this, Kt)) !== null && r(v(this, Qt)) !== null && (r(v(this, Kt)) === r(v(this, Qt)) && n === r(v(this, Kt)) || n >= r(v(this, Kt)) && n < r(v(this, Qt))),
        _ = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: _,
        isActive: f,
        hasFakeCaret: f && _ === null
      }
    })));
    yt(this, Ve, E(() => ({
      cells: r(v(this, tn)),
      isFocused: v(this, ce).current,
      isHovering: r(v(this, be))
    })));
    var n;
    this.opts = t, this.attachment = dn(this.opts.ref), this.inputAttachment = dn(this.opts.inputRef), this.domContext = new ui(t.ref), me(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), me(this, pe, Js({
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
      const T = Re(this.domContext.getDocument(), "selectionchange", v(this, We), {
        capture: !0
      });
      v(this, We).call(this), this.domContext.getActiveElement() === f && (v(this, ce).current = !0), this.domContext.getElementById("pin-input-style") || bn(this, $e, Vn).call(this);
      const I = () => {
        _ && _.style.setProperty("--bits-pin-input-root-height", `${f.clientHeight}px`)
      };
      I();
      const B = new ResizeObserver(I);
      return B.observe(f), () => {
        T(), B.disconnect()
      }
    }), ci([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
      ta(() => {
        const f = this.opts.inputRef.current;
        if (!f) return;
        f.dispatchEvent(new Event("input"));
        const _ = f.selectionStart,
          T = f.selectionEnd,
          I = f.selectionDirection ?? "none";
        _ !== null && T !== null && (p(v(this, Kt), _, !0), p(v(this, Qt), T, !0), r(v(this, de)).prev = [_, T, I])
      }, this.domContext)
    }), Ot(() => {
      const f = this.opts.value.current,
        _ = v(this, we).current,
        T = this.opts.maxLength.current,
        I = this.opts.onComplete.current;
      _ !== void 0 && f !== _ && _.length < T && f.length === T && I(f)
    })
  }
  static create(t) {
    return new vn(t)
  }
  get rootProps() {
    return r(v(this, He))
  }
  set rootProps(t) {
    p(v(this, He), t)
  }
  get inputWrapperProps() {
    return r(v(this, Ue))
  }
  set inputWrapperProps(t) {
    p(v(this, Ue), t)
  }
  get inputProps() {
    return r(v(this, Fe))
  }
  set inputProps(t) {
    p(v(this, Fe), t)
  }
  get snippetProps() {
    return r(v(this, Ve))
  }
  set snippetProps(t) {
    p(v(this, Ve), t)
  }
};
be = new WeakMap, ce = new WeakMap, Kt = new WeakMap, Qt = new WeakMap, we = new WeakMap, re = new WeakMap, de = new WeakMap, pe = new WeakMap, Ie = new WeakMap, Ze = new WeakMap, He = new WeakMap, Ue = new WeakMap, Je = new WeakMap, $e = new WeakSet, Vn = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const f = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Le(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Le(n.sheet, `[data-pin-input-input]:autofill { ${f} }`), Le(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${f} }`), Le(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Le(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, We = new WeakMap, Fe = new WeakMap, tn = new WeakMap, Ve = new WeakMap;
let fn = vn;
var je;
const yn = class yn {
  constructor(t) {
    jt(this, "opts");
    jt(this, "attachment");
    yt(this, je, E(() => ({
      id: this.opts.id.current,
      [Fn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = dn(this.opts.ref)
  }
  static create(t) {
    return new yn(t)
  }
  get props() {
    return r(v(this, je))
  }
  set props(t) {
    p(v(this, je), t)
  }
};
je = new WeakMap;
let mn = yn;

function ta(s, t) {
  const n = t.setTimeout(s, 0),
    f = t.setTimeout(s, 10),
    _ = t.setTimeout(s, 50);
  return [n, f, _]
}

function Le(s, t) {
  try {
    s.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var ea = new Set(["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "inputRef", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]),
  na = ft("<div><!> <div><input/></div></div>");

function ia(s, t) {
  const n = Rn();
  Yt(t, !0);
  let f = A(t, "id", 19, () => hn(n)),
    _ = A(t, "inputId", 19, () => `${hn(n)}-input`),
    T = A(t, "ref", 15, null),
    I = A(t, "inputRef", 15, null),
    B = A(t, "maxlength", 3, 6),
    F = A(t, "textalign", 3, "left"),
    S = A(t, "inputmode", 3, "numeric"),
    y = A(t, "onComplete", 3, Sn),
    P = A(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    w = A(t, "class", 3, ""),
    Y = A(t, "autocomplete", 3, "one-time-code"),
    M = A(t, "disabled", 3, !1),
    tt = A(t, "value", 15, ""),
    k = A(t, "onValueChange", 3, Sn),
    b = Ee(t, ea);
  const D = fn.create({
      id: kt(() => f()),
      ref: kt(() => T(), q => T(q)),
      inputRef: kt(() => I(), q => I(q)),
      inputId: kt(() => _()),
      autocomplete: kt(() => Y()),
      maxLength: kt(() => B()),
      textAlign: kt(() => F()),
      disabled: kt(() => M()),
      inputmode: kt(() => S()),
      pattern: kt(() => t.pattern),
      onComplete: kt(() => y()),
      value: kt(() => tt(), q => {
        tt(q), k()(q)
      }),
      pushPasswordManagerStrategy: kt(() => P()),
      pasteTransformer: kt(() => t.pasteTransformer)
    }),
    K = E(() => qe(b, D.inputProps)),
    N = E(() => qe(D.rootProps, {
      class: w()
    })),
    U = E(() => qe(D.inputWrapperProps, {}));
  var R = na();
  ye(R, () => ({
    ...r(N)
  }));
  var mt = nt(R);
  Ht(mt, () => t.children ?? qt, () => D.snippetProps);
  var Tt = It(mt, 2);
  ye(Tt, () => ({
    ...r(U)
  }));
  var x = nt(Tt);
  ye(x, () => ({
    ...r(K)
  }), void 0, void 0, void 0, void 0, !0), Z(Tt), Z(R), g(s, R), Xt()
}
var ra = new Set(["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]),
  oa = ft("<div><!></div>");

function sa(s, t) {
  const n = Rn();
  Yt(t, !0);
  let f = A(t, "id", 19, () => hn(n)),
    _ = A(t, "ref", 15, null),
    T = Ee(t, ra);
  const I = mn.create({
      id: kt(() => f()),
      ref: kt(() => _(), w => _(w)),
      cell: kt(() => t.cell)
    }),
    B = E(() => qe(T, I.props));
  var F = J(),
    S = G(F);
  {
    var y = w => {
        var Y = J(),
          M = G(Y);
        Ht(M, () => t.child, () => ({
          props: r(B)
        })), g(w, Y)
      },
      P = w => {
        var Y = oa();
        ye(Y, () => ({
          ...r(B)
        }));
        var M = nt(Y);
        Ht(M, () => t.children ?? qt), Z(Y), g(w, Y)
      };
    st(S, w => {
      t.child ? w(y) : w(P, -1)
    })
  }
  g(s, F), Xt()
}
var aa = new Set(["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]),
  la = ft('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  ua = ft(" <!>", 1);

function ca(s, t) {
  Yt(t, !0);
  let n = A(t, "ref", 15, null),
    f = Ee(t, aa);
  var _ = J(),
    T = G(_);
  {
    let I = E(() => gn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(T, () => sa, (B, F) => {
      F(B, ke({
        get cell() {
          return t.cell
        },
        get class() {
          return r(I)
        }
      }, () => f, {
        get ref() {
          return n()
        },
        set ref(S) {
          n(S)
        },
        children: (S, y) => {
          On();
          var P = ua(),
            w = G(P),
            Y = It(w);
          {
            var M = tt => {
              var k = la();
              g(tt, k)
            };
            st(Y, tt => {
              t.cell.hasFakeCaret && tt(M)
            })
          }
          Et(() => Bt(w, `${t.cell.char??""} `)), g(S, P)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  g(s, _), Xt()
}
var da = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);

function ha(s, t) {
  Yt(t, !0);
  let n = A(t, "ref", 15, null),
    f = A(t, "value", 15, ""),
    _ = Ee(t, da);
  var T = J(),
    I = G(T);
  {
    let B = E(() => gn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(I, () => ia, (F, S) => {
      S(F, ke({
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
  g(s, T), Xt()
}
var un = {
    exports: {}
  },
  An;

function fa() {
  return An || (An = 1, (function(s) {
    (function(t) {
      s.exports ? s.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var n = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          _ = Object.getOwnPropertyNames,
          T = Object.prototype.hasOwnProperty,
          I = (l, e) => {
            for (var i in e) n(l, i, {
              get: e[i],
              enumerable: !0
            })
          },
          B = (l, e, i, o) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of _(e)) !T.call(l, a) && a !== i && n(l, a, {
                get: () => e[a],
                enumerable: !(o = f(e, a)) || o.enumerable
              });
            return l
          },
          F = l => B(n({}, "__esModule", {
            value: !0
          }), l),
          S = {};
        I(S, {
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
          P = [];
        for (const l of y) P.push({
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
        var w = P,
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
          M = Y,
          tt = {
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
          k = tt,
          b = {
            ...M,
            ...k
          },
          D = b,
          K = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          N = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          U = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          R = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          mt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          Tt = {
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
          St = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          xt = {
            ISO2: "us"
          },
          Nt = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Mt = {
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
          X = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const l = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = zt("(max-width: 500px)"),
                i = zt("(max-height: 600px)"),
                o = zt("(pointer: coarse)");
              return l || e || o && i
            }
            return !1
          },
          pt = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: Nt.POLITE,
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
            useFullscreenPopup: X(),
            validationNumberTypes: ["MOBILE"]
          },
          vt = (l, e) => {
            l.useFullscreenPopup && (l.fixDropdownWidth = !1), l.onlyCountries.length === 1 && (l.initialCountry = l.onlyCountries[0]), l.separateDialCode && (l.nationalMode = !1), l.allowDropdown && !l.showFlags && !l.separateDialCode && (l.nationalMode = !1), l.useFullscreenPopup && !l.dropdownContainer && (l.dropdownContainer = document.body), l.i18n = {
              ...e,
              ...l.i18n
            }
          },
          Ct = l => l.replace(/\D/g, ""),
          ne = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          L = (l, e) => {
            const i = ne(e),
              o = [],
              a = [],
              c = [],
              u = [],
              h = [],
              d = [];
            for (const H of l) H.iso2 === i ? o.push(H) : H.normalisedName.startsWith(i) ? a.push(H) : H.normalisedName.includes(i) ? c.push(H) : i === H.dialCode || i === H.dialCodePlus ? u.push(H) : H.dialCodePlus.includes(i) ? h.push(H) : H.initials.includes(i) && d.push(H);
            const C = (H, _t) => H.priority - _t.priority;
            return [...o.sort(C), ...a.sort(C), ...c.sort(C), ...u.sort(C), ...h.sort(C), ...d.sort(C)]
          },
          z = (l, e) => {
            const i = e.toLowerCase();
            for (const o of l)
              if (o.name.toLowerCase().startsWith(i)) return o;
            return null
          },
          wt = l => Object.keys(l).filter(e => !!l[e]).join(" "),
          lt = (l, e, i) => {
            const o = document.createElement(l);
            return e && Object.entries(e).forEach(([a, c]) => o.setAttribute(a, c)), i && i.appendChild(o), o
          },
          Ut = () => `
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
                useFullscreenPopup: o
              } = this.options, a = wt({
                iti: !0,
                "iti--allow-dropdown": l,
                "iti--show-flags": e,
                "iti--inline-dropdown": !o,
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
                showFlags: o
              } = this.options;
              if (e || o || i) {
                this.countryContainer = lt("div", {
                  class: `iti__country-container ${N.V_HIDE}`
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
                  class: N.FLAG
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
                i18n: o,
                dropdownContainer: a,
                containerClass: c
              } = this.options, u = l ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = lt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${N.HIDE} ${u}`,
                  role: "dialog",
                  [at.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), i && this._buildSearchUI(), this.countryList = lt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [at.LABEL]: o.countryListAriaLabel
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
              }, e), this.searchIcon.innerHTML = Ut(), this.searchInput = lt("input", {
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
                class: `iti__search-clear ${N.HIDE}`,
                [at.LABEL]: l.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = $t(this.id), this.searchResultsA11yText = lt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = lt("div", {
                class: `iti__no-results ${N.HIDE}`,
                [at.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = l.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(N.V_HIDE))
            }
            _maybeBuildHiddenInputs(l) {
              var i, o;
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
                  const u = (o = this.telInput.form) == null ? void 0 : o.querySelector(`input[name="${c.country}"]`);
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
                  o = wt({
                    [N.COUNTRY_ITEM]: !0
                  }),
                  a = lt("li", {
                    id: `iti-${this.id}__item-${i.iso2}`,
                    class: o,
                    tabindex: "-1",
                    role: "option",
                    [at.SELECTED]: "false"
                  });
                a.dataset.dialCode = i.dialCode, a.dataset.countryCode = i.iso2, i.nodeById[this.id] = a, this.options.showFlags && lt("div", {
                  class: `${N.FLAG} iti__${i.iso2}`
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
                const o = this.selectedCountry.cloneNode(!0);
                i.appendChild(o);
                const a = o.offsetWidth;
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
                o = e.offsetHeight,
                a = e.getBoundingClientRect().top + i,
                c = a + o,
                u = l.offsetHeight,
                h = l.getBoundingClientRect().top + i,
                d = h + u,
                C = h - a + e.scrollTop;
              if (h < a) e.scrollTop = C;
              else if (d > c) {
                const H = o - u;
                e.scrollTop = C - H
              }
            }
            highlightListItem(l, e) {
              const i = this.highlightedItem;
              if (i && i.classList.remove(N.HIGHLIGHT), this.highlightedItem = l, this.highlightedItem && (this.highlightedItem.classList.add(N.HIGHLIGHT), this.options.countrySearch)) {
                const o = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(at.ACTIVE_DESCENDANT, o)
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
                const o = i.nodeById[this.id];
                o && (this.countryList.appendChild(o), e && (this.highlightListItem(o, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(N.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(N.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
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
              const o = e.map(a => a.toLowerCase());
              return w.filter(a => o.includes(a.iso2))
            } else if (i.length) {
              const o = i.map(a => a.toLowerCase());
              return w.filter(a => !o.includes(a.iso2))
            }
            return w
          },
          Wt = (l, e) => {
            for (const i of l) {
              const o = i.iso2.toLowerCase();
              e.i18n[o] && (i.name = e.i18n[o])
            }
          },
          Ft = l => {
            const e = new Set;
            let i = 0;
            const o = {},
              a = (u, h) => {
                if (!u || !h) return;
                h.length > i && (i = h.length), o.hasOwnProperty(h) || (o[h] = []);
                const d = o[h];
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
                const h = o[u.dialCode][0];
                for (const d of u.areaCodes) {
                  for (let C = 1; C < d.length; C++) {
                    const H = d.substring(0, C),
                      _t = u.dialCode + H;
                    a(h, _t), a(u.iso2, _t)
                  }
                  a(u.iso2, u.dialCode + d)
                }
              }
            }
            return {
              dialCodes: e,
              dialCodeMaxLen: i,
              dialCodeToIso2Map: o
            }
          },
          At = (l, e) => {
            e.countryOrder && (e.countryOrder = e.countryOrder.map(i => i.toLowerCase())), l.sort((i, o) => {
              const {
                countryOrder: a
              } = e;
              if (a) {
                const c = a.indexOf(i.iso2),
                  u = a.indexOf(o.iso2),
                  h = c > -1,
                  d = u > -1;
                if (h || d) return h && d ? c - u : h ? -1 : 1
              }
              return i.name.localeCompare(o.name)
            })
          },
          Q = l => {
            for (const e of l) e.normalisedName = ne(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(i => i[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          fe = (l, e, i, o) => {
            let a = l;
            if (i && e) {
              e = `+${o.dialCode}`;
              const c = a[e.length] === " " || a[e.length] === "-" ? e.length + 1 : e.length;
              a = a.substring(c)
            }
            return a
          },
          Te = (l, e, i, o, a) => {
            const c = i ? i.formatNumberAsYouType(l, o.iso2) : l,
              {
                dialCode: u
              } = o;
            return a && e.charAt(0) !== "+" && c.includes(`+${u}`) ? (c.split(`+${u}`)[1] || "").trim() : c
          },
          De = (l, e, i, o) => {
            if (i === 0 && !o) return 0;
            let a = 0;
            for (let c = 0; c < e.length; c++) {
              if (/[+0-9]/.test(e[c]) && a++, a === l && !o) return c + 1;
              if (o && a === l + 1) return c
            }
            return e.length
          },
          xe = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ge = l => {
            const e = Ct(l);
            if (e.startsWith(dt.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return xe.includes(i)
            }
            return !1
          };
        for (const l of w) l.name = D[l.iso2];
        var Se = 0,
          O = new Set(w.map(l => l.iso2)),
          W = l => O.has(l),
          rt = class jn {
            constructor(e, i = {}) {
              this.id = Se++, this.options = {
                ...pt,
                ...i
              }, vt(this.options, D), this.ui = new _e(e, this.options, this.id), this.isAndroid = jn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = ie(this.options);
              const {
                dialCodes: o,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: c
              } = Ft(this.countries);
              this.dialCodes = o, this.dialCodeMaxLen = a, this.dialCodeToIso2Map = c, this.countryByIso2 = new Map(this.countries.map(u => [u.iso2, u])), this._init()
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
              return e.replace(/[0-9]/g, o => String.fromCharCode(i + Number(o)))
            }
            _normaliseNumerals(e) {
              if (!e) return "";
              if (this._updateNumeralSet(e), this.userNumeralSet === "ascii") return e;
              const i = this.userNumeralSet === "arabic-indic" ? 1632 : 1776,
                o = this.userNumeralSet === "arabic-indic" ? /[\u0660-\u0669]/g : /[\u06F0-\u06F9]/g;
              return e.replace(o, a => String.fromCharCode(48 + (a.charCodeAt(0) - i)))
            }
            _getTelInputValue() {
              const e = this.ui.telInput.value.trim();
              return this._normaliseNumerals(e)
            }
            _setTelInputValue(e) {
              this.ui.telInput.value = this._mapAsciiToUserNumerals(e)
            }
            _createInitPromises() {
              const e = new Promise((o, a) => {
                  this.resolveAutoCountryPromise = o, this.rejectAutoCountryPromise = a
                }),
                i = new Promise((o, a) => {
                  this.resolveUtilsScriptPromise = o, this.rejectUtilsScriptPromise = a
                });
              return Promise.all([e, i])
            }
            _init() {
              this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
            }
            _processCountryData() {
              Wt(this.countries, this.options), At(this.countries, this.options), Q(this.countries)
            }
            _setInitialState(e = !1) {
              const i = this.ui.telInput.getAttribute("value"),
                o = this._normaliseNumerals(i),
                a = this._getTelInputValue(),
                u = o && o.startsWith("+") && (!a || !a.startsWith("+")) ? o : a,
                h = this._getDialCode(u),
                d = ge(u),
                {
                  initialCountry: C,
                  geoIpLookup: H
                } = this.options,
                _t = C === Mt.AUTO && H;
              if (h && !d) this._updateCountryFromNumber(u);
              else if (!_t || e) {
                const ct = C ? C.toLowerCase() : "";
                W(ct) ? this._setCountry(ct) : h && d ? this._setCountry(xt.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(N.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                o = this.ui.telInput.closest("label");
              o && o.addEventListener("click", i, {
                signal: e
              });
              const a = () => {
                this.ui.dropdownContent.classList.contains(N.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", a, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(N.HIDE) && [U.ARROW_UP, U.ARROW_DOWN, U.SPACE, U.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === U.TAB && this._closeDropdown()
              };
              this.ui.countryContainer.addEventListener("keydown", c, {
                signal: e
              })
            }
            _initRequests() {
              const {
                loadUtils: e,
                initialCountry: i,
                geoIpLookup: o
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
              i === Mt.AUTO && o && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              m.autoCountry ? this.handleAutoCountry() : m.startedLoadingAutoCountry || (m.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const i = e.toLowerCase();
                W(i) ? (m.autoCountry = i, setTimeout(() => et("handleAutoCountry"))) : (this._setInitialState(!0), et("rejectAutoCountryPromise"))
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
                separateDialCode: o,
                allowDropdown: a,
                countrySearch: c
              } = this.options;
              let u = !1;
              mt.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const h = d => {
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && o && a && c) {
                  const j = this.ui.telInput.selectionStart || 0,
                    gt = C.substring(0, j - 1),
                    it = C.substring(j);
                  this._setTelInputValue(gt + it), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const H = (d == null ? void 0 : d.data) && mt.NON_PLUS_NUMERIC.test(d.data),
                  _t = (d == null ? void 0 : d.inputType) === R.PASTE && C;
                H || _t && !e ? u = !0 : mt.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const ct = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  V = this.userNumeralSet === "ascii";
                if (i && !u && !ct && V) {
                  const j = this.ui.telInput.selectionStart || 0,
                    it = C.substring(0, j).replace(mt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (d == null ? void 0 : d.inputType) === R.DELETE_FWD,
                    ot = this._getFullNumber(),
                    Gt = Te(ot, C, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    Vt = De(it, Gt, j, ht);
                  this._setTelInputValue(Gt), this.ui.telInput.setSelectionRange(Vt, Vt)
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
                allowDropdown: o,
                countrySearch: a
              } = this.options;
              if (e || i) {
                const c = u => {
                  if (u.key && u.key.length === 1 && !u.altKey && !u.ctrlKey && !u.metaKey) {
                    if (i && o && a && u.key === "+") {
                      u.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (e) {
                      const h = this._getTelInputValue(),
                        C = !h.startsWith("+") && this.ui.telInput.selectionStart === 0 && u.key === "+",
                        H = this._normaliseNumerals(u.key),
                        _t = /^[0-9]$/.test(H),
                        ct = i ? _t : C || _t,
                        V = this.ui.telInput,
                        j = V.selectionStart,
                        gt = V.selectionEnd,
                        it = h.slice(0, j),
                        ht = h.slice(gt),
                        ot = it + u.key + ht,
                        Gt = this._getFullNumber(ot),
                        Vt = m.utils.getCoreNumber(Gt, this.selectedCountryData.iso2),
                        Dt = this.maxCoreNumberLength && Vt.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Gt) !== null;
                      (!ct || Dt && !te && !C) && u.preventDefault()
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
                  const o = this.ui.telInput,
                    a = o.selectionStart,
                    c = o.selectionEnd,
                    u = this._getTelInputValue(),
                    h = u.slice(0, a),
                    d = u.slice(c),
                    C = this.selectedCountryData.iso2,
                    H = i.clipboardData.getData("text"),
                    _t = this._normaliseNumerals(H),
                    ct = a === 0 && c > 0,
                    V = !u.startsWith("+") || ct,
                    j = _t.replace(mt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    gt = j.startsWith("+"),
                    it = j.replace(/\+/g, ""),
                    ht = gt && V ? `+${it}` : it;
                  let ot = h + ht + d;
                  if (ot.length > 5) {
                    let Vt = m.utils.getCoreNumber(ot, C);
                    for (; Vt.length === 0 && ot.length > 0;) ot = ot.slice(0, -1), Vt = m.utils.getCoreNumber(ot, C);
                    if (!Vt) return;
                    if (this.maxCoreNumberLength && Vt.length > this.maxCoreNumberLength)
                      if (o.selectionEnd === u.length) {
                        const Dt = Vt.length - this.maxCoreNumberLength;
                        ot = ot.slice(0, ot.length - Dt)
                      } else return
                  }
                  this._setTelInputValue(ot);
                  const Gt = a + ht.length;
                  o.setSelectionRange(Gt, Gt), o.dispatchEvent(new InputEvent("input", {
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
              const o = new CustomEvent(e, {
                bubbles: !0,
                cancelable: !0,
                detail: i
              });
              this.ui.telInput.dispatchEvent(o)
            }
            _openDropdown() {
              const {
                fixDropdownWidth: e,
                countrySearch: i
              } = this.options;
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(N.HIDE), this.ui.selectedCountry.setAttribute(at.EXPANDED, "true"), this._setDropdownPosition(), i) {
                const o = this.ui.countryList.firstElementChild;
                o && (this.ui.highlightListItem(o, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(N.ARROW_UP), this._trigger(K.OPEN_COUNTRY_DROPDOWN)
            }
            _setDropdownPosition() {
              if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.ui.dropdown), !this.options.useFullscreenPopup) {
                const e = this.ui.telInput.getBoundingClientRect(),
                  i = this.ui.telInput.offsetHeight;
                if (this.options.dropdownContainer) {
                  this.ui.dropdown.style.top = `${e.top+i}px`, this.ui.dropdown.style.left = `${e.left}px`;
                  const o = () => this._closeDropdown();
                  window.addEventListener("scroll", o, {
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
              const i = o => {
                var c;
                const a = (c = o.target) == null ? void 0 : c.closest(`.${N.COUNTRY_ITEM}`);
                a && this.ui.highlightListItem(a, !1)
              };
              this.ui.countryList.addEventListener("mouseover", i, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const i = o => {
                var c;
                const a = (c = o.target) == null ? void 0 : c.closest(`.${N.COUNTRY_ITEM}`);
                a && this._selectListItem(a)
              };
              this.ui.countryList.addEventListener("click", i, {
                signal: e
              })
            }
            _bindDropdownClickOffListener(e) {
              const i = o => {
                !!o.target.closest(`#iti-${this.id}__dropdown-content`) || this._closeDropdown()
              };
              setTimeout(() => {
                document.documentElement.addEventListener("click", i, {
                  signal: e
                })
              }, 0)
            }
            _bindDropdownKeydownListener(e) {
              let i = "",
                o = null;
              const a = c => {
                [U.ARROW_UP, U.ARROW_DOWN, U.ENTER, U.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === U.ARROW_UP || c.key === U.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === U.ENTER ? this._handleEnterKey() : c.key === U.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && mt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), o && clearTimeout(o), i += c.key.toLowerCase(), this._searchForCountry(i), o = setTimeout(() => {
                  i = ""
                }, Tt.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", a, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const i = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(N.HIDE) : this.ui.searchClearButton.classList.add(N.HIDE)
              };
              let o = null;
              const a = () => {
                o && clearTimeout(o), o = setTimeout(() => {
                  i(), o = null
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
                const o = i.nodeById[this.id];
                this.ui.highlightListItem(o, !1), this.ui.scrollTo(o)
              }
            }
            _filterCountriesByQuery(e) {
              let i;
              e === "" ? i = this.countries : i = L(this.countries, e), this.ui.filterCountries(i)
            }
            _handleUpDownKey(e) {
              var o, a;
              let i = e === U.ARROW_UP ? (o = this.ui.highlightedItem) == null ? void 0 : o.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === U.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let i = e;
              if (this.options.formatOnDisplay && m.utils && this.selectedCountryData) {
                const o = this.options.nationalMode || !i.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: a,
                    INTERNATIONAL: c
                  } = m.utils.numberFormat,
                  u = o ? a : c;
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
                nationalPrefix: o
              } = this.selectedCountryData;
              if (e.startsWith("+") || !i) return e;
              const u = o && e.startsWith(o) && !this.options.separateDialCode ? e.substring(1) : e;
              return `+${i}${u}`
            }
            _getNewCountryFromNumber(e) {
              const i = e.indexOf("+");
              let o = i ? e.substring(i) : e;
              const a = this.selectedCountryData.iso2,
                c = this.selectedCountryData.dialCode;
              o = this._ensureHasDialCode(o);
              const u = this._getDialCode(o, !0),
                h = Ct(o);
              if (u) {
                const d = Ct(u),
                  C = this.dialCodeToIso2Map[d];
                if (C.length === 1) return C[0] === a ? null : C[0];
                if (!a && this.defaultCountry && C.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === dt.NANP && ge(h)) return null;
                const {
                  areaCodes: _t,
                  priority: ct
                } = this.selectedCountryData;
                if (_t) {
                  const ht = _t.map(ot => `${c}${ot}`);
                  for (const ot of ht)
                    if (h.startsWith(ot)) return null
                }
                const j = _t && !(ct === 0) && h.length > d.length,
                  gt = a && C.includes(a) && !j,
                  it = a === C[0];
                if (!gt && !it) return C[0]
              } else if (o.startsWith("+") && h.length) {
                const d = this.selectedCountryData.dialCode || "";
                return d && d.startsWith(h) ? null : ""
              } else if ((!o || o === "+") && !a) return this.defaultCountry;
              return null
            }
            _setCountry(e) {
              const {
                separateDialCode: i,
                showFlags: o,
                i18n: a,
                allowDropdown: c
              } = this.options, u = this.selectedCountryData.iso2 || "";
              if (c && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const h = e && o ? `${N.FLAG} iti__${e}` : `${N.FLAG} ${N.GLOBE}`;
                let d, C;
                if (e) {
                  const {
                    name: H,
                    dialCode: _t
                  } = this.selectedCountryData;
                  C = H, d = a.selectedCountryAriaLabel.replace("${countryName}", H).replace("${dialCode}", `+${_t}`)
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
                validationNumberTypes: o
              } = this.options, {
                iso2: a
              } = this.selectedCountryData;
              if (e && m.utils)
                if (a) {
                  const c = m.utils.numberType[i];
                  let u = m.utils.getExampleNumber(a, !1, c, !0),
                    h = u;
                  for (; m.utils.isPossibleNumber(u, a, o);) h = u, u += "0";
                  const d = m.utils.getCoreNumber(h, a);
                  this.maxCoreNumberLength = d.length, a === "by" && (this.maxCoreNumberLength = d.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: e,
                placeholderNumberType: i,
                nationalMode: o,
                customPlaceholder: a
              } = this.options, c = e === Nt.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === Nt.POLITE;
              if (m.utils && c) {
                const u = m.utils.numberType[i];
                let h = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, o, u) : "";
                h = this._beforeSetNumber(h), typeof a == "function" && (h = a(h, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", h)
              }
            }
            _selectListItem(e) {
              const i = e.dataset[ee.COUNTRY_CODE],
                o = this._setCountry(i);
              this._closeDropdown();
              const a = e.dataset[ee.DIAL_CODE];
              if (this._updateDialCode(a), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), o && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(N.HIDE) || (this.ui.dropdownContent.classList.add(N.HIDE), this.ui.selectedCountry.setAttribute(at.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(at.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(N.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(N.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(K.CLOSE_COUNTRY_DROPDOWN))
            }
            _updateDialCode(e) {
              const i = this._getTelInputValue(),
                o = `+${e}`;
              let a;
              if (i.startsWith("+")) {
                const c = this._getDialCode(i);
                c ? a = i.replace(c, o) : a = o, this._setTelInputValue(a)
              }
            }
            _getDialCode(e, i) {
              let o = "";
              if (e.startsWith("+")) {
                let a = "",
                  c = !1;
                for (let u = 0; u < e.length; u++) {
                  const h = e.charAt(u);
                  if (/[0-9]/.test(h)) {
                    if (a += h, !!!this.dialCodeToIso2Map[a]) break;
                    if (this.dialCodes.has(a)) {
                      if (o = e.substring(0, u + 1), c = !0, !i) break
                    } else i && c && (o = e.substring(0, u + 1));
                    if (a.length === this.dialCodeMaxLen) break
                  }
                }
              }
              return o
            }
            _getFullNumber(e) {
              const i = e ? this._normaliseNumerals(e) : this._getTelInputValue(),
                {
                  dialCode: o
                } = this.selectedCountryData;
              let a;
              const c = Ct(i);
              return this.options.separateDialCode && !i.startsWith("+") && o && c ? a = `+${o}` : a = "", a + i
            }
            _beforeSetNumber(e) {
              const i = this._getDialCode(e),
                o = fe(e, i, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(o)
            }
            _triggerCountryChange() {
              this._trigger(K.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Mt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(N.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
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
                } = this.selectedCountryData, o = this._getFullNumber(), a = m.utils.formatNumber(o, i, e);
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
              if (e === St.DIAL_CODE && m.utils) {
                const o = this._getFullNumber(),
                  a = m.utils.getCoreNumber(o, i);
                if (a[0] === St.MOBILE_PREFIX && a.length !== St.MOBILE_CORE_LENGTH) return !1
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
                o = this._getFullNumber(),
                a = o.search(mt.ALPHA_UNICODE);
              if (a > -1 && !this.options.allowPhonewords) {
                const u = o.substring(0, a),
                  h = i(u),
                  d = i(o);
                return h && d
              }
              return i(o)
            }
            _utilsIsValidNumber(e) {
              return m.utils ? m.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const i = e == null ? void 0 : e.toLowerCase();
              if (!W(i)) throw new Error(`Invalid country code: '${i}'`);
              const o = this.selectedCountryData.iso2;
              if (e && i !== o || !e && o) {
                if (this._setCountry(i), this._updateDialCode(this.selectedCountryData.dialCode), this.options.formatOnDisplay) {
                  const c = this._getTelInputValue();
                  this._updateValFromNumber(c)
                }
                this._triggerCountryChange()
              }
            }
            setNumber(e) {
              const i = this._normaliseNumerals(e),
                o = this._updateCountryFromNumber(i);
              this._updateValFromNumber(i), o && this._triggerCountryChange(), this._trigger(K.INPUT, {
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
                const o = i == null ? void 0 : i.default;
                if (!o || typeof o != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return m.utils = o, et("handleUtils"), !0
              }).catch(i => {
                throw et("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          et = (l, ...e) => {
            Object.values(m.instances).forEach(i => {
              const o = i[l];
              typeof o == "function" && o.apply(i, e)
            })
          },
          m = Object.assign((l, e) => {
            const i = new rt(l, e);
            return m.instances[i.id] = i, l.iti = i, i
          }, {
            defaults: pt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => w,
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
        return F(S)
      })();
      return t.default
    })
  })(un)), un.exports
}
var ma = fa();
const pa = fi(ma);
var _a = ft('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  Pn = ft('<span class="w-8"> </span>'),
  kn = ft('<span class="loading loading-spinner center-absolute absolute"></span>'),
  ga = ft('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  va = ft('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  ya = ft('<div class="flex h-full w-full flex-col items-center"><!></div>');

function Ca(s, t) {
  Yt(t, !0);
  let n = A(t, "verifyingPhone", 15, ""),
    f = $(!0),
    _ = $(0),
    T = $(!1);
  const I = E(() => r(_) > 0 || r(T));
  let B = $(!1),
    F = $(""),
    S = $(void 0);
  const y = E(() => {
    var b;
    return `phone:${(b=Ye.data)==null?void 0:b.id}`
  });
  Ot(() => {
    const b = localStorage.getItem(r(y));
    b && n(b)
  }), he(() => {
    on.getOtpCooldown().then(K => {
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
  async function P(b) {
    try {
      p(T, !0);
      const D = await on.sendOtp(b),
        K = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      ve.info(Mo({
        channel: K[D.channel],
        phone: D.phone
      }), {
        duration: 15e3
      }), n(D.phone), p(_, D.cooldownMs, !0), localStorage.setItem(r(y), n())
    } catch (D) {
      ve.error(D.message)
    } finally {
      p(T, !1)
    }
  }
  Ot(() => {
    r(F).length === 6 && (p(B, !0), (async () => {
      try {
        await on.verifyChallenge({
          type: "otp",
          code: r(F)
        }), ve.success(Br()), localStorage.removeItem(r(y)), t.onsuccess(n())
      } catch (b) {
        ve.error(b.message)
      } finally {
        p(F, ""), p(B, !1)
      }
    })())
  });
  var w = ya(),
    Y = nt(w);
  {
    var M = b => {
        var D = _a();
        g(b, D)
      },
      tt = b => {
        var D = ga(),
          K = G(D),
          N = nt(K),
          U = nt(N),
          R = nt(U, !0);
        Z(U);
        var mt = It(U, 2),
          Tt = nt(mt, !0);
        Z(mt), Z(N);
        var x = It(N, 2),
          q = nt(x);
        Bn(q, () => X => {
          var pt, vt;
          return p(S, pa(X, {
            strictMode: !0,
            initialCountry: ((vt = (pt = Ye.data) == null ? void 0 : pt.country) == null ? void 0 : vt.toLocaleLowerCase()) ?? "br",
            loadUtils: () => wi(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: document.body
          })), () => {
            var Ct;
            (Ct = r(S)) == null || Ct.destroy()
          }
        });
        var dt = It(q, 2),
          St = nt(dt),
          xt = It(St);
        {
          var Nt = X => {
            var pt = Pn(),
              vt = nt(pt);
            Z(pt), Et(Ct => Bt(vt, `(${Ct??""})`), [() => En(r(_))]), g(X, pt)
          };
          st(xt, X => {
            r(_) > 0 && X(Nt)
          })
        }
        var Mt = It(xt, 2);
        {
          var ee = X => {
            var pt = kn();
            g(X, pt)
          };
          st(Mt, X => {
            r(T) && X(ee)
          })
        }
        Z(dt), Z(x), Z(K);
        var at = It(K, 2),
          zt = nt(at, !0);
        Z(at), Et((X, pt, vt, Ct) => {
          Bt(R, X), Bt(Tt, pt), dt.disabled = r(I), Bt(St, `${vt??""} `), Bt(zt, Ct)
        }, [() => Ei(), () => Er(), () => uo(), () => dr()]), en("submit", x, async () => {
          var pt;
          if (r(I)) return;
          if (!((pt = r(S)) != null && pt.isValidNumber())) {
            ve.error(Ji());
            return
          }
          const X = r(S).getNumber();
          await P(X)
        }), g(b, D)
      },
      k = b => {
        var D = va(),
          K = G(D),
          N = nt(K),
          U = nt(N, !0);
        Z(N);
        var R = It(N, 2),
          mt = nt(R, !0);
        Z(R), Z(K);
        var Tt = It(K, 2),
          x = nt(Tt);
        {
          const X = (pt, vt) => {
            let Ct = () => vt == null ? void 0 : vt().cells;
            var ne = J(),
              L = G(ne);
            Jt(L, () => qs, (z, wt) => {
              wt(z, {
                class: "border-primary",
                children: (lt, Ut) => {
                  var $t = J(),
                    _e = G($t);
                  Xe(_e, 16, Ct, ie => ie, (ie, Wt) => {
                    var Ft = J(),
                      At = G(Ft);
                    Jt(At, () => ca, (Q, fe) => {
                      fe(Q, {
                        get cell() {
                          return Wt
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
            }), g(pt, ne)
          };
          Jt(x, () => ha, (pt, vt) => {
            vt(pt, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return r(B)
              },
              get value() {
                return r(F)
              },
              set value(Ct) {
                p(F, Ct, !0)
              },
              children: X,
              $$slots: {
                default: !0
              }
            })
          })
        }
        Z(Tt);
        var q = It(Tt, 2),
          dt = nt(q),
          St = nt(dt),
          xt = It(St);
        {
          var Nt = X => {
            var pt = Pn(),
              vt = nt(pt);
            Z(pt), Et(Ct => Bt(vt, `(${Ct??""})`), [() => En(r(_))]), g(X, pt)
          };
          st(xt, X => {
            r(_) > 0 && X(Nt)
          })
        }
        var Mt = It(xt, 2);
        {
          var ee = X => {
            var pt = kn();
            g(X, pt)
          };
          st(Mt, X => {
            r(T) && X(ee)
          })
        }
        Z(dt);
        var at = It(dt, 2),
          zt = nt(at, !0);
        Z(at), Z(q), Et((X, pt, vt, Ct) => {
          Bt(U, X), Bt(mt, pt), dt.disabled = r(I), Bt(St, `${vt??""} `), Bt(zt, Ct)
        }, [() => Ui(), () => Io({
          phone: n()
        }), () => Qr(), () => Xo()]), oe("click", dt, async () => {
          await P(n())
        }), oe("click", at, () => {
          n("")
        }), g(b, D)
      };
    st(Y, b => {
      r(f) ? b(M) : n() ? b(k, -1) : b(tt, 1)
    })
  }
  Z(w), g(s, w), Xt()
}
nn(["click"]);
let Ae = $(!1);
var ba = ft("<div></div>"),
  wa = ft('<button type="button" class="btn">Retry</button>'),
  Ia = ft('<span class="loading loading-spinner loading-lg"></span>'),
  Ea = ft("<div><!></div>");

function Ta(s, t) {
  Yt(t, !0);
  let n = A(t, "widgetId", 15),
    f = A(t, "appearance", 3, "always"),
    _ = A(t, "language", 3, "auto"),
    T = A(t, "execution", 3, "render"),
    I = A(t, "retryInterval", 3, 8e3),
    B = A(t, "retry", 3, "auto"),
    F = A(t, "refreshExpired", 3, "auto"),
    S = A(t, "theme", 3, "auto"),
    y = A(t, "size", 3, "normal"),
    P = A(t, "tabIndex", 3, 0);
  A(t, "reset", 15)(() => {
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
      "refresh-expired": F(),
      "retry-interval": I(),
      tabindex: P(),
      appearance: f(),
      execution: T(),
      language: _(),
      action: t.action,
      retry: B(),
      theme: S(),
      cData: t.cData,
      size: y()
    })),
    M = (x, q) => {
      let dt = window.turnstile.render(x, q);
      return n(dt), {
        destroy() {
          window.turnstile.remove(dt)
        },
        update(St) {
          window.turnstile.remove(dt), dt = window.turnstile.render(x, St), n(dt)
        }
      }
    };
  let tt = $(!1),
    k = $(!1),
    b;

  function D() {
    const x = document.createElement("script");
    x.type = "text/javascript", x.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", x.async = !0, x.addEventListener("load", () => p(Ae, !0), {
      once: !0
    }), document.head.appendChild(x)
  }

  function K() {
    p(k, !1), b && clearTimeout(b), b = setTimeout(() => {
      (!r(Ae) || !r(tt)) && p(k, !0)
    }, 5e3)
  }

  function N() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(x => x.remove()), p(Ae, !1), D(), K()
  }
  he(() => (p(tt, !0), r(Ae) || D(), K(), () => {
    p(tt, !1), b && clearTimeout(b)
  }));
  var U = J(),
    R = G(U);
  {
    var mt = x => {
        var q = ba();
        let dt;
        Mn(q, (St, xt) => M == null ? void 0 : M(St, xt), () => r(Y)), Et(() => dt = Zt(q, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", dt, {
          flexible: y() == "flexible"
        })), g(x, q)
      },
      Tt = x => {
        var q = Ea(),
          dt = nt(q);
        {
          var St = Nt => {
              var Mt = wa();
              oe("click", Mt, N), g(Nt, Mt)
            },
            xt = Nt => {
              var Mt = Ia();
              g(Nt, Mt)
            };
          st(dt, Nt => {
            r(k) ? Nt(St) : Nt(xt, -1)
          })
        }
        Z(q), Et(() => Zt(q, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), g(x, q)
      };
    st(R, x => {
      r(Ae) && r(tt) ? x(mt) : x(Tt, -1)
    })
  }
  g(s, U), Xt()
}
nn(["click"]);
var Da = ft('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function xa(s, t) {
  Yt(t, !0);
  const n = E(() => sn.current !== null),
    f = E(() => {
      var w;
      return (w = sn.current) == null ? void 0 : w.tier
    }),
    _ = Ti(() => r(n));
  let T = $("");
  var I = Da(),
    B = nt(I);
  let F;
  var S = nt(B),
    y = nt(S);
  {
    var P = w => {
      var Y = J(),
        M = G(Y);
      gi(M, () => sn.errorCount, tt => {
        var k = J(),
          b = G(k);
        {
          var D = U => {
              {
                let R = E(() => Ci.trim());
                Ta(U, {
                  get siteKey() {
                    return r(R)
                  },
                  callback: mt => Dn(mt),
                  errorCallback: () => Tn()
                })
              }
            },
            K = U => {
              {
                let R = E(() => bi.trim());
                zs(U, {
                  get siteKey() {
                    return r(R)
                  },
                  callback: mt => Dn(mt),
                  errorCallback: () => Tn()
                })
              }
            },
            N = U => {
              Ca(U, {
                onsuccess: () => ei(),
                get verifyingPhone() {
                  return r(T)
                },
                set verifyingPhone(R) {
                  p(T, R, !0)
                }
              })
            };
          st(b, U => {
            r(f) === 2 ? U(D) : r(f) === 3 ? U(K, 1) : r(f) === 4 && U(N, 2)
          })
        }
        g(tt, k)
      }), g(w, Y)
    };
    st(y, w => {
      _.current && w(P)
    })
  }
  Z(S), Z(B), On(2), Z(I), Bn(I, () => w => {
    Ot(() => {
      r(n) ? w.show() : w.close()
    })
  }), Et(() => F = Zt(B, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, F, {
    "h-84": r(f) === 4 && !r(T)
  })), en("close", I, () => ti()), g(s, I), Xt()
}
var Sa = ft('<span class="hidden"> </span> <!> <!> <!>', 1);

function tl(s, t) {
  Yt(t, !0), he(() => {
    const y = oi();
    xn.init();
    let P = $(!1);
    Ot(() => {
      r(P) || Ye.data && (p(P, !0), si.loadTWA())
    }), ni();
    const w = mi(async () => {
      await Ye.refresh()
    }, {
      interval: ii.hour,
      immediate: !0
    });
    let Y = setInterval(() => {
      pi().catch(M => console.warn("[sw] message failed", M))
    }, 5e3);
    return () => {
      clearTimeout(Y), y(), w(), xn.cleanup()
    }
  });
  const n = "muted";
  he(() => {
    cn.muted = localStorage.getItem(n) === "1"
  }), Ot(() => {
    {
      const y = cn.muted;
      document.querySelectorAll("audio").forEach(P => {
        P.muted = y
      });
      for (const P of Object.values(ri).filter(w => w instanceof Audio)) P.muted = y, y || (P.volume = .3);
      localStorage.setItem(n, Number(y).toString())
    }
  }), he(() => {});
  var f = Sa();
  en("beforeunload", Qn, () => {
    _i().catch(y => console.warn("[sw] message failed", y))
  });
  var _ = G(f),
    T = nt(_);
  Z(_);
  var I = It(_, 2);
  {
    var B = y => {
      var P = J(),
        w = G(P);
      Ht(w, () => t.children), g(y, P)
    };
    st(I, y => {
      y(B, -1)
    })
  }
  var F = It(I, 2);
  xa(F, {});
  var S = It(F, 2);
  Us(S, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Et(() => Bt(T, `Version: ${Jn}`)), g(s, f), Xt()
}
export {
  tl as component, $a as universal
};