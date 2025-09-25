var he = Object.defineProperty;
var ae = a => {
  throw TypeError(a)
};
var _e = (a, e, t) => e in a ? he(a, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : a[e] = t;
var h = (a, e, t) => _e(a, typeof e != "symbol" ? e + "" : e, t),
  pe = (a, e, t) => e.has(a) || ae("Cannot " + t);
var g = (a, e, t) => (pe(a, e, "read from private field"), t ? t.call(a) : e.get(a)),
  _ = (a, e, t) => e.has(a) ? ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t);
import {
  au as y,
  g as p,
  aw as b,
  av as Y,
  z as re,
  u as P
} from "./Gq9F4eGO.js";
import {
  g as u
} from "./B2fDDN0_.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "088e15254cf0e82f60d1a6be25f10d078aac5191"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "528a5b89-d224-49ca-b0fc-aff02eea897f", a._sentryDebugIdIdentifier = "sentry-dbid-528a5b89-d224-49ca-b0fc-aff02eea897f")
  })()
} catch {}
const we = "true",
  na = "https://backend.wplace.live/files",
  aa = "0x4AAAAAABpHqZ-6i7uL0nmG",
  be = "https://backend.wplace.live",
  ra = "0x4AAAAAABpqJe8FO0N84q0F";
var C, L, M, N, k, q;
class ye {
  constructor() {
    _(this, C, y(!1));
    _(this, L, y(!1));
    _(this, M, y(Y(Te())));
    _(this, N, y(!1));
    _(this, k, y(Y(Date.now())));
    _(this, q, y(void 0));
    setInterval(() => {
      b(g(this, k), Date.now(), !0)
    }, 500)
  }
  get dropletsDialogOpen() {
    return p(g(this, C))
  }
  set dropletsDialogOpen(e) {
    b(g(this, C), e, !0)
  }
  get muted() {
    return p(g(this, L))
  }
  set muted(e) {
    b(g(this, L), e, !0)
  }
  get language() {
    return p(g(this, M))
  }
  set language(e) {
    b(g(this, M), e, !0)
  }
  get turnstatileLoaded() {
    return p(g(this, N))
  }
  set turnstatileLoaded(e) {
    b(g(this, N), e, !0)
  }
  get now() {
    return p(g(this, k))
  }
  get captcha() {
    return Ee ? p(g(this, q)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    b(g(this, q), e, !0)
  }
}
C = new WeakMap, L = new WeakMap, M = new WeakMap, N = new WeakMap, k = new WeakMap, q = new WeakMap;
const Se = new ye;

function Te() {
  if (navigator.languages && navigator.languages.length > 0) {
    const a = navigator.languages.find(e => e.length === 2);
    if (a) return a
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Ee = we.toLowerCase() !== "false";
let m;

function x(a) {
  const e = m.__externref_table_alloc();
  return m.__wbindgen_export_2.set(e, a), e
}

function A(a, e) {
  try {
    return a.apply(this, e)
  } catch (t) {
    const n = x(t);
    m.__wbindgen_exn_store(n)
  }
}
const le = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && le.decode();
let I = null;

function H() {
  return (I === null || I.byteLength === 0) && (I = new Uint8Array(m.memory.buffer)), I
}

function O(a, e) {
  return a = a >>> 0, le.decode(H().subarray(a, a + e))
}

function V(a) {
  return a == null
}

function sa(a) {
  m.set_user_id(a)
}
let Z = 0;
const W = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  ve = typeof W.encodeInto == "function" ? function(a, e) {
    return W.encodeInto(a, e)
  } : function(a, e) {
    const t = W.encode(a);
    return e.set(t), {
      read: a.length,
      written: t.length
    }
  };

function de(a, e, t) {
  if (t === void 0) {
    const o = W.encode(a),
      d = e(o.length, 1) >>> 0;
    return H().subarray(d, d + o.length).set(o), Z = o.length, d
  }
  let n = a.length,
    s = e(n, 1) >>> 0;
  const r = H();
  let l = 0;
  for (; l < n; l++) {
    const o = a.charCodeAt(l);
    if (o > 127) break;
    r[s + l] = o
  }
  if (l !== n) {
    l !== 0 && (a = a.slice(l)), s = t(s, n, n = l + a.length * 3, 1) >>> 0;
    const o = H().subarray(s + l, s + n),
      d = ve(a, o);
    l += d.written, s = t(s, n, l, 1) >>> 0
  }
  return Z = l, s
}

function oa(a) {
  const e = de(a, m.__wbindgen_malloc, m.__wbindgen_realloc),
    t = Z;
  m.request_url(e, t)
}

function Ae() {
  let a, e;
  try {
    const t = m.get_load_payload();
    return a = t[0], e = t[1], O(t[0], t[1])
  } finally {
    m.__wbindgen_free(a, e, 1)
  }
}

function Pe(a) {
  let e, t;
  try {
    const n = de(a, m.__wbindgen_malloc, m.__wbindgen_realloc),
      s = Z,
      r = m.get_pawtected_endpoint_payload(n, s);
    return e = r[0], t = r[1], O(r[0], r[1])
  } finally {
    m.__wbindgen_free(e, t, 1)
  }
}
async function xe(a, e) {
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

function Ie() {
  const a = {};
  return a.wbg = {}, a.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    return e.buffer
  }, a.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return A(function(e, t) {
      return e.call(t)
    }, arguments)
  }, a.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return A(function(e, t, n) {
      return e.call(t, n)
    }, arguments)
  }, a.wbg.__wbg_crypto_574e78ad8b13b65f = function(e) {
    return e.crypto
  }, a.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return A(function(e, t) {
      e.getRandomValues(t)
    }, arguments)
  }, a.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(e) {
    return e.msCrypto
  }, a.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return new Uint8Array(e)
  }, a.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
    return new Function(O(e, t))
  }, a.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0)
  }, a.wbg.__wbg_newwithlength_a381634e90c276d4 = function(e) {
    return new Uint8Array(e >>> 0)
  }, a.wbg.__wbg_node_905d3e251edff8a2 = function(e) {
    return e.node
  }, a.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(e) {
    return e.process
  }, a.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return A(function(e, t) {
      e.randomFillSync(t)
    }, arguments)
  }, a.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return A(function() {
      return module.require
    }, arguments)
  }, a.wbg.__wbg_set_65595bdd868b3009 = function(e, t, n) {
    e.set(t, n >>> 0)
  }, a.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const e = typeof global > "u" ? null : global;
    return V(e) ? 0 : x(e)
  }, a.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return V(e) ? 0 : x(e)
  }, a.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const e = typeof self > "u" ? null : self;
    return V(e) ? 0 : x(e)
  }, a.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const e = typeof window > "u" ? null : window;
    return V(e) ? 0 : x(e)
  }, a.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, n) {
    return e.subarray(t >>> 0, n >>> 0)
  }, a.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    return e.versions
  }, a.wbg.__wbindgen_init_externref_table = function() {
    const e = m.__wbindgen_export_2,
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
    return m.memory
  }, a.wbg.__wbindgen_string_new = function(e, t) {
    return O(e, t)
  }, a.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(O(e, t))
  }, a
}

