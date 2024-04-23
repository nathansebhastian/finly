const { Schema, model } = require("mongoose");

const InvoiceSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
})

const Invoice = model('Invoice', InvoiceSchema);

module.exports = Invoice;
