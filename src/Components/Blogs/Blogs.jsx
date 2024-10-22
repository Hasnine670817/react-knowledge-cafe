import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div>
                {
                    blogs.map((blog, inx) => <Blog 
                        handleMarkAsRead={handleMarkAsRead} 
                        handleAddToBookmarks={handleAddToBookmarks}
                        blog={blog} 
                        key={inx}>
                    </Blog>)
                }
            </div>
        </div>
    );
}

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;