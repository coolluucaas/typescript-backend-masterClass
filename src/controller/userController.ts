import { Request, Response } from 'express'

const users = [{ name: 'Lucas', email: 'lucas@email.com' }]

class userController {
    async handle(req: Request, res: Response) {
        return res.send(users)
    }
}

export { userController, users }
