up:
	docker-compose up

clean:
	docker container prune -f
	docker network prune -f
	docker image prune -f
	docker volume prune -f

.PHONY: up
