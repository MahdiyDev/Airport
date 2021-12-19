import { Router } from 'express'
import { DELETE, GET, POST, PUT } from '../Controllers/addressController'

const router = Router()

router.get('/address', GET)
      .post('/address', POST)
      .put('/address', PUT)
      .delete('/address', DELETE)

export default router;
