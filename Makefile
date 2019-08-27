ifndef u
u:=sotatek
endif

ifndef env
env:=dev
endif

OS:=$(shell uname)

docker-start:
	docker-compose up -d

docker-restart:
	docker-compose down
	make docker-start

docker-connect:
	docker exec -it debut_web ash

init-app:
	cp .env.example .env
	composer install
	php artisan key:generate

docker-init:
	git submodule update --init
	docker exec -it debut_web make init-app

start:
	php artisan serve

log:
	tail -f storage/logs/laravel.log

build:
	npm run dev

watch:
	npm run watch-poll

docker-watch:
	docker exec -it debut_web make watch

autoload:
	composer dump-autoload

cache:
	php artisan cache:clear && php artisan view:clear

docker-cache:
	docker exec debut_web make cache

	deploy-dev:
		make deploy h=192.168.1.20$(n) dir=/var/www/debut_web

slate-generate:
	./bin/slate_generate.sh
