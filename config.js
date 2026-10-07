/* Local settings. Paste your Cesium ion access token between the quotes below.
   - Leave it empty ("") and the tour still runs with the plain grid globe.
   - A token in a browser file is visible to anyone who opens the page, so create a token
     in Cesium ion that is limited to your site's address and read-only assets, and do not
     post this file publicly with an unrestricted token in it. */
const CESIUM_CONFIG = {
  ionToken: "",          // e.g. "eyJhbGciOi..."  (from https://ion.cesium.com/tokens)
  useWorldImagery: false // true = draw Cesium's satellite imagery over the grid (needs a token)
};
