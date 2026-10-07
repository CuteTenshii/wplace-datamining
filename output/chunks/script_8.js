var e = `theme`;

function t() {
  try {
    return localStorage.getItem(e) === `dark` ? `dark` : `custom-winter`
  } catch {
    return `custom-winter`
  }
}

function n(t) {
  document.documentElement.setAttribute(`data-theme`, t);
  try {
    localStorage.setItem(e, t)
  } catch {}
}
export {
  t as n, n as t
};