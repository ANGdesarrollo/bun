# Instala dependencias de desarrollo
FROM oven/bun:canary-alpine AS dev-deps

WORKDIR /app
COPY package.json ./
RUN bun install

# Instala dependencias de producción
FROM oven/bun:canary-alpine AS prod-deps

WORKDIR /app
COPY package.json package.json
RUN bun install --prod

# Crea una etapa builder que construye tu aplicación para prod
FROM oven/bun:canary-alpine AS builder

WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY ./package.json ./
COPY ./src ./src
COPY ./tsconfig.json ./

RUN bun build:start

# Crea una etapa dev, solo para desarrollo
FROM oven/bun:canary-alpine AS dev

WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY ./src ./src
CMD ["bun", "start:dev"]

# Crea una etapa prod final para produccion
FROM oven/bun:canary-alpine AS prod

WORKDIR /app
COPY ./package.json ./
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD ["bun", "start:prod"]



