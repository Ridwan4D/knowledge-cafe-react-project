import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="p-5 my-5 bg-white rounded-lg">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
};
export default Bookmark;
