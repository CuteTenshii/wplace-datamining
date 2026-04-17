import {
  g as e
} from "./DADvmwwi.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "b9b33e77-4f93-4cbd-a901-f05ce83847b9", f._sentryDebugIdIdentifier = "sentry-dbid-b9b33e77-4f93-4cbd-a901-f05ce83847b9")
  } catch {}
})();
const n = () => "Staff",
  s = () => "Equipe",
  u = () => "工作人员",
  a = () => "Staff",
  o = () => "Staff",
  i = () => "Staff",
  c = () => "Staff",
  d = () => "スタッフ",
  b = () => "Staff",
  l = () => "Персонал",
  _ = () => "Персонал",
  p = () => "Staff",
  y = (f = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? n() : t === "pt" ? s() : t === "ch" ? u() : t === "de" ? a() : t === "es" ? o() : t === "fr" ? i() : t === "it" ? c() : t === "jp" ? d() : t === "pl" ? b() : t === "ru" ? l() : t === "uk" ? _() : p()
  };
export {
  y as s
};