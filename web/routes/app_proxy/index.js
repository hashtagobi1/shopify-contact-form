import { Router } from "express"

const proxyRouter = Router()

proxyRouter.get("/test", async (req, res) => {
    return res.status(200).send({
        content: "App Proxy works"
    })
})
proxyRouter.get("/", async (req, res) => {
    console.log("hi")
    return res.status(200).send({
        content: "App Proxy works"
    })
})

proxyRouter.post("/contact-form", async (req, res) => {
    console.log({ Body: req.body })
    console.log({ Query: req.query })
    return res.status(200).send({
        success: true
    })
})

export default proxyRouter


// const authenticatedFetch = useAuthenticatedFetch();
// const fetch = useMemo(() => {
//     return async () => {
//         const response = await authenticatedFetch(url, fetchInit);
//         return response.json();
//     };
// }, [url, JSON.stringify(fetchInit)]);