var Pq = Object.defineProperty;
var rq = e => {
  throw TypeError(e)
};
var Tq = (e, q, t) => q in e ? Pq(e, q, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : e[q] = t;
var f = (e, q, t) => Tq(e, typeof q != "symbol" ? q + "" : q, t),
  W = (e, q, t) => q.has(e) || rq("Cannot " + t);
var a = (e, q, t) => (W(e, q, "read from private field"), t ? t.call(e) : q.get(e)),
  g = (e, q, t) => q.has(e) ? rq("Cannot add the same private member more than once") : q instanceof WeakSet ? q.add(e) : q.set(e, t),
  l = (e, q, t, V) => (W(e, q, "write to private field"), V ? V.call(e, t) : q.set(e, t), t),
  w = (e, q, t) => (W(e, q, "access private method"), t);
import {
  j as K,
  T as fq,
  t as Gq,
  a as R,
  l as Z,
  u as X,
  G as vq,
  b as Mq
} from "./C4t96nbz.js";
import {
  e as nq,
  i as oq,
  h as sq,
  bJ as $,
  aE as jq,
  I as Lq,
  L as kq
} from "./CV6xI6o5.js";
import {
  g as Cq
} from "./JaYbNgE-.js";
import {
  r as Nq
} from "./B6m-BgQz.js";
import {
  c as hq
} from "./hBdZmm-r.js";
import {
  d as Yq
} from "./BRnlEJuB.js";
import {
  g as Sq
} from "./BhCkpOlh.js";
const Uq = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  zq = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  xq = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Oq = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Jq = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Fq = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Kq = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Qq = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Wq = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Rq = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Zq = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Xq = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Hq = (e = {}, q = {}) => {
    const t = q.locale ?? Sq();
    return t === "en" ? Uq() : t === "pt" ? zq() : t === "ch" ? xq() : t === "de" ? Oq() : t === "es" ? Jq() : t === "fr" ? Fq() : t === "it" ? Kq() : t === "jp" ? Qq() : t === "pl" ? Wq() : t === "ru" ? Rq() : t === "uk" ? Zq() : Xq()
  },
  $q = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  _q = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAGAAAMOQBTU1NTU1NTU1NTU1NTU1NTj4+Pj4+Pj4+Pj4+Pj4+Pj4+xsbGxsbGxsbGxsbGxsbGx09PT09PT09PT09PT09PT09Px8fHx8fHx8fHx8fHx8fHx8f////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUCAAAAAAAADDmA9uH8AAAAAAD/+9DEAAAGFANhtBAAJCSzLP89oJggAALb/tFAHjUCAYWGC58oo4CEuCAIOg4GP5fRBB15d/B8//BD/8oc4P+IDnJ//+D6gBACgHGGMmGGAYEAiEB0ibwcAGYcgfRhlAyGKWf0bXgNSIiUpgJg3mBeAkYsQk5hPADlmkJZgCgFBwUTEzBIAxEJQCATNDF2H2BixBVlEwlzUKFrGHDQ4nWyRnNV/JBAF1sDEsMohzGgb1m1JVzYdFHSaE+z0sgpe0s1EHDlczHIpHJOmtL6zKoYHgNBIYtd3lSww5V7OX45QY8sij7/LrY1GYxP03P1apXhgahit65dpdyplb2v7z7ucliN6mqU12tNv5LZV38sssdxGi1lXqZdmKamks5j8TpqXDHX63h3LH/h2U1L9zvftRHeOH/Py6bpM6lW/25d3y5z//7sqvZz3YGGIslXoQAHIFYzMVUYY9rMbh+/5sjC/CwNSMXUxAQnzJeWbMYkawxUCtzUoDaMEwMM0fxPzAdAuPZcmMwegmDAmBMMA8BgSBpMFkFQwXwCzAzABCQh40ymzMFK6DaBdtCcQIjSzGERXtMBEDDDSpcseAQEhixEHPYg6NDZwXRTdTCUwLOBYhlLW4WFgkbE7CgteafKb7vQa6DYlbENXIfIFCvkjkWkdR7769xUFK9KZHhoFVuiCNprTXJRpaoyJRYiET9UWY8+NuRNZLuP4x5KyHs4xBTdFlhhEcaW2q9IuwaTPsXudBEZLpy1XvE+qaqyIJa61KPTcDJaNWd5uzE24qnctYsd0no78+X/bZMhpjju4rljKjzGl415+7TzVy7T1ZXLu1r16IXZBQ41qe5Yq1p61S7q3pZR1LEssXJ/H696Uf//////z////////////////////9/+////v//1LFjuNy5nnnL7/K9/Dus7VzocWTAKABqutOI9GcW+3l4CgFOmDMDYYN4p4OCIBgV4YBiYAwFpq3hZDALhgJheGG2D6YKoYZg5gwGEgBkYNYFphwg6mA+AMYlIK4CFoVGGIjshzRKgYzTWXYlEJDkBhliAGCiAMloYkENCHeTEfJPsMAiEWY0DBKVRQGMQrCBiAdCsOAiMKbZE//vAxPoALdY1PfnsgE4Yxut/PaRBBkBQHBwyEGzhMscp7WbLObyLCAEzgto46sDc0rgggEBIxDipkdkxXZrtwett4ObmoG7jE2pw9G3QXC9jsuymLPw8+Dp08zJVtJWLBQJG3nrSxgCARXBfwsgoJJakNPUmFAz6ymVOgwSNwc6ag6cDI37WpSsgXpTpiTbQy8CvHbLKIKUt7T7MqL/QzSvVejWbO3fp6S7ZsVZRKOxuxRqQUoWJXZJJY21x/IELxq7kdLLy/1DNU1VlTQoJb1RVFZiXHpf6rq7239u7fuX62GX9y/8uf////2gdh+JHSWIYfycuSiWW99lD+SyX9+URic7/5XMu5frePP1lvGtj/PytbBWbABr+NiRItGCIZg4OGBEwWGCIWpNDACG7UImORRmNIaDwrs7AwMkQArQS6k8HiYGkkirYXFQmGxR5kKSL1vXKtUyFx4T5jhQmF+whaQHE6XGvt7M9GafHhRoOvuW1IDkdKMUZ5eBrb7dJoN6amnbmZvm+3j6HmLq2q4hRrPoisU5yqSPBmgtVsTXziNa2d7hPoVaZjRoi6ngsbErm9SqVxgVVm4VXr2C2q3dv/r/61mta1rW1vujknTRQ19msXVc7hV1Xdc11aLCBo2Cp271Uf/UywAnCzbS32pPGamAsBpzmFioQBhg2Kjh0LkBkdooCME6gqEIgGAhqxojES6MTe1pYSgiSBzhgqHpfxOpePB/UvWXorrSCCQqGUqVy0uO846vZssTbWJ/YawtY0CQrcgrcQnVkStzrDmSplOcGO38lU/mpJn4sku6RNJMm2k1Yqwa8rusvFCZaRw0KBUhgtU8YCxh95G8mz///6377jVbFW1Y56omg1G6bnd/2Vr59WaV2YBZ5qm2v+m3BwJkYsxMtgywTOKITz+fIw9AMyzAYcvSgJRZWuTBZq4azK6gjFhyJxe0dgFKx8IRmfJPW6u08V2P/+5DE4oAaRaNFvdeAAsG0ab22JiTl7NF5XJKE5dsm4vPXm6Vp3rDpGjOBKkSFe3tNFtG6rZ1o6etaX9rzx9mPbrMUFLulWK9+1DLhBufN1vOx3rNmWqypHsrBeU3SiTDox81vMIlVgiXRUa9Dgpk2nfyuz9XPvl6u1c3cpk/A/gWXVdXsKZXBVmZidJ7U7lfGRISlEwhspJOroN5MDRCFozSo4PRp7DISWzyrHd1z3RgefpIcgdcsShprMD4hP+0MVsLDjcJXKys6Ga7Vdl7WiCjaHxrG/heggmYMOVOzOrqmMWnJZWBYrE0hI1GiJhaLOom6fm+kSVXFl6GtlQOAiiaue/E3/uv7FWa7Ti8ANAywuHoKNr8jKF2IrBWEc850vaXja818T1SdxbQ5WtPQYaQOvHXB2UzZMnh3YGV4h11mtblaifpokQYKBhDoBSUA2QTWiIrygwiGBx7J7jE1bVtsyV4wd1WRHHsgERdqbejj9ZEPb1I1syno5xVYyItSRXNgmUjk6XaXP9RFIvQduMPeLKNpCYqKmTSaO1xS2vX/+5DE5wAWWYdL7OGHKtS0aD2WJpwoC6Vo3TPtsVJqLczSJW6nLWe+RU8BTMSrJkUQEdHH9dqd1O0OpFJOKgqiZTKguYTbSEZ99rpKJJtnm3TjjbEvBH4psoYppbHqapsFc3ZS/hfzUowoBRmADiGVLXY2VAdYfAY/sMWgT8XeFZEk1KwhLVgEpQ9PRt0vWswHOP82Jw7zyycVBYBRrQFUJoI5rUTRhNc4RDYMNCsEDQypQrQMKn0GqqG0mR4lFJMphLFERHUXhkUMcg955lJulY9lCeExa4xrbRdNmgCwQrKGs07zWarceJ+Go4kpwak1mqmoCi1NiZk92yHqaq4LpwY8gfZBMxcgV2VVI7klXnve3r7CxdUjIhOIY0jCclaBBxgQeIwRQgNrirEfKZTIFFHkKTagty/jclnF1Wc0TpHMznSpnMAvJECHAqiV61TJyRqvMEjVErnTUTkjVVVXlGwkbGV5bTcrDkiKgZMiVlPh1osSFHo1//+2yyRsV/VkTlkYROLMTROeJZIFMDhIMB3LbLbjSdaNDwEROyQUeLD/+4DE+QAXeZc97L0xaq2z5v2Emn0yAiJIKjB3X////9aSZKVLFkxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  qt = "" + new URL("../assets/notification.CPyrWqU1.mp3", import.meta.url).href,
  tt = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  et = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAI3QBycnJycnJycnJycnJycnJycnJycnJycnK5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm59PT09PT09PT09PT09PT09PT09PT09PT09P////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAXYAAAAAAAACN2ptdwzAAAAAAD/+9DEAAAJjBddVDAAJStFZ/c3oAHsAAAv9gAXd3P0QDAw+CAIAmHxACAYiAEAxBAEAQ4gBAEz+kEInB/+CBz/xOD7ygPh/Lg++oHz+CYPwQcCAIAhEgIAhLggc/6jmUBBwYDgAAgBIGrmoUBoJAAQCBUMBBWGDoGBmKGKhhhpMhMQGoBioGGvvxvwgy04N6IQUmdDBQDvnjHlG+JAoUAmwMmCTHbmuEKgBQW7jclMhQWZAcv9dIGSmGMsSgRd0VUBU1RmMOAWHeKMtGa4y94rTlMBmpHGIAbuji3JwZDMx2lj0pqs4YY9lA/kh/uUft5ZY5W6WbltFbn8bcH2pjLr1JUodk1lbljO9+ssorGatFjfrSqo50VlkalfGlLqgJhzXoIMCCEJEtEijzLX4YVJetWGbmGNzC7fkcE42LSWqwyGKoXZay/sdorjcmJLBqBM6m7tfP+zNNKrdNKZbEYzhqnv38ufv8M9z9xNtIp31baCO0VLjciMtkjAWSsiUxfJlTcXtmoBfnW/+dpcJVjz///3rX4awyx/W////eWeX7+X3L16V28+W8iO0CqjViUAAANAi1nT82Ac3hwMDCwHAwZAaUAJAVGkwYXCoXBBgIMkAEDh+BQuYhBJgypmiLAYQc4R9TGAEfDUSzPBzAJ2YhBAMBr3BQnSpR4wYAIPAlpAoGYMC66Gj4sFlpd+Lw03N/5+rH33lUXYDLo/l2ETkCO23jd4fL4QTGbmVagdqkz7P3aapEHYdxU6K7J3K7g0oYAhwCXa5vCbd2kQogO07kOWH7wscpolKal/LszZr2aaez336enl7uV4Mh6VzW9dq0uVZ9pTLZTWl3/vfLmFFR43/qWKSXxu3LPzzr2n0pO/zGrLaufc61Ncq7qcztX8KXVX6meWW+fhzuGFPT53uflhhbz/eee6/f/8f+mmZSwFpT/Qa0pYyXzou7LH1cl3cdy3GVWv/+f+/+pyzHdSP1qiUiHMAAUekYSBMSDYxOMEjjCoBMRgUVAJhkIKblA/AIFT3AAPMCBExIJTP0XNQDEyENQEBQMcAtCC54ZQrCeRmRwkVGOTJkmBRidHNLhIDMiukUTNSMNCRKypesdImZGp//uwxMsAJrobW/nNAkvDvKe/uTAEbTSIwhySikgs6zkyaLPF4jRmS4RxeNzhkSSklqMj58wMi6RUujKkFOPPlw2IuQ0mzUiZiXDUulA2L6JgXbGqBus8tFBNF1LNjqzV0kjqJdNi8RY1POTRkTxsaIoWU6F0XdI2aia1qROosjSuamSSWa1OpKgZmqR0wfdaS29G3oo0aqkmajXpVG0MCU6jVv1cleeYfgQkb/+N60xMwRCUEZowyxDJigoNEAgZCI+NxMYB9nQJGDIZYqxxJAaQyyCxdGJxQ+XEqMMlJ28V0pgPCgvpUmro0i1ovnb0Y/uxLUqpctk8XMK2u29vW0W1vXkfbS02mNmtWHUq3+iswmo0kf2C3Qw58N7rLzC/zlkvWXOz9bM86er1sEK5i5T6zrdXVPwR13mbd1qd0E1ZrHWk0tfa3il6ftfna9lJnkJllh4OErkLOEADkKoRmSkSwEhAAAAGmU2ZtKoICpiIN00MmJD2ZfIg4EjBw/EYCRuApBOmSAy8WQwiM2aScPORlMJDAFEgq+s4ZkDoMBhhEMgEFN2Lld/ygAlULhcBDwCZumkj8MAOrjqqUBMSAbgCQQLxsCYlFmBNOx5v/BAMBgIRjDAUPARAND0yuVmr60X///6n4/aUCSBDg+xCAnZkzStVXq////8wYAEdygAlxlFE7WyS1uUSkUA0190X2i0R//////lNeNtBcCtJcnGrRWmzvVaWpKZbAUMzv///////JfjVeXRqHI088fxjl1ntWVVddmoah6al13K7DNbv/////////8vwl1uble3za5edmHotWgqKW2z0dLMy+Jb/+6DE5gAWNZNF9aYALOJBI385wADsSvlLqrZuVeSqI0j/Vo1amo1biU9EZValP48qy24qTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  Vt = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  te = rt();
let aq;
async function eq() {
  aq ?? (aq = new AudioContext);
  const e = aq;
  return e.state !== "running" && await Promise.race([e.resume().catch(() => {}), new Promise(q => setTimeout(q, 150))]), e.state === "running" ? e : void 0
}

function ee() {
  eq()
}

function yq(e, q) {
  const t = new GainNode(e, {
      gain: q
    }),
    V = new BiquadFilterNode(e, {
      type: "lowpass",
      frequency: 5e3
    });
  return t.connect(V).connect(e.destination), t
}

function I(e, q, t, V, r, n, s) {
  const A = new OscillatorNode(e, {
    type: "triangle",
    frequency: t
  });
  s && (A.frequency.setValueAtTime(t, V), A.frequency.exponentialRampToValueAtTime(s, V + r));
  const i = new GainNode(e);
  i.gain.setValueAtTime(0, V), i.gain.linearRampToValueAtTime(n, V + .008), i.gain.exponentialRampToValueAtTime(.001, V + r), A.connect(i).connect(q), A.start(V), A.stop(V + r + .05)
}
async function Ve() {
  if (K.muted) return !0;
  const e = await eq();
  if (!e) return !1;
  const q = yq(e, .25),
    t = e.currentTime + .03;
  return I(e, q, 523.25, t, .12, .5), I(e, q, 659.25, t + .085, .12, .55), I(e, q, 783.99, t + .17, .12, .6), I(e, q, 1046.5, t + .255, .55, .7), I(e, q, 1318.51, t + .255, .55, .25), I(e, q, 2093, t + .33, .4, .1), !0
}
async function re() {
  if (K.muted) return !0;
  const e = await eq();
  if (!e) return !1;
  const q = yq(e, .22),
    t = e.currentTime + .03;
  return I(e, q, 329.63, t, .16, .55), I(e, q, 261.63, t + .15, .5, .6, 233.08), !0
}

function rt() {
  const e = {
    plop: new Audio(tt),
    smallPlop: new Audio(Vt),
    bigPlop: new Audio($q),
    smallDropplet: new Audio(et),
    droppletAndPlop: new Audio(_q),
    notification1: new Audio(qt)
  };
  for (const q of Object.values(e)) q.preload = "auto", q.volume = .3;
  return e
}

function nt(e) {
  return Math.floor(Math.random() * e)
}
const _ = 14.5;
async function ne() {
  const e = it();
  if (e) return e;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const t = await new Promise((V, r) => navigator.geolocation.getCurrentPosition(n => V(n), n => r(n)));
      return {
        lat: t.coords.latitude,
        lng: t.coords.longitude,
        zoom: _
      }
    }
  } catch (q) {
    console.error(q)
  }
  return {
    ...ot().pos,
    zoom: _
  }
}

