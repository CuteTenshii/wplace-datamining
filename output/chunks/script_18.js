var Nt = Object.defineProperty;
var At = q => {
  throw TypeError(q)
};
var Mt = (q, t, e) => t in q ? Nt(q, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : q[t] = e;
var y = (q, t, e) => Mt(q, typeof t != "symbol" ? t + "" : t, e),
  et = (q, t, e) => t.has(q) || At("Cannot " + e);
var V = (q, t, e) => (et(q, t, "read from private field"), e ? e.call(q) : t.get(q)),
  p = (q, t, e) => t.has(q) ? At("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(q) : t.set(q, e),
  l = (q, t, e, r) => (et(q, t, "write to private field"), r ? r.call(q, e) : t.set(q, e), e),
  B = (q, t, e) => (et(q, t, "access private method"), e);
import {
  g as $,
  T as vt,
  t as Ct,
  W as L,
  a as qt,
  F as rt,
  u as Q,
  G as Lt,
  H as zt,
  d as Ut
} from "./D3eH2KVB.js";
import {
  e as ut,
  i as lt,
  h as pt,
  bJ as ot,
  aF as Yt,
  A as Ot,
  D as xt
} from "./Dkgr_Dbt.js";
import {
  g as _t
} from "./psUupctz.js";
import {
  r as Ft
} from "./CGTnHD_j.js";
import {
  c as bt
} from "./DbffVGnc.js";
import {
  d as Rt
} from "./DzBCW1Dp.js";
import {
  g as K
} from "./BhCkpOlh.js";
import "./6zNQy5O7.js";
const Wt = () => "Download WPlace from the Google Play Store.",
  Jt = () => "Baixe o WPlace na Google Play Store.",
  Kt = () => "请从 Google Play 商店下载 WPlace。",
  Qt = () => "Lade WPlace aus dem Google Play Store herunter.",
  Zt = () => "Descarga WPlace desde Google Play Store.",
  Xt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Ht = () => "Scarica WPlace dal Google Play Store.",
  $t = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  te = () => "Pobierz WPlace ze Sklepu Google Play.",
  ee = () => "Скачайте WPlace из Google Play Store.",
  qe = () => "Завантажте WPlace з Google Play Store.",
  re = () => "Hãy tải WPlace từ Google Play Store.",
  ne = (q = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? Wt() : e === "pt" ? Jt() : e === "ch" ? Kt() : e === "de" ? Qt() : e === "es" ? Zt() : e === "fr" ? Xt() : e === "it" ? Ht() : e === "jp" ? $t() : e === "pl" ? te() : e === "ru" ? ee() : e === "uk" ? qe() : re()
  },
  oe = () => "We couldn't find your account. Please try again later.",
  ae = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  se = () => "找不到你的账号，请稍后重试。",
  ie = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  Ve = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  ce = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  Ae = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  ue = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  le = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  pe = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  de = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  ge = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  dt = (q = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? oe() : e === "pt" ? ae() : e === "ch" ? se() : e === "de" ? ie() : e === "es" ? Ve() : e === "fr" ? ce() : e === "it" ? Ae() : e === "jp" ? ue() : e === "pl" ? le() : e === "ru" ? pe() : e === "uk" ? de() : ge()
  },
  ye = () => "Reload the page and try again.",
  fe = () => "Recarregue a página e tente novamente.",
  he = () => "请刷新页面后重试。",
  me = () => "Lade die Seite neu und versuche es erneut.",
  we = () => "Recarga la página e inténtalo de nuevo.",
  Pe = () => "Rechargez la page et réessayez.",
  Be = () => "Ricarica la pagina e riprova.",
  Ee = () => "ページを再読み込みして、もう一度お試しください。",
  ve = () => "Odśwież stronę i spróbuj ponownie.",
  be = () => "Перезагрузите страницу и попробуйте снова.",
  Te = () => "Перезавантажте сторінку та спробуйте ще раз.",
  De = () => "Hãy tải lại trang và thử lại.",
  Ie = (q = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? ye() : e === "pt" ? fe() : e === "ch" ? he() : e === "de" ? me() : e === "es" ? we() : e === "fr" ? Pe() : e === "it" ? Be() : e === "jp" ? Ee() : e === "pl" ? ve() : e === "ru" ? be() : e === "uk" ? Te() : De()
  },
  Ge = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  ke = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  je = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Se = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Ne = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Me = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Ce = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Le = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  ze = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Ue = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Ye = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Oe = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  xe = (q = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? Ge() : e === "pt" ? ke() : e === "ch" ? je() : e === "de" ? Se() : e === "es" ? Ne() : e === "fr" ? Me() : e === "it" ? Ce() : e === "jp" ? Le() : e === "pl" ? ze() : e === "ru" ? Ue() : e === "uk" ? Ye() : Oe()
  },
  _e = () => "Play Billing not supported.",
  Fe = () => "Play Billing não suportado.",
  Re = () => "不支持 Play Billing。",
  We = () => "Play Billing wird nicht unterstützt.",
  Je = () => "Play Billing no es compatible.",
  Ke = () => "Play Billing non pris en charge.",
  Qe = () => "Play Billing non supportato.",
  Ze = () => "Play Billing はサポートされていません。",
  Xe = () => "Play Billing nie jest obsługiwane.",
  He = () => "Play Billing не поддерживается.",
  $e = () => "Play Billing не підтримується.",
  tq = () => "Play Billing không được hỗ trợ.",
  gt = (q = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? _e() : e === "pt" ? Fe() : e === "ch" ? Re() : e === "de" ? We() : e === "es" ? Je() : e === "fr" ? Ke() : e === "it" ? Qe() : e === "jp" ? Ze() : e === "pl" ? Xe() : e === "ru" ? He() : e === "uk" ? $e() : tq()
  },
  eq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  qq = "data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  rq = "" + new URL("../assets/notification.CPyrWqU1.mp3", import.meta.url).href,
  nq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  oq = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  aq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  sr = sq();
let yt;
async function ct() {
  yt ?? (yt = new AudioContext);
  const q = yt;
  return q.state !== "running" && await Promise.race([q.resume().catch(() => {}), new Promise(t => setTimeout(t, 150))]), q.state === "running" ? q : void 0
}

function ir() {
  ct()
}

function Tt(q, t) {
  const e = new GainNode(q, {
      gain: t
    }),
    r = new BiquadFilterNode(q, {
      type: "lowpass",
      frequency: 5e3
    });
  return e.connect(r).connect(q.destination), e
}

function T(q, t, e, r, n, a, s) {
  const i = new OscillatorNode(q, {
    type: "triangle",
    frequency: e
  });
  s && (i.frequency.setValueAtTime(e, r), i.frequency.exponentialRampToValueAtTime(s, r + n));
  const c = new GainNode(q);
  c.gain.setValueAtTime(0, r), c.gain.linearRampToValueAtTime(a, r + .008), c.gain.exponentialRampToValueAtTime(.001, r + n), i.connect(c).connect(t), i.start(r), i.stop(r + n + .05)
}
async function Vr() {
  if ($.muted) return !0;
  const q = await ct();
  if (!q) return !1;
  const t = Tt(q, .25),
    e = q.currentTime + .03;
  return T(q, t, 523.25, e, .12, .5), T(q, t, 659.25, e + .085, .12, .55), T(q, t, 783.99, e + .17, .12, .6), T(q, t, 1046.5, e + .255, .55, .7), T(q, t, 1318.51, e + .255, .55, .25), T(q, t, 2093, e + .33, .4, .1), !0
}
async function cr() {
  if ($.muted) return !0;
  const q = await ct();
  if (!q) return !1;
  const t = Tt(q, .22),
    e = q.currentTime + .03;
  return T(q, t, 329.63, e, .16, .55), T(q, t, 261.63, e + .15, .5, .6, 233.08), !0
}

function sq() {
  const q = {
    plop: new Audio(nq),
    smallPlop: new Audio(aq),
    bigPlop: new Audio(eq),
    smallDropplet: new Audio(oq),
    droppletAndPlop: new Audio(qq),
    notification1: new Audio(rq)
  };
  for (const t of Object.values(q)) t.preload = "auto", t.volume = .3;
  return q
}

function iq(q) {
  return Math.floor(Math.random() * q)
}
const at = 14.5;
async function Ar() {
  const q = uq();
  if (q) return q;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((r, n) => navigator.geolocation.getCurrentPosition(a => r(a), a => n(a)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: at
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...Vq().pos,
    zoom: at
  }
}

function Vq() {
  const q = Object.entries(cq),
    t = iq(q.length),
    [e, r] = q[t];
  return {
    city: e,
    pos: r
  }
}
const cq = {
    tokyo: {
      lat: 35.677545560719665,
      lng: 139.76394445809638
    },
    paris: {
      lat: 48.8537151734952,
      lng: 2.3484026030630787
    },
    newYork: {
      lat: 40.71283173786517,
      lng: -74.00599771376795
    },
    saoPaulo: {
      lat: -23.550584064565356,
      lng: -46.63339720713918
    },
    sydney: {
      lat: -33.86943325619071,
      lng: 151.2083447239608
    }
  },
  Dt = "location";

function Aq(q, t) {
  localStorage.setItem(Dt, JSON.stringify({
    ...q,
    zoom: t
  }))
}

function uq() {
  const q = localStorage.getItem(Dt);
  if (!q) return;
  const t = JSON.parse(q);
  return t.zoom ?? (t.zoom = at), t
}

function ur(q) {
  return q.lat >= -90 && q.lat <= 90 && q.lng >= -180 && q.lng <= 180
}
var _, F;
class lq {
  constructor() {
    p(this, _, ut(-1));
    p(this, F, ut([]))
  }
  get idx() {
    return lt(V(this, _))
  }
  set idx(t) {
    pt(V(this, _), t, !0)
  }
  get entries() {
    return lt(V(this, F))
  }
  set entries(t) {
    pt(V(this, F), t)
  }
  hasNext() {
    return this.idx < this.entries.length - 1
  }
  goToNext(t) {
    const e = this.idx + 1,
      r = this.entries[e];
    r && (this.idx = e, t.flyTo({
      center: r.pos,
      zoom: r.zoom
    }))
  }
  hasPrev() {
    return this.idx > 0
  }
  goToPrev(t) {
    const e = this.idx - 1,
      r = this.entries[e];
    r && (this.idx = e, t.flyTo({
      center: r.pos,
      zoom: r.zoom
    }))
  }
  isEmpty() {
    return this.entries.length === 0
  }
  push(t) {
    this.idx = this.idx + 1, this.entries = [...this.entries.slice(0, this.idx), t]
  }
}
_ = new WeakMap, F = new WeakMap;
const lr = new lq;

function pq(q, t) {
  const e = {};
  for (let r = 0; r < q.length; r++) {
    const n = q[r],
      a = t(n, r, q);
    Object.hasOwn(e, a) || (e[a] = []), e[a].push(n)
  }
  return e
}
const ft = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
  return this
})();

function dq(q, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: r
  } = t, n = function(a) {
    const s = r ? r(a) : a;
    if (e.has(s)) return e.get(s);
    const i = q.call(this, a);
    return e.set(s, i), i
  };
  return n.cache = e, n
}

