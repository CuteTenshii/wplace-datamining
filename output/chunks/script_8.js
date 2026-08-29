import {
  a as e
} from "./8ZG0XGNA.js";
var t = `https://maps.wplace.live`,
  n = `8d582454-e5ec-4314-b1c2-89e460ac1d28`,
  r = `false`,
  i = `svHwYf228UcW8vPuQ575`,
  a = `false`,
  o = `JFFRUM6NQ3-PJS0AAFC2_W`,
  s = `pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl`,
  c = `true`,
  l = `0x4AAAAAABpHqZ-6i7uL0nmG`,
  u = `https://backend.wplace.live`,
  d = `https://backend.wplace.live/files`;
f.listeners = [], f.createListener = e => () => {
  let t = e(),
    n = {};
  for (let e in t) n[e] = t[e]();
  Object.assign(window, n)
}, f.init = () => f.listeners.forEach(e => e());

function f(e) {}
var p = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function m() {
  return !h() && p.test(navigator.userAgent)
}

function h() {
  var e;
  return !!((e = window) != null && e.ReactNativeWebView)
}

function g(e = void 0) {
  let t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return `brave` in navigator ? `Brave` : /\bEdg(?:e|A|iOS)?\//.test(t) ? `Edge` : /\bOPR\/|\bOpera\//.test(t) ? `Opera` : /\bVivaldi\//.test(t) ? `Vivaldi` : /\bYaBrowser\//.test(t) ? `Yandex` : /\bSamsungBrowser\//.test(t) ? `Samsung Internet` : /\bUCBrowser\/|\bUCWEB\//.test(t) ? `UC Browser` : /\bDuckDuckGo\/|\bDdg\//.test(t) ? `DuckDuckGo` : getComputedStyle(document.documentElement).getPropertyValue(`--arc-palette-title`) ? `Arc` : /Firefox\/|FxiOS\//.test(t) ? `Firefox` : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? `Chrome` : /Safari\//.test(t) && /apple/i.test(n) ? `Safari` : `Unknown`
}
var _ = void 0;

function ee() {
  return _ || (_ = te()), _
}

function te() {
  let e = 0,
    t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    e = (n instanceof Error ? n.message : String(n)).length + (t + ``).split(t.name).join(``).length
  }
  switch (e) {
    case 80:
      return `Blink`;
    case 58:
      return `Gecko`;
    case 77:
      return `WebKit`;
    default:
      return `Unknown`
  }
}
async function v() {
  let e;
  try {
    e = document.createElement(`canvas`);
    let t = e.getContext(`2d`, {
      willReadFrequently: !1
    });
    if (!t) throw Error(`canvas context blocked`);
    let n = re.replace(/!important/gm, ``);
    ie({
      canvas: e,
      context: t,
      area: {
        width: 75,
        height: 75
      }
    });
    let r = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `50px ${n}`, t.fillText(`A`, 7, 37);
    let i = e.toDataURL();
    return e.width = 50, e.height = 50, t.font = `35px ${n}`, t.fillText(`👾`, 0, 37), {
      paintURI: r,
      textURI: i,
      emojiURI: e.toDataURL()
    }
  } catch (e) {
    console.error(e);
    return
  } finally {
    ne(e)
  }
}

function ne(e) {
  e && (e.width = 0, e.height = 0, e.remove())
}
var re = `
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
  ie = ({
    canvas: e,
    context: t,
    strokeText: n = !1,
    cssFontFamily: r = ``,
    area: i = {
      width: 50,
      height: 50
    },
    rounds: a = 10,
    maxShadowBlur: o = 50,
    seed: s = 500,
    offset: c = 2001000001,
    multiplier: l = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, e.width, e.height), e.width = i.width, e.height = i.height, e.style && (e.style.display = `none`);
    let {
      getNextSeed: u
    } = (({
      seed: e,
      offset: t,
      multiplier: n
    }) => {
      let r = Number(e) % Number(t);
      return {
        getNextSeed: () => (r = Number(n) * r % Number(t), r)
      }
    })({
      seed: s,
      offset: c,
      multiplier: l
    }), d = (e, t, n, r) => {
      let i = (e - 1) / t * (n || 1) || 0;
      return r ? i : Math.floor(i)
    }, f = (e, t, n, r, i) => {
      let {
        width: a,
        height: o
      } = n, s = e.createRadialGradient(d(i(), t, a), d(i(), t, o), d(i(), t, a), d(i(), t, a), d(i(), t, o), d(i(), t, a));
      s.addColorStop(0, r[d(i(), t, r.length)]), s.addColorStop(1, r[d(i(), t, r.length)]), e.fillStyle = s
    }, p = `#FF6633.#FFB399.#FF33FF.#FFFF99.#00B3E6.#E6B333.#3366E6.#999966.#99FF99.#B34D4D.#80B300.#809900.#E6B3B3.#6680B3.#66991A.#FF99E6.#CCFF1A.#FF1A66.#E6331A.#33FFCC.#66994D.#B366CC.#4D8000.#B33300.#CC80CC.#66664D.#991AFF.#E666FF.#4DB3FF.#1AB399.#E666B3.#33991A.#CC9999.#B3B31A.#00E680.#4D8066.#809980.#E6FF80.#1AFF33.#999933.#FF3380.#CCCC00.#66E64D.#4D80CC.#9900B3.#E64D66.#4DB380.#FF4D4D.#99E6E6.#6666FF`.split(`.`), m = (e, t, n, i) => {
      let {
        width: a,
        height: o
      } = n;
      e.font = `${o/2.99}px ${r.replace(/!important/gm,``)}`, e.strokeText(`👾A`, d(i(), t, a), d(i(), t, o), d(i(), t, a))
    }, h = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.arc(d(r(), t, i), d(r(), t, a), d(r(), t, Math.min(i, a)), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0)), e.stroke()
    }, g = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.moveTo(d(r(), t, i), d(r(), t, a)), e.bezierCurveTo(d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a)), e.stroke()
    }, _ = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.moveTo(d(r(), t, i), d(r(), t, a)), e.quadraticCurveTo(d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a)), e.stroke()
    }, te = (e, t, n, r) => {
      if (!(`ellipse` in e)) return;
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.ellipse(d(r(), t, i), d(r(), t, a), d(r(), t, Math.floor(i / 2)), d(r(), t, Math.floor(a / 2)), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0)), e.stroke()
    }, v = [h, g, _];
    ee() !== `WebKit` && v.push(te), n && v.push(m), [...Array(a)].forEach(e => {
      f(t, c, i, p, u), t.shadowBlur = d(u(), c, o, !0), t.shadowColor = p[d(u(), c, p.length)];
      let n = v[d(u(), c, v.length)];
      n(t, c, i, u), t.fill()
    })
  },
  ae = {
    7: [`Cambria Math`, `Lucida Console`],
    8: [`Aldhabi`, `Gadugi`, `Myanmar Text`, `Nirmala UI`],
    "8.1": [`Leelawadee UI`, `Javanese Text`, `Segoe UI Emoji`],
    10: [`HoloLens MDL2 Assets`, `Segoe MDL2 Assets`, `Bahnschrift`, `Ink Free`],
    11: [`Segoe Fluent Icons`]
  },
  oe = {
    "10.9": [`Helvetica Neue`, `Geneva`],
    "10.10": [`Kohinoor Devanagari Medium`, `Luminari`],
    "10.11": [`PingFang HK Light`],
    "10.12": [`American Typewriter Semibold`, `Futura Bold`, `SignPainter-HouseScript Semibold`],
    "10.13-10.14": [`InaiMathi Bold`],
    "10.15-11": [`Galvji`, `MuktaMahee Regular`],
    12: [`Noto Sans Gunjala Gondi Regular`, `Noto Sans Masaram Gondi Regular`, `Noto Serif Yezidi Regular`],
    13: [`Apple SD Gothic Neo ExtraBold`, `STIX Two Math Regular`, `STIX Two Text Regular`, `Noto Sans Canadian Aboriginal Regular`]
  },
  se = {
    "Microsoft Outlook": [`MS Outlook`],
    "Adobe Acrobat": [`ZWAdobeF`],
    LibreOffice: [`Amiri`, `KACSTOffice`, `Liberation Mono`, `Source Code Pro`],
    OpenOffice: [`DejaVu Sans`, `Gentium Book Basic`, `OpenSymbol`]
  },
  ce = Object.keys(oe).map(e => oe[e]).flat(),
  le = Object.keys(ae).map(e => ae[e]).flat(),
  ue = Object.keys(se).map(e => se[e]).flat(),
  de = [`Arimo`, `Chilanka`, `Cousine`, `Jomolhari`, `MONO`, `Noto Color Emoji`, `Ubuntu`],
  fe = [`Dancing Script`, `Droid Sans Mono`, `Roboto`],
  pe = [...ce, ...le, ...de, ...fe, ...ue].sort();
async function me() {
  return await (async e => {
    try {
      let t = [];
      document.fonts.check(`0px "${he()}"`) || (t = e.reduce((e, t) => (document.fonts.check(`0px "${t}"`) && e.push(t), e), []));
      let n = e.map(e => new FontFace(e, `local("${e}")`)),
        r = (await Promise.allSettled(n.map(e => e.load()))).reduce((e, t) => (t.status == `fulfilled` && e.push(t.value.family), e), []);
      return [...new Set([...t, ...r])].sort()
    } catch {
      return []
    }
  })(pe)
}

