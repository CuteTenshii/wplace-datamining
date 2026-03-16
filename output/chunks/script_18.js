var Le = Object.defineProperty;
var ie = r => {
  throw TypeError(r)
};
var je = (r, t, e) => t in r ? Le(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var p = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e),
  Be = (r, t, e) => t.has(r) || ie("Cannot " + e);
var m = (r, t, e) => (Be(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  g = (r, t, e) => t.has(r) ? ie("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  g as d
} from "./DawG3Hoa.js";
import {
  e as R,
  g as ce,
  i as w,
  h as O,
  G as ue,
  u as U
} from "./G_TaGb8Z.js";
import {
  P as we,
  g as Me
} from "./jQT47AAc.js";
import {
  s as qe,
  c as Ke
} from "./CokRbG7R.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "04140c62-6405-4f29-93e8-d83979acbed6", r._sentryDebugIdIdentifier = "sentry-dbid-04140c62-6405-4f29-93e8-d83979acbed6")
  } catch {}
})();

function Dl(...r) {
  return r.filter(Boolean).join(" ")
}
const ze = typeof document < "u";
let _e = 0;
var M, q, K;
class Fe {
  constructor() {
    g(this, M, R(ce([])));
    g(this, q, R(ce([])));
    g(this, K, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    p(this, "addToast", t => {
      ze && this.toasts.unshift(t)
    });
    p(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: s
    }) => {
      const o = this.toasts.findIndex(c => c.id === t),
        _ = this.toasts[o];
      this.toasts[o] = {
        ..._,
        ...e,
        id: t,
        title: s,
        type: n,
        updated: !0
      }
    });
    p(this, "create", t => {
      var c;
      const {
        message: e,
        ...n
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : _e++, o = t.dismissable === void 0 ? !0 : t.dismissable, _ = t.type === void 0 ? "default" : t.type;
      return ue(() => {
        this.toasts.find(f => f.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: _,
          message: e,
          dismissable: o
        }) : this.addToast({
          ...n,
          id: s,
          title: e,
          dismissable: o,
          type: _
        })
      }), s
    });
    p(this, "dismiss", t => (ue(() => {
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
    p(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = m(this, K).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    p(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    p(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    p(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    p(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    p(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    p(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    p(this, "promise", (t, e) => {
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
      return s.then(_ => {
        if (typeof _ == "object" && _ && "ok" in _ && typeof _.ok == "boolean" && !_.ok) {
          o = !1;
          const c = Ge(_);
          this.create({
            id: n,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          o = !1;
          const c = typeof e.success == "function" ? e.success(_) : e.success;
          this.create({
            id: n,
            type: "success",
            message: c
          })
        }
      }).catch(_ => {
        if (e.error !== void 0) {
          o = !1;
          const c = typeof e.error == "function" ? e.error(_) : e.error;
          this.create({
            id: n,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var _;
        o && (this.dismiss(n), n = void 0), (_ = e.finally) == null || _.call(e)
      }), n
    });
    p(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || _e++;
      return this.create({
        component: t,
        id: n,
        ...e
      }), n
    });
    p(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    p(this, "setHeight", t => {
      const e = m(this, K).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    p(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return w(m(this, M))
  }
  set toasts(t) {
    O(m(this, M), t, !0)
  }
  get heights() {
    return w(m(this, q))
  }
  set heights(t) {
    O(m(this, q), t, !0)
  }
}
M = new WeakMap, q = new WeakMap, K = new WeakMap;

function Ge(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const E = new Fe;

function $e(r, t) {
  return E.create({
    message: r,
    ...t
  })
}
var re;
class Sl {
  constructor() {
    g(this, re, U(() => E.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return w(m(this, re))
  }
}
re = new WeakMap;
const Ce = $e,
  ye = Object.assign(Ce, {
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
let be = R(void 0);
const Ee = () => w(be),
  kl = r => {
    const t = new URL(r, we),
      e = Ee();
    return e && t.searchParams.set("override", e.token), t.toString()
  };

function xl() {
  try {
    Ve()
  } catch (r) {
    console.error("failed to load override", r)
  }
}

function Ve() {
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
const He = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  We = () => "Your account has been suspended for breaking the rules",
  Ye = () => "Sua conta foi suspensa por quebrar as regras",
  Je = () => "您的账号因违反规则已被暂停",
  Qe = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Xe = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Ze = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  et = () => "Il tuo account è stato sospeso per aver infranto le regole",
  tt = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  rt = () => "Twoje konto zostało zawieszone za łamanie zasad",
  nt = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  at = () => "Ваш обліковий запис було призупинено за порушення правил",
  st = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  le = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? We() : e === "pt" ? Ye() : e === "ch" ? Je() : e === "de" ? Qe() : e === "es" ? Xe() : e === "fr" ? Ze() : e === "it" ? et() : e === "jp" ? tt() : e === "pl" ? rt() : e === "ru" ? nt() : e === "uk" ? at() : st()
  },
  ot = () => "Alliance name already taken",
  it = () => "Já possui uma aliança com esse nome",
  ct = () => "该联盟名称已被占用",
  ut = () => "Der Allianzname ist bereits vergeben",
  _t = () => "Ese nombre de alianza ya está en uso",
  lt = () => "Ce nom d’alliance est déjà pris",
  dt = () => "Esiste già un'alleanza con questo nome",
  ft = () => "このアライアンス名は既に使用されています。",
  mt = () => "Nazwa sojuszu jest już zajęta",
  ht = () => "Такое название альянса уже используется",
  pt = () => "Назва альянсу вже зайнята",
  gt = () => "Tên liên minh đã được sử dụng",
  wt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ot() : e === "pt" ? it() : e === "ch" ? ct() : e === "de" ? ut() : e === "es" ? _t() : e === "fr" ? lt() : e === "it" ? dt() : e === "jp" ? ft() : e === "pl" ? mt() : e === "ru" ? ht() : e === "uk" ? pt() : gt()
  },
  yt = () => "Alliance name exceeded the maximum number of characters",
  bt = () => "O nome da aliança excedeu o número máximo de caracteres",
  Et = () => "联盟名称超过最大字符数限制",
  Ot = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Tt = () => "El nombre de la alianza superó el número máximo de caracteres",
  vt = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  It = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Nt = () => "アライアンス名が最大文字数を超えています。",
  Rt = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  At = () => "Название альянса превышает максимальную длину",
  Dt = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  St = () => "Tên liên minh vượt quá số ký tự cho phép",
  kt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yt() : e === "pt" ? bt() : e === "ch" ? Et() : e === "de" ? Ot() : e === "es" ? Tt() : e === "fr" ? vt() : e === "it" ? It() : e === "jp" ? Nt() : e === "pl" ? Rt() : e === "ru" ? At() : e === "uk" ? Dt() : St()
  },
  xt = () => "Alliance with empty name",
  Pt = () => "Aliança com nome vazio",
  Ut = () => "名称为空的联盟",
  Lt = () => "Allianz mit leerem Namen",
  jt = () => "Alianza con nombre vacío",
  Bt = () => "Alliance avec nom vide",
  Mt = () => "Alleanza con nome vuoto",
  qt = () => "名前が空のアライアンスです。",
  Kt = () => "Sojusz z pustą nazwą",
  zt = () => "Альянс с пустым названием",
  Ft = () => "Альянс із порожньою назвою",
  Gt = () => "Liên minh không có tên",
  $t = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xt() : e === "pt" ? Pt() : e === "ch" ? Ut() : e === "de" ? Lt() : e === "es" ? jt() : e === "fr" ? Bt() : e === "it" ? Mt() : e === "jp" ? qt() : e === "pl" ? Kt() : e === "ru" ? zt() : e === "uk" ? Ft() : Gt()
  },
  Ct = () => "Botting",
  Vt = () => "Uso de bots",
  Ht = () => "脚本",
  Wt = () => "Bot-Nutzung",
  Yt = () => "Botting",
  Jt = () => "Bots",
  Qt = () => "Uso di bot",
  Xt = () => "ボット使用",
  Zt = () => "Botting",
  er = () => "Боттинг",
  tr = () => "Боти",
  rr = () => "Botting",
  nr = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ct() : e === "pt" ? Vt() : e === "ch" ? Ht() : e === "de" ? Wt() : e === "es" ? Yt() : e === "fr" ? Jt() : e === "it" ? Qt() : e === "jp" ? Xt() : e === "pl" ? Zt() : e === "ru" ? er() : e === "uk" ? tr() : rr()
  },
  ar = () => "Breaking the rules",
  sr = () => "Quebrar as regras",
  or = () => "违反规则",
  ir = () => "Regeln brechen",
  cr = () => "Romper las reglas",
  ur = () => "Violation des règles",
  _r = () => "Violazione delle regole",
  lr = () => "ルール違反",
  dr = () => "Łamanie zasad",
  fr = () => "Нарушение правил",
  mr = () => "Порушення правил",
  hr = () => "Vi phạm luật",
  pr = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ar() : e === "pt" ? sr() : e === "ch" ? or() : e === "de" ? ir() : e === "es" ? cr() : e === "fr" ? ur() : e === "it" ? _r() : e === "jp" ? lr() : e === "pl" ? dr() : e === "ru" ? fr() : e === "uk" ? mr() : hr()
  },
  gr = () => "You cannot paint over event pixels",
  wr = () => "Você não pode pintar sobre pixels de eventos",
  yr = () => "你不能覆盖活动像素",
  br = () => "Du kannst nicht über Event-Pixel malen",
  Er = () => "No puedes pintar sobre píxeles de evento",
  Or = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Tr = () => "Non puoi dipingere sopra i pixel dell'evento",
  vr = () => "イベント用のピクセルの上には塗れません。",
  Ir = () => "Nie możesz malować po pikselach wydarzenia",
  Nr = () => "Вы не можете рисовать по пикселям события",
  Rr = () => "Ви не можете малювати поверх пікселів події",
  Ar = () => "Bạn không thể tô lên pixel sự kiện",
  Dr = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gr() : e === "pt" ? wr() : e === "ch" ? yr() : e === "de" ? br() : e === "es" ? Er() : e === "fr" ? Or() : e === "it" ? Tr() : e === "jp" ? vr() : e === "pl" ? Ir() : e === "ru" ? Nr() : e === "uk" ? Rr() : Ar()
  },
  Sr = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  kr = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  xr = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Pr = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Ur = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Lr = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  jr = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Br = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Mr = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  qr = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Kr = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  zr = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Fr = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Sr() : e === "pt" ? kr() : e === "ch" ? xr() : e === "de" ? Pr() : e === "es" ? Ur() : e === "fr" ? Lr() : e === "it" ? jr() : e === "jp" ? Br() : e === "pl" ? Mr() : e === "ru" ? qr() : e === "uk" ? Kr() : zr()
  },
  Gr = () => "Couldn't complete the purchase. This item does not exist.",
  $r = () => "Não foi possível concluir a compra. Este item não existe.",
  Cr = () => "无法完成购买。该物品不存在。",
  Vr = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Hr = () => "No se pudo completar la compra. Este ítem no existe.",
  Wr = () => "Achat impossible. Cet objet n’existe pas.",
  Yr = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Jr = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Qr = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Xr = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Zr = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  en = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  de = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Gr() : e === "pt" ? $r() : e === "ch" ? Cr() : e === "de" ? Vr() : e === "es" ? Hr() : e === "fr" ? Wr() : e === "it" ? Yr() : e === "jp" ? Jr() : e === "pl" ? Qr() : e === "ru" ? Xr() : e === "uk" ? Zr() : en()
  },
  tn = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  rn = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  nn = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  an = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  sn = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  on = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  cn = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  un = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  _n = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  ln = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  dn = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  fn = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  mn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? tn() : e === "pt" ? rn() : e === "ch" ? nn() : e === "de" ? an() : e === "es" ? sn() : e === "fr" ? on() : e === "it" ? cn() : e === "jp" ? un() : e === "pl" ? _n() : e === "ru" ? ln() : e === "uk" ? dn() : fn()
  },
  hn = () => "Doxxing",
  pn = () => "Doxxing",
  gn = () => "人肉搜索",
  wn = () => "Doxxing",
  yn = () => "Doxxing",
  bn = () => "Doxxing",
  En = () => "Doxxing",
  On = () => "ドックス（Doxxing）",
  Tn = () => "Doxxing",
  vn = () => "Докcинг",
  In = () => "Докcинг",
  Nn = () => "Doxxing",
  Rn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hn() : e === "pt" ? pn() : e === "ch" ? gn() : e === "de" ? wn() : e === "es" ? yn() : e === "fr" ? bn() : e === "it" ? En() : e === "jp" ? On() : e === "pl" ? Tn() : e === "ru" ? vn() : e === "uk" ? In() : Nn()
  },
  An = r => `Error while painting: ${r.err}`,
  Dn = r => `Erro enquanto pinta: ${r.err}`,
  Sn = r => `绘制时出错：${r.err}`,
  kn = r => `Fehler beim Malen: ${r.err}`,
  xn = r => `Error al pintar: ${r.err}`,
  Pn = r => `Erreur lors de la peinture : ${r.err}`,
  Un = r => `Errore durante la pittura: ${r.err}`,
  Ln = r => `ペイント中にエラーが発生しました: ${r.err}`,
  jn = r => `Błąd podczas malowania: ${r.err}`,
  Bn = r => `Ошибка при рисовании: ${r.err}`,
  Mn = r => `Помилка під час малювання: ${r.err}`,
  qn = r => `Lỗi khi tô: ${r.err}`,
  Kn = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? An(r) : e === "pt" ? Dn(r) : e === "ch" ? Sn(r) : e === "de" ? kn(r) : e === "es" ? xn(r) : e === "fr" ? Pn(r) : e === "it" ? Un(r) : e === "jp" ? Ln(r) : e === "pl" ? jn(r) : e === "ru" ? Bn(r) : e === "uk" ? Mn(r) : qn(r)
  },
  zn = () => "Griefing",
  Fn = () => "Griefing",
  Gn = () => "破坏行为",
  $n = () => "Griefing",
  Cn = () => "Griefing",
  Vn = () => "Griefing",
  Hn = () => "Griefing",
  Wn = () => "グリーフィング",
  Yn = () => "Griefing",
  Jn = () => "Гриферство",
  Qn = () => "Гріфінг",
  Xn = () => "Griefing",
  Zn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? zn() : e === "pt" ? Fn() : e === "ch" ? Gn() : e === "de" ? $n() : e === "es" ? Cn() : e === "fr" ? Vn() : e === "it" ? Hn() : e === "jp" ? Wn() : e === "pl" ? Yn() : e === "ru" ? Jn() : e === "uk" ? Qn() : Xn()
  },
  ea = () => "Hate speech",
  ta = () => "Discurso de Ódio",
  ra = () => "仇恨言论",
  na = () => "Hassrede",
  aa = () => "Discurso de odio",
  sa = () => "Discours haineux",
  oa = () => "Discorso d'odio",
  ia = () => "ヘイトスピーチ",
  ca = () => "Mowa nienawiści",
  ua = () => "Речь ненависти",
  _a = () => "Мова ворожнечі",
  la = () => "Ngôn từ thù hằn",
  da = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ea() : e === "pt" ? ta() : e === "ch" ? ra() : e === "de" ? na() : e === "es" ? aa() : e === "fr" ? sa() : e === "it" ? oa() : e === "jp" ? ia() : e === "pl" ? ca() : e === "ru" ? ua() : e === "uk" ? _a() : la()
  },
  fa = () => "Inappropriate content",
  ma = () => "Conteúdo inapropriado",
  ha = () => "不当内容",
  pa = () => "Unangemessene Inhalte",
  ga = () => "Contenido inapropiado",
  wa = () => "Contenu inapproprié",
  ya = () => "Contenuto inappropriato",
  ba = () => "不適切なコンテンツ",
  Ea = () => "Nieodpowiednie treści",
  Oa = () => "Неприемлемый контент",
  Ta = () => "Неприйнятний вміст",
  va = () => "Nội dung không phù hợp",
  Ia = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fa() : e === "pt" ? ma() : e === "ch" ? ha() : e === "de" ? pa() : e === "es" ? ga() : e === "fr" ? wa() : e === "it" ? ya() : e === "jp" ? ba() : e === "pl" ? Ea() : e === "ru" ? Oa() : e === "uk" ? Ta() : va()
  },
  Na = () => "Invalid code",
  Ra = () => "Código inválido",
  Aa = () => "验证码无效",
  Da = () => "Ungültiger Code",
  Sa = () => "Código inválido",
  ka = () => "Code invalide",
  xa = () => "Codice non valido",
  Pa = () => "無効なコードです。",
  Ua = () => "Nieprawidłowy kod",
  La = () => "Неверный код",
  ja = () => "Невірний код",
  Ba = () => "Mã không hợp lệ",
  Ma = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Na() : e === "pt" ? Ra() : e === "ch" ? Aa() : e === "de" ? Da() : e === "es" ? Sa() : e === "fr" ? ka() : e === "it" ? xa() : e === "jp" ? Pa() : e === "pl" ? Ua() : e === "ru" ? La() : e === "uk" ? ja() : Ba()
  },
  qa = () => "Verification code expired. Please request a new one.",
  Ka = () => "Código de verificação expirado. Por favor, solicite um novo.",
  za = () => "验证码已过期，请重新获取。",
  Fa = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  Ga = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  $a = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Ca = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  Va = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  Ha = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  Wa = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Ya = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Ja = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Qa = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qa() : e === "pt" ? Ka() : e === "ch" ? za() : e === "de" ? Fa() : e === "es" ? Ga() : e === "fr" ? $a() : e === "it" ? Ca() : e === "jp" ? Va() : e === "pl" ? Ha() : e === "ru" ? Wa() : e === "uk" ? Ya() : Ja()
  },
  Xa = () => "Invalid discord.",
  Za = () => "Discord inválido.",
  es = () => "无效的 Discord。",
  ts = () => "Ungültiger Discord.",
  rs = () => "Discord inválido.",
  ns = () => "Discord invalide.",
  as = () => "Discord non valido.",
  ss = () => "無効なDiscordアカウントです。",
  os = () => "Nieprawidłowy Discord.",
  is = () => "Неверный Discord.",
  cs = () => "Некоректний Discord.",
  us = () => "Discord không hợp lệ.",
  _s = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Xa() : e === "pt" ? Za() : e === "ch" ? es() : e === "de" ? ts() : e === "es" ? rs() : e === "fr" ? ns() : e === "it" ? as() : e === "jp" ? ss() : e === "pl" ? os() : e === "ru" ? is() : e === "uk" ? cs() : us()
  },
  ls = () => "The name contains disallowed characters or words. Please choose a different name.",
  ds = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  fs = () => "名称包含禁止的字符或词语，请选择其他名称。",
  ms = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  hs = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  ps = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  gs = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  ws = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  ys = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  bs = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Es = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Os = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  fe = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ls() : e === "pt" ? ds() : e === "ch" ? fs() : e === "de" ? ms() : e === "es" ? hs() : e === "fr" ? ps() : e === "it" ? gs() : e === "jp" ? ws() : e === "pl" ? ys() : e === "ru" ? bs() : e === "uk" ? Es() : Os()
  },
  Ts = () => "Invalid phone number",
  vs = () => "Número de telefone inválido",
  Is = () => "无效的电话号码",
  Ns = () => "Ungültige Telefonnummer",
  Rs = () => "Número de teléfono inválido",
  As = () => "Numéro de téléphone invalide",
  Ds = () => "Numero di telefono non valido",
  Ss = () => "無効な電話番号です。",
  ks = () => "Nieprawidłowy numer telefonu",
  xs = () => "Неверный номер телефона",
  Ps = () => "Некоректний номер телефону",
  Us = () => "Số điện thoại không hợp lệ",
  Ls = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ts() : e === "pt" ? vs() : e === "ch" ? Is() : e === "de" ? Ns() : e === "es" ? Rs() : e === "fr" ? As() : e === "it" ? Ds() : e === "jp" ? Ss() : e === "pl" ? ks() : e === "ru" ? xs() : e === "uk" ? Ps() : Us()
  },
  js = () => "The new leader must be a member of the alliance",
  Bs = () => "O novo líder deve ser um membro da aliança",
  Ms = () => "新盟主必须是联盟成员",
  qs = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Ks = () => "El nuevo líder debe ser miembro de la alianza",
  zs = () => "Le nouveau chef doit être membre de l’alliance",
  Fs = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Gs = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  $s = () => "Nowy lider musi być członkiem sojuszu",
  Cs = () => "Новый лидер должен быть участником альянса",
  Vs = () => "Новий лідер має бути учасником альянсу",
  Hs = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Ws = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? js() : e === "pt" ? Bs() : e === "ch" ? Ms() : e === "de" ? qs() : e === "es" ? Ks() : e === "fr" ? zs() : e === "it" ? Fs() : e === "jp" ? Gs() : e === "pl" ? $s() : e === "ru" ? Cs() : e === "uk" ? Vs() : Hs()
  },
  Ys = () => "Leaderboard is temporarily disabled",
  Js = () => "O ranking está temporariamente desativado",
  Qs = () => "排行榜已暂时停用",
  Xs = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Zs = () => "La clasificación está deshabilitada temporalmente",
  eo = () => "Le classement est temporairement désactivé",
  to = () => "La classifica è temporaneamente disattivata",
  ro = () => "ランキングは一時的に無効になっています。",
  no = () => "Ranking jest tymczasowo wyłączony",
  ao = () => "Таблица лидеров временно отключена",
  so = () => "Таблиця лідерів тимчасово вимкнена",
  oo = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  A = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ys() : e === "pt" ? Js() : e === "ch" ? Qs() : e === "de" ? Xs() : e === "es" ? Zs() : e === "fr" ? eo() : e === "it" ? to() : e === "jp" ? ro() : e === "pl" ? no() : e === "ru" ? ao() : e === "uk" ? so() : oo()
  },
  io = () => "Location name is too big (max. 128 characters)",
  co = () => "Nome da localização é grande demais (max. 128 caracteres)",
  uo = () => "位置名称过长（最大 128 个字符）",
  _o = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  lo = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  fo = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  mo = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  ho = () => "場所の名前が長すぎます（最大128文字）。",
  po = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  go = () => "Название локации слишком длинное (макс. 128 символов)",
  wo = () => "Назва локації надто довга (макс. 128 символів)",
  yo = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  bo = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? io() : e === "pt" ? co() : e === "ch" ? uo() : e === "de" ? _o() : e === "es" ? lo() : e === "fr" ? fo() : e === "it" ? mo() : e === "jp" ? ho() : e === "pl" ? po() : e === "ru" ? go() : e === "uk" ? wo() : yo()
  },
  Eo = () => "Multi-accounting",
  Oo = () => "Múltiplas contas",
  To = () => "多账号",
  vo = () => "Multi-Accounting",
  Io = () => "Multi-cuentas",
  No = () => "Multi-comptes",
  Ro = () => "Multi-account",
  Ao = () => "複数アカウント使用",
  Do = () => "Multi-konta",
  So = () => "Мультиаккаунт",
  ko = () => "Мультиакаунтинг",
  xo = () => "Nhiều tài khoản",
  Po = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Eo() : e === "pt" ? Oo() : e === "ch" ? To() : e === "de" ? vo() : e === "es" ? Io() : e === "fr" ? No() : e === "it" ? Ro() : e === "jp" ? Ao() : e === "pl" ? Do() : e === "ru" ? So() : e === "uk" ? ko() : xo()
  },
  Uo = r => `You can change your name again in ${r.days} days`,
  Lo = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  jo = r => `你可以在 ${r.days} 天后再次修改名称`,
  Bo = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  Mo = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  qo = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  Ko = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  zo = r => `${r.days}日後に再び名前を変更できます。`,
  Fo = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  Go = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  $o = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  Co = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Vo = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Uo(r) : e === "pt" ? Lo(r) : e === "ch" ? jo(r) : e === "de" ? Bo(r) : e === "es" ? Mo(r) : e === "fr" ? qo(r) : e === "it" ? Ko(r) : e === "jp" ? zo(r) : e === "pl" ? Fo(r) : e === "ru" ? Go(r) : e === "uk" ? $o(r) : Co(r)
  },
  Ho = () => "No internet access or the servers are offline. Try again later.",
  Wo = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Yo = () => "没有网络连接或服务器已离线。请稍后重试。",
  Jo = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Qo = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Xo = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Zo = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  ei = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  ti = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  ri = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  ni = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  ai = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  si = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ho() : e === "pt" ? Wo() : e === "ch" ? Yo() : e === "de" ? Jo() : e === "es" ? Qo() : e === "fr" ? Xo() : e === "it" ? Zo() : e === "jp" ? ei() : e === "pl" ? ti() : e === "ru" ? ri() : e === "uk" ? ni() : ai()
  },
  oi = () => "Operation not allowed. Maybe you have too many favorite locations.",
  ii = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  ci = () => "操作不被允许。你的收藏位置可能过多。",
  ui = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  _i = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  li = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  di = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  fi = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  mi = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  hi = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  pi = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  gi = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  wi = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? oi() : e === "pt" ? ii() : e === "ch" ? ci() : e === "de" ? ui() : e === "es" ? _i() : e === "fr" ? li() : e === "it" ? di() : e === "jp" ? fi() : e === "pl" ? mi() : e === "ru" ? hi() : e === "uk" ? pi() : gi()
  },
  yi = () => "You are trying to paint with a color you do not own",
  bi = () => "Você está tentando pintar com uma cor que não possui",
  Ei = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Oi = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Ti = () => "Estás intentando pintar con un color que no posees",
  vi = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Ii = () => "Stai cercando di dipingere con un colore che non possiedi",
  Ni = () => "所持していない色で塗ろうとしています。",
  Ri = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Ai = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Di = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Si = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  ki = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yi() : e === "pt" ? bi() : e === "ch" ? Ei() : e === "de" ? Oi() : e === "es" ? Ti() : e === "fr" ? vi() : e === "it" ? Ii() : e === "jp" ? Ni() : e === "pl" ? Ri() : e === "ru" ? Ai() : e === "uk" ? Di() : Si()
  },
  xi = () => "Phone already used",
  Pi = () => "Telefone já usado",
  Ui = () => "电话号码已被使用",
  Li = () => "Telefonnummer bereits verwendet",
  ji = () => "Teléfono ya utilizado",
  Bi = () => "Téléphone déjà utilisé",
  Mi = () => "Telefono già utilizzato",
  qi = () => "この電話番号は既に使用されています。",
  Ki = () => "Numer telefonu jest już używany",
  zi = () => "Телефон уже используется",
  Fi = () => "Номер телефону вже використовується",
  Gi = () => "Số điện thoại đã được sử dụng",
  $i = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xi() : e === "pt" ? Pi() : e === "ch" ? Ui() : e === "de" ? Li() : e === "es" ? ji() : e === "fr" ? Bi() : e === "it" ? Mi() : e === "jp" ? qi() : e === "pl" ? Ki() : e === "ru" ? zi() : e === "uk" ? Fi() : Gi()
  },
  Ci = () => "Refresh your page to get the latest update",
  Vi = () => "Recarregue sua página para obter as últimas atualizações",
  Hi = () => "刷新页面以获取最新更新",
  Wi = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Yi = () => "Actualiza la página para obtener la última versión",
  Ji = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Qi = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Xi = () => "最新の状態にするにはページを再読み込みしてください。",
  Zi = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  ec = () => "Обновите страницу, чтобы получить последние изменения",
  tc = () => "Оновіть сторінку, щоб отримати останні оновлення",
  rc = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  nc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ci() : e === "pt" ? Vi() : e === "ch" ? Hi() : e === "de" ? Wi() : e === "es" ? Yi() : e === "fr" ? Ji() : e === "it" ? Qi() : e === "jp" ? Xi() : e === "pl" ? Zi() : e === "ru" ? ec() : e === "uk" ? tc() : rc()
  },
  ac = () => "The typed username does not match your current username.",
  sc = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  oc = () => "输入的用户名与当前用户名不匹配。",
  ic = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  cc = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  uc = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  _c = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  lc = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  dc = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  fc = () => "Введённое имя пользователя не совпадает с текущим.",
  mc = () => "Введене імʼя користувача не збігається з поточним.",
  hc = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  pc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ac() : e === "pt" ? sc() : e === "ch" ? oc() : e === "de" ? ic() : e === "es" ? cc() : e === "fr" ? uc() : e === "it" ? _c() : e === "jp" ? lc() : e === "pl" ? dc() : e === "ru" ? fc() : e === "uk" ? mc() : hc()
  },
  gc = () => "Unexpected server error. Try again later.",
  wc = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  yc = () => "服务器出现意外错误。请稍后再试。",
  bc = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Ec = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Oc = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Tc = () => "Errore imprevisto del server. Riprova più tardi.",
  vc = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Ic = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Nc = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Rc = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Ac = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  i = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gc() : e === "pt" ? wc() : e === "ch" ? yc() : e === "de" ? bc() : e === "es" ? Ec() : e === "fr" ? Oc() : e === "it" ? Tc() : e === "jp" ? vc() : e === "pl" ? Ic() : e === "ru" ? Nc() : e === "uk" ? Rc() : Ac()
  },
  Dc = () => "Failed to load WebAssembly module. Try to use another browser.",
  Sc = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  kc = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  xc = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Pc = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Uc = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Lc = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  jc = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Bc = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  Mc = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  qc = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Kc = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  zc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Dc() : e === "pt" ? Sc() : e === "ch" ? kc() : e === "de" ? xc() : e === "es" ? Pc() : e === "fr" ? Uc() : e === "it" ? Lc() : e === "jp" ? jc() : e === "pl" ? Bc() : e === "ru" ? Mc() : e === "uk" ? qc() : Kc()
  },
  Fc = () => "You already have this item. Please refresh the page.",
  Gc = () => "Você já possui este item. Atualize a página.",
  $c = () => "你已经拥有此物品。请刷新页面。",
  Cc = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Vc = () => "Ya tienes este ítem. Actualiza la página.",
  Hc = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Wc = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Yc = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Jc = () => "Masz już ten przedmiot. Odśwież stronę.",
  Qc = () => "У вас уже есть этот предмет. Обновите страницу.",
  Xc = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Zc = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  me = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fc() : e === "pt" ? Gc() : e === "ch" ? $c() : e === "de" ? Cc() : e === "es" ? Vc() : e === "fr" ? Hc() : e === "it" ? Wc() : e === "jp" ? Yc() : e === "pl" ? Jc() : e === "ru" ? Qc() : e === "uk" ? Xc() : Zc()
  },
  eu = () => "You are already in an alliance",
  tu = () => "Você já está em uma aliança",
  ru = () => "你已经在一个联盟中",
  nu = () => "Du bist bereits in einer Allianz",
  au = () => "Ya estás en una alianza",
  su = () => "Vous êtes déjà dans une alliance",
  ou = () => "Sei già in un'alleanza",
  iu = () => "すでにアライアンスに所属しています。",
  cu = () => "Jesteś już w sojuszu",
  uu = () => "Вы уже состоите в альянсе",
  _u = () => "Ви вже перебуваєте в альянсі",
  lu = () => "Bạn đã ở trong một liên minh",
  du = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? eu() : e === "pt" ? tu() : e === "ch" ? ru() : e === "de" ? nu() : e === "es" ? au() : e === "fr" ? su() : e === "it" ? ou() : e === "jp" ? iu() : e === "pl" ? cu() : e === "ru" ? uu() : e === "uk" ? _u() : lu()
  },
  fu = () => "You are not allowed to do this",
  mu = () => "Você não tem permissão para fazer isso",
  hu = () => "你无权执行此操作",
  pu = () => "Du bist dazu nicht berechtigt",
  gu = () => "No tienes permiso para hacer esto",
  wu = () => "Vous n’êtes pas autorisé à faire cela",
  yu = () => "Non hai il permesso di farlo",
  bu = () => "この操作を行う権限がありません。",
  Eu = () => "Nie masz uprawnień, aby to zrobić",
  Ou = () => "У вас нет прав для этого действия",
  Tu = () => "Ви не маєте права це робити",
  vu = () => "Bạn không có quyền làm việc này",
  D = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fu() : e === "pt" ? mu() : e === "ch" ? hu() : e === "de" ? pu() : e === "es" ? gu() : e === "fr" ? wu() : e === "it" ? yu() : e === "jp" ? bu() : e === "pl" ? Eu() : e === "ru" ? Ou() : e === "uk" ? Tu() : vu()
  },
  Iu = () => "You do not have enough Droplets to buy this item.",
  Nu = () => "Você não tem gotas suficientes para comprar este item.",
  Ru = () => "你的水滴不足，无法购买此物品。",
  Au = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Du = () => "No tienes suficientes gotas para comprar este ítem.",
  Su = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  ku = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  xu = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  Pu = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  Uu = () => "У вас недостаточно droplets для покупки этого предмета.",
  Lu = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  ju = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  he = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Iu() : e === "pt" ? Nu() : e === "ch" ? Ru() : e === "de" ? Au() : e === "es" ? Du() : e === "fr" ? Su() : e === "it" ? ku() : e === "jp" ? xu() : e === "pl" ? Pu() : e === "ru" ? Uu() : e === "uk" ? Lu() : ju()
  },
  Bu = () => "You have to wait to resend a code",
  Mu = () => "Você tem de esperar para reenviar um código",
  qu = () => "你需要等待一段时间才能重新发送验证码",
  Ku = () => "Du musst warten, bevor du einen Code erneut senden kannst",
  zu = () => "Tienes que esperar para reenviar un código",
  Fu = () => "Vous devez attendre avant de renvoyer un code",
  Gu = () => "Devi aspettare per reinviare un codice",
  $u = () => "コードを再送信するまでしばらくお待ちください。",
  Cu = () => "Musisz poczekać, zanim wyślesz kod ponownie",
  Vu = () => "Вам нужно подождать, прежде чем отправить код ещё раз",
  Hu = () => "Перш ніж повторно надіслати код, потрібно почекати",
  Wu = () => "Bạn phải chờ trước khi gửi lại mã",
  Yu = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Bu() : e === "pt" ? Mu() : e === "ch" ? qu() : e === "de" ? Ku() : e === "es" ? zu() : e === "fr" ? Fu() : e === "it" ? Gu() : e === "jp" ? $u() : e === "pl" ? Cu() : e === "ru" ? Vu() : e === "uk" ? Hu() : Wu()
  },
  Ju = () => "You need to be logged in to paint",
  Qu = () => "Você precisa estar conectado para pintar",
  Xu = () => "你需要登录才能进行绘制",
  Zu = () => "Du musst eingeloggt sein, um zu malen",
  e_ = () => "Debes iniciar sesión para pintar",
  t_ = () => "Vous devez être connecté pour peindre",
  r_ = () => "Devi avere effettuato l'accesso per dipingere",
  n_ = () => "ペイントするにはログインが必要です。",
  a_ = () => "Musisz być zalogowany, aby malować",
  s_ = () => "Чтобы рисовать, нужно войти в аккаунт",
  o_ = () => "Щоб малювати, необхідно увійти в акаунт",
  i_ = () => "Bạn cần đăng nhập để tô",
  ne = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ju() : e === "pt" ? Qu() : e === "ch" ? Xu() : e === "de" ? Zu() : e === "es" ? e_() : e === "fr" ? t_() : e === "it" ? r_() : e === "jp" ? n_() : e === "pl" ? a_() : e === "ru" ? s_() : e === "uk" ? o_() : i_()
  },
  c_ = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  u_ = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  __ = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  l_ = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  d_ = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  f_ = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  m_ = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  h_ = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  p_ = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  g_ = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  w_ = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  y_ = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  pe = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? c_() : e === "pt" ? u_() : e === "ch" ? __() : e === "de" ? l_() : e === "es" ? d_() : e === "fr" ? f_() : e === "it" ? m_() : e === "jp" ? h_() : e === "pl" ? p_() : e === "ru" ? g_() : e === "uk" ? w_() : y_()
  },
  b_ = r => `Your account has been suspended out until ${r.until}`,
  E_ = r => `A sua conta está suspensa até ${r.until}`,
  O_ = r => `你的账号已被暂停至 ${r.until}`,
  T_ = r => `Dein Konto ist gesperrt bis ${r.until}`,
  v_ = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  I_ = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  N_ = r => `Il tuo account è sospeso fino al ${r.until}`,
  R_ = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  A_ = r => `Twoje konto zostało zawieszone do ${r.until}`,
  D_ = r => `Ваш аккаунт заблокирован до ${r.until}`,
  S_ = r => `Ваш акаунт призупинено до ${r.until}`,
  k_ = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  x_ = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? b_(r) : e === "pt" ? E_(r) : e === "ch" ? O_(r) : e === "de" ? T_(r) : e === "es" ? v_(r) : e === "fr" ? I_(r) : e === "it" ? N_(r) : e === "jp" ? R_(r) : e === "pl" ? A_(r) : e === "ru" ? D_(r) : e === "uk" ? S_(r) : k_(r)
  },
  P_ = () => "Exceeded maximum number of characters",
  U_ = () => "Excedeu o número máximo de caracteres permitidos",
  L_ = () => "超出最大字符数",
  j_ = () => "Maximale Zeichenanzahl überschritten",
  B_ = () => "Se excedió el número máximo de caracteres",
  M_ = () => "Nombre maximal de caractères dépassé",
  q_ = () => "Numero massimo di caratteri superato",
  K_ = () => "最大文字数を超過しました",
  z_ = () => "Przekroczono maksymalną liczbę znaków",
  F_ = () => "Превышено максимальное количество символов",
  G_ = () => "Перевищено максимальну кількість символів",
  $_ = () => "Đã vượt quá số ký tự tối đa",
  C_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? P_() : e === "pt" ? U_() : e === "ch" ? L_() : e === "de" ? j_() : e === "es" ? B_() : e === "fr" ? M_() : e === "it" ? q_() : e === "jp" ? K_() : e === "pl" ? z_() : e === "ru" ? F_() : e === "uk" ? G_() : $_()
  };
