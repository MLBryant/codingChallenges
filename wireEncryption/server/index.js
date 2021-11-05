const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.post(`/Barksdale`, (req, res) => {
    let numInput = '0123456789'
    let key = '5987604321'
    let {phoneNumber} = req.body
    let encryptedNumber = phoneNumber.toString().split('').map(num => key[numInput.indexOf(num)])
    response = {
        'newNumber': +encryptedNumber.join('')
    }
    res.status(200).send(response)
})

app.listen(3000, () => console.log(`Server is running on 3000`))