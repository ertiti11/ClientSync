# Usar una imagen de Node.js para construir la aplicación
FROM node:latest as build

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar package.json y pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# Instalar las dependencias
RUN pnpm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN pnpm run build

# Usar una imagen de Nginx para servir la aplicación
FROM nginx:stable-alpine

# Copiar la aplicación construida al contenedor de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]