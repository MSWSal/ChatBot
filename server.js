const express = require('express')
const {Configuration, OpenAIApi} = require('openai')

const app = express()

app.use(express.static('public'))



const port=5000

app.listen(port, ()=>{
    console.log("server running on port:"+port)
})

const openai = new OpenAIApi(new Configuration({
    apiKey: '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'
}))

console.log('api key ran')

app.post('/chat', async (req, res)=>{
            // res.send({
            //     message: "hola"
            // })

    try{
        // console.log(req)
        const response= await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            message: [
                {role: "user", content: req.body}
            ]
        })

        res.status(200).json({message: response.data.choices[0].message.content})

    }catch(e){
        res.status(400).json({message: e.message})
    }
})

