import {
  At as e,
  C as t,
  Ct as n,
  K as r,
  T as i,
  a,
  cn as o,
  en as s,
  et as c,
  o as l,
  pt as u,
  rt as d,
  tn as f
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
var p = `#000000`,
  m = `#ed1c24`,
  h = `#600018`,
  g = `#ffffff`,
  _ = `#f9dd3b`,
  v = `#ff7f27`,
  y = `#f38da9`,
  b = `#87ff5e`,
  x = `#13e67b`,
  S = {
    rows: [`......aaaa......`, `....aabbbbaa....`, `...acbbbbbdda...`, `..acbbbdddddea..`, `..acbbbdddeeea..`, `.acbbddddeeeeea.`, `.aedbbbddeeeeea.`, `.aeddddbbeeeeea.`, `.aeeddbbcceeeea.`, `..aeeecccceeea..`, `..aeeeecccccea..`, `...aeeeecccca...`, `....aaeeccaa....`, `......aaaa......`],
    palette: {
      a: p,
      b: `#4ad95b`,
      c: `#45cc55`,
      d: `#3172e7`,
      e: `#1c61e7`
    }
  },
  C = {
    rows: [`..kkk...kkk..`, `.krrrk.krrrk.`, `krwrrrkrrrrrk`, `krrrrrrrrrrrk`, `krrrrrrrrrrrk`, `kdrrrrrrrrrdk`, `.kdrrrrrrrdk.`, `..kdrrrrrdk..`, `...kdrrrdk...`, `....kdrdk....`, `.....kdk.....`, `......k......`],
    palette: {
      k: p,
      r: m,
      d: h,
      w: g
    }
  },
  w = [{
    art: {
      rows: [`..kkkk..`, `.kyyyyk.`, `kykyykyk`, `kyyyyyyk`, `kykyykyk`, `kyykkyyk`, `.kyyyyk.`, `..kkkk..`],
      palette: {
        k: p,
        y: _
      }
    },
    x: 7,
    y: 6
  }, {
    art: {
      rows: [`..kkkk..`, `.krrwrk.`, `krwrrrrk`, `krrrrwrk`, `kkkkkkkk`, `..kwwk..`, `..kwwk..`, `..kkkk..`],
      palette: {
        k: p,
        r: m,
        w: g
      }
    },
    x: 9,
    y: 35
  }, {
    art: {
      rows: [`.kk.kk.`, `kwrkrrk`, `krrrrrk`, `.krrrk.`, `..krk..`, `...k...`],
      palette: {
        k: p,
        r: m,
        w: g
      }
    },
    x: 33,
    y: 33
  }, {
    art: {
      rows: [`.p.p.`, `ppopp`, `.ppp.`, `..g..`, `gg.gg`, `.ggg.`, `..g..`],
      palette: {
        p: y,
        o: v,
        g: x
      }
    },
    x: 33,
    y: 9
  }, {
    art: {
      rows: [`..l..`, `l.l..`, `l.l.l`, `lll.l`, `..lll`, `..l..`, `..l..`],
      palette: {
        l: b
      }
    },
    x: 70,
    y: 8
  }];

function T(e) {
  let t = [];
  return e.rows.forEach((n, r) => {
    for (let i = 0; i < n.length; i++) {
      let a = e.palette[n[i]];
      a && t.push({
        x: i,
        y: r,
        color: a
      })
    }
  }), t
}

function E(e) {
  return T(e).sort((e, t) => e.x + e.y - (t.x + t.y) || e.y - t.y)
}

function D(e) {
  var t;
  return ((t = e.rows[0]) == null ? void 0 : t.length) ?? 0
}

function O(e) {
  return e.rows.length
}
var k = d(`<rect width="1" height="1"></rect>`),
  A = d(`<g></g>`);

function j(e, t) {
  f(t, !0);
  let l = a(t, `x`, 3, 0),
    d = a(t, `y`, 3, 0),
    p = a(t, `count`, 19, () => t.pixels.length);
  var m = A();
  r(m, 21, () => t.pixels.slice(0, p()), e => `${e.x}:${e.y}`, (e, t) => {
    var r = k();
    n(() => {
      i(r, `x`, u(t).x), i(r, `y`, u(t).y), i(r, `fill`, u(t).color)
    }), c(e, r)
  }), o(m), n(() => i(m, `transform`, `translate(${l()??``} ${d()??``})`)), c(e, m), s()
}
var M = new Set([`$$slots`, `$$events`, `$$legacy`]),
  N = d(`<svg><!></svg>`);

function P(n, r) {
  f(r, !0);
  let i = l(r, M),
    a = T(S);
  var u = N();
  t(u, (e, t) => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 ${e??``} ${t??``}`,
    "shape-rendering": `crispEdges`,
    "aria-hidden": `true`,
    ...i
  }), [() => D(S), () => O(S)]), j(e(u), {
    get pixels() {
      return a
    }
  }), o(u), c(n, u), s()
}
export {
  w as a, T as c, C as i, j as n, D as o, S as r, E as s, P as t
};