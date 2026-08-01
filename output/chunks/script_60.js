import {
  g as r
} from "./BhCkpOlh.js";
const n = () => "Extra context on what happened (required)",
  o = () => "Mais informações sobre o que aconteceu (obrigatório)",
  i = () => "请提供发生情况的额外背景（必填）",
  c = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  u = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  a = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  s = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  _ = () => "何が起きたかの詳細な説明（必須）",
  x = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  g = () => "Дополнительный контекст о произошедшем (обязательно)",
  f = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  l = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  h = (v = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? n() : t === "pt" ? o() : t === "ch" ? i() : t === "de" ? c() : t === "es" ? u() : t === "fr" ? a() : t === "it" ? s() : t === "jp" ? _() : t === "pl" ? x() : t === "ru" ? g() : t === "uk" ? f() : l()
  };
export {
  h as g
};