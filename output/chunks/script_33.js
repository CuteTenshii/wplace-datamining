import {
  t as e
} from "./Bpg9SJXw.js";
import {
  t
} from "./C8I5gCKJ.js";
var n = [{
  key: `support`,
  href: `/dashboard/support`,
  label: () => e.support_title(),
  permissions: [...t.support.view, t.support.config, t.support.manage_levels]
}, {
  key: `dashboard`,
  href: `/dashboard/home`,
  label: () => e.home(),
  permissions: t.dashboard.summary
}, {
  key: `mods`,
  href: `/dashboard/team`,
  label: () => e.team(),
  permissions: t.dashboard.team
}, {
  key: `appeals`,
  href: `/dashboard/appeals`,
  label: () => e.appeals(),
  permissions: t.dashboard.banAppeals
}, {
  key: `tickets`,
  href: `/dashboard/tickets`,
  label: () => e.tickets(),
  permissions: t.dashboard.allTickets
}, {
  key: `kpi`,
  href: `/dashboard/kpi/tickets`,
  label: () => `KPI`,
  permissions: t.dashboard.kpi
}, {
  key: `users`,
  href: `/dashboard/users`,
  label: () => e.users(),
  permissions: t.dashboard.users
}, {
  key: `businesses`,
  href: `/dashboard/businesses`,
  label: () => e.businesses(),
  permissions: t.dashboard.businesses
}, {
  key: `permissions`,
  href: `/dashboard/permissions`,
  label: () => e.permissions(),
  permissions: t.dashboard.permissions
}, {
  key: `alliances`,
  href: `/dashboard/alliances`,
  label: () => e.alliances(),
  permissions: t.dashboard.alliances
}, {
  key: `protections`,
  href: `/dashboard/protections`,
  label: () => e.protection_title(),
  permissions: t.dashboard.protections
}, {
  key: `audit-logs`,
  href: `/dashboard/audit-logs`,
  label: () => e.audit_logs(),
  permissions: t.dashboard.auditLogs.only(`see`)
}, {
  key: `ticket-reversals`,
  href: `/dashboard/ticket-reversals`,
  label: () => e.ticket_reversals_title(),
  permissions: t.tickets.only(`revertReview`)
}, {
  key: `store-manager`,
  href: `/dashboard/store-manager`,
  label: () => e.store_manager(),
  permissions: t.dashboard.storeManager
}, {
  key: `anticheat`,
  href: `/dashboard/anticheat`,
  label: () => `Anticheat`,
  permissions: t.dashboard.anticheat
}];

function r(e) {
  var r;
  let i = e.replace(/\/$/, ``);
  return i === `/dashboard/team/leaderboard-tickets` ? t.dashboard.team.only(`tickets`) : i === `/dashboard/team/leaderboard-reports` ? t.dashboard.team.only(`reports`) : /^\/dashboard\/ticket-reversals\/[^/]+$/.test(i) ? t.tickets.only(`revertReview`) : ((r = n.find(e => e.href === i)) == null ? void 0 : r.permissions) ?? []
}

function i(e) {
  return n.find(t => e.hasAnyPermission(t.permissions))
}
export {
  r as n, i as r, n as t
};