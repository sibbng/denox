import Server from "noren/edge"
const app = new Server()
app.use(async (req, res, next) => {
  const start = Date.now()
  await next()
  const elapsed = Date.now() - start
  console.log(`Request "${req.url.pathname}" served in: ${elapsed}ms`)
})
app.get("/", (req, res) => {
  res.body = `Hello World from ${req.url.pathname}`
})
Deno.version
export default { fetch: app.fetch.bind(app) }