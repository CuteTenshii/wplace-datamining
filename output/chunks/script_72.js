(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "4367cb17-2b05-4bf8-9f97-7365a659ddc7", e._sentryDebugIdIdentifier = "sentry-dbid-4367cb17-2b05-4bf8-9f97-7365a659ddc7")
  })()
} catch {}
const t = [{
  version: "1.0.0",
  title: "Welcome to WPlace!",
  markdown: `## Initial release
Welcome to WPlace, a platform to share and explore pixel art creations!`
}, {
  version: "1.1.0",
  title: "✨ More Like You Update",
  markdown: `## A New Way to Customize Your Profile

We have just launched a new update focused on **personalization**!
You can now customize your profile with **profile frames**, **custom fonts**, and **name styles**, to really show off who you are to anyone who clicks on your pixels!

### 🖼️ Profile Frames
Frame your profile in style!
- Custom borders around your profile picture - just like our Event Frames
- Launching with **over 10 frames**
- You can own **multiple** frames and change them whenever you want

### 🔤 Custom Fonts
Choose the perfect font for your name!
- Launching with **5 new fonts**
- Fonts are only applied to your name, not your ID (\`#123456\`)

### 🎨 Name Styles
Stand out with color _and_ animation!
- Colorful effects
- Subtle animations in select styles

### 🏅 Badges
Badges are rare items that players earn through merit. No badge can be purchased, transferred, or obtained by any means other than:
- Participating in events
- Completing challenging missions in the game
- In some cases, being part of Wplace's history

Badges are essentially honors for players to display on their profile. We're launching with **4 visible badges**!

### 🎃 Updated Event Frames
We have also updated the existing **Christmas** and **Halloween** event frames:
- Properly scaled to your avatar
- More polished with detailed designs
- Better fit for Wplace's style

### 🌙 Dark Mode
You can rest your eyes! We're releasing the existing version of our dark mode to all users.
- Additional themes will be added in the future
- To apply dark mode, click your profile and find the button next to the notifications icon

### 🛒 Obtaining the new styles
The new **profile frames**, **custom fonts** and **name styles** can all be found in **the shop**, purchasable with **Droplets**!
To apply your profile frames, custom fonts and name styles, **click your profile**, followed by the **pencil icon**.

### 🚀 Future updates
This is just the beginning of a new chapter for Wplace! You can expect more frequent updates to the website, as we have many features already in the works, and even more planned! We thank you for your suggestions and patience, as we continue working to keep up with a response that's far exceeded our expectations!

The **More Like You Update** is **LIVE NOW** - go check it out and share what designs you come up with! 🎉`
}];
export {
  t as p
};