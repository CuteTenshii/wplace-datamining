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
var _ = (o, t, n) => (an(o, t, "read from private field"), n ? n.call(o) : t.get(o)),
  gt = (o, t, n) => t.has(o) ? In("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, n),
  pe = (o, t, n, f) => (an(o, t, "write to private field"), f ? f.call(o, n) : t.set(o, n), n),
  En = (o, t, n) => (an(o, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as fe
} from "../chunks/DMoMXVXI.js";
import {
  p as Yt,
  d as tt,
  a as v,
  r as Y,
  t as Tt,
  b as Xt,
  c as dt,
  bJ as Re,
  P as Jn,
  O as Tn,
  Q as $n,
  e as Q,
  g as vn,
  I as Ut,
  h as p,
  i as r,
  L as ke,
  s as Et,
  l as se,
  v as rn,
  u as I,
  aJ as qt,
  q as X,
  f as G,
  k as on,
  bp as Sn,
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
} from "../chunks/B8T9Hgbh.js";
import {
  l as Mt,
  n as le,
  o as ii,
  j as fn,
  a as ln,
  t as Ce,
  u as Qe,
  p as Dn,
  q as ri,
  r as un,
  v as xn,
  w as Nn,
  x as oi,
  y as Ln,
  z as si,
  A as ai,
  T as li
} from "../chunks/BcmZHdKZ.js";
import {
  a as Hn,
  i as sn,
  b as Rt,
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
} from "../chunks/CMvc62SB.js";
import {
  k as vi
} from "../chunks/ryCN0oNh.js";
import {
  c as ue,
  a as Jt,
  s as yt,
  b as cn,
  d as be,
  S as yi,
  k as Ci,
  e as Un
} from "../chunks/B7_gUtXa.js";
import {
  c as bi,
  d as wi
} from "../chunks/DqVoli-1.js";
import {
  p as P,
  s as Oe,
  r as Se
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
  g as te
} from "../chunks/BhCkpOlh.js";
import "../chunks/B7vrJrEX.js";
const Ti = !0,
  Nl = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Ti
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Si = () => "Input the code",
  Di = () => "Insira o código",
  xi = () => "输入验证码",
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
    const n = t.locale ?? te();
    return n === "en" ? Si() : n === "pt" ? Di() : n === "ch" ? xi() : n === "de" ? Ni() : n === "es" ? Li() : n === "fr" ? Ai() : n === "it" ? Pi() : n === "jp" ? ki() : n === "pl" ? Oi() : n === "ru" ? Ri() : n === "uk" ? Mi() : Bi()
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
    const n = t.locale ?? te();
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
    const n = t.locale ?? te();
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
    const n = t.locale ?? te();
    return n === "en" ? dr() : n === "pt" ? hr() : n === "ch" ? fr() : n === "de" ? mr() : n === "es" ? pr() : n === "fr" ? _r() : n === "it" ? gr() : n === "jp" ? vr() : n === "pl" ? yr() : n === "ru" ? Cr() : n === "uk" ? br() : wr()
  },
  Er = () => "Verify your phone number to keep painting. This helps us block bots and multi-accounting to keep a fair experience for everyone.",
  Tr = () => "Verifique seu número de telefone para continuar pintando. Isso nos ajuda a bloquear bots e o uso de várias contas para garantir uma experiência justa para todos.",
  Sr = () => "请验证你的电话号码以继续绘画。这有助于我们阻止机器人和多账号行为，为所有人提供公平的体验。",
  Dr = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots und Multi-Accounting zu blockieren, damit alle ein faires Erlebnis haben.",
  xr = () => "Verifica tu número de teléfono para seguir pintando. Esto nos ayuda a bloquear bots y el uso de varias cuentas para garantizar una experiencia justa para todos.",
  Nr = () => "Vérifiez votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et les comptes multiples afin de garantir une expérience équitable pour tous.",
  Lr = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a bloccare bot e account multipli per garantire un'esperienza equa a tutti.",
  Ar = () => "描き続けるには電話番号の確認が必要です。これはボットや複数アカウントの利用を防ぎ、すべてのプレイヤーに公平な体験を提供するための手順です。",
  Pr = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to blokować boty i zakładanie wielu kont, aby zapewnić wszystkim uczciwą rozgrywkę.",
  kr = () => "Подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам блокировать ботов и мультиаккаунты, обеспечивая честные условия для всех.",
  Or = () => "Підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам блокувати ботів і мультиакаунти, щоб забезпечити чесні умови для всіх.",
  Rr = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi chặn bot và việc dùng nhiều tài khoản để mang lại trải nghiệm công bằng cho mọi người.",
  Mr = (o = {}, t = {}) => {
    const n = t.locale ?? te();
    return n === "en" ? Er() : n === "pt" ? Tr() : n === "ch" ? Sr() : n === "de" ? Dr() : n === "es" ? xr() : n === "fr" ? Nr() : n === "it" ? Lr() : n === "jp" ? Ar() : n === "pl" ? Pr() : n === "ru" ? kr() : n === "uk" ? Or() : Rr()
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
    const n = t.locale ?? te();
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
    const n = t.locale ?? te();
    return n === "en" ? Qr() : n === "pt" ? Zr() : n === "ch" ? Jr() : n === "de" ? $r() : n === "es" ? to() : n === "fr" ? eo() : n === "it" ? no() : n === "jp" ? io() : n === "pl" ? ro() : n === "ru" ? oo() : n === "uk" ? so() : ao()
  },
  uo = () => "Resend - Telegram/SMS",
  co = () => "Reenviar - Telegram/SMS",
  ho = () => "重新发送 - Telegram/短信",
  fo = () => "Erneut senden - Telegram/SMS",
  mo = () => "Reenviar - Telegram/SMS",
  po = () => "Renvoyer - Telegram/SMS",
  _o = () => "Reinvia - Telegram/SMS",
  go = () => "再送信 - Telegram/SMS",
  vo = () => "Wyślij ponownie - Telegram/SMS",
  yo = () => "Отправить ещё раз - Telegram/SMS",
  Co = () => "Надіслати ще раз - Telegram/SMS",
  bo = () => "Gửi lại - Telegram/SMS",
  wo = (o = {}, t = {}) => {
    const n = t.locale ?? te();
    return n === "en" ? uo() : n === "pt" ? co() : n === "ch" ? ho() : n === "de" ? fo() : n === "es" ? mo() : n === "fr" ? po() : n === "it" ? _o() : n === "jp" ? go() : n === "pl" ? vo() : n === "ru" ? yo() : n === "uk" ? Co() : bo()
  },
  Io = () => "Send Code",
  Eo = () => "Enviar o código",
  To = () => "发送验证码",
  So = () => "Code senden",
  Do = () => "Enviar código",
  xo = () => "Envoyer le code",
  No = () => "Invia codice",
  Lo = () => "コードを送信",
  Ao = () => "Wyślij kod",
  Po = () => "Отправить код",
  ko = () => "Надіслати код",
  Oo = () => "Gửi mã",
  Ro = (o = {}, t = {}) => {
    const n = t.locale ?? te();
    return n === "en" ? Io() : n === "pt" ? Eo() : n === "ch" ? To() : n === "de" ? So() : n === "es" ? Do() : n === "fr" ? xo() : n === "it" ? No() : n === "jp" ? Lo() : n === "pl" ? Ao() : n === "ru" ? Po() : n === "uk" ? ko() : Oo()
  },
  Mo = o => `Sent to ${o.phone}`,
  Bo = o => `Enviado para ${o.phone}`,
  Ho = o => `已发送至 ${o.phone}`,
  Uo = o => `An ${o.phone} gesendet`,
  Wo = o => `Enviado a ${o.phone}`,
  Vo = o => `Envoyé à ${o.phone}`,
  jo = o => `Inviato a ${o.phone}`,
  zo = o => `${o.phone} に送信しました`,
  Fo = o => `Wysłano na ${o.phone}`,
  Go = o => `Отправлено на ${o.phone}`,
  Ko = o => `Надіслано на ${o.phone}`,
  qo = o => `Đã gửi tới ${o.phone}`,
  Yo = (o, t = {}) => {
    const n = t.locale ?? te();
    return n === "en" ? Mo(o) : n === "pt" ? Bo(o) : n === "ch" ? Ho(o) : n === "de" ? Uo(o) : n === "es" ? Wo(o) : n === "fr" ? Vo(o) : n === "it" ? jo(o) : n === "jp" ? zo(o) : n === "pl" ? Fo(o) : n === "ru" ? Go(o) : n === "uk" ? Ko(o) : qo(o)
  },
  Xo = o => `Code sent to ${o.phone} via ${o.channel}`,
  Qo = o => `Código enviado para ${o.phone} via ${o.channel}`,
  Zo = o => `验证码已通过${o.channel}发送至${o.phone}`,
  Jo = o => `Code an ${o.phone} per ${o.channel} gesendet`,
  $o = o => `Código enviado a ${o.phone} por ${o.channel}`,
  ts = o => `Code envoyé à ${o.phone} par ${o.channel}`,
  es = o => `Codice inviato a ${o.phone} tramite ${o.channel}`,
  ns = o => `コードを${o.channel}で${o.phone}に送信しました`,
  is = o => `Kod wysłany do ${o.phone} przez ${o.channel}`,
  rs = o => `Код отправлен на ${o.phone} через ${o.channel}`,
  os = o => `Код надіслано на ${o.phone} через ${o.channel}`,
  ss = o => `Mã đã được gửi tới ${o.phone} qua ${o.channel}`,
  as = (o, t = {}) => {
    const n = t.locale ?? te();
    return n === "en" ? Xo(o) : n === "pt" ? Qo(o) : n === "ch" ? Zo(o) : n === "de" ? Jo(o) : n === "es" ? $o(o) : n === "fr" ? ts(o) : n === "it" ? es(o) : n === "jp" ? ns(o) : n === "pl" ? is(o) : n === "ru" ? rs(o) : n === "uk" ? os(o) : ss(o)
  },
  ls = () => "Try another number",
  us = () => "Tentar outro número",
  cs = () => "请尝试使用其他号码",
  ds = () => "Andere Nummer versuchen",
  hs = () => "Prueba con otro número",
  fs = () => "Essayez un autre numéro",
  ms = () => "Prova un altro numero",
  ps = () => "別の番号をお試しください。",
  _s = () => "Spróbuj innego numeru",
  gs = () => "Попробуйте другой номер",
  vs = () => "Спробувати інший номер",
  ys = () => "Thử số khác",
  Cs = (o = {}, t = {}) => {
    const n = t.locale ?? te();
    return n === "en" ? ls() : n === "pt" ? us() : n === "ch" ? cs() : n === "de" ? ds() : n === "es" ? hs() : n === "fr" ? fs() : n === "it" ? ms() : n === "jp" ? ps() : n === "pl" ? _s() : n === "ru" ? gs() : n === "uk" ? vs() : ys()
  },
  bs = Array(12).fill(0);
var ws = dt('<div class="sonner-loading-bar"></div>'),
  Is = dt('<div><div class="sonner-spinner"></div></div>');

function Es(o, t) {
  Yt(t, !0);
  var n = Is(),
    f = tt(n);
  Ze(f, 23, () => bs, (g, E) => `spinner-bar-${E}`, (g, E) => {
    var D = ws();
    v(g, D)
  }), Y(f), Y(n), Tt(g => {
    Jt(n, 1, g), yt(n, "data-visible", t.visible)
  }, [() => ue(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), v(o, n), Xt()
}
const Ts = typeof window < "u" ? window : void 0;

function Ss(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var we, Me;
class Ds {
  constructor(t = {}) {
    gt(this, we);
    gt(this, Me);
    const {
      window: n = Ts,
      document: f = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (pe(this, we, f), pe(this, Me, ei(g => {
      const E = Re(n, "focusin", g),
        D = Re(n, "focusout", g);
      return () => {
        E(), D()
      }
    })))
  }
  get current() {
    var t;
    return (t = _(this, Me)) == null || t.call(this), _(this, we) ? Ss(_(this, we)) : null
  }
}
we = new WeakMap, Me = new WeakMap;
new Ds;
var Be, ce;
class xs {
  constructor(t) {
    gt(this, Be);
    gt(this, ce);
    pe(this, Be, t), pe(this, ce, Symbol(t))
  }
  get key() {
    return _(this, ce)
  }
  exists() {
    return Jn(_(this, ce))
  }
  get() {
    const t = Tn(_(this, ce));
    if (t === void 0) throw new Error(`Context "${_(this,Be)}" not found`);
    return t
  }
  getOr(t) {
    const n = Tn(_(this, ce));
    return n === void 0 ? t : n
  }
  set(t) {
    return $n(_(this, ce), t)
  }
}
Be = new WeakMap, ce = new WeakMap;
const Ns = new xs("<Toaster/>");

function qe(o) {
  return o.label !== void 0
}

function Ls() {
  let o = Q(vn(typeof document < "u" ? document.hidden : !1));
  return Ut(() => Re(document, "visibilitychange", () => {
    p(o, document.hidden, !0)
  })), {
    get current() {
      return r(o)
    }
  }
}
const kn = 4e3,
  As = 14,
  Ps = 45,
  ks = 200,
  Os = .05,
  Rs = {
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

function Ms(o) {
  const [t, n] = o.split("-"), f = [];
  return t && f.push(t), n && f.push(n), f
}

function On(o) {
  return 1 / (1.5 + Math.abs(o) / 20)
}
var Bs = dt("<div><!></div>"),
  Hs = dt('<button data-close-button=""><!></button>'),
  Us = dt('<div data-icon=""><!> <!></div>'),
  Ws = dt('<div data-description=""><!></div>'),
  Vs = dt('<button data-button="" data-cancel=""> </button>'),
  js = dt('<button data-button=""> </button>'),
  zs = dt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Fs = dt('<li data-sonner-toast=""><!> <!></li>');

function Gs(o, t) {
  Yt(t, !0);
  const n = A => {
    var U = X(),
      rt = G(U);
    {
      var ut = m => {
          var Lt = Bs(),
            l = tt(Lt);
          Ht(l, () => t.loadingIcon), Y(Lt), Tt(e => {
            Jt(Lt, 1, e), yt(Lt, "data-visible", r(R) === "loading")
          }, [() => {
            var e, i, s;
            return ue(le((e = r(Dt)) == null ? void 0 : e.loader, (s = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), v(m, Lt)
        },
        $ = m => {
          {
            let Lt = I(() => {
                var e, i;
                return le((e = r(Dt)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              l = I(() => r(R) === "loading");
            Es(m, {
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
        t.loadingIcon ? m(ut) : m($, !1)
      })
    }
    v(A, U)
  };
  let f = P(t, "cancelButtonStyle", 3, ""),
    g = P(t, "actionButtonStyle", 3, ""),
    E = P(t, "descriptionClass", 3, ""),
    D = P(t, "unstyled", 3, !1),
    H = P(t, "defaultRichColors", 3, !1);
  const F = {
    ...Rs
  };
  let N = Q(!1),
    y = Q(!1),
    T = Q(!1),
    x = Q(!1),
    Z = Q(!1),
    k = Q(0),
    J = Q(0),
    O = t.toast.duration || t.duration || kn,
    W = Q(void 0),
    K = Q(null),
    M = Q(null);
  const C = I(() => t.index === 0),
    L = I(() => t.index + 1 <= t.visibleToasts),
    R = I(() => t.toast.type),
    mt = I(() => t.toast.dismissable !== !1),
    At = I(() => t.toast.class || ""),
    S = I(() => t.toast.descriptionClass || ""),
    nt = I(() => Mt.heights.findIndex(A => A.toastId === t.toast.id) || 0),
    pt = I(() => t.toast.closeButton ?? t.closeButton),
    Nt = I(() => t.toast.duration ?? t.duration ?? kn);
  let Ct = null;
  const St = I(() => t.position.split("-")),
    Pt = I(() => Mt.heights.reduce((A, U, rt) => rt >= r(nt) ? A : A + U.height, 0)),
    ne = Ls(),
    ft = I(() => t.toast.invert || t.invert),
    Ft = I(() => r(R) === "loading"),
    Dt = I(() => ({
      ...F,
      ...t.classes
    })),
    ie = I(() => t.toast.title),
    at = I(() => t.toast.description);
  let it = Q(0),
    bt = Q(0);
  const w = I(() => Math.round(r(nt) * As + r(Pt)));
  Ut(() => {
    r(ie), r(at);
    let A;
    t.expanded || t.expandByDefault ? A = 1 : A = 1 - t.index * Os;
    const U = ke(() => r(W));
    if (U === void 0) return;
    U.style.setProperty("height", "auto");
    const rt = U.offsetHeight,
      ut = U.getBoundingClientRect().height,
      $ = Math.round(ut / A + Number.EPSILON & 100) / 100;
    U.style.removeProperty("height");
    let m;
    Math.abs($ - rt) < 1 ? m = $ : m = rt, p(J, m, !0), ke(() => {
      Mt.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function V() {
    p(y, !0), p(k, r(w), !0), Mt.removeHeight(t.toast.id), setTimeout(() => {
      Mt.remove(t.toast.id)
    }, ks)
  }
  let wt;
  const lt = I(() => t.toast.promise && r(R) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Wt() {
    p(it, new Date().getTime(), !0), wt = setTimeout(() => {
      var A, U;
      (U = (A = t.toast).onAutoClose) == null || U.call(A, t.toast), V()
    }, O)
  }

  function re() {
    if (r(bt) < r(it)) {
      const A = new Date().getTime() - r(it);
      O = O - A
    }
    p(bt, new Date().getTime(), !0)
  }
  Ut(() => {
    t.toast.updated && (clearTimeout(wt), O = r(Nt), Wt())
  }), Ut(() => (r(lt) || (t.expanded || t.interacting || ne.current ? re() : Wt()), () => clearTimeout(wt))), fe(() => {
    var U;
    p(N, !0);
    const A = (U = r(W)) == null ? void 0 : U.getBoundingClientRect().height;
    return p(J, A, !0), Mt.setHeight({
      toastId: t.toast.id,
      height: A
    }), () => {
      Mt.removeHeight(t.toast.id)
    }
  }), Ut(() => {
    t.toast.delete && ke(() => {
      var A, U;
      V(), (U = (A = t.toast).onDismiss) == null || U.call(A, t.toast)
    })
  });
  const De = A => {
      if (r(Ft)) return;
      p(k, r(w), !0);
      const U = A.target;
      U.setPointerCapture(A.pointerId), U.tagName !== "BUTTON" && (p(T, !0), Ct = {
        x: A.clientX,
        y: A.clientY
      })
    },
    ae = () => {
      var m, Lt, l, e, i, s;
      if (r(x) || !r(mt)) return;
      Ct = null;
      const A = Number(((m = r(W)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        U = Number(((Lt = r(W)) == null ? void 0 : Lt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        rt = new Date().getTime() - 0,
        ut = r(K) === "x" ? A : U,
        $ = Math.abs(ut) / rt;
      if (Math.abs(ut) >= Ps || $ > .11) {
        p(k, r(w), !0), (e = (l = t.toast).onDismiss) == null || e.call(l, t.toast), r(K) === "x" ? p(M, A > 0 ? "right" : "left", !0) : p(M, U > 0 ? "down" : "up", !0), V(), p(x, !0);
        return
      } else(i = r(W)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (s = r(W)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      p(Z, !1), p(T, !1), p(K, null)
    },
    jt = A => {
      var Lt, l, e;
      if (!Ct || !r(mt) || (((Lt = window.getSelection()) == null ? void 0 : Lt.toString().length) ?? -1) > 0) return;
      const rt = A.clientY - Ct.y,
        ut = A.clientX - Ct.x,
        $ = t.swipeDirections ?? Ms(t.position);
      !r(K) && (Math.abs(ut) > 1 || Math.abs(rt) > 1) && p(K, Math.abs(ut) > Math.abs(rt) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (r(K) === "y") {
        if ($.includes("top") || $.includes("bottom"))
          if ($.includes("top") && rt < 0 || $.includes("bottom") && rt > 0) m.y = rt;
          else {
            const i = rt * On(rt);
            m.y = Math.abs(i) < Math.abs(rt) ? i : rt
          }
      } else if (r(K) === "x" && ($.includes("left") || $.includes("right")))
        if ($.includes("left") && ut < 0 || $.includes("right") && ut > 0) m.x = ut;
        else {
          const i = ut * On(ut);
          m.x = Math.abs(i) < Math.abs(ut) ? i : ut
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && p(Z, !0), (l = r(W)) == null || l.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = r(W)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    Vt = () => {
      p(T, !1), p(K, null), Ct = null
    },
    kt = I(() => t.toast.icon ? t.toast.icon : r(R) === "success" ? t.successIcon : r(R) === "error" ? t.errorIcon : r(R) === "warning" ? t.warningIcon : r(R) === "info" ? t.infoIcon : r(R) === "loading" ? t.loadingIcon : null);
  var q = Fs();
  yt(q, "tabindex", 0);
  let me;
  var ge = tt(q);
  {
    var ve = A => {
      var U = Hs(),
        rt = tt(U);
      Ht(rt, () => t.closeIcon ?? qt), Y(U), Tt(ut => {
        yt(U, "aria-label", t.closeButtonAriaLabel), yt(U, "data-disabled", r(Ft)), Jt(U, 1, ut)
      }, [() => {
        var ut, $, m;
        return ue(le((ut = r(Dt)) == null ? void 0 : ut.closeButton, (m = ($ = t.toast) == null ? void 0 : $.classes) == null ? void 0 : m.closeButton))
      }]), se("click", U, () => {
        var ut, $;
        r(Ft) || !r(mt) || (V(), ($ = (ut = t.toast).onDismiss) == null || $.call(ut, t.toast))
      }), v(A, U)
    };
    st(ge, A => {
      r(pt) && !t.toast.component && r(R) !== "loading" && t.closeIcon !== null && A(ve)
    })
  }
  var xe = Et(ge, 2);
  {
    var ye = A => {
        const U = I(() => t.toast.component);
        var rt = X(),
          ut = G(rt);
        $t(ut, () => r(U), ($, m) => {
          m($, Oe(() => t.toast.componentProps, {
            closeToast: V
          }))
        }), v(A, rt)
      },
      Ne = A => {
        var U = zs(),
          rt = G(U);
        {
          var ut = h => {
            var d = Us(),
              b = tt(d);
            {
              var B = j => {
                var z = X(),
                  vt = G(z);
                {
                  var et = ot => {
                      var Gt = X(),
                        zt = G(Gt);
                      $t(zt, () => t.toast.icon, (xt, Ot) => {
                        Ot(xt, {})
                      }), v(ot, Gt)
                    },
                    ht = ot => {
                      n(ot)
                    };
                  st(vt, ot => {
                    t.toast.icon ? ot(et) : ot(ht, !1)
                  })
                }
                v(j, z)
              };
              st(b, j => {
                (t.toast.promise || r(R) === "loading") && j(B)
              })
            }
            var _t = Et(b, 2);
            {
              var ct = j => {
                var z = X(),
                  vt = G(z);
                {
                  var et = xt => {
                      var Ot = X(),
                        ee = G(Ot);
                      $t(ee, () => t.toast.icon, (Yn, Xn) => {
                        Xn(Yn, {})
                      }), v(xt, Ot)
                    },
                    ht = xt => {
                      var Ot = X(),
                        ee = G(Ot);
                      Ht(ee, () => t.successIcon ?? qt), v(xt, Ot)
                    },
                    ot = xt => {
                      var Ot = X(),
                        ee = G(Ot);
                      Ht(ee, () => t.errorIcon ?? qt), v(xt, Ot)
                    },
                    Gt = xt => {
                      var Ot = X(),
                        ee = G(Ot);
                      Ht(ee, () => t.warningIcon ?? qt), v(xt, Ot)
                    },
                    zt = xt => {
                      var Ot = X(),
                        ee = G(Ot);
                      Ht(ee, () => t.infoIcon ?? qt), v(xt, Ot)
                    };
                  st(vt, xt => {
                    t.toast.icon ? xt(et) : r(R) === "success" ? xt(ht, 1) : r(R) === "error" ? xt(ot, 2) : r(R) === "warning" ? xt(Gt, 3) : r(R) === "info" && xt(zt, 4)
                  })
                }
                v(j, z)
              };
              st(_t, j => {
                t.toast.type !== "loading" && j(ct)
              })
            }
            Y(d), Tt(j => Jt(d, 1, j), [() => {
              var j, z, vt;
              return ue(le((j = r(Dt)) == null ? void 0 : j.icon, (vt = (z = t.toast) == null ? void 0 : z.classes) == null ? void 0 : vt.icon))
            }]), v(h, d)
          };
          st(rt, h => {
            (r(R) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(kt) !== null || t.toast.icon) && h(ut)
          })
        }
        var $ = Et(rt, 2),
          m = tt($),
          Lt = tt(m);
        {
          var l = h => {
            var d = X(),
              b = G(d);
            {
              var B = ct => {
                  const j = I(() => t.toast.title);
                  var z = X(),
                    vt = G(z);
                  $t(vt, () => r(j), (et, ht) => {
                    ht(et, Oe(() => t.toast.componentProps))
                  }), v(ct, z)
                },
                _t = ct => {
                  var j = Sn();
                  Tt(() => Bt(j, t.toast.title)), v(ct, j)
                };
              st(b, ct => {
                typeof t.toast.title != "string" ? ct(B) : ct(_t, !1)
              })
            }
            v(h, d)
          };
          st(Lt, h => {
            t.toast.title && h(l)
          })
        }
        Y(m);
        var e = Et(m, 2);
        {
          var i = h => {
            var d = Ws(),
              b = tt(d);
            {
              var B = ct => {
                  const j = I(() => t.toast.description);
                  var z = X(),
                    vt = G(z);
                  $t(vt, () => r(j), (et, ht) => {
                    ht(et, Oe(() => t.toast.componentProps))
                  }), v(ct, z)
                },
                _t = ct => {
                  var j = Sn();
                  Tt(() => Bt(j, t.toast.description)), v(ct, j)
                };
              st(b, ct => {
                typeof t.toast.description != "string" ? ct(B) : ct(_t, !1)
              })
            }
            Y(d), Tt(ct => Jt(d, 1, ct), [() => {
              var ct, j;
              return ue(le(E(), r(S), (ct = r(Dt)) == null ? void 0 : ct.description, (j = t.toast.classes) == null ? void 0 : j.description))
            }]), v(h, d)
          };
          st(e, h => {
            t.toast.description && h(i)
          })
        }
        Y($);
        var s = Et($, 2);
        {
          var a = h => {
            var d = X(),
              b = G(d);
            {
              var B = j => {
                  var z = X(),
                    vt = G(z);
                  $t(vt, () => t.toast.cancel, (et, ht) => {
                    ht(et, {})
                  }), v(j, z)
                },
                _t = j => {
                  var z = Vs(),
                    vt = tt(z, !0);
                  Y(z), Tt(et => {
                    cn(z, t.toast.cancelButtonStyle ?? f()), Jt(z, 1, et), Bt(vt, t.toast.cancel.label)
                  }, [() => {
                    var et, ht, ot;
                    return ue(le((et = r(Dt)) == null ? void 0 : et.cancelButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.cancelButton))
                  }]), se("click", z, et => {
                    var ht, ot;
                    qe(t.toast.cancel) && r(mt) && ((ot = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || ot.call(ht, et), V())
                  }), v(j, z)
                },
                ct = I(() => qe(t.toast.cancel));
              st(b, j => {
                typeof t.toast.cancel == "function" ? j(B) : r(ct) && j(_t, 1)
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
            var d = X(),
              b = G(d);
            {
              var B = j => {
                  var z = X(),
                    vt = G(z);
                  $t(vt, () => t.toast.action, (et, ht) => {
                    ht(et, {})
                  }), v(j, z)
                },
                _t = j => {
                  var z = js(),
                    vt = tt(z, !0);
                  Y(z), Tt(et => {
                    cn(z, t.toast.actionButtonStyle ?? g()), Jt(z, 1, et), Bt(vt, t.toast.action.label)
                  }, [() => {
                    var et, ht, ot;
                    return ue(le((et = r(Dt)) == null ? void 0 : et.actionButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.actionButton))
                  }]), se("click", z, et => {
                    var ht;
                    qe(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(et), !et.defaultPrevented && V())
                  }), v(j, z)
                },
                ct = I(() => qe(t.toast.action));
              st(b, j => {
                typeof t.toast.action == "function" ? j(B) : r(ct) && j(_t, 1)
              })
            }
            v(h, d)
          };
          st(c, h => {
            t.toast.action && h(u)
          })
        }
        Tt(h => Jt(m, 1, h), [() => {
          var h, d, b;
          return ue(le((h = r(Dt)) == null ? void 0 : h.title, (b = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : b.title))
        }]), v(A, U)
      };
    st(xe, A => {
      t.toast.component ? A(ye) : A(Ne, !1)
    })
  }
  Y(q), yn(q, A => p(W, A), () => r(W)), Tt((A, U, rt) => {
    Jt(q, 1, A), yt(q, "data-rich-colors", t.toast.richColors ?? H()), yt(q, "data-styled", !(t.toast.component || t.toast.unstyled || D())), yt(q, "data-mounted", r(N)), yt(q, "data-promise", U), yt(q, "data-swiped", r(Z)), yt(q, "data-removed", r(y)), yt(q, "data-visible", r(L)), yt(q, "data-y-position", r(St)[0]), yt(q, "data-x-position", r(St)[1]), yt(q, "data-index", t.index), yt(q, "data-front", r(C)), yt(q, "data-swiping", r(T)), yt(q, "data-dismissable", r(mt)), yt(q, "data-type", r(R)), yt(q, "data-invert", r(ft)), yt(q, "data-swipe-out", r(x)), yt(q, "data-swipe-direction", r(M)), yt(q, "data-expanded", rt), me = cn(q, `${t.style} ${t.toast.style}`, me, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Mt.toasts.length - t.index,
      "--offset": `${r(y)?r(k):r(w)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(J)}px`
    })
  }, [() => {
    var A, U, rt, ut, $, m;
    return ue(le(t.class, r(At), (A = r(Dt)) == null ? void 0 : A.toast, (rt = (U = t.toast) == null ? void 0 : U.classes) == null ? void 0 : rt.toast, (ut = r(Dt)) == null ? void 0 : ut[r(R)], (m = ($ = t.toast) == null ? void 0 : $.classes) == null ? void 0 : m[r(R)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(N))]), se("pointermove", q, jt), se("pointerup", q, ae), se("pointerdown", q, De), rn("dragend", q, Vt), v(o, q), Xt()
}
on(["pointermove", "pointerup", "pointerdown", "click"]);
var Ks = Ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function qs(o) {
  var t = Ks();
  v(o, t)
}
var Ys = Ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Xs(o) {
  var t = Ys();
  v(o, t)
}
var Qs = Ke('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Zs(o) {
  var t = Qs();
  v(o, t)
}
var Js = Ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function $s(o) {
  var t = Js();
  v(o, t)
}
var ta = Ke('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function ea(o) {
  var t = ta();
  v(o, t)
}
const na = 3,
  Wn = "24px",
  Vn = "16px",
  ia = 4e3,
  ra = 356,
  oa = 14,
  dn = "dark",
  Ye = "light";

function sa(o, t) {
  const n = {};
  return [o, t].forEach((f, g) => {
    const E = g === 1,
      D = E ? "--mobile-offset" : "--offset",
      H = E ? Vn : Wn;

    function F(N) {
      ["top", "right", "bottom", "left"].forEach(y => {
        n[`${D}-${y}`] = typeof N == "number" ? `${N}px` : N
      })
    }
    typeof f == "number" || typeof f == "string" ? F(f) : typeof f == "object" ? ["top", "right", "bottom", "left"].forEach(N => {
      const y = f[N];
      y === void 0 ? n[`${D}-${N}`] = H : n[`${D}-${N}`] = typeof y == "number" ? `${y}px` : y
    }) : F(H)
  }), n
}
var aa = dt("<ol></ol>"),
  la = dt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function ua(o, t) {
  Yt(t, !0);

  function n(w) {
    return w !== "system" ? w : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? dn : Ye
  }
  let f = P(t, "invert", 3, !1),
    g = P(t, "position", 3, "bottom-right"),
    E = P(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    D = P(t, "expand", 3, !1),
    H = P(t, "closeButton", 3, !1),
    F = P(t, "offset", 3, Wn),
    N = P(t, "mobileOffset", 3, Vn),
    y = P(t, "theme", 3, "light"),
    T = P(t, "richColors", 3, !1),
    x = P(t, "duration", 3, ia),
    Z = P(t, "visibleToasts", 3, na),
    k = P(t, "toastOptions", 19, () => ({})),
    J = P(t, "dir", 7, "auto"),
    O = P(t, "gap", 3, oa),
    W = P(t, "containerAriaLabel", 3, "Notifications"),
    K = P(t, "closeButtonAriaLabel", 3, "Close toast"),
    M = Se(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function C() {
    if (J() !== "auto") return J();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const w = document.documentElement.getAttribute("dir");
    return w === "auto" || !w ? (ke(() => J(window.getComputedStyle(document.documentElement).direction ?? "ltr")), J()) : (ke(() => J(w)), w)
  }
  const L = I(() => Array.from(new Set([g(), ...Mt.toasts.filter(w => w.position).map(w => w.position)].filter(Boolean))));
  let R = Q(!1),
    mt = Q(!1),
    At = Q(vn(n(y()))),
    S = Q(void 0),
    nt = Q(null),
    pt = Q(!1);
  const Nt = I(() => E().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ut(() => {
    Mt.toasts.length <= 1 && p(R, !1)
  }), Ut(() => {
    const w = Mt.toasts.filter(V => V.dismiss && !V.delete);
    if (w.length > 0) {
      const V = Mt.toasts.map(wt => w.find(Wt => Wt.id === wt.id) ? {
        ...wt,
        delete: !0
      } : wt);
      Mt.toasts = V
    }
  }), Ut(() => () => {
    r(S) && r(nt) && (r(nt).focus({
      preventScroll: !0
    }), p(nt, null), p(pt, !1))
  }), fe(() => (Mt.reset(), Re(document, "keydown", V => {
    var lt, Wt;
    E().every(re => V[re] || V.code === re) && (p(R, !0), (lt = r(S)) == null || lt.focus()), V.code === "Escape" && (document.activeElement === r(S) || (Wt = r(S)) != null && Wt.contains(document.activeElement)) && p(R, !1)
  }))), Ut(() => {
    if (y() !== "system" && p(At, y()), typeof window < "u") {
      y() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? p(At, dn) : p(At, Ye));
      const w = window.matchMedia("(prefers-color-scheme: dark)"),
        V = ({
          matches: wt
        }) => {
          p(At, wt ? dn : Ye, !0)
        };
      "addEventListener" in w ? w.addEventListener("change", V) : w.addListener(V)
    }
  });
  const Ct = w => {
      var V;
      (V = t.onblur) == null || V.call(t, w), r(pt) && !w.currentTarget.contains(w.relatedTarget) && (p(pt, !1), r(nt) && (r(nt).focus({
        preventScroll: !0
      }), p(nt, null)))
    },
    St = w => {
      var wt;
      (wt = t.onfocus) == null || wt.call(t, w), !(w.target instanceof HTMLElement && w.target.dataset.dismissable === "false") && (r(pt) || (p(pt, !0), p(nt, w.relatedTarget, !0)))
    },
    Pt = w => {
      var wt;
      (wt = t.onpointerdown) == null || wt.call(t, w), !(w.target instanceof HTMLElement && w.target.dataset.dismissable === "false") && p(mt, !0)
    },
    ne = w => {
      var V;
      (V = t.onmouseenter) == null || V.call(t, w), p(R, !0)
    },
    ft = w => {
      var V;
      (V = t.onmouseleave) == null || V.call(t, w), r(mt) || p(R, !1)
    },
    Ft = w => {
      var V;
      (V = t.onmousemove) == null || V.call(t, w), p(R, !0)
    },
    Dt = w => {
      var V;
      (V = t.ondragend) == null || V.call(t, w), p(R, !1)
    },
    ie = w => {
      var V;
      (V = t.onpointerup) == null || V.call(t, w), p(mt, !1)
    };
  Ns.set(new ii);
  var at = la();
  yt(at, "tabindex", -1);
  var it = tt(at);
  {
    var bt = w => {
      var V = X(),
        wt = G(V);
      Ze(wt, 18, () => r(L), lt => lt, (lt, Wt, re, De) => {
        const ae = I(() => {
            const [kt, q] = Wt.split("-");
            return {
              y: kt,
              x: q
            }
          }),
          jt = I(() => sa(F(), N()));
        var Vt = aa();
        be(Vt, kt => {
          var q;
          return {
            tabindex: -1,
            dir: kt,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(At),
            "data-y-position": r(ae).y,
            "data-x-position": r(ae).x,
            style: t.style,
            onblur: Ct,
            onfocus: St,
            onmouseenter: ne,
            onmousemove: Ft,
            onmouseleave: ft,
            ondragend: Dt,
            onpointerdown: Pt,
            onpointerup: ie,
            ...M,
            [yi]: {
              "--front-toast-height": `${(q=Mt.heights[0])==null?void 0:q.height}px`,
              "--width": `${ra}px`,
              "--gap": `${O()}px`,
              "--offset-top": r(jt)["--offset-top"],
              "--offset-right": r(jt)["--offset-right"],
              "--offset-bottom": r(jt)["--offset-bottom"],
              "--offset-left": r(jt)["--offset-left"],
              "--mobile-offset-top": r(jt)["--mobile-offset-top"],
              "--mobile-offset-right": r(jt)["--mobile-offset-right"],
              "--mobile-offset-bottom": r(jt)["--mobile-offset-bottom"],
              "--mobile-offset-left": r(jt)["--mobile-offset-left"]
            }
          }
        }, [C], void 0, void 0, "svelte-smjlix"), Ze(Vt, 23, () => Mt.toasts.filter(kt => !kt.position && r(re) === 0 || kt.position === Wt), kt => kt.id, (kt, q, me, ge) => {
          {
            const ve = s => {
                var a = X(),
                  c = G(a);
                {
                  var u = d => {
                      var b = X(),
                        B = G(b);
                      Ht(B, () => t.successIcon ?? qt), v(d, b)
                    },
                    h = d => {
                      qs(d)
                    };
                  st(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              xe = s => {
                var a = X(),
                  c = G(a);
                {
                  var u = d => {
                      var b = X(),
                        B = G(b);
                      Ht(B, () => t.errorIcon ?? qt), v(d, b)
                    },
                    h = d => {
                      Xs(d)
                    };
                  st(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              ye = s => {
                var a = X(),
                  c = G(a);
                {
                  var u = d => {
                      var b = X(),
                        B = G(b);
                      Ht(B, () => t.warningIcon ?? qt), v(d, b)
                    },
                    h = d => {
                      Zs(d)
                    };
                  st(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              Ne = s => {
                var a = X(),
                  c = G(a);
                {
                  var u = d => {
                      var b = X(),
                        B = G(b);
                      Ht(B, () => t.infoIcon ?? qt), v(d, b)
                    },
                    h = d => {
                      $s(d)
                    };
                  st(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              },
              A = s => {
                var a = X(),
                  c = G(a);
                {
                  var u = d => {
                      var b = X(),
                        B = G(b);
                      Ht(B, () => t.closeIcon ?? qt), v(d, b)
                    },
                    h = d => {
                      ea(d)
                    };
                  st(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(h, 1)
                  })
                }
                v(s, a)
              };
            let U = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.duration) ?? x()
              }),
              rt = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.class) ?? ""
              }),
              ut = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.descriptionClass) || ""
              }),
              $ = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.style) ?? ""
              }),
              m = I(() => k().classes || {}),
              Lt = I(() => k().unstyled ?? !1),
              l = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              i = I(() => {
                var s;
                return ((s = k()) == null ? void 0 : s.closeButtonAriaLabel) ?? K()
              });
            Gs(kt, {
              get index() {
                return r(me)
              },
              get toast() {
                return r(q)
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
                return Z()
              },
              get closeButton() {
                return H()
              },
              get interacting() {
                return r(mt)
              },
              get position() {
                return Wt
              },
              get style() {
                return r($)
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
                return D()
              },
              get expanded() {
                return r(R)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: ve,
              errorIcon: xe,
              warningIcon: ye,
              infoIcon: Ne,
              closeIcon: A,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), Y(Vt), yn(Vt, kt => p(S, kt), () => r(S)), Tt(() => Vt.dir = Vt.dir), v(lt, Vt)
      }), v(w, V)
    };
    st(it, w => {
      Mt.toasts.length > 0 && w(bt)
    })
  }
  Y(at), Tt(() => yt(at, "aria-label", `${W()??""} ${r(Nt)??""}`)), v(o, at), Xt()
}
let Le = Q(!1);
var ca = dt("<div></div>"),
  da = dt('<button type="button" class="btn">Retry</button>'),
  ha = dt('<span class="loading loading-spinner loading-lg"></span>'),
  fa = dt('<div class="flex h-16 items-center justify-center"><!></div>');

function ma(o, t) {
  Yt(t, !0);
  let n = P(t, "theme", 19, () => fn.theme === "dark" ? "dark" : "light"),
    f = P(t, "size", 3, "normal");
  const g = I(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: f(),
      callback: O => {
        var W;
        return (W = t.callback) == null ? void 0 : W.call(t, O)
      },
      "error-callback": O => {
        var W;
        return (W = t.errorCallback) == null ? void 0 : W.call(t, O)
      },
      "expired-callback": () => {
        var O;
        return (O = t.expiredCallback) == null ? void 0 : O.call(t)
      }
    })),
    E = (O, W) => {
      var M;
      let K = window.hcaptcha.render(O, W);
      return (M = t.onload) == null || M.call(t), {
        destroy() {
          var C;
          (C = window.hcaptcha) == null || C.remove(K)
        },
        update(C) {
          var L;
          (L = window.hcaptcha) == null || L.remove(K), K = window.hcaptcha.render(O, C)
        }
      }
    };
  let D = Q(!1),
    H = Q(!1),
    F;

  function N() {
    const O = document.createElement("script");
    O.type = "text/javascript", O.src = "https://js.hcaptcha.com/1/api.js?render=explicit", O.async = !0, O.defer = !0, O.addEventListener("load", () => p(Le, !0), {
      once: !0
    }), document.head.appendChild(O)
  }

  function y() {
    p(H, !1), F && clearTimeout(F), F = setTimeout(() => {
      (!r(Le) || !r(D)) && p(H, !0)
    }, 5e3)
  }

  function T() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(O => O.remove()), p(Le, !1), N(), y()
  }
  fe(() => (p(D, !0), r(Le) || N(), y(), () => {
    p(D, !1), F && clearTimeout(F)
  }));
  var x = X(),
    Z = G(x);
  {
    var k = O => {
        var W = ca();
        Hn(W, (K, M) => E == null ? void 0 : E(K, M), () => r(g)), v(O, W)
      },
      J = O => {
        var W = fa(),
          K = tt(W);
        {
          var M = L => {
              var R = da();
              se("click", R, T), v(L, R)
            },
            C = L => {
              var R = ha();
              v(L, R)
            };
          st(K, L => {
            r(H) ? L(M) : L(C, !1)
          })
        }
        Y(W), v(O, W)
      };
    st(Z, O => {
      r(Le) && r(D) ? O(k) : O(J, !1)
    })
  }
  v(o, x), Xt()
}
on(["click"]);

function Cn(...o) {
  return Ei(Ci(o))
}
var pa = dt("<div><!></div>");

function _a(o, t) {
  Yt(t, !0);
  let n = P(t, "ref", 15, null),
    f = Se(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var g = pa();
  be(g, D => ({
    class: D,
    ...f
  }), [() => Cn("flex items-center", t.class)]);
  var E = tt(g);
  Ht(E, () => t.children ?? qt), Y(g), yn(g, D => n(D), () => n()), v(o, g), Xt()
}
var He, Je;
class ga {
  constructor(t, n) {
    gt(this, He, () => {});
    gt(this, Je, I(() => _(this, He).call(this)));
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
    return r(_(this, Je))
  }
}
He = new WeakMap, Je = new WeakMap;
const va = 1,
  ya = 9,
  Ca = 11;

function ba(o) {
  return sn(o) && o.nodeType === va && typeof o.nodeName == "string"
}

function jn(o) {
  return sn(o) && o.nodeType === ya
}

function wa(o) {
  var t;
  return sn(o) && ((t = o.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function Ia(o) {
  return sn(o) && o.nodeType !== void 0
}

function Ea(o) {
  return Ia(o) && o.nodeType === Ca && "host" in o
}

function Ta(o) {
  return jn(o) ? o : wa(o) ? o.document : (o == null ? void 0 : o.ownerDocument) ?? document
}

function zn(o) {
  var t;
  return Ea(o) ? zn(o.host) : jn(o) ? o.defaultView ?? window : ba(o) ? ((t = o.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function Sa(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var Ue;
class Da {
  constructor(t) {
    It(this, "element");
    gt(this, Ue, I(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    It(this, "getDocument", () => Ta(this.root));
    It(this, "getWindow", () => this.getDocument().defaultView ?? window);
    It(this, "getActiveElement", () => Sa(this.root));
    It(this, "isActiveElement", t => t === this.getActiveElement());
    It(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    It(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    It(this, "setTimeout", (t, n) => this.getWindow().setTimeout(t, n));
    It(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = Rt(t) : this.element = t
  }
  get root() {
    return r(_(this, Ue))
  }
  set root(t) {
    p(_(this, Ue), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Ue = new WeakMap;
const xa = 18,
  Fn = 40,
  Na = `${Fn}px`,
  La = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Aa({
  containerRef: o,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: f,
  domContext: g
}) {
  let E = Q(!1),
    D = Q(!1),
    H = Q(!1);

  function F() {
    const y = n.current;
    return y === "none" ? !1 : y === "increase-width" && r(E) && r(D)
  }

  function N() {
    const y = o.current,
      T = t.current;
    if (!y || !T || r(H) || n.current === "none") return;
    const x = y,
      Z = x.getBoundingClientRect().left + x.offsetWidth,
      k = x.getBoundingClientRect().top + x.offsetHeight / 2,
      J = Z - xa,
      O = k;
    g.querySelectorAll(La).length === 0 && g.getDocument().elementFromPoint(J, O) === y || (p(E, !0), p(H, !0))
  }
  return Ut(() => {
    const y = o.current;
    if (!y || n.current === "none") return;

    function T() {
      const k = zn(y).innerWidth - y.getBoundingClientRect().right;
      p(D, k >= Fn)
    }
    T();
    const x = setInterval(T, 1e3);
    return () => {
      clearInterval(x)
    }
  }), Ut(() => {
    const y = f.current || g.getActiveElement() === t.current;
    if (n.current === "none" || !y) return;
    const T = setTimeout(N, 0),
      x = setTimeout(N, 2e3),
      Z = setTimeout(N, 5e3),
      k = setTimeout(() => {
        p(H, !0)
      }, 6e3);
    return () => {
      clearTimeout(T), clearTimeout(x), clearTimeout(Z), clearTimeout(k)
    }
  }), {
    get hasPwmBadge() {
      return r(E)
    },
    get willPushPwmBadge() {
      return F()
    },
    PWM_BADGE_SPACE_WIDTH: Na
  }
}
const Gn = di({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  Pa = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Qt, Ie, de, Kt, Zt, Ee, oe, he, _e, Te, $e, We, Ve, tn, en, Kn, je, ze, nn, Fe;
const bn = class bn {
  constructor(t) {
    gt(this, en);
    It(this, "opts");
    It(this, "attachment");
    gt(this, Qt, An(null));
    gt(this, Ie, Q(!1));
    It(this, "inputAttachment", mn(_(this, Qt)));
    gt(this, de, An(!1));
    gt(this, Kt, Q(null));
    gt(this, Zt, Q(null));
    gt(this, Ee, new ga(() => this.opts.value.current ?? ""));
    gt(this, oe, I(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    gt(this, he, Q(vn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    gt(this, _e);
    gt(this, Te);
    It(this, "domContext");
    It(this, "onkeydown", t => {
      const n = t.key;
      Pa.includes(n) || t.ctrlKey || t.metaKey || n && r(_(this, oe)) && !r(_(this, oe)).test(n) && t.preventDefault()
    });
    gt(this, $e, I(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    gt(this, We, I(() => ({
      id: this.opts.id.current,
      [Gn.root]: "",
      style: r(_(this, $e)),
      ...this.attachment
    })));
    gt(this, Ve, I(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    gt(this, tn, I(() => ({
      position: "absolute",
      inset: 0,
      width: _(this, _e).willPushPwmBadge ? `calc(100% + ${_(this,_e).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: _(this, _e).willPushPwmBadge ? `inset(0 ${_(this,_e).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
      var J;
      const t = _(this, Qt).current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        p(_(this, Kt), null), p(_(this, Zt), null);
        return
      }
      const f = t.selectionStart,
        g = t.selectionEnd,
        E = t.selectionDirection ?? "none",
        D = t.maxLength,
        H = t.value,
        F = r(_(this, he)).prev;
      let N = -1,
        y = -1,
        T;
      if (H.length !== 0 && f !== null && g !== null) {
        const O = f === g,
          W = f === H.length && H.length < D;
        if (O && !W) {
          const K = f;
          if (K === 0) N = 0, y = 1, T = "forward";
          else if (K === D) N = K - 1, y = K, T = "backward";
          else if (D > 1 && H.length > 1) {
            let M = 0;
            if (F[0] !== null && F[1] !== null) {
              T = K < F[1] ? "backward" : "forward";
              const C = F[0] === F[1] && F[0] < D;
              T === "backward" && !C && (M = -1)
            }
            N = M + K, y = M + K + 1
          }
        }
        N !== -1 && y !== -1 && N !== y && ((J = _(this, Qt).current) == null || J.setSelectionRange(N, y, T))
      }
      const x = N !== -1 ? N : f,
        Z = y !== -1 ? y : g,
        k = T ?? E;
      p(_(this, Kt), x, !0), p(_(this, Zt), Z, !0), r(_(this, he)).prev = [x, Z, k]
    });
    It(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(_(this, oe)) && !r(_(this, oe)).test(n)) {
        t.preventDefault();
        return
      }
      typeof _(this, Ee).current == "string" && n.length < _(this, Ee).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    It(this, "onfocus", t => {
      const n = _(this, Qt).current;
      if (n) {
        const f = Math.min(n.value.length, this.opts.maxLength.current - 1),
          g = n.value.length;
        n.setSelectionRange(f, g), p(_(this, Kt), f, !0), p(_(this, Zt), g, !0)
      }
      _(this, de).current = !0
    });
    It(this, "onpaste", t => {
      var y, T, x, Z;
      const n = _(this, Qt).current;
      if (!n) return;
      const f = k => {
          const J = n.selectionStart === null ? void 0 : n.selectionStart,
            O = n.selectionEnd === null ? void 0 : n.selectionEnd,
            W = J !== O,
            K = this.opts.value.current;
          return (W ? K.slice(0, J) + k + K.slice(O) : K.slice(0, J) + k + K.slice(J)).slice(0, this.opts.maxLength.current)
        },
        g = k => k.length > 0 && r(_(this, oe)) && !r(_(this, oe)).test(k);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!_(this, Te).isIOS || !t.clipboardData || !n)) {
        const k = f((T = t.clipboardData) == null ? void 0 : T.getData("text/plain"));
        g(k) && t.preventDefault();
        return
      }
      const E = ((x = t.clipboardData) == null ? void 0 : x.getData("text/plain")) ?? "",
        D = (Z = this.opts.pasteTransformer) != null && Z.current ? this.opts.pasteTransformer.current(E) : E;
      t.preventDefault();
      const H = f(D);
      if (g(H)) return;
      n.value = H, this.opts.value.current = H;
      const F = Math.min(H.length, this.opts.maxLength.current - 1),
        N = H.length;
      n.setSelectionRange(F, N), p(_(this, Kt), F, !0), p(_(this, Zt), N, !0)
    });
    It(this, "onmouseover", t => {
      p(_(this, Ie), !0)
    });
    It(this, "onmouseleave", t => {
      p(_(this, Ie), !1)
    });
    It(this, "onblur", t => {
      if (r(_(this, he)).willSyntheticBlur) {
        r(_(this, he)).willSyntheticBlur = !1;
        return
      }
      _(this, de).current = !1
    });
    gt(this, ze, I(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(_(this, tn)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(_(this, Kt)),
        "data-pin-input-input-mse": r(_(this, Zt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(_(this, oe))) == null ? void 0 : t.source,
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
    gt(this, nn, I(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const f = _(this, de).current && r(_(this, Kt)) !== null && r(_(this, Zt)) !== null && (r(_(this, Kt)) === r(_(this, Zt)) && n === r(_(this, Kt)) || n >= r(_(this, Kt)) && n < r(_(this, Zt))),
        g = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: g,
        isActive: f,
        hasFakeCaret: f && g === null
      }
    })));
    gt(this, Fe, I(() => ({
      cells: r(_(this, nn)),
      isFocused: _(this, de).current,
      isHovering: r(_(this, Ie))
    })));
    var n;
    this.opts = t, this.attachment = mn(this.opts.ref), this.domContext = new Da(t.ref), pe(this, Te, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), pe(this, _e, Aa({
      containerRef: this.opts.ref,
      inputRef: _(this, Qt),
      isFocused: _(this, de),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), fe(() => {
      const f = _(this, Qt).current,
        g = this.opts.ref.current;
      if (!f || !g) return;
      _(this, Te).value.current !== f.value && (this.opts.value.current = f.value), r(_(this, he)).prev = [f.selectionStart, f.selectionEnd, f.selectionDirection ?? "none"];
      const E = Re(this.domContext.getDocument(), "selectionchange", _(this, je), {
        capture: !0
      });
      _(this, je).call(this), this.domContext.getActiveElement() === f && (_(this, de).current = !0), this.domContext.getElementById("pin-input-style") || En(this, en, Kn).call(this);
      const D = () => {
        g && g.style.setProperty("--bits-pin-input-root-height", `${f.clientHeight}px`)
      };
      D();
      const H = new ResizeObserver(D);
      return H.observe(f), () => {
        E(), H.disconnect()
      }
    }), ui([() => this.opts.value.current, () => _(this, Qt).current], () => {
      ka(() => {
        const f = _(this, Qt).current;
        if (!f) return;
        f.dispatchEvent(new Event("input"));
        const g = f.selectionStart,
          E = f.selectionEnd,
          D = f.selectionDirection ?? "none";
        g !== null && E !== null && (p(_(this, Kt), g, !0), p(_(this, Zt), E, !0), r(_(this, he)).prev = [g, E, D])
      }, this.domContext)
    }), Ut(() => {
      const f = this.opts.value.current,
        g = _(this, Ee).current,
        E = this.opts.maxLength.current,
        D = this.opts.onComplete.current;
      g !== void 0 && f !== g && g.length < E && f.length === E && D(f)
    })
  }
  static create(t) {
    return new bn(t)
  }
  get rootProps() {
    return r(_(this, We))
  }
  set rootProps(t) {
    p(_(this, We), t)
  }
  get inputWrapperProps() {
    return r(_(this, Ve))
  }
  set inputWrapperProps(t) {
    p(_(this, Ve), t)
  }
  get inputProps() {
    return r(_(this, ze))
  }
  set inputProps(t) {
    p(_(this, ze), t)
  }
  get snippetProps() {
    return r(_(this, Fe))
  }
  set snippetProps(t) {
    p(_(this, Fe), t)
  }
};
Qt = new WeakMap, Ie = new WeakMap, de = new WeakMap, Kt = new WeakMap, Zt = new WeakMap, Ee = new WeakMap, oe = new WeakMap, he = new WeakMap, _e = new WeakMap, Te = new WeakMap, $e = new WeakMap, We = new WeakMap, Ve = new WeakMap, tn = new WeakMap, en = new WeakSet, Kn = function() {
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
    gt(this, Ge, I(() => ({
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
    return r(_(this, Ge))
  }
  set props(t) {
    p(_(this, Ge), t)
  }
};
Ge = new WeakMap;
let gn = wn;

function ka(o, t) {
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
var Oa = dt("<div><!> <div><input/></div></div>");

function Ra(o, t) {
  const n = Mn();
  Yt(t, !0);
  let f = P(t, "id", 19, () => pn(n)),
    g = P(t, "inputId", 19, () => `${pn(n)}-input`),
    E = P(t, "ref", 15, null),
    D = P(t, "maxlength", 3, 6),
    H = P(t, "textalign", 3, "left"),
    F = P(t, "inputmode", 3, "numeric"),
    N = P(t, "onComplete", 3, Pn),
    y = P(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    T = P(t, "class", 3, ""),
    x = P(t, "autocomplete", 3, "one-time-code"),
    Z = P(t, "disabled", 3, !1),
    k = P(t, "value", 15, ""),
    J = P(t, "onValueChange", 3, Pn),
    O = Se(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const W = _n.create({
      id: Rt(() => f()),
      ref: Rt(() => E(), S => E(S)),
      inputId: Rt(() => g()),
      autocomplete: Rt(() => x()),
      maxLength: Rt(() => D()),
      textAlign: Rt(() => H()),
      disabled: Rt(() => Z()),
      inputmode: Rt(() => F()),
      pattern: Rt(() => t.pattern),
      onComplete: Rt(() => N()),
      value: Rt(() => k(), S => {
        k(S), J()(S)
      }),
      pushPasswordManagerStrategy: Rt(() => y()),
      pasteTransformer: Rt(() => t.pasteTransformer)
    }),
    K = I(() => Xe(O, W.inputProps)),
    M = I(() => Xe(W.rootProps, {
      class: T()
    })),
    C = I(() => Xe(W.inputWrapperProps, {}));
  var L = Oa();
  be(L, () => ({
    ...r(M)
  }));
  var R = tt(L);
  Ht(R, () => t.children ?? qt, () => W.snippetProps);
  var mt = Et(R, 2);
  be(mt, () => ({
    ...r(C)
  }));
  var At = tt(mt);
  be(At, () => ({
    ...r(K)
  }), void 0, void 0, void 0, void 0, !0), Y(mt), Y(L), v(o, L), Xt()
}
var Ma = dt("<div><!></div>");

function Ba(o, t) {
  const n = Mn();
  Yt(t, !0);
  let f = P(t, "id", 19, () => pn(n)),
    g = P(t, "ref", 15, null),
    E = Se(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const D = gn.create({
      id: Rt(() => f()),
      ref: Rt(() => g(), x => g(x)),
      cell: Rt(() => t.cell)
    }),
    H = I(() => Xe(E, D.props));
  var F = X(),
    N = G(F);
  {
    var y = x => {
        var Z = X(),
          k = G(Z);
        Ht(k, () => t.child, () => ({
          props: r(H)
        })), v(x, Z)
      },
      T = x => {
        var Z = Ma();
        be(Z, () => ({
          ...r(H)
        }));
        var k = tt(Z);
        Ht(k, () => t.children ?? qt), Y(Z), v(x, Z)
      };
    st(N, x => {
      t.child ? x(y) : x(T, !1)
    })
  }
  v(o, F), Xt()
}
var Ha = dt('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Ua = dt(" <!>", 1);

function Wa(o, t) {
  Yt(t, !0);
  let n = P(t, "ref", 15, null),
    f = Se(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var g = X(),
    E = G(g);
  {
    let D = I(() => Cn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    $t(E, () => Ba, (H, F) => {
      F(H, Oe({
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
        set ref(N) {
          n(N)
        },
        children: (N, y) => {
          Bn();
          var T = Ua(),
            x = G(T),
            Z = Et(x);
          {
            var k = J => {
              var O = Ha();
              v(J, O)
            };
            st(Z, J => {
              t.cell.hasFakeCaret && J(k)
            })
          }
          Tt(() => Bt(x, `${t.cell.char??""} `)), v(N, T)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  v(o, g), Xt()
}

function Va(o, t) {
  Yt(t, !0);
  let n = P(t, "ref", 15, null),
    f = P(t, "value", 15, ""),
    g = Se(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var E = X(),
    D = G(E);
  {
    let H = I(() => Cn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    $t(D, () => Ra, (F, N) => {
      N(F, Oe({
        get class() {
          return r(H)
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
  v(o, E), Xt()
}
var hn = {
    exports: {}
  },
  Rn;

function ja() {
  return Rn || (Rn = 1, (function(o) {
    (function(t) {
      o.exports ? o.exports = t() : window.intlTelInput = t()
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
          H = (l, e, i, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of g(e)) !E.call(l, a) && a !== i && n(l, a, {
                get: () => e[a],
                enumerable: !(s = f(e, a)) || s.enumerable
              });
            return l
          },
          F = l => H(n({}, "__esModule", {
            value: !0
          }), l),
          N = {};
        D(N, {
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
        var x = T,
          Z = {
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
          k = Z,
          J = {
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
          O = J,
          W = {
            ...k,
            ...O
          },
          K = W,
          M = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          C = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          L = {
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
          At = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          S = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          nt = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          pt = {
            NANP: "1"
          },
          Nt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          Ct = {
            ISO2: "us"
          },
          St = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Pt = {
            AUTO: "auto"
          },
          ne = {
            COUNTRY_CODE: "countryCode",
            DIAL_CODE: "dialCode"
          },
          ft = {
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
          Dt = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const l = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = Ft("(max-width: 500px)"),
                i = Ft("(max-height: 600px)"),
                s = Ft("(pointer: coarse)");
              return l || e || s && i
            }
            return !1
          },
          ie = {
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
            useFullscreenPopup: Dt(),
            validationNumberTypes: ["MOBILE"]
          },
          at = (l, e) => {
            l.useFullscreenPopup && (l.fixDropdownWidth = !1), l.onlyCountries.length === 1 && (l.initialCountry = l.onlyCountries[0]), l.separateDialCode && (l.nationalMode = !1), l.allowDropdown && !l.showFlags && !l.separateDialCode && (l.nationalMode = !1), l.useFullscreenPopup && !l.dropdownContainer && (l.dropdownContainer = document.body), l.i18n = {
              ...e,
              ...l.i18n
            }
          },
          it = l => l.replace(/\D/g, ""),
          bt = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          w = (l, e) => {
            const i = bt(e),
              s = [],
              a = [],
              c = [],
              u = [],
              h = [],
              d = [];
            for (const B of l) B.iso2 === i ? s.push(B) : B.normalisedName.startsWith(i) ? a.push(B) : B.normalisedName.includes(i) ? c.push(B) : i === B.dialCode || i === B.dialCodePlus ? u.push(B) : B.dialCodePlus.includes(i) ? h.push(B) : B.initials.includes(i) && d.push(B);
            const b = (B, _t) => B.priority - _t.priority;
            return [...s.sort(b), ...a.sort(b), ...c.sort(b), ...u.sort(b), ...h.sort(b), ...d.sort(b)]
          },
          V = (l, e) => {
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
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${ft.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          re = l => {
            const e = `iti-${l}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${ft.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          De = class {
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
                  class: `iti__country-container ${C.V_HIDE}`
                }, l), e ? (this.selectedCountry = lt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [ft.EXPANDED]: "false",
                  [ft.LABEL]: this.options.i18n.noCountrySelected,
                  [ft.HASPOPUP]: "dialog",
                  [ft.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = lt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const a = lt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = lt("div", {
                  class: C.FLAG
                }, a), e && (this.dropdownArrow = lt("div", {
                  class: "iti__arrow",
                  [ft.HIDDEN]: "true"
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
                  class: `iti__dropdown-content ${C.HIDE} ${u}`,
                  role: "dialog",
                  [ft.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), i && this._buildSearchUI(), this.countryList = lt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [ft.LABEL]: s.countryListAriaLabel
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
                [ft.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = Wt(), this.searchInput = lt("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: l.searchPlaceholder,
                role: "combobox",
                [ft.EXPANDED]: "true",
                [ft.LABEL]: l.searchPlaceholder,
                [ft.CONTROLS]: `iti-${this.id}__country-listbox`,
                [ft.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = lt("button", {
                type: "button",
                class: `iti__search-clear ${C.HIDE}`,
                [ft.LABEL]: l.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = re(this.id), this.searchResultsA11yText = lt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = lt("div", {
                class: `iti__no-results ${C.HIDE}`,
                [ft.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = l.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(C.V_HIDE))
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
                    [C.COUNTRY_ITEM]: !0
                  }),
                  a = lt("li", {
                    id: `iti-${this.id}__item-${i.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [ft.SELECTED]: "false"
                  });
                a.dataset.dialCode = i.dialCode, a.dataset.countryCode = i.iso2, i.nodeById[this.id] = a, this.options.showFlags && lt("div", {
                  class: `${C.FLAG} iti__${i.iso2}`
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
                const l = this.options.separateDialCode ? nt.SANE_SELECTED_WITH_DIAL_WIDTH : nt.SANE_SELECTED_NO_DIAL_WIDTH,
                  i = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || l) + nt.INPUT_PADDING_EXTRA_LEFT;
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
                b = h - a + e.scrollTop;
              if (h < a) e.scrollTop = b;
              else if (d > c) {
                const B = s - u;
                e.scrollTop = b - B
              }
            }
            highlightListItem(l, e) {
              const i = this.highlightedItem;
              if (i && i.classList.remove(C.HIGHLIGHT), this.highlightedItem = l, this.highlightedItem && (this.highlightedItem.classList.add(C.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(ft.ACTIVE_DESCENDANT, s)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(l) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== l && (this.selectedItem.setAttribute(ft.SELECTED, "false"), this.selectedItem = null), l && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${l}"]`);
                e && (e.setAttribute(ft.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(l) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const i of l) {
                const s = i.nodeById[this.id];
                s && (this.countryList.appendChild(s), e && (this.highlightListItem(s, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(C.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(C.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const l = this.telInput.parentNode;
              l.before(this.telInput), l.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const e of this.countries) delete e.nodeById[this.id];
              this.countries = null
            }
          },
          ae = l => {
            const {
              onlyCountries: e,
              excludeCountries: i
            } = l;
            if (e.length) {
              const s = e.map(a => a.toLowerCase());
              return x.filter(a => s.includes(a.iso2))
            } else if (i.length) {
              const s = i.map(a => a.toLowerCase());
              return x.filter(a => !s.includes(a.iso2))
            }
            return x
          },
          jt = (l, e) => {
            for (const i of l) {
              const s = i.iso2.toLowerCase();
              e.i18n[s] && (i.name = e.i18n[s])
            }
          },
          Vt = l => {
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
                  for (let b = 1; b < d.length; b++) {
                    const B = d.substring(0, b),
                      _t = u.dialCode + B;
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
          kt = (l, e) => {
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
          q = l => {
            for (const e of l) e.normalisedName = bt(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(i => i[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
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
          ge = (l, e, i, s, a) => {
            const c = i ? i.formatNumberAsYouType(l, s.iso2) : l,
              {
                dialCode: u
              } = s;
            return a && e.charAt(0) !== "+" && c.includes(`+${u}`) ? (c.split(`+${u}`)[1] || "").trim() : c
          },
          ve = (l, e, i, s) => {
            if (i === 0 && !s) return 0;
            let a = 0;
            for (let c = 0; c < e.length; c++) {
              if (/[+0-9]/.test(e[c]) && a++, a === l && !s) return c + 1;
              if (s && a === l + 1) return c
            }
            return e.length
          },
          xe = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ye = l => {
            const e = it(l);
            if (e.startsWith(pt.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return xe.includes(i)
            }
            return !1
          };
        for (const l of x) l.name = K[l.iso2];
        var Ne = 0,
          A = new Set(x.map(l => l.iso2)),
          U = l => A.has(l),
          rt = class qn {
            constructor(e, i = {}) {
              this.id = Ne++, this.options = {
                ...ie,
                ...i
              }, at(this.options, K), this.ui = new De(e, this.options, this.id), this.isAndroid = qn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = ae(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: c
              } = Vt(this.countries);
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
              jt(this.countries, this.options), kt(this.countries, this.options), q(this.countries)
            }
            _setInitialState(e = !1) {
              const i = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(i),
                a = this._getTelInputValue(),
                u = s && s.startsWith("+") && (!a || !a.startsWith("+")) ? s : a,
                h = this._getDialCode(u),
                d = ye(u),
                {
                  initialCountry: b,
                  geoIpLookup: B
                } = this.options,
                _t = b === Pt.AUTO && B;
              if (h && !d) this._updateCountryFromNumber(u);
              else if (!_t || e) {
                const ct = b ? b.toLowerCase() : "";
                U(ct) ? this._setCountry(ct) : h && d ? this._setCountry(Ct.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(C.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", i, {
                signal: e
              });
              const a = () => {
                this.ui.dropdownContent.classList.contains(C.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", a, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(C.HIDE) && [L.ARROW_UP, L.ARROW_DOWN, L.SPACE, L.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === L.TAB && this._closeDropdown()
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
              i === Pt.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              m.autoCountry ? this.handleAutoCountry() : m.startedLoadingAutoCountry || (m.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const i = e.toLowerCase();
                U(i) ? (m.autoCountry = i, setTimeout(() => $("handleAutoCountry"))) : (this._setInitialState(!0), $("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), $("rejectAutoCountryPromise")
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
              mt.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const h = d => {
                const b = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && a && c) {
                  const z = this.ui.telInput.selectionStart || 0,
                    vt = b.substring(0, z - 1),
                    et = b.substring(z);
                  this._setTelInputValue(vt + et), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(b) && this._triggerCountryChange();
                const B = (d == null ? void 0 : d.data) && mt.NON_PLUS_NUMERIC.test(d.data),
                  _t = (d == null ? void 0 : d.inputType) === R.PASTE && b;
                B || _t && !e ? u = !0 : mt.NON_PLUS_NUMERIC.test(b) || (u = !1);
                const ct = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  j = this.userNumeralSet === "ascii";
                if (i && !u && !ct && j) {
                  const z = this.ui.telInput.selectionStart || 0,
                    et = b.substring(0, z).replace(mt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (d == null ? void 0 : d.inputType) === R.DELETE_FWD,
                    ot = this._getFullNumber(),
                    Gt = ge(ot, b, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    zt = ve(et, Gt, z, ht);
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
                        b = !h.startsWith("+") && this.ui.telInput.selectionStart === 0 && u.key === "+",
                        B = this._normaliseNumerals(u.key),
                        _t = /^[0-9]$/.test(B),
                        ct = i ? _t : b || _t,
                        j = this.ui.telInput,
                        z = j.selectionStart,
                        vt = j.selectionEnd,
                        et = h.slice(0, z),
                        ht = h.slice(vt),
                        ot = et + u.key + ht,
                        Gt = this._getFullNumber(ot),
                        zt = m.utils.getCoreNumber(Gt, this.selectedCountryData.iso2),
                        xt = this.maxCoreNumberLength && zt.length > this.maxCoreNumberLength,
                        ee = this._getNewCountryFromNumber(Gt) !== null;
                      (!ct || xt && !ee && !b) && u.preventDefault()
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
                    b = this.selectedCountryData.iso2,
                    B = i.clipboardData.getData("text"),
                    _t = this._normaliseNumerals(B),
                    ct = a === 0 && c > 0,
                    j = !u.startsWith("+") || ct,
                    z = _t.replace(mt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    vt = z.startsWith("+"),
                    et = z.replace(/\+/g, ""),
                    ht = vt && j ? `+${et}` : et;
                  let ot = h + ht + d;
                  if (ot.length > 5) {
                    let zt = m.utils.getCoreNumber(ot, b);
                    for (; zt.length === 0 && ot.length > 0;) ot = ot.slice(0, -1), zt = m.utils.getCoreNumber(ot, b);
                    if (!zt) return;
                    if (this.maxCoreNumberLength && zt.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const xt = zt.length - this.maxCoreNumberLength;
                        ot = ot.slice(0, ot.length - xt)
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(C.HIDE), this.ui.selectedCountry.setAttribute(ft.EXPANDED, "true"), this._setDropdownPosition(), i) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(C.ARROW_UP), this._trigger(M.OPEN_COUNTRY_DROPDOWN)
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
                const a = (c = s.target) == null ? void 0 : c.closest(`.${C.COUNTRY_ITEM}`);
                a && this.ui.highlightListItem(a, !1)
              };
              this.ui.countryList.addEventListener("mouseover", i, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const i = s => {
                var c;
                const a = (c = s.target) == null ? void 0 : c.closest(`.${C.COUNTRY_ITEM}`);
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
                [L.ARROW_UP, L.ARROW_DOWN, L.ENTER, L.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === L.ARROW_UP || c.key === L.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === L.ENTER ? this._handleEnterKey() : c.key === L.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && mt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), i += c.key.toLowerCase(), this._searchForCountry(i), s = setTimeout(() => {
                  i = ""
                }, At.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", a, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const i = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(C.HIDE) : this.ui.searchClearButton.classList.add(C.HIDE)
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
              const i = V(this.countries, e);
              if (i) {
                const s = i.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let i;
              e === "" ? i = this.countries : i = w(this.countries, e), this.ui.filterCountries(i)
            }
            _handleUpDownKey(e) {
              var s, a;
              let i = e === L.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === L.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
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
                h = it(s);
              if (u) {
                const d = it(u),
                  b = this.dialCodeToIso2Map[d];
                if (b.length === 1) return b[0] === a ? null : b[0];
                if (!a && this.defaultCountry && b.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === pt.NANP && ye(h)) return null;
                const {
                  areaCodes: _t,
                  priority: ct
                } = this.selectedCountryData;
                if (_t) {
                  const ht = _t.map(ot => `${c}${ot}`);
                  for (const ot of ht)
                    if (h.startsWith(ot)) return null
                }
                const z = _t && !(ct === 0) && h.length > d.length,
                  vt = a && b.includes(a) && !z,
                  et = a === b[0];
                if (!vt && !et) return b[0]
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
                const h = e && s ? `${C.FLAG} iti__${e}` : `${C.FLAG} ${C.GLOBE}`;
                let d, b;
                if (e) {
                  const {
                    name: B,
                    dialCode: _t
                  } = this.selectedCountryData;
                  b = B, d = a.selectedCountryAriaLabel.replace("${countryName}", B).replace("${dialCode}", `+${_t}`)
                } else b = a.noCountrySelected, d = a.noCountrySelected;
                this.ui.selectedCountryInner.className = h, this.ui.selectedCountry.setAttribute("title", b), this.ui.selectedCountry.setAttribute(ft.LABEL, d)
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
              } = this.options, c = e === St.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === St.POLITE;
              if (m.utils && c) {
                const u = m.utils.numberType[i];
                let h = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, s, u) : "";
                h = this._beforeSetNumber(h), typeof a == "function" && (h = a(h, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", h)
              }
            }
            _selectListItem(e) {
              const i = e.dataset[ne.COUNTRY_CODE],
                s = this._setCountry(i);
              this._closeDropdown();
              const a = e.dataset[ne.DIAL_CODE];
              if (this._updateDialCode(a), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(C.HIDE) || (this.ui.dropdownContent.classList.add(C.HIDE), this.ui.selectedCountry.setAttribute(ft.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(ft.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(C.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(C.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(M.CLOSE_COUNTRY_DROPDOWN))
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
              const c = it(i);
              return this.options.separateDialCode && !i.startsWith("+") && s && c ? a = `+${s}` : a = "", a + i
            }
            _beforeSetNumber(e) {
              const i = this._getDialCode(e),
                s = me(e, i, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(M.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Pt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(C.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
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
              return m.utils ? m.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : S.UNKNOWN_NUMBER_TYPE
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
              return S.UNKNOWN_VALIDATION_ERROR
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
                a = s.search(mt.ALPHA_UNICODE);
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
              this._updateValFromNumber(i), s && this._triggerCountryChange(), this._trigger(M.INPUT, {
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
                return m.utils = s, $("handleUtils"), !0
              }).catch(i => {
                throw $("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          $ = (l, ...e) => {
            Object.values(m.instances).forEach(i => {
              const s = i[l];
              typeof s == "function" && s.apply(i, e)
            })
          },
          m = Object.assign((l, e) => {
            const i = new rt(l, e);
            return m.instances[i.id] = i, l.iti = i, i
          }, {
            defaults: ie,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => x,
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
        return F(N)
      })();
      return t.default
    })
  })(hn)), hn.exports
}
var za = ja();
const Fa = hi(za);
var Ga = dt('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  Ka = dt('<span class="w-8"> </span>'),
  qa = dt('<span class="loading loading-spinner center-absolute absolute"></span>'),
  Ya = dt('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  Xa = dt('<span class="w-8"> </span>'),
  Qa = dt('<span class="loading loading-spinner center-absolute absolute"></span>'),
  Za = dt('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  Ja = dt('<div class="flex h-full w-full flex-col items-center"><!></div>');

function $a(o, t) {
  Yt(t, !0);
  let n = P(t, "verifyingPhone", 15, ""),
    f = Q(!0),
    g = Q(0),
    E = Q(!1);
  const D = I(() => r(g) > 0 || r(E));
  let H = Q(!1),
    F = Q(""),
    N = Q(""),
    y = Q(void 0);
  const T = I(() => r(F) === "whatsapp"),
    x = I(() => {
      var M;
      return `phone:${(M=Qe.data)==null?void 0:M.id}`
    });
  Ut(() => {
    const M = localStorage.getItem(r(x));
    M && n(M)
  }), fe(() => {
    ln.getOtpCooldown().then(L => {
      p(g, L.cooldownMs, !0)
    }).catch(L => {
      Ce.error(L.message)
    }).finally(() => {
      p(f, !1)
    });
    const M = 1e3,
      C = setInterval(() => {
        p(g, Math.max(0, r(g) - M), !0)
      }, M);
    return () => {
      clearInterval(C)
    }
  });
  async function Z(M) {
    try {
      p(E, !0);
      const C = await ln.sendOtp(M, r(T)),
        L = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      Ce.info(as({
        channel: L[C.channel],
        phone: C.phone
      }), {
        duration: 1e4
      }), n(C.phone), p(g, C.cooldownMs, !0), p(F, C.channel, !0), localStorage.setItem(r(x), n())
    } catch (C) {
      Ce.error(C.message)
    } finally {
      p(E, !1)
    }
  }
  Ut(() => {
    r(N).length === 6 && (p(H, !0), (async () => {
      try {
        await ln.verifyChallenge({
          type: "otp",
          code: r(N)
        }), Ce.success(Xr()), localStorage.removeItem(r(x)), t.onsuccess(n())
      } catch (M) {
        Ce.error(M.message)
      } finally {
        p(N, ""), p(H, !1)
      }
    })())
  });
  var k = Ja(),
    J = tt(k);
  {
    var O = M => {
        var C = Ga();
        v(M, C)
      },
      W = M => {
        var C = Ya(),
          L = G(C),
          R = tt(L),
          mt = tt(R),
          At = tt(mt, !0);
        Y(mt);
        var S = Et(mt, 2),
          nt = tt(S, !0);
        Y(S), Y(R);
        var pt = Et(R, 2),
          Nt = tt(pt);
        Un(Nt, () => at => {
          var it, bt;
          return p(y, Fa(at, {
            strictMode: !0,
            initialCountry: ((bt = (it = Qe.data) == null ? void 0 : it.country) == null ? void 0 : bt.toLocaleLowerCase()) ?? "br",
            loadUtils: () => Ii(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: document.body
          })), () => {
            var w;
            (w = r(y)) == null || w.destroy()
          }
        });
        var Ct = Et(Nt, 2),
          St = tt(Ct),
          Pt = Et(St);
        {
          var ne = at => {
            var it = Ka(),
              bt = tt(it);
            Y(it), Tt(w => Bt(bt, `(${w??""})`), [() => Dn(r(g))]), v(at, it)
          };
          st(Pt, at => {
            r(g) > 0 && at(ne)
          })
        }
        var ft = Et(Pt, 2);
        {
          var Ft = at => {
            var it = qa();
            v(at, it)
          };
          st(ft, at => {
            r(E) && at(Ft)
          })
        }
        Y(Ct), Y(pt), Y(L);
        var Dt = Et(L, 2),
          ie = tt(Dt, !0);
        Y(Dt), Tt((at, it, bt, w) => {
          Bt(At, at), Bt(nt, it), Ct.disabled = r(D), Bt(St, `${bt??""} `), Bt(ie, w)
        }, [() => Ir(), () => Mr(), () => Ro(), () => cr()]), rn("submit", pt, async () => {
          var it;
          if (r(D)) return;
          if (!((it = r(y)) != null && it.isValidNumber())) {
            Ce.error(Zi());
            return
          }
          const at = r(y).getNumber();
          await Z(at)
        }), v(M, C)
      },
      K = M => {
        var C = Za(),
          L = G(C),
          R = tt(L),
          mt = tt(R, !0);
        Y(R);
        var At = Et(R, 2),
          S = tt(At, !0);
        Y(At), Y(L);
        var nt = Et(L, 2),
          pt = tt(nt);
        {
          const at = (it, bt) => {
            let w = () => bt == null ? void 0 : bt().cells;
            var V = X(),
              wt = G(V);
            $t(wt, () => _a, (lt, Wt) => {
              Wt(lt, {
                class: "border-primary",
                children: (re, De) => {
                  var ae = X(),
                    jt = G(ae);
                  Ze(jt, 16, w, Vt => Vt, (Vt, kt) => {
                    var q = X(),
                      me = G(q);
                    $t(me, () => Wa, (ge, ve) => {
                      ve(ge, {
                        get cell() {
                          return kt
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), v(Vt, q)
                  }), v(re, ae)
                },
                $$slots: {
                  default: !0
                }
              })
            }), v(it, V)
          };
          $t(pt, () => Va, (it, bt) => {
            bt(it, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return r(H)
              },
              get value() {
                return r(N)
              },
              set value(w) {
                p(N, w, !0)
              },
              children: at,
              $$slots: {
                default: !0
              }
            })
          })
        }
        Y(nt);
        var Nt = Et(nt, 2),
          Ct = tt(Nt),
          St = tt(Ct),
          Pt = Et(St);
        {
          var ne = at => {
            var it = Xa(),
              bt = tt(it);
            Y(it), Tt(w => Bt(bt, `(${w??""})`), [() => Dn(r(g))]), v(at, it)
          };
          st(Pt, at => {
            r(g) > 0 && at(ne)
          })
        }
        var ft = Et(Pt, 2);
        {
          var Ft = at => {
            var it = Qa();
            v(at, it)
          };
          st(ft, at => {
            r(E) && at(Ft)
          })
        }
        Y(Ct);
        var Dt = Et(Ct, 2),
          ie = tt(Dt, !0);
        Y(Dt), Y(Nt), Tt((at, it, bt, w) => {
          Bt(mt, at), Bt(S, it), Ct.disabled = r(D), Bt(St, `${bt??""} `), Bt(ie, w)
        }, [() => Hi(), () => Yo({
          phone: n()
        }), () => r(T) ? wo() : lo(), () => Cs()]), se("click", Ct, async () => {
          await Z(n())
        }), se("click", Dt, () => {
          n("")
        }), v(M, C)
      };
    st(J, M => {
      r(f) ? M(O) : n() ? M(K, !1) : M(W, 1)
    })
  }
  Y(k), v(o, k), Xt()
}
on(["click"]);
let Pe = Q(!1);
var tl = dt("<div></div>"),
  el = dt('<button type="button" class="btn">Retry</button>'),
  nl = dt('<span class="loading loading-spinner loading-lg"></span>'),
  il = dt("<div><!></div>");

function rl(o, t) {
  Yt(t, !0);
  let n = P(t, "widgetId", 15),
    f = P(t, "appearance", 3, "always"),
    g = P(t, "language", 3, "auto"),
    E = P(t, "execution", 3, "render"),
    D = P(t, "retryInterval", 3, 8e3),
    H = P(t, "retry", 3, "auto"),
    F = P(t, "refreshExpired", 3, "auto"),
    N = P(t, "theme", 3, "auto"),
    y = P(t, "size", 3, "normal"),
    T = P(t, "tabIndex", 3, 0);
  P(t, "reset", 15)(() => {
    var S;
    n() && ((S = window == null ? void 0 : window.turnstile) == null || S.reset(n()))
  });
  const Z = I(() => ({
      sitekey: t.siteKey,
      callback: (S, nt) => {
        var pt;
        (pt = t.callback) == null || pt.call(t, S, nt)
      },
      "error-callback": S => {
        var nt;
        (nt = t.errorCallback) == null || nt.call(t, S)
      },
      "timeout-callback": () => {
        var S;
        (S = t.timeoutCallback) == null || S.call(t)
      },
      "expired-callback": () => {
        var S;
        (S = t.expiredCallback) == null || S.call(t)
      },
      "before-interactive-callback": () => {
        var S;
        (S = t.beforeInteractiveCallback) == null || S.call(t)
      },
      "after-interactive-callback": () => {
        var S;
        (S = t.afterInteractiveCallback) == null || S.call(t)
      },
      "unsupported-callback": () => {
        var S;
        return (S = t.unsupportedCallback) == null ? void 0 : S.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? "cf-turnstile-response",
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": F(),
      "retry-interval": D(),
      tabindex: T(),
      appearance: f(),
      execution: E(),
      language: g(),
      action: t.action,
      retry: H(),
      theme: N(),
      cData: t.cData,
      size: y()
    })),
    k = (S, nt) => {
      let pt = window.turnstile.render(S, nt);
      return n(pt), {
        destroy() {
          window.turnstile.remove(pt)
        },
        update(Nt) {
          window.turnstile.remove(pt), pt = window.turnstile.render(S, Nt), n(pt)
        }
      }
    };
  let J = Q(!1),
    O = Q(!1),
    W;

  function K() {
    const S = document.createElement("script");
    S.type = "text/javascript", S.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", S.async = !0, S.addEventListener("load", () => p(Pe, !0), {
      once: !0
    }), document.head.appendChild(S)
  }

  function M() {
    p(O, !1), W && clearTimeout(W), W = setTimeout(() => {
      (!r(Pe) || !r(J)) && p(O, !0)
    }, 5e3)
  }

  function C() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(S => S.remove()), p(Pe, !1), K(), M()
  }
  fe(() => (p(J, !0), r(Pe) || K(), M(), () => {
    p(J, !1), W && clearTimeout(W)
  }));
  var L = X(),
    R = G(L);
  {
    var mt = S => {
        var nt = tl();
        let pt;
        Hn(nt, (Nt, Ct) => k == null ? void 0 : k(Nt, Ct), () => r(Z)), Tt(() => pt = Jt(nt, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", pt, {
          flexible: y() == "flexible"
        })), v(S, nt)
      },
      At = S => {
        var nt = il(),
          pt = tt(nt);
        {
          var Nt = St => {
              var Pt = el();
              se("click", Pt, C), v(St, Pt)
            },
            Ct = St => {
              var Pt = nl();
              v(St, Pt)
            };
          st(pt, St => {
            r(O) ? St(Nt) : St(Ct, !1)
          })
        }
        Y(nt), Tt(() => Jt(nt, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), v(S, nt)
      };
    st(R, S => {
      r(Pe) && r(J) ? S(mt) : S(At, !1)
    })
  }
  v(o, L), Xt()
}
on(["click"]);
var ol = dt('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function sl(o, t) {
  Yt(t, !0);
  const n = I(() => un.current !== null),
    f = I(() => {
      var T;
      return (T = un.current) == null ? void 0 : T.tier
    });
  let g = Q("");
  var E = ol(),
    D = tt(E);
  let H;
  var F = tt(D),
    N = tt(F);
  {
    var y = T => {
      var x = X(),
        Z = G(x);
      vi(Z, () => un.errorCount, k => {
        var J = X(),
          O = G(J);
        {
          var W = C => {
              {
                let L = I(() => bi.trim());
                rl(C, {
                  get siteKey() {
                    return r(L)
                  },
                  callback: R => Nn(R),
                  errorCallback: () => xn()
                })
              }
            },
            K = C => {
              {
                let L = I(() => wi.trim());
                ma(C, {
                  get siteKey() {
                    return r(L)
                  },
                  callback: R => Nn(R),
                  errorCallback: () => xn()
                })
              }
            },
            M = C => {
              $a(C, {
                onsuccess: () => oi(),
                get verifyingPhone() {
                  return r(g)
                },
                set verifyingPhone(L) {
                  p(g, L, !0)
                }
              })
            };
          st(O, C => {
            r(f) === 2 ? C(W) : r(f) === 3 ? C(K, 1) : r(f) === 4 && C(M, 2)
          })
        }
        v(k, J)
      }), v(T, x)
    };
    st(N, T => {
      r(n) && T(y)
    })
  }
  Y(F), Y(D), Bn(2), Y(E), Un(E, () => T => {
    Ut(() => {
      r(n) ? T.show() : T.close()
    })
  }), Tt(() => H = Jt(D, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, H, {
    "h-84": r(f) === 4 && !r(g)
  })), rn("close", E, () => ri()), v(o, E), Xt()
}
var al = dt('<span class="hidden"> </span> <!> <!> <!>', 1);

function Ll(o, t) {
  Yt(t, !0), fe(() => {
    const y = mi();
    Ln.init(), si(), setTimeout(() => {
      Qe.data && ai()
    }, 5e3);
    const T = pi(async () => {
      await Qe.refresh()
    }, {
      interval: li.hour,
      immediate: !0
    });
    let x = setInterval(() => {
      _i()
    }, 5e3);
    return () => {
      clearTimeout(x), y(), T(), Ln.cleanup()
    }
  });
  const n = "muted";
  fe(() => {
    fn.muted = localStorage.getItem(n) === "1"
  }), Ut(() => {
    {
      const y = fn.muted;
      document.querySelectorAll("audio").forEach(T => {
        T.muted = y
      });
      for (const T of Object.values(fi).filter(x => x instanceof Audio)) T.muted = y, y || (T.volume = .3);
      localStorage.setItem(n, Number(y).toString())
    }
  }), fe(() => {});
  var f = al();
  rn("beforeunload", ti, () => {
    gi()
  });
  var g = G(f),
    E = tt(g);
  Y(g);
  var D = Et(g, 2);
  {
    var H = y => {
      var T = X(),
        x = G(T);
      Ht(x, () => t.children), v(y, T)
    };
    st(D, y => {
      y(H, !1)
    })
  }
  var F = Et(D, 2);
  sl(F, {});
  var N = Et(F, 2);
  ua(N, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Tt(() => Bt(E, `Version: ${ni}`)), v(o, f), Xt()
}
export {
  Ll as component, Nl as universal
};