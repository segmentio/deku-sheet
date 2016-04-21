[![Circle CI](https://circleci.com/gh/segmentio/deku-sheet.svg?style=svg&circle-token=30b6f6896c8b39bade14a2940b45a7c8ff9e4756)](https://circleci.com/gh/segmentio/deku-sheet)

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
