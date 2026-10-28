import {
  fn as e,
  on as t
} from "./DTpxYwnW.js";
import {
  t as n
} from "./CfDPVNwc.js";
import {
  n as r,
  o as i,
  r as a,
  s as o
} from "./BMz1pOLW.js";
import {
  s
} from "./Bj-o04n3.js";
import {
  i as c
} from "./TwBIz_JE.js";
import {
  h as l
} from "./DThoGFvs.js";
import {
  t as u
} from "./DAFNBzHi.js";
var d = new Blob([new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 11, 73, 68, 65, 84, 120, 156, 99, 96, 0, 2, 0, 0, 5, 0, 1, 122, 94, 171, 63, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130])], {
    type: `image/png`
  }),
  f = [500, 1500],
  p = [1e3, 2e3, 5e3, 1e4, 3e4];

function m(e, t) {
  return new Promise((n, r) => {
    if (t != null && t.aborted) {
      r(t.reason ?? new DOMException(`The operation was aborted.`, `AbortError`));
      return
    }
    let i = () => {
        clearTimeout(a), r((t == null ? void 0 : t.reason) ?? new DOMException(`The operation was aborted.`, `AbortError`))
      },
      a = setTimeout(() => {
        t == null || t.removeEventListener(`abort`, i), n()
      }, e);
    t == null || t.addEventListener(`abort`, i, {
      once: !0
    })
  })
}
var h = {
  fetch: (...e) => fetch(...e),
  decode: u,
  delay: m
};

function g(e, t) {
  return (t == null ? void 0 : t.aborted) === !0 || e instanceof DOMException && e.name === `AbortError` || e instanceof Error && e.name === `AbortError`
}
async function _(e, t, n) {
  let r;
  for (let i = 0; i <= f.length; i += 1) try {
    return await e()
  } catch (e) {
    if (g(e, t)) throw e;
    if (r = e, i === f.length) break;
    await n(f[i], t)
  }
  throw r
}
async function v(e, t = {}, n = {}) {
  let r = {
    ...h,
    ...n
  };
  return _(async () => {
    let n = await r.fetch(e, t);
    if (n.status === 404) return d;
    if (!n.ok) throw Error(`Canvas tile request failed with HTTP ${n.status}.`);
    return n.blob()
  }, t.signal ?? void 0, r.delay)
}
async function y(e, t, n = {}) {
  let r = {
    ...h,
    ...n
  };
  return _(async () => r.decode(await e.arrayBuffer()), t, r.delay)
}
var b = class {
  constructor(e = 64, n = 33554432) {
    if (t(this, `maxEntries`, void 0), t(this, `maxDecodedBytes`, void 0), t(this, `entries`, new Map), t(this, `decoded`, new Map), t(this, `decoding`, new Map), t(this, `decodedBytes`, 0), this.maxEntries = e, this.maxDecodedBytes = n, !Number.isSafeInteger(e) || e < 1) throw RangeError(`Progress tile caches require at least one entry.`);
    if (!Number.isSafeInteger(n) || n < 0) throw RangeError(`Progress tile caches require a nonnegative decoded byte limit.`)
  }
  load(e, t = {}, n = {}) {
    let r = this.entries.get(e);
    if (r) return this.entries.delete(e), this.entries.set(e, r), r;
    let i = v(e, t, n);
    for (this.entries.set(e, i); this.entries.size > this.maxEntries;) {
      let e = this.entries.keys().next().value;
      if (e === void 0) break;
      this.entries.delete(e)
    }
    return i.catch(() => {
      this.entries.get(e) === i && this.entries.delete(e)
    }), i
  }
  async loadPixels(e, t = {}, n = {}) {
    let r = t.signal ?? void 0;
    r == null || r.throwIfAborted();
    let i = this.decoded.get(e);
    if (i) return this.decoded.delete(e), this.decoded.set(e, i), i;
    let a = this.decoding.get(e);
    if (a) return a;
    let o = this.load(e, t, n).then(async t => {
      r == null || r.throwIfAborted();
      let i = await y(t, r, n);
      if (r == null || r.throwIfAborted(), this.decoding.get(e) === o && i.data.byteLength <= this.maxDecodedBytes)
        for (this.decoded.set(e, i), this.decodedBytes += i.data.byteLength; this.decodedBytes > this.maxDecodedBytes || this.decoded.size > this.maxEntries;) {
          let e = this.decoded.entries().next().value;
          if (!e) break;
          this.decoded.delete(e[0]), this.decodedBytes -= e[1].data.byteLength
        }
      return i
    });
    this.decoding.set(e, o);
    try {
      return await o
    } finally {
      this.decoding.get(e) === o && this.decoding.delete(e)
    }
  }
  clear() {
    this.entries.clear(), this.decoded.clear(), this.decoding.clear(), this.decodedBytes = 0
  }
};
async function x(e, t = {}, n = {}) {
  let r = {
    ...h,
    ...n
  };
  return _(async () => {
    let n = await r.fetch(e, t);
    if (n.status === 404) return r.decode(await d.arrayBuffer());
    if (!n.ok) throw Error(`Canvas tile request failed with HTTP ${n.status}.`);
    return await r.decode(await n.arrayBuffer())
  }, t.signal ?? void 0, r.delay)
}

