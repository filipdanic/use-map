import React from 'react';
import useMap from 'use-object';
import Intro from './Intro';

export default () => {
  const [ map, { get, set, update, getIn, remove, replace } ] = useMap({
    count: 1,
    timestamp: new Date().getTime(),
  });
  return (
    <div id='demo'>
      <div className='card'>
        <Intro />
        <h2>Docs and Examples</h2>
        <p>The source code of this hook should be easy to digest as it’s pretty short, so feel free <a href='https://github.com/filipdanic/use-object/blob/master/src/index.js' target='_blank' rel='noopener noreferrer'>check it out on GitHub.</a></p>
        <h3>Initializing</h3>
        <p>This page is a living doc and example, as you click on buttons you’re changing the actual state of this page.</p>
        <p>We start with <code>import useMap from 'use-object';</code> and then include the hook into our component:</p>
        <pre>
          {`const [ map, { get, set, update, getIn, remove, replace } ] = useMap({\n`}
          {`  count: 1,\n`}
          {`  timestamp: new Date().getTime(),\n`}
          {`});`}
        </pre>
        <p>Here, <mark>map is the state object</mark>, while <mark>get, set, update, getIn, and remove are all methods</mark> provided by this hook.</p>
        <p>The argument given to useMap is the <mark>initial state.</mark> Leave it empty and it be assigned to an empty object.</p>
        <h3>get</h3>
        <p>As easy as <code>get('count')</code> or <code>get('timestamp')</code></p>
        <pre>count: {get('count')}</pre>
        <pre>timestamp: {get('timestamp')}</pre>
        <h3>set</h3>
        <p>As familiar as <code>set('timestamp', value)</code></p>
        <button onClick={() => set('timestamp', new Date().getTime())}>Update Timestamp</button>
        <h3>update</h3>
        <p>But sometimes you need to first <code>get</code> the value and then decide on how to <code>set</code>. We can do all of that with <code>update</code> which accepts <mark>an update function</mark> as the second parameter. So, just like:</p>
        <p><code>{`update('count', (count) => count + 1)`}</code></p>
        <button onClick={() => update('count', (count) => count + 1)}>Increment by 1</button>
        <button onClick={() => update('count', (count) => count - 1)}>Decrement by 1</button>
        <pre>Current counter value: {get('count')}</pre>
        <h3>getIn</h3>
        <p>Sometimes you just have so much nested data to work with and you’re in a pinch. This method will help you <mark>get deeply nested data</mark> out of your state <mark>without errors if the path doesn’t exist.</mark></p>
        <p>The <mark>path</mark> argument string or an array of strings and numbers:</p>
        <p><code>getIn('some.path.to.someKey')</code></p>
        <p><code>getIn(['some', 'path', 'to', 'someKey'])</code></p>
        <p><code>getIn(['lookInside', 'anArray', 3, 'viaIndex'])</code></p>
        <p>If the specified path doesn’t exist, no error is thrown.</p>
        <h3>remove</h3>
        <p>With <code>remove('someKey')</code> you <mark>delete</mark> a key from the object state.</p>
        <h3>replace</h3>
        <p>This is your proxy to the <mark>set method from useState.</mark> Use it to replace the current state with whatever you need.</p>
        <button onClick={() =>
          replace({ count: Math.round(Math.random() * 1000), timestamp: new Date().getTime() })}
        >
          Randomize State!
        </button>
        <pre>count: {get('count')}</pre>
        <pre>timestamp: {get('timestamp')}</pre>
      </div>
    </div>
  );
}
