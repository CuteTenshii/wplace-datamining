var ze = Object.defineProperty;
var oe = n => {
  throw TypeError(n)
};
var Oe = (n, t, e) => t in n ? ze(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var p = (n, t, e) => Oe(n, typeof t != "symbol" ? t + "" : t, e),
  Ce = (n, t, e) => t.has(n) || oe("Cannot " + e);
var f = (n, t, e) => (Ce(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  w = (n, t, e) => t.has(n) ? oe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  g as _
} from "./DZjUHX_D.js";
import {
  e as E,
  g as ie,
  j as y,
  i as v,
  y as ue,
  u as N
} from "./BxNCv_Ey.js";
import {
  P as ge,
  g as De
} from "./BUzmv_UY.js";
import {
  s as Me,
  c as Be
} from "./SeoLJ5PR.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "ba8eaa7b-9c44-4f15-bac1-2f20caa10a5c", n._sentryDebugIdIdentifier = "sentry-dbid-ba8eaa7b-9c44-4f15-bac1-2f20caa10a5c")
  })()
} catch {}

function ll(...n) {
  return n.filter(Boolean).join(" ")
}
const $e = typeof document < "u";
let ce = 0;
var D, M, B;
class Le {
  constructor() {
    w(this, D, E(ie([])));
    w(this, M, E(ie([])));
    w(this, B, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    p(this, "addToast", t => {
      $e && this.toasts.unshift(t)
    });
    p(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: a
    }) => {
      const s = this.toasts.findIndex(u => u.id === t),
        i = this.toasts[s];
      this.toasts[s] = {
        ...i,
        ...e,
        id: t,
        title: a,
        type: r,
        updated: !0
      }
    });
    p(this, "create", t => {
      var u;
      const {
        message: e,
        ...r
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : ce++, s = t.dismissable === void 0 ? !0 : t.dismissable, i = t.type === void 0 ? "default" : t.type;
      return ue(() => {
        this.toasts.find(d => d.id === a) ? this.updateToast({
          id: a,
          data: t,
          type: i,
          message: e,
          dismissable: s
        }) : this.addToast({
          ...r,
          id: a,
          title: e,
          dismissable: s,
          type: i
        })
      }), a
    });
    p(this, "dismiss", t => (ue(() => {
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
    p(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = f(this, B).call(this, t);
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
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const a = t instanceof Promise ? t : t();
      let s = r !== void 0;
      return a.then(i => {
        if (typeof i == "object" && i && "ok" in i && typeof i.ok == "boolean" && !i.ok) {
          s = !1;
          const u = Ue(i);
          this.create({
            id: r,
            type: "error",
            message: u
          })
        } else if (e.success !== void 0) {
          s = !1;
          const u = typeof e.success == "function" ? e.success(i) : e.success;
          this.create({
            id: r,
            type: "success",
            message: u
          })
        }
      }).catch(i => {
        if (e.error !== void 0) {
          s = !1;
          const u = typeof e.error == "function" ? e.error(i) : e.error;
          this.create({
            id: r,
            type: "error",
            message: u
          })
        }
      }).finally(() => {
        var i;
        s && (this.dismiss(r), r = void 0), (i = e.finally) == null || i.call(e)
      }), r
    });
    p(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || ce++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    p(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    p(this, "setHeight", t => {
      const e = f(this, B).call(this, t.toastId);
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
    return y(f(this, D))
  }
  set toasts(t) {
    v(f(this, D), t, !0)
  }
  get heights() {
    return y(f(this, M))
  }
  set heights(t) {
    v(f(this, M), t, !0)
  }
}
D = new WeakMap, M = new WeakMap, B = new WeakMap;

function Ue(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const b = new Le;

function Re(n, t) {
  return b.create({
    message: n,
    ...t
  })
}
var te;
class _l {
  constructor() {
    w(this, te, N(() => b.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return y(f(this, te))
  }
}
te = new WeakMap;
const Ge = Re,
  we = Object.assign(Ge, {
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
let ye = E(void 0);
const be = () => y(ye),
  fl = n => {
    const t = new URL(n, ge),
      e = be();
    return e && t.searchParams.set("override", e.token), t.toString()
  };

function ml() {
  try {
    Fe()
  } catch (n) {
    console.error("failed to load override", n)
  }
}

function Fe() {
  const t = new URL(location.href).searchParams.get("override");
  if (!t) return;
  const e = t.split(".");
  if (e.length !== 2) throw new Error("override token wrong amount of parts");
  const [r] = e, a = JSON.parse(atob(r));
  if (Date.now() / 1e3 > a.expiresAt) throw new Error("override token expired");
  we.info(`Currently using the ${a.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 6e4
  }), v(ye, {
    token: t,
    payload: a
  }, !0)
}
const Ve = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  Je = () => "Your account has been suspended for breaking the rules",
  We = () => "Sua conta foi suspensa por quebrar as regras",
  Ke = () => "您的账号因违反规则已被暂停",
  He = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Ye = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Ze = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Xe = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Qe = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  et = () => "Twoje konto zostało zawieszone za łamanie zasad",
  tt = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  nt = () => "Ваш обліковий запис було призупинено за порушення правил",
  rt = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  de = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Je() : e === "pt" ? We() : e === "ch" ? Ke() : e === "de" ? He() : e === "es" ? Ye() : e === "fr" ? Ze() : e === "it" ? Xe() : e === "jp" ? Qe() : e === "pl" ? et() : e === "ru" ? tt() : e === "uk" ? nt() : rt()
  },
  at = () => "Alliance name already taken",
  st = () => "Já possui uma aliança com esse nome",
  ot = () => "该联盟名称已被占用",
  it = () => "Der Allianzname ist bereits vergeben",
  ut = () => "Ese nombre de alianza ya está en uso",
  ct = () => "Ce nom d’alliance est déjà pris",
  dt = () => "Esiste già un'alleanza con questo nome",
  lt = () => "このアライアンス名は既に使用されています。",
  _t = () => "Nazwa sojuszu jest już zajęta",
  ft = () => "Такое название альянса уже используется",
  mt = () => "Назва альянсу вже зайнята",
  ht = () => "Tên liên minh đã được sử dụng",
  pt = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? at() : e === "pt" ? st() : e === "ch" ? ot() : e === "de" ? it() : e === "es" ? ut() : e === "fr" ? ct() : e === "it" ? dt() : e === "jp" ? lt() : e === "pl" ? _t() : e === "ru" ? ft() : e === "uk" ? mt() : ht()
  },
  gt = () => "Alliance name exceeded the maximum number of characters",
  wt = () => "O nome da aliança excedeu o número máximo de caracteres",
  yt = () => "联盟名称超过最大字符数限制",
  bt = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  vt = () => "El nombre de la alianza superó el número máximo de caracteres",
  St = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  kt = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  xt = () => "アライアンス名が最大文字数を超えています。",
  Et = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Tt = () => "Название альянса превышает максимальную длину",
  At = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  jt = () => "Tên liên minh vượt quá số ký tự cho phép",
  Pt = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gt() : e === "pt" ? wt() : e === "ch" ? yt() : e === "de" ? bt() : e === "es" ? vt() : e === "fr" ? St() : e === "it" ? kt() : e === "jp" ? xt() : e === "pl" ? Et() : e === "ru" ? Tt() : e === "uk" ? At() : jt()
  },
  qt = () => "Alliance with empty name",
  It = () => "Aliança com nome vazio",
  Nt = () => "名称为空的联盟",
  zt = () => "Allianz mit leerem Namen",
  Ot = () => "Alianza con nombre vacío",
  Ct = () => "Alliance avec nom vide",
  Dt = () => "Alleanza con nome vuoto",
  Mt = () => "名前が空のアライアンスです。",
  Bt = () => "Sojusz z pustą nazwą",
  $t = () => "Альянс с пустым названием",
  Lt = () => "Альянс із порожньою назвою",
  Ut = () => "Liên minh không có tên",
  Rt = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qt() : e === "pt" ? It() : e === "ch" ? Nt() : e === "de" ? zt() : e === "es" ? Ot() : e === "fr" ? Ct() : e === "it" ? Dt() : e === "jp" ? Mt() : e === "pl" ? Bt() : e === "ru" ? $t() : e === "uk" ? Lt() : Ut()
  },
  Gt = () => "Botting",
  Ft = () => "Uso de bots",
  Vt = () => "脚本",
  Jt = () => "Bot-Nutzung",
  Wt = () => "Botting",
  Kt = () => "Bots",
  Ht = () => "Uso di bot",
  Yt = () => "ボット使用",
  Zt = () => "Botting",
  Xt = () => "Боттинг",
  Qt = () => "Боти",
  en = () => "Botting",
  tn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gt() : e === "pt" ? Ft() : e === "ch" ? Vt() : e === "de" ? Jt() : e === "es" ? Wt() : e === "fr" ? Kt() : e === "it" ? Ht() : e === "jp" ? Yt() : e === "pl" ? Zt() : e === "ru" ? Xt() : e === "uk" ? Qt() : en()
  },
  nn = () => "Breaking the rules",
  rn = () => "Quebrar as regras",
  an = () => "违反规则",
  sn = () => "Regeln brechen",
  on = () => "Romper las reglas",
  un = () => "Violation des règles",
  cn = () => "Violazione delle regole",
  dn = () => "ルール違反",
  ln = () => "Łamanie zasad",
  _n = () => "Нарушение правил",
  fn = () => "Порушення правил",
  mn = () => "Vi phạm luật",
  hn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nn() : e === "pt" ? rn() : e === "ch" ? an() : e === "de" ? sn() : e === "es" ? on() : e === "fr" ? un() : e === "it" ? cn() : e === "jp" ? dn() : e === "pl" ? ln() : e === "ru" ? _n() : e === "uk" ? fn() : mn()
  },
  pn = () => "You cannot paint over event pixels",
  gn = () => "Você não pode pintar sobre pixels de eventos",
  wn = () => "你不能覆盖活动像素",
  yn = () => "Du kannst nicht über Event-Pixel malen",
  bn = () => "No puedes pintar sobre píxeles de evento",
  vn = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Sn = () => "Non puoi dipingere sopra i pixel dell'evento",
  kn = () => "イベント用のピクセルの上には塗れません。",
  xn = () => "Nie możesz malować po pikselach wydarzenia",
  En = () => "Вы не можете рисовать по пикселям события",
  Tn = () => "Ви не можете малювати поверх пікселів події",
  An = () => "Bạn không thể tô lên pixel sự kiện",
  jn = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pn() : e === "pt" ? gn() : e === "ch" ? wn() : e === "de" ? yn() : e === "es" ? bn() : e === "fr" ? vn() : e === "it" ? Sn() : e === "jp" ? kn() : e === "pl" ? xn() : e === "ru" ? En() : e === "uk" ? Tn() : An()
  },
  Pn = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  qn = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  In = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Nn = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  zn = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  On = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Cn = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Dn = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Mn = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Bn = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  $n = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Ln = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Un = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Pn() : e === "pt" ? qn() : e === "ch" ? In() : e === "de" ? Nn() : e === "es" ? zn() : e === "fr" ? On() : e === "it" ? Cn() : e === "jp" ? Dn() : e === "pl" ? Mn() : e === "ru" ? Bn() : e === "uk" ? $n() : Ln()
  },
  Rn = () => "Couldn't complete the purchase. This item does not exist.",
  Gn = () => "Não foi possível concluir a compra. Este item não existe.",
  Fn = () => "无法完成购买。该物品不存在。",
  Vn = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Jn = () => "No se pudo completar la compra. Este ítem no existe.",
  Wn = () => "Achat impossible. Cet objet n’existe pas.",
  Kn = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Hn = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Yn = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Zn = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Xn = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Qn = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  le = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Rn() : e === "pt" ? Gn() : e === "ch" ? Fn() : e === "de" ? Vn() : e === "es" ? Jn() : e === "fr" ? Wn() : e === "it" ? Kn() : e === "jp" ? Hn() : e === "pl" ? Yn() : e === "ru" ? Zn() : e === "uk" ? Xn() : Qn()
  },
  er = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  tr = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  nr = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  rr = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  ar = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  sr = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  or = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ir = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  ur = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  cr = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  dr = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  lr = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  _r = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? er() : e === "pt" ? tr() : e === "ch" ? nr() : e === "de" ? rr() : e === "es" ? ar() : e === "fr" ? sr() : e === "it" ? or() : e === "jp" ? ir() : e === "pl" ? ur() : e === "ru" ? cr() : e === "uk" ? dr() : lr()
  },
  fr = () => "Doxxing",
  mr = () => "Doxxing",
  hr = () => "人肉搜索",
  pr = () => "Doxxing",
  gr = () => "Doxxing",
  wr = () => "Doxxing",
  yr = () => "Doxxing",
  br = () => "ドックス（Doxxing）",
  vr = () => "Doxxing",
  Sr = () => "Докcинг",
  kr = () => "Докcинг",
  xr = () => "Doxxing",
  Er = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fr() : e === "pt" ? mr() : e === "ch" ? hr() : e === "de" ? pr() : e === "es" ? gr() : e === "fr" ? wr() : e === "it" ? yr() : e === "jp" ? br() : e === "pl" ? vr() : e === "ru" ? Sr() : e === "uk" ? kr() : xr()
  },
  Tr = n => `Error while painting: ${n.err}`,
  Ar = n => `Erro enquanto pinta: ${n.err}`,
  jr = n => `绘制时出错：${n.err}`,
  Pr = n => `Fehler beim Malen: ${n.err}`,
  qr = n => `Error al pintar: ${n.err}`,
  Ir = n => `Erreur lors de la peinture : ${n.err}`,
  Nr = n => `Errore durante la pittura: ${n.err}`,
  zr = n => `ペイント中にエラーが発生しました: ${n.err}`,
  Or = n => `Błąd podczas malowania: ${n.err}`,
  Cr = n => `Ошибка при рисовании: ${n.err}`,
  Dr = n => `Помилка під час малювання: ${n.err}`,
  Mr = n => `Lỗi khi tô: ${n.err}`,
  Br = (n, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Tr(n) : e === "pt" ? Ar(n) : e === "ch" ? jr(n) : e === "de" ? Pr(n) : e === "es" ? qr(n) : e === "fr" ? Ir(n) : e === "it" ? Nr(n) : e === "jp" ? zr(n) : e === "pl" ? Or(n) : e === "ru" ? Cr(n) : e === "uk" ? Dr(n) : Mr(n)
  },
  $r = () => "Griefing",
  Lr = () => "Griefing",
  Ur = () => "破坏行为",
  Rr = () => "Griefing",
  Gr = () => "Griefing",
  Fr = () => "Griefing",
  Vr = () => "Griefing",
  Jr = () => "グリーフィング",
  Wr = () => "Griefing",
  Kr = () => "Гриферство",
  Hr = () => "Гріфінг",
  Yr = () => "Griefing",
  Zr = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $r() : e === "pt" ? Lr() : e === "ch" ? Ur() : e === "de" ? Rr() : e === "es" ? Gr() : e === "fr" ? Fr() : e === "it" ? Vr() : e === "jp" ? Jr() : e === "pl" ? Wr() : e === "ru" ? Kr() : e === "uk" ? Hr() : Yr()
  },
  Xr = () => "Hate speech",
  Qr = () => "Discurso de Ódio",
  ea = () => "仇恨言论",
  ta = () => "Hassrede",
  na = () => "Discurso de odio",
  ra = () => "Discours haineux",
  aa = () => "Discorso d'odio",
  sa = () => "ヘイトスピーチ",
  oa = () => "Mowa nienawiści",
  ia = () => "Речь ненависти",
  ua = () => "Мова ворожнечі",
  ca = () => "Ngôn từ thù hằn",
  da = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xr() : e === "pt" ? Qr() : e === "ch" ? ea() : e === "de" ? ta() : e === "es" ? na() : e === "fr" ? ra() : e === "it" ? aa() : e === "jp" ? sa() : e === "pl" ? oa() : e === "ru" ? ia() : e === "uk" ? ua() : ca()
  },
  la = () => "Inappropriate content",
  _a = () => "Conteúdo inapropriado",
  fa = () => "不当内容",
  ma = () => "Unangemessene Inhalte",
  ha = () => "Contenido inapropiado",
  pa = () => "Contenu inapproprié",
  ga = () => "Contenuto inappropriato",
  wa = () => "不適切なコンテンツ",
  ya = () => "Nieodpowiednie treści",
  ba = () => "Неприемлемый контент",
  va = () => "Неприйнятний вміст",
  Sa = () => "Nội dung không phù hợp",
  ka = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? la() : e === "pt" ? _a() : e === "ch" ? fa() : e === "de" ? ma() : e === "es" ? ha() : e === "fr" ? pa() : e === "it" ? ga() : e === "jp" ? wa() : e === "pl" ? ya() : e === "ru" ? ba() : e === "uk" ? va() : Sa()
  },
  xa = () => "Invalid code",
  Ea = () => "Código inválido",
  Ta = () => "验证码无效",
  Aa = () => "Ungültiger Code",
  ja = () => "Código inválido",
  Pa = () => "Code invalide",
  qa = () => "Codice non valido",
  Ia = () => "無効なコードです。",
  Na = () => "Nieprawidłowy kod",
  za = () => "Неверный код",
  Oa = () => "Невірний код",
  Ca = () => "Mã không hợp lệ",
  Da = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xa() : e === "pt" ? Ea() : e === "ch" ? Ta() : e === "de" ? Aa() : e === "es" ? ja() : e === "fr" ? Pa() : e === "it" ? qa() : e === "jp" ? Ia() : e === "pl" ? Na() : e === "ru" ? za() : e === "uk" ? Oa() : Ca()
  },
  Ma = () => "Invalid discord.",
  Ba = () => "Discord inválido.",
  $a = () => "无效的 Discord。",
  La = () => "Ungültiger Discord.",
  Ua = () => "Discord inválido.",
  Ra = () => "Discord invalide.",
  Ga = () => "Discord non valido.",
  Fa = () => "無効なDiscordアカウントです。",
  Va = () => "Nieprawidłowy Discord.",
  Ja = () => "Неверный Discord.",
  Wa = () => "Некоректний Discord.",
  Ka = () => "Discord không hợp lệ.",
  Ha = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ma() : e === "pt" ? Ba() : e === "ch" ? $a() : e === "de" ? La() : e === "es" ? Ua() : e === "fr" ? Ra() : e === "it" ? Ga() : e === "jp" ? Fa() : e === "pl" ? Va() : e === "ru" ? Ja() : e === "uk" ? Wa() : Ka()
  },
  Ya = () => "The name contains disallowed characters or words. Please choose a different name.",
  Za = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Xa = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Qa = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  es = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  ts = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  ns = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  rs = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  as = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  ss = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  os = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  is = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  _e = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ya() : e === "pt" ? Za() : e === "ch" ? Xa() : e === "de" ? Qa() : e === "es" ? es() : e === "fr" ? ts() : e === "it" ? ns() : e === "jp" ? rs() : e === "pl" ? as() : e === "ru" ? ss() : e === "uk" ? os() : is()
  },
  us = () => "Invalid phone number",
  cs = () => "Número de telefone inválido",
  ds = () => "无效的电话号码",
  ls = () => "Ungültige Telefonnummer",
  _s = () => "Número de teléfono inválido",
  fs = () => "Numéro de téléphone invalide",
  ms = () => "Numero di telefono non valido",
  hs = () => "無効な電話番号です。",
  ps = () => "Nieprawidłowy numer telefonu",
  gs = () => "Неверный номер телефона",
  ws = () => "Некоректний номер телефону",
  ys = () => "Số điện thoại không hợp lệ",
  bs = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? us() : e === "pt" ? cs() : e === "ch" ? ds() : e === "de" ? ls() : e === "es" ? _s() : e === "fr" ? fs() : e === "it" ? ms() : e === "jp" ? hs() : e === "pl" ? ps() : e === "ru" ? gs() : e === "uk" ? ws() : ys()
  },
  vs = () => "The new leader must be a member of the alliance",
  Ss = () => "O novo líder deve ser um membro da aliança",
  ks = () => "新盟主必须是联盟成员",
  xs = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Es = () => "El nuevo líder debe ser miembro de la alianza",
  Ts = () => "Le nouveau chef doit être membre de l’alliance",
  As = () => "Il nuovo leader deve essere un membro dell'alleanza",
  js = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Ps = () => "Nowy lider musi być członkiem sojuszu",
  qs = () => "Новый лидер должен быть участником альянса",
  Is = () => "Новий лідер має бути учасником альянсу",
  Ns = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  zs = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vs() : e === "pt" ? Ss() : e === "ch" ? ks() : e === "de" ? xs() : e === "es" ? Es() : e === "fr" ? Ts() : e === "it" ? As() : e === "jp" ? js() : e === "pl" ? Ps() : e === "ru" ? qs() : e === "uk" ? Is() : Ns()
  },
  Os = () => "Leaderboard is temporarily disabled",
  Cs = () => "O ranking está temporariamente desativado",
  Ds = () => "排行榜已暂时停用",
  Ms = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Bs = () => "La clasificación está deshabilitada temporalmente",
  $s = () => "Le classement est temporairement désactivé",
  Ls = () => "La classifica è temporaneamente disattivata",
  Us = () => "ランキングは一時的に無効になっています。",
  Rs = () => "Ranking jest tymczasowo wyłączony",
  Gs = () => "Таблица лидеров временно отключена",
  Fs = () => "Таблиця лідерів тимчасово вимкнена",
  Vs = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  T = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Os() : e === "pt" ? Cs() : e === "ch" ? Ds() : e === "de" ? Ms() : e === "es" ? Bs() : e === "fr" ? $s() : e === "it" ? Ls() : e === "jp" ? Us() : e === "pl" ? Rs() : e === "ru" ? Gs() : e === "uk" ? Fs() : Vs()
  },
  Js = () => "Location name is too big (max. 128 characters)",
  Ws = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ks = () => "位置名称过长（最大 128 个字符）",
  Hs = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Ys = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Zs = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Xs = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Qs = () => "場所の名前が長すぎます（最大128文字）。",
  eo = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  to = () => "Название локации слишком длинное (макс. 128 символов)",
  no = () => "Назва локації надто довга (макс. 128 символів)",
  ro = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  ao = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Js() : e === "pt" ? Ws() : e === "ch" ? Ks() : e === "de" ? Hs() : e === "es" ? Ys() : e === "fr" ? Zs() : e === "it" ? Xs() : e === "jp" ? Qs() : e === "pl" ? eo() : e === "ru" ? to() : e === "uk" ? no() : ro()
  },
  so = () => "Multi-accounting",
  oo = () => "Múltiplas contas",
  io = () => "多账号",
  uo = () => "Multi-Accounting",
  co = () => "Multi-cuentas",
  lo = () => "Multi-comptes",
  _o = () => "Multi-account",
  fo = () => "複数アカウント使用",
  mo = () => "Multi-konta",
  ho = () => "Мультиаккаунт",
  po = () => "Мультиакаунтинг",
  go = () => "Nhiều tài khoản",
  wo = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? so() : e === "pt" ? oo() : e === "ch" ? io() : e === "de" ? uo() : e === "es" ? co() : e === "fr" ? lo() : e === "it" ? _o() : e === "jp" ? fo() : e === "pl" ? mo() : e === "ru" ? ho() : e === "uk" ? po() : go()
  },
  yo = n => `You can change your name again in ${n.days} days`,
  bo = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  vo = n => `你可以在 ${n.days} 天后再次修改名称`,
  So = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  ko = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  xo = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Eo = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  To = n => `${n.days}日後に再び名前を変更できます。`,
  Ao = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  jo = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Po = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  qo = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Io = (n, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yo(n) : e === "pt" ? bo(n) : e === "ch" ? vo(n) : e === "de" ? So(n) : e === "es" ? ko(n) : e === "fr" ? xo(n) : e === "it" ? Eo(n) : e === "jp" ? To(n) : e === "pl" ? Ao(n) : e === "ru" ? jo(n) : e === "uk" ? Po(n) : qo(n)
  },
  No = () => "No internet access or the servers are offline. Try again later.",
  zo = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Oo = () => "没有网络连接或服务器已离线。请稍后重试。",
  Co = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Do = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Mo = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Bo = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  $o = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Lo = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Uo = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Ro = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Go = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Fo = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? No() : e === "pt" ? zo() : e === "ch" ? Oo() : e === "de" ? Co() : e === "es" ? Do() : e === "fr" ? Mo() : e === "it" ? Bo() : e === "jp" ? $o() : e === "pl" ? Lo() : e === "ru" ? Uo() : e === "uk" ? Ro() : Go()
  },
  Vo = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Jo = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Wo = () => "操作不被允许。你的收藏位置可能过多。",
  Ko = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Ho = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Yo = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Zo = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Xo = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Qo = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  ei = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  ti = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  ni = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  ri = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Vo() : e === "pt" ? Jo() : e === "ch" ? Wo() : e === "de" ? Ko() : e === "es" ? Ho() : e === "fr" ? Yo() : e === "it" ? Zo() : e === "jp" ? Xo() : e === "pl" ? Qo() : e === "ru" ? ei() : e === "uk" ? ti() : ni()
  },
  ai = () => "You are trying to paint with a color you do not own",
  si = () => "Você está tentando pintar com uma cor que não possui",
  oi = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  ii = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  ui = () => "Estás intentando pintar con un color que no posees",
  ci = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  di = () => "Stai cercando di dipingere con un colore che non possiedi",
  li = () => "所持していない色で塗ろうとしています。",
  _i = () => "Próbujesz malować kolorem, którego nie posiadasz",
  fi = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  mi = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  hi = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  pi = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ai() : e === "pt" ? si() : e === "ch" ? oi() : e === "de" ? ii() : e === "es" ? ui() : e === "fr" ? ci() : e === "it" ? di() : e === "jp" ? li() : e === "pl" ? _i() : e === "ru" ? fi() : e === "uk" ? mi() : hi()
  },
  gi = () => "Phone already used",
  wi = () => "Telefone já usado",
  yi = () => "电话号码已被使用",
  bi = () => "Telefonnummer bereits verwendet",
  vi = () => "Teléfono ya utilizado",
  Si = () => "Téléphone déjà utilisé",
  ki = () => "Telefono già utilizzato",
  xi = () => "この電話番号は既に使用されています。",
  Ei = () => "Numer telefonu jest już używany",
  Ti = () => "Телефон уже используется",
  Ai = () => "Номер телефону вже використовується",
  ji = () => "Số điện thoại đã được sử dụng",
  Pi = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gi() : e === "pt" ? wi() : e === "ch" ? yi() : e === "de" ? bi() : e === "es" ? vi() : e === "fr" ? Si() : e === "it" ? ki() : e === "jp" ? xi() : e === "pl" ? Ei() : e === "ru" ? Ti() : e === "uk" ? Ai() : ji()
  },
  qi = () => "Refresh your page to get the latest update",
  Ii = () => "Recarregue sua página para obter as últimas atualizações",
  Ni = () => "刷新页面以获取最新更新",
  zi = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Oi = () => "Actualiza la página para obtener la última versión",
  Ci = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Di = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Mi = () => "最新の状態にするにはページを再読み込みしてください。",
  Bi = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  $i = () => "Обновите страницу, чтобы получить последние изменения",
  Li = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Ui = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Ri = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qi() : e === "pt" ? Ii() : e === "ch" ? Ni() : e === "de" ? zi() : e === "es" ? Oi() : e === "fr" ? Ci() : e === "it" ? Di() : e === "jp" ? Mi() : e === "pl" ? Bi() : e === "ru" ? $i() : e === "uk" ? Li() : Ui()
  },
  Gi = () => "The typed username does not match your current username.",
  Fi = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Vi = () => "输入的用户名与当前用户名不匹配。",
  Ji = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Wi = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Ki = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Hi = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Yi = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Zi = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Xi = () => "Введённое имя пользователя не совпадает с текущим.",
  Qi = () => "Введене імʼя користувача не збігається з поточним.",
  eu = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  tu = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gi() : e === "pt" ? Fi() : e === "ch" ? Vi() : e === "de" ? Ji() : e === "es" ? Wi() : e === "fr" ? Ki() : e === "it" ? Hi() : e === "jp" ? Yi() : e === "pl" ? Zi() : e === "ru" ? Xi() : e === "uk" ? Qi() : eu()
  },
  nu = () => "Unexpected server error. Try again later.",
  ru = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  au = () => "服务器出现意外错误。请稍后再试。",
  su = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  ou = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  iu = () => "Erreur serveur inattendue. Réessayez plus tard.",
  uu = () => "Errore imprevisto del server. Riprova più tardi.",
  cu = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  du = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  lu = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  _u = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  fu = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nu() : e === "pt" ? ru() : e === "ch" ? au() : e === "de" ? su() : e === "es" ? ou() : e === "fr" ? iu() : e === "it" ? uu() : e === "jp" ? cu() : e === "pl" ? du() : e === "ru" ? lu() : e === "uk" ? _u() : fu()
  },
  mu = () => "Failed to load WebAssembly module. Try to use another browser.",
  hu = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  pu = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  gu = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  wu = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  yu = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  bu = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  vu = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Su = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  ku = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  xu = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Eu = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Tu = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mu() : e === "pt" ? hu() : e === "ch" ? pu() : e === "de" ? gu() : e === "es" ? wu() : e === "fr" ? yu() : e === "it" ? bu() : e === "jp" ? vu() : e === "pl" ? Su() : e === "ru" ? ku() : e === "uk" ? xu() : Eu()
  },
  Au = () => "You already have this item. Please refresh the page.",
  ju = () => "Você já possui este item. Atualize a página.",
  Pu = () => "你已经拥有此物品。请刷新页面。",
  qu = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Iu = () => "Ya tienes este ítem. Actualiza la página.",
  Nu = () => "Vous possédez déjà cet objet. Actualisez la page.",
  zu = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Ou = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Cu = () => "Masz już ten przedmiot. Odśwież stronę.",
  Du = () => "У вас уже есть этот предмет. Обновите страницу.",
  Mu = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Bu = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  fe = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Au() : e === "pt" ? ju() : e === "ch" ? Pu() : e === "de" ? qu() : e === "es" ? Iu() : e === "fr" ? Nu() : e === "it" ? zu() : e === "jp" ? Ou() : e === "pl" ? Cu() : e === "ru" ? Du() : e === "uk" ? Mu() : Bu()
  },
  $u = () => "You are already in an alliance",
  Lu = () => "Você já está em uma aliança",
  Uu = () => "你已经在一个联盟中",
  Ru = () => "Du bist bereits in einer Allianz",
  Gu = () => "Ya estás en una alianza",
  Fu = () => "Vous êtes déjà dans une alliance",
  Vu = () => "Sei già in un'alleanza",
  Ju = () => "すでにアライアンスに所属しています。",
  Wu = () => "Jesteś już w sojuszu",
  Ku = () => "Вы уже состоите в альянсе",
  Hu = () => "Ви вже перебуваєте в альянсі",
  Yu = () => "Bạn đã ở trong một liên minh",
  Zu = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $u() : e === "pt" ? Lu() : e === "ch" ? Uu() : e === "de" ? Ru() : e === "es" ? Gu() : e === "fr" ? Fu() : e === "it" ? Vu() : e === "jp" ? Ju() : e === "pl" ? Wu() : e === "ru" ? Ku() : e === "uk" ? Hu() : Yu()
  },
  Xu = () => "You are not allowed to do this",
  Qu = () => "Você não tem permissão para fazer isso",
  ec = () => "你无权执行此操作",
  tc = () => "Du bist dazu nicht berechtigt",
  nc = () => "No tienes permiso para hacer esto",
  rc = () => "Vous n’êtes pas autorisé à faire cela",
  ac = () => "Non hai il permesso di farlo",
  sc = () => "この操作を行う権限がありません。",
  oc = () => "Nie masz uprawnień, aby to zrobić",
  ic = () => "У вас нет прав для этого действия",
  uc = () => "Ви не маєте права це робити",
  cc = () => "Bạn không có quyền làm việc này",
  A = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xu() : e === "pt" ? Qu() : e === "ch" ? ec() : e === "de" ? tc() : e === "es" ? nc() : e === "fr" ? rc() : e === "it" ? ac() : e === "jp" ? sc() : e === "pl" ? oc() : e === "ru" ? ic() : e === "uk" ? uc() : cc()
  },
  dc = () => "You do not have enough Droplets to buy this item.",
  lc = () => "Você não tem gotas suficientes para comprar este item.",
  _c = () => "你的水滴不足，无法购买此物品。",
  fc = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  mc = () => "No tienes suficientes gotas para comprar este ítem.",
  hc = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  pc = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  gc = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  wc = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  yc = () => "У вас недостаточно droplets для покупки этого предмета.",
  bc = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  vc = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  me = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dc() : e === "pt" ? lc() : e === "ch" ? _c() : e === "de" ? fc() : e === "es" ? mc() : e === "fr" ? hc() : e === "it" ? pc() : e === "jp" ? gc() : e === "pl" ? wc() : e === "ru" ? yc() : e === "uk" ? bc() : vc()
  },
  Sc = () => "You have to wait to resend a code",
  kc = () => "Você tem de esperar para reenviar um código",
  xc = () => "你需要等待一段时间才能重新发送验证码",
  Ec = () => "Du musst warten, bevor du einen Code erneut senden kannst",
  Tc = () => "Tienes que esperar para reenviar un código",
  Ac = () => "Vous devez attendre avant de renvoyer un code",
  jc = () => "Devi aspettare per reinviare un codice",
  Pc = () => "コードを再送信するまでしばらくお待ちください。",
  qc = () => "Musisz poczekać, zanim wyślesz kod ponownie",
  Ic = () => "Вам нужно подождать, прежде чем отправить код ещё раз",
  Nc = () => "Перш ніж повторно надіслати код, потрібно почекати",
  zc = () => "Bạn phải chờ trước khi gửi lại mã",
  Oc = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sc() : e === "pt" ? kc() : e === "ch" ? xc() : e === "de" ? Ec() : e === "es" ? Tc() : e === "fr" ? Ac() : e === "it" ? jc() : e === "jp" ? Pc() : e === "pl" ? qc() : e === "ru" ? Ic() : e === "uk" ? Nc() : zc()
  },
  Cc = () => "You need to be logged in to paint",
  Dc = () => "Você precisa estar conectado para pintar",
  Mc = () => "你需要登录才能进行绘制",
  Bc = () => "Du musst eingeloggt sein, um zu malen",
  $c = () => "Debes iniciar sesión para pintar",
  Lc = () => "Vous devez être connecté pour peindre",
  Uc = () => "Devi avere effettuato l'accesso per dipingere",
  Rc = () => "ペイントするにはログインが必要です。",
  Gc = () => "Musisz być zalogowany, aby malować",
  Fc = () => "Чтобы рисовать, нужно войти в аккаунт",
  Vc = () => "Щоб малювати, необхідно увійти в акаунт",
  Jc = () => "Bạn cần đăng nhập để tô",
  ne = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Cc() : e === "pt" ? Dc() : e === "ch" ? Mc() : e === "de" ? Bc() : e === "es" ? $c() : e === "fr" ? Lc() : e === "it" ? Uc() : e === "jp" ? Rc() : e === "pl" ? Gc() : e === "ru" ? Fc() : e === "uk" ? Vc() : Jc()
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
  he = (n = {}, t = {}) => {
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
  Sd = () => "Se excedió el número máximo de caracteres",
  kd = () => "Nombre maximal de caractères dépassé",
  xd = () => "Numero massimo di caratteri superato",
  Ed = () => "最大文字数を超過しました",
  Td = () => "Przekroczono maksymalną liczbę znaków",
  Ad = () => "Превышено максимальное количество символов",
  jd = () => "Перевищено максимальну кількість символів",
  Pd = () => "Đã vượt quá số ký tự tối đa",
  qd = (n = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wd() : e === "pt" ? yd() : e === "ch" ? bd() : e === "de" ? vd() : e === "es" ? Sd() : e === "fr" ? kd() : e === "it" ? xd() : e === "jp" ? Ed() : e === "pl" ? Td() : e === "ru" ? Ad() : e === "uk" ? jd() : Pd()
  };
let h;

function z(n) {
  const t = h.__externref_table_alloc();
  return h.__wbindgen_export_2.set(t, n), t
}

function I(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    const r = z(e);
    h.__wbindgen_exn_store(r)
  }
}
const ve = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && ve.decode();
let O = null;

function Z() {
  return (O === null || O.byteLength === 0) && (O = new Uint8Array(h.memory.buffer)), O
}

function C(n, t) {
  return n = n >>> 0, ve.decode(Z().subarray(n, n + t))
}

function Y(n) {
  return n == null
}

function Id(n) {
  h.set_user_id(n)
}
let ee = 0;
const X = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Nd = typeof X.encodeInto == "function" ? function(n, t) {
    return X.encodeInto(n, t)
  } : function(n, t) {
    const e = X.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Se(n, t, e) {
  if (e === void 0) {
    const u = X.encode(n),
      l = t(u.length, 1) >>> 0;
    return Z().subarray(l, l + u.length).set(u), ee = u.length, l
  }
  let r = n.length,
    a = t(r, 1) >>> 0;
  const s = Z();
  let i = 0;
  for (; i < r; i++) {
    const u = n.charCodeAt(i);
    if (u > 127) break;
    s[a + i] = u
  }
  if (i !== r) {
    i !== 0 && (n = n.slice(i)), a = e(a, r, r = i + n.length * 3, 1) >>> 0;
    const u = Z().subarray(a + i, a + r),
      l = Nd(n, u);
    i += l.written, a = e(a, r, i, 1) >>> 0
  }
  return ee = i, a
}

function zd(n) {
  const t = Se(n, h.__wbindgen_malloc, h.__wbindgen_realloc),
    e = ee;
  h.request_url(t, e)
}

function Od() {
  let n, t;
  try {
    const e = h.get_load_payload();
    return n = e[0], t = e[1], C(e[0], e[1])
  } finally {
    h.__wbindgen_free(n, t, 1)
  }
}

function Cd(n) {
  let t, e;
  try {
    const r = Se(n, h.__wbindgen_malloc, h.__wbindgen_realloc),
      a = ee,
      s = h.get_pawtected_endpoint_payload(r, a);
    return t = s[0], e = s[1], C(s[0], s[1])
  } finally {
    h.__wbindgen_free(t, e, 1)
  }
}
async function Dd(n, t) {
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
    return I(function(t, e) {
      return t.call(e)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return I(function(t, e, r) {
      return t.call(e, r)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    return t.crypto
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return I(function(t, e) {
      t.getRandomValues(e)
    }, arguments)
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    return t.msCrypto
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    return new Uint8Array(t)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    return new Function(C(t, e))
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    return new Uint8Array(t, e >>> 0, r >>> 0)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    return new Uint8Array(t >>> 0)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    return t.node
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    return t.process
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return I(function(t, e) {
      t.randomFillSync(e)
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return I(function() {
      return module.require
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    t.set(e, r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return Y(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Y(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Y(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Y(t) ? 0 : z(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    return t.subarray(e >>> 0, r >>> 0)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    return t.versions
  }, n.wbg.__wbindgen_init_externref_table = function() {
    const t = h.__wbindgen_export_2,
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
    return h.memory
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    return C(t, e)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(C(t, e))
  }, n
}

function Bd(n, t) {
  return h = n.exports, ke.__wbindgen_wasm_module = t, O = null, h.__wbindgen_start(), h
}
async function ke(n) {
  if (h !== void 0) return h;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = Md();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await Dd(await n, t);
  return Bd(e, r)
}

function xe(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function $d(n, t) {
  for (const e of t)
    if (xe(n, e)) return !0;
  return !1
}

function Ld(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}
class Ud {
  constructor(t) {
    p(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      a = t % 8;
    if (r >= this.bytes.length) {
      const i = new Uint8Array(r + 1),
        u = i.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) i[l + u] = this.bytes[l];
      this.bytes = i
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
var $, L, U, R, G, F, V, J;
class Rd {
  constructor() {
    p(this, "channel", new BroadcastChannel("user-channel"));
    w(this, $, E());
    w(this, L, E(!0));
    w(this, U, E());
    w(this, R, E(Date.now()));
    w(this, G, N(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((De.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    w(this, F, N(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    w(this, V, N(() => {
      var t;
      return new Ud(Ld(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    w(this, J, N(() => {
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
    return y(f(this, $))
  }
  set data(t) {
    v(f(this, $), t, !0)
  }
  get loading() {
    return y(f(this, L))
  }
  set loading(t) {
    v(f(this, L), t, !0)
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
      }), (t = this.data) != null && t.id && Me("userId", {
        id: this.data.id
      }), !!this.data
    } catch (e) {
      return console.error(e), we.warning(Fo(), {
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
    return xe((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return $d((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
$ = new WeakMap, L = new WeakMap, U = new WeakMap, R = new WeakMap, G = new WeakMap, F = new WeakMap, V = new WeakMap, J = new WeakMap;
const P = new Rd;

function Ee(n) {
  return P.data ? P.data.experiments[n] ?? null : null
}

function pl(n) {
  var t, e;
  return ((e = (t = P.data) == null ? void 0 : t.experiments[n]) == null ? void 0 : e.enabled) ?? !0
}
const gl = {
    griefing: Zr(),
    "multi-accounting": wo(),
    "hate-speech": da(),
    bot: tn(),
    doxxing: Er(),
    "inappropriate-content": ka(),
    other: hn()
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
  pe = {
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
    "Profile Picture": {},
    FRAME: {},
    "Custom Name Font": {},
    "Custom Name Style": {}
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
        seePunishment: "staff.tools.select_pixel.see_punishment",
        archive: "staff.tools.select_pixel.archive"
      },
      autoPainter: "staff.tools.auto_painter.paint",
      wayback: {
        wayback: "staff.tools.wayback.wayback"
      }
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
  re = K,
  Te = K.seasons.length - 1,
  yl = K.seasons[Te].zoom,
  bl = K.seasons[Te].tileSize,
  vl = K.permissions;

function Sl(n) {
  return re.countries[n - 1]
}
class c extends Error {
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

function kl(n, t) {
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
      s = Ee("2025-09_pawtect");
    if (!s) throw new Error("paint request while pawtect experiment not found");
    const u = (await Promise.all(Object.values(a).map(l => {
      const [d, g] = l[0].tile, m = l[0].season, j = {
        colors: l.map(k => k.colorIdx),
        coords: l.flatMap(k => k.pixel),
        fp: e
      }, q = JSON.stringify(j), S = r(m, d, g);
      return this.request(S, {
        method: "POST",
        body: q,
        headers: {
          "x-pawtect-token": s.variant !== "disabled" ? al(q) : "",
          "x-pawtect-variant": s.variant
        },
        credentials: "include"
      })
    }))).filter(l => l.status !== 200);
    if (u.length) {
      const l = u[0];
      if (l.status === 401) throw new Error(ne());
      if (l.status === 403) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(_r());
        const d = await l.json();
        if ((d == null ? void 0 : d.error) === "timeout") {
          const g = new Date(Date.now() + ((d == null ? void 0 : d.durationMs) ?? 0));
          throw new Error(gd({
            until: g.toLocaleString()
          }))
        }
        if ((d == null ? void 0 : d.error) === "refresh") throw new Error(Ri());
        if ((d == null ? void 0 : d.error) === "color-not-owned") throw new Error(pi());
        if ((d == null ? void 0 : d.error) === "event-pixel-present") throw new Error(jn());
        P.refresh()
      } else throw new Error(o())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const a = el(t),
      s = await tl(a),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", a.season.toString()), i.append("px0", a.offsetX.toString()), i.append("py0", a.offsetY.toString()), i.append("width", a.width.toString()), i.append("height", a.height.toString()), i.append("pixels", t.length.toString()), i.append("bitmap", s, "auto-painter.png"), i.append("userId", r.toString());
    const u = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
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
    role: i,
    christmasTreeId: u
  }) {
    const l = new URLSearchParams;
    l.set("x", String(a)), l.set("y", String(s)), u !== void 0 && l.set("christmasTreeId", String(u));
    const d = await this.request(`/s${t}/pixel/${e}/${r}?${l.toString()}`, {
      credentials: "include"
    });
    if (d.status !== 200) {
      const g = await d.text();
      throw new Error(Br({
        err: g
      }))
    }
    return d.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [a, s],
    p1: [i, u]
  }) {
    const l = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${a}&y0=${s}&x1=${i}&y1=${u}`, {
      credentials: "include"
    });
    if (l.status !== 200) {
      const m = await l.text();
      throw console.error("Error while fetching pixel area info", m), new Error(o())
    }
    const d = await l.arrayBuffer(),
      g = new DataView(d);
    return {
      paintedBy: Array.from({
        length: d.byteLength / 4
      }, (m, j) => g.getUint32(j * 4, !0))
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
    if (e.status === 400) throw new Error(bs());
    if (e.status === 403) throw new Error(Pi());
    if (e.status === 429) throw new Error(Oc());
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
    if (e.status === 400) throw new Error(Da());
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
      if (a === "invalid_name") throw new Error(_e());
      if (a === "invalid_discord") throw new Error(Ha());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const s = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(Io({
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
    if (e.status === 400) throw new Error(tu());
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
    if (e.status === 403) throw new Error(ri());
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
    if (r.status === 400) throw new Error(ao());
    if (r.status !== 200) throw new Error(o())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== 200) throw new Error(T());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== 200) throw new Error(T());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === 200) return r.json();
    throw new Error(T())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === 200) return r.json();
    throw new Error(T())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === 200) return r.json();
    throw new Error(T())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw new Error(T())
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
    if (e.status !== 200) throw e.status === 404 ? new Error(le()) : e.status === 403 ? new Error(me()) : e.status === 409 ? new Error(fe()) : new Error(o())
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
      throw r.error === "max_characters" ? new Error(Pt()) : r.error === "name_taken" ? new Error(pt()) : r.error == "empty_name" ? new Error(Rt()) : new Error(o())
    } else throw e.status === 403 ? new Error(Zu()) : new Error(o())
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
    if (e.status !== 200) throw e.status === 403 ? new Error(A()) : e.status === 400 ? new Error(qd()) : new Error(o())
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
    if (r.status !== 200) throw r.status === 403 ? new Error(A()) : new Error(o())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(A()) : new Error(T())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(A()) : new Error(o())
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
    if (e.status !== 200) throw new c(o(), e.status);
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
    if (r.status !== 200) throw new c(o(), r.status);
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
    if (e.status !== 200) throw new c(o(), e.status);
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
    if (a.status !== 200) throw new c(o(), a.status);
    const s = await a.json(),
      i = Array.isArray(s == null ? void 0 : s.members) ? s.members : [];
    return {
      members: i.map(u => ({
        id: Number(u == null ? void 0 : u.id),
        name: String((u == null ? void 0 : u.name) ?? `#${u==null?void 0:u.id}`),
        picture: (u == null ? void 0 : u.picture) ?? null,
        pixelsPainted: Number((u == null ? void 0 : u.pixelsPainted) ?? (u == null ? void 0 : u.pixels_painted) ?? 0),
        lastPixelLatitude: (u == null ? void 0 : u.lastPixelLatitude) ?? null,
        lastPixelLongitude: (u == null ? void 0 : u.lastPixelLongitude) ?? null,
        role: (u == null ? void 0 : u.alliance_role) === "admin" || (u == null ? void 0 : u.role) === "admin" ? "admin" : "member"
      })),
      total: Number((s == null ? void 0 : s.total) ?? i.length)
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
    } else if (r.status !== 200) throw new c(o(), r.status)
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
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(zs()) : new Error(o())
    } else if (r.status !== 200) throw new c(o(), r.status)
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
    if (a.status !== 200) throw new c(o(), a.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (a.status !== 200) throw new c(o(), a.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== 200) throw new c(o(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw e.status === 403 ? new Error(A()) : new Error(o())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw e.status === 403 ? new Error(A()) : new Error(o())
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
    if (e.status !== 200) throw e.status === 403 ? new Error(A()) : new Error(o())
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
      if (e.status === 451) throw new Error(de());
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
    if (t.status !== 200) throw new c(o(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((a, s) => pe[a.reason] - pe[s.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
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
    if (t.status !== 200) throw new c(o(), t.status);
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
    if (s.status !== 200 && s.status !== 400) throw new c(o(), s.status)
  }
  async request(t, e) {
    let r;
    const a = be();
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
      throw console.error("Fetch error:", s), this.online = !1, new Error(Un(), {
        cause: s
      })
    }
    if (r.status === 429) throw new Error(he());
    if (r.status === 503 || r.status === 408) throw new Error(he());
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new c(o(), r.status);
    const a = await r.json();
    return {
      items: a.items ?? [],
      globals: a.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new c(o(), r.status);
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
    if (r.status !== 200) throw new c(o(), r.status);
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
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 404) {
      if (e.status !== 200) throw new c(o(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 404) {
      if (e.status !== 200) throw new c(o(), e.status);
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
    if (a.status !== 200) throw new c(o(), a.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== 200) throw new c(o(), a.status);
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
    if (s.status !== 200) throw new c(o(), s.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status);
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
    if (r.status !== 200) throw new c(o(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.permissions) ? a.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(s => {
      const i = s.is_dollar ?? s.isDollar ?? s.currency ?? s.Currency ?? 0;
      let u;
      if (typeof i == "string") {
        const d = i.toLowerCase();
        u = d === "usd" || d === "dollar" || d === "true"
      } else typeof i == "number" ? u = i !== 0 : u = !!i;
      const l = typeof s.createdAt == "string" ? s.createdAt : s.CreatedAt ? new Date(s.CreatedAt).toISOString() : "";
      return {
        product_name: String(s.productName ?? s.product_name ?? ""),
        amount: Number(s.amount ?? 0),
        price: Number(s.price ?? 0),
        is_dollar: u,
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
    if (r.status !== 200) throw new c(o(), r.status)
  }
  async postAdminRenameUser(t, e, r) {
    const a = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (a.status === 400) {
      const s = await a.json(),
        i = (s == null ? void 0 : s.error) ?? "";
      throw i === "invalid_name" ? new c(_e(), 400) : new c(typeof i == "string" && i ? i : o(), 400)
    }
    if (a.status !== 200) throw new c(o(), a.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), e === "appeals" && r.set("appealId", String(t.appealId));
    const a = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      s = await this.request(a, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== 200) throw new c(o(), s.status);
    const i = await s.json(),
      u = Array.isArray(i == null ? void 0 : i.tickets) ? i.tickets : [];
    return u.sort((l, d) => new Date(d.createdAt).getTime() - new Date(l.createdAt).getTime()), u
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
    if (a.status !== 200) throw new c(o(), a.status);
    const s = await a.json();
    return s == null ? void 0 : s.translation
  }
  mapTicketsToReportRows(t, e) {
    var a, s, i, u, l;
    const r = [];
    for (const d of t) {
      const g = d.status ?? "open";
      if (e === "received") {
        for (const m of d.reports) r.push({
          id: String(m.id),
          ticketId: String(d.id),
          createdAt: m.createdAt ?? d.createdAt,
          byUser: {
            id: Number(m.reportedBy),
            name: String(m.reportedByName ?? m.reportedBy),
            picture: m.reportedByPicture ?? null
          },
          reason: String(m.reason),
          status: g
        });
        continue
      }
      if (e === "sent") {
        for (const m of d.reports) r.push({
          id: String(m.id),
          ticketId: String(d.id),
          createdAt: m.createdAt ?? d.createdAt,
          toUser: {
            id: Number(d.reportedUser.id),
            name: String(d.reportedUser.name),
            picture: d.reportedUser.picture ?? null
          },
          reason: String(m.reason),
          status: g
        });
        continue
      }
      r.push({
        id: String(d.id),
        ticketId: String(d.id),
        createdAt: d.createdAt,
        handledBy: d.status && d.status !== "open" ? {
          id: ((a = d.handledBy) == null ? void 0 : a.id) ?? 0,
          name: ((s = d.handledBy) == null ? void 0 : s.name) ?? "Moderator",
          picture: ((i = d.handledBy) == null ? void 0 : i.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((l = (u = d.reports) == null ? void 0 : u[0]) == null ? void 0 : l.reason) ?? "other"),
        status: g
      })
    }
    return r.sort((d, g) => new Date(g.createdAt).getTime() - new Date(d.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== 200) throw new c(o(), r.status);
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
    if (t.status !== 204) throw new c(o(), t.status)
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 204) throw new c(o(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status)
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
    if (a.status !== 200) throw new c(o(), a.status)
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
    if (a.status !== 200) throw new c(o(), a.status)
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
    if (a.status !== 200) throw new c(o(), a.status)
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
    if (r.status !== 200) throw new c(o(), r.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new c(o(), r.status);
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
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== 200) throw new c(o(), e.status);
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
    if (e.status !== 200 && e.status !== 208) throw new c(o(), e.status);
    return e.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async postSolveAppeal(t, e) {
    const r = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (r.status !== 200) throw new c(o(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
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
    if (a.status !== 200) throw new c(o(), a.status);
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
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async getAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/see", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async postAdminBanWave() {
    const t = await this.request("/staff/dashboard/ban-waves/execute", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async claimEventPixel(t) {
    const e = await this.request(`/event/christmas/claim/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status);
    return e.json()
  }
  async getEventStatus() {
    const t = await this.request("/staff/dashboard/summary/events/status", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
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
    if (s.status !== 200) throw new c(o(), s.status);
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
    if (e.status !== 200) throw new c(o(), e.status);
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
  async getChristmasCase() {
    const t = await this.request("/event/christmas/presents", {
      method: "GET",
      credentials: "include"
    });
    if (t.status === 401) throw new Error(ne());
    if (t.status !== 200) throw new Error(o());
    return t.json()
  }
  async postChristmasCaseOpen() {
    const t = await this.request("/event/christmas/open-case", {
      method: "POST",
      credentials: "include"
    });
    if (t.status === 400) {
      const e = await t.json().catch(() => ({}));
      throw ((e == null ? void 0 : e.error) ?? "") === "no-presents" ? new Error("Você não tem presentes de Natal disponíveis.") : new Error((e == null ? void 0 : e.error) ?? o())
    } else {
      if (t.status === 401) throw new Error(ne());
      if (t.status === 451) throw new Error(de());
      if (t.status === 404) return {
        rewardItemId: 5,
        remainingPresents: 2
      };
      if (t.status !== 200) throw new Error(o())
    }
    return t.json()
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async getWaybackEvents(t) {
    const e = {
        tile_x: t.tileX,
        tile_y: t.tileY,
        x0: t.x0,
        y0: t.y0,
        x1: t.x1,
        y1: t.y1,
        user_id: t.userId,
        alliance_id: t.allianceId,
        region_id: t.regionId,
        limit: t.limit
      },
      r = new URLSearchParams({
        from_ts: t.fromTs.toString(),
        to_ts: t.toTs.toString()
      });
    for (const [s, i] of Object.entries(e)) i !== void 0 && r.set(s, i.toString());
    const a = await this.request(`/staff/tools/wayback/s${t.season}?${r.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status === 403) throw new Error("Access denied");
    if (a.status !== 200) throw new Error("Failed to fetch wayback events");
    return a.json()
  }
  async getWaybackWithSnapshot(t) {
    const e = {
        tile_x: t.tileX,
        tile_y: t.tileY,
        x0: t.x0,
        y0: t.y0,
        x1: t.x1,
        y1: t.y1,
        user_id: t.userId,
        alliance_id: t.allianceId,
        region_id: t.regionId,
        limit: t.limit
      },
      r = new URLSearchParams({
        from_ts: t.fromTs.toString(),
        to_ts: t.toTs.toString()
      });
    for (const [s, i] of Object.entries(e)) i !== void 0 && r.set(s, i.toString());
    const a = await this.request(`/staff/tools/wayback/s${t.season}/snapshot?${r.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status === 403) throw new Error("Access denied");
    if (a.status !== 200) throw new Error("Failed to fetch wayback events with snapshot");
    return a.json()
  }
  async getWaybackVideo(t, e) {
    const r = await this.request(`/staff/tools/wayback/s${t}/video?${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status === 403) throw new Error("Access denied");
    if (r.status !== 200) throw new Error("Failed to fetch wayback video");
    return r
  }
  async postWaybackReconstruct(t, e) {
    const r = await this.request(`/staff/tools/wayback/s${t}/reconstruct`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (r.status === 403) throw new Error("Access denied");
    if (r.status !== 200) throw new Error("Failed to reconstruct wayback data");
    return r
  }
  async getWaybackReconstructImage(t) {
    const e = new URLSearchParams({
        from_ts: String(t.fromTs),
        to_ts: String(t.toTs),
        tile_x: String(t.tileX),
        tile_y: String(t.tileY)
      }),
      r = await this.request(`/staff/tools/wayback/s${t.season}/reconstruct?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status === 403) throw new Error("Access denied");
    if (r.status !== 200) throw new Error("Failed to fetch wayback reconstruct image");
    return r.blob()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === 404) throw new Error(le());
    if (e.status === 403) throw new Error(me());
    if (e.status === 409) throw new Error(fe());
    if (e.status !== 200) throw new Error(o())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new c(o(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== 200) throw new c(o(), r.status);
    return r.json()
  }
  async postCreateFrame(t) {
    const e = new FormData;
    e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
    const r = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== 200) throw new c(o(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async postCreateBadge(t) {
    const e = await this.request("/staff/dashboard/store-manager/badges", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
  async getR2Images(t) {
    const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      r = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== 200) throw new c(o(), r.status);
    return r.json()
  }
  async postUploadR2Image(t) {
    const e = new FormData;
    t.name && e.append("name", t.name), e.append("image", t.image);
    const r = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== 200) throw new c(o(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== 200) throw new c(o(), e.status)
  }
}
W = new WeakMap;

function el(n) {
  var j, q;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const S of n)
    if (S.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (j = re.seasons) == null ? void 0 : j[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    s = Number.POSITIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY;
  const l = n.map(S => {
      const k = Math.round(S.tile[0] * r + S.pixel[0]),
        x = Math.round(S.tile[1] * r + S.pixel[1]);
      return k < a && (a = k), x < s && (s = x), k > i && (i = k), x > u && (u = x), {
        x: k,
        y: x,
        colorIdx: S.colorIdx
      }
    }),
    d = i - a + 1,
    g = u - s + 1;
  if (!Number.isFinite(d) || !Number.isFinite(g) || d <= 0 || g <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const m = new Uint8ClampedArray(d * g * 4);
  for (const {
      x: S,
      y: k,
      colorIdx: x
    }
    of l) {
    const se = (q = re.colors) == null ? void 0 : q[x];
    if (!se) throw new Error(`Unknown palette color index: ${x}`);
    const Pe = S - a,
      H = ((k - s) * d + Pe) * 4,
      [qe, Ie, Ne] = se.rgb;
    m[H] = qe, m[H + 1] = Ie, m[H + 2] = Ne, m[H + 3] = x === 0 ? 1 : 255
  }
  return {
    data: m,
    width: d,
    height: g,
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
    t.toBlob(i => {
      if (!i) {
        s(new Error("Failed to encode auto painter bitmap."));
        return
      }
      a(i)
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
let Q = new Qd(ge),
  ae = !1,
  Ae;

function xl() {
  const n = Ee("2025-09_pawtect");
  if (!n) throw new Error("pawtect experiment not found on load");
  n.variant !== "disabled" && (ae || P.data && ke(Ve).then(rl).catch(t => {
    Ae = t, Be(t)
  }))
}

function rl() {
  Id(P.data.id), Q.postPawtectLoad();
  const n = fetch;
  Object.assign(window, {
    fetch: je((t, e) => {
      let r = null;
      return t instanceof Request ? r = t.url : r = t, r.startsWith("/") || zd(r), n.call(window, t, e)
    })
  }), ae = !0
}

function al(n) {
  if (Ae) throw new Error(Tu());
  if (!ae) throw new Error("Try again in a few seconds or reload the page.");
  return Cd(n)
}

function je(n) {
  return n.bind().bind()
}

function El(n, t, e) {
  const r = {
    [n.name](...a) {
      return e(...a), t(...a)
    }
  } [n.name];
  return je(r)
}
export {
  Oc as $, Un as A, le as B, Te as C, _r as D, Br as E, qd as F, Da as G, Ha as H, _e as I, bs as J, zs as K, T as L, ao as M, Io as N, Fo as O, bl as P, ri as Q, pi as R, vl as S, Pi as T, Ri as U, tu as V, Tu as W, fe as X, Zu as Y, A as Z, me as _, Q as a, ne as a0, he as a1, gd as a2, Sl as a3, pl as a4, fl as a5, kl as a6, yl as a7, gl as b, tn as c, Er as d, o as e, re as f, Zr as g, da as h, ka as i, hl as j, b as k, ll as l, wo as m, _l as n, ml as o, xl as p, El as q, de as r, wl as s, we as t, P as u, pt as v, Pt as w, Rt as x, hn as y, jn as z
};