FROM node:18-alpine
WORKDIR /eclipse
RUN apk add --no-cache git
COPY . .
CMD ["sh", "-c", "yarn && yarn start" ]
