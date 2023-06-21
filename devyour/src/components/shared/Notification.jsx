const Notification = ({
  imgProfile,
  username,
  notice,
  date,
}) => {
  return (
    <>
      <div className="flex items-start shadow rounded-lg">
        <div className="flex py-2 px-4 items-start w-full">
          <div className="w-auto h-auto rounded-full">
            <img className="w-10 h-10 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
          </div>
          <div className="flex flex-col grow text-grey text-sm ml-2">
            <div className="text-grey text-sm font-semibold">{username}</div>
            <div className="flex justify-start align-center">
              <div className="text-grey text-sm">
                {notice}
              </div>
            </div>
          </div>
          <div className="text-grey text-sm ml-2">{date}</div>
        </div>
      </div>
    </>
  )
}

Notification.defaultProps = {
  imgProfile: "https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg",
  username: "User not found",
  notice: "Notice not fount",
  date: "now"
}

export default Notification;