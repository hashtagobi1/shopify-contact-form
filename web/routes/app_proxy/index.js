import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const proxyRouter = Router()
const prisma = new PrismaClient()

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
    const { body: { name, email, description }, query: {shop} } = req
    console.log({ Body: req.body })
    console.log({ Query: req.query })
    console.log({ NN: email })
    try {
        const contactForm = await prisma.contactForm.create({
            data: {
                name,
                email,
                description,
                shop,
                createdAt: new Date(),
            }
        })
        console.log({ PassedINData: contactForm })
        return res.status(200).send({
            success: true,
            data: contactForm
        })
    } catch (error) {
        console.log(`ERROR: Please See  ${error}`)
        return res.status(500).send({ success: false })
    }


})

export default proxyRouter