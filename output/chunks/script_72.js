import {
  t as e
} from "./CZWIkZxH.js";
import {
  t
} from "./BMj_2wrd.js";
import {
  t as n
} from "./C-596GOK.js";
import {
  t as r
} from "./CzQT5n6o.js";
import {
  t as i
} from "./K8xpmCq8.js";
import {
  t as a
} from "./CstwYmIK.js";
import {
  t as o
} from "./DvqJgppT.js";
import {
  t as s
} from "./C9-wUi2v.js";
import {
  t as c
} from "./DkcmlQbD.js";
import {
  t as l
} from "./CfQpuXi8.js";
import {
  t as u
} from "./B1aL7Y_G.js";
import {
  t as d
} from "./BjLZO0i1.js";
import {
  t as f
} from "./BvrLAz4K.js";
import {
  t as p
} from "./BE0i_4RX.js";
import {
  t as m
} from "./9FfST3Gw.js";
import {
  t as h
} from "./vwDnqOM7.js";
import {
  t as g
} from "./Dp9Xv33r.js";
import {
  t as _
} from "./6Jt2br2o.js";
import {
  t as v
} from "./-M8_qCVK.js";
import {
  t as y
} from "./CqM7BiHW.js";
import {
  t as b
} from "./BNt_obGV.js";
import {
  t as x
} from "./C9-88J91.js";
import {
  t as S
} from "./D5hH7J9e.js";
import {
  t as C
} from "./C78l-XWQ.js";
import {
  t as w
} from "./B7fn7PuI.js";
import {
  t as T
} from "./LqM73dKa.js";
import {
  t as E
} from "./D4Jdzxqh.js";
import {
  t as D
} from "./2m9wApLD.js";
import {
  t as O
} from "./P_WeExn-.js";
import {
  t as k
} from "./DI4dE3I0.js";
import {
  t as A
} from "./Cci9krki.js";
import {
  t as j
} from "./Do3CuN17.js";
import {
  t as M
} from "./HBu3l2VD.js";
import {
  t as N
} from "./mcufe2Hp.js";
import {
  t as P
} from "./D__ZgqEo.js";
import {
  t as F
} from "./CPRQy4Al.js";
import {
  t as I
} from "./jEAKaJ5s.js";
import {
  t as L
} from "./D5INGzLN.js";
import {
  t as R
} from "./wjg1OM1Y.js";
import {
  t as z
} from "./BAI7B1MK.js";
import {
  t as B
} from "./DyhAeW_I.js";
import {
  t as V
} from "./DmL1UE78.js";
import {
  t as H
} from "./D8RwbJyK.js";
import {
  t as U
} from "./IdDUpM_s.js";
import {
  t as W
} from "./DxlhdXjG.js";
import {
  t as G
} from "./CMV67lzL.js";
import {
  t as K
} from "./DUQvhx8k.js";
import {
  t as q
} from "./Bp0hytzY.js";

function J(e) {
  let t = new Map;
  for (let n of e) {
    let e = t.get(n.version) ?? [];
    e.push(n), t.set(n.version, e)
  }
  return [...t].map(([e, t]) => t.length === 1 ? t[0] : {
    version: e,
    title: [...new Set(t.map(e => e.title).filter(Boolean))].join(` / `) || `v${e}`,
    markdown: t.map(e => e.markdown.trim()).join(`

`)
  }).sort((e, t) => e.version.localeCompare(t.version, void 0, {
    numeric: !0
  }))
}

