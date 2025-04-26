pkill -f npm
rm nohup.out
rm -f -r ./dist/*
rm -f -r ./.astro/*
# Tailwind CSS compilation.
npx tailwindcss -i ./src/styles/tailwindin.css -o ./src/styles/tailwindout.css
npm run build
npm run preview
