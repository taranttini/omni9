console.clear();
console.log('--------------------------------');
console.log('iniciando servidor...');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = new express();



mongoose.connect('mongodb://localhost:27017/dbtau', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then( db => {
  const { host, port } = db.connections[0];
  console.log(`db conectado em ${host}:${port}`)
}).catch(err => {

  console.log('db conectado ou nao iniciou o mongodb', err);
});


//postgres:admin@localhost:5432/dbtau', {


app.use(express.json());
app.use(routes);

app.listen(3333);
console.log('inciado em http://localhost:3333');
console.log('--------------------------------');