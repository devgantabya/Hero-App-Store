import { Link } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";


const TrendingApp = ({ singleApp }) => {
    // console.log(TrendingApp);

    const { image, downloads, ratingAvg, id, title } = singleApp;





    return (
        <div>
            <Link to={`/appDetails/${id}`}>
                <div className="shadow-lg p-4 rounded bg-white space-y-5">
                    <figure className="px-20 py-10 bg-base-300 rounded-lg">
                        <img
                            src={image}
                            alt={title}
                            className="h-[150px] w-[100px] object-cover"
                        />
                    </figure>
                    <div className="space-y-4">
                        <h2 className="text-xl font-medium text-[#001931]">
                            {title}
                        </h2>
                        <div className="flex justify-between items-center">
                            <div className="text-[#00D390] text-base font-medium bg-[#F1F5E8] rounded px-2 flex items-center gap-2"><FiDownload />
                                <span>{downloads}</span></div>

                            <div className="text-[#FF8811] text-base font-medium bg-[#FFF0E1] rounded px-2 flex items-center gap-2"><FaStar />
                                <span>{ratingAvg}</span></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TrendingApp;