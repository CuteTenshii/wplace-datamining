import {
  an as e
} from "./CX37corp.js";
var t = {
    center: 3,
    diagonal: 3
  },
  n = {
    center: 5,
    diagonal: 7
  },
  r = 8192,
  i = 16777216,
  a = `
  if (mode != 0) {
    float pattern_resolution = max(1.0, pixel_mode_resolution);
    if (!pixel_mode_detail_supported || pixels_per_source < pattern_resolution) {
      float coverage = mode == 1
        ? pow(max(0.0, pattern_resolution - 2.0) / pattern_resolution, 2.0)
        : (pattern_resolution + 1.0) / (2.0 * pattern_resolution);
      color.a *= coverage;
    } else {
      vec2 local = floor(fract(source_coordinate + vec2(0.00001)) * pattern_resolution);
      if (mode == 1) {
        if (local.x < 1.0 || local.x >= pattern_resolution - 1.0 ||
            local.y < 1.0 || local.y >= pattern_resolution - 1.0) {
          discard;
        }
      } else if (local.x + local.y >= pattern_resolution) {
        discard;
      }
    }
  }
`,
  o = `
attribute vec2 a_position;
uniform vec2 u_source_origin;
uniform vec2 u_source_span;
varying highp vec2 v_source_coordinate;

void main() {
  vec2 viewport_coordinate = vec2(
    a_position.x * 0.5 + 0.5,
    0.5 - a_position.y * 0.5
  );
  v_source_coordinate = u_source_origin + viewport_coordinate * u_source_span;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,
  s = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec2 u_source_size;
uniform int u_mode;
uniform float u_pixels_per_source;
uniform float u_pixel_mode_resolution;
uniform bool u_pixel_mode_detail_supported;
varying highp vec2 v_source_coordinate;

void main() {
  vec2 source_pixel = clamp(
    floor(v_source_coordinate),
    vec2(0.0),
    u_source_size - vec2(1.0)
  );
  vec4 color = texture2D(u_texture, (source_pixel + 0.5) / u_source_size);
  if (color.a < 1.0 / 255.0) {
    discard;
  }

  int mode = u_mode;
  float pixels_per_source = u_pixels_per_source;
  float pixel_mode_resolution = u_pixel_mode_resolution;
  bool pixel_mode_detail_supported = u_pixel_mode_detail_supported;
  vec2 source_coordinate = v_source_coordinate;
${a}

  gl_FragColor = color;
}
`;

function c(e, n = t) {
  return e === `center` ? n.center : e === `diagonal` ? n.diagonal : 1
}

function l(e, t = 3) {
  return e === `center` ? ((t - 2) / t) ** 2 : e === `diagonal` ? (t + 1) / (2 * t) : 1
}

function u(e, t, n) {
  if (e <= 0 || t <= 0) return 1;
  let a = Math.max(1, n || 1),
    o = Math.min(r / e, r / t),
    s = Math.sqrt(i / (e * t));
  return Math.max(1, Math.min(a, o, s))
}

