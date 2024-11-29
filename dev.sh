# Nohup keeps the processes running in background.
# The processes logs are written to nohup.out file.
pkill -f npm
rm nohup.out
nohup sh -c "tail -f /dev/null | npx tailwindcss -i ./src/styles/tailwindin.css -o ./src/styles/tailwindout.css --watch" &
nohup npm run dev < /dev/null &
