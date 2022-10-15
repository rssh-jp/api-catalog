FROM golang:1.19.2-alpine3.16

RUN apk update && \
    apk upgrade && \
    apk add make git

RUN go install github.com/cespare/reflex@latest
ENV CGO_ENABLED=0

WORKDIR /go/src/app

#COPY ./api /go/src/app

CMD go mod tidy && reflex  -s -r '\.go$$' go run server.go

