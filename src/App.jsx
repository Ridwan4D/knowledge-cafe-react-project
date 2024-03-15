import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setButtonDisabled(true);
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    // console.log("marking time", time);
    setReadTime(readTime + time);
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
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
