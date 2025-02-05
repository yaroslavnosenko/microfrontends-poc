.PHONY: run angular header host install install_angular install_header install_host

# Start app locally

run:
	@make -j 3 angular header host
angular:
	@cd angular && yarn dev
header:
	@cd header && pnpm start
host:
	@cd host && pnpm dev

# Install deps

install: install_angular install_header install_host
install_angular: 
	@cd angular && yarn install
install_header:
	@cd header && pnpm install
install_host:
	@cd host && pnpm install
