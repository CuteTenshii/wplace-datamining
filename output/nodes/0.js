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
var Ft = (s, t, n) => qn(s, typeof t != "symbol" ? t + "" : t, n),
  rn = (s, t, n) => t.has(s) || Cn("Cannot " + n);
var y = (s, t, n) => (rn(s, t, "read from private field"), n ? n.call(s) : t.get(s)),
  vt = (s, t, n) => t.has(s) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, n),
  me = (s, t, n, f) => (rn(s, t, "write to private field"), f ? f.call(s, n) : t.set(s, n), n),
  bn = (s, t, n) => (rn(s, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as de
} from "../chunks/9CH8UCEg.js";
import {
  p as Qt,
  d as et,
  a as v,
  r as J,
  t as Tt,
  b as Zt,
  c as ft,
  bq as Re,
  F as Yn,
  E as wn,
  G as Xn,
  e as q,
  g as _n,
  y as Ut,
  h as m,
  i as r,
  B as Pe,
  s as wt,
  m as ie,
  q as tn,
  u as T,
  n as Xt,
  w as $,
  f as G,
  l as en,
  v as In,
  k as ze,
  aY as Rn,
  o as On,
  bN as Qn
} from "../chunks/B20EPEO9.js";
import {
  c as Zn,
  s as Bt
} from "../chunks/dXo2ef-x.js";
import {
  i as at
} from "../chunks/BaKcxvCV.js";
import {
  s as Ht
} from "../chunks/DJ4vrCIo.js";
import {
  v as Jn
} from "../chunks/ByKIHAoP.js";
import {
  K as Rt,
  L as se,
  M as $n,
  g as cn,
  b as on,
  t as ve,
  u as dn,
  N as En,
  O as ti,
  Q as sn,
  R as Tn,
  U as Dn,
  V as ei,
  p as xn,
  X as ni,
  T as ii
} from "../chunks/Cpgf6r_0.js";
import {
  A as ri
} from "../chunks/yhNHT_nd.js";
import {
  s as oi,
  a as si
} from "../chunks/CcvPdhEu.js";
import {
  a as Mn,
  g as ai,
  s as li,
  b as hn,
  D as ui,
  w as ci,
  c as di,
  d as hi,
  e as fn,
  n as Sn,
  f as kt,
  m as qe,
  h as fi,
  i as mi,
  j as pi,
  k as _i
} from "../chunks/xO7ID2EU.js";
import {
  k as gi
} from "../chunks/Dxoq2QRl.js";
import {
  c as ae,
  a as Yt,
  s as yt,
  e as an,
  b as ye,
  S as vi,
  h as yi,
  d as Bn
} from "../chunks/CzjxjBon.js";
import {
  b as nn
} from "../chunks/BdTft7YK.js";
import {
  b as Ci,
  c as bi
} from "../chunks/CftFOTTa.js";
import {
  p as k,
  s as ke,
  r as Ee
} from "../chunks/BUHbb64A.js";
import {
  _ as wi
} from "../chunks/Dp1pzeXC.js";
import {
  e as Ye
} from "../chunks/CzMHE4hb.js";
import {
  c as $t
} from "../chunks/CchszZDl.js";
import {
  t as Ii
} from "../chunks/Ct12j0u0.js";
import {
  g as re
} from "../chunks/BhCkpOlh.js";
import {
  p as Ei,
  k as Ti
} from "../chunks/D243nVN7.js";
import "../chunks/DXTc3ZK6.js";
const Di = !0,
  tl = Object.freeze(Object.defineProperty({
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
    const n = t.locale ?? re();
    return n === "en" ? xi() : n === "pt" ? Si() : n === "ch" ? Ni() : n === "de" ? Li() : n === "es" ? Ai() : n === "fr" ? Pi() : n === "it" ? ki() : n === "jp" ? Ri() : n === "pl" ? Oi() : n === "ru" ? Mi() : n === "uk" ? Bi() : Hi()
  },
  Wi = () => "Not a valid phone number",
  Vi = () => "Não é um número válido",
  Fi = () => "不是有效的电话号码",
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
    const n = t.locale ?? re();
    return n === "en" ? Wi() : n === "pt" ? Vi() : n === "ch" ? Fi() : n === "de" ? ji() : n === "es" ? zi() : n === "fr" ? Gi() : n === "it" ? Ki() : n === "jp" ? qi() : n === "pl" ? Yi() : n === "ru" ? Xi() : n === "uk" ? Qi() : Zi()
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
    const n = t.locale ?? re();
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
    const n = t.locale ?? re();
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
    const n = t.locale ?? re();
    return n === "en" ? Tr() : n === "pt" ? Dr() : n === "ch" ? xr() : n === "de" ? Sr() : n === "es" ? Nr() : n === "fr" ? Lr() : n === "it" ? Ar() : n === "jp" ? Pr() : n === "pl" ? kr() : n === "ru" ? Rr() : n === "uk" ? Or() : Mr()
  },
  Hr = () => "Resend Code",
  Ur = () => "Reenviar Código",
  Wr = () => "重新发送验证码",
  Vr = () => "Code erneut senden",
  Fr = () => "Reenviar código",
  jr = () => "Renvoyer le code",
  zr = () => "Reinvia codice",
  Gr = () => "コードを再送信",
  Kr = () => "Wyślij kod ponownie",
  qr = () => "Отправить код ещё раз",
  Yr = () => "Надіслати код ще раз",
  Xr = () => "Gửi lại mã",
  Qr = (s = {}, t = {}) => {
    const n = t.locale ?? re();
    return n === "en" ? Hr() : n === "pt" ? Ur() : n === "ch" ? Wr() : n === "de" ? Vr() : n === "es" ? Fr() : n === "fr" ? jr() : n === "it" ? zr() : n === "jp" ? Gr() : n === "pl" ? Kr() : n === "ru" ? qr() : n === "uk" ? Yr() : Xr()
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
    const n = t.locale ?? re();
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
    const n = t.locale ?? re();
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
    const n = t.locale ?? re();
    return n === "en" ? Eo(s) : n === "pt" ? To(s) : n === "ch" ? Do(s) : n === "de" ? xo(s) : n === "es" ? So(s) : n === "fr" ? No(s) : n === "it" ? Lo(s) : n === "jp" ? Ao(s) : n === "pl" ? Po(s) : n === "ru" ? ko(s) : n === "uk" ? Ro(s) : Oo(s)
  },
  Bo = () => "Try another number",
  Ho = () => "Tentar outro número",
  Uo = () => "请尝试使用其他号码",
  Wo = () => "Andere Nummer versuchen",
  Vo = () => "Prueba con otro número",
  Fo = () => "Essayez un autre numéro",
  jo = () => "Prova un altro numero",
  zo = () => "別の番号をお試しください。",
  Go = () => "Spróbuj innego numeru",
  Ko = () => "Попробуйте другой номер",
  qo = () => "Спробувати інший номер",
  Yo = () => "Thử số khác",
  Xo = (s = {}, t = {}) => {
    const n = t.locale ?? re();
    return n === "en" ? Bo() : n === "pt" ? Ho() : n === "ch" ? Uo() : n === "de" ? Wo() : n === "es" ? Vo() : n === "fr" ? Fo() : n === "it" ? jo() : n === "jp" ? zo() : n === "pl" ? Go() : n === "ru" ? Ko() : n === "uk" ? qo() : Yo()
  },
  Qo = Array(12).fill(0);
var Zo = ft('<div class="sonner-loading-bar"></div>'),
  Jo = ft('<div><div class="sonner-spinner"></div></div>');

function $o(s, t) {
  Qt(t, !0);
  var n = Jo(),
    f = et(n);
  Ye(f, 23, () => Qo, (g, E) => `spinner-bar-${E}`, (g, E) => {
    var D = Zo();
    v(g, D)
  }), J(f), J(n), Tt(g => {
    Yt(n, 1, g), yt(n, "data-visible", t.visible)
  }, [() => ae(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), v(s, n), Zt()
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
    vt(this, Ce);
    vt(this, Oe);
    const {
      window: n = ts,
      document: f = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (me(this, Ce, f), me(this, Oe, Zn(g => {
      const E = Re(n, "focusin", g),
        D = Re(n, "focusout", g);
      return () => {
        E(), D()
      }
    })))
  }
  get current() {
    var t;
    return (t = y(this, Oe)) == null || t.call(this), y(this, Ce) ? es(y(this, Ce)) : null
  }
}
Ce = new WeakMap, Oe = new WeakMap;
new ns;
var Me, le;
class is {
  constructor(t) {
    vt(this, Me);
    vt(this, le);
    me(this, Me, t), me(this, le, Symbol(t))
  }
  get key() {
    return y(this, le)
  }
  exists() {
    return Yn(y(this, le))
  }
  get() {
    const t = wn(y(this, le));
    if (t === void 0) throw new Error(`Context "${y(this,Me)}" not found`);
    return t
  }
  getOr(t) {
    const n = wn(y(this, le));
    return n === void 0 ? t : n
  }
  set(t) {
    return Xn(y(this, le), t)
  }
}
Me = new WeakMap, le = new WeakMap;
const rs = new is("<Toaster/>");

function Ge(s) {
  return s.label !== void 0
}

function os() {
  let s = q(_n(typeof document < "u" ? document.hidden : !1));
  return Ut(() => Re(document, "visibilitychange", () => {
    m(s, document.hidden, !0)
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
  Qt(t, !0);
  const n = O => {
    var V = $(),
      ot = G(V);
    {
      var lt = _ => {
          var Nt = hs(),
            l = et(Nt);
          Ht(l, () => t.loadingIcon), J(Nt), Tt(e => {
            Yt(Nt, 1, e), yt(Nt, "data-visible", r(W) === "loading")
          }, [() => {
            var e, i, o;
            return ae(se((e = r(Q)) == null ? void 0 : e.loader, (o = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : o.loader, "sonner-loader"))
          }]), v(_, Nt)
        },
        tt = _ => {
          {
            let Nt = T(() => {
                var e, i;
                return se((e = r(Q)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              l = T(() => r(W) === "loading");
            $o(_, {
              get class() {
                return r(Nt)
              },
              get visible() {
                return r(l)
              }
            })
          }
        };
      at(ot, _ => {
        t.loadingIcon ? _(lt) : _(tt, -1)
      })
    }
    v(O, V)
  };
  let f = k(t, "cancelButtonStyle", 3, ""),
    g = k(t, "actionButtonStyle", 3, ""),
    E = k(t, "descriptionClass", 3, ""),
    D = k(t, "unstyled", 3, !1),
    B = k(t, "defaultRichColors", 3, !1);
  const H = {
    ...cs
  };
  let S = q(!1),
    C = q(!1),
    N = q(!1),
    L = q(!1),
    Y = q(!1),
    R = q(0),
    K = q(0),
    p = t.toast.duration || t.duration || Nn,
    w = q(void 0),
    x = q(null),
    nt = q(null);
  const A = T(() => t.index === 0),
    X = T(() => t.index + 1 <= t.visibleToasts),
    W = T(() => t.toast.type),
    pt = T(() => t.toast.dismissable !== !1),
    It = T(() => t.toast.class || ""),
    I = T(() => t.toast.descriptionClass || ""),
    M = T(() => Rt.heights.findIndex(O => O.toastId === t.toast.id) || 0),
    ct = T(() => t.toast.closeButton ?? t.closeButton),
    xt = T(() => t.toast.duration ?? t.duration ?? Nn);
  let Lt = null;
  const St = T(() => t.position.split("-")),
    Ot = T(() => Rt.heights.reduce((O, V, ot) => ot >= r(M) ? O : O + V.height, 0)),
    jt = os(),
    mt = T(() => t.toast.invert || t.invert),
    rt = T(() => r(W) === "loading"),
    Q = T(() => ({
      ...H,
      ...t.classes
    })),
    Et = T(() => t.toast.title),
    Ct = T(() => t.toast.description);
  let zt = q(0),
    oe = q(0);
  const P = T(() => Math.round(r(M) * ss + r(Ot)));
  Ut(() => {
    r(Et), r(Ct);
    let O;
    t.expanded || t.expandByDefault ? O = 1 : O = 1 - t.index * us;
    const V = Pe(() => r(w));
    if (V === void 0) return;
    V.style.setProperty("height", "auto");
    const ot = V.offsetHeight,
      lt = V.getBoundingClientRect().height,
      tt = Math.round(lt / O + Number.EPSILON & 100) / 100;
    V.style.removeProperty("height");
    let _;
    Math.abs(tt - ot) < 1 ? _ = tt : _ = ot, m(K, _, !0), Pe(() => {
      Rt.setHeight({
        toastId: t.toast.id,
        height: _
      })
    })
  });

  function z() {
    m(C, !0), m(R, r(P), !0), Rt.removeHeight(t.toast.id), setTimeout(() => {
      Rt.remove(t.toast.id)
    }, ls)
  }
  let bt;
  const dt = T(() => t.toast.promise && r(W) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Mt() {
    m(zt, new Date().getTime(), !0), bt = setTimeout(() => {
      var O, V;
      (V = (O = t.toast).onAutoClose) == null || V.call(O, t.toast), z()
    }, p)
  }

  function ee() {
    if (r(oe) < r(zt)) {
      const O = new Date().getTime() - r(zt);
      p = p - O
    }
    m(oe, new Date().getTime(), !0)
  }
  Ut(() => {
    t.toast.updated && (clearTimeout(bt), p = r(xt), Mt())
  }), Ut(() => (r(dt) || (t.expanded || t.interacting || jt.current ? ee() : Mt()), () => clearTimeout(bt))), de(() => {
    var V;
    m(S, !0);
    const O = (V = r(w)) == null ? void 0 : V.getBoundingClientRect().height;
    return m(K, O, !0), Rt.setHeight({
      toastId: t.toast.id,
      height: O
    }), () => {
      Rt.removeHeight(t.toast.id)
    }
  }), Ut(() => {
    t.toast.delete && Pe(() => {
      var O, V;
      z(), (V = (O = t.toast).onDismiss) == null || V.call(O, t.toast)
    })
  });
  const he = O => {
      if (r(rt)) return;
      m(R, r(P), !0);
      const V = O.target;
      V.setPointerCapture(O.pointerId), V.tagName !== "BUTTON" && (m(N, !0), Lt = {
        x: O.clientX,
        y: O.clientY
      })
    },
    fe = () => {
      var _, Nt, l, e, i, o;
      if (r(L) || !r(pt)) return;
      Lt = null;
      const O = Number(((_ = r(w)) == null ? void 0 : _.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        V = Number(((Nt = r(w)) == null ? void 0 : Nt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        ot = new Date().getTime() - 0,
        lt = r(x) === "x" ? O : V,
        tt = Math.abs(lt) / ot;
      if (Math.abs(lt) >= as || tt > .11) {
        m(R, r(P), !0), (e = (l = t.toast).onDismiss) == null || e.call(l, t.toast), r(x) === "x" ? m(nt, O > 0 ? "right" : "left", !0) : m(nt, V > 0 ? "down" : "up", !0), z(), m(L, !0);
        return
      } else(i = r(w)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (o = r(w)) == null || o.style.setProperty("--swipe-amount-y", "0px");
      m(Y, !1), m(N, !1), m(x, null)
    },
    Wt = O => {
      var Nt, l, e;
      if (!Lt || !r(pt) || (((Nt = window.getSelection()) == null ? void 0 : Nt.toString().length) ?? -1) > 0) return;
      const ot = O.clientY - Lt.y,
        lt = O.clientX - Lt.x,
        tt = t.swipeDirections ?? ds(t.position);
      !r(x) && (Math.abs(lt) > 1 || Math.abs(ot) > 1) && m(x, Math.abs(lt) > Math.abs(ot) ? "x" : "y", !0);
      let _ = {
        x: 0,
        y: 0
      };
      if (r(x) === "y") {
        if (tt.includes("top") || tt.includes("bottom"))
          if (tt.includes("top") && ot < 0 || tt.includes("bottom") && ot > 0) _.y = ot;
          else {
            const i = ot * Ln(ot);
            _.y = Math.abs(i) < Math.abs(ot) ? i : ot
          }
      } else if (r(x) === "x" && (tt.includes("left") || tt.includes("right")))
        if (tt.includes("left") && lt < 0 || tt.includes("right") && lt > 0) _.x = lt;
        else {
          const i = lt * Ln(lt);
          _.x = Math.abs(i) < Math.abs(lt) ? i : lt
        }(Math.abs(_.x) > 0 || Math.abs(_.y) > 0) && m(Y, !0), (l = r(w)) == null || l.style.setProperty("--swipe-amount-x", `${_.x}px`), (e = r(w)) == null || e.style.setProperty("--swipe-amount-y", `${_.y}px`)
    },
    Gt = () => {
      m(N, !1), m(x, null), Lt = null
    },
    At = T(() => t.toast.icon ? t.toast.icon : r(W) === "success" ? t.successIcon : r(W) === "error" ? t.errorIcon : r(W) === "warning" ? t.warningIcon : r(W) === "info" ? t.infoIcon : r(W) === "loading" ? t.loadingIcon : null);
  var Z = ys();
  yt(Z, "tabindex", 0);
  let _e;
  var Te = et(Z);
  {
    var De = O => {
      var V = fs(),
        ot = et(V);
      Ht(ot, () => t.closeIcon ?? Xt), J(V), Tt(lt => {
        yt(V, "aria-label", t.closeButtonAriaLabel), yt(V, "data-disabled", r(rt)), Yt(V, 1, lt)
      }, [() => {
        var lt, tt, _;
        return ae(se((lt = r(Q)) == null ? void 0 : lt.closeButton, (_ = (tt = t.toast) == null ? void 0 : tt.classes) == null ? void 0 : _.closeButton))
      }]), ie("click", V, () => {
        var lt, tt;
        r(rt) || !r(pt) || (z(), (tt = (lt = t.toast).onDismiss) == null || tt.call(lt, t.toast))
      }), v(O, V)
    };
    at(Te, O => {
      r(ct) && !t.toast.component && r(W) !== "loading" && t.closeIcon !== null && O(De)
    })
  }
  var xe = wt(Te, 2);
  {
    var ge = O => {
        const V = T(() => t.toast.component);
        var ot = $(),
          lt = G(ot);
        $t(lt, () => r(V), (tt, _) => {
          _(tt, ke(() => t.toast.componentProps, {
            closeToast: z
          }))
        }), v(O, ot)
      },
      Se = O => {
        var V = vs(),
          ot = G(V);
        {
          var lt = h => {
            var d = ms(),
              b = et(d);
            {
              var U = F => {
                var j = $(),
                  gt = G(j);
                {
                  var it = st => {
                      var Kt = $(),
                        Vt = G(Kt);
                      $t(Vt, () => t.toast.icon, (Dt, Pt) => {
                        Pt(Dt, {})
                      }), v(st, Kt)
                    },
                    ht = st => {
                      n(st)
                    };
                  at(gt, st => {
                    t.toast.icon ? st(it) : st(ht, -1)
                  })
                }
                v(F, j)
              };
              at(b, F => {
                (t.toast.promise || r(W) === "loading") && F(U)
              })
            }
            var _t = wt(b, 2);
            {
              var ut = F => {
                var j = $(),
                  gt = G(j);
                {
                  var it = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      $t(te, () => t.toast.icon, (zn, Gn) => {
                        Gn(zn, {})
                      }), v(Dt, Pt)
                    },
                    ht = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.successIcon ?? Xt), v(Dt, Pt)
                    },
                    st = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.errorIcon ?? Xt), v(Dt, Pt)
                    },
                    Kt = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.warningIcon ?? Xt), v(Dt, Pt)
                    },
                    Vt = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.infoIcon ?? Xt), v(Dt, Pt)
                    };
                  at(gt, Dt => {
                    t.toast.icon ? Dt(it) : r(W) === "success" ? Dt(ht, 1) : r(W) === "error" ? Dt(st, 2) : r(W) === "warning" ? Dt(Kt, 3) : r(W) === "info" && Dt(Vt, 4)
                  })
                }
                v(F, j)
              };
              at(_t, F => {
                t.toast.type !== "loading" && F(ut)
              })
            }
            J(d), Tt(F => Yt(d, 1, F), [() => {
              var F, j, gt;
              return ae(se((F = r(Q)) == null ? void 0 : F.icon, (gt = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : gt.icon))
            }]), v(h, d)
          };
          at(ot, h => {
            (r(W) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(At) !== null || t.toast.icon) && h(lt)
          })
        }
        var tt = wt(ot, 2),
          _ = et(tt),
          Nt = et(_);
        {
          var l = h => {
            var d = $(),
              b = G(d);
            {
              var U = ut => {
                  const F = T(() => t.toast.title);
                  var j = $(),
                    gt = G(j);
                  $t(gt, () => r(F), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), v(ut, j)
                },
                _t = ut => {
                  var F = In();
                  Tt(() => Bt(F, t.toast.title)), v(ut, F)
                };
              at(b, ut => {
                typeof t.toast.title != "string" ? ut(U) : ut(_t, -1)
              })
            }
            v(h, d)
          };
          at(Nt, h => {
            t.toast.title && h(l)
          })
        }
        J(_);
        var e = wt(_, 2);
        {
          var i = h => {
            var d = ps(),
              b = et(d);
            {
              var U = ut => {
                  const F = T(() => t.toast.description);
                  var j = $(),
                    gt = G(j);
                  $t(gt, () => r(F), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), v(ut, j)
                },
                _t = ut => {
                  var F = In();
                  Tt(() => Bt(F, t.toast.description)), v(ut, F)
                };
              at(b, ut => {
                typeof t.toast.description != "string" ? ut(U) : ut(_t, -1)
              })
            }
            J(d), Tt(ut => Yt(d, 1, ut), [() => {
              var ut, F;
              return ae(se(E(), r(I), (ut = r(Q)) == null ? void 0 : ut.description, (F = t.toast.classes) == null ? void 0 : F.description))
            }]), v(h, d)
          };
          at(e, h => {
            t.toast.description && h(i)
          })
        }
        J(tt);
        var o = wt(tt, 2);
        {
          var a = h => {
            var d = $(),
              b = G(d);
            {
              var U = F => {
                  var j = $(),
                    gt = G(j);
                  $t(gt, () => t.toast.cancel, (it, ht) => {
                    ht(it, {})
                  }), v(F, j)
                },
                _t = F => {
                  var j = _s(),
                    gt = et(j, !0);
                  J(j), Tt(it => {
                    an(j, t.toast.cancelButtonStyle ?? f()), Yt(j, 1, it), Bt(gt, t.toast.cancel.label)
                  }, [() => {
                    var it, ht, st;
                    return ae(se((it = r(Q)) == null ? void 0 : it.cancelButton, (st = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : st.cancelButton))
                  }]), ie("click", j, it => {
                    var ht, st;
                    Ge(t.toast.cancel) && r(pt) && ((st = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || st.call(ht, it), z())
                  }), v(F, j)
                },
                ut = T(() => Ge(t.toast.cancel));
              at(b, F => {
                typeof t.toast.cancel == "function" ? F(U) : r(ut) && F(_t, 1)
              })
            }
            v(h, d)
          };
          at(o, h => {
            t.toast.cancel && h(a)
          })
        }
        var c = wt(o, 2);
        {
          var u = h => {
            var d = $(),
              b = G(d);
            {
              var U = F => {
                  var j = $(),
                    gt = G(j);
                  $t(gt, () => t.toast.action, (it, ht) => {
                    ht(it, {})
                  }), v(F, j)
                },
                _t = F => {
                  var j = gs(),
                    gt = et(j, !0);
                  J(j), Tt(it => {
                    an(j, t.toast.actionButtonStyle ?? g()), Yt(j, 1, it), Bt(gt, t.toast.action.label)
                  }, [() => {
                    var it, ht, st;
                    return ae(se((it = r(Q)) == null ? void 0 : it.actionButton, (st = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : st.actionButton))
                  }]), ie("click", j, it => {
                    var ht;
                    Ge(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(it), !it.defaultPrevented && z())
                  }), v(F, j)
                },
                ut = T(() => Ge(t.toast.action));
              at(b, F => {
                typeof t.toast.action == "function" ? F(U) : r(ut) && F(_t, 1)
              })
            }
            v(h, d)
          };
          at(c, h => {
            t.toast.action && h(u)
          })
        }
        Tt(h => Yt(_, 1, h), [() => {
          var h, d, b;
          return ae(se((h = r(Q)) == null ? void 0 : h.title, (b = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : b.title))
        }]), v(O, V)
      };
    at(xe, O => {
      t.toast.component ? O(ge) : O(Se, -1)
    })
  }
  J(Z), nn(Z, O => m(w, O), () => r(w)), Tt((O, V, ot) => {
    Yt(Z, 1, O), yt(Z, "data-rich-colors", t.toast.richColors ?? B()), yt(Z, "data-styled", !(t.toast.component || t.toast.unstyled || D())), yt(Z, "data-mounted", r(S)), yt(Z, "data-promise", V), yt(Z, "data-swiped", r(Y)), yt(Z, "data-removed", r(C)), yt(Z, "data-visible", r(X)), yt(Z, "data-y-position", r(St)[0]), yt(Z, "data-x-position", r(St)[1]), yt(Z, "data-index", t.index), yt(Z, "data-front", r(A)), yt(Z, "data-swiping", r(N)), yt(Z, "data-dismissable", r(pt)), yt(Z, "data-type", r(W)), yt(Z, "data-invert", r(mt)), yt(Z, "data-swipe-out", r(L)), yt(Z, "data-swipe-direction", r(nt)), yt(Z, "data-expanded", ot), _e = an(Z, `${t.style} ${t.toast.style}`, _e, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Rt.toasts.length - t.index,
      "--offset": `${r(C)?r(R):r(P)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(K)}px`
    })
  }, [() => {
    var O, V, ot, lt, tt, _;
    return ae(se(t.class, r(It), (O = r(Q)) == null ? void 0 : O.toast, (ot = (V = t.toast) == null ? void 0 : V.classes) == null ? void 0 : ot.toast, (lt = r(Q)) == null ? void 0 : lt[r(W)], (_ = (tt = t.toast) == null ? void 0 : tt.classes) == null ? void 0 : _[r(W)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(S))]), ie("pointermove", Z, Wt), ie("pointerup", Z, fe), ie("pointerdown", Z, he), tn("dragend", Z, Gt), v(s, Z), Zt()
}
en(["pointermove", "pointerup", "pointerdown", "click"]);
var bs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function ws(s) {
  var t = bs();
  v(s, t)
}
var Is = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Es(s) {
  var t = Is();
  v(s, t)
}
var Ts = ze('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Ds(s) {
  var t = Ts();
  v(s, t)
}
var xs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Ss(s) {
  var t = xs();
  v(s, t)
}
var Ns = ze('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function Ls(s) {
  var t = Ns();
  v(s, t)
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
  return [s, t].forEach((f, g) => {
    const E = g === 1,
      D = E ? "--mobile-offset" : "--offset",
      B = E ? Un : Hn;

    function H(S) {
      ["top", "right", "bottom", "left"].forEach(C => {
        n[`${D}-${C}`] = typeof S == "number" ? `${S}px` : S
      })
    }
    typeof f == "number" || typeof f == "string" ? H(f) : typeof f == "object" ? ["top", "right", "bottom", "left"].forEach(S => {
      const C = f[S];
      C === void 0 ? n[`${D}-${S}`] = B : n[`${D}-${S}`] = typeof C == "number" ? `${C}px` : C
    }) : H(B)
  }), n
}
var Ms = new Set(["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]),
  Bs = ft("<ol></ol>"),
  Hs = ft('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>');

function Us(s, t) {
  Qt(t, !0);

  function n(P) {
    return P !== "system" ? P : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : Ke
  }
  let f = k(t, "invert", 3, !1),
    g = k(t, "position", 3, "bottom-right"),
    E = k(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    D = k(t, "expand", 3, !1),
    B = k(t, "closeButton", 3, !1),
    H = k(t, "offset", 3, Hn),
    S = k(t, "mobileOffset", 3, Un),
    C = k(t, "theme", 3, "light"),
    N = k(t, "richColors", 3, !1),
    L = k(t, "duration", 3, Ps),
    Y = k(t, "visibleToasts", 3, As),
    R = k(t, "toastOptions", 19, () => ({})),
    K = k(t, "dir", 7, "auto"),
    p = k(t, "gap", 3, Rs),
    w = k(t, "containerAriaLabel", 3, "Notifications"),
    x = k(t, "closeButtonAriaLabel", 3, "Close toast"),
    nt = Ee(t, Ms);

  function A() {
    if (K() !== "auto") return K();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const P = document.documentElement.getAttribute("dir");
    return P === "auto" || !P ? (Pe(() => K(window.getComputedStyle(document.documentElement).direction ?? "ltr")), K()) : (Pe(() => K(P)), P)
  }
  const X = T(() => Array.from(new Set([g(), ...Rt.toasts.filter(P => P.position).map(P => P.position)].filter(Boolean))));
  let W = q(!1),
    pt = q(!1),
    It = q(_n(n(C()))),
    I = q(void 0),
    M = q(null),
    ct = q(!1);
  const xt = T(() => E().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ut(() => {
    Rt.toasts.length <= 1 && m(W, !1)
  }), Ut(() => {
    const P = Rt.toasts.filter(z => z.dismiss && !z.delete);
    if (P.length > 0) {
      const z = Rt.toasts.map(bt => P.find(Mt => Mt.id === bt.id) ? {
        ...bt,
        delete: !0
      } : bt);
      Rt.toasts = z
    }
  }), Ut(() => () => {
    r(I) && r(M) && (r(M).focus({
      preventScroll: !0
    }), m(M, null), m(ct, !1))
  }), de(() => (Rt.reset(), Re(document, "keydown", z => {
    var dt, Mt;
    E().every(ee => z[ee] || z.code === ee) && (m(W, !0), (dt = r(I)) == null || dt.focus()), z.code === "Escape" && (document.activeElement === r(I) || (Mt = r(I)) != null && Mt.contains(document.activeElement)) && m(W, !1)
  }))), Ut(() => {
    if (C() !== "system" && m(It, C()), typeof window < "u") {
      C() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? m(It, ln) : m(It, Ke));
      const P = window.matchMedia("(prefers-color-scheme: dark)"),
        z = ({
          matches: bt
        }) => {
          m(It, bt ? ln : Ke, !0)
        };
      "addEventListener" in P ? P.addEventListener("change", z) : P.addListener(z)
    }
  });
  const Lt = P => {
      var z;
      (z = t.onblur) == null || z.call(t, P), r(ct) && !P.currentTarget.contains(P.relatedTarget) && (m(ct, !1), r(M) && (r(M).focus({
        preventScroll: !0
      }), m(M, null)))
    },
    St = P => {
      var bt;
      (bt = t.onfocus) == null || bt.call(t, P), !(P.target instanceof HTMLElement && P.target.dataset.dismissable === "false") && (r(ct) || (m(ct, !0), m(M, P.relatedTarget, !0)))
    },
    Ot = P => {
      var bt;
      (bt = t.onpointerdown) == null || bt.call(t, P), !(P.target instanceof HTMLElement && P.target.dataset.dismissable === "false") && m(pt, !0)
    },
    jt = P => {
      var z;
      (z = t.onmouseenter) == null || z.call(t, P), m(W, !0)
    },
    mt = P => {
      var z;
      (z = t.onmouseleave) == null || z.call(t, P), r(pt) || m(W, !1)
    },
    rt = P => {
      var z;
      (z = t.onmousemove) == null || z.call(t, P), m(W, !0)
    },
    Q = P => {
      var z;
      (z = t.ondragend) == null || z.call(t, P), m(W, !1)
    },
    Et = P => {
      var z;
      (z = t.onpointerup) == null || z.call(t, P), m(pt, !1)
    };
  rs.set(new $n);
  var Ct = Hs();
  yt(Ct, "tabindex", -1);
  var zt = et(Ct);
  {
    var oe = P => {
      var z = $(),
        bt = G(z);
      Ye(bt, 18, () => r(X), dt => dt, (dt, Mt, ee, he) => {
        const fe = T(() => {
            const [At, Z] = Mt.split("-");
            return {
              y: At,
              x: Z
            }
          }),
          Wt = T(() => Os(H(), S()));
        var Gt = Bs();
        ye(Gt, At => {
          var Z;
          return {
            tabindex: -1,
            dir: At,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(It),
            "data-y-position": r(fe).y,
            "data-x-position": r(fe).x,
            style: t.style,
            onblur: Lt,
            onfocus: St,
            onmouseenter: jt,
            onmousemove: rt,
            onmouseleave: mt,
            ondragend: Q,
            onpointerdown: Ot,
            onpointerup: Et,
            ...nt,
            [vi]: {
              "--front-toast-height": `${(Z=Rt.heights[0])==null?void 0:Z.height}px`,
              "--width": `${ks}px`,
              "--gap": `${p()}px`,
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
        }, [() => A()], void 0, void 0, "svelte-wiukfn"), Ye(Gt, 23, () => Rt.toasts.filter(At => !At.position && r(ee) === 0 || At.position === Mt), At => At.id, (At, Z, _e, Te) => {
          {
            const De = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.successIcon ?? Xt), v(d, b)
                    },
                    h = d => {
                      ws(d)
                    };
                  at(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(h, 1)
                  })
                }
                v(o, a)
              },
              xe = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.errorIcon ?? Xt), v(d, b)
                    },
                    h = d => {
                      Es(d)
                    };
                  at(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(h, 1)
                  })
                }
                v(o, a)
              },
              ge = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.warningIcon ?? Xt), v(d, b)
                    },
                    h = d => {
                      Ds(d)
                    };
                  at(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(h, 1)
                  })
                }
                v(o, a)
              },
              Se = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.infoIcon ?? Xt), v(d, b)
                    },
                    h = d => {
                      Ss(d)
                    };
                  at(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(h, 1)
                  })
                }
                v(o, a)
              },
              O = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.closeIcon ?? Xt), v(d, b)
                    },
                    h = d => {
                      Ls(d)
                    };
                  at(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(h, 1)
                  })
                }
                v(o, a)
              };
            let V = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.duration) ?? L()
              }),
              ot = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.class) ?? ""
              }),
              lt = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.descriptionClass) || ""
              }),
              tt = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.style) ?? ""
              }),
              _ = T(() => R().classes || {}),
              Nt = T(() => R().unstyled ?? !1),
              l = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.cancelButtonStyle) ?? ""
              }),
              e = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.actionButtonStyle) ?? ""
              }),
              i = T(() => {
                var o;
                return ((o = R()) == null ? void 0 : o.closeButtonAriaLabel) ?? x()
              });
            Cs(At, {
              get index() {
                return r(_e)
              },
              get toast() {
                return r(Z)
              },
              get defaultRichColors() {
                return N()
              },
              get duration() {
                return r(V)
              },
              get class() {
                return r(ot)
              },
              get descriptionClass() {
                return r(lt)
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
                return r(pt)
              },
              get position() {
                return Mt
              },
              get style() {
                return r(tt)
              },
              get classes() {
                return r(_)
              },
              get unstyled() {
                return r(Nt)
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
                return D()
              },
              get expanded() {
                return r(W)
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
        }), J(Gt), nn(Gt, At => m(I, At), () => r(I)), Tt(() => Gt.dir = Gt.dir), v(dt, Gt)
      }), v(P, z)
    };
    at(zt, P => {
      Rt.toasts.length > 0 && P(oe)
    })
  }
  J(Ct), Tt(() => yt(Ct, "aria-label", `${w()??""} ${r(xt)??""}`)), v(s, Ct), Zt()
}
let Ne = q(!1);
var Ws = ft("<div></div>"),
  Vs = ft('<button type="button" class="btn">Retry</button>'),
  Fs = ft('<span class="loading loading-spinner loading-lg"></span>'),
  js = ft('<div class="flex h-16 items-center justify-center"><!></div>');

