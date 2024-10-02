import { useGetPostsQuery } from "@/redux/features/posts/postApi";
import PostCard from "../../(home)/components/Posts/PostCard";
import PostSkeleton from "../../(home)/components/Posts/PostSkeleton";
import { TPost } from "../../(home)/components/CreatePost/CreatePostModal";


const MyPosts = ({userEmail} : { userEmail : string}) => {
    const { data , isFetching } = useGetPostsQuery({ userEmail});
    const posts : TPost[] = data?.data || [];

    return (
          <>
           {/* Grid section  */}
           <div className="grid grid-cols-1 gap-7  mb-8 ">
           {posts?.map(post => <PostCard key={post._id} post={post} /> )}

           {/* Card placeholder  */}
           {isFetching && [1, 2, 3, 4].map((num) => <PostSkeleton key={num} /> )}
       </div> 

         {/* no posts direction  */}
       { (!posts || !posts.length) && <p className="text-lg mt-4 text-gray-500 text-center">No Posts</p>}</>

    );
};

export default MyPosts;