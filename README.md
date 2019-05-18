[![NPM](https://img.shields.io/npm/v/use-map.svg)](https://www.npmjs.com/package/use-map)
# use-map

A custom React hook that lets you manipulate an array data structure without ever needing extra utilities.

[👉 Demo site and docs.](https://filipdanic.github.io/use-map/)

Start with:

```bash
npm install --save use-map
```

Then, import and use the hook:

```javascript
import useMap from 'use-map'
// …in your functional component:
  const [ map, { get, set, update, getIn, remove, replace } ] = useMap(initialMap);
```

## Docs

The complete documentation as well as a live demo [is available here.](https://filipdanic.github.io/use-map/)

## License

MIT © [filipdanic](https://github.com/filipdanic)

## Related

If you like `use-map` you might find [use-array](https://filipdanic.github.io/use-array/) useful as well.
