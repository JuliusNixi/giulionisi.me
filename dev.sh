# Run with . ./dev.sh
rm nohup.out
nohup sh -c "tail -f /dev/null | npx tailwindcss -i ./src/styles/tailwindin.css -o ./src/styles/tailwindout.css --watch" &
nohup npm run dev < /dev/null &
