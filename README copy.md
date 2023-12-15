# starter-react

Create a new repository from this starter kit

Run docker from repository

Update Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /react-app
COPY package*.json yarn*.lock /react-app/
RUN apk add --no-cache git
RUN yarn
COPY . /react-app
EXPOSE 3000
CMD [ "yarn", "start" ]
```
