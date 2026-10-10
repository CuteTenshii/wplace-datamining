import {
  t as e
} from "./B60Wf4VA.js";
import {
  r as t
} from "./r8N40sza.js";
var n = [`/how-to-play`, `/guides/overlays`, `/guides/alliances`, `/about`];

function r() {
  return t().links
}

function i(t) {
  switch (t) {
    case `/how-to-play`:
      return {
        title: e.info_how_to_play(), intro: e.guide_play_intro(), image: `/img/guides/painting.webp`, imageAlt: e.guide_play_image(), sections: [{
          id: `explore`,
          title: e.search(),
          paragraphs: [e.guide_play_explore()],
          tips: [e.info_drag_mouse(), e.info_drag_touch()]
        }, {
          id: `paint`,
          title: e.paint(),
          paragraphs: [e.guide_play_paint()],
          tips: [e.info_paint_mouse(), e.info_paint_touch(), e.info_paint_lock()]
        }, {
          id: `charges`,
          title: e.paint_charges(),
          paragraphs: [e.guide_play_charges()],
          tips: []
        }, {
          id: `together`,
          title: e.guide_together(),
          paragraphs: [e.guide_play_together()],
          tips: []
        }]
      };
    case `/guides/overlays`:
      return {
        title: e.guide_overlays_title(), intro: e.guide_overlays_intro(), image: `/img/guides/overlay-studio.webp`, imageAlt: e.guide_overlays_image(), sections: [{
          id: `prepare`,
          title: e.overlay_upload_image(),
          paragraphs: [e.guide_overlays_prepare()],
          tips: [e.overlay_empty_description(), e.overlay_upload_single_image_description()]
        }, {
          id: `position`,
          title: e.overlay_detail_set_position(),
          paragraphs: [e.guide_overlays_position()],
          tips: [e.overlay_detail_click_exact_position()]
        }, {
          id: `build`,
          title: e.guide_build(),
          paragraphs: [e.guide_overlays_build()],
          tips: [e.overlay_detail_highlight_selected_hint(), e.overlay_detail_highlight_incorrect_hint(), e.overlay_detail_highlight_unpainted_hint()]
        }, {
          id: `share`,
          title: e.overlay_detail_export_share(),
          paragraphs: [e.guide_overlays_share()],
          tips: [e.alliance_template_read_only_hint(), e.alliance_template_editor_shared_hint()]
        }]
      };
    case `/guides/alliances`:
      return {
        title: e.guide_alliances_title(), intro: e.guide_alliances_intro(), image: `/img/guides/alliances.webp`, imageAlt: e.guide_alliances_image(), sections: [{
          id: `join`,
          title: e.guide_join(),
          paragraphs: [e.guide_alliances_join()],
          tips: [e.alliance_settings_join_policy_hint()]
        }, {
          id: `collaborate`,
          title: e.guide_together(),
          paragraphs: [e.guide_alliances_collaborate()],
          tips: []
        }, {
          id: `headquarters`,
          title: e.alliance_hq_unlock_title(),
          paragraphs: [e.alliance_hq_unlock_detail(), e.guide_alliances_hq()],
          tips: [e.alliance_hq_unlock_leader_only()]
        }, {
          id: `visibility`,
          title: e.guide_visibility(),
          paragraphs: [e.guide_alliances_visibility()],
          tips: []
        }]
      };
    case `/about`:
      return {
        title: e.public_about_title(), intro: e.guide_about_intro(), image: `/img/guides/painting.webp`, imageAlt: e.guide_play_image(), sections: [{
          id: `world`,
          title: e.paint_the_world(),
          paragraphs: [e.guide_about_world()],
          tips: []
        }, {
          id: `community`,
          title: e.guide_together(),
          paragraphs: [e.guide_about_community()],
          tips: []
        }, {
          id: `start`,
          title: e.info_how_to_play(),
          paragraphs: [e.guide_about_start()],
          tips: []
        }]
      }
  }
}
export {
  n,
  r,
  i as t
};