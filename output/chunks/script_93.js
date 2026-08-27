import {
  m as n
} from "./XL5Wf48w.js";
const o = {
    insufficient_context: n.ignore_reason_insufficient_context_title(),
    no_rule_violation: n.ignore_reason_no_rule_violation_title(),
    not_enough_for_punishment: n.ignore_reason_not_enough_for_punishment_title(),
    caused_by_glitch: n.ignore_reason_caused_by_glitch_title(),
    out_of_scope: n.ignore_reason_out_of_scope_title(),
    invalid_information: n.ignore_reason_invalid_information_title(),
    allowed_by_event: n.ignore_reason_allowed_by_event_title(),
    already_handled: n.ignore_reason_already_handled_title()
  },
  i = {
    insufficient_context: n.ignore_reason_insufficient_context_description(),
    no_rule_violation: n.ignore_reason_no_rule_violation_description(),
    not_enough_for_punishment: n.ignore_reason_not_enough_for_punishment_description(),
    caused_by_glitch: n.ignore_reason_caused_by_glitch_description(),
    out_of_scope: n.ignore_reason_out_of_scope_description(),
    invalid_information: n.ignore_reason_invalid_information_description(),
    allowed_by_event: n.ignore_reason_allowed_by_event_description(),
    already_handled: n.ignore_reason_already_handled_description()
  },
  t = Object.keys(o).map(e => ({
    value: e,
    label: o[e]
  }));

function r(e) {
  return e in o
}
export {
  o as a, t as b, i as c, r as i
};