var Ri = Object.defineProperty;
var Vn = e => {
  throw TypeError(e)
};
var Oi = (e, t, n) => t in e ? Ri(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var xt = (e, t, n) => Oi(e, typeof t != "symbol" ? t + "" : t, n),
  pn = (e, t, n) => t.has(e) || Vn("Cannot " + n);
var N = (e, t, n) => (pn(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  vt = (e, t, n) => t.has(e) ? Vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  ge = (e, t, n, a) => (pn(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n),
  zn = (e, t, n) => (pn(e, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as me
} from "../chunks/yzDMpedb.js";
import {
  p as Yt,
  d as it,
  a as A,
  r as $,
  t as Nt,
  b as Xt,
  c as ft,
  bI as He,
  E as Mi,
  D as Gn,
  F as Bi,
  e as et,
  g as Mn,
  y as Ot,
  h as I,
  i as o,
  B as Me,
  s as St,
  l as se,
  v as hn,
  u as O,
  aI as qt,
  q as tt,
  f as X,
  k as fn,
  bl as Kn,
  w as Qe,
  bK as pi,
  n as gi,
  bH as Ui
} from "../chunks/CxLQz1V2.js";
import {
  c as Hi,
  s as Ut
} from "../chunks/CMG3kxXu.js";
import {
  i as at
} from "../chunks/DeNk1SQn.js";
import {
  s as Ht
} from "../chunks/DunY0-6-.js";
import {
  v as Wi
} from "../chunks/CB1HunzX.js";
import {
  y as Bt,
  z as le,
  A as ji,
  g as Tn,
  a as gn,
  t as be,
  u as Ce,
  B as qn,
  C as Fi,
  D as _n,
  E as Yn,
  F as Xn,
  H as Vi,
  I as zi,
  J as Gi,
  K as Qn,
  L as Ki,
  T as qi
} from "../chunks/zqgC2Q_d.js";
import {
  A as Yi
} from "../chunks/B0SX7r9F.js";
import {
  s as Xi,
  a as Qi
} from "../chunks/BSQGmVgF.js";
import {
  a as _i,
  i as mn,
  b as Rt,
  s as Zi,
  c as Dn,
  w as Ji,
  d as $i,
  e as tr,
  f as xn,
  n as Zn,
  m as en,
  g as er,
  h as nr,
  j as ir,
  k as rr
} from "../chunks/BOmq9fHl.js";
import {
  k as or
} from "../chunks/CdjA_jHm.js";
import {
  c as ue,
  a as Zt,
  s as Ct,
  b as vn,
  d as Ie,
  S as sr,
  h as ar,
  e as vi
} from "../chunks/0rgL9IxG.js";
import {
  p as j,
  s as Be,
  r as Se
} from "../chunks/C_QAuGIk.js";
import {
  _ as lr
} from "../chunks/Dp1pzeXC.js";
import {
  e as nn
} from "../chunks/CeyQ3Myu.js";
import {
  c as Jt
} from "../chunks/DWpdnL18.js";
import {
  b as Bn
} from "../chunks/BVE3oaaT.js";
import {
  t as ur
} from "../chunks/Ct12j0u0.js";
import {
  g as ae
} from "../chunks/BhCkpOlh.js";
import {
  p as cr
} from "../chunks/BTQgEZ2f.js";
import "../chunks/DS4V2ySU.js";
const dr = !0,
  ju = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: dr
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  hr = () => "Input the code",
  fr = () => "Insira o código",
  mr = () => "输入验证码",
  pr = () => "Code eingeben",
  gr = () => "Introduce el código",
  _r = () => "Entrez le code",
  vr = () => "Inserisci il codice",
  yr = () => "コードを入力してください。",
  br = () => "Wpisz kod",
  Cr = () => "Введите код",
  wr = () => "Введіть код",
  Ir = () => "Nhập mã",
  Er = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? hr() : n === "pt" ? fr() : n === "ch" ? mr() : n === "de" ? pr() : n === "es" ? gr() : n === "fr" ? _r() : n === "it" ? vr() : n === "jp" ? yr() : n === "pl" ? br() : n === "ru" ? Cr() : n === "uk" ? wr() : Ir()
  },
  Tr = () => "Not a valid phone number",
  Dr = () => "Não é um número válido",
  xr = () => "不是有效的电话号码",
  Sr = () => "Keine gültige Telefonnummer",
  Ar = () => "No es un número de teléfono válido",
  Nr = () => "Numéro non valide",
  Lr = () => "Numero non valido",
  Pr = () => "有効な電話番号ではありません。",
  kr = () => "To nie jest prawidłowy numer telefonu",
  Rr = () => "Неверный номер телефона",
  Or = () => "Некоректний номер телефону",
  Mr = () => "Không phải số điện thoại hợp lệ",
  Br = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? Tr() : n === "pt" ? Dr() : n === "ch" ? xr() : n === "de" ? Sr() : n === "es" ? Ar() : n === "fr" ? Nr() : n === "it" ? Lr() : n === "jp" ? Pr() : n === "pl" ? kr() : n === "ru" ? Rr() : n === "uk" ? Or() : Mr()
  },
  Ur = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  Hr = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  Wr = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  jr = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  Fr = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  Vr = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  zr = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  Gr = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  Kr = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  qr = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  Yr = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  Xr = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  Qr = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? Ur() : n === "pt" ? Hr() : n === "ch" ? Wr() : n === "de" ? jr() : n === "es" ? Fr() : n === "fr" ? Vr() : n === "it" ? zr() : n === "jp" ? Gr() : n === "pl" ? Kr() : n === "ru" ? qr() : n === "uk" ? Yr() : Xr()
  },
  Zr = () => "Verify your phone number to keep painting. This helps us block bots and multi-accounting to keep a fair experience for everyone.",
  Jr = () => "Verifique seu número de telefone para continuar pintando. Isso nos ajuda a bloquear bots e o uso de várias contas para garantir uma experiência justa para todos.",
  $r = () => "请验证你的电话号码以继续绘画。这有助于我们阻止机器人和多账号行为，为所有人提供公平的体验。",
  to = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots und Multi-Accounting zu blockieren, damit alle ein faires Erlebnis haben.",
  eo = () => "Verifica tu número de teléfono para seguir pintando. Esto nos ayuda a bloquear bots y el uso de varias cuentas para garantizar una experiencia justa para todos.",
  no = () => "Vérifiez votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et les comptes multiples afin de garantir une expérience équitable pour tous.",
  io = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a bloccare bot e account multipli per garantire un'esperienza equa a tutti.",
  ro = () => "描き続けるには電話番号の確認が必要です。これはボットや複数アカウントの利用を防ぎ、すべてのプレイヤーに公平な体験を提供するための手順です。",
  oo = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to blokować boty i zakładanie wielu kont, aby zapewnić wszystkim uczciwą rozgrywkę.",
  so = () => "Подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам блокировать ботов и мультиаккаунты, обеспечивая честные условия для всех.",
  ao = () => "Підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам блокувати ботів і мультиакаунти, щоб забезпечити чесні умови для всіх.",
  lo = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi chặn bot và việc dùng nhiều tài khoản để mang lại trải nghiệm công bằng cho mọi người.",
  uo = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? Zr() : n === "pt" ? Jr() : n === "ch" ? $r() : n === "de" ? to() : n === "es" ? eo() : n === "fr" ? no() : n === "it" ? io() : n === "jp" ? ro() : n === "pl" ? oo() : n === "ru" ? so() : n === "uk" ? ao() : lo()
  },
  co = () => "Phone successfully verified",
  ho = () => "Telefone verificado com sucesso",
  fo = () => "电话验证成功",
  mo = () => "Telefon erfolgreich verifiziert",
  po = () => "Teléfono verificado correctamente",
  go = () => "Téléphone vérifié avec succès",
  _o = () => "Telefono verificato con successo",
  vo = () => "電話番号を確認しました。",
  yo = () => "Telefon został pomyślnie zweryfikowany",
  bo = () => "Телефон успешно подтверждён",
  Co = () => "Телефон успішно підтверджено",
  wo = () => "Đã xác minh số điện thoại thành công",
  Io = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? co() : n === "pt" ? ho() : n === "ch" ? fo() : n === "de" ? mo() : n === "es" ? po() : n === "fr" ? go() : n === "it" ? _o() : n === "jp" ? vo() : n === "pl" ? yo() : n === "ru" ? bo() : n === "uk" ? Co() : wo()
  },
  Eo = () => "Resend Code",
  To = () => "Reenviar Código",
  Do = () => "重新发送验证码",
  xo = () => "Code erneut senden",
  So = () => "Reenviar código",
  Ao = () => "Renvoyer le code",
  No = () => "Reinvia codice",
  Lo = () => "コードを再送信",
  Po = () => "Wyślij kod ponownie",
  ko = () => "Отправить код ещё раз",
  Ro = () => "Надіслати код ще раз",
  Oo = () => "Gửi lại mã",
  Mo = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? Eo() : n === "pt" ? To() : n === "ch" ? Do() : n === "de" ? xo() : n === "es" ? So() : n === "fr" ? Ao() : n === "it" ? No() : n === "jp" ? Lo() : n === "pl" ? Po() : n === "ru" ? ko() : n === "uk" ? Ro() : Oo()
  },
  Bo = () => "Send Code",
  Uo = () => "Enviar o código",
  Ho = () => "发送验证码",
  Wo = () => "Code senden",
  jo = () => "Enviar código",
  Fo = () => "Envoyer le code",
  Vo = () => "Invia codice",
  zo = () => "コードを送信",
  Go = () => "Wyślij kod",
  Ko = () => "Отправить код",
  qo = () => "Надіслати код",
  Yo = () => "Gửi mã",
  Xo = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? Bo() : n === "pt" ? Uo() : n === "ch" ? Ho() : n === "de" ? Wo() : n === "es" ? jo() : n === "fr" ? Fo() : n === "it" ? Vo() : n === "jp" ? zo() : n === "pl" ? Go() : n === "ru" ? Ko() : n === "uk" ? qo() : Yo()
  },
  Qo = e => `Sent to ${e.phone}`,
  Zo = e => `Enviado para ${e.phone}`,
  Jo = e => `已发送至 ${e.phone}`,
  $o = e => `An ${e.phone} gesendet`,
  ts = e => `Enviado a ${e.phone}`,
  es = e => `Envoyé à ${e.phone}`,
  ns = e => `Inviato a ${e.phone}`,
  is = e => `${e.phone} に送信しました`,
  rs = e => `Wysłano na ${e.phone}`,
  os = e => `Отправлено на ${e.phone}`,
  ss = e => `Надіслано на ${e.phone}`,
  as = e => `Đã gửi tới ${e.phone}`,
  ls = (e, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? Qo(e) : n === "pt" ? Zo(e) : n === "ch" ? Jo(e) : n === "de" ? $o(e) : n === "es" ? ts(e) : n === "fr" ? es(e) : n === "it" ? ns(e) : n === "jp" ? is(e) : n === "pl" ? rs(e) : n === "ru" ? os(e) : n === "uk" ? ss(e) : as(e)
  },
  us = e => `Code sent to ${e.phone} via ${e.channel}`,
  cs = e => `Código enviado para ${e.phone} via ${e.channel}`,
  ds = e => `验证码已通过${e.channel}发送至${e.phone}`,
  hs = e => `Code an ${e.phone} per ${e.channel} gesendet`,
  fs = e => `Código enviado a ${e.phone} por ${e.channel}`,
  ms = e => `Code envoyé à ${e.phone} par ${e.channel}`,
  ps = e => `Codice inviato a ${e.phone} tramite ${e.channel}`,
  gs = e => `コードを${e.channel}で${e.phone}に送信しました`,
  _s = e => `Kod wysłany do ${e.phone} przez ${e.channel}`,
  vs = e => `Код отправлен на ${e.phone} через ${e.channel}`,
  ys = e => `Код надіслано на ${e.phone} через ${e.channel}`,
  bs = e => `Mã đã được gửi tới ${e.phone} qua ${e.channel}`,
  Cs = (e, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? us(e) : n === "pt" ? cs(e) : n === "ch" ? ds(e) : n === "de" ? hs(e) : n === "es" ? fs(e) : n === "fr" ? ms(e) : n === "it" ? ps(e) : n === "jp" ? gs(e) : n === "pl" ? _s(e) : n === "ru" ? vs(e) : n === "uk" ? ys(e) : bs(e)
  },
  ws = () => "Try another number",
  Is = () => "Tentar outro número",
  Es = () => "请尝试使用其他号码",
  Ts = () => "Andere Nummer versuchen",
  Ds = () => "Prueba con otro número",
  xs = () => "Essayez un autre numéro",
  Ss = () => "Prova un altro numero",
  As = () => "別の番号をお試しください。",
  Ns = () => "Spróbuj innego numeru",
  Ls = () => "Попробуйте другой номер",
  Ps = () => "Спробувати інший номер",
  ks = () => "Thử số khác",
  Rs = (e = {}, t = {}) => {
    const n = t.locale ?? ae();
    return n === "en" ? ws() : n === "pt" ? Is() : n === "ch" ? Es() : n === "de" ? Ts() : n === "es" ? Ds() : n === "fr" ? xs() : n === "it" ? Ss() : n === "jp" ? As() : n === "pl" ? Ns() : n === "ru" ? Ls() : n === "uk" ? Ps() : ks()
  },
  Os = Array(12).fill(0);
var Ms = ft('<div class="sonner-loading-bar"></div>'),
  Bs = ft('<div><div class="sonner-spinner"></div></div>');

