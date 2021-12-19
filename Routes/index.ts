import { Router } from "express";
import planeController from './planes'
import addressController from './addresses'
import passengersController from './passengers'
import ticketsController from './tickets'

const router = Router()

router.use(planeController)
      .use(addressController)
      .use(passengersController)
      .use(ticketsController)

export default router;
