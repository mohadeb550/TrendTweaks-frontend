
'use client'

import LoginModal from "@/components/Ui/LoginModal";
import { useVotePostMutation } from "@/redux/features/posts/postApi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { PiArrowFatDownLight, PiArrowFatUpLight , PiArrowFatLinesUpFill, PiArrowFatLinesDownFill} from "react-icons/pi";
import { PulseLoader } from "react-spinners";

const VoteSection = ({postId, userId, votes, voters }: { postId : string, userId: string, votes: number, voters: { userId: string, voteType : string }[]}) => {

    const [ votePost, { isLoading}] = useVotePostMutation();
    const currentUser = useAppSelector(state => state.auth.user)
    const [ givenVote, setGivenVote ] = useState<{ voteType : string, userId : string}>();
    const [ loginModal , setLoginModal ]  = useState<boolean>(false)

    
    useEffect(()=> {
       const isExistVote = voters?.find(voter => voter?.userId === currentUser?._id )

       setGivenVote(isExistVote)
    },[voters, votes, currentUser , givenVote])



    const handleVote = async (voteType : string) => {
      if(!currentUser){
        return setLoginModal(true)
      }

        try {
          await votePost({ postId, userId, voteType }).unwrap();
        }
        catch (err) {
          console.error('Error voting:', err);
        }
      };
     

    return (
      <section>

        {loginModal && <LoginModal open={loginModal} setOpen={setLoginModal} />}

          <div className={`flex items-center gap-2 bg-gray-200/50 dark:bg-gray-900 rounded-full px-3 py-1 relative`}>



    {/* loading  */}
    {isLoading && <div className="w-full h-full bg-gray-100 dark:bg-gray-900 absolute inset-0 rounded-full flex items-center justify-center">
      <PulseLoader
     color='#B1B4B9'
     size={5}
     aria-label="Loading Spinner"
     speedMultiplier={0.8} />
      
      </div>}

  {givenVote?.voteType === 'upvote'?<button onClick={() => handleVote('upvote')}><PiArrowFatLinesUpFill className={`text-gray-800 hover:text-green-600 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'upvote' && 'text-green-600'} `} /></button>  :
  
  <button onClick={() => handleVote('upvote')}><PiArrowFatUpLight className={`text-gray-800 dark:text-gray-400  hover:text-green-600 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'upvote' && 'text-green-600'} `} /></button>}

  <span className="font-semibold text-gray-600 dark:text-gray-400">{votes}</span>

  <button onClick={() => handleVote('downvote')}>

    {givenVote?.voteType === 'downvote'? <PiArrowFatLinesDownFill className={`text-gray-800  hover:text-red-500 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'downvote' && 'text-red-500'}`} /> : 
    
    <PiArrowFatDownLight className={`text-gray-800 dark:text-gray-400 hover:text-red-500 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'downvote' && 'text-red-500'}`} />}

    </button>
</div>
      </section>
    );

};


export default VoteSection;