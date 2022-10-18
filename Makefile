up:
	docker-compose -f resources/docker-compose/docker-compose.yaml up

down:
	docker-compose -f resources/docker-compose/docker-compose.yaml down

clean:
	docker container prune -f
	docker network prune -f
	docker image prune -f
	docker volume prune -f

.PHONY: up
