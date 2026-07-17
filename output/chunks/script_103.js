import {
  g as e
} from "./BhCkpOlh.js";
const n = () => "Team",
  u = () => "Time",
  a = () => "团队",
  o = () => "Team",
  i = () => "Equipo",
  s = () => "Équipe",
  c = () => "Team",
  m = () => "チーム",
  f = () => "Zespół",
  p = () => "Команда",
  _ = () => "Команда",
  l = () => "Đội ngũ",
  d = (T = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? n() : t === "pt" ? u() : t === "ch" ? a() : t === "de" ? o() : t === "es" ? i() : t === "fr" ? s() : t === "it" ? c() : t === "jp" ? m() : t === "pl" ? f() : t === "ru" ? p() : t === "uk" ? _() : l()
  };
export {
  d as t
};