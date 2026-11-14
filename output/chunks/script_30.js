import {
  t as e
} from "./C4a9oB_N.js";
import {
  t
} from "./tCG0SPM0.js";
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
    key: `metrics`,
    href: `/dashboard/metrics`,
    label: () => e.metrics(),
    permissions: t.dashboard.metrics.but(`playersList`, `playersDashboardsShare`)
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
    key: `punishment-analysis`,
    href: `/dashboard/punishment-analysis`,
    label: () => e.punishment_analysis_tab(),
    permissions: t.dashboard.punishmentAnalysis
  }, {
    key: `anticheat`,
    href: `/dashboard/anticheat`,
    label: () => `Anticheat`,
    permissions: t.dashboard.anticheat
  }],
  r = [{
    key: `metrics-tickets`,
    href: `/dashboard/metrics/tickets`,
    label: () => e.tickets(),
    permissions: t.dashboard.metrics.only(`tickets`)
  }, {
    key: `metrics-onboarding`,
    href: `/dashboard/metrics/onboarding`,
    label: () => e.metrics_onboarding(),
    permissions: t.dashboard.metrics.only(`onboarding`)
  }, {
    key: `metrics-notices`,
    href: `/dashboard/metrics/notices`,
    label: () => e.metrics_notices(),
    permissions: t.dashboard.metrics.only(`notices`)
  }, {
    key: `metrics-players`,
    href: `/dashboard/metrics/players`,
    label: () => e.players(),
    permissions: t.dashboard.metrics.only(`players`)
  }],
  i = [{
    key: `team-tickets`,
    href: `/dashboard/team/leaderboard-tickets`,
    label: () => `${e.leaderboard()} (${e.tickets()})`,
    permissions: t.dashboard.team.only(`tickets`)
  }, {
    key: `team-reports`,
    href: `/dashboard/team/leaderboard-reports`,
    label: () => `${e.leaderboard()} (${e.reports()})`,
    permissions: t.dashboard.team.only(`reports`)
  }];

function a(...e) {
  return e.map(e => n.find(t => t.key === e))
}
var o = [{
  key: `home`,
  label: () => e.home(),
  pages: a(`dashboard`)
}, {
  key: `support`,
  label: () => e.support_title(),
  pages: a(`support`)
}, {
  key: `moderation`,
  label: () => e.moderation(),
  pages: a(`tickets`, `appeals`, `ticket-reversals`, `punishment-analysis`, `anticheat`, `protections`, `mods`)
}, {
  key: `community`,
  label: () => e.dashboard_group_community(),
  pages: a(`users`, `alliances`, `businesses`)
}, {
  key: `metrics`,
  label: () => e.metrics(),
  pages: r
}, {
  key: `store`,
  label: () => e.store(),
  pages: a(`store-manager`)
}, {
  key: `admin`,
  label: () => e.admin(),
  pages: a(`permissions`, `audit-logs`)
}];

function s(e, t) {
  return e === t || e.startsWith(t + `/`)
}

function c(e) {
  return o.map(t => ({
    ...t,
    pages: t.pages.filter(t => e.hasAnyPermission(t.permissions))
  })).filter(e => e.pages.length > 0)
}

function l(e) {
  var a;
  let o = e.replace(/\/$/, ``),
    s = i.find(e => e.href === o);
  if (s) return s.permissions;
  if (/^\/dashboard\/ticket-reversals\/[^/]+$/.test(o)) return t.tickets.only(`revertReview`);
  let c = r.find(e => e.href === o);
  return c ? c.permissions : ((a = n.find(e => e.href === o)) == null ? void 0 : a.permissions) ?? []
}

function u(e) {
  return n.find(t => e.hasAnyPermission(t.permissions))
}
export {
  u as a, l as i, r as n, s as o, i as r, c as s, n as t
};