function gq() {}

function ht(q) {
  return typeof ft.Buffer < "u" && ft.Buffer.isBuffer(q)
}

function mt(q) {
  return Object.getOwnPropertySymbols(q).filter(t => Object.prototype.propertyIsEnumerable.call(q, t))
}

function wt(q) {
  return q == null ? q === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(q)
}
const yq = "[object RegExp]",
  fq = "[object String]",
  hq = "[object Number]",
  mq = "[object Boolean]",
  wq = "[object Symbol]",
  Pq = "[object Date]",
  Bq = "[object Map]",
  Eq = "[object Set]",
  vq = "[object Array]",
  bq = "[object Function]",
  Tq = "[object ArrayBuffer]",
  nt = "[object Object]",
  Dq = "[object Error]",
  Iq = "[object DataView]",
  Gq = "[object Uint8Array]",
  kq = "[object Uint8ClampedArray]",
  jq = "[object Uint16Array]",
  Sq = "[object Uint32Array]",
  Nq = "[object BigUint64Array]",
  Mq = "[object Int8Array]",
  Cq = "[object Int16Array]",
  Lq = "[object Int32Array]",
  zq = "[object BigInt64Array]",
  Uq = "[object Float32Array]",
  Yq = "[object Float64Array]";

function Pt(q) {
  if (!q || typeof q != "object") return !1;
  const t = Object.getPrototypeOf(q);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(q) === "[object Object]" : !1
}

