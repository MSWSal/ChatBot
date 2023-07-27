const express = require('express')
const {Configuration, OpenAIApi} = require("openai")

const app = express()

app.use(express.static('public'))

const openai = new OpenAIApi(new Configuration({
    apiKey: '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'
}))

app.post('/chat', async (req, res)=>{
    try{
        const response= await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "user", content: req.body.question}
            ]
        })

    }catch(e){
        res.status(400).json({message: e.message})
    }
})

const port=5000

app.listen(port, ()=>{
    console.log("server running on port:"+port)
})

