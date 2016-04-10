
# deku-sheet

A sheet component for Deku.

## Usage

```js
import Sheet from 'deku-sheet';

export function render({ state }, setState) {
  const { sheetVisible } = state;

  if (sheetVisible) {
    return <Sheet onClose={hideSheet} />;
  }

  function hideSheet() {
    setState({ sheetVisible: false });
  }
}
```