function ot() {
  const e = Object.entries(st),
    q = nt(e.length),
    [t, V] = e[q];
  return {
    city: t,
    pos: V
  }
}
const st = {
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
  mq = "location";

function at(e, q) {
  localStorage.setItem(mq, JSON.stringify({
    ...e,
    zoom: q
  }))
}

function it() {
  const e = localStorage.getItem(mq);
  if (!e) return;
  const q = JSON.parse(e);
  return q.zoom ?? (q.zoom = _), q
}

function oe(e) {
  return e.lat >= -90 && e.lat <= 90 && e.lng >= -180 && e.lng <= 180
}
var S, U;
class At {
  constructor() {
    g(this, S, nq(-1));
    g(this, U, nq([]))
  }
  get idx() {
    return oq(a(this, S))
  }
  set idx(q) {
    sq(a(this, S), q, !0)
  }
  get entries() {
    return oq(a(this, U))
  }
  set entries(q) {
    sq(a(this, U), q)
  }
  hasNext() {
    return this.idx < this.entries.length - 1
  }
  goToNext(q) {
    const t = this.idx + 1,
      V = this.entries[t];
    V && (this.idx = t, q.flyTo({
      center: V.pos,
      zoom: V.zoom
    }))
  }
  hasPrev() {
    return this.idx > 0
  }
  goToPrev(q) {
    const t = this.idx - 1,
      V = this.entries[t];
    V && (this.idx = t, q.flyTo({
      center: V.pos,
      zoom: V.zoom
    }))
  }
  isEmpty() {
    return this.entries.length === 0
  }
  push(q) {
    this.idx = this.idx + 1, this.entries = [...this.entries.slice(0, this.idx), q]
  }
}
S = new WeakMap, U = new WeakMap;
const se = new At,
  iq = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
    return this
  })() || Function("return this")();

