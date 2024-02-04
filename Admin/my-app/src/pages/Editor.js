import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import Quill from "quill";
import { Delta } from "quill/core";

import "quill/dist/quill.snow.css";
  // import css file based on chosen theme

const Editor = forwardRef(({ readOnly = false, value, onChange }, ref) => {
  const containerRef = useRef(null);
  const valueRef = useRef(value);
  const onChangeRef = useRef(onChange);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );
    const quill = new Quill(editorContainer, {
      theme: "snow",
      readOnly,
    });

    // detach ref from component
    if (ref) ref.current = quill;

    if (valueRef.current) {
      // Handling initial value
      const isHTML = /^<([a-z]+)[^>]*>[\S\s]*<\/\1>$/.test(valueRef.current);
      const contentValue = isHTML
        ? quill.clipboard.convert({ html: valueRef.current })
        : new Delta().insert(valueRef.current);
      quill.setContents(contentValue);
    }

    quill.on(Quill.events.TEXT_CHANGE, () => {
      // return value as HTML
      onChangeRef.current?.(quill.getSemanticHTML());
    });

    return () => {
      // detach ref from component
      if (ref) ref.current = null;
      container.innerHTML = "";
    };
  }, [ref, readOnly]);

  return <div ref={containerRef}></div>;
});

Editor.displayName = "Editor";

Editor.propTypes = {
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Editor;