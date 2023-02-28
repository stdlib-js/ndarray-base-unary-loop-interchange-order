<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# unaryLoopOrder

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reorder ndarray dimensions and associated strides for loop interchange.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
unaryLoopOrder = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var unaryLoopOrder = require( 'path/to/vendor/umd/ndarray-base-unary-loop-interchange-order/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.unaryLoopOrder;
})();
</script>
```

#### unaryLoopOrder( shape, stridesX, stridesY )

Reorders [ndarray][@stdlib/ndarray/ctor] dimensions and associated strides for [loop interchange][loop-interchange].

```javascript
// Define an array shape:
var shape = [ 2, 2 ];

// Define the strides for the input array:
var stridesX = [ 2, 1 ]; // row-major

// Define the strides for the output array:
var stridesY = [ 1, 2 ]; // column-major

// Resolve the loop interchange order:
var o = unaryLoopOrder( shape, stridesX, stridesY );
// returns {...}
```

The function returns an object having the following properties:

-   **sh**: ordered dimensions.
-   **sx**: input array strides sorted in loop order.
-   **sy**: output array strides sorted in loop order.

For all returned arrays, the first element corresponds to the innermost loop, and the last element corresponds to the outermost loop.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, [loop interchange][loop-interchange] is a technique used in [loop nest optimization][loop-nest-optimization] to improve locality of reference and take advantage of CPU cache.

    The purpose of this function is to order [ndarray][@stdlib/ndarray/ctor] dimensions according to the magnitude of **input array** strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimized cache misses and ensure locality of reference.

-   Cache performance may be degraded if the layout order (i.e., row-major or column-major) differs for the input and output [ndarrays][@stdlib/ndarray/ctor]. This function is intended to optimize cache performance for the input [ndarray][@stdlib/ndarray/ctor]. If the output [ndarray][@stdlib/ndarray/ctor] has a different layout order (e.g., if the input [ndarray][@stdlib/ndarray/ctor] is row-major and the output [ndarray][@stdlib/ndarray/ctor] is column-major), cache misses are likely for the output [ndarray][@stdlib/ndarray/ctor]. In general, to ensure best performance, input and output [ndarrays][@stdlib/ndarray/ctor] should have the same layout order.

-   The function assumes that the input and output [ndarrays][@stdlib/ndarray/ctor] have the same shape. Hence, loop interchange order should only be determined **after** broadcasting.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create ndarrays:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
var y = array( [ [ 0, 0 ], [ 0, 0 ] ] );

// Resolve loop interchange data:
var o = loopOrder( x.shape, x.strides, y.strides );
// returns {...}

console.log( o );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-unary-loop-interchange-order.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-unary-loop-interchange-order

[test-image]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-unary-loop-interchange-order/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-unary-loop-interchange-order?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-unary-loop-interchange-order.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-unary-loop-interchange-order/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-unary-loop-interchange-order/main/LICENSE

[loop-interchange]: https://en.wikipedia.org/wiki/Loop_interchange

[loop-nest-optimization]: https://en.wikipedia.org/wiki/Loop_nest_optimization

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib/tree/umd

</section>

<!-- /.links -->
