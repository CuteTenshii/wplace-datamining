import {
  g as e
} from "./BhCkpOlh.js";
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
  Or = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? i() : n === "pt" ? o() : n === "ch" ? u() : n === "de" ? c() : n === "es" ? _() : n === "fr" ? a() : n === "it" ? s() : n === "jp" ? l() : n === "pl" ? f() : n === "ru" ? p() : n === "uk" ? w() : d()
  },
  g = () => "By continuing, you agree to our",
  h = () => "Ao continuar, você concorda com nossos",
  m = () => "继续即表示你同意我们的",
  v = () => "Wenn du fortfährst, stimmst du unseren",
  y = () => "Al continuar, aceptas nuestra",
  b = () => "En continuant, vous acceptez nos",
  k = () => "Continuando, accetti i nostri",
  z = () => "続行すると、以下に同意したものとみなされます:",
  j = () => "Kontynuując, akceptujesz nasze",
  C = () => "Продолжая, вы соглашаетесь с нашими",
  T = () => "Продовжуючи, ви погоджуєтеся з нашими",
  W = () => "Khi tiếp tục, bạn đồng ý với",
  Vr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? g() : n === "pt" ? h() : n === "ch" ? m() : n === "de" ? v() : n === "es" ? y() : n === "fr" ? b() : n === "it" ? k() : n === "jp" ? z() : n === "pl" ? j() : n === "ru" ? C() : n === "uk" ? T() : W()
  },
  A = () => "Captcha not solved",
  $ = () => "Captcha não resolvido",
  P = () => "验证码未通过",
  S = () => "Captcha nicht gelöst",
  M = () => "Captcha no resuelto",
  B = () => "Captcha non résolu",
  E = () => "Captcha non risolto",
  N = () => "CAPTCHAが解決されていません",
  D = () => "CAPTCHA nierozwiązana",
  H = () => "Капча не решена",
  K = () => "Капча не розв'язана",
  R = () => "Captcha chưa được giải",
  qr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? A() : n === "pt" ? $() : n === "ch" ? P() : n === "de" ? S() : n === "es" ? M() : n === "fr" ? B() : n === "it" ? E() : n === "jp" ? N() : n === "pl" ? D() : n === "ru" ? H() : n === "uk" ? K() : R()
  },
  I = () => "Community Guidelines",
  L = () => "Diretrizes da Comunidade",
  O = () => "社区准则",
  V = () => "Community-Richtlinien",
  q = () => "Normas de la Comunidad",
  Z = () => "Règles de la communauté",
  x = () => "Linee guida della community",
  F = () => "コミュニティガイドライン",
  G = () => "Wytyczne Społeczności",
  J = () => "Правила сообщества",
  Y = () => "Правила спільноти",
  Q = () => "Nguyên tắc Cộng đồng",
  Zr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? I() : n === "pt" ? L() : n === "ch" ? O() : n === "de" ? V() : n === "es" ? q() : n === "fr" ? Z() : n === "it" ? x() : n === "jp" ? F() : n === "pl" ? G() : n === "ru" ? J() : n === "uk" ? Y() : Q()
  },
  U = () => "Do you have a Wplace Twitch account?",
  X = () => "Você tem uma conta Wplace associada à Twitch?",
  nn = () => "你有 Wplace Twitch 账号吗？",
  rn = () => "Hast du ein Wplace-Konto über Twitch?",
  tn = () => "¿Tienes una cuenta de Wplace asociada a Twitch?",
  en = () => "Avez-vous un compte Wplace associé à Twitch ?",
  on = () => "Hai un account Wplace associato a Twitch?",
  un = () => "WplaceのTwitch連携アカウントをお持ちですか？",
  cn = () => "Czy masz konto Wplace połączone z Twitchem?",
  _n = () => "У вас есть аккаунт Wplace, связанный с Twitch?",
  an = () => "У вас є акаунт Wplace, повʼязаний із Twitch?",
  sn = () => "Bạn có tài khoản Wplace liên kết với Twitch không?",
  xr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? U() : n === "pt" ? X() : n === "ch" ? nn() : n === "de" ? rn() : n === "es" ? tn() : n === "fr" ? en() : n === "it" ? on() : n === "jp" ? un() : n === "pl" ? cn() : n === "ru" ? _n() : n === "uk" ? an() : sn()
  },
  ln = r => `Login with ${r.name}`,
  fn = r => `Entrar com ${r.name}`,
  pn = r => `使用 ${r.name} 登录`,
  wn = r => `Einloggen mit ${r.name}`,
  dn = r => `Iniciar sesión con ${r.name}`,
  gn = r => `Se connecter avec ${r.name}`,
  hn = r => `Accedi con ${r.name}`,
  mn = r => `${r.name}でログイン`,
  vn = r => `Zaloguj przez ${r.name}`,
  yn = r => `Войти через ${r.name}`,
  bn = r => `Увійти через ${r.name}`,
  kn = r => `Đăng nhập bằng ${r.name}`,
  Fr = (r, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? ln(r) : n === "pt" ? fn(r) : n === "ch" ? pn(r) : n === "de" ? wn(r) : n === "es" ? dn(r) : n === "fr" ? gn(r) : n === "it" ? hn(r) : n === "jp" ? mn(r) : n === "pl" ? vn(r) : n === "ru" ? yn(r) : n === "uk" ? bn(r) : kn(r)
  },
  zn = () => "Migrate your account",
  jn = () => "Migre sua conta",
  Cn = () => "迁移你的账号",
  Tn = () => "Konto migrieren",
  Wn = () => "Migra tu cuenta",
  An = () => "Migrer votre compte",
  $n = () => "Migra il tuo account",
  Pn = () => "アカウントを移行",
  Sn = () => "Przenieś swoje konto",
  Mn = () => "Мигрировать аккаунт",
  Bn = () => "Перенести акаунт",
  En = () => "Di chuyển tài khoản",
  Gr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? zn() : n === "pt" ? jn() : n === "ch" ? Cn() : n === "de" ? Tn() : n === "es" ? Wn() : n === "fr" ? An() : n === "it" ? $n() : n === "jp" ? Pn() : n === "pl" ? Sn() : n === "ru" ? Mn() : n === "uk" ? Bn() : En()
  },
  Nn = () => "Open in browser",
  Dn = () => "Abrir no navegador",
  Hn = () => "在浏览器中打开",
  Kn = () => "Im Browser öffnen",
  Rn = () => "Abrir en el navegador",
  In = () => "Ouvrir dans le navigateur",
  Ln = () => "Apri nel browser",
  On = () => "ブラウザで開く",
  Vn = () => "Otwórz w przeglądarce",
  qn = () => "Открыть в браузере",
  Zn = () => "Відкрити у браузері",
  xn = () => "Mở trong trình duyệt",
  Jr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? Nn() : n === "pt" ? Dn() : n === "ch" ? Hn() : n === "de" ? Kn() : n === "es" ? Rn() : n === "fr" ? In() : n === "it" ? Ln() : n === "jp" ? On() : n === "pl" ? Vn() : n === "ru" ? qn() : n === "uk" ? Zn() : xn()
  },
  Fn = () => "Privacy Policy",
  Gn = () => "Política de privacidade",
  Jn = () => "隐私政策",
  Yn = () => "Datenschutzerklärung",
  Qn = () => "Política de privacidad",
  Un = () => "Politique de confidentialité",
  Xn = () => "Informativa sulla privacy",
  nr = () => "プライバシーポリシー",
  rr = () => "Polityka prywatności",
  tr = () => "Политика конфиденциальности",
  er = () => "Політика конфіденційності",
  ir = () => "Chính sách quyền riêng tư",
  Yr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? Fn() : n === "pt" ? Gn() : n === "ch" ? Jn() : n === "de" ? Yn() : n === "es" ? Qn() : n === "fr" ? Un() : n === "it" ? Xn() : n === "jp" ? nr() : n === "pl" ? rr() : n === "ru" ? tr() : n === "uk" ? er() : ir()
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
  Qr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? or() : n === "pt" ? ur() : n === "ch" ? cr() : n === "de" ? _r() : n === "es" ? ar() : n === "fr" ? sr() : n === "it" ? lr() : n === "jp" ? fr() : n === "pl" ? pr() : n === "ru" ? wr() : n === "uk" ? dr() : gr()
  },
  hr = () => "Some features may not work correctly. We recommend using a regular browser.",
  mr = () => "Algumas funcionalidades podem não funcionar corretamente. Recomendamos acessar por um navegador comum.",
  vr = () => "部分功能可能无法正常工作。建议使用常用浏览器访问。",
  yr = () => "Einige Funktionen funktionieren möglicherweise nicht richtig. Wir empfehlen, die Seite über einen gängigen Browser aufzurufen.",
  br = () => "Algunas funcionalidades podrían no funcionar correctamente. Recomendamos acceder mediante un navegador común.",
  kr = () => "Certaines fonctionnalités pourraient ne pas fonctionner correctement. Nous vous recommandons d'accéder via un navigateur standard.",
  zr = () => "Alcune funzionalità potrebbero non funzionare correttamente. Si consiglia di accedere tramite un browser comune.",
  jr = () => "いくつかの機能が正常に動作しない場合があります。通常のブラウザからアクセスすることをお勧めします。",
  Cr = () => "Niektóre funkcje mogą nie działać poprawnie. Zalecamy korzystanie ze zwykłej przeglądarki.",
  Tr = () => "Некоторые функции могут работать неправильно. Мы рекомендуем использовать обычный браузер.",
  Wr = () => "Деякі функції можуть працювати некоректно. Рекомендуємо використовувати звичайний браузер.",
  Ar = () => "Một số tính năng có thể không hoạt động đúng cách. Chúng tôi khuyên bạn nên truy cập bằng trình duyệt thông thường.",
  Ur = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? hr() : n === "pt" ? mr() : n === "ch" ? vr() : n === "de" ? yr() : n === "es" ? br() : n === "fr" ? kr() : n === "it" ? zr() : n === "jp" ? jr() : n === "pl" ? Cr() : n === "ru" ? Tr() : n === "uk" ? Wr() : Ar()
  },
  $r = () => "You are in a webview",
  Pr = () => "Você está em uma webview",
  Sr = () => "您正在使用网页视图",
  Mr = () => "Sie befinden sich in einer Webansicht",
  Br = () => "Estás en una webview",
  Er = () => "Vous êtes dans une webview",
  Nr = () => "Sei in una webview",
  Dr = () => "あなたはウェブビュー内にいます",
  Hr = () => "Jesteś w widoku internetowym",
  Kr = () => "Вы находитесь в веб-просмотре",
  Rr = () => "Ви перебуваєте у веб-перегляді",
  Ir = () => "Bạn đang ở trong một webview",
  Xr = (r = {}, t = {}) => {
    const n = t.locale ?? e();
    return n === "en" ? $r() : n === "pt" ? Pr() : n === "ch" ? Sr() : n === "de" ? Mr() : n === "es" ? Br() : n === "fr" ? Er() : n === "it" ? Nr() : n === "jp" ? Dr() : n === "pl" ? Hr() : n === "ru" ? Kr() : n === "uk" ? Rr() : Ir()
  };
export {
  Or as a, Vr as b, Zr as c, xr as d, qr as e, Ur as f, Fr as l, Gr as m, Jr as o, Yr as p, Qr as t, Xr as w
};