function S(e, t) {
  let n = t.width === 1 && t.height === 1 && t.data[3] === 0;
  if (!Number.isSafeInteger(e.canvasWidth) || !Number.isSafeInteger(e.canvasHeight) || !Number.isSafeInteger(e.destinationX) || !Number.isSafeInteger(e.destinationY) || !Number.isSafeInteger(e.width) || !Number.isSafeInteger(e.height) || e.canvasWidth < 1 || e.canvasHeight < 1 || e.destinationX < 0 || e.destinationY < 0 || e.width < 1 || e.height < 1 || e.destinationX + e.width > e.canvasWidth || e.destinationY + e.height > e.canvasHeight || e.pixels.length !== e.canvasWidth * e.canvasHeight * 4 || !Number.isSafeInteger(e.offsetX) || !Number.isSafeInteger(e.offsetY) || e.offsetX < 0 || e.offsetY < 0 || !Number.isSafeInteger(t.width) || !Number.isSafeInteger(t.height) || t.width < 1 || t.height < 1 || !n && (e.offsetX + e.width > t.width || e.offsetY + e.height > t.height) || t.data.length !== t.width * t.height * 4) throw Error(`Canvas tile patch dimensions are invalid.`);
  let r = e.width * 4;
  for (let i = 0; i < e.height; i += 1) {
    let a = ((e.destinationY + i) * e.canvasWidth + e.destinationX) * 4;
    if (n) {
      e.pixels.fill(0, a, a + r);
      continue
    }
    let o = ((e.offsetY + i) * t.width + e.offsetX) * 4;
    e.pixels.set(t.data.subarray(o, o + r), a)
  }
}
async function C(e, t, n = {}, r = {}) {
  var i, a;
  let o = await x(e, n, r);
  return (i = n.signal) != null && i.aborted || ((a = t.isCurrent) == null ? void 0 : a.call(t)) === !1 ? !1 : (S(t, o), !0)
}

function w(e) {
  return p[Math.min(Math.max(0, Math.trunc(e)), p.length - 1)]
}
var T = e(n(), 1),
  E = 1024,
  D = 1,
  O = 3,
  k = `template-build-overlay-layer`,
  A = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
  j = `
  if (u_status_highlights_enabled) {
    float encoded_status = floor(color.a * 255.0 + 0.5);
    if (encoded_status == 254.0 ||
        encoded_status == 253.0) {
      float status = encoded_status == 254.0 ? 2.0 : 1.0;
      vec4 marker = status_marker_color(status, v_source_coordinate, u_pixels_per_source);
      color.a = 1.0;
      if (marker.a >= 0.5) {
        color.a *= u_opacity;
        color.rgb *= color.a;
        marker.rgb *= marker.a;
        color = marker + color * (1.0 - marker.a);
        gl_FragColor = color;
        return;
      }
    }
  }
`,
  M = j.replace(`gl_FragColor = color;`, `fragment_color = color;`),
  N = `
attribute vec2 a_unit_position;
uniform mat4 u_matrix;
uniform float u_world_size;
uniform vec2 u_top_left;
uniform vec2 u_top_right;
uniform vec2 u_bottom_right;
uniform vec2 u_bottom_left;
uniform vec2 u_source_size;
varying highp vec2 v_source_coordinate;

void main() {
  vec2 top = mix(u_top_left, u_top_right, a_unit_position.x);
  vec2 bottom = mix(u_bottom_left, u_bottom_right, a_unit_position.x);
  vec2 position = mix(top, bottom, a_unit_position.y);
  v_source_coordinate = a_unit_position * u_source_size;
  gl_Position = u_matrix * vec4(position * u_world_size, 0.0, 1.0);
}
`,
  P = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec2 u_source_size;
uniform vec2 u_texture_size;
uniform vec2 u_texture_content_size;
uniform float u_texture_downsample;
uniform int u_mode;
uniform float u_opacity;
uniform float u_pixels_per_source;
uniform float u_pixel_mode_resolution;
uniform bool u_pixel_mode_detail_supported;
uniform bool u_hide_pixels;
uniform bool u_highlight_enabled;
uniform vec4 u_highlight_color;
uniform bool u_status_highlights_enabled;
varying highp vec2 v_source_coordinate;

${o}

void main() {
  vec2 texture_content_coordinate = v_source_coordinate / u_texture_downsample;
  if (u_status_highlights_enabled) {
    vec2 source_pixel = clamp(floor(v_source_coordinate), vec2(0.0), u_source_size - vec2(1.0));
    texture_content_coordinate = floor(source_pixel / u_texture_downsample) + vec2(0.5);
  }
  vec2 texture_coordinate = clamp(
    texture_content_coordinate,
    vec2(0.0),
    u_texture_content_size - vec2(0.0001)
  ) / u_texture_size;
  vec4 color = texture2D(u_texture, texture_coordinate);
  if (color.a < 1.0 / 255.0) {
    discard;
  }
  if (u_highlight_enabled) {
    vec3 difference = abs(color.rgb - u_highlight_color.rgb);
    if (difference.r > 0.004 || difference.g > 0.004 || difference.b > 0.004) {
      discard;
    }
  }
${j}

  int mode = u_mode;
  float pixels_per_source = u_pixels_per_source;
  float pixel_mode_resolution = u_pixel_mode_resolution;
  bool pixel_mode_detail_supported = u_pixel_mode_detail_supported;
  vec2 source_coordinate = v_source_coordinate;
  if (u_hide_pixels) {
    discard;
  }
${a}

  color.a *= u_opacity;
  color.rgb *= color.a;
  gl_FragColor = color;
}
`,
  F = `#version 300 es
