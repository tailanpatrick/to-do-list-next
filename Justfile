set shell := ["cmd", "/c"]

# Comando para iniciar o PocketBase
serve-pocketbase:
    cd _infra && start /B pocketbase serve

# Comando para iniciar o servidor de desenvolvimento
dev:
    npm run dev

# Comando para iniciar ambos simultaneamente
start:
    just serve-pocketbase
    timeout /t 10 /nobreak
    just dev
