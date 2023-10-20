1. https://tailwindcss.com/docs/installation
2. cd my-app
3. npm i -D tailwindcss
4. npx tailwindcss init
5. В файл tailwind.config.js добавить:

- /\*_ @type {import('tailwindcss').Config} _/
- export const content = ['./src/**/*.{html,js}']
- export const theme = {
-     extend: {},
- }
  export const plugins = []

6. В файл index.css добавьте директивы:

- @tailwind base;
- @tailwind components;
- @tailwind utilities;

7. установи расширение для VS Code: Tailwind CSS IntelliSense
8. npm run start
