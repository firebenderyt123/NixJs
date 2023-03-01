const jsonServer = require("json-server");
const auth = require("json-server-auth");
const { issueJWT } = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
server.db = router.db;
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//     "/blog/:resource/:id/show": "/:resource/:id",
//   })
// );

// server.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const user = server.db.get("users").find({ email, password }).value();

//   if (user) {
//     const accessToken = issueJWT({ userId: user.id });
//     res.jsonp({ accessToken });
//   } else {
//     res.status(401).jsonp({ error: "Invalid credentials" });
//   }
// });

server.use("/api", auth);
server.use("/api", router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
