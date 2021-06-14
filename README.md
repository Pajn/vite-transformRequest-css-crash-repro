Repro showing that Vites css-post module crashes when using `transfromRequest` without starting a server.

When you run `server.js` you'll see a crash from css-post:

```
❯ node server.js
(node:269183) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'get' of undefined
    at TransformContext.transform (/home/rasmus/Development/vite-repors/vite-transformRequest-css-crash-repro/node_modules/vite/dist/node/chunks/dep-bc228bbb.js:23139:56)
    at Object.transform (/home/rasmus/Development/vite-repors/vite-transformRequest-css-crash-repro/node_modules/vite/dist/node/chunks/dep-bc228bbb.js:44765:53)
    at async transformRequest (/home/rasmus/Development/vite-repors/vite-transformRequest-css-crash-repro/node_modules/vite/dist/node/chunks/dep-bc228bbb.js:59029:29)
    at async main (/home/rasmus/Development/vite-repors/vite-transformRequest-css-crash-repro/server.js:7:18)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:269183) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:269183) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

If you then uncomment the `server.listen` in `server.js` you'll see a successful call:
```
❯ node server.js

  vite v2.3.7 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose
result {
  code: 'import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/style.css");import { updateStyle, removeStyle } from "/@vite/client"\n' +
    'const id = "/home/rasmus/Development/vite-repors/vite-transformRequest-css-crash-repro/style.css"\n' +
    'const css = "#app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 60px;\\n}\\n"\n' +
    'updateStyle(id, css)\n' +
    'import.meta.hot.accept()\n' +
    'export default css\n' +
    'import.meta.hot.prune(() => removeStyle(id))',
  map: null,
  etag: 'W/"26c-+rOOvG1peBIIC9rbuS2zR8rFlCI"'
}
```
