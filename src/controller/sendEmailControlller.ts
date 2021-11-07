import { Request, Response } from 'express'
import { sendEmailService } from '../services/sendEmailService'

class sendEmailController {
    async handle(req: Request, res: Response) {
        const service = new sendEmailService()

        const result = await service.execute({
            mailTo: { 
                name: 'Lucas', 
                email: 'lucas@gmail.com' 
            },
            message: {
                subject: 'Bem-vindo ao sistema',
                body: 'Corpo da mensagem.',
            },
        })
        return res.send('Email enviado com sucesso.')
    }
}

export { sendEmailController }
