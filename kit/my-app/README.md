#sorens notes:

with houdini at install its using apollo and gets confused about the dirs in:
/node-modules/houdini-common/build/esm/index.js line 786 add this: '/kit/my-app/'

ex:
var DEFAULT_CONFIG_PATH = path.join(process.cwd(), '/kit/my-app/houdini.config.js');

also do:
npx houdini init -ph x-hasura-admin-secret="9Yko0f3dyIz7GItzGgDrur4LeWcLf2Dre4uZIuVvBSmmDWcrQQEC0sqWkF1mrMu8" 
or
npx houdini init -ph x-hasura-admin-secret="9Yko0f3dyIz7GItzGgDrur4LeWcLf2Dre4uZIuVvBSmmDWcrQQEC0sqWkF1mrMu8" --pull-schema 
and if needed:
npx houdini generate -ph x-hasura-admin-secret="9Yko0f3dyIz7GItzGgDrur4LeWcLf2Dre4uZIuVvBSmmDWcrQQEC0sqWkF1mrMu8" --pull-schema 


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
