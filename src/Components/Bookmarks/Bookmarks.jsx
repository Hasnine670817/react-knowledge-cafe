import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, spendTime}) => {
    return (
        <div>
            <div className='time-div border border-[#6047EC] bg-[#6047EC1A] rounded-lg py-5 text-center'>
                <h3 className='text-2xl font-bold text-[#6047EC]'>Spent time on read: <span>{spendTime}</span> min</h3>
            </div>
            <div className='bookmarked-div bg-[#1111110D] rounded-lg p-[30px] mt-6'>
                <div>
                    <h3 className='text-2xl font-bold'>Bookmarked Blogs : <span>{bookmarks.length}</span></h3>
                </div>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    spendTime: PropTypes.number,
};

export default Bookmarks;