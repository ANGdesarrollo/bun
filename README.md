# Bun 

## Development

```bash
bun i
docker compose build
docker compose up -d
```

## Production

```bash
docker compose -f docker-compose-prod.yml build
docker compose -f docker-compose-prod.yml up -d
```

## Environment Variables
| Variable de entorno    | Valor            | Descripción                                                                            |
|------------------------|------------------|----------------------------------------------------------------------------------------|
| BUN_APP_NAME           | bun_app          | Nombre de la aplicación, utilizado para nomenclatura y referencia en scripts y configuración |
| FRONT_END_URL          | http://localhost:5173 | URL del front-end asociado a la aplicación                                            |
| STAGE                  | dev              | Entorno actual del proyecto. En este caso, desarrollo ("dev")                          |
| PORT                   | 8080             | Puerto en el que se ejecutará la aplicación                                           |
| MONGO_DB_NAME          | mongo_database   | Nombre de la base de datos de MongoDB                                                  |
| MONGO_ROOT_USERNAME    | root             | Nombre de usuario root para MongoDB                                                    |
| MONGO_ROOT_PASSWORD    | example          | Contraseña root para MongoDB                                                           |
| MONGO_URL              | mongodb://root:example@localhost:27017/ | URL de conexión completa a la base de datos de MongoDB, que incluye nombre de usuario, contraseña, dominio y puerto  |
| TOKEN_EXPIRES_IN       | 600              | Duración de validez del token JWT en segundos                                          |
| TOKEN_SECRET           | secret_jwt       | Clave secreta para la generación y validación de tokens JWT                            |
| COOKIE_EXPIRES_IN      | 600              | Duración de validez de la cookie de sesión en segundos                                  | |
| HOST_NODEMAILER        | smtp.gmail.com   | Host del servidor SMTP para el servicio de correo electrónico                            |
| PORT_NODEMAILER        | 465              | Puerto del servidor SMTP para el servicio de correo electrónico                         |
| PASSWORD_NODEMAILER    | password         | Contraseña para la autenticación en el servidor SMTP                                    |
| USERNAME_NODEMAILER    | username         | Nombre de usuario para la autenticación en el servidor SMTP                             |
