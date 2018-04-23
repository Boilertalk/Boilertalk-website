FROM nginx:latest

# Clean nginx directories
RUN rm -rf /etc/nginx/conf.d/* && \
    rm -rf /usr/share/nginx/html/*

COPY nginx-default.conf /etc/nginx/conf.d/default.conf

COPY dist /usr/share/nginx/html
