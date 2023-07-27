const express = require('express')
const {Configuration, OpenAIApi} = require("openai")

const app = express()

app.use(express.static('public'))

const openai = new OpenAIApi(new Configuration({
    apiKey: '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'
}))

const port=5000

app.listen(port, ()=>{
    console.log("server running on port:"+port)
})

