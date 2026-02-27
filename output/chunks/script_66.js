import {
  g as e
} from "./BIwJezZo.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "9c5dcbac-166c-4278-99a0-52043ee65050", r._sentryDebugIdIdentifier = "sentry-dbid-9c5dcbac-166c-4278-99a0-52043ee65050")
  } catch {}
})();
const c = () => "and",
  o = () => "e",
  u = () => "和",
  i = () => "und",
  _ = () => "y",
  a = () => "et",
  s = () => "e",
  l = () => "と",
  p = () => "i",
  f = () => "и",
  d = () => "та",
  h = () => "và",
  Yt = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? c() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? i() : t === "es" ? _() : t === "fr" ? a() : t === "it" ? s() : t === "jp" ? l() : t === "pl" ? p() : t === "ru" ? f() : t === "uk" ? d() : h()
  },
  y = () => "By continuing, you agree to our",
  m = () => "Ao continuar, você concorda com nossos",
  v = () => "继续即表示你同意我们的",
  g = () => "Wenn du fortfährst, stimmst du unseren",
  b = () => "Al continuar, aceptas nuestra",
  w = () => "En continuant, vous acceptez nos",
  k = () => "Continuando, accetti i nostri",
  T = () => "続行すると、以下に同意したものとみなされます:",
  j = () => "Kontynuując, akceptujesz nasze",
  z = () => "Продолжая, вы соглашаетесь с нашими",
  W = () => "Продовжуючи, ви погоджуєтеся з нашими",
  C = () => "Khi tiếp tục, bạn đồng ý với",
  Ft = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? y() : t === "pt" ? m() : t === "ch" ? v() : t === "de" ? g() : t === "es" ? b() : t === "fr" ? w() : t === "it" ? k() : t === "jp" ? T() : t === "pl" ? j() : t === "ru" ? z() : t === "uk" ? W() : C()
  },
  P = () => "Code of Conduct",
  D = () => "Código de Conduta",
  E = () => "行为守则",
  S = () => "Verhaltenskodex",
  I = () => "Código de Conducta",
  x = () => "Code de conduite",
  K = () => "Codice di condotta",
  M = () => "行動規範",
  A = () => "Kodeks postępowania",
  q = () => "Кодекс поведения",
  N = () => "Кодекс поведінки",
  B = () => "Quy tắc ứng xử",
  Gt = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? P() : t === "pt" ? D() : t === "ch" ? E() : t === "de" ? S() : t === "es" ? I() : t === "fr" ? x() : t === "it" ? K() : t === "jp" ? M() : t === "pl" ? A() : t === "ru" ? q() : t === "uk" ? N() : B()
  },
  H = () => "Do you have a Wplace Twitch account?",
  L = () => "Você tem uma conta Wplace associada à Twitch?",
  R = () => "你有 Wplace Twitch 账号吗？",
  V = () => "Hast du ein Wplace-Konto über Twitch?",
  Q = () => "¿Tienes una cuenta de Wplace asociada a Twitch?",
  U = () => "Avez-vous un compte Wplace associé à Twitch ?",
  X = () => "Hai un account Wplace associato a Twitch?",
  Y = () => "WplaceのTwitch連携アカウントをお持ちですか？",
  F = () => "Czy masz konto Wplace połączone z Twitchem?",
  G = () => "У вас есть аккаунт Wplace, связанный с Twitch?",
  J = () => "У вас є акаунт Wplace, повʼязаний із Twitch?",
  O = () => "Bạn có tài khoản Wplace liên kết với Twitch không?",
  Jt = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? H() : t === "pt" ? L() : t === "ch" ? R() : t === "de" ? V() : t === "es" ? Q() : t === "fr" ? U() : t === "it" ? X() : t === "jp" ? Y() : t === "pl" ? F() : t === "ru" ? G() : t === "uk" ? J() : O()
  },
  Z = () => "Migrate your account",
  $ = () => "Migre sua conta",
  tt = () => "迁移你的账号",
  nt = () => "Konto migrieren",
  rt = () => "Migra tu cuenta",
  et = () => "Migrer votre compte",
  ct = () => "Migra il tuo account",
  ot = () => "アカウントを移行",
  ut = () => "Przenieś swoje konto",
  it = () => "Мигрировать аккаунт",
  _t = () => "Перенести акаунт",
  at = () => "Di chuyển tài khoản",
  Ot = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? Z() : t === "pt" ? $() : t === "ch" ? tt() : t === "de" ? nt() : t === "es" ? rt() : t === "fr" ? et() : t === "it" ? ct() : t === "jp" ? ot() : t === "pl" ? ut() : t === "ru" ? it() : t === "uk" ? _t() : at()
  },
  st = () => "Privacy Policy",
  lt = () => "Política de privacidade",
  pt = () => "隐私政策",
  ft = () => "Datenschutzerklärung",
  dt = () => "Política de privacidad",
  ht = () => "Politique de confidentialité",
  yt = () => "Informativa sulla privacy",
  mt = () => "プライバシーポリシー",
  vt = () => "Polityka prywatności",
  gt = () => "Политика конфиденциальности",
  bt = () => "Політика конфіденційності",
  wt = () => "Chính sách quyền riêng tư",
  Zt = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? st() : t === "pt" ? lt() : t === "ch" ? pt() : t === "de" ? ft() : t === "es" ? dt() : t === "fr" ? ht() : t === "it" ? yt() : t === "jp" ? mt() : t === "pl" ? vt() : t === "ru" ? gt() : t === "uk" ? bt() : wt()
  },
  kt = () => "We are experiencing technical problems. Sorry for the inconvenience 🙇‍♂️",
  Tt = () => "Estamos enfrentando problemas técnicos. Pedimos desculpas pelo inconveniente 🙇‍♂️",
  jt = () => "我们遇到了一些技术问题。给你带来不便，深感抱歉 🙇‍♂️",
  zt = () => "Wir haben technische Probleme. Entschuldige bitte die Unannehmlichkeiten 🙇‍♂️",
  Wt = () => "Estamos experimentando problemas técnicos. Sentimos las molestias 🙇‍♂️",
  Ct = () => "Nous rencontrons des problèmes techniques. Désolé pour la gêne occasionnée 🙇‍♂️",
  Pt = () => "Stiamo avendo problemi tecnici. Ci scusiamo per l'inconveniente 🙇‍♂️",
  Dt = () => "技術的な問題が発生しています。ご不便をおかけして申し訳ありません。🙇‍♂️",
  Et = () => "Doświadczamy problemów technicznych. Przepraszamy za niedogodności 🙇‍♂️",
  St = () => "Мы испытываем технические проблемы. Приносим извинения за неудобства 🙇‍♂️",
  It = () => "Ми стикаємось із технічними проблемами. Перепрошуємо за незручності 🙇‍♂️",
  xt = () => "Chúng tôi đang gặp vấn đề kỹ thuật. Xin lỗi vì sự bất tiện 🙇‍♂️",
  $t = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? kt() : t === "pt" ? Tt() : t === "ch" ? jt() : t === "de" ? zt() : t === "es" ? Wt() : t === "fr" ? Ct() : t === "it" ? Pt() : t === "jp" ? Dt() : t === "pl" ? Et() : t === "ru" ? St() : t === "uk" ? It() : xt()
  },
  Kt = () => "Terms of Service",
  Mt = () => "Termos de Serviço",
  At = () => "服务条款",
  qt = () => "Nutzungsbedingungen",
  Nt = () => "Términos de servicio",
  Bt = () => "Conditions d’utilisation",
  Ht = () => "Termini di servizio",
  Lt = () => "利用規約",
  Rt = () => "Warunki korzystania z usługi",
  Vt = () => "Условия обслуживания",
  Qt = () => "Умови обслуговування",
  Ut = () => "Điều khoản dịch vụ",
  tn = (r = {}, n = {}) => {
    const t = n.locale ?? e();
    return t === "en" ? Kt() : t === "pt" ? Mt() : t === "ch" ? At() : t === "de" ? qt() : t === "es" ? Nt() : t === "fr" ? Bt() : t === "it" ? Ht() : t === "jp" ? Lt() : t === "pl" ? Rt() : t === "ru" ? Vt() : t === "uk" ? Qt() : Ut()
  };
export {
  Yt as a, Ft as b, Gt as c, $t as d, Jt as e, Ot as m, Zt as p, tn as t
};