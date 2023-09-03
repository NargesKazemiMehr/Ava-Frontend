import React, { useEffect, useRef, useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import Toolbar from "./Toolbar/Toolbar";
import "./DraftEditor.css";
import { useSelector } from "react-redux";

const DraftEditor = ({ handleBodyChange, readOnly }) => {
  const { sendMessageBody } = useSelector((state) => state.SendMessageReducer);
  const [editorState, setEditorState] = useState(
    sendMessageBody?.blocks?.length > 0
      ? EditorState.createWithContent(convertFromRaw(sendMessageBody))
      : EditorState.createWithContent(
          convertFromRaw({
            blocks: [
              // {
              //   key: "3eesq",
              //   text: "",
              //   type: "header-one",
              //   depth: 0,
              //   inlineStyleRanges: [
              //     {
              //       offset: 5,
              //       length: 5,
              //       style: "BOLD",
              //     },
              //     {
              //       offset: 25,
              //       length: 5,
              //       style: "ITALIC",
              //     },
              //     {
              //       offset: 30,
              //       length: 8,
              //       style: "UNDERLINE",
              //     },
              //   ],
              //   entityRanges: [],
              //   data: {},
              // },
              // {
              //   key: "9adb5",
              //   text: "",
              //   type: " unstyled",
              //   depth: 0,
              //   inlineStyleRanges: [],
              //   entityRanges: [],
              //   data: {},
              // },
            ],
            entityMap: {},
          })
        )
  );
  const editor = useRef(null);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    editor.current.focus();
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };

  // FOR INLINE STYLES
  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      // fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
    HIGHLIGHT: {
      backgroundColor: "#F7A5F7",
    },
    UPPERCASE: {
      textTransform: "uppercase",
    },
    LOWERCASE: {
      textTransform: "lowercase",
    },
    CODEBLOCK: {
      // fontFamily: '"fira-code", "monospace"',
      fontSize: "inherit",
      background: "#ffeff0",
      fontStyle: "italic",
      lineHeight: 1.5,
      padding: "0.3rem 0.5rem",
      borderRadius: " 0.2rem",
    },
    SUPERSCRIPT: {
      verticalAlign: "super",
      fontSize: "80%",
    },
    SUBSCRIPT: {
      verticalAlign: "sub",
      fontSize: "80%",
    },
  };
  const handleChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    setEditorState(editorState);

    handleBodyChange(convertToRaw(contentState));
  };

  // FOR BLOCK LEVEL STYLES(Returns CSS Class From DraftEditor.css)
  const myBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    switch (type) {
      case "blockQuote":
        return "superFancyBlockquote";
      case "leftAlign":
        return "leftAlign";
      case "rightAlign":
        return "rightAlign";
      case "centerAlign":
        return "centerAlign";
      case "justifyAlign":
        return "justifyAlign";
      default:
        break;
    }
  };
  const uploadFile = (file) => {
    console.log("upload file", file);
  };
  return (
    // <div className="editor-wrapper" onClick={focusEditor}>
    <div className="editor-wrapper">
      <Toolbar
        editorState={editorState}
        setEditorState={setEditorState}
        readOnly={readOnly}
      />
      <div className="editor-container">
        <Editor
          ref={editor}
          // placeholder="متن ايميل را تايپ نماييد!"
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          customStyleMap={styleMap}
          blockStyleFn={myBlockStyleFn}
          onChange={(editorState) => handleChange(editorState)}
          readOnly={readOnly}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadFile,
              alt: { present: true, mandatory: false },
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DraftEditor;
