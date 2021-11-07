interface mailToInterface {
    name: string
    email: string
}

interface messageInterface {
    subject: string
    body: string
    attachments?: string[]
}

//DTO = Data Transfer Object

interface messageDTOInterface {
    mailTo: mailToInterface
    message: messageInterface
}

class sendEmailService {
    async execute({ mailTo, message }:messageDTOInterface) {
        console.log(`Email enviado para ${mailTo.name}: ${message.subject}`)
    }
}

export { sendEmailService }
