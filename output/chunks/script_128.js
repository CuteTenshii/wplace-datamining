var e = /Macintosh|Mac OS X|iPhone|iPad|iPod/i;

function t() {
  return typeof navigator > `u` ? `` : navigator.userAgent
}

function n(n, r = t()) {
  return n.key === `Alt` || n.key === `Option` || e.test(r) && (n.code === `AltLeft` || n.code === `AltRight`)
}

function r(n = t()) {
  return e.test(n) ? `Option` : `Alt`
}
export {
  n,
  r as t
};