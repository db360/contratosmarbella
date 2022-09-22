import mongoose from "mongoose";

const contratoSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    require: true,
  },
  importe: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  objetivo_contrato: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true
  },
  tipo: {
    type: String,
    require: true
  },
});

export default mongoose.models.Contrato || mongoose.model('Contrato', contratoSchema)