function zs(s, t) {
  Qt(t, !0);
  let n = k(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    f = k(t, "size", 3, "normal");
  const g = T(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: f(),
      ...t.challengeContainer ? {
        "challenge-container": t.challengeContainer
      } : {},
      callback: p => {
        var w;
        return (w = t.callback) == null ? void 0 : w.call(t, p)
      },
      "open-callback": () => {
        var p;
        return (p = t.openCallback) == null ? void 0 : p.call(t)
      },
      "close-callback": () => {
        var p;
        return (p = t.closeCallback) == null ? void 0 : p.call(t)
      },
      "error-callback": p => {
        var w;
        return (w = t.errorCallback) == null ? void 0 : w.call(t, p)
      },
      "expired-callback": () => {
        var p;
        return (p = t.expiredCallback) == null ? void 0 : p.call(t)
      }
    })),
    E = (p, w) => {
      var nt;
      let x = window.hcaptcha.render(p, w);
      return (nt = t.onload) == null || nt.call(t), {
        destroy() {
          var A;
          (A = window.hcaptcha) == null || A.remove(x)
        },
        update(A) {
          var X;
          (X = window.hcaptcha) == null || X.remove(x), x = window.hcaptcha.render(p, A)
        }
      }
    };
  let D = q(!1),
    B = q(!1),
    H;

  function S() {
    const p = document.createElement("script");
    p.type = "text/javascript";
    const w = new URL("https://js.hcaptcha.com/1/api.js");
    w.searchParams.set("render", "explicit"), p.src = w.toString(), p.async = !0, p.defer = !0, p.addEventListener("load", () => m(Ne, !0), {
      once: !0
    }), document.head.appendChild(p)
  }

  function C() {
    m(B, !1), H && clearTimeout(H), H = setTimeout(() => {
      (!r(Ne) || !r(D)) && m(B, !0)
    }, 5e3)
  }

  function N() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(p => p.remove()), m(Ne, !1), S(), C()
  }
  de(() => (m(D, !0), r(Ne) || S(), C(), () => {
    m(D, !1), H && clearTimeout(H)
  }));
  var L = $(),
    Y = G(L);
  {
    var R = p => {
        var w = Ws();
        Mn(w, (x, nt) => E == null ? void 0 : E(x, nt), () => r(g)), v(p, w)
      },
      K = p => {
        var w = js(),
          x = et(w);
        {
          var nt = X => {
              var W = Vs();
              ie("click", W, N), v(X, W)
            },
            A = X => {
              var W = Fs();
              v(X, W)
            };
          at(x, X => {
            r(B) ? X(nt) : X(A, -1)
          })
        }
        J(w), v(p, w)
      };
    at(Y, p => {
      r(Ne) && r(D) ? p(R) : p(K, -1)
    })
  }
  v(s, L), Zt()
}
en(["click"]);

