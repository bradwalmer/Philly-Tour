/* Local settings. Paste your Cesium ion access token between the quotes below.
   - Leave it empty ("") and the tour still runs with the plain grid globe.
   - A token in a browser file is visible to anyone who opens the page, so create a token
     in Cesium ion that is limited to your site's address and read-only assets, and do not
     post this file publicly with an unrestricted token in it. */
const CESIUM_CONFIG = {
  ionToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ii1WZU5xV2NBWV9qRlNiUEIiLCJqdGkiOiI3NDlkMTg2OC0xOWI4LTQwMTYtYmQyMC1mZWI4ZGY2YzM3NmEiLCJpZCI6NTA1NzI4LCJzdWIiOiJicmFkd2FsbWVyIiwiaXNzIjoiaHR0cHM6Ly9hcGkuY2VzaXVtLmNvbSIsImF1ZCI6IlBoaWxseSBUb3VyIiwiaWF0IjoxNzkxMzgxMjM2fQ.wGUX0ZNj0GfCMNkvfz2Hlgl2J3XIbINRkYxo3DXApNY",          // e.g. "eyJhbGciOi..."  (from https://ion.cesium.com/tokens)
  useWorldImagery: true // true = draw Cesium's satellite imagery over the grid (needs a token)
};
