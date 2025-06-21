import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export default function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.from('videos').select('*')
      if (error) console.error('Error:', error)
      else setVideos(data)
    }

    fetchVideos()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Top Trolling Videos</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id} className="mb-3">
            <strong>{video.title}</strong> — Votes: {video.votes}
            <br />
            <a className="text-blue-400 underline" href={video.url} target="_blank" rel="noreferrer">Watch</a>
          </li>
        ))}
      </ul>
    </div>
  )
}