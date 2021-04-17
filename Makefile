install: install-deps

start:
	heroku local -f Procfile.dev

start-backend:
	npx nodemon bin/slack.js

start-frontend:
	npx webpack serve --open

install-deps:
	npm ci

refresh-deps:
	rm package-lock.json
	rm -rf node_modules
	npm install

build:
	npm run build

deploy:
	git push heroku
