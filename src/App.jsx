import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [spendTime, setSpendTime] = useState(0)

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time, id) => {
    const newSpendTime = spendTime + time;
    setSpendTime(newSpendTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <>
      <div className='div-container'>
        <Header></Header>
        <div className='grid grid-cols-[8fr_4fr] gap-6 pt-8'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} spendTime={spendTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
