[![NPM](https://img.shields.io/npm/v/use-object.svg)](https://www.npmjs.com/package/use-object)
# use-object

A custom React hook that lets you manipulate an array data structure without ever needing extra utilities.

[👉 Demo site and docs.](https://filipdanic.github.io/use-object/)

Start with:

```bash
npm install --save use-object
```

Then, import and use the hook:

```javascript
import useMap from 'use-object'
// …in your functional component:
  const [ map, { get, set, update, getIn, remove, replace } ] = useMap(initialMap);
```

## Docs

The complete documentation as well as a live demo [is available here.](https://filipdanic.github.io/use-object/)

## License

MIT © [filipdanic](https://github.com/filipdanic)

## Related

If you like `use-object` you might find [use-array](https://filipdanic.github.io/use-array/) useful as well.
