import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import Header from './Header';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  // Use custom hook to get and set values in local storage for HTML, CSS, and JS
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  // State to hold the source document for the iframe
  const [srcDoc, setSrcDoc] = useState('')

  // Update the source document for the iframe when HTML, CSS or JS changes
  useEffect(() => {
    // Set a timeout to update the source document after a delay
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    // Clear the timeout when the component unmounts or when HTML, CSS or JS changes
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <Header/>

      <div className="pane top-pane">
        {/* Render an Editor component for each language (HTML, CSS, JS) */}
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        {/* Render an iframe to display the output */}
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