function ct(e, q = {}) {
  const {
    cache: t = new Map,
    getCacheKey: V
  } = q, r = function(n) {
    const s = V ? V(n) : n;
    if (t.has(s)) return t.get(s);
    const A = e.call(this, n);
    return t.set(s, A), A
  };
  return r.cache = t, r
}

function ut() {}

function Aq(e) {
  return Object.getOwnPropertySymbols(e).filter(q => Object.prototype.propertyIsEnumerable.call(e, q))
}

function cq(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}
const lt = "[object RegExp]",
  gt = "[object String]",
  dt = "[object Number]",
  pt = "[object Boolean]",
  uq = "[object Arguments]",
  ft = "[object Symbol]",
  ht = "[object Date]",
  yt = "[object Map]",
  mt = "[object Set]",
  wt = "[object Array]",
  Bt = "[object Function]",
  Et = "[object ArrayBuffer]",
  H = "[object Object]",
  Dt = "[object Error]",
  bt = "[object DataView]",
  It = "[object Uint8Array]",
  Pt = "[object Uint8ClampedArray]",
  Tt = "[object Uint16Array]",
  Gt = "[object Uint32Array]",
  vt = "[object BigUint64Array]",
  Mt = "[object Int8Array]",
  jt = "[object Int16Array]",
  Lt = "[object Int32Array]",
  kt = "[object BigInt64Array]",
  Ct = "[object Float32Array]",
  Nt = "[object Float64Array]";

