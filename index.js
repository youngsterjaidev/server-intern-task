const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World")
s})

app.listen(port, () => {
    console.log(`Server is runing at port : ${port}`)
})
