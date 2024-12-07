FROM node:20-alpine

WORKDIR /src/app
COPY . .
COPY package.json .


RUN rm -rf yarn.lock && rm -rf node_modules
RUN rm package-lock.json

# check version
RUN node --version
RUN yarn --version

# install dependencies
RUN yarn cache clean
RUN yarn config delete proxy
RUN yarn config delete https-proxy
RUN yarn config delete registry
RUN yarn install --no-lockfile --timeout 1000000
# build for production and launch server
RUN yarn build --verbose --ignore-engines

EXPOSE 3000

CMD ["yarn", "start", "--hostname", "0.0.0.0"]
