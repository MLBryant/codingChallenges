const wireEncryption = num => {
    axios.post('http://localhost:3000/Barksdale', {
        'phoneNumber': num
    })
    .then(res => console.log(res.data.newNumber))
}

wireEncryption(9857741931)