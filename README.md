## lovebird-types

Type declarations of [lovebird](https://github.com/rxi/lovebird), a browser-based debug console for the LÖVE framework

**NOTE: This Declaration is Designed to be used with [TypeScriptToLua](https://typescripttolua.github.io), Not Common Typescript**

| Command | Description |
|-|-|
|`yarn add -D lovebird-types`| Install this declaration |
|`yarn add rxi/lovebird`| Install lovebird |

Upon installation this declaration package can be linked to a *tsconfig.json* file.

```json
{
    "compilerOptions": {
        "types": [
            "lovebird-types"
        ]
    }
}
```

And used anywhere like this:

```typescript
import * as lovebird from "lovebird"

love.update = () => {
    lovebird.update()
}
```

Make sure to append ";./node_modules/?/?.lua" to your package.path in a conf.ts file (this is run first) to assist where Lua looks for modules. (for love2d you can just insert this to *conf.ts*)

```typescript
package.path += ";./node_modules/?/?.lua"
```
