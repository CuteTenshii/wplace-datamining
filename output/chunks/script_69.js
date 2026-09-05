import {
  an as e,
  dn as t
} from "./CX37corp.js";
import {
  t as n
} from "./DWEUdKEq.js";
import {
  t as r
} from "./B7ahujnx.js";
import {
  n as i,
  o as a,
  r as o
} from "./DoTvbvHP.js";
import {
  i as s
} from "./D70MKFm6.js";
var c = 4,
  l = 2,
  u = 65535;

function d(e, t, n, r, i) {
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(r) || n <= 0 || r <= 0 || n * r > (2 ** 53 - 1) / 4) throw Error(`Overlay progress buffers must have matching positive dimensions.`);
  let a = n * r * 4;
  if (e.length !== a || t.length !== a) throw Error(`Overlay progress buffers must have matching positive dimensions.`);
  if (!Number.isSafeInteger(i.originX) || !Number.isSafeInteger(i.originY) || !Number.isSafeInteger(i.tileSize) || i.tileSize <= 0 || i.tileSize > u || !Number.isSafeInteger(i.originX + n - 1) || !Number.isSafeInteger(i.originY + r - 1)) throw Error(`Overlay progress geometry is invalid.`)
}

function f(e) {
  if (e < -2147483648 || e > 2147483647) throw Error(`Overlay progress tile coordinates exceed the supported canvas range.`)
}

function p(e, t, n, r) {
  let i = t + Math.floor(n / c),
    a = n % c * l;
  e[i] |= r << a
}

function m(e, t, n) {
  let r = t + Math.floor(n / c),
    i = n % c * l;
  return e[r] >> i & 3
}

function* h(e, t, n, r, i, a) {
  d(e, t, n, r, i);
  let {
    originX: o,
    originY: s,
    tileSize: l
  } = i, u = Math.floor(o / l), m = Math.floor(s / l), h = Math.floor((o + n - 1) / l), _ = Math.floor((s + r - 1) / l);
  f(u), f(m), f(h), f(_);
  let v = (h - u + 1) * (_ - m + 1),
    y = new Int32Array(v * 2),
    b = new Uint16Array(v * 4),
    x = new Uint32Array(v * 4),
    S = new Uint32Array(v + 1),
    C = 0,
    w = 0;
  for (let e = m; e <= _; e++)
    for (let t = u; t <= h; t++) {
      let i = Math.max(o, t * l),
        a = Math.max(s, e * l),
        u = Math.min(o + n, (t + 1) * l),
        d = Math.min(s + r, (e + 1) * l),
        f = C * 4,
        p = u - i,
        m = d - a;
      y[C * 2] = t, y[C * 2 + 1] = e, b[f] = i - t * l, b[f + 1] = a - e * l, b[f + 2] = p, b[f + 3] = m, S[C] = w, w += Math.ceil(p * m / c), C += 1
    }
  S[v] = w;
  let T = new Uint8Array(w),
    E = 0,
    D = 0,
    O = 0,
    k = 0,
    A = g(a, v);
  for (let r of A) {
    C = r;
    let i = C * 2,
      a = C * 4,
      c = C * 4,
      u = y[i],
      d = y[i + 1],
      f = b[a],
      m = b[a + 1],
      h = b[a + 2],
      g = b[a + 3],
      _ = u * l + f - o,
      v = d * l + m - s,
      w = 0;
    for (let r = 0; r < g; r++) {
      for (let i = 0; i < h; i++) {
        let a = ((v + r) * n + _ + i) * 4,
          o = 0;
        e[a + 3] >= 16 && (x[c + 0] += 1, E += 1, t[a + 3] < 16 ? (o = 2, x[c + 2] += 1, O += 1) : e[a] === t[a] && e[a + 1] === t[a + 1] && e[a + 2] === t[a + 2] ? (o = 1, x[c + 1] += 1, D += 1) : (o = 3, x[c + 3] += 1, k += 1)), p(T, S[C], w, o), w += 1
      }
      yield v + r
    }
  }
  return {
    total: E,
    completed: D,
    unpainted: O,
    mismatched: k,
    originX: o,
    originY: s,
    width: n,
    height: r,
    tileSize: l,
    tileCoordinates: y,
    tileBounds: b,
    tileCounts: x,
    tileStatusOffsets: S,
    statuses: T
  }
}

