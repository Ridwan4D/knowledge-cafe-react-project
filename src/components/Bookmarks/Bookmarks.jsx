import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readTime }) => {
//   console.log(readTime);
  return (
    <div className="md:w-1/3 space-y-3">
      <div className="px-10 py-6 bg-[#6047EC1A] rounded-lg">
        <h3 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readTime} min</h3>
      </div>
      <div className="bg-[#1111110D] p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readTime: PropTypes.number,
};

export default Bookmarks;