function he() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
var ge = `ALIASED_POINT_SIZE_RANGE.ALIASED_LINE_WIDTH_RANGE.STENCIL_VALUE_MASK.STENCIL_WRITEMASK.STENCIL_BACK_VALUE_MASK.STENCIL_BACK_WRITEMASK.MAX_TEXTURE_SIZE.MAX_VIEWPORT_DIMS.SUBPIXEL_BITS.MAX_VERTEX_ATTRIBS.MAX_VERTEX_UNIFORM_VECTORS.MAX_VARYING_VECTORS.MAX_COMBINED_TEXTURE_IMAGE_UNITS.MAX_VERTEX_TEXTURE_IMAGE_UNITS.MAX_TEXTURE_IMAGE_UNITS.MAX_FRAGMENT_UNIFORM_VECTORS.SHADING_LANGUAGE_VERSION.VENDOR.RENDERER.VERSION.MAX_CUBE_MAP_TEXTURE_SIZE.MAX_RENDERBUFFER_SIZE.MAX_3D_TEXTURE_SIZE.MAX_ELEMENTS_VERTICES.MAX_ELEMENTS_INDICES.MAX_TEXTURE_LOD_BIAS.MAX_DRAW_BUFFERS.MAX_FRAGMENT_UNIFORM_COMPONENTS.MAX_VERTEX_UNIFORM_COMPONENTS.MAX_ARRAY_TEXTURE_LAYERS.MAX_PROGRAM_TEXEL_OFFSET.MAX_VARYING_COMPONENTS.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS.MAX_COLOR_ATTACHMENTS.MAX_SAMPLES.MAX_VERTEX_UNIFORM_BLOCKS.MAX_FRAGMENT_UNIFORM_BLOCKS.MAX_COMBINED_UNIFORM_BLOCKS.MAX_UNIFORM_BUFFER_BINDINGS.MAX_UNIFORM_BLOCK_SIZE.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS.MAX_VERTEX_OUTPUT_COMPONENTS.MAX_FRAGMENT_INPUT_COMPONENTS.MAX_SERVER_WAIT_TIMEOUT.MAX_ELEMENT_INDEX.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`.split(`.`).sort(),
  _e = {
    EXT_clip_control: [`CLIP_DEPTH_MODE_EXT`, `CLIP_ORIGIN_EXT`, `LOWER_LEFT_EXT`, `UPPER_LEFT_EXT`, `NEGATIVE_ONE_TO_ONE_EXT`, `ZERO_TO_ONE_EXT`],
    EXT_color_buffer_half_float: [`RGB16F_EXT`, `RGBA16F_EXT`, `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`, `UNSIGNED_NORMALIZED_EXT`],
    EXT_depth_clamp: [`DEPTH_CLAMP_EXT`],
    EXT_disjoint_timer_query: [`CURRENT_QUERY_EXT`, `GPU_DISJOINT_EXT`, `QUERY_COUNTER_BITS_EXT`, `QUERY_RESULT_AVAILABLE_EXT`, `QUERY_RESULT_EXT`, `TIMESTAMP_EXT`, `TIME_ELAPSED_EXT`],
    EXT_polygon_offset_clamp: [`POLYGON_OFFSET_CLAMP_EXT`],
    EXT_sRGB: [`SRGB8_ALPHA8_EXT`, `SRGB_ALPHA_EXT`, `SRGB_EXT`, `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`],
    EXT_texture_compression_bptc: [`COMPRESSED_RGBA_BPTC_UNORM_EXT`, `COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`, `COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`, `COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`],
    EXT_texture_compression_rgtc: [`COMPRESSED_RED_GREEN_RGTC2_EXT`, `COMPRESSED_RED_RGTC1_EXT`, `COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`, `COMPRESSED_SIGNED_RED_RGTC1_EXT`],
    EXT_texture_filter_anisotropic: [`MAX_TEXTURE_MAX_ANISOTROPY_EXT`, `TEXTURE_MAX_ANISOTROPY_EXT`],
    EXT_texture_mirror_clamp_to_edge: [`MIRROR_CLAMP_TO_EDGE_EXT`],
    KHR_parallel_shader_compile: [`COMPLETION_STATUS_KHR`],
    OES_standard_derivatives: [`FRAGMENT_SHADER_DERIVATIVE_HINT_OES`],
    OES_texture_half_float: [`HALF_FLOAT_OES`],
    OES_vertex_array_object: [`VERTEX_ARRAY_BINDING_OES`],
    WEBGL_blend_func_extended: [`ONE_MINUS_SRC1_ALPHA_WEBGL`, `ONE_MINUS_SRC1_COLOR_WEBGL`, `SRC1_ALPHA_WEBGL`, `SRC1_COLOR_WEBGL`, `MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL`],
    WEBGL_color_buffer_float: [`RGBA32F_EXT`],
    WEBGL_compressed_texture_s3tc: [`COMPRESSED_RGBA_S3TC_DXT1_EXT`, `COMPRESSED_RGBA_S3TC_DXT3_EXT`, `COMPRESSED_RGBA_S3TC_DXT5_EXT`, `COMPRESSED_RGB_S3TC_DXT1_EXT`],
    WEBGL_compressed_texture_s3tc_srgb: [`COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`, `COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`, `COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`, `COMPRESSED_SRGB_S3TC_DXT1_EXT`],
    WEBGL_debug_renderer_info: [`UNMASKED_RENDERER_WEBGL`, `UNMASKED_VENDOR_WEBGL`],
    WEBGL_depth_texture: [`UNSIGNED_INT_24_8_WEBGL`],
    WEBGL_draw_buffers: `COLOR_ATTACHMENT0_WEBGL.COLOR_ATTACHMENT1_WEBGL.COLOR_ATTACHMENT2_WEBGL.COLOR_ATTACHMENT3_WEBGL.COLOR_ATTACHMENT4_WEBGL.COLOR_ATTACHMENT5_WEBGL.COLOR_ATTACHMENT6_WEBGL.COLOR_ATTACHMENT7_WEBGL.COLOR_ATTACHMENT8_WEBGL.COLOR_ATTACHMENT9_WEBGL.COLOR_ATTACHMENT10_WEBGL.COLOR_ATTACHMENT11_WEBGL.COLOR_ATTACHMENT12_WEBGL.COLOR_ATTACHMENT13_WEBGL.COLOR_ATTACHMENT14_WEBGL.COLOR_ATTACHMENT15_WEBGL.DRAW_BUFFER0_WEBGL.DRAW_BUFFER1_WEBGL.DRAW_BUFFER2_WEBGL.DRAW_BUFFER3_WEBGL.DRAW_BUFFER4_WEBGL.DRAW_BUFFER5_WEBGL.DRAW_BUFFER6_WEBGL.DRAW_BUFFER7_WEBGL.DRAW_BUFFER8_WEBGL.DRAW_BUFFER9_WEBGL.DRAW_BUFFER10_WEBGL.DRAW_BUFFER11_WEBGL.DRAW_BUFFER12_WEBGL.DRAW_BUFFER13_WEBGL.DRAW_BUFFER14_WEBGL.DRAW_BUFFER15_WEBGL.MAX_COLOR_ATTACHMENTS_WEBGL.MAX_DRAW_BUFFERS_WEBGL`.split(`.`),
    ANGLE_instanced_arrays: [`VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`],
    EXT_blend_minmax: [`MIN_EXT`, `MAX_EXT`]
  },
  ve = new Set([`CLIP_DEPTH_MODE_EXT`, `CLIP_ORIGIN_EXT`, `DEPTH_CLAMP_EXT`, `GPU_DISJOINT_EXT`, `POLYGON_OFFSET_CLAMP_EXT`, `MAX_TEXTURE_MAX_ANISOTROPY_EXT`, `FRAGMENT_SHADER_DERIVATIVE_HINT_OES`, `VERTEX_ARRAY_BINDING_OES`, `MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL`, `UNMASKED_RENDERER_WEBGL`, `UNMASKED_VENDOR_WEBGL`, `MAX_COLOR_ATTACHMENTS_WEBGL`, `MAX_DRAW_BUFFERS_WEBGL`]);
