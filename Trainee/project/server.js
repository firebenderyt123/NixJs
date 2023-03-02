const jsonServer = require("json-server");
const auth = require("json-server-auth");

// const router = auth.router;
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 5000;

server.db = router.db;

// Set custom path for login
const loginPath = "/login";
const registerPath = "/register";

// Add custom routes before JSON Server router
server.post(loginPath, (req, res) => auth.authenticateUser);
server.post(registerPath, (req, res) => auth.registerUser);

server.use("/api", middlewares);
server.use("/api/users", auth);
server.use("/api", router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
