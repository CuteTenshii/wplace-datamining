import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `### Improvements

- Android releases are now more consistent across different installation and update methods.
- Android updates are now more reliable and go through stronger release checks.
- Custom name fonts now load only when they are actually needed, reducing unnecessary connections and page loading work.
- Captcha and payment systems now handle temporary failures more reliably instead of getting stuck.

### Fixes

- Improved Alliance invite and join-request pages so they return more consistent results and no longer show invalid pagination.
- Fixed Android app links sometimes receiving the same URL parameter twice when opening the app.
- Fixed the back and close buttons not working correctly during FastSpring checkout.
- Google Play purchases are now more reliable and recover better from temporary problems.
- Stripe checkout now shows a successful purchase only after the purchased Droplets or Prism have actually been added to the account.
- Improved account security for OAuth sign-ins by no longer relying on unverified email addresses when matching existing accounts.
- Phone numbers used for verification are no longer stored in the browser.
- Purchases and profile picture uploads now correctly show an error when the server is temporarily unavailable instead of appearing successful.
- Pixel information and painting now recover more reliably during server restarts.
- The mobile app install button now disappears after the browser's installation prompt has already been used.
- Mobile sign-in codes can now only be used once and are no longer exposed in request URLs.
- Failed painting attempts now show an error instead of making it look like the pixel was successfully placed.
`;
export {
  t as n, n as t
};