let h;

function L(r) {
  const t = h.__externref_table_alloc();
  return h.__wbindgen_export_2.set(t, r), t
}

function P(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    const n = L(e);
    h.__wbindgen_exn_store(n)
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
let j = null;

function X() {
  return (j === null || j.byteLength === 0) && (j = new Uint8Array(h.memory.buffer)), j
}

function B(r, t) {
  return r = r >>> 0, Oe.decode(X().subarray(r, r + t))
}

function Q(r) {
  return r == null
}

function V_(r) {
  h.set_user_id(r)
}
let te = 0;
const Z = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  H_ = typeof Z.encodeInto == "function" ? function(r, t) {
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
      l = t(c.length, 1) >>> 0;
    return X().subarray(l, l + c.length).set(c), te = c.length, l
  }
  let n = r.length,
    s = t(n, 1) >>> 0;
  const o = X();
  let _ = 0;
  for (; _ < n; _++) {
    const c = r.charCodeAt(_);
    if (c > 127) break;
    o[s + _] = c
  }
  if (_ !== n) {
    _ !== 0 && (r = r.slice(_)), s = e(s, n, n = _ + r.length * 3, 1) >>> 0;
    const c = X().subarray(s + _, s + n),
      l = H_(r, c);
    _ += l.written, s = e(s, n, _, 1) >>> 0
  }
  return te = _, s
}

