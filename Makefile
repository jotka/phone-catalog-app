# install dependencies
.PHONY: install
install:
	npm install
	cd server; npm install
	cd client; npm install

# starts the local devserver and api server
.PHONY: run
run:
	npm start
