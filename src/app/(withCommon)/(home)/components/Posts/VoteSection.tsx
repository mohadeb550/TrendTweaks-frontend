
'use client'

import { useVotePostMutation } from "@/redux/features/posts/postApi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { PiArrowFatDownLight, PiArrowFatUpLight ,PiArrowFatDownFill, PiArrowFatUpFill , PiArrowFatLinesUpFill, PiArrowFatLinesDownFill} from "react-icons/pi";
import { PulseLoader } from "react-spinners";
import { toast } from "sonner";

const VoteSection = ({postId, userId, votes, voters }: { postId : string, userId: string, votes: number, voters: object[]}) => {

    const [ votePost, { isLoading}] = useVotePostMutation();
    const currentUser = useAppSelector(state => state.auth.user)
    const [ givenVote, setGivenVote ] = useState<object>();

    useEffect(()=> {
       const isExistVote = voters?.find(voter => voter?.userId === currentUser?._id )

       setGivenVote(isExistVote)
    },[voters, votes, currentUser , givenVote])

    const handleVote = async (voteType : string) => {
        try {
          await votePost({ postId, userId, voteType }).unwrap();
        }
        catch (err) {
          console.error('Error voting:', err);
        }
      };
     

    return (
        <div className={`flex items-center gap-2 bg-gray-200/50 rounded-full px-3 py-1 relative`}>

          {/* loading  */}
          {isLoading && <div className="w-full h-full bg-gray-100 absolute inset-0 rounded-full flex items-center justify-center">
            <PulseLoader
           color='#B1B4B9'
           size={5}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
            
            </div>}

        {givenVote?.voteType === 'upvote'?<button onClick={() => handleVote('upvote')}><PiArrowFatLinesUpFill className={`text-gray-800 hover:text-green-600 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'upvote' && 'text-green-600'} `} /></button>  :
        
        <button onClick={() => handleVote('upvote')}><PiArrowFatUpLight className={`text-gray-800 hover:text-green-600 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'upvote' && 'text-green-600'} `} /></button>}

        <span className="font-semibold text-gray-600">{votes}</span>

        <button onClick={() => handleVote('downvote')}>

          {givenVote?.voteType === 'downvote'? <PiArrowFatLinesDownFill className={`text-gray-800 hover:text-red-500 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'downvote' && 'text-red-500'}`} /> : 
          
          <PiArrowFatDownLight className={`text-gray-800 hover:text-red-500 cursor-pointer hover:scale-110 transition-transform text-xl  ${givenVote?.voteType === 'downvote' && 'text-red-500'}`} />}

          </button>
      </div>
    );

};


export default VoteSection;