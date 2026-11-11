import {
  Ft as e,
  Lt as t,
  Vt as n,
  Wt as r,
  pt as i
} from "./DXDHrD2o.js";
import {
  n as a
} from "./BxjIJ8nh.js";
import {
  t as o
} from "./Dm9i_L6H.js";
var s, c, l = {
    update: `updates`,
    patch_notes: `patchNotes`
  },
  u = new(s = new WeakMap, c = new WeakMap, class {
    constructor() {
      r(this, s, t(!1)), r(this, c, t(`update`))
    }
    get open() {
      return i(n(s, this))
    }
    set open(t) {
      e(n(s, this), t, !0)
    }
    get notice() {
      return i(n(c, this))
    }
    set notice(t) {
      e(n(c, this), t, !0)
    }
    ask(e) {
      this.open || !a.alerts.dismissHint || !a.alerts[l[e]] || (this.notice = e, this.open = !0, o.postNoticeDismissEvent(e, `shown`))
    }
    answer(e) {
      this.open && (this.open = !1, e === `disable` ? a.alerts[l[this.notice]] = !1 : a.alerts.dismissHint = !1, a.save(), o.postNoticeDismissEvent(this.notice, e))
    }
  });
export {
  u as t
};