async function ye() {
  let e, t, n, r;
  try {
    let i = window,
      a = i.document;
    `OffscreenCanvas` in window ? (e = new i.OffscreenCanvas(256, 256), t = new i.OffscreenCanvas(256, 256)) : (e = a.createElement(`canvas`), t = a.createElement(`canvas`));
    let o = xe(e, `webgl`),
      s = xe(t, `webgl2`);
    if (n = o, r = s, !o) return;
    let c = (e, t) => {
        if (e) return {
          LOW_FLOAT: y(() => e.getShaderPrecisionFormat(e[t], e.LOW_FLOAT)),
          MEDIUM_FLOAT: y(() => e.getShaderPrecisionFormat(e[t], e.MEDIUM_FLOAT)),
          HIGH_FLOAT: y(() => e.getShaderPrecisionFormat(e[t], e.HIGH_FLOAT)),
          HIGH_INT: y(() => e.getShaderPrecisionFormat(e[t], e.HIGH_INT))
        }
      },
      l = (e, t) => {
        let n = {};
        if (!t) return n;
        for (let r in t) {
          let i = t[r];
          n[e + `.` + r + `.precision`] = i ? y(() => i.precision) : void 0, n[e + `.` + r + `.rangeMax`] = i ? y(() => i.rangeMax) : void 0, n[e + `.` + r + `.rangeMin`] = i ? y(() => i.rangeMin) : void 0
        }
        return n
      },
      u = e => {
        let t = {};
        if (!e) return t;
        let n = e;
        for (let r of ge) {
          let i = n[r];
          if (i === void 0) continue;
          let a = e.getParameter(i);
          t[r] = a && ArrayBuffer.isView(a) ? Array.from(a) : a
        }
        return t
      },
      d = e => {
        if (!e) return [];
        let t = y(() => e.getContextAttributes());
        return t ? Object.keys(t).sort().map(e => `${e}=${t[e]}`) : []
      },
      f = e => {
        if (!e) return [];
        let t = [];
        for (let [n, r] of Object.entries(_e)) {
          let i = y(() => e.getExtension(n));
          if (i)
            for (let n of r) {
              let r = i[n];
              if (typeof r != `number`) continue;
              if (!ve.has(n)) {
                t.push(`${n}=${r}`);
                continue
              }
              let a = y(() => e.getParameter(r));
              a == null ? t.push(`${n}=${r}`) : typeof a == `object` && `length` in a ? t.push(`${n}=${r}=${Array.from(a).join(`,`)}`) : t.push(`${n}=${r}=${a}`)
            }
        }
        return t.sort()
      },
      p = e => {
        let t = e ? e.getExtension(`WEBGL_debug_renderer_info`) : null;
        return !t || !e ? {} : {
          UNMASKED_VENDOR_WEBGL: e.getParameter(t.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: e.getParameter(t.UNMASKED_RENDERER_WEBGL)
        }
      },
      m = e => e && y(() => e.getSupportedExtensions()) || [],
      h = {
        ...u(o),
        ...p(o)
      },
      g = {
        ...u(s),
        ...p(s)
      };
    return {
      extensions: [...m(o), ...m(s)],
      contextAttributes: d(o),
      contextAttributes2: d(s),
      extensionParameters: f(o),
      extensionParameters2: f(s),
      parameters: {
        ...h,
        ...g,
        ...l(`VERTEX_SHADER`, c(o, `VERTEX_SHADER`)),
        ...l(`FRAGMENT_SHADER`, c(o, `FRAGMENT_SHADER`))
      }
    }
  } catch (e) {
    console.log(e);
    return
  } finally {
    be(e, n), be(t, r)
  }
}

function y(e) {
  try {
    return e()
  } catch {
    return
  }
}

function be(e, t) {
  if (e) {
    try {
      var n;
      t == null || (n = t.getExtension(`WEBGL_lose_context`)) == null || n.loseContext()
    } catch {}
    e.width = 0, e.height = 0, e instanceof HTMLCanvasElement && e.remove()
  }
}

function xe(e, t) {
  try {
    if (t == `webgl2`) {
      let t = e.getContext(`webgl2`);
      return t || !(e instanceof HTMLCanvasElement) ? t : e.getContext(`experimental-webgl2`)
    }
    let n = e.getContext(`webgl`);
    return n || !(e instanceof HTMLCanvasElement) ? n : e.getContext(`experimental-webgl`) ?? e.getContext(`moz-webgl`) ?? e.getContext(`webkit-3d`)
  } catch (e) {
    console.error(`Error while getting canvas context:`, e);
    return
  }
}
var Se = `client_timeout`,
  Ce = `network_connection`,
  we = `network_abort`,
  b = `csp_block`,
  x = `invalid_endpoint`,
  Te = `handle_agent_data`,
  S = `script_load_fail`,
  Ee = `bad_response_format`,
  De = `api_key_missing`,
  Oe = `api_key_invalid`,
  ke = `cache_misconfigured`,
  Ae = `endpoints_misconfigured`,
  je = `wrong_worker_option`,
  Me = `worker_initialization_failed`,
  Ne = `sandboxed_iframe`,
  C = `bundle_not_defined`,
  w = {
    [Se]: `Client timeout`,
    [Ce]: `Network connection error`,
    [we]: `Network request aborted`,
    [b]: `Blocked by CSP`,
    [x]: `The provided endpoint in "endpoints" parameter is not a valid URL`,
    [Te]: `Handle on demand agent data error`,
    [S]: `Failed to load the JS script of the agent`,
    [C]: `9319`,
    [Ee]: `Can't parse the backend response. Make sure the proper endpoints are used.`,
    [De]: "The `apiKey` option is not provided",
    [Oe]: "The `apiKey` option is not a string",
    [ke]: "The `cache` option is misconfigured",
    [Ae]: "The `endpoints` option is misconfigured",
    [je]: "Wrong `worker` option, it should be a Worker instance",
    [Me]: `Web Worker initialization failed`,
    [Ne]: `Running inside sandboxed iframes is not supported`
  },
  T = class extends Error {
    constructor(e, t) {
      super(e), this.name = `FingerprintError`, this.event_id = null, this.code = t
    }
  };

function Pe(e) {
  let t = function(e) {
      let t = atob(e),
        n = t.length,
        r = new Uint8Array(n);
      for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
      return r
    }(e),
    n = t;
  try {
    n = function(e, t, n) {
      let r = () => {
          throw Error(`Invalid data`)
        },
        i = E(e);
      i.length < t.length + 2 && r();
      for (let e = 0; e < t.length; ++e) Vt(i[1 + e], i[0]) !== t[e] && r();
      let a = 1 + t.length,
        o = Vt(i[a], i[0]);
      i.length < a + 1 + o + n && r();
      let s = a + 1 + o,
        c = s + n,
        l = new ArrayBuffer(i.length - c),
        u = new Uint8Array(l);
      for (let e = 0; e < u.length; ++e) u[e] = i[c + e] ^ i[s + e % n];
      return l
    }(t, Rt, zt)
  } catch {}
  try {
    return function(e) {
      let t = {
          len: 0,
          arr: new Uint8Array(128)
        },
        n = E(e),
        r = 0,
        i = () => (l(), n[r] === lt ? a() : Fe(n[r]) ? o() : u(Dt) ? (r += Dt.length, null) : u(Ot) ? (r += Ot.length, !0) : u(kt) ? (r += kt.length, !1) : n[r] === Ct ? s() : n[r] === Tt ? c() : d()),
        a = () => {
          for (t.len = 0; r++, n[r] !== lt;) {
            if (n[r] === gt) {
              if (r++, n[r] === vt) {
                let e = parseInt(Ye(n.subarray(r + 1, r + 5)), 16);
                Bt(t, Ge(String.fromCharCode(e))), r += 4;
                continue
              }
              let e = jt[n[r]];
              if (e) {
                He(t, e);
                continue
              }
              return d()
            }
            if (n[r] === void 0) return d();
            He(t, n[r])
          }
          return r++, Ye(function(e) {
            return e.arr.subarray(0, e.len)
          }(t))
        },
        o = () => {
          let e = r;
          for (; n[r] === St || n[r] === k || n[r] === yt || n[r] === bt || Fe(n[r]);) r++;
          return Number(Ye(n.subarray(e, r)))
        },
        s = () => {
          let e = [];
          for (r++;;) {
            if (l(), n[r] === wt) {
              r++;
              break
            }
            if (e.length) {
              if (n[r] !== ut) return d();
              r++
            }
            e.push(i())
          }
          return e
        },
        c = () => {
          let e = {},
            t = !0;
          for (r++;;) {
            if (l(), n[r] === Et) {
              r++;
              break
            }
            if (!t) {
              if (n[r] !== ut) return d();
              r++, l()
            }
            if (n[r] !== lt) return d();
            let o = a();
            if (l(), n[r] !== dt) return d();
            r++, Object.defineProperty(e, o, {
              value: i(),
              configurable: !0,
              enumerable: !0,
              writable: !0
            }), t = !1
          }
          return e
        },
        l = () => {
          for (; n[r] === ft || n[r] === ht || n[r] === mt || n[r] === pt;) r++
        },
        u = e => {
          for (let t = 0; t < e.length; t++)
            if (n[r + t] !== e[t]) return !1;
          return !0
        },
        d = () => {
          throw SyntaxError(`Unexpected ` + (r < n.length ? `byte ${r}` : `end`))
        },
        f = i();
      return l(), n[r] !== void 0 && d(), f
    }(n)
  } catch {}
  return null
}

function Fe(e) {
  return e >= _t && e < _t + 10 || e === xt
}

function Ie(e, t) {
  if (e.length === 0) return Promise.reject(TypeError(`The list of script URL patterns is empty`));
  let n = [],
    r = function(e, t, n, r, i = {}) {
      let {
        maxAttemptCount: a = 5,
        backoffBase: o = 200,
        backoffCap: s = 1e4,
        abort: c
      } = i, l = {
        failedAttempts: []
      }, [u, d] = function(e, t, n, r) {
        let i = function(e) {
            let t = [...e];
            return {
              current: () => t[0],
              postpone() {
                let e = t.shift();
                e !== void 0 && t.push(e)
              },
              exclude() {
                t.shift()
              }
            }
          }(e),
          a = function(e, t) {
            let n = 0;
            return () => Math.random() * Math.min(t, e * 2 ** n++)
          }(n, r),
          o = new Set;
        return [i.current(), (e, n, r) => {
          let s = t(e, n, r);
          s.action === `exclude` ? i.exclude() : i.postpone();
          let c = () => Math.max(0, e.getTime() + a() - Date.now()),
            l;
          l = typeof s.delay == `number` ? s.delay : c();
          let u = i.current();
          return l === 0 && u && Date.now() - e.getTime() < 50 && (o.has(u) ? l = c() : o.add(u)), u === void 0 ? void 0 : [u, l]
        }]
      }(e, r, o, s), f = (p = [c == null ? void 0 : c.then(e => l.aborted = {
        resolve: !0,
        value: e
      }, e => l.aborted = {
        resolve: !1,
        error: e
      }), Nt(u, a, t, n, d, l, c)], Promise.race(p.filter(e => !!e))).then(() => l);
      var p;
      return {
        then: f.then.bind(f),
        current: l
      }
    }(e, async e => {
      let r = new Date;
      try {
        let i = await t(e);
        return n.push({
          url: e,
          startedAt: r,
          finishedAt: new Date,
          error: void 0
        }), i
      } catch (t) {
        throw n.push({
          url: e,
          startedAt: r,
          finishedAt: new Date,
          error: t
        }), t
      }
    }, e => ({
      result: e
    }), tt, {
      maxAttemptCount: 5,
      backoffBase: 100,
      backoffCap: 3e3
    });
  return new Promise((e, t) => {
    Promise.resolve(r).then(r => {
      if (r.result !== void 0) e([r.result, n]);
      else {
        let e = r.failedAttempts[0];
        t(e ? e.error : Error(`No attempts were made`))
      }
    }).catch(t)
  })
}

function Le(e) {
  return {
    __type__: Ke,
    value: e
  }
}

function Re(e) {
  return function(e) {
    let t = E(e);
    ze = ze || function() {
      let e, t = new Uint32Array(256);
      for (let n = 0; n < 256; n++) {
        e = n;
        for (let t = 0; t < 8; t++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[n] = e
      }
      return t
    }();
    let n = -1;
    for (let e = 0; e < t.length; e++) n = n >>> 8 ^ ze[255 & (n ^ t[e])];
    return (-1 ^ n) >>> 0
  }(Ge(e))
}
var ze;

function Be(e, t) {
  return new Promise(n => function(e, t, ...n) {
    let r = Date.now() + t,
      i = 0,
      a = () => {
        i = setTimeout(() => {
          Date.now() < r ? a() : e(...n)
        }, r - Date.now())
      };
    return a(), () => clearTimeout(i)
  }(n, e, t))
}

function Ve(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `FingerprintError` && `code` in e
}

function He(e, t) {
  Pt(e, e.len + 1), e.arr[e.len++] = t
}
var Ue = Array.isArray;

function E(e) {
  return e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}

function We({
  level: e,
  message: t
}) {
  e === `error` ? console.error(t) : e === `warning` ? console.warn(t) : console.log(t)
}

function Ge(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) return new TextEncoder().encode(e);
    t[n] = r
  }
  return t
}
var Ke = `withoutDefault`,
  qe = `_vid_`;

function Je(e) {
  return e instanceof Error && e.name === `TypeError`
}

function Ye(e) {
  if (typeof TextDecoder == `function`) {
    let t = new TextDecoder().decode(e);
    if (t) return t
  }
  let t = E(e);
  return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}

function Xe(t = nt) {
  return function(n) {
    let r, i, {
        picked: a,
        rest: o
      } = function(e, t) {
        let n = {},
          r = {};
        for (let [i, a] of Object.entries(e)) t.includes(i) ? n[i] = a : r[i] = a;
        return {
          picked: n,
          rest: r
        }
      }(n, [`apiKey`]),
      {
        apiKey: s
      } = a;
    if (!s) throw new T(w[De], De);
    if (typeof s != `string`) throw new T(w[Oe], Oe);
    let c = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }(l = n, u = `endpoints`) ? l[u] : void 0;
    var l, u;
    let d = function(e, t, n) {
        let r = e.prepareScriptEndpoints(t, `https://fpnpmcdn.net/`);
        if (r === null) throw new T(w[Ae], Ae);
        return r.map(e => function(e, t) {
          let n = new URL(e, window.location.href),
            r = n.pathname;
          return n.pathname = `${r}${r.endsWith(`/`)?``:`/`}v4/${encodeURIComponent(t)}`, n.search = `?ci=jsl/${encodeURIComponent(et)}`, n.href
        }(e, n))
      }(t, c, s),
      [f, p] = function() {
        let e = [],
          t = () => {
            e.push({
              time: new Date,
              state: document.visibilityState
            })
          },
          n = (r = document, i = `visibilitychange`, a = t, r.addEventListener(i, a, o), () => r.removeEventListener(i, a, o));
        var r, i, a, o;
        return t(), [e, n]
      }(),
      m = async function() {
        try {
          let [n, i] = await Ie(d, n => function(t, n) {
            return t.withCspViolationWatch(n, async () => {
              if (function(e) {
                  if (URL.prototype) try {
                    return new URL(e, location.href), !1
                  } catch (e) {
                    if (Je(e)) return !0;
                    throw e
                  }
                }(n)) throw new T(w[x], x);
              try {
                return await e(() => import(n), [], import.meta.url)
              } catch {
                throw new T(w[S], S)
              }
            }, () => {
              throw new T(w[b], b)
            }).then(e => {
              if (typeof(e == null ? void 0 : e.start) != `function`) throw new T(w[C], C);
              return e
            })
          }(t, n)), a = await n.start({
            ...o,
            ldi: {
              attempts: i,
              visibilityStates: f
            }
          });
          return r = a, a
        } catch (e) {
          throw i = function(e) {
            return e instanceof T && e.code === C ? new T(w[S], S) : e
          }(e), i
        } finally {
          p()
        }
      }();
    return {
      async get(e) {
        if (r) return r.get(e);
        if (i) throw i;
        return (await m).get(e)
      },
      async collect(e) {
        if (r) return r.collect(e);
        if (i) throw i;
        return (await m).collect(e)
      }
    }
  }
}

function Ze(e, t, n, r) {
  it(() => {
    let i = `${e}=${t}`,
      a = `expires=${new Date(Date.now()+24*n*60*60*1e3).toUTCString()}`,
      o = r ? `domain=${r}` : ``;
    document.cookie = [i, `path=/`, a, o, `SameSite=Lax`].join(`; `)
  }, void 0)
}

function Qe(e, t) {
  try {
    return new window.URL(e, window.location.href)
  } catch (n) {
    if (Je(n)) return console.warn(`Ignoring an invalid '${t}' value: "${e}"`), null;
    throw n
  }
}

