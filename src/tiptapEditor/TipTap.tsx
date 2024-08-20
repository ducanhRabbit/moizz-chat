// src/Tiptap.tsx
import Placeholder from '@tiptap/extension-placeholder'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import "./style.css"
// define your extension array
const extensions = [StarterKit, Placeholder.configure({
  placeholder:"Say Something!",
})]


const Tiptap = () => {
  const editor = useEditor({
    editorProps:{
        attributes:{
            class: "border-none overflow-y-auto overflow-x-hidden max-h-[100px] px-0 py-3 focus-within:outline-none"
        }
    },
    extensions,

  })

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap