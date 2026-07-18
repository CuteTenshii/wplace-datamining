import {
  g as o
} from "./BhCkpOlh.js";
import {
  P as r
} from "./EXivIPNQ.js";
import {
  a as t
} from "./BdCqcZGB.js";
import {
  a as i
} from "./og9Js_3x.js";
import {
  a as d
} from "./U_H6LM6d.js";
import {
  h as n
} from "./Bw7Hy7Ll.js";
import {
  p as h
} from "./Dt2PKvft.js";
import {
  s as l
} from "./ByH6mgv9.js";
import {
  t as b
} from "./OvJd4Dh6.js";
import {
  t as m
} from "./CW0X7odH.js";
import {
  u as p
} from "./CsIr9lN0.js";
import {
  t as u
} from "./CqMJ2HFU.js";
const f = () => "Dashboard",
  c = () => "Painel",
  k = () => "控制台",
  _ = () => "Dashboard",
  y = () => "Panel",
  g = () => "Tableau de bord",
  P = () => "Pannello",
  S = () => "ダッシュボード",
  v = () => "Panel",
  A = () => "Панель",
  D = () => "Панель",
  I = () => "Bảng điều khiển",
  H = (e = {}, a = {}) => {
    const s = a.locale ?? o();
    return s === "en" ? f() : s === "pt" ? c() : s === "ch" ? k() : s === "de" ? _() : s === "es" ? y() : s === "fr" ? g() : s === "it" ? P() : s === "jp" ? S() : s === "pl" ? v() : s === "ru" ? A() : s === "uk" ? D() : I()
  },
  O = [{
    key: "dashboard",
    href: "/dashboard/home",
    label: () => n(),
    permissions: r.dashboard.summary
  }, {
    key: "mods",
    href: "/dashboard/team",
    label: () => b(),
    permissions: r.dashboard.team
  }, {
    key: "appeals",
    href: "/dashboard/appeals",
    label: () => i(),
    permissions: r.dashboard.banAppeals
  }, {
    key: "tickets",
    href: "/dashboard/tickets",
    label: () => m(),
    permissions: r.dashboard.allTickets
  }, {
    key: "kpi",
    href: "/dashboard/kpi/tickets",
    label: () => "KPI",
    permissions: r.dashboard.kpi
  }, {
    key: "users",
    href: "/dashboard/users",
    label: () => p(),
    permissions: r.dashboard.users
  }, {
    key: "permissions",
    href: "/dashboard/permissions",
    label: () => h(),
    permissions: r.dashboard.permissions
  }, {
    key: "alliances",
    href: "/dashboard/alliances",
    label: () => t(),
    permissions: r.dashboard.alliances
  }, {
    key: "audit-logs",
    href: "/dashboard/audit-logs",
    label: () => d(),
    permissions: r.dashboard.auditLogs
  }, {
    key: "ticket-reversals",
    href: "/dashboard/ticket-reversals",
    label: () => u(),
    permissions: r.tickets.only("revertReview")
  }, {
    key: "store-manager",
    href: "/dashboard/store-manager",
    label: () => l(),
    permissions: r.dashboard.storeManager
  }, {
    key: "anticheat",
    href: "/dashboard/anticheat",
    label: () => "Anticheat",
    permissions: r.dashboard.anticheat
  }];

function K(e) {
  return O.find(a => e.hasAnyPermission(a.permissions))
}
export {
  O as D, H as d, K as f
};