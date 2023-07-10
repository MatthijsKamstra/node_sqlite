# ORM prisma, TypeScript and Express

```bash
# setup node
npm init -y
# install packages
npm install express typescript ts-node @types/node --save-dev
# setup TypeScript
npx tsc --init
# install Prisma
npm install prisma --save-dev
# setup Prisma
npx prisma init --datasource-provider sqlite
```

create files

```bash
mkdir src
touch src/index.js
touch prisma/seed.js
```

add models to `prisma/schema.prisma`

setup database

```bash
npx prisma migrate dev --name init
```

create

```bash
touch script.ts
```

run script

```bash
➜ npx ts-node script.ts
```

open data in Prisma Studio

```bash
npx prisma studio
```

## Resources

- https://www.prisma.io/docs
- https://www.prisma.io/docs/guides/migrate/seed-database#seeding-your-database-with-typescript-or-javascript (seed)
- https://www.prisma.io/docs/concepts/components/prisma-schema
- https://www.prisma.io/docs/concepts/components/prisma-client

- https://github.com/prisma/prisma-examples/
  - https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express
