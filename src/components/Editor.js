import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
  // Destructure props
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  // State to keep track of whether the editor is open or collapsed
  const [open, setOpen] = useState(true)

  // Function to handle changes to the editor's content
  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      {/* Render the editor's title and a button to toggle the open/collapsed state */}
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      {/* Render the ControlledEditor component */}
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}
