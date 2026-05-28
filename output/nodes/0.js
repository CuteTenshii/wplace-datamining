var Yn = Object.defineProperty;
var wn = l => {
  throw TypeError(l)
};
var Xn = (l, t, n) => t in l ? Yn(l, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : l[t] = n;
var vt = (l, t, n) => Xn(l, typeof t != "symbol" ? t + "" : t, n),
  rn = (l, t, n) => t.has(l) || wn("Cannot " + n);
var p = (l, t, n) => (rn(l, t, "read from private field"), n ? n.call(l) : t.get(l)),
  ft = (l, t, n) => t.has(l) ? wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(l) : t.set(l, n),
  fe = (l, t, n, h) => (rn(l, t, "write to private field"), h ? h.call(l, n) : t.set(l, n), n),
  In = (l, t, n) => (rn(l, t, "access private method"), n);
import "../chunks/Bzak7iHL.js";
import {
  o as pe
} from "../chunks/CaAw5X55.js";
import {
  p as Jt,
  d as J,
  a as y,
  r as q,
  t as Tt,
  b as $t,
  c as ht,
  M as Zn,
  L as En,
  N as Qn,
  e as it,
  g as _n,
  D as Ot,
  h as g,
  i as r,
  I as Pe,
  s as wt,
  u as w,
  aW as Ft,
  m as Y,
  f as G,
  bj as Tn,
  o as Ge,
  by as Mn,
  n as Rn,
  bx as Jn
} from "../chunks/5zj5-rPA.js";
import {
  c as $n,
  s as Pt
} from "../chunks/DDRNvPA5.js";
import {
  i as lt
} from "../chunks/D-uzaoLl.js";
import {
  s as kt
} from "../chunks/C2ATkZL9.js";
import {
  o as Oe,
  a as ue,
  e as en,
  d as gn
} from "../chunks/CRfpTDDG.js";
import {
  v as ti
} from "../chunks/BKAXr_V0.js";
import {
  o as At,
  p as ae,
  q as ei,
  l as cn,
  a as sn,
  t as ye,
  u as dn,
  r as Dn,
  v as ni,
  w as on,
  x as Sn,
  y as Nn,
  z as ii,
  k as ri,
  B as si,
  C as oi,
  D as xn,
  T as ai
} from "../chunks/C3ICfNT7.js";
import {
  i as nn,
  b as Lt,
  s as Ln,
  a as hn,
  w as li,
  c as ui,
  d as ci,
  e as fn,
  n as An,
  m as Ye,
  g as di,
  A as hi,
  f as fi,
  h as mi,
  j as pi,
  k as _i
} from "../chunks/DnnyFWgG.js";
import {
  k as gi
} from "../chunks/BSGp0PTp.js";
import {
  c as le,
  a as ie,
  s as _t,
  b as an,
  d as Ce,
  S as vi,
  i as yi,
  e as Bn
} from "../chunks/B13kG5TI.js";
import {
  a as Ci,
  T as bi
} from "../chunks/BoCK0W2L.js";
import {
  p as K,
  s as ke,
  r as Te
} from "../chunks/C4sT4bjp.js";
import {
  _ as wi
} from "../chunks/Dp1pzeXC.js";
import {
  e as Xe
} from "../chunks/DtTXMYQV.js";
import {
  c as Qt
} from "../chunks/yb-uQbOV.js";
import {
  b as vn
} from "../chunks/W8HBKPHS.js";
import {
  t as Ii
} from "../chunks/CPcsbTWB.js";
import {
  g as ee
} from "../chunks/BhCkpOlh.js";
import "../chunks/CS_Fds9u.js";
const Ei = !0,
  ul = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Ei
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ti = () => "Input the code",
  Di = () => "Insira o código",
  Si = () => "输入验证码",
  Ni = () => "Code eingeben",
  xi = () => "Introduce el código",
  Li = () => "Entrez le code",
  Ai = () => "Inserisci il codice",
  Pi = () => "コードを入力してください。",
  ki = () => "Wpisz kod",
  Oi = () => "Введите код",
  Mi = () => "Введіть код",
  Ri = () => "Nhập mã",
  Bi = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Ti() : n === "pt" ? Di() : n === "ch" ? Si() : n === "de" ? Ni() : n === "es" ? xi() : n === "fr" ? Li() : n === "it" ? Ai() : n === "jp" ? Pi() : n === "pl" ? ki() : n === "ru" ? Oi() : n === "uk" ? Mi() : Ri()
  },
  Hi = () => "Not a valid phone number",
  Ui = () => "Não é um número válido",
  Wi = () => "不是有效的电话号码",
  Vi = () => "Keine gültige Telefonnummer",
  ji = () => "No es un número de teléfono válido",
  zi = () => "Numéro non valide",
  Fi = () => "Numero non valido",
  Gi = () => "有効な電話番号ではありません。",
  Ki = () => "To nie jest prawidłowy numer telefonu",
  qi = () => "Неверный номер телефона",
  Yi = () => "Некоректний номер телефону",
  Xi = () => "Không phải số điện thoại hợp lệ",
  Zi = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Hi() : n === "pt" ? Ui() : n === "ch" ? Wi() : n === "de" ? Vi() : n === "es" ? ji() : n === "fr" ? zi() : n === "it" ? Fi() : n === "jp" ? Gi() : n === "pl" ? Ki() : n === "ru" ? qi() : n === "uk" ? Yi() : Xi()
  },
  Qi = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  Ji = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  $i = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  tr = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  er = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  nr = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  ir = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  rr = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  sr = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  or = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  ar = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  lr = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  ur = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Qi() : n === "pt" ? Ji() : n === "ch" ? $i() : n === "de" ? tr() : n === "es" ? er() : n === "fr" ? nr() : n === "it" ? ir() : n === "jp" ? rr() : n === "pl" ? sr() : n === "ru" ? or() : n === "uk" ? ar() : lr()
  },
  cr = () => "Phone verification",
  dr = () => "Verificação de telefone",
  hr = () => "电话验证",
  fr = () => "Telefon-Verifizierung",
  mr = () => "Verificación de teléfono",
  pr = () => "Vérification du téléphone",
  _r = () => "Verifica del telefono",
  gr = () => "電話番号の確認",
  vr = () => "Weryfikacja telefonu",
  yr = () => "Подтверждение телефона",
  Cr = () => "Підтвердження телефону",
  br = () => "Xác minh số điện thoại",
  wr = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? cr() : n === "pt" ? dr() : n === "ch" ? hr() : n === "de" ? fr() : n === "es" ? mr() : n === "fr" ? pr() : n === "it" ? _r() : n === "jp" ? gr() : n === "pl" ? vr() : n === "ru" ? yr() : n === "uk" ? Cr() : br()
  },
  Ir = () => "Please verify your phone number to continue painting. This helps us keep bots out and ensure a safe, creative experience for everyone.",
  Er = () => "Por favor, verifique com seu telefone para continuar pintando. Isso nos ajuda a filtrar bots e manter um experiência segura e criativa para todos.",
  Tr = () => "请验证你的电话号码以继续绘画。这有助于我们防止机器人并确保所有人的安全和创作环境。",
  Dr = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots fernzuhalten und eine sichere, kreative Umgebung für alle zu gewährleisten.",
  Sr = () => "Verifica tu número de teléfono para continuar pintando. Nos ayuda a mantener a los bots fuera y garantizar una experiencia segura y creativa para todos.",
  Nr = () => "Veuillez vérifier votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et à garantir une expérience sûre et créative pour tous.",
  xr = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a filtrare i bot e mantenere un'esperienza sicura e creativa per tutti.",
  Lr = () => "描き続けるには電話番号の確認が必要です。これはボットを排除し、すべてのプレイヤーに安全でクリエイティブな体験を提供するために必要な手順です。",
  Ar = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to powstrzymywać boty i zapewniać bezpieczną, kreatywną zabawę dla wszystkich.",
  Pr = () => "Пожалуйста, подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам защищаться от ботов и поддерживать безопасную и творческую атмосферу для всех.",
  kr = () => "Будь ласка, підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам відсіювати ботів і забезпечувати безпечний та креативний досвід для всіх.",
  Or = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi ngăn bot và giữ trải nghiệm sáng tạo, an toàn cho mọi người.",
  Mr = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Ir() : n === "pt" ? Er() : n === "ch" ? Tr() : n === "de" ? Dr() : n === "es" ? Sr() : n === "fr" ? Nr() : n === "it" ? xr() : n === "jp" ? Lr() : n === "pl" ? Ar() : n === "ru" ? Pr() : n === "uk" ? kr() : Or()
  },
  Rr = () => "Phone successfully verified",
  Br = () => "Telefone verificado com sucesso",
  Hr = () => "电话验证成功",
  Ur = () => "Telefon erfolgreich verifiziert",
  Wr = () => "Teléfono verificado correctamente",
  Vr = () => "Téléphone vérifié avec succès",
  jr = () => "Telefono verificato con successo",
  zr = () => "電話番号を確認しました。",
  Fr = () => "Telefon został pomyślnie zweryfikowany",
  Gr = () => "Телефон успешно подтверждён",
  Kr = () => "Телефон успішно підтверджено",
  qr = () => "Đã xác minh số điện thoại thành công",
  Yr = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Rr() : n === "pt" ? Br() : n === "ch" ? Hr() : n === "de" ? Ur() : n === "es" ? Wr() : n === "fr" ? Vr() : n === "it" ? jr() : n === "jp" ? zr() : n === "pl" ? Fr() : n === "ru" ? Gr() : n === "uk" ? Kr() : qr()
  },
  Xr = () => "Resend Code",
  Zr = () => "Reenviar Código",
  Qr = () => "重新发送验证码",
  Jr = () => "Code erneut senden",
  $r = () => "Reenviar código",
  ts = () => "Renvoyer le code",
  es = () => "Reinvia codice",
  ns = () => "コードを再送信",
  is = () => "Wyślij kod ponownie",
  rs = () => "Отправить код ещё раз",
  ss = () => "Надіслати код ще раз",
  os = () => "Gửi lại mã",
  as = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Xr() : n === "pt" ? Zr() : n === "ch" ? Qr() : n === "de" ? Jr() : n === "es" ? $r() : n === "fr" ? ts() : n === "it" ? es() : n === "jp" ? ns() : n === "pl" ? is() : n === "ru" ? rs() : n === "uk" ? ss() : os()
  },
  ls = () => "Send Code",
  us = () => "Enviar o código",
  cs = () => "发送验证码",
  ds = () => "Code senden",
  hs = () => "Enviar código",
  fs = () => "Envoyer le code",
  ms = () => "Invia codice",
  ps = () => "コードを送信",
  _s = () => "Wyślij kod",
  gs = () => "Отправить код",
  vs = () => "Надіслати код",
  ys = () => "Gửi mã",
  Cs = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? ls() : n === "pt" ? us() : n === "ch" ? cs() : n === "de" ? ds() : n === "es" ? hs() : n === "fr" ? fs() : n === "it" ? ms() : n === "jp" ? ps() : n === "pl" ? _s() : n === "ru" ? gs() : n === "uk" ? vs() : ys()
  },
  bs = () => "Sent to",
  ws = () => "Enviar para",
  Is = () => "发送给",
  Es = () => "Gesendet an",
  Ts = () => "Enviado a",
  Ds = () => "Envoyé à",
  Ss = () => "Invia a",
  Ns = () => "送信先",
  xs = () => "Wysłano do",
  Ls = () => "Отправлено",
  As = () => "Надіслано",
  Ps = () => "Gửi tới",
  ks = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? bs() : n === "pt" ? ws() : n === "ch" ? Is() : n === "de" ? Es() : n === "es" ? Ts() : n === "fr" ? Ds() : n === "it" ? Ss() : n === "jp" ? Ns() : n === "pl" ? xs() : n === "ru" ? Ls() : n === "uk" ? As() : Ps()
  },
  Os = () => "SMS sent to",
  Ms = () => "SMS enviado para",
  Rs = () => "短信已发送至",
  Bs = () => "SMS gesendet an",
  Hs = () => "SMS enviado a",
  Us = () => "SMS envoyé à",
  Ws = () => "SMS inviato a",
  Vs = () => "SMS送信先",
  js = () => "SMS wysłano do",
  zs = () => "SMS отправлено на",
  Fs = () => "SMS надіслано на",
  Gs = () => "SMS được gửi tới",
  Ks = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? Os() : n === "pt" ? Ms() : n === "ch" ? Rs() : n === "de" ? Bs() : n === "es" ? Hs() : n === "fr" ? Us() : n === "it" ? Ws() : n === "jp" ? Vs() : n === "pl" ? js() : n === "ru" ? zs() : n === "uk" ? Fs() : Gs()
  },
  qs = () => "Try another number",
  Ys = () => "Tentar outro número",
  Xs = () => "请尝试使用其他号码",
  Zs = () => "Andere Nummer versuchen",
  Qs = () => "Prueba con otro número",
  Js = () => "Essayez un autre numéro",
  $s = () => "Prova un altro numero",
  to = () => "別の番号をお試しください。",
  eo = () => "Spróbuj innego numeru",
  no = () => "Попробуйте другой номер",
  io = () => "Спробувати інший номер",
  ro = () => "Thử số khác",
  so = (l = {}, t = {}) => {
    const n = t.locale ?? ee();
    return n === "en" ? qs() : n === "pt" ? Ys() : n === "ch" ? Xs() : n === "de" ? Zs() : n === "es" ? Qs() : n === "fr" ? Js() : n === "it" ? $s() : n === "jp" ? to() : n === "pl" ? eo() : n === "ru" ? no() : n === "uk" ? io() : ro()
  },
  oo = Array(12).fill(0);
