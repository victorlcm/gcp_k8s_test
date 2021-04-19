# node-server-ts

## Getting started

This is a template repository. You can create your own repository just by clicking in "Use this template" button above.

After creating your repo, you can hack the project in your own way. I recommend starting by changing the `package.json` file to include your project name.

## Scripts

- `npm run dev`: start the project in watch mode
- `npm build`: build the project
- `npm lint`: lint all files

## command to startup

- `npm run build`

```bash
 PGUSER=dbuser \
  PGHOST=database.server.com \
  PGPASSWORD=secretpassword \
  PGDATABASE=mydb \
  PGPORT=3211 \
  node dist/src/index.js
```
