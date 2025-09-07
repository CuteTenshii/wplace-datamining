var de = Object.defineProperty;
var ne = n => {
  throw TypeError(n)
};
var ue = (n, e, t) => e in n ? de(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var m = (n, e, t) => ue(n, typeof e != "symbol" ? e + "" : e, t),
  ge = (n, e, t) => e.has(n) || ne("Cannot " + t);
var d = (n, e, t) => (ge(n, e, "read from private field"), t ? t.call(n) : e.get(n)),
  _ = (n, e, t) => e.has(n) ? ne("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
import {
  aI as S,
  g as p,
  aJ as w,
  aH as Y,
  z as ae,
  u as I
} from "./apxRKl0u.js";
import {
  g as u
} from "./C5GsJ62f.js";
const fe = "true",
  $n = "https://backend.wplace.live/files",
  Fn = "0x4AAAAAABpHqZ-6i7uL0nmG",
  me = "https://backend.wplace.live",
  Jn = "0x4AAAAAABpqJe8FO0N84q0F";
var C, O, k, B, L, D;
class _e {
  constructor() {
    _(this, C, S(!1));
    _(this, O, S(!1));
    _(this, k, S(Y(pe())));
    _(this, B, S(!1));
    _(this, L, S(Y(Date.now())));
    _(this, D, S(void 0));
    setInterval(() => {
      w(d(this, L), Date.now(), !0)
    }, 500)
  }
  get dropletsDialogOpen() {
    return p(d(this, C))
  }
  set dropletsDialogOpen(e) {
    w(d(this, C), e, !0)
  }
  get muted() {
    return p(d(this, O))
  }
  set muted(e) {
    w(d(this, O), e, !0)
  }
  get language() {
    return p(d(this, k))
  }
  set language(e) {
    w(d(this, k), e, !0)
  }
  get turnstatileLoaded() {
    return p(d(this, B))
  }
  set turnstatileLoaded(e) {
    w(d(this, B), e, !0)
  }
  get now() {
    return p(d(this, L))
  }
  get captcha() {
    return we ? p(d(this, D)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    w(d(this, D), e, !0)
  }
}
C = new WeakMap, O = new WeakMap, k = new WeakMap, B = new WeakMap, L = new WeakMap, D = new WeakMap;
const he = new _e;

function pe() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const we = fe.toLowerCase() !== "false";
let f;

function P(n) {
  const e = f.__externref_table_alloc();
  return f.__wbindgen_export_2.set(e, n), e
}

function A(n, e) {
  try {
    return n.apply(this, e)
  } catch (t) {
    const a = P(t);
    f.__wbindgen_exn_store(a)
  }
}
const ie = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && ie.decode();
let x = null;

function H() {
  return (x === null || x.byteLength === 0) && (x = new Uint8Array(f.memory.buffer)), x
}

function M(n, e) {
  return n = n >>> 0, ie.decode(H().subarray(n, n + e))
}

function z(n) {
  return n == null
}

function Kn(n) {
  f.set_user_id(n)
}
let Z = 0;
const W = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  ye = typeof W.encodeInto == "function" ? function(n, e) {
    return W.encodeInto(n, e)
  } : function(n, e) {
    const t = W.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    }
  };

function ce(n, e, t) {
  if (t === void 0) {
    const s = W.encode(n),
      l = e(s.length, 1) >>> 0;
    return H().subarray(l, l + s.length).set(s), Z = s.length, l
  }
  let a = n.length,
    r = e(a, 1) >>> 0;
  const o = H();
  let i = 0;
  for (; i < a; i++) {
    const s = n.charCodeAt(i);
    if (s > 127) break;
    o[r + i] = s
  }
  if (i !== a) {
    i !== 0 && (n = n.slice(i)), r = t(r, a, a = i + n.length * 3, 1) >>> 0;
    const s = H().subarray(r + i, r + a),
      l = ye(n, s);
    i += l.written, r = t(r, a, i, 1) >>> 0
  }
  return Z = i, r
}

function Vn(n) {
  const e = ce(n, f.__wbindgen_malloc, f.__wbindgen_realloc),
    t = Z;
  f.request_url(e, t)
}

function be() {
  let n, e;
  try {
    const t = f.get_load_payload();
    return n = t[0], e = t[1], M(t[0], t[1])
  } finally {
    f.__wbindgen_free(n, e, 1)
  }
}

function Se(n) {
  let e, t;
  try {
    const a = ce(n, f.__wbindgen_malloc, f.__wbindgen_realloc),
      r = Z,
      o = f.get_pawtected_endpoint_payload(a, r);
    return e = o[0], t = o[1], M(o[0], o[1])
  } finally {
    f.__wbindgen_free(e, t, 1)
  }
}
async function Te(n, e) {
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

function Ee() {
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
    return new Function(M(e, t))
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
    return z(e) ? 0 : P(e)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return z(e) ? 0 : P(e)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const e = typeof self > "u" ? null : self;
    return z(e) ? 0 : P(e)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const e = typeof window > "u" ? null : window;
    return z(e) ? 0 : P(e)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, a) {
    return e.subarray(t >>> 0, a >>> 0)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    return e.versions
  }, n.wbg.__wbindgen_init_externref_table = function() {
    const e = f.__wbindgen_export_2,
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
    return f.memory
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    return M(e, t)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(M(e, t))
  }, n
}

function ve(n, e) {
  return f = n.exports, Ae.__wbindgen_wasm_module = e, x = null, f.__wbindgen_start(), f
}
async function Ae(n) {
  if (f !== void 0) return f;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const e = Ee();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: t,
    module: a
  } = await Te(await n, e);
  return ve(t, a)
}
const Ie = () => "Unexpected server error. Try again later.",
  Pe = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  c = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Ie() : Pe(),
  xe = () => "You need to be logged in to paint",
  Me = () => "Você precisa estar conectado para pintar",
  Ce = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? xe() : Me(),
  Oe = () => "You do not have enough charges to paint. Erase some pixels.",
  ke = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  Be = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Oe() : ke(),
  Le = n => `Error while painting: ${n.err}`,
  De = n => `Erro enquanto pinta: ${n.err}`,
  Ne = (n, e = {}) => (e.locale ?? u()) === "en" ? Le(n) : De(n),
  qe = () => "Invalid phone number",
  Ue = () => "Número de telefone inválido",
  Ge = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? qe() : Ue(),
  Re = () => "Phone already used",
  je = () => "Telefone já usado",
  $e = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Re() : je(),
  Fe = () => "You have to wait to resend a code",
  Je = () => "Você tem de esperar para reenviar um código",
  Ke = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Fe() : Je(),
  Ve = () => "Invalid code",
  ze = () => "Código inválido",
  He = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Ve() : ze(),
  We = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Ye = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ze = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? We() : Ye(),
  Qe = () => "Location name is too big (max. 128 characters)",
  Xe = () => "Nome da localização é grande demais (max. 128 caracteres)",
  et = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Qe() : Xe(),
  tt = () => "Couldn't complete the purchase. This item does not exist.",
  nt = () => "Não foi possível concluir a compra. Este item não existe.",
  at = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? tt() : nt(),
  rt = () => "You do not have enough droplets to buy this item.",
  ot = () => "Você não tem gotas suficientes para comprar este item.",
  st = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? rt() : ot(),
  it = () => "You already have this item. Please refresh the page.",
  ct = () => "Você já possui este item. Atualize a página.",
  lt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? it() : ct(),
  dt = () => "Alliance name exceeded the maximum number of characters",
  ut = () => "O nome da aliança excedeu o número máximo de caracteres",
  gt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? dt() : ut(),
  ft = () => "Alliance name already taken",
  mt = () => "Já possui uma aliança com esse nome",
  _t = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? ft() : mt(),
  ht = () => "Alliance with empty name",
  pt = () => "Aliança com nome vazio",
  wt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? ht() : pt(),
  yt = () => "You are already in an alliance",
  bt = () => "Você já está em uma aliança",
  St = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? yt() : bt(),
  Tt = () => "You are not allowed to do this",
  Et = () => "Você não tem permissão para fazer isso",
  E = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Tt() : Et(),
  vt = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  At = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  It = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? vt() : At(),
  Pt = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  xt = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Mt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Pt() : xt(),
  Ct = () => "No internet access or the servers are offline. Try again later.",
  Ot = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  kt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Ct() : Ot(),
  Bt = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Lt = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Dt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Bt() : Lt(),
  Nt = () => "Refresh your page to get the latest update",
  qt = () => "Recarregue sua página para obter as últimas atualizações",
  Ut = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Nt() : qt(),
  Gt = () => "Inappropriate content",
  Rt = () => "Conteúdo inapropriado",
  jt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Gt() : Rt(),
  $t = () => "Botting",
  Ft = () => "Uso de bots",
  Jt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? $t() : Ft(),
  Kt = () => "Hate speech",
  Vt = () => "Discurso de Ódio",
  zt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Kt() : Vt(),
  Ht = () => "Griefing",
  Wt = () => "Griefing",
  Yt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Ht() : Wt(),
  Zt = () => "Doxxing",
  Qt = () => "Doxxing",
  Xt = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? Zt() : Qt(),
  en = () => "Leaderboard is temporarily disabled",
  tn = () => "O ranking está temporariamente desativado",
  v = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? en() : tn(),
  nn = () => "Multi-accounting",
  an = () => "Múltiplas contas",
  rn = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? nn() : an(),
  on = () => "Breaking the rules",
  sn = () => "Quebrar as regras",
  cn = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? on() : sn(),
  ln = () => "Your account has been suspended for breaking the rules",
  dn = () => "Sua conta foi suspensa por quebrar as regras",
  un = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? ln() : dn(),
  gn = () => "Your account has been banned for violating the rules",
  fn = () => "A sua conta foi banida por quebrar as regras",
  mn = (n = {}, e = {}) => (e.locale ?? u()) === "en" ? gn() : fn(),
  _n = n => `Your account has been suspended out until ${n.until}`,
  hn = n => `A sua conta está suspensa até ${n.until}`,
  pn = (n, e = {}) => (e.locale ?? u()) === "en" ? _n(n) : hn(n),
  zn = {
    griefing: Yt(),
    "multi-accounting": rn(),
    "hate-speech": zt(),
    bot: Jt(),
    doxxing: Xt(),
    "inappropriate-content": jt(),
    other: cn()
  },
  Hn = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  re = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };

