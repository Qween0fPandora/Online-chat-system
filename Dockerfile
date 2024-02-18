FROM node:20
WORKDIR /app/frontend
WORKDIR /app/backend
COPY . .
RUN npm install
CMD ["npm", "start"]
