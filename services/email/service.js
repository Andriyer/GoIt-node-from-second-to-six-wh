const Mailgen = require('mailgen')

class EmailService {
    constructor(sender) {
        this.sender = sender
        this.link = 'https://90fd-188-163-121-219.eu.ngrok.io'
        this.mailgen = new Mailgen({
            theme: 'default',
            product: {
                name: 'Contacts delivery',
                link: this.link,
            }
        })
    }

    createEmailTemplate(username, token) {
        const email = {
            body: {
                name: username,
                intro: 'Welcome to Contacts delivery! We\'re very excited to have you on board.',
                action: {
                    instructions: 'To get started with Mailgen, please click here:',
                    button: {
                        color: '#22BC66', // Optional action button color
                        text: 'Confirm your account',
                        link: `${this.link}/api/auth/verify-email/${token}`,
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        }
        return this.mailgen.generate(email)
    }

    async sendEmail(email, username, token) {
        const emailTemplate = this.createEmailTemplate(username, token)  // HTML-code
        const message = {
            to: email,
            subject: 'Welcome to Contacts delivery',
            html: emailTemplate,
        }
            const result = await this.sender.send(message)
            return result
    }
}

module.exports = EmailService