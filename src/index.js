import { useState } from 'react';
import getNestedValue from 'get-nested-value';

const useMap = (initialMap = {}) => {
  const [ map, set ] = useState(initialMap);
  return [
    map,
    {
      replace: set,
      get: (key) => map[key],
      getIn: (path) => getNestedValue(path, map),
      set: (key, value) => set(m => ({ ...m, [key]: value })),
      update: (key, updateFn) => set(m => ({
        ...m,
        [key]: updateFn(m[key])
      })),
      remove: (key) => set(m => {
        delete m[key];
        return m;
      }),
    }
  ];
};

export default useMap;
