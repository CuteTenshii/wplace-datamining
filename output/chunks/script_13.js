var he = Object.defineProperty;
var ae = n => {
  throw TypeError(n)
};
var _e = (n, e, t) => e in n ? he(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var h = (n, e, t) => _e(n, typeof e != "symbol" ? e + "" : e, t),
  pe = (n, e, t) => e.has(n) || ae("Cannot " + t);
var u = (n, e, t) => (pe(n, e, "read from private field"), t ? t.call(n) : e.get(n)),
  _ = (n, e, t) => e.has(n) ? ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
import {
  au as b,
  g as p,
  aw as y,
  av as Y,
  z as re,
  u as I
} from "./BI_jE5ye.js";
import {
  g
} from "./FAoWj6-g.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "276968e1d17fc8ec4f0f441c096845bbc4668125"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "2a4ed5a5-de95-4cbe-935a-397568938401", n._sentryDebugIdIdentifier = "sentry-dbid-2a4ed5a5-de95-4cbe-935a-397568938401")
  })()
} catch {}
const we = "true",
  zn = "https://backend.wplace.live/files",
  Hn = "0x4AAAAAABpHqZ-6i7uL0nmG",
  ye = "https://backend.wplace.live",
  Wn = "0x4AAAAAABpqJe8FO0N84q0F";
var k, M, O, B, D, L;
class be {
  constructor() {
    _(this, k, b(!1));
    _(this, M, b(!1));
    _(this, O, b(Y(Te())));
    _(this, B, b(!1));
    _(this, D, b(Y(Date.now())));
    _(this, L, b(void 0));
    setInterval(() => {
      y(u(this, D), Date.now(), !0)
    }, 500)
  }
  get dropletsDialogOpen() {
    return p(u(this, k))
  }
  set dropletsDialogOpen(e) {
    y(u(this, k), e, !0)
  }
  get muted() {
    return p(u(this, M))
  }
  set muted(e) {
    y(u(this, M), e, !0)
  }
  get language() {
    return p(u(this, O))
  }
  set language(e) {
    y(u(this, O), e, !0)
  }
  get turnstatileLoaded() {
    return p(u(this, B))
  }
  set turnstatileLoaded(e) {
    y(u(this, B), e, !0)
  }
  get now() {
    return p(u(this, D))
  }
  get captcha() {
    return Ee ? p(u(this, L)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    y(u(this, L), e, !0)
  }
}
k = new WeakMap, M = new WeakMap, O = new WeakMap, B = new WeakMap, D = new WeakMap, L = new WeakMap;
const Se = new be;

function Te() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Ee = we.toLowerCase() !== "false";
let m;

function x(n) {
  const e = m.__externref_table_alloc();
  return m.__wbindgen_export_2.set(e, n), e
}

function A(n, e) {
  try {
    return n.apply(this, e)
  } catch (t) {
    const a = x(t);
    m.__wbindgen_exn_store(a)
  }
}
const de = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && de.decode();
let P = null;

function H() {
  return (P === null || P.byteLength === 0) && (P = new Uint8Array(m.memory.buffer)), P
}

function C(n, e) {
  return n = n >>> 0, de.decode(H().subarray(n, n + e))
}

function z(n) {
  return n == null
}

function Yn(n) {
  m.set_user_id(n)
}
let Z = 0;
const W = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  ve = typeof W.encodeInto == "function" ? function(n, e) {
    return W.encodeInto(n, e)
  } : function(n, e) {
    const t = W.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    }
  };

function le(n, e, t) {
  if (t === void 0) {
    const l = W.encode(n),
      d = e(l.length, 1) >>> 0;
    return H().subarray(d, d + l.length).set(l), Z = l.length, d
  }
  let a = n.length,
    o = e(a, 1) >>> 0;
  const r = H();
  let c = 0;
  for (; c < a; c++) {
    const l = n.charCodeAt(c);
    if (l > 127) break;
    r[o + c] = l
  }
  if (c !== a) {
    c !== 0 && (n = n.slice(c)), o = t(o, a, a = c + n.length * 3, 1) >>> 0;
    const l = H().subarray(o + c, o + a),
      d = ve(n, l);
    c += d.written, o = t(o, a, c, 1) >>> 0
  }
  return Z = c, o
}