function gn(...s) {
  return Ii(yi(s))
}
var Gs = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "children"]),
  Ks = ft("<div><!></div>");

function qs(s, t) {
  Qt(t, !0);
  let n = k(t, "ref", 15, null),
    f = Ee(t, Gs);
  var g = Ks();
  ye(g, D => ({
    class: D,
    ...f
  }), [() => gn("flex items-center", t.class)]);
  var E = et(g);
  Ht(E, () => t.children ?? Xt), J(g), nn(g, D => n(D), () => n()), v(s, g), Zt()
}
var Be, Xe;
class Ys {
  constructor(t, n) {
    vt(this, Be, () => {});
    vt(this, Xe, T(() => y(this, Be).call(this)));
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
    return r(y(this, Xe))
  }
}
Be = new WeakMap, Xe = new WeakMap;
const Xs = 18,
  Wn = 40,
  Qs = `${Wn}px`,
  Zs = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Js({
  containerRef: s,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: f,
  domContext: g
}) {
  let E = q(!1),
    D = q(!1),
    B = q(!1);

  function H() {
    const C = n.current;
    return C === "none" ? !1 : C === "increase-width" && r(E) && r(D)
  }

  function S() {
    const C = s.current,
      N = t.current;
    if (!C || !N || r(B) || n.current === "none") return;
    const L = C,
      Y = L.getBoundingClientRect().left + L.offsetWidth,
      R = L.getBoundingClientRect().top + L.offsetHeight / 2,
      K = Y - Xs,
      p = R;
    g.querySelectorAll(Zs).length === 0 && g.getDocument().elementFromPoint(K, p) === C || (m(E, !0), m(B, !0))
  }
  return Ut(() => {
    const C = s.current;
    if (!C || n.current === "none") return;

    function N() {
      const R = ai(C).innerWidth - C.getBoundingClientRect().right;
      m(D, R >= Wn)
    }
    N();
    const L = setInterval(N, 1e3);
    return () => {
      clearInterval(L)
    }
  }), Ut(() => {
    const C = f.current || g.getActiveElement() === t.current;
    if (n.current === "none" || !C) return;
    const N = setTimeout(S, 0),
      L = setTimeout(S, 2e3),
      Y = setTimeout(S, 5e3),
      R = setTimeout(() => {
        m(B, !0)
      }, 6e3);
    return () => {
      clearTimeout(N), clearTimeout(L), clearTimeout(Y), clearTimeout(R)
    }
  }), {
    get hasPwmBadge() {
      return r(E)
    },
    get willPushPwmBadge() {
      return H()
    },
    PWM_BADGE_SPACE_WIDTH: Qs
  }
}
const Vn = hi({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  $s = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var be, ue, qt, Jt, we, ne, ce, pe, Ie, Qe, He, Ue, Ze, Je, Fn, We, Ve, $e, Fe;
const vn = class vn {
  constructor(t) {
    vt(this, Je);
    Ft(this, "opts");
    Ft(this, "attachment");
    Ft(this, "inputAttachment");
    vt(this, be, q(!1));
    vt(this, ue, li(!1));
    vt(this, qt, q(null));
    vt(this, Jt, q(null));
    vt(this, we, new Ys(() => this.opts.value.current ?? ""));
    vt(this, ne, T(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    vt(this, ce, q(_n({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    vt(this, pe);
    vt(this, Ie);
    Ft(this, "domContext");
    Ft(this, "onkeydown", t => {
      const n = t.key;
      $s.includes(n) || t.ctrlKey || t.metaKey || n && r(y(this, ne)) && !r(y(this, ne)).test(n) && t.preventDefault()
    });
    vt(this, Qe, T(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    vt(this, He, T(() => ({
      id: this.opts.id.current,
      [Vn.root]: "",
      style: r(y(this, Qe)),
      ...this.attachment
    })));
    vt(this, Ue, T(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    vt(this, Ze, T(() => ({
      position: "absolute",
      inset: 0,
      width: y(this, pe).willPushPwmBadge ? `calc(100% + ${y(this,pe).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: y(this, pe).willPushPwmBadge ? `inset(0 ${y(this,pe).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
    vt(this, We, () => {
      var K;
      const t = this.opts.inputRef.current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        m(y(this, qt), null), m(y(this, Jt), null);
        return
      }
      const f = t.selectionStart,
        g = t.selectionEnd,
        E = t.selectionDirection ?? "none",
        D = t.maxLength,
        B = t.value,
        H = r(y(this, ce)).prev;
      let S = -1,
        C = -1,
        N;
      if (B.length !== 0 && f !== null && g !== null) {
        const p = f === g,
          w = f === B.length && B.length < D;
        if (p && !w) {
          const x = f;
          if (x === 0) S = 0, C = 1, N = "forward";
          else if (x === D) S = x - 1, C = x, N = "backward";
          else if (D > 1 && B.length > 1) {
            let nt = 0;
            if (H[0] !== null && H[1] !== null) {
              N = x < H[1] ? "backward" : "forward";
              const A = H[0] === H[1] && H[0] < D;
              N === "backward" && !A && (nt = -1)
            }
            S = nt + x, C = nt + x + 1
          }
        }
        S !== -1 && C !== -1 && S !== C && ((K = this.opts.inputRef.current) == null || K.setSelectionRange(S, C, N))
      }
      const L = S !== -1 ? S : f,
        Y = C !== -1 ? C : g,
        R = N ?? E;
      m(y(this, qt), L, !0), m(y(this, Jt), Y, !0), r(y(this, ce)).prev = [L, Y, R]
    });
    Ft(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(y(this, ne)) && !r(y(this, ne)).test(n)) {
        t.preventDefault();
        return
      }
      typeof y(this, we).current == "string" && n.length < y(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    Ft(this, "onfocus", t => {
      const n = this.opts.inputRef.current;
      if (n) {
        const f = Math.min(n.value.length, this.opts.maxLength.current - 1),
          g = n.value.length;
        n.setSelectionRange(f, g), m(y(this, qt), f, !0), m(y(this, Jt), g, !0)
      }
      y(this, ue).current = !0
    });
    Ft(this, "onpaste", t => {
      var C, N, L, Y;
      const n = this.opts.inputRef.current;
      if (!n) return;
      const f = R => {
          const K = n.selectionStart === null ? void 0 : n.selectionStart,
            p = n.selectionEnd === null ? void 0 : n.selectionEnd,
            w = K !== p,
            x = this.opts.value.current;
          return (w ? x.slice(0, K) + R + x.slice(p) : x.slice(0, K) + R + x.slice(K)).slice(0, this.opts.maxLength.current)
        },
        g = R => R.length > 0 && r(y(this, ne)) && !r(y(this, ne)).test(R);
      if (!((C = this.opts.pasteTransformer) != null && C.current) && (!y(this, Ie).isIOS || !t.clipboardData || !n)) {
        const R = f((N = t.clipboardData) == null ? void 0 : N.getData("text/plain"));
        g(R) && t.preventDefault();
        return
      }
      const E = ((L = t.clipboardData) == null ? void 0 : L.getData("text/plain")) ?? "",
        D = (Y = this.opts.pasteTransformer) != null && Y.current ? this.opts.pasteTransformer.current(E) : E;
      t.preventDefault();
      const B = f(D);
      if (g(B)) return;
      n.value = B, this.opts.value.current = B;
      const H = Math.min(B.length, this.opts.maxLength.current - 1),
        S = B.length;
      n.setSelectionRange(H, S), m(y(this, qt), H, !0), m(y(this, Jt), S, !0)
    });
    Ft(this, "onmouseover", t => {
      m(y(this, be), !0)
    });
    Ft(this, "onmouseleave", t => {
      m(y(this, be), !1)
    });
    Ft(this, "onblur", t => {
      if (r(y(this, ce)).willSyntheticBlur) {
        r(y(this, ce)).willSyntheticBlur = !1;
        return
      }
      y(this, ue).current = !1
    });
    vt(this, Ve, T(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(y(this, Ze)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(y(this, qt)),
        "data-pin-input-input-mse": r(y(this, Jt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(y(this, ne))) == null ? void 0 : t.source,
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
    vt(this, $e, T(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const f = y(this, ue).current && r(y(this, qt)) !== null && r(y(this, Jt)) !== null && (r(y(this, qt)) === r(y(this, Jt)) && n === r(y(this, qt)) || n >= r(y(this, qt)) && n < r(y(this, Jt))),
        g = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: g,
        isActive: f,
        hasFakeCaret: f && g === null
      }
    })));
    vt(this, Fe, T(() => ({
      cells: r(y(this, $e)),
      isFocused: y(this, ue).current,
      isHovering: r(y(this, be))
    })));
    var n;
    this.opts = t, this.attachment = hn(this.opts.ref), this.inputAttachment = hn(this.opts.inputRef), this.domContext = new ui(t.ref), me(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), me(this, pe, Js({
      containerRef: this.opts.ref,
      inputRef: this.opts.inputRef,
      isFocused: y(this, ue),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), de(() => {
      const f = this.opts.inputRef.current,
        g = this.opts.ref.current;
      if (!f || !g) return;
      y(this, Ie).value.current !== f.value && (this.opts.value.current = f.value), r(y(this, ce)).prev = [f.selectionStart, f.selectionEnd, f.selectionDirection ?? "none"];
      const E = Re(this.domContext.getDocument(), "selectionchange", y(this, We), {
        capture: !0
      });
      y(this, We).call(this), this.domContext.getActiveElement() === f && (y(this, ue).current = !0), this.domContext.getElementById("pin-input-style") || bn(this, Je, Fn).call(this);
      const D = () => {
        g && g.style.setProperty("--bits-pin-input-root-height", `${f.clientHeight}px`)
      };
      D();
      const B = new ResizeObserver(D);
      return B.observe(f), () => {
        E(), B.disconnect()
      }
    }), ci([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
      ta(() => {
        const f = this.opts.inputRef.current;
        if (!f) return;
        f.dispatchEvent(new Event("input"));
        const g = f.selectionStart,
          E = f.selectionEnd,
          D = f.selectionDirection ?? "none";
        g !== null && E !== null && (m(y(this, qt), g, !0), m(y(this, Jt), E, !0), r(y(this, ce)).prev = [g, E, D])
      }, this.domContext)
    }), Ut(() => {
      const f = this.opts.value.current,
        g = y(this, we).current,
        E = this.opts.maxLength.current,
        D = this.opts.onComplete.current;
      g !== void 0 && f !== g && g.length < E && f.length === E && D(f)
    })
  }
  static create(t) {
    return new vn(t)
  }
  get rootProps() {
    return r(y(this, He))
  }
  set rootProps(t) {
    m(y(this, He), t)
  }
  get inputWrapperProps() {
    return r(y(this, Ue))
  }
  set inputWrapperProps(t) {
    m(y(this, Ue), t)
  }
  get inputProps() {
    return r(y(this, Ve))
  }
  set inputProps(t) {
    m(y(this, Ve), t)
  }
  get snippetProps() {
    return r(y(this, Fe))
  }
  set snippetProps(t) {
    m(y(this, Fe), t)
  }
};
be = new WeakMap, ue = new WeakMap, qt = new WeakMap, Jt = new WeakMap, we = new WeakMap, ne = new WeakMap, ce = new WeakMap, pe = new WeakMap, Ie = new WeakMap, Qe = new WeakMap, He = new WeakMap, Ue = new WeakMap, Ze = new WeakMap, Je = new WeakSet, Fn = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const f = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Le(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Le(n.sheet, `[data-pin-input-input]:autofill { ${f} }`), Le(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${f} }`), Le(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Le(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, We = new WeakMap, Ve = new WeakMap, $e = new WeakMap, Fe = new WeakMap;
let mn = vn;
var je;
const yn = class yn {
  constructor(t) {
    Ft(this, "opts");
    Ft(this, "attachment");
    vt(this, je, T(() => ({
      id: this.opts.id.current,
      [Vn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = hn(this.opts.ref)
  }
  static create(t) {
    return new yn(t)
  }
  get props() {
    return r(y(this, je))
  }
  set props(t) {
    m(y(this, je), t)
  }
};
je = new WeakMap;
let pn = yn;

function ta(s, t) {
  const n = t.setTimeout(s, 0),
    f = t.setTimeout(s, 10),
    g = t.setTimeout(s, 50);
  return [n, f, g]
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
  Qt(t, !0);
  let f = k(t, "id", 19, () => fn(n)),
    g = k(t, "inputId", 19, () => `${fn(n)}-input`),
    E = k(t, "ref", 15, null),
    D = k(t, "inputRef", 15, null),
    B = k(t, "maxlength", 3, 6),
    H = k(t, "textalign", 3, "left"),
    S = k(t, "inputmode", 3, "numeric"),
    C = k(t, "onComplete", 3, Sn),
    N = k(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    L = k(t, "class", 3, ""),
    Y = k(t, "autocomplete", 3, "one-time-code"),
    R = k(t, "disabled", 3, !1),
    K = k(t, "value", 15, ""),
    p = k(t, "onValueChange", 3, Sn),
    w = Ee(t, ea);
  const x = mn.create({
      id: kt(() => f()),
      ref: kt(() => E(), M => E(M)),
      inputRef: kt(() => D(), M => D(M)),
      inputId: kt(() => g()),
      autocomplete: kt(() => Y()),
      maxLength: kt(() => B()),
      textAlign: kt(() => H()),
      disabled: kt(() => R()),
      inputmode: kt(() => S()),
      pattern: kt(() => t.pattern),
      onComplete: kt(() => C()),
      value: kt(() => K(), M => {
        K(M), p()(M)
      }),
      pushPasswordManagerStrategy: kt(() => N()),
      pasteTransformer: kt(() => t.pasteTransformer)
    }),
    nt = T(() => qe(w, x.inputProps)),
    A = T(() => qe(x.rootProps, {
      class: L()
    })),
    X = T(() => qe(x.inputWrapperProps, {}));
  var W = na();
  ye(W, () => ({
    ...r(A)
  }));
  var pt = et(W);
  Ht(pt, () => t.children ?? Xt, () => x.snippetProps);
  var It = wt(pt, 2);
  ye(It, () => ({
    ...r(X)
  }));
  var I = et(It);
  ye(I, () => ({
    ...r(nt)
  }), void 0, void 0, void 0, void 0, !0), J(It), J(W), v(s, W), Zt()
}
var ra = new Set(["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]),
  oa = ft("<div><!></div>");

function sa(s, t) {
  const n = Rn();
  Qt(t, !0);
  let f = k(t, "id", 19, () => fn(n)),
    g = k(t, "ref", 15, null),
    E = Ee(t, ra);
  const D = pn.create({
      id: kt(() => f()),
      ref: kt(() => g(), L => g(L)),
      cell: kt(() => t.cell)
    }),
    B = T(() => qe(E, D.props));
  var H = $(),
    S = G(H);
  {
    var C = L => {
        var Y = $(),
          R = G(Y);
        Ht(R, () => t.child, () => ({
          props: r(B)
        })), v(L, Y)
      },
      N = L => {
        var Y = oa();
        ye(Y, () => ({
          ...r(B)
        }));
        var R = et(Y);
        Ht(R, () => t.children ?? Xt), J(Y), v(L, Y)
      };
    at(S, L => {
      t.child ? L(C) : L(N, -1)
    })
  }
  v(s, H), Zt()
}
var aa = new Set(["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]),
  la = ft('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  ua = ft(" <!>", 1);

function ca(s, t) {
  Qt(t, !0);
  let n = k(t, "ref", 15, null),
    f = Ee(t, aa);
  var g = $(),
    E = G(g);
  {
    let D = T(() => gn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    $t(E, () => sa, (B, H) => {
      H(B, ke({
        get cell() {
          return t.cell
        },
        get class() {
          return r(D)
        }
      }, () => f, {
        get ref() {
          return n()
        },
        set ref(S) {
          n(S)
        },
        children: (S, C) => {
          On();
          var N = ua(),
            L = G(N),
            Y = wt(L);
          {
            var R = K => {
              var p = la();
              v(K, p)
            };
            at(Y, K => {
              t.cell.hasFakeCaret && K(R)
            })
          }
          Tt(() => Bt(L, `${t.cell.char??""} `)), v(S, N)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  v(s, g), Zt()
}
var da = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);

function ha(s, t) {
  Qt(t, !0);
  let n = k(t, "ref", 15, null),
    f = k(t, "value", 15, ""),
    g = Ee(t, da);
  var E = $(),
    D = G(E);
  {
    let B = T(() => gn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    $t(D, () => ia, (H, S) => {
      S(H, ke({
        get class() {
          return r(B)
        }
      }, () => g, {
        get ref() {
          return n()
        },
        set ref(C) {
          n(C)
        },
        get value() {
          return f()
        },
        set value(C) {
          f(C)
        }
      }))
    })
  }
  v(s, E), Zt()
}

function fa(s) {
  return s.closest("dialog") ?? document.body
}
var un = {
    exports: {}
  },
  An;

function ma() {
  return An || (An = 1, (function(s) {
    (function(t) {
      s.exports ? s.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var n = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          g = Object.getOwnPropertyNames,
          E = Object.prototype.hasOwnProperty,
          D = (l, e) => {
            for (var i in e) n(l, i, {
              get: e[i],
              enumerable: !0
            })
          },
          B = (l, e, i, o) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of g(e)) !E.call(l, a) && a !== i && n(l, a, {
                get: () => e[a],
                enumerable: !(o = f(e, a)) || o.enumerable
              });
            return l
          },
          H = l => B(n({}, "__esModule", {
            value: !0
          }), l),
          S = {};
        D(S, {
          Iti: () => ot,
          default: () => Nt
        });
        var C = [
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
          N = [];
        for (const l of C) N.push({
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
        var L = N,
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
          R = Y,
          K = {
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
          p = K,
          w = {
            ...R,
            ...p
          },
          x = w,
          nt = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          A = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          X = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          W = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          pt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          It = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          I = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          M = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          ct = {
            NANP: "1"
          },
          xt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          Lt = {
            ISO2: "us"
          },
          St = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Ot = {
            AUTO: "auto"
          },
          jt = {
            COUNTRY_CODE: "countryCode",
            DIAL_CODE: "dialCode"
          },
          mt = {
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
          rt = l => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(l).matches,
          Q = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const l = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = rt("(max-width: 500px)"),
                i = rt("(max-height: 600px)"),
                o = rt("(pointer: coarse)");
              return l || e || o && i
            }
            return !1
          },
          Et = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: St.POLITE,
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
            useFullscreenPopup: Q(),
            validationNumberTypes: ["MOBILE"]
          },
          Ct = (l, e) => {
            l.useFullscreenPopup && (l.fixDropdownWidth = !1), l.onlyCountries.length === 1 && (l.initialCountry = l.onlyCountries[0]), l.separateDialCode && (l.nationalMode = !1), l.allowDropdown && !l.showFlags && !l.separateDialCode && (l.nationalMode = !1), l.useFullscreenPopup && !l.dropdownContainer && (l.dropdownContainer = document.body), l.i18n = {
              ...e,
              ...l.i18n
            }
          },
          zt = l => l.replace(/\D/g, ""),
          oe = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          P = (l, e) => {
            const i = oe(e),
              o = [],
              a = [],
              c = [],
              u = [],
              h = [],
              d = [];
            for (const U of l) U.iso2 === i ? o.push(U) : U.normalisedName.startsWith(i) ? a.push(U) : U.normalisedName.includes(i) ? c.push(U) : i === U.dialCode || i === U.dialCodePlus ? u.push(U) : U.dialCodePlus.includes(i) ? h.push(U) : U.initials.includes(i) && d.push(U);
            const b = (U, _t) => U.priority - _t.priority;
            return [...o.sort(b), ...a.sort(b), ...c.sort(b), ...u.sort(b), ...h.sort(b), ...d.sort(b)]
          },
          z = (l, e) => {
            const i = e.toLowerCase();
            for (const o of l)
              if (o.name.toLowerCase().startsWith(i)) return o;
            return null
          },
          bt = l => Object.keys(l).filter(e => !!l[e]).join(" "),
          dt = (l, e, i) => {
            const o = document.createElement(l);
            return e && Object.entries(e).forEach(([a, c]) => o.setAttribute(a, c)), i && i.appendChild(o), o
          },
          Mt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${mt.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          ee = l => {
            const e = `iti-${l}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${mt.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          he = class {
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
              } = this.options, a = bt({
                iti: !0,
                "iti--allow-dropdown": l,
                "iti--show-flags": e,
                "iti--inline-dropdown": !o,
                [i]: !!i
              }), c = dt("div", {
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
                this.countryContainer = dt("div", {
                  class: `iti__country-container ${A.V_HIDE}`
                }, l), e ? (this.selectedCountry = dt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [mt.EXPANDED]: "false",
                  [mt.LABEL]: this.options.i18n.noCountrySelected,
                  [mt.HASPOPUP]: "dialog",
                  [mt.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = dt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const a = dt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = dt("div", {
                  class: A.FLAG
                }, a), e && (this.dropdownArrow = dt("div", {
                  class: "iti__arrow",
                  [mt.HIDDEN]: "true"
                }, a)), i && (this.selectedDialCode = dt("div", {
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
              if (this.dropdownContent = dt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${A.HIDE} ${u}`,
                  role: "dialog",
                  [mt.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), i && this._buildSearchUI(), this.countryList = dt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [mt.LABEL]: o.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), i && this.updateSearchResultsA11yText(), a) {
                const h = bt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = dt("div", {
                  class: h
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: l
              } = this.options, e = dt("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = dt("span", {
                class: "iti__search-icon",
                [mt.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = Mt(), this.searchInput = dt("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: l.searchPlaceholder,
                role: "combobox",
                [mt.EXPANDED]: "true",
                [mt.LABEL]: l.searchPlaceholder,
                [mt.CONTROLS]: `iti-${this.id}__country-listbox`,
                [mt.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = dt("button", {
                type: "button",
                class: `iti__search-clear ${A.HIDE}`,
                [mt.LABEL]: l.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = ee(this.id), this.searchResultsA11yText = dt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = dt("div", {
                class: `iti__no-results ${A.HIDE}`,
                [mt.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = l.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(A.V_HIDE))
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
                  u ? this.hiddenInput = u : (this.hiddenInput = dt("input", {
                    type: "hidden",
                    name: c.phone
                  }), l.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (o = this.telInput.form) == null ? void 0 : o.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = dt("input", {
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
                  o = bt({
                    [A.COUNTRY_ITEM]: !0
                  }),
                  a = dt("li", {
                    id: `iti-${this.id}__item-${i.iso2}`,
                    class: o,
                    tabindex: "-1",
                    role: "option",
                    [mt.SELECTED]: "false"
                  });
                a.dataset.dialCode = i.dialCode, a.dataset.countryCode = i.iso2, i.nodeById[this.id] = a, this.options.showFlags && dt("div", {
                  class: `${A.FLAG} iti__${i.iso2}`
                }, a);
                const c = dt("span", {
                  class: "iti__country-name"
                }, a);
                c.textContent = i.name;
                const u = dt("span", {
                  class: "iti__dial-code"
                }, a);
                this.isRTL && u.setAttribute("dir", "ltr"), u.textContent = `+${i.dialCode}`, l.appendChild(a)
              }
              this.countryList.appendChild(l)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const l = this.options.separateDialCode ? M.SANE_SELECTED_WITH_DIAL_WIDTH : M.SANE_SELECTED_NO_DIAL_WIDTH,
                  i = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || l) + M.INPUT_PADDING_EXTRA_LEFT;
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
                b = h - a + e.scrollTop;
              if (h < a) e.scrollTop = b;
              else if (d > c) {
                const U = o - u;
                e.scrollTop = b - U
              }
            }
            highlightListItem(l, e) {
              const i = this.highlightedItem;
              if (i && i.classList.remove(A.HIGHLIGHT), this.highlightedItem = l, this.highlightedItem && (this.highlightedItem.classList.add(A.HIGHLIGHT), this.options.countrySearch)) {
                const o = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(mt.ACTIVE_DESCENDANT, o)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(l) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== l && (this.selectedItem.setAttribute(mt.SELECTED, "false"), this.selectedItem = null), l && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${l}"]`);
                e && (e.setAttribute(mt.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(l) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const i of l) {
                const o = i.nodeById[this.id];
                o && (this.countryList.appendChild(o), e && (this.highlightListItem(o, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(A.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(A.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const l = this.telInput.parentNode;
              l.before(this.telInput), l.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const e of this.countries) delete e.nodeById[this.id];
              this.countries = null
            }
          },
          fe = l => {
            const {
              onlyCountries: e,
              excludeCountries: i
            } = l;
            if (e.length) {
              const o = e.map(a => a.toLowerCase());
              return L.filter(a => o.includes(a.iso2))
            } else if (i.length) {
              const o = i.map(a => a.toLowerCase());
              return L.filter(a => !o.includes(a.iso2))
            }
            return L
          },
          Wt = (l, e) => {
            for (const i of l) {
              const o = i.iso2.toLowerCase();
              e.i18n[o] && (i.name = e.i18n[o])
            }
          },
          Gt = l => {
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
                  for (let b = 1; b < d.length; b++) {
                    const U = d.substring(0, b),
                      _t = u.dialCode + U;
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
          Z = l => {
            for (const e of l) e.normalisedName = oe(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(i => i[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          _e = (l, e, i, o) => {
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
            const e = zt(l);
            if (e.startsWith(ct.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return xe.includes(i)
            }
            return !1
          };
        for (const l of L) l.name = x[l.iso2];
        var Se = 0,
          O = new Set(L.map(l => l.iso2)),
          V = l => O.has(l),
          ot = class jn {
            constructor(e, i = {}) {
              this.id = Se++, this.options = {
                ...Et,
                ...i
              }, Ct(this.options, x), this.ui = new he(e, this.options, this.id), this.isAndroid = jn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = fe(this.options);
              const {
                dialCodes: o,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: c
              } = Gt(this.countries);
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
              Wt(this.countries, this.options), At(this.countries, this.options), Z(this.countries)
            }
            _setInitialState(e = !1) {
              const i = this.ui.telInput.getAttribute("value"),
                o = this._normaliseNumerals(i),
                a = this._getTelInputValue(),
                u = o && o.startsWith("+") && (!a || !a.startsWith("+")) ? o : a,
                h = this._getDialCode(u),
                d = ge(u),
                {
                  initialCountry: b,
                  geoIpLookup: U
                } = this.options,
                _t = b === Ot.AUTO && U;
              if (h && !d) this._updateCountryFromNumber(u);
              else if (!_t || e) {
                const ut = b ? b.toLowerCase() : "";
                V(ut) ? this._setCountry(ut) : h && d ? this._setCountry(Lt.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(A.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                o = this.ui.telInput.closest("label");
              o && o.addEventListener("click", i, {
                signal: e
              });
              const a = () => {
                this.ui.dropdownContent.classList.contains(A.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", a, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(A.HIDE) && [X.ARROW_UP, X.ARROW_DOWN, X.SPACE, X.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === X.TAB && this._closeDropdown()
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
              if (e && !_.utils) {
                const c = () => {
                  var u;
                  (u = _.attachUtils(e)) == null || u.catch(() => {})
                };
                if (_.documentReady()) c();
                else {
                  const u = () => {
                    c()
                  };
                  window.addEventListener("load", u, {
                    signal: this.abortController.signal
                  })
                }
              } else this.resolveUtilsScriptPromise();
              i === Ot.AUTO && o && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              _.autoCountry ? this.handleAutoCountry() : _.startedLoadingAutoCountry || (_.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const i = e.toLowerCase();
                V(i) ? (_.autoCountry = i, setTimeout(() => tt("handleAutoCountry"))) : (this._setInitialState(!0), tt("rejectAutoCountryPromise"))
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
                separateDialCode: o,
                allowDropdown: a,
                countrySearch: c
              } = this.options;
              let u = !1;
              pt.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const h = d => {
                const b = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && o && a && c) {
                  const j = this.ui.telInput.selectionStart || 0,
                    gt = b.substring(0, j - 1),
                    it = b.substring(j);
                  this._setTelInputValue(gt + it), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(b) && this._triggerCountryChange();
                const U = (d == null ? void 0 : d.data) && pt.NON_PLUS_NUMERIC.test(d.data),
                  _t = (d == null ? void 0 : d.inputType) === W.PASTE && b;
                U || _t && !e ? u = !0 : pt.NON_PLUS_NUMERIC.test(b) || (u = !1);
                const ut = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  F = this.userNumeralSet === "ascii";
                if (i && !u && !ut && F) {
                  const j = this.ui.telInput.selectionStart || 0,
                    it = b.substring(0, j).replace(pt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (d == null ? void 0 : d.inputType) === W.DELETE_FWD,
                    st = this._getFullNumber(),
                    Kt = Te(st, b, _.utils, this.selectedCountryData, this.options.separateDialCode),
                    Vt = De(it, Kt, j, ht);
                  this._setTelInputValue(Kt), this.ui.telInput.setSelectionRange(Vt, Vt)
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
                        b = !h.startsWith("+") && this.ui.telInput.selectionStart === 0 && u.key === "+",
                        U = this._normaliseNumerals(u.key),
                        _t = /^[0-9]$/.test(U),
                        ut = i ? _t : b || _t,
                        F = this.ui.telInput,
                        j = F.selectionStart,
                        gt = F.selectionEnd,
                        it = h.slice(0, j),
                        ht = h.slice(gt),
                        st = it + u.key + ht,
                        Kt = this._getFullNumber(st),
                        Vt = _.utils.getCoreNumber(Kt, this.selectedCountryData.iso2),
                        Dt = this.maxCoreNumberLength && Vt.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Kt) !== null;
                      (!ut || Dt && !te && !b) && u.preventDefault()
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
                    b = this.selectedCountryData.iso2,
                    U = i.clipboardData.getData("text"),
                    _t = this._normaliseNumerals(U),
                    ut = a === 0 && c > 0,
                    F = !u.startsWith("+") || ut,
                    j = _t.replace(pt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    gt = j.startsWith("+"),
                    it = j.replace(/\+/g, ""),
                    ht = gt && F ? `+${it}` : it;
                  let st = h + ht + d;
                  if (st.length > 5) {
                    let Vt = _.utils.getCoreNumber(st, b);
                    for (; Vt.length === 0 && st.length > 0;) st = st.slice(0, -1), Vt = _.utils.getCoreNumber(st, b);
                    if (!Vt) return;
                    if (this.maxCoreNumberLength && Vt.length > this.maxCoreNumberLength)
                      if (o.selectionEnd === u.length) {
                        const Dt = Vt.length - this.maxCoreNumberLength;
                        st = st.slice(0, st.length - Dt)
                      } else return
                  }
                  this._setTelInputValue(st);
                  const Kt = a + ht.length;
                  o.setSelectionRange(Kt, Kt), o.dispatchEvent(new InputEvent("input", {
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(A.HIDE), this.ui.selectedCountry.setAttribute(mt.EXPANDED, "true"), this._setDropdownPosition(), i) {
                const o = this.ui.countryList.firstElementChild;
                o && (this.ui.highlightListItem(o, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(A.ARROW_UP), this._trigger(nt.OPEN_COUNTRY_DROPDOWN)
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
                const a = (c = o.target) == null ? void 0 : c.closest(`.${A.COUNTRY_ITEM}`);
                a && this.ui.highlightListItem(a, !1)
              };
              this.ui.countryList.addEventListener("mouseover", i, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const i = o => {
                var c;
                const a = (c = o.target) == null ? void 0 : c.closest(`.${A.COUNTRY_ITEM}`);
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
                [X.ARROW_UP, X.ARROW_DOWN, X.ENTER, X.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === X.ARROW_UP || c.key === X.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === X.ENTER ? this._handleEnterKey() : c.key === X.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && pt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), o && clearTimeout(o), i += c.key.toLowerCase(), this._searchForCountry(i), o = setTimeout(() => {
                  i = ""
                }, It.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", a, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const i = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(A.HIDE) : this.ui.searchClearButton.classList.add(A.HIDE)
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
              e === "" ? i = this.countries : i = P(this.countries, e), this.ui.filterCountries(i)
            }
            _handleUpDownKey(e) {
              var o, a;
              let i = e === X.ARROW_UP ? (o = this.ui.highlightedItem) == null ? void 0 : o.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === X.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let i = e;
              if (this.options.formatOnDisplay && _.utils && this.selectedCountryData) {
                const o = this.options.nationalMode || !i.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: a,
                    INTERNATIONAL: c
                  } = _.utils.numberFormat,
                  u = o ? a : c;
                i = _.utils.formatNumber(i, this.selectedCountryData.iso2, u)
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
                h = zt(o);
              if (u) {
                const d = zt(u),
                  b = this.dialCodeToIso2Map[d];
                if (b.length === 1) return b[0] === a ? null : b[0];
                if (!a && this.defaultCountry && b.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === ct.NANP && ge(h)) return null;
                const {
                  areaCodes: _t,
                  priority: ut
                } = this.selectedCountryData;
                if (_t) {
                  const ht = _t.map(st => `${c}${st}`);
                  for (const st of ht)
                    if (h.startsWith(st)) return null
                }
                const j = _t && !(ut === 0) && h.length > d.length,
                  gt = a && b.includes(a) && !j,
                  it = a === b[0];
                if (!gt && !it) return b[0]
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
                const h = e && o ? `${A.FLAG} iti__${e}` : `${A.FLAG} ${A.GLOBE}`;
                let d, b;
                if (e) {
                  const {
                    name: U,
                    dialCode: _t
                  } = this.selectedCountryData;
                  b = U, d = a.selectedCountryAriaLabel.replace("${countryName}", U).replace("${dialCode}", `+${_t}`)
                } else b = a.noCountrySelected, d = a.noCountrySelected;
                this.ui.selectedCountryInner.className = h, this.ui.selectedCountry.setAttribute("title", b), this.ui.selectedCountry.setAttribute(mt.LABEL, d)
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
              if (e && _.utils)
                if (a) {
                  const c = _.utils.numberType[i];
                  let u = _.utils.getExampleNumber(a, !1, c, !0),
                    h = u;
                  for (; _.utils.isPossibleNumber(u, a, o);) h = u, u += "0";
                  const d = _.utils.getCoreNumber(h, a);
                  this.maxCoreNumberLength = d.length, a === "by" && (this.maxCoreNumberLength = d.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: e,
                placeholderNumberType: i,
                nationalMode: o,
                customPlaceholder: a
              } = this.options, c = e === St.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === St.POLITE;
              if (_.utils && c) {
                const u = _.utils.numberType[i];
                let h = this.selectedCountryData.iso2 ? _.utils.getExampleNumber(this.selectedCountryData.iso2, o, u) : "";
                h = this._beforeSetNumber(h), typeof a == "function" && (h = a(h, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", h)
              }
            }
            _selectListItem(e) {
              const i = e.dataset[jt.COUNTRY_CODE],
                o = this._setCountry(i);
              this._closeDropdown();
              const a = e.dataset[jt.DIAL_CODE];
              if (this._updateDialCode(a), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), o && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(A.HIDE) || (this.ui.dropdownContent.classList.add(A.HIDE), this.ui.selectedCountry.setAttribute(mt.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(mt.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(A.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(A.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(nt.CLOSE_COUNTRY_DROPDOWN))
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
              const c = zt(i);
              return this.options.separateDialCode && !i.startsWith("+") && o && c ? a = `+${o}` : a = "", a + i
            }
            _beforeSetNumber(e) {
              const i = this._getDialCode(e),
                o = _e(e, i, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(o)
            }
            _triggerCountryChange() {
              this._trigger(nt.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Ot.AUTO && _.autoCountry && (this.defaultCountry = _.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(A.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (_.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), _.instances instanceof Map ? _.instances.delete(this.id) : delete _.instances[this.id])
            }
            getExtension() {
              return _.utils ? _.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (_.utils) {
                const {
                  iso2: i
                } = this.selectedCountryData, o = this._getFullNumber(), a = _.utils.formatNumber(o, i, e);
                return this._mapAsciiToUserNumerals(a)
              }
              return ""
            }
            getNumberType() {
              return _.utils ? _.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : I.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (_.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return _.utils.getValidationError(this._getFullNumber(), e)
              }
              return I.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: i
              } = this.selectedCountryData;
              if (e === xt.DIAL_CODE && _.utils) {
                const o = this._getFullNumber(),
                  a = _.utils.getCoreNumber(o, i);
                if (a[0] === xt.MOBILE_PREFIX && a.length !== xt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return _.utils ? _.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!_.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const i = u => e ? this._utilsIsValidNumber(u) : this._utilsIsPossibleNumber(u),
                o = this._getFullNumber(),
                a = o.search(pt.ALPHA_UNICODE);
              if (a > -1 && !this.options.allowPhonewords) {
                const u = o.substring(0, a),
                  h = i(u),
                  d = i(o);
                return h && d
              }
              return i(o)
            }
            _utilsIsValidNumber(e) {
              return _.utils ? _.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const i = e == null ? void 0 : e.toLowerCase();
              if (!V(i)) throw new Error(`Invalid country code: '${i}'`);
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
              this._updateValFromNumber(i), o && this._triggerCountryChange(), this._trigger(nt.INPUT, {
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
          lt = l => {
            if (!_.utils && !_.startedLoadingUtilsScript) {
              let e;
              if (typeof l == "function") try {
                e = Promise.resolve(l())
              } catch (i) {
                return Promise.reject(i)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof l}`));
              return _.startedLoadingUtilsScript = !0, e.then(i => {
                const o = i == null ? void 0 : i.default;
                if (!o || typeof o != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return _.utils = o, tt("handleUtils"), !0
              }).catch(i => {
                throw tt("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          tt = (l, ...e) => {
            Object.values(_.instances).forEach(i => {
              const o = i[l];
              typeof o == "function" && o.apply(i, e)
            })
          },
          _ = Object.assign((l, e) => {
            const i = new ot(l, e);
            return _.instances[i.id] = i, l.iti = i, i
          }, {
            defaults: Et,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => L,
            getInstance: l => {
              const e = l.dataset.intlTelInputId;
              return e ? _.instances[e] : null
            },
            instances: {},
            attachUtils: lt,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Nt = _;
        return H(S)
      })();
      return t.default
    })
  })(un)), un.exports
}
var pa = ma();
const _a = fi(pa);
var ga = ft('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  Pn = ft('<span class="w-8"> </span>'),
  kn = ft('<span class="loading loading-spinner center-absolute absolute"></span>'),
  va = ft('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  ya = ft('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  Ca = ft('<div class="flex h-full w-full flex-col items-center"><!></div>');

function ba(s, t) {
  Qt(t, !0);
  let n = k(t, "verifyingPhone", 15, ""),
    f = q(!0),
    g = q(0),
    E = q(!1);
  const D = T(() => r(g) > 0 || r(E));
  let B = q(!1),
    H = q(""),
    S = q(void 0);
  de(() => {
    on.getOtpCooldown().then(x => {
      m(g, x.cooldownMs, !0)
    }).catch(x => {
      ve.error(x.message)
    }).finally(() => {
      m(f, !1)
    });
    const p = 1e3,
      w = setInterval(() => {
        m(g, Math.max(0, r(g) - p), !0)
      }, p);
    return () => {
      clearInterval(w)
    }
  });
  async function C(p) {
    try {
      m(E, !0);
      const w = await on.sendOtp(p),
        x = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      ve.info(Mo({
        channel: x[w.channel],
        phone: w.phone
      }), {
        duration: 15e3
      }), n(w.phone), m(g, w.cooldownMs, !0)
    } catch (w) {
      ve.error(w.message)
    } finally {
      m(E, !1)
    }
  }
  Ut(() => {
    r(H).length === 6 && (m(B, !0), (async () => {
      try {
        await on.verifyChallenge({
          type: "otp",
          code: r(H)
        }), ve.success(Br()), t.onsuccess(n())
      } catch (p) {
        ve.error(p.message)
      } finally {
        m(H, ""), m(B, !1)
      }
    })())
  });
  var N = Ca(),
    L = et(N);
  {
    var Y = p => {
        var w = ga();
        v(p, w)
      },
      R = p => {
        var w = va(),
          x = G(w),
          nt = et(x),
          A = et(nt),
          X = et(A, !0);
        J(A);
        var W = wt(A, 2),
          pt = et(W, !0);
        J(W), J(nt);
        var It = wt(nt, 2),
          I = et(It);
        Bn(I, () => rt => {
          var Q, Et;
          return m(S, _a(rt, {
            strictMode: !0,
            initialCountry: ((Et = (Q = dn.data) == null ? void 0 : Q.country) == null ? void 0 : Et.toLocaleLowerCase()) ?? "br",
            loadUtils: () => wi(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: fa(rt)
          })), () => {
            var Ct;
            (Ct = r(S)) == null || Ct.destroy()
          }
        });
        var M = wt(I, 2),
          ct = et(M),
          xt = wt(ct);
        {
          var Lt = rt => {
            var Q = Pn(),
              Et = et(Q);
            J(Q), Tt(Ct => Bt(Et, `(${Ct??""})`), [() => En(r(g))]), v(rt, Q)
          };
          at(xt, rt => {
            r(g) > 0 && rt(Lt)
          })
        }
        var St = wt(xt, 2);
        {
          var Ot = rt => {
            var Q = kn();
            v(rt, Q)
          };
          at(St, rt => {
            r(E) && rt(Ot)
          })
        }
        J(M), J(It), J(x);
        var jt = wt(x, 2),
          mt = et(jt, !0);
        J(jt), Tt((rt, Q, Et, Ct) => {
          Bt(X, rt), Bt(pt, Q), M.disabled = r(D), Bt(ct, `${Et??""} `), Bt(mt, Ct)
        }, [() => Ei(), () => Er(), () => uo(), () => dr()]), tn("submit", It, async () => {
          var Q;
          if (r(D)) return;
          if (!((Q = r(S)) != null && Q.isValidNumber())) {
            ve.error(Ji());
            return
          }
          const rt = r(S).getNumber();
          await C(rt)
        }), v(p, w)
      },
      K = p => {
        var w = ya(),
          x = G(w),
          nt = et(x),
          A = et(nt, !0);
        J(nt);
        var X = wt(nt, 2),
          W = et(X, !0);
        J(X), J(x);
        var pt = wt(x, 2),
          It = et(pt);
        {
          const rt = (Q, Et) => {
            let Ct = () => Et == null ? void 0 : Et().cells;
            var zt = $(),
              oe = G(zt);
            $t(oe, () => qs, (P, z) => {
              z(P, {
                class: "border-primary",
                children: (bt, dt) => {
                  var Mt = $(),
                    ee = G(Mt);
                  Ye(ee, 16, Ct, he => he, (he, fe) => {
                    var Wt = $(),
                      Gt = G(Wt);
                    $t(Gt, () => ca, (At, Z) => {
                      Z(At, {
                        get cell() {
                          return fe
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), v(he, Wt)
                  }), v(bt, Mt)
                },
                $$slots: {
                  default: !0
                }
              })
            }), v(Q, zt)
          };
          $t(It, () => ha, (Q, Et) => {
            Et(Q, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return r(B)
              },
              get value() {
                return r(H)
              },
              set value(Ct) {
                m(H, Ct, !0)
              },
              children: rt,
              $$slots: {
                default: !0
              }
            })
          })
        }
        J(pt);
        var I = wt(pt, 2),
          M = et(I),
          ct = et(M),
          xt = wt(ct);
        {
          var Lt = rt => {
            var Q = Pn(),
              Et = et(Q);
            J(Q), Tt(Ct => Bt(Et, `(${Ct??""})`), [() => En(r(g))]), v(rt, Q)
          };
          at(xt, rt => {
            r(g) > 0 && rt(Lt)
          })
        }
        var St = wt(xt, 2);
        {
          var Ot = rt => {
            var Q = kn();
            v(rt, Q)
          };
          at(St, rt => {
            r(E) && rt(Ot)
          })
        }
        J(M);
        var jt = wt(M, 2),
          mt = et(jt, !0);
        J(jt), J(I), Tt((rt, Q, Et, Ct) => {
          Bt(A, rt), Bt(W, Q), M.disabled = r(D), Bt(ct, `${Et??""} `), Bt(mt, Ct)
        }, [() => Ui(), () => Io({
          phone: n()
        }), () => Qr(), () => Xo()]), ie("click", M, async () => {
          await C(n())
        }), ie("click", jt, () => {
          n("")
        }), v(p, w)
      };
    at(L, p => {
      r(f) ? p(Y) : n() ? p(K, -1) : p(R, 1)
    })
  }
  J(N), v(s, N), Zt()
}
en(["click"]);
let Ae = q(!1);
var wa = ft("<div></div>"),
  Ia = ft('<button type="button" class="btn">Retry</button>'),
  Ea = ft('<span class="loading loading-spinner loading-lg"></span>'),
  Ta = ft("<div><!></div>");

function Da(s, t) {
  Qt(t, !0);
  let n = k(t, "widgetId", 15),
    f = k(t, "appearance", 3, "always"),
    g = k(t, "language", 3, "auto"),
    E = k(t, "execution", 3, "render"),
    D = k(t, "retryInterval", 3, 8e3),
    B = k(t, "retry", 3, "auto"),
    H = k(t, "refreshExpired", 3, "auto"),
    S = k(t, "theme", 3, "auto"),
    C = k(t, "size", 3, "normal"),
    N = k(t, "tabIndex", 3, 0);
  k(t, "reset", 15)(() => {
    var I;
    n() && ((I = window == null ? void 0 : window.turnstile) == null || I.reset(n()))
  });
  const Y = T(() => ({
      sitekey: t.siteKey,
      callback: (I, M) => {
        var ct;
        (ct = t.callback) == null || ct.call(t, I, M)
      },
      "error-callback": I => {
        var M;
        (M = t.errorCallback) == null || M.call(t, I)
      },
      "timeout-callback": () => {
        var I;
        (I = t.timeoutCallback) == null || I.call(t)
      },
      "expired-callback": () => {
        var I;
        (I = t.expiredCallback) == null || I.call(t)
      },
      "before-interactive-callback": () => {
        var I;
        (I = t.beforeInteractiveCallback) == null || I.call(t)
      },
      "after-interactive-callback": () => {
        var I;
        (I = t.afterInteractiveCallback) == null || I.call(t)
      },
      "unsupported-callback": () => {
        var I;
        return (I = t.unsupportedCallback) == null ? void 0 : I.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? "cf-turnstile-response",
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": H(),
      "retry-interval": D(),
      tabindex: N(),
      appearance: f(),
      execution: E(),
      language: g(),
      action: t.action,
      retry: B(),
      theme: S(),
      cData: t.cData,
      size: C()
    })),
    R = (I, M) => {
      let ct = window.turnstile.render(I, M);
      return n(ct), {
        destroy() {
          window.turnstile.remove(ct)
        },
        update(xt) {
          window.turnstile.remove(ct), ct = window.turnstile.render(I, xt), n(ct)
        }
      }
    };
  let K = q(!1),
    p = q(!1),
    w;

  function x() {
    const I = document.createElement("script");
    I.type = "text/javascript", I.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", I.async = !0, I.addEventListener("load", () => m(Ae, !0), {
      once: !0
    }), document.head.appendChild(I)
  }

  function nt() {
    m(p, !1), w && clearTimeout(w), w = setTimeout(() => {
      (!r(Ae) || !r(K)) && m(p, !0)
    }, 5e3)
  }

  function A() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(I => I.remove()), m(Ae, !1), x(), nt()
  }
  de(() => (m(K, !0), r(Ae) || x(), nt(), () => {
    m(K, !1), w && clearTimeout(w)
  }));
  var X = $(),
    W = G(X);
  {
    var pt = I => {
        var M = wa();
        let ct;
        Mn(M, (xt, Lt) => R == null ? void 0 : R(xt, Lt), () => r(Y)), Tt(() => ct = Yt(M, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", ct, {
          flexible: C() == "flexible"
        })), v(I, M)
      },
      It = I => {
        var M = Ta(),
          ct = et(M);
        {
          var xt = St => {
              var Ot = Ia();
              ie("click", Ot, A), v(St, Ot)
            },
            Lt = St => {
              var Ot = Ea();
              v(St, Ot)
            };
          at(ct, St => {
            r(p) ? St(xt) : St(Lt, -1)
          })
        }
        J(M), Tt(() => Yt(M, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), v(I, M)
      };
    at(W, I => {
      r(Ae) && r(K) ? I(pt) : I(It, -1)
    })
  }
  v(s, X), Zt()
}
en(["click"]);
var xa = ft('<dialog class="modal"><div></div> <div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Sa(s, t) {
  Qt(t, !0);
  const n = T(() => sn.current !== null),
    f = T(() => {
      var p;
      return (p = sn.current) == null ? void 0 : p.tier
    }),
    g = Ti(() => r(n));
  let E = q(""),
    D = q(void 0),
    B = q(!1);
  var H = xa(),
    S = et(H);
  let C;
  nn(S, p => m(D, p), () => r(D));
  var N = wt(S, 2);
  let L;
  var Y = et(N),
    R = et(Y);
  {
    var K = p => {
      var w = $(),
        x = G(w);
      gi(x, () => sn.errorCount, nt => {
        var A = $(),
          X = G(A);
        {
          var W = I => {
              {
                let M = T(() => Ci.trim());
                Da(I, {
                  get siteKey() {
                    return r(M)
                  },
                  callback: ct => Dn(ct),
                  errorCallback: () => Tn()
                })
              }
            },
            pt = I => {
              {
                let M = T(() => bi.trim());
                zs(I, {
                  get siteKey() {
                    return r(M)
                  },
                  get challengeContainer() {
                    return r(D)
                  },
                  callback: ct => Dn(ct),
                  openCallback: () => m(B, !0),
                  closeCallback: () => m(B, !1),
                  errorCallback: () => Tn()
                })
              }
            },
            It = I => {
              ba(I, {
                onsuccess: () => ei(),
                get verifyingPhone() {
                  return r(E)
                },
                set verifyingPhone(M) {
                  m(E, M, !0)
                }
              })
            };
          at(X, I => {
            r(f) === 2 ? I(W) : r(f) === 3 ? I(pt, 1) : r(f) === 4 && I(It, 2)
          })
        }
        v(nt, A)
      }), v(p, w)
    };
    at(R, p => {
      g.current && p(K)
    })
  }
  J(Y), J(N), On(2), J(H), Bn(H, () => p => {
    Ut(() => {
      r(n) && !p.open ? p.showModal() : !r(n) && p.open && p.close()
    })
  }), Tt(() => {
    C = Yt(S, 1, "hcaptcha-challenge-container svelte-efugoh", null, C, {
      "is-open": r(B)
    }), L = Yt(N, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, L, {
      "h-84": r(f) === 4 && !r(E)
    })
  }), tn("close", H, () => {
    m(B, !1), ti()
  }), v(s, H), Zt()
}
var Na = ft('<span class="hidden"> </span> <!> <!> <!>', 1);

function el(s, t) {
  Qt(t, !0), de(() => {
    for (const R of ["localStorage", "sessionStorage"]) try {
      const K = window[R];
      for (let p = K.length - 1; p >= 0; p -= 1) {
        const w = K.key(p);
        w != null && w.startsWith("phone:") && K.removeItem(w)
      }
    } catch {}
    const C = oi();
    xn.init();
    let N = q(!1);
    Ut(() => {
      r(N) || dn.data && (m(N, !0), si.loadTWA())
    }), ni();
    const L = mi(async () => {
      await dn.refresh()
    }, {
      interval: ii.hour,
      immediate: !0
    });
    let Y = setInterval(() => {
      pi().catch(R => console.warn("[sw] message failed", R))
    }, 5e3);
    return () => {
      clearTimeout(Y), C(), L(), xn.cleanup()
    }
  });
  const n = "muted";
  de(() => {
    cn.muted = localStorage.getItem(n) === "1"
  }), Ut(() => {
    {
      const C = cn.muted;
      document.querySelectorAll("audio").forEach(N => {
        N.muted = C
      });
      for (const N of Object.values(ri).filter(L => L instanceof Audio)) N.muted = C, C || (N.volume = .3);
      localStorage.setItem(n, Number(C).toString())
    }
  }), de(() => {});
  var f = Na();
  tn("beforeunload", Qn, () => {
    _i().catch(C => console.warn("[sw] message failed", C))
  });
  var g = G(f),
    E = et(g);
  J(g);
  var D = wt(g, 2);
  {
    var B = C => {
      var N = $(),
        L = G(N);
      Ht(L, () => t.children), v(C, N)
    };
    at(D, C => {
      C(B, -1)
    })
  }
  var H = wt(D, 2);
  Sa(H, {});
  var S = wt(H, 2);
  Us(S, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Tt(() => Bt(E, `Version: ${Jn}`)), v(s, f), Zt()
}
export {
  el as component, tl as universal
};