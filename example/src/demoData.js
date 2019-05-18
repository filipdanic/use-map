import React from 'react'

export const defaultList = [
  { task: <span>Check the <mark>use-map</mark> demo</span>, done: true },
  { task: <span>Install with <code>npm install --save use-map</code> and then import as <code>{`import useArray from 'use-map'`}</code></span>, done: false },
  { task: 'Follow the example and docs! 🎉 🎉 🎉', done: false },
];

export const getTask = () => ({
  done: false,
  task: 'Your new task. Timestamp: ' + new Date().getTime()
});

export const mergeBeforeList = [
  { task: <span>Added with <code>mergeBefore</code></span>, done: false },
];

export const mergeAfterList = [
  { task: <span>Added with <code>mergeAfter</code></span>, done: false },
];
