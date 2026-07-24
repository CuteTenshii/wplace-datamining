var Nt = Object.defineProperty;
var st = q => {
  throw TypeError(q)
};
var Mt = (q, t, e) => t in q ? Nt(q, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : q[t] = e;
var g = (q, t, e) => Mt(q, typeof t != "symbol" ? t + "" : t, e),
  tt = (q, t, e) => t.has(q) || st("Cannot " + e);
var s = (q, t, e) => (tt(q, t, "read from private field"), e ? e.call(q) : t.get(q)),
  p = (q, t, e) => t.has(q) ? st("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(q) : t.set(q, e),
  l = (q, t, e, r) => (tt(q, t, "write to private field"), r ? r.call(q, e) : t.set(q, e), e),
  w = (q, t, e) => (tt(q, t, "access private method"), e);
import {
  g as H,
  T as Et,
  t as Ct,
  W as S,
  b as et,
  D as qt,
  u as K,
  E as St,
  G as Lt,
  d as Yt
} from "./C0zwYEAy.js";
import {
  e as ct,
  i as ut,
  h as At,
  bJ as nt,
  aE as Ut,
  y as Ot,
  B as zt
} from "./BKnGt6Ki.js";
import {
  g as _t
} from "./sZ27yilA.js";
import {
  r as xt
} from "./CQkAsaN7.js";
import {
  c as bt
} from "./DbGfTWgr.js";
import {
  d as Wt
} from "./DzBCW1Dp.js";
import {
  g as J
} from "./BhCkpOlh.js";
import "./xcdU3uvO.js";
const Ft = () => "Download WPlace from the Google Play Store.",
  Rt = () => "Baixe o WPlace na Google Play Store.",
  Jt = () => "请从 Google Play 商店下载 WPlace。",
  Kt = () => "Lade WPlace aus dem Google Play Store herunter.",
  Qt = () => "Descarga WPlace desde Google Play Store.",
  Zt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Xt = () => "Scarica WPlace dal Google Play Store.",
  Ht = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  $t = () => "Pobierz WPlace ze Sklepu Google Play.",
  te = () => "Скачайте WPlace из Google Play Store.",
  ee = () => "Завантажте WPlace з Google Play Store.",
  qe = () => "Hãy tải WPlace từ Google Play Store.",
  re = (q = {}, t = {}) => {
    const e = t.locale ?? J();
    return e === "en" ? Ft() : e === "pt" ? Rt() : e === "ch" ? Jt() : e === "de" ? Kt() : e === "es" ? Qt() : e === "fr" ? Zt() : e === "it" ? Xt() : e === "jp" ? Ht() : e === "pl" ? $t() : e === "ru" ? te() : e === "uk" ? ee() : qe()
  },
  ne = () => "We couldn't find your account. Please try again later.",
  oe = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  ae = () => "找不到你的账号，请稍后重试。",
  ie = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  Ve = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  se = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  ce = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  ue = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  Ae = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  le = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  pe = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  de = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  lt = (q = {}, t = {}) => {
    const e = t.locale ?? J();
    return e === "en" ? ne() : e === "pt" ? oe() : e === "ch" ? ae() : e === "de" ? ie() : e === "es" ? Ve() : e === "fr" ? se() : e === "it" ? ce() : e === "jp" ? ue() : e === "pl" ? Ae() : e === "ru" ? le() : e === "uk" ? pe() : de()
  },
  ge = () => "Reload the page and try again.",
  ye = () => "Recarregue a página e tente novamente.",
  fe = () => "请刷新页面后重试。",
  he = () => "Lade die Seite neu und versuche es erneut.",
  me = () => "Recarga la página e inténtalo de nuevo.",
  we = () => "Rechargez la page et réessayez.",
  Pe = () => "Ricarica la pagina e riprova.",
  Be = () => "ページを再読み込みして、もう一度お試しください。",
  Ee = () => "Odśwież stronę i spróbuj ponownie.",
  be = () => "Перезагрузите страницу и попробуйте снова.",
  ve = () => "Перезавантажте сторінку та спробуйте ще раз.",
  Te = () => "Hãy tải lại trang và thử lại.",
  De = (q = {}, t = {}) => {
    const e = t.locale ?? J();
    return e === "en" ? ge() : e === "pt" ? ye() : e === "ch" ? fe() : e === "de" ? he() : e === "es" ? me() : e === "fr" ? we() : e === "it" ? Pe() : e === "jp" ? Be() : e === "pl" ? Ee() : e === "ru" ? be() : e === "uk" ? ve() : Te()
  },
  Ie = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Ge = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  ke = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  je = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Ne = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Me = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Ce = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Se = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Le = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Ye = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Ue = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Oe = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  ze = (q = {}, t = {}) => {
    const e = t.locale ?? J();
    return e === "en" ? Ie() : e === "pt" ? Ge() : e === "ch" ? ke() : e === "de" ? je() : e === "es" ? Ne() : e === "fr" ? Me() : e === "it" ? Ce() : e === "jp" ? Se() : e === "pl" ? Le() : e === "ru" ? Ye() : e === "uk" ? Ue() : Oe()
  },
  _e = () => "Play Billing not supported.",
  xe = () => "Play Billing não suportado.",
  We = () => "不支持 Play Billing。",
  Fe = () => "Play Billing wird nicht unterstützt.",
  Re = () => "Play Billing no es compatible.",
  Je = () => "Play Billing non pris en charge.",
  Ke = () => "Play Billing non supportato.",
  Qe = () => "Play Billing はサポートされていません。",
  Ze = () => "Play Billing nie jest obsługiwane.",
  Xe = () => "Play Billing не поддерживается.",
  He = () => "Play Billing не підтримується.",
  $e = () => "Play Billing không được hỗ trợ.",
  pt = (q = {}, t = {}) => {
    const e = t.locale ?? J();
    return e === "en" ? _e() : e === "pt" ? xe() : e === "ch" ? We() : e === "de" ? Fe() : e === "es" ? Re() : e === "fr" ? Je() : e === "it" ? Ke() : e === "jp" ? Qe() : e === "pl" ? Ze() : e === "ru" ? Xe() : e === "uk" ? He() : $e()
  },
  tq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  eq = "data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  qq = "" + new URL("../assets/notification.CPyrWqU1.mp3", import.meta.url).href,
  rq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  nq = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  oq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  ur = aq();
let dt;
async function Vt() {
  dt ?? (dt = new AudioContext);
  const q = dt;
  return q.state !== "running" && await Promise.race([q.resume().catch(() => {}), new Promise(t => setTimeout(t, 150))]), q.state === "running" ? q : void 0
}

function Ar() {
  Vt()
}

function vt(q, t) {
  const e = new GainNode(q, {
      gain: t
    }),
    r = new BiquadFilterNode(q, {
      type: "lowpass",
      frequency: 5e3
    });
  return e.connect(r).connect(q.destination), e
}

function T(q, t, e, r, n, a, i) {
  const V = new OscillatorNode(q, {
    type: "triangle",
    frequency: e
  });
  i && (V.frequency.setValueAtTime(e, r), V.frequency.exponentialRampToValueAtTime(i, r + n));
  const c = new GainNode(q);
  c.gain.setValueAtTime(0, r), c.gain.linearRampToValueAtTime(a, r + .008), c.gain.exponentialRampToValueAtTime(.001, r + n), V.connect(c).connect(t), V.start(r), V.stop(r + n + .05)
}
async function lr() {
  if (H.muted) return !0;
  const q = await Vt();
  if (!q) return !1;
  const t = vt(q, .25),
    e = q.currentTime + .03;
  return T(q, t, 523.25, e, .12, .5), T(q, t, 659.25, e + .085, .12, .55), T(q, t, 783.99, e + .17, .12, .6), T(q, t, 1046.5, e + .255, .55, .7), T(q, t, 1318.51, e + .255, .55, .25), T(q, t, 2093, e + .33, .4, .1), !0
}
async function pr() {
  if (H.muted) return !0;
  const q = await Vt();
  if (!q) return !1;
  const t = vt(q, .22),
    e = q.currentTime + .03;
  return T(q, t, 329.63, e, .16, .55), T(q, t, 261.63, e + .15, .5, .6, 233.08), !0
}

function aq() {
  const q = {
    plop: new Audio(rq),
    smallPlop: new Audio(oq),
    bigPlop: new Audio(tq),
    smallDropplet: new Audio(nq),
    droppletAndPlop: new Audio(eq),
    notification1: new Audio(qq)
  };
  for (const t of Object.values(q)) t.preload = "auto", t.volume = .3;
  return q
}

function iq(q) {
  return Math.floor(Math.random() * q)
}
const ot = 14.5,
  Vq = 0,
  sq = 24;
async function dr() {
  const q = lq();
  if (q) return q;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((r, n) => navigator.geolocation.getCurrentPosition(a => r(a), a => n(a)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: ot
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...cq().pos,
    zoom: ot
  }
}

function cq() {
  const q = Object.entries(uq),
    t = iq(q.length),
    [e, r] = q[t];
  return {
    city: e,
    pos: r
  }
}
const uq = {
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
  Tt = "location";

function Aq(q, t) {
  localStorage.setItem(Tt, JSON.stringify({
    ...q,
    zoom: t
  }))
}

function lq() {
  const q = localStorage.getItem(Tt);
  if (!q) return;
  let t;
  try {
    t = JSON.parse(q)
  } catch {
    return
  }
  if (!t || typeof t != "object") return;
  const {
    lat: e,
    lng: r,
    zoom: n
  } = t;
  if (!(typeof e != "number" || typeof r != "number" || !pq({
      lat: e,
      lng: r
    }))) return {
    lat: e,
    lng: r,
    zoom: typeof n == "number" && dq(n) ? n : ot
  }
}

function pq(q) {
  return q.lat >= -90 && q.lat <= 90 && q.lng >= -180 && q.lng <= 180
}

function dq(q) {
  return Number.isFinite(q) && q >= Vq && q <= sq
}
var _, x;
class gq {
  constructor() {
    p(this, _, ct(-1));
    p(this, x, ct([]))
  }
  get idx() {
    return ut(s(this, _))
  }
  set idx(t) {
    At(s(this, _), t, !0)
  }
  get entries() {
    return ut(s(this, x))
  }
  set entries(t) {
    At(s(this, x), t)
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
_ = new WeakMap, x = new WeakMap;
const gr = new gq;

function yq(q, t) {
  const e = {};
  for (let r = 0; r < q.length; r++) {
    const n = q[r],
      a = t(n, r, q);
    Object.hasOwn(e, a) || (e[a] = []), e[a].push(n)
  }
  return e
}
const gt = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
  return this
})();

function fq(q, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: r
  } = t, n = function(a) {
    const i = r ? r(a) : a;
    if (e.has(i)) return e.get(i);
    const V = q.call(this, a);
    return e.set(i, V), V
  };
  return n.cache = e, n
}

function hq() {}

function yt(q) {
  return typeof gt.Buffer < "u" && gt.Buffer.isBuffer(q)
}

function ft(q) {
  return Object.getOwnPropertySymbols(q).filter(t => Object.prototype.propertyIsEnumerable.call(q, t))
}

function ht(q) {
  return q == null ? q === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(q)
}
const mq = "[object RegExp]",
  wq = "[object String]",
  Pq = "[object Number]",
  Bq = "[object Boolean]",
  Eq = "[object Symbol]",
  bq = "[object Date]",
  vq = "[object Map]",
  Tq = "[object Set]",
  Dq = "[object Array]",
  Iq = "[object Function]",
  Gq = "[object ArrayBuffer]",
  rt = "[object Object]",
  kq = "[object Error]",
  jq = "[object DataView]",
  Nq = "[object Uint8Array]",
  Mq = "[object Uint8ClampedArray]",
  Cq = "[object Uint16Array]",
  Sq = "[object Uint32Array]",
  Lq = "[object BigUint64Array]",
  Yq = "[object Int8Array]",
  Uq = "[object Int16Array]",
  Oq = "[object Int32Array]",
  zq = "[object BigInt64Array]",
  _q = "[object Float32Array]",
  xq = "[object Float64Array]";

function mt(q) {
  if (!q || typeof q != "object") return !1;
  const t = Object.getPrototypeOf(q);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(q) === "[object Object]" : !1
}

function Wq(q, t) {
  return q === t || Number.isNaN(q) && Number.isNaN(t)
}

function Fq(q, t, e) {
  return L(q, t, void 0, void 0, void 0, void 0, e)
}

function L(q, t, e, r, n, a, i) {
  const V = i(q, t, e, r, n, a);
  if (V !== void 0) return V;
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
      return O(q, t, a, i)
  }
  return O(q, t, a, i)
}

function O(q, t, e, r) {
  if (Object.is(q, t)) return !0;
  let n = ht(q),
    a = ht(t);
  if (n === "[object Arguments]" && (n = rt), a === "[object Arguments]" && (a = rt), n !== a) return !1;
  switch (n) {
    case wq:
      return q.toString() === t.toString();
    case Pq:
      return Wq(q.valueOf(), t.valueOf());
    case Bq:
    case bq:
    case Eq:
      return Object.is(q.valueOf(), t.valueOf());
    case mq:
      return q.source === t.source && q.flags === t.flags;
    case Iq:
      return q === t
  }
  e = e ?? new Map;
  const i = e.get(q),
    V = e.get(t);
  if (i != null && V != null) return i === t;
  e.set(q, t), e.set(t, q);
  try {
    switch (n) {
      case vq:
        if (q.size !== t.size) return !1;
        for (const [c, A] of q.entries())
          if (!t.has(c) || !L(A, t.get(c), c, q, t, e, r)) return !1;
        return !0;
      case Tq: {
        if (q.size !== t.size) return !1;
        const c = Array.from(q.values()),
          A = Array.from(t.values());
        for (let f = 0; f < c.length; f++) {
          const E = c[f],
            h = A.findIndex(b => L(E, b, void 0, q, t, e, r));
          if (h === -1) return !1;
          A.splice(h, 1)
        }
        return !0
      }
      case Dq:
      case Nq:
      case Mq:
      case Cq:
      case Sq:
      case Lq:
      case Yq:
      case Uq:
      case Oq:
      case zq:
      case _q:
      case xq:
        if (yt(q) !== yt(t) || q.length !== t.length) return !1;
        for (let c = 0; c < q.length; c++)
          if (!L(q[c], t[c], c, q, t, e, r)) return !1;
        return !0;
      case Gq:
        return q.byteLength !== t.byteLength ? !1 : O(new Uint8Array(q), new Uint8Array(t), e, r);
      case jq:
        return q.byteLength !== t.byteLength || q.byteOffset !== t.byteOffset ? !1 : O(new Uint8Array(q), new Uint8Array(t), e, r);
      case kq:
        return q.name === t.name && q.message === t.message;
      case rt: {
        if (!(O(q.constructor, t.constructor, e, r) || mt(q) && mt(t))) return !1;
        const c = [...Object.keys(q), ...ft(q)],
          A = [...Object.keys(t), ...ft(t)];
        if (c.length !== A.length) return !1;
        for (let f = 0; f < c.length; f++) {
          const E = c[f],
            h = q[E];
          if (!Object.hasOwn(t, E)) return !1;
          const b = t[E];
          if (!L(h, b, E, q, t, e, r)) return !1
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

function Rq(q, t) {
  return Fq(q, t, hq)
}
const Dt = typeof window < "u" ? window : void 0;

function Jq(q) {
  let t = q.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var N, W;
class Kq {
  constructor(t = {}) {
    p(this, N);
    p(this, W);
    const {
      window: e = Dt,
      document: r = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (l(this, N, r), l(this, W, bt(n => {
      const a = nt(e, "focusin", n),
        i = nt(e, "focusout", n);
      return () => {
        a(), i()
      }
    })))
  }
  get current() {
    var t;
    return (t = s(this, W)) == null || t.call(this), s(this, N) ? Jq(s(this, N)) : null
  }
}
N = new WeakMap, W = new WeakMap;
new Kq;

function Qq(q, t) {
  switch (q) {
    case "post":
      Ot(t);
      break;
    case "pre":
      Ut(t);
      break
  }
}

function It(q, t, e, r = {}) {
  const {
    lazy: n = !1
  } = r;
  let a = !n,
    i = Array.isArray(q) ? [] : void 0;
  Qq(t, () => {
    const V = Array.isArray(q) ? q.map(A => A()) : q();
    if (!a) {
      a = !0, i = V;
      return
    }
    const c = zt(() => e(V, i));
    return i = V, c
  })
}

function Zq(q, t, e) {
  It(q, "post", t, e)
}

function Xq(q, t, e) {
  It(q, "pre", t, e)
}
Zq.pre = Xq;

function Hq(q, t) {
  switch (q) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function Gt(q, t, e, r, n, a) {
  if (q === null || typeof q != "object") return q;
  const i = Object.getPrototypeOf(q);
  if (i !== null && i !== Object.prototype && !Array.isArray(q)) return q;
  let V = e.get(q);
  return V || (V = new Proxy(q, {
    get: (c, A) => (r == null || r(), Gt(Reflect.get(c, A), t, e, r, n, a)),
    set: (c, A, f) => (n == null || n(), Reflect.set(c, A, f), a(t), !0)
  }), e.set(q, V)), V
}
var P, B, M, v, j, I, Q, m, G, C, F, R, Z, y, Y, U, at, jt;
class kt {
  constructor(t, e, r = {}) {
    p(this, y);
    p(this, P);
    p(this, B);
    p(this, M);
    p(this, v);
    p(this, j);
    p(this, I);
    p(this, Q, new WeakMap);
    p(this, m);
    p(this, G);
    p(this, C);
    p(this, F);
    p(this, R);
    p(this, Z, t => {
      var e;
      t.key !== s(this, B) || t.newValue === null || (l(this, P, w(this, y, Y).call(this, t.newValue)), (e = s(this, I)) == null || e.call(this))
    });
    const {
      storage: n = "local",
      serializer: a = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: i = !0,
      connected: V = !0
    } = r, c = "window" in r ? r.window : Dt;
    if (l(this, P, e), l(this, B, t), l(this, M, a), l(this, m, V), l(this, C, c), l(this, F, i), l(this, R, n), c === void 0) return;
    const A = Hq(n, c);
    l(this, v, A);
    const f = A.getItem(t);
    f !== null ? l(this, P, w(this, y, Y).call(this, f)) : V && w(this, y, U).call(this, e), w(this, y, at).call(this)
  }
  get current() {
    var e, r, n, a;
    (e = s(this, j)) == null || e.call(this);
    let t;
    if (s(this, m)) {
      const i = (r = s(this, v)) == null ? void 0 : r.getItem(s(this, B));
      t = i ? w(this, y, Y).call(this, i) : s(this, P)
    } else t = s(this, P);
    return Gt(t, t, s(this, Q), (n = s(this, j)) == null ? void 0 : n.bind(this), (a = s(this, I)) == null ? void 0 : a.bind(this), w(this, y, U).bind(this))
  }
  set current(t) {
    var e;
    w(this, y, U).call(this, t), (e = s(this, I)) == null || e.call(this)
  }
  get connected() {
    return s(this, m)
  }
  disconnect() {
    var e, r;
    if (!s(this, m)) return;
    const t = (e = s(this, v)) == null ? void 0 : e.getItem(s(this, B));
    t && l(this, P, w(this, y, Y).call(this, t)), l(this, m, !1), (r = s(this, v)) == null || r.removeItem(s(this, B)), w(this, y, jt).call(this)
  }
  connect() {
    s(this, m) || (l(this, m, !0), w(this, y, U).call(this, s(this, P)), w(this, y, at).call(this))
  }
}
P = new WeakMap, B = new WeakMap, M = new WeakMap, v = new WeakMap, j = new WeakMap, I = new WeakMap, Q = new WeakMap, m = new WeakMap, G = new WeakMap, C = new WeakMap, F = new WeakMap, R = new WeakMap, Z = new WeakMap, y = new WeakSet, Y = function(t) {
  try {
    return s(this, M).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${s(this,B)}"`, e);
    return
  }
}, U = function(t) {
  var e;
  if (!s(this, m)) {
    l(this, P, t);
    return
  }
  try {
    t !== void 0 && ((e = s(this, v)) == null || e.setItem(s(this, B), s(this, M).serialize(t)))
  } catch (r) {
    console.error(`Error when writing value from persisted store "${s(this,B)}" to ${s(this,v)}`, r)
  }
}, at = function() {
  !s(this, C) || !s(this, m) || l(this, j, bt(t => (l(this, I, t), l(this, G, s(this, m) && s(this, F) && s(this, R) === "local" ? nt(s(this, C), "storage", s(this, Z)) : void 0), () => {
    var e;
    (e = s(this, G)) == null || e.call(this), l(this, G, void 0), l(this, I, void 0)
  })))
}, jt = function() {
  var t;
  (t = s(this, G)) == null || t.call(this), l(this, G, void 0), l(this, j, void 0)
};
class z extends Promise {
  constructor(e) {
    let r;
    const n = {
      current: {
        status: "pending"
      }
    };
    super((i, V) => {
      r = {
        resolve: a("fulfilled", i),
        reject: a("rejected", V)
      }, e == null || e(r.resolve, r.reject)
    });
    g(this, "resolvers");
    g(this, "stateHolder");
    this.resolvers = r, this.stateHolder = n;

    function a(i, V) {
      return function(...A) {
        return n.current.status === "pending" && (n.current = $q(i, A[0], n.current)), V(...A)
      }
    }
  }
  get state() {
    return this.stateHolder.current
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
  static create(e) {
    const r = new z;
    return z.trap(e, r), r
  }
  static async trap(e, r) {
    try {
      return r.resolve(await e)
    } catch (n) {
      r.reject(n)
    }
  }
  static delay(e) {
    const r = z.create(void 0),
      n = setTimeout(r.resolve, e);
    return r.catch(() => clearTimeout(n)), r
  }
}

function $q(q, t, e) {
  switch (q) {
    case "fulfilled":
      return {
        status: q, value: t
      };
    case "rejected":
      return {
        status: q, reason: t
      }
  }
  return e
}
var it = (q => (q.Play = "https://play.google.com/billing", q))(it || {});

function tr(q) {
  return fq(q)
}

function wt(q) {
  return tr(function(...e) {
    return z.create(q(...e))
  })
}
const u = class u {
  constructor(t) {
    this.state = t
  }
  static get checkout() {
    var t, e;
    return ((t = u.checkoutState) == null ? void 0 : t.current) && new u((e = u.checkoutState) == null ? void 0 : e.current)
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
    return D() && ((t = u.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = u.checkout) == null ? void 0 : e.startedAt) <= 3 * Et.day
  }
  static isRunning() {
    var t;
    return ((t = u.memoryCheckout) == null ? void 0 : t.type) === "running"
  }
  applyFinishIfNecessary(t) {
    this.startedAt > t.startedAt || u.isRunning() && u.onChangeCheckout({
      ...this.state,
      finishedAt: Date.now(),
      type: "finished",
      view: void 0,
      droplets: 0
    })
  }
  static start() {
    return u.onChangeCheckout({
      type: "running",
      startedAt: Date.now(),
      view: void 0,
      finishedAt: void 0
    })
  }
  static finish(t) {
    var e, r;
    return (r = (e = u.checkout) == null ? void 0 : e.applyFinishIfNecessary) == null ? void 0 : r.call(e, t)
  }
  static markViewed() {
    var e;
    const t = (e = u.checkout) == null ? void 0 : e.state;
    t && u.onChangeCheckout({
      startedAt: t == null ? void 0 : t.startedAt,
      finishedAt: Date.now(),
      droplets: t.type === "running" ? 0 : t.droplets,
      type: "finished",
      view: Date.now()
    })
  }
  static clear() {
    u.checkoutState.current = void 0
  }
  static onChangeCheckout(t) {
    return u.checkoutState.current = t, u.memoryCheckout = u.checkout, u.memoryCheckout
  }
  static preventNavigationInTWAIfInCheckout(t) {
    D() && (u.addFocusListener(t), u.addNavigationListener(t))
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
      (!document.hasFocus() && u.memoryCheckout || u.isRunning()) && (r.preventDefault(), (n = k.log) == null || n.call(k, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return u.markViewed(), _t(xt("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    H.pendingHistoryDialogOpen = !0
  }
};
g(u, "checkoutState", new kt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), g(u, "memoryCheckout");
let d = u;

function Pt(q) {
  const t = q;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var X;
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
    throw (r = o.error) == null || r.call(o, ...t), e.forEach(n => Ct.error(n)), new S(t.length === 1 ? e[0] : e.join(`
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
      const r = o.PLAY_BILLING_NOT_AVAILABLE.find(n => Rq(Pt(t), Pt(n)));
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
    const t = await et.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw o.setAsPlayBillingBlockedErrorIfNecessary(o.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new S("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await o.getObfuscatedAccountId();
    return o.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var E;
    o.twaGuard();
    const e = qt(t);
    if (!(e != null && e.productId)) throw new S("No sku config or productId found");
    if (!((E = K.data) != null && E.id)) throw new S("No user id");
    const r = await o.createPaymentBySkuId(t),
      n = d.start(),
      i = await r.show().catch(o.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var h;
        return (h = d.finish) == null ? void 0 : h.call(d, n)
      }),
      V = i == null ? void 0 : i.toJSON();
    let c = "unknown";
    return V != null && V.details.purchaseToken ? A(c) : A("fail", new S("Play Billing returned no purchase token")), {
      setStatus: A,
      status: c,
      out: V,
      verify: f
    };
    async function A(h, b) {
      if (c = h, await (i == null ? void 0 : i.complete(h).catch(() => {})), b) throw b
    }
    async function f() {
      var h, b;
      if ((h = V == null ? void 0 : V.details) != null && h.purchaseToken) try {
        const {
          droplets: $
        } = await o.verifyBySKU({
          sku: t,
          token: (b = V == null ? void 0 : V.details) == null ? void 0 : b.purchaseToken
        });
        return await A("success"), await o.refresh(), d.openCheckoutDialog($)
      } catch ($) {
        await A("fail", $)
      }
    }
  }
  static refresh() {
    return o.twaGuard(), K.refresh()
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
      const r = await Promise.allSettled(e.map(i => o.verifyBySKU({
        sku: i.itemId,
        token: i.purchaseToken
      })));
      let n = 0,
        a = 0;
      for (const i of r) i.status === "fulfilled" ? n += i.value.droplets : a++;
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
    const e = qt(t.sku);
    return et.verifyPlayPurchase({
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
    return !!(K.data && o.service && o.forceTWA.current !== !1)
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
          n = ((t = yq(e, a => a.status).paid) == null ? void 0 : t.reduce((a, i) => a + i.droplets, 0)) ?? 0;
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
    return t ? (await et.listPlayPurchaseHistory()).purchases.sort((i, V) => Date.parse(V.updatedAt) - Date.parse(i.updatedAt)).filter(i => Date.parse(i.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return s(this, X).has(t)
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
          i = a == null ? void 0 : a[1];
        i && i === St.appName && (o.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    D() && await o.load()
  }
  static isSamsung() {
    return Wt() === "Samsung Internet"
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
      value: ((n = qt(t)) == null ? void 0 : n.price) * Lt / 100,
      currency: "USD"
    };
    return [r.currency, Number(r.value).toFixed(2)].join(" ")
  }
};
X = new WeakMap, g(o, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), g(o, "forceTWA", new kt("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), g(o, "POOLING_TIME", 10), g(o, "errors", []), g(o, "service"), g(o, "mapSKUs", new Map), g(o, "referrer", []), g(o, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: lt(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: lt(),
    name: "NotSupportedError",
    message: 'The payment method "https://play.google.com/billing" is not supported.'
  }
}), g(o, "PLAY_BILLING_NOT_AVAILABLE", [{
  kind: "not-twa-context",
  printError: pt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  kind: "not-twa-context",
  printError: pt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}, {
  kind: "not-twa-context",
  printError: re(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: De(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: ze(),
  name: "AbortError",
  message: "Invalid state."
}, o.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, o.ERRORS.GENERIC_NOT_SUPPORTED]), g(o, "loadMapSKUs", wt(async () => {
  var a, i;
  if (!D()) return;
  o.twaGuard();
  const t = Object.values(Yt.products).filter(V => "lookupKey" in V).map(V => V.lookupKey),
    e = await ((a = o.loadService) == null ? void 0 : a.call(o).catch(o.setAsPlayBillingBlockedErrorIfNecessary)),
    r = await (e == null ? void 0 : e.getDetails(t).catch(o.setAsPlayBillingBlockedErrorIfNecessary)),
    n = new Map(r == null ? void 0 : r.map(V => [V.itemId, V]));
  return (i = o.mapSKUs) != null && i.size || (o.mapSKUs = n), n
})), g(o, "loadService", wt(() => {
  var t, e, r;
  return (r = (e = (t = o.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, it.Play)) == null ? void 0 : r.then(n => o.service ?? (o.service = n)).then(n => (n && (o.forceTWA.current = !0), n))
})), p(o, X, new Set([1, !0].map(String))), g(o, "onInit", async t => {
  o.loadService(), o.checkIfShouldForceTWA(), d.preventNavigationInTWAIfInCheckout(t)
});
let k = o;
var Bt;
(q => {
  async function t() {
    if (r() || history.length < 3) return;
    const n = 50;
    for (let a = 0; a < n; a++) history.pushState({}, "");
    navigator.userActivation.hasBeenActive || await er(document, ["pointerdown", "keydown", "touchstart", "click"]), !r() && history.go(-(history.length - 1))
  }
  q.reset = t;

  function e() {
    if (!("navigation" in window)) return;
    const n = window.navigation;
    if (typeof n != "object" || n === null || !("entries" in n) || typeof n.entries != "function") return;
    const a = n.entries();
    return Array.isArray(a) ? a.length : void 0
  }

  function r() {
    var n, a;
    if ((a = (n = K) == null ? void 0 : n.data) != null && a.id) return !0;
    try {
      const i = e();
      return i !== void 0 && i >= history.length
    } catch {
      return !1
    }
  }
})(Bt || (Bt = {}));

function er(q, t, e) {
  return new Promise(r => {
    const n = a => {
      t.forEach(i => q.removeEventListener(i, n)), r(a)
    };
    t.forEach(a => q.addEventListener(a, n))
  })
}

function D() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function yr() {
  const q = "last-unfocus",
    t = new AbortController;
  if (D()) {
    queueMicrotask(async () => {
      await k.onInit(t)
    });
    const e = () => {
        const n = localStorage.getItem(q);
        if (n) {
          const a = parseInt(n, 10);
          Date.now() - a > 5 * Et.minute && window.location.reload()
        }
      },
      r = () => {
        localStorage.setItem(q, Date.now().toString());
        const n = H.map;
        if (n) {
          const a = n.getCenter(),
            i = n.getZoom();
          Aq(a, i)
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
  ur as A, d as T, k as a, pr as b, ze as c, dq as d, Aq as e, uq as f, dr as g, D as h, pq as i, gr as l, lr as p, yr as s, Ar as u, Zq as w
};