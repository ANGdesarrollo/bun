# Bun Boilerplate

## Production

```bash
docker compose -f docker-compose-prod.yml build
```

## Development
To start the development server run:
```bash
bun run dev
```

## Variables de entorno
| Variable de entorno  | Valor            | Descripción                                                                            |
|-----------------------|------------------|----------------------------------------------------------------------------------------|
| BUN_APP_NAME          | bun_app          | El nombre de la aplicación, se utiliza para nomenclatura y referencia en los scripts y configuración  |
| STAGE                 | dev              | Define el entorno actual del proyecto. En este caso, es desarrollo ("dev")            |
| PORT                  | 8080             | El puerto en el que se ejecutará la aplicación                                        |
| MONGO_DB_NAME         | mongo_database   | El nombre de la base de datos de MongoDB                                               |
| MONGO_ROOT_USERNAME   | root             | El nombre de usuario root para MongoDB                                                 |
| MONGO_ROOT_PASSWORD   | example          | La contraseña root para MongoDB                                                        |
| MONGO_URL             | mongodb://root:example@mongo:27017/ | La URL de conexión completa a la base de datos de MongoDB, que incluye nombre de usuario, contraseña, dominio y puerto  |

