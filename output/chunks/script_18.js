const li = "https://maps.wplace.live",
  di = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Mt = "svHwYf228UcW8vPuQ575",
  fi = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  mi = "true",
  pi = "0x4AAAAAABpHqZ-6i7uL0nmG",
  hi = "https://backend.wplace.live/files",
  _i = "https://backend.wplace.live",
  Ft = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function Ei() {
  return It() ? !1 : Ft.test(navigator.userAgent)
}

function It() {
  return !!(window != null && window.ReactNativeWebView)
}

function Ot(e = void 0) {
  const t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(n) ? "Safari" : "Unknown"
}
let de;

function Pt() {
  return de || (de = Nt()), de
}

function Nt() {
  let e = 0;
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    e = (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
  switch (e) {
    case 80:
      return "Blink";
    case 58:
      return "Gecko";
    case 77:
      return "WebKit";
    default:
      return "Unknown"
  }
}
async function Oe() {
  let e;
  try {
    e = document.createElement("canvas");
    const t = e.getContext("2d", {
      willReadFrequently: !1
    });
    if (!t) throw new Error("canvas context blocked");
    const n = Dt.replace(/!important/gm, ""),
      o = 75;
    Gt({
      canvas: e,
      context: t,
      area: {
        width: o,
        height: o
      }
    });
    const i = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `50px ${n}`, t.fillText("A", 7, 37);
    const a = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `35px ${n}`, t.fillText("👾", 0, 37);
    const r = e.toDataURL();
    return {
      paintURI: i,
      textURI: a,
      emojiURI: r
    }
  } catch (t) {
    console.error(t);
    return
  } finally {
    Bt(e)
  }
}

function Bt(e) {
  e && (e.width = 0, e.height = 0, e.remove())
}
const Dt = `
	'Segoe Fluent Icons',
	'Ink Free',
	'Bahnschrift',
	'Segoe MDL2 Assets',
	'HoloLens MDL2 Assets',
	'Leelawadee UI',
	'Javanese Text',
	'Segoe UI Emoji',
	'Aldhabi',
	'Gadugi',
	'Myanmar Text',
	'Nirmala UI',
	'Lucida Console',
	'Cambria Math',
	'Bai Jamjuree',
	'Chakra Petch',
	'Charmonman',
	'Fahkwang',
	'K2D',
	'Kodchasan',
	'KoHo',
	'Sarabun',
	'Srisakdi',
	'Galvji',
	'MuktaMahee Regular',
	'InaiMathi Bold',
	'American Typewriter Semibold',
	'Futura Bold',
	'SignPainter-HouseScript Semibold',
	'PingFang HK Light',
	'Kohinoor Devanagari Medium',
	'Luminari',
	'Geneva',
	'Helvetica Neue',
	'Droid Sans Mono',
	'Dancing Script',
	'Roboto',
	'Ubuntu',
	'Liberation Mono',
	'Source Code Pro',
	'DejaVu Sans',
	'OpenSymbol',
	'Chilanka',
	'Cousine',
	'Arimo',
	'Jomolhari',
	'MONO',
	'Noto Color Emoji',
	sans-serif !important
`,
  Gt = ({
    canvas: e,
    context: t,
    strokeText: n = !1,
    cssFontFamily: o = "",
    area: i = {
      width: 50,
      height: 50
    },
    rounds: a = 10,
    maxShadowBlur: r = 50,
    seed: s = 500,
    offset: d = 2001000001,
    multiplier: f = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, e.width, e.height), e.width = i.width, e.height = i.height, e.style && (e.style.display = "none");
    const c = (({
        seed: y,
        offset: m,
        multiplier: L
      }) => {
        let E = Number(y) % Number(m);
        return {
          getNextSeed: () => (E = Number(L) * E % Number(m), E)
        }
      })({
        seed: s,
        offset: d,
        multiplier: f
      }),
      {
        getNextSeed: h
      } = c,
      l = (y, m, L, E) => {
        const A = (y - 1) / m * (L || 1) || 0;
        return E ? A : Math.floor(A)
      },
      p = (y, m, L, E, A) => {
        const {
          width: M,
          height: U
        } = L, x = y.createRadialGradient(l(A(), m, M), l(A(), m, U), l(A(), m, M), l(A(), m, M), l(A(), m, U), l(A(), m, M));
        x.addColorStop(0, E[l(A(), m, E.length)]), x.addColorStop(1, E[l(A(), m, E.length)]), y.fillStyle = x
      },
      T = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      w = (y, m, L, E) => {
        const {
          width: A,
          height: M
        } = L, U = 2.99;
        y.font = `${M/U}px ${o.replace(/!important/gm,"")}`, y.strokeText("👾A", l(E(), m, A), l(E(), m, M), l(E(), m, A))
      },
      S = (y, m, L, E) => {
        const {
          width: A,
          height: M
        } = L;
        y.beginPath(), y.arc(l(E(), m, A), l(E(), m, M), l(E(), m, Math.min(A, M)), l(E(), m, 2 * Math.PI, !0), l(E(), m, 2 * Math.PI, !0)), y.stroke()
      },
      _ = (y, m, L, E) => {
        const {
          width: A,
          height: M
        } = L;
        y.beginPath(), y.moveTo(l(E(), m, A), l(E(), m, M)), y.bezierCurveTo(l(E(), m, A), l(E(), m, M), l(E(), m, A), l(E(), m, M), l(E(), m, A), l(E(), m, M)), y.stroke()
      },
      g = (y, m, L, E) => {
        const {
          width: A,
          height: M
        } = L;
        y.beginPath(), y.moveTo(l(E(), m, A), l(E(), m, M)), y.quadraticCurveTo(l(E(), m, A), l(E(), m, M), l(E(), m, A), l(E(), m, M)), y.stroke()
      },
      b = (y, m, L, E) => {
        if (!("ellipse" in y)) return;
        const {
          width: A,
          height: M
        } = L;
        y.beginPath(), y.ellipse(l(E(), m, A), l(E(), m, M), l(E(), m, Math.floor(A / 2)), l(E(), m, Math.floor(M / 2)), l(E(), m, 2 * Math.PI, !0), l(E(), m, 2 * Math.PI, !0), l(E(), m, 2 * Math.PI, !0)), y.stroke()
      },
      R = [S, _, g];
    Pt() !== "WebKit" && R.push(b), n && R.push(w), [...Array(a)].forEach(y => {
      p(t, d, i, T, h), t.shadowBlur = l(h(), d, r, !0), t.shadowColor = T[l(h(), d, T.length)];
      const m = R[l(h(), d, R.length)];
      m(t, d, i, h), t.fill()
    })
  },
  Pe = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  Ne = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  Be = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  kt = Object.keys(Ne).map(e => Ne[e]).flat(),
  Wt = Object.keys(Pe).map(e => Pe[e]).flat(),
  Xt = Object.keys(Be).map(e => Be[e]).flat(),
  xt = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  Vt = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  Ut = [...kt, ...Wt, ...xt, ...Vt, ...Xt].sort();
async function Ht() {
  return await (async o => {
    try {
      let i = [];
      document.fonts.check(`0px "${Zt()}"`) || (i = o.reduce((d, f) => (document.fonts.check(`0px "${f}"`) && d.push(f), d), []));
      const a = o.map(d => new FontFace(d, `local("${d}")`)),
        s = (await Promise.allSettled(a.map(d => d.load()))).reduce((d, f) => (f.status == "fulfilled" && d.push(f.value.family), d), []);
      return [...new Set([...i, ...s])].sort()
    } catch {
      return []
    }
  })(Ut)
}

function Zt() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
const jt = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Yt = {
    EXT_clip_control: ["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "LOWER_LEFT_EXT", "UPPER_LEFT_EXT", "NEGATIVE_ONE_TO_ONE_EXT", "ZERO_TO_ONE_EXT"],
    EXT_color_buffer_half_float: ["RGB16F_EXT", "RGBA16F_EXT", "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", "UNSIGNED_NORMALIZED_EXT"],
    EXT_depth_clamp: ["DEPTH_CLAMP_EXT"],
    EXT_disjoint_timer_query: ["CURRENT_QUERY_EXT", "GPU_DISJOINT_EXT", "QUERY_COUNTER_BITS_EXT", "QUERY_RESULT_AVAILABLE_EXT", "QUERY_RESULT_EXT", "TIMESTAMP_EXT", "TIME_ELAPSED_EXT"],
    EXT_polygon_offset_clamp: ["POLYGON_OFFSET_CLAMP_EXT"],
    EXT_sRGB: ["SRGB8_ALPHA8_EXT", "SRGB_ALPHA_EXT", "SRGB_EXT", "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT"],
    EXT_texture_compression_bptc: ["COMPRESSED_RGBA_BPTC_UNORM_EXT", "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT"],
    EXT_texture_compression_rgtc: ["COMPRESSED_RED_GREEN_RGTC2_EXT", "COMPRESSED_RED_RGTC1_EXT", "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", "COMPRESSED_SIGNED_RED_RGTC1_EXT"],
    EXT_texture_filter_anisotropic: ["MAX_TEXTURE_MAX_ANISOTROPY_EXT", "TEXTURE_MAX_ANISOTROPY_EXT"],
    EXT_texture_mirror_clamp_to_edge: ["MIRROR_CLAMP_TO_EDGE_EXT"],
    KHR_parallel_shader_compile: ["COMPLETION_STATUS_KHR"],
    OES_standard_derivatives: ["FRAGMENT_SHADER_DERIVATIVE_HINT_OES"],
    OES_texture_half_float: ["HALF_FLOAT_OES"],
    OES_vertex_array_object: ["VERTEX_ARRAY_BINDING_OES"],
    WEBGL_blend_func_extended: ["ONE_MINUS_SRC1_ALPHA_WEBGL", "ONE_MINUS_SRC1_COLOR_WEBGL", "SRC1_ALPHA_WEBGL", "SRC1_COLOR_WEBGL", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL"],
    WEBGL_color_buffer_float: ["RGBA32F_EXT"],
    WEBGL_compressed_texture_s3tc: ["COMPRESSED_RGBA_S3TC_DXT1_EXT", "COMPRESSED_RGBA_S3TC_DXT3_EXT", "COMPRESSED_RGBA_S3TC_DXT5_EXT", "COMPRESSED_RGB_S3TC_DXT1_EXT"],
    WEBGL_compressed_texture_s3tc_srgb: ["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", "COMPRESSED_SRGB_S3TC_DXT1_EXT"],
    WEBGL_debug_renderer_info: ["UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL"],
    WEBGL_depth_texture: ["UNSIGNED_INT_24_8_WEBGL"],
    WEBGL_draw_buffers: ["COLOR_ATTACHMENT0_WEBGL", "COLOR_ATTACHMENT1_WEBGL", "COLOR_ATTACHMENT2_WEBGL", "COLOR_ATTACHMENT3_WEBGL", "COLOR_ATTACHMENT4_WEBGL", "COLOR_ATTACHMENT5_WEBGL", "COLOR_ATTACHMENT6_WEBGL", "COLOR_ATTACHMENT7_WEBGL", "COLOR_ATTACHMENT8_WEBGL", "COLOR_ATTACHMENT9_WEBGL", "COLOR_ATTACHMENT10_WEBGL", "COLOR_ATTACHMENT11_WEBGL", "COLOR_ATTACHMENT12_WEBGL", "COLOR_ATTACHMENT13_WEBGL", "COLOR_ATTACHMENT14_WEBGL", "COLOR_ATTACHMENT15_WEBGL", "DRAW_BUFFER0_WEBGL", "DRAW_BUFFER1_WEBGL", "DRAW_BUFFER2_WEBGL", "DRAW_BUFFER3_WEBGL", "DRAW_BUFFER4_WEBGL", "DRAW_BUFFER5_WEBGL", "DRAW_BUFFER6_WEBGL", "DRAW_BUFFER7_WEBGL", "DRAW_BUFFER8_WEBGL", "DRAW_BUFFER9_WEBGL", "DRAW_BUFFER10_WEBGL", "DRAW_BUFFER11_WEBGL", "DRAW_BUFFER12_WEBGL", "DRAW_BUFFER13_WEBGL", "DRAW_BUFFER14_WEBGL", "DRAW_BUFFER15_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"],
    ANGLE_instanced_arrays: ["VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE"],
    EXT_blend_minmax: ["MIN_EXT", "MAX_EXT"]
  },
  zt = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]);
async function $t() {
  let e, t, n, o;
  try {
    let i = window;
    const a = i.document;
    "OffscreenCanvas" in window ? (e = new i.OffscreenCanvas(256, 256), t = new i.OffscreenCanvas(256, 256)) : (e = a.createElement("canvas"), t = a.createElement("canvas"));
    const r = Ge(e, "webgl"),
      s = Ge(t, "webgl2");
    if (n = r, o = s, !r) return;
    const d = (_, g) => {
        if (!_) return;
        const b = B(() => _.getShaderPrecisionFormat(_[g], _.LOW_FLOAT)),
          R = B(() => _.getShaderPrecisionFormat(_[g], _.MEDIUM_FLOAT)),
          v = B(() => _.getShaderPrecisionFormat(_[g], _.HIGH_FLOAT)),
          y = B(() => _.getShaderPrecisionFormat(_[g], _.HIGH_INT));
        return {
          LOW_FLOAT: b,
          MEDIUM_FLOAT: R,
          HIGH_FLOAT: v,
          HIGH_INT: y
        }
      },
      f = (_, g) => {
        const b = {};
        if (!g) return b;
        for (const R in g) {
          const v = g[R];
          b[_ + "." + R + ".precision"] = v ? B(() => v.precision) : void 0, b[_ + "." + R + ".rangeMax"] = v ? B(() => v.rangeMax) : void 0, b[_ + "." + R + ".rangeMin"] = v ? B(() => v.rangeMin) : void 0
        }
        return b
      },
      u = _ => {
        const g = {};
        if (!_) return g;
        const b = _;
        for (const R of jt) {
          const v = b[R];
          if (v === void 0) continue;
          const y = _.getParameter(v);
          y && ArrayBuffer.isView(y) ? g[R] = Array.from(y) : g[R] = y
        }
        return g
      },
      c = _ => {
        if (!_) return [];
        const g = B(() => _.getContextAttributes());
        return g ? Object.keys(g).sort().map(b => `${b}=${g[b]}`) : []
      },
      h = _ => {
        if (!_) return [];
        const g = [];
        for (const [b, R] of Object.entries(Yt)) {
          const v = B(() => _.getExtension(b));
          if (v)
            for (const y of R) {
              const m = v[y];
              if (typeof m != "number") continue;
              if (!zt.has(y)) {
                g.push(`${y}=${m}`);
                continue
              }
              const L = B(() => _.getParameter(m));
              L == null ? g.push(`${y}=${m}`) : typeof L == "object" && "length" in L ? g.push(`${y}=${m}=${Array.from(L).join(",")}`) : g.push(`${y}=${m}=${L}`)
            }
        }
        return g.sort()
      },
      l = _ => {
        const g = _ ? _.getExtension("WEBGL_debug_renderer_info") : null;
        return !g || !_ ? {} : {
          UNMASKED_VENDOR_WEBGL: _.getParameter(g.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: _.getParameter(g.UNMASKED_RENDERER_WEBGL)
        }
      },
      p = _ => {
        if (!_) return [];
        const g = B(() => _.getSupportedExtensions());
        return g || []
      },
      T = {
        ...u(r),
        ...l(r)
      },
      w = {
        ...u(s),
        ...l(s)
      };
    return {
      extensions: [...p(r), ...p(s)],
      contextAttributes: c(r),
      contextAttributes2: c(s),
      extensionParameters: h(r),
      extensionParameters2: h(s),
      parameters: {
        ...T,
        ...w,
        ...f("VERTEX_SHADER", d(r, "VERTEX_SHADER")),
        ...f("FRAGMENT_SHADER", d(r, "FRAGMENT_SHADER"))
      }
    }
  } catch (i) {
    console.log(i);
    return
  } finally {
    De(e, n), De(t, o)
  }
}

function B(e) {
  try {
    return e()
  } catch {
    return
  }
}

function De(e, t) {
  var n;
  if (e) {
    try {
      (n = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || n.loseContext()
    } catch {}
    e.width = 0, e.height = 0, e instanceof HTMLCanvasElement && e.remove()
  }
}

function Ge(e, t) {
  try {
    if (t == "webgl2") {
      const o = e.getContext("webgl2");
      return o || !(e instanceof HTMLCanvasElement) ? o : e.getContext("experimental-webgl2")
    }
    const n = e.getContext("webgl");
    return n || !(e instanceof HTMLCanvasElement) ? n : e.getContext("experimental-webgl") ?? e.getContext("moz-webgl") ?? e.getContext("webkit-3d")
  } catch (n) {
    console.error("Error while getting canvas context:", n);
    return
  }
}
const Jt = "client_timeout",
  Kt = "network_connection",
  Qt = "network_abort",
  ae = "csp_block",
  se = "invalid_endpoint",
  Te = "handle_agent_data",
  Y = "script_load_fail",
  qt = "bad_response_format",
  we = "api_key_missing",
  Ae = "api_key_invalid",
  en = "cache_misconfigured",
  be = "endpoints_misconfigured",
  tn = "wrong_worker_option",
  nn = "worker_initialization_failed",
  on = "sandboxed_iframe",
  J = "bundle_not_defined",
  W = {
    [Jt]: "Client timeout",
    [Kt]: "Network connection error",
    [Qt]: "Network request aborted",
    [ae]: "Blocked by CSP",
    [se]: 'The provided endpoint in "endpoints" parameter is not a valid URL',
    [Te]: "Handle on demand agent data error",
    [Y]: "Failed to load the JS script of the agent",
    [J]: "9319",
    [qt]: "Can't parse the backend response. Make sure the proper endpoints are used.",
    [we]: "The `apiKey` option is not provided",
    [Ae]: "The `apiKey` option is not a string",
    [en]: "The `cache` option is misconfigured",
    [be]: "The `endpoints` option is misconfigured",
    [tn]: "Wrong `worker` option, it should be a Worker instance",
    [nn]: "Web Worker initialization failed",
    [on]: "Running inside sandboxed iframes is not supported"
  };
class D extends Error {
  constructor(t, n) {
    super(t), this.name = "FingerprintError", this.event_id = null, this.code = n
  }
}

function rn(e) {
  const t = (function(o) {
    const i = atob(o),
      a = i.length,
      r = new Uint8Array(a);
    for (let s = 0; s < a; s++) r[s] = i.charCodeAt(s);
    return r
  })(e);
  let n = t;
  try {
    n = (function(o, i, a) {
      const r = () => {
          throw new Error("Invalid data")
        },
        s = ce(o);
      s.length < i.length + 2 && r();
      for (let p = 0; p < i.length; ++p) $e(s[1 + p], s[0]) !== i[p] && r();
      const d = 1 + i.length,
        f = $e(s[d], s[0]);
      s.length < d + 1 + f + a && r();
      const u = d + 1 + f,
        c = u + a,
        h = new ArrayBuffer(s.length - c),
        l = new Uint8Array(h);
      for (let p = 0; p < l.length; ++p) l[p] = s[c + p] ^ s[u + p % a];
      return h
    })(t, Xn, xn)
  } catch {}
  try {
    return (function(o) {
      const i = {
          len: 0,
          arr: new Uint8Array(128)
        },
        a = ce(o);
      let r = 0;
      const s = () => (h(), a[r] === pe ? d() : ke(a[r]) ? f() : l(Ze) ? (r += Ze.length, null) : l(je) ? (r += je.length, !0) : l(Ye) ? (r += Ye.length, !1) : a[r] === On ? u() : a[r] === Nn ? c() : p()),
        d = () => {
          for (i.len = 0; r++, a[r] !== pe;) {
            if (a[r] === Cn) {
              if (r++, a[r] === Me) {
                const S = parseInt(me(a.subarray(r + 1, r + 5)), 16);
                Vn(i, ut(String.fromCharCode(S))), r += 4;
                continue
              }
              const w = Gn[a[r]];
              if (w) {
                We(i, w);
                continue
              }
              return p()
            }
            if (a[r] === void 0) return p();
            We(i, a[r])
          }
          return r++, me((function(w) {
            return w.arr.subarray(0, w.len)
          })(i))
        },
        f = () => {
          const w = r;
          for (; a[r] === In || a[r] === ve || a[r] === vn || a[r] === Mn || ke(a[r]);) r++;
          return Number(me(a.subarray(w, r)))
        },
        u = () => {
          const w = [];
          for (r++;;) {
            if (h(), a[r] === Pn) {
              r++;
              break
            }
            if (w.length) {
              if (a[r] !== Ue) return p();
              r++
            }
            w.push(s())
          }
          return w
        },
        c = () => {
          const w = {};
          let S = !0;
          for (r++;;) {
            if (h(), a[r] === Bn) {
              r++;
              break
            }
            if (!S) {
              if (a[r] !== Ue) return p();
              r++, h()
            }
            if (a[r] !== pe) return p();
            const _ = d();
            if (h(), a[r] !== An) return p();
            r++, Object.defineProperty(w, _, {
              value: s(),
              configurable: !0,
              enumerable: !0,
              writable: !0
            }), S = !1
          }
          return w
        },
        h = () => {
          for (; a[r] === bn || a[r] === Ln || a[r] === Rn || a[r] === Sn;) r++
        },
        l = w => {
          for (let S = 0; S < w.length; S++)
            if (a[r + S] !== w[S]) return !1;
          return !0
        },
        p = () => {
          throw new SyntaxError("Unexpected " + (r < a.length ? `byte ${r}` : "end"))
        },
        T = s();
      return h(), a[r] !== void 0 && p(), T
    })(n)
  } catch {}
  return null
}

function ke(e) {
  return e >= He && e < He + 10 || e === Fn
}

function an(e, t) {
  if (e.length === 0) return Promise.reject(new TypeError("The list of script URL patterns is empty"));
  const n = [],
    o = (function(i, a, r, s, d = {}) {
      const {
        maxAttemptCount: f = 5,
        backoffBase: u = 200,
        backoffCap: c = 1e4,
        abort: h
      } = d, l = {
        failedAttempts: []
      }, [p, T] = (function(_, g, b, R) {
        const v = (function(L) {
            const E = [...L];
            return {
              current: () => E[0],
              postpone() {
                const A = E.shift();
                A !== void 0 && E.push(A)
              },
              exclude() {
                E.shift()
              }
            }
          })(_),
          y = (function(L, E) {
            let A = 0;
            return () => Math.random() * Math.min(E, L * Math.pow(2, A++))
          })(b, R),
          m = new Set;
        return [v.current(), (L, E, A) => {
          const M = g(L, E, A);
          M.action === "exclude" ? v.exclude() : v.postpone();
          const U = () => Math.max(0, L.getTime() + y() - Date.now());
          let x;
          x = typeof M.delay == "number" ? M.delay : U();
          const $ = v.current();
          return x === 0 && $ && Date.now() - L.getTime() < 50 && (m.has($) ? x = U() : m.add($)), $ === void 0 ? void 0 : [$, x]
        }]
      })(i, s, u, c), w = (S = [h == null ? void 0 : h.then(_ => l.aborted = {
        resolve: !0,
        value: _
      }, _ => l.aborted = {
        resolve: !1,
        error: _
      }), Wn(p, f, a, r, T, l, h)], Promise.race(S.filter(_ => !!_))).then(() => l);
      var S;
      return {
        then: w.then.bind(w),
        current: l
      }
    })(e, async i => {
      const a = new Date;
      try {
        const r = await t(i);
        return n.push({
          url: i,
          startedAt: a,
          finishedAt: new Date,
          error: void 0
        }), r
      } catch (r) {
        throw n.push({
          url: i,
          startedAt: a,
          finishedAt: new Date,
          error: r
        }), r
      }
    }, i => ({
      result: i
    }), _n, {
      maxAttemptCount: 5,
      backoffBase: 100,
      backoffCap: 3e3
    });
  return new Promise((i, a) => {
    Promise.resolve(o).then(r => {
      if (r.result !== void 0) i([r.result, n]);
      else {
        const s = r.failedAttempts[0];
        a(s ? s.error : new Error("No attempts were made"))
      }
    }).catch(a)
  })
}

function sn(e) {
  return {
    __type__: lt,
    value: e
  }
}

function cn(e) {
  return (function(t) {
    const n = ce(t);
    fe = fe || (function() {
      let i;
      const a = new Uint32Array(256);
      for (let r = 0; r < 256; r++) {
        i = r;
        for (let s = 0; s < 8; s++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
        a[r] = i
      }
      return a
    })();
    let o = -1;
    for (let i = 0; i < n.length; i++) o = o >>> 8 ^ fe[255 & (o ^ n[i])];
    return (-1 ^ o) >>> 0
  })(ut(e))
}
let fe;

function un(e, t) {
  return new Promise(n => (function(o, i, ...a) {
    const r = Date.now() + i;
    let s = 0;
    const d = () => {
      s = setTimeout(() => {
        Date.now() < r ? d() : o(...a)
      }, r - Date.now())
    };
    return d(), () => clearTimeout(s)
  })(n, e, t))
}

function ln(e) {
  return e !== null && typeof e == "object" && "name" in e && e.name === "FingerprintError" && "code" in e
}

function We(e, t) {
  mt(e, e.len + 1), e.arr[e.len++] = t
}
const dn = Array.isArray;

function ce(e) {
  return e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}

function fn({
  level: e,
  message: t
}) {
  e === "error" ? console.error(t) : e === "warning" ? console.warn(t) : console.log(t)
}

function ut(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o > 127) return new TextEncoder().encode(e);
    t[n] = o
  }
  return t
}
const lt = "withoutDefault",
  mn = "_vid_";

function dt(e) {
  return e instanceof Error && e.name === "TypeError"
}

function me(e) {
  if (typeof TextDecoder == "function") {
    const n = new TextDecoder().decode(e);
    if (n) return n
  }
  const t = ce(e);
  return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}

function pn(e = En) {
  return function(t) {
    let n, o;
    const {
      picked: i,
      rest: a
    } = (function(p, T) {
      const w = {},
        S = {};
      for (const [_, g] of Object.entries(p)) T.includes(_) ? w[_] = g : S[_] = g;
      return {
        picked: w,
        rest: S
      }
    })(t, ["apiKey"]), {
      apiKey: r
    } = i;
    if (!r) throw new D(W[we], we);
    if (typeof r != "string") throw new D(W[Ae], Ae);
    const s = (function(p, T) {
      return Object.prototype.hasOwnProperty.call(p, T)
    })(d = t, f = "endpoints") ? d[f] : void 0;
    var d, f;
    const u = (function(p, T, w) {
        const S = p.prepareScriptEndpoints(T, "https://fpnpmcdn.net/");
        if (S === null) throw new D(W[be], be);
        return S.map(_ => (function(g, b) {
          const R = new URL(g, window.location.href),
            v = R.pathname,
            y = "4";
          return R.pathname = `${v}${v.endsWith("/")?"":"/"}v${y}/${encodeURIComponent(b)}`, R.search = `?ci=jsl/${encodeURIComponent(hn)}`, R.href
        })(_, w))
      })(e, s, r),
      [c, h] = (function() {
        const p = [],
          T = () => {
            p.push({
              time: new Date,
              state: document.visibilityState
            })
          },
          w = (S = document, _ = "visibilitychange", g = T, S.addEventListener(_, g, b), () => S.removeEventListener(_, g, b));
        var S, _, g, b;
        return T(), [p, w]
      })(),
      l = (async function() {
        try {
          const [p, T] = await an(u, S => (function(_, g) {
            return _.withCspViolationWatch(g, async () => {
              if ((function(b) {
                  if (URL.prototype) try {
                    return new URL(b, location.href), !1
                  } catch (R) {
                    if (dt(R)) return !0;
                    throw R
                  }
                })(g)) throw new D(W[se], se);
              try {
                return await import(g)
              } catch {
                throw new D(W[Y], Y)
              }
            }, () => {
              throw new D(W[ae], ae)
            }).then(b => {
              if (typeof(b == null ? void 0 : b.start) != "function") throw new D(W[J], J);
              return b
            })
          })(e, S)), w = await p.start({
            ...a,
            ldi: {
              attempts: T,
              visibilityStates: c
            }
          });
          return n = w, w
        } catch (p) {
          throw o = (function(T) {
            return T instanceof D && T.code === J ? new D(W[Y], Y) : T
          })(p), o
        } finally {
          h()
        }
      })();
    return {
      async get(p) {
        if (n) return n.get(p);
        if (o) throw o;
        return (await l).get(p)
      },
      async collect(p) {
        if (n) return n.collect(p);
        if (o) throw o;
        return (await l).collect(p)
      }
    }
  }
}

function Xe(e, t, n, o) {
  ft(() => {
    const i = `${e}=${t}`,
      a = `expires=${new Date(Date.now()+24*n*60*60*1e3).toUTCString()}`,
      r = o ? `domain=${o}` : "";
    document.cookie = [i, "path=/", a, r, "SameSite=Lax"].join("; ")
  }, void 0)
}

function xe(e, t) {
  try {
    return new window.URL(e, window.location.href)
  } catch (n) {
    if (dt(n)) return console.warn(`Ignoring an invalid '${t}' value: "${e}"`), null;
    throw n
  }
}

function Ve(e) {
  const t = location.hostname,
    n = (function() {
      var o, i;
      const a = window;
      return ["buildID" in navigator, "MozAppearance" in ((i = (o = document.documentElement) === null || o === void 0 ? void 0 : o.style) !== null && i !== void 0 ? i : {}), "onmozfullscreenchange" in a, "mozInnerScreenX" in a, "CSSMozDocumentRule" in a, "CanvasCaptureMediaStream" in a].reduce((r, s) => r + (s ? 1 : 0), 0) >= 4
    })();
  (function(o, i) {
    let a = o.length - (o.slice(-1) === "." ? 1 : 0);
    do
      if (a = a > 0 ? o.lastIndexOf(".", a - 1) : -1, i(o.slice(a + 1)) === !0) return !0; while (a >= 0);
    return !1
  })(t, o => {
    if (!n || !/^([^.]{1,3}\.)*[^.]+\.?$/.test(o) || o === t) return e(o)
  }) || e()
}
var hn = "4.1.1";

function _n(e, t, n) {
  const o = n instanceof D ? n.code : null;
  return o === ae || o === se ? {
    action: "exclude",
    delay: 0
  } : o === J ? {
    action: "exclude",
    delay: "backoff"
  } : o === Y ? {
    action: "postpone",
    delay: Date.now() - e.getTime() < 50 ? 0 : "backoff"
  } : {
    action: "postpone",
    delay: "backoff"
  }
}
const En = {
    prepareScriptEndpoints: function(e, t) {
      return e === void 0 ? [t] : ne(e) ? (function(n, o) {
        let i, a = !1;
        Se(n) ? (a = !0, i = te(n.value)) : i = te(n);
        const r = [];
        for (const s of i) {
          const d = xe(s, "endpoints");
          d && r.push(kn(d))
        }
        return a || r.push(o), r
      })(e, t) : (function(n) {
        if (!n || typeof n != "object") return !1;
        const o = n;
        return typeof o.__type__ == "string" && cn(o.__type__) === 694409711 && (o.script === void 0 || ne(o.script)) && (o.helper === void 0 || ne(o.helper)) && (o.ingress === void 0 || ne(o.ingress))
      })(e) ? (function(n, o, i) {
        if (n === void 0) return [o];
        let a, r = !1;
        Se(n) ? (r = !0, a = te(n.value)) : a = te(n);
        const s = [];
        for (const d of a) {
          const f = xe(d, i);
          f && s.push(f.href)
        }
        return r || s.push(o), s
      })(e.script, t, "script") : null
    },
    withCspViolationWatch: function(e, t, n, o) {
      const i = document,
        a = "securitypolicyviolation";
      let r;
      const s = f => {
        const u = new URL(e, location.href),
          {
            blockedURI: c
          } = f;
        c !== u.href && c !== u.protocol.slice(0, -1) && c !== u.origin || (r = f, d())
      };
      i.addEventListener(a, s);
      const d = () => i.removeEventListener(a, s);
      return o == null || o.then(d, d), Promise.resolve().then(t).then(f => (d(), f), f => new Promise(u => {
        const c = new MessageChannel;
        c.port1.onmessage = () => u(), c.port2.postMessage(null)
      }).then(() => {
        if (d(), r) return n(r);
        throw f
      }))
    }
  },
  gn = pn();

function ft(e, t) {
  try {
    document.cookie
  } catch (n) {
    if ((function(o) {
        if (!(o instanceof DOMException)) return !1;
        const i = o.message;
        return yn.test(i) || Tn.test(i) || wn.test(i)
      })(n)) return t;
    throw n
  }
  return e()
}

function te(e) {
  return dn(e) ? e : [e]
}
const yn = /The document is sandboxed and lacks the 'allow-same-origin' flag/,
  Tn = /The operation is insecure/,
  wn = /Forbidden in a sandboxed document without the 'allow-same-origin' flag/;

function Se(e) {
  return !!e && e.__type__ === lt
}

function ne(e) {
  return Se(e) ? ze(e.value) : ze(e)
}
const pe = 34,
  Ue = 44,
  An = 58,
  bn = 32,
  Sn = 9,
  Rn = 13,
  Ln = 10,
  Cn = 92,
  He = 48,
  ve = 101,
  Me = 117,
  vn = 69,
  Mn = 43,
  Fn = 45,
  In = 46,
  On = 91,
  Pn = 93,
  Nn = 123,
  Bn = 125,
  Ze = new Uint8Array([110, Me, 108, 108]),
  je = new Uint8Array([116, 114, Me, ve]),
  Ye = new Uint8Array([102, 97, 108, 115, ve]),
  Dn = {
    '"': '"',
    "\\": "\\",
    "\b": "b",
    "\f": "f",
    "\n": "n",
    "\r": "r",
    "	": "t"
  },
  Gn = (() => {
    const e = new Uint8Array(128);
    for (const [t, n] of Object.entries(Dn)) e[n.charCodeAt(0)] = t.charCodeAt(0);
    return e
  })();

function kn(e) {
  return `${e.origin}${e.pathname.endsWith("/")?e.pathname:`${e.pathname}/`}web/`
}
async function Wn(e, t, n, o, i, a, r) {
  if (e === void 0) return;
  let s = e;
  for (let d = 0; d < t; ++d) {
    const f = new Date;
    let u, c;
    try {
      u = await Re(() => n(s, d, r), r)
    } catch (l) {
      c = l, a.failedAttempts.push({
        level: 0,
        endpoint: s,
        error: l
      })
    }
    if (u) {
      const l = o(u);
      if ("result" in l) {
        a.result = l.result;
        break
      }
      if (a.failedAttempts.push({
          level: 1,
          endpoint: s,
          error: l.error
        }), l.stop) break
    }
    const h = i(f, u, c);
    if (!h) break;
    await Re(un(h[1]), r), s = h[0]
  }
}

function mt(e, t) {
  if (e.arr.length < t) {
    const n = new Uint8Array(Math.max(2 * e.arr.length, t));
    n.set(e.arr), e.arr = n
  }
}

function he(e, t, ...n) {
  e && (async function(o, i) {
    try {
      return await o()
    } catch (a) {
      return console.error(a), i
    }
  })(() => {
    const o = t(...n);
    o !== void 0 && e(o)
  })
}

function ze(e) {
  return typeof e == "string" || Array.isArray(e) && e.every(t => typeof t == "string")
}

function Re(e, t) {
  return new Promise((n, o) => {
    let i = !1;
    t == null || t.then(() => i = !0, () => i = !0), (typeof e == "function" ? Re(Promise.resolve(), t).then(e) : e).then(a => {
      i || n(a)
    }, a => {
      i || o(a)
    })
  })
}
const Xn = [3, 13];
const xn = 9;

function Vn(e, t) {
  mt(e, e.len + t.length), e.arr.set(t, e.len), e.len += t.length
}

function $e(e, t) {
  return (e - t + 256) % 256
}
const Un = function(e, t = {}) {
  const {
    storageKeyPrefix: n = mn,
    do: o
  } = t;
  try {
    const f = rn(e);
    f !== null ? (f.visitorToken && (s = f.visitorToken, i = d = `${n}t`, a = s, r = 365, Ve(u => {
      (function(c, h) {
        Xe(c, "", -1, h)
      })(i, u)
    }), r < 0 || Ve(u => (Xe(i, a, r, u), (function(c) {
      return ft(() => {
        const h = `${c}=`;
        for (const l of document.cookie.split(";")) {
          let p = 0;
          for (; l[p] === " " && p < l.length;) ++p;
          if (l.indexOf(h) === p) return l.slice(p + h.length)
        }
      }, void 0)
    })(i) === a)), (function(u, c) {
      var h;
      try {
        (h = localStorage == null ? void 0 : localStorage.setItem) === null || h === void 0 || h.call(localStorage, u, c)
      } catch {}
    })(d, s)), f.notifications.forEach(fn), he(o, () => ({
      e: 25,
      result: {
        response: f
      }
    }))) : he(o, () => ({
      e: 25,
      result: {
        error: new Error("Failed to decode response")
      }
    }))
  } catch (f) {
    throw he(o, () => ({
      e: 25,
      result: {
        error: f instanceof Error ? f : new Error(String(f))
      }
    })), new D(W[Te], Te)
  }
  var i, a, r, s, d
};
var Hn = {
    start: gn,
    handleAgentData: Un,
    isFingerprintError: ln,
    withoutDefault: sn
  },
  pt = "5.2.0";

function ue(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function Zn() {
  return new Promise(e => {
    const t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function jn(e, t = 1 / 0) {
  const {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(o => n.call(window, () => o(), {
    timeout: t
  })) : ue(Math.min(e, t))
}

function ht(e) {
  return !!e && typeof e.then == "function"
}

function Je(e, t) {
  try {
    const n = e();
    ht(n) ? n.then(o => t(!0, o), o => t(!1, o)) : t(!0, n)
  } catch (n) {
    t(!1, n)
  }
}
async function Ke(e, t, n = 16) {
  const o = Array(e.length);
  let i = Date.now();
  for (let a = 0; a < e.length; ++a) {
    o[a] = t(e[a], a);
    const r = Date.now();
    r >= i + n && (i = r, await Zn())
  }
  return o
}

function K(e) {
  return e.then(void 0, () => {}), e
}

function Yn(e, t) {
  for (let n = 0, o = e.length; n < o; ++n)
    if (e[n] === t) return !0;
  return !1
}

function zn(e, t) {
  return !Yn(e, t)
}

function Fe(e) {
  return parseInt(e)
}

function G(e) {
  return parseFloat(e)
}

function X(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e
}

function I(e) {
  return e.reduce((t, n) => t + (n ? 1 : 0), 0)
}

function _t(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    const n = 1 / t;
    return Math.round(e * n) / n
  }
}

function $n(e) {
  var t, n;
  const o = `Unexpected syntax '${e}'`,
    i = /^\s*([a-z-]*)(.*)$/i.exec(e),
    a = i[1] || void 0,
    r = {},
    s = /([.:#][\w-]+|\[.+?\])/gi,
    d = (f, u) => {
      r[f] = r[f] || [], r[f].push(u)
    };
  for (;;) {
    const f = s.exec(i[2]);
    if (!f) break;
    const u = f[0];
    switch (u[0]) {
      case ".":
        d("class", u.slice(1));
        break;
      case "#":
        d("id", u.slice(1));
        break;
      case "[": {
        const c = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
        if (c) d(c[1], (n = (t = c[4]) !== null && t !== void 0 ? t : c[5]) !== null && n !== void 0 ? n : "");
        else throw new Error(o);
        break
      }
      default:
        throw new Error(o)
    }
  }
  return [a, r]
}

function Jn(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o > 127) return new TextEncoder().encode(e);
    t[n] = o
  }
  return t
}

function V(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    r = t[0] >>> 16,
    s = t[0] & 65535,
    d = t[1] >>> 16,
    f = t[1] & 65535;
  let u = 0,
    c = 0,
    h = 0,
    l = 0;
  l += a + f, h += l >>> 16, l &= 65535, h += i + d, c += h >>> 16, h &= 65535, c += o + s, u += c >>> 16, c &= 65535, u += n + r, u &= 65535, e[0] = u << 16 | c, e[1] = h << 16 | l
}

function N(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    r = t[0] >>> 16,
    s = t[0] & 65535,
    d = t[1] >>> 16,
    f = t[1] & 65535;
  let u = 0,
    c = 0,
    h = 0,
    l = 0;
  l += a * f, h += l >>> 16, l &= 65535, h += i * f, c += h >>> 16, h &= 65535, h += a * d, c += h >>> 16, h &= 65535, c += o * f, u += c >>> 16, c &= 65535, c += i * d, u += c >>> 16, c &= 65535, c += a * s, u += c >>> 16, c &= 65535, u += n * f + o * d + i * s + a * r, u &= 65535, e[0] = u << 16 | c, e[1] = h << 16 | l
}

function H(e, t) {
  const n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function P(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function F(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
const Kn = [4283543511, 3981806797],
  Qn = [3301882366, 444984403];

function Qe(e) {
  const t = [0, e[0] >>> 1];
  F(e, t), N(e, Kn), t[1] = e[0] >>> 1, F(e, t), N(e, Qn), t[1] = e[0] >>> 1, F(e, t)
}
const oe = [2277735313, 289559509],
  re = [1291169091, 658871167],
  qe = [0, 5],
  qn = [0, 1390208809],
  eo = [0, 944331445];

function to(e, t) {
  const n = Jn(e);
  t = t || 0;
  const o = [0, n.length],
    i = o[1] % 16,
    a = o[1] - i,
    r = [0, t],
    s = [0, t],
    d = [0, 0],
    f = [0, 0];
  let u;
  for (u = 0; u < a; u = u + 16) d[0] = n[u + 4] | n[u + 5] << 8 | n[u + 6] << 16 | n[u + 7] << 24, d[1] = n[u] | n[u + 1] << 8 | n[u + 2] << 16 | n[u + 3] << 24, f[0] = n[u + 12] | n[u + 13] << 8 | n[u + 14] << 16 | n[u + 15] << 24, f[1] = n[u + 8] | n[u + 9] << 8 | n[u + 10] << 16 | n[u + 11] << 24, N(d, oe), H(d, 31), N(d, re), F(r, d), H(r, 27), V(r, s), N(r, qe), V(r, qn), N(f, re), H(f, 33), N(f, oe), F(s, f), H(s, 31), V(s, r), N(s, qe), V(s, eo);
  d[0] = 0, d[1] = 0, f[0] = 0, f[1] = 0;
  const c = [0, 0];
  switch (i) {
    case 15:
      c[1] = n[u + 14], P(c, 48), F(f, c);
    case 14:
      c[1] = n[u + 13], P(c, 40), F(f, c);
    case 13:
      c[1] = n[u + 12], P(c, 32), F(f, c);
    case 12:
      c[1] = n[u + 11], P(c, 24), F(f, c);
    case 11:
      c[1] = n[u + 10], P(c, 16), F(f, c);
    case 10:
      c[1] = n[u + 9], P(c, 8), F(f, c);
    case 9:
      c[1] = n[u + 8], F(f, c), N(f, re), H(f, 33), N(f, oe), F(s, f);
    case 8:
      c[1] = n[u + 7], P(c, 56), F(d, c);
    case 7:
      c[1] = n[u + 6], P(c, 48), F(d, c);
    case 6:
      c[1] = n[u + 5], P(c, 40), F(d, c);
    case 5:
      c[1] = n[u + 4], P(c, 32), F(d, c);
    case 4:
      c[1] = n[u + 3], P(c, 24), F(d, c);
    case 3:
      c[1] = n[u + 2], P(c, 16), F(d, c);
    case 2:
      c[1] = n[u + 1], P(c, 8), F(d, c);
    case 1:
      c[1] = n[u], F(d, c), N(d, oe), H(d, 31), N(d, re), F(r, d)
  }
  return F(r, o), F(s, o), V(r, s), V(s, r), Qe(r), Qe(s), V(r, s), V(s, r), ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function no(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...e
  }
}

function oo(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function ro(e) {
  return typeof e != "function"
}

function io(e, t) {
  const n = K(new Promise(o => {
    const i = Date.now();
    Je(e.bind(null, t), (...a) => {
      const r = Date.now() - i;
      if (!a[0]) return o(() => ({
        error: a[1],
        duration: r
      }));
      const s = a[1];
      if (ro(s)) return o(() => ({
        value: s,
        duration: r
      }));
      o(() => new Promise(d => {
        const f = Date.now();
        Je(s, (...u) => {
          const c = r + Date.now() - f;
          if (!u[0]) return d({
            error: u[1],
            duration: c
          });
          d({
            value: u[1],
            duration: c
          })
        })
      }))
    })
  }));
  return function() {
    return n.then(i => i())
  }
}

function ao(e, t, n, o) {
  const i = Object.keys(e).filter(r => zn(n, r)),
    a = K(Ke(i, r => io(e[r], t), o));
  return async function() {
    const s = await a,
      d = await Ke(s, c => K(c()), o),
      f = await Promise.all(d),
      u = {};
    for (let c = 0; c < i.length; ++c) u[i[c]] = f[c];
    return u
  }
}

function Et() {
  const e = window,
    t = navigator;
  return I(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function so() {
  const e = window,
    t = navigator;
  return I(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Et()
}

function z() {
  const e = window,
    t = navigator;
  return I(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function k() {
  const e = window,
    t = navigator;
  return I(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, t.vendor.indexOf("Apple") === 0, "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
}

function Ie() {
  const e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return I(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
}

function Q() {
  const e = window;
  return oo(e.print) && String(e.browser) === "[object WebPageNamespace]"
}

function q() {
  var e, t;
  const n = window;
  return I(["buildID" in navigator, "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
}

function co() {
  const e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return I(["userActivation" in t, n.supports("color", "light-dark(#000, #fff)"), n.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function gt() {
  const {
    CSS: e
  } = window;
  return I([e.supports("selector(::details-content)"), e.supports("selector(::before::marker)"), e.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function uo() {
  const e = window;
  return I([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}

function lo() {
  const e = window,
    {
      URLPattern: t
    } = e;
  return I(["union" in Set.prototype, "Iterator" in e, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function fo() {
  const e = window,
    t = document,
    {
      CSS: n,
      Promise: o,
      AudioContext: i
    } = e;
  return I([o && "try" in o, "caretPositionFromPoint" in t, i && "onerror" in i.prototype, n.supports("ruby-align", "space-around")]) >= 3
}

function mo() {
  const e = window;
  return I(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
}

function ee() {
  const e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: o
    } = e;
  return I([!("getStorageUpdates" in t), o && "popover" in o.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
}

function po() {
  if (navigator.platform === "iPad") return !0;
  const e = screen,
    t = e.width / e.height;
  return I(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function ho() {
  const e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function _o() {
  const e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function le() {
  const e = z(),
    t = q(),
    n = window,
    o = navigator,
    i = "connection";
  return e ? I([!("SharedWorker" in n), o[i] && "ontypechange" in o[i], !("sinkId" in new Audio)]) >= 2 : t ? I(["onorientationchange" in n, "orientation" in n, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Eo() {
  const e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: o
    } = t;
  return I(["srLatency" in n, "srChannelCount" in n, "devicePosture" in e, o && "segments" in o, "getTextInformation" in Image.prototype]) >= 3
}

function go() {
  return wo() ? -4 : yo()
}

function yo() {
  const e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (To()) return -1;
  const n = 4500,
    o = 5e3,
    i = new t(1, o, 44100),
    a = i.createOscillator();
  a.type = "triangle", a.frequency.value = 1e4;
  const r = i.createDynamicsCompressor();
  r.threshold.value = -50, r.knee.value = 40, r.ratio.value = 12, r.attack.value = 0, r.release.value = .25, a.connect(r), r.connect(i.destination), a.start(0);
  const [s, d] = Ao(i), f = K(s.then(u => bo(u.getChannelData(0).subarray(n)), u => {
    if (u.name === "timeout" || u.name === "suspended") return -3;
    throw u
  }));
  return () => (d(), f)
}

function To() {
  return k() && !Ie() && !mo()
}

function wo() {
  return k() && ee() && Q() || z() && Eo() && lo()
}

function Ao(e) {
  let a = () => {};
  return [new Promise((s, d) => {
    let f = !1,
      u = 0,
      c = 0;
    e.oncomplete = p => s(p.renderedBuffer);
    const h = () => {
        setTimeout(() => d(et("timeout")), Math.min(500, c + 5e3 - Date.now()))
      },
      l = () => {
        try {
          const p = e.startRendering();
          switch (ht(p) && K(p), e.state) {
            case "running":
              c = Date.now(), f && h();
              break;
            case "suspended":
              document.hidden || u++, f && u >= 3 ? d(et("suspended")) : setTimeout(l, 500);
              break
          }
        } catch (p) {
          d(p)
        }
      };
    l(), a = () => {
      f || (f = !0, c > 0 && h())
    }
  }), a]
}

function bo(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function et(e) {
  const t = new Error(e);
  return t.name = e, t
}
async function yt(e, t, n = 50) {
  var o, i, a;
  const r = document;
  for (; !r.body;) await ue(n);
  const s = r.createElement("iframe");
  try {
    for (await new Promise((d, f) => {
        let u = !1;
        const c = () => {
            u = !0, d()
          },
          h = T => {
            u = !0, f(T)
          };
        s.onload = c, s.onerror = h;
        const {
          style: l
        } = s;
        l.setProperty("display", "block", "important"), l.position = "absolute", l.top = "0", l.left = "0", l.visibility = "hidden", t && "srcdoc" in s ? s.srcdoc = t : s.src = "about:blank", r.body.appendChild(s);
        const p = () => {
          var T, w;
          u || (((w = (T = s.contentWindow) === null || T === void 0 ? void 0 : T.document) === null || w === void 0 ? void 0 : w.readyState) === "complete" ? c() : setTimeout(p, 10))
        };
        p()
      }); !(!((i = (o = s.contentWindow) === null || o === void 0 ? void 0 : o.document) === null || i === void 0) && i.body);) await ue(n);
    return await e(s, s.contentWindow)
  } finally {
    (a = s.parentNode) === null || a === void 0 || a.removeChild(s)
  }
}

function So(e) {
  const [t, n] = $n(e), o = document.createElement(t ?? "div");
  for (const i of Object.keys(n)) {
    const a = n[i].join(" ");
    i === "style" ? Ro(o.style, a) : o.setAttribute(i, a)
  }
  return o
}

function Ro(e, t) {
  for (const n of t.split(";")) {
    const o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (o) {
      const [, i, a, , r] = o;
      e.setProperty(i, a, r || "")
    }
  }
}

function Lo() {
  let e = window;
  for (;;) {
    const t = e.parent;
    if (!t || t === e) return !1;
    try {
      if (t.location.origin !== e.location.origin) return !0
    } catch (n) {
      if (n instanceof Error && n.name === "SecurityError") return !0;
      throw n
    }
    e = t
  }
}
const Co = "mmMwWLliI0O&1",
  vo = "48px",
  Z = ["monospace", "sans-serif", "serif"],
  tt = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Mo() {
  return yt(async (e, {
    document: t
  }) => {
    const n = t.body;
    n.style.fontSize = vo;
    const o = t.createElement("div");
    o.style.setProperty("visibility", "hidden", "important");
    const i = {},
      a = {},
      r = l => {
        const p = t.createElement("span"),
          {
            style: T
          } = p;
        return T.position = "absolute", T.top = "0", T.left = "0", T.fontFamily = l, p.textContent = Co, o.appendChild(p), p
      },
      s = (l, p) => r(`'${l}',${p}`),
      d = () => Z.map(r),
      f = () => {
        const l = {};
        for (const p of tt) l[p] = Z.map(T => s(p, T));
        return l
      },
      u = l => Z.some((p, T) => l[T].offsetWidth !== i[p] || l[T].offsetHeight !== a[p]),
      c = d(),
      h = f();
    n.appendChild(o);
    for (let l = 0; l < Z.length; l++) i[Z[l]] = c[l].offsetWidth, a[Z[l]] = c[l].offsetHeight;
    return tt.filter(l => u(h[l]))
  })
}

function Fo() {
  const e = navigator.plugins;
  if (!e) return;
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    if (!o) continue;
    const i = [];
    for (let a = 0; a < o.length; ++a) {
      const r = o[a];
      i.push({
        type: r.type,
        suffixes: r.suffixes
      })
    }
    t.push({
      name: o.name,
      description: o.description,
      mimeTypes: i
    })
  }
  return t
}

function Io() {
  return Oo(Wo())
}

function Oo(e) {
  let t = !1,
    n, o;
  const [i, a] = Po();
  return No(i, a) ? (t = Bo(a), e ? n = o = "skipped" : [n, o] = Do(i, a)) : n = o = "unsupported", {
    winding: t,
    geometry: n,
    text: o
  }
}

function Po() {
  const e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")]
}

function No(e, t) {
  return !!(t && e.toDataURL)
}

function Bo(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
}

function Do(e, t) {
  Go(e, t);
  const n = _e(e),
    o = _e(e);
  return n !== o ? ["unstable", "unstable"] : (ko(e, t), [_e(e), n])
}

function Go(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const n = "Cwm fjordbank gly 😃";
  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
}

function ko(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (const [n, o, i] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = n, t.beginPath(), t.arc(o, i, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function _e(e) {
  return e.toDataURL()
}

function Wo() {
  const e = k() && ee() && Q(),
    t = q() && co();
  return e || t
}

function Xo() {
  const e = navigator;
  let t = 0,
    n;
  e.maxTouchPoints !== void 0 ? t = Fe(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), n = !0
  } catch {
    n = !1
  }
  const o = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: n,
    touchStart: o
  }
}

function xo() {
  return navigator.oscpu
}

function Vo() {
  const e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) z() && uo() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    const o = e.languages;
    o && t.push(o.split(","))
  }
  return t
}

function Uo() {
  return window.screen.colorDepth
}

function Ho() {
  return X(G(navigator.deviceMemory), void 0)
}

function Zo() {
  if (!(k() && ee() && Q())) return jo()
}

function jo() {
  const e = screen,
    t = o => X(Fe(o), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
const Yo = 2500,
  zo = 10;
let ie, Ee;

function $o() {
  if (Ee !== void 0) return;
  const e = () => {
    const t = Le();
    Ce(t) ? Ee = setTimeout(e, Yo) : (ie = t, Ee = void 0)
  };
  e()
}

function Jo() {
  return $o(), async () => {
    let e = Le();
    if (Ce(e)) {
      if (ie) return [...ie];
      ho() && (await _o(), e = Le())
    }
    return Ce(e) || (ie = e), e
  }
}

function Ko() {
  const e = k() && ee() && Q(),
    t = q() && gt();
  if (e || t) return () => Promise.resolve(void 0);
  const n = Jo();
  return async () => {
    const o = await n(),
      i = a => a === null ? null : _t(a, zo);
    return [i(o[0]), i(o[1]), i(o[2]), i(o[3])]
  }
}

function Le() {
  const e = screen;
  return [X(G(e.availTop), null), X(G(e.width) - G(e.availWidth) - X(G(e.availLeft), 0), null), X(G(e.height) - G(e.availHeight) - X(G(e.availTop), 0), null), X(G(e.availLeft), null)]
}

function Ce(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function Qo() {
  const e = qo();
  return e !== void 0 && q() && gt() ? e >= 8 ? 8 : 4 : e
}

function qo() {
  return X(Fe(navigator.hardwareConcurrency), void 0)
}

function er() {
  var e;
  const t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    const o = new t().resolvedOptions().timeZone;
    if (o) return o
  }
  const n = -tr();
  return `UTC${n>=0?"+":""}${n}`
}

function tr() {
  const e = new Date().getFullYear();
  return Math.max(G(new Date(e, 0, 1).getTimezoneOffset()), G(new Date(e, 6, 1).getTimezoneOffset()))
}

function nr() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function or() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function rr() {
  if (!(Et() || so())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function ir() {
  return !!window.openDatabase
}

function ar() {
  return navigator.cpuClass
}

function sr() {
  const {
    platform: e
  } = navigator;
  return e === "MacIntel" && k() && !Ie() ? po() ? "iPad" : "iPhone" : e
}

function cr() {
  return navigator.vendor || ""
}

function ur() {
  const e = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const n = window[t];
    n && typeof n == "object" && e.push(t)
  }
  return e.sort()
}

function lr() {
  const e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    const t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function dr() {
  const e = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', e("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2NhbXBhaWduLWJhbm5lcg=="), e("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", e("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", e("LndpZGdldF9wb19hZHNfd2lkZ2V0"), e("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
    easyListChina: [e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", e("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", e("LnNwb25zb3JsaW5rZ3J1ZW4="), e("I3dlcmJ1bmdza3k="), e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}
async function fr({
  debug: e
} = {}) {
  if (!mr()) return;
  const t = dr(),
    n = Object.keys(t),
    o = [].concat(...n.map(r => t[r])),
    i = await pr(o);
  e && hr(t, i);
  const a = n.filter(r => {
    const s = t[r];
    return I(s.map(f => i[f])) > s.length * .6
  });
  return a.sort(), a
}

function mr() {
  return k() || le()
}
async function pr(e) {
  var t;
  const n = document,
    o = n.createElement("div"),
    i = new Array(e.length),
    a = {};
  nt(o);
  for (let r = 0; r < e.length; ++r) {
    const s = So(e[r]);
    s.tagName === "DIALOG" && s.show();
    const d = n.createElement("div");
    nt(d), d.appendChild(s), o.appendChild(d), i[r] = s
  }
  for (; !n.body;) await ue(50);
  n.body.appendChild(o);
  try {
    for (let r = 0; r < e.length; ++r) i[r].offsetParent || (a[e[r]] = !0)
  } finally {
    (t = o.parentNode) === null || t === void 0 || t.removeChild(o)
  }
  return a
}

function nt(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function hr(e, t) {
  let n = "DOM blockers debug:\n```";
  for (const o of Object.keys(e)) {
    n += `
${o}:`;
    for (const i of e[o]) n += `
  ${t[i]?"🚫":"➡️"} ${i}`
  }
  console.log(`${n}
\`\`\``)
}

function _r() {
  for (const e of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function Er() {
  if (ot("inverted")) return !0;
  if (ot("none")) return !1
}

function ot(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function gr() {
  if (rt("active")) return !0;
  if (rt("none")) return !1
}

function rt(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
const yr = 100;

function Tr() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let e = 0; e <= yr; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw new Error("Too high value")
  }
}

function wr() {
  if (j("no-preference")) return 0;
  if (j("high") || j("more")) return 1;
  if (j("low") || j("less")) return -1;
  if (j("forced")) return 10
}

function j(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function Ar() {
  if (it("reduce")) return !0;
  if (it("no-preference")) return !1
}

function it(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function br() {
  if (at("reduce")) return !0;
  if (at("no-preference")) return !1
}

function at(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function Sr() {
  if (st("high")) return !0;
  if (st("standard")) return !1
}

function st(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
const C = Math,
  O = () => 0;

function Rr() {
  const e = C.acos || O,
    t = C.acosh || O,
    n = C.asin || O,
    o = C.asinh || O,
    i = C.atanh || O,
    a = C.atan || O,
    r = C.sin || O,
    s = C.sinh || O,
    d = C.cos || O,
    f = C.cosh || O,
    u = C.tan || O,
    c = C.tanh || O,
    h = C.exp || O,
    l = C.expm1 || O,
    p = C.log1p || O,
    T = m => C.pow(C.PI, m),
    w = m => C.log(m + C.sqrt(m * m - 1)),
    S = m => C.log(m + C.sqrt(m * m + 1)),
    _ = m => C.log((1 + m) / (1 - m)) / 2,
    g = m => C.exp(m) - 1 / C.exp(m) / 2,
    b = m => (C.exp(m) + 1 / C.exp(m)) / 2,
    R = m => C.exp(m) - 1,
    v = m => (C.exp(2 * m) - 1) / (C.exp(2 * m) + 1),
    y = m => C.log(1 + m);
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: w(1e154),
    asin: n(.12312423423423424),
    asinh: o(1),
    asinhPf: S(1),
    atanh: i(.5),
    atanhPf: _(.5),
    atan: a(.5),
    sin: r(-1e300),
    sinh: s(1),
    sinhPf: g(1),
    cos: d(10.000000000123),
    cosh: f(1),
    coshPf: b(1),
    tan: u(-1e300),
    tanh: c(1),
    tanhPf: v(1),
    exp: h(1),
    expm1: l(1),
    expm1Pf: R(1),
    log1p: p(10),
    log1pPf: y(10),
    powPI: T(-100)
  }
}
const Lr = "mmMwWLliI0fiflO&1",
  ge = {
    default: [],
    apple: [{
      font: "-apple-system-body"
    }],
    serif: [{
      fontFamily: "serif"
    }],
    sans: [{
      fontFamily: "sans-serif"
    }],
    mono: [{
      fontFamily: "monospace"
    }],
    min: [{
      fontSize: "1px"
    }],
    system: [{
      fontFamily: "system-ui"
    }]
  };

function Cr() {
  return Mr((e, t, n) => {
    const o = {},
      i = {};
    for (const r of Object.keys(ge)) {
      const [s = {}, d = Lr] = ge[r], f = e.createElement("span");
      f.textContent = d, f.style.whiteSpace = "nowrap";
      for (const u of Object.keys(s)) {
        const c = s[u];
        c !== void 0 && (f.style[u] = c)
      }
      o[r] = f, t.append(e.createElement("br"), f)
    }
    const a = z() && fo();
    for (const r of Object.keys(ge)) {
      const s = o[r].getBoundingClientRect().width;
      i[r] = a ? vr(s * n.devicePixelRatio) : s
    }
    return i
  })
}

function vr(e) {
  const t = le() ? 0 : 3,
    n = Math.pow(10, t);
  return Math.floor(e * n) / n
}

function Mr(e, t = 4e3) {
  return yt((n, o) => {
    const i = o.document,
      a = i.body,
      r = a.style;
    r.width = `${t}px`, r.webkitTextSizeAdjust = r.textSizeAdjust = "none", z() ? a.style.zoom = `${1/o.devicePixelRatio}` : k() && (a.style.zoom = "reset");
    const s = i.createElement("div");
    return s.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), a.appendChild(s), e(i, a, o)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Fr() {
  return navigator.pdfViewerEnabled
}

function Ir() {
  const e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
}

function Or() {
  const {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != "function") return -1;
  if (Pr()) return -3;
  try {
    return e.canMakePayments() ? 1 : 0
  } catch (t) {
    return Nr(t)
  }
}
const Pr = Lo;

function Nr(e) {
  if (e instanceof Error && e.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function Br() {
  var e;
  const t = document.createElement("a"),
    n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
  return n === void 0 ? void 0 : String(n)
}
const Tt = -1,
  wt = -2,
  Dr = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Gr = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  kr = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Wr = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  At = "WEBGL_debug_renderer_info",
  Xr = "WEBGL_polygon_mode";

function xr({
  cache: e
}) {
  var t, n, o, i, a, r;
  const s = bt(e);
  if (!s) return Tt;
  if (!Rt(s)) return wt;
  const d = St() ? null : s.getExtension(At);
  return {
    version: ((t = s.getParameter(s.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((n = s.getParameter(s.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendorUnmasked: d ? (o = s.getParameter(d.UNMASKED_VENDOR_WEBGL)) === null || o === void 0 ? void 0 : o.toString() : "",
    renderer: ((i = s.getParameter(s.RENDERER)) === null || i === void 0 ? void 0 : i.toString()) || "",
    rendererUnmasked: d ? (a = s.getParameter(d.UNMASKED_RENDERER_WEBGL)) === null || a === void 0 ? void 0 : a.toString() : "",
    shadingLanguageVersion: ((r = s.getParameter(s.SHADING_LANGUAGE_VERSION)) === null || r === void 0 ? void 0 : r.toString()) || ""
  }
}

function Vr({
  cache: e
}) {
  const t = bt(e);
  if (!t) return Tt;
  if (!Rt(t)) return wt;
  const n = t.getSupportedExtensions(),
    o = t.getContextAttributes(),
    i = [],
    a = [],
    r = [],
    s = [],
    d = [];
  if (o)
    for (const u of Object.keys(o)) a.push(`${u}=${o[u]}`);
  const f = ct(t);
  for (const u of f) {
    const c = t[u];
    r.push(`${u}=${c}${Dr.has(c)?`=${t.getParameter(c)}`:""}`)
  }
  if (n)
    for (const u of n) {
      if (u === At && St() || u === Xr && Zr()) continue;
      const c = t.getExtension(u);
      if (!c) {
        i.push(u);
        continue
      }
      for (const h of ct(c)) {
        const l = c[h];
        s.push(`${h}=${l}${Gr.has(l)?`=${t.getParameter(l)}`:""}`)
      }
    }
  for (const u of kr)
    for (const c of Wr) {
      const h = Ur(t, u, c);
      d.push(`${u}.${c}=${h.join(",")}`)
    }
  return s.sort(), r.sort(), {
    contextAttributes: a,
    parameters: r,
    shaderPrecisions: d,
    extensions: n,
    extensionParameters: s,
    unsupportedExtensions: i
  }
}

function bt(e) {
  if (e.webgl) return e.webgl.context;
  const t = document.createElement("canvas");
  let n;
  t.addEventListener("webglCreateContextError", () => n = void 0);
  for (const o of ["webgl", "experimental-webgl"]) {
    try {
      n = t.getContext(o)
    } catch {}
    if (n) break
  }
  return e.webgl = {
    context: n
  }, n
}

function Ur(e, t, n) {
  const o = e.getShaderPrecisionFormat(e[t], e[n]);
  return o ? [o.rangeMin, o.rangeMax, o.precision] : []
}

function ct(e) {
  return Object.keys(e.__proto__).filter(Hr)
}

function Hr(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/)
}

function St() {
  return q()
}

function Zr() {
  return z() || k()
}

function Rt(e) {
  return typeof e.getParameter == "function"
}

function jr() {
  if (!(le() || k())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function Yr() {
  if (!window.Intl) return -1;
  const e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  const t = e().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function zr(e) {
  return /not/i.test(e)
}
async function $r() {
  const e = navigator.userAgentData;
  if (!e) return;
  const t = e.brands.filter(({
      brand: i
    }) => !zr(i)).map(({
      brand: i
    }) => i),
    o = {
      brands: t.length > 1 ? t.filter(i => i !== "Chromium") : t,
      mobile: e.mobile,
      platform: e.platform
    };
  if (e.getHighEntropyValues) try {
    const i = await e.getHighEntropyValues(["architecture", "bitness", "model", "platformVersion"]);
    o.architecture = i.architecture, o.bitness = i.bitness, o.model = i.model, o.platformVersion = i.platformVersion
  } catch (i) {
    if (i instanceof DOMException && i.name === "NotAllowedError") o.highEntropyStatus = "not_allowed";
    else throw i
  }
  return o
}
const Jr = {
  userAgentData: $r,
  fonts: Mo,
  domBlockers: fr,
  fontPreferences: Cr,
  audio: go,
  screenFrame: Ko,
  canvas: Io,
  osCpu: xo,
  languages: Vo,
  colorDepth: Uo,
  deviceMemory: Ho,
  screenResolution: Zo,
  hardwareConcurrency: Qo,
  timezone: er,
  sessionStorage: nr,
  localStorage: or,
  indexedDB: rr,
  openDatabase: ir,
  cpuClass: ar,
  platform: sr,
  plugins: Fo,
  touchSupport: Xo,
  vendor: cr,
  vendorFlavors: ur,
  cookiesEnabled: lr,
  colorGamut: _r,
  invertedColors: Er,
  forcedColors: gr,
  monochrome: Tr,
  contrast: wr,
  reducedMotion: Ar,
  reducedTransparency: br,
  hdr: Sr,
  math: Rr,
  pdfViewerEnabled: Fr,
  architecture: Ir,
  applePay: Or,
  privateClickMeasurement: Br,
  audioBaseLatency: jr,
  dateTimeLocale: Yr,
  webGlBasics: xr,
  webGlExtensions: Vr
};

function Kr(e) {
  return ao(Jr, e, [])
}
const Qr = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function qr(e) {
  const t = ei(e),
    n = ti(t);
  return {
    score: t,
    comment: Qr.replace(/\$/g, `${n}`)
  }
}

function ei(e) {
  if (le()) return .4;
  if (k()) return Ie() && !(ee() && Q()) ? .5 : .3;
  const t = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function ti(e) {
  return _t(.99 + .01 * e, 1e-4)
}

function ni(e) {
  let t = "";
  for (const n of Object.keys(e).sort()) {
    const o = e[n],
      i = "error" in o ? "error" : JSON.stringify(o.value);
    t += `${t?"|":""}${n.replace(/([:|\\])/g,"\\$1")}:${i}`
  }
  return t
}

function Lt(e) {
  return JSON.stringify(e, (t, n) => n instanceof Error ? no(n) : n, 2)
}

function Ct(e) {
  return to(ni(e))
}

function oi(e) {
  let t;
  const n = qr(e);
  return {
    get visitorId() {
      return t === void 0 && (t = Ct(this.components)), t
    },
    set visitorId(o) {
      t = o
    },
    confidence: n,
    components: e,
    version: pt
  }
}

function ri(e = 50) {
  return jn(e, e * 2)
}

function ii(e, t) {
  const n = Date.now();
  return {
    async get(o) {
      const i = Date.now(),
        a = await e(),
        r = oi(a);
      return (t || o != null && o.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${r.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${i-n}
visitorId: ${r.visitorId}
components: ${Lt(a)}
\`\`\``), r
    }
  }
}

function ai() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const e = new XMLHttpRequest;
    e.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${pt}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function si(e = {}) {
  const {
    delayFallback: t,
    debug: n,
    monitoring: o = !0
  } = e;
  o && ai(), await ri(t);
  const i = Kr({
    cache: {},
    debug: n
  });
  return ii(i, n)
}
var vt = {
  load: si,
  hashComponents: Ct,
  componentsToDebugString: Lt
};
let ye = null;
async function ci() {
  return ye || (ye = vt.load()), ye
}
async function gi() {
  return ui().then(e => e.visitorId)
}
async function ui() {
  var l;
  const t = await (await ci()).get();
  let n = t.components;
  const o = Ot(),
    i = navigator.userAgent.toLowerCase(),
    a = i.includes("iphone"),
    r = i.includes("macintosh"),
    s = a || r,
    d = i.includes("android");
  if (s) n = t.components;
  else if (o === "Chrome") {
    const {
      languages: p,
      ...T
    } = t.components;
    n = T
  } else if (o === "Firefox") {
    const {
      languages: p,
      dateTimeLocale: T,
      ...w
    } = t.components;
    n = w
  } else if (o === "Brave") {
    const {
      fonts: p,
      audio: T,
      canvas: w,
      hardwareConcurrency: S,
      plugins: _,
      deviceMemory: g,
      languages: b,
      dateTimeLocale: R,
      ...v
    } = t.components;
    n = v
  } else {
    const {
      languages: p,
      ...T
    } = t.components;
    n = T
  }(o === "Safari" || d) && (n = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...n
  }), o === "Safari" && (n = {
    canvas2d: {
      value: await Oe(),
      duration: 0
    },
    canvasWebgl: {
      value: await $t(),
      duration: 0
    },
    ...n
  }), o === "Firefox" && (n = {
    ...n,
    fonts: {
      value: [(l = n.fonts) == null ? void 0 : l.value, await Ht()],
      duration: n.fonts.duration
    }
  }), d && (n = {
    canvas2d: {
      value: await Oe(),
      duration: 0
    },
    ...n
  });
  const f = vt.hashComponents(n),
    u = f.length,
    c = u >> 2 | 2;
  return {
    visitorId: f.slice(0, c) + (u * 5).toString(16) + f.slice(c + (u >> 4)),
    components: n
  }
}

function yi() {
  return Hn.start({
    apiKey: Mt,
    endpoints: ["https://wplace.live/7eskSe93usV8ENxB/?region=eu"],
    region: "eu"
  })
}
export {
  _i as P, Ei as a, pi as b, di as c, Ot as d, hi as e, fi as f, gi as g, mi as h, It as i, yi as j, li as k
};