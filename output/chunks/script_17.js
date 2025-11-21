var xe = Object.defineProperty;
var se = a => {
  throw TypeError(a)
};
var Ie = (a, e, t) => e in a ? xe(a, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : a[e] = t;
var p = (a, e, t) => Ie(a, typeof e != "symbol" ? e + "" : e, t),
  Oe = (a, e, t) => e.has(a) || se("Cannot " + t);
var m = (a, e, t) => (Oe(a, e, "read from private field"), t ? t.call(a) : e.get(a)),
  _ = (a, e, t) => e.has(a) ? se("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t);
import {
  g as f
} from "./DaUp8CSR.js";
import {
  l as v,
  m as oe,
  g as y,
  o as S,
  F as ie,
  u as C
} from "./DFT4Ffb_.js";
import {
  P as ue,
  g as Ne
} from "./DTANWaA3.js";
import {
  s as qe,
  c as Ce
} from "./DLSLm6SD.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "8620b4f6-7c9c-4f29-9436-462e9cea4784", a._sentryDebugIdIdentifier = "sentry-dbid-8620b4f6-7c9c-4f29-9436-462e9cea4784")
  })()
} catch {}

function Oa(...a) {
  return a.filter(Boolean).join(" ")
}
const Me = typeof document < "u";
let ce = 0;
var B, D, U;
class ke {
  constructor() {
    _(this, B, v(oe([])));
    _(this, D, v(oe([])));
    _(this, U, e => {
      const t = this.toasts.findIndex(n => n.id === e);
      return t === -1 ? null : t
    });
    p(this, "addToast", e => {
      Me && this.toasts.unshift(e)
    });
    p(this, "updateToast", ({
      id: e,
      data: t,
      type: n,
      message: s
    }) => {
      const r = this.toasts.findIndex(i => i.id === e),
        c = this.toasts[r];
      this.toasts[r] = {
        ...c,
        ...t,
        id: e,
        title: s,
        type: n,
        updated: !0
      }
    });
    p(this, "create", e => {
      var i;
      const {
        message: t,
        ...n
      } = e, s = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((i = e.id) == null ? void 0 : i.length) > 0 ? e.id : ce++, r = e.dismissable === void 0 ? !0 : e.dismissable, c = e.type === void 0 ? "default" : e.type;
      return ie(() => {
        this.toasts.find(u => u.id === s) ? this.updateToast({
          id: s,
          data: e,
          type: c,
          message: t,
          dismissable: r
        }) : this.addToast({
          ...n,
          id: s,
          title: t,
          dismissable: r,
          type: c
        })
      }), s
    });
    p(this, "dismiss", e => (ie(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map(n => ({
          ...n,
          dismiss: !0
        }));
        return
      }
      const t = this.toasts.findIndex(n => n.id === e);
      this.toasts[t] && (this.toasts[t] = {
        ...this.toasts[t],
        dismiss: !0
      })
    }), e));
    p(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const t = m(this, U).call(this, e);
      if (t !== null) return this.toasts.splice(t, 1), e
    });
    p(this, "message", (e, t) => this.create({
      ...t,
      type: "default",
      message: e
    }));
    p(this, "error", (e, t) => this.create({
      ...t,
      type: "error",
      message: e
    }));
    p(this, "success", (e, t) => this.create({
      ...t,
      type: "success",
      message: e
    }));
    p(this, "info", (e, t) => this.create({
      ...t,
      type: "info",
      message: e
    }));
    p(this, "warning", (e, t) => this.create({
      ...t,
      type: "warning",
      message: e
    }));
    p(this, "loading", (e, t) => this.create({
      ...t,
      type: "loading",
      message: e
    }));
    p(this, "promise", (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: typeof t.loading == "string" ? t.loading : t.loading()
      }));
      const s = e instanceof Promise ? e : e();
      let r = n !== void 0;
      return s.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          r = !1;
          const i = Le(c);
          this.create({
            id: n,
            type: "error",
            message: i
          })
        } else if (t.success !== void 0) {
          r = !1;
          const i = typeof t.success == "function" ? t.success(c) : t.success;
          this.create({
            id: n,
            type: "success",
            message: i
          })
        }
      }).catch(c => {
        if (t.error !== void 0) {
          r = !1;
          const i = typeof t.error == "function" ? t.error(c) : t.error;
          this.create({
            id: n,
            type: "error",
            message: i
          })
        }
      }).finally(() => {
        var c;
        r && (this.dismiss(n), n = void 0), (c = t.finally) == null || c.call(t)
      }), n
    });
    p(this, "custom", (e, t) => {
      const n = (t == null ? void 0 : t.id) || ce++;
      return this.create({
        component: e,
        id: n,
        ...t
      }), n
    });
    p(this, "removeHeight", e => {
      this.heights = this.heights.filter(t => t.toastId !== e)
    });
    p(this, "setHeight", e => {
      const t = m(this, U).call(this, e.toastId);
      if (t === null) {
        this.heights.push(e);
        return
      }
      this.heights[t] = e
    });
    p(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return y(m(this, B))
  }
  set toasts(e) {
    S(m(this, B), e, !0)
  }
  get heights() {
    return y(m(this, D))
  }
  set heights(e) {
    S(m(this, D), e, !0)
  }
}
B = new WeakMap, D = new WeakMap, U = new WeakMap;

function Le(a) {
  return a && typeof a == "object" && "status" in a ? `HTTP error! Status: ${a.status}` : `Error! ${a}`
}
const b = new ke;

