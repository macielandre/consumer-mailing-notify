# Consumer Mailing Notify

Consume an input message and send to any email address.

### Features

- [x] Consume from rabbitmq queue
- [x] Work with encrypted messages
- [x] Send mail message
- [x] Validate input messages
- [x] Tests cover

### Corelated links

- Bigger project: https://github.com/users/macielandre/projects/3
- Project that publish for this queue: https://github.com/macielandre/api-gateway-notifier

### Installation

> Installing dependencies

`$ npm i`

> Setting up environment variables

Create .env file inside env folder from project base path and set with your own values:

	SMTP_HOST=<smtp host>
	SMTP_PORT=<smtp port>
	SMTP_USER=<smtp user>
	SMTP_PASSWORD=<smtp password>

	APPLICATION_MAIL=<email that will send all application messages, should be registered inside smtp host>

	SUBSCRIBE_QUEUE=<queue uri to listen messages (Ex: amqp://localhost)>
	AES_256_KEY=<encryptation key>

> Running rabbitmq image

`$ docker compose up`

> Starting your project

`$ npm start`

> Message pattern

    {
    	"receiver": "email@email.com",
    	"message": "hello dear friend!",
    	"subject": "a letter to a friend"
    }

> Running tests

`$ npm test`

### Links

[Linkedin](https://www.linkedin.com/in/andregouveamaciel/)
