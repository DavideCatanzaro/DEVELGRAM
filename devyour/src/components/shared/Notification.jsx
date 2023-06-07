import CommentYourPost from "../atoms/CommentYourPost";
import LikeYourComment from "../atoms/LikeYourComment";
import LikeYourPost from "../atoms/LikeYourPost";
import RepliedComment from "../atoms/RepliedComment";
import StartFollow from "../atoms/StartFollow";
import UnfollowU from "../atoms/UnfollowU";

function Notification(){
    return(
        <>
        <div className="inset-0 mx-auto my-10 max-w-lg rounded-xl border border-blue px-4 py-8 shadow-lg">
        <div className="mb-4 flex justify-between border-b pb-3">
          <p className="text-xl font-bold text-grey">Notifiche</p>
        </div>
        <div>
        <LikeYourComment/>
        <RepliedComment/>
        <LikeYourPost/>
        <CommentYourPost/>
        <StartFollow/>
        <UnfollowU/>
          
          
        </div>
      </div>
        </>

    )

}

export default Notification;