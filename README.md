# nearest

Rounds a number to the nearest N


```js
import nearest from 'nearest';

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