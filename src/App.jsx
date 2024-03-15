import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isSecondButtonDisabled, setSecondButtonDisabled] = useState(false);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setButtonDisabled(true);
    setBookmarks(newBookmarks);
    alert("Bookmark added")
    setSecondButtonDisabled(false)
  };

  const handleReadingTime = (id,time) => {
    // console.log("marking time", time);
    setSecondButtonDisabled(true)
    setReadTime(readTime + time);
    alert("Time Line added")
    // remove read bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
    setButtonDisabled(false)
  };

  return (
    <>
      <Header></Header>
      {/* parent of blog and bookmark section */}
      <div className="md:flex md:max-w-7xl mx-auto gap-5 mt-10">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
          isButtonDisabled={isButtonDisabled}
          isSecondButtonDisabled={isSecondButtonDisabled}
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
