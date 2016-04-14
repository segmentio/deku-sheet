
# deku-sheet

A sheet component for Deku.

![Demo](https://cldup.com/cWxKH3hr9Y.png)

## Usage

```js
import Sheet from 'deku-sheet';

function render({ state }, setState) {
  const { showSheet } = state;
  if (showSheet) return <Sheet onClose={hideSheet} />;

  function hideSheet() {
    setState({ showSheet: false });
  }
}
```
