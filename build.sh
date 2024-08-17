rm nohup.out
rm -f -r ./dist/*
npx tailwindcss -i ./src/styles/tailwindin.css -o ./src/styles/tailwindout.css
npm run build
npm run preview
