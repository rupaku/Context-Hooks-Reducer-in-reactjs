import React, { useState } from "react"

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    addSong(title)
    setTitle("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <input type="submit" value="Add Song" />
    </form>
  )
}

export default NewSongForm
