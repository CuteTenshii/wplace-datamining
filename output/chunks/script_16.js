const vo = "https://maps.wplace.live",
  Io = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Oo = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  No = "true",
  Go = "0x4AAAAAABpHqZ-6i7uL0nmG",
  Bo = "https://backend.wplace.live/files",
  Po = "https://backend.wplace.live",
  He = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function Do() {
  return Ze() ? !1 : He.test(navigator.userAgent)
}

function Ze() {
  return !!(window != null && window.ReactNativeWebView)
}

function Ye(e = void 0) {
  const t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(n) ? "Safari" : "Unknown"
}
let te;

function je() {
  return te || (te = ze()), te
}

function ze() {
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
async function le() {
  let e;
  try {
    e = document.createElement("canvas");
    const t = e.getContext("2d", {
      willReadFrequently: !1
    });
    if (!t) throw new Error("canvas context blocked");
    const n = $e.replace(/!important/gm, ""),
      o = 75;
    Ke({
      canvas: e,
      context: t,
      area: {
        width: o,
        height: o
      }
    });
    const r = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `50px ${n}`, t.fillText("A", 7, 37);
    const u = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `35px ${n}`, t.fillText("👾", 0, 37);
    const i = e.toDataURL();
    return {
      paintURI: r,
      textURI: u,
      emojiURI: i
    }
  } catch (t) {
    console.error(t);
    return
  } finally {
    Je(e)
  }
}

function Je(e) {
  e && (e.width = 0, e.height = 0, e.remove())
}
const $e = `
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
  Ke = ({
    canvas: e,
    context: t,
    strokeText: n = !1,
    cssFontFamily: o = "",
    area: r = {
      width: 50,
      height: 50
    },
    rounds: u = 10,
    maxShadowBlur: i = 50,
    seed: c = 500,
    offset: d = 2001000001,
    multiplier: m = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, e.width, e.height), e.width = r.width, e.height = r.height, e.style && (e.style.display = "none");
    const a = (({
        seed: _,
        offset: f,
        multiplier: L
      }) => {
        let E = Number(_) % Number(f);
        return {
          getNextSeed: () => (E = Number(L) * E % Number(f), E)
        }
      })({
        seed: c,
        offset: d,
        multiplier: m
      }),
      {
        getNextSeed: h
      } = a,
      l = (_, f, L, E) => {
        const A = (_ - 1) / f * (L || 1) || 0;
        return E ? A : Math.floor(A)
      },
      T = (_, f, L, E, A) => {
        const {
          width: y,
          height: z
        } = L, ee = _.createRadialGradient(l(A(), f, y), l(A(), f, z), l(A(), f, y), l(A(), f, y), l(A(), f, z), l(A(), f, y));
        ee.addColorStop(0, E[l(A(), f, E.length)]), ee.addColorStop(1, E[l(A(), f, E.length)]), _.fillStyle = ee
      },
      S = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      O = (_, f, L, E) => {
        const {
          width: A,
          height: y
        } = L, z = 2.99;
        _.font = `${y/z}px ${o.replace(/!important/gm,"")}`, _.strokeText("👾A", l(E(), f, A), l(E(), f, y), l(E(), f, A))
      },
      U = (_, f, L, E) => {
        const {
          width: A,
          height: y
        } = L;
        _.beginPath(), _.arc(l(E(), f, A), l(E(), f, y), l(E(), f, Math.min(A, y)), l(E(), f, 2 * Math.PI, !0), l(E(), f, 2 * Math.PI, !0)), _.stroke()
      },
      p = (_, f, L, E) => {
        const {
          width: A,
          height: y
        } = L;
        _.beginPath(), _.moveTo(l(E(), f, A), l(E(), f, y)), _.bezierCurveTo(l(E(), f, A), l(E(), f, y), l(E(), f, A), l(E(), f, y), l(E(), f, A), l(E(), f, y)), _.stroke()
      },
      g = (_, f, L, E) => {
        const {
          width: A,
          height: y
        } = L;
        _.beginPath(), _.moveTo(l(E(), f, A), l(E(), f, y)), _.quadraticCurveTo(l(E(), f, A), l(E(), f, y), l(E(), f, A), l(E(), f, y)), _.stroke()
      },
      M = (_, f, L, E) => {
        if (!("ellipse" in _)) return;
        const {
          width: A,
          height: y
        } = L;
        _.beginPath(), _.ellipse(l(E(), f, A), l(E(), f, y), l(E(), f, Math.floor(A / 2)), l(E(), f, Math.floor(y / 2)), l(E(), f, 2 * Math.PI, !0), l(E(), f, 2 * Math.PI, !0), l(E(), f, 2 * Math.PI, !0)), _.stroke()
      },
      C = [U, p, g];
    je() !== "WebKit" && C.push(M), n && C.push(O), [...Array(u)].forEach(_ => {
      T(t, d, r, S, h), t.shadowBlur = l(h(), d, i, !0), t.shadowColor = S[l(h(), d, S.length)];
      const f = C[l(h(), d, C.length)];
      f(t, d, r, h), t.fill()
    })
  },
  de = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  fe = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  me = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Qe = Object.keys(fe).map(e => fe[e]).flat(),
  qe = Object.keys(de).map(e => de[e]).flat(),
  et = Object.keys(me).map(e => me[e]).flat(),
  tt = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  nt = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  ot = [...Qe, ...qe, ...tt, ...nt, ...et].sort();
async function rt() {
  return await (async o => {
    try {
      let r = [];
      document.fonts.check(`0px "${it()}"`) || (r = o.reduce((d, m) => (document.fonts.check(`0px "${m}"`) && d.push(m), d), []));
      const u = o.map(d => new FontFace(d, `local("${d}")`)),
        c = (await Promise.allSettled(u.map(d => d.load()))).reduce((d, m) => (m.status == "fulfilled" && d.push(m.value.family), d), []);
      return [...new Set([...r, ...c])].sort()
    } catch {
      return []
    }
  })(ot)
}

function it() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
const at = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  st = {
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
  ct = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]);
async function ut() {
  let e, t, n, o;
  try {
    let r = window;
    const u = r.document;
    "OffscreenCanvas" in window ? (e = new r.OffscreenCanvas(256, 256), t = new r.OffscreenCanvas(256, 256)) : (e = u.createElement("canvas"), t = u.createElement("canvas"));
    const i = Ee(e, "webgl"),
      c = Ee(t, "webgl2");
    if (n = i, o = c, !i) return;
    const d = (p, g) => {
        if (!p) return;
        const M = G(() => p.getShaderPrecisionFormat(p[g], p.LOW_FLOAT)),
          C = G(() => p.getShaderPrecisionFormat(p[g], p.MEDIUM_FLOAT)),
          w = G(() => p.getShaderPrecisionFormat(p[g], p.HIGH_FLOAT)),
          _ = G(() => p.getShaderPrecisionFormat(p[g], p.HIGH_INT));
        return {
          LOW_FLOAT: M,
          MEDIUM_FLOAT: C,
          HIGH_FLOAT: w,
          HIGH_INT: _
        }
      },
      m = (p, g) => {
        const M = {};
        if (!g) return M;
        for (const C in g) {
          const w = g[C];
          M[p + "." + C + ".precision"] = w ? G(() => w.precision) : void 0, M[p + "." + C + ".rangeMax"] = w ? G(() => w.rangeMax) : void 0, M[p + "." + C + ".rangeMin"] = w ? G(() => w.rangeMin) : void 0
        }
        return M
      },
      s = p => {
        const g = {};
        if (!p) return g;
        const M = p;
        for (const C of at) {
          const w = M[C];
          if (w === void 0) continue;
          const _ = p.getParameter(w);
          _ && ArrayBuffer.isView(_) ? g[C] = Array.from(_) : g[C] = _
        }
        return g
      },
      a = p => {
        if (!p) return [];
        const g = G(() => p.getContextAttributes());
        return g ? Object.keys(g).sort().map(M => `${M}=${g[M]}`) : []
      },
      h = p => {
        if (!p) return [];
        const g = [];
        for (const [M, C] of Object.entries(st)) {
          const w = G(() => p.getExtension(M));
          if (w)
            for (const _ of C) {
              const f = w[_];
              if (typeof f != "number") continue;
              if (!ct.has(_)) {
                g.push(`${_}=${f}`);
                continue
              }
              const L = G(() => p.getParameter(f));
              L == null ? g.push(`${_}=${f}`) : typeof L == "object" && "length" in L ? g.push(`${_}=${f}=${Array.from(L).join(",")}`) : g.push(`${_}=${f}=${L}`)
            }
        }
        return g.sort()
      },
      l = p => {
        const g = p ? p.getExtension("WEBGL_debug_renderer_info") : null;
        return !g || !p ? {} : {
          UNMASKED_VENDOR_WEBGL: p.getParameter(g.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: p.getParameter(g.UNMASKED_RENDERER_WEBGL)
        }
      },
      T = p => {
        if (!p) return [];
        const g = G(() => p.getSupportedExtensions());
        return g || []
      },
      S = {
        ...s(i),
        ...l(i)
      },
      O = {
        ...s(c),
        ...l(c)
      };
    return {
      extensions: [...T(i), ...T(c)],
      contextAttributes: a(i),
      contextAttributes2: a(c),
      extensionParameters: h(i),
      extensionParameters2: h(c),
      parameters: {
        ...S,
        ...O,
        ...m("VERTEX_SHADER", d(i, "VERTEX_SHADER")),
        ...m("FRAGMENT_SHADER", d(i, "FRAGMENT_SHADER"))
      }
    }
  } catch (r) {
    console.log(r);
    return
  } finally {
    _e(e, n), _e(t, o)
  }
}

function G(e) {
  try {
    return e()
  } catch {
    return
  }
}

function _e(e, t) {
  var n;
  if (e) {
    try {
      (n = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || n.loseContext()
    } catch {}
    e.width = 0, e.height = 0, e instanceof HTMLCanvasElement && e.remove()
  }
}

function Ee(e, t) {
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
var Fe = "5.2.0";

function Q(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function lt() {
  return new Promise(e => {
    const t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function dt(e, t = 1 / 0) {
  const {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(o => n.call(window, () => o(), {
    timeout: t
  })) : Q(Math.min(e, t))
}

function ve(e) {
  return !!e && typeof e.then == "function"
}

function pe(e, t) {
  try {
    const n = e();
    ve(n) ? n.then(o => t(!0, o), o => t(!1, o)) : t(!0, n)
  } catch (n) {
    t(!1, n)
  }
}
async function he(e, t, n = 16) {
  const o = Array(e.length);
  let r = Date.now();
  for (let u = 0; u < e.length; ++u) {
    o[u] = t(e[u], u);
    const i = Date.now();
    i >= r + n && (r = i, await lt())
  }
  return o
}

function H(e) {
  return e.then(void 0, () => {}), e
}

function ft(e, t) {
  for (let n = 0, o = e.length; n < o; ++n)
    if (e[n] === t) return !0;
  return !1
}

function mt(e, t) {
  return !ft(e, t)
}

function ce(e) {
  return parseInt(e)
}

function B(e) {
  return parseFloat(e)
}

function D(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e
}

function F(e) {
  return e.reduce((t, n) => t + (n ? 1 : 0), 0)
}

function Ie(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    const n = 1 / t;
    return Math.round(e * n) / n
  }
}

function _t(e) {
  var t, n;
  const o = `Unexpected syntax '${e}'`,
    r = /^\s*([a-z-]*)(.*)$/i.exec(e),
    u = r[1] || void 0,
    i = {},
    c = /([.:#][\w-]+|\[.+?\])/gi,
    d = (m, s) => {
      i[m] = i[m] || [], i[m].push(s)
    };
  for (;;) {
    const m = c.exec(r[2]);
    if (!m) break;
    const s = m[0];
    switch (s[0]) {
      case ".":
        d("class", s.slice(1));
        break;
      case "#":
        d("id", s.slice(1));
        break;
      case "[": {
        const a = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
        if (a) d(a[1], (n = (t = a[4]) !== null && t !== void 0 ? t : a[5]) !== null && n !== void 0 ? n : "");
        else throw new Error(o);
        break
      }
      default:
        throw new Error(o)
    }
  }
  return [u, i]
}

function Et(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o > 127) return new TextEncoder().encode(e);
    t[n] = o
  }
  return t
}

function W(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    r = e[1] >>> 16,
    u = e[1] & 65535,
    i = t[0] >>> 16,
    c = t[0] & 65535,
    d = t[1] >>> 16,
    m = t[1] & 65535;
  let s = 0,
    a = 0,
    h = 0,
    l = 0;
  l += u + m, h += l >>> 16, l &= 65535, h += r + d, a += h >>> 16, h &= 65535, a += o + c, s += a >>> 16, a &= 65535, s += n + i, s &= 65535, e[0] = s << 16 | a, e[1] = h << 16 | l
}

function N(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    r = e[1] >>> 16,
    u = e[1] & 65535,
    i = t[0] >>> 16,
    c = t[0] & 65535,
    d = t[1] >>> 16,
    m = t[1] & 65535;
  let s = 0,
    a = 0,
    h = 0,
    l = 0;
  l += u * m, h += l >>> 16, l &= 65535, h += r * m, a += h >>> 16, h &= 65535, h += u * d, a += h >>> 16, h &= 65535, a += o * m, s += a >>> 16, a &= 65535, a += r * d, s += a >>> 16, a &= 65535, a += u * c, s += a >>> 16, a &= 65535, s += n * m + o * d + r * c + u * i, s &= 65535, e[0] = s << 16 | a, e[1] = h << 16 | l
}

function X(e, t) {
  const n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function I(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function b(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
const pt = [4283543511, 3981806797],
  ht = [3301882366, 444984403];

function ge(e) {
  const t = [0, e[0] >>> 1];
  b(e, t), N(e, pt), t[1] = e[0] >>> 1, b(e, t), N(e, ht), t[1] = e[0] >>> 1, b(e, t)
}
const J = [2277735313, 289559509],
  $ = [1291169091, 658871167],
  Te = [0, 5],
  gt = [0, 1390208809],
  Tt = [0, 944331445];

function At(e, t) {
  const n = Et(e);
  t = t || 0;
  const o = [0, n.length],
    r = o[1] % 16,
    u = o[1] - r,
    i = [0, t],
    c = [0, t],
    d = [0, 0],
    m = [0, 0];
  let s;
  for (s = 0; s < u; s = s + 16) d[0] = n[s + 4] | n[s + 5] << 8 | n[s + 6] << 16 | n[s + 7] << 24, d[1] = n[s] | n[s + 1] << 8 | n[s + 2] << 16 | n[s + 3] << 24, m[0] = n[s + 12] | n[s + 13] << 8 | n[s + 14] << 16 | n[s + 15] << 24, m[1] = n[s + 8] | n[s + 9] << 8 | n[s + 10] << 16 | n[s + 11] << 24, N(d, J), X(d, 31), N(d, $), b(i, d), X(i, 27), W(i, c), N(i, Te), W(i, gt), N(m, $), X(m, 33), N(m, J), b(c, m), X(c, 31), W(c, i), N(c, Te), W(c, Tt);
  d[0] = 0, d[1] = 0, m[0] = 0, m[1] = 0;
  const a = [0, 0];
  switch (r) {
    case 15:
      a[1] = n[s + 14], I(a, 48), b(m, a);
    case 14:
      a[1] = n[s + 13], I(a, 40), b(m, a);
    case 13:
      a[1] = n[s + 12], I(a, 32), b(m, a);
    case 12:
      a[1] = n[s + 11], I(a, 24), b(m, a);
    case 11:
      a[1] = n[s + 10], I(a, 16), b(m, a);
    case 10:
      a[1] = n[s + 9], I(a, 8), b(m, a);
    case 9:
      a[1] = n[s + 8], b(m, a), N(m, $), X(m, 33), N(m, J), b(c, m);
    case 8:
      a[1] = n[s + 7], I(a, 56), b(d, a);
    case 7:
      a[1] = n[s + 6], I(a, 48), b(d, a);
    case 6:
      a[1] = n[s + 5], I(a, 40), b(d, a);
    case 5:
      a[1] = n[s + 4], I(a, 32), b(d, a);
    case 4:
      a[1] = n[s + 3], I(a, 24), b(d, a);
    case 3:
      a[1] = n[s + 2], I(a, 16), b(d, a);
    case 2:
      a[1] = n[s + 1], I(a, 8), b(d, a);
    case 1:
      a[1] = n[s], b(d, a), N(d, J), X(d, 31), N(d, $), b(i, d)
  }
  return b(i, o), b(c, o), W(i, c), W(c, i), ge(i), ge(c), W(i, c), W(c, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
}

function Rt(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...e
  }
}

function St(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function bt(e) {
  return typeof e != "function"
}

function Lt(e, t) {
  const n = H(new Promise(o => {
    const r = Date.now();
    pe(e.bind(null, t), (...u) => {
      const i = Date.now() - r;
      if (!u[0]) return o(() => ({
        error: u[1],
        duration: i
      }));
      const c = u[1];
      if (bt(c)) return o(() => ({
        value: c,
        duration: i
      }));
      o(() => new Promise(d => {
        const m = Date.now();
        pe(c, (...s) => {
          const a = i + Date.now() - m;
          if (!s[0]) return d({
            error: s[1],
            duration: a
          });
          d({
            value: s[1],
            duration: a
          })
        })
      }))
    })
  }));
  return function() {
    return n.then(r => r())
  }
}

function yt(e, t, n, o) {
  const r = Object.keys(e).filter(i => mt(n, i)),
    u = H(he(r, i => Lt(e[i], t), o));
  return async function() {
    const c = await u,
      d = await he(c, a => H(a()), o),
      m = await Promise.all(d),
      s = {};
    for (let a = 0; a < r.length; ++a) s[r[a]] = m[a];
    return s
  }
}

function Oe() {
  const e = window,
    t = navigator;
  return F(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function Ct() {
  const e = window,
    t = navigator;
  return F(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Oe()
}

function V() {
  const e = window,
    t = navigator;
  return F(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function P() {
  const e = window,
    t = navigator;
  return F(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, t.vendor.indexOf("Apple") === 0, "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
}

function ue() {
  const e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return F(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
}

function Z() {
  const e = window;
  return St(e.print) && String(e.browser) === "[object WebPageNamespace]"
}

function Y() {
  var e, t;
  const n = window;
  return F(["buildID" in navigator, "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
}

function Mt() {
  const e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return F(["userActivation" in t, n.supports("color", "light-dark(#000, #fff)"), n.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function Ne() {
  const {
    CSS: e
  } = window;
  return F([e.supports("selector(::details-content)"), e.supports("selector(::before::marker)"), e.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function wt() {
  const e = window;
  return F([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}

function Ft() {
  const e = window,
    {
      URLPattern: t
    } = e;
  return F(["union" in Set.prototype, "Iterator" in e, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function vt() {
  const e = window,
    t = document,
    {
      CSS: n,
      Promise: o,
      AudioContext: r
    } = e;
  return F([o && "try" in o, "caretPositionFromPoint" in t, r && "onerror" in r.prototype, n.supports("ruby-align", "space-around")]) >= 3
}

function It() {
  const e = window;
  return F(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
}

function j() {
  const e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: o
    } = e;
  return F([!("getStorageUpdates" in t), o && "popover" in o.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
}

function Ot() {
  if (navigator.platform === "iPad") return !0;
  const e = screen,
    t = e.width / e.height;
  return F(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Nt() {
  const e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function Gt() {
  const e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function q() {
  const e = V(),
    t = Y(),
    n = window,
    o = navigator,
    r = "connection";
  return e ? F([!("SharedWorker" in n), o[r] && "ontypechange" in o[r], !("sinkId" in new Audio)]) >= 2 : t ? F(["onorientationchange" in n, "orientation" in n, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Bt() {
  const e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: o
    } = t;
  return F(["srLatency" in n, "srChannelCount" in n, "devicePosture" in e, o && "segments" in o, "getTextInformation" in Image.prototype]) >= 3
}

function Pt() {
  return Xt() ? -4 : Dt()
}

function Dt() {
  const e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (Wt()) return -1;
  const n = 4500,
    o = 5e3,
    r = new t(1, o, 44100),
    u = r.createOscillator();
  u.type = "triangle", u.frequency.value = 1e4;
  const i = r.createDynamicsCompressor();
  i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, u.connect(i), i.connect(r.destination), u.start(0);
  const [c, d] = kt(r), m = H(c.then(s => xt(s.getChannelData(0).subarray(n)), s => {
    if (s.name === "timeout" || s.name === "suspended") return -3;
    throw s
  }));
  return () => (d(), m)
}

function Wt() {
  return P() && !ue() && !It()
}

function Xt() {
  return P() && j() && Z() || V() && Bt() && Ft()
}

function kt(e) {
  let u = () => {};
  return [new Promise((c, d) => {
    let m = !1,
      s = 0,
      a = 0;
    e.oncomplete = T => c(T.renderedBuffer);
    const h = () => {
        setTimeout(() => d(Ae("timeout")), Math.min(500, a + 5e3 - Date.now()))
      },
      l = () => {
        try {
          const T = e.startRendering();
          switch (ve(T) && H(T), e.state) {
            case "running":
              a = Date.now(), m && h();
              break;
            case "suspended":
              document.hidden || s++, m && s >= 3 ? d(Ae("suspended")) : setTimeout(l, 500);
              break
          }
        } catch (T) {
          d(T)
        }
      };
    l(), u = () => {
      m || (m = !0, a > 0 && h())
    }
  }), u]
}

function xt(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function Ae(e) {
  const t = new Error(e);
  return t.name = e, t
}
async function Ge(e, t, n = 50) {
  var o, r, u;
  const i = document;
  for (; !i.body;) await Q(n);
  const c = i.createElement("iframe");
  try {
    for (await new Promise((d, m) => {
        let s = !1;
        const a = () => {
            s = !0, d()
          },
          h = S => {
            s = !0, m(S)
          };
        c.onload = a, c.onerror = h;
        const {
          style: l
        } = c;
        l.setProperty("display", "block", "important"), l.position = "absolute", l.top = "0", l.left = "0", l.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", i.body.appendChild(c);
        const T = () => {
          var S, O;
          s || (((O = (S = c.contentWindow) === null || S === void 0 ? void 0 : S.document) === null || O === void 0 ? void 0 : O.readyState) === "complete" ? a() : setTimeout(T, 10))
        };
        T()
      }); !(!((r = (o = c.contentWindow) === null || o === void 0 ? void 0 : o.document) === null || r === void 0) && r.body);) await Q(n);
    return await e(c, c.contentWindow)
  } finally {
    (u = c.parentNode) === null || u === void 0 || u.removeChild(c)
  }
}

function Vt(e) {
  const [t, n] = _t(e), o = document.createElement(t ?? "div");
  for (const r of Object.keys(n)) {
    const u = n[r].join(" ");
    r === "style" ? Ut(o.style, u) : o.setAttribute(r, u)
  }
  return o
}

function Ut(e, t) {
  for (const n of t.split(";")) {
    const o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (o) {
      const [, r, u, , i] = o;
      e.setProperty(r, u, i || "")
    }
  }
}

function Ht() {
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
const Zt = "mmMwWLliI0O&1",
  Yt = "48px",
  k = ["monospace", "sans-serif", "serif"],
  Re = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function jt() {
  return Ge(async (e, {
    document: t
  }) => {
    const n = t.body;
    n.style.fontSize = Yt;
    const o = t.createElement("div");
    o.style.setProperty("visibility", "hidden", "important");
    const r = {},
      u = {},
      i = l => {
        const T = t.createElement("span"),
          {
            style: S
          } = T;
        return S.position = "absolute", S.top = "0", S.left = "0", S.fontFamily = l, T.textContent = Zt, o.appendChild(T), T
      },
      c = (l, T) => i(`'${l}',${T}`),
      d = () => k.map(i),
      m = () => {
        const l = {};
        for (const T of Re) l[T] = k.map(S => c(T, S));
        return l
      },
      s = l => k.some((T, S) => l[S].offsetWidth !== r[T] || l[S].offsetHeight !== u[T]),
      a = d(),
      h = m();
    n.appendChild(o);
    for (let l = 0; l < k.length; l++) r[k[l]] = a[l].offsetWidth, u[k[l]] = a[l].offsetHeight;
    return Re.filter(l => s(h[l]))
  })
}

function zt() {
  const e = navigator.plugins;
  if (!e) return;
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    if (!o) continue;
    const r = [];
    for (let u = 0; u < o.length; ++u) {
      const i = o[u];
      r.push({
        type: i.type,
        suffixes: i.suffixes
      })
    }
    t.push({
      name: o.name,
      description: o.description,
      mimeTypes: r
    })
  }
  return t
}

function Jt() {
  return $t(on())
}

function $t(e) {
  let t = !1,
    n, o;
  const [r, u] = Kt();
  return Qt(r, u) ? (t = qt(u), e ? n = o = "skipped" : [n, o] = en(r, u)) : n = o = "unsupported", {
    winding: t,
    geometry: n,
    text: o
  }
}

function Kt() {
  const e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")]
}

function Qt(e, t) {
  return !!(t && e.toDataURL)
}

function qt(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
}

function en(e, t) {
  tn(e, t);
  const n = ne(e),
    o = ne(e);
  return n !== o ? ["unstable", "unstable"] : (nn(e, t), [ne(e), n])
}

function tn(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const n = "Cwm fjordbank gly 😃";
  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
}

function nn(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (const [n, o, r] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = n, t.beginPath(), t.arc(o, r, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function ne(e) {
  return e.toDataURL()
}

function on() {
  const e = P() && j() && Z(),
    t = Y() && Mt();
  return e || t
}

function rn() {
  const e = navigator;
  let t = 0,
    n;
  e.maxTouchPoints !== void 0 ? t = ce(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
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

function an() {
  return navigator.oscpu
}

function sn() {
  const e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) V() && wt() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    const o = e.languages;
    o && t.push(o.split(","))
  }
  return t
}

function cn() {
  return window.screen.colorDepth
}

function un() {
  return D(B(navigator.deviceMemory), void 0)
}

function ln() {
  if (!(P() && j() && Z())) return dn()
}

function dn() {
  const e = screen,
    t = o => D(ce(o), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
const fn = 2500,
  mn = 10;
let K, oe;

function _n() {
  if (oe !== void 0) return;
  const e = () => {
    const t = ae();
    se(t) ? oe = setTimeout(e, fn) : (K = t, oe = void 0)
  };
  e()
}

function En() {
  return _n(), async () => {
    let e = ae();
    if (se(e)) {
      if (K) return [...K];
      Nt() && (await Gt(), e = ae())
    }
    return se(e) || (K = e), e
  }
}

function pn() {
  const e = P() && j() && Z(),
    t = Y() && Ne();
  if (e || t) return () => Promise.resolve(void 0);
  const n = En();
  return async () => {
    const o = await n(),
      r = u => u === null ? null : Ie(u, mn);
    return [r(o[0]), r(o[1]), r(o[2]), r(o[3])]
  }
}

function ae() {
  const e = screen;
  return [D(B(e.availTop), null), D(B(e.width) - B(e.availWidth) - D(B(e.availLeft), 0), null), D(B(e.height) - B(e.availHeight) - D(B(e.availTop), 0), null), D(B(e.availLeft), null)]
}

function se(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function hn() {
  const e = gn();
  return e !== void 0 && Y() && Ne() ? e >= 8 ? 8 : 4 : e
}

function gn() {
  return D(ce(navigator.hardwareConcurrency), void 0)
}

function Tn() {
  var e;
  const t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    const o = new t().resolvedOptions().timeZone;
    if (o) return o
  }
  const n = -An();
  return `UTC${n>=0?"+":""}${n}`
}

function An() {
  const e = new Date().getFullYear();
  return Math.max(B(new Date(e, 0, 1).getTimezoneOffset()), B(new Date(e, 6, 1).getTimezoneOffset()))
}

function Rn() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function Sn() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function bn() {
  if (!(Oe() || Ct())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function Ln() {
  return !!window.openDatabase
}

function yn() {
  return navigator.cpuClass
}

function Cn() {
  const {
    platform: e
  } = navigator;
  return e === "MacIntel" && P() && !ue() ? Ot() ? "iPad" : "iPhone" : e
}

function Mn() {
  return navigator.vendor || ""
}

function wn() {
  const e = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const n = window[t];
    n && typeof n == "object" && e.push(t)
  }
  return e.sort()
}

function Fn() {
  const e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    const t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function vn() {
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
async function In({
  debug: e
} = {}) {
  if (!On()) return;
  const t = vn(),
    n = Object.keys(t),
    o = [].concat(...n.map(i => t[i])),
    r = await Nn(o);
  e && Gn(t, r);
  const u = n.filter(i => {
    const c = t[i];
    return F(c.map(m => r[m])) > c.length * .6
  });
  return u.sort(), u
}

function On() {
  return P() || q()
}
async function Nn(e) {
  var t;
  const n = document,
    o = n.createElement("div"),
    r = new Array(e.length),
    u = {};
  Se(o);
  for (let i = 0; i < e.length; ++i) {
    const c = Vt(e[i]);
    c.tagName === "DIALOG" && c.show();
    const d = n.createElement("div");
    Se(d), d.appendChild(c), o.appendChild(d), r[i] = c
  }
  for (; !n.body;) await Q(50);
  n.body.appendChild(o);
  try {
    for (let i = 0; i < e.length; ++i) r[i].offsetParent || (u[e[i]] = !0)
  } finally {
    (t = o.parentNode) === null || t === void 0 || t.removeChild(o)
  }
  return u
}

function Se(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function Gn(e, t) {
  let n = "DOM blockers debug:\n```";
  for (const o of Object.keys(e)) {
    n += `
${o}:`;
    for (const r of e[o]) n += `
  ${t[r]?"🚫":"➡️"} ${r}`
  }
  console.log(`${n}
\`\`\``)
}

