rm nohup.out
rm -f -r ./dist/*
pkill -f npm
npx tailwindcss -i ./src/styles/tailwindin.css -o ./src/styles/tailwindout.css
npm run build
npm run preview
