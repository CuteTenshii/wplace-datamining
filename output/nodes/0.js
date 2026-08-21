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
  on = (s, t, n) => t.has(s) || Cn("Cannot " + n);
var y = (s, t, n) => (on(s, t, "read from private field"), n ? n.call(s) : t.get(s)),
  yt = (s, t, n) => t.has(s) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, n),
  me = (s, t, n, f) => (on(s, t, "write to private field"), f ? f.call(s, n) : t.set(s, n), n),
  bn = (s, t, n) => (on(s, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as he
} from "../chunks/DDLxTm8y.js";
import {
  p as Xt,
  d as it,
  a as g,
  r as J,
  t as Tt,
  b as Qt,
  c as ft,
  bn as Re,
  F as Yn,
  E as wn,
  G as Xn,
  e as Y,
  g as _n,
  y as Ot,
  h as m,
  i as r,
  B as Pe,
  s as It,
  m as oe,
  q as en,
  u as E,
  n as Yt,
  w as $,
  f as G,
  l as nn,
  v as In,
  k as ze,
  aV as Rn,
  o as On,
  bL as Qn
} from "../chunks/m4hpPlb8.js";
import {
  c as Zn,
  s as Bt
} from "../chunks/riRxs-wl.js";
import {
  i as at
} from "../chunks/DqioGq2r.js";
import {
  s as Ht
} from "../chunks/CBbF8MzG.js";
import {
  v as Jn
} from "../chunks/Cqkfioou.js";
import {
  K as Rt,
  L as ae,
  M as $n,
  g as dn,
  b as sn,
  t as ve,
  u as Ye,
  N as En,
  O as ti,
  Q as an,
  R as Tn,
  U as Dn,
  V as ei,
  p as xn,
  X as ni,
  T as ii
} from "../chunks/CJwiUDoa.js";
import {
  A as ri
} from "../chunks/BabU29-P.js";
import {
  s as oi,
  a as si
} from "../chunks/D5WO9q3A.js";
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
} from "../chunks/CCYsULJm.js";
import {
  k as gi
} from "../chunks/BIoPiQcW.js";
import {
  c as le,
  a as qt,
  s as bt,
  e as ln,
  b as ye,
  S as vi,
  h as yi,
  d as Bn
} from "../chunks/BbR4hYuM.js";
import {
  b as rn
} from "../chunks/D4UFk1VW.js";
import {
  b as Ci,
  c as bi
} from "../chunks/CftFOTTa.js";
import {
  p as k,
  s as ke,
  r as Ee
} from "../chunks/RFHi9kKd.js";
import {
  _ as wi
} from "../chunks/Dp1pzeXC.js";
import {
  e as Xe
} from "../chunks/B3Jy6IkG.js";
import {
  c as Jt
} from "../chunks/DGZ9tyL2.js";
import {
  t as Ii
} from "../chunks/Ct12j0u0.js";
import {
  g as se
} from "../chunks/BhCkpOlh.js";
import {
  p as Ei,
  k as Ti
} from "../chunks/Bn4xbbpo.js";
import "../chunks/BArEwxaL.js";
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
    const n = t.locale ?? se();
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
    const n = t.locale ?? se();
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
    const n = t.locale ?? se();
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
  Vo = () => "Prueba con otro número",
  Fo = () => "Essayez un autre numéro",
  jo = () => "Prova un altro numero",
  zo = () => "別の番号をお試しください。",
  Go = () => "Spróbuj innego numeru",
  Ko = () => "Попробуйте другой номер",
  qo = () => "Спробувати інший номер",
  Yo = () => "Thử số khác",
  Xo = (s = {}, t = {}) => {
    const n = t.locale ?? se();
    return n === "en" ? Bo() : n === "pt" ? Ho() : n === "ch" ? Uo() : n === "de" ? Wo() : n === "es" ? Vo() : n === "fr" ? Fo() : n === "it" ? jo() : n === "jp" ? zo() : n === "pl" ? Go() : n === "ru" ? Ko() : n === "uk" ? qo() : Yo()
  },
  Qo = Array(12).fill(0);
var Zo = ft('<div class="sonner-loading-bar"></div>'),
  Jo = ft('<div><div class="sonner-spinner"></div></div>');