function Zn(n) {
  const e = le(n, m.__wbindgen_malloc, m.__wbindgen_realloc),
    t = Z;
  m.request_url(e, t)
}

function Ae() {
  let n, e;
  try {
    const t = m.get_load_payload();
    return n = t[0], e = t[1], C(t[0], t[1])
  } finally {
    m.__wbindgen_free(n, e, 1)
  }
}

function Ie(n) {
  let e, t;
  try {
    const a = le(n, m.__wbindgen_malloc, m.__wbindgen_realloc),
      o = Z,
      r = m.get_pawtected_endpoint_payload(a, o);
    return e = r[0], t = r[1], C(r[0], r[1])
  } finally {
    m.__wbindgen_free(e, t, 1)
  }
}
async function xe(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e)
    } catch (a) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", a);
      else throw a
    }
    const t = await n.arrayBuffer();
    return await WebAssembly.instantiate(t, e)
  } else {
    const t = await WebAssembly.instantiate(n, e);
    return t instanceof WebAssembly.Instance ? {
      instance: t,
      module: n
    } : t
  }
}

function Pe() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    return e.buffer
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return A(function(e, t) {
      return e.call(t)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return A(function(e, t, a) {
      return e.call(t, a)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(e) {
    return e.crypto
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return A(function(e, t) {
      e.getRandomValues(t)
    }, arguments)
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(e) {
    return e.msCrypto
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return new Uint8Array(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
    return new Function(C(e, t))
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, a) {
    return new Uint8Array(e, t >>> 0, a >>> 0)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(e) {
    return new Uint8Array(e >>> 0)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(e) {
    return e.node
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(e) {
    return e.process
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return A(function(e, t) {
      e.randomFillSync(t)
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return A(function() {
      return module.require
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(e, t, a) {
    e.set(t, a >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const e = typeof global > "u" ? null : global;
    return z(e) ? 0 : x(e)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return z(e) ? 0 : x(e)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const e = typeof self > "u" ? null : self;
    return z(e) ? 0 : x(e)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const e = typeof window > "u" ? null : window;
    return z(e) ? 0 : x(e)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, a) {
    return e.subarray(t >>> 0, a >>> 0)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    return e.versions
  }, n.wbg.__wbindgen_init_externref_table = function() {
    const e = m.__wbindgen_export_2,
      t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1)
  }, n.wbg.__wbindgen_is_function = function(e) {
    return typeof e == "function"
  }, n.wbg.__wbindgen_is_object = function(e) {
    const t = e;
    return typeof t == "object" && t !== null
  }, n.wbg.__wbindgen_is_string = function(e) {
    return typeof e == "string"
  }, n.wbg.__wbindgen_is_undefined = function(e) {
    return e === void 0
  }, n.wbg.__wbindgen_memory = function() {
    return m.memory
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    return C(e, t)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(C(e, t))
  }, n
}

function Ce(n, e) {
  return m = n.exports, ke.__wbindgen_wasm_module = e, P = null, m.__wbindgen_start(), m
}
async function ke(n) {
  if (m !== void 0) return m;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const e = Pe();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: t,
    module: a
  } = await xe(await n, e);
  return Ce(t, a)
}
const Me = () => "Unexpected server error. Try again later.",
  Oe = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  s = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Me() : Oe(),
  Be = () => "You need to be logged in to paint",
  De = () => "Você precisa estar conectado para pintar",
  Le = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Be() : De(),
  qe = n => `Error while painting: ${n.err}`,
  Ne = n => `Erro enquanto pinta: ${n.err}`,
  Ue = (n, e = {}) => (e.locale ?? g()) === "en" ? qe(n) : Ne(n),
  Ge = () => "Invalid phone number",
  Re = () => "Número de telefone inválido",
  je = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Ge() : Re(),
  $e = () => "Phone already used",
  Fe = () => "Telefone já usado",
  Je = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? $e() : Fe(),
  Ke = () => "You have to wait to resend a code",
  Ve = () => "Você tem de esperar para reenviar um código",
  ze = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Ke() : Ve(),
  He = () => "Invalid code",
  We = () => "Código inválido",
  Ye = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? He() : We(),
  Ze = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Qe = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Xe = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Ze() : Qe(),
  et = () => "Location name is too big (max. 128 characters)",
  tt = () => "Nome da localização é grande demais (max. 128 caracteres)",
  nt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? et() : tt(),
  at = () => "Couldn't complete the purchase. This item does not exist.",
  rt = () => "Não foi possível concluir a compra. Este item não existe.",
  ot = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? at() : rt(),
  st = () => "You do not have enough droplets to buy this item.",
  it = () => "Você não tem gotas suficientes para comprar este item.",
  ct = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? st() : it(),
  dt = () => "You already have this item. Please refresh the page.",
  lt = () => "Você já possui este item. Atualize a página.",
  ut = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? dt() : lt(),
  gt = () => "Alliance name exceeded the maximum number of characters",
  ft = () => "O nome da aliança excedeu o número máximo de caracteres",
  mt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? gt() : ft(),
  ht = () => "Alliance name already taken",
  _t = () => "Já possui uma aliança com esse nome",
  pt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? ht() : _t(),
  wt = () => "Alliance with empty name",
  yt = () => "Aliança com nome vazio",
  bt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? wt() : yt(),
  St = () => "You are already in an alliance",
  Tt = () => "Você já está em uma aliança",
  Et = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? St() : Tt(),
  vt = () => "You are not allowed to do this",
  At = () => "Você não tem permissão para fazer isso",
  E = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? vt() : At(),
  It = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  xt = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Pt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? It() : xt(),
  Ct = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  kt = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  oe = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Ct() : kt(),
  Mt = () => "No internet access or the servers are offline. Try again later.",
  Ot = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Bt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Mt() : Ot(),
  Dt = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Lt = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  qt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Dt() : Lt(),
  Nt = () => "Refresh your page to get the latest update",
  Ut = () => "Recarregue sua página para obter as últimas atualizações",
  Gt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Nt() : Ut(),
  Rt = () => "Inappropriate content",
  jt = () => "Conteúdo inapropriado",
  $t = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Rt() : jt(),
  Ft = () => "Botting",
  Jt = () => "Uso de bots",
  Kt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Ft() : Jt(),
  Vt = () => "Hate speech",
  zt = () => "Discurso de Ódio",
  Ht = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Vt() : zt(),
  Wt = () => "Griefing",
  Yt = () => "Griefing",
  Zt = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Wt() : Yt(),
  Qt = () => "Doxxing",
  Xt = () => "Doxxing",
  en = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? Qt() : Xt(),
  tn = () => "Leaderboard is temporarily disabled",
  nn = () => "O ranking está temporariamente desativado",
  v = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? tn() : nn(),
  an = () => "Multi-accounting",
  rn = () => "Múltiplas contas",
  on = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? an() : rn(),
  sn = () => "Breaking the rules",
  cn = () => "Quebrar as regras",
  dn = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? sn() : cn(),
  ln = () => "Your account has been suspended for breaking the rules",
  un = () => "Sua conta foi suspensa por quebrar as regras",
  gn = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? ln() : un(),
  fn = () => "Your account has been banned for violating the rules",
  mn = () => "A sua conta foi banida por quebrar as regras",
  hn = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? fn() : mn(),
  _n = n => `Your account has been suspended out until ${n.until}`,
  pn = n => `A sua conta está suspensa até ${n.until}`,
  wn = (n, e = {}) => (e.locale ?? g()) === "en" ? _n(n) : pn(n),
  yn = () => "You are trying to paint with a color you do not own",
  bn = () => "Você está tentando pintar com uma cor que não possui",
  Sn = (n = {}, e = {}) => (e.locale ?? g()) === "en" ? yn() : bn(),
  Qn = {
    griefing: Zt(),
    "multi-accounting": on(),
    "hate-speech": Ht(),
    bot: Kt(),
    doxxing: en(),
    "inappropriate-content": $t(),
    other: dn()
  },
  Xn = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  se = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };

function Tn(n) {
  const e = atob(n),
    t = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) t[a] = e.charCodeAt(a);
  return t
}
class En {
  constructor(e) {
    h(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const a = Math.floor(e / 8),
      o = e % 8;
    if (a >= this.bytes.length) {
      const c = new Uint8Array(a + 1),
        l = c.length - this.bytes.length;
      for (let d = 0; d < this.bytes.length; d++) c[d + l] = this.bytes[d];
      this.bytes = c
    }
    const r = this.bytes.length - 1 - a;
    t ? this.bytes[r] = this.bytes[r] | 1 << o : this.bytes[r] = this.bytes[r] & ~(1 << o)
  }
  get(e) {
    const t = Math.floor(e / 8),
      a = e % 8,
      o = this.bytes.length;
    return t > o ? !1 : (this.bytes[o - 1 - t] & 1 << a) !== 0
  }
}

function ea(...n) {
  return n.filter(Boolean).join(" ")
}
const vn = typeof document < "u";
let ie = 0;
var q, N, U;
class An {
  constructor() {
    _(this, q, b(Y([])));
    _(this, N, b(Y([])));
    _(this, U, e => {
      const t = this.toasts.findIndex(a => a.id === e);
      return t === -1 ? null : t
    });
    h(this, "addToast", e => {
      vn && this.toasts.unshift(e)
    });
    h(this, "updateToast", ({
      id: e,
      data: t,
      type: a,
      message: o
    }) => {
      const r = this.toasts.findIndex(l => l.id === e),
        c = this.toasts[r];
      this.toasts[r] = {
        ...c,
        ...t,
        id: e,
        title: o,
        type: a,
        updated: !0
      }
    });
    h(this, "create", e => {
      var l;
      const {
        message: t,
        ...a
      } = e, o = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((l = e.id) == null ? void 0 : l.length) > 0 ? e.id : ie++, r = e.dismissable === void 0 ? !0 : e.dismissable, c = e.type === void 0 ? "default" : e.type;
      return re(() => {
        this.toasts.find(i => i.id === o) ? this.updateToast({
          id: o,
          data: e,
          type: c,
          message: t,
          dismissable: r
        }) : this.addToast({
          ...a,
          id: o,
          title: t,
          dismissable: r,
          type: c
        })
      }), o
    });
    h(this, "dismiss", e => (re(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map(a => ({
          ...a,
          dismiss: !0
        }));
        return
      }
      const t = this.toasts.findIndex(a => a.id === e);
      this.toasts[t] && (this.toasts[t] = {
        ...this.toasts[t],
        dismiss: !0
      })
    }), e));
    h(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const t = u(this, U).call(this, e);
      if (t !== null) return this.toasts.splice(t, 1), e
    });
    h(this, "message", (e, t) => this.create({
      ...t,
      type: "default",
      message: e
    }));
    h(this, "error", (e, t) => this.create({
      ...t,
      type: "error",
      message: e
    }));
    h(this, "success", (e, t) => this.create({
      ...t,
      type: "success",
      message: e
    }));
    h(this, "info", (e, t) => this.create({
      ...t,
      type: "info",
      message: e
    }));
    h(this, "warning", (e, t) => this.create({
      ...t,
      type: "warning",
      message: e
    }));
    h(this, "loading", (e, t) => this.create({
      ...t,
      type: "loading",
      message: e
    }));
    h(this, "promise", (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: typeof t.loading == "string" ? t.loading : t.loading()
      }));
      const o = e instanceof Promise ? e : e();
      let r = a !== void 0;
      return o.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          r = !1;
          const l = In(c);
          this.create({
            id: a,
            type: "error",
            message: l
          })
        } else if (t.success !== void 0) {
          r = !1;
          const l = typeof t.success == "function" ? t.success(c) : t.success;
          this.create({
            id: a,
            type: "success",
            message: l
          })
        }
      }).catch(c => {
        if (t.error !== void 0) {
          r = !1;
          const l = typeof t.error == "function" ? t.error(c) : t.error;
          this.create({
            id: a,
            type: "error",
            message: l
          })
        }
      }).finally(() => {
        var c;
        r && (this.dismiss(a), a = void 0), (c = t.finally) == null || c.call(t)
      }), a
    });
    h(this, "custom", (e, t) => {
      const a = (t == null ? void 0 : t.id) || ie++;
      return this.create({
        component: e,
        id: a,
        ...t
      }), a
    });
    h(this, "removeHeight", e => {
      this.heights = this.heights.filter(t => t.toastId !== e)
    });
    h(this, "setHeight", e => {
      const t = u(this, U).call(this, e.toastId);
      if (t === null) {
        this.heights.push(e);
        return
      }
      this.heights[t] = e
    });
    h(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return p(u(this, q))
  }
  set toasts(e) {
    y(u(this, q), e, !0)
  }
  get heights() {
    return p(u(this, N))
  }
  set heights(e) {
    y(u(this, N), e, !0)
  }
}
q = new WeakMap, N = new WeakMap, U = new WeakMap;

function In(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const T = new An;

function xn(n, e) {
  return T.create({
    message: n,
    ...e
  })
}
var Q;
class ta {
  constructor() {
    _(this, Q, I(() => T.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return p(u(this, Q))
  }
}
Q = new WeakMap;
const Pn = xn,
  ue = Object.assign(Pn, {
    success: T.success,
    info: T.info,
    warning: T.warning,
    error: T.error,
    custom: T.custom,
    message: T.message,
    promise: T.promise,
    dismiss: T.dismiss,
    loading: T.loading,
    getActiveToasts: () => T.toasts.filter(n => !n.dismiss)
  });
var G, R, j, $, F, J, K;
class Cn {
  constructor() {
    h(this, "channel", new BroadcastChannel("user-channel"));
    _(this, G, b());
    _(this, R, b(!0));
    _(this, j, b(Date.now()));
    _(this, $, I(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const t = e.count + Math.max((Se.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    _(this, F, I(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    _(this, J, I(() => {
      var e;
      return new En(Tn(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    _(this, K, I(() => {
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
    return p(u(this, G))
  }
  set data(e) {
    y(u(this, G), e, !0)
  }
  get loading() {
    return p(u(this, R))
  }
  set loading(e) {
    y(u(this, R), e, !0)
  }
  get lastFetch() {
    return p(u(this, j))
  }
  set lastFetch(e) {
    y(u(this, j), e)
  }
  get charges() {
    return p(u(this, $))
  }
  set charges(e) {
    y(u(this, $), e)
  }
  get cooldown() {
    return p(u(this, F))
  }
  set cooldown(e) {
    y(u(this, F), e)
  }
  get flagsBitmap() {
    return p(u(this, J))
  }
  set flagsBitmap(e) {
    y(u(this, J), e)
  }
  get timeoutUntil() {
    return p(u(this, K))
  }
  set timeoutUntil(e) {
    y(u(this, K), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await ce.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), ue.warning(Bt(), {
        duration: 1e4
      })
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await ce.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var a;
    return e < 32 ? !0 : ((((a = this.data) == null ? void 0 : a.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
G = new WeakMap, R = new WeakMap, j = new WeakMap, $ = new WeakMap, F = new WeakMap, J = new WeakMap, K = new WeakMap;
const te = new Cn;
class f extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}

function kn(n, e) {
  const t = {};
  for (const a of n) {
    const o = e(a);
    let r = t[o];
    r ? r.push(a) : t[o] = [a]
  }
  return t
}

function na(n, e) {
  const t = {};
  for (const a of n) {
    const o = e(a);
    t[o] = a
  }
  return t
}
const Mn = [{
    tileSize: 1e3,
    zoom: 11
  }],
  On = 4,
  Bn = 6e3,
  Dn = [{
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
  Ln = {
    needsPhoneVerification: "needs_phone_verification"
  },
  qn = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Nn = {
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
  Un = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  X = {
    seasons: Mn,
    regionSize: On,
    refreshIntervalMs: Bn,
    colors: Dn,
    errors: Ln,
    items: qn,
    products: Nn,
    countries: Un
  },
  Gn = X,
  ge = X.seasons.length - 1,
  aa = X.seasons[ge].zoom,
  ra = X.seasons[ge].tileSize;

function oa(n) {
  return Gn.countries[n - 1]
}

function Rn(n) {
  return te.data ? te.data.experiments[n] ?? null : null
}
let fe = b(void 0);
const jn = () => p(fe);

function sa() {
  try {
    $n()
  } catch (n) {
    console.error("failed to load override", n)
  }
}

function $n() {
  const e = new URL(location.href).searchParams.get("override");
  if (!e) return;
  const t = e.split(".");
  if (t.length !== 2) throw new Error("override token wrong amount of parts");
  const [a] = t, o = JSON.parse(atob(a));
  if (Date.now() / 1e3 > o.expiresAt) throw new Error("override token expired");
  ue.info(`Currently using the ${o.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 6e4
  }), y(fe, {
    token: e,
    payload: o
  }, !0)
}
var V;
class Fn {
  constructor(e) {
    _(this, V, b(!0));
    this.url = e
  }
  get online() {
    return p(u(this, V))
  }
  set online(e) {
    y(u(this, V), e, !0)
  }
  async paint(e, t, a) {
    const o = kn(e, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
      r = Rn("2025-09_pawtect");
    if (!r) throw new Error("paint request while pawtect experiment not found");
    const l = (await Promise.all(Object.values(o).map(d => {
      const [i, S] = d[0].tile, w = d[0].season, me = {
        colors: d.map(ee => ee.colorIdx),
        coords: d.flatMap(ee => ee.pixel),
        t,
        fp: a
      }, ne = JSON.stringify(me);
      return this.request(`/s${w}/pixel/${i}/${S}`, {
        method: "POST",
        body: ne,
        headers: {
          "x-pawtect-token": r.variant !== "disabled" ? Ie(ne) : "",
          "x-pawtect-variant": r.variant
        },
        credentials: "include"
      })
    }))).filter(d => d.status !== 200);
    if (l.length) {
      const d = l[0];
      if (d.status === 401) throw new Error(Le());
      if (d.status === 403) {
        if (d.headers.get("cf-mitigated") === "challenge") throw new Error(qt());
        const i = await d.json();
        if ((i == null ? void 0 : i.error) === "refresh") throw new Error(Gt());
        if ((i == null ? void 0 : i.error) === "color-not-owned") throw new Error(Sn());
        te.refresh()
      } else if (d.status === 451) {
        const i = await l[0].json();
        i == null || i.err;
        const S = i == null ? void 0 : i.suspension;
        if (S === "ban") throw new Error(hn());
        if (S === "timeout") {
          const w = new Date(Date.now() + ((i == null ? void 0 : i.durationMs) ?? 0));
          throw new Error(wn({
            until: w.toLocaleString()
          }))
        } else throw new Error(s())
      } else throw new Error(s())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [t, a],
    pixel: [o, r],
    isModerator: c = !1
  }) {
    const l = new URLSearchParams;
    l.set("x", String(o)), l.set("y", String(r));
    const d = await this.request(`${c?"/moderator":""}/s${e}/pixel/${t}/${a}?${l.toString()}`, {
      credentials: c ? "include" : void 0
    });
    if (d.status !== 200) {
      const i = await d.text();
      throw new Error(Ue({
        err: i
      }))
    }
    return d.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [t, a],
    p0: [o, r],
    p1: [c, l]
  }) {
    const d = await this.request(`/moderator/pixel-area/s${e}/${t}/${a}?x0=${o}&y0=${r}&x1=${c}&y1=${l}`, {
      credentials: "include"
    });
    if (d.status !== 200) {
      const i = await d.text();
      throw console.error("Error while fetching pixel area info", i), new Error(s())
    }
    return d.json()
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
    if (e.status !== 200) throw new Error(s());
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
    if (t.status === 400) throw new Error(je());
    if (t.status === 403) throw new Error(Je());
    if (t.status === 429) throw new Error(ze());
    if (t.status !== 200) throw new Error(s());
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
    if (t.status === 400) throw new Error(Ye());
    if (t.status !== 200) throw new Error(s());
    return await t.json()
  }
  async updateMe(e) {
    const t = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (t.status === 400) {
      const a = await t.json();
      throw new Error(a == null ? void 0 : a.error)
    } else if (t.status !== 200) throw new Error(s())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(s())
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
    if (t.status === 403) throw new Error(Xe());
    if (t.status !== 200) throw new Error(s())
  }
  async deleteFavoriteLocation(e) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: e
        }),
        credentials: "include"
      })).status !== 200) throw new Error(s())
  }
  async updateFavoriteLocation(e, t) {
    const a = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: e,
        name: t
      }),
      credentials: "include"
    });
    if (a.status === 400) throw new Error(nt());
    if (a.status !== 200) throw new Error(s())
  }
  async leaderboardPlayers(e) {
    const t = await this.request(`/leaderboard/player/${e}`);
    if (t.status !== 200) throw new Error(v());
    return t.json()
  }
  async leaderboardAlliances(e) {
    const t = await this.request(`/leaderboard/alliance/${e}`);
    if (t.status !== 200) throw new Error(v());
    return t.json()
  }
  async leaderboardRegions(e, t = 0) {
    const a = await this.request(`/leaderboard/region/${e}/${t}`);
    if (a.status === 200) return a.json();
    throw new Error(v())
  }
  async leaderboardRegionPlayers(e, t) {
    const a = await this.request(`/leaderboard/region/players/${e}/${t}`);
    if (a.status === 200) return a.json();
    throw new Error(v())
  }
  async leaderboardRegionAlliances(e, t) {
    const a = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
    if (a.status === 200) return a.json();
    throw new Error(v())
  }
  async leaderboardCountries(e) {
    const t = await this.request(`/leaderboard/country/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(v())
  }
  async getRandomTile(e) {
    const t = await this.request(`/s${e}/tile/random`);
    if (t.status !== 200) throw new Error(s());
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
    if (t.status !== 200) throw t.status === 404 ? new Error(ot()) : t.status === 403 ? new Error(ct()) : t.status === 409 ? new Error(ut()) : new Error(s())
  }
  async getAlliance() {
    const e = await this.request("/alliance", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(s())
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
      const a = await t.json();
      throw a.error === "max_characters" ? new Error(mt()) : a.error === "name_taken" ? new Error(pt()) : a.error == "empty_name" ? new Error(bt()) : new Error(s())
    } else throw t.status === 403 ? new Error(Et()) : new Error(s())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(s())
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(s())
  }
  async updateAllianceHeadquarters(e, t) {
    const a = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: e,
        longitude: t
      })
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(E()) : new Error(s())
  }
  async allianceLeaderboard(e) {
    const t = await this.request(`/alliance/leaderboard/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(E()) : new Error(v())
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(E()) : new Error(s())
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
    throw new Error(s())
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(s())
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(s())
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(s())
  }
  async equipFlag(e) {
    if ((await this.request(`/flag/equip/${e}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(s())
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(s());
    return e.json()
  }
  async changeProfilePicture(e) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      })).status !== 200) throw new Error(s())
  }
  async unbanAllianceUser(e) {
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(s())
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
      const o = await t.json();
      throw new Error(o == null ? void 0 : o.error)
    } else {
      if (t.status === 451) throw new Error(gn());
      if (t.status !== 200) throw new Error(s())
    }
    return await t.json()
  }
  async refreshPixPayment(e) {
    const t = await this.request(`/payment/abacatepay/refresh/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (t.status === 400) {
      const a = await t.json();
      throw new Error(a == null ? void 0 : a.error)
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
    if (e.status !== 200) throw new f(s(), e.status);
    const t = await e.json();
    for (const a of t.tickets) a.reports.sort((o, r) => se[o.reason] - se[r.reason]);
    return t
  }
  async countMyTicketsClosedToday() {
    const e = await this.request("/moderator/count-my-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(s(), e.status);
    return e.json()
  }
  async getSevereOpenTicketsCount() {
    const e = await this.request("/moderator/severe-open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(s(), e.status);
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
    if (e.status !== 200) throw new f(s(), e.status);
    return e.json()
  }
  async setTicketStatus(e, t, a, o) {
    const r = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: t,
        selectedReportId: a,
        assignedReason: o
      })
    });
    if (r.status !== 200) throw new f(s(), r.status)
  }
  async request(e, t) {
    let a;
    const o = jn();
    if (o) {
      const r = new Headers(t == null ? void 0 : t.headers);
      r.set("x-alien-override", o.token), t = {
        ...t ?? {},
        headers: r
      }
    }
    try {
      a = await fetch(`${this.url}${e}`, t), this.online = !0
    } catch (r) {
      throw console.error("Fetch error:", r), this.online = !1, new Error(Pt(), {
        cause: r
      })
    }
    if (a.status === 429) throw new Error(oe());
    if (a.status === 503 || a.status === 408) throw new Error(oe());
    return a
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(s(), e.status);
    return e.json()
  }
  async getOpenReportsSummary() {
    const e = await this.request("/admin/count-all-reports", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(s(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, t) {
    const a = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new f(s(), a.status);
    return (await a.json()).items.map(r => ({
      ...r,
      suspensionRate: (r.ban + r.timeout) / r.total
    }))
  }
  async getClosedReportsByMod(e, t) {
    const a = await this.request(`/admin/closed-reports?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new f(s(), a.status);
    return (await a.json()).items.map(r => ({
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
      if (t.status !== 200) throw new f(s(), t.status);
      return t.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request(`/moderator/users?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(s(), t.status);
    return t.json()
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new f(s(), t.status);
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
    if (t.status !== 200) throw new f(s(), t.status)
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new f(s(), t.status)
  }
  async getUserNotes(e) {
    const t = await this.request(`/admin/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(s(), t.status);
    return t.json()
  }
  async addUserNote(e, t) {
    const a = await this.request("/admin/users/notes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        note: t
      })
    });
    if (a.status !== 200) throw new f(s(), a.status)
  }
  async getUserPurchases(e) {
    const t = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(s(), t.status);
    const a = await t.json();
    return (Array.isArray(a == null ? void 0 : a.purchases) ? a.purchases : []).map(r => ({
      id: String(r.id ?? ""),
      product_name: String(r.productName ?? r.product_name ?? ""),
      price: Number(r.price ?? 0),
      amount: Number(r.amount ?? 0),
      createdAt: typeof r.createdAt == "string" ? r.createdAt : r.CreatedAt ? new Date(r.CreatedAt).toISOString() : ""
    }))
  }
  async postSetUserDroplets(e, t) {
    const a = await this.request("/admin/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        droplets: t
      })
    });
    if (a.status !== 200) throw new f(s(), a.status)
  }
  async getUserTickets(e) {
    const {
      userId: t,
      kind: a,
      page: o = 0,
      pageSize: r = 20
    } = e, c = new URLSearchParams({
      userId: String(t),
      kind: a,
      page: String(o),
      pageSize: String(r)
    }), l = await this.request(`/moderator/users/tickets?${c.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (l.status !== 200) throw new f(s(), l.status);
    const d = await l.json(),
      i = Array.isArray(d == null ? void 0 : d.tickets) ? d.tickets : [];
    return i.sort((S, w) => new Date(w.createdAt).getTime() - new Date(S.createdAt).getTime()), i
  }
  mapTicketsToReportRows(e, t) {
    var o, r, c, l, d;
    const a = [];
    for (const i of e) {
      const S = i.status ?? "open";
      if (t === "received") {
        for (const w of i.reports) a.push({
          id: String(w.id),
          ticketId: String(i.id),
          createdAt: w.createdAt ?? i.createdAt,
          byUser: {
            id: Number(w.reportedBy),
            name: String(w.reportedByName ?? w.reportedBy),
            picture: w.reportedByPicture ?? null
          },
          reason: String(w.reason),
          status: S
        });
        continue
      }
      if (t === "sent") {
        for (const w of i.reports) a.push({
          id: String(w.id),
          ticketId: String(i.id),
          createdAt: w.createdAt ?? i.createdAt,
          toUser: {
            id: Number(i.reportedUser.id),
            name: String(i.reportedUser.name),
            picture: i.reportedUser.picture ?? null
          },
          reason: String(w.reason),
          status: S
        });
        continue
      }
      a.push({
        id: String(i.id),
        ticketId: String(i.id),
        createdAt: i.createdAt,
        handledBy: i.status && i.status !== "open" ? {
          id: ((o = i.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((r = i.handledBy) == null ? void 0 : r.name) ?? "Moderator",
          picture: ((c = i.handledBy) == null ? void 0 : c.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((d = (l = i.reports) == null ? void 0 : l[0]) == null ? void 0 : d.reason) ?? "other"),
        status: S
      })
    }
    return a.sort((i, S) => new Date(S.createdAt).getTime() - new Date(i.createdAt).getTime()), a
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({
        id: String(e)
      }).toString(),
      a = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== 200) throw new f(s(), a.status);
    return a.json()
  }
  async postPawtectLoad() {
    const e = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: Ae(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (e.status !== 204) throw new f(s(), e.status)
  }
}
V = new WeakMap;
let ce = new Fn(ye);
export {
  ra as A, zn as B, ge as C, Wn as D, ye as P, Gn as S, ke as _, ce as a, Xn as b, s as c, Ee as d, Hn as e, T as f, Se as g, ea as h, ta as i, Rn as j, Yn as k, sa as l, $t as m, Ht as n, en as o, Kt as p, Zt as q, Zn as r, Qn as s, ue as t, te as u, oa as v, wn as w, na as x, hn as y, aa as z
};