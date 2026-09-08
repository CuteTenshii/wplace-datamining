import {
  t as e
} from "./BsQK2KsC.js";
import {
  i as t,
  r as n,
  t as r
} from "./DTHL1jGZ.js";
var i = {
  picture_unlock: e.alliance_store_picture_unlock,
  picture_draft: e.alliance_store_picture_draft,
  banner_unlock: e.alliance_store_banner_unlock,
  banner_draft: e.alliance_store_banner_draft,
  rename: e.alliance_rename_paid,
  better_description: e.alliance_better_description,
  better_pallet: e.alliance_better_pallet,
  advanced_paint_tools: e.alliance_advanced_paint_tools,
  description_change: e.alliance_description_change_credit,
  headquarters_unlock: e.alliance_hq_unlock_title,
  headquarters_change: e.alliance_hq_change_credit
};

function a(t) {
  return t.size ? e.alliance_store_hq_size({
    size: `${t.size} x ${t.size}`
  }) : t.maxCharges ? e.alliance_store_hq_max_charges({
    charges: t.maxCharges
  }) : t.chargeIntervalSeconds ? e.alliance_store_hq_charge_cooldown({
    seconds: t.chargeIntervalSeconds
  }) : o(t.key)
}

function o(t) {
  var n, r, a, o, s;
  let c = (n = /^template_spaces_(\d+)$/.exec(t)) == null ? void 0 : n[1];
  if (c) return e.alliance_store_template_spaces({
    count: Number(c)
  });
  let l = (r = /^headquarters_size_(\d+)$/.exec(t)) == null ? void 0 : r[1];
  if (l) return e.alliance_store_hq_size({
    size: `${l} x ${l}`
  });
  let u = (a = /^headquarters_max_charges_(\d+)$/.exec(t)) == null ? void 0 : a[1];
  if (u) return e.alliance_store_hq_max_charges({
    charges: u
  });
  let d = (o = /^headquarters_charge_cooldown_(\d+)$/.exec(t)) == null ? void 0 : o[1];
  return d ? e.alliance_store_hq_charge_cooldown({
    seconds: d
  }) : ((s = i[t]) == null ? void 0 : s.call(i)) ?? t
}

function s(t, n) {
  if (t.key.startsWith(`template_spaces_`)) return e.alliance_store_template_spaces_detail();
  switch (t.key) {
    case `picture_unlock`:
    case `banner_unlock`:
      return e.alliance_asset_unlock_description(c(t, n));
    case `picture_draft`:
    case `banner_draft`:
      return e.alliance_store_draft_detail(c(t, n));
    case `rename`:
      return e.alliance_store_rename_detail();
    case `better_description`:
      return e.alliance_better_description_detail();
    case `better_pallet`:
      return e.alliance_better_pallet_detail();
    case `advanced_paint_tools`:
      return e.alliance_advanced_paint_tools_detail();
    case `description_change`:
      return e.alliance_description_change_credit_detail();
    case `headquarters_unlock`:
      return e.alliance_hq_unlock_detail();
    case `headquarters_change`:
      return e.alliance_hq_change_credit_detail();
    default:
      return t.size ? e.alliance_store_hq_size_detail({
        pixels: l(t, n)
      }) : t.maxCharges ? e.alliance_store_hq_max_charges_detail() : t.chargeIntervalSeconds ? e.alliance_store_hq_charge_cooldown_detail() : ``
  }
}

function c(e, t) {
  let n = e.key.startsWith(`picture`) ? t.assets.picture : t.assets.banner;
  return {
    width: n.width,
    height: n.height
  }
}

function l(e, t) {
  if (!e.size) return 0;
  let n = t.headquarters.sizes.filter(t => t < e.size).at(-1) ?? e.size;
  return (e.size - n) / 2
}
var u = [`alliance_join_request`, `alliance_join_request_decided`, `alliance_removed`, `alliance_role_changed`, `alliance_leadership_transferred`, `alliance_draft_editor_changed`, `alliance_hq_timeout_changed`, `alliance_activity`],
  d = {
    lifecycle: e.alliance_notification_category_lifecycle,
    membership: e.alliance_notification_category_membership,
    leadership: e.alliance_notification_category_leadership,
    profile: e.alliance_notification_category_profile,
    settings: e.alliance_notification_category_settings,
    economy: e.alliance_notification_category_economy,
    awards: e.alliance_notification_category_awards,
    assets: e.alliance_notification_category_assets
  };

function f(e, t) {
  let n = e[t];
  return typeof n == `string` ? n : ``
}

function p(t) {
  switch (t) {
    case `admin`:
      return e.alliance_role_admin();
    case `mod`:
      return e.alliance_role_mod();
    case `leader`:
      return e.alliance_role_leader();
    default:
      return e.alliance_role_member()
  }
}

function m(t) {
  switch (t) {
    case `open`:
      return e.alliance_settings_join_policy_open();
    case `request`:
      return e.alliance_settings_join_policy_request();
    default:
      return e.alliance_settings_join_policy_invite_only()
  }
}

