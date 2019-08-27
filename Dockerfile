FROM php:7.1-alpine

RUN apk --no-cache add curl nodejs make autoconf libpng libpng-dev mysql-client &&\
    docker-php-ext-configure gd \
    --with-png-dir=/usr/include/ && \
    NPROC=$(getconf _NPROCESSORS_ONLN || 1) && \
    docker-php-ext-install -j${NPROC} gd pdo_mysql opcache zip bcmath && \
    apk del --no-cache libpng-dev && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

ADD . /var/www/debut

WORKDIR /var/www/debut

EXPOSE 9000

CMD ["php", "-S", "0.0.0.0:9000", "-t", "/var/www/debut/public"]
