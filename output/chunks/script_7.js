import {
  g as e
} from "./BhCkpOlh.js";

function t() {
  return e()
}

function u(r) {
  switch (r) {
    case "ch":
      return "zh-CN";
    case "jp":
      return "ja-JP";
    case "pt":
      return "pt-BR";
    case "uk":
      return "uk-UA";
    default:
      return r || "en"
  }
}

function s() {
  return `/terms/return${t()==="pt"?"/pt":""}`
}

function a() {
  return `/terms/terms-of-service${t()==="pt"?"/pt":""}`
}
export {
  u as b, t as g, s as r, a as t
};