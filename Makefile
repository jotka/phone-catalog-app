# install dependencies
.PHONY: install
install:
	npm install
	cd server; npm install
