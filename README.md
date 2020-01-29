# 11ty-data-map-and-fn

This example shows how you can use JavaScript `Map()` object as a datasource.

The [./_data/map.js](_data/map.js) file exports a <code>Map()</code> object with two key/value pairs:

```js
module.exports = new Map([
  ["one", "string number one"],
  ["two", "string number two"]
]);
```

The [./map-data-test.njk](map-data-test.njk) file has the following snippets:

## Example 1: Fetching a specific key from a global `Map()`

```njk
<p>{{ map.get('two') | safe }}</p>
```

### Output

```html
<p>string number two</p>
```

## Example 2: Looping over a global data file `Map()` by key/value pair

```njk
<ul>
  {%- for key, value in map %}
  <li>key={{ key | safe }}, value={{ value | safe }}</li>
  {%- endfor %}
</ul>
```

### Output

```html
<ul>
  <li>key=one, value=string number one</li>
  <li>key=two, value=string number two</li>
</ul>
```

## Example 3: Looping over a global data file `Map()` keys

```njk
<ul>
  {% for key in map.keys() %}
  <li>{{ key | safe }}</li>
  {% endfor %}
</ul>
```

### Output

```html
<ul>
  <li>one</li>
  <li>two</li>
</ul>
```


## Example 4: Looping over a global data file `Map()` values

```njk
<ul>
  {% for value in map.values() %}
  <li>{{ value | safe }}</li>
  {% endfor %}
</ul>
```

### Output

```html
<ul>
  <li>string number one</li>
  <li>string number two</li>
</ul>
```

---

The code in [./map-collection-test.njk](map-collection-test.njk) is the same, except instead of using the [./_data/map.js](_data/map.js) global data file, we use the `mapcollection` collection defined in the [.eleventy.js](.eleventy.js) file:

```js
module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("mapcollection", collection => {
    return new Map([
      ["three", "String number three"],
      ["four", "String number four"]
    ]);
  });

  return {};
};
```

## Example 1: Fetching a specific key from a `Map()`

```njk
<p>{{ collections.mapcollection.get('three') | safe }}</p>
```

### Output

```html
<p>String number three</p>
```

The rest of the examples are the same as their [./map-data-test.njk](map-data-test.njk) counterpart, with the exception of using `collections.mapcollection.*` instead of the ./_data/ file's `map.*`.

---

Finally we have the [./_data/fn.js](_data/fn.js) global data file which exports an object with a function which returns a string:

```js
module.exports = {
  log(num) {
    return `Logging ${num}`;
  }
};
```

Our [./fn-test.njk](fn-test.njk) file calls the [./_data/fn.js](_data/fn.js) data file's `log()` method and outputs the result:

```njk
<p><code>fn.log(12)</code>: {{ fn.log(12) | dump(2) }}</p>
```

### Output

```html
<p><code>fn.log(12)</code>: &quot;Logging 12&quot;</p>
```