function lq(e) {
  return typeof iq.Buffer < "u" && iq.Buffer.isBuffer(e)
}

function gq(e) {
  if (!e || typeof e != "object") return !1;
  const q = Object.getPrototypeOf(e);
  return q === null || q === Object.prototype || Object.getPrototypeOf(q) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1
}

function Yt(e, q) {
  return e === q || Number.isNaN(e) && Number.isNaN(q)
}

function St(e, q, t) {
  return k(e, q, void 0, void 0, void 0, void 0, t)
}

function k(e, q, t, V, r, n, s) {
  const A = s(e, q, t, V, r, n);
  if (A !== void 0) return A;
  if (typeof e == typeof q) switch (typeof e) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return e === q;
    case "number":
      return e === q || Object.is(e, q);
    case "function":
      return e === q;
    case "object":
      return Y(e, q, n, s)
  }
  return Y(e, q, n, s)
}

function Y(e, q, t, V) {
  if (Object.is(e, q)) return !0;
  let r = cq(e),
    n = cq(q);
  if (r === uq && (r = H), n === uq && (n = H), r !== n) return !1;
  switch (r) {
    case gt:
      return e.toString() === q.toString();
    case dt: {
      const i = e.valueOf(),
        u = q.valueOf();
      return Yt(i, u)
    }
    case pt:
    case ht:
    case ft:
      return Object.is(e.valueOf(), q.valueOf());
    case lt:
      return e.source === q.source && e.flags === q.flags;
    case Bt:
      return e === q
  }
  t = t ?? new Map;
  const s = t.get(e),
    A = t.get(q);
  if (s != null && A != null) return s === q;
  t.set(e, q), t.set(q, e);
  try {
    switch (r) {
      case yt: {
        if (e.size !== q.size) return !1;
        for (const [i, u] of e.entries())
          if (!q.has(i) || !k(u, q.get(i), i, e, q, t, V)) return !1;
        return !0
      }
      case mt: {
        if (e.size !== q.size) return !1;
        const i = Array.from(e.values()),
          u = Array.from(q.values());
        for (let y = 0; y < i.length; y++) {
          const p = i[y],
            D = u.findIndex(Q => k(p, Q, void 0, e, q, t, V));
          if (D === -1) return !1;
          u.splice(D, 1)
        }
        return !0
      }
      case wt:
      case It:
      case Pt:
      case Tt:
      case Gt:
      case vt:
      case Mt:
      case jt:
      case Lt:
      case kt:
      case Ct:
      case Nt: {
        if (lq(e) !== lq(q) || e.length !== q.length) return !1;
        for (let i = 0; i < e.length; i++)
          if (!k(e[i], q[i], i, e, q, t, V)) return !1;
        return !0
      }
      case Et:
        return e.byteLength !== q.byteLength ? !1 : Y(new Uint8Array(e), new Uint8Array(q), t, V);
      case bt:
        return e.byteLength !== q.byteLength || e.byteOffset !== q.byteOffset ? !1 : Y(new Uint8Array(e), new Uint8Array(q), t, V);
      case Dt:
        return e.name === q.name && e.message === q.message;
      case H: {
        if (!(Y(e.constructor, q.constructor, t, V) || gq(e) && gq(q))) return !1;
        const u = [...Object.keys(e), ...Aq(e)],
          y = [...Object.keys(q), ...Aq(q)];
        if (u.length !== y.length) return !1;
        for (let p = 0; p < u.length; p++) {
          const D = u[p],
            Q = e[D];
          if (!Object.hasOwn(q, D)) return !1;
          const Iq = q[D];
          if (!k(Q, Iq, D, e, q, t, V)) return !1
        }
        return !0
      }
      default:
        return !1
    }
  } finally {
    t.delete(e), t.delete(q)
  }
}

