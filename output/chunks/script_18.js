import {
  a as c
} from "./o88EtIUh.js";
const s = /\{([A-Za-z_$][\w$]*)\}/g,
  o = new Map,
  f = new Proxy(Object.create(null), {
    get(n, e) {
      if (typeof e != "string") return;
      let t = o.get(e);
      return t || (t = (a = {}) => g(e, a), o.set(e, t)), t
    }
  });

function g(n, e) {
  const t = c()[n];
  if (typeof t != "string") throw new Error(`Unknown message "${n}"`);
  return t.replace(s, (a, r) => String(e[r]))
}
export {
  f as m
};