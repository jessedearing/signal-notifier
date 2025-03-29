FROM node:23-alpine

WORKDIR /app
COPY . .
RUN npm install && npm run css && npm run build

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
