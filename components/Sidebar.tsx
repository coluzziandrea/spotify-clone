import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5'></HomeIcon>
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5'></SearchIcon>
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5'></LibraryIcon>
          <p>Your Library</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'></hr>

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5'></PlusCircleIcon>
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5'></HeartIcon>
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5'></RssIcon>
          <p>Podcasts</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-900'></hr>

        {/* Playlists */}
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
        <p className='cursor-pointer hover:text-white'>Playlist name..</p>
      </div>
    </div>
  );
};

export default Sidebar;
