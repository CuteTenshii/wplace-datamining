import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "View on map",
  _ = () => "Ver no mapa",
  o = () => "在地图上查看",
  a = () => "Auf der Karte anzeigen",
  i = () => "Ver en el mapa",
  u = () => "Voir sur la carte",
  p = () => "Visualizza sulla mappa",
  s = () => "地図で表示",
  c = () => "Zobacz na mapie",
  m = () => "Посмотреть на карте",
  f = () => "Переглянути на карті",
  v = () => "Xem trên bản đồ",
  V = (w = {}, n = {}) => {
    const r = n.locale ?? e();
    return r === "en" ? t() : r === "pt" ? _() : r === "ch" ? o() : r === "de" ? a() : r === "es" ? i() : r === "fr" ? u() : r === "it" ? p() : r === "jp" ? s() : r === "pl" ? c() : r === "ru" ? m() : r === "uk" ? f() : v()
  };
export {
  V as v
};