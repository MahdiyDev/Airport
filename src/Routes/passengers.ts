import { Router } from 'express'
import { DELETE, GET, POST, PUT } from '../Controllers/passengersController'

const router = Router()

router.get('/passengers', GET)
      .post('/passengers', POST)
      .put('/passengers', PUT)
      .delete('/passengers', DELETE)

export default router;