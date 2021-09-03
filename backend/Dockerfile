FROM node:14

# Create app directory
WORKDIR /portfolio/backend

# Install app dependencies
COPY package*.json ./

RUN npm install

RUN npm install pm2@latest -g

RUN npm audit fix

# Bundle app source
COPY . .

EXPOSE 4000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]