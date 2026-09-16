/*
 WARZONE: LAST STAND
 Production multiplayer endpoint.
 Priority:
  1) ?server=wss://...
  2) this value
  3) localhost for local testing only
*/
window.WLS_CONFIG = {
  multiplayerServerUrl:
    new URLSearchParams(location.search).get("server") ||
    "wss://warzone-last-stand.onrender.com"
};