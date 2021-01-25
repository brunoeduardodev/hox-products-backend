import { Request, Response } from 'express'
import Product from '@schemas/Product'

export default class ProductController {
  index = async (req: Request, res: Response) => {
    const products = await Product.find({})

    return res.json(products)
  }

  store = async (req: Request, res: Response) => {
    const product = req.body

    try {
      const newProduct = await Product.create(product)
      return res.json(newProduct)
    } catch (error) {
      return res.sendStatus(400)
    }
  }

  update = async (req: Request, res: Response) => {
    const product = req.body
    const id = req.params.id

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {
        new: true
      })
      return res.json(updatedProduct)
    } catch (error) {
      return res.sendStatus(400)
    }
  }

  delete = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
      await Product.findByIdAndDelete(id)
      return res.json({ _id: id })
    } catch (error) {
      res.sendStatus(404)
    }
  }
}
