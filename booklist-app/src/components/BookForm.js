/* With addBook */
/*import React, { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"

const NewBookForm = () => {
  const { addBook } = useContext(BookContext)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title, author)
    setTitle("")
    setAuthor("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        reuired
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        reuired
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="add book" />
    </form>
  )
}

export default NewBookForm */

/* Using Reducers */

import React, { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"

const NewBookForm = () => {
  //   const { addBook } = useContext(BookContext)
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // addBook(title, author)
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    })
    setTitle("")
    setAuthor("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        reuired
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        reuired
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="add book" />
    </form>
  )
}

export default NewBookForm
