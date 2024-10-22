import profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <div className='flex items-center justify-between pt-12 pb-9 border-b border-[#11111126]'>
            <h1 className='text-[40px] font-bold'>Knowledge Cafe</h1>
            <button><img src={profile}alt="image" /></button>
        </div>
    );
};


export default Header;