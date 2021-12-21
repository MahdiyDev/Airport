import { Router } from 'express'
import { DELETE, GET, POST, PUT } from '../Controllers/planesController'

const router = Router()

router.get('/planes', GET)
      .post('/planes', POST)
      .put('/planes', PUT)
      .delete('/planes', DELETE)

export default router;
