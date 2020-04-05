This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note : New 'suspense' feature in React 16 

```js
import React, {Component, Suspense} from 'react';


<Suspense fallback={<div>LOADING...</div>}>
    <Posts/>
</Suspense>)

```