function Ut(e, q) {
  return St(e, q, ut)
}
const wq = typeof window < "u" ? window : void 0;

function zt(e) {
  let q = e.activeElement;
  for (; q != null && q.shadowRoot;) {
    const t = q.shadowRoot.activeElement;
    if (t === q) break;
    q = t
  }
  return q
}
var M, z;
class xt {
  constructor(q = {}) {
    g(this, M);
    g(this, z);
    const {
      window: t = wq,
      document: V = t == null ? void 0 : t.document
    } = q;
    t !== void 0 && (l(this, M, V), l(this, z, hq(r => {
      const n = $(t, "focusin", r),
        s = $(t, "focusout", r);
      return () => {
        n(), s()
      }
    })))
  }
  get current() {
    var q;
    return (q = a(this, z)) == null || q.call(this), a(this, M) ? zt(a(this, M)) : null
  }
}
M = new WeakMap, z = new WeakMap;
new xt;

function Ot(e, q) {
  switch (e) {
    case "post":
      Lq(q);
      break;
    case "pre":
      jq(q);
      break
  }
}

function Bq(e, q, t, V = {}) {
  const {
    lazy: r = !1
  } = V;
  let n = !r,
    s = Array.isArray(e) ? [] : void 0;
  Ot(q, () => {
    const A = Array.isArray(e) ? e.map(u => u()) : e();
    if (!n) {
      n = !0, s = A;
      return
    }
    const i = kq(() => t(A, s));
    return s = A, i
  })
}

function Jt(e, q, t) {
  Bq(e, "post", q, t)
}

function Ft(e, q, t) {
  Bq(e, "pre", q, t)
}
Jt.pre = Ft;

function Kt(e, q) {
  switch (e) {
    case "local":
      return q.localStorage;
    case "session":
      return q.sessionStorage
  }
}

