
const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:3000'


async function main() {
    await mongoose.connect(DB_URI);
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        age: Number
    });
    userSchema.methods.dance = function () {
        const dancer = this.name
            ? 'dancer name is ' + this.name
            : 'I don\'t have a name';
        console.log(dancer);
    }
    const UserModel = mongoose.model('users', userSchema)
    const pepe = new UserModel({
        name: 'pepe',
        email: 'pepe@getDefaultNormalizer.com',
        password: '12345',
        age: 20
    })
    pepe.dance()

    await pepe.save();
}




main().catch(err => console.log(err));



// mongoose.connect(DB_URI)
//     .then(db => {

//     })
//     .catch(error => console.log(error))