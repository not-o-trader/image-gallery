FROM node:latest
RUN mkdir /image-gallery

WORKDIR /image-gallery
COPY package.json /image-gallery
RUN npm install

COPY . .
EXPOSE 7000
CMD ["npm", "start"]