function Bn() {
  for (const e of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function Pn() {
  if (be("inverted")) return !0;
  if (be("none")) return !1
}

function be(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function Dn() {
  if (Le("active")) return !0;
  if (Le("none")) return !1
}

function Le(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
const Wn = 100;

function Xn() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let e = 0; e <= Wn; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw new Error("Too high value")
  }
}

function kn() {
  if (x("no-preference")) return 0;
  if (x("high") || x("more")) return 1;
  if (x("low") || x("less")) return -1;
  if (x("forced")) return 10
}

function x(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function xn() {
  if (ye("reduce")) return !0;
  if (ye("no-preference")) return !1
}

function ye(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function Vn() {
  if (Ce("reduce")) return !0;
  if (Ce("no-preference")) return !1
}

function Ce(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function Un() {
  if (Me("high")) return !0;
  if (Me("standard")) return !1
}

function Me(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
const R = Math,
  v = () => 0;

function Hn() {
  const e = R.acos || v,
    t = R.acosh || v,
    n = R.asin || v,
    o = R.asinh || v,
    r = R.atanh || v,
    u = R.atan || v,
    i = R.sin || v,
    c = R.sinh || v,
    d = R.cos || v,
    m = R.cosh || v,
    s = R.tan || v,
    a = R.tanh || v,
    h = R.exp || v,
    l = R.expm1 || v,
    T = R.log1p || v,
    S = f => R.pow(R.PI, f),
    O = f => R.log(f + R.sqrt(f * f - 1)),
    U = f => R.log(f + R.sqrt(f * f + 1)),
    p = f => R.log((1 + f) / (1 - f)) / 2,
    g = f => R.exp(f) - 1 / R.exp(f) / 2,
    M = f => (R.exp(f) + 1 / R.exp(f)) / 2,
    C = f => R.exp(f) - 1,
    w = f => (R.exp(2 * f) - 1) / (R.exp(2 * f) + 1),
    _ = f => R.log(1 + f);
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: O(1e154),
    asin: n(.12312423423423424),
    asinh: o(1),
    asinhPf: U(1),
    atanh: r(.5),
    atanhPf: p(.5),
    atan: u(.5),
    sin: i(-1e300),
    sinh: c(1),
    sinhPf: g(1),
    cos: d(10.000000000123),
    cosh: m(1),
    coshPf: M(1),
    tan: s(-1e300),
    tanh: a(1),
    tanhPf: w(1),
    exp: h(1),
    expm1: l(1),
    expm1Pf: C(1),
    log1p: T(10),
    log1pPf: _(10),
    powPI: S(-100)
  }
}
const Zn = "mmMwWLliI0fiflO&1",
  re = {
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

function Yn() {
  return zn((e, t, n) => {
    const o = {},
      r = {};
    for (const i of Object.keys(re)) {
      const [c = {}, d = Zn] = re[i], m = e.createElement("span");
      m.textContent = d, m.style.whiteSpace = "nowrap";
      for (const s of Object.keys(c)) {
        const a = c[s];
        a !== void 0 && (m.style[s] = a)
      }
      o[i] = m, t.append(e.createElement("br"), m)
    }
    const u = V() && vt();
    for (const i of Object.keys(re)) {
      const c = o[i].getBoundingClientRect().width;
      r[i] = u ? jn(c * n.devicePixelRatio) : c
    }
    return r
  })
}

function jn(e) {
  const t = q() ? 0 : 3,
    n = Math.pow(10, t);
  return Math.floor(e * n) / n
}

function zn(e, t = 4e3) {
  return Ge((n, o) => {
    const r = o.document,
      u = r.body,
      i = u.style;
    i.width = `${t}px`, i.webkitTextSizeAdjust = i.textSizeAdjust = "none", V() ? u.style.zoom = `${1/o.devicePixelRatio}` : P() && (u.style.zoom = "reset");
    const c = r.createElement("div");
    return c.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), u.appendChild(c), e(r, u, o)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Jn() {
  return navigator.pdfViewerEnabled
}

function $n() {
  const e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
}

function Kn() {
  const {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != "function") return -1;
  if (Qn()) return -3;
  try {
    return e.canMakePayments() ? 1 : 0
  } catch (t) {
    return qn(t)
  }
}
const Qn = Ht;

function qn(e) {
  if (e instanceof Error && e.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function eo() {
  var e;
  const t = document.createElement("a"),
    n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
  return n === void 0 ? void 0 : String(n)
}
const Be = -1,
  Pe = -2,
  to = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  no = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  oo = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  ro = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  De = "WEBGL_debug_renderer_info",
  io = "WEBGL_polygon_mode";

function ao({
  cache: e
}) {
  var t, n, o, r, u, i;
  const c = We(e);
  if (!c) return Be;
  if (!ke(c)) return Pe;
  const d = Xe() ? null : c.getExtension(De);
  return {
    version: ((t = c.getParameter(c.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((n = c.getParameter(c.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendorUnmasked: d ? (o = c.getParameter(d.UNMASKED_VENDOR_WEBGL)) === null || o === void 0 ? void 0 : o.toString() : "",
    renderer: ((r = c.getParameter(c.RENDERER)) === null || r === void 0 ? void 0 : r.toString()) || "",
    rendererUnmasked: d ? (u = c.getParameter(d.UNMASKED_RENDERER_WEBGL)) === null || u === void 0 ? void 0 : u.toString() : "",
    shadingLanguageVersion: ((i = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || i === void 0 ? void 0 : i.toString()) || ""
  }
}

function so({
  cache: e
}) {
  const t = We(e);
  if (!t) return Be;
  if (!ke(t)) return Pe;
  const n = t.getSupportedExtensions(),
    o = t.getContextAttributes(),
    r = [],
    u = [],
    i = [],
    c = [],
    d = [];
  if (o)
    for (const s of Object.keys(o)) u.push(`${s}=${o[s]}`);
  const m = we(t);
  for (const s of m) {
    const a = t[s];
    i.push(`${s}=${a}${to.has(a)?`=${t.getParameter(a)}`:""}`)
  }
  if (n)
    for (const s of n) {
      if (s === De && Xe() || s === io && lo()) continue;
      const a = t.getExtension(s);
      if (!a) {
        r.push(s);
        continue
      }
      for (const h of we(a)) {
        const l = a[h];
        c.push(`${h}=${l}${no.has(l)?`=${t.getParameter(l)}`:""}`)
      }
    }
  for (const s of oo)
    for (const a of ro) {
      const h = co(t, s, a);
      d.push(`${s}.${a}=${h.join(",")}`)
    }
  return c.sort(), i.sort(), {
    contextAttributes: u,
    parameters: i,
    shaderPrecisions: d,
    extensions: n,
    extensionParameters: c,
    unsupportedExtensions: r
  }
}

function We(e) {
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

function co(e, t, n) {
  const o = e.getShaderPrecisionFormat(e[t], e[n]);
  return o ? [o.rangeMin, o.rangeMax, o.precision] : []
}

function we(e) {
  return Object.keys(e.__proto__).filter(uo)
}

function uo(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/)
}

function Xe() {
  return Y()
}

function lo() {
  return V() || P()
}

function ke(e) {
  return typeof e.getParameter == "function"
}

function fo() {
  if (!(q() || P())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function mo() {
  if (!window.Intl) return -1;
  const e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  const t = e().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function _o(e) {
  return /not/i.test(e)
}
async function Eo() {
  const e = navigator.userAgentData;
  if (!e) return;
  const t = e.brands.filter(({
      brand: r
    }) => !_o(r)).map(({
      brand: r
    }) => r),
    o = {
      brands: t.length > 1 ? t.filter(r => r !== "Chromium") : t,
      mobile: e.mobile,
      platform: e.platform
    };
  if (e.getHighEntropyValues) try {
    const r = await e.getHighEntropyValues(["architecture", "bitness", "model", "platformVersion"]);
    o.architecture = r.architecture, o.bitness = r.bitness, o.model = r.model, o.platformVersion = r.platformVersion
  } catch (r) {
    if (r instanceof DOMException && r.name === "NotAllowedError") o.highEntropyStatus = "not_allowed";
    else throw r
  }
  return o
}
const po = {
  userAgentData: Eo,
  fonts: jt,
  domBlockers: In,
  fontPreferences: Yn,
  audio: Pt,
  screenFrame: pn,
  canvas: Jt,
  osCpu: an,
  languages: sn,
  colorDepth: cn,
  deviceMemory: un,
  screenResolution: ln,
  hardwareConcurrency: hn,
  timezone: Tn,
  sessionStorage: Rn,
  localStorage: Sn,
  indexedDB: bn,
  openDatabase: Ln,
  cpuClass: yn,
  platform: Cn,
  plugins: zt,
  touchSupport: rn,
  vendor: Mn,
  vendorFlavors: wn,
  cookiesEnabled: Fn,
  colorGamut: Bn,
  invertedColors: Pn,
  forcedColors: Dn,
  monochrome: Xn,
  contrast: kn,
  reducedMotion: xn,
  reducedTransparency: Vn,
  hdr: Un,
  math: Hn,
  pdfViewerEnabled: Jn,
  architecture: $n,
  applePay: Kn,
  privateClickMeasurement: eo,
  audioBaseLatency: fo,
  dateTimeLocale: mo,
  webGlBasics: ao,
  webGlExtensions: so
};

function ho(e) {
  return yt(po, e, [])
}
const go = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function To(e) {
  const t = Ao(e),
    n = Ro(t);
  return {
    score: t,
    comment: go.replace(/\$/g, `${n}`)
  }
}

function Ao(e) {
  if (q()) return .4;
  if (P()) return ue() && !(j() && Z()) ? .5 : .3;
  const t = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function Ro(e) {
  return Ie(.99 + .01 * e, 1e-4)
}

function So(e) {
  let t = "";
  for (const n of Object.keys(e).sort()) {
    const o = e[n],
      r = "error" in o ? "error" : JSON.stringify(o.value);
    t += `${t?"|":""}${n.replace(/([:|\\])/g,"\\$1")}:${r}`
  }
  return t
}

function xe(e) {
  return JSON.stringify(e, (t, n) => n instanceof Error ? Rt(n) : n, 2)
}

function Ve(e) {
  return At(So(e))
}

function bo(e) {
  let t;
  const n = To(e);
  return {
    get visitorId() {
      return t === void 0 && (t = Ve(this.components)), t
    },
    set visitorId(o) {
      t = o
    },
    confidence: n,
    components: e,
    version: Fe
  }
}

function Lo(e = 50) {
  return dt(e, e * 2)
}

function yo(e, t) {
  const n = Date.now();
  return {
    async get(o) {
      const r = Date.now(),
        u = await e(),
        i = bo(u);
      return (t || o != null && o.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${i.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${r-n}
visitorId: ${i.visitorId}
components: ${xe(u)}
\`\`\``), i
    }
  }
}

function Co() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const e = new XMLHttpRequest;
    e.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${Fe}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function Mo(e = {}) {
  const {
    delayFallback: t,
    debug: n,
    monitoring: o = !0
  } = e;
  o && Co(), await Lo(t);
  const r = ho({
    cache: {},
    debug: n
  });
  return yo(r, n)
}
var Ue = {
  load: Mo,
  hashComponents: Ve,
  componentsToDebugString: xe
};
let ie = null;
async function wo() {
  return ie || (ie = Ue.load()), ie
}
async function Wo() {
  return Fo().then(e => e.visitorId)
}
async function Fo() {
  var l;
  const t = await (await wo()).get();
  let n = t.components;
  const o = Ye(),
    r = navigator.userAgent.toLowerCase(),
    u = r.includes("iphone"),
    i = r.includes("macintosh"),
    c = u || i,
    d = r.includes("android");
  if (c) n = t.components;
  else if (o === "Chrome") {
    const {
      languages: T,
      ...S
    } = t.components;
    n = S
  } else if (o === "Firefox") {
    const {
      languages: T,
      dateTimeLocale: S,
      ...O
    } = t.components;
    n = O
  } else if (o === "Brave") {
    const {
      fonts: T,
      audio: S,
      canvas: O,
      hardwareConcurrency: U,
      plugins: p,
      deviceMemory: g,
      languages: M,
      dateTimeLocale: C,
      ...w
    } = t.components;
    n = w
  } else {
    const {
      languages: T,
      ...S
    } = t.components;
    n = S
  }(o === "Safari" || d) && (n = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...n
  }), o === "Safari" && (n = {
    canvas2d: {
      value: await le(),
      duration: 0
    },
    canvasWebgl: {
      value: await ut(),
      duration: 0
    },
    ...n
  }), o === "Firefox" && (n = {
    ...n,
    fonts: {
      value: [(l = n.fonts) == null ? void 0 : l.value, await rt()],
      duration: n.fonts.duration
    }
  }), d && (n = {
    canvas2d: {
      value: await le(),
      duration: 0
    },
    ...n
  });
  const m = Ue.hashComponents(n),
    s = m.length,
    a = s >> 2 | 2;
  return {
    visitorId: m.slice(0, a) + (s * 5).toString(16) + m.slice(a + (s >> 4)),
    components: n
  }
}
export {
  Po as P, Do as a, Go as b, Io as c, Ye as d, Bo as e, Oo as f, Wo as g, No as h, Ze as i, vo as j
};