function Us(e, t) {
  Yt(t, !0);
  var n = Bs(),
    a = it(n);
  nn(a, 23, () => Os, (c, d) => `spinner-bar-${d}`, (c, d) => {
    var u = Ms();
    A(c, u)
  }), $(a), $(n), Nt(c => {
    Zt(n, 1, c), Ct(n, "data-visible", t.visible)
  }, [() => ue(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), A(e, n), Xt()
}
const Hs = typeof window < "u" ? window : void 0;

function Ws(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var Ee, We;
class js {
  constructor(t = {}) {
    vt(this, Ee);
    vt(this, We);
    const {
      window: n = Hs,
      document: a = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (ge(this, Ee, a), ge(this, We, Hi(c => {
      const d = He(n, "focusin", c),
        u = He(n, "focusout", c);
      return () => {
        d(), u()
      }
    })))
  }
  get current() {
    var t;
    return (t = N(this, We)) == null || t.call(this), N(this, Ee) ? Ws(N(this, Ee)) : null
  }
}
Ee = new WeakMap, We = new WeakMap;
new js;
var je, de;
class Fs {
  constructor(t) {
    vt(this, je);
    vt(this, de);
    ge(this, je, t), ge(this, de, Symbol(t))
  }
  get key() {
    return N(this, de)
  }
  exists() {
    return Mi(N(this, de))
  }
  get() {
    const t = Gn(N(this, de));
    if (t === void 0) throw new Error(`Context "${N(this,je)}" not found`);
    return t
  }
  getOr(t) {
    const n = Gn(N(this, de));
    return n === void 0 ? t : n
  }
  set(t) {
    return Bi(N(this, de), t)
  }
}
je = new WeakMap, de = new WeakMap;
const Vs = new Fs("<Toaster/>");

function Ze(e) {
  return e.label !== void 0
}

function zs() {
  let e = et(Mn(typeof document < "u" ? document.hidden : !1));
  return Ot(() => He(document, "visibilitychange", () => {
    I(e, document.hidden, !0)
  })), {
    get current() {
      return o(e)
    }
  }
}
const Jn = 4e3,
  Gs = 14,
  Ks = 45,
  qs = 200,
  Ys = .05,
  Xs = {
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

function Qs(e) {
  const [t, n] = e.split("-"), a = [];
  return t && a.push(t), n && a.push(n), a
}

function $n(e) {
  return 1 / (1.5 + Math.abs(e) / 20)
}
var Zs = ft("<div><!></div>"),
  Js = ft('<button data-close-button=""><!></button>'),
  $s = ft('<div data-icon=""><!> <!></div>'),
  ta = ft('<div data-description=""><!></div>'),
  ea = ft('<button data-button="" data-cancel=""> </button>'),
  na = ft('<button data-button=""> </button>'),
  ia = ft('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  ra = ft('<li data-sonner-toast=""><!> <!></li>');

function oa(e, t) {
  Yt(t, !0);
  const n = F => {
    var G = tt(),
      ot = X(G);
    {
      var ct = w => {
          var Pt = Zs(),
            h = it(Pt);
          Ht(h, () => t.loadingIcon), $(Pt), Nt(i => {
            Zt(Pt, 1, i), Ct(Pt, "data-visible", o(M) === "loading")
          }, [() => {
            var i, r, s;
            return ue(le((i = o(Z)) == null ? void 0 : i.loader, (s = (r = t.toast) == null ? void 0 : r.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), A(w, Pt)
        },
        nt = w => {
          {
            let Pt = O(() => {
                var i, r;
                return le((i = o(Z)) == null ? void 0 : i.loader, (r = t.toast.classes) == null ? void 0 : r.loader)
              }),
              h = O(() => o(M) === "loading");
            Us(w, {
              get class() {
                return o(Pt)
              },
              get visible() {
                return o(h)
              }
            })
          }
        };
      at(ot, w => {
        t.loadingIcon ? w(ct) : w(nt, -1)
      })
    }
    A(F, G)
  };
  let a = j(t, "cancelButtonStyle", 3, ""),
    c = j(t, "actionButtonStyle", 3, ""),
    d = j(t, "descriptionClass", 3, ""),
    u = j(t, "unstyled", 3, !1),
    _ = j(t, "defaultRichColors", 3, !1);
  const S = {
    ...Xs
  };
  let E = et(!1),
    g = et(!1),
    C = et(!1),
    T = et(!1),
    k = et(!1),
    y = et(0),
    B = et(0),
    D = t.toast.duration || t.duration || Jn,
    b = et(void 0),
    x = et(null),
    U = et(null);
  const L = O(() => t.index === 0),
    H = O(() => t.index + 1 <= t.visibleToasts),
    M = O(() => t.toast.type),
    mt = O(() => t.toast.dismissable !== !1),
    wt = O(() => t.toast.class || ""),
    R = O(() => t.toast.descriptionClass || ""),
    V = O(() => Bt.heights.findIndex(F => F.toastId === t.toast.id) || 0),
    Q = O(() => t.toast.closeButton ?? t.closeButton),
    Tt = O(() => t.toast.duration ?? t.duration ?? Jn);
  let Dt = null;
  const It = O(() => t.position.split("-")),
    At = O(() => Bt.heights.reduce((F, G, ot) => ot >= o(V) ? F : F + G.height, 0)),
    ne = zs(),
    lt = O(() => t.toast.invert || t.invert),
    zt = O(() => o(M) === "loading"),
    Z = O(() => ({
      ...S,
      ...t.classes
    })),
    pt = O(() => t.toast.title),
    yt = O(() => t.toast.description);
  let bt = et(0),
    ie = et(0);
  const W = O(() => Math.round(o(V) * Gs + o(At)));
  Ot(() => {
    o(pt), o(yt);
    let F;
    t.expanded || t.expandByDefault ? F = 1 : F = 1 - t.index * Ys;
    const G = Me(() => o(b));
    if (G === void 0) return;
    G.style.setProperty("height", "auto");
    const ot = G.offsetHeight,
      ct = G.getBoundingClientRect().height,
      nt = Math.round(ct / F + Number.EPSILON & 100) / 100;
    G.style.removeProperty("height");
    let w;
    Math.abs(nt - ot) < 1 ? w = nt : w = ot, I(B, w, !0), Me(() => {
      Bt.setHeight({
        toastId: t.toast.id,
        height: w
      })
    })
  });

  function Y() {
    I(g, !0), I(y, o(W), !0), Bt.removeHeight(t.toast.id), setTimeout(() => {
      Bt.remove(t.toast.id)
    }, qs)
  }
  let Et;
  const ut = O(() => t.toast.promise && o(M) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Wt() {
    I(bt, new Date().getTime(), !0), Et = setTimeout(() => {
      var F, G;
      (G = (F = t.toast).onAutoClose) == null || G.call(F, t.toast), Y()
    }, D)
  }

  function $t() {
    if (o(ie) < o(bt)) {
      const F = new Date().getTime() - o(bt);
      D = D - F
    }
    I(ie, new Date().getTime(), !0)
  }
  Ot(() => {
    t.toast.updated && (clearTimeout(Et), D = o(Tt), Wt())
  }), Ot(() => (o(ut) || (t.expanded || t.interacting || ne.current ? $t() : Wt()), () => clearTimeout(Et))), me(() => {
    var G;
    I(E, !0);
    const F = (G = o(b)) == null ? void 0 : G.getBoundingClientRect().height;
    return I(B, F, !0), Bt.setHeight({
      toastId: t.toast.id,
      height: F
    }), () => {
      Bt.removeHeight(t.toast.id)
    }
  }), Ot(() => {
    t.toast.delete && Me(() => {
      var F, G;
      Y(), (G = (F = t.toast).onDismiss) == null || G.call(F, t.toast)
    })
  });
  const ve = F => {
      if (o(zt)) return;
      I(y, o(W), !0);
      const G = F.target;
      G.setPointerCapture(F.pointerId), G.tagName !== "BUTTON" && (I(C, !0), Dt = {
        x: F.clientX,
        y: F.clientY
      })
    },
    re = () => {
      var w, Pt, h, i, r, s;
      if (o(T) || !o(mt)) return;
      Dt = null;
      const F = Number(((w = o(b)) == null ? void 0 : w.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        G = Number(((Pt = o(b)) == null ? void 0 : Pt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        ot = new Date().getTime() - 0,
        ct = o(x) === "x" ? F : G,
        nt = Math.abs(ct) / ot;
      if (Math.abs(ct) >= Ks || nt > .11) {
        I(y, o(W), !0), (i = (h = t.toast).onDismiss) == null || i.call(h, t.toast), o(x) === "x" ? I(U, F > 0 ? "right" : "left", !0) : I(U, G > 0 ? "down" : "up", !0), Y(), I(T, !0);
        return
      } else(r = o(b)) == null || r.style.setProperty("--swipe-amount-x", "0px"), (s = o(b)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      I(k, !1), I(C, !1), I(x, null)
    },
    jt = F => {
      var Pt, h, i;
      if (!Dt || !o(mt) || (((Pt = window.getSelection()) == null ? void 0 : Pt.toString().length) ?? -1) > 0) return;
      const ot = F.clientY - Dt.y,
        ct = F.clientX - Dt.x,
        nt = t.swipeDirections ?? Qs(t.position);
      !o(x) && (Math.abs(ct) > 1 || Math.abs(ot) > 1) && I(x, Math.abs(ct) > Math.abs(ot) ? "x" : "y", !0);
      let w = {
        x: 0,
        y: 0
      };
      if (o(x) === "y") {
        if (nt.includes("top") || nt.includes("bottom"))
          if (nt.includes("top") && ot < 0 || nt.includes("bottom") && ot > 0) w.y = ot;
          else {
            const r = ot * $n(ot);
            w.y = Math.abs(r) < Math.abs(ot) ? r : ot
          }
      } else if (o(x) === "x" && (nt.includes("left") || nt.includes("right")))
        if (nt.includes("left") && ct < 0 || nt.includes("right") && ct > 0) w.x = ct;
        else {
          const r = ct * $n(ct);
          w.x = Math.abs(r) < Math.abs(ct) ? r : ct
        }(Math.abs(w.x) > 0 || Math.abs(w.y) > 0) && I(k, !0), (h = o(b)) == null || h.style.setProperty("--swipe-amount-x", `${w.x}px`), (i = o(b)) == null || i.style.setProperty("--swipe-amount-y", `${w.y}px`)
    },
    Ft = () => {
      I(C, !1), I(x, null), Dt = null
    },
    kt = O(() => t.toast.icon ? t.toast.icon : o(M) === "success" ? t.successIcon : o(M) === "error" ? t.errorIcon : o(M) === "warning" ? t.warningIcon : o(M) === "info" ? t.infoIcon : o(M) === "loading" ? t.loadingIcon : null);
  var J = ra();
  Ct(J, "tabindex", 0);
  let pe;
  var Ae = it(J);
  {
    var Ne = F => {
      var G = Js(),
        ot = it(G);
      Ht(ot, () => t.closeIcon ?? qt), $(G), Nt(ct => {
        Ct(G, "aria-label", t.closeButtonAriaLabel), Ct(G, "data-disabled", o(zt)), Zt(G, 1, ct)
      }, [() => {
        var ct, nt, w;
        return ue(le((ct = o(Z)) == null ? void 0 : ct.closeButton, (w = (nt = t.toast) == null ? void 0 : nt.classes) == null ? void 0 : w.closeButton))
      }]), se("click", G, () => {
        var ct, nt;
        o(zt) || !o(mt) || (Y(), (nt = (ct = t.toast).onDismiss) == null || nt.call(ct, t.toast))
      }), A(F, G)
    };
    at(Ae, F => {
      o(Q) && !t.toast.component && o(M) !== "loading" && t.closeIcon !== null && F(Ne)
    })
  }
  var Le = St(Ae, 2);
  {
    var ye = F => {
        const G = O(() => t.toast.component);
        var ot = tt(),
          ct = X(ot);
        Jt(ct, () => o(G), (nt, w) => {
          w(nt, Be(() => t.toast.componentProps, {
            closeToast: Y
          }))
        }), A(F, ot)
      },
      Pe = F => {
        var G = ia(),
          ot = X(G);
        {
          var ct = v => {
            var p = $s(),
              P = it(p);
            {
              var z = K => {
                var q = tt(),
                  _t = X(q);
                {
                  var rt = st => {
                      var Gt = tt(),
                        Vt = X(Gt);
                      Jt(Vt, () => t.toast.icon, (Lt, Mt) => {
                        Mt(Lt, {})
                      }), A(st, Gt)
                    },
                    ht = st => {
                      n(st)
                    };
                  at(_t, st => {
                    t.toast.icon ? st(rt) : st(ht, -1)
                  })
                }
                A(K, q)
              };
              at(P, K => {
                (t.toast.promise || o(M) === "loading") && K(z)
              })
            }
            var gt = St(P, 2);
            {
              var dt = K => {
                var q = tt(),
                  _t = X(q);
                {
                  var rt = Lt => {
                      var Mt = tt(),
                        te = X(Mt);
                      Jt(te, () => t.toast.icon, (Pi, ki) => {
                        ki(Pi, {})
                      }), A(Lt, Mt)
                    },
                    ht = Lt => {
                      var Mt = tt(),
                        te = X(Mt);
                      Ht(te, () => t.successIcon ?? qt), A(Lt, Mt)
                    },
                    st = Lt => {
                      var Mt = tt(),
                        te = X(Mt);
                      Ht(te, () => t.errorIcon ?? qt), A(Lt, Mt)
                    },
                    Gt = Lt => {
                      var Mt = tt(),
                        te = X(Mt);
                      Ht(te, () => t.warningIcon ?? qt), A(Lt, Mt)
                    },
                    Vt = Lt => {
                      var Mt = tt(),
                        te = X(Mt);
                      Ht(te, () => t.infoIcon ?? qt), A(Lt, Mt)
                    };
                  at(_t, Lt => {
                    t.toast.icon ? Lt(rt) : o(M) === "success" ? Lt(ht, 1) : o(M) === "error" ? Lt(st, 2) : o(M) === "warning" ? Lt(Gt, 3) : o(M) === "info" && Lt(Vt, 4)
                  })
                }
                A(K, q)
              };
              at(gt, K => {
                t.toast.type !== "loading" && K(dt)
              })
            }
            $(p), Nt(K => Zt(p, 1, K), [() => {
              var K, q, _t;
              return ue(le((K = o(Z)) == null ? void 0 : K.icon, (_t = (q = t.toast) == null ? void 0 : q.classes) == null ? void 0 : _t.icon))
            }]), A(v, p)
          };
          at(ot, v => {
            (o(M) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (o(kt) !== null || t.toast.icon) && v(ct)
          })
        }
        var nt = St(ot, 2),
          w = it(nt),
          Pt = it(w);
        {
          var h = v => {
            var p = tt(),
              P = X(p);
            {
              var z = dt => {
                  const K = O(() => t.toast.title);
                  var q = tt(),
                    _t = X(q);
                  Jt(_t, () => o(K), (rt, ht) => {
                    ht(rt, Be(() => t.toast.componentProps))
                  }), A(dt, q)
                },
                gt = dt => {
                  var K = Kn();
                  Nt(() => Ut(K, t.toast.title)), A(dt, K)
                };
              at(P, dt => {
                typeof t.toast.title != "string" ? dt(z) : dt(gt, -1)
              })
            }
            A(v, p)
          };
          at(Pt, v => {
            t.toast.title && v(h)
          })
        }
        $(w);
        var i = St(w, 2);
        {
          var r = v => {
            var p = ta(),
              P = it(p);
            {
              var z = dt => {
                  const K = O(() => t.toast.description);
                  var q = tt(),
                    _t = X(q);
                  Jt(_t, () => o(K), (rt, ht) => {
                    ht(rt, Be(() => t.toast.componentProps))
                  }), A(dt, q)
                },
                gt = dt => {
                  var K = Kn();
                  Nt(() => Ut(K, t.toast.description)), A(dt, K)
                };
              at(P, dt => {
                typeof t.toast.description != "string" ? dt(z) : dt(gt, -1)
              })
            }
            $(p), Nt(dt => Zt(p, 1, dt), [() => {
              var dt, K;
              return ue(le(d(), o(R), (dt = o(Z)) == null ? void 0 : dt.description, (K = t.toast.classes) == null ? void 0 : K.description))
            }]), A(v, p)
          };
          at(i, v => {
            t.toast.description && v(r)
          })
        }
        $(nt);
        var s = St(nt, 2);
        {
          var l = v => {
            var p = tt(),
              P = X(p);
            {
              var z = K => {
                  var q = tt(),
                    _t = X(q);
                  Jt(_t, () => t.toast.cancel, (rt, ht) => {
                    ht(rt, {})
                  }), A(K, q)
                },
                gt = K => {
                  var q = ea(),
                    _t = it(q, !0);
                  $(q), Nt(rt => {
                    vn(q, t.toast.cancelButtonStyle ?? a()), Zt(q, 1, rt), Ut(_t, t.toast.cancel.label)
                  }, [() => {
                    var rt, ht, st;
                    return ue(le((rt = o(Z)) == null ? void 0 : rt.cancelButton, (st = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : st.cancelButton))
                  }]), se("click", q, rt => {
                    var ht, st;
                    Ze(t.toast.cancel) && o(mt) && ((st = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || st.call(ht, rt), Y())
                  }), A(K, q)
                },
                dt = O(() => Ze(t.toast.cancel));
              at(P, K => {
                typeof t.toast.cancel == "function" ? K(z) : o(dt) && K(gt, 1)
              })
            }
            A(v, p)
          };
          at(s, v => {
            t.toast.cancel && v(l)
          })
        }
        var m = St(s, 2);
        {
          var f = v => {
            var p = tt(),
              P = X(p);
            {
              var z = K => {
                  var q = tt(),
                    _t = X(q);
                  Jt(_t, () => t.toast.action, (rt, ht) => {
                    ht(rt, {})
                  }), A(K, q)
                },
                gt = K => {
                  var q = na(),
                    _t = it(q, !0);
                  $(q), Nt(rt => {
                    vn(q, t.toast.actionButtonStyle ?? c()), Zt(q, 1, rt), Ut(_t, t.toast.action.label)
                  }, [() => {
                    var rt, ht, st;
                    return ue(le((rt = o(Z)) == null ? void 0 : rt.actionButton, (st = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : st.actionButton))
                  }]), se("click", q, rt => {
                    var ht;
                    Ze(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(rt), !rt.defaultPrevented && Y())
                  }), A(K, q)
                },
                dt = O(() => Ze(t.toast.action));
              at(P, K => {
                typeof t.toast.action == "function" ? K(z) : o(dt) && K(gt, 1)
              })
            }
            A(v, p)
          };
          at(m, v => {
            t.toast.action && v(f)
          })
        }
        Nt(v => Zt(w, 1, v), [() => {
          var v, p, P;
          return ue(le((v = o(Z)) == null ? void 0 : v.title, (P = (p = t.toast) == null ? void 0 : p.classes) == null ? void 0 : P.title))
        }]), A(F, G)
      };
    at(Le, F => {
      t.toast.component ? F(ye) : F(Pe, -1)
    })
  }
  $(J), Bn(J, F => I(b, F), () => o(b)), Nt((F, G, ot) => {
    Zt(J, 1, F), Ct(J, "data-rich-colors", t.toast.richColors ?? _()), Ct(J, "data-styled", !(t.toast.component || t.toast.unstyled || u())), Ct(J, "data-mounted", o(E)), Ct(J, "data-promise", G), Ct(J, "data-swiped", o(k)), Ct(J, "data-removed", o(g)), Ct(J, "data-visible", o(H)), Ct(J, "data-y-position", o(It)[0]), Ct(J, "data-x-position", o(It)[1]), Ct(J, "data-index", t.index), Ct(J, "data-front", o(L)), Ct(J, "data-swiping", o(C)), Ct(J, "data-dismissable", o(mt)), Ct(J, "data-type", o(M)), Ct(J, "data-invert", o(lt)), Ct(J, "data-swipe-out", o(T)), Ct(J, "data-swipe-direction", o(U)), Ct(J, "data-expanded", ot), pe = vn(J, `${t.style} ${t.toast.style}`, pe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Bt.toasts.length - t.index,
      "--offset": `${o(g)?o(y):o(W)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${o(B)}px`
    })
  }, [() => {
    var F, G, ot, ct, nt, w;
    return ue(le(t.class, o(wt), (F = o(Z)) == null ? void 0 : F.toast, (ot = (G = t.toast) == null ? void 0 : G.classes) == null ? void 0 : ot.toast, (ct = o(Z)) == null ? void 0 : ct[o(M)], (w = (nt = t.toast) == null ? void 0 : nt.classes) == null ? void 0 : w[o(M)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && o(E))]), se("pointermove", J, jt), se("pointerup", J, re), se("pointerdown", J, ve), hn("dragend", J, Ft), A(e, J), Xt()
}
fn(["pointermove", "pointerup", "pointerdown", "click"]);
var sa = Qe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function aa(e) {
  var t = sa();
  A(e, t)
}
var la = Qe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function ua(e) {
  var t = la();
  A(e, t)
}
var ca = Qe('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function da(e) {
  var t = ca();
  A(e, t)
}
var ha = Qe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function fa(e) {
  var t = ha();
  A(e, t)
}
var ma = Qe('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function pa(e) {
  var t = ma();
  A(e, t)
}
const ga = 3,
  yi = "24px",
  bi = "16px",
  _a = 4e3,
  va = 356,
  ya = 14,
  yn = "dark",
  Je = "light";

function ba(e, t) {
  const n = {};
  return [e, t].forEach((a, c) => {
    const d = c === 1,
      u = d ? "--mobile-offset" : "--offset",
      _ = d ? bi : yi;

    function S(E) {
      ["top", "right", "bottom", "left"].forEach(g => {
        n[`${u}-${g}`] = typeof E == "number" ? `${E}px` : E
      })
    }
    typeof a == "number" || typeof a == "string" ? S(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach(E => {
      const g = a[E];
      g === void 0 ? n[`${u}-${E}`] = _ : n[`${u}-${E}`] = typeof g == "number" ? `${g}px` : g
    }) : S(_)
  }), n
}
var Ca = new Set(["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]),
  wa = ft("<ol></ol>"),
  Ia = ft('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>');

function Ea(e, t) {
  Yt(t, !0);

  function n(W) {
    return W !== "system" ? W : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? yn : Je
  }
  let a = j(t, "invert", 3, !1),
    c = j(t, "position", 3, "bottom-right"),
    d = j(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    u = j(t, "expand", 3, !1),
    _ = j(t, "closeButton", 3, !1),
    S = j(t, "offset", 3, yi),
    E = j(t, "mobileOffset", 3, bi),
    g = j(t, "theme", 3, "light"),
    C = j(t, "richColors", 3, !1),
    T = j(t, "duration", 3, _a),
    k = j(t, "visibleToasts", 3, ga),
    y = j(t, "toastOptions", 19, () => ({})),
    B = j(t, "dir", 7, "auto"),
    D = j(t, "gap", 3, ya),
    b = j(t, "containerAriaLabel", 3, "Notifications"),
    x = j(t, "closeButtonAriaLabel", 3, "Close toast"),
    U = Se(t, Ca);

  function L() {
    if (B() !== "auto") return B();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const W = document.documentElement.getAttribute("dir");
    return W === "auto" || !W ? (Me(() => B(window.getComputedStyle(document.documentElement).direction ?? "ltr")), B()) : (Me(() => B(W)), W)
  }
  const H = O(() => Array.from(new Set([c(), ...Bt.toasts.filter(W => W.position).map(W => W.position)].filter(Boolean))));
  let M = et(!1),
    mt = et(!1),
    wt = et(Mn(n(g()))),
    R = et(void 0),
    V = et(null),
    Q = et(!1);
  const Tt = O(() => d().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ot(() => {
    Bt.toasts.length <= 1 && I(M, !1)
  }), Ot(() => {
    const W = Bt.toasts.filter(Y => Y.dismiss && !Y.delete);
    if (W.length > 0) {
      const Y = Bt.toasts.map(Et => W.find(Wt => Wt.id === Et.id) ? {
        ...Et,
        delete: !0
      } : Et);
      Bt.toasts = Y
    }
  }), Ot(() => () => {
    o(R) && o(V) && (o(V).focus({
      preventScroll: !0
    }), I(V, null), I(Q, !1))
  }), me(() => (Bt.reset(), He(document, "keydown", Y => {
    var ut, Wt;
    d().every($t => Y[$t] || Y.code === $t) && (I(M, !0), (ut = o(R)) == null || ut.focus()), Y.code === "Escape" && (document.activeElement === o(R) || (Wt = o(R)) != null && Wt.contains(document.activeElement)) && I(M, !1)
  }))), Ot(() => {
    if (g() !== "system" && I(wt, g()), typeof window < "u") {
      g() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? I(wt, yn) : I(wt, Je));
      const W = window.matchMedia("(prefers-color-scheme: dark)"),
        Y = ({
          matches: Et
        }) => {
          I(wt, Et ? yn : Je, !0)
        };
      "addEventListener" in W ? W.addEventListener("change", Y) : W.addListener(Y)
    }
  });
  const Dt = W => {
      var Y;
      (Y = t.onblur) == null || Y.call(t, W), o(Q) && !W.currentTarget.contains(W.relatedTarget) && (I(Q, !1), o(V) && (o(V).focus({
        preventScroll: !0
      }), I(V, null)))
    },
    It = W => {
      var Et;
      (Et = t.onfocus) == null || Et.call(t, W), !(W.target instanceof HTMLElement && W.target.dataset.dismissable === "false") && (o(Q) || (I(Q, !0), I(V, W.relatedTarget, !0)))
    },
    At = W => {
      var Et;
      (Et = t.onpointerdown) == null || Et.call(t, W), !(W.target instanceof HTMLElement && W.target.dataset.dismissable === "false") && I(mt, !0)
    },
    ne = W => {
      var Y;
      (Y = t.onmouseenter) == null || Y.call(t, W), I(M, !0)
    },
    lt = W => {
      var Y;
      (Y = t.onmouseleave) == null || Y.call(t, W), o(mt) || I(M, !1)
    },
    zt = W => {
      var Y;
      (Y = t.onmousemove) == null || Y.call(t, W), I(M, !0)
    },
    Z = W => {
      var Y;
      (Y = t.ondragend) == null || Y.call(t, W), I(M, !1)
    },
    pt = W => {
      var Y;
      (Y = t.onpointerup) == null || Y.call(t, W), I(mt, !1)
    };
  Vs.set(new ji);
  var yt = Ia();
  Ct(yt, "tabindex", -1);
  var bt = it(yt);
  {
    var ie = W => {
      var Y = tt(),
        Et = X(Y);
      nn(Et, 18, () => o(H), ut => ut, (ut, Wt, $t, ve) => {
        const re = O(() => {
            const [kt, J] = Wt.split("-");
            return {
              y: kt,
              x: J
            }
          }),
          jt = O(() => ba(S(), E()));
        var Ft = wa();
        Ie(Ft, kt => {
          var J;
          return {
            tabindex: -1,
            dir: kt,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": o(wt),
            "data-y-position": o(re).y,
            "data-x-position": o(re).x,
            style: t.style,
            onblur: Dt,
            onfocus: It,
            onmouseenter: ne,
            onmousemove: zt,
            onmouseleave: lt,
            ondragend: Z,
            onpointerdown: At,
            onpointerup: pt,
            ...U,
            [sr]: {
              "--front-toast-height": `${(J=Bt.heights[0])==null?void 0:J.height}px`,
              "--width": `${va}px`,
              "--gap": `${D()}px`,
              "--offset-top": o(jt)["--offset-top"],
              "--offset-right": o(jt)["--offset-right"],
              "--offset-bottom": o(jt)["--offset-bottom"],
              "--offset-left": o(jt)["--offset-left"],
              "--mobile-offset-top": o(jt)["--mobile-offset-top"],
              "--mobile-offset-right": o(jt)["--mobile-offset-right"],
              "--mobile-offset-bottom": o(jt)["--mobile-offset-bottom"],
              "--mobile-offset-left": o(jt)["--mobile-offset-left"]
            }
          }
        }, [() => L()], void 0, void 0, "svelte-wiukfn"), nn(Ft, 23, () => Bt.toasts.filter(kt => !kt.position && o($t) === 0 || kt.position === Wt), kt => kt.id, (kt, J, pe, Ae) => {
          {
            const Ne = s => {
                var l = tt(),
                  m = X(l);
                {
                  var f = p => {
                      var P = tt(),
                        z = X(P);
                      Ht(z, () => t.successIcon ?? qt), A(p, P)
                    },
                    v = p => {
                      aa(p)
                    };
                  at(m, p => {
                    t.successIcon ? p(f) : t.successIcon !== null && p(v, 1)
                  })
                }
                A(s, l)
              },
              Le = s => {
                var l = tt(),
                  m = X(l);
                {
                  var f = p => {
                      var P = tt(),
                        z = X(P);
                      Ht(z, () => t.errorIcon ?? qt), A(p, P)
                    },
                    v = p => {
                      ua(p)
                    };
                  at(m, p => {
                    t.errorIcon ? p(f) : t.errorIcon !== null && p(v, 1)
                  })
                }
                A(s, l)
              },
              ye = s => {
                var l = tt(),
                  m = X(l);
                {
                  var f = p => {
                      var P = tt(),
                        z = X(P);
                      Ht(z, () => t.warningIcon ?? qt), A(p, P)
                    },
                    v = p => {
                      da(p)
                    };
                  at(m, p => {
                    t.warningIcon ? p(f) : t.warningIcon !== null && p(v, 1)
                  })
                }
                A(s, l)
              },
              Pe = s => {
                var l = tt(),
                  m = X(l);
                {
                  var f = p => {
                      var P = tt(),
                        z = X(P);
                      Ht(z, () => t.infoIcon ?? qt), A(p, P)
                    },
                    v = p => {
                      fa(p)
                    };
                  at(m, p => {
                    t.infoIcon ? p(f) : t.infoIcon !== null && p(v, 1)
                  })
                }
                A(s, l)
              },
              F = s => {
                var l = tt(),
                  m = X(l);
                {
                  var f = p => {
                      var P = tt(),
                        z = X(P);
                      Ht(z, () => t.closeIcon ?? qt), A(p, P)
                    },
                    v = p => {
                      pa(p)
                    };
                  at(m, p => {
                    t.closeIcon ? p(f) : t.closeIcon !== null && p(v, 1)
                  })
                }
                A(s, l)
              };
            let G = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.duration) ?? T()
              }),
              ot = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.class) ?? ""
              }),
              ct = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.descriptionClass) || ""
              }),
              nt = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.style) ?? ""
              }),
              w = O(() => y().classes || {}),
              Pt = O(() => y().unstyled ?? !1),
              h = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              i = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              r = O(() => {
                var s;
                return ((s = y()) == null ? void 0 : s.closeButtonAriaLabel) ?? x()
              });
            oa(kt, {
              get index() {
                return o(pe)
              },
              get toast() {
                return o(J)
              },
              get defaultRichColors() {
                return C()
              },
              get duration() {
                return o(G)
              },
              get class() {
                return o(ot)
              },
              get descriptionClass() {
                return o(ct)
              },
              get invert() {
                return a()
              },
              get visibleToasts() {
                return k()
              },
              get closeButton() {
                return _()
              },
              get interacting() {
                return o(mt)
              },
              get position() {
                return Wt
              },
              get style() {
                return o(nt)
              },
              get classes() {
                return o(w)
              },
              get unstyled() {
                return o(Pt)
              },
              get cancelButtonStyle() {
                return o(h)
              },
              get actionButtonStyle() {
                return o(i)
              },
              get closeButtonAriaLabel() {
                return o(r)
              },
              get expandByDefault() {
                return u()
              },
              get expanded() {
                return o(M)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: Ne,
              errorIcon: Le,
              warningIcon: ye,
              infoIcon: Pe,
              closeIcon: F,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), $(Ft), Bn(Ft, kt => I(R, kt), () => o(R)), Nt(() => Ft.dir = Ft.dir), A(ut, Ft)
      }), A(W, Y)
    };
    at(bt, W => {
      Bt.toasts.length > 0 && W(ie)
    })
  }
  $(yt), Nt(() => Ct(yt, "aria-label", `${b()??""} ${o(Tt)??""}`)), A(e, yt), Xt()
}
let ke = et(!1);
var Ta = ft("<div></div>"),
  Da = ft('<button type="button" class="btn">Retry</button>'),
  xa = ft('<span class="loading loading-spinner loading-lg"></span>'),
  Sa = ft('<div class="flex h-16 items-center justify-center"><!></div>');

function Aa(e, t) {
  Yt(t, !0);
  let n = j(t, "theme", 19, () => Tn.theme === "dark" ? "dark" : "light"),
    a = j(t, "size", 3, "normal");
  const c = O(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: a(),
      callback: D => {
        var b;
        return (b = t.callback) == null ? void 0 : b.call(t, D)
      },
      "error-callback": D => {
        var b;
        return (b = t.errorCallback) == null ? void 0 : b.call(t, D)
      },
      "expired-callback": () => {
        var D;
        return (D = t.expiredCallback) == null ? void 0 : D.call(t)
      }
    })),
    d = (D, b) => {
      var U;
      let x = window.hcaptcha.render(D, b);
      return (U = t.onload) == null || U.call(t), {
        destroy() {
          var L;
          (L = window.hcaptcha) == null || L.remove(x)
        },
        update(L) {
          var H;
          (H = window.hcaptcha) == null || H.remove(x), x = window.hcaptcha.render(D, L)
        }
      }
    };
  let u = et(!1),
    _ = et(!1),
    S;

  function E() {
    const D = document.createElement("script");
    D.type = "text/javascript", D.src = "https://js.hcaptcha.com/1/api.js?render=explicit", D.async = !0, D.defer = !0, D.addEventListener("load", () => I(ke, !0), {
      once: !0
    }), document.head.appendChild(D)
  }

  function g() {
    I(_, !1), S && clearTimeout(S), S = setTimeout(() => {
      (!o(ke) || !o(u)) && I(_, !0)
    }, 5e3)
  }

  function C() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(D => D.remove()), I(ke, !1), E(), g()
  }
  me(() => (I(u, !0), o(ke) || E(), g(), () => {
    I(u, !1), S && clearTimeout(S)
  }));
  var T = tt(),
    k = X(T);
  {
    var y = D => {
        var b = Ta();
        _i(b, (x, U) => d == null ? void 0 : d(x, U), () => o(c)), A(D, b)
      },
      B = D => {
        var b = Sa(),
          x = it(b);
        {
          var U = H => {
              var M = Da();
              se("click", M, C), A(H, M)
            },
            L = H => {
              var M = xa();
              A(H, M)
            };
          at(x, H => {
            o(_) ? H(U) : H(L, -1)
          })
        }
        $(b), A(D, b)
      };
    at(k, D => {
      o(ke) && o(u) ? D(y) : D(B, -1)
    })
  }
  A(e, T), Xt()
}
fn(["click"]);

function Un(...e) {
  return ur(ar(e))
}
var Na = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "children"]),
  La = ft("<div><!></div>");

function Pa(e, t) {
  Yt(t, !0);
  let n = j(t, "ref", 15, null),
    a = Se(t, Na);
  var c = La();
  Ie(c, u => ({
    class: u,
    ...a
  }), [() => Un("flex items-center", t.class)]);
  var d = it(c);
  Ht(d, () => t.children ?? qt), $(c), Bn(c, u => n(u), () => n()), A(e, c), Xt()
}
var Fe, an;
class ka {
  constructor(t, n) {
    vt(this, Fe, () => {});
    vt(this, an, O(() => N(this, Fe).call(this)));
    let a;
    n !== void 0 && (a = n), ge(this, Fe, () => {
      try {
        return a
      } finally {
        a = t()
      }
    })
  }
  get current() {
    return o(N(this, an))
  }
}
Fe = new WeakMap, an = new WeakMap;
const Ra = 1,
  Oa = 9,
  Ma = 11;

function Ba(e) {
  return mn(e) && e.nodeType === Ra && typeof e.nodeName == "string"
}

function Ci(e) {
  return mn(e) && e.nodeType === Oa
}

function Ua(e) {
  var t;
  return mn(e) && ((t = e.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function Ha(e) {
  return mn(e) && e.nodeType !== void 0
}

function Wa(e) {
  return Ha(e) && e.nodeType === Ma && "host" in e
}

function ja(e) {
  return Ci(e) ? e : Ua(e) ? e.document : (e == null ? void 0 : e.ownerDocument) ?? document
}

function wi(e) {
  var t;
  return Wa(e) ? wi(e.host) : Ci(e) ? e.defaultView ?? window : Ba(e) ? ((t = e.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function Fa(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var Ve;
class Va {
  constructor(t) {
    xt(this, "element");
    vt(this, Ve, O(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    xt(this, "getDocument", () => ja(this.root));
    xt(this, "getWindow", () => this.getDocument().defaultView ?? window);
    xt(this, "getActiveElement", () => Fa(this.root));
    xt(this, "isActiveElement", t => t === this.getActiveElement());
    xt(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    xt(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    xt(this, "setTimeout", (t, n) => this.getWindow().setTimeout(t, n));
    xt(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = Rt(t) : this.element = t
  }
  get root() {
    return o(N(this, Ve))
  }
  set root(t) {
    I(N(this, Ve), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Ve = new WeakMap;
const za = 18,
  Ii = 40,
  Ga = `${Ii}px`,
  Ka = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function qa({
  containerRef: e,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: a,
  domContext: c
}) {
  let d = et(!1),
    u = et(!1),
    _ = et(!1);

  function S() {
    const g = n.current;
    return g === "none" ? !1 : g === "increase-width" && o(d) && o(u)
  }

  function E() {
    const g = e.current,
      C = t.current;
    if (!g || !C || o(_) || n.current === "none") return;
    const T = g,
      k = T.getBoundingClientRect().left + T.offsetWidth,
      y = T.getBoundingClientRect().top + T.offsetHeight / 2,
      B = k - za,
      D = y;
    c.querySelectorAll(Ka).length === 0 && c.getDocument().elementFromPoint(B, D) === g || (I(d, !0), I(_, !0))
  }
  return Ot(() => {
    const g = e.current;
    if (!g || n.current === "none") return;

    function C() {
      const y = wi(g).innerWidth - g.getBoundingClientRect().right;
      I(u, y >= Ii)
    }
    C();
    const T = setInterval(C, 1e3);
    return () => {
      clearInterval(T)
    }
  }), Ot(() => {
    const g = a.current || c.getActiveElement() === t.current;
    if (n.current === "none" || !g) return;
    const C = setTimeout(E, 0),
      T = setTimeout(E, 2e3),
      k = setTimeout(E, 5e3),
      y = setTimeout(() => {
        I(_, !0)
      }, 6e3);
    return () => {
      clearTimeout(C), clearTimeout(T), clearTimeout(k), clearTimeout(y)
    }
  }), {
    get hasPwmBadge() {
      return o(d)
    },
    get willPushPwmBadge() {
      return S()
    },
    PWM_BADGE_SPACE_WIDTH: Ga
  }
}
const Ei = tr({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  Ya = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Te, he, Kt, Qt, De, oe, fe, _e, xe, ln, ze, Ge, un, cn, Ti, Ke, qe, dn, Ye;
const jn = class jn {
  constructor(t) {
    vt(this, cn);
    xt(this, "opts");
    xt(this, "attachment");
    xt(this, "inputAttachment");
    vt(this, Te, et(!1));
    vt(this, he, Zi(!1));
    vt(this, Kt, et(null));
    vt(this, Qt, et(null));
    vt(this, De, new ka(() => this.opts.value.current ?? ""));
    vt(this, oe, O(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    vt(this, fe, et(Mn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    vt(this, _e);
    vt(this, xe);
    xt(this, "domContext");
    xt(this, "onkeydown", t => {
      const n = t.key;
      Ya.includes(n) || t.ctrlKey || t.metaKey || n && o(N(this, oe)) && !o(N(this, oe)).test(n) && t.preventDefault()
    });
    vt(this, ln, O(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    vt(this, ze, O(() => ({
      id: this.opts.id.current,
      [Ei.root]: "",
      style: o(N(this, ln)),
      ...this.attachment
    })));
    vt(this, Ge, O(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    vt(this, un, O(() => ({
      position: "absolute",
      inset: 0,
      width: N(this, _e).willPushPwmBadge ? `calc(100% + ${N(this,_e).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: N(this, _e).willPushPwmBadge ? `inset(0 ${N(this,_e).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
    vt(this, Ke, () => {
      var B;
      const t = this.opts.inputRef.current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        I(N(this, Kt), null), I(N(this, Qt), null);
        return
      }
      const a = t.selectionStart,
        c = t.selectionEnd,
        d = t.selectionDirection ?? "none",
        u = t.maxLength,
        _ = t.value,
        S = o(N(this, fe)).prev;
      let E = -1,
        g = -1,
        C;
      if (_.length !== 0 && a !== null && c !== null) {
        const D = a === c,
          b = a === _.length && _.length < u;
        if (D && !b) {
          const x = a;
          if (x === 0) E = 0, g = 1, C = "forward";
          else if (x === u) E = x - 1, g = x, C = "backward";
          else if (u > 1 && _.length > 1) {
            let U = 0;
            if (S[0] !== null && S[1] !== null) {
              C = x < S[1] ? "backward" : "forward";
              const L = S[0] === S[1] && S[0] < u;
              C === "backward" && !L && (U = -1)
            }
            E = U + x, g = U + x + 1
          }
        }
        E !== -1 && g !== -1 && E !== g && ((B = this.opts.inputRef.current) == null || B.setSelectionRange(E, g, C))
      }
      const T = E !== -1 ? E : a,
        k = g !== -1 ? g : c,
        y = C ?? d;
      I(N(this, Kt), T, !0), I(N(this, Qt), k, !0), o(N(this, fe)).prev = [T, k, y]
    });
    xt(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && o(N(this, oe)) && !o(N(this, oe)).test(n)) {
        t.preventDefault();
        return
      }
      typeof N(this, De).current == "string" && n.length < N(this, De).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    xt(this, "onfocus", t => {
      const n = this.opts.inputRef.current;
      if (n) {
        const a = Math.min(n.value.length, this.opts.maxLength.current - 1),
          c = n.value.length;
        n.setSelectionRange(a, c), I(N(this, Kt), a, !0), I(N(this, Qt), c, !0)
      }
      N(this, he).current = !0
    });
    xt(this, "onpaste", t => {
      var g, C, T, k;
      const n = this.opts.inputRef.current;
      if (!n) return;
      const a = y => {
          const B = n.selectionStart === null ? void 0 : n.selectionStart,
            D = n.selectionEnd === null ? void 0 : n.selectionEnd,
            b = B !== D,
            x = this.opts.value.current;
          return (b ? x.slice(0, B) + y + x.slice(D) : x.slice(0, B) + y + x.slice(B)).slice(0, this.opts.maxLength.current)
        },
        c = y => y.length > 0 && o(N(this, oe)) && !o(N(this, oe)).test(y);
      if (!((g = this.opts.pasteTransformer) != null && g.current) && (!N(this, xe).isIOS || !t.clipboardData || !n)) {
        const y = a((C = t.clipboardData) == null ? void 0 : C.getData("text/plain"));
        c(y) && t.preventDefault();
        return
      }
      const d = ((T = t.clipboardData) == null ? void 0 : T.getData("text/plain")) ?? "",
        u = (k = this.opts.pasteTransformer) != null && k.current ? this.opts.pasteTransformer.current(d) : d;
      t.preventDefault();
      const _ = a(u);
      if (c(_)) return;
      n.value = _, this.opts.value.current = _;
      const S = Math.min(_.length, this.opts.maxLength.current - 1),
        E = _.length;
      n.setSelectionRange(S, E), I(N(this, Kt), S, !0), I(N(this, Qt), E, !0)
    });
    xt(this, "onmouseover", t => {
      I(N(this, Te), !0)
    });
    xt(this, "onmouseleave", t => {
      I(N(this, Te), !1)
    });
    xt(this, "onblur", t => {
      if (o(N(this, fe)).willSyntheticBlur) {
        o(N(this, fe)).willSyntheticBlur = !1;
        return
      }
      N(this, he).current = !1
    });
    vt(this, qe, O(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: o(N(this, un)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": o(N(this, Kt)),
        "data-pin-input-input-mse": o(N(this, Qt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = o(N(this, oe))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: $i(this.opts.disabled.current),
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
    vt(this, dn, O(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const a = N(this, he).current && o(N(this, Kt)) !== null && o(N(this, Qt)) !== null && (o(N(this, Kt)) === o(N(this, Qt)) && n === o(N(this, Kt)) || n >= o(N(this, Kt)) && n < o(N(this, Qt))),
        c = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: c,
        isActive: a,
        hasFakeCaret: a && c === null
      }
    })));
    vt(this, Ye, O(() => ({
      cells: o(N(this, dn)),
      isFocused: N(this, he).current,
      isHovering: o(N(this, Te))
    })));
    var n;
    this.opts = t, this.attachment = Dn(this.opts.ref), this.inputAttachment = Dn(this.opts.inputRef), this.domContext = new Va(t.ref), ge(this, xe, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), ge(this, _e, qa({
      containerRef: this.opts.ref,
      inputRef: this.opts.inputRef,
      isFocused: N(this, he),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), me(() => {
      const a = this.opts.inputRef.current,
        c = this.opts.ref.current;
      if (!a || !c) return;
      N(this, xe).value.current !== a.value && (this.opts.value.current = a.value), o(N(this, fe)).prev = [a.selectionStart, a.selectionEnd, a.selectionDirection ?? "none"];
      const d = He(this.domContext.getDocument(), "selectionchange", N(this, Ke), {
        capture: !0
      });
      N(this, Ke).call(this), this.domContext.getActiveElement() === a && (N(this, he).current = !0), this.domContext.getElementById("pin-input-style") || zn(this, cn, Ti).call(this);
      const u = () => {
        c && c.style.setProperty("--bits-pin-input-root-height", `${a.clientHeight}px`)
      };
      u();
      const _ = new ResizeObserver(u);
      return _.observe(a), () => {
        d(), _.disconnect()
      }
    }), Ji([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
      Xa(() => {
        const a = this.opts.inputRef.current;
        if (!a) return;
        a.dispatchEvent(new Event("input"));
        const c = a.selectionStart,
          d = a.selectionEnd,
          u = a.selectionDirection ?? "none";
        c !== null && d !== null && (I(N(this, Kt), c, !0), I(N(this, Qt), d, !0), o(N(this, fe)).prev = [c, d, u])
      }, this.domContext)
    }), Ot(() => {
      const a = this.opts.value.current,
        c = N(this, De).current,
        d = this.opts.maxLength.current,
        u = this.opts.onComplete.current;
      c !== void 0 && a !== c && c.length < d && a.length === d && u(a)
    })
  }
  static create(t) {
    return new jn(t)
  }
  get rootProps() {
    return o(N(this, ze))
  }
  set rootProps(t) {
    I(N(this, ze), t)
  }
  get inputWrapperProps() {
    return o(N(this, Ge))
  }
  set inputWrapperProps(t) {
    I(N(this, Ge), t)
  }
  get inputProps() {
    return o(N(this, qe))
  }
  set inputProps(t) {
    I(N(this, qe), t)
  }
  get snippetProps() {
    return o(N(this, Ye))
  }
  set snippetProps(t) {
    I(N(this, Ye), t)
  }
};
Te = new WeakMap, he = new WeakMap, Kt = new WeakMap, Qt = new WeakMap, De = new WeakMap, oe = new WeakMap, fe = new WeakMap, _e = new WeakMap, xe = new WeakMap, ln = new WeakMap, ze = new WeakMap, Ge = new WeakMap, un = new WeakMap, cn = new WeakSet, Ti = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const a = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Re(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Re(n.sheet, `[data-pin-input-input]:autofill { ${a} }`), Re(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${a} }`), Re(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Re(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, Ke = new WeakMap, qe = new WeakMap, dn = new WeakMap, Ye = new WeakMap;
let Sn = jn;
var Xe;
const Fn = class Fn {
  constructor(t) {
    xt(this, "opts");
    xt(this, "attachment");
    vt(this, Xe, O(() => ({
      id: this.opts.id.current,
      [Ei.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = Dn(this.opts.ref)
  }
  static create(t) {
    return new Fn(t)
  }
  get props() {
    return o(N(this, Xe))
  }
  set props(t) {
    I(N(this, Xe), t)
  }
};
Xe = new WeakMap;
let An = Fn;

function Xa(e, t) {
  const n = t.setTimeout(e, 0),
    a = t.setTimeout(e, 10),
    c = t.setTimeout(e, 50);
  return [n, a, c]
}

function Re(e, t) {
  try {
    e.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var Qa = new Set(["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "inputRef", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]),
  Za = ft("<div><!> <div><input/></div></div>");

function Ja(e, t) {
  const n = pi();
  Yt(t, !0);
  let a = j(t, "id", 19, () => xn(n)),
    c = j(t, "inputId", 19, () => `${xn(n)}-input`),
    d = j(t, "ref", 15, null),
    u = j(t, "inputRef", 15, null),
    _ = j(t, "maxlength", 3, 6),
    S = j(t, "textalign", 3, "left"),
    E = j(t, "inputmode", 3, "numeric"),
    g = j(t, "onComplete", 3, Zn),
    C = j(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    T = j(t, "class", 3, ""),
    k = j(t, "autocomplete", 3, "one-time-code"),
    y = j(t, "disabled", 3, !1),
    B = j(t, "value", 15, ""),
    D = j(t, "onValueChange", 3, Zn),
    b = Se(t, Qa);
  const x = Sn.create({
      id: Rt(() => a()),
      ref: Rt(() => d(), V => d(V)),
      inputRef: Rt(() => u(), V => u(V)),
      inputId: Rt(() => c()),
      autocomplete: Rt(() => k()),
      maxLength: Rt(() => _()),
      textAlign: Rt(() => S()),
      disabled: Rt(() => y()),
      inputmode: Rt(() => E()),
      pattern: Rt(() => t.pattern),
      onComplete: Rt(() => g()),
      value: Rt(() => B(), V => {
        B(V), D()(V)
      }),
      pushPasswordManagerStrategy: Rt(() => C()),
      pasteTransformer: Rt(() => t.pasteTransformer)
    }),
    U = O(() => en(b, x.inputProps)),
    L = O(() => en(x.rootProps, {
      class: T()
    })),
    H = O(() => en(x.inputWrapperProps, {}));
  var M = Za();
  Ie(M, () => ({
    ...o(L)
  }));
  var mt = it(M);
  Ht(mt, () => t.children ?? qt, () => x.snippetProps);
  var wt = St(mt, 2);
  Ie(wt, () => ({
    ...o(H)
  }));
  var R = it(wt);
  Ie(R, () => ({
    ...o(U)
  }), void 0, void 0, void 0, void 0, !0), $(wt), $(M), A(e, M), Xt()
}
var $a = new Set(["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]),
  tl = ft("<div><!></div>");

function el(e, t) {
  const n = pi();
  Yt(t, !0);
  let a = j(t, "id", 19, () => xn(n)),
    c = j(t, "ref", 15, null),
    d = Se(t, $a);
  const u = An.create({
      id: Rt(() => a()),
      ref: Rt(() => c(), T => c(T)),
      cell: Rt(() => t.cell)
    }),
    _ = O(() => en(d, u.props));
  var S = tt(),
    E = X(S);
  {
    var g = T => {
        var k = tt(),
          y = X(k);
        Ht(y, () => t.child, () => ({
          props: o(_)
        })), A(T, k)
      },
      C = T => {
        var k = tl();
        Ie(k, () => ({
          ...o(_)
        }));
        var y = it(k);
        Ht(y, () => t.children ?? qt), $(k), A(T, k)
      };
    at(E, T => {
      t.child ? T(g) : T(C, -1)
    })
  }
  A(e, S), Xt()
}
var nl = new Set(["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]),
  il = ft('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  rl = ft(" <!>", 1);

function ol(e, t) {
  Yt(t, !0);
  let n = j(t, "ref", 15, null),
    a = Se(t, nl);
  var c = tt(),
    d = X(c);
  {
    let u = O(() => Un("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(d, () => el, (_, S) => {
      S(_, Be({
        get cell() {
          return t.cell
        },
        get class() {
          return o(u)
        }
      }, () => a, {
        get ref() {
          return n()
        },
        set ref(E) {
          n(E)
        },
        children: (E, g) => {
          gi();
          var C = rl(),
            T = X(C),
            k = St(T);
          {
            var y = B => {
              var D = il();
              A(B, D)
            };
            at(k, B => {
              t.cell.hasFakeCaret && B(y)
            })
          }
          Nt(() => Ut(T, `${t.cell.char??""} `)), A(E, C)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  A(e, c), Xt()
}
var sl = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);

function al(e, t) {
  Yt(t, !0);
  let n = j(t, "ref", 15, null),
    a = j(t, "value", 15, ""),
    c = Se(t, sl);
  var d = tt(),
    u = X(d);
  {
    let _ = O(() => Un("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(u, () => Ja, (S, E) => {
      E(S, Be({
        get class() {
          return o(_)
        }
      }, () => c, {
        get ref() {
          return n()
        },
        set ref(g) {
          n(g)
        },
        get value() {
          return a()
        },
        set value(g) {
          a(g)
        }
      }))
    })
  }
  A(e, d), Xt()
}
var bn = {
    exports: {}
  },
  ti;

function ll() {
  return ti || (ti = 1, (function(e) {
    (function(t) {
      e.exports ? e.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var n = Object.defineProperty,
          a = Object.getOwnPropertyDescriptor,
          c = Object.getOwnPropertyNames,
          d = Object.prototype.hasOwnProperty,
          u = (h, i) => {
            for (var r in i) n(h, r, {
              get: i[r],
              enumerable: !0
            })
          },
          _ = (h, i, r, s) => {
            if (i && typeof i == "object" || typeof i == "function")
              for (let l of c(i)) !d.call(h, l) && l !== r && n(h, l, {
                get: () => i[l],
                enumerable: !(s = a(i, l)) || s.enumerable
              });
            return h
          },
          S = h => _(n({}, "__esModule", {
            value: !0
          }), h),
          E = {};
        u(E, {
          Iti: () => ot,
          default: () => Pt
        });
        var g = [
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
          C = [];
        for (const h of g) C.push({
          name: "",
          iso2: h[0],
          dialCode: h[1],
          priority: h[2] || 0,
          areaCodes: h[3] || null,
          nodeById: {},
          nationalPrefix: h[4] || null,
          normalisedName: "",
          initials: "",
          dialCodePlus: ""
        });
        var T = C,
          k = {
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
          y = k,
          B = {
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
          D = B,
          b = {
            ...y,
            ...D
          },
          x = b,
          U = {
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
          H = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          M = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          mt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          wt = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          R = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          V = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          Q = {
            NANP: "1"
          },
          Tt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          Dt = {
            ISO2: "us"
          },
          It = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          At = {
            AUTO: "auto"
          },
          ne = {
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
          zt = h => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(h).matches,
          Z = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const h = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                i = zt("(max-width: 500px)"),
                r = zt("(max-height: 600px)"),
                s = zt("(pointer: coarse)");
              return h || i || s && r
            }
            return !1
          },
          pt = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: It.POLITE,
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
          yt = (h, i) => {
            h.useFullscreenPopup && (h.fixDropdownWidth = !1), h.onlyCountries.length === 1 && (h.initialCountry = h.onlyCountries[0]), h.separateDialCode && (h.nationalMode = !1), h.allowDropdown && !h.showFlags && !h.separateDialCode && (h.nationalMode = !1), h.useFullscreenPopup && !h.dropdownContainer && (h.dropdownContainer = document.body), h.i18n = {
              ...i,
              ...h.i18n
            }
          },
          bt = h => h.replace(/\D/g, ""),
          ie = (h = "") => h.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          W = (h, i) => {
            const r = ie(i),
              s = [],
              l = [],
              m = [],
              f = [],
              v = [],
              p = [];
            for (const z of h) z.iso2 === r ? s.push(z) : z.normalisedName.startsWith(r) ? l.push(z) : z.normalisedName.includes(r) ? m.push(z) : r === z.dialCode || r === z.dialCodePlus ? f.push(z) : z.dialCodePlus.includes(r) ? v.push(z) : z.initials.includes(r) && p.push(z);
            const P = (z, gt) => z.priority - gt.priority;
            return [...s.sort(P), ...l.sort(P), ...m.sort(P), ...f.sort(P), ...v.sort(P), ...p.sort(P)]
          },
          Y = (h, i) => {
            const r = i.toLowerCase();
            for (const s of h)
              if (s.name.toLowerCase().startsWith(r)) return s;
            return null
          },
          Et = h => Object.keys(h).filter(i => !!h[i]).join(" "),
          ut = (h, i, r) => {
            const s = document.createElement(h);
            return i && Object.entries(i).forEach(([l, m]) => s.setAttribute(l, m)), r && r.appendChild(s), s
          },
          Wt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${lt.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          $t = h => {
            const i = `iti-${h}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${lt.HIDDEN}="true" focusable="false">
      <mask id="${i}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${i})" />
    </svg>`
          },
          ve = class {
            constructor(h, i, r) {
              this.highlightedItem = null, this.selectedItem = null, h.dataset.intlTelInputId = r.toString(), this.telInput = h, this.options = i, this.id = r, this.hadInitialPlaceholder = !!h.getAttribute("placeholder"), this.isRTL = !!this.telInput.closest("[dir=rtl]"), this.options.separateDialCode && (this.originalPaddingLeft = this.telInput.style.paddingLeft)
            }
            generateMarkup(h) {
              this.countries = h, this._prepareTelInput();
              const i = this._createWrapperAndInsert();
              this._maybeBuildCountryContainer(i), i.appendChild(this.telInput), this._maybeUpdateInputPaddingAndReveal(), this._maybeBuildHiddenInputs(i)
            }
            _prepareTelInput() {
              var h;
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !((h = this.telInput.form) != null && h.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off")
            }
            _createWrapperAndInsert() {
              const {
                allowDropdown: h,
                showFlags: i,
                containerClass: r,
                useFullscreenPopup: s
              } = this.options, l = Et({
                iti: !0,
                "iti--allow-dropdown": h,
                "iti--show-flags": i,
                "iti--inline-dropdown": !s,
                [r]: !!r
              }), m = ut("div", {
                class: l
              });
              return this.isRTL && m.setAttribute("dir", "ltr"), this.telInput.before(m), m
            }
            _maybeBuildCountryContainer(h) {
              const {
                allowDropdown: i,
                separateDialCode: r,
                showFlags: s
              } = this.options;
              if (i || s || r) {
                this.countryContainer = ut("div", {
                  class: `iti__country-container ${L.V_HIDE}`
                }, h), i ? (this.selectedCountry = ut("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [lt.EXPANDED]: "false",
                  [lt.LABEL]: this.options.i18n.noCountrySelected,
                  [lt.HASPOPUP]: "dialog",
                  [lt.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = ut("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const l = ut("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = ut("div", {
                  class: L.FLAG
                }, l), i && (this.dropdownArrow = ut("div", {
                  class: "iti__arrow",
                  [lt.HIDDEN]: "true"
                }, l)), r && (this.selectedDialCode = ut("div", {
                  class: "iti__selected-dial-code"
                }, this.selectedCountry)), i && this._buildDropdownContent()
              }
            }
            _buildDropdownContent() {
              const {
                fixDropdownWidth: h,
                useFullscreenPopup: i,
                countrySearch: r,
                i18n: s,
                dropdownContainer: l,
                containerClass: m
              } = this.options, f = h ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = ut("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${L.HIDE} ${f}`,
                  role: "dialog",
                  [lt.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), r && this._buildSearchUI(), this.countryList = ut("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [lt.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), r && this.updateSearchResultsA11yText(), l) {
                const v = Et({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": i,
                  "iti--inline-dropdown": !i,
                  [m]: !!m
                });
                this.dropdown = ut("div", {
                  class: v
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: h
              } = this.options, i = ut("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = ut("span", {
                class: "iti__search-icon",
                [lt.HIDDEN]: "true"
              }, i), this.searchIcon.innerHTML = Wt(), this.searchInput = ut("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: h.searchPlaceholder,
                role: "combobox",
                [lt.EXPANDED]: "true",
                [lt.LABEL]: h.searchPlaceholder,
                [lt.CONTROLS]: `iti-${this.id}__country-listbox`,
                [lt.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, i), this.searchClearButton = ut("button", {
                type: "button",
                class: `iti__search-clear ${L.HIDE}`,
                [lt.LABEL]: h.clearSearchAriaLabel,
                tabindex: "-1"
              }, i), this.searchClearButton.innerHTML = $t(this.id), this.searchResultsA11yText = ut("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = ut("div", {
                class: `iti__no-results ${L.HIDE}`,
                [lt.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = h.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(L.V_HIDE))
            }
            _maybeBuildHiddenInputs(h) {
              var r, s;
              const {
                hiddenInput: i
              } = this.options;
              if (i) {
                const l = this.telInput.getAttribute("name") || "",
                  m = i(l);
                if (m.phone) {
                  const f = (r = this.telInput.form) == null ? void 0 : r.querySelector(`input[name="${m.phone}"]`);
                  f ? this.hiddenInput = f : (this.hiddenInput = ut("input", {
                    type: "hidden",
                    name: m.phone
                  }), h.appendChild(this.hiddenInput))
                }
                if (m.country) {
                  const f = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${m.country}"]`);
                  f ? this.hiddenInputCountry = f : (this.hiddenInputCountry = ut("input", {
                    type: "hidden",
                    name: m.country
                  }), h.appendChild(this.hiddenInputCountry))
                }
              }
            }
            _appendListItems() {
              const h = document.createDocumentFragment();
              for (let i = 0; i < this.countries.length; i++) {
                const r = this.countries[i],
                  s = Et({
                    [L.COUNTRY_ITEM]: !0
                  }),
                  l = ut("li", {
                    id: `iti-${this.id}__item-${r.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [lt.SELECTED]: "false"
                  });
                l.dataset.dialCode = r.dialCode, l.dataset.countryCode = r.iso2, r.nodeById[this.id] = l, this.options.showFlags && ut("div", {
                  class: `${L.FLAG} iti__${r.iso2}`
                }, l);
                const m = ut("span", {
                  class: "iti__country-name"
                }, l);
                m.textContent = r.name;
                const f = ut("span", {
                  class: "iti__dial-code"
                }, l);
                this.isRTL && f.setAttribute("dir", "ltr"), f.textContent = `+${r.dialCode}`, h.appendChild(l)
              }
              this.countryList.appendChild(h)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const h = this.options.separateDialCode ? V.SANE_SELECTED_WITH_DIAL_WIDTH : V.SANE_SELECTED_NO_DIAL_WIDTH,
                  r = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || h) + V.INPUT_PADDING_EXTRA_LEFT;
                this.telInput.style.paddingLeft = `${r}px`
              }
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                let h;
                try {
                  h = window.top.document.body
                } catch {
                  h = document.body
                }
                const i = this.telInput.parentNode.cloneNode(!1);
                i.style.visibility = "hidden", h.appendChild(i);
                const r = this.countryContainer.cloneNode();
                i.appendChild(r);
                const s = this.selectedCountry.cloneNode(!0);
                r.appendChild(s);
                const l = s.offsetWidth;
                return h.removeChild(i), l
              }
              return 0
            }
            updateSearchResultsA11yText() {
              const {
                i18n: h
              } = this.options, i = this.countryList.childElementCount;
              let r;
              i === 0 ? r = h.zeroSearchResults : h.searchResultsText ? r = h.searchResultsText(i) : i === 1 ? r = h.oneSearchResult : r = h.multipleSearchResults.replace("${count}", i.toString()), this.searchResultsA11yText.textContent = r
            }
            scrollTo(h) {
              const i = this.countryList,
                r = document.documentElement.scrollTop,
                s = i.offsetHeight,
                l = i.getBoundingClientRect().top + r,
                m = l + s,
                f = h.offsetHeight,
                v = h.getBoundingClientRect().top + r,
                p = v + f,
                P = v - l + i.scrollTop;
              if (v < l) i.scrollTop = P;
              else if (p > m) {
                const z = s - f;
                i.scrollTop = P - z
              }
            }
            highlightListItem(h, i) {
              const r = this.highlightedItem;
              if (r && r.classList.remove(L.HIGHLIGHT), this.highlightedItem = h, this.highlightedItem && (this.highlightedItem.classList.add(L.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(lt.ACTIVE_DESCENDANT, s)
              }
              i && this.highlightedItem.focus()
            }
            updateSelectedItem(h) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== h && (this.selectedItem.setAttribute(lt.SELECTED, "false"), this.selectedItem = null), h && !this.selectedItem) {
                const i = this.countryList.querySelector(`[data-country-code="${h}"]`);
                i && (i.setAttribute(lt.SELECTED, "true"), this.selectedItem = i)
              }
            }
            filterCountries(h) {
              this.countryList.innerHTML = "";
              let i = !0;
              for (const r of h) {
                const s = r.nodeById[this.id];
                s && (this.countryList.appendChild(s), i && (this.highlightListItem(s, !1), i = !1))
              }
              i ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(L.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(L.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const h = this.telInput.parentNode;
              h.before(this.telInput), h.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const i of this.countries) delete i.nodeById[this.id];
              this.countries = null
            }
          },
          re = h => {
            const {
              onlyCountries: i,
              excludeCountries: r
            } = h;
            if (i.length) {
              const s = i.map(l => l.toLowerCase());
              return T.filter(l => s.includes(l.iso2))
            } else if (r.length) {
              const s = r.map(l => l.toLowerCase());
              return T.filter(l => !s.includes(l.iso2))
            }
            return T
          },
          jt = (h, i) => {
            for (const r of h) {
              const s = r.iso2.toLowerCase();
              i.i18n[s] && (r.name = i.i18n[s])
            }
          },
          Ft = h => {
            const i = new Set;
            let r = 0;
            const s = {},
              l = (f, v) => {
                if (!f || !v) return;
                v.length > r && (r = v.length), s.hasOwnProperty(v) || (s[v] = []);
                const p = s[v];
                p.includes(f) || p.push(f)
              },
              m = [...h].sort((f, v) => f.priority - v.priority);
            for (const f of m) {
              i.has(f.dialCode) || i.add(f.dialCode);
              for (let v = 1; v < f.dialCode.length; v++) {
                const p = f.dialCode.substring(0, v);
                l(f.iso2, p)
              }
              if (l(f.iso2, f.dialCode), f.areaCodes) {
                const v = s[f.dialCode][0];
                for (const p of f.areaCodes) {
                  for (let P = 1; P < p.length; P++) {
                    const z = p.substring(0, P),
                      gt = f.dialCode + z;
                    l(v, gt), l(f.iso2, gt)
                  }
                  l(f.iso2, f.dialCode + p)
                }
              }
            }
            return {
              dialCodes: i,
              dialCodeMaxLen: r,
              dialCodeToIso2Map: s
            }
          },
          kt = (h, i) => {
            i.countryOrder && (i.countryOrder = i.countryOrder.map(r => r.toLowerCase())), h.sort((r, s) => {
              const {
                countryOrder: l
              } = i;
              if (l) {
                const m = l.indexOf(r.iso2),
                  f = l.indexOf(s.iso2),
                  v = m > -1,
                  p = f > -1;
                if (v || p) return v && p ? m - f : v ? -1 : 1
              }
              return r.name.localeCompare(s.name)
            })
          },
          J = h => {
            for (const i of h) i.normalisedName = ie(i.name), i.initials = i.normalisedName.split(/[^a-z]/).map(r => r[0]).join(""), i.dialCodePlus = `+${i.dialCode}`
          },
          pe = (h, i, r, s) => {
            let l = h;
            if (r && i) {
              i = `+${s.dialCode}`;
              const m = l[i.length] === " " || l[i.length] === "-" ? i.length + 1 : i.length;
              l = l.substring(m)
            }
            return l
          },
          Ae = (h, i, r, s, l) => {
            const m = r ? r.formatNumberAsYouType(h, s.iso2) : h,
              {
                dialCode: f
              } = s;
            return l && i.charAt(0) !== "+" && m.includes(`+${f}`) ? (m.split(`+${f}`)[1] || "").trim() : m
          },
          Ne = (h, i, r, s) => {
            if (r === 0 && !s) return 0;
            let l = 0;
            for (let m = 0; m < i.length; m++) {
              if (/[+0-9]/.test(i[m]) && l++, l === h && !s) return m + 1;
              if (s && l === h + 1) return m
            }
            return i.length
          },
          Le = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ye = h => {
            const i = bt(h);
            if (i.startsWith(Q.NANP) && i.length >= 4) {
              const r = i.substring(1, 4);
              return Le.includes(r)
            }
            return !1
          };
        for (const h of T) h.name = x[h.iso2];
        var Pe = 0,
          F = new Set(T.map(h => h.iso2)),
          G = h => F.has(h),
          ot = class Di {
            constructor(i, r = {}) {
              this.id = Pe++, this.options = {
                ...pt,
                ...r
              }, yt(this.options, x), this.ui = new ve(i, this.options, this.id), this.isAndroid = Di._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = re(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: l,
                dialCodeToIso2Map: m
              } = Ft(this.countries);
              this.dialCodes = s, this.dialCodeMaxLen = l, this.dialCodeToIso2Map = m, this.countryByIso2 = new Map(this.countries.map(f => [f.iso2, f])), this._init()
            }
            static _getIsAndroid() {
              return typeof navigator < "u" ? /Android/i.test(navigator.userAgent) : !1
            }
            _updateNumeralSet(i) {
              /[\u0660-\u0669]/.test(i) ? this.userNumeralSet = "arabic-indic" : /[\u06F0-\u06F9]/.test(i) ? this.userNumeralSet = "persian" : this.userNumeralSet = "ascii"
            }
            _mapAsciiToUserNumerals(i) {
              if (this.userNumeralSet || this._updateNumeralSet(this.ui.telInput.value), this.userNumeralSet === "ascii") return i;
              const r = this.userNumeralSet === "arabic-indic" ? 1632 : 1776;
              return i.replace(/[0-9]/g, s => String.fromCharCode(r + Number(s)))
            }
            _normaliseNumerals(i) {
              if (!i) return "";
              if (this._updateNumeralSet(i), this.userNumeralSet === "ascii") return i;
              const r = this.userNumeralSet === "arabic-indic" ? 1632 : 1776,
                s = this.userNumeralSet === "arabic-indic" ? /[\u0660-\u0669]/g : /[\u06F0-\u06F9]/g;
              return i.replace(s, l => String.fromCharCode(48 + (l.charCodeAt(0) - r)))
            }
            _getTelInputValue() {
              const i = this.ui.telInput.value.trim();
              return this._normaliseNumerals(i)
            }
            _setTelInputValue(i) {
              this.ui.telInput.value = this._mapAsciiToUserNumerals(i)
            }
            _createInitPromises() {
              const i = new Promise((s, l) => {
                  this.resolveAutoCountryPromise = s, this.rejectAutoCountryPromise = l
                }),
                r = new Promise((s, l) => {
                  this.resolveUtilsScriptPromise = s, this.rejectUtilsScriptPromise = l
                });
              return Promise.all([i, r])
            }
            _init() {
              this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
            }
            _processCountryData() {
              jt(this.countries, this.options), kt(this.countries, this.options), J(this.countries)
            }
            _setInitialState(i = !1) {
              const r = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(r),
                l = this._getTelInputValue(),
                f = s && s.startsWith("+") && (!l || !l.startsWith("+")) ? s : l,
                v = this._getDialCode(f),
                p = ye(f),
                {
                  initialCountry: P,
                  geoIpLookup: z
                } = this.options,
                gt = P === At.AUTO && z;
              if (v && !p) this._updateCountryFromNumber(f);
              else if (!gt || i) {
                const dt = P ? P.toLowerCase() : "";
                G(dt) ? this._setCountry(dt) : v && p ? this._setCountry(Dt.ISO2) : this._setCountry("")
              }
              f && this._updateValFromNumber(f)
            }
            _initListeners() {
              this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.ui.hiddenInput || this.ui.hiddenInputCountry) && this.ui.telInput.form && this._initHiddenInputListener()
            }
            _initHiddenInputListener() {
              var r;
              const i = () => {
                this.ui.hiddenInput && (this.ui.hiddenInput.value = this.getNumber()), this.ui.hiddenInputCountry && (this.ui.hiddenInputCountry.value = this.selectedCountryData.iso2 || "")
              };
              (r = this.ui.telInput.form) == null || r.addEventListener("submit", i, {
                signal: this.abortController.signal
              })
            }
            _initDropdownListeners() {
              const i = this.abortController.signal,
                r = f => {
                  this.ui.dropdownContent.classList.contains(L.HIDE) ? this.ui.telInput.focus() : f.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", r, {
                signal: i
              });
              const l = () => {
                this.ui.dropdownContent.classList.contains(L.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", l, {
                signal: i
              });
              const m = f => {
                this.ui.dropdownContent.classList.contains(L.HIDE) && [H.ARROW_UP, H.ARROW_DOWN, H.SPACE, H.ENTER].includes(f.key) && (f.preventDefault(), f.stopPropagation(), this._openDropdown()), f.key === H.TAB && this._closeDropdown()
              };
              this.ui.countryContainer.addEventListener("keydown", m, {
                signal: i
              })
            }
            _initRequests() {
              const {
                loadUtils: i,
                initialCountry: r,
                geoIpLookup: s
              } = this.options;
              if (i && !w.utils) {
                const m = () => {
                  var f;
                  (f = w.attachUtils(i)) == null || f.catch(() => {})
                };
                if (w.documentReady()) m();
                else {
                  const f = () => {
                    m()
                  };
                  window.addEventListener("load", f, {
                    signal: this.abortController.signal
                  })
                }
              } else this.resolveUtilsScriptPromise();
              r === At.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              w.autoCountry ? this.handleAutoCountry() : w.startedLoadingAutoCountry || (w.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((i = "") => {
                const r = i.toLowerCase();
                G(r) ? (w.autoCountry = r, setTimeout(() => nt("handleAutoCountry"))) : (this._setInitialState(!0), nt("rejectAutoCountryPromise"))
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
                strictMode: i,
                formatAsYouType: r,
                separateDialCode: s,
                allowDropdown: l,
                countrySearch: m
              } = this.options;
              let f = !1;
              mt.ALPHA_UNICODE.test(this._getTelInputValue()) && (f = !0);
              const v = p => {
                const P = this._getTelInputValue();
                if (this.isAndroid && (p == null ? void 0 : p.data) === "+" && s && l && m) {
                  const q = this.ui.telInput.selectionStart || 0,
                    _t = P.substring(0, q - 1),
                    rt = P.substring(q);
                  this._setTelInputValue(_t + rt), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(P) && this._triggerCountryChange();
                const z = (p == null ? void 0 : p.data) && mt.NON_PLUS_NUMERIC.test(p.data),
                  gt = (p == null ? void 0 : p.inputType) === M.PASTE && P;
                z || gt && !i ? f = !0 : mt.NON_PLUS_NUMERIC.test(P) || (f = !1);
                const dt = (p == null ? void 0 : p.detail) && p.detail.isSetNumber,
                  K = this.userNumeralSet === "ascii";
                if (r && !f && !dt && K) {
                  const q = this.ui.telInput.selectionStart || 0,
                    rt = P.substring(0, q).replace(mt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (p == null ? void 0 : p.inputType) === M.DELETE_FWD,
                    st = this._getFullNumber(),
                    Gt = Ae(st, P, w.utils, this.selectedCountryData, this.options.separateDialCode),
                    Vt = Ne(rt, Gt, q, ht);
                  this._setTelInputValue(Gt), this.ui.telInput.setSelectionRange(Vt, Vt)
                }
              };
              this.ui.telInput.addEventListener("input", v, {
                signal: this.abortController.signal
              })
            }
            _maybeBindKeydownListener() {
              const {
                strictMode: i,
                separateDialCode: r,
                allowDropdown: s,
                countrySearch: l
              } = this.options;
              if (i || r) {
                const m = f => {
                  if (f.key && f.key.length === 1 && !f.altKey && !f.ctrlKey && !f.metaKey) {
                    if (r && s && l && f.key === "+") {
                      f.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (i) {
                      const v = this._getTelInputValue(),
                        P = !v.startsWith("+") && this.ui.telInput.selectionStart === 0 && f.key === "+",
                        z = this._normaliseNumerals(f.key),
                        gt = /^[0-9]$/.test(z),
                        dt = r ? gt : P || gt,
                        K = this.ui.telInput,
                        q = K.selectionStart,
                        _t = K.selectionEnd,
                        rt = v.slice(0, q),
                        ht = v.slice(_t),
                        st = rt + f.key + ht,
                        Gt = this._getFullNumber(st),
                        Vt = w.utils.getCoreNumber(Gt, this.selectedCountryData.iso2),
                        Lt = this.maxCoreNumberLength && Vt.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Gt) !== null;
                      (!dt || Lt && !te && !P) && f.preventDefault()
                    }
                  }
                };
                this.ui.telInput.addEventListener("keydown", m, {
                  signal: this.abortController.signal
                })
              }
            }
            _maybeBindPasteListener() {
              if (this.options.strictMode) {
                const i = r => {
                  r.preventDefault();
                  const s = this.ui.telInput,
                    l = s.selectionStart,
                    m = s.selectionEnd,
                    f = this._getTelInputValue(),
                    v = f.slice(0, l),
                    p = f.slice(m),
                    P = this.selectedCountryData.iso2,
                    z = r.clipboardData.getData("text"),
                    gt = this._normaliseNumerals(z),
                    dt = l === 0 && m > 0,
                    K = !f.startsWith("+") || dt,
                    q = gt.replace(mt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    _t = q.startsWith("+"),
                    rt = q.replace(/\+/g, ""),
                    ht = _t && K ? `+${rt}` : rt;
                  let st = v + ht + p;
                  if (st.length > 5) {
                    let Vt = w.utils.getCoreNumber(st, P);
                    for (; Vt.length === 0 && st.length > 0;) st = st.slice(0, -1), Vt = w.utils.getCoreNumber(st, P);
                    if (!Vt) return;
                    if (this.maxCoreNumberLength && Vt.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === f.length) {
                        const Lt = Vt.length - this.maxCoreNumberLength;
                        st = st.slice(0, st.length - Lt)
                      } else return
                  }
                  this._setTelInputValue(st);
                  const Gt = l + ht.length;
                  s.setSelectionRange(Gt, Gt), s.dispatchEvent(new InputEvent("input", {
                    bubbles: !0
                  }))
                };
                this.ui.telInput.addEventListener("paste", i, {
                  signal: this.abortController.signal
                })
              }
            }
            _cap(i) {
              const r = Number(this.ui.telInput.getAttribute("maxlength"));
              return r && i.length > r ? i.substring(0, r) : i
            }
            _trigger(i, r = {}) {
              const s = new CustomEvent(i, {
                bubbles: !0,
                cancelable: !0,
                detail: r
              });
              this.ui.telInput.dispatchEvent(s)
            }
            _openDropdown() {
              const {
                fixDropdownWidth: i,
                countrySearch: r
              } = this.options;
              if (this.dropdownAbortController = new AbortController, i && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(L.HIDE), this.ui.selectedCountry.setAttribute(lt.EXPANDED, "true"), this._setDropdownPosition(), r) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(L.ARROW_UP), this._trigger(U.OPEN_COUNTRY_DROPDOWN)
            }
            _setDropdownPosition() {
              if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.ui.dropdown), !this.options.useFullscreenPopup) {
                const i = this.ui.telInput.getBoundingClientRect(),
                  r = this.ui.telInput.offsetHeight;
                if (this.options.dropdownContainer) {
                  this.ui.dropdown.style.top = `${i.top+r}px`, this.ui.dropdown.style.left = `${i.left}px`;
                  const s = () => this._closeDropdown();
                  window.addEventListener("scroll", s, {
                    signal: this.dropdownAbortController.signal
                  })
                }
              }
            }
            _bindDropdownListeners() {
              const i = this.dropdownAbortController.signal;
              this._bindDropdownMouseoverListener(i), this._bindDropdownCountryClickListener(i), this._bindDropdownClickOffListener(i), this._bindDropdownKeydownListener(i), this.options.countrySearch && this._bindDropdownSearchListeners(i)
            }
            _bindDropdownMouseoverListener(i) {
              const r = s => {
                var m;
                const l = (m = s.target) == null ? void 0 : m.closest(`.${L.COUNTRY_ITEM}`);
                l && this.ui.highlightListItem(l, !1)
              };
              this.ui.countryList.addEventListener("mouseover", r, {
                signal: i
              })
            }
            _bindDropdownCountryClickListener(i) {
              const r = s => {
                var m;
                const l = (m = s.target) == null ? void 0 : m.closest(`.${L.COUNTRY_ITEM}`);
                l && this._selectListItem(l)
              };
              this.ui.countryList.addEventListener("click", r, {
                signal: i
              })
            }
            _bindDropdownClickOffListener(i) {
              const r = s => {
                !!s.target.closest(`#iti-${this.id}__dropdown-content`) || this._closeDropdown()
              };
              setTimeout(() => {
                document.documentElement.addEventListener("click", r, {
                  signal: i
                })
              }, 0)
            }
            _bindDropdownKeydownListener(i) {
              let r = "",
                s = null;
              const l = m => {
                [H.ARROW_UP, H.ARROW_DOWN, H.ENTER, H.ESC].includes(m.key) && (m.preventDefault(), m.stopPropagation(), m.key === H.ARROW_UP || m.key === H.ARROW_DOWN ? this._handleUpDownKey(m.key) : m.key === H.ENTER ? this._handleEnterKey() : m.key === H.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && mt.HIDDEN_SEARCH_CHAR.test(m.key) && (m.stopPropagation(), s && clearTimeout(s), r += m.key.toLowerCase(), this._searchForCountry(r), s = setTimeout(() => {
                  r = ""
                }, wt.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", l, {
                signal: i
              })
            }
            _bindDropdownSearchListeners(i) {
              const r = () => {
                const f = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(f), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(L.HIDE) : this.ui.searchClearButton.classList.add(L.HIDE)
              };
              let s = null;
              const l = () => {
                s && clearTimeout(s), s = setTimeout(() => {
                  r(), s = null
                }, 100)
              };
              this.ui.searchInput.addEventListener("input", l, {
                signal: i
              });
              const m = () => {
                this.ui.searchInput.value = "", this.ui.searchInput.focus(), r()
              };
              this.ui.searchClearButton.addEventListener("click", m, {
                signal: i
              })
            }
            _searchForCountry(i) {
              const r = Y(this.countries, i);
              if (r) {
                const s = r.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(i) {
              let r;
              i === "" ? r = this.countries : r = W(this.countries, i), this.ui.filterCountries(r)
            }
            _handleUpDownKey(i) {
              var s, l;
              let r = i === H.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (l = this.ui.highlightedItem) == null ? void 0 : l.nextElementSibling;
              !r && this.ui.countryList.childElementCount > 1 && (r = i === H.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), r && (this.ui.scrollTo(r), this.ui.highlightListItem(r, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(i) {
              let r = i;
              if (this.options.formatOnDisplay && w.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !r.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: l,
                    INTERNATIONAL: m
                  } = w.utils.numberFormat,
                  f = s ? l : m;
                r = w.utils.formatNumber(r, this.selectedCountryData.iso2, f)
              }
              r = this._beforeSetNumber(r), this._setTelInputValue(r)
            }
            _updateCountryFromNumber(i) {
              const r = this._getNewCountryFromNumber(i);
              return r !== null ? this._setCountry(r) : !1
            }
            _ensureHasDialCode(i) {
              const {
                dialCode: r,
                nationalPrefix: s
              } = this.selectedCountryData;
              if (i.startsWith("+") || !r) return i;
              const f = s && i.startsWith(s) && !this.options.separateDialCode ? i.substring(1) : i;
              return `+${r}${f}`
            }
            _getNewCountryFromNumber(i) {
              const r = i.indexOf("+");
              let s = r ? i.substring(r) : i;
              const l = this.selectedCountryData.iso2,
                m = this.selectedCountryData.dialCode;
              s = this._ensureHasDialCode(s);
              const f = this._getDialCode(s, !0),
                v = bt(s);
              if (f) {
                const p = bt(f),
                  P = this.dialCodeToIso2Map[p];
                if (P.length === 1) return P[0] === l ? null : P[0];
                if (!l && this.defaultCountry && P.includes(this.defaultCountry)) return this.defaultCountry;
                if (m === Q.NANP && ye(v)) return null;
                const {
                  areaCodes: gt,
                  priority: dt
                } = this.selectedCountryData;
                if (gt) {
                  const ht = gt.map(st => `${m}${st}`);
                  for (const st of ht)
                    if (v.startsWith(st)) return null
                }
                const q = gt && !(dt === 0) && v.length > p.length,
                  _t = l && P.includes(l) && !q,
                  rt = l === P[0];
                if (!_t && !rt) return P[0]
              } else if (s.startsWith("+") && v.length) {
                const p = this.selectedCountryData.dialCode || "";
                return p && p.startsWith(v) ? null : ""
              } else if ((!s || s === "+") && !l) return this.defaultCountry;
              return null
            }
            _setCountry(i) {
              const {
                separateDialCode: r,
                showFlags: s,
                i18n: l,
                allowDropdown: m
              } = this.options, f = this.selectedCountryData.iso2 || "";
              if (m && this.ui.updateSelectedItem(i), this.selectedCountryData = i ? this.countryByIso2.get(i) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const v = i && s ? `${L.FLAG} iti__${i}` : `${L.FLAG} ${L.GLOBE}`;
                let p, P;
                if (i) {
                  const {
                    name: z,
                    dialCode: gt
                  } = this.selectedCountryData;
                  P = z, p = l.selectedCountryAriaLabel.replace("${countryName}", z).replace("${dialCode}", `+${gt}`)
                } else P = l.noCountrySelected, p = l.noCountrySelected;
                this.ui.selectedCountryInner.className = v, this.ui.selectedCountry.setAttribute("title", P), this.ui.selectedCountry.setAttribute(lt.LABEL, p)
              }
              if (r) {
                const v = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                this.ui.selectedDialCode.textContent = v, this.ui.updateInputPadding()
              }
              return this._updatePlaceholder(), this._updateMaxLength(), f !== i
            }
            _updateMaxLength() {
              const {
                strictMode: i,
                placeholderNumberType: r,
                validationNumberTypes: s
              } = this.options, {
                iso2: l
              } = this.selectedCountryData;
              if (i && w.utils)
                if (l) {
                  const m = w.utils.numberType[r];
                  let f = w.utils.getExampleNumber(l, !1, m, !0),
                    v = f;
                  for (; w.utils.isPossibleNumber(f, l, s);) v = f, f += "0";
                  const p = w.utils.getCoreNumber(v, l);
                  this.maxCoreNumberLength = p.length, l === "by" && (this.maxCoreNumberLength = p.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: i,
                placeholderNumberType: r,
                nationalMode: s,
                customPlaceholder: l
              } = this.options, m = i === It.AGGRESSIVE || !this.ui.hadInitialPlaceholder && i === It.POLITE;
              if (w.utils && m) {
                const f = w.utils.numberType[r];
                let v = this.selectedCountryData.iso2 ? w.utils.getExampleNumber(this.selectedCountryData.iso2, s, f) : "";
                v = this._beforeSetNumber(v), typeof l == "function" && (v = l(v, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", v)
              }
            }
            _selectListItem(i) {
              const r = i.dataset[ne.COUNTRY_CODE],
                s = this._setCountry(r);
              this._closeDropdown();
              const l = i.dataset[ne.DIAL_CODE];
              if (this._updateDialCode(l), this.options.formatOnDisplay) {
                const m = this._getTelInputValue();
                this._updateValFromNumber(m)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(L.HIDE) || (this.ui.dropdownContent.classList.add(L.HIDE), this.ui.selectedCountry.setAttribute(lt.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(lt.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(L.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(L.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(U.CLOSE_COUNTRY_DROPDOWN))
            }
            _updateDialCode(i) {
              const r = this._getTelInputValue(),
                s = `+${i}`;
              let l;
              if (r.startsWith("+")) {
                const m = this._getDialCode(r);
                m ? l = r.replace(m, s) : l = s, this._setTelInputValue(l)
              }
            }
            _getDialCode(i, r) {
              let s = "";
              if (i.startsWith("+")) {
                let l = "",
                  m = !1;
                for (let f = 0; f < i.length; f++) {
                  const v = i.charAt(f);
                  if (/[0-9]/.test(v)) {
                    if (l += v, !!!this.dialCodeToIso2Map[l]) break;
                    if (this.dialCodes.has(l)) {
                      if (s = i.substring(0, f + 1), m = !0, !r) break
                    } else r && m && (s = i.substring(0, f + 1));
                    if (l.length === this.dialCodeMaxLen) break
                  }
                }
              }
              return s
            }
            _getFullNumber(i) {
              const r = i ? this._normaliseNumerals(i) : this._getTelInputValue(),
                {
                  dialCode: s
                } = this.selectedCountryData;
              let l;
              const m = bt(r);
              return this.options.separateDialCode && !r.startsWith("+") && s && m ? l = `+${s}` : l = "", l + r
            }
            _beforeSetNumber(i) {
              const r = this._getDialCode(i),
                s = pe(i, r, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(U.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === At.AUTO && w.autoCountry && (this.defaultCountry = w.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(L.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (w.utils) {
                const i = this._getTelInputValue();
                i && this._updateValFromNumber(i), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), w.instances instanceof Map ? w.instances.delete(this.id) : delete w.instances[this.id])
            }
            getExtension() {
              return w.utils ? w.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(i) {
              if (w.utils) {
                const {
                  iso2: r
                } = this.selectedCountryData, s = this._getFullNumber(), l = w.utils.formatNumber(s, r, i);
                return this._mapAsciiToUserNumerals(l)
              }
              return ""
            }
            getNumberType() {
              return w.utils ? w.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : R.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (w.utils) {
                const {
                  iso2: i
                } = this.selectedCountryData;
                return w.utils.getValidationError(this._getFullNumber(), i)
              }
              return R.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: i,
                iso2: r
              } = this.selectedCountryData;
              if (i === Tt.DIAL_CODE && w.utils) {
                const s = this._getFullNumber(),
                  l = w.utils.getCoreNumber(s, r);
                if (l[0] === Tt.MOBILE_PREFIX && l.length !== Tt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(i) {
              return w.utils ? w.utils.isPossibleNumber(i, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(i) {
              if (!w.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const r = f => i ? this._utilsIsValidNumber(f) : this._utilsIsPossibleNumber(f),
                s = this._getFullNumber(),
                l = s.search(mt.ALPHA_UNICODE);
              if (l > -1 && !this.options.allowPhonewords) {
                const f = s.substring(0, l),
                  v = r(f),
                  p = r(s);
                return v && p
              }
              return r(s)
            }
            _utilsIsValidNumber(i) {
              return w.utils ? w.utils.isValidNumber(i, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(i) {
              const r = i == null ? void 0 : i.toLowerCase();
              if (!G(r)) throw new Error(`Invalid country code: '${r}'`);
              const s = this.selectedCountryData.iso2;
              if (i && r !== s || !i && s) {
                if (this._setCountry(r), this._updateDialCode(this.selectedCountryData.dialCode), this.options.formatOnDisplay) {
                  const m = this._getTelInputValue();
                  this._updateValFromNumber(m)
                }
                this._triggerCountryChange()
              }
            }
            setNumber(i) {
              const r = this._normaliseNumerals(i),
                s = this._updateCountryFromNumber(r);
              this._updateValFromNumber(r), s && this._triggerCountryChange(), this._trigger(U.INPUT, {
                isSetNumber: !0
              })
            }
            setPlaceholderNumberType(i) {
              this.options.placeholderNumberType = i, this._updatePlaceholder()
            }
            setDisabled(i) {
              this.ui.telInput.disabled = i, i ? this.ui.selectedCountry.setAttribute("disabled", "true") : this.ui.selectedCountry.removeAttribute("disabled")
            }
          },
          ct = h => {
            if (!w.utils && !w.startedLoadingUtilsScript) {
              let i;
              if (typeof h == "function") try {
                i = Promise.resolve(h())
              } catch (r) {
                return Promise.reject(r)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof h}`));
              return w.startedLoadingUtilsScript = !0, i.then(r => {
                const s = r == null ? void 0 : r.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return w.utils = s, nt("handleUtils"), !0
              }).catch(r => {
                throw nt("rejectUtilsScriptPromise", r), r
              })
            }
            return null
          },
          nt = (h, ...i) => {
            Object.values(w.instances).forEach(r => {
              const s = r[h];
              typeof s == "function" && s.apply(r, i)
            })
          },
          w = Object.assign((h, i) => {
            const r = new ot(h, i);
            return w.instances[r.id] = r, h.iti = r, r
          }, {
            defaults: pt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => T,
            getInstance: h => {
              const i = h.dataset.intlTelInputId;
              return i ? w.instances[i] : null
            },
            instances: {},
            attachUtils: ct,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Pt = w;
        return S(E)
      })();
      return t.default
    })
  })(bn)), bn.exports
}
var ul = ll();
const cl = er(ul);
var dl = ft('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  ei = ft('<span class="w-8"> </span>'),
  ni = ft('<span class="loading loading-spinner center-absolute absolute"></span>'),
  hl = ft('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  fl = ft('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  ml = ft('<div class="flex h-full w-full flex-col items-center"><!></div>');

function pl(e, t) {
  Yt(t, !0);
  let n = j(t, "verifyingPhone", 15, ""),
    a = et(!0),
    c = et(0),
    d = et(!1);
  const u = O(() => o(c) > 0 || o(d));
  let _ = et(!1),
    S = et(""),
    E = et(void 0);
  const g = O(() => {
    var b;
    return `phone:${(b=Ce.data)==null?void 0:b.id}`
  });
  Ot(() => {
    const b = localStorage.getItem(o(g));
    b && n(b)
  }), me(() => {
    gn.getOtpCooldown().then(U => {
      I(c, U.cooldownMs, !0)
    }).catch(U => {
      be.error(U.message)
    }).finally(() => {
      I(a, !1)
    });
    const b = 1e3,
      x = setInterval(() => {
        I(c, Math.max(0, o(c) - b), !0)
      }, b);
    return () => {
      clearInterval(x)
    }
  });
  async function C(b) {
    try {
      I(d, !0);
      const x = await gn.sendOtp(b),
        U = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      be.info(Cs({
        channel: U[x.channel],
        phone: x.phone
      }), {
        duration: 15e3
      }), n(x.phone), I(c, x.cooldownMs, !0), localStorage.setItem(o(g), n())
    } catch (x) {
      be.error(x.message)
    } finally {
      I(d, !1)
    }
  }
  Ot(() => {
    o(S).length === 6 && (I(_, !0), (async () => {
      try {
        await gn.verifyChallenge({
          type: "otp",
          code: o(S)
        }), be.success(Io()), localStorage.removeItem(o(g)), t.onsuccess(n())
      } catch (b) {
        be.error(b.message)
      } finally {
        I(S, ""), I(_, !1)
      }
    })())
  });
  var T = ml(),
    k = it(T);
  {
    var y = b => {
        var x = dl();
        A(b, x)
      },
      B = b => {
        var x = hl(),
          U = X(x),
          L = it(U),
          H = it(L),
          M = it(H, !0);
        $(H);
        var mt = St(H, 2),
          wt = it(mt, !0);
        $(mt), $(L);
        var R = St(L, 2),
          V = it(R);
        vi(V, () => Z => {
          var pt, yt;
          return I(E, cl(Z, {
            strictMode: !0,
            initialCountry: ((yt = (pt = Ce.data) == null ? void 0 : pt.country) == null ? void 0 : yt.toLocaleLowerCase()) ?? "br",
            loadUtils: () => lr(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: document.body
          })), () => {
            var bt;
            (bt = o(E)) == null || bt.destroy()
          }
        });
        var Q = St(V, 2),
          Tt = it(Q),
          Dt = St(Tt);
        {
          var It = Z => {
            var pt = ei(),
              yt = it(pt);
            $(pt), Nt(bt => Ut(yt, `(${bt??""})`), [() => qn(o(c))]), A(Z, pt)
          };
          at(Dt, Z => {
            o(c) > 0 && Z(It)
          })
        }
        var At = St(Dt, 2);
        {
          var ne = Z => {
            var pt = ni();
            A(Z, pt)
          };
          at(At, Z => {
            o(d) && Z(ne)
          })
        }
        $(Q), $(R), $(U);
        var lt = St(U, 2),
          zt = it(lt, !0);
        $(lt), Nt((Z, pt, yt, bt) => {
          Ut(M, Z), Ut(wt, pt), Q.disabled = o(u), Ut(Tt, `${yt??""} `), Ut(zt, bt)
        }, [() => cr(), () => uo(), () => Xo(), () => Qr()]), hn("submit", R, async () => {
          var pt;
          if (o(u)) return;
          if (!((pt = o(E)) != null && pt.isValidNumber())) {
            be.error(Br());
            return
          }
          const Z = o(E).getNumber();
          await C(Z)
        }), A(b, x)
      },
      D = b => {
        var x = fl(),
          U = X(x),
          L = it(U),
          H = it(L, !0);
        $(L);
        var M = St(L, 2),
          mt = it(M, !0);
        $(M), $(U);
        var wt = St(U, 2),
          R = it(wt);
        {
          const Z = (pt, yt) => {
            let bt = () => yt == null ? void 0 : yt().cells;
            var ie = tt(),
              W = X(ie);
            Jt(W, () => Pa, (Y, Et) => {
              Et(Y, {
                class: "border-primary",
                children: (ut, Wt) => {
                  var $t = tt(),
                    ve = X($t);
                  nn(ve, 16, bt, re => re, (re, jt) => {
                    var Ft = tt(),
                      kt = X(Ft);
                    Jt(kt, () => ol, (J, pe) => {
                      pe(J, {
                        get cell() {
                          return jt
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), A(re, Ft)
                  }), A(ut, $t)
                },
                $$slots: {
                  default: !0
                }
              })
            }), A(pt, ie)
          };
          Jt(R, () => al, (pt, yt) => {
            yt(pt, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return o(_)
              },
              get value() {
                return o(S)
              },
              set value(bt) {
                I(S, bt, !0)
              },
              children: Z,
              $$slots: {
                default: !0
              }
            })
          })
        }
        $(wt);
        var V = St(wt, 2),
          Q = it(V),
          Tt = it(Q),
          Dt = St(Tt);
        {
          var It = Z => {
            var pt = ei(),
              yt = it(pt);
            $(pt), Nt(bt => Ut(yt, `(${bt??""})`), [() => qn(o(c))]), A(Z, pt)
          };
          at(Dt, Z => {
            o(c) > 0 && Z(It)
          })
        }
        var At = St(Dt, 2);
        {
          var ne = Z => {
            var pt = ni();
            A(Z, pt)
          };
          at(At, Z => {
            o(d) && Z(ne)
          })
        }
        $(Q);
        var lt = St(Q, 2),
          zt = it(lt, !0);
        $(lt), $(V), Nt((Z, pt, yt, bt) => {
          Ut(H, Z), Ut(mt, pt), Q.disabled = o(u), Ut(Tt, `${yt??""} `), Ut(zt, bt)
        }, [() => Er(), () => ls({
          phone: n()
        }), () => Mo(), () => Rs()]), se("click", Q, async () => {
          await C(n())
        }), se("click", lt, () => {
          n("")
        }), A(b, x)
      };
    at(k, b => {
      o(a) ? b(y) : n() ? b(D, -1) : b(B, 1)
    })
  }
  $(T), A(e, T), Xt()
}
fn(["click"]);
let Oe = et(!1);
var gl = ft("<div></div>"),
  _l = ft('<button type="button" class="btn">Retry</button>'),
  vl = ft('<span class="loading loading-spinner loading-lg"></span>'),
  yl = ft("<div><!></div>");

function bl(e, t) {
  Yt(t, !0);
  let n = j(t, "widgetId", 15),
    a = j(t, "appearance", 3, "always"),
    c = j(t, "language", 3, "auto"),
    d = j(t, "execution", 3, "render"),
    u = j(t, "retryInterval", 3, 8e3),
    _ = j(t, "retry", 3, "auto"),
    S = j(t, "refreshExpired", 3, "auto"),
    E = j(t, "theme", 3, "auto"),
    g = j(t, "size", 3, "normal"),
    C = j(t, "tabIndex", 3, 0);
  j(t, "reset", 15)(() => {
    var R;
    n() && ((R = window == null ? void 0 : window.turnstile) == null || R.reset(n()))
  });
  const k = O(() => ({
      sitekey: t.siteKey,
      callback: (R, V) => {
        var Q;
        (Q = t.callback) == null || Q.call(t, R, V)
      },
      "error-callback": R => {
        var V;
        (V = t.errorCallback) == null || V.call(t, R)
      },
      "timeout-callback": () => {
        var R;
        (R = t.timeoutCallback) == null || R.call(t)
      },
      "expired-callback": () => {
        var R;
        (R = t.expiredCallback) == null || R.call(t)
      },
      "before-interactive-callback": () => {
        var R;
        (R = t.beforeInteractiveCallback) == null || R.call(t)
      },
      "after-interactive-callback": () => {
        var R;
        (R = t.afterInteractiveCallback) == null || R.call(t)
      },
      "unsupported-callback": () => {
        var R;
        return (R = t.unsupportedCallback) == null ? void 0 : R.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? "cf-turnstile-response",
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": S(),
      "retry-interval": u(),
      tabindex: C(),
      appearance: a(),
      execution: d(),
      language: c(),
      action: t.action,
      retry: _(),
      theme: E(),
      cData: t.cData,
      size: g()
    })),
    y = (R, V) => {
      let Q = window.turnstile.render(R, V);
      return n(Q), {
        destroy() {
          window.turnstile.remove(Q)
        },
        update(Tt) {
          window.turnstile.remove(Q), Q = window.turnstile.render(R, Tt), n(Q)
        }
      }
    };
  let B = et(!1),
    D = et(!1),
    b;

  function x() {
    const R = document.createElement("script");
    R.type = "text/javascript", R.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", R.async = !0, R.addEventListener("load", () => I(Oe, !0), {
      once: !0
    }), document.head.appendChild(R)
  }

  function U() {
    I(D, !1), b && clearTimeout(b), b = setTimeout(() => {
      (!o(Oe) || !o(B)) && I(D, !0)
    }, 5e3)
  }

  function L() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(R => R.remove()), I(Oe, !1), x(), U()
  }
  me(() => (I(B, !0), o(Oe) || x(), U(), () => {
    I(B, !1), b && clearTimeout(b)
  }));
  var H = tt(),
    M = X(H);
  {
    var mt = R => {
        var V = gl();
        let Q;
        _i(V, (Tt, Dt) => y == null ? void 0 : y(Tt, Dt), () => o(k)), Nt(() => Q = Zt(V, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", Q, {
          flexible: g() == "flexible"
        })), A(R, V)
      },
      wt = R => {
        var V = yl(),
          Q = it(V);
        {
          var Tt = It => {
              var At = _l();
              se("click", At, L), A(It, At)
            },
            Dt = It => {
              var At = vl();
              A(It, At)
            };
          at(Q, It => {
            o(D) ? It(Tt) : It(Dt, -1)
          })
        }
        $(V), Nt(() => Zt(V, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), A(R, V)
      };
    at(M, R => {
      o(Oe) && o(B) ? R(mt) : R(wt, -1)
    })
  }
  A(e, H), Xt()
}
fn(["click"]);
var Cl = ft('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function wl(e, t) {
  Yt(t, !0);
  const n = O(() => _n.current !== null),
    a = O(() => {
      var C;
      return (C = _n.current) == null ? void 0 : C.tier
    });
  let c = et("");
  var d = Cl(),
    u = it(d);
  let _;
  var S = it(u),
    E = it(S);
  {
    var g = C => {
      var T = tt(),
        k = X(T);
      or(k, () => _n.errorCount, y => {
        var B = tt(),
          D = X(B);
        {
          var b = L => {
              {
                let H = O(() => zi.trim());
                bl(L, {
                  get siteKey() {
                    return o(H)
                  },
                  callback: M => Xn(M),
                  errorCallback: () => Yn()
                })
              }
            },
            x = L => {
              {
                let H = O(() => Gi.trim());
                Aa(L, {
                  get siteKey() {
                    return o(H)
                  },
                  callback: M => Xn(M),
                  errorCallback: () => Yn()
                })
              }
            },
            U = L => {
              pl(L, {
                onsuccess: () => Vi(),
                get verifyingPhone() {
                  return o(c)
                },
                set verifyingPhone(H) {
                  I(c, H, !0)
                }
              })
            };
          at(D, L => {
            o(a) === 2 ? L(b) : o(a) === 3 ? L(x, 1) : o(a) === 4 && L(U, 2)
          })
        }
        A(y, B)
      }), A(C, T)
    };
    at(E, C => {
      o(n) && C(g)
    })
  }
  $(S), $(u), gi(2), $(d), vi(d, () => C => {
    Ot(() => {
      o(n) ? C.show() : C.close()
    })
  }), Nt(() => _ = Zt(u, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, _, {
    "h-84": o(a) === 4 && !o(c)
  })), hn("close", d, () => Fi()), A(e, d), Xt()
}
const Il = "client_timeout",
  El = "network_connection",
  Tl = "network_abort",
  rn = "csp_block",
  on = "invalid_endpoint",
  Nn = "handle_agent_data",
  we = "script_load_fail",
  Dl = "bad_response_format",
  Ln = "api_key_missing",
  Pn = "api_key_invalid",
  xl = "cache_misconfigured",
  kn = "endpoints_misconfigured",
  Sl = "wrong_worker_option",
  Al = "worker_initialization_failed",
  Nl = "sandboxed_iframe",
  Ue = "bundle_not_defined",
  ce = {
    [Il]: "Client timeout",
    [El]: "Network connection error",
    [Tl]: "Network request aborted",
    [rn]: "Blocked by CSP",
    [on]: 'The provided endpoint in "endpoints" parameter is not a valid URL',
    [Nn]: "Handle on demand agent data error",
    [we]: "Failed to load the JS script of the agent",
    [Ue]: "9319",
    [Dl]: "Can't parse the backend response. Make sure the proper endpoints are used.",
    [Ln]: "The `apiKey` option is not provided",
    [Pn]: "The `apiKey` option is not a string",
    [xl]: "The `cache` option is misconfigured",
    [kn]: "The `endpoints` option is misconfigured",
    [Sl]: "Wrong `worker` option, it should be a Worker instance",
    [Al]: "Web Worker initialization failed",
    [Nl]: "Running inside sandboxed iframes is not supported"
  };
class ee extends Error {
  constructor(t, n) {
    super(t), this.name = "FingerprintError", this.event_id = null, this.code = n
  }
}

function Ll(e) {
  const t = (function(a) {
    const c = atob(a),
      d = c.length,
      u = new Uint8Array(d);
    for (let _ = 0; _ < d; _++) u[_] = c.charCodeAt(_);
    return u
  })(e);
  let n = t;
  try {
    n = (function(a, c, d) {
      const u = () => {
          throw new Error("Invalid data")
        },
        _ = sn(a);
      _.length < c.length + 2 && u();
      for (let y = 0; y < c.length; ++y) mi(_[1 + y], _[0]) !== c[y] && u();
      const S = 1 + c.length,
        E = mi(_[S], _[0]);
      _.length < S + 1 + E + d && u();
      const g = S + 1 + E,
        C = g + d,
        T = new ArrayBuffer(_.length - C),
        k = new Uint8Array(T);
      for (let y = 0; y < k.length; ++y) k[y] = _[C + y] ^ _[g + y % d];
      return T
    })(t, hu, fu)
  } catch {}
  try {
    return (function(a) {
      const c = {
          len: 0,
          arr: new Uint8Array(128)
        },
        d = sn(a);
      let u = 0;
      const _ = () => (T(), d[u] === In ? S() : ii(d[u]) ? E() : k(ci) ? (u += ci.length, null) : k(di) ? (u += di.length, !0) : k(hi) ? (u += hi.length, !1) : d[u] === ru ? g() : d[u] === su ? C() : y()),
        S = () => {
          for (c.len = 0; u++, d[u] !== In;) {
            if (d[u] === $l) {
              if (u++, d[u] === Wn) {
                const b = parseInt(wn(d.subarray(u + 1, u + 5)), 16);
                mu(c, xi(String.fromCharCode(b))), u += 4;
                continue
              }
              const D = uu[d[u]];
              if (D) {
                ri(c, D);
                continue
              }
              return y()
            }
            if (d[u] === void 0) return y();
            ri(c, d[u])
          }
          return u++, wn((function(D) {
            return D.arr.subarray(0, D.len)
          })(c))
        },
        E = () => {
          const D = u;
          for (; d[u] === iu || d[u] === Hn || d[u] === tu || d[u] === eu || ii(d[u]);) u++;
          return Number(wn(d.subarray(D, u)))
        },
        g = () => {
          const D = [];
          for (u++;;) {
            if (T(), d[u] === ou) {
              u++;
              break
            }
            if (D.length) {
              if (d[u] !== li) return y();
              u++
            }
            D.push(_())
          }
          return D
        },
        C = () => {
          const D = {};
          let b = !0;
          for (u++;;) {
            if (T(), d[u] === au) {
              u++;
              break
            }
            if (!b) {
              if (d[u] !== li) return y();
              u++, T()
            }
            if (d[u] !== In) return y();
            const x = S();
            if (T(), d[u] !== Yl) return y();
            u++, Object.defineProperty(D, x, {
              value: _(),
              configurable: !0,
              enumerable: !0,
              writable: !0
            }), b = !1
          }
          return D
        },
        T = () => {
          for (; d[u] === Xl || d[u] === Jl || d[u] === Zl || d[u] === Ql;) u++
        },
        k = D => {
          for (let b = 0; b < D.length; b++)
            if (d[u + b] !== D[b]) return !1;
          return !0
        },
        y = () => {
          throw new SyntaxError("Unexpected " + (u < d.length ? `byte ${u}` : "end"))
        },
        B = _();
      return T(), d[u] !== void 0 && y(), B
    })(n)
  } catch {}
  return null
}

function ii(e) {
  return e >= ui && e < ui + 10 || e === nu
}

function Pl(e, t) {
  if (e.length === 0) return Promise.reject(new TypeError("The list of script URL patterns is empty"));
  const n = [],
    a = (function(c, d, u, _, S = {}) {
      const {
        maxAttemptCount: E = 5,
        backoffBase: g = 200,
        backoffCap: C = 1e4,
        abort: T
      } = S, k = {
        failedAttempts: []
      }, [y, B] = (function(x, U, L, H) {
        const M = (function(R) {
            const V = [...R];
            return {
              current: () => V[0],
              postpone() {
                const Q = V.shift();
                Q !== void 0 && V.push(Q)
              },
              exclude() {
                V.shift()
              }
            }
          })(x),
          mt = (function(R, V) {
            let Q = 0;
            return () => Math.random() * Math.min(V, R * Math.pow(2, Q++))
          })(L, H),
          wt = new Set;
        return [M.current(), (R, V, Q) => {
          const Tt = U(R, V, Q);
          Tt.action === "exclude" ? M.exclude() : M.postpone();
          const Dt = () => Math.max(0, R.getTime() + mt() - Date.now());
          let It;
          It = typeof Tt.delay == "number" ? Tt.delay : Dt();
          const At = M.current();
          return It === 0 && At && Date.now() - R.getTime() < 50 && (wt.has(At) ? It = Dt() : wt.add(At)), At === void 0 ? void 0 : [At, It]
        }]
      })(c, _, g, C), D = (b = [T == null ? void 0 : T.then(x => k.aborted = {
        resolve: !0,
        value: x
      }, x => k.aborted = {
        resolve: !1,
        error: x
      }), du(y, E, d, u, B, k, T)], Promise.race(b.filter(x => !!x))).then(() => k);
      var b;
      return {
        then: D.then.bind(D),
        current: k
      }
    })(e, async c => {
      const d = new Date;
      try {
        const u = await t(c);
        return n.push({
          url: c,
          startedAt: d,
          finishedAt: new Date,
          error: void 0
        }), u
      } catch (u) {
        throw n.push({
          url: c,
          startedAt: d,
          finishedAt: new Date,
          error: u
        }), u
      }
    }, c => ({
      result: c
    }), Fl, {
      maxAttemptCount: 5,
      backoffBase: 100,
      backoffCap: 3e3
    });
  return new Promise((c, d) => {
    Promise.resolve(a).then(u => {
      if (u.result !== void 0) c([u.result, n]);
      else {
        const _ = u.failedAttempts[0];
        d(_ ? _.error : new Error("No attempts were made"))
      }
    }).catch(d)
  })
}

function kl(e) {
  return {
    __type__: Si,
    value: e
  }
}

function Rl(e) {
  return (function(t) {
    const n = sn(t);
    Cn = Cn || (function() {
      let c;
      const d = new Uint32Array(256);
      for (let u = 0; u < 256; u++) {
        c = u;
        for (let _ = 0; _ < 8; _++) c = 1 & c ? 3988292384 ^ c >>> 1 : c >>> 1;
        d[u] = c
      }
      return d
    })();
    let a = -1;
    for (let c = 0; c < n.length; c++) a = a >>> 8 ^ Cn[255 & (a ^ n[c])];
    return (-1 ^ a) >>> 0
  })(xi(e))
}
let Cn;

function Ol(e, t) {
  return new Promise(n => (function(a, c, ...d) {
    const u = Date.now() + c;
    let _ = 0;
    const S = () => {
      _ = setTimeout(() => {
        Date.now() < u ? S() : a(...d)
      }, u - Date.now())
    };
    return S(), () => clearTimeout(_)
  })(n, e, t))
}

function Ml(e) {
  return e !== null && typeof e == "object" && "name" in e && e.name === "FingerprintError" && "code" in e
}

function ri(e, t) {
  Li(e, e.len + 1), e.arr[e.len++] = t
}
const Bl = Array.isArray;

function sn(e) {
  return e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}

function Ul({
  level: e,
  message: t
}) {
  e === "error" ? console.error(t) : e === "warning" ? console.warn(t) : console.log(t)
}

function xi(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    if (a > 127) return new TextEncoder().encode(e);
    t[n] = a
  }
  return t
}
const Si = "withoutDefault",
  Hl = "_vid_";

function Ai(e) {
  return e instanceof Error && e.name === "TypeError"
}

function wn(e) {
  if (typeof TextDecoder == "function") {
    const n = new TextDecoder().decode(e);
    if (n) return n
  }
  const t = sn(e);
  return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}

function Wl(e = Vl) {
  return function(t) {
    let n, a;
    const {
      picked: c,
      rest: d
    } = (function(y, B) {
      const D = {},
        b = {};
      for (const [x, U] of Object.entries(y)) B.includes(x) ? D[x] = U : b[x] = U;
      return {
        picked: D,
        rest: b
      }
    })(t, ["apiKey"]), {
      apiKey: u
    } = c;
    if (!u) throw new ee(ce[Ln], Ln);
    if (typeof u != "string") throw new ee(ce[Pn], Pn);
    const _ = (function(y, B) {
      return Object.prototype.hasOwnProperty.call(y, B)
    })(S = t, E = "endpoints") ? S[E] : void 0;
    var S, E;
    const g = (function(y, B, D) {
        const b = y.prepareScriptEndpoints(B, "https://fpnpmcdn.net/");
        if (b === null) throw new ee(ce[kn], kn);
        return b.map(x => (function(U, L) {
          const H = new URL(U, window.location.href),
            M = H.pathname,
            mt = "4";
          return H.pathname = `${M}${M.endsWith("/")?"":"/"}v${mt}/${encodeURIComponent(L)}`, H.search = `?ci=jsl/${encodeURIComponent(jl)}`, H.href
        })(x, D))
      })(e, _, u),
      [C, T] = (function() {
        const y = [],
          B = () => {
            y.push({
              time: new Date,
              state: document.visibilityState
            })
          },
          D = (b = document, x = "visibilitychange", U = B, b.addEventListener(x, U, L), () => b.removeEventListener(x, U, L));
        var b, x, U, L;
        return B(), [y, D]
      })(),
      k = (async function() {
        try {
          const [y, B] = await Pl(g, b => (function(x, U) {
            return x.withCspViolationWatch(U, async () => {
              if ((function(L) {
                  if (URL.prototype) try {
                    return new URL(L, location.href), !1
                  } catch (H) {
                    if (Ai(H)) return !0;
                    throw H
                  }
                })(U)) throw new ee(ce[on], on);
              try {
                return await import(U)
              } catch {
                throw new ee(ce[we], we)
              }
            }, () => {
              throw new ee(ce[rn], rn)
            }).then(L => {
              if (typeof(L == null ? void 0 : L.start) != "function") throw new ee(ce[Ue], Ue);
              return L
            })
          })(e, b)), D = await y.start({
            ...d,
            ldi: {
              attempts: B,
              visibilityStates: C
            }
          });
          return n = D, D
        } catch (y) {
          throw a = (function(B) {
            return B instanceof ee && B.code === Ue ? new ee(ce[we], we) : B
          })(y), a
        } finally {
          T()
        }
      })();
    return {
      async get(y) {
        if (n) return n.get(y);
        if (a) throw a;
        return (await k).get(y)
      },
      async collect(y) {
        if (n) return n.collect(y);
        if (a) throw a;
        return (await k).collect(y)
      }
    }
  }
}

function oi(e, t, n, a) {
  Ni(() => {
    const c = `${e}=${t}`,
      d = `expires=${new Date(Date.now()+24*n*60*60*1e3).toUTCString()}`,
      u = a ? `domain=${a}` : "";
    document.cookie = [c, "path=/", d, u, "SameSite=Lax"].join("; ")
  }, void 0)
}

function si(e, t) {
  try {
    return new window.URL(e, window.location.href)
  } catch (n) {
    if (Ai(n)) return console.warn(`Ignoring an invalid '${t}' value: "${e}"`), null;
    throw n
  }
}

function ai(e) {
  const t = location.hostname,
    n = (function() {
      var a, c;
      const d = window;
      return ["buildID" in navigator, "MozAppearance" in ((c = (a = document.documentElement) === null || a === void 0 ? void 0 : a.style) !== null && c !== void 0 ? c : {}), "onmozfullscreenchange" in d, "mozInnerScreenX" in d, "CSSMozDocumentRule" in d, "CanvasCaptureMediaStream" in d].reduce((u, _) => u + (_ ? 1 : 0), 0) >= 4
    })();
  (function(a, c) {
    let d = a.length - (a.slice(-1) === "." ? 1 : 0);
    do
      if (d = d > 0 ? a.lastIndexOf(".", d - 1) : -1, c(a.slice(d + 1)) === !0) return !0; while (d >= 0);
    return !1
  })(t, a => {
    if (!n || !/^([^.]{1,3}\.)*[^.]+\.?$/.test(a) || a === t) return e(a)
  }) || e()
}
var jl = "4.1.1";

function Fl(e, t, n) {
  const a = n instanceof ee ? n.code : null;
  return a === rn || a === on ? {
    action: "exclude",
    delay: 0
  } : a === Ue ? {
    action: "exclude",
    delay: "backoff"
  } : a === we ? {
    action: "postpone",
    delay: Date.now() - e.getTime() < 50 ? 0 : "backoff"
  } : {
    action: "postpone",
    delay: "backoff"
  }
}
const Vl = {
    prepareScriptEndpoints: function(e, t) {
      return e === void 0 ? [t] : tn(e) ? (function(n, a) {
        let c, d = !1;
        Rn(n) ? (d = !0, c = $e(n.value)) : c = $e(n);
        const u = [];
        for (const _ of c) {
          const S = si(_, "endpoints");
          S && u.push(cu(S))
        }
        return d || u.push(a), u
      })(e, t) : (function(n) {
        if (!n || typeof n != "object") return !1;
        const a = n;
        return typeof a.__type__ == "string" && Rl(a.__type__) === 694409711 && (a.script === void 0 || tn(a.script)) && (a.helper === void 0 || tn(a.helper)) && (a.ingress === void 0 || tn(a.ingress))
      })(e) ? (function(n, a, c) {
        if (n === void 0) return [a];
        let d, u = !1;
        Rn(n) ? (u = !0, d = $e(n.value)) : d = $e(n);
        const _ = [];
        for (const S of d) {
          const E = si(S, c);
          E && _.push(E.href)
        }
        return u || _.push(a), _
      })(e.script, t, "script") : null
    },
    withCspViolationWatch: function(e, t, n, a) {
      const c = document,
        d = "securitypolicyviolation";
      let u;
      const _ = E => {
        const g = new URL(e, location.href),
          {
            blockedURI: C
          } = E;
        C !== g.href && C !== g.protocol.slice(0, -1) && C !== g.origin || (u = E, S())
      };
      c.addEventListener(d, _);
      const S = () => c.removeEventListener(d, _);
      return a == null || a.then(S, S), Promise.resolve().then(t).then(E => (S(), E), E => new Promise(g => {
        const C = new MessageChannel;
        C.port1.onmessage = () => g(), C.port2.postMessage(null)
      }).then(() => {
        if (S(), u) return n(u);
        throw E
      }))
    }
  },
  zl = Wl();

function Ni(e, t) {
  try {
    document.cookie
  } catch (n) {
    if ((function(a) {
        if (!(a instanceof DOMException)) return !1;
        const c = a.message;
        return Gl.test(c) || Kl.test(c) || ql.test(c)
      })(n)) return t;
    throw n
  }
  return e()
}

function $e(e) {
  return Bl(e) ? e : [e]
}
const Gl = /The document is sandboxed and lacks the 'allow-same-origin' flag/,
  Kl = /The operation is insecure/,
  ql = /Forbidden in a sandboxed document without the 'allow-same-origin' flag/;

function Rn(e) {
  return !!e && e.__type__ === Si
}

function tn(e) {
  return Rn(e) ? fi(e.value) : fi(e)
}
const In = 34,
  li = 44,
  Yl = 58,
  Xl = 32,
  Ql = 9,
  Zl = 13,
  Jl = 10,
  $l = 92,
  ui = 48,
  Hn = 101,
  Wn = 117,
  tu = 69,
  eu = 43,
  nu = 45,
  iu = 46,
  ru = 91,
  ou = 93,
  su = 123,
  au = 125,
  ci = new Uint8Array([110, Wn, 108, 108]),
  di = new Uint8Array([116, 114, Wn, Hn]),
  hi = new Uint8Array([102, 97, 108, 115, Hn]),
  lu = {
    '"': '"',
    "\\": "\\",
    "\b": "b",
    "\f": "f",
    "\n": "n",
    "\r": "r",
    "	": "t"
  },
  uu = (() => {
    const e = new Uint8Array(128);
    for (const [t, n] of Object.entries(lu)) e[n.charCodeAt(0)] = t.charCodeAt(0);
    return e
  })();

function cu(e) {
  return `${e.origin}${e.pathname.endsWith("/")?e.pathname:`${e.pathname}/`}web/`
}
async function du(e, t, n, a, c, d, u) {
  if (e === void 0) return;
  let _ = e;
  for (let S = 0; S < t; ++S) {
    const E = new Date;
    let g, C;
    try {
      g = await On(() => n(_, S, u), u)
    } catch (k) {
      C = k, d.failedAttempts.push({
        level: 0,
        endpoint: _,
        error: k
      })
    }
    if (g) {
      const k = a(g);
      if ("result" in k) {
        d.result = k.result;
        break
      }
      if (d.failedAttempts.push({
          level: 1,
          endpoint: _,
          error: k.error
        }), k.stop) break
    }
    const T = c(E, g, C);
    if (!T) break;
    await On(Ol(T[1]), u), _ = T[0]
  }
}

function Li(e, t) {
  if (e.arr.length < t) {
    const n = new Uint8Array(Math.max(2 * e.arr.length, t));
    n.set(e.arr), e.arr = n
  }
}

function En(e, t, ...n) {
  e && (async function(a, c) {
    try {
      return await a()
    } catch (d) {
      return console.error(d), c
    }
  })(() => {
    const a = t(...n);
    a !== void 0 && e(a)
  })
}

function fi(e) {
  return typeof e == "string" || Array.isArray(e) && e.every(t => typeof t == "string")
}

function On(e, t) {
  return new Promise((n, a) => {
    let c = !1;
    t == null || t.then(() => c = !0, () => c = !0), (typeof e == "function" ? On(Promise.resolve(), t).then(e) : e).then(d => {
      c || n(d)
    }, d => {
      c || a(d)
    })
  })
}
const hu = [3, 13];
const fu = 9;

function mu(e, t) {
  Li(e, e.len + t.length), e.arr.set(t, e.len), e.len += t.length
}

function mi(e, t) {
  return (e - t + 256) % 256
}
const pu = function(e, t = {}) {
  const {
    storageKeyPrefix: n = Hl,
    do: a
  } = t;
  try {
    const E = Ll(e);
    E !== null ? (E.visitorToken && (_ = E.visitorToken, c = S = `${n}t`, d = _, u = 365, ai(g => {
      (function(C, T) {
        oi(C, "", -1, T)
      })(c, g)
    }), u < 0 || ai(g => (oi(c, d, u, g), (function(C) {
      return Ni(() => {
        const T = `${C}=`;
        for (const k of document.cookie.split(";")) {
          let y = 0;
          for (; k[y] === " " && y < k.length;) ++y;
          if (k.indexOf(T) === y) return k.slice(y + T.length)
        }
      }, void 0)
    })(c) === d)), (function(g, C) {
      var T;
      try {
        (T = localStorage == null ? void 0 : localStorage.setItem) === null || T === void 0 || T.call(localStorage, g, C)
      } catch {}
    })(S, _)), E.notifications.forEach(Ul), En(a, () => ({
      e: 25,
      result: {
        response: E
      }
    }))) : En(a, () => ({
      e: 25,
      result: {
        error: new Error("Failed to decode response")
      }
    }))
  } catch (E) {
    throw En(a, () => ({
      e: 25,
      result: {
        error: E instanceof Error ? E : new Error(String(E))
      }
    })), new ee(ce[Nn], Nn)
  }
  var c, d, u, _, S
};
var gu = {
    start: zl,
    handleAgentData: pu,
    isFingerprintError: Ml,
    withoutDefault: kl
  },
  _u = ft('<span class="hidden"> </span> <!> <!> <!>', 1);

function Fu(e, t) {
  Yt(t, !0), me(() => {
    const g = Xi();
    Qn.init();
    let C = et(!1);
    Ot(() => {
      o(C) || Ce.data && (I(C, !0), Qi.loadTWA())
    }), Ki();
    const T = nr(async () => {
      await Ce.refresh()
    }, {
      interval: qi.hour,
      immediate: !0
    });
    let k = setInterval(() => {
      ir()
    }, 5e3);
    return () => {
      clearTimeout(k), g(), T(), Qn.cleanup()
    }
  });
  const n = "muted";
  me(() => {
    Tn.muted = localStorage.getItem(n) === "1"
  }), Ot(() => {
    {
      const g = Tn.muted;
      document.querySelectorAll("audio").forEach(C => {
        C.muted = g
      });
      for (const C of Object.values(Yi).filter(T => T instanceof Audio)) C.muted = g, g || (C.volume = .3);
      localStorage.setItem(n, Number(g).toString())
    }
  }), Ot(() => {
    var g, C;
    (g = Ce.data) != null && g.fingerprintJsProRequired && gu.start({
      apiKey: "svHwYf228UcW8vPuQ575",
      endpoints: ["https://wplace.live/7eskSe93usV8ENxB/?region=eu"],
      region: "eu"
    }).get({
      tag: {
        userId: ((C = Ce.data) == null ? void 0 : C.id) ?? 0
      }
    }).then(k => {})
  }), me(() => {});
  var a = _u();
  hn("beforeunload", Ui, () => {
    rr()
  });
  var c = X(a),
    d = it(c);
  $(c);
  var u = St(c, 2);
  {
    var _ = g => {
      var C = tt(),
        T = X(C);
      Ht(T, () => t.children), A(g, C)
    };
    at(u, g => {
      g(_, -1)
    })
  }
  var S = St(u, 2);
  wl(S, {});
  var E = St(S, 2);
  Ea(E, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Nt(() => Ut(d, `Version: ${Wi}`)), A(e, a), Xt()
}
export {
  Fu as component, ju as universal
};