function h(t) {
  switch (t) {
    case `member`:
      return e.alliance_settings_invite_min_role_member();
    case `mod`:
      return e.alliance_role_mod();
    case `admin`:
      return e.alliance_settings_invite_min_role_admin();
    default:
      return e.alliance_settings_invite_min_role_leader()
  }
}

function g(t) {
  let n = Array.isArray(t.changedSettings) ? t.changedSettings.filter(e => typeof e == `string`) : [];
  if (n.length !== 1) return e.alliance_activity_event_settings_changed();
  switch (n[0]) {
    case `discoverability`:
      return e.alliance_activity_event_discoverability_changed({
        visibility: f(t, `discoverability`) === `public` ? e.alliance_settings_discoverability_public() : e.alliance_settings_discoverability_unlisted()
      });
    case `joinPolicy`:
      return e.alliance_activity_event_join_policy_changed({
        policy: m(f(t, `joinPolicy`))
      });
    case `inviteMinRole`:
      return e.alliance_activity_event_invite_role_changed({
        role: h(f(t, `inviteMinRole`))
      });
    default:
      return e.alliance_activity_event_settings_changed()
  }
}

function _(e, t) {
  return t.startsWith(`hq_`) ? `headquarters` : e in d ? e : `lifecycle`
}

function v(i) {
  let a = f(i, `event`),
    s = f(i, `userName`),
    c = f(i, `assetType`) === `banner` ? e.alliance_asset_banner() : e.alliance_asset_picture();
  switch (a) {
    case `created`:
      return e.alliance_activity_event_created();
    case `archived`:
      return e.alliance_activity_event_archived();
    case `restored`:
      return e.alliance_activity_event_restored();
    case `member_joined`:
      return s ? e.alliance_activity_event_member_joined_named({
        name: s
      }) : e.alliance_activity_event_member_joined();
    case `member_left`:
      return s ? e.alliance_activity_event_member_left_named({
        name: s
      }) : e.alliance_activity_event_member_left();
    case `role_changed`:
      return s ? e.alliance_activity_event_role_changed_named({
        name: s,
        role: p(f(i, `role`))
      }) : e.alliance_activity_event_role_changed();
    case `leadership_transferred`:
      return s ? e.alliance_activity_event_leadership_transferred_named({
        name: s
      }) : e.alliance_activity_event_leadership_transferred();
    case `description_changed`:
      return e.alliance_activity_event_description_changed();
    case `hq_moved`:
      return e.alliance_activity_event_hq_moved();
    case `hq_unlocked`:
      return e.alliance_activity_event_hq_unlocked();
    case `hq_expanded`:
      return e.alliance_activity_event_hq_expanded({
        size: `${String(i.newSize??i.size??``)}x${String(i.newSize??i.size??``)}`
      });
    case `hq_visibility_changed`:
      return f(i, `hqVisibility`) === `members_only` ? e.alliance_activity_event_hq_visibility_members_only() : e.alliance_activity_event_hq_visibility_public();
    case `settings_changed`:
      return g(i);
    case `permissions_changed`:
      return e.alliance_permissions_title();
    case `discord_invite_changed`:
      return i.removed ? e.alliance_activity_event_discord_invite_removed() : e.alliance_activity_event_discord_invite_changed();
    case `renamed`: {
      let t = f(i, `name`);
      return t ? e.alliance_activity_event_renamed_to({
        name: t
      }) : e.alliance_activity_event_renamed()
    }
    case `purchase_completed`: {
      let t = f(i, `item`),
        n = Number(i.cost);
      return t && Number.isFinite(n) ? e.alliance_activity_event_purchase_completed_detail({
        item: o(t),
        cost: n.toLocaleString()
      }) : e.alliance_activity_event_purchase_completed()
    }
    case `award_earned`: {
      let a = f(i, `awardTier`);
      return t(a) ? e.alliance_activity_event_award_tier_earned({
        award: r(f(i, `awardKey`), a),
        tier: n(a)
      }) : e.alliance_activity_event_award_earned({
        award: r(f(i, `awardKey`))
      })
    }
    case `award_upgraded`: {
      let a = f(i, `awardTier`);
      return t(a) ? e.alliance_activity_event_award_upgraded({
        award: r(f(i, `awardKey`), a),
        tier: n(a)
      }) : e.alliance_activity_event_unknown()
    }
    case `featured_awards_changed`:
      if (Array.isArray(i.awards)) {
        let n = i.awards.flatMap(e => {
          if (!e || typeof e != `object`) return [];
          let n = e,
            i = f(n, `tier`);
          return t(i) ? [r(f(n, `key`), i)] : []
        });
        return n.length > 0 ? e.alliance_activity_event_featured_awards_named({
          awards: n.join(`, `)
        }) : e.alliance_activity_event_featured_awards_cleared()
      }
      return Array.isArray(i.awardKeys) && i.awardKeys.length === 0 ? e.alliance_activity_event_featured_awards_cleared() : e.alliance_activity_event_featured_awards_changed();
    case `asset_draft_created`:
      return e.alliance_activity_event_asset_draft_created({
        asset: c
      });
    case `asset_draft_finished`:
      return e.alliance_activity_event_asset_draft_finished({
        asset: c
      });
    case `asset_draft_abandoned`:
      return e.alliance_activity_event_asset_draft_abandoned({
        asset: c
      });
    case `asset_version_selected`:
      return e.alliance_activity_event_asset_version_selected({
        asset: c
      });
    case `asset_unpublished`:
      return e.alliance_activity_event_asset_unpublished({
        asset: c
      });
    case `asset_version_deleted`:
      return e.alliance_activity_event_asset_version_deleted({
        asset: c
      });
    case `templates_changed`:
      return e.alliance_activity_event_templates_changed();
    case `template_created`:
      return e.alliance_activity_event_template_created({
        name: f(i, `name`)
      });
    case `template_updated`:
      return e.alliance_activity_event_template_updated({
        name: f(i, `name`)
      });
    case `template_deleted`:
      return e.alliance_activity_event_template_deleted({
        name: f(i, `name`)
      });
    default:
      return e.alliance_activity_event_unknown()
  }
}