function $o(s, t) {
  Xt(t, !0);
  var n = Jo(),
    f = it(n);
  Xe(f, 23, () => Qo, (_, T) => `spinner-bar-${T}`, (_, T) => {
    var x = Zo();
    g(_, x)
  }), J(f), J(n), Tt(_ => {
    qt(n, 1, _), bt(n, "data-visible", t.visible)
  }, [() => le(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), g(s, n), Qt()
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
        x = Re(n, "focusout", _);
      return () => {
        T(), x()
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
var Me, ue;
class is {
  constructor(t) {
    yt(this, Me);
    yt(this, ue);
    me(this, Me, t), me(this, ue, Symbol(t))
  }
  get key() {
    return y(this, ue)
  }
  exists() {
    return Yn(y(this, ue))
  }
  get() {
    const t = wn(y(this, ue));
    if (t === void 0) throw new Error(`Context "${y(this,Me)}" not found`);
    return t
  }
  getOr(t) {
    const n = wn(y(this, ue));
    return n === void 0 ? t : n
  }
  set(t) {
    return Xn(y(this, ue), t)
  }
}
Me = new WeakMap, ue = new WeakMap;
const rs = new is("<Toaster/>");

function Ge(s) {
  return s.label !== void 0
}

function os() {
  let s = Y(_n(typeof document < "u" ? document.hidden : !1));
  return Ot(() => Re(document, "visibilitychange", () => {
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
  Xt(t, !0);
  const n = R => {
    var W = $(),
      ot = G(W);
    {
      var ct = p => {
          var Lt = hs(),
            l = it(Lt);
          Ht(l, () => t.loadingIcon), J(Lt), Tt(e => {
            qt(Lt, 1, e), bt(Lt, "data-visible", r(U) === "loading")
          }, [() => {
            var e, i, o;
            return le(ae((e = r(Q)) == null ? void 0 : e.loader, (o = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : o.loader, "sonner-loader"))
          }]), g(p, Lt)
        },
        nt = p => {
          {
            let Lt = E(() => {
                var e, i;
                return ae((e = r(Q)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              l = E(() => r(U) === "loading");
            $o(p, {
              get class() {
                return r(Lt)
              },
              get visible() {
                return r(l)
              }
            })
          }
        };
      at(ot, p => {
        t.loadingIcon ? p(ct) : p(nt, -1)
      })
    }
    g(R, W)
  };
  let f = k(t, "cancelButtonStyle", 3, ""),
    _ = k(t, "actionButtonStyle", 3, ""),
    T = k(t, "descriptionClass", 3, ""),
    x = k(t, "unstyled", 3, !1),
    O = k(t, "defaultRichColors", 3, !1);
  const M = {
    ...cs
  };
  let S = Y(!1),
    v = Y(!1),
    A = Y(!1),
    N = Y(!1),
    X = Y(!1),
    B = Y(0),
    tt = Y(0),
    b = t.toast.duration || t.duration || Nn,
    w = Y(void 0),
    D = Y(null),
    K = Y(null);
  const L = E(() => t.index === 0),
    q = E(() => t.index + 1 <= t.visibleToasts),
    U = E(() => t.toast.type),
    pt = E(() => t.toast.dismissable !== !1),
    Et = E(() => t.toast.class || ""),
    I = E(() => t.toast.descriptionClass || ""),
    V = E(() => Rt.heights.findIndex(R => R.toastId === t.toast.id) || 0),
    et = E(() => t.toast.closeButton ?? t.closeButton),
    St = E(() => t.toast.duration ?? t.duration ?? Nn);
  let xt = null;
  const Nt = E(() => t.position.split("-")),
    Mt = E(() => Rt.heights.reduce((R, W, ot) => ot >= r(V) ? R : R + W.height, 0)),
    ee = os(),
    lt = E(() => t.toast.invert || t.invert),
    zt = E(() => r(U) === "loading"),
    Q = E(() => ({
      ...M,
      ...t.classes
    })),
    mt = E(() => t.toast.title),
    vt = E(() => t.toast.description);
  let Ct = Y(0),
    ne = Y(0);
  const P = E(() => Math.round(r(V) * ss + r(Mt)));
  Ot(() => {
    r(mt), r(vt);
    let R;
    t.expanded || t.expandByDefault ? R = 1 : R = 1 - t.index * us;
    const W = Pe(() => r(w));
    if (W === void 0) return;
    W.style.setProperty("height", "auto");
    const ot = W.offsetHeight,
      ct = W.getBoundingClientRect().height,
      nt = Math.round(ct / R + Number.EPSILON & 100) / 100;
    W.style.removeProperty("height");
    let p;
    Math.abs(nt - ot) < 1 ? p = nt : p = ot, m(tt, p, !0), Pe(() => {
      Rt.setHeight({
        toastId: t.toast.id,
        height: p
      })
    })
  });

  function z() {
    m(v, !0), m(B, r(P), !0), Rt.removeHeight(t.toast.id), setTimeout(() => {
      Rt.remove(t.toast.id)
    }, ls)
  }
  let wt;
  const ut = E(() => t.toast.promise && r(U) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Ut() {
    m(Ct, new Date().getTime(), !0), wt = setTimeout(() => {
      var R, W;
      (W = (R = t.toast).onAutoClose) == null || W.call(R, t.toast), z()
    }, b)
  }

  function $t() {
    if (r(ne) < r(Ct)) {
      const R = new Date().getTime() - r(Ct);
      b = b - R
    }
    m(ne, new Date().getTime(), !0)
  }
  Ot(() => {
    t.toast.updated && (clearTimeout(wt), b = r(St), Ut())
  }), Ot(() => (r(ut) || (t.expanded || t.interacting || ee.current ? $t() : Ut()), () => clearTimeout(wt))), he(() => {
    var W;
    m(S, !0);
    const R = (W = r(w)) == null ? void 0 : W.getBoundingClientRect().height;
    return m(tt, R, !0), Rt.setHeight({
      toastId: t.toast.id,
      height: R
    }), () => {
      Rt.removeHeight(t.toast.id)
    }
  }), Ot(() => {
    t.toast.delete && Pe(() => {
      var R, W;
      z(), (W = (R = t.toast).onDismiss) == null || W.call(R, t.toast)
    })
  });
  const _e = R => {
      if (r(zt)) return;
      m(B, r(P), !0);
      const W = R.target;
      W.setPointerCapture(R.pointerId), W.tagName !== "BUTTON" && (m(A, !0), xt = {
        x: R.clientX,
        y: R.clientY
      })
    },
    ie = () => {
      var p, Lt, l, e, i, o;
      if (r(N) || !r(pt)) return;
      xt = null;
      const R = Number(((p = r(w)) == null ? void 0 : p.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        W = Number(((Lt = r(w)) == null ? void 0 : Lt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        ot = new Date().getTime() - 0,
        ct = r(D) === "x" ? R : W,
        nt = Math.abs(ct) / ot;
      if (Math.abs(ct) >= as || nt > .11) {
        m(B, r(P), !0), (e = (l = t.toast).onDismiss) == null || e.call(l, t.toast), r(D) === "x" ? m(K, R > 0 ? "right" : "left", !0) : m(K, W > 0 ? "down" : "up", !0), z(), m(N, !0);
        return
      } else(i = r(w)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (o = r(w)) == null || o.style.setProperty("--swipe-amount-y", "0px");
      m(X, !1), m(A, !1), m(D, null)
    },
    Wt = R => {
      var Lt, l, e;
      if (!xt || !r(pt) || (((Lt = window.getSelection()) == null ? void 0 : Lt.toString().length) ?? -1) > 0) return;
      const ot = R.clientY - xt.y,
        ct = R.clientX - xt.x,
        nt = t.swipeDirections ?? ds(t.position);
      !r(D) && (Math.abs(ct) > 1 || Math.abs(ot) > 1) && m(D, Math.abs(ct) > Math.abs(ot) ? "x" : "y", !0);
      let p = {
        x: 0,
        y: 0
      };
      if (r(D) === "y") {
        if (nt.includes("top") || nt.includes("bottom"))
          if (nt.includes("top") && ot < 0 || nt.includes("bottom") && ot > 0) p.y = ot;
          else {
            const i = ot * Ln(ot);
            p.y = Math.abs(i) < Math.abs(ot) ? i : ot
          }
      } else if (r(D) === "x" && (nt.includes("left") || nt.includes("right")))
        if (nt.includes("left") && ct < 0 || nt.includes("right") && ct > 0) p.x = ct;
        else {
          const i = ct * Ln(ct);
          p.x = Math.abs(i) < Math.abs(ct) ? i : ct
        }(Math.abs(p.x) > 0 || Math.abs(p.y) > 0) && m(X, !0), (l = r(w)) == null || l.style.setProperty("--swipe-amount-x", `${p.x}px`), (e = r(w)) == null || e.style.setProperty("--swipe-amount-y", `${p.y}px`)
    },
    Vt = () => {
      m(A, !1), m(D, null), xt = null
    },
    At = E(() => t.toast.icon ? t.toast.icon : r(U) === "success" ? t.successIcon : r(U) === "error" ? t.errorIcon : r(U) === "warning" ? t.warningIcon : r(U) === "info" ? t.infoIcon : r(U) === "loading" ? t.loadingIcon : null);
  var Z = ys();
  bt(Z, "tabindex", 0);
  let fe;
  var Te = it(Z);
  {
    var De = R => {
      var W = fs(),
        ot = it(W);
      Ht(ot, () => t.closeIcon ?? Yt), J(W), Tt(ct => {
        bt(W, "aria-label", t.closeButtonAriaLabel), bt(W, "data-disabled", r(zt)), qt(W, 1, ct)
      }, [() => {
        var ct, nt, p;
        return le(ae((ct = r(Q)) == null ? void 0 : ct.closeButton, (p = (nt = t.toast) == null ? void 0 : nt.classes) == null ? void 0 : p.closeButton))
      }]), oe("click", W, () => {
        var ct, nt;
        r(zt) || !r(pt) || (z(), (nt = (ct = t.toast).onDismiss) == null || nt.call(ct, t.toast))
      }), g(R, W)
    };
    at(Te, R => {
      r(et) && !t.toast.component && r(U) !== "loading" && t.closeIcon !== null && R(De)
    })
  }
  var xe = It(Te, 2);
  {
    var ge = R => {
        const W = E(() => t.toast.component);
        var ot = $(),
          ct = G(ot);
        Jt(ct, () => r(W), (nt, p) => {
          p(nt, ke(() => t.toast.componentProps, {
            closeToast: z
          }))
        }), g(R, ot)
      },
      Se = R => {
        var W = vs(),
          ot = G(W);
        {
          var ct = h => {
            var d = ms(),
              C = it(d);
            {
              var H = F => {
                var j = $(),
                  gt = G(j);
                {
                  var rt = st => {
                      var Gt = $(),
                        Ft = G(Gt);
                      Jt(Ft, () => t.toast.icon, (Dt, Pt) => {
                        Pt(Dt, {})
                      }), g(st, Gt)
                    },
                    ht = st => {
                      n(st)
                    };
                  at(gt, st => {
                    t.toast.icon ? st(rt) : st(ht, -1)
                  })
                }
                g(F, j)
              };
              at(C, F => {
                (t.toast.promise || r(U) === "loading") && F(H)
              })
            }
            var _t = It(C, 2);
            {
              var dt = F => {
                var j = $(),
                  gt = G(j);
                {
                  var rt = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Jt(te, () => t.toast.icon, (zn, Gn) => {
                        Gn(zn, {})
                      }), g(Dt, Pt)
                    },
                    ht = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.successIcon ?? Yt), g(Dt, Pt)
                    },
                    st = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.errorIcon ?? Yt), g(Dt, Pt)
                    },
                    Gt = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.warningIcon ?? Yt), g(Dt, Pt)
                    },
                    Ft = Dt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.infoIcon ?? Yt), g(Dt, Pt)
                    };
                  at(gt, Dt => {
                    t.toast.icon ? Dt(rt) : r(U) === "success" ? Dt(ht, 1) : r(U) === "error" ? Dt(st, 2) : r(U) === "warning" ? Dt(Gt, 3) : r(U) === "info" && Dt(Ft, 4)
                  })
                }
                g(F, j)
              };
              at(_t, F => {
                t.toast.type !== "loading" && F(dt)
              })
            }
            J(d), Tt(F => qt(d, 1, F), [() => {
              var F, j, gt;
              return le(ae((F = r(Q)) == null ? void 0 : F.icon, (gt = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : gt.icon))
            }]), g(h, d)
          };
          at(ot, h => {
            (r(U) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(At) !== null || t.toast.icon) && h(ct)
          })
        }
        var nt = It(ot, 2),
          p = it(nt),
          Lt = it(p);
        {
          var l = h => {
            var d = $(),
              C = G(d);
            {
              var H = dt => {
                  const F = E(() => t.toast.title);
                  var j = $(),
                    gt = G(j);
                  Jt(gt, () => r(F), (rt, ht) => {
                    ht(rt, ke(() => t.toast.componentProps))
                  }), g(dt, j)
                },
                _t = dt => {
                  var F = In();
                  Tt(() => Bt(F, t.toast.title)), g(dt, F)
                };
              at(C, dt => {
                typeof t.toast.title != "string" ? dt(H) : dt(_t, -1)
              })
            }
            g(h, d)
          };
          at(Lt, h => {
            t.toast.title && h(l)
          })
        }
        J(p);
        var e = It(p, 2);
        {
          var i = h => {
            var d = ps(),
              C = it(d);
            {
              var H = dt => {
                  const F = E(() => t.toast.description);
                  var j = $(),
                    gt = G(j);
                  Jt(gt, () => r(F), (rt, ht) => {
                    ht(rt, ke(() => t.toast.componentProps))
                  }), g(dt, j)
                },
                _t = dt => {
                  var F = In();
                  Tt(() => Bt(F, t.toast.description)), g(dt, F)
                };
              at(C, dt => {
                typeof t.toast.description != "string" ? dt(H) : dt(_t, -1)
              })
            }
            J(d), Tt(dt => qt(d, 1, dt), [() => {
              var dt, F;
              return le(ae(T(), r(I), (dt = r(Q)) == null ? void 0 : dt.description, (F = t.toast.classes) == null ? void 0 : F.description))
            }]), g(h, d)
          };
          at(e, h => {
            t.toast.description && h(i)
          })
        }
        J(nt);
        var o = It(nt, 2);
        {
          var a = h => {
            var d = $(),
              C = G(d);
            {
              var H = F => {
                  var j = $(),
                    gt = G(j);
                  Jt(gt, () => t.toast.cancel, (rt, ht) => {
                    ht(rt, {})
                  }), g(F, j)
                },
                _t = F => {
                  var j = _s(),
                    gt = it(j, !0);
                  J(j), Tt(rt => {
                    ln(j, t.toast.cancelButtonStyle ?? f()), qt(j, 1, rt), Bt(gt, t.toast.cancel.label)
                  }, [() => {
                    var rt, ht, st;
                    return le(ae((rt = r(Q)) == null ? void 0 : rt.cancelButton, (st = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : st.cancelButton))
                  }]), oe("click", j, rt => {
                    var ht, st;
                    Ge(t.toast.cancel) && r(pt) && ((st = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || st.call(ht, rt), z())
                  }), g(F, j)
                },
                dt = E(() => Ge(t.toast.cancel));
              at(C, F => {
                typeof t.toast.cancel == "function" ? F(H) : r(dt) && F(_t, 1)
              })
            }
            g(h, d)
          };
          at(o, h => {
            t.toast.cancel && h(a)
          })
        }
        var c = It(o, 2);
        {
          var u = h => {
            var d = $(),
              C = G(d);
            {
              var H = F => {
                  var j = $(),
                    gt = G(j);
                  Jt(gt, () => t.toast.action, (rt, ht) => {
                    ht(rt, {})
                  }), g(F, j)
                },
                _t = F => {
                  var j = gs(),
                    gt = it(j, !0);
                  J(j), Tt(rt => {
                    ln(j, t.toast.actionButtonStyle ?? _()), qt(j, 1, rt), Bt(gt, t.toast.action.label)
                  }, [() => {
                    var rt, ht, st;
                    return le(ae((rt = r(Q)) == null ? void 0 : rt.actionButton, (st = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : st.actionButton))
                  }]), oe("click", j, rt => {
                    var ht;
                    Ge(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(rt), !rt.defaultPrevented && z())
                  }), g(F, j)
                },
                dt = E(() => Ge(t.toast.action));
              at(C, F => {
                typeof t.toast.action == "function" ? F(H) : r(dt) && F(_t, 1)
              })
            }
            g(h, d)
          };
          at(c, h => {
            t.toast.action && h(u)
          })
        }
        Tt(h => qt(p, 1, h), [() => {
          var h, d, C;
          return le(ae((h = r(Q)) == null ? void 0 : h.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), g(R, W)
      };
    at(xe, R => {
      t.toast.component ? R(ge) : R(Se, -1)
    })
  }
  J(Z), rn(Z, R => m(w, R), () => r(w)), Tt((R, W, ot) => {
    qt(Z, 1, R), bt(Z, "data-rich-colors", t.toast.richColors ?? O()), bt(Z, "data-styled", !(t.toast.component || t.toast.unstyled || x())), bt(Z, "data-mounted", r(S)), bt(Z, "data-promise", W), bt(Z, "data-swiped", r(X)), bt(Z, "data-removed", r(v)), bt(Z, "data-visible", r(q)), bt(Z, "data-y-position", r(Nt)[0]), bt(Z, "data-x-position", r(Nt)[1]), bt(Z, "data-index", t.index), bt(Z, "data-front", r(L)), bt(Z, "data-swiping", r(A)), bt(Z, "data-dismissable", r(pt)), bt(Z, "data-type", r(U)), bt(Z, "data-invert", r(lt)), bt(Z, "data-swipe-out", r(N)), bt(Z, "data-swipe-direction", r(K)), bt(Z, "data-expanded", ot), fe = ln(Z, `${t.style} ${t.toast.style}`, fe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Rt.toasts.length - t.index,
      "--offset": `${r(v)?r(B):r(P)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(tt)}px`
    })
  }, [() => {
    var R, W, ot, ct, nt, p;
    return le(ae(t.class, r(Et), (R = r(Q)) == null ? void 0 : R.toast, (ot = (W = t.toast) == null ? void 0 : W.classes) == null ? void 0 : ot.toast, (ct = r(Q)) == null ? void 0 : ct[r(U)], (p = (nt = t.toast) == null ? void 0 : nt.classes) == null ? void 0 : p[r(U)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(S))]), oe("pointermove", Z, Wt), oe("pointerup", Z, ie), oe("pointerdown", Z, _e), en("dragend", Z, Vt), g(s, Z), Qt()
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
  un = "dark",
  Ke = "light";

function Os(s, t) {
  const n = {};
  return [s, t].forEach((f, _) => {
    const T = _ === 1,
      x = T ? "--mobile-offset" : "--offset",
      O = T ? Un : Hn;

    function M(S) {
      ["top", "right", "bottom", "left"].forEach(v => {
        n[`${x}-${v}`] = typeof S == "number" ? `${S}px` : S
      })
    }
    typeof f == "number" || typeof f == "string" ? M(f) : typeof f == "object" ? ["top", "right", "bottom", "left"].forEach(S => {
      const v = f[S];
      v === void 0 ? n[`${x}-${S}`] = O : n[`${x}-${S}`] = typeof v == "number" ? `${v}px` : v
    }) : M(O)
  }), n
}
var Ms = new Set(["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]),
  Bs = ft("<ol></ol>"),
  Hs = ft('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>');

function Us(s, t) {
  Xt(t, !0);

  function n(P) {
    return P !== "system" ? P : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? un : Ke
  }
  let f = k(t, "invert", 3, !1),
    _ = k(t, "position", 3, "bottom-right"),
    T = k(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    x = k(t, "expand", 3, !1),
    O = k(t, "closeButton", 3, !1),
    M = k(t, "offset", 3, Hn),
    S = k(t, "mobileOffset", 3, Un),
    v = k(t, "theme", 3, "light"),
    A = k(t, "richColors", 3, !1),
    N = k(t, "duration", 3, Ps),
    X = k(t, "visibleToasts", 3, As),
    B = k(t, "toastOptions", 19, () => ({})),
    tt = k(t, "dir", 7, "auto"),
    b = k(t, "gap", 3, Rs),
    w = k(t, "containerAriaLabel", 3, "Notifications"),
    D = k(t, "closeButtonAriaLabel", 3, "Close toast"),
    K = Ee(t, Ms);

  function L() {
    if (tt() !== "auto") return tt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const P = document.documentElement.getAttribute("dir");
    return P === "auto" || !P ? (Pe(() => tt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), tt()) : (Pe(() => tt(P)), P)
  }
  const q = E(() => Array.from(new Set([_(), ...Rt.toasts.filter(P => P.position).map(P => P.position)].filter(Boolean))));
  let U = Y(!1),
    pt = Y(!1),
    Et = Y(_n(n(v()))),
    I = Y(void 0),
    V = Y(null),
    et = Y(!1);
  const St = E(() => T().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ot(() => {
    Rt.toasts.length <= 1 && m(U, !1)
  }), Ot(() => {
    const P = Rt.toasts.filter(z => z.dismiss && !z.delete);
    if (P.length > 0) {
      const z = Rt.toasts.map(wt => P.find(Ut => Ut.id === wt.id) ? {
        ...wt,
        delete: !0
      } : wt);
      Rt.toasts = z
    }
  }), Ot(() => () => {
    r(I) && r(V) && (r(V).focus({
      preventScroll: !0
    }), m(V, null), m(et, !1))
  }), he(() => (Rt.reset(), Re(document, "keydown", z => {
    var ut, Ut;
    T().every($t => z[$t] || z.code === $t) && (m(U, !0), (ut = r(I)) == null || ut.focus()), z.code === "Escape" && (document.activeElement === r(I) || (Ut = r(I)) != null && Ut.contains(document.activeElement)) && m(U, !1)
  }))), Ot(() => {
    if (v() !== "system" && m(Et, v()), typeof window < "u") {
      v() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? m(Et, un) : m(Et, Ke));
      const P = window.matchMedia("(prefers-color-scheme: dark)"),
        z = ({
          matches: wt
        }) => {
          m(Et, wt ? un : Ke, !0)
        };
      "addEventListener" in P ? P.addEventListener("change", z) : P.addListener(z)
    }
  });
  const xt = P => {
      var z;
      (z = t.onblur) == null || z.call(t, P), r(et) && !P.currentTarget.contains(P.relatedTarget) && (m(et, !1), r(V) && (r(V).focus({
        preventScroll: !0
      }), m(V, null)))
    },
    Nt = P => {
      var wt;
      (wt = t.onfocus) == null || wt.call(t, P), !(P.target instanceof HTMLElement && P.target.dataset.dismissable === "false") && (r(et) || (m(et, !0), m(V, P.relatedTarget, !0)))
    },
    Mt = P => {
      var wt;
      (wt = t.onpointerdown) == null || wt.call(t, P), !(P.target instanceof HTMLElement && P.target.dataset.dismissable === "false") && m(pt, !0)
    },
    ee = P => {
      var z;
      (z = t.onmouseenter) == null || z.call(t, P), m(U, !0)
    },
    lt = P => {
      var z;
      (z = t.onmouseleave) == null || z.call(t, P), r(pt) || m(U, !1)
    },
    zt = P => {
      var z;
      (z = t.onmousemove) == null || z.call(t, P), m(U, !0)
    },
    Q = P => {
      var z;
      (z = t.ondragend) == null || z.call(t, P), m(U, !1)
    },
    mt = P => {
      var z;
      (z = t.onpointerup) == null || z.call(t, P), m(pt, !1)
    };
  rs.set(new $n);
  var vt = Hs();
  bt(vt, "tabindex", -1);
  var Ct = it(vt);
  {
    var ne = P => {
      var z = $(),
        wt = G(z);
      Xe(wt, 18, () => r(q), ut => ut, (ut, Ut, $t, _e) => {
        const ie = E(() => {
            const [At, Z] = Ut.split("-");
            return {
              y: At,
              x: Z
            }
          }),
          Wt = E(() => Os(M(), S()));
        var Vt = Bs();
        ye(Vt, At => {
          var Z;
          return {
            tabindex: -1,
            dir: At,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(Et),
            "data-y-position": r(ie).y,
            "data-x-position": r(ie).x,
            style: t.style,
            onblur: xt,
            onfocus: Nt,
            onmouseenter: ee,
            onmousemove: zt,
            onmouseleave: lt,
            ondragend: Q,
            onpointerdown: Mt,
            onpointerup: mt,
            ...K,
            [vi]: {
              "--front-toast-height": `${(Z=Rt.heights[0])==null?void 0:Z.height}px`,
              "--width": `${ks}px`,
              "--gap": `${b()}px`,
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
        }, [() => L()], void 0, void 0, "svelte-wiukfn"), Xe(Vt, 23, () => Rt.toasts.filter(At => !At.position && r($t) === 0 || At.position === Ut), At => At.id, (At, Z, fe, Te) => {
          {
            const De = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        H = G(C);
                      Ht(H, () => t.successIcon ?? Yt), g(d, C)
                    },
                    h = d => {
                      ws(d)
                    };
                  at(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              xe = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        H = G(C);
                      Ht(H, () => t.errorIcon ?? Yt), g(d, C)
                    },
                    h = d => {
                      Es(d)
                    };
                  at(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              ge = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        H = G(C);
                      Ht(H, () => t.warningIcon ?? Yt), g(d, C)
                    },
                    h = d => {
                      Ds(d)
                    };
                  at(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              Se = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        H = G(C);
                      Ht(H, () => t.infoIcon ?? Yt), g(d, C)
                    },
                    h = d => {
                      Ss(d)
                    };
                  at(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              },
              R = o => {
                var a = $(),
                  c = G(a);
                {
                  var u = d => {
                      var C = $(),
                        H = G(C);
                      Ht(H, () => t.closeIcon ?? Yt), g(d, C)
                    },
                    h = d => {
                      Ls(d)
                    };
                  at(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(h, 1)
                  })
                }
                g(o, a)
              };
            let W = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.duration) ?? N()
              }),
              ot = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.class) ?? ""
              }),
              ct = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.descriptionClass) || ""
              }),
              nt = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.style) ?? ""
              }),
              p = E(() => B().classes || {}),
              Lt = E(() => B().unstyled ?? !1),
              l = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.cancelButtonStyle) ?? ""
              }),
              e = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.actionButtonStyle) ?? ""
              }),
              i = E(() => {
                var o;
                return ((o = B()) == null ? void 0 : o.closeButtonAriaLabel) ?? D()
              });
            Cs(At, {
              get index() {
                return r(fe)
              },
              get toast() {
                return r(Z)
              },
              get defaultRichColors() {
                return A()
              },
              get duration() {
                return r(W)
              },
              get class() {
                return r(ot)
              },
              get descriptionClass() {
                return r(ct)
              },
              get invert() {
                return f()
              },
              get visibleToasts() {
                return X()
              },
              get closeButton() {
                return O()
              },
              get interacting() {
                return r(pt)
              },
              get position() {
                return Ut
              },
              get style() {
                return r(nt)
              },
              get classes() {
                return r(p)
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
                return x()
              },
              get expanded() {
                return r(U)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: De,
              errorIcon: xe,
              warningIcon: ge,
              infoIcon: Se,
              closeIcon: R,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), J(Vt), rn(Vt, At => m(I, At), () => r(I)), Tt(() => Vt.dir = Vt.dir), g(ut, Vt)
      }), g(P, z)
    };
    at(Ct, P => {
      Rt.toasts.length > 0 && P(ne)
    })
  }
  J(vt), Tt(() => bt(vt, "aria-label", `${w()??""} ${r(St)??""}`)), g(s, vt), Qt()
}
let Ne = Y(!1);
var Ws = ft("<div></div>"),
  Vs = ft('<button type="button" class="btn">Retry</button>'),
  Fs = ft('<span class="loading loading-spinner loading-lg"></span>'),
  js = ft('<div class="flex h-16 items-center justify-center"><!></div>');

function zs(s, t) {
  Xt(t, !0);
  let n = k(t, "theme", 19, () => dn.theme === "dark" ? "dark" : "light"),
    f = k(t, "size", 3, "normal");
  const _ = E(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: f(),
      ...t.challengeContainer ? {
        "challenge-container": t.challengeContainer
      } : {},
      callback: b => {
        var w;
        return (w = t.callback) == null ? void 0 : w.call(t, b)
      },
      "open-callback": () => {
        var b;
        return (b = t.openCallback) == null ? void 0 : b.call(t)
      },
      "close-callback": () => {
        var b;
        return (b = t.closeCallback) == null ? void 0 : b.call(t)
      },
      "error-callback": b => {
        var w;
        return (w = t.errorCallback) == null ? void 0 : w.call(t, b)
      },
      "expired-callback": () => {
        var b;
        return (b = t.expiredCallback) == null ? void 0 : b.call(t)
      }
    })),
    T = (b, w) => {
      var K;
      let D = window.hcaptcha.render(b, w);
      return (K = t.onload) == null || K.call(t), {
        destroy() {
          var L;
          (L = window.hcaptcha) == null || L.remove(D)
        },
        update(L) {
          var q;
          (q = window.hcaptcha) == null || q.remove(D), D = window.hcaptcha.render(b, L)
        }
      }
    };
  let x = Y(!1),
    O = Y(!1),
    M;

  function S() {
    const b = document.createElement("script");
    b.type = "text/javascript";
    const w = new URL("https://js.hcaptcha.com/1/api.js");
    w.searchParams.set("render", "explicit"), b.src = w.toString(), b.async = !0, b.defer = !0, b.addEventListener("load", () => m(Ne, !0), {
      once: !0
    }), document.head.appendChild(b)
  }

  function v() {
    m(O, !1), M && clearTimeout(M), M = setTimeout(() => {
      (!r(Ne) || !r(x)) && m(O, !0)
    }, 5e3)
  }

  function A() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(b => b.remove()), m(Ne, !1), S(), v()
  }
  he(() => (m(x, !0), r(Ne) || S(), v(), () => {
    m(x, !1), M && clearTimeout(M)
  }));
  var N = $(),
    X = G(N);
  {
    var B = b => {
        var w = Ws();
        Mn(w, (D, K) => T == null ? void 0 : T(D, K), () => r(_)), g(b, w)
      },
      tt = b => {
        var w = js(),
          D = it(w);
        {
          var K = q => {
              var U = Vs();
              oe("click", U, A), g(q, U)
            },
            L = q => {
              var U = Fs();
              g(q, U)
            };
          at(D, q => {
            r(O) ? q(K) : q(L, -1)
          })
        }
        J(w), g(b, w)
      };
    at(X, b => {
      r(Ne) && r(x) ? b(B) : b(tt, -1)
    })
  }
  g(s, N), Qt()
}
nn(["click"]);

function gn(...s) {
  return Ii(yi(s))
}
var Gs = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "children"]),
  Ks = ft("<div><!></div>");

function qs(s, t) {
  Xt(t, !0);
  let n = k(t, "ref", 15, null),
    f = Ee(t, Gs);
  var _ = Ks();
  ye(_, x => ({
    class: x,
    ...f
  }), [() => gn("flex items-center", t.class)]);
  var T = it(_);
  Ht(T, () => t.children ?? Yt), J(_), rn(_, x => n(x), () => n()), g(s, _), Qt()
}
var Be, Qe;
class Ys {
  constructor(t, n) {
    yt(this, Be, () => {});
    yt(this, Qe, E(() => y(this, Be).call(this)));
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
    return r(y(this, Qe))
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
  let T = Y(!1),
    x = Y(!1),
    O = Y(!1);

  function M() {
    const v = n.current;
    return v === "none" ? !1 : v === "increase-width" && r(T) && r(x)
  }

  function S() {
    const v = s.current,
      A = t.current;
    if (!v || !A || r(O) || n.current === "none") return;
    const N = v,
      X = N.getBoundingClientRect().left + N.offsetWidth,
      B = N.getBoundingClientRect().top + N.offsetHeight / 2,
      tt = X - Xs,
      b = B;
    _.querySelectorAll(Zs).length === 0 && _.getDocument().elementFromPoint(tt, b) === v || (m(T, !0), m(O, !0))
  }
  return Ot(() => {
    const v = s.current;
    if (!v || n.current === "none") return;

    function A() {
      const B = ai(v).innerWidth - v.getBoundingClientRect().right;
      m(x, B >= Wn)
    }
    A();
    const N = setInterval(A, 1e3);
    return () => {
      clearInterval(N)
    }
  }), Ot(() => {
    const v = f.current || _.getActiveElement() === t.current;
    if (n.current === "none" || !v) return;
    const A = setTimeout(S, 0),
      N = setTimeout(S, 2e3),
      X = setTimeout(S, 5e3),
      B = setTimeout(() => {
        m(O, !0)
      }, 6e3);
    return () => {
      clearTimeout(A), clearTimeout(N), clearTimeout(X), clearTimeout(B)
    }
  }), {
    get hasPwmBadge() {
      return r(T)
    },
    get willPushPwmBadge() {
      return M()
    },
    PWM_BADGE_SPACE_WIDTH: Qs
  }
}
const Vn = hi({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  $s = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var be, ce, Kt, Zt, we, re, de, pe, Ie, Ze, He, Ue, Je, $e, Fn, We, Ve, tn, Fe;
const vn = class vn {
  constructor(t) {
    yt(this, $e);
    jt(this, "opts");
    jt(this, "attachment");
    jt(this, "inputAttachment");
    yt(this, be, Y(!1));
    yt(this, ce, li(!1));
    yt(this, Kt, Y(null));
    yt(this, Zt, Y(null));
    yt(this, we, new Ys(() => this.opts.value.current ?? ""));
    yt(this, re, E(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    yt(this, de, Y(_n({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    yt(this, pe);
    yt(this, Ie);
    jt(this, "domContext");
    jt(this, "onkeydown", t => {
      const n = t.key;
      $s.includes(n) || t.ctrlKey || t.metaKey || n && r(y(this, re)) && !r(y(this, re)).test(n) && t.preventDefault()
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
      [Vn.root]: "",
      style: r(y(this, Ze)),
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
    yt(this, We, () => {
      var tt;
      const t = this.opts.inputRef.current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        m(y(this, Kt), null), m(y(this, Zt), null);
        return
      }
      const f = t.selectionStart,
        _ = t.selectionEnd,
        T = t.selectionDirection ?? "none",
        x = t.maxLength,
        O = t.value,
        M = r(y(this, de)).prev;
      let S = -1,
        v = -1,
        A;
      if (O.length !== 0 && f !== null && _ !== null) {
        const b = f === _,
          w = f === O.length && O.length < x;
        if (b && !w) {
          const D = f;
          if (D === 0) S = 0, v = 1, A = "forward";
          else if (D === x) S = D - 1, v = D, A = "backward";
          else if (x > 1 && O.length > 1) {
            let K = 0;
            if (M[0] !== null && M[1] !== null) {
              A = D < M[1] ? "backward" : "forward";
              const L = M[0] === M[1] && M[0] < x;
              A === "backward" && !L && (K = -1)
            }
            S = K + D, v = K + D + 1
          }
        }
        S !== -1 && v !== -1 && S !== v && ((tt = this.opts.inputRef.current) == null || tt.setSelectionRange(S, v, A))
      }
      const N = S !== -1 ? S : f,
        X = v !== -1 ? v : _,
        B = A ?? T;
      m(y(this, Kt), N, !0), m(y(this, Zt), X, !0), r(y(this, de)).prev = [N, X, B]
    });
    jt(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(y(this, re)) && !r(y(this, re)).test(n)) {
        t.preventDefault();
        return
      }
      typeof y(this, we).current == "string" && n.length < y(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    jt(this, "onfocus", t => {
      const n = this.opts.inputRef.current;
      if (n) {
        const f = Math.min(n.value.length, this.opts.maxLength.current - 1),
          _ = n.value.length;
        n.setSelectionRange(f, _), m(y(this, Kt), f, !0), m(y(this, Zt), _, !0)
      }
      y(this, ce).current = !0
    });
    jt(this, "onpaste", t => {
      var v, A, N, X;
      const n = this.opts.inputRef.current;
      if (!n) return;
      const f = B => {
          const tt = n.selectionStart === null ? void 0 : n.selectionStart,
            b = n.selectionEnd === null ? void 0 : n.selectionEnd,
            w = tt !== b,
            D = this.opts.value.current;
          return (w ? D.slice(0, tt) + B + D.slice(b) : D.slice(0, tt) + B + D.slice(tt)).slice(0, this.opts.maxLength.current)
        },
        _ = B => B.length > 0 && r(y(this, re)) && !r(y(this, re)).test(B);
      if (!((v = this.opts.pasteTransformer) != null && v.current) && (!y(this, Ie).isIOS || !t.clipboardData || !n)) {
        const B = f((A = t.clipboardData) == null ? void 0 : A.getData("text/plain"));
        _(B) && t.preventDefault();
        return
      }
      const T = ((N = t.clipboardData) == null ? void 0 : N.getData("text/plain")) ?? "",
        x = (X = this.opts.pasteTransformer) != null && X.current ? this.opts.pasteTransformer.current(T) : T;
      t.preventDefault();
      const O = f(x);
      if (_(O)) return;
      n.value = O, this.opts.value.current = O;
      const M = Math.min(O.length, this.opts.maxLength.current - 1),
        S = O.length;
      n.setSelectionRange(M, S), m(y(this, Kt), M, !0), m(y(this, Zt), S, !0)
    });
    jt(this, "onmouseover", t => {
      m(y(this, be), !0)
    });
    jt(this, "onmouseleave", t => {
      m(y(this, be), !1)
    });
    jt(this, "onblur", t => {
      if (r(y(this, de)).willSyntheticBlur) {
        r(y(this, de)).willSyntheticBlur = !1;
        return
      }
      y(this, ce).current = !1
    });
    yt(this, Ve, E(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(y(this, Je)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(y(this, Kt)),
        "data-pin-input-input-mse": r(y(this, Zt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(y(this, re))) == null ? void 0 : t.source,
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
      const f = y(this, ce).current && r(y(this, Kt)) !== null && r(y(this, Zt)) !== null && (r(y(this, Kt)) === r(y(this, Zt)) && n === r(y(this, Kt)) || n >= r(y(this, Kt)) && n < r(y(this, Zt))),
        _ = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: _,
        isActive: f,
        hasFakeCaret: f && _ === null
      }
    })));
    yt(this, Fe, E(() => ({
      cells: r(y(this, tn)),
      isFocused: y(this, ce).current,
      isHovering: r(y(this, be))
    })));
    var n;
    this.opts = t, this.attachment = hn(this.opts.ref), this.inputAttachment = hn(this.opts.inputRef), this.domContext = new ui(t.ref), me(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), me(this, pe, Js({
      containerRef: this.opts.ref,
      inputRef: this.opts.inputRef,
      isFocused: y(this, ce),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), he(() => {
      const f = this.opts.inputRef.current,
        _ = this.opts.ref.current;
      if (!f || !_) return;
      y(this, Ie).value.current !== f.value && (this.opts.value.current = f.value), r(y(this, de)).prev = [f.selectionStart, f.selectionEnd, f.selectionDirection ?? "none"];
      const T = Re(this.domContext.getDocument(), "selectionchange", y(this, We), {
        capture: !0
      });
      y(this, We).call(this), this.domContext.getActiveElement() === f && (y(this, ce).current = !0), this.domContext.getElementById("pin-input-style") || bn(this, $e, Fn).call(this);
      const x = () => {
        _ && _.style.setProperty("--bits-pin-input-root-height", `${f.clientHeight}px`)
      };
      x();
      const O = new ResizeObserver(x);
      return O.observe(f), () => {
        T(), O.disconnect()
      }
    }), ci([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
      ta(() => {
        const f = this.opts.inputRef.current;
        if (!f) return;
        f.dispatchEvent(new Event("input"));
        const _ = f.selectionStart,
          T = f.selectionEnd,
          x = f.selectionDirection ?? "none";
        _ !== null && T !== null && (m(y(this, Kt), _, !0), m(y(this, Zt), T, !0), r(y(this, de)).prev = [_, T, x])
      }, this.domContext)
    }), Ot(() => {
      const f = this.opts.value.current,
        _ = y(this, we).current,
        T = this.opts.maxLength.current,
        x = this.opts.onComplete.current;
      _ !== void 0 && f !== _ && _.length < T && f.length === T && x(f)
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
be = new WeakMap, ce = new WeakMap, Kt = new WeakMap, Zt = new WeakMap, we = new WeakMap, re = new WeakMap, de = new WeakMap, pe = new WeakMap, Ie = new WeakMap, Ze = new WeakMap, He = new WeakMap, Ue = new WeakMap, Je = new WeakMap, $e = new WeakSet, Fn = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const f = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Le(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Le(n.sheet, `[data-pin-input-input]:autofill { ${f} }`), Le(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${f} }`), Le(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Le(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, We = new WeakMap, Ve = new WeakMap, tn = new WeakMap, Fe = new WeakMap;
let mn = vn;
var je;
const yn = class yn {
  constructor(t) {
    jt(this, "opts");
    jt(this, "attachment");
    yt(this, je, E(() => ({
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
  Xt(t, !0);
  let f = k(t, "id", 19, () => fn(n)),
    _ = k(t, "inputId", 19, () => `${fn(n)}-input`),
    T = k(t, "ref", 15, null),
    x = k(t, "inputRef", 15, null),
    O = k(t, "maxlength", 3, 6),
    M = k(t, "textalign", 3, "left"),
    S = k(t, "inputmode", 3, "numeric"),
    v = k(t, "onComplete", 3, Sn),
    A = k(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    N = k(t, "class", 3, ""),
    X = k(t, "autocomplete", 3, "one-time-code"),
    B = k(t, "disabled", 3, !1),
    tt = k(t, "value", 15, ""),
    b = k(t, "onValueChange", 3, Sn),
    w = Ee(t, ea);
  const D = mn.create({
      id: kt(() => f()),
      ref: kt(() => T(), V => T(V)),
      inputRef: kt(() => x(), V => x(V)),
      inputId: kt(() => _()),
      autocomplete: kt(() => X()),
      maxLength: kt(() => O()),
      textAlign: kt(() => M()),
      disabled: kt(() => B()),
      inputmode: kt(() => S()),
      pattern: kt(() => t.pattern),
      onComplete: kt(() => v()),
      value: kt(() => tt(), V => {
        tt(V), b()(V)
      }),
      pushPasswordManagerStrategy: kt(() => A()),
      pasteTransformer: kt(() => t.pasteTransformer)
    }),
    K = E(() => qe(w, D.inputProps)),
    L = E(() => qe(D.rootProps, {
      class: N()
    })),
    q = E(() => qe(D.inputWrapperProps, {}));
  var U = na();
  ye(U, () => ({
    ...r(L)
  }));
  var pt = it(U);
  Ht(pt, () => t.children ?? Yt, () => D.snippetProps);
  var Et = It(pt, 2);
  ye(Et, () => ({
    ...r(q)
  }));
  var I = it(Et);
  ye(I, () => ({
    ...r(K)
  }), void 0, void 0, void 0, void 0, !0), J(Et), J(U), g(s, U), Qt()
}
var ra = new Set(["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]),
  oa = ft("<div><!></div>");

function sa(s, t) {
  const n = Rn();
  Xt(t, !0);
  let f = k(t, "id", 19, () => fn(n)),
    _ = k(t, "ref", 15, null),
    T = Ee(t, ra);
  const x = pn.create({
      id: kt(() => f()),
      ref: kt(() => _(), N => _(N)),
      cell: kt(() => t.cell)
    }),
    O = E(() => qe(T, x.props));
  var M = $(),
    S = G(M);
  {
    var v = N => {
        var X = $(),
          B = G(X);
        Ht(B, () => t.child, () => ({
          props: r(O)
        })), g(N, X)
      },
      A = N => {
        var X = oa();
        ye(X, () => ({
          ...r(O)
        }));
        var B = it(X);
        Ht(B, () => t.children ?? Yt), J(X), g(N, X)
      };
    at(S, N => {
      t.child ? N(v) : N(A, -1)
    })
  }
  g(s, M), Qt()
}
var aa = new Set(["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]),
  la = ft('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  ua = ft(" <!>", 1);

function ca(s, t) {
  Xt(t, !0);
  let n = k(t, "ref", 15, null),
    f = Ee(t, aa);
  var _ = $(),
    T = G(_);
  {
    let x = E(() => gn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(T, () => sa, (O, M) => {
      M(O, ke({
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
        set ref(S) {
          n(S)
        },
        children: (S, v) => {
          On();
          var A = ua(),
            N = G(A),
            X = It(N);
          {
            var B = tt => {
              var b = la();
              g(tt, b)
            };
            at(X, tt => {
              t.cell.hasFakeCaret && tt(B)
            })
          }
          Tt(() => Bt(N, `${t.cell.char??""} `)), g(S, A)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  g(s, _), Qt()
}
var da = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);

function ha(s, t) {
  Xt(t, !0);
  let n = k(t, "ref", 15, null),
    f = k(t, "value", 15, ""),
    _ = Ee(t, da);
  var T = $(),
    x = G(T);
  {
    let O = E(() => gn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(x, () => ia, (M, S) => {
      S(M, ke({
        get class() {
          return r(O)
        }
      }, () => _, {
        get ref() {
          return n()
        },
        set ref(v) {
          n(v)
        },
        get value() {
          return f()
        },
        set value(v) {
          f(v)
        }
      }))
    })
  }
  g(s, T), Qt()
}

function fa(s) {
  return s.closest("dialog") ?? document.body
}
var cn = {
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
          _ = Object.getOwnPropertyNames,
          T = Object.prototype.hasOwnProperty,
          x = (l, e) => {
            for (var i in e) n(l, i, {
              get: e[i],
              enumerable: !0
            })
          },
          O = (l, e, i, o) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of _(e)) !T.call(l, a) && a !== i && n(l, a, {
                get: () => e[a],
                enumerable: !(o = f(e, a)) || o.enumerable
              });
            return l
          },
          M = l => O(n({}, "__esModule", {
            value: !0
          }), l),
          S = {};
        x(S, {
          Iti: () => ot,
          default: () => Lt
        });
        var v = [
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
          A = [];
        for (const l of v) A.push({
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
        var N = A,
          X = {
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
          B = X,
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
          b = tt,
          w = {
            ...B,
            ...b
          },
          D = w,
          K = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          L = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          q = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          U = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          pt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          Et = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          I = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          V = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          et = {
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
          lt = {
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
          Q = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const l = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = zt("(max-width: 500px)"),
                i = zt("(max-height: 600px)"),
                o = zt("(pointer: coarse)");
              return l || e || o && i
            }
            return !1
          },
          mt = {
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
            useFullscreenPopup: Q(),
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
          P = (l, e) => {
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
          ut = (l, e, i) => {
            const o = document.createElement(l);
            return e && Object.entries(e).forEach(([a, c]) => o.setAttribute(a, c)), i && i.appendChild(o), o
          },
          Ut = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${lt.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          $t = l => {
            const e = `iti-${l}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${lt.HIDDEN}="true" focusable="false">
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
              }), c = ut("div", {
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
                this.countryContainer = ut("div", {
                  class: `iti__country-container ${L.V_HIDE}`
                }, l), e ? (this.selectedCountry = ut("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [lt.EXPANDED]: "false",
                  [lt.LABEL]: this.options.i18n.noCountrySelected,
                  [lt.HASPOPUP]: "dialog",
                  [lt.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = ut("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const a = ut("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = ut("div", {
                  class: L.FLAG
                }, a), e && (this.dropdownArrow = ut("div", {
                  class: "iti__arrow",
                  [lt.HIDDEN]: "true"
                }, a)), i && (this.selectedDialCode = ut("div", {
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
              if (this.dropdownContent = ut("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${L.HIDE} ${u}`,
                  role: "dialog",
                  [lt.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), i && this._buildSearchUI(), this.countryList = ut("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [lt.LABEL]: o.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), i && this.updateSearchResultsA11yText(), a) {
                const h = wt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = ut("div", {
                  class: h
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: l
              } = this.options, e = ut("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = ut("span", {
                class: "iti__search-icon",
                [lt.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = Ut(), this.searchInput = ut("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: l.searchPlaceholder,
                role: "combobox",
                [lt.EXPANDED]: "true",
                [lt.LABEL]: l.searchPlaceholder,
                [lt.CONTROLS]: `iti-${this.id}__country-listbox`,
                [lt.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = ut("button", {
                type: "button",
                class: `iti__search-clear ${L.HIDE}`,
                [lt.LABEL]: l.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = $t(this.id), this.searchResultsA11yText = ut("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = ut("div", {
                class: `iti__no-results ${L.HIDE}`,
                [lt.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = l.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(L.V_HIDE))
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
                  u ? this.hiddenInput = u : (this.hiddenInput = ut("input", {
                    type: "hidden",
                    name: c.phone
                  }), l.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (o = this.telInput.form) == null ? void 0 : o.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = ut("input", {
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
                    [L.COUNTRY_ITEM]: !0
                  }),
                  a = ut("li", {
                    id: `iti-${this.id}__item-${i.iso2}`,
                    class: o,
                    tabindex: "-1",
                    role: "option",
                    [lt.SELECTED]: "false"
                  });
                a.dataset.dialCode = i.dialCode, a.dataset.countryCode = i.iso2, i.nodeById[this.id] = a, this.options.showFlags && ut("div", {
                  class: `${L.FLAG} iti__${i.iso2}`
                }, a);
                const c = ut("span", {
                  class: "iti__country-name"
                }, a);
                c.textContent = i.name;
                const u = ut("span", {
                  class: "iti__dial-code"
                }, a);
                this.isRTL && u.setAttribute("dir", "ltr"), u.textContent = `+${i.dialCode}`, l.appendChild(a)
              }
              this.countryList.appendChild(l)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const l = this.options.separateDialCode ? V.SANE_SELECTED_WITH_DIAL_WIDTH : V.SANE_SELECTED_NO_DIAL_WIDTH,
                  i = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || l) + V.INPUT_PADDING_EXTRA_LEFT;
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
              if (i && i.classList.remove(L.HIGHLIGHT), this.highlightedItem = l, this.highlightedItem && (this.highlightedItem.classList.add(L.HIGHLIGHT), this.options.countrySearch)) {
                const o = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(lt.ACTIVE_DESCENDANT, o)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(l) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== l && (this.selectedItem.setAttribute(lt.SELECTED, "false"), this.selectedItem = null), l && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${l}"]`);
                e && (e.setAttribute(lt.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(l) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const i of l) {
                const o = i.nodeById[this.id];
                o && (this.countryList.appendChild(o), e && (this.highlightListItem(o, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(L.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(L.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
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
              return N.filter(a => o.includes(a.iso2))
            } else if (i.length) {
              const o = i.map(a => a.toLowerCase());
              return N.filter(a => !o.includes(a.iso2))
            }
            return N
          },
          Wt = (l, e) => {
            for (const i of l) {
              const o = i.iso2.toLowerCase();
              e.i18n[o] && (i.name = e.i18n[o])
            }
          },
          Vt = l => {
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
          Z = l => {
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
            if (e.startsWith(et.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return xe.includes(i)
            }
            return !1
          };
        for (const l of N) l.name = D[l.iso2];
        var Se = 0,
          R = new Set(N.map(l => l.iso2)),
          W = l => R.has(l),
          ot = class jn {
            constructor(e, i = {}) {
              this.id = Se++, this.options = {
                ...mt,
                ...i
              }, vt(this.options, D), this.ui = new _e(e, this.options, this.id), this.isAndroid = jn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = ie(this.options);
              const {
                dialCodes: o,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: c
              } = Vt(this.countries);
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
                  initialCountry: C,
                  geoIpLookup: H
                } = this.options,
                _t = C === Mt.AUTO && H;
              if (h && !d) this._updateCountryFromNumber(u);
              else if (!_t || e) {
                const dt = C ? C.toLowerCase() : "";
                W(dt) ? this._setCountry(dt) : h && d ? this._setCountry(xt.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(L.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                o = this.ui.telInput.closest("label");
              o && o.addEventListener("click", i, {
                signal: e
              });
              const a = () => {
                this.ui.dropdownContent.classList.contains(L.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", a, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(L.HIDE) && [q.ARROW_UP, q.ARROW_DOWN, q.SPACE, q.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === q.TAB && this._closeDropdown()
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
              if (e && !p.utils) {
                const c = () => {
                  var u;
                  (u = p.attachUtils(e)) == null || u.catch(() => {})
                };
                if (p.documentReady()) c();
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
              p.autoCountry ? this.handleAutoCountry() : p.startedLoadingAutoCountry || (p.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const i = e.toLowerCase();
                W(i) ? (p.autoCountry = i, setTimeout(() => nt("handleAutoCountry"))) : (this._setInitialState(!0), nt("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), nt("rejectAutoCountryPromise")
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
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && o && a && c) {
                  const j = this.ui.telInput.selectionStart || 0,
                    gt = C.substring(0, j - 1),
                    rt = C.substring(j);
                  this._setTelInputValue(gt + rt), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const H = (d == null ? void 0 : d.data) && pt.NON_PLUS_NUMERIC.test(d.data),
                  _t = (d == null ? void 0 : d.inputType) === U.PASTE && C;
                H || _t && !e ? u = !0 : pt.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const dt = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  F = this.userNumeralSet === "ascii";
                if (i && !u && !dt && F) {
                  const j = this.ui.telInput.selectionStart || 0,
                    rt = C.substring(0, j).replace(pt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (d == null ? void 0 : d.inputType) === U.DELETE_FWD,
                    st = this._getFullNumber(),
                    Gt = Te(st, C, p.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ft = De(rt, Gt, j, ht);
                  this._setTelInputValue(Gt), this.ui.telInput.setSelectionRange(Ft, Ft)
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
                        dt = i ? _t : C || _t,
                        F = this.ui.telInput,
                        j = F.selectionStart,
                        gt = F.selectionEnd,
                        rt = h.slice(0, j),
                        ht = h.slice(gt),
                        st = rt + u.key + ht,
                        Gt = this._getFullNumber(st),
                        Ft = p.utils.getCoreNumber(Gt, this.selectedCountryData.iso2),
                        Dt = this.maxCoreNumberLength && Ft.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Gt) !== null;
                      (!dt || Dt && !te && !C) && u.preventDefault()
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
                    dt = a === 0 && c > 0,
                    F = !u.startsWith("+") || dt,
                    j = _t.replace(pt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    gt = j.startsWith("+"),
                    rt = j.replace(/\+/g, ""),
                    ht = gt && F ? `+${rt}` : rt;
                  let st = h + ht + d;
                  if (st.length > 5) {
                    let Ft = p.utils.getCoreNumber(st, C);
                    for (; Ft.length === 0 && st.length > 0;) st = st.slice(0, -1), Ft = p.utils.getCoreNumber(st, C);
                    if (!Ft) return;
                    if (this.maxCoreNumberLength && Ft.length > this.maxCoreNumberLength)
                      if (o.selectionEnd === u.length) {
                        const Dt = Ft.length - this.maxCoreNumberLength;
                        st = st.slice(0, st.length - Dt)
                      } else return
                  }
                  this._setTelInputValue(st);
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(L.HIDE), this.ui.selectedCountry.setAttribute(lt.EXPANDED, "true"), this._setDropdownPosition(), i) {
                const o = this.ui.countryList.firstElementChild;
                o && (this.ui.highlightListItem(o, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(L.ARROW_UP), this._trigger(K.OPEN_COUNTRY_DROPDOWN)
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
                const a = (c = o.target) == null ? void 0 : c.closest(`.${L.COUNTRY_ITEM}`);
                a && this.ui.highlightListItem(a, !1)
              };
              this.ui.countryList.addEventListener("mouseover", i, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const i = o => {
                var c;
                const a = (c = o.target) == null ? void 0 : c.closest(`.${L.COUNTRY_ITEM}`);
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
                [q.ARROW_UP, q.ARROW_DOWN, q.ENTER, q.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === q.ARROW_UP || c.key === q.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === q.ENTER ? this._handleEnterKey() : c.key === q.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && pt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), o && clearTimeout(o), i += c.key.toLowerCase(), this._searchForCountry(i), o = setTimeout(() => {
                  i = ""
                }, Et.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", a, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const i = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(L.HIDE) : this.ui.searchClearButton.classList.add(L.HIDE)
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
              let i = e === q.ARROW_UP ? (o = this.ui.highlightedItem) == null ? void 0 : o.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === q.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let i = e;
              if (this.options.formatOnDisplay && p.utils && this.selectedCountryData) {
                const o = this.options.nationalMode || !i.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: a,
                    INTERNATIONAL: c
                  } = p.utils.numberFormat,
                  u = o ? a : c;
                i = p.utils.formatNumber(i, this.selectedCountryData.iso2, u)
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
                if (c === et.NANP && ge(h)) return null;
                const {
                  areaCodes: _t,
                  priority: dt
                } = this.selectedCountryData;
                if (_t) {
                  const ht = _t.map(st => `${c}${st}`);
                  for (const st of ht)
                    if (h.startsWith(st)) return null
                }
                const j = _t && !(dt === 0) && h.length > d.length,
                  gt = a && C.includes(a) && !j,
                  rt = a === C[0];
                if (!gt && !rt) return C[0]
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
                const h = e && o ? `${L.FLAG} iti__${e}` : `${L.FLAG} ${L.GLOBE}`;
                let d, C;
                if (e) {
                  const {
                    name: H,
                    dialCode: _t
                  } = this.selectedCountryData;
                  C = H, d = a.selectedCountryAriaLabel.replace("${countryName}", H).replace("${dialCode}", `+${_t}`)
                } else C = a.noCountrySelected, d = a.noCountrySelected;
                this.ui.selectedCountryInner.className = h, this.ui.selectedCountry.setAttribute("title", C), this.ui.selectedCountry.setAttribute(lt.LABEL, d)
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
              if (e && p.utils)
                if (a) {
                  const c = p.utils.numberType[i];
                  let u = p.utils.getExampleNumber(a, !1, c, !0),
                    h = u;
                  for (; p.utils.isPossibleNumber(u, a, o);) h = u, u += "0";
                  const d = p.utils.getCoreNumber(h, a);
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
              if (p.utils && c) {
                const u = p.utils.numberType[i];
                let h = this.selectedCountryData.iso2 ? p.utils.getExampleNumber(this.selectedCountryData.iso2, o, u) : "";
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
              this.ui.dropdownContent.classList.contains(L.HIDE) || (this.ui.dropdownContent.classList.add(L.HIDE), this.ui.selectedCountry.setAttribute(lt.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(lt.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(L.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(L.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(K.CLOSE_COUNTRY_DROPDOWN))
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
              this.options.initialCountry === Mt.AUTO && p.autoCountry && (this.defaultCountry = p.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(L.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (p.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), p.instances instanceof Map ? p.instances.delete(this.id) : delete p.instances[this.id])
            }
            getExtension() {
              return p.utils ? p.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (p.utils) {
                const {
                  iso2: i
                } = this.selectedCountryData, o = this._getFullNumber(), a = p.utils.formatNumber(o, i, e);
                return this._mapAsciiToUserNumerals(a)
              }
              return ""
            }
            getNumberType() {
              return p.utils ? p.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : I.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (p.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return p.utils.getValidationError(this._getFullNumber(), e)
              }
              return I.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: i
              } = this.selectedCountryData;
              if (e === St.DIAL_CODE && p.utils) {
                const o = this._getFullNumber(),
                  a = p.utils.getCoreNumber(o, i);
                if (a[0] === St.MOBILE_PREFIX && a.length !== St.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return p.utils ? p.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!p.utils) return null;
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
              return p.utils ? p.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
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
          ct = l => {
            if (!p.utils && !p.startedLoadingUtilsScript) {
              let e;
              if (typeof l == "function") try {
                e = Promise.resolve(l())
              } catch (i) {
                return Promise.reject(i)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof l}`));
              return p.startedLoadingUtilsScript = !0, e.then(i => {
                const o = i == null ? void 0 : i.default;
                if (!o || typeof o != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return p.utils = o, nt("handleUtils"), !0
              }).catch(i => {
                throw nt("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          nt = (l, ...e) => {
            Object.values(p.instances).forEach(i => {
              const o = i[l];
              typeof o == "function" && o.apply(i, e)
            })
          },
          p = Object.assign((l, e) => {
            const i = new ot(l, e);
            return p.instances[i.id] = i, l.iti = i, i
          }, {
            defaults: mt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => N,
            getInstance: l => {
              const e = l.dataset.intlTelInputId;
              return e ? p.instances[e] : null
            },
            instances: {},
            attachUtils: ct,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Lt = p;
        return M(S)
      })();
      return t.default
    })
  })(cn)), cn.exports
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
  Xt(t, !0);
  let n = k(t, "verifyingPhone", 15, ""),
    f = Y(!0),
    _ = Y(0),
    T = Y(!1);
  const x = E(() => r(_) > 0 || r(T));
  let O = Y(!1),
    M = Y(""),
    S = Y(void 0);
  const v = E(() => {
    var w;
    return `phone:${(w=Ye.data)==null?void 0:w.id}`
  });
  Ot(() => {
    const w = localStorage.getItem(r(v));
    w && n(w)
  }), he(() => {
    sn.getOtpCooldown().then(K => {
      m(_, K.cooldownMs, !0)
    }).catch(K => {
      ve.error(K.message)
    }).finally(() => {
      m(f, !1)
    });
    const w = 1e3,
      D = setInterval(() => {
        m(_, Math.max(0, r(_) - w), !0)
      }, w);
    return () => {
      clearInterval(D)
    }
  });
  async function A(w) {
    try {
      m(T, !0);
      const D = await sn.sendOtp(w),
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
      }), n(D.phone), m(_, D.cooldownMs, !0), localStorage.setItem(r(v), n())
    } catch (D) {
      ve.error(D.message)
    } finally {
      m(T, !1)
    }
  }
  Ot(() => {
    r(M).length === 6 && (m(O, !0), (async () => {
      try {
        await sn.verifyChallenge({
          type: "otp",
          code: r(M)
        }), ve.success(Br()), localStorage.removeItem(r(v)), t.onsuccess(n())
      } catch (w) {
        ve.error(w.message)
      } finally {
        m(M, ""), m(O, !1)
      }
    })())
  });
  var N = Ca(),
    X = it(N);
  {
    var B = w => {
        var D = ga();
        g(w, D)
      },
      tt = w => {
        var D = va(),
          K = G(D),
          L = it(K),
          q = it(L),
          U = it(q, !0);
        J(q);
        var pt = It(q, 2),
          Et = it(pt, !0);
        J(pt), J(L);
        var I = It(L, 2),
          V = it(I);
        Bn(V, () => Q => {
          var mt, vt;
          return m(S, _a(Q, {
            strictMode: !0,
            initialCountry: ((vt = (mt = Ye.data) == null ? void 0 : mt.country) == null ? void 0 : vt.toLocaleLowerCase()) ?? "br",
            loadUtils: () => wi(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: fa(Q)
          })), () => {
            var Ct;
            (Ct = r(S)) == null || Ct.destroy()
          }
        });
        var et = It(V, 2),
          St = it(et),
          xt = It(St);
        {
          var Nt = Q => {
            var mt = Pn(),
              vt = it(mt);
            J(mt), Tt(Ct => Bt(vt, `(${Ct??""})`), [() => En(r(_))]), g(Q, mt)
          };
          at(xt, Q => {
            r(_) > 0 && Q(Nt)
          })
        }
        var Mt = It(xt, 2);
        {
          var ee = Q => {
            var mt = kn();
            g(Q, mt)
          };
          at(Mt, Q => {
            r(T) && Q(ee)
          })
        }
        J(et), J(I), J(K);
        var lt = It(K, 2),
          zt = it(lt, !0);
        J(lt), Tt((Q, mt, vt, Ct) => {
          Bt(U, Q), Bt(Et, mt), et.disabled = r(x), Bt(St, `${vt??""} `), Bt(zt, Ct)
        }, [() => Ei(), () => Er(), () => uo(), () => dr()]), en("submit", I, async () => {
          var mt;
          if (r(x)) return;
          if (!((mt = r(S)) != null && mt.isValidNumber())) {
            ve.error(Ji());
            return
          }
          const Q = r(S).getNumber();
          await A(Q)
        }), g(w, D)
      },
      b = w => {
        var D = ya(),
          K = G(D),
          L = it(K),
          q = it(L, !0);
        J(L);
        var U = It(L, 2),
          pt = it(U, !0);
        J(U), J(K);
        var Et = It(K, 2),
          I = it(Et);
        {
          const Q = (mt, vt) => {
            let Ct = () => vt == null ? void 0 : vt().cells;
            var ne = $(),
              P = G(ne);
            Jt(P, () => qs, (z, wt) => {
              wt(z, {
                class: "border-primary",
                children: (ut, Ut) => {
                  var $t = $(),
                    _e = G($t);
                  Xe(_e, 16, Ct, ie => ie, (ie, Wt) => {
                    var Vt = $(),
                      At = G(Vt);
                    Jt(At, () => ca, (Z, fe) => {
                      fe(Z, {
                        get cell() {
                          return Wt
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), g(ie, Vt)
                  }), g(ut, $t)
                },
                $$slots: {
                  default: !0
                }
              })
            }), g(mt, ne)
          };
          Jt(I, () => ha, (mt, vt) => {
            vt(mt, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return r(O)
              },
              get value() {
                return r(M)
              },
              set value(Ct) {
                m(M, Ct, !0)
              },
              children: Q,
              $$slots: {
                default: !0
              }
            })
          })
        }
        J(Et);
        var V = It(Et, 2),
          et = it(V),
          St = it(et),
          xt = It(St);
        {
          var Nt = Q => {
            var mt = Pn(),
              vt = it(mt);
            J(mt), Tt(Ct => Bt(vt, `(${Ct??""})`), [() => En(r(_))]), g(Q, mt)
          };
          at(xt, Q => {
            r(_) > 0 && Q(Nt)
          })
        }
        var Mt = It(xt, 2);
        {
          var ee = Q => {
            var mt = kn();
            g(Q, mt)
          };
          at(Mt, Q => {
            r(T) && Q(ee)
          })
        }
        J(et);
        var lt = It(et, 2),
          zt = it(lt, !0);
        J(lt), J(V), Tt((Q, mt, vt, Ct) => {
          Bt(q, Q), Bt(pt, mt), et.disabled = r(x), Bt(St, `${vt??""} `), Bt(zt, Ct)
        }, [() => Ui(), () => Io({
          phone: n()
        }), () => Qr(), () => Xo()]), oe("click", et, async () => {
          await A(n())
        }), oe("click", lt, () => {
          n("")
        }), g(w, D)
      };
    at(X, w => {
      r(f) ? w(B) : n() ? w(b, -1) : w(tt, 1)
    })
  }
  J(N), g(s, N), Qt()
}
nn(["click"]);
let Ae = Y(!1);
var wa = ft("<div></div>"),
  Ia = ft('<button type="button" class="btn">Retry</button>'),
  Ea = ft('<span class="loading loading-spinner loading-lg"></span>'),
  Ta = ft("<div><!></div>");

function Da(s, t) {
  Xt(t, !0);
  let n = k(t, "widgetId", 15),
    f = k(t, "appearance", 3, "always"),
    _ = k(t, "language", 3, "auto"),
    T = k(t, "execution", 3, "render"),
    x = k(t, "retryInterval", 3, 8e3),
    O = k(t, "retry", 3, "auto"),
    M = k(t, "refreshExpired", 3, "auto"),
    S = k(t, "theme", 3, "auto"),
    v = k(t, "size", 3, "normal"),
    A = k(t, "tabIndex", 3, 0);
  k(t, "reset", 15)(() => {
    var I;
    n() && ((I = window == null ? void 0 : window.turnstile) == null || I.reset(n()))
  });
  const X = E(() => ({
      sitekey: t.siteKey,
      callback: (I, V) => {
        var et;
        (et = t.callback) == null || et.call(t, I, V)
      },
      "error-callback": I => {
        var V;
        (V = t.errorCallback) == null || V.call(t, I)
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
      "refresh-expired": M(),
      "retry-interval": x(),
      tabindex: A(),
      appearance: f(),
      execution: T(),
      language: _(),
      action: t.action,
      retry: O(),
      theme: S(),
      cData: t.cData,
      size: v()
    })),
    B = (I, V) => {
      let et = window.turnstile.render(I, V);
      return n(et), {
        destroy() {
          window.turnstile.remove(et)
        },
        update(St) {
          window.turnstile.remove(et), et = window.turnstile.render(I, St), n(et)
        }
      }
    };
  let tt = Y(!1),
    b = Y(!1),
    w;

  function D() {
    const I = document.createElement("script");
    I.type = "text/javascript", I.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", I.async = !0, I.addEventListener("load", () => m(Ae, !0), {
      once: !0
    }), document.head.appendChild(I)
  }

  function K() {
    m(b, !1), w && clearTimeout(w), w = setTimeout(() => {
      (!r(Ae) || !r(tt)) && m(b, !0)
    }, 5e3)
  }

  function L() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(I => I.remove()), m(Ae, !1), D(), K()
  }
  he(() => (m(tt, !0), r(Ae) || D(), K(), () => {
    m(tt, !1), w && clearTimeout(w)
  }));
  var q = $(),
    U = G(q);
  {
    var pt = I => {
        var V = wa();
        let et;
        Mn(V, (St, xt) => B == null ? void 0 : B(St, xt), () => r(X)), Tt(() => et = qt(V, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", et, {
          flexible: v() == "flexible"
        })), g(I, V)
      },
      Et = I => {
        var V = Ta(),
          et = it(V);
        {
          var St = Nt => {
              var Mt = Ia();
              oe("click", Mt, L), g(Nt, Mt)
            },
            xt = Nt => {
              var Mt = Ea();
              g(Nt, Mt)
            };
          at(et, Nt => {
            r(b) ? Nt(St) : Nt(xt, -1)
          })
        }
        J(V), Tt(() => qt(V, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), g(I, V)
      };
    at(U, I => {
      r(Ae) && r(tt) ? I(pt) : I(Et, -1)
    })
  }
  g(s, q), Qt()
}
nn(["click"]);
var xa = ft('<dialog class="modal"><div></div> <div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Sa(s, t) {
  Xt(t, !0);
  const n = E(() => an.current !== null),
    f = E(() => {
      var b;
      return (b = an.current) == null ? void 0 : b.tier
    }),
    _ = Ti(() => r(n));
  let T = Y(""),
    x = Y(void 0),
    O = Y(!1);
  var M = xa(),
    S = it(M);
  let v;
  rn(S, b => m(x, b), () => r(x));
  var A = It(S, 2);
  let N;
  var X = it(A),
    B = it(X);
  {
    var tt = b => {
      var w = $(),
        D = G(w);
      gi(D, () => an.errorCount, K => {
        var L = $(),
          q = G(L);
        {
          var U = I => {
              {
                let V = E(() => Ci.trim());
                Da(I, {
                  get siteKey() {
                    return r(V)
                  },
                  callback: et => Dn(et),
                  errorCallback: () => Tn()
                })
              }
            },
            pt = I => {
              {
                let V = E(() => bi.trim());
                zs(I, {
                  get siteKey() {
                    return r(V)
                  },
                  get challengeContainer() {
                    return r(x)
                  },
                  callback: et => Dn(et),
                  openCallback: () => m(O, !0),
                  closeCallback: () => m(O, !1),
                  errorCallback: () => Tn()
                })
              }
            },
            Et = I => {
              ba(I, {
                onsuccess: () => ei(),
                get verifyingPhone() {
                  return r(T)
                },
                set verifyingPhone(V) {
                  m(T, V, !0)
                }
              })
            };
          at(q, I => {
            r(f) === 2 ? I(U) : r(f) === 3 ? I(pt, 1) : r(f) === 4 && I(Et, 2)
          })
        }
        g(K, L)
      }), g(b, w)
    };
    at(B, b => {
      _.current && b(tt)
    })
  }
  J(X), J(A), On(2), J(M), Bn(M, () => b => {
    Ot(() => {
      r(n) && !b.open ? b.showModal() : !r(n) && b.open && b.close()
    })
  }), Tt(() => {
    v = qt(S, 1, "hcaptcha-challenge-container svelte-efugoh", null, v, {
      "is-open": r(O)
    }), N = qt(A, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, N, {
      "h-84": r(f) === 4 && !r(T)
    })
  }), en("close", M, () => {
    m(O, !1), ti()
  }), g(s, M), Qt()
}
var Na = ft('<span class="hidden"> </span> <!> <!> <!>', 1);

function el(s, t) {
  Xt(t, !0), he(() => {
    const v = oi();
    xn.init();
    let A = Y(!1);
    Ot(() => {
      r(A) || Ye.data && (m(A, !0), si.loadTWA())
    }), ni();
    const N = mi(async () => {
      await Ye.refresh()
    }, {
      interval: ii.hour,
      immediate: !0
    });
    let X = setInterval(() => {
      pi().catch(B => console.warn("[sw] message failed", B))
    }, 5e3);
    return () => {
      clearTimeout(X), v(), N(), xn.cleanup()
    }
  });
  const n = "muted";
  he(() => {
    dn.muted = localStorage.getItem(n) === "1"
  }), Ot(() => {
    {
      const v = dn.muted;
      document.querySelectorAll("audio").forEach(A => {
        A.muted = v
      });
      for (const A of Object.values(ri).filter(N => N instanceof Audio)) A.muted = v, v || (A.volume = .3);
      localStorage.setItem(n, Number(v).toString())
    }
  }), he(() => {});
  var f = Na();
  en("beforeunload", Qn, () => {
    _i().catch(v => console.warn("[sw] message failed", v))
  });
  var _ = G(f),
    T = it(_);
  J(_);
  var x = It(_, 2);
  {
    var O = v => {
      var A = $(),
        N = G(A);
      Ht(N, () => t.children), g(v, A)
    };
    at(x, v => {
      v(O, -1)
    })
  }
  var M = It(x, 2);
  Sa(M, {});
  var S = It(M, 2);
  Us(S, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Tt(() => Bt(T, `Version: ${Jn}`)), g(s, f), Qt()
}
export {
  el as component, tl as universal
};