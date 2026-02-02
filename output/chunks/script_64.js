import {
  g as e
} from "./B4ScQ8O8.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "f4fd1dfe-84b9-44fc-8600-ca41ca756e41", t._sentryDebugIdIdentifier = "sentry-dbid-f4fd1dfe-84b9-44fc-8600-ca41ca756e41")
  })()
} catch {}
const c = () => "and",
  o = () => "e",
  u = () => "和",
  i = () => "und",
  _ = () => "y",
  a = () => "et",
  s = () => "e",
  f = () => "と",
  d = () => "i",
  l = () => "и",
  p = () => "та",
  y = () => "và",
  Fn = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? c() : n === "pt" ? o() : n === "ch" ? u() : n === "de" ? i() : n === "es" ? _() : n === "fr" ? a() : n === "it" ? s() : n === "jp" ? f() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? p() : y()
  },
  h = () => "By continuing, you agree to our",
  g = () => "Ao continuar, você concorda com nossos",
  v = () => "继续即表示你同意我们的",
  w = () => "Wenn du fortfährst, stimmst du unseren",
  m = () => "Al continuar, aceptas nuestra",
  b = () => "En continuant, vous acceptez nos",
  k = () => "Continuando, accetti i nostri",
  T = () => "続行すると、以下に同意したものとみなされます:",
  j = () => "Kontynuując, akceptujesz nasze",
  z = () => "Продолжая, вы соглашаетесь с нашими",
  W = () => "Продовжуючи, ви погоджуєтеся з нашими",
  C = () => "Khi tiếp tục, bạn đồng ý với",
  Gn = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? h() : n === "pt" ? g() : n === "ch" ? v() : n === "de" ? w() : n === "es" ? m() : n === "fr" ? b() : n === "it" ? k() : n === "jp" ? T() : n === "pl" ? j() : n === "ru" ? z() : n === "uk" ? W() : C()
  },
  $ = () => "Code of Conduct",
  E = () => "Código de Conduta",
  D = () => "行为守则",
  I = () => "Verhaltenskodex",
  P = () => "Código de Conducta",
  A = () => "Code de conduite",
  K = () => "Codice di condotta",
  M = () => "行動規範",
  S = () => "Kodeks postępowania",
  x = () => "Кодекс поведения",
  L = () => "Кодекс поведінки",
  q = () => "Quy tắc ứng xử",
  Jn = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? $() : n === "pt" ? E() : n === "ch" ? D() : n === "de" ? I() : n === "es" ? P() : n === "fr" ? A() : n === "it" ? K() : n === "jp" ? M() : n === "pl" ? S() : n === "ru" ? x() : n === "uk" ? L() : q()
  },
  B = () => "Do you have a Wplace Twitch account?",
  H = () => "Você tem uma conta Wplace associada à Twitch?",
  N = () => "你有 Wplace Twitch 账号吗？",
  R = () => "Hast du ein Wplace-Konto über Twitch?",
  V = () => "¿Tienes una cuenta de Wplace asociada a Twitch?",
  Q = () => "Avez-vous un compte Wplace associé à Twitch ?",
  Y = () => "Hai un account Wplace associato a Twitch?",
  Z = () => "WplaceのTwitch連携アカウントをお持ちですか？",
  F = () => "Czy masz konto Wplace połączone z Twitchem?",
  G = () => "У вас есть аккаунт Wplace, связанный с Twitch?",
  J = () => "У вас є акаунт Wplace, повʼязаний із Twitch?",
  O = () => "Bạn có tài khoản Wplace liên kết với Twitch không?",
  On = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? B() : n === "pt" ? H() : n === "ch" ? N() : n === "de" ? R() : n === "es" ? V() : n === "fr" ? Q() : n === "it" ? Y() : n === "jp" ? Z() : n === "pl" ? F() : n === "ru" ? G() : n === "uk" ? J() : O()
  },
  U = t => `Login with ${t.name}`,
  X = t => `Entrar com ${t.name}`,
  nn = t => `使用 ${t.name} 登录`,
  tn = t => `Einloggen mit ${t.name}`,
  rn = t => `Iniciar sesión con ${t.name}`,
  en = t => `Se connecter avec ${t.name}`,
  cn = t => `Accedi con ${t.name}`,
  on = t => `${t.name}でログイン`,
  un = t => `Zaloguj przez ${t.name}`,
  _n = t => `Войти через ${t.name}`,
  an = t => `Увійти через ${t.name}`,
  sn = t => `Đăng nhập bằng ${t.name}`,
  Un = (t, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? U(t) : n === "pt" ? X(t) : n === "ch" ? nn(t) : n === "de" ? tn(t) : n === "es" ? rn(t) : n === "fr" ? en(t) : n === "it" ? cn(t) : n === "jp" ? on(t) : n === "pl" ? un(t) : n === "ru" ? _n(t) : n === "uk" ? an(t) : sn(t)
  },
  fn = () => "Migrate your account",
  dn = () => "Migre sua conta",
  ln = () => "迁移你的账号",
  pn = () => "Konto migrieren",
  yn = () => "Migra tu cuenta",
  hn = () => "Migrer votre compte",
  gn = () => "Migra il tuo account",
  vn = () => "アカウントを移行",
  wn = () => "Przenieś swoje konto",
  mn = () => "Мигрировать аккаунт",
  bn = () => "Перенести акаунт",
  kn = () => "Di chuyển tài khoản",
  Xn = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? fn() : n === "pt" ? dn() : n === "ch" ? ln() : n === "de" ? pn() : n === "es" ? yn() : n === "fr" ? hn() : n === "it" ? gn() : n === "jp" ? vn() : n === "pl" ? wn() : n === "ru" ? mn() : n === "uk" ? bn() : kn()
  },
  Tn = () => "Privacy Policy",
  jn = () => "Política de privacidade",
  zn = () => "隐私政策",
  Wn = () => "Datenschutzerklärung",
  Cn = () => "Política de privacidad",
  $n = () => "Politique de confidentialité",
  En = () => "Informativa sulla privacy",
  Dn = () => "プライバシーポリシー",
  In = () => "Polityka prywatności",
  Pn = () => "Политика конфиденциальности",
  An = () => "Політика конфіденційності",
  Kn = () => "Chính sách quyền riêng tư",
  nt = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? Tn() : n === "pt" ? jn() : n === "ch" ? zn() : n === "de" ? Wn() : n === "es" ? Cn() : n === "fr" ? $n() : n === "it" ? En() : n === "jp" ? Dn() : n === "pl" ? In() : n === "ru" ? Pn() : n === "uk" ? An() : Kn()
  },
  Mn = () => "Terms of Service",
  Sn = () => "Termos de Serviço",
  xn = () => "服务条款",
  Ln = () => "Nutzungsbedingungen",
  qn = () => "Términos de servicio",
  Bn = () => "Conditions d’utilisation",
  Hn = () => "Termini di servizio",
  Nn = () => "利用規約",
  Rn = () => "Warunki korzystania z usługi",
  Vn = () => "Условия обслуживания",
  Qn = () => "Умови обслуговування",
  Yn = () => "Điều khoản dịch vụ",
  tt = (t = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? Mn() : n === "pt" ? Sn() : n === "ch" ? xn() : n === "de" ? Ln() : n === "es" ? qn() : n === "fr" ? Bn() : n === "it" ? Hn() : n === "jp" ? Nn() : n === "pl" ? Rn() : n === "ru" ? Vn() : n === "uk" ? Qn() : Yn()
  };
export {
  Fn as a, Gn as b, Jn as c, On as d, Un as l, Xn as m, nt as p, tt as t
};