function Oq(q, t) {
  return q === t || Number.isNaN(q) && Number.isNaN(t)
}

function xq(q, t, e) {
  return z(q, t, void 0, void 0, void 0, void 0, e)
}

function z(q, t, e, r, n, a, s) {
  const i = s(q, t, e, r, n, a);
  if (i !== void 0) return i;
  if (typeof q == typeof t) switch (typeof q) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return q === t;
    case "number":
      return q === t || Object.is(q, t);
    case "function":
      return q === t;
    case "object":
      return O(q, t, a, s)
  }
  return O(q, t, a, s)
}

function O(q, t, e, r) {
  if (Object.is(q, t)) return !0;
  let n = wt(q),
    a = wt(t);
  if (n === "[object Arguments]" && (n = nt), a === "[object Arguments]" && (a = nt), n !== a) return !1;
  switch (n) {
    case fq:
      return q.toString() === t.toString();
    case hq:
      return Oq(q.valueOf(), t.valueOf());
    case mq:
    case Pq:
    case wq:
      return Object.is(q.valueOf(), t.valueOf());
    case yq:
      return q.source === t.source && q.flags === t.flags;
    case bq:
      return q === t
  }
  e = e ?? new Map;
  const s = e.get(q),
    i = e.get(t);
  if (s != null && i != null) return s === t;
  e.set(q, t), e.set(t, q);
  try {
    switch (n) {
      case Bq:
        if (q.size !== t.size) return !1;
        for (const [c, u] of q.entries())
          if (!t.has(c) || !z(u, t.get(c), c, q, t, e, r)) return !1;
        return !0;
      case Eq: {
        if (q.size !== t.size) return !1;
        const c = Array.from(q.values()),
          u = Array.from(t.values());
        for (let g = 0; g < c.length; g++) {
          const w = c[g],
            h = u.findIndex(P => z(w, P, void 0, q, t, e, r));
          if (h === -1) return !1;
          u.splice(h, 1)
        }
        return !0
      }
      case vq:
      case Gq:
      case kq:
      case jq:
      case Sq:
      case Nq:
      case Mq:
      case Cq:
      case Lq:
      case zq:
      case Uq:
      case Yq:
        if (ht(q) !== ht(t) || q.length !== t.length) return !1;
        for (let c = 0; c < q.length; c++)
          if (!z(q[c], t[c], c, q, t, e, r)) return !1;
        return !0;
      case Tq:
        return q.byteLength !== t.byteLength ? !1 : O(new Uint8Array(q), new Uint8Array(t), e, r);
      case Iq:
        return q.byteLength !== t.byteLength || q.byteOffset !== t.byteOffset ? !1 : O(new Uint8Array(q), new Uint8Array(t), e, r);
      case Dq:
        return q.name === t.name && q.message === t.message;
      case nt: {
        if (!(O(q.constructor, t.constructor, e, r) || Pt(q) && Pt(t))) return !1;
        const c = [...Object.keys(q), ...mt(q)],
          u = [...Object.keys(t), ...mt(t)];
        if (c.length !== u.length) return !1;
        for (let g = 0; g < c.length; g++) {
          const w = c[g],
            h = q[w];
          if (!Object.hasOwn(t, w)) return !1;
          const P = t[w];
          if (!z(h, P, w, q, t, e, r)) return !1
        }
        return !0
      }
      default:
        return !1
    }
  } finally {
    e.delete(q), e.delete(t)
  }
}

