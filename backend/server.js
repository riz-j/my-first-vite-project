const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Characters = require('./models/characters.models');

const uri = 'mongodb+srv://123:123@cluster0.ylc1tlr.mongodb.net/famguy';
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(cors()); 
app.use(bodyParser.json());


app.get('/characters', (req, res) => {
    Characters.find().sort({_id: 'desc'})
        .then(results => res.json(results))
})

app.post('/characters/add', (req, res) => {
  const name = req.body.name;
  const role = req.body.role;

  const newCharacter = new Characters({
    name,
    role
  })

  newCharacter.save()
    .then(() => res.send('New character successfuly added!'))
    .catch(err => res.status(400).send(`Error: ${err}`))
})

app.delete('/characters/delete/:id', (req, res) => {
  Characters.findByIdAndDelete(req.params.id)
    .then(() => res.send('character successfully deleted!'))
    .catch(err => res.status(400).send(`Error: ${err}`))
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})