function Eq(e, q, t, V, r, n) {
  if (e === null || typeof e != "object") return e;
  const s = Object.getPrototypeOf(e);
  if (s !== null && s !== Object.prototype && !Array.isArray(e)) return e;
  let A = t.get(e);
  return A || (A = new Proxy(e, {
    get: (i, u) => (V == null || V(), Eq(Reflect.get(i, u), q, t, V, r, n)),
    set: (i, u, y) => (r == null || r(), Reflect.set(i, u, y), n(q), !0)
  }), t.set(e, A)), A
}
var B, E, j, b, v, T, J, m, G, L, x, O, F, h, C, N, qq, Dq;
class Qt {
  constructor(q, t, V = {}) {
    g(this, h);
    g(this, B);
    g(this, E);
    g(this, j);
    g(this, b);
    g(this, v);
    g(this, T);
    g(this, J, new WeakMap);
    g(this, m);
    g(this, G);
    g(this, L);
    g(this, x);
    g(this, O);
    g(this, F, q => {
      var t;
      q.key !== a(this, E) || q.newValue === null || (l(this, B, w(this, h, C).call(this, q.newValue)), (t = a(this, T)) == null || t.call(this))
    });
    const {
      storage: r = "local",
      serializer: n = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: A = !0
    } = V, i = "window" in V ? V.window : wq;
    if (l(this, B, t), l(this, E, q), l(this, j, n), l(this, m, A), l(this, L, i), l(this, x, s), l(this, O, r), i === void 0) return;
    const u = Kt(r, i);
    l(this, b, u);
    const y = u.getItem(q);
    y !== null ? l(this, B, w(this, h, C).call(this, y)) : A && w(this, h, N).call(this, t), w(this, h, qq).call(this)
  }
  get current() {
    var t, V, r, n;
    (t = a(this, v)) == null || t.call(this);
    let q;
    if (a(this, m)) {
      const s = (V = a(this, b)) == null ? void 0 : V.getItem(a(this, E));
      q = s ? w(this, h, C).call(this, s) : a(this, B)
    } else q = a(this, B);
    return Eq(q, q, a(this, J), (r = a(this, v)) == null ? void 0 : r.bind(this), (n = a(this, T)) == null ? void 0 : n.bind(this), w(this, h, N).bind(this))
  }
  set current(q) {
    var t;
    w(this, h, N).call(this, q), (t = a(this, T)) == null || t.call(this)
  }
  get connected() {
    return a(this, m)
  }
  disconnect() {
    var t, V;
    if (!a(this, m)) return;
    const q = (t = a(this, b)) == null ? void 0 : t.getItem(a(this, E));
    q && l(this, B, w(this, h, C).call(this, q)), l(this, m, !1), (V = a(this, b)) == null || V.removeItem(a(this, E)), w(this, h, Dq).call(this)
  }
  connect() {
    a(this, m) || (l(this, m, !0), w(this, h, N).call(this, a(this, B)), w(this, h, qq).call(this))
  }
}
B = new WeakMap, E = new WeakMap, j = new WeakMap, b = new WeakMap, v = new WeakMap, T = new WeakMap, J = new WeakMap, m = new WeakMap, G = new WeakMap, L = new WeakMap, x = new WeakMap, O = new WeakMap, F = new WeakMap, h = new WeakSet, C = function(q) {
  try {
    return a(this, j).deserialize(q)
  } catch (t) {
    console.error(`Error when parsing "${q}" from persisted store "${a(this,E)}"`, t);
    return
  }
}, N = function(q) {
  var t;
  if (!a(this, m)) {
    l(this, B, q);
    return
  }
  try {
    q !== void 0 && ((t = a(this, b)) == null || t.setItem(a(this, E), a(this, j).serialize(q)))
  } catch (V) {
    console.error(`Error when writing value from persisted store "${a(this,E)}" to ${a(this,b)}`, V)
  }
}, qq = function() {
  !a(this, L) || !a(this, m) || l(this, v, hq(q => (l(this, T, q), l(this, G, a(this, m) && a(this, x) && a(this, O) === "local" ? $(a(this, L), "storage", a(this, F)) : void 0), () => {
    var t;
    (t = a(this, G)) == null || t.call(this), l(this, G, void 0), l(this, T, void 0)
  })))
}, Dq = function() {
  var q;
  (q = a(this, G)) == null || q.call(this), l(this, G, void 0), l(this, v, void 0)
};
class Vq extends Promise {
  constructor(t) {
    let V;
    super((s, A) => {
      V = {
        resolve: n("fulfilled", s),
        reject: n("rejected", A)
      }, t == null || t(V.resolve, V.reject)
    });
    f(this, "resolvers");
    f(this, "state", {
      status: "pending"
    });
    this.resolvers = V;
    const r = this;

    function n(s, A) {
      return function(...u) {
        return r.state.status === "pending" && (r.state = r.mountStateByStatus(s, u[0])), A(...u)
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
  mountStateByStatus(t, V) {
    switch (t) {
      case "fulfilled":
        return {
          status: t, value: V
        };
      case "rejected":
        return {
          status: t, reason: V
        }
    }
    return this.state
  }
  create() {
    return new Vq
  }
}
var tq = (e => (e.Play = "https://play.google.com/billing", e))(tq || {});

function dq(e) {
  return ct(e)
}
const c = class c {
  constructor(q) {
    this.state = q
  }
  static get checkout() {
    var q, t;
    return ((q = c.checkoutState) == null ? void 0 : q.current) && new c((t = c.checkoutState) == null ? void 0 : t.current)
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
    var q, t;
    return ((q = c.checkout) == null ? void 0 : q.startedAt) && Date.now() - ((t = c.checkout) == null ? void 0 : t.startedAt) <= 3 * fq.day
  }
  static isRunning() {
    var q;
    return ((q = c.memoryCheckout) == null ? void 0 : q.type) === "running"
  }
  applyFinishIfNecessary(q) {
    this.startedAt > q.startedAt || c.isRunning() && c.onChangeCheckout({
      ...this.state,
      finishedAt: Date.now(),
      type: "finished",
      view: void 0,
      droplets: 0
    })
  }
  static start() {
    return c.onChangeCheckout({
      type: "running",
      startedAt: Date.now(),
      view: void 0,
      finishedAt: void 0
    })
  }
  static finish(q) {
    var t, V;
    return (V = (t = c.checkout) == null ? void 0 : t.applyFinishIfNecessary) == null ? void 0 : V.call(t, q)
  }
  static markViewed() {
    var t;
    const q = (t = c.checkout) == null ? void 0 : t.state;
    q && c.onChangeCheckout({
      startedAt: q == null ? void 0 : q.startedAt,
      finishedAt: Date.now(),
      droplets: q.type === "running" ? 0 : q.droplets,
      type: "finished",
      view: Date.now()
    })
  }
  static clear() {
    c.checkoutState.current = void 0
  }
  static onChangeCheckout(q) {
    return c.checkoutState.current = q, c.memoryCheckout = c.checkout, c.memoryCheckout
  }
  static preventNavigationInTWAIfInCheckout(q) {
    P.isTWA() && (c.addFocusListener(q), c.addNavigationListener(q))
  }
  static addFocusListener(q) {
    window.addEventListener("focus", () => {
      P.recover()
    }, {
      signal: q.signal
    })
  }
  static addNavigationListener(q) {
    const t = window.navigation;
    t && t.addEventListener("navigate", V => {
      var r;
      (!document.hasFocus() && c.memoryCheckout || c.isRunning()) && (V.preventDefault(), (r = P.log) == null || r.call(P, "intercepted", new Error().stack))
    }, {
      signal: q.signal
    })
  }
  static openCheckoutDialog(q) {
    return c.markViewed(), Cq(Nq("/payment/success-v3") + `?droplets=${q}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    K.pendingHistoryDialogOpen = !0
  }
};
f(c, "checkoutState", new Qt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), f(c, "memoryCheckout");
let d = c;

function pq(e) {
  const q = e;
  return {
    name: q == null ? void 0 : q.name,
    message: q == null ? void 0 : q.message
  }
}
const o = class o {
  static get playBillingBlocked() {
    return !!this.playBillingBlockedError
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...q) {
    var V;
    const t = q.map(r => JSON.stringify(r));
    throw (V = o.error) == null || V.call(o, ...q), t.forEach(r => Gq.error(r)), new Error(q.length === 1 ? t[0] : t.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(q, t) {
    const V = {
      sku: q,
      obfuscatedAccountId: t
    };
    return new PaymentRequest([{
      supportedMethods: tq.Play,
      data: V
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
  static isPlayBillingBlockedError(q) {
    const t = o.PLAY_BILLING_NOT_AVAILABLE.findIndex(r => Ut(pq(q), pq(r)));
    return o.PLAY_BILLING_NOT_AVAILABLE[t]
  }
  static setAsPlayBillingBlockedErrorIfNecessary(q) {
    try {
      if (!q) return;
      o.setAsPlayBillingBlocked(o.isPlayBillingBlockedError(q))
    } finally {
      return Promise.reject(q)
    }
  }
  static setAsPlayBillingBlocked(q) {
    o.playBillingBlockedError = q
  }
  static async getObfuscatedAccountId() {
    const q = await R.getPlayAccountId().then(({
      accountId: t
    }) => t);
    if (!q) throw o.setAsPlayBillingBlocked({
      message: "NO_ACCOUNT_ID",
      name: "NO_ACCOUNT_ID",
      printError: "Cannot find account id. Try again later."
    }), new Error("No hash account id");
    return q
  }
  static async createPaymentBySkuId(q) {
    const t = await o.getObfuscatedAccountId();
    return o.createPaymentRequest(q, t)
  }
  static async createPayment(q) {
    var y;
    o.twaGuard();
    const t = Z(q);
    if (!(t != null && t.productId)) throw new Error("No sku config or productId found");
    if (!((y = X.data) != null && y.id)) throw new Error("No user id");
    const V = await o.createPaymentBySkuId(q),
      r = d.start(),
      n = await V.show().catch(p => o.setAsPlayBillingBlockedErrorIfNecessary(p)).finally(() => {
        var p;
        return (p = d.finish) == null ? void 0 : p.call(d, r)
      }),
      s = n == null ? void 0 : n.toJSON();
    let A = "unknown";
    return s.details.purchaseToken ? i(A) : i("fail", new Error("Play Billing returned no purchase token")), {
      setStatus: i,
      status: A,
      out: s,
      verify: u
    };
    async function i(p, D) {
      if (A = p, await (n == null ? void 0 : n.complete(p).catch(() => {})), D) throw D
    }
    async function u() {
      try {
        const {
          droplets: p
        } = await o.verifyBySKU({
          sku: q,
          token: s.details.purchaseToken
        });
        return await i("success"), await o.refresh(), d.openCheckoutDialog(p)
      } catch (p) {
        await i("fail", p)
      }
    }
  }
  static refresh() {
    return o.twaGuard(), X.refresh()
  }
  static async dispatchPendingPurchases() {
    o.twaGuard();
    const q = {
      credited: 0,
      pending: 0
    };
    try {
      if (!o.service) return q;
      const t = await o.service.listPurchases().catch(() => []);
      if (!t.length) return q;
      const V = await Promise.allSettled(t.map(s => o.verifyBySKU({
        sku: s.itemId,
        token: s.purchaseToken
      })));
      let r = 0,
        n = 0;
      for (const s of V) s.status === "fulfilled" ? r += s.value.droplets : n++;
      return r > 0 && await o.refresh(), {
        credited: r,
        pending: n
      }
    } catch {
      return q
    }
  }
  static async autoRecoverPendingPurchases() {
    var r;
    if (o.twaGuard(), !d.shouldRecover() || (await o.wait, !o.isTWALoaded())) return;
    const {
      credited: q,
      pending: t
    } = await o.dispatchPendingPurchases().catch(() => ({
      credited: 0,
      pending: 0
    }));
    if (q > 0) {
      d.openCheckoutDialog(q);
      return
    }
    if (t > 0) {
      d.openPendingDialog();
      return
    }
    const V = (r = d.checkout) == null ? void 0 : r.state;
    if ((V == null ? void 0 : V.type) === "finished" && !V.view) {
      V.droplets && d.openCheckoutDialog(V.droplets);
      return
    }
    d.clear()
  }
  static verifyBySKU(q) {
    o.twaGuard();
    const t = Z(q.sku);
    return R.verifyPlayPurchase({
      productId: Number(t.productId),
      purchaseToken: q.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return bq() && !!this.getGlobal().getDigitalGoodsService
  }
  static canLoadTWA() {
    return this.isTWA()
  }
  static isTWALoaded() {
    return !!(X.data && this.billing && this.service)
  }
  static async load() {
    var q;
    try {
      this.service ?? (this.service = await this.getService()), (q = this.mapSKUs) != null && q.size || (this.mapSKUs = await this.getMapSKUs()), o.wait.resolve()
    } catch (t) {
      o.wait.reject(t)
    } finally {
      o.service && await o.recover()
    }
  }
  static async recover() {
    var q;
    if (d.shouldRecover()) try {
      const t = await o.getPurchasesAfter(),
        r = ((q = Object.groupBy(t, n => n.status).paid) == null ? void 0 : q.reduce((n, s) => n + s.droplets, 0)) ?? 0;
      if (r > 0) {
        await d.openCheckoutDialog(r);
        return
      }
      if (t != null && t.length) {
        await d.openPendingDialog();
        return
      }
    } finally {
      await o.refresh()
    }
  }
  static async getPurchasesAfter() {
    var r, n;
    const q = ((r = d.checkout) == null ? void 0 : r.state.view) ?? ((n = d.checkout) == null ? void 0 : n.state.startedAt);
    return q ? (await R.listPlayPurchaseHistory()).purchases.sort((s, A) => Date.parse(A.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > q) : []
  }
  static async loadTWA() {
    o.canLoadTWA() && await o.load()
  }
  static isSamsung() {
    return Yq() === "Samsung Internet"
  }
  static nativeFormat(q) {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: q.price.currency
    }).format(+q.price.value)
  }
  static printPriceBySKU(q) {
    var r;
    const t = o.mapSKUs.get(q);
    if ((t == null ? void 0 : t.price) != null) return this.nativeFormat(t);
    const V = (t == null ? void 0 : t.price) ?? {
      value: ((r = Z(q)) == null ? void 0 : r.price) * vq / 100,
      currency: "USD"
    };
    return [V.currency, Number(V.value).toFixed(2)].join(" ")
  }
};
f(o, "POOLING_TIME", 10), f(o, "playBillingBlockedError"), f(o, "billing", !1), f(o, "service"), f(o, "mapSKUs", new Map), f(o, "referrer", []), f(o, "wait", new Vq), f(o, "USER_CANCELLED_ERROR", "Payment app returned RESULT_CANCELED code. This is how payment apps can close their activity programmatically."), f(o, "PLAY_BILLING_NOT_AVAILABLE", [{
  printError: Hq(),
  name: "AbortError",
  message: "Invalid state."
}, {
  printError: "Play billing não suportado.",
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported.'
}]), f(o, "getMapSKUs", dq(async () => {
  var r;
  o.twaGuard();
  const q = Object.values(Mq.products).filter(n => "lookupKey" in n).map(n => n.lookupKey),
    t = await ((r = o.service) == null ? void 0 : r.getDetails(q).catch(n => o.setAsPlayBillingBlockedErrorIfNecessary(n)));
  return new Map(t == null ? void 0 : t.map(n => [n.itemId, n]))
})), f(o, "getService", dq(() => {
  var q, t;
  return (t = (q = o.getGlobal()).getDigitalGoodsService) == null ? void 0 : t.call(q, tq.Play).then(V => (o.billing = !0, V))
})), f(o, "onInit", async q => {
  o.referrer.push(document.referrer), d.preventNavigationInTWAIfInCheckout(q)
});
let P = o;

function bq() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function ae() {
  const e = "last-unfocus",
    q = new AbortController;
  if (bq()) {
    queueMicrotask(async () => {
      await P.onInit(q)
    });
    const t = () => {
        const r = localStorage.getItem(e);
        if (r) {
          const n = parseInt(r, 10);
          Date.now() - n > 5 * fq.minute && window.location.reload()
        }
      },
      V = () => {
        localStorage.setItem(e, Date.now().toString());
        const r = K.map;
        if (r) {
          const n = r.getCenter(),
            s = r.getZoom();
          at(n, s)
        }
      };
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? t() : V()
    }, {
      signal: q.signal
    }), window.addEventListener("pageshow", t, {
      signal: q.signal
    }), window.addEventListener("pagehide", V, {
      signal: q.signal
    })
  }
  return () => {
    q.abort()
  }
}
export {
  te as A, d as T, P as a, re as b, Hq as c, at as d, st as e, bq as f, ne as g, oe as i, se as l, Ve as p, ae as s, ee as u, Jt as w
};