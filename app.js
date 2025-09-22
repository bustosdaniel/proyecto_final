const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Universidad';

mongoose.connect(url, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
})
  .then(() => {
    console.log('Conexión a la base de datos establecida'); 
})
  .catch((e) => {
    console.error('Error de conexión a la base de datos:', e); 
});

const { Schema } = mongoose;

const useasignaturas = new Schema({
  _id:String,
  materia:String,
  creditos:String,
});

const ModeloAsig = mongoose.model('asignaturas', useasignaturas);

const listar = async () => {
  const Listasing = await ModeloAsig.find()
  console.log('Total de registros: '+Listasing)
}

const listar1 = async () => {
  const Listasing = await ModeloAsig.find()
  console.log(Listasing)
}

const crear = async () => {
  const Listasing = new ModeloAsig({
    _id:"Documento121",
    materia:"Ecuaciones Diferenciales",
    creditos:2,
  })
  const resultado = await Listasing.save()
  console.log(Listasing)
}

listar();
//listar1();
//crear();