function g(e, t) {
  if (!(e != null && e.length)) return Uint32Array.from({
    length: t
  }, (e, t) => t);
  let n = new Uint8Array(t),
    r = new Uint32Array(t),
    i = 0;
  for (let a of e) {
    if (a >= t) throw Error(`Overlay progress tile index is out of bounds.`);
    n[a] || (n[a] = 1, r[i++] = a)
  }
  for (let e = 0; e < t; e += 1) n[e] || (r[i++] = e);
  return r
}

function _(e, t, n, r, i, a) {
  let o = h(e, t, n, r, i, a);
  for (;;) {
    let e = o.next();
    if (e.done) return e.value
  }
}

function v(e) {
  let t = e.tileCoordinates.length / 2;
  if (!Number.isInteger(t) || e.tileBounds.length !== t * 4 || e.tileCounts.length !== t * 4 || e.tileStatusOffsets.length !== t + 1 || e.tileStatusOffsets[t] !== e.statuses.length) throw Error(`Overlay progress result layout is invalid.`);
  let n = 0;
  for (let r = 0; r < t; r++) {
    let t = r * 4,
      i = e.tileBounds[t + 2],
      a = e.tileBounds[t + 3],
      o = e.tileStatusOffsets[r],
      s = e.tileStatusOffsets[r + 1];
    if (o !== n || s - o !== Math.ceil(i * a / c)) throw Error(`Overlay progress result layout is invalid.`);
    n = s
  }
}

function y(e, t) {
  let n = new Uint8Array(t),
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    if (a >= t) throw Error(`Overlay progress tile index is out of bounds.`);
    n[a] === 0 && (n[a] = 1, r += 1)
  }
  let i = new Uint32Array(r),
    a = 0;
  for (let e = 0; e < n.length; e++) n[e] !== 0 && (i[a] = e, a += 1);
  return i
}

function* b(e, t, n, r) {
  d(t, n, e.width, e.height, e), v(e);
  let i = y(r, e.tileCoordinates.length / 2);
  for (let r = 0; r < i.length; r++) {
    let a = i[r],
      o = a * 2,
      s = a * 4,
      c = a * 4,
      l = e.tileCoordinates[o],
      u = e.tileCoordinates[o + 1],
      d = e.tileBounds[s],
      f = e.tileBounds[s + 1],
      m = e.tileBounds[s + 2],
      h = e.tileBounds[s + 3],
      g = l * e.tileSize + d - e.originX,
      _ = u * e.tileSize + f - e.originY,
      v = e.tileStatusOffsets[a],
      y = e.tileStatusOffsets[a + 1];
    e.total -= e.tileCounts[c + 0], e.completed -= e.tileCounts[c + 1], e.unpainted -= e.tileCounts[c + 2], e.mismatched -= e.tileCounts[c + 3], e.tileCounts.fill(0, c, c + 4), e.statuses.fill(0, v, y);
    let b = 0;
    for (let r = 0; r < h; r++) {
      for (let i = 0; i < m; i++) {
        let a = ((_ + r) * e.width + g + i) * 4,
          o = 0;
        t[a + 3] >= 16 && (e.tileCounts[c + 0] += 1, e.total += 1, n[a + 3] < 16 ? (o = 2, e.tileCounts[c + 2] += 1, e.unpainted += 1) : t[a] === n[a] && t[a + 1] === n[a + 1] && t[a + 2] === n[a + 2] ? (o = 1, e.tileCounts[c + 1] += 1, e.completed += 1) : (o = 3, e.tileCounts[c + 3] += 1, e.mismatched += 1)), p(e.statuses, v, b, o), b += 1
      }
      yield _ + r
    }
  }
  return e
}