function $e(e) {
  let t = location.hostname,
    n = function() {
      var e;
      let t = window;
      return [`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t].reduce((e, t) => e + +!!t, 0) >= 4
    }();
  (function(e, t) {
    let n = e.length - +(e.slice(-1) === `.`);
    do
      if (n = n > 0 ? e.lastIndexOf(`.`, n - 1) : -1, !0 === t(e.slice(n + 1))) return !0; while (n >= 0);
    return !1
  })(t, r => {
    if (!n || !/^([^.]{1,3}\.)*[^.]+\.?$/.test(r) || r === t) return e(r)
  }) || e()
}
var et = `4.1.1`;

function tt(e, t, n) {
  let r = n instanceof T ? n.code : null;
  return r === b || r === x ? {
    action: `exclude`,
    delay: 0
  } : r === C ? {
    action: `exclude`,
    delay: `backoff`
  } : r === S ? {
    action: `postpone`,
    delay: Date.now() - e.getTime() < 50 ? 0 : `backoff`
  } : {
    action: `postpone`,
    delay: `backoff`
  }
}
var nt = {
    prepareScriptEndpoints: function(e, t) {
      return e === void 0 ? [t] : O(e) ? function(e, t) {
        let n, r = !1;
        ct(e) ? (r = !0, n = D(e.value)) : n = D(e);
        let i = [];
        for (let e of n) {
          let t = Qe(e, `endpoints`);
          t && i.push(Mt(t))
        }
        return r || i.push(t), i
      }(e, t) : function(e) {
        if (!e || typeof e != `object`) return !1;
        let t = e;
        return typeof t.__type__ == `string` && Re(t.__type__) === 694409711 && (t.script === void 0 || O(t.script)) && (t.helper === void 0 || O(t.helper)) && (t.ingress === void 0 || O(t.ingress))
      }(e) ? function(e, t, n) {
        if (e === void 0) return [t];
        let r, i = !1;
        ct(e) ? (i = !0, r = D(e.value)) : r = D(e);
        let a = [];
        for (let e of r) {
          let t = Qe(e, n);
          t && a.push(t.href)
        }
        return i || a.push(t), a
      }(e.script, t, `script`) : null
    },
    withCspViolationWatch: function(e, t, n, r) {
      let i = document,
        a = `securitypolicyviolation`,
        o, s = t => {
          let n = new URL(e, location.href),
            {
              blockedURI: r
            } = t;
          r !== n.href && r !== n.protocol.slice(0, -1) && r !== n.origin || (o = t, c())
        };
      i.addEventListener(a, s);
      let c = () => i.removeEventListener(a, s);
      return r == null || r.then(c, c), Promise.resolve().then(t).then(e => (c(), e), e => new Promise(e => {
        let t = new MessageChannel;
        t.port1.onmessage = () => e(), t.port2.postMessage(null)
      }).then(() => {
        if (c(), o) return n(o);
        throw e
      }))
    }
  },
  rt = Xe();

function it(e, t) {
  try {
    document.cookie
  } catch (e) {
    if (function(e) {
        if (!(e instanceof DOMException)) return !1;
        let t = e.message;
        return at.test(t) || ot.test(t) || st.test(t)
      }(e)) return t;
    throw e
  }
  return e()
}

function D(e) {
  return Ue(e) ? e : [e]
}
var at = /The document is sandboxed and lacks the 'allow-same-origin' flag/,
  ot = /The operation is insecure/,
  st = /Forbidden in a sandboxed document without the 'allow-same-origin' flag/;

function ct(e) {
  return !!e && e.__type__ === Ke
}

function O(e) {
  return ct(e) ? It(e.value) : It(e)
}
var lt = 34,
  ut = 44,
  dt = 58,
  ft = 32,
  pt = 9,
  mt = 13,
  ht = 10,
  gt = 92,
  _t = 48,
  k = 101,
  vt = 117,
  yt = 69,
  bt = 43,
  xt = 45,
  St = 46,
  Ct = 91,
  wt = 93,
  Tt = 123,
  Et = 125,
  Dt = new Uint8Array([110, vt, 108, 108]),
  Ot = new Uint8Array([116, 114, vt, k]),
  kt = new Uint8Array([102, 97, 108, 115, k]),
  At = {
    '"': `"`,
    "\\": `\\`,
    "\b": `b`,
    "\f": `f`,
    "\n": `n`,
    "\r": `r`,
    "	": `t`
  },
  jt = (() => {
    let e = new Uint8Array(128);
    for (let [t, n] of Object.entries(At)) e[n.charCodeAt(0)] = t.charCodeAt(0);
    return e
  })();

function Mt(e) {
  return `${e.origin}${e.pathname.endsWith(`/`)?e.pathname:`${e.pathname}/`}web/`
}
async function Nt(e, t, n, r, i, a, o) {
  if (e === void 0) return;
  let s = e;
  for (let e = 0; e < t; ++e) {
    let t = new Date,
      c, l;
    try {
      c = await Lt(() => n(s, e, o), o)
    } catch (e) {
      l = e, a.failedAttempts.push({
        level: 0,
        endpoint: s,
        error: e
      })
    }
    if (c) {
      let e = r(c);
      if (`result` in e) {
        a.result = e.result;
        break
      }
      if (a.failedAttempts.push({
          level: 1,
          endpoint: s,
          error: e.error
        }), e.stop) break
    }
    let u = i(t, c, l);
    if (!u) break;
    await Lt(Be(u[1]), o), s = u[0]
  }
}

function Pt(e, t) {
  if (e.arr.length < t) {
    let n = new Uint8Array(Math.max(2 * e.arr.length, t));
    n.set(e.arr), e.arr = n
  }
}

function Ft(e, t, ...n) {
  e && async function(e, t) {
    try {
      return await e()
    } catch (e) {
      return console.error(e), t
    }
  }(() => {
    let r = t(...n);
    r !== void 0 && e(r)
  })
}

function It(e) {
  return typeof e == `string` || Array.isArray(e) && e.every(e => typeof e == `string`)
}

function Lt(e, t) {
  return new Promise((n, r) => {
    let i = !1;
    t == null || t.then(() => i = !0, () => i = !0), (typeof e == `function` ? Lt(Promise.resolve(), t).then(e) : e).then(e => {
      i || n(e)
    }, e => {
      i || r(e)
    })
  })
}
var Rt = [3, 13],
  zt = 9;

function Bt(e, t) {
  Pt(e, e.len + t.length), e.arr.set(t, e.len), e.len += t.length
}

function Vt(e, t) {
  return (e - t + 256) % 256
}
var Ht = {
    start: rt,
    handleAgentData: function(e, t = {}) {
      let {
        storageKeyPrefix: n = qe,
        do: r
      } = t;
      try {
        let t = Pe(e);
        t === null ? Ft(r, () => ({
          e: 25,
          result: {
            error: Error(`Failed to decode response`)
          }
        })) : (t.visitorToken && (s = t.visitorToken, i = c = `${n}t`, a = s, o = 365, $e(e => {
          (function(e, t) {
            Ze(e, ``, -1, t)
          })(i, e)
        }), o < 0 || $e(e => (Ze(i, a, o, e), function(e) {
          return it(() => {
            let t = `${e}=`;
            for (let e of document.cookie.split(`;`)) {
              let n = 0;
              for (; e[n] === ` ` && n < e.length;) ++n;
              if (e.indexOf(t) === n) return e.slice(n + t.length)
            }
          }, void 0)
        }(i) === a)), function(e, t) {
          var n;
          try {
            (n = localStorage == null ? void 0 : localStorage.setItem) == null || n.call(localStorage, e, t)
          } catch {}
        }(c, s)), t.notifications.forEach(We), Ft(r, () => ({
          e: 25,
          result: {
            response: t
          }
        })))
      } catch (e) {
        throw Ft(r, () => ({
          e: 25,
          result: {
            error: e instanceof Error ? e : Error(String(e))
          }
        })), new T(w[Te], Te)
      }
      var i, a, o, s, c
    },
    isFingerprintError: Ve,
    withoutDefault: Le
  },
  Ut = `5.2.0`;

function A(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function Wt() {
  return new Promise(e => {
    let t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function Gt(e, t = 1 / 0) {
  let {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(e => n.call(window, () => e(), {
    timeout: t
  })) : A(Math.min(e, t))
}

function Kt(e) {
  return !!e && typeof e.then == `function`
}

function qt(e, t) {
  try {
    let n = e();
    Kt(n) ? n.then(e => t(!0, e), e => t(!1, e)) : t(!0, n)
  } catch (e) {
    t(!1, e)
  }
}
async function Jt(e, t, n = 16) {
  let r = Array(e.length),
    i = Date.now();
  for (let a = 0; a < e.length; ++a) {
    r[a] = t(e[a], a);
    let o = Date.now();
    o >= i + n && (i = o, await Wt())
  }
  return r
}

function j(e) {
  return e.then(void 0, () => void 0), e
}

function Yt(e, t) {
  for (let n = 0, r = e.length; n < r; ++n)
    if (e[n] === t) return !0;
  return !1
}

function Xt(e, t) {
  return !Yt(e, t)
}

function M(e) {
  return parseInt(e)
}

function N(e) {
  return parseFloat(e)
}

function P(e, t) {
  return typeof e == `number` && isNaN(e) ? t : e
}

function F(e) {
  return e.reduce((e, t) => e + +!!t, 0)
}

function Zt(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    let n = 1 / t;
    return Math.round(e * n) / n
  }
}

function Qt(e) {
  let t = `Unexpected syntax '${e}'`,
    n = /^\s*([a-z-]*)(.*)$/i.exec(e),
    r = n[1] || void 0,
    i = {},
    a = /([.:#][\w-]+|\[.+?\])/gi,
    o = (e, t) => {
      i[e] = i[e] || [], i[e].push(t)
    };
  for (;;) {
    let e = a.exec(n[2]);
    if (!e) break;
    let r = e[0];
    switch (r[0]) {
      case `.`:
        o(`class`, r.slice(1));
        break;
      case `#`:
        o(`id`, r.slice(1));
        break;
      case `[`: {
        let e = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(r);
        if (e) o(e[1], e[4] ?? e[5] ?? ``);
        else throw Error(t);
        break
      }
      default:
        throw Error(t)
    }
  }
  return [r, i]
}

function $t(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) return new TextEncoder().encode(e);
    t[n] = r
  }
  return t
}

function I(e, t) {
  let n = e[0] >>> 16,
    r = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    c = t[1] >>> 16,
    l = t[1] & 65535,
    u = 0,
    d = 0,
    f = 0,
    p = 0;
  p += a + l, f += p >>> 16, p &= 65535, f += i + c, d += f >>> 16, f &= 65535, d += r + s, u += d >>> 16, d &= 65535, u += n + o, u &= 65535, e[0] = u << 16 | d, e[1] = f << 16 | p
}

function L(e, t) {
  let n = e[0] >>> 16,
    r = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    c = t[1] >>> 16,
    l = t[1] & 65535,
    u = 0,
    d = 0,
    f = 0,
    p = 0;
  p += a * l, f += p >>> 16, p &= 65535, f += i * l, d += f >>> 16, f &= 65535, f += a * c, d += f >>> 16, f &= 65535, d += r * l, u += d >>> 16, d &= 65535, d += i * c, u += d >>> 16, d &= 65535, d += a * s, u += d >>> 16, d &= 65535, u += n * l + r * c + i * s + a * o, u &= 65535, e[0] = u << 16 | d, e[1] = f << 16 | p
}

function R(e, t) {
  let n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function z(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] <<= t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function B(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
var en = [4283543511, 3981806797],
  tn = [3301882366, 444984403];

function nn(e) {
  let t = [0, e[0] >>> 1];
  B(e, t), L(e, en), t[1] = e[0] >>> 1, B(e, t), L(e, tn), t[1] = e[0] >>> 1, B(e, t)
}
var V = [2277735313, 289559509],
  H = [1291169091, 658871167],
  rn = [0, 5],
  an = [0, 1390208809],
  on = [0, 944331445];

function sn(e, t) {
  let n = $t(e);
  t = t || 0;
  let r = [0, n.length],
    i = r[1] % 16,
    a = r[1] - i,
    o = [0, t],
    s = [0, t],
    c = [0, 0],
    l = [0, 0],
    u;
  for (u = 0; u < a; u += 16) c[0] = n[u + 4] | n[u + 5] << 8 | n[u + 6] << 16 | n[u + 7] << 24, c[1] = n[u] | n[u + 1] << 8 | n[u + 2] << 16 | n[u + 3] << 24, l[0] = n[u + 12] | n[u + 13] << 8 | n[u + 14] << 16 | n[u + 15] << 24, l[1] = n[u + 8] | n[u + 9] << 8 | n[u + 10] << 16 | n[u + 11] << 24, L(c, V), R(c, 31), L(c, H), B(o, c), R(o, 27), I(o, s), L(o, rn), I(o, an), L(l, H), R(l, 33), L(l, V), B(s, l), R(s, 31), I(s, o), L(s, rn), I(s, on);
  c[0] = 0, c[1] = 0, l[0] = 0, l[1] = 0;
  let d = [0, 0];
  switch (i) {
    case 15:
      d[1] = n[u + 14], z(d, 48), B(l, d);
    case 14:
      d[1] = n[u + 13], z(d, 40), B(l, d);
    case 13:
      d[1] = n[u + 12], z(d, 32), B(l, d);
    case 12:
      d[1] = n[u + 11], z(d, 24), B(l, d);
    case 11:
      d[1] = n[u + 10], z(d, 16), B(l, d);
    case 10:
      d[1] = n[u + 9], z(d, 8), B(l, d);
    case 9:
      d[1] = n[u + 8], B(l, d), L(l, H), R(l, 33), L(l, V), B(s, l);
    case 8:
      d[1] = n[u + 7], z(d, 56), B(c, d);
    case 7:
      d[1] = n[u + 6], z(d, 48), B(c, d);
    case 6:
      d[1] = n[u + 5], z(d, 40), B(c, d);
    case 5:
      d[1] = n[u + 4], z(d, 32), B(c, d);
    case 4:
      d[1] = n[u + 3], z(d, 24), B(c, d);
    case 3:
      d[1] = n[u + 2], z(d, 16), B(c, d);
    case 2:
      d[1] = n[u + 1], z(d, 8), B(c, d);
    case 1:
      d[1] = n[u], B(c, d), L(c, V), R(c, 31), L(c, H), B(o, c)
  }
  return B(o, r), B(s, r), I(o, s), I(s, o), nn(o), nn(s), I(o, s), I(s, o), (`00000000` + (o[0] >>> 0).toString(16)).slice(-8) + (`00000000` + (o[1] >>> 0).toString(16)).slice(-8) + (`00000000` + (s[0] >>> 0).toString(16)).slice(-8) + (`00000000` + (s[1] >>> 0).toString(16)).slice(-8)
}

function cn(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) == null ? void 0 : t.split(`
`),
    ...e
  }
}

function ln(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function un(e) {
  return typeof e != `function`
}

function dn(e, t) {
  let n = j(new Promise(n => {
    let r = Date.now();
    qt(e.bind(null, t), (...e) => {
      let t = Date.now() - r;
      if (!e[0]) return n(() => ({
        error: e[1],
        duration: t
      }));
      let i = e[1];
      if (un(i)) return n(() => ({
        value: i,
        duration: t
      }));
      n(() => new Promise(e => {
        let n = Date.now();
        qt(i, (...r) => {
          let i = t + Date.now() - n;
          if (!r[0]) return e({
            error: r[1],
            duration: i
          });
          e({
            value: r[1],
            duration: i
          })
        })
      }))
    })
  }));
  return function() {
    return n.then(e => e())
  }
}

function fn(e, t, n, r) {
  let i = Object.keys(e).filter(e => Xt(n, e)),
    a = j(Jt(i, n => dn(e[n], t), r));
  return async function() {
    let e = await Jt(await a, e => j(e()), r),
      t = await Promise.all(e),
      n = {};
    for (let e = 0; e < i.length; ++e) n[i[e]] = t[e];
    return n
  }
}

function pn() {
  let e = window,
    t = navigator;
  return F([`MSCSSMatrix` in e, `msSetImmediate` in e, `msIndexedDB` in e, `msMaxTouchPoints` in t, `msPointerEnabled` in t]) >= 4
}

function mn() {
  let e = window,
    t = navigator;
  return F([`msWriteProfilerMark` in e, `MSStream` in e, `msLaunchUri` in t, `msSaveBlob` in t]) >= 3 && !pn()
}

function U() {
  let e = window,
    t = navigator;
  return F([`webkitPersistentStorage` in t, `webkitTemporaryStorage` in t, (t.vendor || ``).indexOf(`Google`) === 0, `webkitResolveLocalFileSystemURL` in e, `BatteryManager` in e, `webkitMediaStream` in e, `webkitSpeechGrammar` in e]) >= 5
}

function W() {
  let e = window,
    t = navigator;
  return F([`ApplePayError` in e, `CSSPrimitiveValue` in e, `Counter` in e, t.vendor.indexOf(`Apple`) === 0, `RGBColor` in e, `WebKitMediaKeys` in e]) >= 4
}

function hn() {
  let e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return F([`safari` in e, !(`ongestureend` in e), !(`TouchEvent` in e), !(`orientation` in e), t && !(`autocapitalize` in t.prototype), n && `pointerLockElement` in n.prototype]) >= 4
}

function G() {
  let e = window;
  return ln(e.print) && String(e.browser) === `[object WebPageNamespace]`
}

function K() {
  var e;
  let t = window;
  return F([`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t]) >= 4
}

function gn() {
  let e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return F([`userActivation` in t, n.supports(`color`, `light-dark(#000, #fff)`), n.supports(`height`, `1lh`), `globalPrivacyControl` in t]) >= 3
}

function _n() {
  let {
    CSS: e
  } = window;
  return F([e.supports(`selector(::details-content)`), e.supports(`selector(::before::marker)`), e.supports(`selector(::after::marker)`), !(`locale` in CompositionEvent.prototype)]) >= 3
}

function vn() {
  let e = window;
  return F([!(`MediaSettingsRange` in e), `RTCEncodedAudioFrame` in e, `` + e.Intl == `[object Intl]`, `` + e.Reflect == `[object Reflect]`]) >= 3
}

function yn() {
  let e = window,
    {
      URLPattern: t
    } = e;
  return F([`union` in Set.prototype, `Iterator` in e, t && `hasRegExpGroups` in t.prototype, `RGB8` in WebGLRenderingContext.prototype]) >= 3
}

function bn() {
  let e = window,
    t = document,
    {
      CSS: n,
      Promise: r,
      AudioContext: i
    } = e;
  return F([r && `try` in r, `caretPositionFromPoint` in t, i && `onerror` in i.prototype, n.supports(`ruby-align`, `space-around`)]) >= 3
}

function xn() {
  let e = window;
  return F([`DOMRectList` in e, `RTCPeerConnectionIceEvent` in e, `SVGGeometryElement` in e, `ontransitioncancel` in e]) >= 3
}

function q() {
  let e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: r
    } = e;
  return F([!(`getStorageUpdates` in t), r && `popover` in r.prototype, `CSSCounterStyleRule` in e, n.supports(`font-size-adjust: ex-height 0.5`), n.supports(`text-transform: full-width`)]) >= 4
}

function Sn() {
  if (navigator.platform === `iPad`) return !0;
  let e = screen,
    t = e.width / e.height;
  return F([`MediaSource` in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Cn() {
  let e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function wn() {
  let e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function J() {
  let e = U(),
    t = K(),
    n = window,
    r = navigator,
    i = `connection`;
  return e ? F([!(`SharedWorker` in n), r[i] && `ontypechange` in r[i], !(`sinkId` in new Audio)]) >= 2 : t ? F([`onorientationchange` in n, `orientation` in n, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Tn() {
  let e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: r
    } = t;
  return F([`srLatency` in n, `srChannelCount` in n, `devicePosture` in e, r && `segments` in r, `getTextInformation` in Image.prototype]) >= 3
}

function En() {
  return kn() ? -4 : Dn()
}

function Dn() {
  let e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (On()) return -1;
  let n = new t(1, 5e3, 44100),
    r = n.createOscillator();
  r.type = `triangle`, r.frequency.value = 1e4;
  let i = n.createDynamicsCompressor();
  i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, r.connect(i), i.connect(n.destination), r.start(0);
  let [a, o] = An(n), s = j(a.then(e => jn(e.getChannelData(0).subarray(4500)), e => {
    if (e.name === `timeout` || e.name === `suspended`) return -3;
    throw e
  }));
  return () => (o(), s)
}

function On() {
  return W() && !hn() && !xn()
}

function kn() {
  return W() && q() && G() || U() && Tn() && yn()
}

function An(e) {
  let t = () => void 0;
  return [new Promise((n, r) => {
    let i = !1,
      a = 0,
      o = 0;
    e.oncomplete = e => n(e.renderedBuffer);
    let s = () => {
        setTimeout(() => r(Mn(`timeout`)), Math.min(500, o + 5e3 - Date.now()))
      },
      c = () => {
        try {
          let t = e.startRendering();
          switch (Kt(t) && j(t), e.state) {
            case `running`:
              o = Date.now(), i && s();
              break;
            case `suspended`:
              document.hidden || a++, i && a >= 3 ? r(Mn(`suspended`)) : setTimeout(c, 500)
          }
        } catch (e) {
          r(e)
        }
      };
    c(), t = () => {
      i || (i = !0, o > 0 && s())
    }
  }), t]
}

function jn(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function Mn(e) {
  let t = Error(e);
  return t.name = e, t
}
async function Nn(e, t, n = 50) {
  var r, i, a;
  let o = document;
  for (; !o.body;) await A(n);
  let s = o.createElement(`iframe`);
  try {
    for (await new Promise((e, n) => {
        let r = !1,
          i = () => {
            r = !0, e()
          };
        s.onload = i, s.onerror = e => {
          r = !0, n(e)
        };
        let {
          style: a
        } = s;
        a.setProperty(`display`, `block`, `important`), a.position = `absolute`, a.top = `0`, a.left = `0`, a.visibility = `hidden`, t && `srcdoc` in s ? s.srcdoc = t : s.src = `about:blank`, o.body.appendChild(s);
        let c = () => {
          var e, t;
          r || (((t = (e = s.contentWindow) == null ? void 0 : e.document) == null ? void 0 : t.readyState) === `complete` ? i() : setTimeout(c, 10))
        };
        c()
      }); !((i = (r = s.contentWindow) == null ? void 0 : r.document) != null && i.body);) await A(n);
    return await e(s, s.contentWindow)
  } finally {
    (a = s.parentNode) == null || a.removeChild(s)
  }
}

function Pn(e) {
  let [t, n] = Qt(e), r = document.createElement(t ?? `div`);
  for (let e of Object.keys(n)) {
    let t = n[e].join(` `);
    e === `style` ? Fn(r.style, t) : r.setAttribute(e, t)
  }
  return r
}

function Fn(e, t) {
  for (let n of t.split(`;`)) {
    let t = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (t) {
      let [, n, r, , i] = t;
      e.setProperty(n, r, i || ``)
    }
  }
}

function In() {
  let e = window;
  for (;;) {
    let t = e.parent;
    if (!t || t === e) return !1;
    try {
      if (t.location.origin !== e.location.origin) return !0
    } catch (e) {
      if (e instanceof Error && e.name === `SecurityError`) return !0;
      throw e
    }
    e = t
  }
}
var Ln = `mmMwWLliI0O&1`,
  Rn = `48px`,
  Y = [`monospace`, `sans-serif`, `serif`],
  zn = `sans-serif-thin.ARNO PRO.Agency FB.Arabic Typesetting.Arial Unicode MS.AvantGarde Bk BT.BankGothic Md BT.Batang.Bitstream Vera Sans Mono.Calibri.Century.Century Gothic.Clarendon.EUROSTILE.Franklin Gothic.Futura Bk BT.Futura Md BT.GOTHAM.Gill Sans.HELV.Haettenschweiler.Helvetica Neue.Humanst521 BT.Leelawadee.Letter Gothic.Levenim MT.Lucida Bright.Lucida Sans.Menlo.MS Mincho.MS Outlook.MS Reference Specialty.MS UI Gothic.MT Extra.MYRIAD PRO.Marlett.Meiryo UI.Microsoft Uighur.Minion Pro.Monotype Corsiva.PMingLiU.Pristina.SCRIPTINA.Segoe UI Light.Serifa.SimHei.Small Fonts.Staccato222 BT.TRAJAN PRO.Univers CE 55 Medium.Vrinda.ZWAdobeF`.split(`.`);

function Bn() {
  return Nn(async (e, {
    document: t
  }) => {
    let n = t.body;
    n.style.fontSize = Rn;
    let r = t.createElement(`div`);
    r.style.setProperty(`visibility`, `hidden`, `important`);
    let i = {},
      a = {},
      o = e => {
        let n = t.createElement(`span`),
          {
            style: i
          } = n;
        return i.position = `absolute`, i.top = `0`, i.left = `0`, i.fontFamily = e, n.textContent = Ln, r.appendChild(n), n
      },
      s = (e, t) => o(`'${e}',${t}`),
      c = () => Y.map(o),
      l = () => {
        let e = {};
        for (let t of zn) e[t] = Y.map(e => s(t, e));
        return e
      },
      u = e => Y.some((t, n) => e[n].offsetWidth !== i[t] || e[n].offsetHeight !== a[t]),
      d = c(),
      f = l();
    n.appendChild(r);
    for (let e = 0; e < Y.length; e++) i[Y[e]] = d[e].offsetWidth, a[Y[e]] = d[e].offsetHeight;
    return zn.filter(e => u(f[e]))
  })
}

function Vn() {
  let e = navigator.plugins;
  if (!e) return;
  let t = [];
  for (let n = 0; n < e.length; ++n) {
    let r = e[n];
    if (!r) continue;
    let i = [];
    for (let e = 0; e < r.length; ++e) {
      let t = r[e];
      i.push({
        type: t.type,
        suffixes: t.suffixes
      })
    }
    t.push({
      name: r.name,
      description: r.description,
      mimeTypes: i
    })
  }
  return t
}

function Hn() {
  return Un(Zn())
}

function Un(e) {
  let t = !1,
    n, r, [i, a] = Wn();
  return Gn(i, a) ? (t = Kn(a), e ? n = r = `skipped` : [n, r] = qn(i, a)) : n = r = `unsupported`, {
    winding: t,
    geometry: n,
    text: r
  }
}

function Wn() {
  let e = document.createElement(`canvas`);
  return e.width = 1, e.height = 1, [e, e.getContext(`2d`)]
}

function Gn(e, t) {
  return !!(t && e.toDataURL)
}

function Kn(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, `evenodd`)
}

function qn(e, t) {
  Jn(e, t);
  let n = Xn(e);
  return n === Xn(e) ? (Yn(e, t), [Xn(e), n]) : [`unstable`, `unstable`]
}

function Jn(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = `alphabetic`, t.fillStyle = `#f60`, t.fillRect(100, 1, 62, 20), t.fillStyle = `#069`, t.font = `11pt "Times New Roman"`;
  let n = `Cwm fjordbank gly ${String.fromCharCode(55357,56835)}`;
  t.fillText(n, 2, 15), t.fillStyle = `rgba(102, 204, 0, 0.2)`, t.font = `18pt Arial`, t.fillText(n, 4, 45)
}

function Yn(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = `multiply`;
  for (let [e, n, r] of [
      [`#f2f`, 40, 40],
      [`#2ff`, 80, 40],
      [`#ff2`, 60, 80]
    ]) t.fillStyle = e, t.beginPath(), t.arc(n, r, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = `#f9c`, t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill(`evenodd`)
}

function Xn(e) {
  return e.toDataURL()
}

function Zn() {
  let e = W() && q() && G(),
    t = K() && gn();
  return e || t
}

function Qn() {
  let e = navigator,
    t = 0,
    n;
  e.maxTouchPoints === void 0 ? e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints) : t = M(e.maxTouchPoints);
  try {
    document.createEvent(`TouchEvent`), n = !0
  } catch {
    n = !1
  }
  let r = `ontouchstart` in window;
  return {
    maxTouchPoints: t,
    touchEvent: n,
    touchStart: r
  }
}

function $n() {
  return navigator.oscpu
}

function er() {
  let e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) U() && vn() || t.push(e.languages);
  else if (typeof e.languages == `string`) {
    let n = e.languages;
    n && t.push(n.split(`,`))
  }
  return t
}

function tr() {
  return window.screen.colorDepth
}

function nr() {
  return P(N(navigator.deviceMemory), void 0)
}

function rr() {
  if (!(W() && q() && G())) return ir()
}

function ir() {
  let e = screen,
    t = e => P(M(e), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
var ar = 2500,
  or = 10,
  X, sr;

function cr() {
  if (sr !== void 0) return;
  let e = () => {
    let t = dr();
    fr(t) ? sr = setTimeout(e, ar) : (X = t, sr = void 0)
  };
  e()
}

function lr() {
  return cr(), async () => {
    let e = dr();
    if (fr(e)) {
      if (X) return [...X];
      Cn() && (await wn(), e = dr())
    }
    return fr(e) || (X = e), e
  }
}

function ur() {
  let e = W() && q() && G(),
    t = K() && _n();
  if (e || t) return () => Promise.resolve(void 0);
  let n = lr();
  return async () => {
    let e = await n(),
      t = e => e === null ? null : Zt(e, or);
    return [t(e[0]), t(e[1]), t(e[2]), t(e[3])]
  }
}

function dr() {
  let e = screen;
  return [P(N(e.availTop), null), P(N(e.width) - N(e.availWidth) - P(N(e.availLeft), 0), null), P(N(e.height) - N(e.availHeight) - P(N(e.availTop), 0), null), P(N(e.availLeft), null)]
}

function fr(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function pr() {
  let e = mr();
  return e !== void 0 && K() && _n() ? e >= 8 ? 8 : 4 : e
}

function mr() {
  return P(M(navigator.hardwareConcurrency), void 0)
}

function hr() {
  var e;
  let t = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (t) {
    let e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  let n = -gr();
  return `UTC${n>=0?`+`:``}${n}`
}

function gr() {
  let e = new Date().getFullYear();
  return Math.max(N(new Date(e, 0, 1).getTimezoneOffset()), N(new Date(e, 6, 1).getTimezoneOffset()))
}

function _r() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function vr() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function yr() {
  if (!(pn() || mn())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function br() {
  return !!window.openDatabase
}

function xr() {
  return navigator.cpuClass
}

function Sr() {
  let {
    platform: e
  } = navigator;
  return e === `MacIntel` && W() && !hn() ? Sn() ? `iPad` : `iPhone` : e
}

function Cr() {
  return navigator.vendor || ``
}

function wr() {
  let e = [];
  for (let t of [`chrome`, `safari`, `__crWeb`, `__gCrWeb`, `yandex`, `__yb`, `__ybro`, `__firefox__`, `__edgeTrackingPreventionStatistics`, `webkit`, `oprt`, `samsungAr`, `ucweb`, `UCShellJava`, `puffinDevice`]) {
    let n = window[t];
    n && typeof n == `object` && e.push(t)
  }
  return e.sort()
}

function Tr() {
  let e = document;
  try {
    e.cookie = `cookietest=1; SameSite=Strict;`;
    let t = e.cookie.indexOf(`cookietest=`) !== -1;
    return e.cookie = `cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT`, t
  } catch {
    return !1
  }
}

function Er() {
  let e = atob;
  return {
    abpIndo: [`#Iklan-Melayang`, `#Kolom-Iklan-728`, `#SidebarIklan-wrapper`, `[title="ALIENBOLA" i]`, e(`I0JveC1CYW5uZXItYWRz`)],
    abpvn: [`.quangcao`, `#mobileCatfish`, e(`LmNsb3NlLWFkcw==`), `[id^="bn_bottom_fixed_"]`, `#pmadv`],
    adBlockFinland: [`.mainostila`, e(`LnNwb25zb3JpdA==`), `.ylamainos`, e(`YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd`)],
    adBlockPersian: [`#navbar_notice_50`, `.kadr`, `TABLE[width="140px"]`, `#divAgahi`, e(`YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd`)],
    adBlockWarningRemoval: [`#adblock-honeypot`, `.adblocker-root`, `.wp_adblock_detect`, e(`LmhlYWRlci1ibG9ja2VkLWFk`), e(`I2FkX2Jsb2NrZXI=`)],
    adGuardAnnoyances: [`.hs-sosyal`, `#cookieconsentdiv`, `div[class^="app_gdpr"]`, `.as-oil`, `[data-cypress="soft-push-notification-modal"]`],
    adGuardBase: [`.BetterJsPopOverlay`, e(`I2FkXzMwMFgyNTA=`), e(`I2Jhbm5lcmZsb2F0MjI=`), e(`I2NhbXBhaWduLWJhbm5lcg==`), e(`I0FkLUNvbnRlbnQ=`)],
    adGuardChinese: [e(`LlppX2FkX2FfSA==`), e(`YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd`), `#widget-quan`, e(`YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd`), e(`YVtocmVmKj0iLjE5NTZobC5jb20vIl0=`)],
    adGuardFrench: [`#pavePub`, e(`LmFkLWRlc2t0b3AtcmVjdGFuZ2xl`), `.mobile_adhesion`, `.widgetadv`, e(`LmFkc19iYW4=`)],
    adGuardGerman: [`aside[data-portal-id="leaderboard"]`],
    adGuardJapanese: [`#kauli_yad_1`, e(`YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0=`), e(`Ll9wb3BJbl9pbmZpbml0ZV9hZA==`), e(`LmFkZ29vZ2xl`), e(`Ll9faXNib29zdFJldHVybkFk`)],
    adGuardMobile: [e(`YW1wLWF1dG8tYWRz`), e(`LmFtcF9hZA==`), `amp-embed[type="24smi"]`, `#mgid_iframe1`, e(`I2FkX2ludmlld19hcmVh`)],
    adGuardRussian: [e(`YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0=`), e(`LnJlY2xhbWE=`), `div[id^="smi2adblock"]`, e(`ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd`), `#psyduckpockeball`],
    adGuardSocial: [e(`YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0=`), e(`YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0=`), `.etsy-tweet`, `#inlineShare`, `.popup-social`],
    adGuardSpanishPortuguese: [`#barraPublicidade`, `#Publicidade`, `#publiEspecial`, `#queTooltip`, `.cnt-publi`],
    adGuardTrackingProtection: [`#qoo-counter`, e(`YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ==`), e(`YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0=`), e(`YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ==`), `#top100counter`],
    adGuardTurkish: [`#backkapat`, e(`I3Jla2xhbWk=`), e(`YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0=`), e(`YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd`), e(`YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==`)],
    bulgarian: [e(`dGQjZnJlZW5ldF90YWJsZV9hZHM=`), `#ea_intext_div`, `.lapni-pop-over`, `#xenium_hot_offers`],
    easyList: [`.yb-floorad`, e(`LndpZGdldF9wb19hZHNfd2lkZ2V0`), e(`LnRyYWZmaWNqdW5reS1hZA==`), `.textad_headline`, e(`LnNwb25zb3JlZC10ZXh0LWxpbmtz`)],
    easyListChina: [e(`LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ==`), e(`LmZyb250cGFnZUFkdk0=`), `#taotaole`, `#aafoot.top_box`, `.cfa_popup`],
    easyListCookie: [`.ezmob-footer`, `.cc-CookieWarning`, `[data-cookie-number]`, e(`LmF3LWNvb2tpZS1iYW5uZXI=`), `.sygnal24-gdpr-modal-wrap`],
    easyListCzechSlovak: [`#onlajny-stickers`, e(`I3Jla2xhbW5pLWJveA==`), e(`LnJla2xhbWEtbWVnYWJvYXJk`), `.sklik`, e(`W2lkXj0ic2tsaWtSZWtsYW1hIl0=`)],
    easyListDutch: [e(`I2FkdmVydGVudGll`), e(`I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw==`), `.adstekst`, e(`YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0=`), `#semilo-lrectangle`],
    easyListGermany: [`#SSpotIMPopSlider`, e(`LnNwb25zb3JsaW5rZ3J1ZW4=`), e(`I3dlcmJ1bmdza3k=`), e(`I3Jla2xhbWUtcmVjaHRzLW1pdHRl`), e(`YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=`)],
    easyListItaly: [e(`LmJveF9hZHZfYW5udW5jaQ==`), `.sb-box-pubbliredazionale`, e(`YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==`)],
    easyListLithuania: [e(`LnJla2xhbW9zX3RhcnBhcw==`), e(`LnJla2xhbW9zX251b3JvZG9z`), e(`aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd`), e(`aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd`), e(`aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd`)],
    estonian: [e(`QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==`)],
    fanboyAnnoyances: [`#ac-lre-player`, `.navigate-to-top`, `#subscribe_popup`, `.newsletter_holder`, `#back-top`],
    fanboyAntiFacebook: [`.util-bar-module-firefly-visible`],
    fanboyEnhancedTrackers: [`.open.pushModal`, `#issuem-leaky-paywall-articles-zero-remaining-nag`, `#sovrn_container`, `div[class$="-hide"][zoompage-fontsize][style="display: block;"]`, `.BlockNag__Card`],
    fanboySocial: [`#FollowUs`, `#meteored_share`, `#social_follow`, `.article-sharer`, `.community__social-desc`],
    frellwitSwedish: [e(`YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ==`), e(`YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ==`), `article.category-samarbete`, e(`ZGl2LmhvbGlkQWRz`), `ul.adsmodern`],
    greekAdBlock: [e(`QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd`), e(`QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ==`), e(`QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd`), `DIV.agores300`, `TABLE.advright`],
    hungarian: [`#cemp_doboz`, `.optimonk-iframe-container`, e(`LmFkX19tYWlu`), e(`W2NsYXNzKj0iR29vZ2xlQWRzIl0=`), `#hirdetesek_box`],
    iDontCareAboutCookies: [`.alert-info[data-block-track*="CookieNotice"]`, `.ModuleTemplateCookieIndicator`, `.o--cookies--container`, `#cookies-policy-sticky`, `#stickyCookieBar`],
    icelandicAbp: [e(`QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==`)],
    latvian: [e(`YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0=`), e(`YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==`)],
    listKr: [e(`YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0=`), e(`I2xpdmVyZUFkV3JhcHBlcg==`), e(`YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ==`), e(`aW5zLmZhc3R2aWV3LWFk`), `.revenue_unit_item.dable`],
    listeAr: [e(`LmdlbWluaUxCMUFk`), `.right-and-left-sponsers`, e(`YVtocmVmKj0iLmFmbGFtLmluZm8iXQ==`), e(`YVtocmVmKj0iYm9vcmFxLm9yZyJd`), e(`YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd`)],
    listeFr: [e(`YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ==`), e(`I2FkY29udGFpbmVyX3JlY2hlcmNoZQ==`), e(`YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0=`), `.site-pub-interstitiel`, `div[id^="crt-"][data-criteo-id]`],
    officialPolish: [`#ceneo-placeholder-ceneo-12`, e(`W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd`), e(`YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ==`), e(`YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ==`), e(`ZGl2I3NrYXBpZWNfYWQ=`)],
    ro: [e(`YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0=`), e(`YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd`), `a[href^="/url/"]`],
    ruAd: [e(`YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd`), e(`YVtocmVmKj0iLy91dGltZy5ydS8iXQ==`), e(`YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0=`), `#pgeldiz`, `.yandex-rtb-block`],
    thaiAds: [`a[href*=macau-uta-popup]`, e(`I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA==`), e(`LmFkczMwMHM=`), `.bumq`, `.img-kosana`],
    webAnnoyancesUltralist: [`#mod-social-share-2`, `#social-tools`, e(`LmN0cGwtZnVsbGJhbm5lcg==`), `.zergnet-recommend`, `.yt.btn-link.btn-md.btn`]
  }
}
async function Dr({
  debug: e
} = {}) {
  if (!Or()) return;
  let t = Er(),
    n = Object.keys(t),
    r = await kr([].concat(...n.map(e => t[e])));
  e && jr(t, r);
  let i = n.filter(e => {
    let n = t[e];
    return F(n.map(e => r[e])) > n.length * .6
  });
  return i.sort(), i
}

function Or() {
  return W() || J()
}
async function kr(e) {
  var t;
  let n = document,
    r = n.createElement(`div`),
    i = Array(e.length),
    a = {};
  Ar(r);
  for (let t = 0; t < e.length; ++t) {
    let a = Pn(e[t]);
    a.tagName === `DIALOG` && a.show();
    let o = n.createElement(`div`);
    Ar(o), o.appendChild(a), r.appendChild(o), i[t] = a
  }
  for (; !n.body;) await A(50);
  n.body.appendChild(r);
  try {
    for (let t = 0; t < e.length; ++t) i[t].offsetParent || (a[e[t]] = !0)
  } finally {
    (t = r.parentNode) == null || t.removeChild(r)
  }
  return a
}

function Ar(e) {
  e.style.setProperty(`visibility`, `hidden`, `important`), e.style.setProperty(`display`, `block`, `important`)
}

function jr(e, t) {
  let n = "DOM blockers debug:\n```";
  for (let r of Object.keys(e)) {
    n += `\n${r}:`;
    for (let i of e[r]) n += `\n  ${t[i]?`🚫`:`➡️`} ${i}`
  }
  console.log(`${n}\n\`\`\``)
}

function Mr() {
  for (let e of [`rec2020`, `p3`, `srgb`])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function Nr() {
  if (Pr(`inverted`)) return !0;
  if (Pr(`none`)) return !1
}

function Pr(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function Fr() {
  if (Ir(`active`)) return !0;
  if (Ir(`none`)) return !1
}

function Ir(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
var Lr = 100;

function Rr() {
  if (matchMedia(`(min-monochrome: 0)`).matches) {
    for (let e = 0; e <= Lr; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw Error(`Too high value`)
  }
}

function zr() {
  if (Z(`no-preference`)) return 0;
  if (Z(`high`) || Z(`more`)) return 1;
  if (Z(`low`) || Z(`less`)) return -1;
  if (Z(`forced`)) return 10
}

function Z(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function Br() {
  if (Vr(`reduce`)) return !0;
  if (Vr(`no-preference`)) return !1
}

function Vr(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function Hr() {
  if (Ur(`reduce`)) return !0;
  if (Ur(`no-preference`)) return !1
}

function Ur(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function Wr() {
  if (Gr(`high`)) return !0;
  if (Gr(`standard`)) return !1
}

function Gr(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
var Q = Math,
  $ = () => 0;

function Kr() {
  let e = Q.acos || $,
    t = Q.acosh || $,
    n = Q.asin || $,
    r = Q.asinh || $,
    i = Q.atanh || $,
    a = Q.atan || $,
    o = Q.sin || $,
    s = Q.sinh || $,
    c = Q.cos || $,
    l = Q.cosh || $,
    u = Q.tan || $,
    d = Q.tanh || $,
    f = Q.exp || $,
    p = Q.expm1 || $,
    m = Q.log1p || $;
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: (e => Q.log(e + Q.sqrt(e * e - 1)))(1e154),
    asin: n(.12312423423423424),
    asinh: r(1),
    asinhPf: (e => Q.log(e + Q.sqrt(e * e + 1)))(1),
    atanh: i(.5),
    atanhPf: (e => Q.log((1 + e) / (1 - e)) / 2)(.5),
    atan: a(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: (e => Q.exp(e) - 1 / Q.exp(e) / 2)(1),
    cos: c(10.000000000123),
    cosh: l(1),
    coshPf: (e => (Q.exp(e) + 1 / Q.exp(e)) / 2)(1),
    tan: u(-1e300),
    tanh: d(1),
    tanhPf: (e => (Q.exp(2 * e) - 1) / (Q.exp(2 * e) + 1))(1),
    exp: f(1),
    expm1: p(1),
    expm1Pf: (e => Q.exp(e) - 1)(1),
    log1p: m(10),
    log1pPf: (e => Q.log(1 + e))(10),
    powPI: (e => Q.pow(Q.PI, e))(-100)
  }
}
var qr = `mmMwWLliI0fiflO&1`,
  Jr = {
    default: [],
    apple: [{
      font: `-apple-system-body`
    }],
    serif: [{
      fontFamily: `serif`
    }],
    sans: [{
      fontFamily: `sans-serif`
    }],
    mono: [{
      fontFamily: `monospace`
    }],
    min: [{
      fontSize: `1px`
    }],
    system: [{
      fontFamily: `system-ui`
    }]
  };

function Yr() {
  return Zr((e, t, n) => {
    let r = {},
      i = {};
    for (let n of Object.keys(Jr)) {
      let [i = {}, a = qr] = Jr[n], o = e.createElement(`span`);
      o.textContent = a, o.style.whiteSpace = `nowrap`;
      for (let e of Object.keys(i)) {
        let t = i[e];
        t !== void 0 && (o.style[e] = t)
      }
      r[n] = o, t.append(e.createElement(`br`), o)
    }
    let a = U() && bn();
    for (let e of Object.keys(Jr)) {
      let t = r[e].getBoundingClientRect().width;
      i[e] = a ? Xr(t * n.devicePixelRatio) : t
    }
    return i
  })
}

function Xr(e) {
  let t = 10 ** (J() ? 0 : 3);
  return Math.floor(e * t) / t
}

function Zr(e, t = 4e3) {
  return Nn((n, r) => {
    let i = r.document,
      a = i.body,
      o = a.style;
    o.width = `${t}px`, o.webkitTextSizeAdjust = o.textSizeAdjust = `none`, U() ? a.style.zoom = `${1/r.devicePixelRatio}` : W() && (a.style.zoom = `reset`);
    let s = i.createElement(`div`);
    return s.textContent = [...Array(t / 20 << 0)].map(() => `word`).join(` `), a.appendChild(s), e(i, a, r)
  }, `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">`)
}

function Qr() {
  return navigator.pdfViewerEnabled
}

function $r() {
  let e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] -= e[0], t[3]
}

function ei() {
  let {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != `function`) return -1;
  if (ti()) return -3;
  try {
    return +!!e.canMakePayments()
  } catch (e) {
    return ni(e)
  }
}
var ti = In;

function ni(e) {
  if (e instanceof Error && e.name === `InvalidAccessError` && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function ri() {
  let e = document.createElement(`a`),
    t = e.attributionSourceId ?? e.attributionsourceid;
  return t === void 0 ? void 0 : String(t)
}
var ii = -1,
  ai = -2,
  oi = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  si = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  ci = [`FRAGMENT_SHADER`, `VERTEX_SHADER`],
  li = [`LOW_FLOAT`, `MEDIUM_FLOAT`, `HIGH_FLOAT`, `LOW_INT`, `MEDIUM_INT`, `HIGH_INT`],
  ui = `WEBGL_debug_renderer_info`,
  di = `WEBGL_polygon_mode`;

function fi({
  cache: e
}) {
  var t, n, r, i, a, o;
  let s = mi(e);
  if (!s) return ii;
  if (!bi(s)) return ai;
  let c = vi() ? null : s.getExtension(ui);
  return {
    version: ((t = s.getParameter(s.VERSION)) == null ? void 0 : t.toString()) || ``,
    vendor: ((n = s.getParameter(s.VENDOR)) == null ? void 0 : n.toString()) || ``,
    vendorUnmasked: c ? (r = s.getParameter(c.UNMASKED_VENDOR_WEBGL)) == null ? void 0 : r.toString() : ``,
    renderer: ((i = s.getParameter(s.RENDERER)) == null ? void 0 : i.toString()) || ``,
    rendererUnmasked: c ? (a = s.getParameter(c.UNMASKED_RENDERER_WEBGL)) == null ? void 0 : a.toString() : ``,
    shadingLanguageVersion: ((o = s.getParameter(s.SHADING_LANGUAGE_VERSION)) == null ? void 0 : o.toString()) || ``
  }
}

function pi({
  cache: e
}) {
  let t = mi(e);
  if (!t) return ii;
  if (!bi(t)) return ai;
  let n = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    i = [],
    a = [],
    o = [],
    s = [],
    c = [];
  if (r)
    for (let e of Object.keys(r)) a.push(`${e}=${r[e]}`);
  let l = gi(t);
  for (let e of l) {
    let n = t[e];
    o.push(`${e}=${n}${oi.has(n)?`=${t.getParameter(n)}`:``}`)
  }
  if (n)
    for (let e of n) {
      if (e === ui && vi() || e === di && yi()) continue;
      let n = t.getExtension(e);
      if (!n) {
        i.push(e);
        continue
      }
      for (let e of gi(n)) {
        let r = n[e];
        s.push(`${e}=${r}${si.has(r)?`=${t.getParameter(r)}`:``}`)
      }
    }
  for (let e of ci)
    for (let n of li) {
      let r = hi(t, e, n);
      c.push(`${e}.${n}=${r.join(`,`)}`)
    }
  return s.sort(), o.sort(), {
    contextAttributes: a,
    parameters: o,
    shaderPrecisions: c,
    extensions: n,
    extensionParameters: s,
    unsupportedExtensions: i
  }
}

function mi(e) {
  if (e.webgl) return e.webgl.context;
  let t = document.createElement(`canvas`),
    n;
  t.addEventListener(`webglCreateContextError`, () => n = void 0);
  for (let e of [`webgl`, `experimental-webgl`]) {
    try {
      n = t.getContext(e)
    } catch {}
    if (n) break
  }
  return e.webgl = {
    context: n
  }, n
}

function hi(e, t, n) {
  let r = e.getShaderPrecisionFormat(e[t], e[n]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function gi(e) {
  return Object.keys(e.__proto__).filter(_i)
}

function _i(e) {
  return typeof e == `string` && !e.match(/[^A-Z0-9_x]/)
}

function vi() {
  return K()
}

function yi() {
  return U() || W()
}

function bi(e) {
  return typeof e.getParameter == `function`
}

function xi() {
  if (!(J() || W())) return -2;
  if (!window.AudioContext) return -1;
  let e = new AudioContext().baseLatency;
  return e == null ? -1 : isFinite(e) ? e : -3
}

function Si() {
  if (!window.Intl) return -1;
  let e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  let t = e().resolvedOptions().locale;
  return !t && t !== `` ? -3 : t
}

function Ci(e) {
  return /not/i.test(e)
}
async function wi() {
  let e = navigator.userAgentData;
  if (!e) return;
  let t = e.brands.filter(({
      brand: e
    }) => !Ci(e)).map(({
      brand: e
    }) => e),
    n = {
      brands: t.length > 1 ? t.filter(e => e !== `Chromium`) : t,
      mobile: e.mobile,
      platform: e.platform
    };
  if (e.getHighEntropyValues) try {
    let t = await e.getHighEntropyValues([`architecture`, `bitness`, `model`, `platformVersion`]);
    n.architecture = t.architecture, n.bitness = t.bitness, n.model = t.model, n.platformVersion = t.platformVersion
  } catch (e) {
    if (e instanceof DOMException && e.name === `NotAllowedError`) n.highEntropyStatus = `not_allowed`;
    else throw e
  }
  return n
}
var Ti = {
  userAgentData: wi,
  fonts: Bn,
  domBlockers: Dr,
  fontPreferences: Yr,
  audio: En,
  screenFrame: ur,
  canvas: Hn,
  osCpu: $n,
  languages: er,
  colorDepth: tr,
  deviceMemory: nr,
  screenResolution: rr,
  hardwareConcurrency: pr,
  timezone: hr,
  sessionStorage: _r,
  localStorage: vr,
  indexedDB: yr,
  openDatabase: br,
  cpuClass: xr,
  platform: Sr,
  plugins: Vn,
  touchSupport: Qn,
  vendor: Cr,
  vendorFlavors: wr,
  cookiesEnabled: Tr,
  colorGamut: Mr,
  invertedColors: Nr,
  forcedColors: Fr,
  monochrome: Rr,
  contrast: zr,
  reducedMotion: Br,
  reducedTransparency: Hr,
  hdr: Wr,
  math: Kr,
  pdfViewerEnabled: Qr,
  architecture: $r,
  applePay: ei,
  privateClickMeasurement: ri,
  audioBaseLatency: xi,
  dateTimeLocale: Si,
  webGlBasics: fi,
  webGlExtensions: pi
};

function Ei(e) {
  return fn(Ti, e, [])
}
var Di = `$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score`;

function Oi(e) {
  let t = ki(e),
    n = Ai(t);
  return {
    score: t,
    comment: Di.replace(/\$/g, `${n}`)
  }
}

function ki(e) {
  if (J()) return .4;
  if (W()) return hn() && !(q() && G()) ? .5 : .3;
  let t = `value` in e.platform ? e.platform.value : ``;
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function Ai(e) {
  return Zt(.99 + .01 * e, 1e-4)
}

function ji(e) {
  let t = ``;
  for (let n of Object.keys(e).sort()) {
    let r = e[n],
      i = `error` in r ? `error` : JSON.stringify(r.value);
    t += `${t?`|`:``}${n.replace(/([:|\\])/g,`\\$1`)}:${i}`
  }
  return t
}

function Mi(e) {
  return JSON.stringify(e, (e, t) => t instanceof Error ? cn(t) : t, 2)
}

function Ni(e) {
  return sn(ji(e))
}

function Pi(e) {
  let t;
  return {
    get visitorId() {
      return t === void 0 && (t = Ni(this.components)), t
    },
    set visitorId(e) {
      t = e
    },
    confidence: Oi(e),
    components: e,
    version: Ut
  }
}

function Fi(e = 50) {
  return Gt(e, e * 2)
}

function Ii(e, t) {
  let n = Date.now();
  return {
    async get(r) {
      let i = Date.now(),
        a = await e(),
        o = Pi(a);
      return (t || r != null && r.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${o.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${i-n}
visitorId: ${o.visitorId}
components: ${Mi(a)}
\`\`\``), o
    }
  }
}

function Li() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    let e = new XMLHttpRequest;
    e.open(`get`, `https://m1.openfpcdn.io/fingerprintjs/v${Ut}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function Ri(e = {}) {
  let {
    delayFallback: t,
    debug: n,
    monitoring: r = !0
  } = e;
  return r && Li(), await Fi(t), Ii(Ei({
    cache: {},
    debug: n
  }), n)
}
var zi = {
    load: Ri,
    hashComponents: Ni,
    componentsToDebugString: Mi
  },
  Bi = null;
async function Vi() {
  return Bi || (Bi = zi.load()), Bi
}
async function Hi() {
  return Ui().then(e => e.visitorId)
}
async function Ui() {
  let e = await (await Vi()).get(),
    t = e.components,
    n = g(),
    r = navigator.userAgent.toLowerCase(),
    i = r.includes(`iphone`),
    a = r.includes(`macintosh`),
    o = i || a,
    s = r.includes(`android`);
  if (o) t = e.components;
  else if (n === `Chrome`) {
    let {
      languages: n,
      ...r
    } = e.components;
    t = r
  } else if (n === `Firefox`) {
    let {
      languages: n,
      dateTimeLocale: r,
      ...i
    } = e.components;
    t = i
  } else if (n === `Brave`) {
    let {
      fonts: n,
      audio: r,
      canvas: i,
      hardwareConcurrency: a,
      plugins: o,
      deviceMemory: s,
      languages: c,
      dateTimeLocale: l,
      ...u
    } = e.components;
    t = u
  } else {
    let {
      languages: n,
      ...r
    } = e.components;
    t = r
  }
  if ((n === `Safari` || s) && (t = {
      userAgent: {
        value: navigator.userAgent,
        duration: 0
      },
      ...t
    }), n === `Safari` && (t = {
      canvas2d: {
        value: await v(),
        duration: 0
      },
      canvasWebgl: {
        value: await ye(),
        duration: 0
      },
      ...t
    }), n === `Firefox`) {
    var c;
    t = {
      ...t,
      fonts: {
        value: [(c = t.fonts) == null ? void 0 : c.value, await me()],
        duration: t.fonts.duration
      }
    }
  }
  s && (t = {
    canvas2d: {
      value: await v(),
      duration: 0
    },
    ...t
  });
  let l = zi.hashComponents(t),
    u = l.length,
    d = u >> 2 | 2;
  return {
    visitorId: l.slice(0, d) + (u * 5).toString(16) + l.slice(d + (u >> 4)),
    components: t
  }
}

function Wi() {
  return Ht.start({
    apiKey: i,
    endpoints: [`https://wplace.live/7eskSe93usV8ENxB/?region=eu`],
    region: `eu`
  })
}
export {
  m as a, u as c, d, n as f, l as g, s as h, h as i, o as l, t as m, Wi as n, f as o, r as p, g as r, c as s, Hi as t, a as u
};