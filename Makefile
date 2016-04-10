
lib: node_modules
	@./node_modules/.bin/babel --out-dir $@ src --source-maps inline
	@cp src/index.css lib/index.css

node_modules: package.json
	@npm install
	touch $@

clean:
	@rm -rf lib

distclean: clean
	@rm -rf node_modules

.PHONY: clean distclean