var ao = ht('<div class="sonner-loading-bar"></div>'),
  lo = ht('<div><div class="sonner-spinner"></div></div>');

function uo(l, t) {
  Jt(t, !0);
  var n = lo(),
    h = J(n);
  Xe(h, 23, () => oo, (_, I) => `spinner-bar-${I}`, (_, I) => {
    var E = ao();
    y(_, E)
  }), q(h), q(n), Tt(_ => {
    ie(n, 1, _), _t(n, "data-visible", t.visible)
  }, [() => le(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), y(l, n), $t()
}
const co = typeof window < "u" ? window : void 0;

function ho(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var be, Me;
class fo {
  constructor(t = {}) {
    ft(this, be);
    ft(this, Me);
    const {
      window: n = co,
      document: h = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (fe(this, be, h), fe(this, Me, $n(_ => {
      const I = Oe(n, "focusin", _),
        E = Oe(n, "focusout", _);
      return () => {
        I(), E()
      }
    })))
  }
  get current() {
    var t;
    return (t = p(this, Me)) == null || t.call(this), p(this, be) ? ho(p(this, be)) : null
  }
}
be = new WeakMap, Me = new WeakMap;
new fo;
var Re, ce;
class mo {
  constructor(t) {
    ft(this, Re);
    ft(this, ce);
    fe(this, Re, t), fe(this, ce, Symbol(t))
  }
  get key() {
    return p(this, ce)
  }
  exists() {
    return Zn(p(this, ce))
  }
  get() {
    const t = En(p(this, ce));
    if (t === void 0) throw new Error(`Context "${p(this,Re)}" not found`);
    return t
  }
  getOr(t) {
    const n = En(p(this, ce));
    return n === void 0 ? t : n
  }
  set(t) {
    return Qn(p(this, ce), t)
  }
}
Re = new WeakMap, ce = new WeakMap;
const po = new mo("<Toaster/>");

function Ke(l) {
  return l.label !== void 0
}

function _o() {
  let l = it(_n(typeof document < "u" ? document.hidden : !1));
  return Ot(() => Oe(document, "visibilitychange", () => {
    g(l, document.hidden, !0)
  })), {
    get current() {
      return r(l)
    }
  }
}
const Pn = 4e3,
  go = 14,
  vo = 45,
  yo = 200,
  Co = .05,
  bo = {
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

function wo(l) {
  const [t, n] = l.split("-"), h = [];
  return t && h.push(t), n && h.push(n), h
}

function kn(l) {
  return 1 / (1.5 + Math.abs(l) / 20)
}
var Io = ht("<div><!></div>"),
  Eo = ht('<button data-close-button=""><!></button>'),
  To = ht('<div data-icon=""><!> <!></div>'),
  Do = ht('<div data-description=""><!></div>'),
  So = ht('<button data-button="" data-cancel=""> </button>'),
  No = ht('<button data-button=""> </button>'),
  xo = ht('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Lo = ht('<li data-sonner-toast=""><!> <!></li>');

function Ao(l, t) {
  Jt(t, !0);
  const n = L => {
    var k = Y(),
      et = G(k);
    {
      var rt = m => {
          var Dt = Io(),
            a = J(Dt);
          kt(a, () => t.loadingIcon), q(Dt), Tt(e => {
            ie(Dt, 1, e), _t(Dt, "data-visible", r(F) === "loading")
          }, [() => {
            var e, i, s;
            return le(ae((e = r(ct)) == null ? void 0 : e.loader, (s = (i = t.toast) == null ? void 0 : i.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), y(m, Dt)
        },
        Z = m => {
          {
            let Dt = w(() => {
                var e, i;
                return ae((e = r(ct)) == null ? void 0 : e.loader, (i = t.toast.classes) == null ? void 0 : i.loader)
              }),
              a = w(() => r(F) === "loading");
            uo(m, {
              get class() {
                return r(Dt)
              },
              get visible() {
                return r(a)
              }
            })
          }
        };
      lt(et, m => {
        t.loadingIcon ? m(rt) : m(Z, !1)
      })
    }
    y(L, k)
  };
  let h = K(t, "cancelButtonStyle", 3, ""),
    _ = K(t, "actionButtonStyle", 3, ""),
    I = K(t, "descriptionClass", 3, ""),
    E = K(t, "unstyled", 3, !1),
    M = K(t, "defaultRichColors", 3, !1);
  const U = {
    ...bo
  };
  let x = it(!1),
    v = it(!1),
    A = it(!1),
    T = it(!1),
    $ = it(!1),
    R = it(0),
    at = it(0),
    O = t.toast.duration || t.duration || Pn,
    b = it(void 0),
    S = it(null),
    W = it(null);
  const D = w(() => t.index === 0),
    z = w(() => t.index + 1 <= t.visibleToasts),
    F = w(() => t.toast.type),
    mt = w(() => t.toast.dismissable !== !1),
    Nt = w(() => t.toast.class || ""),
    yt = w(() => t.toast.descriptionClass || ""),
    It = w(() => At.heights.findIndex(L => L.toastId === t.toast.id) || 0),
    Et = w(() => t.toast.closeButton ?? t.closeButton),
    Wt = w(() => t.toast.duration ?? t.duration ?? Pn);
  let Rt = null;
  const Gt = w(() => t.position.split("-")),
    Bt = w(() => At.heights.reduce((L, k, et) => et >= r(It) ? L : L + k.height, 0)),
    ne = _o(),
    V = w(() => t.toast.invert || t.invert),
    ut = w(() => r(F) === "loading"),
    ct = w(() => ({
      ...U,
      ...t.classes
    })),
    Ct = w(() => t.toast.title),
    Kt = w(() => t.toast.description);
  let qt = it(0),
    se = it(0);
  const N = w(() => Math.round(r(It) * go + r(Bt)));
  Ot(() => {
    r(Ct), r(Kt);
    let L;
    t.expanded || t.expandByDefault ? L = 1 : L = 1 - t.index * Co;
    const k = Pe(() => r(b));
    if (k === void 0) return;
    k.style.setProperty("height", "auto");
    const et = k.offsetHeight,
      rt = k.getBoundingClientRect().height,
      Z = Math.round(rt / L + Number.EPSILON & 100) / 100;
    k.style.removeProperty("height");
    let m;
    Math.abs(Z - et) < 1 ? m = Z : m = et, g(at, m, !0), Pe(() => {
      At.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function j() {
    g(v, !0), g(R, r(N), !0), At.removeHeight(t.toast.id), setTimeout(() => {
      At.remove(t.toast.id)
    }, yo)
  }
  let gt;
  const tt = w(() => t.toast.promise && r(F) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Mt() {
    g(qt, new Date().getTime(), !0), gt = setTimeout(() => {
      var L, k;
      (k = (L = t.toast).onAutoClose) == null || k.call(L, t.toast), j()
    }, O)
  }

  function Yt() {
    if (r(se) < r(qt)) {
      const L = new Date().getTime() - r(qt);
      O = O - L
    }
    g(se, new Date().getTime(), !0)
  }
  Ot(() => {
    t.toast.updated && (clearTimeout(gt), O = r(Wt), Mt())
  }), Ot(() => (r(tt) || (t.expanded || t.interacting || ne.current ? Yt() : Mt()), () => clearTimeout(gt))), pe(() => {
    var k;
    g(x, !0);
    const L = (k = r(b)) == null ? void 0 : k.getBoundingClientRect().height;
    return g(at, L, !0), At.setHeight({
      toastId: t.toast.id,
      height: L
    }), () => {
      At.removeHeight(t.toast.id)
    }
  }), Ot(() => {
    t.toast.delete && Pe(() => {
      var L, k;
      j(), (k = (L = t.toast).onDismiss) == null || k.call(L, t.toast)
    })
  });
  const _e = L => {
      if (r(ut)) return;
      g(R, r(N), !0);
      const k = L.target;
      k.setPointerCapture(L.pointerId), k.tagName !== "BUTTON" && (g(A, !0), Rt = {
        x: L.clientX,
        y: L.clientY
      })
    },
    oe = () => {
      var m, Dt, a, e, i, s;
      if (r(T) || !r(mt)) return;
      Rt = null;
      const L = Number(((m = r(b)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        k = Number(((Dt = r(b)) == null ? void 0 : Dt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        et = new Date().getTime() - 0,
        rt = r(S) === "x" ? L : k,
        Z = Math.abs(rt) / et;
      if (Math.abs(rt) >= vo || Z > .11) {
        g(R, r(N), !0), (e = (a = t.toast).onDismiss) == null || e.call(a, t.toast), r(S) === "x" ? g(W, L > 0 ? "right" : "left", !0) : g(W, k > 0 ? "down" : "up", !0), j(), g(T, !0);
        return
      } else(i = r(b)) == null || i.style.setProperty("--swipe-amount-x", "0px"), (s = r(b)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      g($, !1), g(A, !1), g(S, null)
    },
    Ht = L => {
      var Dt, a, e;
      if (!Rt || !r(mt) || (((Dt = window.getSelection()) == null ? void 0 : Dt.toString().length) ?? -1) > 0) return;
      const et = L.clientY - Rt.y,
        rt = L.clientX - Rt.x,
        Z = t.swipeDirections ?? wo(t.position);
      !r(S) && (Math.abs(rt) > 1 || Math.abs(et) > 1) && g(S, Math.abs(rt) > Math.abs(et) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (r(S) === "y") {
        if (Z.includes("top") || Z.includes("bottom"))
          if (Z.includes("top") && et < 0 || Z.includes("bottom") && et > 0) m.y = et;
          else {
            const i = et * kn(et);
            m.y = Math.abs(i) < Math.abs(et) ? i : et
          }
      } else if (r(S) === "x" && (Z.includes("left") || Z.includes("right")))
        if (Z.includes("left") && rt < 0 || Z.includes("right") && rt > 0) m.x = rt;
        else {
          const i = rt * kn(rt);
          m.x = Math.abs(i) < Math.abs(rt) ? i : rt
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && g($, !0), (a = r(b)) == null || a.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = r(b)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    Vt = () => {
      g(A, !1), g(S, null), Rt = null
    },
    St = w(() => t.toast.icon ? t.toast.icon : r(F) === "success" ? t.successIcon : r(F) === "error" ? t.errorIcon : r(F) === "warning" ? t.warningIcon : r(F) === "info" ? t.infoIcon : r(F) === "loading" ? t.loadingIcon : null);
  var X = Lo();
  _t(X, "tabindex", 0);
  let ge;
  var De = J(X);
  {
    var Se = L => {
      var k = Eo(),
        et = J(k);
      kt(et, () => t.closeIcon ?? Ft), q(k), Tt(rt => {
        _t(k, "aria-label", t.closeButtonAriaLabel), _t(k, "data-disabled", r(ut)), ie(k, 1, rt)
      }, [() => {
        var rt, Z, m;
        return le(ae((rt = r(ct)) == null ? void 0 : rt.closeButton, (m = (Z = t.toast) == null ? void 0 : Z.classes) == null ? void 0 : m.closeButton))
      }]), ue("click", k, () => {
        var rt, Z;
        r(ut) || !r(mt) || (j(), (Z = (rt = t.toast).onDismiss) == null || Z.call(rt, t.toast))
      }), y(L, k)
    };
    lt(De, L => {
      r(Et) && !t.toast.component && r(F) !== "loading" && t.closeIcon !== null && L(Se)
    })
  }
  var Ne = wt(De, 2);
  {
    var ve = L => {
        const k = w(() => t.toast.component);
        var et = Y(),
          rt = G(et);
        Qt(rt, () => r(k), (Z, m) => {
          m(Z, ke(() => t.toast.componentProps, {
            closeToast: j
          }))
        }), y(L, et)
      },
      xe = L => {
        var k = xo(),
          et = G(k);
        {
          var rt = f => {
            var d = To(),
              C = J(d);
            {
              var P = B => {
                var H = Y(),
                  pt = G(H);
                {
                  var Q = nt => {
                      var jt = Y(),
                        Ut = G(jt);
                      Qt(Ut, () => t.toast.icon, (bt, xt) => {
                        xt(bt, {})
                      }), y(nt, jt)
                    },
                    ot = nt => {
                      n(nt)
                    };
                  lt(pt, nt => {
                    t.toast.icon ? nt(Q) : nt(ot, !1)
                  })
                }
                y(B, H)
              };
              lt(C, B => {
                (t.toast.promise || r(F) === "loading") && B(P)
              })
            }
            var dt = wt(C, 2);
            {
              var st = B => {
                var H = Y(),
                  pt = G(H);
                {
                  var Q = bt => {
                      var xt = Y(),
                        te = G(xt);
                      Qt(te, () => t.toast.icon, (Kn, qn) => {
                        qn(Kn, {})
                      }), y(bt, xt)
                    },
                    ot = bt => {
                      var xt = Y(),
                        te = G(xt);
                      kt(te, () => t.successIcon ?? Ft), y(bt, xt)
                    },
                    nt = bt => {
                      var xt = Y(),
                        te = G(xt);
                      kt(te, () => t.errorIcon ?? Ft), y(bt, xt)
                    },
                    jt = bt => {
                      var xt = Y(),
                        te = G(xt);
                      kt(te, () => t.warningIcon ?? Ft), y(bt, xt)
                    },
                    Ut = bt => {
                      var xt = Y(),
                        te = G(xt);
                      kt(te, () => t.infoIcon ?? Ft), y(bt, xt)
                    };
                  lt(pt, bt => {
                    t.toast.icon ? bt(Q) : r(F) === "success" ? bt(ot, 1) : r(F) === "error" ? bt(nt, 2) : r(F) === "warning" ? bt(jt, 3) : r(F) === "info" && bt(Ut, 4)
                  })
                }
                y(B, H)
              };
              lt(dt, B => {
                t.toast.type !== "loading" && B(st)
              })
            }
            q(d), Tt(B => ie(d, 1, B), [() => {
              var B, H, pt;
              return le(ae((B = r(ct)) == null ? void 0 : B.icon, (pt = (H = t.toast) == null ? void 0 : H.classes) == null ? void 0 : pt.icon))
            }]), y(f, d)
          };
          lt(et, f => {
            (r(F) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (r(St) !== null || t.toast.icon) && f(rt)
          })
        }
        var Z = wt(et, 2),
          m = J(Z),
          Dt = J(m);
        {
          var a = f => {
            var d = Y(),
              C = G(d);
            {
              var P = st => {
                  const B = w(() => t.toast.title);
                  var H = Y(),
                    pt = G(H);
                  Qt(pt, () => r(B), (Q, ot) => {
                    ot(Q, ke(() => t.toast.componentProps))
                  }), y(st, H)
                },
                dt = st => {
                  var B = Tn();
                  Tt(() => Pt(B, t.toast.title)), y(st, B)
                };
              lt(C, st => {
                typeof t.toast.title != "string" ? st(P) : st(dt, !1)
              })
            }
            y(f, d)
          };
          lt(Dt, f => {
            t.toast.title && f(a)
          })
        }
        q(m);
        var e = wt(m, 2);
        {
          var i = f => {
            var d = Do(),
              C = J(d);
            {
              var P = st => {
                  const B = w(() => t.toast.description);
                  var H = Y(),
                    pt = G(H);
                  Qt(pt, () => r(B), (Q, ot) => {
                    ot(Q, ke(() => t.toast.componentProps))
                  }), y(st, H)
                },
                dt = st => {
                  var B = Tn();
                  Tt(() => Pt(B, t.toast.description)), y(st, B)
                };
              lt(C, st => {
                typeof t.toast.description != "string" ? st(P) : st(dt, !1)
              })
            }
            q(d), Tt(st => ie(d, 1, st), [() => {
              var st, B;
              return le(ae(I(), r(yt), (st = r(ct)) == null ? void 0 : st.description, (B = t.toast.classes) == null ? void 0 : B.description))
            }]), y(f, d)
          };
          lt(e, f => {
            t.toast.description && f(i)
          })
        }
        q(Z);
        var s = wt(Z, 2);
        {
          var o = f => {
            var d = Y(),
              C = G(d);
            {
              var P = B => {
                  var H = Y(),
                    pt = G(H);
                  Qt(pt, () => t.toast.cancel, (Q, ot) => {
                    ot(Q, {})
                  }), y(B, H)
                },
                dt = B => {
                  var H = So(),
                    pt = J(H, !0);
                  q(H), Tt(Q => {
                    an(H, t.toast.cancelButtonStyle ?? h()), ie(H, 1, Q), Pt(pt, t.toast.cancel.label)
                  }, [() => {
                    var Q, ot, nt;
                    return le(ae((Q = r(ct)) == null ? void 0 : Q.cancelButton, (nt = (ot = t.toast) == null ? void 0 : ot.classes) == null ? void 0 : nt.cancelButton))
                  }]), ue("click", H, Q => {
                    var ot, nt;
                    Ke(t.toast.cancel) && r(mt) && ((nt = (ot = t.toast.cancel) == null ? void 0 : ot.onClick) == null || nt.call(ot, Q), j())
                  }), y(B, H)
                },
                st = w(() => Ke(t.toast.cancel));
              lt(C, B => {
                typeof t.toast.cancel == "function" ? B(P) : r(st) && B(dt, 1)
              })
            }
            y(f, d)
          };
          lt(s, f => {
            t.toast.cancel && f(o)
          })
        }
        var c = wt(s, 2);
        {
          var u = f => {
            var d = Y(),
              C = G(d);
            {
              var P = B => {
                  var H = Y(),
                    pt = G(H);
                  Qt(pt, () => t.toast.action, (Q, ot) => {
                    ot(Q, {})
                  }), y(B, H)
                },
                dt = B => {
                  var H = No(),
                    pt = J(H, !0);
                  q(H), Tt(Q => {
                    an(H, t.toast.actionButtonStyle ?? _()), ie(H, 1, Q), Pt(pt, t.toast.action.label)
                  }, [() => {
                    var Q, ot, nt;
                    return le(ae((Q = r(ct)) == null ? void 0 : Q.actionButton, (nt = (ot = t.toast) == null ? void 0 : ot.classes) == null ? void 0 : nt.actionButton))
                  }]), ue("click", H, Q => {
                    var ot;
                    Ke(t.toast.action) && ((ot = t.toast.action) == null || ot.onClick(Q), !Q.defaultPrevented && j())
                  }), y(B, H)
                },
                st = w(() => Ke(t.toast.action));
              lt(C, B => {
                typeof t.toast.action == "function" ? B(P) : r(st) && B(dt, 1)
              })
            }
            y(f, d)
          };
          lt(c, f => {
            t.toast.action && f(u)
          })
        }
        Tt(f => ie(m, 1, f), [() => {
          var f, d, C;
          return le(ae((f = r(ct)) == null ? void 0 : f.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), y(L, k)
      };
    lt(Ne, L => {
      t.toast.component ? L(ve) : L(xe, !1)
    })
  }
  q(X), vn(X, L => g(b, L), () => r(b)), Tt((L, k, et) => {
    ie(X, 1, L), _t(X, "data-rich-colors", t.toast.richColors ?? M()), _t(X, "data-styled", !(t.toast.component || t.toast.unstyled || E())), _t(X, "data-mounted", r(x)), _t(X, "data-promise", k), _t(X, "data-swiped", r($)), _t(X, "data-removed", r(v)), _t(X, "data-visible", r(z)), _t(X, "data-y-position", r(Gt)[0]), _t(X, "data-x-position", r(Gt)[1]), _t(X, "data-index", t.index), _t(X, "data-front", r(D)), _t(X, "data-swiping", r(A)), _t(X, "data-dismissable", r(mt)), _t(X, "data-type", r(F)), _t(X, "data-invert", r(V)), _t(X, "data-swipe-out", r(T)), _t(X, "data-swipe-direction", r(W)), _t(X, "data-expanded", et), ge = an(X, `${t.style} ${t.toast.style}`, ge, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": At.toasts.length - t.index,
      "--offset": `${r(v)?r(R):r(N)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${r(at)}px`
    })
  }, [() => {
    var L, k, et, rt, Z, m;
    return le(ae(t.class, r(Nt), (L = r(ct)) == null ? void 0 : L.toast, (et = (k = t.toast) == null ? void 0 : k.classes) == null ? void 0 : et.toast, (rt = r(ct)) == null ? void 0 : rt[r(F)], (m = (Z = t.toast) == null ? void 0 : Z.classes) == null ? void 0 : m[r(F)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && r(x))]), ue("pointermove", X, Ht), ue("pointerup", X, oe), ue("pointerdown", X, _e), en("dragend", X, Vt), y(l, X), $t()
}
gn(["pointermove", "pointerup", "pointerdown", "click"]);
var Po = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function ko(l) {
  var t = Po();
  y(l, t)
}
var Oo = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Mo(l) {
  var t = Oo();
  y(l, t)
}
var Ro = Ge('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Bo(l) {
  var t = Ro();
  y(l, t)
}
var Ho = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Uo(l) {
  var t = Ho();
  y(l, t)
}
var Wo = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function Vo(l) {
  var t = Wo();
  y(l, t)
}
const jo = 3,
  Hn = "24px",
  Un = "16px",
  zo = 4e3,
  Fo = 356,
  Go = 14,
  ln = "dark",
  qe = "light";

function Ko(l, t) {
  const n = {};
  return [l, t].forEach((h, _) => {
    const I = _ === 1,
      E = I ? "--mobile-offset" : "--offset",
      M = I ? Un : Hn;

    function U(x) {
      ["top", "right", "bottom", "left"].forEach(v => {
        n[`${E}-${v}`] = typeof x == "number" ? `${x}px` : x
      })
    }
    typeof h == "number" || typeof h == "string" ? U(h) : typeof h == "object" ? ["top", "right", "bottom", "left"].forEach(x => {
      const v = h[x];
      v === void 0 ? n[`${E}-${x}`] = M : n[`${E}-${x}`] = typeof v == "number" ? `${v}px` : v
    }) : U(M)
  }), n
}
var qo = ht("<ol></ol>"),
  Yo = ht('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function Xo(l, t) {
  Jt(t, !0);

  function n(N) {
    return N !== "system" ? N : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : qe
  }
  let h = K(t, "invert", 3, !1),
    _ = K(t, "position", 3, "bottom-right"),
    I = K(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    E = K(t, "expand", 3, !1),
    M = K(t, "closeButton", 3, !1),
    U = K(t, "offset", 3, Hn),
    x = K(t, "mobileOffset", 3, Un),
    v = K(t, "theme", 3, "light"),
    A = K(t, "richColors", 3, !1),
    T = K(t, "duration", 3, zo),
    $ = K(t, "visibleToasts", 3, jo),
    R = K(t, "toastOptions", 19, () => ({})),
    at = K(t, "dir", 7, "auto"),
    O = K(t, "gap", 3, Go),
    b = K(t, "containerAriaLabel", 3, "Notifications"),
    S = K(t, "closeButtonAriaLabel", 3, "Close toast"),
    W = Te(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function D() {
    if (at() !== "auto") return at();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const N = document.documentElement.getAttribute("dir");
    return N === "auto" || !N ? (Pe(() => at(window.getComputedStyle(document.documentElement).direction ?? "ltr")), at()) : (Pe(() => at(N)), N)
  }
  const z = w(() => Array.from(new Set([_(), ...At.toasts.filter(N => N.position).map(N => N.position)].filter(Boolean))));
  let F = it(!1),
    mt = it(!1),
    Nt = it(_n(n(v()))),
    yt = it(void 0),
    It = it(null),
    Et = it(!1);
  const Wt = w(() => I().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ot(() => {
    At.toasts.length <= 1 && g(F, !1)
  }), Ot(() => {
    const N = At.toasts.filter(j => j.dismiss && !j.delete);
    if (N.length > 0) {
      const j = At.toasts.map(gt => N.find(Mt => Mt.id === gt.id) ? {
        ...gt,
        delete: !0
      } : gt);
      At.toasts = j
    }
  }), Ot(() => () => {
    r(yt) && r(It) && (r(It).focus({
      preventScroll: !0
    }), g(It, null), g(Et, !1))
  }), pe(() => (At.reset(), Oe(document, "keydown", j => {
    var tt, Mt;
    I().every(Yt => j[Yt] || j.code === Yt) && (g(F, !0), (tt = r(yt)) == null || tt.focus()), j.code === "Escape" && (document.activeElement === r(yt) || (Mt = r(yt)) != null && Mt.contains(document.activeElement)) && g(F, !1)
  }))), Ot(() => {
    if (v() !== "system" && g(Nt, v()), typeof window < "u") {
      v() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? g(Nt, ln) : g(Nt, qe));
      const N = window.matchMedia("(prefers-color-scheme: dark)"),
        j = ({
          matches: gt
        }) => {
          g(Nt, gt ? ln : qe, !0)
        };
      "addEventListener" in N ? N.addEventListener("change", j) : N.addListener(j)
    }
  });
  const Rt = N => {
      var j;
      (j = t.onblur) == null || j.call(t, N), r(Et) && !N.currentTarget.contains(N.relatedTarget) && (g(Et, !1), r(It) && (r(It).focus({
        preventScroll: !0
      }), g(It, null)))
    },
    Gt = N => {
      var gt;
      (gt = t.onfocus) == null || gt.call(t, N), !(N.target instanceof HTMLElement && N.target.dataset.dismissable === "false") && (r(Et) || (g(Et, !0), g(It, N.relatedTarget, !0)))
    },
    Bt = N => {
      var gt;
      (gt = t.onpointerdown) == null || gt.call(t, N), !(N.target instanceof HTMLElement && N.target.dataset.dismissable === "false") && g(mt, !0)
    },
    ne = N => {
      var j;
      (j = t.onmouseenter) == null || j.call(t, N), g(F, !0)
    },
    V = N => {
      var j;
      (j = t.onmouseleave) == null || j.call(t, N), r(mt) || g(F, !1)
    },
    ut = N => {
      var j;
      (j = t.onmousemove) == null || j.call(t, N), g(F, !0)
    },
    ct = N => {
      var j;
      (j = t.ondragend) == null || j.call(t, N), g(F, !1)
    },
    Ct = N => {
      var j;
      (j = t.onpointerup) == null || j.call(t, N), g(mt, !1)
    };
  po.set(new ei);
  var Kt = Yo();
  _t(Kt, "tabindex", -1);
  var qt = J(Kt);
  {
    var se = N => {
      var j = Y(),
        gt = G(j);
      Xe(gt, 18, () => r(z), tt => tt, (tt, Mt, Yt, _e) => {
        const oe = w(() => {
            const [St, X] = Mt.split("-");
            return {
              y: St,
              x: X
            }
          }),
          Ht = w(() => Ko(U(), x()));
        var Vt = qo();
        Ce(Vt, St => {
          var X;
          return {
            tabindex: -1,
            dir: St,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": r(Nt),
            "data-y-position": r(oe).y,
            "data-x-position": r(oe).x,
            style: t.style,
            onblur: Rt,
            onfocus: Gt,
            onmouseenter: ne,
            onmousemove: ut,
            onmouseleave: V,
            ondragend: ct,
            onpointerdown: Bt,
            onpointerup: Ct,
            ...W,
            [vi]: {
              "--front-toast-height": `${(X=At.heights[0])==null?void 0:X.height}px`,
              "--width": `${Fo}px`,
              "--gap": `${O()}px`,
              "--offset-top": r(Ht)["--offset-top"],
              "--offset-right": r(Ht)["--offset-right"],
              "--offset-bottom": r(Ht)["--offset-bottom"],
              "--offset-left": r(Ht)["--offset-left"],
              "--mobile-offset-top": r(Ht)["--mobile-offset-top"],
              "--mobile-offset-right": r(Ht)["--mobile-offset-right"],
              "--mobile-offset-bottom": r(Ht)["--mobile-offset-bottom"],
              "--mobile-offset-left": r(Ht)["--mobile-offset-left"]
            }
          }
        }, [D], void 0, void 0, "svelte-smjlix"), Xe(Vt, 23, () => At.toasts.filter(St => !St.position && r(Yt) === 0 || St.position === Mt), St => St.id, (St, X, ge, De) => {
          {
            const Se = s => {
                var o = Y(),
                  c = G(o);
                {
                  var u = d => {
                      var C = Y(),
                        P = G(C);
                      kt(P, () => t.successIcon ?? Ft), y(d, C)
                    },
                    f = d => {
                      ko(d)
                    };
                  lt(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(f, 1)
                  })
                }
                y(s, o)
              },
              Ne = s => {
                var o = Y(),
                  c = G(o);
                {
                  var u = d => {
                      var C = Y(),
                        P = G(C);
                      kt(P, () => t.errorIcon ?? Ft), y(d, C)
                    },
                    f = d => {
                      Mo(d)
                    };
                  lt(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(f, 1)
                  })
                }
                y(s, o)
              },
              ve = s => {
                var o = Y(),
                  c = G(o);
                {
                  var u = d => {
                      var C = Y(),
                        P = G(C);
                      kt(P, () => t.warningIcon ?? Ft), y(d, C)
                    },
                    f = d => {
                      Bo(d)
                    };
                  lt(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(f, 1)
                  })
                }
                y(s, o)
              },
              xe = s => {
                var o = Y(),
                  c = G(o);
                {
                  var u = d => {
                      var C = Y(),
                        P = G(C);
                      kt(P, () => t.infoIcon ?? Ft), y(d, C)
                    },
                    f = d => {
                      Uo(d)
                    };
                  lt(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(f, 1)
                  })
                }
                y(s, o)
              },
              L = s => {
                var o = Y(),
                  c = G(o);
                {
                  var u = d => {
                      var C = Y(),
                        P = G(C);
                      kt(P, () => t.closeIcon ?? Ft), y(d, C)
                    },
                    f = d => {
                      Vo(d)
                    };
                  lt(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(f, 1)
                  })
                }
                y(s, o)
              };
            let k = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.duration) ?? T()
              }),
              et = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.class) ?? ""
              }),
              rt = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.descriptionClass) || ""
              }),
              Z = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.style) ?? ""
              }),
              m = w(() => R().classes || {}),
              Dt = w(() => R().unstyled ?? !1),
              a = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              i = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.closeButtonAriaLabel) ?? S()
              });
            Ao(St, {
              get index() {
                return r(ge)
              },
              get toast() {
                return r(X)
              },
              get defaultRichColors() {
                return A()
              },
              get duration() {
                return r(k)
              },
              get class() {
                return r(et)
              },
              get descriptionClass() {
                return r(rt)
              },
              get invert() {
                return h()
              },
              get visibleToasts() {
                return $()
              },
              get closeButton() {
                return M()
              },
              get interacting() {
                return r(mt)
              },
              get position() {
                return Mt
              },
              get style() {
                return r(Z)
              },
              get classes() {
                return r(m)
              },
              get unstyled() {
                return r(Dt)
              },
              get cancelButtonStyle() {
                return r(a)
              },
              get actionButtonStyle() {
                return r(e)
              },
              get closeButtonAriaLabel() {
                return r(i)
              },
              get expandByDefault() {
                return E()
              },
              get expanded() {
                return r(F)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: Se,
              errorIcon: Ne,
              warningIcon: ve,
              infoIcon: xe,
              closeIcon: L,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), q(Vt), vn(Vt, St => g(yt, St), () => r(yt)), Tt(() => Vt.dir = Vt.dir), y(tt, Vt)
      }), y(N, j)
    };
    lt(qt, N => {
      At.toasts.length > 0 && N(se)
    })
  }
  q(Kt), Tt(() => _t(Kt, "aria-label", `${b()??""} ${r(Wt)??""}`)), y(l, Kt), $t()
}
let Le = it(!1);
var Zo = ht("<div></div>"),
  Qo = ht('<button type="button" class="btn">Retry</button>'),
  Jo = ht('<span class="loading loading-spinner loading-lg"></span>'),
  $o = ht('<div class="flex h-16 items-center justify-center"><!></div>');

function ta(l, t) {
  Jt(t, !0);
  let n = K(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    h = K(t, "size", 3, "normal");
  const _ = w(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: h(),
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
    I = (O, b) => {
      var W;
      let S = window.hcaptcha.render(O, b);
      return (W = t.onload) == null || W.call(t), {
        destroy() {
          var D;
          (D = window.hcaptcha) == null || D.remove(S)
        },
        update(D) {
          var z;
          (z = window.hcaptcha) == null || z.remove(S), S = window.hcaptcha.render(O, D)
        }
      }
    };
  let E = it(!1),
    M = it(!1),
    U;

  function x() {
    const O = document.createElement("script");
    O.type = "text/javascript", O.src = "https://js.hcaptcha.com/1/api.js?render=explicit", O.async = !0, O.defer = !0, O.addEventListener("load", () => g(Le, !0), {
      once: !0
    }), document.head.appendChild(O)
  }

  function v() {
    g(M, !1), U && clearTimeout(U), U = setTimeout(() => {
      (!r(Le) || !r(E)) && g(M, !0)
    }, 5e3)
  }

  function A() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(O => O.remove()), g(Le, !1), x(), v()
  }
  pe(() => (g(E, !0), r(Le) || x(), v(), () => {
    g(E, !1), U && clearTimeout(U)
  }));
  var T = Y(),
    $ = G(T);
  {
    var R = O => {
        var b = Zo();
        Ci(b, (S, W) => I == null ? void 0 : I(S, W), () => r(_)), y(O, b)
      },
      at = O => {
        var b = $o(),
          S = J(b);
        {
          var W = z => {
              var F = Qo();
              ue("click", F, A), y(z, F)
            },
            D = z => {
              var F = Jo();
              y(z, F)
            };
          lt(S, z => {
            r(M) ? z(W) : z(D, !1)
          })
        }
        q(b), y(O, b)
      };
    lt($, O => {
      r(Le) && r(E) ? O(R) : O(at, !1)
    })
  }
  y(l, T), $t()
}
gn(["click"]);

function yn(...l) {
  return Ii(yi(l))
}
var ea = ht("<div><!></div>");

function na(l, t) {
  Jt(t, !0);
  let n = K(t, "ref", 15, null),
    h = Te(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var _ = ea();
  Ce(_, E => ({
    class: E,
    ...h
  }), [() => yn("flex items-center", t.class)]);
  var I = J(_);
  kt(I, () => t.children ?? Ft), q(_), vn(_, E => n(E), () => n()), y(l, _), $t()
}
var Be, Ze;
class ia {
  constructor(t, n) {
    ft(this, Be, () => {});
    ft(this, Ze, w(() => p(this, Be).call(this)));
    let h;
    n !== void 0 && (h = n), fe(this, Be, () => {
      try {
        return h
      } finally {
        h = t()
      }
    })
  }
  get current() {
    return r(p(this, Ze))
  }
}
Be = new WeakMap, Ze = new WeakMap;
const ra = 1,
  sa = 9,
  oa = 11;

function aa(l) {
  return nn(l) && l.nodeType === ra && typeof l.nodeName == "string"
}

function Wn(l) {
  return nn(l) && l.nodeType === sa
}

function la(l) {
  var t;
  return nn(l) && ((t = l.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function ua(l) {
  return nn(l) && l.nodeType !== void 0
}

function ca(l) {
  return ua(l) && l.nodeType === oa && "host" in l
}

function da(l) {
  return Wn(l) ? l : la(l) ? l.document : (l == null ? void 0 : l.ownerDocument) ?? document
}

function Vn(l) {
  var t;
  return ca(l) ? Vn(l.host) : Wn(l) ? l.defaultView ?? window : aa(l) ? ((t = l.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function ha(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var He;
class fa {
  constructor(t) {
    vt(this, "element");
    ft(this, He, w(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    vt(this, "getDocument", () => da(this.root));
    vt(this, "getWindow", () => this.getDocument().defaultView ?? window);
    vt(this, "getActiveElement", () => ha(this.root));
    vt(this, "isActiveElement", t => t === this.getActiveElement());
    vt(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    vt(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    vt(this, "setTimeout", (t, n) => this.getWindow().setTimeout(t, n));
    vt(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = Lt(t) : this.element = t
  }
  get root() {
    return r(p(this, He))
  }
  set root(t) {
    g(p(this, He), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
He = new WeakMap;
const ma = 18,
  jn = 40,
  pa = `${jn}px`,
  _a = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function ga({
  containerRef: l,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: h,
  domContext: _
}) {
  let I = it(!1),
    E = it(!1),
    M = it(!1);

  function U() {
    const v = n.current;
    return v === "none" ? !1 : v === "increase-width" && r(I) && r(E)
  }

  function x() {
    const v = l.current,
      A = t.current;
    if (!v || !A || r(M) || n.current === "none") return;
    const T = v,
      $ = T.getBoundingClientRect().left + T.offsetWidth,
      R = T.getBoundingClientRect().top + T.offsetHeight / 2,
      at = $ - ma,
      O = R;
    _.querySelectorAll(_a).length === 0 && _.getDocument().elementFromPoint(at, O) === v || (g(I, !0), g(M, !0))
  }
  return Ot(() => {
    const v = l.current;
    if (!v || n.current === "none") return;

    function A() {
      const R = Vn(v).innerWidth - v.getBoundingClientRect().right;
      g(E, R >= jn)
    }
    A();
    const T = setInterval(A, 1e3);
    return () => {
      clearInterval(T)
    }
  }), Ot(() => {
    const v = h.current || _.getActiveElement() === t.current;
    if (n.current === "none" || !v) return;
    const A = setTimeout(x, 0),
      T = setTimeout(x, 2e3),
      $ = setTimeout(x, 5e3),
      R = setTimeout(() => {
        g(M, !0)
      }, 6e3);
    return () => {
      clearTimeout(A), clearTimeout(T), clearTimeout($), clearTimeout(R)
    }
  }), {
    get hasPwmBadge() {
      return r(I)
    },
    get willPushPwmBadge() {
      return U()
    },
    PWM_BADGE_SPACE_WIDTH: pa
  }
}
const zn = ci({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  va = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Xt, we, de, zt, Zt, Ie, re, he, me, Ee, Qe, Ue, We, Je, $e, Fn, Ve, je, tn, ze;
const Cn = class Cn {
  constructor(t) {
    ft(this, $e);
    vt(this, "opts");
    vt(this, "attachment");
    ft(this, Xt, Ln(null));
    ft(this, we, it(!1));
    vt(this, "inputAttachment", hn(p(this, Xt)));
    ft(this, de, Ln(!1));
    ft(this, zt, it(null));
    ft(this, Zt, it(null));
    ft(this, Ie, new ia(() => this.opts.value.current ?? ""));
    ft(this, re, w(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    ft(this, he, it(_n({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    ft(this, me);
    ft(this, Ee);
    vt(this, "domContext");
    vt(this, "onkeydown", t => {
      const n = t.key;
      va.includes(n) || t.ctrlKey || t.metaKey || n && r(p(this, re)) && !r(p(this, re)).test(n) && t.preventDefault()
    });
    ft(this, Qe, w(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    ft(this, Ue, w(() => ({
      id: this.opts.id.current,
      [zn.root]: "",
      style: r(p(this, Qe)),
      ...this.attachment
    })));
    ft(this, We, w(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    ft(this, Je, w(() => ({
      position: "absolute",
      inset: 0,
      width: p(this, me).willPushPwmBadge ? `calc(100% + ${p(this,me).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: p(this, me).willPushPwmBadge ? `inset(0 ${p(this,me).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
    ft(this, Ve, () => {
      var at;
      const t = p(this, Xt).current,
        n = this.opts.ref.current;
      if (!t || !n) return;
      if (this.domContext.getActiveElement() !== t) {
        g(p(this, zt), null), g(p(this, Zt), null);
        return
      }
      const h = t.selectionStart,
        _ = t.selectionEnd,
        I = t.selectionDirection ?? "none",
        E = t.maxLength,
        M = t.value,
        U = r(p(this, he)).prev;
      let x = -1,
        v = -1,
        A;
      if (M.length !== 0 && h !== null && _ !== null) {
        const O = h === _,
          b = h === M.length && M.length < E;
        if (O && !b) {
          const S = h;
          if (S === 0) x = 0, v = 1, A = "forward";
          else if (S === E) x = S - 1, v = S, A = "backward";
          else if (E > 1 && M.length > 1) {
            let W = 0;
            if (U[0] !== null && U[1] !== null) {
              A = S < U[1] ? "backward" : "forward";
              const D = U[0] === U[1] && U[0] < E;
              A === "backward" && !D && (W = -1)
            }
            x = W + S, v = W + S + 1
          }
        }
        x !== -1 && v !== -1 && x !== v && ((at = p(this, Xt).current) == null || at.setSelectionRange(x, v, A))
      }
      const T = x !== -1 ? x : h,
        $ = v !== -1 ? v : _,
        R = A ?? I;
      g(p(this, zt), T, !0), g(p(this, Zt), $, !0), r(p(this, he)).prev = [T, $, R]
    });
    vt(this, "oninput", t => {
      const n = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (n.length > 0 && r(p(this, re)) && !r(p(this, re)).test(n)) {
        t.preventDefault();
        return
      }
      typeof p(this, Ie).current == "string" && n.length < p(this, Ie).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = n
    });
    vt(this, "onfocus", t => {
      const n = p(this, Xt).current;
      if (n) {
        const h = Math.min(n.value.length, this.opts.maxLength.current - 1),
          _ = n.value.length;
        n.setSelectionRange(h, _), g(p(this, zt), h, !0), g(p(this, Zt), _, !0)
      }
      p(this, de).current = !0
    });
    vt(this, "onpaste", t => {
      var v, A, T, $;
      const n = p(this, Xt).current;
      if (!n) return;
      const h = R => {
          const at = n.selectionStart === null ? void 0 : n.selectionStart,
            O = n.selectionEnd === null ? void 0 : n.selectionEnd,
            b = at !== O,
            S = this.opts.value.current;
          return (b ? S.slice(0, at) + R + S.slice(O) : S.slice(0, at) + R + S.slice(at)).slice(0, this.opts.maxLength.current)
        },
        _ = R => R.length > 0 && r(p(this, re)) && !r(p(this, re)).test(R);
      if (!((v = this.opts.pasteTransformer) != null && v.current) && (!p(this, Ee).isIOS || !t.clipboardData || !n)) {
        const R = h((A = t.clipboardData) == null ? void 0 : A.getData("text/plain"));
        _(R) && t.preventDefault();
        return
      }
      const I = ((T = t.clipboardData) == null ? void 0 : T.getData("text/plain")) ?? "",
        E = ($ = this.opts.pasteTransformer) != null && $.current ? this.opts.pasteTransformer.current(I) : I;
      t.preventDefault();
      const M = h(E);
      if (_(M)) return;
      n.value = M, this.opts.value.current = M;
      const U = Math.min(M.length, this.opts.maxLength.current - 1),
        x = M.length;
      n.setSelectionRange(U, x), g(p(this, zt), U, !0), g(p(this, Zt), x, !0)
    });
    vt(this, "onmouseover", t => {
      g(p(this, we), !0)
    });
    vt(this, "onmouseleave", t => {
      g(p(this, we), !1)
    });
    vt(this, "onblur", t => {
      if (r(p(this, he)).willSyntheticBlur) {
        r(p(this, he)).willSyntheticBlur = !1;
        return
      }
      p(this, de).current = !1
    });
    ft(this, je, w(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: r(p(this, Je)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": r(p(this, zt)),
        "data-pin-input-input-mse": r(p(this, Zt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = r(p(this, re))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: ui(this.opts.disabled.current),
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
    ft(this, tn, w(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, n) => {
      const h = p(this, de).current && r(p(this, zt)) !== null && r(p(this, Zt)) !== null && (r(p(this, zt)) === r(p(this, Zt)) && n === r(p(this, zt)) || n >= r(p(this, zt)) && n < r(p(this, Zt))),
        _ = this.opts.value.current[n] !== void 0 ? this.opts.value.current[n] : null;
      return {
        char: _,
        isActive: h,
        hasFakeCaret: h && _ === null
      }
    })));
    ft(this, ze, w(() => ({
      cells: r(p(this, tn)),
      isFocused: p(this, de).current,
      isHovering: r(p(this, we))
    })));
    var n;
    this.opts = t, this.attachment = hn(this.opts.ref), this.domContext = new fa(t.ref), fe(this, Ee, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((n = window == null ? void 0 : window.CSS) == null ? void 0 : n.supports("-webkit-touch-callout", "none"))
    }), fe(this, me, ga({
      containerRef: this.opts.ref,
      inputRef: p(this, Xt),
      isFocused: p(this, de),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), pe(() => {
      const h = p(this, Xt).current,
        _ = this.opts.ref.current;
      if (!h || !_) return;
      p(this, Ee).value.current !== h.value && (this.opts.value.current = h.value), r(p(this, he)).prev = [h.selectionStart, h.selectionEnd, h.selectionDirection ?? "none"];
      const I = Oe(this.domContext.getDocument(), "selectionchange", p(this, Ve), {
        capture: !0
      });
      p(this, Ve).call(this), this.domContext.getActiveElement() === h && (p(this, de).current = !0), this.domContext.getElementById("pin-input-style") || In(this, $e, Fn).call(this);
      const E = () => {
        _ && _.style.setProperty("--bits-pin-input-root-height", `${h.clientHeight}px`)
      };
      E();
      const M = new ResizeObserver(E);
      return M.observe(h), () => {
        I(), M.disconnect()
      }
    }), li([() => this.opts.value.current, () => p(this, Xt).current], () => {
      ya(() => {
        const h = p(this, Xt).current;
        if (!h) return;
        h.dispatchEvent(new Event("input"));
        const _ = h.selectionStart,
          I = h.selectionEnd,
          E = h.selectionDirection ?? "none";
        _ !== null && I !== null && (g(p(this, zt), _, !0), g(p(this, Zt), I, !0), r(p(this, he)).prev = [_, I, E])
      }, this.domContext)
    }), Ot(() => {
      const h = this.opts.value.current,
        _ = p(this, Ie).current,
        I = this.opts.maxLength.current,
        E = this.opts.onComplete.current;
      _ !== void 0 && h !== _ && _.length < I && h.length === I && E(h)
    })
  }
  static create(t) {
    return new Cn(t)
  }
  get rootProps() {
    return r(p(this, Ue))
  }
  set rootProps(t) {
    g(p(this, Ue), t)
  }
  get inputWrapperProps() {
    return r(p(this, We))
  }
  set inputWrapperProps(t) {
    g(p(this, We), t)
  }
  get inputProps() {
    return r(p(this, je))
  }
  set inputProps(t) {
    g(p(this, je), t)
  }
  get snippetProps() {
    return r(p(this, ze))
  }
  set snippetProps(t) {
    g(p(this, ze), t)
  }
};
Xt = new WeakMap, we = new WeakMap, de = new WeakMap, zt = new WeakMap, Zt = new WeakMap, Ie = new WeakMap, re = new WeakMap, he = new WeakMap, me = new WeakMap, Ee = new WeakMap, Qe = new WeakMap, Ue = new WeakMap, We = new WeakMap, Je = new WeakMap, $e = new WeakSet, Fn = function() {
  const t = this.domContext.getDocument(),
    n = t.createElement("style");
  if (n.id = "pin-input-style", t.head.appendChild(n), n.sheet) {
    const h = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Ae(n.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Ae(n.sheet, `[data-pin-input-input]:autofill { ${h} }`), Ae(n.sheet, `[data-pin-input-input]:-webkit-autofill { ${h} }`), Ae(n.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Ae(n.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, Ve = new WeakMap, je = new WeakMap, tn = new WeakMap, ze = new WeakMap;
let mn = Cn;
var Fe;
const bn = class bn {
  constructor(t) {
    vt(this, "opts");
    vt(this, "attachment");
    ft(this, Fe, w(() => ({
      id: this.opts.id.current,
      [zn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = hn(this.opts.ref)
  }
  static create(t) {
    return new bn(t)
  }
  get props() {
    return r(p(this, Fe))
  }
  set props(t) {
    g(p(this, Fe), t)
  }
};
Fe = new WeakMap;
let pn = bn;

function ya(l, t) {
  const n = t.setTimeout(l, 0),
    h = t.setTimeout(l, 10),
    _ = t.setTimeout(l, 50);
  return [n, h, _]
}

function Ae(l, t) {
  try {
    l.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var Ca = ht("<div><!> <div><input/></div></div>");

function ba(l, t) {
  const n = Mn();
  Jt(t, !0);
  let h = K(t, "id", 19, () => fn(n)),
    _ = K(t, "inputId", 19, () => `${fn(n)}-input`),
    I = K(t, "ref", 15, null),
    E = K(t, "maxlength", 3, 6),
    M = K(t, "textalign", 3, "left"),
    U = K(t, "inputmode", 3, "numeric"),
    x = K(t, "onComplete", 3, An),
    v = K(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    A = K(t, "class", 3, ""),
    T = K(t, "autocomplete", 3, "one-time-code"),
    $ = K(t, "disabled", 3, !1),
    R = K(t, "value", 15, ""),
    at = K(t, "onValueChange", 3, An),
    O = Te(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const b = mn.create({
      id: Lt(() => h()),
      ref: Lt(() => I(), yt => I(yt)),
      inputId: Lt(() => _()),
      autocomplete: Lt(() => T()),
      maxLength: Lt(() => E()),
      textAlign: Lt(() => M()),
      disabled: Lt(() => $()),
      inputmode: Lt(() => U()),
      pattern: Lt(() => t.pattern),
      onComplete: Lt(() => x()),
      value: Lt(() => R(), yt => {
        R(yt), at()(yt)
      }),
      pushPasswordManagerStrategy: Lt(() => v()),
      pasteTransformer: Lt(() => t.pasteTransformer)
    }),
    S = w(() => Ye(O, b.inputProps)),
    W = w(() => Ye(b.rootProps, {
      class: A()
    })),
    D = w(() => Ye(b.inputWrapperProps, {}));
  var z = Ca();
  Ce(z, () => ({
    ...r(W)
  }));
  var F = J(z);
  kt(F, () => t.children ?? Ft, () => b.snippetProps);
  var mt = wt(F, 2);
  Ce(mt, () => ({
    ...r(D)
  }));
  var Nt = J(mt);
  Ce(Nt, () => ({
    ...r(S)
  }), void 0, void 0, void 0, void 0, !0), q(mt), q(z), y(l, z), $t()
}
var wa = ht("<div><!></div>");

function Ia(l, t) {
  const n = Mn();
  Jt(t, !0);
  let h = K(t, "id", 19, () => fn(n)),
    _ = K(t, "ref", 15, null),
    I = Te(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const E = pn.create({
      id: Lt(() => h()),
      ref: Lt(() => _(), T => _(T)),
      cell: Lt(() => t.cell)
    }),
    M = w(() => Ye(I, E.props));
  var U = Y(),
    x = G(U);
  {
    var v = T => {
        var $ = Y(),
          R = G($);
        kt(R, () => t.child, () => ({
          props: r(M)
        })), y(T, $)
      },
      A = T => {
        var $ = wa();
        Ce($, () => ({
          ...r(M)
        }));
        var R = J($);
        kt(R, () => t.children ?? Ft), q($), y(T, $)
      };
    lt(x, T => {
      t.child ? T(v) : T(A, !1)
    })
  }
  y(l, U), $t()
}
var Ea = ht('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Ta = ht(" <!>", 1);

function Da(l, t) {
  Jt(t, !0);
  let n = K(t, "ref", 15, null),
    h = Te(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var _ = Y(),
    I = G(_);
  {
    let E = w(() => yn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Qt(I, () => Ia, (M, U) => {
      U(M, ke({
        get cell() {
          return t.cell
        },
        get class() {
          return r(E)
        }
      }, () => h, {
        get ref() {
          return n()
        },
        set ref(x) {
          n(x)
        },
        children: (x, v) => {
          Rn();
          var A = Ta(),
            T = G(A),
            $ = wt(T);
          {
            var R = at => {
              var O = Ea();
              y(at, O)
            };
            lt($, at => {
              t.cell.hasFakeCaret && at(R)
            })
          }
          Tt(() => Pt(T, `${t.cell.char??""} `)), y(x, A)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  y(l, _), $t()
}

function Sa(l, t) {
  Jt(t, !0);
  let n = K(t, "ref", 15, null),
    h = K(t, "value", 15, ""),
    _ = Te(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var I = Y(),
    E = G(I);
  {
    let M = w(() => yn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Qt(E, () => ba, (U, x) => {
      x(U, ke({
        get class() {
          return r(M)
        }
      }, () => _, {
        get ref() {
          return n()
        },
        set ref(v) {
          n(v)
        },
        get value() {
          return h()
        },
        set value(v) {
          h(v)
        }
      }))
    })
  }
  y(l, I), $t()
}
var un = {
    exports: {}
  },
  On;

function Na() {
  return On || (On = 1, (function(l) {
    (function(t) {
      l.exports ? l.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var n = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          _ = Object.getOwnPropertyNames,
          I = Object.prototype.hasOwnProperty,
          E = (a, e) => {
            for (var i in e) n(a, i, {
              get: e[i],
              enumerable: !0
            })
          },
          M = (a, e, i, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let o of _(e)) !I.call(a, o) && o !== i && n(a, o, {
                get: () => e[o],
                enumerable: !(s = h(e, o)) || s.enumerable
              });
            return a
          },
          U = a => M(n({}, "__esModule", {
            value: !0
          }), a),
          x = {};
        E(x, {
          Iti: () => et,
          default: () => Dt
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
        for (const a of v) A.push({
          name: "",
          iso2: a[0],
          dialCode: a[1],
          priority: a[2] || 0,
          areaCodes: a[3] || null,
          nodeById: {},
          nationalPrefix: a[4] || null,
          normalisedName: "",
          initials: "",
          dialCodePlus: ""
        });
        var T = A,
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
          at = {
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
          O = at,
          b = {
            ...R,
            ...O
          },
          S = b,
          W = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          D = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          z = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          F = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          mt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          Nt = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          yt = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          It = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          Et = {
            NANP: "1"
          },
          Wt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          Rt = {
            ISO2: "us"
          },
          Gt = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Bt = {
            AUTO: "auto"
          },
          ne = {
            COUNTRY_CODE: "countryCode",
            DIAL_CODE: "dialCode"
          },
          V = {
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
          ut = a => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(a).matches,
          ct = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const a = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = ut("(max-width: 500px)"),
                i = ut("(max-height: 600px)"),
                s = ut("(pointer: coarse)");
              return a || e || s && i
            }
            return !1
          },
          Ct = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: Gt.POLITE,
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
            useFullscreenPopup: ct(),
            validationNumberTypes: ["MOBILE"]
          },
          Kt = (a, e) => {
            a.useFullscreenPopup && (a.fixDropdownWidth = !1), a.onlyCountries.length === 1 && (a.initialCountry = a.onlyCountries[0]), a.separateDialCode && (a.nationalMode = !1), a.allowDropdown && !a.showFlags && !a.separateDialCode && (a.nationalMode = !1), a.useFullscreenPopup && !a.dropdownContainer && (a.dropdownContainer = document.body), a.i18n = {
              ...e,
              ...a.i18n
            }
          },
          qt = a => a.replace(/\D/g, ""),
          se = (a = "") => a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          N = (a, e) => {
            const i = se(e),
              s = [],
              o = [],
              c = [],
              u = [],
              f = [],
              d = [];
            for (const P of a) P.iso2 === i ? s.push(P) : P.normalisedName.startsWith(i) ? o.push(P) : P.normalisedName.includes(i) ? c.push(P) : i === P.dialCode || i === P.dialCodePlus ? u.push(P) : P.dialCodePlus.includes(i) ? f.push(P) : P.initials.includes(i) && d.push(P);
            const C = (P, dt) => P.priority - dt.priority;
            return [...s.sort(C), ...o.sort(C), ...c.sort(C), ...u.sort(C), ...f.sort(C), ...d.sort(C)]
          },
          j = (a, e) => {
            const i = e.toLowerCase();
            for (const s of a)
              if (s.name.toLowerCase().startsWith(i)) return s;
            return null
          },
          gt = a => Object.keys(a).filter(e => !!a[e]).join(" "),
          tt = (a, e, i) => {
            const s = document.createElement(a);
            return e && Object.entries(e).forEach(([o, c]) => s.setAttribute(o, c)), i && i.appendChild(s), s
          },
          Mt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${V.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          Yt = a => {
            const e = `iti-${a}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${V.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          _e = class {
            constructor(a, e, i) {
              this.highlightedItem = null, this.selectedItem = null, a.dataset.intlTelInputId = i.toString(), this.telInput = a, this.options = e, this.id = i, this.hadInitialPlaceholder = !!a.getAttribute("placeholder"), this.isRTL = !!this.telInput.closest("[dir=rtl]"), this.options.separateDialCode && (this.originalPaddingLeft = this.telInput.style.paddingLeft)
            }
            generateMarkup(a) {
              this.countries = a, this._prepareTelInput();
              const e = this._createWrapperAndInsert();
              this._maybeBuildCountryContainer(e), e.appendChild(this.telInput), this._maybeUpdateInputPaddingAndReveal(), this._maybeBuildHiddenInputs(e)
            }
            _prepareTelInput() {
              var a;
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !((a = this.telInput.form) != null && a.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off")
            }
            _createWrapperAndInsert() {
              const {
                allowDropdown: a,
                showFlags: e,
                containerClass: i,
                useFullscreenPopup: s
              } = this.options, o = gt({
                iti: !0,
                "iti--allow-dropdown": a,
                "iti--show-flags": e,
                "iti--inline-dropdown": !s,
                [i]: !!i
              }), c = tt("div", {
                class: o
              });
              return this.isRTL && c.setAttribute("dir", "ltr"), this.telInput.before(c), c
            }
            _maybeBuildCountryContainer(a) {
              const {
                allowDropdown: e,
                separateDialCode: i,
                showFlags: s
              } = this.options;
              if (e || s || i) {
                this.countryContainer = tt("div", {
                  class: `iti__country-container ${D.V_HIDE}`
                }, a), e ? (this.selectedCountry = tt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [V.EXPANDED]: "false",
                  [V.LABEL]: this.options.i18n.noCountrySelected,
                  [V.HASPOPUP]: "dialog",
                  [V.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = tt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const o = tt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = tt("div", {
                  class: D.FLAG
                }, o), e && (this.dropdownArrow = tt("div", {
                  class: "iti__arrow",
                  [V.HIDDEN]: "true"
                }, o)), i && (this.selectedDialCode = tt("div", {
                  class: "iti__selected-dial-code"
                }, this.selectedCountry)), e && this._buildDropdownContent()
              }
            }
            _buildDropdownContent() {
              const {
                fixDropdownWidth: a,
                useFullscreenPopup: e,
                countrySearch: i,
                i18n: s,
                dropdownContainer: o,
                containerClass: c
              } = this.options, u = a ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = tt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${D.HIDE} ${u}`,
                  role: "dialog",
                  [V.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), i && this._buildSearchUI(), this.countryList = tt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [V.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), i && this.updateSearchResultsA11yText(), o) {
                const f = gt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = tt("div", {
                  class: f
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: a
              } = this.options, e = tt("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = tt("span", {
                class: "iti__search-icon",
                [V.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = Mt(), this.searchInput = tt("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: a.searchPlaceholder,
                role: "combobox",
                [V.EXPANDED]: "true",
                [V.LABEL]: a.searchPlaceholder,
                [V.CONTROLS]: `iti-${this.id}__country-listbox`,
                [V.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = tt("button", {
                type: "button",
                class: `iti__search-clear ${D.HIDE}`,
                [V.LABEL]: a.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = Yt(this.id), this.searchResultsA11yText = tt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = tt("div", {
                class: `iti__no-results ${D.HIDE}`,
                [V.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = a.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(D.V_HIDE))
            }
            _maybeBuildHiddenInputs(a) {
              var i, s;
              const {
                hiddenInput: e
              } = this.options;
              if (e) {
                const o = this.telInput.getAttribute("name") || "",
                  c = e(o);
                if (c.phone) {
                  const u = (i = this.telInput.form) == null ? void 0 : i.querySelector(`input[name="${c.phone}"]`);
                  u ? this.hiddenInput = u : (this.hiddenInput = tt("input", {
                    type: "hidden",
                    name: c.phone
                  }), a.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = tt("input", {
                    type: "hidden",
                    name: c.country
                  }), a.appendChild(this.hiddenInputCountry))
                }
              }
            }
            _appendListItems() {
              const a = document.createDocumentFragment();
              for (let e = 0; e < this.countries.length; e++) {
                const i = this.countries[e],
                  s = gt({
                    [D.COUNTRY_ITEM]: !0
                  }),
                  o = tt("li", {
                    id: `iti-${this.id}__item-${i.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [V.SELECTED]: "false"
                  });
                o.dataset.dialCode = i.dialCode, o.dataset.countryCode = i.iso2, i.nodeById[this.id] = o, this.options.showFlags && tt("div", {
                  class: `${D.FLAG} iti__${i.iso2}`
                }, o);
                const c = tt("span", {
                  class: "iti__country-name"
                }, o);
                c.textContent = i.name;
                const u = tt("span", {
                  class: "iti__dial-code"
                }, o);
                this.isRTL && u.setAttribute("dir", "ltr"), u.textContent = `+${i.dialCode}`, a.appendChild(o)
              }
              this.countryList.appendChild(a)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const a = this.options.separateDialCode ? It.SANE_SELECTED_WITH_DIAL_WIDTH : It.SANE_SELECTED_NO_DIAL_WIDTH,
                  i = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || a) + It.INPUT_PADDING_EXTRA_LEFT;
                this.telInput.style.paddingLeft = `${i}px`
              }
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                let a;
                try {
                  a = window.top.document.body
                } catch {
                  a = document.body
                }
                const e = this.telInput.parentNode.cloneNode(!1);
                e.style.visibility = "hidden", a.appendChild(e);
                const i = this.countryContainer.cloneNode();
                e.appendChild(i);
                const s = this.selectedCountry.cloneNode(!0);
                i.appendChild(s);
                const o = s.offsetWidth;
                return a.removeChild(e), o
              }
              return 0
            }
            updateSearchResultsA11yText() {
              const {
                i18n: a
              } = this.options, e = this.countryList.childElementCount;
              let i;
              e === 0 ? i = a.zeroSearchResults : a.searchResultsText ? i = a.searchResultsText(e) : e === 1 ? i = a.oneSearchResult : i = a.multipleSearchResults.replace("${count}", e.toString()), this.searchResultsA11yText.textContent = i
            }
            scrollTo(a) {
              const e = this.countryList,
                i = document.documentElement.scrollTop,
                s = e.offsetHeight,
                o = e.getBoundingClientRect().top + i,
                c = o + s,
                u = a.offsetHeight,
                f = a.getBoundingClientRect().top + i,
                d = f + u,
                C = f - o + e.scrollTop;
              if (f < o) e.scrollTop = C;
              else if (d > c) {
                const P = s - u;
                e.scrollTop = C - P
              }
            }
            highlightListItem(a, e) {
              const i = this.highlightedItem;
              if (i && i.classList.remove(D.HIGHLIGHT), this.highlightedItem = a, this.highlightedItem && (this.highlightedItem.classList.add(D.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(V.ACTIVE_DESCENDANT, s)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(a) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== a && (this.selectedItem.setAttribute(V.SELECTED, "false"), this.selectedItem = null), a && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${a}"]`);
                e && (e.setAttribute(V.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(a) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const i of a) {
                const s = i.nodeById[this.id];
                s && (this.countryList.appendChild(s), e && (this.highlightListItem(s, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(D.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(D.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const a = this.telInput.parentNode;
              a.before(this.telInput), a.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const e of this.countries) delete e.nodeById[this.id];
              this.countries = null
            }
          },
          oe = a => {
            const {
              onlyCountries: e,
              excludeCountries: i
            } = a;
            if (e.length) {
              const s = e.map(o => o.toLowerCase());
              return T.filter(o => s.includes(o.iso2))
            } else if (i.length) {
              const s = i.map(o => o.toLowerCase());
              return T.filter(o => !s.includes(o.iso2))
            }
            return T
          },
          Ht = (a, e) => {
            for (const i of a) {
              const s = i.iso2.toLowerCase();
              e.i18n[s] && (i.name = e.i18n[s])
            }
          },
          Vt = a => {
            const e = new Set;
            let i = 0;
            const s = {},
              o = (u, f) => {
                if (!u || !f) return;
                f.length > i && (i = f.length), s.hasOwnProperty(f) || (s[f] = []);
                const d = s[f];
                d.includes(u) || d.push(u)
              },
              c = [...a].sort((u, f) => u.priority - f.priority);
            for (const u of c) {
              e.has(u.dialCode) || e.add(u.dialCode);
              for (let f = 1; f < u.dialCode.length; f++) {
                const d = u.dialCode.substring(0, f);
                o(u.iso2, d)
              }
              if (o(u.iso2, u.dialCode), u.areaCodes) {
                const f = s[u.dialCode][0];
                for (const d of u.areaCodes) {
                  for (let C = 1; C < d.length; C++) {
                    const P = d.substring(0, C),
                      dt = u.dialCode + P;
                    o(f, dt), o(u.iso2, dt)
                  }
                  o(u.iso2, u.dialCode + d)
                }
              }
            }
            return {
              dialCodes: e,
              dialCodeMaxLen: i,
              dialCodeToIso2Map: s
            }
          },
          St = (a, e) => {
            e.countryOrder && (e.countryOrder = e.countryOrder.map(i => i.toLowerCase())), a.sort((i, s) => {
              const {
                countryOrder: o
              } = e;
              if (o) {
                const c = o.indexOf(i.iso2),
                  u = o.indexOf(s.iso2),
                  f = c > -1,
                  d = u > -1;
                if (f || d) return f && d ? c - u : f ? -1 : 1
              }
              return i.name.localeCompare(s.name)
            })
          },
          X = a => {
            for (const e of a) e.normalisedName = se(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(i => i[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          ge = (a, e, i, s) => {
            let o = a;
            if (i && e) {
              e = `+${s.dialCode}`;
              const c = o[e.length] === " " || o[e.length] === "-" ? e.length + 1 : e.length;
              o = o.substring(c)
            }
            return o
          },
          De = (a, e, i, s, o) => {
            const c = i ? i.formatNumberAsYouType(a, s.iso2) : a,
              {
                dialCode: u
              } = s;
            return o && e.charAt(0) !== "+" && c.includes(`+${u}`) ? (c.split(`+${u}`)[1] || "").trim() : c
          },
          Se = (a, e, i, s) => {
            if (i === 0 && !s) return 0;
            let o = 0;
            for (let c = 0; c < e.length; c++) {
              if (/[+0-9]/.test(e[c]) && o++, o === a && !s) return c + 1;
              if (s && o === a + 1) return c
            }
            return e.length
          },
          Ne = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ve = a => {
            const e = qt(a);
            if (e.startsWith(Et.NANP) && e.length >= 4) {
              const i = e.substring(1, 4);
              return Ne.includes(i)
            }
            return !1
          };
        for (const a of T) a.name = S[a.iso2];
        var xe = 0,
          L = new Set(T.map(a => a.iso2)),
          k = a => L.has(a),
          et = class Gn {
            constructor(e, i = {}) {
              this.id = xe++, this.options = {
                ...Ct,
                ...i
              }, Kt(this.options, S), this.ui = new _e(e, this.options, this.id), this.isAndroid = Gn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = oe(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: o,
                dialCodeToIso2Map: c
              } = Vt(this.countries);
              this.dialCodes = s, this.dialCodeMaxLen = o, this.dialCodeToIso2Map = c, this.countryByIso2 = new Map(this.countries.map(u => [u.iso2, u])), this._init()
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
              return e.replace(s, o => String.fromCharCode(48 + (o.charCodeAt(0) - i)))
            }
            _getTelInputValue() {
              const e = this.ui.telInput.value.trim();
              return this._normaliseNumerals(e)
            }
            _setTelInputValue(e) {
              this.ui.telInput.value = this._mapAsciiToUserNumerals(e)
            }
            _createInitPromises() {
              const e = new Promise((s, o) => {
                  this.resolveAutoCountryPromise = s, this.rejectAutoCountryPromise = o
                }),
                i = new Promise((s, o) => {
                  this.resolveUtilsScriptPromise = s, this.rejectUtilsScriptPromise = o
                });
              return Promise.all([e, i])
            }
            _init() {
              this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
            }
            _processCountryData() {
              Ht(this.countries, this.options), St(this.countries, this.options), X(this.countries)
            }
            _setInitialState(e = !1) {
              const i = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(i),
                o = this._getTelInputValue(),
                u = s && s.startsWith("+") && (!o || !o.startsWith("+")) ? s : o,
                f = this._getDialCode(u),
                d = ve(u),
                {
                  initialCountry: C,
                  geoIpLookup: P
                } = this.options,
                dt = C === Bt.AUTO && P;
              if (f && !d) this._updateCountryFromNumber(u);
              else if (!dt || e) {
                const st = C ? C.toLowerCase() : "";
                k(st) ? this._setCountry(st) : f && d ? this._setCountry(Rt.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(D.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", i, {
                signal: e
              });
              const o = () => {
                this.ui.dropdownContent.classList.contains(D.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", o, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(D.HIDE) && [z.ARROW_UP, z.ARROW_DOWN, z.SPACE, z.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === z.TAB && this._closeDropdown()
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
                k(i) ? (m.autoCountry = i, setTimeout(() => Z("handleAutoCountry"))) : (this._setInitialState(!0), Z("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), Z("rejectAutoCountryPromise")
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
                allowDropdown: o,
                countrySearch: c
              } = this.options;
              let u = !1;
              mt.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const f = d => {
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && o && c) {
                  const H = this.ui.telInput.selectionStart || 0,
                    pt = C.substring(0, H - 1),
                    Q = C.substring(H);
                  this._setTelInputValue(pt + Q), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const P = (d == null ? void 0 : d.data) && mt.NON_PLUS_NUMERIC.test(d.data),
                  dt = (d == null ? void 0 : d.inputType) === F.PASTE && C;
                P || dt && !e ? u = !0 : mt.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const st = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  B = this.userNumeralSet === "ascii";
                if (i && !u && !st && B) {
                  const H = this.ui.telInput.selectionStart || 0,
                    Q = C.substring(0, H).replace(mt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ot = (d == null ? void 0 : d.inputType) === F.DELETE_FWD,
                    nt = this._getFullNumber(),
                    jt = De(nt, C, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ut = Se(Q, jt, H, ot);
                  this._setTelInputValue(jt), this.ui.telInput.setSelectionRange(Ut, Ut)
                }
              };
              this.ui.telInput.addEventListener("input", f, {
                signal: this.abortController.signal
              })
            }
            _maybeBindKeydownListener() {
              const {
                strictMode: e,
                separateDialCode: i,
                allowDropdown: s,
                countrySearch: o
              } = this.options;
              if (e || i) {
                const c = u => {
                  if (u.key && u.key.length === 1 && !u.altKey && !u.ctrlKey && !u.metaKey) {
                    if (i && s && o && u.key === "+") {
                      u.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (e) {
                      const f = this._getTelInputValue(),
                        C = !f.startsWith("+") && this.ui.telInput.selectionStart === 0 && u.key === "+",
                        P = this._normaliseNumerals(u.key),
                        dt = /^[0-9]$/.test(P),
                        st = i ? dt : C || dt,
                        B = this.ui.telInput,
                        H = B.selectionStart,
                        pt = B.selectionEnd,
                        Q = f.slice(0, H),
                        ot = f.slice(pt),
                        nt = Q + u.key + ot,
                        jt = this._getFullNumber(nt),
                        Ut = m.utils.getCoreNumber(jt, this.selectedCountryData.iso2),
                        bt = this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(jt) !== null;
                      (!st || bt && !te && !C) && u.preventDefault()
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
                    o = s.selectionStart,
                    c = s.selectionEnd,
                    u = this._getTelInputValue(),
                    f = u.slice(0, o),
                    d = u.slice(c),
                    C = this.selectedCountryData.iso2,
                    P = i.clipboardData.getData("text"),
                    dt = this._normaliseNumerals(P),
                    st = o === 0 && c > 0,
                    B = !u.startsWith("+") || st,
                    H = dt.replace(mt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    pt = H.startsWith("+"),
                    Q = H.replace(/\+/g, ""),
                    ot = pt && B ? `+${Q}` : Q;
                  let nt = f + ot + d;
                  if (nt.length > 5) {
                    let Ut = m.utils.getCoreNumber(nt, C);
                    for (; Ut.length === 0 && nt.length > 0;) nt = nt.slice(0, -1), Ut = m.utils.getCoreNumber(nt, C);
                    if (!Ut) return;
                    if (this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const bt = Ut.length - this.maxCoreNumberLength;
                        nt = nt.slice(0, nt.length - bt)
                      } else return
                  }
                  this._setTelInputValue(nt);
                  const jt = o + ot.length;
                  s.setSelectionRange(jt, jt), s.dispatchEvent(new InputEvent("input", {
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(D.HIDE), this.ui.selectedCountry.setAttribute(V.EXPANDED, "true"), this._setDropdownPosition(), i) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(D.ARROW_UP), this._trigger(W.OPEN_COUNTRY_DROPDOWN)
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
                const o = (c = s.target) == null ? void 0 : c.closest(`.${D.COUNTRY_ITEM}`);
                o && this.ui.highlightListItem(o, !1)
              };
              this.ui.countryList.addEventListener("mouseover", i, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const i = s => {
                var c;
                const o = (c = s.target) == null ? void 0 : c.closest(`.${D.COUNTRY_ITEM}`);
                o && this._selectListItem(o)
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
              const o = c => {
                [z.ARROW_UP, z.ARROW_DOWN, z.ENTER, z.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === z.ARROW_UP || c.key === z.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === z.ENTER ? this._handleEnterKey() : c.key === z.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && mt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), i += c.key.toLowerCase(), this._searchForCountry(i), s = setTimeout(() => {
                  i = ""
                }, Nt.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", o, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const i = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(D.HIDE) : this.ui.searchClearButton.classList.add(D.HIDE)
              };
              let s = null;
              const o = () => {
                s && clearTimeout(s), s = setTimeout(() => {
                  i(), s = null
                }, 100)
              };
              this.ui.searchInput.addEventListener("input", o, {
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
              const i = j(this.countries, e);
              if (i) {
                const s = i.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let i;
              e === "" ? i = this.countries : i = N(this.countries, e), this.ui.filterCountries(i)
            }
            _handleUpDownKey(e) {
              var s, o;
              let i = e === z.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (o = this.ui.highlightedItem) == null ? void 0 : o.nextElementSibling;
              !i && this.ui.countryList.childElementCount > 1 && (i = e === z.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), i && (this.ui.scrollTo(i), this.ui.highlightListItem(i, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let i = e;
              if (this.options.formatOnDisplay && m.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !i.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: o,
                    INTERNATIONAL: c
                  } = m.utils.numberFormat,
                  u = s ? o : c;
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
              const o = this.selectedCountryData.iso2,
                c = this.selectedCountryData.dialCode;
              s = this._ensureHasDialCode(s);
              const u = this._getDialCode(s, !0),
                f = qt(s);
              if (u) {
                const d = qt(u),
                  C = this.dialCodeToIso2Map[d];
                if (C.length === 1) return C[0] === o ? null : C[0];
                if (!o && this.defaultCountry && C.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === Et.NANP && ve(f)) return null;
                const {
                  areaCodes: dt,
                  priority: st
                } = this.selectedCountryData;
                if (dt) {
                  const ot = dt.map(nt => `${c}${nt}`);
                  for (const nt of ot)
                    if (f.startsWith(nt)) return null
                }
                const H = dt && !(st === 0) && f.length > d.length,
                  pt = o && C.includes(o) && !H,
                  Q = o === C[0];
                if (!pt && !Q) return C[0]
              } else if (s.startsWith("+") && f.length) {
                const d = this.selectedCountryData.dialCode || "";
                return d && d.startsWith(f) ? null : ""
              } else if ((!s || s === "+") && !o) return this.defaultCountry;
              return null
            }
            _setCountry(e) {
              const {
                separateDialCode: i,
                showFlags: s,
                i18n: o,
                allowDropdown: c
              } = this.options, u = this.selectedCountryData.iso2 || "";
              if (c && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const f = e && s ? `${D.FLAG} iti__${e}` : `${D.FLAG} ${D.GLOBE}`;
                let d, C;
                if (e) {
                  const {
                    name: P,
                    dialCode: dt
                  } = this.selectedCountryData;
                  C = P, d = o.selectedCountryAriaLabel.replace("${countryName}", P).replace("${dialCode}", `+${dt}`)
                } else C = o.noCountrySelected, d = o.noCountrySelected;
                this.ui.selectedCountryInner.className = f, this.ui.selectedCountry.setAttribute("title", C), this.ui.selectedCountry.setAttribute(V.LABEL, d)
              }
              if (i) {
                const f = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                this.ui.selectedDialCode.textContent = f, this.ui.updateInputPadding()
              }
              return this._updatePlaceholder(), this._updateMaxLength(), u !== e
            }
            _updateMaxLength() {
              const {
                strictMode: e,
                placeholderNumberType: i,
                validationNumberTypes: s
              } = this.options, {
                iso2: o
              } = this.selectedCountryData;
              if (e && m.utils)
                if (o) {
                  const c = m.utils.numberType[i];
                  let u = m.utils.getExampleNumber(o, !1, c, !0),
                    f = u;
                  for (; m.utils.isPossibleNumber(u, o, s);) f = u, u += "0";
                  const d = m.utils.getCoreNumber(f, o);
                  this.maxCoreNumberLength = d.length, o === "by" && (this.maxCoreNumberLength = d.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: e,
                placeholderNumberType: i,
                nationalMode: s,
                customPlaceholder: o
              } = this.options, c = e === Gt.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === Gt.POLITE;
              if (m.utils && c) {
                const u = m.utils.numberType[i];
                let f = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, s, u) : "";
                f = this._beforeSetNumber(f), typeof o == "function" && (f = o(f, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", f)
              }
            }
            _selectListItem(e) {
              const i = e.dataset[ne.COUNTRY_CODE],
                s = this._setCountry(i);
              this._closeDropdown();
              const o = e.dataset[ne.DIAL_CODE];
              if (this._updateDialCode(o), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(D.HIDE) || (this.ui.dropdownContent.classList.add(D.HIDE), this.ui.selectedCountry.setAttribute(V.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(V.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(D.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(D.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(W.CLOSE_COUNTRY_DROPDOWN))
            }
            _updateDialCode(e) {
              const i = this._getTelInputValue(),
                s = `+${e}`;
              let o;
              if (i.startsWith("+")) {
                const c = this._getDialCode(i);
                c ? o = i.replace(c, s) : o = s, this._setTelInputValue(o)
              }
            }
            _getDialCode(e, i) {
              let s = "";
              if (e.startsWith("+")) {
                let o = "",
                  c = !1;
                for (let u = 0; u < e.length; u++) {
                  const f = e.charAt(u);
                  if (/[0-9]/.test(f)) {
                    if (o += f, !!!this.dialCodeToIso2Map[o]) break;
                    if (this.dialCodes.has(o)) {
                      if (s = e.substring(0, u + 1), c = !0, !i) break
                    } else i && c && (s = e.substring(0, u + 1));
                    if (o.length === this.dialCodeMaxLen) break
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
              let o;
              const c = qt(i);
              return this.options.separateDialCode && !i.startsWith("+") && s && c ? o = `+${s}` : o = "", o + i
            }
            _beforeSetNumber(e) {
              const i = this._getDialCode(e),
                s = ge(e, i, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(W.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Bt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(D.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
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
                } = this.selectedCountryData, s = this._getFullNumber(), o = m.utils.formatNumber(s, i, e);
                return this._mapAsciiToUserNumerals(o)
              }
              return ""
            }
            getNumberType() {
              return m.utils ? m.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : yt.UNKNOWN_NUMBER_TYPE
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
              return yt.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: i
              } = this.selectedCountryData;
              if (e === Wt.DIAL_CODE && m.utils) {
                const s = this._getFullNumber(),
                  o = m.utils.getCoreNumber(s, i);
                if (o[0] === Wt.MOBILE_PREFIX && o.length !== Wt.MOBILE_CORE_LENGTH) return !1
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
                o = s.search(mt.ALPHA_UNICODE);
              if (o > -1 && !this.options.allowPhonewords) {
                const u = s.substring(0, o),
                  f = i(u),
                  d = i(s);
                return f && d
              }
              return i(s)
            }
            _utilsIsValidNumber(e) {
              return m.utils ? m.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const i = e == null ? void 0 : e.toLowerCase();
              if (!k(i)) throw new Error(`Invalid country code: '${i}'`);
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
              this._updateValFromNumber(i), s && this._triggerCountryChange(), this._trigger(W.INPUT, {
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
          rt = a => {
            if (!m.utils && !m.startedLoadingUtilsScript) {
              let e;
              if (typeof a == "function") try {
                e = Promise.resolve(a())
              } catch (i) {
                return Promise.reject(i)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof a}`));
              return m.startedLoadingUtilsScript = !0, e.then(i => {
                const s = i == null ? void 0 : i.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return m.utils = s, Z("handleUtils"), !0
              }).catch(i => {
                throw Z("rejectUtilsScriptPromise", i), i
              })
            }
            return null
          },
          Z = (a, ...e) => {
            Object.values(m.instances).forEach(i => {
              const s = i[a];
              typeof s == "function" && s.apply(i, e)
            })
          },
          m = Object.assign((a, e) => {
            const i = new et(a, e);
            return m.instances[i.id] = i, a.iti = i, i
          }, {
            defaults: Ct,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => T,
            getInstance: a => {
              const e = a.dataset.intlTelInputId;
              return e ? m.instances[e] : null
            },
            instances: {},
            attachUtils: rt,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Dt = m;
        return U(x)
      })();
      return t.default
    })
  })(un)), un.exports
}
var xa = Na();
const La = di(xa);
var Aa = ht('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  Pa = ht('<span class="w-8"> </span>'),
  ka = ht('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary w-full"> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  Oa = ht('<span class="w-8"> </span>'),
  Ma = ht('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-3 flex flex-col items-center gap-1"><button class="btn btn-ghost w-max"> <!></button> <button class="text-primary cursor-pointer text-xs"> </button></div>', 1),
  Ra = ht('<div class="flex h-full w-full flex-col items-center"><!></div>');

function Ba(l, t) {
  Jt(t, !0);
  let n = it(!0),
    h = it(""),
    _ = it(0),
    I = it(!1);
  const E = w(() => r(_) > 0 || r(I));
  let M = it(!1),
    U = it(""),
    x = it(void 0);
  const v = w(() => {
    var b;
    return `phone:${(b=dn.data)==null?void 0:b.id}`
  });
  Ot(() => {
    const b = localStorage.getItem(r(v));
    b && g(h, b, !0)
  }), pe(() => {
    sn.getOtpCooldown().then(W => {
      g(_, W.cooldownMs, !0)
    }).catch(W => {
      ye.error(W.message)
    }).finally(() => {
      g(n, !1)
    });
    const b = 1e3,
      S = setInterval(() => {
        g(_, Math.max(0, r(_) - b), !0)
      }, b);
    return () => {
      clearInterval(S)
    }
  });
  async function A(b) {
    try {
      g(I, !0);
      const S = await sn.sendOtp(b);
      ye.info(`${Ks()} ${S.phone}`), g(h, S.phone, !0), g(_, S.cooldownMs, !0), localStorage.setItem(r(v), r(h))
    } catch (S) {
      ye.error(S.message)
    } finally {
      g(I, !1)
    }
  }
  Ot(() => {
    r(U).length === 6 && (g(M, !0), (async () => {
      try {
        await sn.verifyChallenge({
          type: "otp",
          code: r(U)
        }), ye.success(Yr()), localStorage.removeItem(r(v)), t.onsuccess(r(h))
      } catch (b) {
        ye.error(b.message)
      } finally {
        g(U, ""), g(M, !1)
      }
    })())
  });
  var T = Ra(),
    $ = J(T);
  {
    var R = b => {
        var S = Aa();
        y(b, S)
      },
      at = b => {
        var S = ka(),
          W = G(S),
          D = J(W),
          z = J(D),
          F = J(z, !0);
        q(z);
        var mt = wt(z, 2),
          Nt = J(mt, !0);
        q(mt), q(D);
        var yt = wt(D, 2),
          It = J(yt);
        Bn(It, () => V => {
          var ut, ct;
          return g(x, La(V, {
            strictMode: !0,
            initialCountry: ((ct = (ut = dn.data) == null ? void 0 : ut.country) == null ? void 0 : ct.toLocaleLowerCase()) ?? "br",
            loadUtils: () => wi(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: document.body
          })), () => {
            var Ct;
            (Ct = r(x)) == null || Ct.destroy()
          }
        });
        var Et = wt(It, 2),
          Wt = J(Et),
          Rt = wt(Wt);
        {
          var Gt = V => {
            var ut = Pa(),
              ct = J(ut);
            q(ut), Tt(Ct => Pt(ct, `(${Ct??""})`), [() => Dn(r(_))]), y(V, ut)
          };
          lt(Rt, V => {
            r(_) > 0 && V(Gt)
          })
        }
        q(Et), q(yt), q(W);
        var Bt = wt(W, 2),
          ne = J(Bt, !0);
        q(Bt), Tt((V, ut, ct, Ct) => {
          Pt(F, V), Pt(Nt, ut), Et.disabled = r(E), Pt(Wt, `${ct??""} `), Pt(ne, Ct)
        }, [() => wr(), () => Mr(), () => Cs(), () => ur()]), en("submit", yt, async () => {
          var ut;
          if (r(E)) return;
          if (!((ut = r(x)) != null && ut.isValidNumber())) {
            ye.error(Zi());
            return
          }
          const V = r(x).getNumber();
          await A(V)
        }), y(b, S)
      },
      O = b => {
        var S = Ma(),
          W = G(S),
          D = J(W),
          z = J(D, !0);
        q(D);
        var F = wt(D, 2),
          mt = J(F);
        q(F), q(W);
        var Nt = wt(W, 2),
          yt = J(Nt);
        {
          const V = (ut, ct) => {
            let Ct = () => ct == null ? void 0 : ct().cells;
            var Kt = Y(),
              qt = G(Kt);
            Qt(qt, () => na, (se, N) => {
              N(se, {
                class: "border-primary",
                children: (j, gt) => {
                  var tt = Y(),
                    Mt = G(tt);
                  Xe(Mt, 16, Ct, Yt => Yt, (Yt, _e) => {
                    var oe = Y(),
                      Ht = G(oe);
                    Qt(Ht, () => Da, (Vt, St) => {
                      St(Vt, {
                        get cell() {
                          return _e
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), y(Yt, oe)
                  }), y(j, tt)
                },
                $$slots: {
                  default: !0
                }
              })
            }), y(ut, Kt)
          };
          Qt(yt, () => Sa, (ut, ct) => {
            ct(ut, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return r(M)
              },
              get value() {
                return r(U)
              },
              set value(Ct) {
                g(U, Ct, !0)
              },
              children: V,
              $$slots: {
                default: !0
              }
            })
          })
        }
        q(Nt);
        var It = wt(Nt, 2),
          Et = J(It),
          Wt = J(Et),
          Rt = wt(Wt);
        {
          var Gt = V => {
            var ut = Oa(),
              ct = J(ut);
            q(ut), Tt(Ct => Pt(ct, `(${Ct??""})`), [() => Dn(r(_))]), y(V, ut)
          };
          lt(Rt, V => {
            r(_) > 0 && V(Gt)
          })
        }
        q(Et);
        var Bt = wt(Et, 2),
          ne = J(Bt, !0);
        q(Bt), q(It), Tt((V, ut, ct, Ct) => {
          Pt(z, V), Pt(mt, `${ut??""} ${r(h)??""}`), Et.disabled = r(E), Pt(Wt, `${ct??""} `), Pt(ne, Ct)
        }, [() => Bi(), () => ks(), () => as(), () => so()]), ue("click", Et, async () => {
          await A(r(h))
        }), ue("click", Bt, () => {
          g(h, "")
        }), y(b, S)
      };
    lt($, b => {
      r(n) ? b(R) : r(h) ? b(O, !1) : b(at, 1)
    })
  }
  q(T), y(l, T), $t()
}
gn(["click"]);
var Ha = ht('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Ua(l, t) {
  Jt(t, !0);
  const n = w(() => on.current !== null),
    h = w(() => {
      var v;
      return (v = on.current) == null ? void 0 : v.tier
    });
  var _ = Ha(),
    I = J(_);
  let E;
  var M = J(I),
    U = J(M);
  {
    var x = v => {
      var A = Y(),
        T = G(A);
      gi(T, () => on.errorCount, $ => {
        var R = Y(),
          at = G(R);
        {
          var O = W => {
              {
                let D = w(() => ri.trim());
                bi(W, {
                  get siteKey() {
                    return r(D)
                  },
                  callback: z => Nn(z),
                  errorCallback: () => Sn()
                })
              }
            },
            b = W => {
              {
                let D = w(() => si.trim());
                ta(W, {
                  get siteKey() {
                    return r(D)
                  },
                  callback: z => Nn(z),
                  errorCallback: () => Sn()
                })
              }
            },
            S = W => {
              Ba(W, {
                onsuccess: () => ii()
              })
            };
          lt(at, W => {
            r(h) === 2 ? W(O) : r(h) === 3 ? W(b, 1) : r(h) === 4 && W(S, 2)
          })
        }
        y($, R)
      }), y(v, A)
    };
    lt(U, v => {
      r(n) && v(x)
    })
  }
  q(M), q(I), Rn(2), q(_), Bn(_, () => v => {
    Ot(() => {
      r(n) ? v.show() : v.close()
    })
  }), Tt(() => E = ie(I, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, E, {
    "h-80": r(h) === 4
  })), en("close", _, () => ni()), y(l, _), $t()
}
var Wa = ht('<span class="hidden"> </span> <!> <!> <!>', 1);

function cl(l, t) {
  Jt(t, !0), pe(() => {
    oi();
    const v = fi();
    xn.init();
    const A = mi(async () => {
      await dn.refresh()
    }, {
      interval: ai.hour,
      immediate: !0
    });
    let T = setInterval(() => {
      pi()
    }, 5e3);
    return () => {
      clearTimeout(T), v(), A(), xn.cleanup()
    }
  });
  const n = "muted";
  pe(() => {
    cn.muted = localStorage.getItem(n) === "1"
  }), Ot(() => {
    {
      const v = cn.muted;
      document.querySelectorAll("audio").forEach(A => {
        A.muted = v
      });
      for (const A of Object.values(hi).filter(T => T instanceof Audio)) A.muted = v, v || (A.volume = .3);
      localStorage.setItem(n, Number(v).toString())
    }
  }), pe(() => {});
  var h = Wa();
  en("beforeunload", Jn, () => {
    _i()
  });
  var _ = G(h),
    I = J(_);
  q(_);
  var E = wt(_, 2);
  {
    var M = v => {
      var A = Y(),
        T = G(A);
      kt(T, () => t.children), y(v, A)
    };
    lt(E, v => {
      v(M, !1)
    })
  }
  var U = wt(E, 2);
  Ua(U, {});
  var x = wt(U, 2);
  Xo(x, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Tt(() => Pt(I, `Version: ${ti}`)), y(l, h), $t()
}
export {
  cl as component, ul as universal
};