function Y(e) {
  return J(Object.entries(e).sort(([e], [t]) => e.localeCompare(t, `en`)).map(([e, t]) => {
    var n;
    let r = (n = e.split(`/`).at(-1)) == null ? void 0 : n.match(/^(\d+\.\d+\.\d+)(?: - (.+))?\.md$/);
    if (!r) throw Error(`Invalid patch note filename: ${e}`);
    let [, i, a = ``] = r;
    return {
      version: i,
      title: a,
      markdown: t.trim()
    }
  })).map(e => ({
    ...e,
    title: e.title || `v${e.version}`
  }))
}
var X = Y(Object.assign({
    "./markdown/1.0.0 - Welcome to WPlace!.md": e,
    "./markdown/1.1.0 - ✨ More Like You Update.md": t,
    "./markdown/1.1.1 - 🛠️ Quality & Cosmetics Improvements.md": n,
    "./markdown/1.1.2 - 🧰 UI Fixes & Moderation Improvements.md": r,
    "./markdown/1.2.0 - 🖼️ Pixel Overlays & Achievement Frames.md": i,
    "./markdown/1.3.0 - 🛠️ Moderation Adjustments, Hotspots and Improved Anti-Cheat System.md": a,
    "./markdown/1.3.1 - 🛠️  Hotfixes and Opt-out from Hotspots copy.md": o,
    "./markdown/1.3.2 - 🤖 Anti-cheat improvements and Google Drive overlay sync.md": s,
    "./markdown/1.3.3 - ⚽ World Cup Predictions and Cosmetics & Anti-cheat Improvements.md": c,
    "./markdown/1.4.0 - 🛡️ The New Alliance System.md": l,
    "./markdown/1.4.1 - 🛡️ Alliance System Fixes.md": u,
    "./markdown/1.4.10 - 🛠️ Mobile Overlay Rendering.md": d,
    "./markdown/1.4.11 - 🛠️ Phone Verification Fixes.md": f,
    "./markdown/1.4.12 - 🛠️ Alliance Overlay Reliability.md": p,
    "./markdown/1.4.2 - 🛠️ Headquarters Preview Reliability.md": m,
    "./markdown/1.4.3 - 🛠️ Alliance Usability Fixes.md": h,
    "./markdown/1.4.4 - 🧭 Alliance Canvas Overlays.md": g,
    "./markdown/1.4.5 - 🎨 Alliance Canvas Tools and Map Display.md": _,
    "./markdown/1.4.6 - 🛠️ Map Interaction Reliability.md": v,
    "./markdown/1.4.7 - 🖼️ Alliance Overlays and Asset Studio.md": y,
    "./markdown/1.4.8 - 🛠️ Overlay Reliability.md": b,
    "./markdown/1.4.9 - 🛍️ Mobile Overlay Fixes.md": x,
    "./markdown/1.5.0 - 💎 Premium Cosmetics.md": S,
    "./markdown/1.5.1 - 💎 More Prism Per Purchase.md": C,
    "./markdown/1.5.2 - 🛠️ Store Purchase Reliability.md": w,
    "./markdown/1.5.3 - 🛠️ Account and Payment Reliability.md": T,
    "./markdown/1.5.4 - 💳 Checkout Payment Options.md": E,
    "./markdown/1.5.5 - 🛠️ Map Loading Reliability.md": D,
    "./markdown/1.5.6 - 🛠️ Paint Charge Reliability.md": O,
    "./markdown/1.6.0 - 🖼️ Overlay Studio.md": k,
    "./markdown/1.6.1 - 🛠️ Overlay Reliability.md": A,
    "./markdown/1.6.10 - 🎨 Mobile Paint & UI Polish.md": j,
    "./markdown/1.6.11 - 📱 Small Mobile Adjustments.md": M,
    "./markdown/1.6.12 - 🖥️ Collapsed Palled and Alliance UI Improvements.md": N,
    "./markdown/1.6.13 - ⚙️ Settings and Real-Time Notifications.md": P,
    "./markdown/1.6.14 - 👨‍👩‍👧‍👦 Alliance Adjustments and Fixes.md": F,
    "./markdown/1.6.15 - 🛠️ Push Notification Recovery.md": I,
    "./markdown/1.6.2 - 🖼️ Layer Opacity & Overlay Peek.md": L,
    "./markdown/1.6.3 - 🖼️ Overlay Studio Reliability and Imports.md": R,
    "./markdown/1.6.4 - 🛠️ Alliance Award Eligibility.md": z,
    "./markdown/1.6.5 - 🎨 Overlay Studio and Alliance Tools.md": B,
    "./markdown/1.6.6 - 🛠️ Alliance Overlay Details.md": V,
    "./markdown/1.6.7 - 🛠️ Overlay Performance and Alliance Reliability.md": H,
    "./markdown/1.6.8 - 🎨 Studio Controls and Event Wrap-up.md": U,
    "./markdown/1.6.9 - 🧑‍🎨 More Studio Tools and Collapsible Palette.md": W,
    "./markdown/1.7.0 - ⭐ Favorite Places and Support.md": G,
    "./markdown/1.7.1 - ⚙️ Favorite Customization & UI Polish.md": K,
    "./markdown/1.7.2 - 🔨 Painting UI & Favorites Improvements.md": q
  })),
  Z = e => `/patch-notes/${encodeURIComponent(e)}`;
export {
  X as n, Z as t
};