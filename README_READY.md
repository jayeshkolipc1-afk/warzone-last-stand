# WARZONE: LAST STAND

Online multiplayer browser FPS built for HTML5/CrazyGames with a separate Node.js WebSocket server.

## Structure
- `crazygames/` — browser game client
- `server/` — Node.js WebSocket multiplayer server

## Local server
```bash
cd server
npm install
npm start
```

The server listens on `0.0.0.0` and uses the `PORT` environment variable.

## Client
Set the multiplayer WebSocket endpoint in `crazygames/config.js` to your deployed `wss://...` server. The client can also accept `?server=wss://...` for testing.
