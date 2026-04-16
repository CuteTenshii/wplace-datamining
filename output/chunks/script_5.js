(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "5cbd8225-2740-49d8-95f5-dfaeb057d814", d._sentryDebugIdIdentifier = "sentry-dbid-5cbd8225-2740-49d8-95f5-dfaeb057d814")
  } catch {}
})();
const b = "1776316102645";
export {
  b as v
};