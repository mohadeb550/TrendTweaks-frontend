import { ClipLoader } from "react-spinners";


const loading = () => {
    return (
        <div className="w-screen h-screen bg-red-400 ">
            <ClipLoader
           color='#ffffff'
           loading={true}
          className=""
           size={25}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
        </div>
    );
};

export default loading;