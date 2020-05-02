# React Logic

A kit of HOCs to make simple operations like:

- If
- For
- Repeat

## Examples:

### If
Render the element only when conditions is true

```tsx
const Item = Logic(YourComponent);

return <Item if={condition} />
```

### For
Repeat the element and pass the prop `data`.

```tsx
const Item = Logic(YourComponent);

return <Item for={[{name: 'a'}, {name: 'b'}]} />
```


### Repeat
Repeat the element many times necessary.

```tsx
const Item = Logic(YourComponent);

return <Item repeat={2} />
```