function Be(a, e) {
  return b.create({
    message: a,
    ...e
  })
}
var ee;
class Na {
  constructor() {
    _(this, ee, C(() => b.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return y(m(this, ee))
  }
}
ee = new WeakMap;
const De = Be,
  fe = Object.assign(De, {
    success: b.success,
    info: b.info,
    warning: b.warning,
    error: b.error,
    custom: b.custom,
    message: b.message,
    promise: b.promise,
    dismiss: b.dismiss,
    loading: b.loading,
    getActiveToasts: () => b.toasts.filter(a => !a.dismiss)
  });
let me = v(void 0);
const ge = () => y(me),
  qa = a => {
    const e = new URL(a, ue),
      t = ge();
    return t && e.searchParams.set("override", t.token), e.toString()
  };

function Ca() {
  try {
    Ue()
  } catch (a) {
    console.error("failed to load override", a)
  }
}

function Ue() {
  const e = new URL(location.href).searchParams.get("override");
  if (!e) return;
  const t = e.split(".");
  if (t.length !== 2) throw new Error("override token wrong amount of parts");
  const [n] = t, s = JSON.parse(atob(n));
  if (Date.now() / 1e3 > s.expiresAt) throw new Error("override token expired");
  fe.info(`Currently using the ${s.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 6e4
  }), S(me, {
    token: e,
    payload: s
  }, !0)
}
const Ge = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  Re = () => "Unexpected server error. Try again later.",
  $e = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  o = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Re() : $e(),
  je = () => "You need to be logged in to paint",
  Fe = () => "Você precisa estar conectado para pintar",
  Je = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? je() : Fe(),
  Ke = a => `Error while painting: ${a.err}`,
  Ve = a => `Erro enquanto pinta: ${a.err}`,
  Ye = (a, e = {}) => (e.locale ?? f()) === "en" ? Ke(a) : Ve(a),
  We = () => "Invalid phone number",
  ze = () => "Número de telefone inválido",
  He = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? We() : ze(),
  Ze = () => "Phone already used",
  Xe = () => "Telefone já usado",
  Qe = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Ze() : Xe(),
  et = () => "You have to wait to resend a code",
  tt = () => "Você tem de esperar para reenviar um código",
  nt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? et() : tt(),
  at = () => "Invalid code",
  rt = () => "Código inválido",
  st = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? at() : rt(),
  ot = () => "Operation not allowed. Maybe you have too many favorite locations.",
  it = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  ct = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? ot() : it(),
  dt = () => "Location name is too big (max. 128 characters)",
  lt = () => "Nome da localização é grande demais (max. 128 caracteres)",
  ut = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? dt() : lt(),
  ft = () => "Couldn't complete the purchase. This item does not exist.",
  mt = () => "Não foi possível concluir a compra. Este item não existe.",
  gt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? ft() : mt(),
  ht = () => "You do not have enough droplets to buy this item.",
  pt = () => "Você não tem gotas suficientes para comprar este item.",
  wt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? ht() : pt(),
  _t = () => "You already have this item. Please refresh the page.",
  yt = () => "Você já possui este item. Atualize a página.",
  bt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? _t() : yt(),
  St = () => "Alliance name exceeded the maximum number of characters",
  Tt = () => "O nome da aliança excedeu o número máximo de caracteres",
  Et = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? St() : Tt(),
  vt = () => "Alliance name already taken",
  Pt = () => "Já possui uma aliança com esse nome",
  At = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? vt() : Pt(),
  xt = () => "Alliance with empty name",
  It = () => "Aliança com nome vazio",
  Ot = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? xt() : It(),
  Nt = () => "You are already in an alliance",
  qt = () => "Você já está em uma aliança",
  Ct = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Nt() : qt(),
  Mt = () => "You are not allowed to do this",
  kt = () => "Você não tem permissão para fazer isso",
  x = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Mt() : kt(),
  Lt = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Bt = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Dt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Lt() : Bt(),
  Ut = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Gt = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  de = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Ut() : Gt(),
  Rt = () => "No internet access or the servers are offline. Try again later.",
  $t = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  jt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Rt() : $t(),
  Ft = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Jt = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Kt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Ft() : Jt(),
  Vt = () => "Refresh your page to get the latest update",
  Yt = () => "Recarregue sua página para obter as últimas atualizações",
  Wt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Vt() : Yt(),
  zt = () => "Inappropriate content",
  Ht = () => "Conteúdo inapropriado",
  Zt = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? zt() : Ht(),
  Xt = () => "Botting",
  Qt = () => "Uso de bots",
  en = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Xt() : Qt(),
  tn = () => "Hate speech",
  nn = () => "Discurso de Ódio",
  an = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? tn() : nn(),
  rn = () => "Griefing",
  sn = () => "Griefing",
  on = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? rn() : sn(),
  cn = () => "Doxxing",
  dn = () => "Doxxing",
  ln = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? cn() : dn(),
  un = () => "Leaderboard is temporarily disabled",
  fn = () => "O ranking está temporariamente desativado",
  I = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? un() : fn(),
  mn = () => "Multi-accounting",
  gn = () => "Múltiplas contas",
  hn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? mn() : gn(),
  pn = () => "Breaking the rules",
  wn = () => "Quebrar as regras",
  _n = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? pn() : wn(),
  yn = () => "Your account has been suspended for breaking the rules",
  bn = () => "Sua conta foi suspensa por quebrar as regras",
  Sn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? yn() : bn(),
  Tn = () => "Your account has been banned for violating the rules",
  En = () => "A sua conta foi banida por quebrar as regras",
  vn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Tn() : En(),
  Pn = a => `Your account has been suspended out until ${a.until}`,
  An = a => `A sua conta está suspensa até ${a.until}`,
  xn = (a, e = {}) => (e.locale ?? f()) === "en" ? Pn(a) : An(a),
  In = () => "You are trying to paint with a color you do not own",
  On = () => "Você está tentando pintar com uma cor que não possui",
  Nn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? In() : On(),
  qn = () => "The new leader must be a member of the alliance",
  Cn = () => "O novo líder deve ser um membro da aliança",
  Mn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? qn() : Cn(),
  kn = () => "The name contains disallowed characters or words. Please choose a different name.",
  Ln = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Bn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? kn() : Ln(),
  Dn = () => "Invalid discord.",
  Un = () => "Discord inválido.",
  Gn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Dn() : Un(),
  Rn = () => "The typed username does not match your current username.",
  $n = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  jn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Rn() : $n(),
  Fn = a => `You can change your name again in ${a.days} days`,
  Jn = a => `Você pode alterar seu nome novamente em ${a.days} dias.`,
  Kn = (a, e = {}) => (e.locale ?? f()) === "en" ? Fn(a) : Jn(a),
  he = () => "You cannot paint over event pixels",
  Vn = he,
  Yn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? he() : Vn(),
  Wn = () => "Error loading WebAssembly module. Try to use another browser.",
  zn = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Hn = (a = {}, e = {}) => (e.locale ?? f()) === "en" ? Wn() : zn();
let h;

function M(a) {
  const e = h.__externref_table_alloc();
  return h.__wbindgen_export_2.set(e, a), e
}

function q(a, e) {
  try {
    return a.apply(this, e)
  } catch (t) {
    const n = M(t);
    h.__wbindgen_exn_store(n)
  }
}
const pe = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && pe.decode();
let k = null;

function H() {
  return (k === null || k.byteLength === 0) && (k = new Uint8Array(h.memory.buffer)), k
}

function L(a, e) {
  return a = a >>> 0, pe.decode(H().subarray(a, a + e))
}

function z(a) {
  return a == null
}

function Zn(a) {
  h.set_user_id(a)
}
let Q = 0;
const Z = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Xn = typeof Z.encodeInto == "function" ? function(a, e) {
    return Z.encodeInto(a, e)
  } : function(a, e) {
    const t = Z.encode(a);
    return e.set(t), {
      read: a.length,
      written: t.length
    }
  };

function we(a, e, t) {
  if (t === void 0) {
    const i = Z.encode(a),
      l = e(i.length, 1) >>> 0;
    return H().subarray(l, l + i.length).set(i), Q = i.length, l
  }
  let n = a.length,
    s = e(n, 1) >>> 0;
  const r = H();
  let c = 0;
  for (; c < n; c++) {
    const i = a.charCodeAt(c);
    if (i > 127) break;
    r[s + c] = i
  }
  if (c !== n) {
    c !== 0 && (a = a.slice(c)), s = t(s, n, n = c + a.length * 3, 1) >>> 0;
    const i = H().subarray(s + c, s + n),
      l = Xn(a, i);
    c += l.written, s = t(s, n, c, 1) >>> 0
  }
  return Q = c, s
}

function Qn(a) {
  const e = we(a, h.__wbindgen_malloc, h.__wbindgen_realloc),
    t = Q;
  h.request_url(e, t)
}

function ea() {
  let a, e;
  try {
    const t = h.get_load_payload();
    return a = t[0], e = t[1], L(t[0], t[1])
  } finally {
    h.__wbindgen_free(a, e, 1)
  }
}

function ta(a) {
  let e, t;
  try {
    const n = we(a, h.__wbindgen_malloc, h.__wbindgen_realloc),
      s = Q,
      r = h.get_pawtected_endpoint_payload(n, s);
    return e = r[0], t = r[1], L(r[0], r[1])
  } finally {
    h.__wbindgen_free(e, t, 1)
  }
}
async function na(a, e) {
  if (typeof Response == "function" && a instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(a, e)
    } catch (n) {
      if (a.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n
    }
    const t = await a.arrayBuffer();
    return await WebAssembly.instantiate(t, e)
  } else {
    const t = await WebAssembly.instantiate(a, e);
    return t instanceof WebAssembly.Instance ? {
      instance: t,
      module: a
    } : t
  }
}

function aa() {
  const a = {};
  return a.wbg = {}, a.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    return e.buffer
  }, a.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return q(function(e, t) {
      return e.call(t)
    }, arguments)
  }, a.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return q(function(e, t, n) {
      return e.call(t, n)
    }, arguments)
  }, a.wbg.__wbg_crypto_574e78ad8b13b65f = function(e) {
    return e.crypto
  }, a.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return q(function(e, t) {
      e.getRandomValues(t)
    }, arguments)
  }, a.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(e) {
    return e.msCrypto
  }, a.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return new Uint8Array(e)
  }, a.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
    return new Function(L(e, t))
  }, a.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0)
  }, a.wbg.__wbg_newwithlength_a381634e90c276d4 = function(e) {
    return new Uint8Array(e >>> 0)
  }, a.wbg.__wbg_node_905d3e251edff8a2 = function(e) {
    return e.node
  }, a.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(e) {
    return e.process
  }, a.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return q(function(e, t) {
      e.randomFillSync(t)
    }, arguments)
  }, a.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return q(function() {
      return module.require
    }, arguments)
  }, a.wbg.__wbg_set_65595bdd868b3009 = function(e, t, n) {
    e.set(t, n >>> 0)
  }, a.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const e = typeof global > "u" ? null : global;
    return z(e) ? 0 : M(e)
  }, a.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return z(e) ? 0 : M(e)
  }, a.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const e = typeof self > "u" ? null : self;
    return z(e) ? 0 : M(e)
  }, a.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const e = typeof window > "u" ? null : window;
    return z(e) ? 0 : M(e)
  }, a.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, n) {
    return e.subarray(t >>> 0, n >>> 0)
  }, a.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    return e.versions
  }, a.wbg.__wbindgen_init_externref_table = function() {
    const e = h.__wbindgen_export_2,
      t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1)
  }, a.wbg.__wbindgen_is_function = function(e) {
    return typeof e == "function"
  }, a.wbg.__wbindgen_is_object = function(e) {
    const t = e;
    return typeof t == "object" && t !== null
  }, a.wbg.__wbindgen_is_string = function(e) {
    return typeof e == "string"
  }, a.wbg.__wbindgen_is_undefined = function(e) {
    return e === void 0
  }, a.wbg.__wbindgen_memory = function() {
    return h.memory
  }, a.wbg.__wbindgen_string_new = function(e, t) {
    return L(e, t)
  }, a.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(L(e, t))
  }, a
}

function ra(a, e) {
  return h = a.exports, _e.__wbindgen_wasm_module = e, k = null, h.__wbindgen_start(), h
}
async function _e(a) {
  if (h !== void 0) return h;
  typeof a < "u" && (Object.getPrototypeOf(a) === Object.prototype ? {
    module_or_path: a
  } = a : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof a > "u" && (a = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const e = aa();
  (typeof a == "string" || typeof Request == "function" && a instanceof Request || typeof URL == "function" && a instanceof URL) && (a = fetch(a));
  const {
    instance: t,
    module: n
  } = await na(await a, e);
  return ra(t, n)
}
const Ma = {
    griefing: on(),
    "multi-accounting": hn(),
    "hate-speech": an(),
    bot: en(),
    doxxing: ln(),
    "inappropriate-content": Zt(),
    other: _n()
  },
  ka = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  le = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  };

function sa(a) {
  const e = atob(a),
    t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t
}
class oa {
  constructor(e) {
    p(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const n = Math.floor(e / 8),
      s = e % 8;
    if (n >= this.bytes.length) {
      const c = new Uint8Array(n + 1),
        i = c.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) c[l + i] = this.bytes[l];
      this.bytes = c
    }
    const r = this.bytes.length - 1 - n;
    t ? this.bytes[r] = this.bytes[r] | 1 << s : this.bytes[r] = this.bytes[r] & ~(1 << s)
  }
  get(e) {
    const t = Math.floor(e / 8),
      n = e % 8,
      s = this.bytes.length;
    return t > s ? !1 : (this.bytes[s - 1 - t] & 1 << n) !== 0
  }
}

function La(a) {
  return new Promise((e, t) => {
    const n = new FileReader;
    n.onload = () => {
      const s = n.result;
      if (!s || typeof s != "string") {
        t(new Error("Could not read blob as data URL"));
        return
      }
      e(s.substring(s.indexOf(",") + 1))
    }, n.readAsDataURL(a)
  })
}
var G, R, $, j, F, J, K, V;
class ia {
  constructor() {
    p(this, "channel", new BroadcastChannel("user-channel"));
    _(this, G, v());
    _(this, R, v(!0));
    _(this, $, v());
    _(this, j, v(Date.now()));
    _(this, F, C(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const t = e.count + Math.max((Ne.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    _(this, J, C(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    _(this, K, C(() => {
      var e;
      return new oa(sa(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    _(this, V, C(() => {
      var t;
      if (!((t = this.data) != null && t.timeoutUntil)) return;
      const e = new Date(this.data.timeoutUntil);
      if (!(e.getTime() < Date.now())) return e
    }));
    this.channel.onmessage = e => {
      const t = JSON.parse(e.data);
      t.type === "refresh" ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return y(m(this, G))
  }
  set data(e) {
    S(m(this, G), e, !0)
  }
  get loading() {
    return y(m(this, R))
  }
  set loading(e) {
    S(m(this, R), e, !0)
  }
  get notificiationCount() {
    return y(m(this, $))
  }
  set notificiationCount(e) {
    S(m(this, $), e, !0)
  }
  get lastFetch() {
    return y(m(this, j))
  }
  set lastFetch(e) {
    S(m(this, j), e)
  }
  get charges() {
    return y(m(this, F))
  }
  set charges(e) {
    S(m(this, F), e)
  }
  get cooldown() {
    return y(m(this, J))
  }
  set cooldown(e) {
    S(m(this, J), e)
  }
  get flagsBitmap() {
    return y(m(this, K))
  }
  set flagsBitmap(e) {
    S(m(this, K), e)
  }
  get timeoutUntil() {
    return y(m(this, V))
  }
  set timeoutUntil(e) {
    S(m(this, V), e)
  }
  async refresh() {
    var e;
    try {
      return this.loading = !0, this.data = await X.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificiationCount === void 0 && X.getNotificationCount().then(t => {
        this.notificiationCount = t
      }), (e = this.data) != null && e.id && qe("userId", {
        id: this.data.id
      }), !!this.data
    } catch (t) {
      return console.error(t), fe.warning(jt(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await X.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var n;
    return e < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
G = new WeakMap, R = new WeakMap, $ = new WeakMap, j = new WeakMap, F = new WeakMap, J = new WeakMap, K = new WeakMap, V = new WeakMap;
const N = new ia,
  ca = [{
    tileSize: 1e3,
    zoom: 11
  }],
  da = 4,
  la = 6e3,
  ua = [{
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
  fa = {
    needsPhoneVerification: "needs_phone_verification"
  },
  ma = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  ga = {
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
  ha = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  te = {
    seasons: ca,
    regionSize: da,
    refreshIntervalMs: la,
    colors: ua,
    errors: fa,
    items: ma,
    products: ga,
    countries: ha
  },
  ne = te,
  ye = te.seasons.length - 1,
  Ba = te.seasons[ye].zoom,
  Da = te.seasons[ye].tileSize;

function Ua(a) {
  return ne.countries[a - 1]
}
class d extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}

function pa(a, e) {
  const t = {};
  for (const n of a) {
    const s = e(n);
    let r = t[s];
    r ? r.push(n) : t[s] = [n]
  }
  return t
}

function Ga(a, e) {
  const t = {};
  for (const n of a) {
    const s = e(n);
    t[s] = n
  }
  return t
}

function be(a) {
  return N.data ? N.data.experiments[a] ?? null : null
}

function Ra(a) {
  var e, t;
  return ((t = (e = N.data) == null ? void 0 : e.experiments[a]) == null ? void 0 : t.enabled) ?? !0
}
var Y;
class wa {
  constructor(e) {
    _(this, Y, v(!0));
    this.url = e
  }
  get online() {
    return y(m(this, Y))
  }
  set online(e) {
    S(m(this, Y), e, !0)
  }
  async paint(e, t) {
    const n = pa(e, i => `t=(${i.tile[0]},${i.tile[1]}),s=${i.season}`),
      s = be("2025-09_pawtect");
    if (!s) throw new Error("paint request while pawtect experiment not found");
    const c = (await Promise.all(Object.values(n).map(i => {
      const [l, u] = i[0].tile, w = i[0].season, g = {
        colors: i.map(O => O.colorIdx),
        coords: i.flatMap(O => O.pixel),
        fp: t
      }, P = JSON.stringify(g);
      return this.request(`/s${w}/pixel/${l}/${u}`, {
        method: "POST",
        body: P,
        headers: {
          "x-pawtect-token": s.variant !== "disabled" ? Ta(P) : "",
          "x-pawtect-variant": s.variant
        },
        credentials: "include"
      })
    }))).filter(i => i.status !== 200);
    if (c.length) {
      const i = c[0];
      if (i.status === 401) throw new Error(Je());
      if (i.status === 403) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(Kt());
        const l = await i.json();
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(Wt());
        if ((l == null ? void 0 : l.error) === "color-not-owned") throw new Error(Nn());
        if ((l == null ? void 0 : l.error) === "event-pixel-present") throw new Error(Yn());
        N.refresh()
      } else if (i.status === 451) {
        const l = await c[0].json();
        l == null || l.err;
        const u = l == null ? void 0 : l.suspension;
        if (u === "ban") throw new Error(vn());
        if (u === "timeout") {
          const w = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(xn({
            until: w.toLocaleString()
          }))
        } else throw new Error(o())
      } else throw new Error(o())
    }
  }
  async adminAutoPainterPaint(e, t) {
    const n = _a(e),
      s = await ya(n),
      r = new FormData;
    r.append("fingerprint", t), r.append("season", n.season.toString()), r.append("px0", n.offsetX.toString()), r.append("py0", n.offsetY.toString()), r.append("width", n.width.toString()), r.append("height", n.height.toString()), r.append("pixels", e.length.toString()), r.append("bitmap", s, "auto-painter.png");
    const c = await this.request("/admin/auto-painter/paint", {
      method: "POST",
      body: r,
      credentials: "include"
    });
    if (c.status === 403) throw new Error("Auto painter is restricted to administrators.");
    if (c.status !== 200) throw new Error(o());
    return c.json()
  }
  async getPixelInfo({
    season: e,
    tile: [t, n],
    pixel: [s, r],
    isModerator: c = !1
  }) {
    const i = new URLSearchParams;
    i.set("x", String(s)), i.set("y", String(r));
    const l = await this.request(`${c?"/moderator":""}/s${e}/pixel/${t}/${n}?${i.toString()}`, {
      credentials: "include"
    });
    if (l.status !== 200) {
      const u = await l.text();
      throw new Error(Ye({
        err: u
      }))
    }
    return l.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [t, n],
    p0: [s, r],
    p1: [c, i]
  }) {
    const l = await this.request(`/moderator/pixel-area/s${e}/${t}/${n}?x0=${s}&y0=${r}&x1=${c}&y1=${i}`, {
      credentials: "include"
    });
    if (l.status !== 200) {
      const g = await l.text();
      throw console.error("Error while fetching pixel area info", g), new Error(o())
    }
    const u = await l.arrayBuffer(),
      w = new DataView(u);
    return {
      paintedBy: Array.from({
        length: u.byteLength / 4
      }, (g, P) => w.getUint32(P * 4, !0))
    }
  }
  async me() {
    const e = await this.request("/me", {
      credentials: "include"
    });
    if (e.status === 200) return await e.json()
  }
  async logout() {
    const e = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(await e.text());
    return await e.json()
  }
  async refreshPaymentSession(e) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(e)}`, {
      method: "POST",
      credentials: "include"
    })).status === 200
  }
  async getOtpCooldown() {
    const e = await this.request("/otp/cooldown", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(o());
    return await e.json()
  }
  async sendOtp(e) {
    const t = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: e
      })
    });
    if (t.status === 400) throw new Error(He());
    if (t.status === 403) throw new Error(Qe());
    if (t.status === 429) throw new Error(nt());
    if (t.status !== 200) throw new Error(o());
    return await t.json()
  }
  async verifyOtp(e) {
    const t = await this.request("/otp/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: e
      })
    });
    if (t.status === 400) throw new Error(st());
    if (t.status !== 200) throw new Error(o());
    return await t.json()
  }
  async updateMe(e) {
    const t = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (t.status === 400) {
      const n = await t.json(),
        s = (n == null ? void 0 : n.error) ?? "";
      if (s === "invalid_name") throw new Error(Bn());
      if (s === "invalid_discord") throw new Error(Gn());
      if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
        const r = parseInt(s.split(":")[1] ?? "0", 10);
        throw new Error(Kn({
          days: r
        }))
      }
      throw new Error(n == null ? void 0 : n.error)
    } else if (t.status !== 200) throw new Error(o())
  }
  async deleteMe(e) {
    const t = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: e
      })
    });
    if (t.status === 400) throw new Error(jn());
    if (t.status !== 200) throw new Error(o())
  }
  async favoriteLocation(e) {
    const t = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: e[0],
        longitude: e[1]
      }),
      credentials: "include"
    });
    if (t.status === 403) throw new Error(ct());
    if (t.status !== 200) throw new Error(o())
  }
  async deleteFavoriteLocation(e) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: e
        }),
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateFavoriteLocation(e, t) {
    const n = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: e,
        name: t
      }),
      credentials: "include"
    });
    if (n.status === 400) throw new Error(ut());
    if (n.status !== 200) throw new Error(o())
  }
  async leaderboardPlayers(e) {
    const t = await this.request(`/leaderboard/player/${e}`);
    if (t.status !== 200) throw new Error(I());
    return t.json()
  }
  async leaderboardAlliances(e) {
    const t = await this.request(`/leaderboard/alliance/${e}`);
    if (t.status !== 200) throw new Error(I());
    return t.json()
  }
  async leaderboardRegions(e, t = 0) {
    const n = await this.request(`/leaderboard/region/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(I())
  }
  async leaderboardRegionPlayers(e, t) {
    const n = await this.request(`/leaderboard/region/players/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(I())
  }
  async leaderboardRegionAlliances(e, t) {
    const n = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(I())
  }
  async leaderboardCountries(e) {
    const t = await this.request(`/leaderboard/country/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(I())
  }
  async getRandomTile(e) {
    const t = await this.request(`/s${e}/tile/random`);
    if (t.status !== 200) throw new Error(o());
    return t.json()
  }
  async purchase(e) {
    const t = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: e
      })
    });
    if (t.status !== 200) throw t.status === 404 ? new Error(gt()) : t.status === 403 ? new Error(wt()) : t.status === 409 ? new Error(bt()) : new Error(o())
  }
  async getAlliance() {
    const e = await this.request("/alliance", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(o())
  }
  async createAlliance(e) {
    const t = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (t.status === 200) return t.json();
    if (t.status === 400) {
      const n = await t.json();
      throw n.error === "max_characters" ? new Error(Et()) : n.error === "name_taken" ? new Error(At()) : n.error == "empty_name" ? new Error(Ot()) : new Error(o())
    } else throw t.status === 403 ? new Error(Ct()) : new Error(o())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(x()) : new Error(o())
  }
  async updateAllianceHeadquarters(e, t) {
    const n = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: e,
        longitude: t
      })
    });
    if (n.status !== 200) throw n.status === 403 ? new Error(x()) : new Error(o())
  }
  async allianceLeaderboard(e) {
    const t = await this.request(`/alliance/leaderboard/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(x()) : new Error(I())
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(x()) : new Error(o())
  }
  async joinAlliance(e) {
    switch ((await this.request(`/alliance/join/${e}`, {
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
  async getAllianceMembers(e) {
    const t = await this.request(`/alliance/members/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(o())
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(o())
  }
  async getAllianceById(e) {
    const t = await this.request(`/admin/alliances/${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status === 404) return;
    if (t.status !== 200) throw new d(o(), t.status);
    const n = await t.json();
    return {
      id: Number(n.id),
      name: String(n.name),
      pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(e) {
    const t = new URLSearchParams({
        q: e
      }),
      n = await this.request(`/admin/alliances/search?${t.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== 200) throw new d(o(), n.status);
    const s = await n.json();
    return (Array.isArray(s) ? s : []).map(r => ({
      id: Number(r.id),
      name: String(r.name ?? ""),
      pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
    }))
  }
  async searchAlliances(e) {
    return this.searchAlliance(e)
  }
  async getAllianceFull(e) {
    const t = await this.request(`/admin/alliances/${e}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status === 404) return null;
    if (t.status !== 200) throw new d(o(), t.status);
    const n = await t.json(),
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
      members: s.map(r => ({
        id: Number(r == null ? void 0 : r.id),
        name: String((r == null ? void 0 : r.name) ?? `#${r==null?void 0:r.id}`),
        picture: (r == null ? void 0 : r.picture) ?? null,
        pixelsPainted: Number((r == null ? void 0 : r.pixelsPainted) ?? (r == null ? void 0 : r.pixels_painted) ?? 0),
        lastPixelLatitude: (r == null ? void 0 : r.lastPixelLatitude) ?? null,
        lastPixelLongitude: (r == null ? void 0 : r.lastPixelLongitude) ?? null,
        role: (r == null ? void 0 : r.alliance_role) === "admin" || (r == null ? void 0 : r.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(e, t) {
    const n = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      s = await this.request(`/admin/alliances/${e}/members?${n.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (s.status === 404) return {
      members: [],
      total: 0
    };
    if (s.status !== 200) throw new d(o(), s.status);
    const r = await s.json(),
      c = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
    return {
      members: c.map(i => ({
        id: Number(i == null ? void 0 : i.id),
        name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member"
      })),
      total: Number((r == null ? void 0 : r.total) ?? c.length)
    }
  }
  async renameAlliance(e, t) {
    const n = await this.request(`/admin/alliances/${e}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (n.status === 400) {
      const s = await n.json().catch(() => ({}));
      throw new Error((s == null ? void 0 : s.error) ?? o())
    } else if (n.status !== 200) throw new d(o(), n.status)
  }
  async changeAllianceLeader(e, t) {
    const n = await this.request(`/admin/alliances/${e}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: t
      })
    });
    if (n.status === 400) {
      const s = await n.json();
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(Mn()) : new Error(o())
    } else if (n.status !== 200) throw new d(o(), n.status)
  }
  async banAllAllianceMembers(e, t, n) {
    const s = await this.request(`/admin/alliances/${e}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: t,
        notes: n
      })
    });
    if (s.status !== 200) throw new d(o(), s.status)
  }
  async setAllianceMemberRole(e, t, n) {
    const s = await this.request(`/admin/alliances/${e}/members/${t}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: n
      })
    });
    if (s.status !== 200) throw new d(o(), s.status)
  }
  async removeAllianceMember(e, t) {
    const n = await this.request(`/admin/alliances/${e}/members/${t}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== 200) throw new d(o(), n.status)
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(x()) : new Error(o())
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(x()) : new Error(o())
  }
  async equipFlag(e) {
    if ((await this.request(`/flag/equip/${e}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(o());
    return e.json()
  }
  async changeProfilePicture(e) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      })).status !== 200) throw new Error(o())
  }
  async unbanAllianceUser(e) {
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(x()) : new Error(o())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(e) {
    const t = await this.request(`/payment/abacatepay/create/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (t.status === 400) {
      const s = await t.json();
      throw new Error(s == null ? void 0 : s.error)
    } else {
      if (t.status === 451) throw new Error(Sn());
      if (t.status !== 200) throw new Error(o())
    }
    return await t.json()
  }
  async refreshPixPayment(e) {
    const t = await this.request(`/payment/abacatepay/refresh/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (t.status === 400) {
      const n = await t.json();
      throw new Error(n == null ? void 0 : n.error)
    } else if (t.status !== 200) throw new Error("Unexpected error on the server. Try again later");
    return t.json()
  }
  async getPixStatus(e) {
    const t = await this.request(`/payment/abacatepay/status/pix/${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new Error("Erro inesperado. Tente atualizar a página.");
    return t.json()
  }
  async getModeratorTickets() {
    const e = await this.request("/moderator/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    const t = await e.json();
    for (const n of t.tickets) n.reports.sort((s, r) => le[s.reason] - le[r.reason]);
    return t
  }
  async countMyTicketsClosedToday() {
    const e = await this.request("/moderator/count-my-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const e = await this.request("/moderator/open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    const {
      tickets: t
    } = await e.json();
    return t
  }
  async assignNewTickets() {
    const e = await this.request("/moderator/assign-new-tickets", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async setTicketStatus(e, t, n, s) {
    const r = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: t,
        selectedReportId: n,
        assignedReason: s
      })
    });
    if (r.status !== 200 && r.status !== 400) throw new d(o(), r.status)
  }
  async request(e, t) {
    let n;
    const s = ge();
    if (s) {
      const r = new Headers(t == null ? void 0 : t.headers);
      r.set("x-alien-override", s.token), t = {
        ...t ?? {},
        headers: r
      }
    }
    try {
      n = await fetch(`${this.url}${e}`, t), this.online = !0
    } catch (r) {
      throw console.error("Fetch error:", r), this.online = !1, new Error(Dt(), {
        cause: r
      })
    }
    if (n.status === 429) throw new Error(de());
    if (n.status === 503 || n.status === 408) throw new Error(de());
    return n
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getOpenReportsSummary() {
    const e = await this.request("/admin/count-all-reports", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, t) {
    const n = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== 200) throw new d(o(), n.status);
    return (await n.json()).items.map(r => ({
      ...r,
      suspensionRate: (r.ban + r.timeout) / r.total
    }))
  }
  async getClosedReportsByMod(e, t) {
    const n = await this.request(`/admin/closed-reports?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== 200) throw new d(o(), n.status);
    return (await n.json()).items.map(r => ({
      ...r,
      suspensionRate: (r.ban + r.timeout) / r.total
    }))
  }
  async getUserInfoById(e) {
    const t = await this.request(`/moderator/user-info/${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new d(o(), t.status);
      return t.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request("/moderator/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new d(o(), t.status);
      return t.json()
    }
  }
  async removeTimeout(e) {
    const t = await this.request("/admin/remove-timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status)
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status)
  }
  async getUserNotes(e) {
    const t = await this.request(`/moderator/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async addUserNote(e, t) {
    const n = await this.request("/moderator/users/notes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        note: t
      })
    });
    if (n.status !== 200) throw new d(o(), n.status)
  }
  async getUserPurchases(e) {
    const t = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const n = await t.json();
    return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(r => ({
      id: String(r.id ?? ""),
      product_name: String(r.productName ?? r.product_name ?? ""),
      price: Number(r.price ?? 0),
      amount: Number(r.amount ?? 0),
      createdAt: typeof r.createdAt == "string" ? r.createdAt : r.CreatedAt ? new Date(r.CreatedAt).toISOString() : ""
    }))
  }
  async postSetUserDroplets(e, t) {
    const n = await this.request("/admin/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        droplets: t
      })
    });
    if (n.status !== 200) throw new d(o(), n.status)
  }
  async getUserTickets(e) {
    const {
      userId: t,
      kind: n,
      page: s = 0,
      pageSize: r = 20
    } = e, c = new URLSearchParams({
      userId: String(t),
      kind: n,
      page: String(s),
      pageSize: String(r)
    }), i = await this.request(`/moderator/users/tickets?${c.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (i.status !== 200) throw new d(o(), i.status);
    const l = await i.json(),
      u = Array.isArray(l == null ? void 0 : l.tickets) ? l.tickets : [];
    return u.sort((w, g) => new Date(g.createdAt).getTime() - new Date(w.createdAt).getTime()), u
  }
  async getModerationTranslate(e) {
    const t = await this.request("/moderator/ticket/translate", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        text: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status);
    const n = await t.json();
    return n == null ? void 0 : n.translation
  }
  mapTicketsToReportRows(e, t) {
    var s, r, c, i, l;
    const n = [];
    for (const u of e) {
      const w = u.status ?? "open";
      if (t === "received") {
        for (const g of u.reports) n.push({
          id: String(g.id),
          ticketId: String(u.id),
          createdAt: g.createdAt ?? u.createdAt,
          byUser: {
            id: Number(g.reportedBy),
            name: String(g.reportedByName ?? g.reportedBy),
            picture: g.reportedByPicture ?? null
          },
          reason: String(g.reason),
          status: w
        });
        continue
      }
      if (t === "sent") {
        for (const g of u.reports) n.push({
          id: String(g.id),
          ticketId: String(u.id),
          createdAt: g.createdAt ?? u.createdAt,
          toUser: {
            id: Number(u.reportedUser.id),
            name: String(u.reportedUser.name),
            picture: u.reportedUser.picture ?? null
          },
          reason: String(g.reason),
          status: w
        });
        continue
      }
      n.push({
        id: String(u.id),
        ticketId: String(u.id),
        createdAt: u.createdAt,
        handledBy: u.status && u.status !== "open" ? {
          id: ((s = u.handledBy) == null ? void 0 : s.id) ?? 0,
          name: ((r = u.handledBy) == null ? void 0 : r.name) ?? "Moderator",
          picture: ((c = u.handledBy) == null ? void 0 : c.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((l = (i = u.reports) == null ? void 0 : i[0]) == null ? void 0 : l.reason) ?? "other"),
        status: w
      })
    }
    return n.sort((u, w) => new Date(w.createdAt).getTime() - new Date(u.createdAt).getTime()), n
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({
        id: String(e)
      }).toString(),
      n = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== 200) throw new d(o(), n.status);
    return n.json()
  }
  async postPawtectLoad() {
    const e = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: ea(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (e.status !== 204) throw new d(o(), e.status)
  }
  async unlinkDiscord() {
    const e = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 204) throw new d(o(), e.status)
  }
  async deleteSessions() {
    const e = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status)
  }
  async deleteAllUserSessions(e) {
    const t = await this.request(`/admin/users/${e}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== 200) throw new d(o(), t.status)
  }
  async banUsers(e, t, n) {
    const s = await this.request("/admin/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: e,
        reason: t,
        notes: n
      })
    });
    if (s.status !== 200) throw new d(o(), s.status)
  }
  async timeoutUsers(e, t, n) {
    const s = await this.request("/admin/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: e,
        reason: t,
        notes: n
      })
    });
    if (s.status !== 200) throw new d(o(), s.status)
  }
  async incrementUsersDroplets(e, t, n) {
    const s = await this.request("/admin/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: e,
        delta: t,
        notes: n
      })
    });
    if (s.status !== 200) throw new d(o(), s.status)
  }
  async postUnbanUsers(e, t) {
    const n = await this.request("/admin/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: e,
        notes: t
      })
    });
    if (n.status !== 200) throw new d(o(), n.status)
  }
  async getAuditLogs(e) {
    const t = new URLSearchParams;
    e.actorUserId !== void 0 && t.set("actorUserId", String(e.actorUserId)), e.targetUserId !== void 0 && t.set("targetUserId", String(e.targetUserId)), e.action && t.set("action", e.action), e.startIso && t.set("start", e.startIso), e.endIso && t.set("end", e.endIso), t.set("limit", String(e.limit)), t.set("offset", String(e.offset));
    const n = await this.request(`/admin/audit-logs?${t.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== 200) throw new d(o(), n.status);
    return n.json()
  }
  async postUsersSuspend(e) {
    if ((await this.request("/moderator/users/suspend", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      })).status !== 200) throw new Error(o())
  }
  async postReportUserName(e) {
    const t = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status)
  }
  async postReportAllianceName(e) {
    const t = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async submitBanAppeal(e) {
    const t = await this.request("/report/appeal", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        message: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return await t.json()
  }
  async getOpenAppeals() {
    const e = await this.request("/moderator/report/appeal", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async postResponseAppeal(e, t, n) {
    const s = await this.request(`/moderator/report/appeal/${e}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: t,
        appealType: n
      })
    });
    if (s.status !== 200) throw new d(o(), s.status);
    return await s.json()
  }
  async getUserLastAppeal() {
    const e = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    const t = await e.json();
    return (t == null ? void 0 : t.appealDate) ?? null
  }
  async assignAppeals() {
    const e = await this.request("/moderator/report/appeal/assign", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return await e.json()
  }
  async getNotificationCount() {
    const e = await this.request("/notification/count", {
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    const {
      count: t
    } = await e.json();
    return t
  }
  async getNotificationPage(e) {
    const n = `/notification/page${e!==void 0?`?cursor=${encodeURIComponent(e)}`:""}`,
      s = await this.request(n, {
        credentials: "include"
      });
    if (s.status !== 200) throw new d(o(), s.status);
    return s.json()
  }
  async postNotificationMarkRead(e) {
    const t = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async postNotificationMarkReadAll() {
    const e = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getAdminBanWave() {
    const e = await this.request("/admin/ban-wave", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async postAdminBanWave() {
    const e = await this.request("/admin/ban-wave/execute", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async getPendingAppealsCount() {
    const e = await this.request("/moderator/report/appeals/count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    const t = await e.json();
    return (t == null ? void 0 : t.appeals) ?? 0
  }
  async claimEventPixel({
    season: e,
    tile: [t, n],
    pixel: [s, r]
  }) {
    const c = await this.request(`/s${e}/event/pixel/claim`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        event: "halloween",
        tx: t,
        ty: n,
        px: s,
        py: r
      })
    });
    if (c.status !== 200) throw new d(o(), c.status)
  }
  async getEventStatus() {
    const e = await this.request("/admin/event/status", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new d(o(), e.status);
    return e.json()
  }
  async postEventStart(e, t, n, s) {
    const r = await this.request("/admin/event/start", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        eventName: e,
        quantity: t,
        startEventDate: n,
        endEventDate: s
      })
    });
    if (r.status !== 200) throw new d(o(), r.status);
    return r.json()
  }
  async postEventStop(e) {
    const t = await this.request("/admin/event/stop", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        event: e
      })
    });
    if (t.status !== 200) throw new d(o(), t.status);
    return t.json()
  }
  async getEventAnchors(e) {
    const t = await this.request(`/admin/event/anchors?event=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new Error("Falha ao buscar anchors do evento");
    return t.json()
  }
}
Y = new WeakMap;

function _a(a) {
  var P, O;
  if (!a.length) throw new Error("Auto painter request does not contain any pixels.");
  const e = a[0].season;
  for (const T of a)
    if (T.season !== e) throw new Error("Auto painter requests cannot mix seasons.");
  const t = (P = ne.seasons) == null ? void 0 : P[e];
  if (!t) throw new Error("Invalid season selected for auto painter request.");
  const n = t.tileSize;
  let s = Number.POSITIVE_INFINITY,
    r = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY;
  const l = a.map(T => {
      const A = Math.round(T.tile[0] * n + T.pixel[0]),
        E = Math.round(T.tile[1] * n + T.pixel[1]);
      return A < s && (s = A), E < r && (r = E), A > c && (c = A), E > i && (i = E), {
        x: A,
        y: E,
        colorIdx: T.colorIdx
      }
    }),
    u = c - s + 1,
    w = i - r + 1;
  if (!Number.isFinite(u) || !Number.isFinite(w) || u <= 0 || w <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const g = new Uint8ClampedArray(u * w * 4);
  for (const {
      x: T,
      y: A,
      colorIdx: E
    }
    of l) {
    const re = (O = ne.colors) == null ? void 0 : O[E];
    if (!re) throw new Error(`Unknown palette color index: ${E}`);
    const Ee = T - s,
      W = ((A - r) * u + Ee) * 4,
      [ve, Pe, Ae] = re.rgb;
    g[W] = ve, g[W + 1] = Pe, g[W + 2] = Ae, g[W + 3] = E === 0 ? 0 : 255
  }
  return {
    data: g,
    width: u,
    height: w,
    offsetX: s,
    offsetY: r,
    season: e
  }
}
async function ya(a) {
  const e = ba(a.width, a.height),
    t = e.getContext("2d");
  if (!t) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = t.createImageData(a.width, a.height);
  return n.data.set(a.data), t.putImageData(n, 0, 0), "convertToBlob" in e ? e.convertToBlob({
    type: "image/png"
  }) : new Promise((s, r) => {
    e.toBlob(c => {
      if (!c) {
        r(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(c)
    }, "image/png")
  })
}

function ba(a, e) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(a, e);
  if (typeof document < "u") {
    const t = document.createElement("canvas");
    return t.width = a, t.height = e, t
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let X = new wa(ue),
  ae = !1,
  Se;

function $a() {
  const a = be("2025-09_pawtect");
  if (!a) throw new Error("pawtect experiment not found on load");
  a.variant !== "disabled" && (ae || N.data && _e(Ge).then(Sa).catch(e => {
    Se = e, Ce(e)
  }))
}

function Sa() {
  Zn(N.data.id), X.postPawtectLoad();
  const a = fetch;
  Object.assign(window, {
    fetch: Te((e, t) => {
      let n = null;
      return e instanceof Request ? n = e.url : n = e, n.startsWith("/") || Qn(n), a.call(window, e, t)
    })
  }), ae = !0
}

function Ta(a) {
  if (Se) throw new Error(Hn());
  if (!ae) throw new Error("Try again in a few seconds");
  return ta(a)
}

function Te(a) {
  return a.bind().bind()
}

function ja(a, e, t) {
  const n = {
    [a.name](...s) {
      return t(...s), e(...s)
    }
  } [a.name];
  return Te(n)
}
export {
  Da as A, ye as C, Ba as P, ne as S, X as a, Ma as b, o as c, ln as d, en as e, b as f, on as g, an as h, Zt as i, Oa as j, Na as k, Ca as l, $a as m, ja as n, La as o, Ua as p, jn as q, Ra as r, ka as s, fe as t, N as u, qa as v, xn as w, hn as x, vn as y, Ga as z
};