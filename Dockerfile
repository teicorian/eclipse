FROM node:18-alpine
WORKDIR /eclipse
RUN apk add --no-cache git
COPY . .
EXPOSE 3001
CMD ["sh", "-c", "yarn && yarn start" ]
