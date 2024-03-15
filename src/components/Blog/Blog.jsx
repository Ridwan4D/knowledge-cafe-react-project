import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
//   console.log(blog);
  const {id,cover_img,title,author,tags,post_date,author_img,reading_time,} = blog;
  return (
    <div>
      <h1>Id:{id}</h1>
      <img src={cover_img} alt=""  className="w-[80%] h-[60vh] rounded-xl" />
      <h1>Id:{title}</h1>
      <h1>Id:{author}</h1>
      <img src={author_img} alt="" className="w-[50px]" />
      <h1>Id:{tags}</h1>
      <h1>Id:{post_date}</h1>
      <h1>Id:{reading_time}</h1>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;
