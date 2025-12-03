var Ae = Object.defineProperty;
var se = n => {
  throw TypeError(n)
};
var je = (n, t, e) => t in n ? Ae(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var g = (n, t, e) => je(n, typeof t != "symbol" ? t + "" : t, e),
  Pe = (n, t, e) => t.has(n) || se("Cannot " + e);
var f = (n, t, e) => (Pe(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  w = (n, t, e) => t.has(n) ? se("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  g as _
} from "./FJFkb2i2.js";
import {
  e as E,
  g as oe,
  j as y,
  i as v,
  x as ie,
  u as z
} from "./DHzwV35n.js";
import {
  P as le,
  g as Ie
} from "./C_nNCuhm.js";
import {
  s as Ne,
  c as ze
} from "./Be6-TSHK.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "dfb4bddd9fb2b4748eaf19466331b7b547c362b7"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "e105aec3-d2f4-4538-8599-543d4e3003a4", n._sentryDebugIdIdentifier = "sentry-dbid-e105aec3-d2f4-4538-8599-543d4e3003a4")
  })()
} catch {}

function ll(...n) {
  return n.filter(Boolean).join(" ")
}
const qe = typeof document < "u";
let ue = 0;
var C, M, B;
class Oe {
  constructor() {
    w(this, C, E(oe([])));
    w(this, M, E(oe([])));
    w(this, B, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    g(this, "addToast", t => {
      qe && this.toasts.unshift(t)
    });
    g(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: a
    }) => {
      const s = this.toasts.findIndex(i => i.id === t),
        u = this.toasts[s];
      this.toasts[s] = {
        ...u,
        ...e,
        id: t,
        title: a,
        type: r,
        updated: !0
      }
    });
    g(this, "create", t => {
      var i;
      const {
        message: e,
        ...r
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((i = t.id) == null ? void 0 : i.length) > 0 ? t.id : ue++, s = t.dismissable === void 0 ? !0 : t.dismissable, u = t.type === void 0 ? "default" : t.type;
      return ie(() => {
        this.toasts.find(c => c.id === a) ? this.updateToast({
          id: a,
          data: t,
          type: u,
          message: e,
          dismissable: s
        }) : this.addToast({
          ...r,
          id: a,
          title: e,
          dismissable: s,
          type: u
        })
      }), a
    });
    g(this, "dismiss", t => (ie(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(r => ({
          ...r,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(r => r.id === t);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), t));
    g(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = f(this, B).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    g(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    g(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    g(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    g(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    g(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    g(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    g(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const a = t instanceof Promise ? t : t();
      let s = r !== void 0;
      return a.then(u => {
        if (typeof u == "object" && u && "ok" in u && typeof u.ok == "boolean" && !u.ok) {
          s = !1;
          const i = De(u);
          this.create({
            id: r,
            type: "error",
            message: i
          })
        } else if (e.success !== void 0) {
          s = !1;
          const i = typeof e.success == "function" ? e.success(u) : e.success;
          this.create({
            id: r,
            type: "success",
            message: i
          })
        }
      }).catch(u => {
        if (e.error !== void 0) {
          s = !1;
          const i = typeof e.error == "function" ? e.error(u) : e.error;
          this.create({
            id: r,
            type: "error",
            message: i
          })
        }
      }).finally(() => {
        var u;
        s && (this.dismiss(r), r = void 0), (u = e.finally) == null || u.call(e)
      }), r
    });
    g(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || ue++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    g(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    g(this, "setHeight", t => {
      const e = f(this, B).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    g(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return y(f(this, C))
  }
  set toasts(t) {
    v(f(this, C), t, !0)
  }
  get heights() {
    return y(f(this, M))
  }
  set heights(t) {
    v(f(this, M), t, !0)
  }
}
C = new WeakMap, M = new WeakMap, B = new WeakMap;

function De(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const b = new Oe;

function Ce(n, t) {
  return b.create({
    message: n,
    ...t
  })
}
var te;
class _l {
  constructor() {
    w(this, te, z(() => b.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return y(f(this, te))
  }
}
te = new WeakMap;
const Me = Ce,
  _e = Object.assign(Me, {
    success: b.success,
    info: b.info,
    warning: b.warning,
    error: b.error,
    custom: b.custom,
    message: b.message,
    promise: b.promise,
    dismiss: b.dismiss,
    loading: b.loading,
    getActiveToasts: () => b.toasts.filter(n => !n.dismiss)
  });
let fe = E(void 0);
const me = () => y(fe),
  fl = n => {
    const t = new URL(n, le),
      e = me();
    return e && t.searchParams.set("override", e.token), t.toString()
  };

function ml() {
  try {
    Be()
  } catch (n) {
    console.error("failed to load override", n)
  }
}

function Be() {
  const t = new URL(location.href).searchParams.get("override");
  if (!t) return;
  const e = t.split(".");
  if (e.length !== 2) throw new Error("override token wrong amount of parts");
  const [r] = e, a = JSON.parse(atob(r));
  if (Date.now() / 1e3 > a.expiresAt) throw new Error("override token expired");
  _e.info(`Currently using the ${a.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 6e4
  }), v(fe, {
    token: t,
    payload: a
  }, !0)
}
const Le = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  $e = () => "Your account has been suspended for breaking the rules",
  Ue = () => "Sua conta foi suspensa por quebrar as regras",
  Re = () => "您的账号因违反规则已被暂停",
  Ge = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Fe = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Ve = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Je = () => "Il tuo account è stato sospeso per aver infranto le regole",
  We = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Ke = () => "Twoje konto zostało zawieszone za łamanie zasad",
  He = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ye = () => "Ваш обліковий запис було призупинено за порушення правил",
  Ze = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Xe = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $e() : e === "pt" ? Ue() : e === "ch" ? Re() : e === "de" ? Ge() : e === "es" ? Fe() : e === "fr" ? Ve() : e === "it" ? Je() : e === "jp" ? We() : e === "pl" ? Ke() : e === "ru" ? He() : e === "uk" ? Ye() : Ze()
  },
  Qe = () => "Alliance name already taken",
  et = () => "Já possui uma aliança com esse nome",
  tt = () => "该联盟名称已被占用",
  nt = () => "Der Allianzname ist bereits vergeben",
  rt = () => "Ese nombre de alianza ya está en uso",
  at = () => "Ce nom d’alliance est déjà pris",
  st = () => "Esiste già un'alleanza con questo nome",
  ot = () => "このアライアンス名は既に使用されています。",
  it = () => "Nazwa sojuszu jest już zajęta",
  ut = () => "Такое название альянса уже используется",
  ct = () => "Назва альянсу вже зайнята",
  dt = () => "Tên liên minh đã được sử dụng",
  lt = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qe() : e === "pt" ? et() : e === "ch" ? tt() : e === "de" ? nt() : e === "es" ? rt() : e === "fr" ? at() : e === "it" ? st() : e === "jp" ? ot() : e === "pl" ? it() : e === "ru" ? ut() : e === "uk" ? ct() : dt()
  },
  _t = () => "Alliance name exceeded the maximum number of characters",
  ft = () => "O nome da aliança excedeu o número máximo de caracteres",
  mt = () => "联盟名称超过最大字符数限制",
  ht = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  pt = () => "El nombre de la alianza superó el número máximo de caracteres",
  gt = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  wt = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  yt = () => "アライアンス名が最大文字数を超えています。",
  bt = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  vt = () => "Название альянса превышает максимальную длину",
  kt = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  xt = () => "Tên liên minh vượt quá số ký tự cho phép",
  St = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _t() : e === "pt" ? ft() : e === "ch" ? mt() : e === "de" ? ht() : e === "es" ? pt() : e === "fr" ? gt() : e === "it" ? wt() : e === "jp" ? yt() : e === "pl" ? bt() : e === "ru" ? vt() : e === "uk" ? kt() : xt()
  },
  Tt = () => "Alliance with empty name",
  Et = () => "Aliança com nome vazio",
  At = () => "名称为空的联盟",
  jt = () => "Allianz mit leerem Namen",
  Pt = () => "Alianza con nombre vacío",
  It = () => "Alliance avec nom vide",
  Nt = () => "Alleanza con nome vuoto",
  zt = () => "名前が空のアライアンスです。",
  qt = () => "Sojusz z pustą nazwą",
  Ot = () => "Альянс с пустым названием",
  Dt = () => "Альянс із порожньою назвою",
  Ct = () => "Liên minh không có tên",
  Mt = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Tt() : e === "pt" ? Et() : e === "ch" ? At() : e === "de" ? jt() : e === "es" ? Pt() : e === "fr" ? It() : e === "it" ? Nt() : e === "jp" ? zt() : e === "pl" ? qt() : e === "ru" ? Ot() : e === "uk" ? Dt() : Ct()
  },
  Bt = () => "Botting",
  Lt = () => "Uso de bots",
  $t = () => "脚本",
  Ut = () => "Bot-Nutzung",
  Rt = () => "Botting",
  Gt = () => "Bots",
  Ft = () => "Uso di bot",
  Vt = () => "ボット使用",
  Jt = () => "Botting",
  Wt = () => "Боттинг",
  Kt = () => "Боти",
  Ht = () => "Botting",
  Yt = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bt() : e === "pt" ? Lt() : e === "ch" ? $t() : e === "de" ? Ut() : e === "es" ? Rt() : e === "fr" ? Gt() : e === "it" ? Ft() : e === "jp" ? Vt() : e === "pl" ? Jt() : e === "ru" ? Wt() : e === "uk" ? Kt() : Ht()
  },
  Zt = () => "Breaking the rules",
  Xt = () => "Quebrar as regras",
  Qt = () => "违反规则",
  en = () => "Regeln brechen",
  tn = () => "Romper las reglas",
  nn = () => "Violation des règles",
  rn = () => "Violazione delle regole",
  an = () => "ルール違反",
  sn = () => "Łamanie zasad",
  on = () => "Нарушение правил",
  un = () => "Порушення правил",
  cn = () => "Vi phạm luật",
  dn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zt() : e === "pt" ? Xt() : e === "ch" ? Qt() : e === "de" ? en() : e === "es" ? tn() : e === "fr" ? nn() : e === "it" ? rn() : e === "jp" ? an() : e === "pl" ? sn() : e === "ru" ? on() : e === "uk" ? un() : cn()
  },
  ln = () => "You cannot paint over event pixels",
  _n = () => "Você não pode pintar sobre pixels de eventos",
  fn = () => "你不能覆盖活动像素",
  mn = () => "Du kannst nicht über Event-Pixel malen",
  hn = () => "No puedes pintar sobre píxeles de evento",
  pn = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  gn = () => "Non puoi dipingere sopra i pixel dell'evento",
  wn = () => "イベント用のピクセルの上には塗れません。",
  yn = () => "Nie możesz malować po pikselach wydarzenia",
  bn = () => "Вы не можете рисовать по пикселям события",
  vn = () => "Ви не можете малювати поверх пікселів події",
  kn = () => "Bạn không thể tô lên pixel sự kiện",
  xn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ln() : e === "pt" ? _n() : e === "ch" ? fn() : e === "de" ? mn() : e === "es" ? hn() : e === "fr" ? pn() : e === "it" ? gn() : e === "jp" ? wn() : e === "pl" ? yn() : e === "ru" ? bn() : e === "uk" ? vn() : kn()
  },
  Sn = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Tn = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  En = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  An = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  jn = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Pn = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  In = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Nn = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  zn = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  qn = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  On = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Dn = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Cn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sn() : e === "pt" ? Tn() : e === "ch" ? En() : e === "de" ? An() : e === "es" ? jn() : e === "fr" ? Pn() : e === "it" ? In() : e === "jp" ? Nn() : e === "pl" ? zn() : e === "ru" ? qn() : e === "uk" ? On() : Dn()
  },
  Mn = () => "Couldn't complete the purchase. This item does not exist.",
  Bn = () => "Não foi possível concluir a compra. Este item não existe.",
  Ln = () => "无法完成购买。该物品不存在。",
  $n = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Un = () => "No se pudo completar la compra. Este ítem no existe.",
  Rn = () => "Achat impossible. Cet objet n’existe pas.",
  Gn = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Fn = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Vn = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Jn = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Wn = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Kn = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Hn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mn() : e === "pt" ? Bn() : e === "ch" ? Ln() : e === "de" ? $n() : e === "es" ? Un() : e === "fr" ? Rn() : e === "it" ? Gn() : e === "jp" ? Fn() : e === "pl" ? Vn() : e === "ru" ? Jn() : e === "uk" ? Wn() : Kn()
  },
  Yn = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Zn = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Xn = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Qn = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  er = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  tr = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  nr = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  rr = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  ar = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  sr = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  or = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  ir = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  ur = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yn() : e === "pt" ? Zn() : e === "ch" ? Xn() : e === "de" ? Qn() : e === "es" ? er() : e === "fr" ? tr() : e === "it" ? nr() : e === "jp" ? rr() : e === "pl" ? ar() : e === "ru" ? sr() : e === "uk" ? or() : ir()
  },
  cr = () => "Doxxing",
  dr = () => "Doxxing",
  lr = () => "人肉搜索",
  _r = () => "Doxxing",
  fr = () => "Doxxing",
  mr = () => "Doxxing",
  hr = () => "Doxxing",
  pr = () => "ドックス（Doxxing）",
  gr = () => "Doxxing",
  wr = () => "Докcинг",
  yr = () => "Докcинг",
  br = () => "Doxxing",
  vr = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cr() : e === "pt" ? dr() : e === "ch" ? lr() : e === "de" ? _r() : e === "es" ? fr() : e === "fr" ? mr() : e === "it" ? hr() : e === "jp" ? pr() : e === "pl" ? gr() : e === "ru" ? wr() : e === "uk" ? yr() : br()
  },
  kr = n => `Error while painting: ${n.err}`,
  xr = n => `Erro enquanto pinta: ${n.err}`,
  Sr = n => `绘制时出错：${n.err}`,
  Tr = n => `Fehler beim Malen: ${n.err}`,
  Er = n => `Error al pintar: ${n.err}`,
  Ar = n => `Erreur lors de la peinture : ${n.err}`,
  jr = n => `Errore durante la pittura: ${n.err}`,
  Pr = n => `ペイント中にエラーが発生しました: ${n.err}`,
  Ir = n => `Błąd podczas malowania: ${n.err}`,
  Nr = n => `Ошибка при рисовании: ${n.err}`,
  zr = n => `Помилка під час малювання: ${n.err}`,
  qr = n => `Lỗi khi tô: ${n.err}`,
  Or = (n, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kr(n) : e === "pt" ? xr(n) : e === "ch" ? Sr(n) : e === "de" ? Tr(n) : e === "es" ? Er(n) : e === "fr" ? Ar(n) : e === "it" ? jr(n) : e === "jp" ? Pr(n) : e === "pl" ? Ir(n) : e === "ru" ? Nr(n) : e === "uk" ? zr(n) : qr(n)
  },
  Dr = () => "Griefing",
  Cr = () => "Griefing",
  Mr = () => "破坏行为",
  Br = () => "Griefing",
  Lr = () => "Griefing",
  $r = () => "Griefing",
  Ur = () => "Griefing",
  Rr = () => "グリーフィング",
  Gr = () => "Griefing",
  Fr = () => "Гриферство",
  Vr = () => "Гріфінг",
  Jr = () => "Griefing",
  Wr = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Dr() : e === "pt" ? Cr() : e === "ch" ? Mr() : e === "de" ? Br() : e === "es" ? Lr() : e === "fr" ? $r() : e === "it" ? Ur() : e === "jp" ? Rr() : e === "pl" ? Gr() : e === "ru" ? Fr() : e === "uk" ? Vr() : Jr()
  },
  Kr = () => "Hate speech",
  Hr = () => "Discurso de Ódio",
  Yr = () => "仇恨言论",
  Zr = () => "Hassrede",
  Xr = () => "Discurso de odio",
  Qr = () => "Discours haineux",
  ea = () => "Discorso d'odio",
  ta = () => "ヘイトスピーチ",
  na = () => "Mowa nienawiści",
  ra = () => "Речь ненависти",
  aa = () => "Мова ворожнечі",
  sa = () => "Ngôn từ thù hằn",
  oa = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kr() : e === "pt" ? Hr() : e === "ch" ? Yr() : e === "de" ? Zr() : e === "es" ? Xr() : e === "fr" ? Qr() : e === "it" ? ea() : e === "jp" ? ta() : e === "pl" ? na() : e === "ru" ? ra() : e === "uk" ? aa() : sa()
  },
  ia = () => "Inappropriate content",
  ua = () => "Conteúdo inapropriado",
  ca = () => "不当内容",
  da = () => "Unangemessene Inhalte",
  la = () => "Contenido inapropiado",
  _a = () => "Contenu inapproprié",
  fa = () => "Contenuto inappropriato",
  ma = () => "不適切なコンテンツ",
  ha = () => "Nieodpowiednie treści",
  pa = () => "Неприемлемый контент",
  ga = () => "Неприйнятний вміст",
  wa = () => "Nội dung không phù hợp",
  ya = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ia() : e === "pt" ? ua() : e === "ch" ? ca() : e === "de" ? da() : e === "es" ? la() : e === "fr" ? _a() : e === "it" ? fa() : e === "jp" ? ma() : e === "pl" ? ha() : e === "ru" ? pa() : e === "uk" ? ga() : wa()
  },
  ba = () => "Invalid code",
  va = () => "Código inválido",
  ka = () => "验证码无效",
  xa = () => "Ungültiger Code",
  Sa = () => "Código inválido",
  Ta = () => "Code invalide",
  Ea = () => "Codice non valido",
  Aa = () => "無効なコードです。",
  ja = () => "Nieprawidłowy kod",
  Pa = () => "Неверный код",
  Ia = () => "Невірний код",
  Na = () => "Mã không hợp lệ",
  za = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ba() : e === "pt" ? va() : e === "ch" ? ka() : e === "de" ? xa() : e === "es" ? Sa() : e === "fr" ? Ta() : e === "it" ? Ea() : e === "jp" ? Aa() : e === "pl" ? ja() : e === "ru" ? Pa() : e === "uk" ? Ia() : Na()
  },
  qa = () => "Invalid discord.",
  Oa = () => "Discord inválido.",
  Da = () => "无效的 Discord。",
  Ca = () => "Ungültiger Discord.",
  Ma = () => "Discord inválido.",
  Ba = () => "Discord invalide.",
  La = () => "Discord non valido.",
  $a = () => "無効なDiscordアカウントです。",
  Ua = () => "Nieprawidłowy Discord.",
  Ra = () => "Неверный Discord.",
  Ga = () => "Некоректний Discord.",
  Fa = () => "Discord không hợp lệ.",
  Va = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qa() : e === "pt" ? Oa() : e === "ch" ? Da() : e === "de" ? Ca() : e === "es" ? Ma() : e === "fr" ? Ba() : e === "it" ? La() : e === "jp" ? $a() : e === "pl" ? Ua() : e === "ru" ? Ra() : e === "uk" ? Ga() : Fa()
  },
  Ja = () => "The name contains disallowed characters or words. Please choose a different name.",
  Wa = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Ka = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Ha = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Ya = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Za = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Xa = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Qa = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  es = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  ts = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  ns = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  rs = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  as = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ja() : e === "pt" ? Wa() : e === "ch" ? Ka() : e === "de" ? Ha() : e === "es" ? Ya() : e === "fr" ? Za() : e === "it" ? Xa() : e === "jp" ? Qa() : e === "pl" ? es() : e === "ru" ? ts() : e === "uk" ? ns() : rs()
  },
  ss = () => "Invalid phone number",
  os = () => "Número de telefone inválido",
  is = () => "无效的电话号码",
  us = () => "Ungültige Telefonnummer",
  cs = () => "Número de teléfono inválido",
  ds = () => "Numéro de téléphone invalide",
  ls = () => "Numero di telefono non valido",
  _s = () => "無効な電話番号です。",
  fs = () => "Nieprawidłowy numer telefonu",
  ms = () => "Неверный номер телефона",
  hs = () => "Некоректний номер телефону",
  ps = () => "Số điện thoại không hợp lệ",
  gs = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ss() : e === "pt" ? os() : e === "ch" ? is() : e === "de" ? us() : e === "es" ? cs() : e === "fr" ? ds() : e === "it" ? ls() : e === "jp" ? _s() : e === "pl" ? fs() : e === "ru" ? ms() : e === "uk" ? hs() : ps()
  },
  ws = () => "The new leader must be a member of the alliance",
  ys = () => "O novo líder deve ser um membro da aliança",
  bs = () => "新盟主必须是联盟成员",
  vs = () => "Der neue Anführer muss Mitglied der Allianz sein",
  ks = () => "El nuevo líder debe ser miembro de la alianza",
  xs = () => "Le nouveau chef doit être membre de l’alliance",
  Ss = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Ts = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Es = () => "Nowy lider musi być członkiem sojuszu",
  As = () => "Новый лидер должен быть участником альянса",
  js = () => "Новий лідер має бути учасником альянсу",
  Ps = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Is = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ws() : e === "pt" ? ys() : e === "ch" ? bs() : e === "de" ? vs() : e === "es" ? ks() : e === "fr" ? xs() : e === "it" ? Ss() : e === "jp" ? Ts() : e === "pl" ? Es() : e === "ru" ? As() : e === "uk" ? js() : Ps()
  },
  Ns = () => "Leaderboard is temporarily disabled",
  zs = () => "O ranking está temporariamente desativado",
  qs = () => "排行榜已暂时停用",
  Os = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Ds = () => "La clasificación está deshabilitada temporalmente",
  Cs = () => "Le classement est temporairement désactivé",
  Ms = () => "La classifica è temporaneamente disattivata",
  Bs = () => "ランキングは一時的に無効になっています。",
  Ls = () => "Ranking jest tymczasowo wyłączony",
  $s = () => "Таблица лидеров временно отключена",
  Us = () => "Таблиця лідерів тимчасово вимкнена",
  Rs = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  j = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ns() : e === "pt" ? zs() : e === "ch" ? qs() : e === "de" ? Os() : e === "es" ? Ds() : e === "fr" ? Cs() : e === "it" ? Ms() : e === "jp" ? Bs() : e === "pl" ? Ls() : e === "ru" ? $s() : e === "uk" ? Us() : Rs()
  },
  Gs = () => "Location name is too big (max. 128 characters)",
  Fs = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Vs = () => "位置名称过长（最大 128 个字符）",
  Js = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Ws = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Ks = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Hs = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Ys = () => "場所の名前が長すぎます（最大128文字）。",
  Zs = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Xs = () => "Название локации слишком длинное (макс. 128 символов)",
  Qs = () => "Назва локації надто довга (макс. 128 символів)",
  eo = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  to = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gs() : e === "pt" ? Fs() : e === "ch" ? Vs() : e === "de" ? Js() : e === "es" ? Ws() : e === "fr" ? Ks() : e === "it" ? Hs() : e === "jp" ? Ys() : e === "pl" ? Zs() : e === "ru" ? Xs() : e === "uk" ? Qs() : eo()
  },
  no = () => "Multi-accounting",
  ro = () => "Múltiplas contas",
  ao = () => "多账号",
  so = () => "Multi-Accounting",
  oo = () => "Multi-cuentas",
  io = () => "Multi-comptes",
  uo = () => "Multi-account",
  co = () => "複数アカウント使用",
  lo = () => "Multi-konta",
  _o = () => "Мультиаккаунт",
  fo = () => "Мультиакаунтинг",
  mo = () => "Nhiều tài khoản",
  ho = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? no() : e === "pt" ? ro() : e === "ch" ? ao() : e === "de" ? so() : e === "es" ? oo() : e === "fr" ? io() : e === "it" ? uo() : e === "jp" ? co() : e === "pl" ? lo() : e === "ru" ? _o() : e === "uk" ? fo() : mo()
  },
  po = n => `You can change your name again in ${n.days} days`,
  go = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  wo = n => `你可以在 ${n.days} 天后再次修改名称`,
  yo = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  bo = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  vo = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  ko = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  xo = n => `${n.days}日後に再び名前を変更できます。`,
  So = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  To = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Eo = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Ao = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  jo = (n, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? po(n) : e === "pt" ? go(n) : e === "ch" ? wo(n) : e === "de" ? yo(n) : e === "es" ? bo(n) : e === "fr" ? vo(n) : e === "it" ? ko(n) : e === "jp" ? xo(n) : e === "pl" ? So(n) : e === "ru" ? To(n) : e === "uk" ? Eo(n) : Ao(n)
  },
  Po = () => "No internet access or the servers are offline. Try again later.",
  Io = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  No = () => "没有网络连接或服务器已离线。请稍后重试。",
  zo = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  qo = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Oo = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Do = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Co = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Mo = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Bo = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Lo = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  $o = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Uo = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Po() : e === "pt" ? Io() : e === "ch" ? No() : e === "de" ? zo() : e === "es" ? qo() : e === "fr" ? Oo() : e === "it" ? Do() : e === "jp" ? Co() : e === "pl" ? Mo() : e === "ru" ? Bo() : e === "uk" ? Lo() : $o()
  },
  Ro = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Go = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Fo = () => "操作不被允许。你的收藏位置可能过多。",
  Vo = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Jo = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Wo = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Ko = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Ho = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Yo = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Zo = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Xo = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Qo = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  ei = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ro() : e === "pt" ? Go() : e === "ch" ? Fo() : e === "de" ? Vo() : e === "es" ? Jo() : e === "fr" ? Wo() : e === "it" ? Ko() : e === "jp" ? Ho() : e === "pl" ? Yo() : e === "ru" ? Zo() : e === "uk" ? Xo() : Qo()
  },
  ti = () => "You are trying to paint with a color you do not own",
  ni = () => "Você está tentando pintar com uma cor que não possui",
  ri = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  ai = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  si = () => "Estás intentando pintar con un color que no posees",
  oi = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  ii = () => "Stai cercando di dipingere con un colore che non possiedi",
  ui = () => "所持していない色で塗ろうとしています。",
  ci = () => "Próbujesz malować kolorem, którego nie posiadasz",
  di = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  li = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  _i = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  fi = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ti() : e === "pt" ? ni() : e === "ch" ? ri() : e === "de" ? ai() : e === "es" ? si() : e === "fr" ? oi() : e === "it" ? ii() : e === "jp" ? ui() : e === "pl" ? ci() : e === "ru" ? di() : e === "uk" ? li() : _i()
  },
  mi = () => "Phone already used",
  hi = () => "Telefone já usado",
  pi = () => "电话号码已被使用",
  gi = () => "Telefonnummer bereits verwendet",
  wi = () => "Teléfono ya utilizado",
  yi = () => "Téléphone déjà utilisé",
  bi = () => "Telefono già utilizzato",
  vi = () => "この電話番号は既に使用されています。",
  ki = () => "Numer telefonu jest już używany",
  xi = () => "Телефон уже используется",
  Si = () => "Номер телефону вже використовується",
  Ti = () => "Số điện thoại đã được sử dụng",
  Ei = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mi() : e === "pt" ? hi() : e === "ch" ? pi() : e === "de" ? gi() : e === "es" ? wi() : e === "fr" ? yi() : e === "it" ? bi() : e === "jp" ? vi() : e === "pl" ? ki() : e === "ru" ? xi() : e === "uk" ? Si() : Ti()
  },
  Ai = () => "Refresh your page to get the latest update",
  ji = () => "Recarregue sua página para obter as últimas atualizações",
  Pi = () => "刷新页面以获取最新更新",
  Ii = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Ni = () => "Actualiza la página para obtener la última versión",
  zi = () => "Actualisez la page pour obtenir les dernières mises à jour",
  qi = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Oi = () => "最新の状態にするにはページを再読み込みしてください。",
  Di = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Ci = () => "Обновите страницу, чтобы получить последние изменения",
  Mi = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Bi = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Li = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ai() : e === "pt" ? ji() : e === "ch" ? Pi() : e === "de" ? Ii() : e === "es" ? Ni() : e === "fr" ? zi() : e === "it" ? qi() : e === "jp" ? Oi() : e === "pl" ? Di() : e === "ru" ? Ci() : e === "uk" ? Mi() : Bi()
  },
  $i = () => "The typed username does not match your current username.",
  Ui = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Ri = () => "输入的用户名与当前用户名不匹配。",
  Gi = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Fi = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Vi = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Ji = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Wi = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Ki = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Hi = () => "Введённое имя пользователя не совпадает с текущим.",
  Yi = () => "Введене імʼя користувача не збігається з поточним.",
  Zi = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Xi = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $i() : e === "pt" ? Ui() : e === "ch" ? Ri() : e === "de" ? Gi() : e === "es" ? Fi() : e === "fr" ? Vi() : e === "it" ? Ji() : e === "jp" ? Wi() : e === "pl" ? Ki() : e === "ru" ? Hi() : e === "uk" ? Yi() : Zi()
  },
  Qi = () => "Unexpected server error. Try again later.",
  eu = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  tu = () => "服务器出现意外错误。请稍后再试。",
  nu = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  ru = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  au = () => "Erreur serveur inattendue. Réessayez plus tard.",
  su = () => "Errore imprevisto del server. Riprova più tardi.",
  ou = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  iu = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  uu = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  cu = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  du = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qi() : e === "pt" ? eu() : e === "ch" ? tu() : e === "de" ? nu() : e === "es" ? ru() : e === "fr" ? au() : e === "it" ? su() : e === "jp" ? ou() : e === "pl" ? iu() : e === "ru" ? uu() : e === "uk" ? cu() : du()
  },
  lu = () => "Failed to load WebAssembly module. Try to use another browser.",
  _u = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  fu = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  mu = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  hu = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  pu = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  gu = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  wu = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  yu = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  bu = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  vu = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  ku = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  xu = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lu() : e === "pt" ? _u() : e === "ch" ? fu() : e === "de" ? mu() : e === "es" ? hu() : e === "fr" ? pu() : e === "it" ? gu() : e === "jp" ? wu() : e === "pl" ? yu() : e === "ru" ? bu() : e === "uk" ? vu() : ku()
  },
  Su = () => "You already have this item. Please refresh the page.",
  Tu = () => "Você já possui este item. Atualize a página.",
  Eu = () => "你已经拥有此物品。请刷新页面。",
  Au = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  ju = () => "Ya tienes este ítem. Actualiza la página.",
  Pu = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Iu = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Nu = () => "このアイテムはすでに所持しています。ページを更新してください。",
  zu = () => "Masz już ten przedmiot. Odśwież stronę.",
  qu = () => "У вас уже есть этот предмет. Обновите страницу.",
  Ou = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Du = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Cu = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Su() : e === "pt" ? Tu() : e === "ch" ? Eu() : e === "de" ? Au() : e === "es" ? ju() : e === "fr" ? Pu() : e === "it" ? Iu() : e === "jp" ? Nu() : e === "pl" ? zu() : e === "ru" ? qu() : e === "uk" ? Ou() : Du()
  },
  Mu = () => "You are already in an alliance",
  Bu = () => "Você já está em uma aliança",
  Lu = () => "你已经在一个联盟中",
  $u = () => "Du bist bereits in einer Allianz",
  Uu = () => "Ya estás en una alianza",
  Ru = () => "Vous êtes déjà dans une alliance",
  Gu = () => "Sei già in un'alleanza",
  Fu = () => "すでにアライアンスに所属しています。",
  Vu = () => "Jesteś już w sojuszu",
  Ju = () => "Вы уже состоите в альянсе",
  Wu = () => "Ви вже перебуваєте в альянсі",
  Ku = () => "Bạn đã ở trong một liên minh",
  Hu = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mu() : e === "pt" ? Bu() : e === "ch" ? Lu() : e === "de" ? $u() : e === "es" ? Uu() : e === "fr" ? Ru() : e === "it" ? Gu() : e === "jp" ? Fu() : e === "pl" ? Vu() : e === "ru" ? Ju() : e === "uk" ? Wu() : Ku()
  },
  Yu = () => "You are not allowed to do this",
  Zu = () => "Você não tem permissão para fazer isso",
  Xu = () => "你无权执行此操作",
  Qu = () => "Du bist dazu nicht berechtigt",
  ec = () => "No tienes permiso para hacer esto",
  tc = () => "Vous n’êtes pas autorisé à faire cela",
  nc = () => "Non hai il permesso di farlo",
  rc = () => "この操作を行う権限がありません。",
  ac = () => "Nie masz uprawnień, aby to zrobić",
  sc = () => "У вас нет прав для этого действия",
  oc = () => "Ви не маєте права це робити",
  ic = () => "Bạn không có quyền làm việc này",
  P = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yu() : e === "pt" ? Zu() : e === "ch" ? Xu() : e === "de" ? Qu() : e === "es" ? ec() : e === "fr" ? tc() : e === "it" ? nc() : e === "jp" ? rc() : e === "pl" ? ac() : e === "ru" ? sc() : e === "uk" ? oc() : ic()
  },
  uc = () => "You do not have enough droplets to buy this item.",
  cc = () => "Você não tem gotas suficientes para comprar este item.",
  dc = () => "你的水滴不足，无法购买此物品。",
  lc = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  _c = () => "No tienes suficientes gotas para comprar este ítem.",
  fc = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  mc = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  hc = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  pc = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  gc = () => "У вас недостаточно droplets для покупки этого предмета.",
  wc = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  yc = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  bc = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? uc() : e === "pt" ? cc() : e === "ch" ? dc() : e === "de" ? lc() : e === "es" ? _c() : e === "fr" ? fc() : e === "it" ? mc() : e === "jp" ? hc() : e === "pl" ? pc() : e === "ru" ? gc() : e === "uk" ? wc() : yc()
  },
  vc = () => "You have to wait to resend a code",
  kc = () => "Você tem de esperar para reenviar um código",
  xc = () => "你需要等待一段时间才能重新发送验证码",
  Sc = () => "Du musst warten, bevor du einen Code erneut senden kannst",
  Tc = () => "Tienes que esperar para reenviar un código",
  Ec = () => "Vous devez attendre avant de renvoyer un code",
  Ac = () => "Devi aspettare per reinviare un codice",
  jc = () => "コードを再送信するまでしばらくお待ちください。",
  Pc = () => "Musisz poczekać, zanim wyślesz kod ponownie",
  Ic = () => "Вам нужно подождать, прежде чем отправить код ещё раз",
  Nc = () => "Перш ніж повторно надіслати код, потрібно почекати",
  zc = () => "Bạn phải chờ trước khi gửi lại mã",
  qc = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vc() : e === "pt" ? kc() : e === "ch" ? xc() : e === "de" ? Sc() : e === "es" ? Tc() : e === "fr" ? Ec() : e === "it" ? Ac() : e === "jp" ? jc() : e === "pl" ? Pc() : e === "ru" ? Ic() : e === "uk" ? Nc() : zc()
  },
  Oc = () => "You need to be logged in to paint",
  Dc = () => "Você precisa estar conectado para pintar",
  Cc = () => "你需要登录才能进行绘制",
  Mc = () => "Du musst eingeloggt sein, um zu malen",
  Bc = () => "Debes iniciar sesión para pintar",
  Lc = () => "Vous devez être connecté pour peindre",
  $c = () => "Devi avere effettuato l'accesso per dipingere",
  Uc = () => "ペイントするにはログインが必要です。",
  Rc = () => "Musisz być zalogowany, aby malować",
  Gc = () => "Чтобы рисовать, нужно войти в аккаунт",
  Fc = () => "Щоб малювати, необхідно увійти в акаунт",
  Vc = () => "Bạn cần đăng nhập để tô",
  Jc = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Oc() : e === "pt" ? Dc() : e === "ch" ? Cc() : e === "de" ? Mc() : e === "es" ? Bc() : e === "fr" ? Lc() : e === "it" ? $c() : e === "jp" ? Uc() : e === "pl" ? Rc() : e === "ru" ? Gc() : e === "uk" ? Fc() : Vc()
  },
  Wc = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Kc = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Hc = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Yc = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Zc = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Xc = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Qc = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  ed = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  td = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  nd = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  rd = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  ad = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  ce = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wc() : e === "pt" ? Kc() : e === "ch" ? Hc() : e === "de" ? Yc() : e === "es" ? Zc() : e === "fr" ? Xc() : e === "it" ? Qc() : e === "jp" ? ed() : e === "pl" ? td() : e === "ru" ? nd() : e === "uk" ? rd() : ad()
  },
  sd = n => `Your account has been suspended out until ${n.until}`,
  od = n => `A sua conta está suspensa até ${n.until}`,
  id = n => `你的账号已被暂停至 ${n.until}`,
  ud = n => `Dein Konto ist gesperrt bis ${n.until}`,
  cd = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  dd = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  ld = n => `Il tuo account è sospeso fino al ${n.until}`,
  _d = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  fd = n => `Twoje konto zostało zawieszone do ${n.until}`,
  md = n => `Ваш аккаунт заблокирован до ${n.until}`,
  hd = n => `Ваш акаунт призупинено до ${n.until}`,
  pd = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  gd = (n, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sd(n) : e === "pt" ? od(n) : e === "ch" ? id(n) : e === "de" ? ud(n) : e === "es" ? cd(n) : e === "fr" ? dd(n) : e === "it" ? ld(n) : e === "jp" ? _d(n) : e === "pl" ? fd(n) : e === "ru" ? md(n) : e === "uk" ? hd(n) : pd(n)
  },
  wd = () => "Exceeded maximum number of characters",
  yd = () => "Excedeu o número máximo de caracteres permitidos",
  bd = () => "超出最大字符数",
  vd = () => "Maximale Zeichenanzahl überschritten",
  kd = () => "Se excedió el número máximo de caracteres",
  xd = () => "Nombre maximal de caractères dépassé",
  Sd = () => "Numero massimo di caratteri superato",
  Td = () => "最大文字数を超過しました",
  Ed = () => "Przekroczono maksymalną liczbę znaków",
  Ad = () => "Превышено максимальное количество символов",
  jd = () => "Перевищено максимальну кількість символів",
  Pd = () => "Đã vượt quá số ký tự tối đa",
  Id = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wd() : e === "pt" ? yd() : e === "ch" ? bd() : e === "de" ? vd() : e === "es" ? kd() : e === "fr" ? xd() : e === "it" ? Sd() : e === "jp" ? Td() : e === "pl" ? Ed() : e === "ru" ? Ad() : e === "uk" ? jd() : Pd()
  };
let p;

function q(n) {
  const t = p.__externref_table_alloc();
  return p.__wbindgen_export_2.set(t, n), t
}

function N(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    const r = q(e);
    p.__wbindgen_exn_store(r)
  }
}
const he = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && he.decode();
let O = null;

function Z() {
  return (O === null || O.byteLength === 0) && (O = new Uint8Array(p.memory.buffer)), O
}

function D(n, t) {
  return n = n >>> 0, he.decode(Z().subarray(n, n + t))
}

function Y(n) {
  return n == null
}

function Nd(n) {
  p.set_user_id(n)
}
let ee = 0;
const X = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  zd = typeof X.encodeInto == "function" ? function(n, t) {
    return X.encodeInto(n, t)
  } : function(n, t) {
    const e = X.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function pe(n, t, e) {
  if (e === void 0) {
    const i = X.encode(n),
      l = t(i.length, 1) >>> 0;
    return Z().subarray(l, l + i.length).set(i), ee = i.length, l
  }
  let r = n.length,
    a = t(r, 1) >>> 0;
  const s = Z();
  let u = 0;
  for (; u < r; u++) {
    const i = n.charCodeAt(u);
    if (i > 127) break;
    s[a + u] = i
  }
  if (u !== r) {
    u !== 0 && (n = n.slice(u)), a = e(a, r, r = u + n.length * 3, 1) >>> 0;
    const i = Z().subarray(a + u, a + r),
      l = zd(n, i);
    u += l.written, a = e(a, r, u, 1) >>> 0
  }
  return ee = u, a
}

function qd(n) {
  const t = pe(n, p.__wbindgen_malloc, p.__wbindgen_realloc),
    e = ee;
  p.request_url(t, e)
}

function Od() {
  let n, t;
  try {
    const e = p.get_load_payload();
    return n = e[0], t = e[1], D(e[0], e[1])
  } finally {
    p.__wbindgen_free(n, t, 1)
  }
}

function Dd(n) {
  let t, e;
  try {
    const r = pe(n, p.__wbindgen_malloc, p.__wbindgen_realloc),
      a = ee,
      s = p.get_pawtected_endpoint_payload(r, a);
    return t = s[0], e = s[1], D(s[0], s[1])
  } finally {
    p.__wbindgen_free(t, e, 1)
  }
}
async function Cd(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t)
    } catch (r) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const e = await n.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(n, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: n
    } : e
  }
}

function Md() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    return t.buffer
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return N(function(t, e) {
      return t.call(e)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return N(function(t, e, r) {
      return t.call(e, r)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    return t.crypto
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return N(function(t, e) {
      t.getRandomValues(e)
    }, arguments)
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    return t.msCrypto
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    return new Uint8Array(t)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    return new Function(D(t, e))
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    return new Uint8Array(t, e >>> 0, r >>> 0)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    return new Uint8Array(t >>> 0)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    return t.node
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    return t.process
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return N(function(t, e) {
      t.randomFillSync(e)
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return N(function() {
      return module.require
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    t.set(e, r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return Y(t) ? 0 : q(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Y(t) ? 0 : q(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Y(t) ? 0 : q(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Y(t) ? 0 : q(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    return t.subarray(e >>> 0, r >>> 0)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    return t.versions
  }, n.wbg.__wbindgen_init_externref_table = function() {
    const t = p.__wbindgen_export_2,
      e = t.grow(4);
    t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1)
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof t == "function"
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = t;
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof t == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0
  }, n.wbg.__wbindgen_memory = function() {
    return p.memory
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    return D(t, e)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(D(t, e))
  }, n
}

function Bd(n, t) {
  return p = n.exports, ge.__wbindgen_wasm_module = t, O = null, p.__wbindgen_start(), p
}
async function ge(n) {
  if (p !== void 0) return p;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = Md();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await Cd(await n, t);
  return Bd(e, r)
}

function we(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function Ld(n, t) {
  for (const e of t)
    if (we(n, e)) return !0;
  return !1
}

function $d(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}
class Ud {
  constructor(t) {
    g(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      a = t % 8;
    if (r >= this.bytes.length) {
      const u = new Uint8Array(r + 1),
        i = u.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) u[l + i] = this.bytes[l];
      this.bytes = u
    }
    const s = this.bytes.length - 1 - r;
    e ? this.bytes[s] = this.bytes[s] | 1 << a : this.bytes[s] = this.bytes[s] & ~(1 << a)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      a = this.bytes.length;
    return e > a ? !1 : (this.bytes[a - 1 - e] & 1 << r) !== 0
  }
}

function hl(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const a = r.result;
      if (!a || typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(a.substring(a.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}
var L, $, U, R, G, F, V, J;
class Rd {
  constructor() {
    g(this, "channel", new BroadcastChannel("user-channel"));
    w(this, L, E());
    w(this, $, E(!0));
    w(this, U, E());
    w(this, R, E(Date.now()));
    w(this, G, z(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Ie.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    w(this, F, z(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    w(this, V, z(() => {
      var t;
      return new Ud($d(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    w(this, J, z(() => {
      var e;
      if (!((e = this.data) != null && e.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil);
      if (!(t.getTime() < Date.now())) return t
    }));
    this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return y(f(this, L))
  }
  set data(t) {
    v(f(this, L), t, !0)
  }
  get loading() {
    return y(f(this, $))
  }
  set loading(t) {
    v(f(this, $), t, !0)
  }
  get notificiationCount() {
    return y(f(this, U))
  }
  set notificiationCount(t) {
    v(f(this, U), t, !0)
  }
  get lastFetch() {
    return y(f(this, R))
  }
  set lastFetch(t) {
    v(f(this, R), t)
  }
  get charges() {
    return y(f(this, G))
  }
  set charges(t) {
    v(f(this, G), t)
  }
  get cooldown() {
    return y(f(this, F))
  }
  set cooldown(t) {
    v(f(this, F), t)
  }
  get flagsBitmap() {
    return y(f(this, V))
  }
  set flagsBitmap(t) {
    v(f(this, V), t)
  }
  get timeoutUntil() {
    return y(f(this, J))
  }
  set timeoutUntil(t) {
    v(f(this, J), t)
  }
  async refresh() {
    var t;
    try {
      return this.loading = !0, this.data = await Q.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificiationCount === void 0 && Q.getNotificationCount().then(e => {
        this.notificiationCount = e
      }), (t = this.data) != null && t.id && Ne("userId", {
        id: this.data.id
      }), !!this.data
    } catch (e) {
      return console.error(e), _e.warning(Uo(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await Q.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return we((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return Ld((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
L = new WeakMap, $ = new WeakMap, U = new WeakMap, R = new WeakMap, G = new WeakMap, F = new WeakMap, V = new WeakMap, J = new WeakMap;
const I = new Rd;

function ye(n) {
  return I.data ? I.data.experiments[n] ?? null : null
}

function pl(n) {
  var t, e;
  return ((e = (t = I.data) == null ? void 0 : t.experiments[n]) == null ? void 0 : e.enabled) ?? !0
}
const gl = {
    griefing: Wr(),
    "multi-accounting": ho(),
    "hate-speech": oa(),
    bot: Yt(),
    doxxing: vr(),
    "inappropriate-content": ya(),
    other: dn()
  },
  wl = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  de = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  Gd = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Fd = 4,
  Vd = 6e3,
  Jd = [{
    name: "Transparent",
    rgb: [0, 0, 0]
  }, {
    name: "Black",
    rgb: [0, 0, 0]
  }, {
    name: "Dark Gray",
    rgb: [60, 60, 60]
  }, {
    name: "Gray",
    rgb: [120, 120, 120]
  }, {
    name: "Light Gray",
    rgb: [210, 210, 210]
  }, {
    name: "White",
    rgb: [255, 255, 255]
  }, {
    name: "Deep Red",
    rgb: [96, 0, 24]
  }, {
    name: "Red",
    rgb: [237, 28, 36]
  }, {
    name: "Orange",
    rgb: [255, 127, 39]
  }, {
    name: "Gold",
    rgb: [246, 170, 9]
  }, {
    name: "Yellow",
    rgb: [249, 221, 59]
  }, {
    name: "Light Yellow",
    rgb: [255, 250, 188]
  }, {
    name: "Dark Green",
    rgb: [14, 185, 104]
  }, {
    name: "Green",
    rgb: [19, 230, 123]
  }, {
    name: "Light Green",
    rgb: [135, 255, 94]
  }, {
    name: "Dark Teal",
    rgb: [12, 129, 110]
  }, {
    name: "Teal",
    rgb: [16, 174, 166]
  }, {
    name: "Light Teal",
    rgb: [19, 225, 190]
  }, {
    name: "Dark Blue",
    rgb: [40, 80, 158]
  }, {
    name: "Blue",
    rgb: [64, 147, 228]
  }, {
    name: "Cyan",
    rgb: [96, 247, 242]
  }, {
    name: "Indigo",
    rgb: [107, 80, 246]
  }, {
    name: "Light Indigo",
    rgb: [153, 177, 251]
  }, {
    name: "Dark Purple",
    rgb: [120, 12, 153]
  }, {
    name: "Purple",
    rgb: [170, 56, 185]
  }, {
    name: "Light Purple",
    rgb: [224, 159, 249]
  }, {
    name: "Dark Pink",
    rgb: [203, 0, 122]
  }, {
    name: "Pink",
    rgb: [236, 31, 128]
  }, {
    name: "Light Pink",
    rgb: [243, 141, 169]
  }, {
    name: "Dark Brown",
    rgb: [104, 70, 52]
  }, {
    name: "Brown",
    rgb: [149, 104, 42]
  }, {
    name: "Beige",
    rgb: [248, 178, 119]
  }, {
    name: "Medium Gray",
    rgb: [170, 170, 170]
  }, {
    name: "Dark Red",
    rgb: [165, 14, 30]
  }, {
    name: "Light Red",
    rgb: [250, 128, 114]
  }, {
    name: "Dark Orange",
    rgb: [228, 92, 26]
  }, {
    name: "Light Tan",
    rgb: [214, 181, 148]
  }, {
    name: "Dark Goldenrod",
    rgb: [156, 132, 49]
  }, {
    name: "Goldenrod",
    rgb: [197, 173, 49]
  }, {
    name: "Light Goldenrod",
    rgb: [232, 212, 95]
  }, {
    name: "Dark Olive",
    rgb: [74, 107, 58]
  }, {
    name: "Olive",
    rgb: [90, 148, 74]
  }, {
    name: "Light Olive",
    rgb: [132, 197, 115]
  }, {
    name: "Dark Cyan",
    rgb: [15, 121, 159]
  }, {
    name: "Light Cyan",
    rgb: [187, 250, 242]
  }, {
    name: "Light Blue",
    rgb: [125, 199, 255]
  }, {
    name: "Dark Indigo",
    rgb: [77, 49, 184]
  }, {
    name: "Dark Slate Blue",
    rgb: [74, 66, 132]
  }, {
    name: "Slate Blue",
    rgb: [122, 113, 196]
  }, {
    name: "Light Slate Blue",
    rgb: [181, 174, 241]
  }, {
    name: "Light Brown",
    rgb: [219, 164, 99]
  }, {
    name: "Dark Beige",
    rgb: [209, 128, 81]
  }, {
    name: "Light Beige",
    rgb: [255, 197, 165]
  }, {
    name: "Dark Peach",
    rgb: [155, 82, 73]
  }, {
    name: "Peach",
    rgb: [209, 128, 120]
  }, {
    name: "Light Peach",
    rgb: [250, 182, 164]
  }, {
    name: "Dark Tan",
    rgb: [123, 99, 82]
  }, {
    name: "Tan",
    rgb: [156, 132, 107]
  }, {
    name: "Dark Slate",
    rgb: [51, 57, 65]
  }, {
    name: "Slate",
    rgb: [109, 117, 141]
  }, {
    name: "Light Slate",
    rgb: [179, 185, 209]
  }, {
    name: "Dark Stone",
    rgb: [109, 100, 63]
  }, {
    name: "Stone",
    rgb: [148, 140, 107]
  }, {
    name: "Light Stone",
    rgb: [205, 197, 158]
  }],
  Wd = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Kd = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Hd = {
    10: {
      name: "25,000 Droplets",
      price: 500,
      isDollar: !0,
      lookupKey: "droplets_5",
      items: [{
        name: "Droplet",
        amount: 25e3
      }]
    },
    20: {
      name: "78,750 Droplets",
      price: 1500,
      isDollar: !0,
      lookupKey: "droplets_15",
      items: [{
        name: "Droplet",
        amount: 76750
      }]
    },
    30: {
      name: "165,000 Droplets",
      price: 3e3,
      isDollar: !0,
      lookupKey: "droplets_30",
      items: [{
        name: "Droplet",
        amount: 165e3
      }]
    },
    40: {
      name: "287,500 Droplets",
      price: 5e3,
      isDollar: !0,
      lookupKey: "droplets_50",
      items: [{
        name: "Droplet",
        amount: 287500
      }]
    },
    50: {
      name: "450,000 Droplets",
      price: 7500,
      isDollar: !0,
      lookupKey: "droplets_75",
      items: [{
        name: "Droplet",
        amount: 45e4
      }]
    },
    60: {
      name: "625,000 Droplets",
      price: 1e4,
      isDollar: !0,
      lookupKey: "droplets_100",
      items: [{
        name: "Droplet",
        amount: 625e3
      }]
    },
    70: {
      name: "+5 Max. Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Max. Charge",
        amount: 5
      }]
    },
    80: {
      name: "+30 Paint Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Paint Charge",
        amount: 30
      }]
    },
    100: {
      name: "Unlock Color",
      price: 2e3,
      isDollar: !1,
      items: [{
        name: "Color",
        amount: 1
      }]
    },
    110: {
      name: "Flag",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Flag",
        amount: 1
      }]
    },
    120: {
      name: "Profile Picture",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Profile Picture",
        amount: 1
      }]
    }
  },
  Yd = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Zd = {
    dashboard: {
      summary: {
        counters: {
          tickets: "staff.dashboard.summary.counters.tickets",
          reports: "staff.dashboard.summary.counters.reports"
        },
        events: {
          status: "staff.dashboard.summary.events.status",
          start: "staff.dashboard.summary.events.start",
          stop: "staff.dashboard.summary.events.stop",
          anchors: "staff.dashboard.summary.events.anchors"
        },
        users: {
          ban: "staff.dashboard.summary.users.ban",
          timeout: "staff.dashboard.summary.users.timeout",
          unban: "staff.dashboard.summary.users.unban",
          incrementDroplets: "staff.dashboard.summary.users.increment_droplets"
        }
      },
      team: {
        tickets: "staff.dashboard.team.tickets",
        reports: "staff.dashboard.team.reports"
      },
      users: {
        info: "staff.dashboard.users.info",
        notesGet: "staff.dashboard.users.notes_get",
        notesSet: "staff.dashboard.users.notes_set",
        purchases: "staff.dashboard.users.purchases",
        ticketsHistory: "staff.dashboard.users.tickets_history",
        ticketsStats: "staff.dashboard.users.tickets_stats",
        timeout: "staff.dashboard.users.timeout",
        removeTimeout: "staff.dashboard.users.remove_timeout",
        ban: "staff.dashboard.users.ban",
        removeBan: "staff.dashboard.users.remove_ban",
        personalInformation: "staff.dashboard.users.personal_information",
        disconnect: "staff.dashboard.users.disconnect",
        setDroplets: "staff.dashboard.users.set_droplets"
      },
      permissions: {
        get: "staff.dashboard.permissions.get",
        set: "staff.dashboard.permissions.set"
      },
      alliances: {
        search: "staff.dashboard.alliances.search",
        details: "staff.dashboard.alliances.details",
        members: "staff.dashboard.alliances.members",
        rename: "staff.dashboard.alliances.rename",
        leader: "staff.dashboard.alliances.leader",
        banAll: "staff.dashboard.alliances.ban_all",
        role: "staff.dashboard.alliances.role",
        removeMember: "staff.dashboard.alliances.remove_member"
      },
      auditLogs: {
        see: "staff.dashboard.audit_logs.see"
      },
      banWaves: {
        see: "staff.dashboard.ban_waves.see",
        execute: "staff.dashboard.ban_waves.execute"
      }
    },
    tickets: {
      assign: "staff.tickets.assign",
      closedToday: "staff.tickets.closed_today",
      openCount: "staff.tickets.open_count",
      translate: "staff.tickets.translate",
      setStatus: "staff.tickets.set_status"
    },
    appeals: {
      assign: "staff.appeals.assign",
      openCount: "staff.appeals.open_count",
      ticketsHistory: "staff.appeals.tickets_history",
      notes_get: "staff.appeals.notes_get",
      notes_set: "staff.appeals.notes_set",
      translate: "staff.appeals.translate",
      solve: "staff.appeals.solve"
    },
    tools: {
      selectArea: {
        timeout: "staff.tools.select_area.timeout",
        ban: "staff.tools.select_area.ban",
        clear: "staff.tools.select_area.clear",
        info: "staff.tools.select_area.info"
      },
      selectPixel: {
        timeout: "staff.tools.select_pixel.timeout",
        ban: "staff.tools.select_pixel.ban",
        seeRole: "staff.tools.select_pixel.see_role",
        seePunishment: "staff.tools.select_pixel.see_punishment",
        archive: "staff.tools.select_pixel.archive"
      },
      autoPainter: "staff.tools.auto_painter.paint"
    },
    ui: {
      themeDarkMode: "staff.ui.theme.dark_mode",
      tooglePixelArt: "staff.ui.toggle_pixel_art"
    }
  },
  K = {
    seasons: Gd,
    regionSize: Fd,
    refreshIntervalMs: Vd,
    colors: Jd,
    errors: Wd,
    items: Kd,
    products: Hd,
    countries: Yd,
    permissions: Zd
  },
  ne = K,
  be = K.seasons.length - 1,
  yl = K.seasons[be].zoom,
  bl = K.seasons[be].tileSize,
  vl = K.permissions;

function kl(n) {
  return ne.countries[n - 1]
}
class d extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Xd(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    let s = e[a];
    s ? s.push(r) : e[a] = [r]
  }
  return e
}

function xl(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    e[a] = r
  }
  return e
}
var W;
class Qd {
  constructor(t) {
    w(this, W, E(!0));
    this.url = t
  }
  get online() {
    return y(f(this, W))
  }
  set online(t) {
    v(f(this, W), t, !0)
  }
  async paint(t, e) {
    return this.sendPaintRequests(t, e, (r, a, s) => `/s${r}/pixel/${a}/${s}`)
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, e, (r, a, s) => `/staff/tools/select-area/clear/s${r}/pixel/${a}/${s}`)
  }
  async sendPaintRequests(t, e, r) {
    const a = Xd(t, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      s = ye("2025-09_pawtect");
    if (!s) throw new Error("paint request while pawtect experiment not found");
    const i = (await Promise.all(Object.values(a).map(l => {
      const [c, h] = l[0].tile, m = l[0].season, T = {
        colors: l.map(x => x.colorIdx),
        coords: l.flatMap(x => x.pixel),
        fp: e
      }, A = JSON.stringify(T), k = r(m, c, h);
      return this.request(k, {
        method: "POST",
        body: A,
        headers: {
          "x-pawtect-token": s.variant !== "disabled" ? al(A) : "",
          "x-pawtect-variant": s.variant
        },
        credentials: "include"
      })
    }))).filter(l => l.status !== 200);
    if (i.length) {
      const l = i[0];
      if (l.status === 401) throw new Error(Jc());
      if (l.status === 403) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(ur());
        const c = await l.json();
        if ((c == null ? void 0 : c.error) === "timeout") {
          const h = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(gd({
            until: h.toLocaleString()
          }))
        }
        if ((c == null ? void 0 : c.error) === "refresh") throw new Error(Li());
        if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(fi());
        if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(xn());
        I.refresh()
      } else throw new Error(o())
    }
  }
  async adminAutoPainterPaint(t, e) {
    const r = el(t),
      a = await tl(r),
      s = new FormData;
    s.append("fingerprint", e), s.append("season", r.season.toString()), s.append("px0", r.offsetX.toString()), s.append("py0", r.offsetY.toString()), s.append("width", r.width.toString()), s.append("height", r.height.toString()), s.append("pixels", t.length.toString()), s.append("bitmap", a, "auto-painter.png");
    const u = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: s,
      credentials: "include"
    });
    if (u.status === 403) throw new Error("Auto painter is restricted to administrators.");
    if (u.status !== 200) throw new Error(o());
    return u.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [a, s],
    role: u
  }) {
    const i = new URLSearchParams;
    i.set("x", String(a)), i.set("y", String(s));
    const l = await this.request(`/s${t}/pixel/${e}/${r}?${i.toString()}`, {
      credentials: "include"
    });
    if (l.status !== 200) {
      const c = await l.text();
      throw new Error(Or({
        err: c
      }))
    }
    return l.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [a, s],
    p1: [u, i]
  }) {
    const l = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${a}&y0=${s}&x1=${u}&y1=${i}`, {
      credentials: "include"
    });
    if (l.status !== 200) {
      const m = await l.text();
      throw console.error("Error while fetching pixel area info", m), new Error(o())
    }
    const c = await l.arrayBuffer(),
      h = new DataView(c);
    return {
      paintedBy: Array.from({
        length: c.byteLength / 4
      }, (m, T) => h.getUint32(T * 4, !0))
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === 200) return await t.json()
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new Error(await t.text());
    return await t.json()
  }
  async refreshPaymentSession(t) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(t)}`, {
      method: "POST",
      credentials: "include"
    })).status === 200
  }
  async getOtpCooldown() {
    const t = await this.request("/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== 200) throw new Error(o());
    return await t.json()
  }
  async sendOtp(t) {
    const e = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: t
      })
    });
    if (e.status === 400) throw new Error(gs());
    if (e.status === 403) throw new Error(Ei());
    if (e.status === 429) throw new Error(qc());
    if (e.status !== 200) throw new Error(o());
    return await e.json()
  }
  async verifyOtp(t) {
    const e = await this.request("/otp/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: t
      })
    });
    if (e.status === 400) throw new Error(za());
    if (e.status !== 200) throw new Error(o());
    return await e.json()
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === 400) {
      const r = await e.json(),
        a = (r == null ? void 0 : r.error) ?? "";
      if (a === "invalid_name") throw new Error(as());
      if (a === "invalid_discord") throw new Error(Va());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const s = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(jo({
          days: s
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== 200) throw new Error(o())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === 400) throw new Error(Xi());
    if (e.status !== 200) throw new Error(o())
  }
  async favoriteLocation(t) {
    const e = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: t[0],
        longitude: t[1]
      }),
      credentials: "include"
    });
    if (e.status === 403) throw new Error(ei());
    if (e.status !== 200) throw new Error(o())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateFavoriteLocation(t, e) {
    const r = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: t,
        name: e
      }),
      credentials: "include"
    });
    if (r.status === 400) throw new Error(to());
    if (r.status !== 200) throw new Error(o())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== 200) throw new Error(j());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== 200) throw new Error(j());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === 200) return r.json();
    throw new Error(j())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === 200) return r.json();
    throw new Error(j())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === 200) return r.json();
    throw new Error(j())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw new Error(j())
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== 200) throw new Error(o());
    return e.json()
  }
  async purchase(t) {
    const e = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: t
      })
    });
    if (e.status !== 200) throw e.status === 404 ? new Error(Hn()) : e.status === 403 ? new Error(bc()) : e.status === 409 ? new Error(Cu()) : new Error(o())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    if (t.status === 404) return;
    throw new Error(o())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === 200) return e.json();
    if (e.status === 400) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(St()) : r.error === "name_taken" ? new Error(lt()) : r.error == "empty_name" ? new Error(Mt()) : new Error(o())
    } else throw e.status === 403 ? new Error(Hu()) : new Error(o())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== 200) throw e.status === 403 ? new Error(P()) : e.status === 400 ? new Error(Id()) : new Error(o())
  }
  async updateAllianceHeadquarters(t, e) {
    const r = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: t,
        longitude: e
      })
    });
    if (r.status !== 200) throw r.status === 403 ? new Error(P()) : new Error(o())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(P()) : new Error(j())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(P()) : new Error(o())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case 200:
        return "success";
      case 208:
        return "in-another-alliance";
      case 401:
        return "not-logged-in";
      case 403:
        return "banned";
      case 400:
      case 404:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw new Error(o())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw new Error(o())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === 404) return;
    if (e.status !== 200) throw new d(o(), e.status);
    const r = await e.json();
    return {
      id: Number(r.id),
      name: String(r.name),
      pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
      }),
      r = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== 200) throw new d(o(), r.status);
    const a = await r.json();
    return (Array.isArray(a) ? a : []).map(s => ({
      id: Number(s.id),
      name: String(s.name ?? ""),
      pixelsPainted: Number((s == null ? void 0 : s.pixels_painted) ?? 0)
    }))
  }
  async searchAlliances(t) {
    return this.searchAlliance(t)
  }
  async getAllianceFull(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === 404) return null;
    if (e.status !== 200) throw new d(o(), e.status);
    const r = await e.json(),
      a = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
    return {
      id: Number(r == null ? void 0 : r.id),
      name: String((r == null ? void 0 : r.name) ?? ""),
      description: (r == null ? void 0 : r.description) ?? null,
      ownerId: Number((r == null ? void 0 : r.ownerId) ?? (r == null ? void 0 : r.created_by)),
      ownerName: (r == null ? void 0 : r.ownerName) ?? null,
      hqName: (r == null ? void 0 : r.hqName) ?? null,
      hqLatitude: (r == null ? void 0 : r.hqLatitude) ?? (r == null ? void 0 : r.hq_latitude) ?? null,
      hqLongitude: (r == null ? void 0 : r.hqLongitude) ?? (r == null ? void 0 : r.hq_longitude) ?? null,
      pixelsPainted: Number((r == null ? void 0 : r.pixelsPainted) ?? (r == null ? void 0 : r.pixels_painted) ?? 0),
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? a.length),
      members: a.map(s => ({
        id: Number(s == null ? void 0 : s.id),
        name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role: (s == null ? void 0 : s.alliance_role) === "admin" || (s == null ? void 0 : s.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(t, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      a = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === 404) return {
      members: [],
      total: 0
    };
    if (a.status !== 200) throw new d(o(), a.status);
    const s = await a.json(),
      u = Array.isArray(s == null ? void 0 : s.members) ? s.members : [];
    return {
      members: u.map(i => ({
        id: Number(i == null ? void 0 : i.id),
        name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member"
      })),
      total: Number((s == null ? void 0 : s.total) ?? u.length)
    }
  }
  async renameAlliance(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (r.status === 400) {
      const a = await r.json().catch(() => ({}));
      throw new Error((a == null ? void 0 : a.error) ?? o())
    } else if (r.status !== 200) throw new d(o(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === 400) {
      const a = await r.json();
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Is()) : new Error(o())
    } else if (r.status !== 200) throw new d(o(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (a.status !== 200) throw new d(o(), a.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (a.status !== 200) throw new d(o(), a.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== 200) throw new d(o(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw e.status === 403 ? new Error(P()) : new Error(o())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw e.status === 403 ? new Error(P()) : new Error(o())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== 200) throw new Error(o());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== 200) throw new Error(o())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw e.status === 403 ? new Error(P()) : new Error(o())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(t) {
    const e = await this.request(`/payment/abacatepay/create/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === 400) {
      const a = await e.json();
      throw new Error(a == null ? void 0 : a.error)
    } else {
      if (e.status === 451) throw new Error(Xe());
      if (e.status !== 200) throw new Error(o())
    }
    return await e.json()
  }
  async refreshPixPayment(t) {
    const e = await this.request(`/payment/abacatepay/refresh/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === 400) {
      const r = await e.json();
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== 200) throw new Error("Unexpected error on the server. Try again later");
    return e.json()
  }
  async getPixStatus(t) {
    const e = await this.request(`/payment/abacatepay/status/pix/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new Error("Erro inesperado. Tente atualizar a página.");
    return e.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((a, s) => de[a.reason] - de[s.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const {
      tickets: e
    } = await t.json();
    return e
  }
  async assignNewTickets() {
    const t = await this.request("/staff/tickets/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, a) {
    const s = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: a
      })
    });
    if (s.status !== 200 && s.status !== 400) throw new d(o(), s.status)
  }
  async request(t, e) {
    let r;
    const a = me();
    if (a) {
      const s = new Headers(e == null ? void 0 : e.headers);
      s.set("x-alien-override", a.token), e = {
        ...e ?? {},
        headers: s
      }
    }
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0
    } catch (s) {
      throw console.error("Fetch error:", s), this.online = !1, new Error(Cn(), {
        cause: s
      })
    }
    if (r.status === 429) throw new Error(ce());
    if (r.status === 503 || r.status === 408) throw new Error(ce());
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new d(o(), r.status);
    return (await r.json()).items.map(s => ({
      ...s,
      suspensionRate: (s.ban + s.timeout) / s.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new d(o(), r.status);
    return (await r.json()).items.map(s => ({
      ...s,
      suspensionRate: (s.ban + s.timeout) / s.total
    }))
  }
  async getMultipleUsersInfoById(t) {
    const e = await this.request("/staff/tools/select-area/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t
      })
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 404) {
      if (e.status !== 200) throw new d(o(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (a.status !== 200) throw new d(o(), a.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== 200) throw new d(o(), a.status);
    return a.json()
  }
  async addUserNote(t, e, r) {
    const a = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      s = await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (s.status !== 200) throw new d(o(), s.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async setUserPermissions(t, e) {
    const r = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        permissions: Array.from(e)
      })
    });
    if (r.status !== 200) throw new d(o(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.permissions) ? a.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(s => {
      const u = s.is_dollar ?? s.isDollar ?? s.currency ?? s.Currency ?? 0;
      let i;
      if (typeof u == "string") {
        const c = u.toLowerCase();
        i = c === "usd" || c === "dollar" || c === "true"
      } else typeof u == "number" ? i = u !== 0 : i = !!u;
      const l = typeof s.createdAt == "string" ? s.createdAt : s.CreatedAt ? new Date(s.CreatedAt).toISOString() : "";
      return {
        product_name: String(s.productName ?? s.product_name ?? ""),
        amount: Number(s.amount ?? 0),
        price: Number(s.price ?? 0),
        is_dollar: i,
        created_at: l,
        product_variant: Number(s.product_variant ?? s.productVariant ?? 0)
      }
    })
  }
  async postSetUserDroplets(t, e) {
    const r = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        droplets: e
      })
    });
    if (r.status !== 200) throw new d(o(), r.status)
  }
  async getUserTickets(t, e) {
    const {
      userId: r,
      kind: a,
      page: s = 0,
      pageSize: u = 20
    } = t, i = new URLSearchParams({
      userId: String(r),
      kind: a,
      page: String(s),
      pageSize: String(u)
    }), l = e == "tickets" ? `/staff/dashboard/users/tickets?${i.toString()}` : `/staff/appeals/tickets?${i.toString()}`, c = await this.request(l, {
      method: "GET",
      credentials: "include"
    });
    if (c.status !== 200) throw new d(o(), c.status);
    const h = await c.json(),
      m = Array.isArray(h == null ? void 0 : h.tickets) ? h.tickets : [];
    return m.sort((T, A) => new Date(A.createdAt).getTime() - new Date(T.createdAt).getTime()), m
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (a.status !== 200) throw new d(o(), a.status);
    const s = await a.json();
    return s == null ? void 0 : s.translation
  }
  mapTicketsToReportRows(t, e) {
    var a, s, u, i, l;
    const r = [];
    for (const c of t) {
      const h = c.status ?? "open";
      if (e === "received") {
        for (const m of c.reports) r.push({
          id: String(m.id),
          ticketId: String(c.id),
          createdAt: m.createdAt ?? c.createdAt,
          byUser: {
            id: Number(m.reportedBy),
            name: String(m.reportedByName ?? m.reportedBy),
            picture: m.reportedByPicture ?? null
          },
          reason: String(m.reason),
          status: h
        });
        continue
      }
      if (e === "sent") {
        for (const m of c.reports) r.push({
          id: String(m.id),
          ticketId: String(c.id),
          createdAt: m.createdAt ?? c.createdAt,
          toUser: {
            id: Number(c.reportedUser.id),
            name: String(c.reportedUser.name),
            picture: c.reportedUser.picture ?? null
          },
          reason: String(m.reason),
          status: h
        });
        continue
      }
      r.push({
        id: String(c.id),
        ticketId: String(c.id),
        createdAt: c.createdAt,
        handledBy: c.status && c.status !== "open" ? {
          id: ((a = c.handledBy) == null ? void 0 : a.id) ?? 0,
          name: ((s = c.handledBy) == null ? void 0 : s.name) ?? "Moderator",
          picture: ((u = c.handledBy) == null ? void 0 : u.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((l = (i = c.reports) == null ? void 0 : i[0]) == null ? void 0 : l.reason) ?? "other"),
        status: h
      })
    }
    return r.sort((c, h) => new Date(h.createdAt).getTime() - new Date(c.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== 200) throw new d(o(), r.status);
    return r.json()
  }
  async postPawtectLoad() {
    const t = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: Od(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (t.status !== 204) throw new d(o(), t.status)
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 204) throw new d(o(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status)
  }
  async banUsers(t, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (a.status !== 200) throw new d(o(), a.status)
  }
  async timeoutUsers(t, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (a.status !== 200) throw new d(o(), a.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (a.status !== 200) throw new d(o(), a.status)
  }
  async postUnbanUsers(t, e) {
    const r = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== 200) throw new d(o(), r.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.startIso && e.set("start", t.startIso), t.endIso && e.set("end", t.endIso), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new d(o(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
    let a;
    switch (e) {
      case "dashboard":
        a = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        a = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        a = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== 200) throw new Error(o())
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== 200) throw new d(o(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = await this.request("/report/appeal", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        message: t
      })
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return await e.json()
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async postResponseAppeal(t, e, r) {
    const a = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e,
        appealType: r
      })
    });
    if (a.status !== 200) throw new d(o(), a.status);
    return await a.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const r = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      a = await this.request(r, {
        credentials: "include"
      });
    if (a.status !== 200) throw new d(o(), a.status);
    return a.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/see", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async postAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/execute", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async claimEventPixel({
    season: t,
    tile: [e, r],
    pixel: [a, s]
  }) {
    const u = await this.request(`/s${t}/event/pixel/claim`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        event: "halloween",
        tx: e,
        ty: r,
        px: a,
        py: s
      })
    });
    if (u.status !== 200) throw new d(o(), u.status)
  }
  async getEventStatus() {
    const t = await this.request("/staff/dashboard/summary/events/status", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async postEventStart(t, e, r, a) {
    const s = await this.request("/staff/dashboard/summary/events/start", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        eventName: t,
        quantity: e,
        startEventDate: r,
        endEventDate: a
      })
    });
    if (s.status !== 200) throw new d(o(), s.status);
    return s.json()
  }
  async postEventStop(t) {
    const e = await this.request("/staff/dashboard/summary/events/stop", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        event: t
      })
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getEventAnchors(t) {
    const e = await this.request(`/staff/dashboard/summary/events/anchors?event=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new Error("Falha ao buscar anchors do evento");
    return e.json()
  }
}
W = new WeakMap;

function el(n) {
  var T, A;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const k of n)
    if (k.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (T = ne.seasons) == null ? void 0 : T[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    s = Number.POSITIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY;
  const l = n.map(k => {
      const x = Math.round(k.tile[0] * r + k.pixel[0]),
        S = Math.round(k.tile[1] * r + k.pixel[1]);
      return x < a && (a = x), S < s && (s = S), x > u && (u = x), S > i && (i = S), {
        x,
        y: S,
        colorIdx: k.colorIdx
      }
    }),
    c = u - a + 1,
    h = i - s + 1;
  if (!Number.isFinite(c) || !Number.isFinite(h) || c <= 0 || h <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const m = new Uint8ClampedArray(c * h * 4);
  for (const {
      x: k,
      y: x,
      colorIdx: S
    }
    of l) {
    const ae = (A = ne.colors) == null ? void 0 : A[S];
    if (!ae) throw new Error(`Unknown palette color index: ${S}`);
    const xe = k - a,
      H = ((x - s) * c + xe) * 4,
      [Se, Te, Ee] = ae.rgb;
    m[H] = Se, m[H + 1] = Te, m[H + 2] = Ee, m[H + 3] = S === 0 ? 0 : 255
  }
  return {
    data: m,
    width: c,
    height: h,
    offsetX: a,
    offsetY: s,
    season: t
  }
}
async function tl(n) {
  const t = nl(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((a, s) => {
    t.toBlob(u => {
      if (!u) {
        s(new Error("Failed to encode auto painter bitmap."));
        return
      }
      a(u)
    }, "image/png")
  })
}

function nl(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let Q = new Qd(le),
  re = !1,
  ve;

function Sl() {
  const n = ye("2025-09_pawtect");
  if (!n) throw new Error("pawtect experiment not found on load");
  n.variant !== "disabled" && (re || I.data && ge(Le).then(rl).catch(t => {
    ve = t, ze(t)
  }))
}

function rl() {
  Nd(I.data.id), Q.postPawtectLoad();
  const n = fetch;
  Object.assign(window, {
    fetch: ke((t, e) => {
      let r = null;
      return t instanceof Request ? r = t.url : r = t, r.startsWith("/") || qd(r), n.call(window, t, e)
    })
  }), re = !0
}

function al(n) {
  if (ve) throw new Error(xu());
  if (!re) throw new Error("Try again in a few seconds");
  return Dd(n)
}

function ke(n) {
  return n.bind().bind()
}

function Tl(n, t, e) {
  const r = {
    [n.name](...a) {
      return e(...a), t(...a)
    }
  } [n.name];
  return ke(r)
}
export {
  bl as A, be as C, yl as P, vl as S, ne as a, Q as b, o as c, wl as d, vr as e, Yt as f, Wr as g, oa as h, ya as i, b as j, ll as k, _l as l, ml as m, Sl as n, Tl as o, hl as p, kl as q, Xi as r, gl as s, _e as t, I as u, pl as v, fl as w, ho as x, gd as y, xl as z
};