function Oe(a, e) {
  return m = a.exports, Ce.__wbindgen_wasm_module = e, I = null, m.__wbindgen_start(), m
}
async function Ce(a) {
  if (m !== void 0) return m;
  typeof a < "u" && (Object.getPrototypeOf(a) === Object.prototype ? {
    module_or_path: a
  } = a : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof a > "u" && (a = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const e = Ie();
  (typeof a == "string" || typeof Request == "function" && a instanceof Request || typeof URL == "function" && a instanceof URL) && (a = fetch(a));
  const {
    instance: t,
    module: n
  } = await xe(await a, e);
  return Oe(t, n)
}
const Le = () => "Unexpected server error. Try again later.",
  Me = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  i = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Le() : Me(),
  Ne = () => "You need to be logged in to paint",
  ke = () => "Você precisa estar conectado para pintar",
  qe = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Ne() : ke(),
  Be = a => `Error while painting: ${a.err}`,
  De = a => `Erro enquanto pinta: ${a.err}`,
  Ue = (a, e = {}) => (e.locale ?? u()) === "en" ? Be(a) : De(a),
  Ge = () => "Invalid phone number",
  Re = () => "Número de telefone inválido",
  $e = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Ge() : Re(),
  je = () => "Phone already used",
  Fe = () => "Telefone já usado",
  Je = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? je() : Fe(),
  Ke = () => "You have to wait to resend a code",
  ze = () => "Você tem de esperar para reenviar um código",
  Ve = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Ke() : ze(),
  He = () => "Invalid code",
  We = () => "Código inválido",
  Ye = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? He() : We(),
  Ze = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Qe = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Xe = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Ze() : Qe(),
  et = () => "Location name is too big (max. 128 characters)",
  tt = () => "Nome da localização é grande demais (max. 128 caracteres)",
  nt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? et() : tt(),
  at = () => "Couldn't complete the purchase. This item does not exist.",
  rt = () => "Não foi possível concluir a compra. Este item não existe.",
  st = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? at() : rt(),
  ot = () => "You do not have enough droplets to buy this item.",
  it = () => "Você não tem gotas suficientes para comprar este item.",
  ct = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? ot() : it(),
  lt = () => "You already have this item. Please refresh the page.",
  dt = () => "Você já possui este item. Atualize a página.",
  ut = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? lt() : dt(),
  gt = () => "Alliance name exceeded the maximum number of characters",
  ft = () => "O nome da aliança excedeu o número máximo de caracteres",
  mt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? gt() : ft(),
  ht = () => "Alliance name already taken",
  _t = () => "Já possui uma aliança com esse nome",
  pt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? ht() : _t(),
  wt = () => "Alliance with empty name",
  bt = () => "Aliança com nome vazio",
  yt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? wt() : bt(),
  St = () => "You are already in an alliance",
  Tt = () => "Você já está em uma aliança",
  Et = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? St() : Tt(),
  vt = () => "You are not allowed to do this",
  At = () => "Você não tem permissão para fazer isso",
  E = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? vt() : At(),
  Pt = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  xt = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  It = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Pt() : xt(),
  Ot = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Ct = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  se = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Ot() : Ct(),
  Lt = () => "No internet access or the servers are offline. Try again later.",
  Mt = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Nt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Lt() : Mt(),
  kt = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  qt = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Bt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? kt() : qt(),
  Dt = () => "Refresh your page to get the latest update",
  Ut = () => "Recarregue sua página para obter as últimas atualizações",
  Gt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Dt() : Ut(),
  Rt = () => "Inappropriate content",
  $t = () => "Conteúdo inapropriado",
  jt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Rt() : $t(),
  Ft = () => "Botting",
  Jt = () => "Uso de bots",
  Kt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Ft() : Jt(),
  zt = () => "Hate speech",
  Vt = () => "Discurso de Ódio",
  Ht = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? zt() : Vt(),
  Wt = () => "Griefing",
  Yt = () => "Griefing",
  Zt = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Wt() : Yt(),
  Qt = () => "Doxxing",
  Xt = () => "Doxxing",
  en = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Qt() : Xt(),
  tn = () => "Leaderboard is temporarily disabled",
  nn = () => "O ranking está temporariamente desativado",
  v = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? tn() : nn(),
  an = () => "Multi-accounting",
  rn = () => "Múltiplas contas",
  sn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? an() : rn(),
  on = () => "Breaking the rules",
  cn = () => "Quebrar as regras",
  ln = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? on() : cn(),
  dn = () => "Your account has been suspended for breaking the rules",
  un = () => "Sua conta foi suspensa por quebrar as regras",
  gn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? dn() : un(),
  fn = () => "Your account has been banned for violating the rules",
  mn = () => "A sua conta foi banida por quebrar as regras",
  hn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? fn() : mn(),
  _n = a => `Your account has been suspended out until ${a.until}`,
  pn = a => `A sua conta está suspensa até ${a.until}`,
  wn = (a, e = {}) => (e.locale ?? u()) === "en" ? _n(a) : pn(a),
  bn = () => "You are trying to paint with a color you do not own",
  yn = () => "Você está tentando pintar com uma cor que não possui",
  Sn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? bn() : yn(),
  Tn = () => "The new leader must be a member of the alliance",
  En = () => "O novo líder deve ser um membro da aliança",
  vn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? Tn() : En(),
  An = () => "The name contains disallowed characters or words. Please choose a different name.",
  Pn = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  xn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? An() : Pn(),
  In = () => "Invalid discord.",
  On = () => "Discord inválido.",
  Cn = (a = {}, e = {}) => (e.locale ?? u()) === "en" ? In() : On(),
  ia = {
    griefing: Zt(),
    "multi-accounting": sn(),
    "hate-speech": Ht(),
    bot: Kt(),
    doxxing: en(),
    "inappropriate-content": jt(),
    other: ln()
  },
  ca = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  oe = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };

function Ln(a) {
  const e = atob(a),
    t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t
}
class Mn {
  constructor(e) {
    h(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const n = Math.floor(e / 8),
      s = e % 8;
    if (n >= this.bytes.length) {
      const l = new Uint8Array(n + 1),
        o = l.length - this.bytes.length;
      for (let d = 0; d < this.bytes.length; d++) l[d + o] = this.bytes[d];
      this.bytes = l
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

function la(...a) {
  return a.filter(Boolean).join(" ")
}
const Nn = typeof document < "u";
let ie = 0;
var B, D, U;
class kn {
  constructor() {
    _(this, B, y(Y([])));
    _(this, D, y(Y([])));
    _(this, U, e => {
      const t = this.toasts.findIndex(n => n.id === e);
      return t === -1 ? null : t
    });
    h(this, "addToast", e => {
      Nn && this.toasts.unshift(e)
    });
    h(this, "updateToast", ({
      id: e,
      data: t,
      type: n,
      message: s
    }) => {
      const r = this.toasts.findIndex(o => o.id === e),
        l = this.toasts[r];
      this.toasts[r] = {
        ...l,
        ...t,
        id: e,
        title: s,
        type: n,
        updated: !0
      }
    });
    h(this, "create", e => {
      var o;
      const {
        message: t,
        ...n
      } = e, s = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((o = e.id) == null ? void 0 : o.length) > 0 ? e.id : ie++, r = e.dismissable === void 0 ? !0 : e.dismissable, l = e.type === void 0 ? "default" : e.type;
      return re(() => {
        this.toasts.find(c => c.id === s) ? this.updateToast({
          id: s,
          data: e,
          type: l,
          message: t,
          dismissable: r
        }) : this.addToast({
          ...n,
          id: s,
          title: t,
          dismissable: r,
          type: l
        })
      }), s
    });
    h(this, "dismiss", e => (re(() => {
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
    h(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const t = g(this, U).call(this, e);
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
      let n;
      t.loading !== void 0 && (n = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: typeof t.loading == "string" ? t.loading : t.loading()
      }));
      const s = e instanceof Promise ? e : e();
      let r = n !== void 0;
      return s.then(l => {
        if (typeof l == "object" && l && "ok" in l && typeof l.ok == "boolean" && !l.ok) {
          r = !1;
          const o = qn(l);
          this.create({
            id: n,
            type: "error",
            message: o
          })
        } else if (t.success !== void 0) {
          r = !1;
          const o = typeof t.success == "function" ? t.success(l) : t.success;
          this.create({
            id: n,
            type: "success",
            message: o
          })
        }
      }).catch(l => {
        if (t.error !== void 0) {
          r = !1;
          const o = typeof t.error == "function" ? t.error(l) : t.error;
          this.create({
            id: n,
            type: "error",
            message: o
          })
        }
      }).finally(() => {
        var l;
        r && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t)
      }), n
    });
    h(this, "custom", (e, t) => {
      const n = (t == null ? void 0 : t.id) || ie++;
      return this.create({
        component: e,
        id: n,
        ...t
      }), n
    });
    h(this, "removeHeight", e => {
      this.heights = this.heights.filter(t => t.toastId !== e)
    });
    h(this, "setHeight", e => {
      const t = g(this, U).call(this, e.toastId);
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
    return p(g(this, B))
  }
  set toasts(e) {
    b(g(this, B), e, !0)
  }
  get heights() {
    return p(g(this, D))
  }
  set heights(e) {
    b(g(this, D), e, !0)
  }
}
B = new WeakMap, D = new WeakMap, U = new WeakMap;

function qn(a) {
  return a && typeof a == "object" && "status" in a ? `HTTP error! Status: ${a.status}` : `Error! ${a}`
}
const T = new kn;

function Bn(a, e) {
  return T.create({
    message: a,
    ...e
  })
}
var Q;
class da {
  constructor() {
    _(this, Q, P(() => T.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return p(g(this, Q))
  }
}
Q = new WeakMap;
const Dn = Bn,
  ue = Object.assign(Dn, {
    success: T.success,
    info: T.info,
    warning: T.warning,
    error: T.error,
    custom: T.custom,
    message: T.message,
    promise: T.promise,
    dismiss: T.dismiss,
    loading: T.loading,
    getActiveToasts: () => T.toasts.filter(a => !a.dismiss)
  });
var G, R, $, j, F, J, K;
class Un {
  constructor() {
    h(this, "channel", new BroadcastChannel("user-channel"));
    _(this, G, y());
    _(this, R, y(!0));
    _(this, $, y(Date.now()));
    _(this, j, P(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const t = e.count + Math.max((Se.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    _(this, F, P(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    _(this, J, P(() => {
      var e;
      return new Mn(Ln(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    _(this, K, P(() => {
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
    return p(g(this, G))
  }
  set data(e) {
    b(g(this, G), e, !0)
  }
  get loading() {
    return p(g(this, R))
  }
  set loading(e) {
    b(g(this, R), e, !0)
  }
  get lastFetch() {
    return p(g(this, $))
  }
  set lastFetch(e) {
    b(g(this, $), e)
  }
  get charges() {
    return p(g(this, j))
  }
  set charges(e) {
    b(g(this, j), e)
  }
  get cooldown() {
    return p(g(this, F))
  }
  set cooldown(e) {
    b(g(this, F), e)
  }
  get flagsBitmap() {
    return p(g(this, J))
  }
  set flagsBitmap(e) {
    b(g(this, J), e)
  }
  get timeoutUntil() {
    return p(g(this, K))
  }
  set timeoutUntil(e) {
    b(g(this, K), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await ce.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), ue.warning(Nt(), {
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
    var n;
    return e < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
G = new WeakMap, R = new WeakMap, $ = new WeakMap, j = new WeakMap, F = new WeakMap, J = new WeakMap, K = new WeakMap;
const te = new Un;
class f extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}

function Gn(a, e) {
  const t = {};
  for (const n of a) {
    const s = e(n);
    let r = t[s];
    r ? r.push(n) : t[s] = [n]
  }
  return t
}

function ua(a, e) {
  const t = {};
  for (const n of a) {
    const s = e(n);
    t[s] = n
  }
  return t
}
const Rn = [{
    tileSize: 1e3,
    zoom: 11
  }],
  $n = 4,
  jn = 6e3,
  Fn = [{
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
  Jn = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Kn = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  zn = {
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
  Vn = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  X = {
    seasons: Rn,
    regionSize: $n,
    refreshIntervalMs: jn,
    colors: Fn,
    errors: Jn,
    items: Kn,
    products: zn,
    countries: Vn
  },
  Hn = X,
  ge = X.seasons.length - 1,
  ga = X.seasons[ge].zoom,
  fa = X.seasons[ge].tileSize;

function ma(a) {
  return Hn.countries[a - 1]
}
let fe = y(void 0);
const Wn = () => p(fe);

function ha() {
  try {
    Yn()
  } catch (a) {
    console.error("failed to load override", a)
  }
}

function Yn() {
  const e = new URL(location.href).searchParams.get("override");
  if (!e) return;
  const t = e.split(".");
  if (t.length !== 2) throw new Error("override token wrong amount of parts");
  const [n] = t, s = JSON.parse(atob(n));
  if (Date.now() / 1e3 > s.expiresAt) throw new Error("override token expired");
  ue.info(`Currently using the ${s.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 6e4
  }), b(fe, {
    token: e,
    payload: s
  }, !0)
}

function Zn(a) {
  return te.data ? te.data.experiments[a] ?? null : null
}
var z;
class Qn {
  constructor(e) {
    _(this, z, y(!0));
    this.url = e
  }
  get online() {
    return p(g(this, z))
  }
  set online(e) {
    b(g(this, z), e, !0)
  }
  async paint(e, t, n) {
    const s = Gn(e, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
      r = Zn("2025-09_pawtect");
    if (!r) throw new Error("paint request while pawtect experiment not found");
    const o = (await Promise.all(Object.values(s).map(d => {
      const [c, S] = d[0].tile, w = d[0].season, me = {
        colors: d.map(ee => ee.colorIdx),
        coords: d.flatMap(ee => ee.pixel),
        t,
        fp: n
      }, ne = JSON.stringify(me);
      return this.request(`/s${w}/pixel/${c}/${S}`, {
        method: "POST",
        body: ne,
        headers: {
          "x-pawtect-token": r.variant !== "disabled" ? Pe(ne) : "",
          "x-pawtect-variant": r.variant
        },
        credentials: "include"
      })
    }))).filter(d => d.status !== 200);
    if (o.length) {
      const d = o[0];
      if (d.status === 401) throw new Error(qe());
      if (d.status === 403) {
        if (d.headers.get("cf-mitigated") === "challenge") throw new Error(Bt());
        const c = await d.json();
        if ((c == null ? void 0 : c.error) === "refresh") throw new Error(Gt());
        if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(Sn());
        te.refresh()
      } else if (d.status === 451) {
        const c = await o[0].json();
        c == null || c.err;
        const S = c == null ? void 0 : c.suspension;
        if (S === "ban") throw new Error(hn());
        if (S === "timeout") {
          const w = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(wn({
            until: w.toLocaleString()
          }))
        } else throw new Error(i())
      } else throw new Error(i())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [t, n],
    pixel: [s, r],
    isModerator: l = !1
  }) {
    const o = new URLSearchParams;
    o.set("x", String(s)), o.set("y", String(r));
    const d = await this.request(`${l?"/moderator":""}/s${e}/pixel/${t}/${n}?${o.toString()}`, {
      credentials: l ? "include" : void 0
    });
    if (d.status !== 200) {
      const c = await d.text();
      throw new Error(Ue({
        err: c
      }))
    }
    return d.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [t, n],
    p0: [s, r],
    p1: [l, o]
  }) {
    const d = await this.request(`/moderator/pixel-area/s${e}/${t}/${n}?x0=${s}&y0=${r}&x1=${l}&y1=${o}`, {
      credentials: "include"
    });
    if (d.status !== 200) {
      const c = await d.text();
      throw console.error("Error while fetching pixel area info", c), new Error(i())
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
    if (e.status !== 200) throw new Error(i());
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
    if (t.status === 400) throw new Error($e());
    if (t.status === 403) throw new Error(Je());
    if (t.status === 429) throw new Error(Ve());
    if (t.status !== 200) throw new Error(i());
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
    if (t.status !== 200) throw new Error(i());
    return await t.json()
  }
  async updateMe(e) {
    const t = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (t.status === 400) {
      const n = await t.json();
      throw (n == null ? void 0 : n.error) === "invalid_name" ? new Error(xn()) : (n == null ? void 0 : n.error) === "invalid_discord" ? new Error(Cn()) : new Error(n == null ? void 0 : n.error)
    } else if (t.status !== 200) throw new Error(i())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
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
    if (t.status !== 200) throw new Error(i())
  }
  async deleteFavoriteLocation(e) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: e
        }),
        credentials: "include"
      })).status !== 200) throw new Error(i())
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
    if (n.status === 400) throw new Error(nt());
    if (n.status !== 200) throw new Error(i())
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
    const n = await this.request(`/leaderboard/region/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(v())
  }
  async leaderboardRegionPlayers(e, t) {
    const n = await this.request(`/leaderboard/region/players/${e}/${t}`);
    if (n.status === 200) return n.json();
    throw new Error(v())
  }
  async leaderboardRegionAlliances(e, t) {
    const n = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
    if (n.status === 200) return n.json();
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
    if (t.status !== 200) throw new Error(i());
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
    if (t.status !== 200) throw t.status === 404 ? new Error(st()) : t.status === 403 ? new Error(ct()) : t.status === 409 ? new Error(ut()) : new Error(i())
  }
  async getAlliance() {
    const e = await this.request("/alliance", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(i())
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
      throw n.error === "max_characters" ? new Error(mt()) : n.error === "name_taken" ? new Error(pt()) : n.error == "empty_name" ? new Error(yt()) : new Error(i())
    } else throw t.status === 403 ? new Error(Et()) : new Error(i())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(i())
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
    if (n.status !== 200) throw n.status === 403 ? new Error(E()) : new Error(i())
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
    throw e.status === 403 ? new Error(E()) : new Error(i())
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
    throw new Error(i())
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(i())
  }
  async getAllianceById(e) {
    const t = await this.request(`/admin/alliances/${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status === 404) return;
    if (t.status !== 200) throw new f(i(), t.status);
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
    if (n.status !== 200) throw new f(i(), n.status);
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
    if (t.status !== 200) throw new f(i(), t.status);
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
    if (s.status !== 200) throw new f(i(), s.status);
    const r = await s.json(),
      l = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
    return {
      members: l.map(o => ({
        id: Number(o == null ? void 0 : o.id),
        name: String((o == null ? void 0 : o.name) ?? `#${o==null?void 0:o.id}`),
        picture: (o == null ? void 0 : o.picture) ?? null,
        pixelsPainted: Number((o == null ? void 0 : o.pixelsPainted) ?? (o == null ? void 0 : o.pixels_painted) ?? 0),
        lastPixelLatitude: (o == null ? void 0 : o.lastPixelLatitude) ?? null,
        lastPixelLongitude: (o == null ? void 0 : o.lastPixelLongitude) ?? null,
        role: (o == null ? void 0 : o.alliance_role) === "admin" || (o == null ? void 0 : o.role) === "admin" ? "admin" : "member"
      })),
      total: Number((r == null ? void 0 : r.total) ?? l.length)
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
      throw new Error((s == null ? void 0 : s.error) ?? i())
    }
    if (n.status !== 200) throw new f(i(), n.status)
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
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(vn()) : new Error(i())
    } else if (n.status !== 200) throw new f(i(), n.status)
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
    if (s.status !== 200) throw new f(i(), s.status)
  }
  async setAllianceMemberRole(e, t, n) {
    const s = await this.request(`/admin/alliances/${e}/members/${t}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: n
      })
    });
    if (s.status !== 200) throw new f(i(), s.status)
  }
  async removeAllianceMember(e, t) {
    const n = await this.request(`/admin/alliances/${e}/members/${t}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== 200) throw new f(i(), n.status)
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(i())
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(i())
  }
  async equipFlag(e) {
    if ((await this.request(`/flag/equip/${e}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(i());
    return e.json()
  }
  async changeProfilePicture(e) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      })).status !== 200) throw new Error(i())
  }
  async unbanAllianceUser(e) {
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(E()) : new Error(i())
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
      if (t.status === 451) throw new Error(gn());
      if (t.status !== 200) throw new Error(i())
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
    if (e.status !== 200) throw new f(i(), e.status);
    const t = await e.json();
    for (const n of t.tickets) n.reports.sort((s, r) => oe[s.reason] - oe[r.reason]);
    return t
  }
  async countMyTicketsClosedToday() {
    const e = await this.request("/moderator/count-my-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(i(), e.status);
    return e.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const e = await this.request("/moderator/open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(i(), e.status);
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
    if (e.status !== 200) throw new f(i(), e.status);
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
    if (r.status !== 200) throw new f(i(), r.status)
  }
  async request(e, t) {
    let n;
    const s = Wn();
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
      throw console.error("Fetch error:", r), this.online = !1, new Error(It(), {
        cause: r
      })
    }
    if (n.status === 429) throw new Error(se());
    if (n.status === 503 || n.status === 408) throw new Error(se());
    return n
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(i(), e.status);
    return e.json()
  }
  async getOpenReportsSummary() {
    const e = await this.request("/admin/count-all-reports", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(i(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, t) {
    const n = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== 200) throw new f(i(), n.status);
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
    if (n.status !== 200) throw new f(i(), n.status);
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
      if (t.status !== 200) throw new f(i(), t.status);
      return t.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request(`/moderator/users?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(i(), t.status);
    return t.json()
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new f(i(), t.status);
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
    if (t.status !== 200) throw new f(i(), t.status)
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new f(i(), t.status)
  }
  async getUserNotes(e) {
    const t = await this.request(`/admin/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(i(), t.status);
    return t.json()
  }
  async addUserNote(e, t) {
    const n = await this.request("/admin/users/notes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        note: t
      })
    });
    if (n.status !== 200) throw new f(i(), n.status)
  }
  async getUserPurchases(e) {
    const t = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(i(), t.status);
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
    if (n.status !== 200) throw new f(i(), n.status)
  }
  async getUserTickets(e) {
    const {
      userId: t,
      kind: n,
      page: s = 0,
      pageSize: r = 20
    } = e, l = new URLSearchParams({
      userId: String(t),
      kind: n,
      page: String(s),
      pageSize: String(r)
    }), o = await this.request(`/moderator/users/tickets?${l.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== 200) throw new f(i(), o.status);
    const d = await o.json(),
      c = Array.isArray(d == null ? void 0 : d.tickets) ? d.tickets : [];
    return c.sort((S, w) => new Date(w.createdAt).getTime() - new Date(S.createdAt).getTime()), c
  }
  mapTicketsToReportRows(e, t) {
    var s, r, l, o, d;
    const n = [];
    for (const c of e) {
      const S = c.status ?? "open";
      if (t === "received") {
        for (const w of c.reports) n.push({
          id: String(w.id),
          ticketId: String(c.id),
          createdAt: w.createdAt ?? c.createdAt,
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
        for (const w of c.reports) n.push({
          id: String(w.id),
          ticketId: String(c.id),
          createdAt: w.createdAt ?? c.createdAt,
          toUser: {
            id: Number(c.reportedUser.id),
            name: String(c.reportedUser.name),
            picture: c.reportedUser.picture ?? null
          },
          reason: String(w.reason),
          status: S
        });
        continue
      }
      n.push({
        id: String(c.id),
        ticketId: String(c.id),
        createdAt: c.createdAt,
        handledBy: c.status && c.status !== "open" ? {
          id: ((s = c.handledBy) == null ? void 0 : s.id) ?? 0,
          name: ((r = c.handledBy) == null ? void 0 : r.name) ?? "Moderator",
          picture: ((l = c.handledBy) == null ? void 0 : l.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((d = (o = c.reports) == null ? void 0 : o[0]) == null ? void 0 : d.reason) ?? "other"),
        status: S
      })
    }
    return n.sort((c, S) => new Date(S.createdAt).getTime() - new Date(c.createdAt).getTime()), n
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({
        id: String(e)
      }).toString(),
      n = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== 200) throw new f(i(), n.status);
    return n.json()
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
    if (e.status !== 204) throw new f(i(), e.status)
  }
}
z = new WeakMap;
let ce = new Qn(be);
export {
  fa as A, na as B, ge as C, ra as D, be as P, Hn as S, Ce as _, ce as a, ca as b, i as c, Ee as d, aa as e, en as f, Se as g, Ht as h, jt as i, Kt as j, Zt as k, T as l, la as m, da as n, Zn as o, sa as p, ha as q, oa as r, ia as s, ue as t, te as u, ma as v, wn as w, ua as x, hn as y, ga as z
};