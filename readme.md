
# deku-sheet

A sheet component for Deku.

![Demo](https://cldup.com/cWxKH3hr9Y.png)

## Usage

```js
import Sheet from 'deku-sheet';

export default render;

function render({ state }, setState) {
  const { sheetVisible } = state;

  if (sheetVisible) {
    return <Sheet onClose={hideSheet} />;
  }

  function hideSheet() {
    setState({ sheetVisible: false });
  }
}
```
