FROM node

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3001

CMD ["yarn", "start"]