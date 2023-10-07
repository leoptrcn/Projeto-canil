import {Router, Request, Response} from 'express'
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

const route = Router()

route.get('/', pageController.index)
route.get('/dogs', pageController.dogs)
route.get('/cats', pageController.cats)
route.get('/fishs', pageController.fishs)

route.get('/search',searchController.search)

export default route