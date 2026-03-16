import {
  g as t
} from "./-EY-P68S.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "c7520e27-33cf-4c89-adfd-ce21cf4ded9d", n._sentryDebugIdIdentifier = "sentry-dbid-c7520e27-33cf-4c89-adfd-ce21cf4ded9d")
  } catch {}
})();
const s = () => "Our servers are down for maintenance. We should be back soon",
  a = () => "Our servers are down for maintenance. We should be back soon.",
  o = () => "我们的服务器正在维护中，很快就会恢复。",
  i = () => "Unsere Server sind wegen Wartungsarbeiten offline. Wir sind bald wieder da.",
  c = () => "Nuestros servidores están en mantenimiento. Volveremos pronto.",
  u = () => "Nos serveurs sont en maintenance. Nous serons bientôt de retour.",
  d = () => "I nostri server sono in manutenzione. Torneremo presto.",
  f = () => "現在サーバーはメンテナンス中です。しばらくしてからまたお越しください。",
  m = () => "Nasze serwery są w trakcie konserwacji. Wkrótce wrócimy.",
  _ = () => "Наши серверы временно недоступны для обслуживания. Скоро мы вернёмся.",
  g = () => "Наші сервери зараз на технічному обслуговуванні. Ми скоро повернемось.",
  l = () => "Máy chủ của chúng tôi đang bảo trì. Chúng tôi sẽ sớm hoạt động trở lại",
  p = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? u() : e === "it" ? d() : e === "jp" ? f() : e === "pl" ? m() : e === "ru" ? _() : e === "uk" ? g() : l()
  };
export {
  p as m
};