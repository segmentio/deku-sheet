import element from 'virtual-element'
import { deku, render } from 'deku'

import Sheet from '../src'

const code = `import Sheet from 'deku-sheet'

render ({ state: { showSheet } }, setState) {

  const hideSheet () = setState({ showSheet: false })

  if (showSheet) { return <Sheet onClose={hideSheet} /> }
}`

const App = {

  render ({ state: { show } }, setState) {

    const hideSheet = () => setState({ show: false })

    const sheet = (
      <Sheet onClose={hideSheet}>
        <p>{'Here you go!'}</p>
        <p>{'You can now click on the close button or in the overlay background to close your sheet.'}</p>
      </Sheet>
    )

    return (
      <div>

        <header>
          <h4>deku-sheet</h4>
          <span>A sheet component for Deku</span>
        </header>

        {show && sheet}

        <main>

          <p>{'This component allows you to integrate a sheet painlessly inside your application.'}</p>

          <button onClick={() => setState({ show: true })}>{'See it in action!'}</button>

          <p>{'A basic example would look like this:'}</p>

          <div class='Code'>
            {code}
          </div>
        </main>

      </div>
    )
  }

}

render(deku(<App />), document.getElementById('anchor'))
