import {
  g as t
} from "./DvwOtY4M.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "b6c23198-6099-4d74-a3b0-75bdcecfb34e", n._sentryDebugIdIdentifier = "sentry-dbid-b6c23198-6099-4d74-a3b0-75bdcecfb34e")
  })()
} catch {}
const s = () => "Our servers are down for maintenance. We should be back soon",
  a = () => "Our servers are down for maintenance. We should be back soon.",
  o = () => "我们的服务器正在维护中，很快就会恢复。",
  i = () => "Unsere Server sind wegen Wartungsarbeiten offline. Wir sind bald wieder da.",
  c = () => "Nuestros servidores están en mantenimiento. Volveremos pronto.",
  u = () => "Nos serveurs sont en maintenance. Nous serons bientôt de retour.",
  d = () => "I nostri server sono in manutenzione. Torneremo presto.",
  f = () => "現在サーバーはメンテナンス中です。しばらくしてからまたお越しください。",
  m = () => "Nasze serwery są w trakcie konserwacji. Wkrótce wrócimy.",
  g = () => "Наши серверы временно недоступны для обслуживания. Скоро мы вернёмся.",
  l = () => "Наші сервери зараз на технічному обслуговуванні. Ми скоро повернемось.",
  b = () => "Máy chủ của chúng tôi đang bảo trì. Chúng tôi sẽ sớm hoạt động trở lại",
  p = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? u() : e === "it" ? d() : e === "jp" ? f() : e === "pl" ? m() : e === "ru" ? g() : e === "uk" ? l() : b()
  };
export {
  p as m
};