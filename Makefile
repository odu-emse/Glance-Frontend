build:
	docker-compose build
up:
	docker-compose up
up-clean:
	make build
	make up
up-ui:
	docker-compose up ui
up-prettier:
	docker-compose up prettier
up-tailwind:
	docker-compose up tailwind
up-detached:
	docker-compose up -d
down:
	docker-compose down
down-tailwind:
	docker-compose down tailwind
down-prettier:
	docker-compose down prettier
restart:
	docker-compose restart
logs:
	docker-compose logs -f
ps:
	docker-compose ps
shell:
	docker-compose exec ui bash
shell-prettier:
	docker-compose exec prettier bash
shell-tailwind:
	docker-compose exec tailwind bash