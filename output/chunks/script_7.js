import {
  g as t
} from "./BhCkpOlh.js";

function e() {
  return t()
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

function a() {
  return `/terms/return${e()==="pt"?"/pt":""}`
}
export {
  u as b, e as g, a as r
};