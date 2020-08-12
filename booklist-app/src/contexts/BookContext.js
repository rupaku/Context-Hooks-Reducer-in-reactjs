/* With useState */
/*import React, { useState, createContext } from "react"

export const BookContext = createContext()
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of wind", author: "Shakespeare", id: 1 },
    { title: "name of rock", author: "Rabindra", id: 2 },
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: 4 }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider */

/* With Reducer */
import React, { useReducer, createContext } from "react"
import { bookReducer } from "../reducers/bookReducer"

export const BookContext = createContext()
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [])

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: 4 }])
  // }

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id))
  // }
  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
