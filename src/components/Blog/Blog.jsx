import PropTypes from "prop-types";

const Blog = ({
  blog,
  handleAddToBookmark,
  handleReadingTime,
  isButtonDisabled,
}) => {
  //   console.log(blog);
  const {
    cover_img,
    title,
    author,
    tags,
    post_date,
    author_img,
    reading_time,
  } = blog;
  return (
    <div className="space-y-4 mb-10">
      <img src={cover_img} alt="" className="w-[100%] h-[70vh] rounded-lg" />
      {/* author section and reading time */}
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img src={author_img} alt="" className="w-[50px]" />
          <div>
            <p className="text-2xl font-bold">Author: {author}</p>
            <p className="text-base font-semibold text-[#11111199]">
              Publish: {post_date}
            </p>
          </div>
        </div>
        <div className="space-x-2">
          <span className="text-[#11111199]">{reading_time} min read</span>
          <button className="cursor-pointer" onClick={() => handleAddToBookmark(blog)} disabled={isButtonDisabled}>
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>
        {tags.map((tag, idx) => (
          <span key={idx}>
            <a href="#"> {tag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReadingTime(reading_time)}
        className="underline text-[#6047EC]"
      >
        Mark as read
      </button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
  // isButtonDisabled: PropTypes.bool,
};

export default Blog;