function d(e) {
  let {
    bounds: t,
    scale: n
  } = e;
  if (e.viewportWidth <= 0 || e.viewportHeight <= 0 || n <= 0 || t.width <= 0 || t.height <= 0 || e.sourceWidth <= 0 || e.sourceHeight <= 0) return;
  let r = e.offsetX + t.x * n,
    i = e.offsetY + t.y * n,
    a = t.width * n,
    o = t.height * n,
    s = Math.max(0, r),
    c = Math.max(0, i),
    l = Math.min(e.viewportWidth, r + a),
    d = Math.min(e.viewportHeight, i + o),
    f = l - s,
    p = d - c;
  if (f <= 0 || p <= 0) return;
  let m = s - r,
    h = c - i,
    g = e.sourceWidth / a,
    _ = e.sourceHeight / o,
    v = u(f, p, e.pixelRatio);
  return {
    left: m,
    top: h,
    width: f,
    height: p,
    outputWidth: Math.max(1, Math.round(f * v)),
    outputHeight: Math.max(1, Math.round(p * v)),
    sourceX: m * g,
    sourceY: h * _,
    sourceWidth: f * g,
    sourceHeight: p * _,
    pixelsPerSource: Math.min(a / e.sourceWidth, o / e.sourceHeight) * v
  }
}
var f = class {
  constructor(t) {
    e(this, `canvas`, void 0), e(this, `gl`, void 0), e(this, `maxOutputWidth`, void 0), e(this, `maxOutputHeight`, void 0), e(this, `maxTextureSize`, void 0), e(this, `detailSupported`, void 0), e(this, `program`, void 0), e(this, `texture`, void 0), e(this, `buffer`, void 0), e(this, `positionLocation`, void 0), e(this, `uniforms`, void 0), e(this, `uploadedSource`, void 0), e(this, `fallbackSource`, void 0), e(this, `fallbackCanvas`, void 0), this.canvas = t;
    let n = null;
    try {
      n = t.getContext(`webgl`, {
        alpha: !0,
        antialias: !1,
        premultipliedAlpha: !1,
        preserveDrawingBuffer: !1
      })
    } catch {
      n = null
    }
    if (this.gl = n, !n) {
      this.maxOutputWidth = r, this.maxOutputHeight = r, this.maxTextureSize = 0, this.detailSupported = !1, this.program = null, this.texture = null, this.buffer = null, this.positionLocation = -1;
      return
    }
    let i = n.getParameter(n.MAX_VIEWPORT_DIMS),
      a = n.getParameter(n.MAX_RENDERBUFFER_SIZE);
    if (this.maxOutputWidth = Math.min(i[0], a), this.maxOutputHeight = Math.min(i[1], a), this.maxTextureSize = n.getParameter(n.MAX_TEXTURE_SIZE), this.detailSupported = _(n), this.program = h(n, o, s), this.texture = n.createTexture(), this.buffer = n.createBuffer(), !this.program || !this.texture || !this.buffer) {
      this.positionLocation = -1;
      return
    }
    this.positionLocation = n.getAttribLocation(this.program, `a_position`), this.uniforms = {
      texture: n.getUniformLocation(this.program, `u_texture`),
      sourceSize: n.getUniformLocation(this.program, `u_source_size`),
      sourceOrigin: n.getUniformLocation(this.program, `u_source_origin`),
      sourceSpan: n.getUniformLocation(this.program, `u_source_span`),
      mode: n.getUniformLocation(this.program, `u_mode`),
      pixelsPerSource: n.getUniformLocation(this.program, `u_pixels_per_source`),
      pixelModeResolution: n.getUniformLocation(this.program, `u_pixel_mode_resolution`),
      pixelModeDetailSupported: n.getUniformLocation(this.program, `u_pixel_mode_detail_supported`)
    }, n.bindBuffer(n.ARRAY_BUFFER, this.buffer), n.bufferData(n.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), n.STATIC_DRAW), n.bindTexture(n.TEXTURE_2D, this.texture), m(n)
  }
  render(e) {
    if (e.outputWidth <= 0 || e.outputHeight <= 0) return;
    let t = Math.min(1, this.maxOutputWidth / e.outputWidth, this.maxOutputHeight / e.outputHeight),
      n = Math.max(1, Math.floor(e.outputWidth * t)),
      r = Math.max(1, Math.floor(e.outputHeight * t)),
      i = e.pixelsPerSource * t;
    (this.canvas.width !== n || this.canvas.height !== r) && (this.canvas.width = n, this.canvas.height = r);
    let a = this.gl;
    if (!a || !this.program || !this.texture || !this.buffer || !this.uniforms) {
      this.renderFallback(e, n, r, i);
      return
    }
    if (e.source.width > this.maxTextureSize || e.source.height > this.maxTextureSize) {
      this.renderFallback(e, n, r, i);
      return
    }
    a.viewport(0, 0, n, r), a.disable(a.BLEND), a.disable(a.DEPTH_TEST), a.disable(a.CULL_FACE), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.useProgram(this.program), a.bindBuffer(a.ARRAY_BUFFER, this.buffer), this.positionLocation >= 0 && (a.enableVertexAttribArray(this.positionLocation), a.vertexAttribPointer(this.positionLocation, 2, a.FLOAT, !1, 0, 0)), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, this.texture), this.uploadedSource !== e.source && (a.pixelStorei(a.UNPACK_ALIGNMENT, 4), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, e.source.width, e.source.height, 0, a.RGBA, a.UNSIGNED_BYTE, e.source.data), this.uploadedSource = e.source), a.uniform1i(this.uniforms.texture, 0), a.uniform2f(this.uniforms.sourceSize, e.source.width, e.source.height), a.uniform2f(this.uniforms.sourceOrigin, e.sourceX, e.sourceY), a.uniform2f(this.uniforms.sourceSpan, e.sourceWidth, e.sourceHeight), a.uniform1i(this.uniforms.mode, p(e.mode)), a.uniform1f(this.uniforms.pixelsPerSource, i), a.uniform1f(this.uniforms.pixelModeResolution, e.patternResolution), a.uniform1i(this.uniforms.pixelModeDetailSupported, +!!this.detailSupported), a.drawArrays(a.TRIANGLES, 0, 6)
  }
  destroy() {
    let e = this.gl;
    e && (this.texture && e.deleteTexture(this.texture), this.buffer && e.deleteBuffer(this.buffer), this.program && e.deleteProgram(this.program)), this.fallbackCanvas && (this.fallbackCanvas.width = 0, this.fallbackCanvas.height = 0), this.canvas.width = 0, this.canvas.height = 0
  }
  renderFallback(e, t, n, r) {
    let i = null;
    try {
      i = this.canvas.getContext(`2d`, {
        colorSpace: `srgb`
      })
    } catch {
      i = null
    }
    if (!i) return;
    if (i.clearRect(0, 0, t, n), i.imageSmoothingEnabled = !1, this.fallbackCanvas || (this.fallbackCanvas = document.createElement(`canvas`)), this.fallbackSource !== e.source) {
      this.fallbackCanvas.width = e.source.width, this.fallbackCanvas.height = e.source.height;
      let t = this.fallbackCanvas.getContext(`2d`, {
        colorSpace: `srgb`
      });
      if (!t) return;
      t.putImageData(e.source, 0, 0), this.fallbackSource = e.source
    }
    if (e.mode === `normal` || r < e.patternResolution) {
      i.globalAlpha = l(e.mode, e.patternResolution), i.drawImage(this.fallbackCanvas, e.sourceX, e.sourceY, e.sourceWidth, e.sourceHeight, 0, 0, t, n), i.globalAlpha = 1;
      return
    }
    let a = Math.max(0, Math.floor(e.sourceX)),
      o = Math.max(0, Math.floor(e.sourceY)),
      s = Math.min(e.source.width, Math.ceil(e.sourceX + e.sourceWidth)),
      c = Math.min(e.source.height, Math.ceil(e.sourceY + e.sourceHeight)),
      u = t / e.sourceWidth,
      d = n / e.sourceHeight;
    for (let t = o; t < c; t++)
      for (let n = a; n < s; n++) {
        let r = (t * e.source.width + n) * 4,
          a = e.source.data[r + 3];
        if (a === 0) continue;
        let o = (n - e.sourceX) * u,
          s = (t - e.sourceY) * d,
          c = (n + 1 - e.sourceX) * u,
          l = (t + 1 - e.sourceY) * d;
        if (i.fillStyle = `rgba(${e.source.data[r]}, ${e.source.data[r+1]}, ${e.source.data[r+2]}, ${a/255})`, e.mode === `center`) {
          let t = (c - o) / e.patternResolution,
            n = (l - s) / e.patternResolution;
          i.fillRect(o + t, s + n, c - o - t * 2, l - s - n * 2)
        } else {
          let t = (c - o) / e.patternResolution,
            n = (l - s) / e.patternResolution;
          for (let r = 0; r < e.patternResolution; r++) i.fillRect(o, s + r * n, t * (e.patternResolution - r), n)
        }
      }
  }
};

function p(e) {
  return e === `center` ? 1 : e === `diagonal` ? 2 : 0
}

function m(e) {
  e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
}

function h(e, t, n) {
  let r = g(e, e.VERTEX_SHADER, t),
    i = g(e, e.FRAGMENT_SHADER, n),
    a = e.createProgram();
  return !r || !i || !a ? (r && e.deleteShader(r), i && e.deleteShader(i), a && e.deleteProgram(a), null) : (e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), e.deleteShader(r), e.deleteShader(i), e.getProgramParameter(a, e.LINK_STATUS) ? a : (e.deleteProgram(a), null))
}

function g(e, t, n) {
  let r = e.createShader(t);
  return r ? (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (e.deleteShader(r), null)) : null
}

function _(e) {
  var t;
  return (((t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)) == null ? void 0 : t.precision) ?? 0) > 0
}
export {
  d as a, f as i, n, c as o, a as r, t
};