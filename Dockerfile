# https://registry.hub.docker.com/_/nginx/
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html/