function W_(r) {
  const t = Te(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
    e = te;
  h.request_url(t, e)
}

function Y_() {
  let r, t;
  try {
    const e = h.get_load_payload();
    return r = e[0], t = e[1], B(e[0], e[1])
  } finally {
    h.__wbindgen_free(r, t, 1)
  }
}

function J_(r) {
  let t, e;
  try {
    const n = Te(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
      s = te,
      o = h.get_pawtected_endpoint_payload(n, s);
    return t = o[0], e = o[1], B(o[0], o[1])
  } finally {
    h.__wbindgen_free(t, e, 1)
  }
}
async function Q_(r, t) {
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

function X_() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    return t.buffer
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return P(function(t, e) {
      return t.call(e)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return P(function(t, e, n) {
      return t.call(e, n)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    return t.crypto
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return P(function(t, e) {
      t.getRandomValues(e)
    }, arguments)
  }, r.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    return t.msCrypto
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    return new Uint8Array(t)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    return new Function(B(t, e))
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    return new Uint8Array(t, e >>> 0, n >>> 0)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    return new Uint8Array(t >>> 0)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    return t.node
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    return t.process
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return P(function(t, e) {
      t.randomFillSync(e)
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return P(function() {
      return module.require
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    t.set(e, n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return Q(t) ? 0 : L(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Q(t) ? 0 : L(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Q(t) ? 0 : L(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Q(t) ? 0 : L(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    return t.subarray(e >>> 0, n >>> 0)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    return t.versions
  }, r.wbg.__wbindgen_init_externref_table = function() {
    const t = h.__wbindgen_export_2,
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
    return h.memory
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    return B(t, e)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(B(t, e))
  }, r
}

function Z_(r, t) {
  return h = r.exports, ve.__wbindgen_wasm_module = t, j = null, h.__wbindgen_start(), h
}
async function ve(r) {
  if (h !== void 0) return h;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = X_();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await Q_(await r, t);
  return Z_(e, n)
}

function Ie(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function el(r, t) {
  for (const e of t)
    if (Ie(r, e)) return !0;
  return !1
}

function Ne(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function tl(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class rl {
  constructor(t) {
    p(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const n = Math.floor(t / 8),
      s = t % 8;
    if (n >= this.bytes.length) {
      const _ = new Uint8Array(n + 1),
        c = _.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) _[l + c] = this.bytes[l];
      this.bytes = _
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

function Pl(r) {
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

function Ul(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${tl(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onloadend = () => {
      const s = n.result;
      if (typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s)
    }, n.onerror = e, n.readAsDataURL(r)
  })
}

function Ll(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    s = e.indexOf(";base64"),
    o = (s === -1 ? e : e.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const _ = Ne(n),
      c = new Uint8Array(_.byteLength);
    return c.set(_), new Blob([c], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: o
  })
}
var z, F, G, $, C, V, H, W;
class nl {
  constructor() {
    p(this, "channel", new BroadcastChannel("user-channel"));
    g(this, z, R());
    g(this, F, R(!0));
    g(this, G, R());
    g(this, $, R(Date.now()));
    g(this, C, U(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Me.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    g(this, V, U(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    g(this, H, U(() => {
      var t;
      return new rl(Ne(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    g(this, W, U(() => {
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
    return w(m(this, z))
  }
  set data(t) {
    O(m(this, z), t, !0)
  }
  get loading() {
    return w(m(this, F))
  }
  set loading(t) {
    O(m(this, F), t, !0)
  }
  get notificationCount() {
    return w(m(this, G))
  }
  set notificationCount(t) {
    O(m(this, G), t, !0)
  }
  get lastFetch() {
    return w(m(this, $))
  }
  set lastFetch(t) {
    O(m(this, $), t)
  }
  get charges() {
    return w(m(this, C))
  }
  set charges(t) {
    O(m(this, C), t)
  }
  get cooldown() {
    return w(m(this, V))
  }
  set cooldown(t) {
    O(m(this, V), t)
  }
  get flagsBitmap() {
    return w(m(this, H))
  }
  set flagsBitmap(t) {
    O(m(this, H), t)
  }
  get timeoutUntil() {
    return w(m(this, W))
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
      })), this.data && this.notificationCount === void 0 && ee.getNotificationCount().then(e => {
        this.notificationCount = e
      }), (t = this.data) != null && t.id && qe("userId", {
        id: this.data.id
      }), !!this.data
    } catch (e) {
      return console.error(e), ye.warning(si(), {
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
    return el((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
z = new WeakMap, F = new WeakMap, G = new WeakMap, $ = new WeakMap, C = new WeakMap, V = new WeakMap, H = new WeakMap, W = new WeakMap;
const k = new nl;

function Re(r) {
  return k.data ? k.data.experiments[r] ?? null : null
}

function jl(r) {
  var t, e;
  return ((e = (t = k.data) == null ? void 0 : t.experiments[r]) == null ? void 0 : e.enabled) ?? !0
}
const Bl = {
    griefing: Zn(),
    "multi-accounting": Po(),
    "hate-speech": da(),
    bot: nr(),
    doxxing: Rn(),
    "inappropriate-content": Ia(),
    other: pr()
  },
  Ml = {
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
  al = [{
    tileSize: 1e3,
    zoom: 11
  }],
  sl = 4,
  ol = 6e3,
  il = [{
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
  cl = {
    needsPhoneVerification: "needs_phone_verification"
  },
  ul = {
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
  _l = {
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
        amount: 78750
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
  ll = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  dl = {
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
        appealsHistory: "staff.dashboard.users.appeals_history",
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
        info: "staff.tools.select_area.info",
        reverse: "staff.tools.select_area.reverse"
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
  fl = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  S = {
    seasons: al,
    regionSize: sl,
    refreshIntervalMs: ol,
    colors: il,
    errors: cl,
    items: ul,
    products: _l,
    countries: ll,
    permissions: dl,
    settings: fl
  },
  ae = S,
  ml = S.seasons,
  Ae = S.seasons.length - 1,
  ql = S.seasons[Ae].zoom,
  Kl = S.seasons[Ae].tileSize,
  zl = S.permissions,
  hl = S.settings;

function Fl(r) {
  return ae.countries[r - 1]
}
class u extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function pl(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    let o = e[s];
    o ? o.push(n) : e[s] = [n]
  }
  return e
}

function Gl(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    e[s] = n
  }
  return e
}
var a = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(a || {}),
  Y;
class gl {
  constructor(t) {
    g(this, Y, R(!0));
    this.url = t
  }
  get online() {
    return w(m(this, Y))
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
  async createReverseSession(t) {
    const e = await this.request("/staff/tools/select-area/reverse/session", {
      method: "POST",
      body: t.buffer,
      headers: {
        "Content-Type": "application/octet-stream"
      },
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t) {
    const e = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status);
    return e.json()
  }
  async getReversePreview(t, e) {
    const n = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        timestamp: e
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status);
    return n.json()
  }
  async applyReverse(t, e) {
    const n = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        timestamp: e
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status);
    return n.json()
  }
  async sendPaintRequests(t, e, n) {
    const s = pl(t, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      o = Re("2025-09_pawtect");
    if (!o) throw new Error("paint request while pawtect experiment not found");
    const c = (await Promise.all(Object.values(s).map(l => {
      const [f, y] = l[0].tile, b = l[0].season, I = {
        colors: l.map(v => v.colorIdx),
        coords: l.flatMap(v => v.pixel),
        fp: e
      }, x = JSON.stringify(I), T = n(b, f, y);
      return this.request(T, {
        method: "POST",
        body: x,
        headers: {
          "x-pawtect-token": o.variant !== "disabled" ? Ol(x) : "",
          "x-pawtect-variant": o.variant
        },
        credentials: "include"
      })
    }))).filter(l => l.status !== a.OK);
    if (c.length) {
      const l = c[0];
      if (l.status === a.UNAUTHORIZED) throw new Error(ne());
      if (l.status === a.FORBIDDEN) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(mn());
        const f = await l.json();
        if ((f == null ? void 0 : f.error) === "timeout") {
          const y = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
          throw new Error(x_({
            until: y.toLocaleString()
          }))
        }
        if ((f == null ? void 0 : f.error) === "refresh") throw new Error(nc());
        if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(ki());
        if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(Dr());
        k.refresh()
      } else throw new Error(i())
    }
  }
  async adminAutoPainterPaint(t, e, n) {
    const s = wl(t),
      o = await yl(s),
      _ = new FormData;
    _.append("fingerprint", e), _.append("season", s.season.toString()), _.append("px0", s.offsetX.toString()), _.append("py0", s.offsetY.toString()), _.append("width", s.width.toString()), _.append("height", s.height.toString()), _.append("pixels", t.length.toString()), _.append("bitmap", o, "auto-painter.png"), _.append("userId", n.toString());
    const c = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: _,
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
    christmasTreeId: _
  }) {
    const c = new URLSearchParams;
    c.set("x", String(s)), c.set("y", String(o)), _ !== void 0 && c.set("christmasTreeId", String(_));
    const l = await this.request(`/s${t}/pixel/${e}/${n}?${c.toString()}`, {
      credentials: "include"
    });
    if (l.status !== a.OK) {
      const f = await l.text();
      throw new Error(Kn({
        err: f
      }))
    }
    return l.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, n],
    p0: [s, o],
    p1: [_, c]
  }) {
    const l = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${s}&y0=${o}&x1=${_}&y1=${c}`, {
      credentials: "include"
    });
    if (l.status !== a.OK) {
      const b = await l.text();
      throw console.error("Error while fetching pixel area info", b), new Error(i())
    }
    const f = await l.arrayBuffer(),
      y = new DataView(f);
    return {
      paintedBy: Array.from({
        length: f.byteLength / 4
      }, (b, I) => y.getUint32(I * 4, !0))
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
    if (e.status === a.BAD_REQUEST) throw new Error(Ls());
    if (e.status === a.FORBIDDEN) throw new Error($i());
    if (e.status === a.TOO_MANY_REQUESTS) throw new Error(Yu());
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
    if (e.status === a.GONE) throw new Error(Qa());
    if (e.status === a.BAD_REQUEST) throw new Error(Ma());
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
      if (s === "invalid_discord") throw new Error(_s());
      if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
        const o = parseInt(s.split(":")[1] ?? "0", 10);
        throw new Error(Vo({
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
    if (e.status === a.BAD_REQUEST) throw new Error(pc());
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
    if (e.status === a.FORBIDDEN) throw new Error(wi());
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
    if (n.status === a.BAD_REQUEST) throw new Error(bo());
    if (n.status !== a.OK) throw new Error(i())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== a.OK) throw new Error(A());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== a.OK) throw new Error(A());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const n = await this.request(`/leaderboard/region/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(A())
  }
  async leaderboardRegionPlayers(t, e) {
    const n = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(A())
  }
  async leaderboardRegionAlliances(t, e) {
    const n = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(A())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(A())
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
      throw n.error === "max_characters" ? new Error(kt()) : n.error === "name_taken" ? new Error(wt()) : n.error == "empty_name" ? new Error($t()) : new Error(i())
    } else throw e.status === a.FORBIDDEN ? new Error(du()) : new Error(i())
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
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(D()) : e.status === a.BAD_REQUEST ? new Error(C_()) : new Error(i())
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
    throw e.status === a.FORBIDDEN ? new Error(D()) : new Error(A())
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
    if (e.status !== a.OK) throw new u(i(), e.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (e.status !== a.OK) throw new u(i(), e.status);
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
    if (s.status !== a.OK) throw new u(i(), s.status);
    const o = await s.json(),
      _ = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
    return {
      members: _.map(c => ({
        id: Number(c == null ? void 0 : c.id),
        name: String((c == null ? void 0 : c.name) ?? `#${c==null?void 0:c.id}`),
        picture: (c == null ? void 0 : c.picture) ?? null,
        pixelsPainted: Number((c == null ? void 0 : c.pixelsPainted) ?? (c == null ? void 0 : c.pixels_painted) ?? 0),
        lastPixelLatitude: (c == null ? void 0 : c.lastPixelLatitude) ?? null,
        lastPixelLongitude: (c == null ? void 0 : c.lastPixelLongitude) ?? null,
        role: (c == null ? void 0 : c.alliance_role) === "admin" || (c == null ? void 0 : c.role) === "admin" ? "admin" : "member"
      })),
      total: Number((o == null ? void 0 : o.total) ?? _.length)
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
    } else if (n.status !== a.OK) throw new u(i(), n.status)
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
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(Ws()) : new Error(i())
    } else if (n.status !== a.OK) throw new u(i(), n.status)
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
    if (s.status !== a.OK) throw new u(i(), s.status)
  }
  async setAllianceMemberRole(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: n
      })
    });
    if (s.status !== a.OK) throw new u(i(), s.status)
  }
  async removeAllianceMember(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status)
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
    if (t.status !== a.OK) throw new u(i(), t.status);
    const e = await t.json();
    for (const n of e.tickets) n.reports.sort((s, o) => ge[s.reason] - ge[o.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
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
    if (t.status !== a.OK) throw new u(i(), t.status);
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
    if (o.status !== a.OK && o.status !== a.BAD_REQUEST) throw new u(i(), o.status)
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
      throw console.error("Fetch error:", o), this.online = !1, new Error(Fr(), {
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
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (e.status !== a.OK) throw new u(i(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new u(i(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new u(i(), e.status);
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
    if (s.status !== a.OK) throw new u(i(), s.status)
  }
  async getUserNotes(t, e) {
    const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      s = await this.request(n, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== a.OK) throw new u(i(), s.status);
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
    if (o.status !== a.OK) throw new u(i(), o.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status);
    const n = await e.json();
    return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(o => {
      const _ = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
      let c;
      if (typeof _ == "string") {
        const f = _.toLowerCase();
        c = f === "usd" || f === "dollar" || f === "true"
      } else typeof _ == "number" ? c = _ !== 0 : c = !!_;
      const l = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "";
      return {
        product_name: String(o.productName ?? o.product_name ?? ""),
        amount: Number(o.amount ?? 0),
        price: Number(o.price ?? 0),
        is_dollar: c,
        created_at: l,
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
    if (n.status !== a.OK) throw new u(i(), n.status)
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
        _ = (o == null ? void 0 : o.error) ?? "";
      throw _ === "invalid_name" ? new u(fe(), a.BAD_REQUEST) : new u(typeof _ == "string" && _ ? _ : i(), a.BAD_REQUEST)
    }
    if (s.status !== a.OK) throw new u(i(), s.status)
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
    if (o.status !== a.OK) throw new u(i(), o.status);
    const _ = await o.json(),
      c = Array.isArray(_ == null ? void 0 : _.tickets) ? _.tickets : [];
    return c.sort((l, f) => new Date(f.createdAt).getTime() - new Date(l.createdAt).getTime()), c
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize));
    const n = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : []
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
    if (s.status !== a.OK) throw new u(i(), s.status);
    const o = await s.json();
    return o == null ? void 0 : o.translation
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      n = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new u(i(), n.status);
    return n.json()
  }
  async postPawtectLoad() {
    const t = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: Y_(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (t.status !== a.NO_CONTENT) throw new u(i(), t.status)
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.NO_CONTENT) throw new u(i(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
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
    if (s.status !== a.OK) throw new u(i(), s.status)
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
    if (s.status !== a.OK) throw new u(i(), s.status)
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
    if (s.status !== a.OK) throw new u(i(), s.status)
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
    if (n.status !== a.OK) throw new u(i(), n.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== a.OK) throw new u(i(), e.status);
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
    if (e.status !== a.OK && e.status !== a.ALREADY_REPORTED) throw new u(i(), e.status);
    return e.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status);
    return await n.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
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
    if (s.status !== a.OK) throw new u(i(), s.status);
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
    if (e.status !== a.OK) throw new u(i(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async getAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/see", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async postAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/execute", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async claimEventPixel(t) {
    const e = await this.request(`/event/christmas/claim/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status);
    return e.json()
  }
  async getEventStatus() {
    const t = await this.request("/staff/dashboard/summary/events/status", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
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
    if (o.status !== a.OK) throw new u(i(), o.status);
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
    if (e.status !== a.OK) throw new u(i(), e.status);
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
    if (t.status !== a.OK) throw new u(i(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= Date.now(),
      n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < ml.length,
      s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= hl.tools.wayback.limit,
      o = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      _ = t.cursorTs !== void 0,
      c = t.cursorUserId !== void 0,
      l = t.cursorAllianceId !== void 0,
      f = t.cursorPixelsCount !== void 0,
      y = _ || c || l || f,
      b = _ && c && l && f;
    let I = !0;
    return y && (I = b && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !s || !o || !e || !I)
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
    if (t.status !== a.OK) throw new u(i(), t.status);
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
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new u(i(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
  async postCreateBadge(t) {
    const e = await this.request("/staff/dashboard/store-manager/badges", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
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
    if (n.status !== a.OK) throw new u(i(), n.status);
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
    if (n.status !== a.OK) throw new u(i(), n.status);
    return n.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new u(i(), e.status)
  }
}
Y = new WeakMap;

function wl(r) {
  var I, x;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const T of r)
    if (T.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (I = ae.seasons) == null ? void 0 : I[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    _ = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const l = r.map(T => {
      const v = Math.round(T.tile[0] * n + T.pixel[0]),
        N = Math.round(T.tile[1] * n + T.pixel[1]);
      return v < s && (s = v), N < o && (o = N), v > _ && (_ = v), N > c && (c = N), {
        x: v,
        y: N,
        colorIdx: T.colorIdx
      }
    }),
    f = _ - s + 1,
    y = c - o + 1;
  if (!Number.isFinite(f) || !Number.isFinite(y) || f <= 0 || y <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const b = new Uint8ClampedArray(f * y * 4);
  for (const {
      x: T,
      y: v,
      colorIdx: N
    }
    of l) {
    const oe = (x = ae.colors) == null ? void 0 : x[N];
    if (!oe) throw new Error(`Unknown palette color index: ${N}`);
    const ke = T - s,
      J = ((v - o) * f + ke) * 4,
      [xe, Pe, Ue] = oe.rgb;
    b[J] = xe, b[J + 1] = Pe, b[J + 2] = Ue, b[J + 3] = N === 0 ? 1 : 255
  }
  return {
    data: b,
    width: f,
    height: y,
    offsetX: s,
    offsetY: o,
    season: t
  }
}
async function yl(r) {
  const t = bl(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, o) => {
    t.toBlob(_ => {
      if (!_) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(_)
    }, "image/png")
  })
}

function bl(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ee = new gl(we),
  se = !1,
  De;

function $l() {
  const r = Re("2025-09_pawtect");
  if (!r) throw new Error("pawtect experiment not found on load");
  r.variant !== "disabled" && (se || k.data && ve(He).then(El).catch(t => {
    De = t, Ke(t)
  }))
}

function El() {
  V_(k.data.id), ee.postPawtectLoad();
  const r = fetch;
  Object.assign(window, {
    fetch: Se((t, e) => {
      let n = null;
      return t instanceof Request ? n = t.url : n = t, n.startsWith("/") || W_(n), r.call(window, t, e)
    })
  }), se = !0
}

function Ol(r) {
  if (De) throw new Error(zc());
  if (!se) throw new Error("Try again in a few seconds or reload the page.");
  return J_(r)
}

function Se(r) {
  return r.bind().bind()
}

function Cl(r, t, e) {
  const n = {
    [r.name](...s) {
      return e(...s), t(...s)
    }
  } [r.name];
  return Se(n)
}
export {
  he as $, Fr as A, de as B, Ae as C, mn as D, Kn as E, C_ as F, Qa as G, Ma as H, _s as I, fe as J, Ls as K, Ws as L, A as M, bo as N, Vo as O, Kl as P, si as Q, wi as R, ae as S, ki as T, $i as U, nc as V, pc as W, zc as X, me as Y, du as Z, D as _, ee as a, Yu as a0, ne as a1, pe as a2, x_ as a3, Ul as a4, Ll as a5, Fl as a6, jl as a7, kl as a8, Gl as a9, ql as aa, Bl as b, nr as c, Rn as d, i as e, zl as f, Zn as g, da as h, Ia as i, Pl as j, E as k, Dl as l, Po as m, Sl as n, xl as o, $l as p, Cl as q, le as r, Ml as s, ye as t, k as u, wt as v, kt as w, $t as x, pr as y, Dr as z
};