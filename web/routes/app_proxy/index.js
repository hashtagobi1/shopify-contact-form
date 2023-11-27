import { Router } from "express"

const proxyRouter = Router()

proxyRouter.get("/test", async (req, res) => {
    return res.status(200).send({
        content: "App Proxy works"
    })
})
export default proxyRouter