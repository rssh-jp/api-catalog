FROM node:16.15.1-alpine3.16

RUN apk update && \
    apk upgrade && \
    apk add make git

WORKDIR /node/app

CMD npm i && npm run storybook