function x(e, t, n, r) {
  let i = b(e, t, n, r);
  for (;;) {
    let e = i.next();
    if (e.done) return e.value
  }
}
var S = t(n(), 1),
  C = 1024,
  w = 1,
  T = 3,
  E = `template-build-overlay-layer`,
  D = 253,
  O = 254,
  k = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
  A = `
float distance_to_segment(vec2 point, vec2 start, vec2 end) {
  vec2 segment = end - start;
  float projection = clamp(
    dot(point - start, segment) / max(dot(segment, segment), 0.0001),
    0.0,
    1.0
  );
  return length(point - (start + projection * segment));
}

vec4 status_marker_color(float status, vec2 source_coordinate, float pixels_per_source) {
  vec2 local = fract(source_coordinate + vec2(0.00001));
  float distance_to_mark;
  vec3 glow_color;
  vec3 core_color;

  if (status > 1.5) {
    distance_to_mark = min(
      distance_to_segment(local, vec2(0.2, 0.2), vec2(0.8, 0.8)),
      distance_to_segment(local, vec2(0.8, 0.2), vec2(0.2, 0.8))
    );
    glow_color = vec3(1.0, 0.08, 0.17);
    core_color = vec3(1.0, 0.86, 0.89);
  } else {
    distance_to_mark = min(
      distance_to_segment(local, vec2(0.28, 0.24), vec2(0.5, 0.16)),
      distance_to_segment(local, vec2(0.5, 0.16), vec2(0.72, 0.24))
    );
    distance_to_mark = min(
      distance_to_mark,
      distance_to_segment(local, vec2(0.72, 0.24), vec2(0.72, 0.43))
    );
    distance_to_mark = min(
      distance_to_mark,
      distance_to_segment(local, vec2(0.72, 0.43), vec2(0.5, 0.58))
    );
    distance_to_mark = min(
      distance_to_mark,
      distance_to_segment(local, vec2(0.5, 0.58), vec2(0.5, 0.67))
    );
    distance_to_mark = min(distance_to_mark, distance(local, vec2(0.5, 0.82)));
    glow_color = vec3(0.62, 0.69, 0.8);
    core_color = vec3(0.98, 0.99, 1.0);
  }

  float core_width = clamp(1.15 / max(pixels_per_source, 1.0), 0.06, 0.2);
  float glow_width = clamp(3.6 / max(pixels_per_source, 1.0), 0.17, 0.42);
  float core = 1.0 - step(core_width, distance_to_mark);
  float marker = 1.0 - step(glow_width, distance_to_mark);
  vec3 marker_color = glow_color;
  marker_color = mix(marker_color, core_color, core);
  return vec4(marker_color, marker);
}
`,
  j = `
  if (u_status_highlights_enabled) {
    float encoded_status = floor(color.a * 255.0 + 0.5);
    if (encoded_status == ${O}.0 ||
        encoded_status == ${D}.0) {
      float status = encoded_status == ${O}.0 ? 2.0 : 1.0;
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
uniform int u_mode;
uniform float u_opacity;
uniform float u_pixels_per_source;
uniform float u_pixel_mode_resolution;
uniform bool u_pixel_mode_detail_supported;
uniform bool u_highlight_enabled;
uniform vec4 u_highlight_color;
uniform bool u_status_highlights_enabled;
varying highp vec2 v_source_coordinate;

${A}

void main() {
  vec2 texture_content_coordinate = v_source_coordinate * (u_texture_content_size / u_source_size);
  if (u_status_highlights_enabled) {
    vec2 source_pixel = clamp(floor(v_source_coordinate), vec2(0.0), u_source_size - vec2(1.0));
    texture_content_coordinate = floor(source_pixel * (u_texture_content_size / u_source_size)) + vec2(0.5);
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
${o}

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
uniform int u_mode;
uniform float u_opacity;
uniform float u_pixels_per_source;
uniform float u_pixel_mode_resolution;
uniform bool u_pixel_mode_detail_supported;
uniform bool u_highlight_enabled;
uniform vec4 u_highlight_color;
uniform bool u_status_highlights_enabled;
in highp vec2 v_source_coordinate;
out vec4 fragment_color;

${A}

void main() {
  vec2 texture_content_coordinate = v_source_coordinate * (u_texture_content_size / u_source_size);
  if (u_status_highlights_enabled) {
    vec2 source_pixel = clamp(floor(v_source_coordinate), vec2(0.0), u_source_size - vec2(1.0));
    texture_content_coordinate = floor(source_pixel * (u_texture_content_size / u_source_size)) + vec2(0.5);
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
${o}

  color.a *= u_opacity;
  color.rgb *= color.a;
  fragment_color = color;
}
`,
  L = class {
    constructor(t, n, r, i, a = s, o) {
      e(this, `id`, void 0), e(this, `map`, void 0), e(this, `logicalTileZoom`, void 0), e(this, `beforeLayerId`, void 0), e(this, `textureBudgetBytes`, void 0), e(this, `onRepeatedRenderFailure`, void 0), e(this, `type`, `custom`), e(this, `renderingMode`, `2d`), e(this, `gl`, void 0), e(this, `program`, void 0), e(this, `quadBuffer`, void 0), e(this, `vertexArrayApi`, void 0), e(this, `vertexArray`, void 0), e(this, `unitPositionLocation`, -1), e(this, `uniforms`, void 0), e(this, `data`, void 0), e(this, `sourceTiles`, []), e(this, `textureCache`, void 0), e(this, `webgl2`, !1), e(this, `pixelModeDetailSupported`, !1), e(this, `origin`, [0, 0]), e(this, `translatedMatrix`, new Float32Array(16)), e(this, `uploadBuffer`, new Uint8Array(C * C * 4)), e(this, `destroyed`, !1), e(this, `contextLost`, !1), e(this, `consecutiveRenderFailures`, 0), e(this, `renderDisabled`, !1), e(this, `handleStyleLoad`, () => {
        !this.destroyed && this.data && !this.map.getLayer(this.id) && this.map.addLayer(this, this.beforeLayerId && this.map.getLayer(this.beforeLayerId) ? this.beforeLayerId : void 0)
      }), e(this, `handleContextLost`, () => {
        this.destroyed || (this.contextLost = !0, this.discardGpuResources())
      }), e(this, `handleContextRestored`, () => {
        this.destroyed || (this.contextLost = !1, this.map.getLayer(this.id) && this.gl && this.onAdd(this.map, this.gl))
      }), this.id = t, this.map = n, this.logicalTileZoom = r, this.beforeLayerId = i, this.textureBudgetBytes = a, this.onRepeatedRenderFailure = o, this.map.on(`style.load`, this.handleStyleLoad), this.map.on(`webglcontextlost`, this.handleContextLost), this.map.on(`webglcontextrestored`, this.handleContextRestored)
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
      var n, i;
      if (this.contextLost = !1, this.consecutiveRenderFailures = 0, this.renderDisabled = !1, this.gl = t, this.webgl2 = z(t), (n = this.textureCache) == null || n.clear(), this.textureCache = new r({
          maxBytes: this.textureBudgetBytes,
          onEvict: (e, n) => {
            t.deleteTexture(n), e.texture === n && (e.texture = void 0, e.textureDirty = !0, e.textureDownsample = void 0, e.minificationEnabled = void 0)
          }
        }), this.vertexArrayApi = B(t), this.pixelModeDetailSupported = V(t), this.program = K(t, this.webgl2 ? F : N, this.webgl2 ? I : P) ?? void 0, !this.program) throw Error(`Unable to initialize the build overlay renderer.`);
      if (this.unitPositionLocation = t.getAttribLocation(this.program, `a_unit_position`), this.quadBuffer = t.createBuffer() ?? void 0, !this.quadBuffer) throw t.deleteProgram(this.program), this.program = void 0, Error(`Unable to initialize the build overlay geometry.`);
      t.bindBuffer(t.ARRAY_BUFFER, this.quadBuffer), t.bufferData(t.ARRAY_BUFFER, k, t.STATIC_DRAW), this.vertexArray = ((i = this.vertexArrayApi) == null ? void 0 : i.create()) ?? void 0, this.vertexArrayApi && this.vertexArray && this.vertexArrayApi.bind(this.vertexArray), this.bindQuadVertexAttributes(t), this.vertexArrayApi && this.vertexArray ? this.vertexArrayApi.bind(null) : this.disableQuadVertexAttributes(t), t.bindBuffer(t.ARRAY_BUFFER, null), this.uniforms = {
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
        mode: t.getUniformLocation(this.program, `u_mode`),
        opacity: t.getUniformLocation(this.program, `u_opacity`),
        pixelsPerSource: t.getUniformLocation(this.program, `u_pixels_per_source`),
        pixelModeResolution: t.getUniformLocation(this.program, `u_pixel_mode_resolution`),
        pixelModeDetailSupported: t.getUniformLocation(this.program, `u_pixel_mode_detail_supported`),
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
        if (this.consecutiveRenderFailures += 1, this.restoreSharedGlStateAfterFailure(e), this.consecutiveRenderFailures < T) {
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
        worldSize: r
      } = this.map.transform, [o, s] = this.getRasterAlignmentOffset(r);
      this.translateMatrix(t, this.origin[0] * r + o, this.origin[1] * r + s), e.uniformMatrix4fv(this.uniforms.matrix, !1, this.translatedMatrix), e.uniform1f(this.uniforms.worldSize, r), e.uniform1i(this.uniforms.texture, 0), e.uniform1i(this.uniforms.mode, H(n.mode)), e.uniform1f(this.uniforms.opacity, n.opacity), e.uniform1f(this.uniforms.pixelsPerSource, this.getPhysicalPixelsPerSource()), e.uniform1f(this.uniforms.pixelModeResolution, a(n.mode, i)), e.uniform1i(this.uniforms.pixelModeDetailSupported, +!!this.pixelModeDetailSupported), e.uniform1i(this.uniforms.highlightEnabled, +!!n.highlightColor);
      let c = !!(n.statusHighlights && (n.statusHighlights.incorrect || n.statusHighlights.unpainted));
      e.uniform1i(this.uniforms.statusHighlightsEnabled, +!!c), n.highlightColor && e.uniform4f(this.uniforms.highlightColor, n.highlightColor.r / 255, n.highlightColor.g / 255, n.highlightColor.b / 255, n.highlightColor.a / 255), this.vertexArrayApi && this.vertexArray ? this.vertexArrayApi.bind(this.vertexArray) : this.bindQuadVertexAttributes(e);
      let l = this.getVisibleSourceTiles(r),
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
        let r = this.prepareTile(e, t, f < w, u);
        if (r === `uploaded` && f++, r === `deferred` && (p = !0), !t.texture) continue;
        e.uniform2f(this.uniforms.topLeft, t.topLeft[0], t.topLeft[1]), e.uniform2f(this.uniforms.topRight, t.topRight[0], t.topRight[1]), e.uniform2f(this.uniforms.bottomRight, t.bottomRight[0], t.bottomRight[1]), e.uniform2f(this.uniforms.bottomLeft, t.bottomLeft[0], t.bottomLeft[1]), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.texture), this.setTileMinification(e, t, !n.highlightColor && !c), e.uniform2f(this.uniforms.sourceSize, t.width, t.height);
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
        let n = S.default.MercatorCoordinate.fromLngLat({
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
      for (let t = 0; t < e.pixels.height; t += C)
        for (let n = 0; n < e.pixels.width; n += C) {
          let r = Math.min(C, e.pixels.width - n),
            i = Math.min(C, e.pixels.height - t),
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
      let [o, s] = this.getTextureContentDimensions(t, r), [c, l] = this.getTextureDimensions(t, r), u = c * l * 4, d = this.uploadBuffer.subarray(0, u);
      this.copyTilePixels(t, d, o, s, c, l), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.texture), e.pixelStorei(e.UNPACK_ALIGNMENT, 4);
      let f = e.getParameter(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
      return e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, c, l, 0, e.RGBA, e.UNSIGNED_BYTE, d), e.generateMipmap(e.TEXTURE_2D), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, f), t.textureDirty = !1, `uploaded`
    }
    setTileMinification(e, t, n) {
      t.minificationEnabled !== n && (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n ? e.NEAREST_MIPMAP_NEAREST : e.NEAREST), t.minificationEnabled = n)
    }
    getTextureContentDimensions(e, t = 1) {
      return [Math.max(1, Math.ceil(e.width / t)), Math.max(1, Math.ceil(e.height / t))]
    }
    getTextureDimensions(e, t = 1) {
      let [n, r] = this.getTextureContentDimensions(e, t);
      return this.webgl2 ? [n, r] : [W(n), W(r)]
    }
    copyTilePixels(e, t, n, r, i, a) {
      if (!this.data) return;
      let o = this.data.pixels;
      for (let s = 0; s < a; s++) {
        let a = Math.min(s, r - 1),
          c = Math.min(Math.floor(a * e.height / r), e.height - 1),
          l = ((e.y + c) * o.width + e.x) * 4,
          u = l + e.width * 4,
          d = s * i * 4;
        if (n === e.width) t.set(o.data.subarray(l, u), d);
        else
          for (let r = 0; r < n; r++) {
            let i = l + Math.min(Math.floor(r * e.width / n), e.width - 1) * 4,
              a = d + r * 4;
            t[a] = o.data[i], t[a + 1] = o.data[i + 1], t[a + 2] = o.data[i + 2], t[a + 3] = o.data[i + 3]
          }
        if (this.applyStatusHighlightsToRow(e, a, t, d, n, r), i === n) continue;
        let f = d + (n - 1) * 4;
        for (let e = n; e < i; e++) t.set(t.subarray(f, f + 4), d + e * 4)
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
      let p = Math.ceil(t * e.height / a),
        m = Math.ceil((t + 1) * e.height / a);
      for (let t = 0; t < i; t++) {
        let a = Math.ceil(t * e.width / i),
          o = Math.ceil((t + 1) * e.width / i),
          s;
        pixels: for (let t = p; t < m; t++)
          for (let n = a; n < o; n++) {
            let r = this.getProgressStatus(u, e.x + n, e.y + t),
              i = d && r === 3 ? O : f && r === 2 ? D : void 0;
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
        c = Math.floor(o / e.tileSize),
        l = Math.floor(s / e.tileSize),
        u = (l - i) * a + (c - r),
        d = u * 2,
        f = u * 4;
      if (u < 0 || d + 1 >= e.tileCoordinates.length || f + 3 >= e.tileBounds.length || e.tileCoordinates[d] !== c || e.tileCoordinates[d + 1] !== l) return 0;
      let p = o - (c * e.tileSize + e.tileBounds[f]),
        h = s - (l * e.tileSize + e.tileBounds[f + 1]);
      return m(e.statuses, e.tileStatusOffsets[u], h * e.tileBounds[f + 2] + p)
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
      for (let t = 1; t <= C; t *= 2)
        if (e.reduce((e, n) => {
            let [r, i] = this.getTextureDimensions(n, t);
            return e + G(r, i)
          }, 0) <= this.textureBudgetBytes || t === C) return t;
      return C
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
      } = this.map.transform, a = S.default.MercatorCoordinate.fromLngLat(n), o = a.x * e, s = a.y * e, c = i % 2 / 2, l = r % 2 / 2, u = Math.cos(t), d = Math.sin(-t), f = o - Math.round(o) + u * c + d * l, p = s - Math.round(s) + u * l + d * c;
      return [f - Math.round(f), p - Math.round(p)]
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
  x as a, m as i, L as n, _ as r, E as t
};