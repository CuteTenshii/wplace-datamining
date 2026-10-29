import "./C0zwTQsw.js";
var e = {
  local: t(localStorage),
  session: t(sessionStorage)
};

function t(e) {
  return r(e, e => e)
}
var n = void 0;

function r(e, t) {
  return {
    get(r = ``) {
      try {
        return (e == null ? void 0 : e.getItem(t(r))) ?? n
      } catch {
        return
      }
    },
    set(...n) {
      let r = ``,
        i;
      n.length === 2 ? [r, i] = n : i = n[0];
      try {
        e == null || e.setItem(t(r), i)
      } catch {}
    },
    remove(n = ``) {
      try {
        e == null || e.removeItem(t(n))
      } catch {}
    },
    create(n) {
      let i = typeof n == `function` ? n : e => n + e;
      return r(e, e => t(i(e)))
    }
  }
}
export {
  e as t
};