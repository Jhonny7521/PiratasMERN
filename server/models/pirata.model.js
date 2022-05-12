const mongoose = require("mongoose");

const EsquemaPirata = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Nombre es obligatorio."],
    minlength: [2, "Nombre debe contener almenos 2 caracteres"],
    unique: [true, "El autor ya esta registrado."]
  },
  imagen: {
    type: String,
    required: [true, "Imagen es requerida"]
  },
  cofresTesoro: {
    type: Number,
    required: [true, "Los cofres de tesoro son requeridos"],
  },
  frase: {
    type: String,
    required: [true, "La frase de pirata es obligatorio."],
    minlength: [3, "La frase debe contener almenos 3 caracteres"]
  },
  posicion: {
    type: String,
    required: [true, "La posición de pirata es obligatorio."],
    minlength: [3, "La posición debe contener almenos 3 caracteres"]
  },
  patadepalo: {
    type: Boolean,
    default: true
  },
  parcheojo:{
    type: Boolean,
    default: true
  },
  manodegancho:{
    type: Boolean,
    default: true
  },
}, {timestamps: true, versionKey: false})

const Pirata = mongoose.model("pirata", EsquemaPirata);

module.exports = Pirata;