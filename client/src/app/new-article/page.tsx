'use client'
import { useState } from 'react'
import MDEditor from "@uiw/react-md-editor";

const NewArticle = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div data-color-mode="light">
       <MDEditor height={600} value={value} onChange={(e) => e && setValue(e)} />
    </div>
  )
}

export default NewArticle