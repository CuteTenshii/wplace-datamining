var Ue = Object.defineProperty;
var ie = r => {
  throw TypeError(r)
};
var Le = (r, t, e) => t in r ? Ue(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var w = (r, t, e) => Le(r, typeof t != "symbol" ? t + "" : t, e),
  Be = (r, t, e) => t.has(r) || ie("Cannot " + e);
var m = (r, t, e) => (Be(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  y = (r, t, e) => t.has(r) ? ie("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  g as f
} from "./sPnE0boO.js";
import {
  e as A,
  g as ce,
  i as b,
  h as O,
  I as ue,
  u as U
} from "./C3nPqK5x.js";
import {
  P as we,
  g as je
} from "./euxv8vCT.js";
import {
  s as Me,
  c as qe
} from "./CGHnF7bM.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "bb7f5420-adfb-499a-86a4-4f491491790f", r._sentryDebugIdIdentifier = "sentry-dbid-bb7f5420-adfb-499a-86a4-4f491491790f")
  } catch {}
})();

function hl(...r) {
  return r.filter(Boolean).join(" ")
}
const Ke = typeof document < "u";
let _e = 0;
var M, q, K;
class ze {
  constructor() {
    y(this, M, A(ce([])));
    y(this, q, A(ce([])));
    y(this, K, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      Ke && this.toasts.unshift(t)
    });
    w(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: s
    }) => {
      const o = this.toasts.findIndex(c => c.id === t),
        u = this.toasts[o];
      this.toasts[o] = {
        ...u,
        ...e,
        id: t,
        title: s,
        type: n,
        updated: !0
      }
    });
    w(this, "create", t => {
      var c;
      const {
        message: e,
        ...n
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : _e++, o = t.dismissable === void 0 ? !0 : t.dismissable, u = t.type === void 0 ? "default" : t.type;
      return ue(() => {
        this.toasts.find(l => l.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: u,
          message: e,
          dismissable: o
        }) : this.addToast({
          ...n,
          id: s,
          title: e,
          dismissable: o,
          type: u
        })
      }), s
    });
    w(this, "dismiss", t => (ue(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(n => ({
          ...n,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(n => n.id === t);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), t));
    w(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = m(this, K).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    w(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    w(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    w(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    w(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    w(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    w(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    w(this, "promise", (t, e) => {
      if (!e) return;
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const s = t instanceof Promise ? t : t();
      let o = n !== void 0;
      return s.then(u => {
        if (typeof u == "object" && u && "ok" in u && typeof u.ok == "boolean" && !u.ok) {
          o = !1;
          const c = Fe(u);
          this.create({
            id: n,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          o = !1;
          const c = typeof e.success == "function" ? e.success(u) : e.success;
          this.create({
            id: n,
            type: "success",
            message: c
          })
        }
      }).catch(u => {
        if (e.error !== void 0) {
          o = !1;
          const c = typeof e.error == "function" ? e.error(u) : e.error;
          this.create({
            id: n,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var u;
        o && (this.dismiss(n), n = void 0), (u = e.finally) == null || u.call(e)
      }), n
    });
    w(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || _e++;
      return this.create({
        component: t,
        id: n,
        ...e
      }), n
    });
    w(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    w(this, "setHeight", t => {
      const e = m(this, K).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    w(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return b(m(this, M))
  }
  set toasts(t) {
    O(m(this, M), t, !0)
  }
  get heights() {
    return b(m(this, q))
  }
  set heights(t) {
    O(m(this, q), t, !0)
  }
}
M = new WeakMap, q = new WeakMap, K = new WeakMap;

function Fe(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const E = new ze;

function Ge(r, t) {
  return E.create({
    message: r,
    ...t
  })
}
var re;
class pl {
  constructor() {
    y(this, re, U(() => E.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return b(m(this, re))
  }
}
re = new WeakMap;
const $e = Ge,
  ye = Object.assign($e, {
    success: E.success,
    info: E.info,
    warning: E.warning,
    error: E.error,
    custom: E.custom,
    message: E.message,
    promise: E.promise,
    dismiss: E.dismiss,
    loading: E.loading,
    getActiveToasts: () => E.toasts.filter(r => !r.dismiss)
  });
let be = A(void 0);
const Ee = () => b(be),
  gl = r => {
    const t = new URL(r, we),
      e = Ee();
    return e && t.searchParams.set("override", e.token), t.toString()
  };

function wl() {
  try {
    Ce()
  } catch (r) {
    console.error("failed to load override", r)
  }
}

function Ce() {
  const t = new URL(location.href).searchParams.get("override");
  if (!t) return;
  const e = t.split(".");
  if (e.length !== 2) throw new Error("override token wrong amount of parts");
  const [n] = e, s = JSON.parse(atob(n));
  if (Date.now() / 1e3 > s.expiresAt) throw new Error("override token expired");
  ye.info(`Currently using the ${s.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 6e4
  }), O(be, {
    token: t,
    payload: s
  }, !0)
}
const Ve = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  He = () => "Your account has been suspended for breaking the rules",
  We = () => "Sua conta foi suspensa por quebrar as regras",
  Ye = () => "您的账号因违反规则已被暂停",
  Qe = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Je = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Xe = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Ze = () => "Il tuo account è stato sospeso per aver infranto le regole",
  et = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  tt = () => "Twoje konto zostało zawieszone za łamanie zasad",
  rt = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  nt = () => "Ваш обліковий запис було призупинено за порушення правил",
  at = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  le = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? He() : e === "pt" ? We() : e === "ch" ? Ye() : e === "de" ? Qe() : e === "es" ? Je() : e === "fr" ? Xe() : e === "it" ? Ze() : e === "jp" ? et() : e === "pl" ? tt() : e === "ru" ? rt() : e === "uk" ? nt() : at()
  },
  st = () => "Alliance name already taken",
  ot = () => "Já possui uma aliança com esse nome",
  it = () => "该联盟名称已被占用",
  ct = () => "Der Allianzname ist bereits vergeben",
  ut = () => "Ese nombre de alianza ya está en uso",
  _t = () => "Ce nom d’alliance est déjà pris",
  lt = () => "Esiste già un'alleanza con questo nome",
  dt = () => "このアライアンス名は既に使用されています。",
  ft = () => "Nazwa sojuszu jest już zajęta",
  mt = () => "Такое название альянса уже используется",
  ht = () => "Назва альянсу вже зайнята",
  pt = () => "Tên liên minh đã được sử dụng",
  gt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? st() : e === "pt" ? ot() : e === "ch" ? it() : e === "de" ? ct() : e === "es" ? ut() : e === "fr" ? _t() : e === "it" ? lt() : e === "jp" ? dt() : e === "pl" ? ft() : e === "ru" ? mt() : e === "uk" ? ht() : pt()
  },
  wt = () => "Alliance name exceeded the maximum number of characters",
  yt = () => "O nome da aliança excedeu o número máximo de caracteres",
  bt = () => "联盟名称超过最大字符数限制",
  Et = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Ot = () => "El nombre de la alianza superó el número máximo de caracteres",
  Tt = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  vt = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  It = () => "アライアンス名が最大文字数を超えています。",
  Nt = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  At = () => "Название альянса превышает максимальную длину",
  Rt = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Dt = () => "Tên liên minh vượt quá số ký tự cho phép",
  St = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? wt() : e === "pt" ? yt() : e === "ch" ? bt() : e === "de" ? Et() : e === "es" ? Ot() : e === "fr" ? Tt() : e === "it" ? vt() : e === "jp" ? It() : e === "pl" ? Nt() : e === "ru" ? At() : e === "uk" ? Rt() : Dt()
  },
  kt = () => "Alliance with empty name",
  Pt = () => "Aliança com nome vazio",
  xt = () => "名称为空的联盟",
  Ut = () => "Allianz mit leerem Namen",
  Lt = () => "Alianza con nombre vacío",
  Bt = () => "Alliance avec nom vide",
  jt = () => "Alleanza con nome vuoto",
  Mt = () => "名前が空のアライアンスです。",
  qt = () => "Sojusz z pustą nazwą",
  Kt = () => "Альянс с пустым названием",
  zt = () => "Альянс із порожньою назвою",
  Ft = () => "Liên minh không có tên",
  Gt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? kt() : e === "pt" ? Pt() : e === "ch" ? xt() : e === "de" ? Ut() : e === "es" ? Lt() : e === "fr" ? Bt() : e === "it" ? jt() : e === "jp" ? Mt() : e === "pl" ? qt() : e === "ru" ? Kt() : e === "uk" ? zt() : Ft()
  },
  $t = () => "Botting",
  Ct = () => "Uso de bots",
  Vt = () => "脚本",
  Ht = () => "Bot-Nutzung",
  Wt = () => "Botting",
  Yt = () => "Bots",
  Qt = () => "Uso di bot",
  Jt = () => "ボット使用",
  Xt = () => "Botting",
  Zt = () => "Боттинг",
  er = () => "Боти",
  tr = () => "Botting",
  rr = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? $t() : e === "pt" ? Ct() : e === "ch" ? Vt() : e === "de" ? Ht() : e === "es" ? Wt() : e === "fr" ? Yt() : e === "it" ? Qt() : e === "jp" ? Jt() : e === "pl" ? Xt() : e === "ru" ? Zt() : e === "uk" ? er() : tr()
  },
  nr = () => "Breaking the rules",
  ar = () => "Quebrar as regras",
  sr = () => "违反规则",
  or = () => "Regeln brechen",
  ir = () => "Romper las reglas",
  cr = () => "Violation des règles",
  ur = () => "Violazione delle regole",
  _r = () => "ルール違反",
  lr = () => "Łamanie zasad",
  dr = () => "Нарушение правил",
  fr = () => "Порушення правил",
  mr = () => "Vi phạm luật",
  hr = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? nr() : e === "pt" ? ar() : e === "ch" ? sr() : e === "de" ? or() : e === "es" ? ir() : e === "fr" ? cr() : e === "it" ? ur() : e === "jp" ? _r() : e === "pl" ? lr() : e === "ru" ? dr() : e === "uk" ? fr() : mr()
  },
  pr = () => "You cannot paint over event pixels",
  gr = () => "Você não pode pintar sobre pixels de eventos",
  wr = () => "你不能覆盖活动像素",
  yr = () => "Du kannst nicht über Event-Pixel malen",
  br = () => "No puedes pintar sobre píxeles de evento",
  Er = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Or = () => "Non puoi dipingere sopra i pixel dell'evento",
  Tr = () => "イベント用のピクセルの上には塗れません。",
  vr = () => "Nie możesz malować po pikselach wydarzenia",
  Ir = () => "Вы не можете рисовать по пикселям события",
  Nr = () => "Ви не можете малювати поверх пікселів події",
  Ar = () => "Bạn không thể tô lên pixel sự kiện",
  Rr = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? pr() : e === "pt" ? gr() : e === "ch" ? wr() : e === "de" ? yr() : e === "es" ? br() : e === "fr" ? Er() : e === "it" ? Or() : e === "jp" ? Tr() : e === "pl" ? vr() : e === "ru" ? Ir() : e === "uk" ? Nr() : Ar()
  },
  Dr = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Sr = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  kr = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Pr = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  xr = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Ur = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Lr = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Br = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  jr = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Mr = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  qr = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Kr = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  zr = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Dr() : e === "pt" ? Sr() : e === "ch" ? kr() : e === "de" ? Pr() : e === "es" ? xr() : e === "fr" ? Ur() : e === "it" ? Lr() : e === "jp" ? Br() : e === "pl" ? jr() : e === "ru" ? Mr() : e === "uk" ? qr() : Kr()
  },
  Fr = () => "Couldn't complete the purchase. This item does not exist.",
  Gr = () => "Não foi possível concluir a compra. Este item não existe.",
  $r = () => "无法完成购买。该物品不存在。",
  Cr = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Vr = () => "No se pudo completar la compra. Este ítem no existe.",
  Hr = () => "Achat impossible. Cet objet n’existe pas.",
  Wr = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Yr = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Qr = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Jr = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Xr = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Zr = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  de = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Fr() : e === "pt" ? Gr() : e === "ch" ? $r() : e === "de" ? Cr() : e === "es" ? Vr() : e === "fr" ? Hr() : e === "it" ? Wr() : e === "jp" ? Yr() : e === "pl" ? Qr() : e === "ru" ? Jr() : e === "uk" ? Xr() : Zr()
  },
  en = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  tn = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  rn = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  nn = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  an = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  sn = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  on = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  cn = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  un = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  _n = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  ln = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  dn = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  fn = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? en() : e === "pt" ? tn() : e === "ch" ? rn() : e === "de" ? nn() : e === "es" ? an() : e === "fr" ? sn() : e === "it" ? on() : e === "jp" ? cn() : e === "pl" ? un() : e === "ru" ? _n() : e === "uk" ? ln() : dn()
  },
  mn = () => "Doxxing",
  hn = () => "Doxxing",
  pn = () => "人肉搜索",
  gn = () => "Doxxing",
  wn = () => "Doxxing",
  yn = () => "Doxxing",
  bn = () => "Doxxing",
  En = () => "ドックス（Doxxing）",
  On = () => "Doxxing",
  Tn = () => "Докcинг",
  vn = () => "Докcинг",
  In = () => "Doxxing",
  Nn = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? mn() : e === "pt" ? hn() : e === "ch" ? pn() : e === "de" ? gn() : e === "es" ? wn() : e === "fr" ? yn() : e === "it" ? bn() : e === "jp" ? En() : e === "pl" ? On() : e === "ru" ? Tn() : e === "uk" ? vn() : In()
  },
  An = r => `Error while painting: ${r.err}`,
  Rn = r => `Erro enquanto pinta: ${r.err}`,
  Dn = r => `绘制时出错：${r.err}`,
  Sn = r => `Fehler beim Malen: ${r.err}`,
  kn = r => `Error al pintar: ${r.err}`,
  Pn = r => `Erreur lors de la peinture : ${r.err}`,
  xn = r => `Errore durante la pittura: ${r.err}`,
  Un = r => `ペイント中にエラーが発生しました: ${r.err}`,
  Ln = r => `Błąd podczas malowania: ${r.err}`,
  Bn = r => `Ошибка при рисовании: ${r.err}`,
  jn = r => `Помилка під час малювання: ${r.err}`,
  Mn = r => `Lỗi khi tô: ${r.err}`,
  qn = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? An(r) : e === "pt" ? Rn(r) : e === "ch" ? Dn(r) : e === "de" ? Sn(r) : e === "es" ? kn(r) : e === "fr" ? Pn(r) : e === "it" ? xn(r) : e === "jp" ? Un(r) : e === "pl" ? Ln(r) : e === "ru" ? Bn(r) : e === "uk" ? jn(r) : Mn(r)
  },
  Kn = () => "Griefing",
  zn = () => "Griefing",
  Fn = () => "破坏行为",
  Gn = () => "Griefing",
  $n = () => "Griefing",
  Cn = () => "Griefing",
  Vn = () => "Griefing",
  Hn = () => "グリーフィング",
  Wn = () => "Griefing",
  Yn = () => "Гриферство",
  Qn = () => "Гріфінг",
  Jn = () => "Griefing",
  Xn = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Kn() : e === "pt" ? zn() : e === "ch" ? Fn() : e === "de" ? Gn() : e === "es" ? $n() : e === "fr" ? Cn() : e === "it" ? Vn() : e === "jp" ? Hn() : e === "pl" ? Wn() : e === "ru" ? Yn() : e === "uk" ? Qn() : Jn()
  },
  Zn = () => "Hate speech",
  ea = () => "Discurso de Ódio",
  ta = () => "仇恨言论",
  ra = () => "Hassrede",
  na = () => "Discurso de odio",
  aa = () => "Discours haineux",
  sa = () => "Discorso d'odio",
  oa = () => "ヘイトスピーチ",
  ia = () => "Mowa nienawiści",
  ca = () => "Речь ненависти",
  ua = () => "Мова ворожнечі",
  _a = () => "Ngôn từ thù hằn",
  la = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zn() : e === "pt" ? ea() : e === "ch" ? ta() : e === "de" ? ra() : e === "es" ? na() : e === "fr" ? aa() : e === "it" ? sa() : e === "jp" ? oa() : e === "pl" ? ia() : e === "ru" ? ca() : e === "uk" ? ua() : _a()
  },
  da = () => "Inappropriate content",
  fa = () => "Conteúdo inapropriado",
  ma = () => "不当内容",
  ha = () => "Unangemessene Inhalte",
  pa = () => "Contenido inapropiado",
  ga = () => "Contenu inapproprié",
  wa = () => "Contenuto inappropriato",
  ya = () => "不適切なコンテンツ",
  ba = () => "Nieodpowiednie treści",
  Ea = () => "Неприемлемый контент",
  Oa = () => "Неприйнятний вміст",
  Ta = () => "Nội dung không phù hợp",
  va = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? da() : e === "pt" ? fa() : e === "ch" ? ma() : e === "de" ? ha() : e === "es" ? pa() : e === "fr" ? ga() : e === "it" ? wa() : e === "jp" ? ya() : e === "pl" ? ba() : e === "ru" ? Ea() : e === "uk" ? Oa() : Ta()
  },
  Ia = () => "Invalid code",
  Na = () => "Código inválido",
  Aa = () => "验证码无效",
  Ra = () => "Ungültiger Code",
  Da = () => "Código inválido",
  Sa = () => "Code invalide",
  ka = () => "Codice non valido",
  Pa = () => "無効なコードです。",
  xa = () => "Nieprawidłowy kod",
  Ua = () => "Неверный код",
  La = () => "Невірний код",
  Ba = () => "Mã không hợp lệ",
  ja = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ia() : e === "pt" ? Na() : e === "ch" ? Aa() : e === "de" ? Ra() : e === "es" ? Da() : e === "fr" ? Sa() : e === "it" ? ka() : e === "jp" ? Pa() : e === "pl" ? xa() : e === "ru" ? Ua() : e === "uk" ? La() : Ba()
  },
  Ma = () => "Invalid discord.",
  qa = () => "Discord inválido.",
  Ka = () => "无效的 Discord。",
  za = () => "Ungültiger Discord.",
  Fa = () => "Discord inválido.",
  Ga = () => "Discord invalide.",
  $a = () => "Discord non valido.",
  Ca = () => "無効なDiscordアカウントです。",
  Va = () => "Nieprawidłowy Discord.",
  Ha = () => "Неверный Discord.",
  Wa = () => "Некоректний Discord.",
  Ya = () => "Discord không hợp lệ.",
  Qa = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ma() : e === "pt" ? qa() : e === "ch" ? Ka() : e === "de" ? za() : e === "es" ? Fa() : e === "fr" ? Ga() : e === "it" ? $a() : e === "jp" ? Ca() : e === "pl" ? Va() : e === "ru" ? Ha() : e === "uk" ? Wa() : Ya()
  },
  Ja = () => "The name contains disallowed characters or words. Please choose a different name.",
  Xa = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Za = () => "名称包含禁止的字符或词语，请选择其他名称。",
  es = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  ts = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  rs = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  ns = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  as = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  ss = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  os = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  is = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  cs = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  fe = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ja() : e === "pt" ? Xa() : e === "ch" ? Za() : e === "de" ? es() : e === "es" ? ts() : e === "fr" ? rs() : e === "it" ? ns() : e === "jp" ? as() : e === "pl" ? ss() : e === "ru" ? os() : e === "uk" ? is() : cs()
  },
  us = () => "Invalid phone number",
  _s = () => "Número de telefone inválido",
  ls = () => "无效的电话号码",
  ds = () => "Ungültige Telefonnummer",
  fs = () => "Número de teléfono inválido",
  ms = () => "Numéro de téléphone invalide",
  hs = () => "Numero di telefono non valido",
  ps = () => "無効な電話番号です。",
  gs = () => "Nieprawidłowy numer telefonu",
  ws = () => "Неверный номер телефона",
  ys = () => "Некоректний номер телефону",
  bs = () => "Số điện thoại không hợp lệ",
  Es = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? us() : e === "pt" ? _s() : e === "ch" ? ls() : e === "de" ? ds() : e === "es" ? fs() : e === "fr" ? ms() : e === "it" ? hs() : e === "jp" ? ps() : e === "pl" ? gs() : e === "ru" ? ws() : e === "uk" ? ys() : bs()
  },
  Os = () => "The new leader must be a member of the alliance",
  Ts = () => "O novo líder deve ser um membro da aliança",
  vs = () => "新盟主必须是联盟成员",
  Is = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Ns = () => "El nuevo líder debe ser miembro de la alianza",
  As = () => "Le nouveau chef doit être membre de l’alliance",
  Rs = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Ds = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Ss = () => "Nowy lider musi być członkiem sojuszu",
  ks = () => "Новый лидер должен быть участником альянса",
  Ps = () => "Новий лідер має бути учасником альянсу",
  xs = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Us = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Os() : e === "pt" ? Ts() : e === "ch" ? vs() : e === "de" ? Is() : e === "es" ? Ns() : e === "fr" ? As() : e === "it" ? Rs() : e === "jp" ? Ds() : e === "pl" ? Ss() : e === "ru" ? ks() : e === "uk" ? Ps() : xs()
  },
  Ls = () => "Leaderboard is temporarily disabled",
  Bs = () => "O ranking está temporariamente desativado",
  js = () => "排行榜已暂时停用",
  Ms = () => "Die Bestenliste ist vorübergehend deaktiviert",
  qs = () => "La clasificación está deshabilitada temporalmente",
  Ks = () => "Le classement est temporairement désactivé",
  zs = () => "La classifica è temporaneamente disattivata",
  Fs = () => "ランキングは一時的に無効になっています。",
  Gs = () => "Ranking jest tymczasowo wyłączony",
  $s = () => "Таблица лидеров временно отключена",
  Cs = () => "Таблиця лідерів тимчасово вимкнена",
  Vs = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  R = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ls() : e === "pt" ? Bs() : e === "ch" ? js() : e === "de" ? Ms() : e === "es" ? qs() : e === "fr" ? Ks() : e === "it" ? zs() : e === "jp" ? Fs() : e === "pl" ? Gs() : e === "ru" ? $s() : e === "uk" ? Cs() : Vs()
  },
  Hs = () => "Location name is too big (max. 128 characters)",
  Ws = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ys = () => "位置名称过长（最大 128 个字符）",
  Qs = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Js = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Xs = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Zs = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  eo = () => "場所の名前が長すぎます（最大128文字）。",
  to = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  ro = () => "Название локации слишком длинное (макс. 128 символов)",
  no = () => "Назва локації надто довга (макс. 128 символів)",
  ao = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  so = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Hs() : e === "pt" ? Ws() : e === "ch" ? Ys() : e === "de" ? Qs() : e === "es" ? Js() : e === "fr" ? Xs() : e === "it" ? Zs() : e === "jp" ? eo() : e === "pl" ? to() : e === "ru" ? ro() : e === "uk" ? no() : ao()
  },
  oo = () => "Multi-accounting",
  io = () => "Múltiplas contas",
  co = () => "多账号",
  uo = () => "Multi-Accounting",
  _o = () => "Multi-cuentas",
  lo = () => "Multi-comptes",
  fo = () => "Multi-account",
  mo = () => "複数アカウント使用",
  ho = () => "Multi-konta",
  po = () => "Мультиаккаунт",
  go = () => "Мультиакаунтинг",
  wo = () => "Nhiều tài khoản",
  yo = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? oo() : e === "pt" ? io() : e === "ch" ? co() : e === "de" ? uo() : e === "es" ? _o() : e === "fr" ? lo() : e === "it" ? fo() : e === "jp" ? mo() : e === "pl" ? ho() : e === "ru" ? po() : e === "uk" ? go() : wo()
  },
  bo = r => `You can change your name again in ${r.days} days`,
  Eo = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  Oo = r => `你可以在 ${r.days} 天后再次修改名称`,
  To = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  vo = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  Io = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  No = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  Ao = r => `${r.days}日後に再び名前を変更できます。`,
  Ro = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  Do = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  So = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  ko = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Po = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? bo(r) : e === "pt" ? Eo(r) : e === "ch" ? Oo(r) : e === "de" ? To(r) : e === "es" ? vo(r) : e === "fr" ? Io(r) : e === "it" ? No(r) : e === "jp" ? Ao(r) : e === "pl" ? Ro(r) : e === "ru" ? Do(r) : e === "uk" ? So(r) : ko(r)
  },
  xo = () => "No internet access or the servers are offline. Try again later.",
  Uo = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Lo = () => "没有网络连接或服务器已离线。请稍后重试。",
  Bo = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  jo = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Mo = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  qo = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Ko = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  zo = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Fo = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Go = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  $o = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Co = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? xo() : e === "pt" ? Uo() : e === "ch" ? Lo() : e === "de" ? Bo() : e === "es" ? jo() : e === "fr" ? Mo() : e === "it" ? qo() : e === "jp" ? Ko() : e === "pl" ? zo() : e === "ru" ? Fo() : e === "uk" ? Go() : $o()
  },
  Vo = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Ho = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Wo = () => "操作不被允许。你的收藏位置可能过多。",
  Yo = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Qo = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Jo = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Xo = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Zo = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  ei = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  ti = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  ri = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  ni = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  ai = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Vo() : e === "pt" ? Ho() : e === "ch" ? Wo() : e === "de" ? Yo() : e === "es" ? Qo() : e === "fr" ? Jo() : e === "it" ? Xo() : e === "jp" ? Zo() : e === "pl" ? ei() : e === "ru" ? ti() : e === "uk" ? ri() : ni()
  },
  si = () => "You are trying to paint with a color you do not own",
  oi = () => "Você está tentando pintar com uma cor que não possui",
  ii = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  ci = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  ui = () => "Estás intentando pintar con un color que no posees",
  _i = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  li = () => "Stai cercando di dipingere con un colore che non possiedi",
  di = () => "所持していない色で塗ろうとしています。",
  fi = () => "Próbujesz malować kolorem, którego nie posiadasz",
  mi = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  hi = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  pi = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  gi = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? si() : e === "pt" ? oi() : e === "ch" ? ii() : e === "de" ? ci() : e === "es" ? ui() : e === "fr" ? _i() : e === "it" ? li() : e === "jp" ? di() : e === "pl" ? fi() : e === "ru" ? mi() : e === "uk" ? hi() : pi()
  },
  wi = () => "Phone already used",
  yi = () => "Telefone já usado",
  bi = () => "电话号码已被使用",
  Ei = () => "Telefonnummer bereits verwendet",
  Oi = () => "Teléfono ya utilizado",
  Ti = () => "Téléphone déjà utilisé",
  vi = () => "Telefono già utilizzato",
  Ii = () => "この電話番号は既に使用されています。",
  Ni = () => "Numer telefonu jest już używany",
  Ai = () => "Телефон уже используется",
  Ri = () => "Номер телефону вже використовується",
  Di = () => "Số điện thoại đã được sử dụng",
  Si = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? wi() : e === "pt" ? yi() : e === "ch" ? bi() : e === "de" ? Ei() : e === "es" ? Oi() : e === "fr" ? Ti() : e === "it" ? vi() : e === "jp" ? Ii() : e === "pl" ? Ni() : e === "ru" ? Ai() : e === "uk" ? Ri() : Di()
  },
  ki = () => "Refresh your page to get the latest update",
  Pi = () => "Recarregue sua página para obter as últimas atualizações",
  xi = () => "刷新页面以获取最新更新",
  Ui = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Li = () => "Actualiza la página para obtener la última versión",
  Bi = () => "Actualisez la page pour obtenir les dernières mises à jour",
  ji = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Mi = () => "最新の状態にするにはページを再読み込みしてください。",
  qi = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Ki = () => "Обновите страницу, чтобы получить последние изменения",
  zi = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Fi = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Gi = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ki() : e === "pt" ? Pi() : e === "ch" ? xi() : e === "de" ? Ui() : e === "es" ? Li() : e === "fr" ? Bi() : e === "it" ? ji() : e === "jp" ? Mi() : e === "pl" ? qi() : e === "ru" ? Ki() : e === "uk" ? zi() : Fi()
  },
  $i = () => "The typed username does not match your current username.",
  Ci = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Vi = () => "输入的用户名与当前用户名不匹配。",
  Hi = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Wi = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Yi = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Qi = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Ji = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Xi = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Zi = () => "Введённое имя пользователя не совпадает с текущим.",
  ec = () => "Введене імʼя користувача не збігається з поточним.",
  tc = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  rc = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? $i() : e === "pt" ? Ci() : e === "ch" ? Vi() : e === "de" ? Hi() : e === "es" ? Wi() : e === "fr" ? Yi() : e === "it" ? Qi() : e === "jp" ? Ji() : e === "pl" ? Xi() : e === "ru" ? Zi() : e === "uk" ? ec() : tc()
  },
  nc = () => "Unexpected server error. Try again later.",
  ac = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  sc = () => "服务器出现意外错误。请稍后再试。",
  oc = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  ic = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  cc = () => "Erreur serveur inattendue. Réessayez plus tard.",
  uc = () => "Errore imprevisto del server. Riprova più tardi.",
  _c = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  lc = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  dc = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  fc = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  mc = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  i = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? nc() : e === "pt" ? ac() : e === "ch" ? sc() : e === "de" ? oc() : e === "es" ? ic() : e === "fr" ? cc() : e === "it" ? uc() : e === "jp" ? _c() : e === "pl" ? lc() : e === "ru" ? dc() : e === "uk" ? fc() : mc()
  },
  hc = () => "Failed to load WebAssembly module. Try to use another browser.",
  pc = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  gc = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  wc = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  yc = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  bc = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Ec = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Oc = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Tc = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  vc = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Ic = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Nc = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Ac = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? hc() : e === "pt" ? pc() : e === "ch" ? gc() : e === "de" ? wc() : e === "es" ? yc() : e === "fr" ? bc() : e === "it" ? Ec() : e === "jp" ? Oc() : e === "pl" ? Tc() : e === "ru" ? vc() : e === "uk" ? Ic() : Nc()
  },
  Rc = () => "You already have this item. Please refresh the page.",
  Dc = () => "Você já possui este item. Atualize a página.",
  Sc = () => "你已经拥有此物品。请刷新页面。",
  kc = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Pc = () => "Ya tienes este ítem. Actualiza la página.",
  xc = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Uc = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Lc = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Bc = () => "Masz już ten przedmiot. Odśwież stronę.",
  jc = () => "У вас уже есть этот предмет. Обновите страницу.",
  Mc = () => "У вас уже є цей предмет. Оновіть сторінку.",
  qc = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  me = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Rc() : e === "pt" ? Dc() : e === "ch" ? Sc() : e === "de" ? kc() : e === "es" ? Pc() : e === "fr" ? xc() : e === "it" ? Uc() : e === "jp" ? Lc() : e === "pl" ? Bc() : e === "ru" ? jc() : e === "uk" ? Mc() : qc()
  },
  Kc = () => "You are already in an alliance",
  zc = () => "Você já está em uma aliança",
  Fc = () => "你已经在一个联盟中",
  Gc = () => "Du bist bereits in einer Allianz",
  $c = () => "Ya estás en una alianza",
  Cc = () => "Vous êtes déjà dans une alliance",
  Vc = () => "Sei già in un'alleanza",
  Hc = () => "すでにアライアンスに所属しています。",
  Wc = () => "Jesteś już w sojuszu",
  Yc = () => "Вы уже состоите в альянсе",
  Qc = () => "Ви вже перебуваєте в альянсі",
  Jc = () => "Bạn đã ở trong một liên minh",
  Xc = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Kc() : e === "pt" ? zc() : e === "ch" ? Fc() : e === "de" ? Gc() : e === "es" ? $c() : e === "fr" ? Cc() : e === "it" ? Vc() : e === "jp" ? Hc() : e === "pl" ? Wc() : e === "ru" ? Yc() : e === "uk" ? Qc() : Jc()
  },
  Zc = () => "You are not allowed to do this",
  eu = () => "Você não tem permissão para fazer isso",
  tu = () => "你无权执行此操作",
  ru = () => "Du bist dazu nicht berechtigt",
  nu = () => "No tienes permiso para hacer esto",
  au = () => "Vous n’êtes pas autorisé à faire cela",
  su = () => "Non hai il permesso di farlo",
  ou = () => "この操作を行う権限がありません。",
  iu = () => "Nie masz uprawnień, aby to zrobić",
  cu = () => "У вас нет прав для этого действия",
  uu = () => "Ви не маєте права це робити",
  _u = () => "Bạn không có quyền làm việc này",
  D = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zc() : e === "pt" ? eu() : e === "ch" ? tu() : e === "de" ? ru() : e === "es" ? nu() : e === "fr" ? au() : e === "it" ? su() : e === "jp" ? ou() : e === "pl" ? iu() : e === "ru" ? cu() : e === "uk" ? uu() : _u()
  },
  lu = () => "You do not have enough Droplets to buy this item.",
  du = () => "Você não tem gotas suficientes para comprar este item.",
  fu = () => "你的水滴不足，无法购买此物品。",
  mu = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  hu = () => "No tienes suficientes gotas para comprar este ítem.",
  pu = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  gu = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  wu = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  yu = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  bu = () => "У вас недостаточно droplets для покупки этого предмета.",
  Eu = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  Ou = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  he = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? lu() : e === "pt" ? du() : e === "ch" ? fu() : e === "de" ? mu() : e === "es" ? hu() : e === "fr" ? pu() : e === "it" ? gu() : e === "jp" ? wu() : e === "pl" ? yu() : e === "ru" ? bu() : e === "uk" ? Eu() : Ou()
  },
  Tu = () => "You have to wait to resend a code",
  vu = () => "Você tem de esperar para reenviar um código",
  Iu = () => "你需要等待一段时间才能重新发送验证码",
  Nu = () => "Du musst warten, bevor du einen Code erneut senden kannst",
  Au = () => "Tienes que esperar para reenviar un código",
  Ru = () => "Vous devez attendre avant de renvoyer un code",
  Du = () => "Devi aspettare per reinviare un codice",
  Su = () => "コードを再送信するまでしばらくお待ちください。",
  ku = () => "Musisz poczekać, zanim wyślesz kod ponownie",
  Pu = () => "Вам нужно подождать, прежде чем отправить код ещё раз",
  xu = () => "Перш ніж повторно надіслати код, потрібно почекати",
  Uu = () => "Bạn phải chờ trước khi gửi lại mã",
  Lu = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Tu() : e === "pt" ? vu() : e === "ch" ? Iu() : e === "de" ? Nu() : e === "es" ? Au() : e === "fr" ? Ru() : e === "it" ? Du() : e === "jp" ? Su() : e === "pl" ? ku() : e === "ru" ? Pu() : e === "uk" ? xu() : Uu()
  },
  Bu = () => "You need to be logged in to paint",
  ju = () => "Você precisa estar conectado para pintar",
  Mu = () => "你需要登录才能进行绘制",
  qu = () => "Du musst eingeloggt sein, um zu malen",
  Ku = () => "Debes iniciar sesión para pintar",
  zu = () => "Vous devez être connecté pour peindre",
  Fu = () => "Devi avere effettuato l'accesso per dipingere",
  Gu = () => "ペイントするにはログインが必要です。",
  $u = () => "Musisz być zalogowany, aby malować",
  Cu = () => "Чтобы рисовать, нужно войти в аккаунт",
  Vu = () => "Щоб малювати, необхідно увійти в акаунт",
  Hu = () => "Bạn cần đăng nhập để tô",
  ne = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Bu() : e === "pt" ? ju() : e === "ch" ? Mu() : e === "de" ? qu() : e === "es" ? Ku() : e === "fr" ? zu() : e === "it" ? Fu() : e === "jp" ? Gu() : e === "pl" ? $u() : e === "ru" ? Cu() : e === "uk" ? Vu() : Hu()
  },
  Wu = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Yu = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Qu = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Ju = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Xu = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Zu = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  e_ = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  t_ = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  r_ = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  n_ = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  a_ = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  s_ = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  pe = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Wu() : e === "pt" ? Yu() : e === "ch" ? Qu() : e === "de" ? Ju() : e === "es" ? Xu() : e === "fr" ? Zu() : e === "it" ? e_() : e === "jp" ? t_() : e === "pl" ? r_() : e === "ru" ? n_() : e === "uk" ? a_() : s_()
  },
  o_ = r => `Your account has been suspended out until ${r.until}`,
  i_ = r => `A sua conta está suspensa até ${r.until}`,
  c_ = r => `你的账号已被暂停至 ${r.until}`,
  u_ = r => `Dein Konto ist gesperrt bis ${r.until}`,
  __ = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  l_ = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  d_ = r => `Il tuo account è sospeso fino al ${r.until}`,
  f_ = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  m_ = r => `Twoje konto zostało zawieszone do ${r.until}`,
  h_ = r => `Ваш аккаунт заблокирован до ${r.until}`,
  p_ = r => `Ваш акаунт призупинено до ${r.until}`,
  g_ = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  w_ = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? o_(r) : e === "pt" ? i_(r) : e === "ch" ? c_(r) : e === "de" ? u_(r) : e === "es" ? __(r) : e === "fr" ? l_(r) : e === "it" ? d_(r) : e === "jp" ? f_(r) : e === "pl" ? m_(r) : e === "ru" ? h_(r) : e === "uk" ? p_(r) : g_(r)
  },
  y_ = () => "Exceeded maximum number of characters",
  b_ = () => "Excedeu o número máximo de caracteres permitidos",
  E_ = () => "超出最大字符数",
  O_ = () => "Maximale Zeichenanzahl überschritten",
  T_ = () => "Se excedió el número máximo de caracteres",
  v_ = () => "Nombre maximal de caractères dépassé",
  I_ = () => "Numero massimo di caratteri superato",
  N_ = () => "最大文字数を超過しました",
  A_ = () => "Przekroczono maksymalną liczbę znaków",
  R_ = () => "Превышено максимальное количество символов",
  D_ = () => "Перевищено максимальну кількість символів",
  S_ = () => "Đã vượt quá số ký tự tối đa",
  k_ = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? y_() : e === "pt" ? b_() : e === "ch" ? E_() : e === "de" ? O_() : e === "es" ? T_() : e === "fr" ? v_() : e === "it" ? I_() : e === "jp" ? N_() : e === "pl" ? A_() : e === "ru" ? R_() : e === "uk" ? D_() : S_()
  };
let p;

function L(r) {
  const t = p.__externref_table_alloc();
  return p.__wbindgen_export_2.set(t, r), t
}

function x(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    const n = L(e);
    p.__wbindgen_exn_store(n)
  }
}
const Oe = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Oe.decode();
let B = null;

function X() {
  return (B === null || B.byteLength === 0) && (B = new Uint8Array(p.memory.buffer)), B
}

function j(r, t) {
  return r = r >>> 0, Oe.decode(X().subarray(r, r + t))
}

function J(r) {
  return r == null
}

function P_(r) {
  p.set_user_id(r)
}
let te = 0;
const Z = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  x_ = typeof Z.encodeInto == "function" ? function(r, t) {
    return Z.encodeInto(r, t)
  } : function(r, t) {
    const e = Z.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function Te(r, t, e) {
  if (e === void 0) {
    const c = Z.encode(r),
      d = t(c.length, 1) >>> 0;
    return X().subarray(d, d + c.length).set(c), te = c.length, d
  }
  let n = r.length,
    s = t(n, 1) >>> 0;
  const o = X();
  let u = 0;
  for (; u < n; u++) {
    const c = r.charCodeAt(u);
    if (c > 127) break;
    o[s + u] = c
  }
  if (u !== n) {
    u !== 0 && (r = r.slice(u)), s = e(s, n, n = u + r.length * 3, 1) >>> 0;
    const c = X().subarray(s + u, s + n),
      d = x_(r, c);
    u += d.written, s = e(s, n, u, 1) >>> 0
  }
  return te = u, s
}

function U_(r) {
  const t = Te(r, p.__wbindgen_malloc, p.__wbindgen_realloc),
    e = te;
  p.request_url(t, e)
}

function L_() {
  let r, t;
  try {
    const e = p.get_load_payload();
    return r = e[0], t = e[1], j(e[0], e[1])
  } finally {
    p.__wbindgen_free(r, t, 1)
  }
}

function B_(r) {
  let t, e;
  try {
    const n = Te(r, p.__wbindgen_malloc, p.__wbindgen_realloc),
      s = te,
      o = p.get_pawtected_endpoint_payload(n, s);
    return t = o[0], e = o[1], j(o[0], o[1])
  } finally {
    p.__wbindgen_free(t, e, 1)
  }
}
async function j_(r, t) {
  if (typeof Response == "function" && r instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(r, t)
    } catch (n) {
      if (r.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n
    }
    const e = await r.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(r, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: r
    } : e
  }
}

function M_() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    return t.buffer
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return x(function(t, e) {
      return t.call(e)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return x(function(t, e, n) {
      return t.call(e, n)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    return t.crypto
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return x(function(t, e) {
      t.getRandomValues(e)
    }, arguments)
  }, r.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    return t.msCrypto
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    return new Uint8Array(t)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    return new Function(j(t, e))
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    return new Uint8Array(t, e >>> 0, n >>> 0)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    return new Uint8Array(t >>> 0)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    return t.node
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    return t.process
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return x(function(t, e) {
      t.randomFillSync(e)
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return x(function() {
      return module.require
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    t.set(e, n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return J(t) ? 0 : L(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return J(t) ? 0 : L(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return J(t) ? 0 : L(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return J(t) ? 0 : L(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    return t.subarray(e >>> 0, n >>> 0)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    return t.versions
  }, r.wbg.__wbindgen_init_externref_table = function() {
    const t = p.__wbindgen_export_2,
      e = t.grow(4);
    t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1)
  }, r.wbg.__wbindgen_is_function = function(t) {
    return typeof t == "function"
  }, r.wbg.__wbindgen_is_object = function(t) {
    const e = t;
    return typeof e == "object" && e !== null
  }, r.wbg.__wbindgen_is_string = function(t) {
    return typeof t == "string"
  }, r.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0
  }, r.wbg.__wbindgen_memory = function() {
    return p.memory
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    return j(t, e)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(j(t, e))
  }, r
}

function q_(r, t) {
  return p = r.exports, ve.__wbindgen_wasm_module = t, B = null, p.__wbindgen_start(), p
}
async function ve(r) {
  if (p !== void 0) return p;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = M_();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await j_(await r, t);
  return q_(e, n)
}

function Ie(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function K_(r, t) {
  for (const e of t)
    if (Ie(r, e)) return !0;
  return !1
}

function z_(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}
class F_ {
  constructor(t) {
    w(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const n = Math.floor(t / 8),
      s = t % 8;
    if (n >= this.bytes.length) {
      const u = new Uint8Array(n + 1),
        c = u.length - this.bytes.length;
      for (let d = 0; d < this.bytes.length; d++) u[d + c] = this.bytes[d];
      this.bytes = u
    }
    const o = this.bytes.length - 1 - n;
    e ? this.bytes[o] = this.bytes[o] | 1 << s : this.bytes[o] = this.bytes[o] & ~(1 << s)
  }
  get(t) {
    const e = Math.floor(t / 8),
      n = t % 8,
      s = this.bytes.length;
    return e > s ? !1 : (this.bytes[s - 1 - e] & 1 << n) !== 0
  }
}

function yl(r) {
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onload = () => {
      const s = n.result;
      if (!s || typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s.substring(s.indexOf(",") + 1))
    }, n.readAsDataURL(r)
  })
}
var z, F, G, $, C, V, H, W;
class G_ {
  constructor() {
    w(this, "channel", new BroadcastChannel("user-channel"));
    y(this, z, A());
    y(this, F, A(!0));
    y(this, G, A());
    y(this, $, A(Date.now()));
    y(this, C, U(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((je.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    y(this, V, U(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    y(this, H, U(() => {
      var t;
      return new F_(z_(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    y(this, W, U(() => {
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
    return b(m(this, z))
  }
  set data(t) {
    O(m(this, z), t, !0)
  }
  get loading() {
    return b(m(this, F))
  }
  set loading(t) {
    O(m(this, F), t, !0)
  }
  get notificiationCount() {
    return b(m(this, G))
  }
  set notificiationCount(t) {
    O(m(this, G), t, !0)
  }
  get lastFetch() {
    return b(m(this, $))
  }
  set lastFetch(t) {
    O(m(this, $), t)
  }
  get charges() {
    return b(m(this, C))
  }
  set charges(t) {
    O(m(this, C), t)
  }
  get cooldown() {
    return b(m(this, V))
  }
  set cooldown(t) {
    O(m(this, V), t)
  }
  get flagsBitmap() {
    return b(m(this, H))
  }
  set flagsBitmap(t) {
    O(m(this, H), t)
  }
  get timeoutUntil() {
    return b(m(this, W))
  }
  set timeoutUntil(t) {
    O(m(this, W), t)
  }
  async refresh() {
    var t;
    try {
      return this.loading = !0, this.data = await ee.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificiationCount === void 0 && ee.getNotificationCount().then(e => {
        this.notificiationCount = e
      }), (t = this.data) != null && t.id && Me("userId", {
        id: this.data.id
      }), !!this.data
    } catch (e) {
      return console.error(e), ye.warning(Co(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await ee.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var n;
    return t < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Ie((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return K_((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
z = new WeakMap, F = new WeakMap, G = new WeakMap, $ = new WeakMap, C = new WeakMap, V = new WeakMap, H = new WeakMap, W = new WeakMap;
const k = new G_;

function Ne(r) {
  return k.data ? k.data.experiments[r] ?? null : null
}

function bl(r) {
  var t, e;
  return ((e = (t = k.data) == null ? void 0 : t.experiments[r]) == null ? void 0 : e.enabled) ?? !0
}
const El = {
    griefing: Xn(),
    "multi-accounting": yo(),
    "hate-speech": la(),
    bot: rr(),
    doxxing: Nn(),
    "inappropriate-content": va(),
    other: hr()
  },
  Ol = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ge = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  $_ = [{
    tileSize: 1e3,
    zoom: 11
  }],
  C_ = 4,
  V_ = 7e3,
  H_ = [{
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
  W_ = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Y_ = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {},
    FRAME: {},
    "Custom Name Font": {},
    "Custom Name Style": {}
  },
  Q_ = {
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
    },
    130: {
      name: "FRAME",
      isDollar: !1,
      items: [{
        name: "FRAME",
        amount: 1
      }]
    },
    140: {
      name: "Custom Name Font",
      isDollar: !1,
      items: [{
        name: "Custom Name Font",
        amount: 1
      }]
    },
    150: {
      name: "Custom Name Style",
      isDollar: !1,
      items: [{
        name: "Custom Name Style",
        amount: 1
      }]
    }
  },
  J_ = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  X_ = {
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
        rename: "staff.dashboard.users.rename",
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
      },
      banAppeals: {
        see: "staff.dashboard.ban_appeals.see"
      },
      kpi: {
        tickets: "staff.dashboard.kpi.tickets"
      },
      storeManager: {
        frames: "staff.dashboard.store_manager.frames",
        fonts: "staff.dashboard.store_manager.fonts",
        styles: "staff.dashboard.store_manager.styles",
        badges: "staff.dashboard.store_manager.badges"
      }
    },
    tickets: {
      assign: "staff.tickets.assign",
      closedToday: "staff.tickets.closed_today",
      openCount: "staff.tickets.open_count",
      translate: "staff.tickets.translate",
      setStatus: "staff.tickets.set_status",
      ignoreAll: "staff.tickets.ignore_all"
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
        seePunishment: "staff.tools.select_pixel.see_punishment"
      },
      autoPainter: "staff.tools.auto_painter.paint",
      wayback: "staff.tools.wayback"
    },
    ui: {
      themeDarkMode: "staff.ui.theme.dark_mode",
      tooglePixelArt: "staff.ui.toggle_pixel_art"
    },
    cosmetics: {
      viewCosmetics: "staff.cosmetics.view_cosmetics",
      manageCosmetics: "staff.cosmetics.manage_cosmetics",
      assignCosmetics: "staff.cosmetics.assign_cosmetics"
    }
  },
  Z_ = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  S = {
    seasons: $_,
    regionSize: C_,
    refreshIntervalMs: V_,
    colors: H_,
    errors: W_,
    items: Y_,
    products: Q_,
    countries: J_,
    permissions: X_,
    settings: Z_
  },
  ae = S,
  el = S.seasons,
  Ae = S.seasons.length - 1,
  Tl = S.seasons[Ae].zoom,
  vl = S.seasons[Ae].tileSize,
  Il = S.permissions,
  tl = S.settings;

function Nl(r) {
  return ae.countries[r - 1]
}
class _ extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function rl(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    let o = e[s];
    o ? o.push(n) : e[s] = [n]
  }
  return e
}

function Al(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    e[s] = n
  }
  return e
}
var a = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(a || {}),
  Y;
class nl {
  constructor(t) {
    y(this, Y, A(!0));
    this.url = t
  }
  get online() {
    return b(m(this, Y))
  }
  set online(t) {
    O(m(this, Y), t, !0)
  }
  async paint(t, e) {
    return this.sendPaintRequests(t, e, (n, s, o) => `/s${n}/pixel/${s}/${o}`)
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, e, (n, s, o) => `/staff/tools/select-area/clear/s${n}/pixel/${s}/${o}`)
  }
  async sendPaintRequests(t, e, n) {
    const s = rl(t, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
      o = Ne("2025-09_pawtect");
    if (!o) throw new Error("paint request while pawtect experiment not found");
    const c = (await Promise.all(Object.values(s).map(d => {
      const [l, g] = d[0].tile, h = d[0].season, I = {
        colors: d.map(v => v.colorIdx),
        coords: d.flatMap(v => v.pixel),
        fp: e
      }, P = JSON.stringify(I), T = n(h, l, g);
      return this.request(T, {
        method: "POST",
        body: P,
        headers: {
          "x-pawtect-token": o.variant !== "disabled" ? cl(P) : "",
          "x-pawtect-variant": o.variant
        },
        credentials: "include"
      })
    }))).filter(d => d.status !== a.OK);
    if (c.length) {
      const d = c[0];
      if (d.status === a.UNAUTHORIZED) throw new Error(ne());
      if (d.status === a.FORBIDDEN) {
        if (d.headers.get("cf-mitigated") === "challenge") throw new Error(fn());
        const l = await d.json();
        if ((l == null ? void 0 : l.error) === "timeout") {
          const g = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(w_({
            until: g.toLocaleString()
          }))
        }
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(Gi());
        if ((l == null ? void 0 : l.error) === "color-not-owned") throw new Error(gi());
        if ((l == null ? void 0 : l.error) === "event-pixel-present") throw new Error(Rr());
        k.refresh()
      } else throw new Error(i())
    }
  }
  async adminAutoPainterPaint(t, e, n) {
    const s = al(t),
      o = await sl(s),
      u = new FormData;
    u.append("fingerprint", e), u.append("season", s.season.toString()), u.append("px0", s.offsetX.toString()), u.append("py0", s.offsetY.toString()), u.append("width", s.width.toString()), u.append("height", s.height.toString()), u.append("pixels", t.length.toString()), u.append("bitmap", o, "auto-painter.png"), u.append("userId", n.toString());
    const c = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: u,
      credentials: "include"
    });
    if (c.status === a.FORBIDDEN) throw new Error("Auto painter is restricted to administrators.");
    if (c.status !== a.OK) throw new Error(i());
    return c.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, n],
    pixel: [s, o],
    role: u,
    christmasTreeId: c
  }) {
    const d = new URLSearchParams;
    d.set("x", String(s)), d.set("y", String(o)), c !== void 0 && d.set("christmasTreeId", String(c));
    const l = await this.request(`/s${t}/pixel/${e}/${n}?${d.toString()}`, {
      credentials: "include"
    });
    if (l.status !== a.OK) {
      const g = await l.text();
      throw new Error(qn({
        err: g
      }))
    }
    return l.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, n],
    p0: [s, o],
    p1: [u, c]
  }) {
    const d = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${s}&y0=${o}&x1=${u}&y1=${c}`, {
      credentials: "include"
    });
    if (d.status !== a.OK) {
      const h = await d.text();
      throw console.error("Error while fetching pixel area info", h), new Error(i())
    }
    const l = await d.arrayBuffer(),
      g = new DataView(l);
    return {
      paintedBy: Array.from({
        length: l.byteLength / 4
      }, (h, I) => g.getUint32(I * 4, !0))
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === a.OK) return await t.json()
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(await t.text());
    return await t.json()
  }
  async refreshPaymentSession(t) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(t)}`, {
      method: "POST",
      credentials: "include"
    })).status === a.OK
  }
  async getOtpCooldown() {
    const t = await this.request("/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(i());
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
    if (e.status === a.BAD_REQUEST) throw new Error(Es());
    if (e.status === a.FORBIDDEN) throw new Error(Si());
    if (e.status === a.TOO_MANY_REQUESTS) throw new Error(Lu());
    if (e.status !== a.OK) throw new Error(i());
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
    if (e.status === a.BAD_REQUEST) throw new Error(ja());
    if (e.status !== a.OK) throw new Error(i());
    return await e.json()
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === a.BAD_REQUEST) {
      const n = await e.json(),
        s = (n == null ? void 0 : n.error) ?? "";
      if (s === "invalid_name") throw new Error(fe());
      if (s === "invalid_discord") throw new Error(Qa());
      if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
        const o = parseInt(s.split(":")[1] ?? "0", 10);
        throw new Error(Po({
          days: o
        }))
      }
      throw new Error(n == null ? void 0 : n.error)
    } else if (e.status !== a.OK) throw new Error(i())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === a.BAD_REQUEST) throw new Error(rc());
    if (e.status !== a.OK) throw new Error(i())
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
    if (e.status === a.FORBIDDEN) throw new Error(ai());
    if (e.status !== a.OK) throw new Error(i())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== a.OK) throw new Error(i())
  }
  async updateFavoriteLocation(t, e) {
    const n = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: t,
        name: e
      }),
      credentials: "include"
    });
    if (n.status === a.BAD_REQUEST) throw new Error(so());
    if (n.status !== a.OK) throw new Error(i())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== a.OK) throw new Error(R());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== a.OK) throw new Error(R());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const n = await this.request(`/leaderboard/region/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(R())
  }
  async leaderboardRegionPlayers(t, e) {
    const n = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(R())
  }
  async leaderboardRegionAlliances(t, e) {
    const n = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(R())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(R())
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== a.OK) throw new Error(i());
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
    if (e.status !== a.OK) throw e.status === a.NOT_FOUND ? new Error(de()) : e.status === a.FORBIDDEN ? new Error(he()) : e.status === a.CONFLICT ? new Error(me()) : new Error(i())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === a.OK) return t.json();
    if (t.status === a.NOT_FOUND) return;
    throw new Error(i())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === a.OK) return e.json();
    if (e.status === a.BAD_REQUEST) {
      const n = await e.json();
      throw n.error === "max_characters" ? new Error(St()) : n.error === "name_taken" ? new Error(gt()) : n.error == "empty_name" ? new Error(Gt()) : new Error(i())
    } else throw e.status === a.FORBIDDEN ? new Error(Xc()) : new Error(i())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== a.OK) throw new Error(i())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(D()) : e.status === a.BAD_REQUEST ? new Error(k_()) : new Error(i())
  }
  async updateAllianceHeadquarters(t, e) {
    const n = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: t,
        longitude: e
      })
    });
    if (n.status !== a.OK) throw n.status === a.FORBIDDEN ? new Error(D()) : new Error(i())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw e.status === a.FORBIDDEN ? new Error(D()) : new Error(R())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === a.OK) return t.json();
    throw t.status === a.FORBIDDEN ? new Error(D()) : new Error(i())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case a.OK:
        return "success";
      case a.ALREADY_REPORTED:
        return "in-another-alliance";
      case a.UNAUTHORIZED:
        return "not-logged-in";
      case a.FORBIDDEN:
        return "banned";
      case a.BAD_REQUEST:
      case a.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(i())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(i())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) return;
    if (e.status !== a.OK) throw new _(i(), e.status);
    const n = await e.json();
    return {
      id: Number(n.id),
      name: String(n.name),
      pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
      }),
      n = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new _(i(), n.status);
    const s = await n.json();
    return (Array.isArray(s) ? s : []).map(o => ({
      id: Number(o.id),
      name: String(o.name ?? ""),
      pixelsPainted: Number((o == null ? void 0 : o.pixels_painted) ?? 0)
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
    if (e.status === a.NOT_FOUND) return null;
    if (e.status !== a.OK) throw new _(i(), e.status);
    const n = await e.json(),
      s = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
    return {
      id: Number(n == null ? void 0 : n.id),
      name: String((n == null ? void 0 : n.name) ?? ""),
      description: (n == null ? void 0 : n.description) ?? null,
      ownerId: Number((n == null ? void 0 : n.ownerId) ?? (n == null ? void 0 : n.created_by)),
      ownerName: (n == null ? void 0 : n.ownerName) ?? null,
      hqName: (n == null ? void 0 : n.hqName) ?? null,
      hqLatitude: (n == null ? void 0 : n.hqLatitude) ?? (n == null ? void 0 : n.hq_latitude) ?? null,
      hqLongitude: (n == null ? void 0 : n.hqLongitude) ?? (n == null ? void 0 : n.hq_longitude) ?? null,
      pixelsPainted: Number((n == null ? void 0 : n.pixelsPainted) ?? (n == null ? void 0 : n.pixels_painted) ?? 0),
      membersCount: Number((n == null ? void 0 : n.membersCount) ?? s.length),
      members: s.map(o => ({
        id: Number(o == null ? void 0 : o.id),
        name: String((o == null ? void 0 : o.name) ?? `#${o==null?void 0:o.id}`),
        picture: (o == null ? void 0 : o.picture) ?? null,
        pixelsPainted: Number((o == null ? void 0 : o.pixelsPainted) ?? (o == null ? void 0 : o.pixels_painted) ?? 0),
        lastPixelLatitude: (o == null ? void 0 : o.lastPixelLatitude) ?? null,
        lastPixelLongitude: (o == null ? void 0 : o.lastPixelLongitude) ?? null,
        role: (o == null ? void 0 : o.alliance_role) === "admin" || (o == null ? void 0 : o.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(t, e) {
    const n = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      s = await this.request(`/staff/dashboard/alliances/${t}/members?${n.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (s.status === a.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (s.status !== a.OK) throw new _(i(), s.status);
    const o = await s.json(),
      u = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
    return {
      members: u.map(c => ({
        id: Number(c == null ? void 0 : c.id),
        name: String((c == null ? void 0 : c.name) ?? `#${c==null?void 0:c.id}`),
        picture: (c == null ? void 0 : c.picture) ?? null,
        pixelsPainted: Number((c == null ? void 0 : c.pixelsPainted) ?? (c == null ? void 0 : c.pixels_painted) ?? 0),
        lastPixelLatitude: (c == null ? void 0 : c.lastPixelLatitude) ?? null,
        lastPixelLongitude: (c == null ? void 0 : c.lastPixelLongitude) ?? null,
        role: (c == null ? void 0 : c.alliance_role) === "admin" || (c == null ? void 0 : c.role) === "admin" ? "admin" : "member"
      })),
      total: Number((o == null ? void 0 : o.total) ?? u.length)
    }
  }
  async renameAlliance(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (n.status === a.BAD_REQUEST) {
      const s = await n.json().catch(() => ({}));
      throw new Error((s == null ? void 0 : s.error) ?? i())
    } else if (n.status !== a.OK) throw new _(i(), n.status)
  }
  async changeAllianceLeader(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (n.status === a.BAD_REQUEST) {
      const s = await n.json();
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(Us()) : new Error(i())
    } else if (n.status !== a.OK) throw new _(i(), n.status)
  }
  async banAllAllianceMembers(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async setAllianceMemberRole(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: n
      })
    });
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async removeAllianceMember(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new _(i(), n.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(D()) : new Error(i())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(D()) : new Error(i())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== a.OK) throw new Error(i())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(i());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== a.OK) throw new Error(i())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(D()) : new Error(i())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(t) {
    const e = await this.request(`/payment/abacatepay/create/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === a.BAD_REQUEST) {
      const s = await e.json();
      throw new Error(s == null ? void 0 : s.error)
    } else {
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(le());
      if (e.status !== a.OK) throw new Error(i())
    }
    return await e.json()
  }
  async refreshPixPayment(t) {
    const e = await this.request(`/payment/abacatepay/refresh/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === a.BAD_REQUEST) {
      const n = await e.json();
      throw new Error(n == null ? void 0 : n.error)
    } else if (e.status !== a.OK) throw new Error("Unexpected error on the server. Try again later");
    return e.json()
  }
  async getPixStatus(t) {
    const e = await this.request(`/payment/abacatepay/status/pix/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new Error("Erro inesperado. Tente atualizar a página.");
    return e.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    const e = await t.json();
    for (const n of e.tickets) n.reports.sort((s, o) => ge[s.reason] - ge[o.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
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
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, n, s) {
    const o = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: n,
        assignedReason: s
      })
    });
    if (o.status !== a.OK && o.status !== a.BAD_REQUEST) throw new _(i(), o.status)
  }
  async request(t, e) {
    let n;
    const s = Ee();
    if (s) {
      const o = new Headers(e == null ? void 0 : e.headers);
      o.set("x-alien-override", s.token), e = {
        ...e ?? {},
        headers: o
      }
    }
    try {
      n = await fetch(`${this.url}${t}`, e), this.online = !0
    } catch (o) {
      throw console.error("Fetch error:", o), this.online = !1, new Error(zr(), {
        cause: o
      })
    }
    if (n.status === a.TOO_MANY_REQUESTS) throw new Error(pe());
    if (n.status === a.SERVICE_UNAVAILABLE || n.status === a.REQUEST_TIMEOUT) throw new Error(pe());
    return n
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    const s = await n.json();
    return {
      items: s.items ?? [],
      globals: s.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const n = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return (await n.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return (await n.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
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
    if (e.status !== a.OK) throw new _(i(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new _(i(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new _(i(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const n = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      s = await this.request(n, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async getUserNotes(t, e) {
    const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      s = await this.request(n, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== a.OK) throw new _(i(), s.status);
    return s.json()
  }
  async addUserNote(t, e, n) {
    const s = n == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (o.status !== a.OK) throw new _(i(), o.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status);
    return e.json()
  }
  async setUserPermissions(t, e) {
    const n = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        permissions: Array.from(e)
      })
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status);
    const n = await e.json();
    return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(o => {
      const u = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
      let c;
      if (typeof u == "string") {
        const l = u.toLowerCase();
        c = l === "usd" || l === "dollar" || l === "true"
      } else typeof u == "number" ? c = u !== 0 : c = !!u;
      const d = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "";
      return {
        product_name: String(o.productName ?? o.product_name ?? ""),
        amount: Number(o.amount ?? 0),
        price: Number(o.price ?? 0),
        is_dollar: c,
        created_at: d,
        product_variant: Number(o.product_variant ?? o.productVariant ?? 0)
      }
    })
  }
  async postSetUserDroplets(t, e) {
    const n = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        droplets: e
      })
    });
    if (n.status !== a.OK) throw new _(i(), n.status)
  }
  async postAdminRenameUser(t, e, n) {
    const s = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: n
      })
    });
    if (s.status === a.BAD_REQUEST) {
      const o = await s.json(),
        u = (o == null ? void 0 : o.error) ?? "";
      throw u === "invalid_name" ? new _(fe(), a.BAD_REQUEST) : new _(typeof u == "string" && u ? u : i(), a.BAD_REQUEST)
    }
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const n = new URLSearchParams;
    n.set("userId", String(t.userId)), n.set("kind", String(t.kind)), n.set("page", String(t.page ?? 0)), n.set("pageSize", String(t.pageSize ?? 20)), e === "appeals" && n.set("appealId", String(t.appealId));
    const s = e === "appeals" ? `/staff/appeals/tickets?${n.toString()}` : `/staff/dashboard/users/tickets?${n.toString()}`,
      o = await this.request(s, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== a.OK) throw new _(i(), o.status);
    const u = await o.json(),
      c = Array.isArray(u == null ? void 0 : u.tickets) ? u.tickets : [];
    return c.sort((d, l) => new Date(l.createdAt).getTime() - new Date(d.createdAt).getTime()), c
  }
  async getModerationTranslate(t, e) {
    const n = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      s = await this.request(n, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (s.status !== a.OK) throw new _(i(), s.status);
    const o = await s.json();
    return o == null ? void 0 : o.translation
  }
  mapTicketsToReportRows(t, e) {
    var s, o, u, c, d;
    const n = [];
    for (const l of t) {
      const g = l.status ?? "open";
      if (e === "received") {
        for (const h of l.reports) n.push({
          id: String(h.id),
          ticketId: String(l.id),
          createdAt: h.createdAt ?? l.createdAt,
          byUser: {
            id: Number(h.reportedBy),
            name: String(h.reportedByName ?? h.reportedBy),
            picture: h.reportedByPicture ?? null
          },
          reason: String(h.reason),
          status: g
        });
        continue
      }
      if (e === "sent") {
        for (const h of l.reports) n.push({
          id: String(h.id),
          ticketId: String(l.id),
          createdAt: h.createdAt ?? l.createdAt,
          toUser: {
            id: Number(l.reportedUser.id),
            name: String(l.reportedUser.name),
            picture: l.reportedUser.picture ?? null
          },
          reason: String(h.reason),
          status: g
        });
        continue
      }
      n.push({
        id: String(l.id),
        ticketId: String(l.id),
        createdAt: l.createdAt,
        handledBy: l.status && l.status !== "open" ? {
          id: ((s = l.handledBy) == null ? void 0 : s.id) ?? 0,
          name: ((o = l.handledBy) == null ? void 0 : o.name) ?? "Moderator",
          picture: ((u = l.handledBy) == null ? void 0 : u.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((d = (c = l.reports) == null ? void 0 : c[0]) == null ? void 0 : d.reason) ?? "other"),
        status: g
      })
    }
    return n.sort((l, g) => new Date(g.createdAt).getTime() - new Date(l.createdAt).getTime()), n
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      n = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return n.json()
  }
  async postPawtectLoad() {
    const t = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: L_(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (t.status !== a.NO_CONTENT) throw new _(i(), t.status)
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.NO_CONTENT) throw new _(i(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async banUsers(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async timeoutUsers(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async incrementUsersDroplets(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new _(i(), s.status)
  }
  async postUnbanUsers(t, e) {
    const n = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (n.status !== a.OK) throw new _(i(), n.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return n.json()
  }
  async postUsersSuspend(t, e, n) {
    let s;
    switch (e) {
      case "dashboard":
        s = `/staff/dashboard/users/${n}`;
        break;
      case "select-area":
        s = `/staff/tools/select-area/${n}`;
        break;
      case "select-pixel":
      default:
        s = `/staff/tools/select-pixel/${n}`;
        break
    }
    if ((await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== a.OK) throw new Error(i())
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== a.OK) throw new _(i(), e.status);
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
    if (e.status !== a.OK && e.status !== a.ALREADY_REPORTED) throw new _(i(), e.status);
    return e.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async postSolveAppeal(t, e) {
    const n = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return await n.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const n = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      s = await this.request(n, {
        credentials: "include"
      });
    if (s.status !== a.OK) throw new _(i(), s.status);
    return s.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== a.OK) throw new _(i(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async getAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/see", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async postAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/execute", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async claimEventPixel(t) {
    const e = await this.request(`/event/christmas/claim/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status);
    return e.json()
  }
  async getEventStatus() {
    const t = await this.request("/staff/dashboard/summary/events/status", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async postEventStart(t, e, n, s) {
    const o = await this.request("/staff/dashboard/summary/events/start", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        eventName: t,
        quantity: e,
        startEventDate: n,
        endEventDate: s
      })
    });
    if (o.status !== a.OK) throw new _(i(), o.status);
    return o.json()
  }
  async postEventStop(t) {
    const e = await this.request("/staff/dashboard/summary/events/stop", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        event: t
      })
    });
    if (e.status !== a.OK) throw new _(i(), e.status);
    return e.json()
  }
  async getEventAnchors(t) {
    const e = await this.request(`/staff/dashboard/summary/events/anchors?event=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new Error("Falha ao buscar anchors do evento");
    return e.json()
  }
  async getChristmasCase() {
    const t = await this.request("/event/christmas/presents", {
      method: "GET",
      credentials: "include"
    });
    if (t.status === a.UNAUTHORIZED) throw new Error(ne());
    if (t.status !== a.OK) throw new Error(i());
    return t.json()
  }
  async postChristmasCaseOpen() {
    const t = await this.request("/event/christmas/open-case", {
      method: "POST",
      credentials: "include"
    });
    if (t.status === a.BAD_REQUEST) {
      const e = await t.json().catch(() => ({}));
      throw ((e == null ? void 0 : e.error) ?? "") === "no-presents" ? new Error("Você não tem presentes de Natal disponíveis.") : new Error((e == null ? void 0 : e.error) ?? i())
    } else {
      if (t.status === a.UNAUTHORIZED) throw new Error(ne());
      if (t.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(le());
      if (t.status === a.NOT_FOUND) return {
        rewardItemId: 5,
        remainingPresents: 2
      };
      if (t.status !== a.OK) throw new Error(i())
    }
    return t.json()
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= Date.now(),
      n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < el.length,
      s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= tl.tools.wayback.limit,
      o = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      u = t.cursorTs !== void 0,
      c = t.cursorUserId !== void 0,
      d = t.cursorAllianceId !== void 0,
      l = t.cursorPixelsCount !== void 0,
      g = u || c || d || l,
      h = u && c && d && l;
    let I = !0;
    return g && (I = h && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !s || !o || !e || !I)
  }
  getSafeWaybackInput(t) {
    return t.season = Math.trunc(t.season), t.limit = Math.trunc(t.limit), t.timestamp = Math.trunc(t.timestamp), t.tileX = Math.trunc(t.tileX), t.tileY = Math.trunc(t.tileY), t.cursorTs !== void 0 && (t.cursorTs = Math.trunc(t.cursorTs)), t.cursorUserId !== void 0 && (t.cursorUserId = Math.trunc(t.cursorUserId)), t.cursorAllianceId !== void 0 && (t.cursorAllianceId = Math.trunc(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && (t.cursorPixelsCount = Math.trunc(t.cursorPixelsCount)), t
  }
  async getWaybackEvents(t) {
    if (!this.validWaybackInput(t)) throw new Error("Invalid query params");
    t = this.getSafeWaybackInput(t);
    const e = new URLSearchParams;
    t.cursorTs !== void 0 && e.set("cursorTs", String(t.cursorTs)), t.cursorUserId !== void 0 && e.set("cursorUserId", String(t.cursorUserId)), t.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(t.cursorPixelsCount));
    const n = `/staff/tools/wayback/s${t.season}/l${t.limit}/x${t.tileX}/y${t.tileY}/t${t.timestamp}`,
      s = e.toString(),
      o = await this.request(s.length > 0 ? `${n}?${s}` : n, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === a.FORBIDDEN) throw new Error("Access denied");
    if (o.status !== a.OK) throw new Error("Failed to fetch wayback events");
    return o.json()
  }
  async getWaybackVideo(t, e) {
    const n = await this.request(`/staff/tools/wayback/s${t}/video?${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status === a.FORBIDDEN) throw new Error("Access denied");
    if (n.status !== a.OK) throw new Error("Failed to fetch wayback video");
    return n
  }
  async postWaybackReconstruct(t, e) {
    const n = await this.request(`/staff/tools/wayback/s${t}/reconstruct`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (n.status === a.FORBIDDEN) throw new Error("Access denied");
    if (n.status !== a.OK) throw new Error("Failed to reconstruct wayback data");
    return n
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) throw new Error(de());
    if (e.status === a.FORBIDDEN) throw new Error(he());
    if (e.status === a.CONFLICT) throw new Error(me());
    if (e.status !== a.OK) throw new Error(i())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new _(i(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return n.json()
  }
  async postCreateFrame(t) {
    const e = new FormData;
    e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
    const n = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (n.status !== a.OK) throw new _(i(), n.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async postCreateBadge(t) {
    const e = await this.request("/staff/dashboard/store-manager/badges", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
  async getR2Images(t) {
    const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      n = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return n.json()
  }
  async postUploadR2Image(t) {
    const e = new FormData;
    t.name && e.append("name", t.name), e.append("image", t.image);
    const n = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (n.status !== a.OK) throw new _(i(), n.status);
    return n.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new _(i(), e.status)
  }
}
Y = new WeakMap;

function al(r) {
  var I, P;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const T of r)
    if (T.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (I = ae.seasons) == null ? void 0 : I[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const d = r.map(T => {
      const v = Math.round(T.tile[0] * n + T.pixel[0]),
        N = Math.round(T.tile[1] * n + T.pixel[1]);
      return v < s && (s = v), N < o && (o = N), v > u && (u = v), N > c && (c = N), {
        x: v,
        y: N,
        colorIdx: T.colorIdx
      }
    }),
    l = u - s + 1,
    g = c - o + 1;
  if (!Number.isFinite(l) || !Number.isFinite(g) || l <= 0 || g <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const h = new Uint8ClampedArray(l * g * 4);
  for (const {
      x: T,
      y: v,
      colorIdx: N
    }
    of d) {
    const oe = (P = ae.colors) == null ? void 0 : P[N];
    if (!oe) throw new Error(`Unknown palette color index: ${N}`);
    const Se = T - s,
      Q = ((v - o) * l + Se) * 4,
      [ke, Pe, xe] = oe.rgb;
    h[Q] = ke, h[Q + 1] = Pe, h[Q + 2] = xe, h[Q + 3] = N === 0 ? 1 : 255
  }
  return {
    data: h,
    width: l,
    height: g,
    offsetX: s,
    offsetY: o,
    season: t
  }
}
async function sl(r) {
  const t = ol(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, o) => {
    t.toBlob(u => {
      if (!u) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(u)
    }, "image/png")
  })
}

function ol(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ee = new nl(we),
  se = !1,
  Re;

function Rl() {
  const r = Ne("2025-09_pawtect");
  if (!r) throw new Error("pawtect experiment not found on load");
  r.variant !== "disabled" && (se || k.data && ve(Ve).then(il).catch(t => {
    Re = t, qe(t)
  }))
}

function il() {
  P_(k.data.id), ee.postPawtectLoad();
  const r = fetch;
  Object.assign(window, {
    fetch: De((t, e) => {
      let n = null;
      return t instanceof Request ? n = t.url : n = t, n.startsWith("/") || U_(n), r.call(window, t, e)
    })
  }), se = !0
}

function cl(r) {
  if (Re) throw new Error(Ac());
  if (!se) throw new Error("Try again in a few seconds or reload the page.");
  return B_(r)
}

function De(r) {
  return r.bind().bind()
}

function Dl(r, t, e) {
  const n = {
    [r.name](...s) {
      return e(...s), t(...s)
    }
  } [r.name];
  return De(n)
}
export {
  Gi as $, Tl as A, le as B, Ae as C, gt as D, St as E, Gt as F, hr as G, Rr as H, zr as I, de as J, fn as K, qn as L, k_ as M, ja as N, Qa as O, vl as P, fe as Q, Es as R, Il as S, Us as T, R as U, so as V, Po as W, Co as X, ai as Y, gi as Z, Si as _, ee as a, Ac as a0, me as a1, Xc as a2, D as a3, he as a4, Lu as a5, ne as a6, pe as a7, El as b, rr as c, Nn as d, i as e, ae as f, Xn as g, la as h, va as i, yl as j, E as k, hl as l, yo as m, pl as n, wl as o, Rl as p, Dl as q, Nl as r, Ol as s, ye as t, k as u, rc as v, bl as w, gl as x, w_ as y, Al as z
};