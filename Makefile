.PHONY: build up down logs clean restart

# Build and start all services
up:
	docker-compose up --build -d

# Start services (without rebuild)
start:
	docker-compose up -d

# Stop all services
down:
	docker-compose down

# Stop and remove volumes (clean database)
clean:
	docker-compose down -v

# View logs
logs:
	docker-compose logs -f

# View specific service logs
logs-backend:
	docker-compose logs -f backend

logs-frontend:
	docker-compose logs -f frontend

logs-db:
	docker-compose logs -f db

# Restart all services
restart:
	docker-compose restart

# Build without cache
build:
	docker-compose build --no-cache

# Development mode (with file watching)
dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Show status
status:
	docker-compose ps

# Access database
db-shell:
	docker-compose exec db psql -U postgres -d pagila
