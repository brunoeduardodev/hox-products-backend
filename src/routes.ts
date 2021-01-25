import FakeAuthenticationController from '@controllers/FakeAuthenticationController'
import ProductController from '@controllers/ProductController'
import AuthToken from '@middlewares/AuthToken'
import Express from 'express'

const router = Express.Router()

const productController = new ProductController()
const fakeAuthenticationController = new FakeAuthenticationController()

router.get('/products', AuthToken, productController.index)
router.post('/products', AuthToken, productController.store)
router.put('/products/:id', AuthToken, productController.update)
router.delete('/products/:id', AuthToken, productController.delete)

router.post('/authenticate', fakeAuthenticationController.authenticate)

export default router
