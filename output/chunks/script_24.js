import {
  g as t
} from "./BrFrnQhU.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "50477add-904f-43c4-90bf-18e8935268e0", r._sentryDebugIdIdentifier = "sentry-dbid-50477add-904f-43c4-90bf-18e8935268e0")
  } catch {}
})();
const o = () => "Input the code",
  i = () => "Insira o código",
  u = () => "输入验证码",
  s = () => "Code eingeben",
  c = () => "Introduce el código",
  _ = () => "Entrez le code",
  a = () => "Inserisci il codice",
  f = () => "コードを入力してください。",
  p = () => "Wpisz kod",
  d = () => "Введите код",
  h = () => "Введіть код",
  l = () => "Nhập mã",
  Nn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? o() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? s() : e === "es" ? c() : e === "fr" ? _() : e === "it" ? a() : e === "jp" ? f() : e === "pl" ? p() : e === "ru" ? d() : e === "uk" ? h() : l()
  },
  v = () => "Not a valid phone number",
  m = () => "Não é um número válido",
  y = () => "不是有效的电话号码",
  b = () => "Keine gültige Telefonnummer",
  g = () => "No es un número de teléfono válido",
  k = () => "Numéro non valide",
  j = () => "Numero non valido",
  w = () => "有効な電話番号ではありません。",
  S = () => "To nie jest prawidłowy numer telefonu",
  z = () => "Неверный номер телефона",
  T = () => "Некоректний номер телефону",
  E = () => "Không phải số điện thoại hợp lệ",
  Vn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? v() : e === "pt" ? m() : e === "ch" ? y() : e === "de" ? b() : e === "es" ? g() : e === "fr" ? k() : e === "it" ? j() : e === "jp" ? w() : e === "pl" ? S() : e === "ru" ? z() : e === "uk" ? T() : E()
  },
  I = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  M = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  N = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  V = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  C = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  x = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  P = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  R = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  W = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  D = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  G = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  q = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  Cn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? I() : e === "pt" ? M() : e === "ch" ? N() : e === "de" ? V() : e === "es" ? C() : e === "fr" ? x() : e === "it" ? P() : e === "jp" ? R() : e === "pl" ? W() : e === "ru" ? D() : e === "uk" ? G() : q()
  },
  K = () => "Phone verification",
  A = () => "Verificação de telefone",
  B = () => "电话验证",
  L = () => "Telefon-Verifizierung",
  Y = () => "Verificación de teléfono",
  Z = () => "Vérification du téléphone",
  H = () => "Verifica del telefono",
  Q = () => "電話番号の確認",
  U = () => "Weryfikacja telefonu",
  X = () => "Подтверждение телефона",
  F = () => "Підтвердження телефону",
  J = () => "Xác minh số điện thoại",
  xn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? K() : e === "pt" ? A() : e === "ch" ? B() : e === "de" ? L() : e === "es" ? Y() : e === "fr" ? Z() : e === "it" ? H() : e === "jp" ? Q() : e === "pl" ? U() : e === "ru" ? X() : e === "uk" ? F() : J()
  },
  O = () => "Please verify your phone number to continue painting. This helps us keep bots out and ensure a safe, creative experience for everyone.",
  $ = () => "Por favor, verifique com seu telefone para continuar pintando. Isso nos ajuda a filtrar bots e manter um experiência segura e criativa para todos.",
  ee = () => "请验证你的电话号码以继续绘画。这有助于我们防止机器人并确保所有人的安全和创作环境。",
  ne = () => "Bitte verifiziere deine Telefonnummer, um weitermalen zu können. Das hilft uns, Bots fernzuhalten und eine sichere, kreative Umgebung für alle zu gewährleisten.",
  re = () => "Verifica tu número de teléfono para continuar pintando. Nos ayuda a mantener a los bots fuera y garantizar una experiencia segura y creativa para todos.",
  te = () => "Veuillez vérifier votre numéro de téléphone pour continuer à peindre. Cela nous aide à bloquer les bots et à garantir une expérience sûre et créative pour tous.",
  oe = () => "Verifica il tuo numero di telefono per continuare a dipingere. Questo ci aiuta a filtrare i bot e mantenere un'esperienza sicura e creativa per tutti.",
  ie = () => "描き続けるには電話番号の確認が必要です。これはボットを排除し、すべてのプレイヤーに安全でクリエイティブな体験を提供するために必要な手順です。",
  ue = () => "Zweryfikuj swój numer telefonu, aby kontynuować malowanie. Pomaga nam to powstrzymywać boty i zapewniać bezpieczną, kreatywną zabawę dla wszystkich.",
  se = () => "Пожалуйста, подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам защищаться от ботов и поддерживать безопасную и творческую атмосферу для всех.",
  ce = () => "Будь ласка, підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам відсіювати ботів і забезпечувати безпечний та креативний досвід для всіх.",
  _e = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi ngăn bot và giữ trải nghiệm sáng tạo, an toàn cho mọi người.",
  Pn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? O() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? ne() : e === "es" ? re() : e === "fr" ? te() : e === "it" ? oe() : e === "jp" ? ie() : e === "pl" ? ue() : e === "ru" ? se() : e === "uk" ? ce() : _e()
  },
  ae = () => "Phone successfully verified",
  fe = () => "Telefone verificado com sucesso",
  pe = () => "电话验证成功",
  de = () => "Telefon erfolgreich verifiziert",
  he = () => "Teléfono verificado correctamente",
  le = () => "Téléphone vérifié avec succès",
  ve = () => "Telefono verificato con successo",
  me = () => "電話番号を確認しました。",
  ye = () => "Telefon został pomyślnie zweryfikowany",
  be = () => "Телефон успешно подтверждён",
  ge = () => "Телефон успішно підтверджено",
  ke = () => "Đã xác minh số điện thoại thành công",
  Rn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? ae() : e === "pt" ? fe() : e === "ch" ? pe() : e === "de" ? de() : e === "es" ? he() : e === "fr" ? le() : e === "it" ? ve() : e === "jp" ? me() : e === "pl" ? ye() : e === "ru" ? be() : e === "uk" ? ge() : ke()
  },
  je = () => "Resend Code",
  we = () => "Reenviar Código",
  Se = () => "重新发送验证码",
  ze = () => "Code erneut senden",
  Te = () => "Reenviar código",
  Ee = () => "Renvoyer le code",
  Ie = () => "Reinvia codice",
  Me = () => "コードを再送信",
  Ne = () => "Wyślij kod ponownie",
  Ve = () => "Отправить код ещё раз",
  Ce = () => "Надіслати код ще раз",
  xe = () => "Gửi lại mã",
  Wn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? je() : e === "pt" ? we() : e === "ch" ? Se() : e === "de" ? ze() : e === "es" ? Te() : e === "fr" ? Ee() : e === "it" ? Ie() : e === "jp" ? Me() : e === "pl" ? Ne() : e === "ru" ? Ve() : e === "uk" ? Ce() : xe()
  },
  Pe = () => "Send Code",
  Re = () => "Enviar o código",
  We = () => "发送验证码",
  De = () => "Code senden",
  Ge = () => "Enviar código",
  qe = () => "Envoyer le code",
  Ke = () => "Invia codice",
  Ae = () => "コードを送信",
  Be = () => "Wyślij kod",
  Le = () => "Отправить код",
  Ye = () => "Надіслати код",
  Ze = () => "Gửi mã",
  Dn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? Pe() : e === "pt" ? Re() : e === "ch" ? We() : e === "de" ? De() : e === "es" ? Ge() : e === "fr" ? qe() : e === "it" ? Ke() : e === "jp" ? Ae() : e === "pl" ? Be() : e === "ru" ? Le() : e === "uk" ? Ye() : Ze()
  },
  He = () => "Sent to",
  Qe = () => "Enviar para",
  Ue = () => "发送给",
  Xe = () => "Gesendet an",
  Fe = () => "Enviado a",
  Je = () => "Envoyé à",
  Oe = () => "Invia a",
  $e = () => "送信先",
  en = () => "Wysłano do",
  nn = () => "Отправлено",
  rn = () => "Надіслано",
  tn = () => "Gửi tới",
  Gn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? He() : e === "pt" ? Qe() : e === "ch" ? Ue() : e === "de" ? Xe() : e === "es" ? Fe() : e === "fr" ? Je() : e === "it" ? Oe() : e === "jp" ? $e() : e === "pl" ? en() : e === "ru" ? nn() : e === "uk" ? rn() : tn()
  },
  on = () => "SMS sent to",
  un = () => "SMS enviado para",
  sn = () => "短信已发送至",
  cn = () => "SMS gesendet an",
  _n = () => "SMS enviado a",
  an = () => "SMS envoyé à",
  fn = () => "SMS inviato a",
  pn = () => "SMS送信先",
  dn = () => "SMS wysłano do",
  hn = () => "SMS отправлено на",
  ln = () => "SMS надіслано на",
  vn = () => "SMS được gửi tới",
  qn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? on() : e === "pt" ? un() : e === "ch" ? sn() : e === "de" ? cn() : e === "es" ? _n() : e === "fr" ? an() : e === "it" ? fn() : e === "jp" ? pn() : e === "pl" ? dn() : e === "ru" ? hn() : e === "uk" ? ln() : vn()
  },
  mn = () => "Try another number",
  yn = () => "Tentar outro número",
  bn = () => "请尝试使用其他号码",
  gn = () => "Andere Nummer versuchen",
  kn = () => "Prueba con otro número",
  jn = () => "Essayez un autre numéro",
  wn = () => "Prova un altro numero",
  Sn = () => "別の番号をお試しください。",
  zn = () => "Spróbuj innego numeru",
  Tn = () => "Попробуйте другой номер",
  En = () => "Спробувати інший номер",
  In = () => "Thử số khác",
  Kn = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? mn() : e === "pt" ? yn() : e === "ch" ? bn() : e === "de" ? gn() : e === "es" ? kn() : e === "fr" ? jn() : e === "it" ? wn() : e === "jp" ? Sn() : e === "pl" ? zn() : e === "ru" ? Tn() : e === "uk" ? En() : In()
  };
export {
  xn as a, Pn as b, Cn as c, Gn as d, qn as e, Nn as i, Vn as n, Rn as p, Wn as r, Dn as s, Kn as t
};