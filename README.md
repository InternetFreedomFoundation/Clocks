# Clock

An attempt at solving the Linkrot problem using serverless solutions.

This frontend is used to search and list archived records indexed by pocketbase API.

![clocks](./clocks.svg)

Archiving is achieved using [SingleFile](https://github.com/gildas-lormeau/SingleFile/tree/master).

Backend repo can be found [here](https://github.com/InternetFreedomFoundation/clocks-backend).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Also works with `bun`

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
