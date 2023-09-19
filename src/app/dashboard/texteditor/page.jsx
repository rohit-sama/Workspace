"use client";

import "./styles.scss";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="grid gap-4 m-10 grid-cols-11 border-t border-b p-3">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          code
        </button>
        <button className="border bg-slate-400 text-black rounded-sm px-2"
         onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </button>
        <button className="border bg-slate-400 text-black rounded-sm px-2"
         onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph border px-2") ? "is-active rounded-sm" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"
          }
        >
          h1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"
          }
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"
          }
        >
          h3
        </button>
        <button 
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"
          }
        >
          h4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"
          }
        >
          h5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"
          }
        >
          h6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active rounded-sm border px-2" : "border bg-slate-400 rounded-lg text-black px-2"}
        >
          blockquote
        </button>
        <button className="border bg-slate-400 text-black rounded-sm px-2"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          horizontal rule
        </button>
        <button className="border bg-slate-400 text-black rounded-sm px-2"
         onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </button>
        <button className="border bg-slate-400 text-black rounded-sm px-2"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          undo
        </button>
        <button className="border bg-slate-400 text-black rounded-sm px-2"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          redo
        </button>
        <button 
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active rounded-sm border px-2"
              : "border bg-slate-400 text-black px-2"
          }
        >
          purple
        </button>
      </div>
    </>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `Start Writing Here!
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/>
`;
export default () => {
  return (
    <div className="text-center m-10">
  <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
      autofocus = {true}
       onUpdate={(editor) => { console.log(editor) }}
    ></EditorProvider>
    </div>
  
  );
};
