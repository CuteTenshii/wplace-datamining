import {
  P as s
} from "./CrN6bqEV.js";
import {
  m as a
} from "./XL5Wf48w.js";
const i = [{
  key: "dashboard",
  href: "/dashboard/home",
  label: () => a.home(),
  permissions: s.dashboard.summary
}, {
  key: "mods",
  href: "/dashboard/team",
  label: () => a.team(),
  permissions: s.dashboard.team
}, {
  key: "appeals",
  href: "/dashboard/appeals",
  label: () => a.appeals(),
  permissions: s.dashboard.banAppeals
}, {
  key: "tickets",
  href: "/dashboard/tickets",
  label: () => a.tickets(),
  permissions: s.dashboard.allTickets
}, {
  key: "kpi",
  href: "/dashboard/kpi/tickets",
  label: () => "KPI",
  permissions: s.dashboard.kpi
}, {
  key: "users",
  href: "/dashboard/users",
  label: () => a.users(),
  permissions: s.dashboard.users
}, {
  key: "permissions",
  href: "/dashboard/permissions",
  label: () => a.permissions(),
  permissions: s.dashboard.permissions
}, {
  key: "alliances",
  href: "/dashboard/alliances",
  label: () => a.alliances(),
  permissions: s.dashboard.alliances
}, {
  key: "audit-logs",
  href: "/dashboard/audit-logs",
  label: () => a.audit_logs(),
  permissions: s.dashboard.auditLogs.only("see")
}, {
  key: "ticket-reversals",
  href: "/dashboard/ticket-reversals",
  label: () => a.ticket_reversals_title(),
  permissions: s.tickets.only("revertReview")
}, {
  key: "store-manager",
  href: "/dashboard/store-manager",
  label: () => a.store_manager(),
  permissions: s.dashboard.storeManager
}, {
  key: "anticheat",
  href: "/dashboard/anticheat",
  label: () => "Anticheat",
  permissions: s.dashboard.anticheat
}];

function t(e) {
  return i.find(r => e.hasAnyPermission(r.permissions))
}
export {
  i as D, t as f
};