in vec2 a_unit_position;
uniform mat4 u_matrix;
uniform float u_world_size;
uniform vec2 u_top_left;
uniform vec2 u_top_right;
uniform vec2 u_bottom_right;
uniform vec2 u_bottom_left;
uniform vec2 u_source_size;
out highp vec2 v_source_coordinate;

void main() {
  vec2 top = mix(u_top_left, u_top_right, a_unit_position.x);
  vec2 bottom = mix(u_bottom_left, u_bottom_right, a_unit_position.x);
  vec2 position = mix(top, bottom, a_unit_position.y);
  v_source_coordinate = a_unit_position * u_source_size;
  gl_Position = u_matrix * vec4(position * u_world_size, 0.0, 1.0);
}
`,
  I = `#version 300 es
precision highp float;

uniform sampler2D u_texture;
uniform vec2 u_source_size;
uniform vec2 u_texture_size;
uniform vec2 u_texture_content_size;
uniform float u_texture_downsample;
uniform int u_mode;
uniform float u_opacity;
uniform float u_pixels_per_source;
uniform float u_pixel_mode_resolution;
uniform bool u_pixel_mode_detail_supported;
uniform bool u_hide_pixels;
uniform bool u_highlight_enabled;
uniform vec4 u_highlight_color;
uniform bool u_status_highlights_enabled;
in highp vec2 v_source_coordinate;
out vec4 fragment_color;

${o}

