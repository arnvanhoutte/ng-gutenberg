# css-to-style

Transform a string of css rules into a style object.

## Usage

```js
toStyle(cssText);
```

### Parameters

- `cssText` string of CSS rules

### Return value

An object of CSS rules, where the properties are camelCased.

## Example

```js
import toStyle from 'css-to-style';

toStyle('font-size: 2em; color: #f00; margin-top: 4px');
// returns { fontSize: '2em', color: '#f00', marginTop: '4px' }
```
