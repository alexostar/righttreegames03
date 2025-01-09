## Initial setup

- npx create-next-app@latest
- npx shadcn@latest init
- npm install next-themes
- create theme-provider.tsx and change layout.tsx as described in [Shadcn dark mode docs](https://ui.shadcn.com/docs/dark-mode/next)
- Add extra tailwind utilites to globals.css as in Traversy's Prostore project
- npm i -D prisma @prisma/client
- npx prisma init
- npm i next-auth@beta @auth/prisma-adapter
- npm i bcrypt-ts-edge
- npm i zod

## Copy files from other projects

## Prepare .env file

## Database

- sqllite3 righttree.db
- npx prisma generate
- npx prisma migrate dev --name init
- npx prisma studio

## More packages

- npm i react-zoom-pan-pinch
- npm i react-markdown
- npm i @tailwindcss/typography

## Add shadcn components

npx shadcn@latest add textarea (and many other)
