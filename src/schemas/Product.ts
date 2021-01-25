import mongoose, { Document, Schema } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  productionDate: Date
  isPerishable: boolean
  expirationDate: Date
  price: number
}

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    productionDate: {
      type: Date,
      required: true
    },
    isPerishable: {
      type: Boolean,
      required: true
    },
    expirationDate: {
      type: Date,
      required: false
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<ProductDocument>('Product', ProductSchema)
