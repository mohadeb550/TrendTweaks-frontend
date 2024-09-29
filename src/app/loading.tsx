import { ClipLoader } from "react-spinners";


const loading = () => {
    return (
        <div className="w-screen h-screen bg-white/500 flex justify-center items-center">
            <ClipLoader
           color='#3B82F6'
           loading={true}
          className=""
           size={50}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
        </div>
    );
};

export default loading;