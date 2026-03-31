import {
  g as t
} from "./rVFhRxiC.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "474a06d87b269a074076fdcef11eba6226920584"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "09cfb7ee-331a-466f-8b4c-b58cf29ac265", r._sentryDebugIdIdentifier = "sentry-dbid-09cfb7ee-331a-466f-8b4c-b58cf29ac265")
  } catch {}
})();
const i = () => "and",
  o = () => "e",
  c = () => "和",
  u = () => "und",
  _ = () => "y",
  a = () => "et",
  s = () => "e",
  f = () => "と",
  l = () => "i",
  w = () => "и",
  d = () => "та",
  p = () => "và",
  Er = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? i() : n === "pt" ? o() : n === "ch" ? c() : n === "de" ? u() : n === "es" ? _() : n === "fr" ? a() : n === "it" ? s() : n === "jp" ? f() : n === "pl" ? l() : n === "ru" ? w() : n === "uk" ? d() : p()
  },
  g = () => "By continuing, you agree to our",
  v = () => "Ao continuar, você concorda com nossos",
  h = () => "继续即表示你同意我们的",
  b = () => "Wenn du fortfährst, stimmst du unseren",
  y = () => "Al continuar, aceptas nuestra",
  m = () => "En continuant, vous acceptez nos",
  k = () => "Continuando, accetti i nostri",
  j = () => "続行すると、以下に同意したものとみなされます:",
  z = () => "Kontynuując, akceptujesz nasze",
  T = () => "Продолжая, вы соглашаетесь с нашими",
  W = () => "Продовжуючи, ви погоджуєтеся з нашими",
  C = () => "Khi tiếp tục, bạn đồng ý với",
  Sr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? g() : n === "pt" ? v() : n === "ch" ? h() : n === "de" ? b() : n === "es" ? y() : n === "fr" ? m() : n === "it" ? k() : n === "jp" ? j() : n === "pl" ? z() : n === "ru" ? T() : n === "uk" ? W() : C()
  },
  $ = () => "Code of Conduct",
  A = () => "Código de Conduta",
  E = () => "行为守则",
  S = () => "Verhaltenskodex",
  I = () => "Código de Conducta",
  D = () => "Code de conduite",
  M = () => "Codice di condotta",
  P = () => "行動規範",
  B = () => "Kodeks postępowania",
  K = () => "Кодекс поведения",
  N = () => "Кодекс поведінки",
  R = () => "Quy tắc ứng xử",
  Ir = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? $() : n === "pt" ? A() : n === "ch" ? E() : n === "de" ? S() : n === "es" ? I() : n === "fr" ? D() : n === "it" ? M() : n === "jp" ? P() : n === "pl" ? B() : n === "ru" ? K() : n === "uk" ? N() : R()
  },
  V = () => "Do you have a Wplace Twitch account?",
  x = () => "Você tem uma conta Wplace associada à Twitch?",
  L = () => "你有 Wplace Twitch 账号吗？",
  O = () => "Hast du ein Wplace-Konto über Twitch?",
  q = () => "¿Tienes una cuenta de Wplace asociada a Twitch?",
  H = () => "Avez-vous un compte Wplace associé à Twitch ?",
  Y = () => "Hai un account Wplace associato a Twitch?",
  Z = () => "WplaceのTwitch連携アカウントをお持ちですか？",
  F = () => "Czy masz konto Wplace połączone z Twitchem?",
  J = () => "У вас есть аккаунт Wplace, связанный с Twitch?",
  Q = () => "У вас є акаунт Wplace, повʼязаний із Twitch?",
  G = () => "Bạn có tài khoản Wplace liên kết với Twitch không?",
  Dr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? V() : n === "pt" ? x() : n === "ch" ? L() : n === "de" ? O() : n === "es" ? q() : n === "fr" ? H() : n === "it" ? Y() : n === "jp" ? Z() : n === "pl" ? F() : n === "ru" ? J() : n === "uk" ? Q() : G()
  },
  U = r => `Login with ${r.name}`,
  X = r => `Entrar com ${r.name}`,
  nn = r => `使用 ${r.name} 登录`,
  rn = r => `Einloggen mit ${r.name}`,
  en = r => `Iniciar sesión con ${r.name}`,
  tn = r => `Se connecter avec ${r.name}`,
  on = r => `Accedi con ${r.name}`,
  cn = r => `${r.name}でログイン`,
  un = r => `Zaloguj przez ${r.name}`,
  _n = r => `Войти через ${r.name}`,
  an = r => `Увійти через ${r.name}`,
  sn = r => `Đăng nhập bằng ${r.name}`,
  Mr = (r, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? U(r) : n === "pt" ? X(r) : n === "ch" ? nn(r) : n === "de" ? rn(r) : n === "es" ? en(r) : n === "fr" ? tn(r) : n === "it" ? on(r) : n === "jp" ? cn(r) : n === "pl" ? un(r) : n === "ru" ? _n(r) : n === "uk" ? an(r) : sn(r)
  },
  fn = () => "Migrate your account",
  ln = () => "Migre sua conta",
  wn = () => "迁移你的账号",
  dn = () => "Konto migrieren",
  pn = () => "Migra tu cuenta",
  gn = () => "Migrer votre compte",
  vn = () => "Migra il tuo account",
  hn = () => "アカウントを移行",
  bn = () => "Przenieś swoje konto",
  yn = () => "Мигрировать аккаунт",
  mn = () => "Перенести акаунт",
  kn = () => "Di chuyển tài khoản",
  Pr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? fn() : n === "pt" ? ln() : n === "ch" ? wn() : n === "de" ? dn() : n === "es" ? pn() : n === "fr" ? gn() : n === "it" ? vn() : n === "jp" ? hn() : n === "pl" ? bn() : n === "ru" ? yn() : n === "uk" ? mn() : kn()
  },
  jn = () => "Privacy Policy",
  zn = () => "Política de privacidade",
  Tn = () => "隐私政策",
  Wn = () => "Datenschutzerklärung",
  Cn = () => "Política de privacidad",
  $n = () => "Politique de confidentialité",
  An = () => "Informativa sulla privacy",
  En = () => "プライバシーポリシー",
  Sn = () => "Polityka prywatności",
  In = () => "Политика конфиденциальности",
  Dn = () => "Політика конфіденційності",
  Mn = () => "Chính sách quyền riêng tư",
  Br = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? jn() : n === "pt" ? zn() : n === "ch" ? Tn() : n === "de" ? Wn() : n === "es" ? Cn() : n === "fr" ? $n() : n === "it" ? An() : n === "jp" ? En() : n === "pl" ? Sn() : n === "ru" ? In() : n === "uk" ? Dn() : Mn()
  },
  Pn = () => "You are in a webview",
  Bn = () => "Você está em uma webview",
  Kn = () => "您正在使用网页视图",
  Nn = () => "Sie befinden sich in einer Webansicht",
  Rn = () => "Estás en una webview",
  Vn = () => "Vous êtes dans une webview",
  xn = () => "Sei in una webview",
  Ln = () => "あなたはウェブビュー内にいます",
  On = () => "Jesteś w widoku internetowym",
  qn = () => "Вы находитесь в веб-просмотре",
  Hn = () => "Ви перебуваєте у веб-перегляді",
  Yn = () => "Bạn đang ở trong một webview",
  Kr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? Pn() : n === "pt" ? Bn() : n === "ch" ? Kn() : n === "de" ? Nn() : n === "es" ? Rn() : n === "fr" ? Vn() : n === "it" ? xn() : n === "jp" ? Ln() : n === "pl" ? On() : n === "ru" ? qn() : n === "uk" ? Hn() : Yn()
  },
  Zn = () => "Some features may not work correctly. We recommend using a regular browser.",
  Fn = () => "Algumas funcionalidades podem não funcionar corretamente. Recomendamos acessar por um navegador comum.",
  Jn = () => "部分功能可能无法正常工作。建议使用常用浏览器访问。",
  Qn = () => "Einige Funktionen funktionieren möglicherweise nicht richtig. Wir empfehlen, die Seite über einen gängigen Browser aufzurufen.",
  Gn = () => "Algunas funcionalidades podrían no funcionar correctamente. Recomendamos acceder mediante un navegador común.",
  Un = () => "Certaines fonctionnalités pourraient ne pas fonctionner correctement. Nous vous recommandons d'accéder via un navigateur standard.",
  Xn = () => "Alcune funzionalità potrebbero non funzionare correttamente. Si consiglia di accedere tramite un browser comune.",
  nr = () => "いくつかの機能が正常に動作しない場合があります。通常のブラウザからアクセスすることをお勧めします。",
  rr = () => "Niektóre funkcje mogą nie działać poprawnie. Zalecamy korzystanie ze zwykłej przeglądarki.",
  er = () => "Некоторые функции могут работать неправильно. Мы рекомендуем использовать обычный браузер.",
  tr = () => "Деякі функції можуть працювати некоректно. Рекомендуємо використовувати звичайний браузер.",
  ir = () => "Một số tính năng có thể không hoạt động đúng cách. Chúng tôi khuyên bạn nên truy cập bằng trình duyệt thông thường.",
  Nr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? Zn() : n === "pt" ? Fn() : n === "ch" ? Jn() : n === "de" ? Qn() : n === "es" ? Gn() : n === "fr" ? Un() : n === "it" ? Xn() : n === "jp" ? nr() : n === "pl" ? rr() : n === "ru" ? er() : n === "uk" ? tr() : ir()
  },
  or = () => "Open in browser",
  cr = () => "Abrir no navegador",
  ur = () => "在浏览器中打开",
  _r = () => "Im Browser öffnen",
  ar = () => "Abrir en el navegador",
  sr = () => "Ouvrir dans le navigateur",
  fr = () => "Apri nel browser",
  lr = () => "ブラウザで開く",
  wr = () => "Otwórz w przeglądarce",
  dr = () => "Открыть в браузере",
  pr = () => "Відкрити у браузері",
  gr = () => "Mở trong trình duyệt",
  Rr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? or() : n === "pt" ? cr() : n === "ch" ? ur() : n === "de" ? _r() : n === "es" ? ar() : n === "fr" ? sr() : n === "it" ? fr() : n === "jp" ? lr() : n === "pl" ? wr() : n === "ru" ? dr() : n === "uk" ? pr() : gr()
  },
  vr = () => "Terms of Service",
  hr = () => "Termos de Serviço",
  br = () => "服务条款",
  yr = () => "Nutzungsbedingungen",
  mr = () => "Términos de servicio",
  kr = () => "Conditions d’utilisation",
  jr = () => "Termini di servizio",
  zr = () => "利用規約",
  Tr = () => "Warunki korzystania z usługi",
  Wr = () => "Условия обслуживания",
  Cr = () => "Умови обслуговування",
  $r = () => "Điều khoản dịch vụ",
  Vr = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? vr() : n === "pt" ? hr() : n === "ch" ? br() : n === "de" ? yr() : n === "es" ? mr() : n === "fr" ? kr() : n === "it" ? jr() : n === "jp" ? zr() : n === "pl" ? Tr() : n === "ru" ? Wr() : n === "uk" ? Cr() : $r()
  };
export {
  Er as a, Sr as b, Ir as c, Dr as d, Nr as e, Mr as l, Pr as m, Rr as o, Br as p, Vr as t, Kr as w
};