import {
  g as t
} from "./BQlqcz55.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "5733d867-f29b-47aa-9528-17b6c5bf14d1", r._sentryDebugIdIdentifier = "sentry-dbid-5733d867-f29b-47aa-9528-17b6c5bf14d1")
  } catch {}
})();
const i = () => "and",
  o = () => "e",
  u = () => "和",
  c = () => "und",
  _ = () => "y",
  a = () => "et",
  s = () => "e",
  l = () => "と",
  f = () => "i",
  p = () => "и",
  w = () => "та",
  d = () => "và",
  Or = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? i() : n === "pt" ? o() : n === "ch" ? u() : n === "de" ? c() : n === "es" ? _() : n === "fr" ? a() : n === "it" ? s() : n === "jp" ? l() : n === "pl" ? f() : n === "ru" ? p() : n === "uk" ? w() : d()
  },
  g = () => "By continuing, you agree to our",
  h = () => "Ao continuar, você concorda com nossos",
  v = () => "继续即表示你同意我们的",
  m = () => "Wenn du fortfährst, stimmst du unseren",
  y = () => "Al continuar, aceptas nuestra",
  b = () => "En continuant, vous acceptez nos",
  k = () => "Continuando, accetti i nostri",
  z = () => "続行すると、以下に同意したものとみなされます:",
  j = () => "Kontynuując, akceptujesz nasze",
  C = () => "Продолжая, вы соглашаетесь с нашими",
  T = () => "Продовжуючи, ви погоджуєтеся з нашими",
  W = () => "Khi tiếp tục, bạn đồng ý với",
  Vr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? g() : n === "pt" ? h() : n === "ch" ? v() : n === "de" ? m() : n === "es" ? y() : n === "fr" ? b() : n === "it" ? k() : n === "jp" ? z() : n === "pl" ? j() : n === "ru" ? C() : n === "uk" ? T() : W()
  },
  A = () => "Captcha not solved",
  $ = () => "Captcha não resolvido",
  S = () => "验证码未通过",
  E = () => "Captcha nicht gelöst",
  P = () => "Captcha no resuelto",
  D = () => "Captcha non résolu",
  I = () => "Captcha non risolto",
  M = () => "CAPTCHAが解決されていません",
  N = () => "CAPTCHA nierozwiązana",
  R = () => "Капча не решена",
  B = () => "Капча не розв'язана",
  H = () => "Captcha chưa được giải",
  qr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? A() : n === "pt" ? $() : n === "ch" ? S() : n === "de" ? E() : n === "es" ? P() : n === "fr" ? D() : n === "it" ? I() : n === "jp" ? M() : n === "pl" ? N() : n === "ru" ? R() : n === "uk" ? B() : H()
  },
  K = () => "Community Guidelines",
  L = () => "Diretrizes da Comunidade",
  O = () => "社区准则",
  V = () => "Community-Richtlinien",
  q = () => "Normas de la Comunidad",
  Y = () => "Règles de la communauté",
  Z = () => "Linee guida della community",
  x = () => "コミュニティガイドライン",
  F = () => "Wytyczne Społeczności",
  G = () => "Правила сообщества",
  J = () => "Правила спільноти",
  Q = () => "Nguyên tắc Cộng đồng",
  Yr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? K() : n === "pt" ? L() : n === "ch" ? O() : n === "de" ? V() : n === "es" ? q() : n === "fr" ? Y() : n === "it" ? Z() : n === "jp" ? x() : n === "pl" ? F() : n === "ru" ? G() : n === "uk" ? J() : Q()
  },
  U = () => "Do you have a Wplace Twitch account?",
  X = () => "Você tem uma conta Wplace associada à Twitch?",
  nn = () => "你有 Wplace Twitch 账号吗？",
  rn = () => "Hast du ein Wplace-Konto über Twitch?",
  en = () => "¿Tienes una cuenta de Wplace asociada a Twitch?",
  tn = () => "Avez-vous un compte Wplace associé à Twitch ?",
  on = () => "Hai un account Wplace associato a Twitch?",
  un = () => "WplaceのTwitch連携アカウントをお持ちですか？",
  cn = () => "Czy masz konto Wplace połączone z Twitchem?",
  _n = () => "У вас есть аккаунт Wplace, связанный с Twitch?",
  an = () => "У вас є акаунт Wplace, повʼязаний із Twitch?",
  sn = () => "Bạn có tài khoản Wplace liên kết với Twitch không?",
  Zr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? U() : n === "pt" ? X() : n === "ch" ? nn() : n === "de" ? rn() : n === "es" ? en() : n === "fr" ? tn() : n === "it" ? on() : n === "jp" ? un() : n === "pl" ? cn() : n === "ru" ? _n() : n === "uk" ? an() : sn()
  },
  ln = r => `Login with ${r.name}`,
  fn = r => `Entrar com ${r.name}`,
  pn = r => `使用 ${r.name} 登录`,
  wn = r => `Einloggen mit ${r.name}`,
  dn = r => `Iniciar sesión con ${r.name}`,
  gn = r => `Se connecter avec ${r.name}`,
  hn = r => `Accedi con ${r.name}`,
  vn = r => `${r.name}でログイン`,
  mn = r => `Zaloguj przez ${r.name}`,
  yn = r => `Войти через ${r.name}`,
  bn = r => `Увійти через ${r.name}`,
  kn = r => `Đăng nhập bằng ${r.name}`,
  xr = (r, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? ln(r) : n === "pt" ? fn(r) : n === "ch" ? pn(r) : n === "de" ? wn(r) : n === "es" ? dn(r) : n === "fr" ? gn(r) : n === "it" ? hn(r) : n === "jp" ? vn(r) : n === "pl" ? mn(r) : n === "ru" ? yn(r) : n === "uk" ? bn(r) : kn(r)
  },
  zn = () => "Migrate your account",
  jn = () => "Migre sua conta",
  Cn = () => "迁移你的账号",
  Tn = () => "Konto migrieren",
  Wn = () => "Migra tu cuenta",
  An = () => "Migrer votre compte",
  $n = () => "Migra il tuo account",
  Sn = () => "アカウントを移行",
  En = () => "Przenieś swoje konto",
  Pn = () => "Мигрировать аккаунт",
  Dn = () => "Перенести акаунт",
  In = () => "Di chuyển tài khoản",
  Fr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? zn() : n === "pt" ? jn() : n === "ch" ? Cn() : n === "de" ? Tn() : n === "es" ? Wn() : n === "fr" ? An() : n === "it" ? $n() : n === "jp" ? Sn() : n === "pl" ? En() : n === "ru" ? Pn() : n === "uk" ? Dn() : In()
  },
  Mn = () => "Open in browser",
  Nn = () => "Abrir no navegador",
  Rn = () => "在浏览器中打开",
  Bn = () => "Im Browser öffnen",
  Hn = () => "Abrir en el navegador",
  Kn = () => "Ouvrir dans le navigateur",
  Ln = () => "Apri nel browser",
  On = () => "ブラウザで開く",
  Vn = () => "Otwórz w przeglądarce",
  qn = () => "Открыть в браузере",
  Yn = () => "Відкрити у браузері",
  Zn = () => "Mở trong trình duyệt",
  Gr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? Mn() : n === "pt" ? Nn() : n === "ch" ? Rn() : n === "de" ? Bn() : n === "es" ? Hn() : n === "fr" ? Kn() : n === "it" ? Ln() : n === "jp" ? On() : n === "pl" ? Vn() : n === "ru" ? qn() : n === "uk" ? Yn() : Zn()
  },
  xn = () => "Privacy Policy",
  Fn = () => "Política de privacidade",
  Gn = () => "隐私政策",
  Jn = () => "Datenschutzerklärung",
  Qn = () => "Política de privacidad",
  Un = () => "Politique de confidentialité",
  Xn = () => "Informativa sulla privacy",
  nr = () => "プライバシーポリシー",
  rr = () => "Polityka prywatności",
  er = () => "Политика конфиденциальности",
  tr = () => "Політика конфіденційності",
  ir = () => "Chính sách quyền riêng tư",
  Jr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? xn() : n === "pt" ? Fn() : n === "ch" ? Gn() : n === "de" ? Jn() : n === "es" ? Qn() : n === "fr" ? Un() : n === "it" ? Xn() : n === "jp" ? nr() : n === "pl" ? rr() : n === "ru" ? er() : n === "uk" ? tr() : ir()
  },
  or = () => "Terms of Service",
  ur = () => "Termos de Serviço",
  cr = () => "服务条款",
  _r = () => "Nutzungsbedingungen",
  ar = () => "Términos de servicio",
  sr = () => "Conditions d’utilisation",
  lr = () => "Termini di servizio",
  fr = () => "利用規約",
  pr = () => "Warunki korzystania z usługi",
  wr = () => "Условия обслуживания",
  dr = () => "Умови обслуговування",
  gr = () => "Điều khoản dịch vụ",
  Qr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? or() : n === "pt" ? ur() : n === "ch" ? cr() : n === "de" ? _r() : n === "es" ? ar() : n === "fr" ? sr() : n === "it" ? lr() : n === "jp" ? fr() : n === "pl" ? pr() : n === "ru" ? wr() : n === "uk" ? dr() : gr()
  },
  hr = () => "Some features may not work correctly. We recommend using a regular browser.",
  vr = () => "Algumas funcionalidades podem não funcionar corretamente. Recomendamos acessar por um navegador comum.",
  mr = () => "部分功能可能无法正常工作。建议使用常用浏览器访问。",
  yr = () => "Einige Funktionen funktionieren möglicherweise nicht richtig. Wir empfehlen, die Seite über einen gängigen Browser aufzurufen.",
  br = () => "Algunas funcionalidades podrían no funcionar correctamente. Recomendamos acceder mediante un navegador común.",
  kr = () => "Certaines fonctionnalités pourraient ne pas fonctionner correctement. Nous vous recommandons d'accéder via un navigateur standard.",
  zr = () => "Alcune funzionalità potrebbero non funzionare correttamente. Si consiglia di accedere tramite un browser comune.",
  jr = () => "いくつかの機能が正常に動作しない場合があります。通常のブラウザからアクセスすることをお勧めします。",
  Cr = () => "Niektóre funkcje mogą nie działać poprawnie. Zalecamy korzystanie ze zwykłej przeglądarki.",
  Tr = () => "Некоторые функции могут работать неправильно. Мы рекомендуем использовать обычный браузер.",
  Wr = () => "Деякі функції можуть працювати некоректно. Рекомендуємо використовувати звичайний браузер.",
  Ar = () => "Một số tính năng có thể không hoạt động đúng cách. Chúng tôi khuyên bạn nên truy cập bằng trình duyệt thông thường.",
  Ur = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? hr() : n === "pt" ? vr() : n === "ch" ? mr() : n === "de" ? yr() : n === "es" ? br() : n === "fr" ? kr() : n === "it" ? zr() : n === "jp" ? jr() : n === "pl" ? Cr() : n === "ru" ? Tr() : n === "uk" ? Wr() : Ar()
  },
  $r = () => "You are in a webview",
  Sr = () => "Você está em uma webview",
  Er = () => "您正在使用网页视图",
  Pr = () => "Sie befinden sich in einer Webansicht",
  Dr = () => "Estás en una webview",
  Ir = () => "Vous êtes dans une webview",
  Mr = () => "Sei in una webview",
  Nr = () => "あなたはウェブビュー内にいます",
  Rr = () => "Jesteś w widoku internetowym",
  Br = () => "Вы находитесь в веб-просмотре",
  Hr = () => "Ви перебуваєте у веб-перегляді",
  Kr = () => "Bạn đang ở trong một webview",
  Xr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? $r() : n === "pt" ? Sr() : n === "ch" ? Er() : n === "de" ? Pr() : n === "es" ? Dr() : n === "fr" ? Ir() : n === "it" ? Mr() : n === "jp" ? Nr() : n === "pl" ? Rr() : n === "ru" ? Br() : n === "uk" ? Hr() : Kr()
  };
export {
  Or as a, Vr as b, Yr as c, Zr as d, qr as e, Ur as f, xr as l, Fr as m, Gr as o, Jr as p, Qr as t, Xr as w
};