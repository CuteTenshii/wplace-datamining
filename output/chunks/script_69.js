import {
  g as e
} from "./CcrZu3Ih.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5075ea86ba38314c7942ca2e67d3e2ff3d377749"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "0fd59dc2-dd3f-44ef-af23-877551ce34e3", n._sentryDebugIdIdentifier = "sentry-dbid-0fd59dc2-dd3f-44ef-af23-877551ce34e3")
  } catch {}
})();
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
  Zt = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? c() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? i() : t === "es" ? _() : t === "fr" ? a() : t === "it" ? s() : t === "jp" ? f() : t === "pl" ? d() : t === "ru" ? l() : t === "uk" ? p() : y()
  },
  h = () => "By continuing, you agree to our",
  g = () => "Ao continuar, você concorda com nossos",
  v = () => "继续即表示你同意我们的",
  w = () => "Wenn du fortfährst, stimmst du unseren",
  m = () => "Al continuar, aceptas nuestra",
  k = () => "En continuant, vous acceptez nos",
  b = () => "Continuando, accetti i nostri",
  j = () => "続行すると、以下に同意したものとみなされます:",
  T = () => "Kontynuując, akceptujesz nasze",
  z = () => "Продолжая, вы соглашаетесь с нашими",
  W = () => "Продовжуючи, ви погоджуєтеся з нашими",
  C = () => "Khi tiếp tục, bạn đồng ý với",
  Ft = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? h() : t === "pt" ? g() : t === "ch" ? v() : t === "de" ? w() : t === "es" ? m() : t === "fr" ? k() : t === "it" ? b() : t === "jp" ? j() : t === "pl" ? T() : t === "ru" ? z() : t === "uk" ? W() : C()
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
  Gt = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? $() : t === "pt" ? E() : t === "ch" ? D() : t === "de" ? I() : t === "es" ? P() : t === "fr" ? A() : t === "it" ? K() : t === "jp" ? M() : t === "pl" ? S() : t === "ru" ? x() : t === "uk" ? L() : q()
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
  Jt = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? B() : t === "pt" ? H() : t === "ch" ? N() : t === "de" ? R() : t === "es" ? V() : t === "fr" ? Q() : t === "it" ? Y() : t === "jp" ? Z() : t === "pl" ? F() : t === "ru" ? G() : t === "uk" ? J() : O()
  },
  U = n => `Login with ${n.name}`,
  X = n => `Entrar com ${n.name}`,
  tt = n => `使用 ${n.name} 登录`,
  nt = n => `Einloggen mit ${n.name}`,
  rt = n => `Iniciar sesión con ${n.name}`,
  et = n => `Se connecter avec ${n.name}`,
  ct = n => `Accedi con ${n.name}`,
  ot = n => `${n.name}でログイン`,
  ut = n => `Zaloguj przez ${n.name}`,
  it = n => `Войти через ${n.name}`,
  _t = n => `Увійти через ${n.name}`,
  at = n => `Đăng nhập bằng ${n.name}`,
  Ot = (n, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? U(n) : t === "pt" ? X(n) : t === "ch" ? tt(n) : t === "de" ? nt(n) : t === "es" ? rt(n) : t === "fr" ? et(n) : t === "it" ? ct(n) : t === "jp" ? ot(n) : t === "pl" ? ut(n) : t === "ru" ? it(n) : t === "uk" ? _t(n) : at(n)
  },
  st = () => "Migrate your account",
  ft = () => "Migre sua conta",
  dt = () => "迁移你的账号",
  lt = () => "Konto migrieren",
  pt = () => "Migra tu cuenta",
  yt = () => "Migrer votre compte",
  ht = () => "Migra il tuo account",
  gt = () => "アカウントを移行",
  vt = () => "Przenieś swoje konto",
  wt = () => "Мигрировать аккаунт",
  mt = () => "Перенести акаунт",
  kt = () => "Di chuyển tài khoản",
  Ut = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? st() : t === "pt" ? ft() : t === "ch" ? dt() : t === "de" ? lt() : t === "es" ? pt() : t === "fr" ? yt() : t === "it" ? ht() : t === "jp" ? gt() : t === "pl" ? vt() : t === "ru" ? wt() : t === "uk" ? mt() : kt()
  },
  bt = () => "Privacy Policy",
  jt = () => "Política de privacidade",
  Tt = () => "隐私政策",
  zt = () => "Datenschutzerklärung",
  Wt = () => "Política de privacidad",
  Ct = () => "Politique de confidentialité",
  $t = () => "Informativa sulla privacy",
  Et = () => "プライバシーポリシー",
  Dt = () => "Polityka prywatności",
  It = () => "Политика конфиденциальности",
  Pt = () => "Політика конфіденційності",
  At = () => "Chính sách quyền riêng tư",
  Xt = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? bt() : t === "pt" ? jt() : t === "ch" ? Tt() : t === "de" ? zt() : t === "es" ? Wt() : t === "fr" ? Ct() : t === "it" ? $t() : t === "jp" ? Et() : t === "pl" ? Dt() : t === "ru" ? It() : t === "uk" ? Pt() : At()
  },
  Kt = () => "Terms of Service",
  Mt = () => "Termos de Serviço",
  St = () => "服务条款",
  xt = () => "Nutzungsbedingungen",
  Lt = () => "Términos de servicio",
  qt = () => "Conditions d’utilisation",
  Bt = () => "Termini di servizio",
  Ht = () => "利用規約",
  Nt = () => "Warunki korzystania z usługi",
  Rt = () => "Условия обслуживания",
  Vt = () => "Умови обслуговування",
  Qt = () => "Điều khoản dịch vụ",
  tn = (n = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? Kt() : t === "pt" ? Mt() : t === "ch" ? St() : t === "de" ? xt() : t === "es" ? Lt() : t === "fr" ? qt() : t === "it" ? Bt() : t === "jp" ? Ht() : t === "pl" ? Nt() : t === "ru" ? Rt() : t === "uk" ? Vt() : Qt()
  };
export {
  Zt as a, Ft as b, Gt as c, Jt as d, Ot as l, Ut as m, Xt as p, tn as t
};