void main() {
  vec2 texture_content_coordinate = v_source_coordinate / u_texture_downsample;
  if (u_status_highlights_enabled) {
    vec2 source_pixel = clamp(floor(v_source_coordinate), vec2(0.0), u_source_size - vec2(1.0));
    texture_content_coordinate = floor(source_pixel / u_texture_downsample) + vec2(0.5);
  }
  vec2 texture_coordinate = clamp(
    texture_content_coordinate,
    vec2(0.0),
    u_texture_content_size - vec2(0.0001)
  ) / u_texture_size;
  vec4 color = texture(u_texture, texture_coordinate);
  if (color.a < 1.0 / 255.0) {
    discard;
  }
  if (u_highlight_enabled) {
    vec3 difference = abs(color.rgb - u_highlight_color.rgb);
    if (difference.r > 0.004 || difference.g > 0.004 || difference.b > 0.004) {
      discard;
    }
  }
${M}

  int mode = u_mode;
  float pixels_per_source = u_pixels_per_source;
  float pixel_mode_resolution = u_pixel_mode_resolution;
  bool pixel_mode_detail_supported = u_pixel_mode_detail_supported;
  vec2 source_coordinate = v_source_coordinate;
  if (u_hide_pixels) {
    discard;
  }
${a}

  color.a *= u_opacity;
  color.rgb *= color.a;
  fragment_color = color;
}
`,
  L = class {
    constructor(e, n, r, i, a = s, o) {
      t(this, `id`, void 0), t(this, `map`, void 0), t(this, `logicalTileZoom`, void 0), t(this, `beforeLayerId`, void 0), t(this, `textureBudgetBytes`, void 0), t(this, `onRepeatedRenderFailure`, void 0), t(this, `type`, `custom`), t(this, `renderingMode`, `2d`), t(this, `gl`, void 0), t(this, `program`, void 0), t(this, `quadBuffer`, void 0), t(this, `vertexArrayApi`, void 0), t(this, `vertexArray`, void 0), t(this, `unitPositionLocation`, -1), t(this, `uniforms`, void 0), t(this, `data`, void 0), t(this, `sourceTiles`, []), t(this, `textureCache`, void 0), t(this, `webgl2`, !1), t(this, `pixelModeDetailSupported`, !1), t(this, `origin`, [0, 0]), t(this, `translatedMatrix`, new Float32Array(16)), t(this, `uploadBuffer`, new Uint8Array(E * E * 4)), t(this, `destroyed`, !1), t(this, `contextLost`, !1), t(this, `consecutiveRenderFailures`, 0), t(this, `renderDisabled`, !1), t(this, `handleStyleLoad`, () => {
        !this.destroyed && this.data && !this.map.getLayer(this.id) && this.map.addLayer(this, this.beforeLayerId && this.map.getLayer(this.beforeLayerId) ? this.beforeLayerId : void 0)
      }), t(this, `handleContextLost`, () => {
        this.destroyed || (this.contextLost = !0, this.discardGpuResources())
      }), t(this, `handleContextRestored`, () => {
        this.destroyed || (this.contextLost = !1, this.map.getLayer(this.id) && this.gl && this.onAdd(this.map, this.gl))
      }), this.id = e, this.map = n, this.logicalTileZoom = r, this.beforeLayerId = i, this.textureBudgetBytes = a, this.onRepeatedRenderFailure = o, this.map.on(`style.load`, this.handleStyleLoad), this.map.on(`webglcontextlost`, this.handleContextLost), this.map.on(`webglcontextrestored`, this.handleContextRestored)
    }
    setData(e) {
      var t, n, r, i;
      let a = (t = this.data) == null ? void 0 : t.statusHighlights,
        o = !this.data || this.data.pixels !== e.pixels || !R(this.data.coordinates, e.coordinates),
        s = (a == null ? void 0 : a.incorrect) !== ((n = e.statusHighlights) == null ? void 0 : n.incorrect) || (a == null ? void 0 : a.unpainted) !== ((r = e.statusHighlights) == null ? void 0 : r.unpainted),
        c = (a == null ? void 0 : a.progress) !== ((i = e.statusHighlights) == null ? void 0 : i.progress);
      if (this.data = e, o) this.rebuildSourceTiles();
      else if (s) this.markSourceTilesDirty();
      else if (c && e.statusHighlights) {
        let t = e.statusHighlights.progress.changedTileIndices;
        a && t ? this.markProgressTilesDirty(e.statusHighlights.progress, t) : this.markSourceTilesDirty()
      }
      this.map.triggerRepaint()
    }
    setOpacity(e) {
      !this.data || this.data.opacity === e || (this.data = {
        ...this.data,
        opacity: e
      }, this.map.triggerRepaint())
    }
    setHidden(e) {
      !this.data || !!this.data.hidden === e || (this.data = {
        ...this.data,
        hidden: e
      }, this.map.triggerRepaint())
    }
    destroy() {
      this.destroyed || (this.destroyed = !0, this.map.off(`style.load`, this.handleStyleLoad), this.map.off(`webglcontextlost`, this.handleContextLost), this.map.off(`webglcontextrestored`, this.handleContextRestored), this.map.getLayer(this.id) && this.map.removeLayer(this.id), this.data = void 0, this.sourceTiles = [])
    }
    onAdd(e, t) {
      var n, r;
      if (this.contextLost = !1, this.consecutiveRenderFailures = 0, this.renderDisabled = !1, this.gl = t, this.webgl2 = z(t), (n = this.textureCache) == null || n.clear(), this.textureCache = new l({
          maxBytes: this.textureBudgetBytes,
          onEvict: (e, n) => {
            t.deleteTexture(n), e.texture === n && (e.texture = void 0, e.textureDirty = !0, e.textureDownsample = void 0, e.minificationEnabled = void 0)
          }
        }), this.vertexArrayApi = B(t), this.pixelModeDetailSupported = V(t), this.program = K(t, this.webgl2 ? F : N, this.webgl2 ? I : P) ?? void 0, !this.program) throw Error(`Unable to initialize the build overlay renderer.`);
      if (this.unitPositionLocation = t.getAttribLocation(this.program, `a_unit_position`), this.quadBuffer = t.createBuffer() ?? void 0, !this.quadBuffer) throw t.deleteProgram(this.program), this.program = void 0, Error(`Unable to initialize the build overlay geometry.`);
      t.bindBuffer(t.ARRAY_BUFFER, this.quadBuffer), t.bufferData(t.ARRAY_BUFFER, A, t.STATIC_DRAW), this.vertexArray = ((r = this.vertexArrayApi) == null ? void 0 : r.create()) ?? void 0, this.vertexArrayApi && this.vertexArray && this.vertexArrayApi.bind(this.vertexArray), this.bindQuadVertexAttributes(t), this.vertexArrayApi && this.vertexArray ? this.vertexArrayApi.bind(null) : this.disableQuadVertexAttributes(t), t.bindBuffer(t.ARRAY_BUFFER, null), this.uniforms = {
        matrix: t.getUniformLocation(this.program, `u_matrix`),
        worldSize: t.getUniformLocation(this.program, `u_world_size`),
        topLeft: t.getUniformLocation(this.program, `u_top_left`),
        topRight: t.getUniformLocation(this.program, `u_top_right`),
        bottomRight: t.getUniformLocation(this.program, `u_bottom_right`),
        bottomLeft: t.getUniformLocation(this.program, `u_bottom_left`),
        texture: t.getUniformLocation(this.program, `u_texture`),
        sourceSize: t.getUniformLocation(this.program, `u_source_size`),
        textureSize: t.getUniformLocation(this.program, `u_texture_size`),
        textureContentSize: t.getUniformLocation(this.program, `u_texture_content_size`),
        textureDownsample: t.getUniformLocation(this.program, `u_texture_downsample`),
        mode: t.getUniformLocation(this.program, `u_mode`),
        opacity: t.getUniformLocation(this.program, `u_opacity`),
        pixelsPerSource: t.getUniformLocation(this.program, `u_pixels_per_source`),
        pixelModeResolution: t.getUniformLocation(this.program, `u_pixel_mode_resolution`),
        pixelModeDetailSupported: t.getUniformLocation(this.program, `u_pixel_mode_detail_supported`),
        hidePixels: t.getUniformLocation(this.program, `u_hide_pixels`),
        highlightEnabled: t.getUniformLocation(this.program, `u_highlight_enabled`),
        highlightColor: t.getUniformLocation(this.program, `u_highlight_color`),
        statusHighlightsEnabled: t.getUniformLocation(this.program, `u_status_highlights_enabled`)
      };
      for (let e of this.sourceTiles) e.texture = void 0, e.textureDirty = !0, e.textureDownsample = void 0, e.minificationEnabled = void 0
    }
    render(e, {
      modelViewProjectionMatrix: t
    }) {
      if (!this.renderDisabled) try {
        this.renderFrame(e, t), this.consecutiveRenderFailures = 0
      } catch (t) {
        if (this.consecutiveRenderFailures += 1, this.restoreSharedGlStateAfterFailure(e), this.consecutiveRenderFailures < O) {
          this.map.triggerRepaint();
          return
        }
        this.renderDisabled = !0, queueMicrotask(() => {
          var e;
          this.destroyed || (e = this.onRepeatedRenderFailure) == null || e.call(this, t)
        })
      }
    }
    renderFrame(e, t) {
      let n = this.data;
      if (this.contextLost || !n || n.hidden || !this.program || !this.uniforms) return;
      e.useProgram(this.program), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.disable(e.STENCIL_TEST);
      let {
        worldSize: a
      } = this.map.transform, [o, s] = this.getRasterAlignmentOffset(a);
      this.translateMatrix(t, this.origin[0] * a + o, this.origin[1] * a + s), e.uniformMatrix4fv(this.uniforms.matrix, !1, this.translatedMatrix), e.uniform1f(this.uniforms.worldSize, a), e.uniform1i(this.uniforms.texture, 0), e.uniform1i(this.uniforms.mode, H(n.mode)), e.uniform1f(this.uniforms.opacity, n.opacity), e.uniform1f(this.uniforms.pixelsPerSource, this.getPhysicalPixelsPerSource()), e.uniform1f(this.uniforms.pixelModeResolution, i(n.mode, r)), e.uniform1i(this.uniforms.pixelModeDetailSupported, +!!this.pixelModeDetailSupported), e.uniform1i(this.uniforms.hidePixels, +(n.pixelsMinZoom !== void 0 && this.map.getZoom() < n.pixelsMinZoom)), e.uniform1i(this.uniforms.highlightEnabled, +!!n.highlightColor);
      let c = !!(n.statusHighlights && (n.statusHighlights.incorrect || n.statusHighlights.unpainted));
      e.uniform1i(this.uniforms.statusHighlightsEnabled, +!!c), n.highlightColor && e.uniform4f(this.uniforms.highlightColor, n.highlightColor.r / 255, n.highlightColor.g / 255, n.highlightColor.b / 255, n.highlightColor.a / 255), this.vertexArrayApi && this.vertexArray ? this.vertexArrayApi.bind(this.vertexArray) : this.bindQuadVertexAttributes(e);
      let l = this.getVisibleSourceTiles(a),
        u = this.getVisibleTextureDownsample(l);
      for (let t of l) t.texture && t.textureDownsample !== u && this.releaseTileTexture(e, t);
      if (l.some(e => !e.texture)) {
        var d;
        let e = new Set(l);
        (d = this.textureCache) == null || d.evictWhere(t => !e.has(t))
      }
      let f = 0,
        p = !1;
      for (let t of l) {
        let r = this.prepareTile(e, t, f < D, u);
        if (r === `uploaded` && f++, r === `deferred` && (p = !0), !t.texture) continue;
        e.uniform2f(this.uniforms.topLeft, t.topLeft[0], t.topLeft[1]), e.uniform2f(this.uniforms.topRight, t.topRight[0], t.topRight[1]), e.uniform2f(this.uniforms.bottomRight, t.bottomRight[0], t.bottomRight[1]), e.uniform2f(this.uniforms.bottomLeft, t.bottomLeft[0], t.bottomLeft[1]), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.texture), this.setTileMinification(e, t, !n.highlightColor && !c), e.uniform2f(this.uniforms.sourceSize, t.width, t.height), e.uniform1f(this.uniforms.textureDownsample, t.textureDownsample ?? 1);
        let [i, a] = this.getTextureContentDimensions(t, t.textureDownsample), [o, s] = this.getTextureDimensions(t, t.textureDownsample);
        e.uniform2f(this.uniforms.textureSize, o, s), e.uniform2f(this.uniforms.textureContentSize, i, a), e.drawArrays(e.TRIANGLES, 0, 6)
      }
      this.vertexArrayApi && this.vertexArray ? this.vertexArrayApi.bind(null) : this.disableQuadVertexAttributes(e), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindTexture(e.TEXTURE_2D, null), p && this.map.triggerRepaint()
    }
    restoreSharedGlStateAfterFailure(e) {
      try {
        this.vertexArrayApi && this.vertexArray ? this.vertexArrayApi.bind(null) : this.disableQuadVertexAttributes(e), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindTexture(e.TEXTURE_2D, null)
      } catch {}
    }
    onRemove(e, t) {
      var n;
      this.vertexArrayApi && this.vertexArray ? (this.vertexArrayApi.bind(null), this.vertexArrayApi.delete(this.vertexArray)) : this.disableQuadVertexAttributes(t), this.releaseTiles(t), (n = this.textureCache) == null || n.clear(), this.quadBuffer && t.deleteBuffer(this.quadBuffer), this.program && t.deleteProgram(this.program), this.vertexArray = void 0, this.vertexArrayApi = void 0, this.quadBuffer = void 0, this.program = void 0, this.uniforms = void 0, this.textureCache = void 0, this.gl = void 0, this.webgl2 = !1, this.pixelModeDetailSupported = !1
    }
    discardGpuResources() {
      for (let e of this.sourceTiles) e.texture = void 0, e.textureDirty = !0, e.textureDownsample = void 0, e.minificationEnabled = void 0;
      this.textureCache = void 0, this.vertexArray = void 0, this.vertexArrayApi = void 0, this.quadBuffer = void 0, this.program = void 0, this.uniforms = void 0, this.unitPositionLocation = -1, this.webgl2 = !1, this.pixelModeDetailSupported = !1
    }
    rebuildSourceTiles() {
      this.gl && this.releaseTiles(this.gl), this.sourceTiles = [];
      let e = this.data;
      if (!e) return;
      let t = e.coordinates.map(([e, t]) => {
        let n = T.default.MercatorCoordinate.fromLngLat({
          lng: e,
          lat: t
        });
        return [n.x, n.y]
      });
      this.origin = t[0];
      let [n, r, i, a] = t.map(([e, t]) => [e - this.origin[0], t - this.origin[1]]), o = (e, t) => {
        let o = n[0] + (r[0] - n[0]) * e,
          s = n[1] + (r[1] - n[1]) * e,
          c = a[0] + (i[0] - a[0]) * e,
          l = a[1] + (i[1] - a[1]) * e;
        return [o + (c - o) * t, s + (l - s) * t]
      };
      for (let t = 0; t < e.pixels.height; t += E)
        for (let n = 0; n < e.pixels.width; n += E) {
          let r = Math.min(E, e.pixels.width - n),
            i = Math.min(E, e.pixels.height - t),
            a = n / e.pixels.width,
            s = t / e.pixels.height,
            c = (n + r) / e.pixels.width,
            l = (t + i) / e.pixels.height,
            u = o(a, s),
            d = o(c, s),
            f = o(c, l),
            p = o(a, l);
          this.sourceTiles.push({
            x: n,
            y: t,
            width: r,
            height: i,
            topLeft: u,
            topRight: d,
            bottomRight: f,
            bottomLeft: p,
            textureDirty: !0
          })
        }
    }
    prepareTile(e, t, n, r) {
      if (t.texture) {
        var i;
        ((i = this.textureCache) == null ? void 0 : i.get(t)) !== t.texture && (e.deleteTexture(t.texture), t.texture = void 0, t.textureDirty = !0, t.textureDownsample = void 0, t.minificationEnabled = void 0)
      }
      if (t.texture && !t.textureDirty) return `ready`;
      if (!n) return `deferred`;
      if (!t.texture) {
        let n = e.createTexture() ?? void 0;
        if (n) {
          var a;
          let [i, o] = this.getTextureDimensions(t, r);
          if (!(((a = this.textureCache) == null ? void 0 : a.set(t, n, G(i, o))) ?? !1)) return e.deleteTexture(n), `unavailable`;
          t.texture = n, t.textureDownsample = r, e.bindTexture(e.TEXTURE_2D, n), U(e), t.minificationEnabled = !0, t.textureDirty = !0
        }
      }
      if (!t.texture || !t.textureDirty || !this.data) return `unavailable`;
      let [o] = this.getTextureContentDimensions(t, r), [s, c] = this.getTextureDimensions(t, r), l = s * c * 4, u = this.uploadBuffer.subarray(0, l);
      this.copyTilePixels(t, u, o, s, c, r), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.texture), e.pixelStorei(e.UNPACK_ALIGNMENT, 4);
      let d = e.getParameter(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
      e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1);
      let f = new Uint32Array(u.buffer, u.byteOffset, u.byteLength / 4),
        p = s,
        m = c;
      for (let t = 0; e.texImage2D(e.TEXTURE_2D, t, e.RGBA, p, m, 0, e.RGBA, e.UNSIGNED_BYTE, u.subarray(0, p * m * 4)), p !== 1 || m !== 1; t++) {
        let e = Math.max(1, p / 2),
          t = Math.max(1, m / 2);
        for (let n = 0; n < t; n++)
          for (let t = 0; t < e; t++) f[n * e + t] = f[n * 2 * p + t * 2];
        p = e, m = t
      }
      return e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, d), t.textureDirty = !1, `uploaded`
    }
    setTileMinification(e, t, n) {
      t.minificationEnabled !== n && (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n ? e.NEAREST_MIPMAP_NEAREST : e.NEAREST), t.minificationEnabled = n)
    }
    getTextureContentDimensions(e, t = 1) {
      return [Math.max(1, Math.ceil(e.width / t)), Math.max(1, Math.ceil(e.height / t))]
    }
    getTextureDimensions(e, t = 1) {
      let [n, r] = this.getTextureContentDimensions(e, t);
      return [W(n), W(r)]
    }
    copyTilePixels(e, t, n, r, i, a) {
      if (!this.data) return;
      let o = this.data.pixels;
      for (let s = 0; s < i; s++) {
        let i = Math.min(s * a, e.height - 1),
          c = ((e.y + i) * o.width + e.x) * 4,
          l = c + e.width * 4,
          u = s * r * 4;
        if (n === e.width) t.set(o.data.subarray(c, l), u);
        else
          for (let r = 0; r < n; r++) {
            let n = c + Math.min(r * a, e.width - 1) * 4,
              i = u + r * 4;
            t[i] = o.data[n], t[i + 1] = o.data[n + 1], t[i + 2] = o.data[n + 2], t[i + 3] = o.data[n + 3]
          }
        if (this.applyStatusHighlightsToRow(e, s, t, u, n, a), r === n) continue;
        let d = u + (n - 1) * 4;
        for (let e = n; e < r; e++) t.set(t.subarray(d, d + 4), u + e * 4)
      }
    }
    applyStatusHighlightsToRow(e, t, n, r, i, a) {
      var o, s;
      let c = (o = this.data) == null ? void 0 : o.statusHighlights,
        l = (s = this.data) == null ? void 0 : s.pixels;
      if (!c || !l) return;
      let {
        progress: u,
        incorrect: d,
        unpainted: f
      } = c;
      if (!d && !f || u.width !== l.width || u.height !== l.height) return;
      let p = Math.min(t * a, e.height - 1),
        m = Math.min((t + 1) * a, e.height);
      for (let t = 0; t < i; t++) {
        let i = t * a,
          o = Math.min((t + 1) * a, e.width),
          s;
        pixels: for (let t = p; t < m; t++)
          for (let n = i; n < o; n++) {
            let r = this.getProgressStatus(u, e.x + n, e.y + t),
              i = d && r === 3 ? 254 : f && r === 2 ? 253 : void 0;
            if (i === void 0 || s !== void 0 && s !== i) {
              s = void 0;
              break pixels
            }
            s = i
          }
        s !== void 0 && (n[r + t * 4 + 3] = s)
      }
    }
    getProgressStatus(e, t, n) {
      let r = Math.floor(e.originX / e.tileSize),
        i = Math.floor(e.originY / e.tileSize),
        a = Math.floor((e.originX + e.width - 1) / e.tileSize) - r + 1,
        o = e.originX + t,
        s = e.originY + n,
        l = Math.floor(o / e.tileSize),
        u = Math.floor(s / e.tileSize),
        d = (u - i) * a + (l - r),
        f = d * 2,
        p = d * 4;
      if (d < 0 || f + 1 >= e.tileCoordinates.length || p + 3 >= e.tileBounds.length || e.tileCoordinates[f] !== l || e.tileCoordinates[f + 1] !== u) return 0;
      let m = o - (l * e.tileSize + e.tileBounds[p]),
        h = s - (u * e.tileSize + e.tileBounds[p + 1]);
      return c(e.statuses, e.tileStatusOffsets[d], h * e.tileBounds[p + 2] + m)
    }
    markSourceTilesDirty() {
      for (let e of this.sourceTiles) e.textureDirty = !0
    }
    markProgressTilesDirty(e, t) {
      for (let n of t) {
        let t = n * 2,
          r = n * 4;
        if (t + 1 >= e.tileCoordinates.length || r + 3 >= e.tileBounds.length) continue;
        let i = e.tileCoordinates[t] * e.tileSize + e.tileBounds[r] - e.originX,
          a = e.tileCoordinates[t + 1] * e.tileSize + e.tileBounds[r + 1] - e.originY,
          o = i + e.tileBounds[r + 2],
          s = a + e.tileBounds[r + 3];
        for (let e of this.sourceTiles) e.x + e.width > i && e.x < o && e.y + e.height > a && e.y < s && (e.textureDirty = !0)
      }
    }
    getVisibleTextureDownsample(e) {
      for (let t = 1; t <= E; t *= 2)
        if (e.reduce((e, n) => {
            let [r, i] = this.getTextureDimensions(n, t);
            return e + G(r, i)
          }, 0) <= this.textureBudgetBytes || t === E) return t;
      return E
    }
    getVisibleSourceTiles(e) {
      let t = this.translatedMatrix,
        n = [];
      for (let r of this.sourceTiles) {
        let i = 1 / 0,
          a = 1 / 0,
          o = -1 / 0,
          s = -1 / 0;
        for (let n of [r.topLeft, r.topRight, r.bottomRight, r.bottomLeft]) {
          let r = n[0] * e,
            c = n[1] * e,
            l = t[0] * r + t[4] * c + t[12],
            u = t[1] * r + t[5] * c + t[13],
            d = t[3] * r + t[7] * c + t[15];
          if (!Number.isFinite(d) || d <= 0) continue;
          let f = l / d,
            p = u / d;
          i = Math.min(i, f), a = Math.min(a, p), o = Math.max(o, f), s = Math.max(s, p)
        }
        if (o < -1 || i > 1 || s < -1 || a > 1) continue;
        let c = (i + o) / 2,
          l = (a + s) / 2;
        n.push({
          tile: r,
          distance: c * c + l * l
        })
      }
      return n.sort((e, t) => e.distance - t.distance), n.map(({
        tile: e
      }) => e)
    }
    releaseTileTexture(e, t) {
      var n;
      let r = t.texture;
      r && !((n = this.textureCache) != null && n.delete(t)) && e.deleteTexture(r), t.texture = void 0, t.textureDirty = !0, t.textureDownsample = void 0, t.minificationEnabled = void 0
    }
    releaseTiles(e) {
      for (let t of this.sourceTiles) this.releaseTileTexture(e, t)
    }
    bindQuadVertexAttributes(e) {
      e.bindBuffer(e.ARRAY_BUFFER, this.quadBuffer ?? null), !(this.unitPositionLocation < 0) && (e.enableVertexAttribArray(this.unitPositionLocation), e.vertexAttribPointer(this.unitPositionLocation, 2, e.FLOAT, !1, 0, 0))
    }
    disableQuadVertexAttributes(e) {
      this.unitPositionLocation >= 0 && e.disableVertexAttribArray(this.unitPositionLocation)
    }
    getPhysicalPixelsPerSource() {
      let e = 2 ** (this.map.getZoom() - this.logicalTileZoom),
        t = this.map.getCanvas();
      return e * (this.map.transform.width > 0 ? t.width / this.map.transform.width : 1)
    }
    getRasterAlignmentOffset(e) {
      if (this.map.isMoving()) return [0, 0];
      let {
        bearingInRadians: t,
        center: n,
        height: r,
        width: i
      } = this.map.transform, a = T.default.MercatorCoordinate.fromLngLat(n), o = a.x * e, s = a.y * e, c = i % 2 / 2, l = r % 2 / 2, u = Math.cos(t), d = Math.sin(-t), f = o - Math.round(o) + u * c + d * l, p = s - Math.round(s) + u * l + d * c;
      return [f > .5 ? f - 1 : f, p > .5 ? p - 1 : p]
    }
    translateMatrix(e, t, n) {
      this.translatedMatrix.set(e), this.translatedMatrix[12] = e[0] * t + e[4] * n + e[12], this.translatedMatrix[13] = e[1] * t + e[5] * n + e[13], this.translatedMatrix[14] = e[2] * t + e[6] * n + e[14], this.translatedMatrix[15] = e[3] * t + e[7] * n + e[15]
    }
  };

function R(e, t) {
  return e.every((e, n) => {
    var r, i;
    return e[0] === ((r = t[n]) == null ? void 0 : r[0]) && e[1] === ((i = t[n]) == null ? void 0 : i[1])
  })
}

function z(e) {
  let t = e.getParameter(e.VERSION);
  return typeof t == `string` && t.startsWith(`WebGL 2.0`)
}

function B(e) {
  if (z(e)) return {
    create: () => e.createVertexArray(),
    bind: t => e.bindVertexArray(t),
    delete: t => e.deleteVertexArray(t)
  };
  let t = e.getExtension(`OES_vertex_array_object`);
  if (t) return {
    create: () => t.createVertexArrayOES(),
    bind: e => t.bindVertexArrayOES(e),
    delete: e => t.deleteVertexArrayOES(e)
  }
}

function V(e) {
  var t;
  return (((t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)) == null ? void 0 : t.precision) ?? 0) > 0
}

function H(e) {
  return e === `center` ? 1 : e === `diagonal` ? 2 : 0
}

function U(e) {
  e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
}

function W(e) {
  return 2 ** Math.ceil(Math.log2(e))
}

function G(e, t) {
  let n = 0;
  for (;;) {
    if (n += e * t * 4, e === 1 && t === 1) return n;
    e = Math.max(1, Math.floor(e / 2)), t = Math.max(1, Math.floor(t / 2))
  }
}

function K(e, t, n) {
  let r = q(e, e.VERTEX_SHADER, t),
    i = q(e, e.FRAGMENT_SHADER, n),
    a = e.createProgram();
  return !r || !i || !a ? (r && e.deleteShader(r), i && e.deleteShader(i), a && e.deleteProgram(a), null) : (e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), e.deleteShader(r), e.deleteShader(i), e.getProgramParameter(a, e.LINK_STATUS) ? a : (console.error(`Build overlay shader link error:`, e.getProgramInfoLog(a)), e.deleteProgram(a), null))
}

function q(e, t, n) {
  let r = e.createShader(t);
  return r ? (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (console.error(`Build overlay shader compile error:`, e.getShaderInfoLog(r)), e.deleteShader(r), null)) : null
}
export {
  y as a, C as c, S as i, L as n, v as o, b as r, w as s, k as t
};