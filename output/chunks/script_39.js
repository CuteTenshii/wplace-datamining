import {
  t as e
} from "./BjfSTdKe.js";
import {
  t
} from "./CGfxXBSU.js";
var n = [{
    key: `dashboard`,
    href: `/dashboard/home`,
    label: () => e.home(),
    permissions: t.dashboard.summary
  }, {
    key: `support`,
    href: `/dashboard/support`,
    label: () => e.support_title(),
    permissions: [...t.support.view, t.support.config, t.support.manage_levels]
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
  }, {
    key: `commerce`,
    href: `/dashboard/commerce`,
    label: () => e.commerce_title(),
    permissions: t.commerce.only(`viewCatalog`, `viewSync`, `viewFinancials`, `viewPurchases`, `viewAudit`)
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
  }, {
    key: `metrics-revenue`,
    href: `/dashboard/metrics/revenue`,
    label: () => e.metrics_revenue(),
    permissions: t.dashboard.metrics.only(`revenue`)
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
  pages: a(`store-manager`, `commerce`)
}, {
  key: `admin`,
  label: () => e.admin(),
  pages: a(`permissions`, `audit-logs`)
}];

function s(e, t) {
  return e === t || e.startsWith(t + `/`)
}
var c = n.filter(e => e.key === `commerce` || e.key === `metrics`);

function l(e) {
  return c.some(t => s(e, t.href))
}

function u(e) {
  return o.map(t => ({
    ...t,
    pages: t.pages.filter(t => e.hasAnyPermission(t.permissions))
  })).filter(e => e.pages.length > 0)
}
var d = [{
  key: `commerce-overview`,
  href: `/dashboard/commerce`,
  label: () => e.commerce_tab_overview(),
  permissions: t.commerce.only(`viewCatalog`, `viewSync`, `viewFinancials`)
}, {
  key: `commerce-catalog`,
  href: `/dashboard/commerce/catalog`,
  label: () => e.commerce_tab_catalog(),
  permissions: t.commerce.only(`viewCatalog`)
}, {
  key: `commerce-products`,
  href: `/dashboard/commerce/products`,
  label: () => e.commerce_tab_products(),
  permissions: t.commerce.only(`viewCatalog`)
}, {
  key: `commerce-changes`,
  href: `/dashboard/commerce/changes`,
  label: () => e.commerce_tab_changes(),
  permissions: t.commerce.only(`viewCatalog`)
}, {
  key: `commerce-promotions`,
  href: `/dashboard/commerce/promotions`,
  label: () => e.commerce_tab_promotions(),
  permissions: t.commerce.only(`viewCatalog`)
}, {
  key: `commerce-sales`,
  href: `/dashboard/commerce/sales`,
  label: () => e.commerce_tab_sales(),
  permissions: t.commerce.only(`viewFinancials`)
}, {
  key: `commerce-purchases`,
  href: `/dashboard/commerce/purchases`,
  label: () => e.commerce_tab_purchases(),
  permissions: t.commerce.only(`viewPurchases`)
}, {
  key: `commerce-providers`,
  href: `/dashboard/commerce/providers`,
  label: () => e.commerce_tab_providers(),
  permissions: t.commerce.only(`viewSync`)
}, {
  key: `commerce-history`,
  href: `/dashboard/commerce/history`,
  label: () => e.commerce_tab_history(),
  permissions: t.commerce.only(`viewAudit`)
}];

function f(e) {
  if (e === `/dashboard/commerce`) {
    var r;
    return (r = n.find(e => e.key === `commerce`)) == null ? void 0 : r.permissions
  }
  if (!e.startsWith(`/dashboard/commerce/`)) return;
  let i = [...d].filter(e => e.href !== `/dashboard/commerce`).find(t => e === t.href || e.startsWith(t.href + `/`));
  return i ? /^\/dashboard\/commerce\/changes\/new$/.test(e) ? t.commerce.only(`draftChanges`) : /^\/dashboard\/commerce\/promotions\/new$/.test(e) ? t.commerce.only(`managePromotions`) : /^\/dashboard\/commerce\/products\/(new|[^/]+\/edit)$/.test(e) ? t.commerce.only(`manageProducts`) : i.permissions : []
}

function p(e) {
  var a;
  let o = e.replace(/\/$/, ``),
    s = f(o);
  if (s) return s;
  let c = i.find(e => e.href === o);
  if (c) return c.permissions;
  if (/^\/dashboard\/ticket-reversals\/[^/]+$/.test(o)) return t.tickets.only(`revertReview`);
  let l = r.find(e => e.href === o);
  return l ? l.permissions : ((a = n.find(e => e.href === o)) == null ? void 0 : a.permissions) ?? []
}

function m(e) {
  return n.find(t => e.hasAnyPermission(t.permissions))
}
export {
  i as a, s as c, c as i, l, n, p as o, r, m as s, d as t, u
};