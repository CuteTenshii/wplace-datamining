import {
  g as e
} from "./DhZUX4Dk.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
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
  c = () => "Staff",
  i = () => "Staff",
  b = () => "スタッフ",
  d = () => "Staff",
  l = () => "Персонал",
  _ = () => "Персонал",
  p = () => "Staff",
  y = (f = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? n() : t === "pt" ? s() : t === "ch" ? u() : t === "de" ? a() : t === "es" ? o() : t === "fr" ? c() : t === "it" ? i() : t === "jp" ? b() : t === "pl" ? d() : t === "ru" ? l() : t === "uk" ? _() : p()
  };
export {
  y as s
};