# @akmjenkins/nearest

[![npm version](https://img.shields.io/npm/v/@akmjenkins/nearest.svg)](https://npmjs.org/package/@akmjenkins/nearest)
[![Coverage Status](https://coveralls.io/repos/github/akmjenkins/nearest/badge.svg)](https://coveralls.io/github/akmjenkins/nearest)
[![Build Status](https://travis-ci.com/akmjenkins/nearest.svg)](https://travis-ci.com/akmjenkins/nearest)
[![Bundle Phobia](https://badgen.net/bundlephobia/minzip/@akmjenkins/nearest)](https://bundlephobia.com/result?p=@akmjenkins/nearest)


## Rounds a number to the nearest N


```js
import nearest from '@akmjenkins/nearest';

const roundToNearest10 = nearest(10);

roundToNearest10(5); // 10
roundToNearest10(4); // 0

const roundUpToNearest10 = nearest(10,Math.ceil);

roundUpToNearest10(5); // 10
roundUpToNearest10(1); // 10
roundUpToNearest10(11); // 20

const roundDownToNearest10 = nearest(10,Math.floor);

roundDownToNearest10(5); // 0
roundDownToNearest10(1); // 0
roundDownToNearest10(11); // 10
roundDownToNearest10(19); // 10
```

Or in the browser (creates a global `nearest`)

```html
<script src="https://unpkg.com/@akmjenkins/nearest">
    const roundToNearest10 = nearest(10);
    roundToNearest10(5); // 10
</script>
```