function _q(q, t) {
  return xq(q, t, gq)
}
const It = typeof window < "u" ? window : void 0;

function Fq(q) {
  let t = q.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var N, R;
class Rq {
  constructor(t = {}) {
    p(this, N);
    p(this, R);
    const {
      window: e = It,
      document: r = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (l(this, N, r), l(this, R, bt(n => {
      const a = ot(e, "focusin", n),
        s = ot(e, "focusout", n);
      return () => {
        a(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = V(this, R)) == null || t.call(this), V(this, N) ? Fq(V(this, N)) : null
  }
}
N = new WeakMap, R = new WeakMap;
new Rq;

function Wq(q, t) {
  switch (q) {
    case "post":
      Ot(t);
      break;
    case "pre":
      Yt(t);
      break
  }
}

function Gt(q, t, e, r = {}) {
  const {
    lazy: n = !1
  } = r;
  let a = !n,
    s = Array.isArray(q) ? [] : void 0;
  Wq(t, () => {
    const i = Array.isArray(q) ? q.map(u => u()) : q();
    if (!a) {
      a = !0, s = i;
      return
    }
    const c = xt(() => e(i, s));
    return s = i, c
  })
}

function Jq(q, t, e) {
  Gt(q, "post", t, e)
}

function Kq(q, t, e) {
  Gt(q, "pre", t, e)
}
Jq.pre = Kq;

function Qq(q, t) {
  switch (q) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function kt(q, t, e, r, n, a) {
  if (q === null || typeof q != "object") return q;
  const s = Object.getPrototypeOf(q);
  if (s !== null && s !== Object.prototype && !Array.isArray(q)) return q;
  let i = e.get(q);
  return i || (i = new Proxy(q, {
    get: (c, u) => (r == null || r(), kt(Reflect.get(c, u), t, e, r, n, a)),
    set: (c, u, g) => (n == null || n(), Reflect.set(c, u, g), a(t), !0)
  }), e.set(q, i)), i
}
var E, v, M, b, j, I, Z, m, G, C, W, J, X, f, U, Y, st, St;
class jt {
  constructor(t, e, r = {}) {
    p(this, f);
    p(this, E);
    p(this, v);
    p(this, M);
    p(this, b);
    p(this, j);
    p(this, I);
    p(this, Z, new WeakMap);
    p(this, m);
    p(this, G);
    p(this, C);
    p(this, W);
    p(this, J);
    p(this, X, t => {
      var e;
      t.key !== V(this, v) || t.newValue === null || (l(this, E, B(this, f, U).call(this, t.newValue)), (e = V(this, I)) == null || e.call(this))
    });
    const {
      storage: n = "local",
      serializer: a = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: i = !0
    } = r, c = "window" in r ? r.window : It;
    if (l(this, E, e), l(this, v, t), l(this, M, a), l(this, m, i), l(this, C, c), l(this, W, s), l(this, J, n), c === void 0) return;
    const u = Qq(n, c);
    l(this, b, u);
    const g = u.getItem(t);
    g !== null ? l(this, E, B(this, f, U).call(this, g)) : i && B(this, f, Y).call(this, e), B(this, f, st).call(this)
  }
  get current() {
    var e, r, n, a;
    (e = V(this, j)) == null || e.call(this);
    let t;
    if (V(this, m)) {
      const s = (r = V(this, b)) == null ? void 0 : r.getItem(V(this, v));
      t = s ? B(this, f, U).call(this, s) : V(this, E)
    } else t = V(this, E);
    return kt(t, t, V(this, Z), (n = V(this, j)) == null ? void 0 : n.bind(this), (a = V(this, I)) == null ? void 0 : a.bind(this), B(this, f, Y).bind(this))
  }
  set current(t) {
    var e;
    B(this, f, Y).call(this, t), (e = V(this, I)) == null || e.call(this)
  }
  get connected() {
    return V(this, m)
  }
  disconnect() {
    var e, r;
    if (!V(this, m)) return;
    const t = (e = V(this, b)) == null ? void 0 : e.getItem(V(this, v));
    t && l(this, E, B(this, f, U).call(this, t)), l(this, m, !1), (r = V(this, b)) == null || r.removeItem(V(this, v)), B(this, f, St).call(this)
  }
  connect() {
    V(this, m) || (l(this, m, !0), B(this, f, Y).call(this, V(this, E)), B(this, f, st).call(this))
  }
}
E = new WeakMap, v = new WeakMap, M = new WeakMap, b = new WeakMap, j = new WeakMap, I = new WeakMap, Z = new WeakMap, m = new WeakMap, G = new WeakMap, C = new WeakMap, W = new WeakMap, J = new WeakMap, X = new WeakMap, f = new WeakSet, U = function(t) {
  try {
    return V(this, M).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${V(this,v)}"`, e);
    return
  }
}, Y = function(t) {
  var e;
  if (!V(this, m)) {
    l(this, E, t);
    return
  }
  try {
    t !== void 0 && ((e = V(this, b)) == null || e.setItem(V(this, v), V(this, M).serialize(t)))
  } catch (r) {
    console.error(`Error when writing value from persisted store "${V(this,v)}" to ${V(this,b)}`, r)
  }
}, st = function() {
  !V(this, C) || !V(this, m) || l(this, j, bt(t => (l(this, I, t), l(this, G, V(this, m) && V(this, W) && V(this, J) === "local" ? ot(V(this, C), "storage", V(this, X)) : void 0), () => {
    var e;
    (e = V(this, G)) == null || e.call(this), l(this, G, void 0), l(this, I, void 0)
  })))
}, St = function() {
  var t;
  (t = V(this, G)) == null || t.call(this), l(this, G, void 0), l(this, j, void 0)
};
class x extends Promise {
  constructor(e) {
    let r;
    super((s, i) => {
      r = {
        resolve: a("fulfilled", s),
        reject: a("rejected", i)
      }, e == null || e(r.resolve, r.reject)
    });
    y(this, "resolvers");
    y(this, "state", {
      status: "pending"
    });
    this.resolvers = r;
    const n = this;

    function a(s, i) {
      return function(...u) {
        return n.state.status === "pending" && (n.state = n.mountStateByStatus(s, u[0])), i(...u)
      }
    }
  }
  get resolve() {
    return this.resolvers.resolve
  }
  get reject() {
    return this.resolvers.reject
  }
  get isFinished() {
    return this.state.status && this.state.status !== "pending"
  }
  mountStateByStatus(e, r) {
    switch (e) {
      case "fulfilled":
        return {
          status: e, value: r
        };
      case "rejected":
        return {
          status: e, reason: r
        }
    }
    return this.state
  }
  static create(e) {
    const r = new x;
    return x.trap(e, r), r
  }
  static async trap(e, r) {
    try {
      return r.resolve(await e)
    } catch (n) {
      r.reject(n)
    }
  }
  static delay(e) {
    const r = x.create(void 0),
      n = setTimeout(r.resolve, e);
    return r.catch(() => clearTimeout(n)), r
  }
}
var it = (q => (q.Play = "https://play.google.com/billing", q))(it || {});

function Zq(q) {
  return dq(q)
}

function Bt(q) {
  return Zq(function(...e) {
    return x.create(q(...e))
  })
}
const A = class A {
  constructor(t) {
    this.state = t
  }
  static get checkout() {
    var t, e;
    return ((t = A.checkoutState) == null ? void 0 : t.current) && new A((e = A.checkoutState) == null ? void 0 : e.current)
  }
  get startedAt() {
    return this.state.startedAt
  }
  get finishedAt() {
    return this.state.finishedAt
  }
  get type() {
    return this.state.type
  }
  static shouldRecover() {
    var t, e;
    return D() && ((t = A.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = A.checkout) == null ? void 0 : e.startedAt) <= 3 * vt.day
  }
  static isRunning() {
    var t;
    return ((t = A.memoryCheckout) == null ? void 0 : t.type) === "running"
  }
  applyFinishIfNecessary(t) {
    this.startedAt > t.startedAt || A.isRunning() && A.onChangeCheckout({
      ...this.state,
      finishedAt: Date.now(),
      type: "finished",
      view: void 0,
      droplets: 0
    })
  }
  static start() {
    return A.onChangeCheckout({
      type: "running",
      startedAt: Date.now(),
      view: void 0,
      finishedAt: void 0
    })
  }
  static finish(t) {
    var e, r;
    return (r = (e = A.checkout) == null ? void 0 : e.applyFinishIfNecessary) == null ? void 0 : r.call(e, t)
  }
  static markViewed() {
    var e;
    const t = (e = A.checkout) == null ? void 0 : e.state;
    t && A.onChangeCheckout({
      startedAt: t == null ? void 0 : t.startedAt,
      finishedAt: Date.now(),
      droplets: t.type === "running" ? 0 : t.droplets,
      type: "finished",
      view: Date.now()
    })
  }
  static clear() {
    A.checkoutState.current = void 0
  }
  static onChangeCheckout(t) {
    return A.checkoutState.current = t, A.memoryCheckout = A.checkout, A.memoryCheckout
  }
  static preventNavigationInTWAIfInCheckout(t) {
    D() && (A.addFocusListener(t), A.addNavigationListener(t))
  }
  static addFocusListener(t) {
    window.addEventListener("focus", () => {
      k.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", r => {
      var n;
      (!document.hasFocus() && A.memoryCheckout || A.isRunning()) && (r.preventDefault(), (n = k.log) == null || n.call(k, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return A.markViewed(), _t(Ft("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    $.pendingHistoryDialogOpen = !0
  }
};
y(A, "checkoutState", new jt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), y(A, "memoryCheckout");
let d = A;

function Et(q) {
  const t = q;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var H;
const o = class o {
  static get playBillingBlockedError() {
    return o.errors.at(-1)
  }
  static get playBillingBlocked() {
    return !!o.errors.at(-1)
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...t) {
    var r;
    const e = t.map(n => JSON.stringify(n));
    throw (r = o.error) == null || r.call(o, ...t), e.forEach(n => Ct.error(n)), new L(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const r = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: it.Play,
      data: r
    }], {
      total: {
        label: "Total",
        amount: {
          currency: "USD",
          value: "0"
        }
      }
    })
  }
  static setAsPlayBillingBlockedErrorIfNecessary(t, e) {
    if (t) try {
      const r = o.PLAY_BILLING_NOT_AVAILABLE.find(n => _q(Et(t), Et(n)));
      if (!r) return;
      if ((r == null ? void 0 : r.kind) === "not-twa-context") {
        o.forceTWA.current = !1;
        return
      }
      o.errors.push(r)
    } finally {
      throw e || t
    }
  }
  static async getObfuscatedAccountId() {
    const t = await qt.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw o.setAsPlayBillingBlockedErrorIfNecessary(o.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new L("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await o.getObfuscatedAccountId();
    return o.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var w;
    o.twaGuard();
    const e = rt(t);
    if (!(e != null && e.productId)) throw new L("No sku config or productId found");
    if (!((w = Q.data) != null && w.id)) throw new L("No user id");
    const r = await o.createPaymentBySkuId(t),
      n = d.start(),
      s = await r.show().catch(o.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var h;
        return (h = d.finish) == null ? void 0 : h.call(d, n)
      }),
      i = s == null ? void 0 : s.toJSON();
    let c = "unknown";
    return i != null && i.details.purchaseToken ? u(c) : u("fail", new L("Play Billing returned no purchase token")), {
      setStatus: u,
      status: c,
      out: i,
      verify: g
    };
    async function u(h, P) {
      if (c = h, await (s == null ? void 0 : s.complete(h).catch(() => {})), P) throw P
    }
    async function g() {
      var h, P;
      if ((h = i == null ? void 0 : i.details) != null && h.purchaseToken) try {
        const {
          droplets: S
        } = await o.verifyBySKU({
          sku: t,
          token: (P = i == null ? void 0 : i.details) == null ? void 0 : P.purchaseToken
        });
        return await u("success"), await o.refresh(), d.openCheckoutDialog(S)
      } catch (S) {
        await u("fail", S)
      }
    }
  }
  static refresh() {
    return o.twaGuard(), Q.refresh()
  }
  static async dispatchPendingPurchases() {
    o.twaGuard();
    const t = {
      credited: 0,
      pending: 0
    };
    try {
      if (!o.service) return t;
      const e = await o.service.listPurchases().catch(() => []);
      if (!e.length) return t;
      const r = await Promise.allSettled(e.map(s => o.verifyBySKU({
        sku: s.itemId,
        token: s.purchaseToken
      })));
      let n = 0,
        a = 0;
      for (const s of r) s.status === "fulfilled" ? n += s.value.droplets : a++;
      return n > 0 && await o.refresh(), {
        credited: n,
        pending: a
      }
    } catch {
      return t
    }
  }
  static async autoRecoverPendingPurchases() {
    var n;
    if (o.twaGuard(), await o.loadService(), !d.shouldRecover()) return;
    const {
      credited: t,
      pending: e
    } = await o.dispatchPendingPurchases().catch(() => ({
      credited: 0,
      pending: 0
    }));
    if (t > 0) {
      d.openCheckoutDialog(t);
      return
    }
    if (e > 0) {
      d.openPendingDialog();
      return
    }
    const r = (n = d.checkout) == null ? void 0 : n.state;
    if ((r == null ? void 0 : r.type) === "finished" && !r.view) {
      r.droplets && d.openCheckoutDialog(r.droplets);
      return
    }
    d.clear()
  }
  static verifyBySKU(t) {
    o.twaGuard();
    const e = rt(t.sku);
    return qt.verifyPlayPurchase({
      productId: Number(e.productId),
      purchaseToken: t.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return !!(D() && o.forceTWA.current !== !1 && (o.forceTWA.current || o.service))
  }
  static isTWALoaded() {
    return !!(Q.data && o.service && o.forceTWA.current !== !1)
  }
  static async load() {
    var t;
    if (D()) {
      try {
        await this.loadMapSKUs()
      } catch (e) {
        (t = o.log) == null || t.call(o, e)
      }
      o.service && (await o.recover(), o.forceTWA.current = !0)
    }
  }
  static async recover() {
    var t;
    if (d.shouldRecover()) {
      await o.loadService();
      try {
        const e = await o.getPurchasesAfter(),
          n = ((t = pq(e, a => a.status).paid) == null ? void 0 : t.reduce((a, s) => a + s.droplets, 0)) ?? 0;
        if (n > 0) {
          await d.openCheckoutDialog(n);
          return
        }
        if (e != null && e.length) {
          await d.openPendingDialog();
          return
        }
      } finally {
        await o.refresh()
      }
    }
  }
  static async getPurchasesAfter() {
    var n, a;
    const t = ((n = d.checkout) == null ? void 0 : n.state.view) ?? ((a = d.checkout) == null ? void 0 : a.state.startedAt);
    return t ? (await qt.listPlayPurchaseHistory()).purchases.sort((s, i) => Date.parse(i.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return V(this, H).has(t)
  }
  static checkIfShouldForceTWA() {
    var e, r;
    if (!D()) {
      o.forceTWA.current = !1;
      return
    }
    if (this.hasTWAFlag) {
      o.forceTWA.current = !0;
      const n = new URL(location.href);
      n.search = (n.searchParams.delete("twa"), n.searchParams.toString()), window.history.replaceState({}, "", n.href)
    }
    const t = [document.referrer, (r = (e = window == null ? void 0 : window.opener) == null ? void 0 : e.document) == null ? void 0 : r.referrer].filter(n => n);
    if (t != null && t.length)
      for (const n of t) {
        const a = n.match(o.pattern),
          s = a == null ? void 0 : a[1];
        s && s === Lt.appName && (o.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    D() && await o.load()
  }
  static isSamsung() {
    return Rt() === "Samsung Internet"
  }
  static nativeFormat(t) {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: t.price.currency
    }).format(+t.price.value)
  }
  static printPriceBySKU(t) {
    var n;
    const e = o.mapSKUs.get(t);
    if ((e == null ? void 0 : e.price) != null) return this.nativeFormat(e);
    const r = {
      value: ((n = rt(t)) == null ? void 0 : n.price) * zt / 100,
      currency: "USD"
    };
    return [r.currency, Number(r.value).toFixed(2)].join(" ")
  }
};
H = new WeakMap, y(o, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), y(o, "forceTWA", new jt("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), y(o, "POOLING_TIME", 10), y(o, "errors", []), y(o, "service"), y(o, "mapSKUs", new Map), y(o, "referrer", []), y(o, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: dt(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: dt(),
    name: "NotSupportedError",
    message: 'The payment method "https://play.google.com/billing" is not supported.'
  }
}), y(o, "PLAY_BILLING_NOT_AVAILABLE", [{
  kind: "not-twa-context",
  printError: gt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  kind: "not-twa-context",
  printError: gt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}, {
  kind: "not-twa-context",
  printError: ne(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: Ie(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: xe(),
  name: "AbortError",
  message: "Invalid state."
}, o.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, o.ERRORS.GENERIC_NOT_SUPPORTED]), y(o, "loadMapSKUs", Bt(async () => {
  var a, s;
  if (!D()) return;
  o.twaGuard();
  const t = Object.values(Ut.products).filter(i => "lookupKey" in i).map(i => i.lookupKey),
    e = await ((a = o.loadService) == null ? void 0 : a.call(o).catch(o.setAsPlayBillingBlockedErrorIfNecessary)),
    r = await (e == null ? void 0 : e.getDetails(t).catch(o.setAsPlayBillingBlockedErrorIfNecessary)),
    n = new Map(r == null ? void 0 : r.map(i => [i.itemId, i]));
  return (s = o.mapSKUs) != null && s.size || (o.mapSKUs = n), n
})), y(o, "loadService", Bt(() => {
  var t, e, r;
  return (r = (e = (t = o.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, it.Play)) == null ? void 0 : r.then(n => o.service ?? (o.service = n)).then(n => (n && (o.forceTWA.current = !0), n))
})), p(o, H, new Set([1, !0].map(String))), y(o, "onInit", async t => {
  o.loadService(), o.checkIfShouldForceTWA(), d.preventNavigationInTWAIfInCheckout(t)
});
let k = o;

function pr(q) {
  const t = {
      opaque: !0
    },
    e = q.searchParams.get("lat"),
    r = q.searchParams.get("lng");
  e && r && (t.pos = {
    lat: parseFloat(e),
    lng: parseFloat(r)
  });
  const n = q.searchParams.get("zoom");
  n && (t.zoom = parseFloat(n));
  const a = q.searchParams.get("season");
  a && (t.season = parseInt(a));
  const s = q.searchParams.get("opaque");
  s && (t.opaque = s !== "0"), q.searchParams.get("select") && (t.select = !0);
  const c = q.searchParams.get("area");
  if (c) {
    const [w, h, P, S] = c.split(",").map(tt => parseFloat(tt));
    [w, h, P, S].every(tt => Number.isFinite(tt)) && (t.area = {
      south: w,
      west: h,
      north: P,
      east: S
    })
  }
  q.searchParams.get("twitch-migration") && (t.twitchMigration = !0);
  const g = q.searchParams.get("error");
  return g && (t.error = g), t.discordLinked = !!q.searchParams.get("discord-linked"), t.alliance = !!q.searchParams.get("alliance"), t.store = !!q.searchParams.get("store"), t.fastspringComplete = q.searchParams.get("fscNext") === "fsc:invoke:complete", t
}

function dr(q, t) {
  return q = new URL(q), t.pos !== void 0 && (q.searchParams.set("lat", t.pos.lat.toString()), q.searchParams.set("lng", t.pos.lng.toString())), t.zoom !== void 0 && q.searchParams.set("zoom", t.zoom.toString()), t.season !== void 0 && q.searchParams.set("season", t.season.toString()), t.opaque !== void 0 && q.searchParams.set("opaque", t.opaque ? "1" : "0"), t.alliance !== void 0 && q.searchParams.set("alliance", t.alliance ? "1" : "0"), t.select && q.searchParams.set("alliance", "1"), q
}
var Vt;
(q => {
  async function t() {
    if (e() || history.length < 3) return;
    const r = 50;
    for (let n = 0; n < r; n++) history.pushState({}, "");
    navigator.userActivation.hasBeenActive || await Xq(document, ["pointerdown", "keydown", "touchstart", "click"]), !e() && history.go(-(history.length - 1))
  }
  q.reset = t;

  function e() {
    var r, n;
    try {
      return ((n = (r = Q) == null ? void 0 : r.data) == null ? void 0 : n.id) || navigation.entries().length >= history.length
    } catch {
      return !1
    }
  }
})(Vt || (Vt = {}));

function Xq(q, t, e) {
  return new Promise((r, n) => {
    t.forEach(a => q.addEventListener(a, r, {
      once: !0
    }))
  })
}

function D() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function gr() {
  const q = "last-unfocus",
    t = new AbortController;
  if (D()) {
    Vt.reset(), queueMicrotask(async () => {
      await k.onInit(t)
    });
    const e = () => {
        const n = localStorage.getItem(q);
        if (n) {
          const a = parseInt(n, 10);
          Date.now() - a > 5 * vt.minute && window.location.reload()
        }
      },
      r = () => {
        localStorage.setItem(q, Date.now().toString());
        const n = $.map;
        if (n) {
          const a = n.getCenter(),
            s = n.getZoom();
          Aq(a, s)
        }
      };
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? e() : r()
    }, {
      signal: t.signal
    }), window.addEventListener("pageshow", e, {
      signal: t.signal
    }), window.addEventListener("pagehide", r, {
      signal: t.signal
    })
  }
  return () => {
    t.abort()
  }
}
export {
  sr as A, d as T, k as a, cr as b, xe as c, Aq as d, dr as e, pr as f, Ar as g, cq as h, ur as i, D as j, lr as l, Vr as p, gr as s, ir as u, Jq as w
};