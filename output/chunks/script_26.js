import {
  g as r
} from "./BhCkpOlh.js";
const o = () => "Input the code",
  i = () => "Insira o código",
  u = () => "输入验证码",
  c = () => "Code eingeben",
  s = () => "Introduce el código",
  _ = () => "Entrez le code",
  a = () => "Inserisci il codice",
  p = () => "コードを入力してください。",
  f = () => "Wpisz kod",
  d = () => "Введите код",
  h = () => "Введіть код",
  l = () => "Nhập mã",
  Nn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? o() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? c() : e === "es" ? s() : e === "fr" ? _() : e === "it" ? a() : e === "jp" ? p() : e === "pl" ? f() : e === "ru" ? d() : e === "uk" ? h() : l()
  },
  v = () => "Not a valid phone number",
  m = () => "Não é um número válido",
  y = () => "不是有效的电话号码",
  g = () => "Keine gültige Telefonnummer",
  b = () => "No es un número de teléfono válido",
  k = () => "Numéro non valide",
  j = () => "Numero non valido",
  z = () => "有効な電話番号ではありません。",
  S = () => "To nie jest prawidłowy numer telefonu",
  w = () => "Неверный номер телефона",
  T = () => "Некоректний номер телефону",
  M = () => "Không phải số điện thoại hợp lệ",
  En = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? v() : e === "pt" ? m() : e === "ch" ? y() : e === "de" ? g() : e === "es" ? b() : e === "fr" ? k() : e === "it" ? j() : e === "jp" ? z() : e === "pl" ? S() : e === "ru" ? w() : e === "uk" ? T() : M()
  },
  V = () => "Your phone number is not stored. We only keep a secure, irreversible hash to prevent duplicate accounts.",
  C = () => "Seu número de telefone nunca é armazenado. Mantemos apenas um hash seguro e irreversível para evitar contas duplicadas.",
  N = () => "您的电话号码不会被存储。我们仅保留安全且不可逆的哈希值，以防止重复账户。",
  E = () => "Deine Telefonnummer wird niemals gespeichert. Wir speichern nur einen sicheren, unumkehrbaren Hash, um doppelte Konten zu verhindern.",
  I = () => "Tu número de teléfono nunca se almacena. Solo guardamos un hash seguro e irreversible para evitar cuentas duplicadas.",
  x = () => "Votre numéro de téléphone n'est jamais stocké. Nous conservons uniquement un hash sécurisé et irréversible pour empêcher les comptes en double.",
  P = () => "Il tuo numero di telefono non viene mai memorizzato. Conserviamo solo un hash sicuro e irreversibile per prevenire account duplicati.",
  W = () => "電話番号が保存されることはありません。重複アカウントを防止するため、安全で不可逆なハッシュのみを保持します。",
  R = () => "Twój numer telefonu nigdy nie jest przechowywany. Zachowujemy jedynie bezpieczny, nieodwracalny hash, aby zapobiec tworzeniu duplikatów kont.",
  G = () => "Ваш номер телефона никогда не сохраняется. Мы храним только безопасный необратимый хеш для предотвращения дублирования аккаунтов.",
  q = () => "Ваш номер телефону ніколи не зберігається. Ми зберігаємо лише безпечний незворотний хеш для запобігання дублюванню акаунтів.",
  K = () => "Số điện thoại của bạn không bao giờ được lưu trữ. Chúng tôi chỉ giữ một mã hash an toàn, không thể đảo ngược để ngăn chặn tài khoản trùng lặp.",
  In = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? V() : e === "pt" ? C() : e === "ch" ? N() : e === "de" ? E() : e === "es" ? I() : e === "fr" ? x() : e === "it" ? P() : e === "jp" ? W() : e === "pl" ? R() : e === "ru" ? G() : e === "uk" ? q() : K()
  },
  B = () => "Phone verification",
  D = () => "Verificação de telefone",
  Z = () => "电话验证",
  A = () => "Telefon-Verifizierung",
  H = () => "Verificación de teléfono",
  L = () => "Vérification du téléphone",
  Q = () => "Verifica del telefono",
  U = () => "電話番号の確認",
  X = () => "Weryfikacja telefonu",
  Y = () => "Подтверждение телефона",
  F = () => "Підтвердження телефону",
  J = () => "Xác minh số điện thoại",
  xn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? B() : e === "pt" ? D() : e === "ch" ? Z() : e === "de" ? A() : e === "es" ? H() : e === "fr" ? L() : e === "it" ? Q() : e === "jp" ? U() : e === "pl" ? X() : e === "ru" ? Y() : e === "uk" ? F() : J()
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
  ce = () => "Пожалуйста, подтвердите свой номер телефона, чтобы продолжить рисование. Это помогает нам защищаться от ботов и поддерживать безопасную и творческую атмосферу для всех.",
  se = () => "Будь ласка, підтвердьте свій номер телефону, щоб продовжити малювання. Це допомагає нам відсіювати ботів і забезпечувати безпечний та креативний досвід для всіх.",
  _e = () => "Vui lòng xác minh số điện thoại của bạn để tiếp tục vẽ. Điều này giúp chúng tôi ngăn bot và giữ trải nghiệm sáng tạo, an toàn cho mọi người.",
  Pn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? O() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? ne() : e === "es" ? re() : e === "fr" ? te() : e === "it" ? oe() : e === "jp" ? ie() : e === "pl" ? ue() : e === "ru" ? ce() : e === "uk" ? se() : _e()
  },
  ae = () => "Phone successfully verified",
  pe = () => "Telefone verificado com sucesso",
  fe = () => "电话验证成功",
  de = () => "Telefon erfolgreich verifiziert",
  he = () => "Teléfono verificado correctamente",
  le = () => "Téléphone vérifié avec succès",
  ve = () => "Telefono verificato con successo",
  me = () => "電話番号を確認しました。",
  ye = () => "Telefon został pomyślnie zweryfikowany",
  ge = () => "Телефон успешно подтверждён",
  be = () => "Телефон успішно підтверджено",
  ke = () => "Đã xác minh số điện thoại thành công",
  Wn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? ae() : e === "pt" ? pe() : e === "ch" ? fe() : e === "de" ? de() : e === "es" ? he() : e === "fr" ? le() : e === "it" ? ve() : e === "jp" ? me() : e === "pl" ? ye() : e === "ru" ? ge() : e === "uk" ? be() : ke()
  },
  je = () => "Resend Code",
  ze = () => "Reenviar Código",
  Se = () => "重新发送验证码",
  we = () => "Code erneut senden",
  Te = () => "Reenviar código",
  Me = () => "Renvoyer le code",
  Ve = () => "Reinvia codice",
  Ce = () => "コードを再送信",
  Ne = () => "Wyślij kod ponownie",
  Ee = () => "Отправить код ещё раз",
  Ie = () => "Надіслати код ще раз",
  xe = () => "Gửi lại mã",
  Rn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? je() : e === "pt" ? ze() : e === "ch" ? Se() : e === "de" ? we() : e === "es" ? Te() : e === "fr" ? Me() : e === "it" ? Ve() : e === "jp" ? Ce() : e === "pl" ? Ne() : e === "ru" ? Ee() : e === "uk" ? Ie() : xe()
  },
  Pe = () => "Send Code",
  We = () => "Enviar o código",
  Re = () => "发送验证码",
  Ge = () => "Code senden",
  qe = () => "Enviar código",
  Ke = () => "Envoyer le code",
  Be = () => "Invia codice",
  De = () => "コードを送信",
  Ze = () => "Wyślij kod",
  Ae = () => "Отправить код",
  He = () => "Надіслати код",
  Le = () => "Gửi mã",
  Gn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Pe() : e === "pt" ? We() : e === "ch" ? Re() : e === "de" ? Ge() : e === "es" ? qe() : e === "fr" ? Ke() : e === "it" ? Be() : e === "jp" ? De() : e === "pl" ? Ze() : e === "ru" ? Ae() : e === "uk" ? He() : Le()
  },
  Qe = () => "Sent to",
  Ue = () => "Enviar para",
  Xe = () => "发送给",
  Ye = () => "Gesendet an",
  Fe = () => "Enviado a",
  Je = () => "Envoyé à",
  Oe = () => "Invia a",
  $e = () => "送信先",
  en = () => "Wysłano do",
  nn = () => "Отправлено",
  rn = () => "Надіслано",
  tn = () => "Gửi tới",
  qn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Qe() : e === "pt" ? Ue() : e === "ch" ? Xe() : e === "de" ? Ye() : e === "es" ? Fe() : e === "fr" ? Je() : e === "it" ? Oe() : e === "jp" ? $e() : e === "pl" ? en() : e === "ru" ? nn() : e === "uk" ? rn() : tn()
  },
  on = () => "SMS sent to",
  un = () => "SMS enviado para",
  cn = () => "短信已发送至",
  sn = () => "SMS gesendet an",
  _n = () => "SMS enviado a",
  an = () => "SMS envoyé à",
  pn = () => "SMS inviato a",
  fn = () => "SMS送信先",
  dn = () => "SMS wysłano do",
  hn = () => "SMS отправлено на",
  ln = () => "SMS надіслано на",
  vn = () => "SMS được gửi tới",
  Kn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? on() : e === "pt" ? un() : e === "ch" ? cn() : e === "de" ? sn() : e === "es" ? _n() : e === "fr" ? an() : e === "it" ? pn() : e === "jp" ? fn() : e === "pl" ? dn() : e === "ru" ? hn() : e === "uk" ? ln() : vn()
  },
  mn = () => "Try another number",
  yn = () => "Tentar outro número",
  gn = () => "请尝试使用其他号码",
  bn = () => "Andere Nummer versuchen",
  kn = () => "Prueba con otro número",
  jn = () => "Essayez un autre numéro",
  zn = () => "Prova un altro numero",
  Sn = () => "別の番号をお試しください。",
  wn = () => "Spróbuj innego numeru",
  Tn = () => "Попробуйте другой номер",
  Mn = () => "Спробувати інший номер",
  Vn = () => "Thử số khác",
  Bn = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? mn() : e === "pt" ? yn() : e === "ch" ? gn() : e === "de" ? bn() : e === "es" ? kn() : e === "fr" ? jn() : e === "it" ? zn() : e === "jp" ? Sn() : e === "pl" ? wn() : e === "ru" ? Tn() : e === "uk" ? Mn() : Vn()
  };
export {
  xn as a, Pn as b, In as c, qn as d, Kn as e, Nn as i, En as n, Wn as p, Rn as r, Gn as s, Bn as t
};