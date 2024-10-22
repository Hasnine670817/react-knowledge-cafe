import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;

    return (
        <div>
            <img className='mb-8 w-full rounded-lg' src={cover} alt="image" />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <img className='w-[60px]' src={author_img} alt="image" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-base font-semibold text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-xl font-medium text-[#11111199]'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-xl font-medium text-[#11111199]'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-[40px] font-bold mt-3 mb-4'>{title}</h2>
            <p className='flex gap-4'>
                {
                    hashtags.map((hash, idx) =>
                        <span key={idx}>
                            <a className='text-base font-semibold text-[#11111199]' href="#">#{hash}</a>
                        </span>
                    )
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='mt-5 text-xl underline font-semibold text-[#6047EC]'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
};

export default Blog;