import React, { useState, useEffect } from "react"
// import uuid from "uuid/v1"
import NewSongForm from "./NewSongForm"

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "almost house", id: 2 },
    { title: "almost cool", id: 3 },
  ])

  const [age, setAge] = useState(20)
  const addSong = (title) => {
    // setSongs([...songs, { title: "almost crazy", id: uuid() }])
    setSongs([...songs, { title: title, id: 4 }])
  }

  useEffect(() => {
    console.log("useEffect ran", songs)
  }, [songs]) //on change of songs run useEffect

  useEffect(() => {
    console.log("useEffect ran", age)
  }, [age]) //on change of songs run useEffect

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to Age {age}</button>
    </div>
  )
}

export default SongList
