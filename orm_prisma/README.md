# ORM prisma and typescript

```bash
# setup node
npm init -y
# install packages
npm install typescript ts-node @types/node --save-dev
# setup TypeScript
npx tsc --init
# install Prisma
npm install prisma --save-dev
# setup Prisma
npx prisma init --datasource-provider sqlite
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

- https://www.prisma.io/docs/getting-started/quickstart
- https://github.com/prisma/prisma-examples/
  - https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express