function y(t) {
  let n = t.data ?? {},
    r = f(n, `allianceName`);
  switch (t.type) {
    case `alliance_join_request`:
      return {
        title: e.alliance_notification_join_request_title(), message: e.alliance_notification_join_request({
          requesterName: f(n, `requesterName`),
          allianceName: r
        }), kind: `membership`
      };
    case `alliance_join_request_decided`:
      switch (f(n, `status`)) {
        case `accepted`:
          return {
            title: e.alliance_notification_request_accepted_title(), message: e.alliance_notification_request_accepted({
              allianceName: r
            }), kind: `membership`
          };
        case `rejected`:
          return {
            title: e.alliance_notification_request_rejected_title(), message: e.alliance_notification_request_rejected({
              allianceName: r
            }), kind: `membership`
          };
        case `cancelled`:
          return {
            title: e.alliance_notification_request_cancelled_title(), message: e.alliance_notification_request_cancelled({
              allianceName: r
            }), kind: `membership`
          };
        default:
          return {
            title: e.alliance_notification_request_expired_title(), message: e.alliance_notification_request_expired({
              allianceName: r
            }), kind: `membership`
          }
      }
    case `alliance_removed`:
      return n.banned ? {
        title: e.alliance_notification_removed_banned_title(),
        message: e.alliance_notification_removed_banned({
          allianceName: r
        }),
        kind: `membership`
      } : {
        title: e.alliance_notification_removed_kicked_title(),
        message: e.alliance_notification_removed_kicked({
          allianceName: r
        }),
        kind: `membership`
      };
    case `alliance_role_changed`:
      return {
        title: e.alliance_notification_role_changed_title(), message: e.alliance_notification_role_changed({
          allianceName: r,
          role: p(f(n, `role`))
        }), kind: `leadership`
      };
    case `alliance_leadership_transferred`:
      return n.isNewLeader === !1 ? {
        title: e.alliance_notification_leadership_transferred_title(),
        message: e.alliance_notification_former_leader({
          allianceName: r
        }),
        kind: `leadership`
      } : {
        title: e.alliance_notification_new_leader_title(),
        message: e.alliance_notification_new_leader({
          allianceName: r
        }),
        kind: `leadership`
      };
    case `alliance_hq_timeout_changed`: {
      if (!n.active) return {
        title: e.alliance_notification_hq_timeout_revoked_title(),
        message: e.alliance_notification_hq_timeout_revoked({
          allianceName: r
        }),
        kind: `headquarters`
      };
      let t = f(n, `reason`),
        i = f(n, `expiresAt`);
      return {
        title: e.alliance_notification_hq_timeout_applied_title(),
        message: i ? e.alliance_notification_hq_timeout_until({
          allianceName: r,
          date: new Date(i).toLocaleString(),
          reason: t
        }) : e.alliance_notification_hq_timeout_indefinite({
          allianceName: r,
          reason: t
        }),
        kind: `headquarters`
      }
    }
    case `alliance_draft_editor_changed`: {
      let t = !!n.granted,
        i = f(n, `assetType`) === `banner` ? e.alliance_asset_banner() : e.alliance_asset_picture();
      return {
        title: t ? e.alliance_notification_draft_editor_granted_title() : e.alliance_notification_draft_editor_revoked_title(),
        message: t ? e.alliance_notification_draft_editor_granted({
          allianceName: r,
          asset: i
        }) : e.alliance_notification_draft_editor_revoked({
          allianceName: r
        }),
        kind: `assets`
      }
    }
    default: {
      let t = f(n, `category`),
        i = f(n, `event`);
      return {
        title: r || e.alliance_notification_activity_title(),
        message: v(n),
        kind: _(t, i)
      }
    }
  }
}
export {
  s as a, l as c, u as i, d as n, a as o, y as r, o as s, v as t
};