function wn(n) {
  const e = atob(n),
    t = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) t[a] = e.charCodeAt(a);
  return t
}
class yn {
  constructor(e) {
    m(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const a = Math.floor(e / 8),
      r = e % 8;
    if (a >= this.bytes.length) {
      const i = new Uint8Array(a + 1),
        s = i.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) i[l + s] = this.bytes[l];
      this.bytes = i
    }
    const o = this.bytes.length - 1 - a;
    t ? this.bytes[o] = this.bytes[o] | 1 << r : this.bytes[o] = this.bytes[o] & ~(1 << r)
  }
  get(e) {
    const t = Math.floor(e / 8),
      a = e % 8,
      r = this.bytes.length;
    return t > r ? !1 : (this.bytes[r - 1 - t] & 1 << a) !== 0
  }
}

function Wn(...n) {
  return n.filter(Boolean).join(" ")
}
const bn = typeof document < "u";
let oe = 0;
var N, q, U;
class Sn {
  constructor() {
    _(this, N, S(Y([])));
    _(this, q, S(Y([])));
    _(this, U, e => {
      const t = this.toasts.findIndex(a => a.id === e);
      return t === -1 ? null : t
    });
    m(this, "addToast", e => {
      bn && this.toasts.unshift(e)
    });
    m(this, "updateToast", ({
      id: e,
      data: t,
      type: a,
      message: r
    }) => {
      const o = this.toasts.findIndex(s => s.id === e),
        i = this.toasts[o];
      this.toasts[o] = {
        ...i,
        ...t,
        id: e,
        title: r,
        type: a,
        updated: !0
      }
    });
    m(this, "create", e => {
      var s;
      const {
        message: t,
        ...a
      } = e, r = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((s = e.id) == null ? void 0 : s.length) > 0 ? e.id : oe++, o = e.dismissable === void 0 ? !0 : e.dismissable, i = e.type === void 0 ? "default" : e.type;
      return ae(() => {
        this.toasts.find(g => g.id === r) ? this.updateToast({
          id: r,
          data: e,
          type: i,
          message: t,
          dismissable: o
        }) : this.addToast({
          ...a,
          id: r,
          title: t,
          dismissable: o,
          type: i
        })
      }), r
    });
    m(this, "dismiss", e => (ae(() => {
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
    m(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const t = d(this, U).call(this, e);
      if (t !== null) return this.toasts.splice(t, 1), e
    });
    m(this, "message", (e, t) => this.create({
      ...t,
      type: "default",
      message: e
    }));
    m(this, "error", (e, t) => this.create({
      ...t,
      type: "error",
      message: e
    }));
    m(this, "success", (e, t) => this.create({
      ...t,
      type: "success",
      message: e
    }));
    m(this, "info", (e, t) => this.create({
      ...t,
      type: "info",
      message: e
    }));
    m(this, "warning", (e, t) => this.create({
      ...t,
      type: "warning",
      message: e
    }));
    m(this, "loading", (e, t) => this.create({
      ...t,
      type: "loading",
      message: e
    }));
    m(this, "promise", (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: typeof t.loading == "string" ? t.loading : t.loading()
      }));
      const r = e instanceof Promise ? e : e();
      let o = a !== void 0;
      return r.then(i => {
        if (typeof i == "object" && i && "ok" in i && typeof i.ok == "boolean" && !i.ok) {
          o = !1;
          const s = Tn(i);
          this.create({
            id: a,
            type: "error",
            message: s
          })
        } else if (t.success !== void 0) {
          o = !1;
          const s = typeof t.success == "function" ? t.success(i) : t.success;
          this.create({
            id: a,
            type: "success",
            message: s
          })
        }
      }).catch(i => {
        if (t.error !== void 0) {
          o = !1;
          const s = typeof t.error == "function" ? t.error(i) : t.error;
          this.create({
            id: a,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var i;
        o && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t)
      }), a
    });
    m(this, "custom", (e, t) => {
      const a = (t == null ? void 0 : t.id) || oe++;
      return this.create({
        component: e,
        id: a,
        ...t
      }), a
    });
    m(this, "removeHeight", e => {
      this.heights = this.heights.filter(t => t.toastId !== e)
    });
    m(this, "setHeight", e => {
      const t = d(this, U).call(this, e.toastId);
      if (t === null) {
        this.heights.push(e);
        return
      }
      this.heights[t] = e
    });
    m(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return p(d(this, N))
  }
  set toasts(e) {
    w(d(this, N), e, !0)
  }
  get heights() {
    return p(d(this, q))
  }
  set heights(e) {
    w(d(this, q), e, !0)
  }
}
N = new WeakMap, q = new WeakMap, U = new WeakMap;

function Tn(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const b = new Sn;

function En(n, e) {
  return b.create({
    message: n,
    ...e
  })
}
var Q;
class Yn {
  constructor() {
    _(this, Q, I(() => b.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return p(d(this, Q))
  }
}
Q = new WeakMap;
const vn = En,
  An = Object.assign(vn, {
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
var G, R, j, $, F, J, K;
class In {
  constructor() {
    m(this, "channel", new BroadcastChannel("user-channel"));
    _(this, G, S());
    _(this, R, S(!0));
    _(this, j, S(Date.now()));
    _(this, $, I(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const t = e.count + Math.max((he.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    _(this, F, I(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    _(this, J, I(() => {
      var e;
      return new yn(wn(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
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
    return p(d(this, G))
  }
  set data(e) {
    w(d(this, G), e, !0)
  }
  get loading() {
    return p(d(this, R))
  }
  set loading(e) {
    w(d(this, R), e, !0)
  }
  get lastFetch() {
    return p(d(this, j))
  }
  set lastFetch(e) {
    w(d(this, j), e)
  }
  get charges() {
    return p(d(this, $))
  }
  set charges(e) {
    w(d(this, $), e)
  }
  get cooldown() {
    return p(d(this, F))
  }
  set cooldown(e) {
    w(d(this, F), e)
  }
  get flagsBitmap() {
    return p(d(this, J))
  }
  set flagsBitmap(e) {
    w(d(this, J), e)
  }
  get timeoutUntil() {
    return p(d(this, K))
  }
  set timeoutUntil(e) {
    w(d(this, K), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await se.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), An.warning(kt(), {
        duration: 1e4
      })
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await se.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var a;
    return e < 32 ? !0 : ((((a = this.data) == null ? void 0 : a.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
G = new WeakMap, R = new WeakMap, j = new WeakMap, $ = new WeakMap, F = new WeakMap, J = new WeakMap, K = new WeakMap;
const Pn = new In;
class h extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}

function xn(n, e) {
  const t = {};
  for (const a of n) {
    const r = e(a);
    let o = t[r];
    o ? o.push(a) : t[r] = [a]
  }
  return t
}

function Zn(n, e) {
  const t = {};
  for (const a of n) {
    const r = e(a);
    t[r] = a
  }
  return t
}
const Mn = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Cn = 4,
  On = 6e3,
  kn = [{
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
  Bn = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Ln = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Dn = {
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
  Nn = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  X = {
    seasons: Mn,
    regionSize: Cn,
    refreshIntervalMs: On,
    colors: kn,
    errors: Bn,
    items: Ln,
    products: Dn,
    countries: Nn
  },
  qn = X,
  le = X.seasons.length - 1,
  Qn = X.seasons[le].zoom,
  Xn = X.seasons[le].tileSize;

function ea(n) {
  return qn.countries[n - 1]
}
var V;
class Un {
  constructor(e) {
    _(this, V, S(!0));
    this.url = e
  }
  get online() {
    return p(d(this, V))
  }
  set online(e) {
    w(d(this, V), e, !0)
  }
  async paint(e, t, a) {
    const r = xn(e, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
      i = (await Promise.all(Object.values(r).map(s => {
        const [l, g] = s[0].tile, T = s[0].season, y = {
          colors: s.map(ee => ee.colorIdx),
          coords: s.flatMap(ee => ee.pixel),
          t,
          fp: a
        }, te = JSON.stringify(y);
        return this.request(`/s${T}/pixel/${l}/${g}`, {
          method: "POST",
          body: te,
          headers: {
            "x-pawtect-token": Se(te)
          },
          credentials: "include"
        })
      }))).filter(s => s.status !== 200);
    if (i.length) {
      const s = i[0];
      if (s.status === 401) throw new Error(Ce());
      if (s.status === 403) {
        if (s.headers.get("cf-mitigated") === "challenge") throw new Error(Dt());
        const l = await s.json();
        throw (l == null ? void 0 : l.error) === "refresh" ? new Error(Ut()) : (Pn.refresh(), new Error(Be()))
      } else if (s.status === 451) {
        const l = await i[0].json();
        l == null || l.err;
        const g = l == null ? void 0 : l.suspension;
        if (g === "ban") throw new Error(mn());
        if (g === "timeout") {
          const T = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(pn({
            until: T.toLocaleString()
          }))
        } else throw new Error(c())
      } else throw new Error(c())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [t, a],
    pixel: [r, o]
  }) {
    const i = await this.request(`/s${e}/pixel/${t}/${a}?x=${r}&y=${o}`);
    if (i.status !== 200) {
      const s = await i.text();
      throw new Error(Ne({
        err: s
      }))
    }
    return i.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [t, a],
    p0: [r, o],
    p1: [i, s]
  }) {
    const l = await this.request(`/moderator/pixel-area/s${e}/${t}/${a}?x0=${r}&y0=${o}&x1=${i}&y1=${s}`, {
      credentials: "include"
    });
    if (l.status !== 200) {
      const g = await l.text();
      throw console.error("Error while fetching pixel area info", g), new Error(c())
    }
    return l.json()
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
    if (e.status !== 200) throw new Error(c());
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
    if (t.status === 400) throw new Error(Ge());
    if (t.status === 403) throw new Error($e());
    if (t.status === 429) throw new Error(Ke());
    if (t.status !== 200) throw new Error(c());
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
    if (t.status === 400) throw new Error(He());
    if (t.status !== 200) throw new Error(c());
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
    } else if (t.status !== 200) throw new Error(c())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(c())
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
    if (t.status === 403) throw new Error(Ze());
    if (t.status !== 200) throw new Error(c())
  }
  async deleteFavoriteLocation(e) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: e
        }),
        credentials: "include"
      })).status !== 200) throw new Error(c())
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
    if (a.status === 400) throw new Error(et());
    if (a.status !== 200) throw new Error(c())
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
    if (t.status !== 200) throw new Error(c());
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
    if (t.status !== 200) throw t.status === 404 ? new Error(at()) : t.status === 403 ? new Error(st()) : t.status === 409 ? new Error(lt()) : new Error(c())
  }
  async getAlliance() {
    const e = await this.request("/alliance", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(c())
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
      throw a.error === "max_characters" ? new Error(gt()) : a.error === "name_taken" ? new Error(_t()) : a.error == "empty_name" ? new Error(wt()) : new Error(c())
    } else throw t.status === 403 ? new Error(St()) : new Error(c())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(c())
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(c())
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
    if (a.status !== 200) throw a.status === 403 ? new Error(E()) : new Error(c())
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
    throw e.status === 403 ? new Error(E()) : new Error(c())
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
    throw new Error(c())
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(c())
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(c())
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(c())
  }
  async equipFlag(e) {
    if ((await this.request(`/flag/equip/${e}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(c())
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(c());
    return e.json()
  }
  async changeProfilePicture(e) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      })).status !== 200) throw new Error(c())
  }
  async unbanAllianceUser(e) {
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(c())
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
      const r = await t.json();
      throw new Error(r == null ? void 0 : r.error)
    } else {
      if (t.status === 451) throw new Error(un());
      if (t.status !== 200) throw new Error(c())
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
    if (e.status !== 200) throw new h(c(), e.status);
    const t = await e.json();
    for (const a of t.tickets) a.reports.sort((r, o) => re[r.reason] - re[o.reason]);
    return t
  }
  async getSevereOpenTicketsCount() {
    const e = await this.request("/moderator/severe-open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new h(c(), e.status);
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
    if (e.status !== 200) throw new h(c(), e.status);
    return e.json()
  }
  async setTicketStatus(e, t) {
    const a = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: t
      })
    });
    if (a.status !== 200) throw new h(c(), a.status)
  }
  async request(e, t) {
    let a;
    try {
      a = await fetch(`${this.url}${e}`, t), this.online = !0
    } catch (r) {
      throw console.error("Fetch error:", r), this.online = !1, new Error(It(), {
        cause: r
      })
    }
    if (a.status === 429) throw new Error(Mt());
    return a
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new h(c(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, t) {
    const a = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new h(c(), a.status);
    return (await a.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
    }))
  }
  async getUserInfoById(e) {
    const t = await this.request(`/moderator/user-info/${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new h(c(), t.status);
      return t.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request(`/moderator/users?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new h(c(), t.status);
    return t.json()
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new h(c(), t.status);
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
    if (t.status !== 200) throw new h(c(), t.status)
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new h(c(), t.status)
  }
  async getUserNotes(e) {
    const t = await this.request(`/admin/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new h(c(), t.status);
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
    if (a.status !== 200) throw new h(c(), a.status)
  }
  async getUserPurchases(e) {
    const t = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new h(c(), t.status);
    const a = await t.json();
    return (Array.isArray(a == null ? void 0 : a.purchases) ? a.purchases : []).map(o => ({
      id: String(o.id ?? ""),
      product_name: String(o.productName ?? o.product_name ?? ""),
      price: Number(o.price ?? 0),
      amount: Number(o.amount ?? 0),
      createdAt: typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : ""
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
    if (a.status !== 200) throw new h(c(), a.status)
  }
  async getUserTickets(e) {
    const {
      userId: t,
      kind: a,
      page: r = 0,
      pageSize: o = 20
    } = e, i = new URLSearchParams({
      userId: String(t),
      kind: a,
      page: String(r),
      pageSize: String(o)
    }), s = await this.request(`/moderator/users/tickets?${i.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (s.status !== 200) throw new h(c(), s.status);
    const l = await s.json(),
      g = Array.isArray(l == null ? void 0 : l.tickets) ? l.tickets : [];
    return g.sort((T, y) => new Date(y.createdAt).getTime() - new Date(T.createdAt).getTime()), g
  }
  mapTicketsToReportRows(e, t) {
    var r, o, i, s, l;
    const a = [];
    for (const g of e) {
      const T = g.status ?? "open";
      if (t === "received") {
        for (const y of g.reports) a.push({
          id: String(y.id),
          ticketId: String(g.id),
          createdAt: y.createdAt ?? g.createdAt,
          byUser: {
            id: Number(y.reportedBy),
            name: String(y.reportedByName ?? y.reportedBy),
            picture: y.reportedByPicture ?? null
          },
          reason: String(y.reason),
          status: T
        });
        continue
      }
      if (t === "sent") {
        for (const y of g.reports) a.push({
          id: String(y.id),
          ticketId: String(g.id),
          createdAt: y.createdAt ?? g.createdAt,
          toUser: {
            id: Number(g.reportedUser.id),
            name: String(g.reportedUser.name),
            picture: g.reportedUser.picture ?? null
          },
          reason: String(y.reason),
          status: T
        });
        continue
      }
      a.push({
        id: String(g.id),
        ticketId: String(g.id),
        createdAt: g.createdAt,
        handledBy: g.status && g.status !== "open" ? {
          id: ((r = g.handledBy) == null ? void 0 : r.id) ?? 0,
          name: ((o = g.handledBy) == null ? void 0 : o.name) ?? "Moderator",
          picture: ((i = g.handledBy) == null ? void 0 : i.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((l = (s = g.reports) == null ? void 0 : s[0]) == null ? void 0 : l.reason) ?? "other"),
        status: T
      })
    }
    return a.sort((g, T) => new Date(T.createdAt).getTime() - new Date(g.createdAt).getTime()), a
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({
        id: String(e)
      }).toString(),
      a = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== 200) throw new h(c(), a.status);
    const r = await a.json();
    return {
      closed_total: Number((r == null ? void 0 : r.closed_total) ?? 0),
      bans: Number((r == null ? void 0 : r.bans) ?? 0),
      ignored: Number((r == null ? void 0 : r.ignored) ?? 0),
      timeouts: Number((r == null ? void 0 : r.timeouts) ?? 0)
    }
  }
  async postPawtectLoad() {
    const e = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: be(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (e.status !== 204) throw new h(c(), e.status)
  }
}
V = new WeakMap;
let se = new Un(me);
export {
  Jn as A, le as C, me as P, qn as S, Ae as _, se as a, zn as b, c, we as d, Fn as e, b as f, he as g, Wn as h, Yn as i, Kn as j, jt as k, zt as l, Xt as m, Jt as n, Yt as o, ea as p, pn as q, Vn as r, Hn as s, An as t, Pn as u, Zn as v, Qn as w, Xn as x, mn as y, $n as z
};