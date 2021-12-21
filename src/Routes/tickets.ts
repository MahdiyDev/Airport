import { Router } from 'express'
import { DELETE, GET, POST, PUT } from '../Controllers/ticketsController'

const router = Router()

router.get('/tickets', GET)
      .post('/tickets', POST)
      .put('/tickets', PUT)
      .delete('/tickets', DELETE)

export default router;
