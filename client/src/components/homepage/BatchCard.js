import { Link } from "react-router-dom";

function BatchCard({ props }) {
  return (
    <div className="p-5 shadow-2xl rounded-xl bg-yellow-300 hover:scale-[1.03] duration-300">
      <div className="w-full md:h-[200px] lg:h-[150px] xl:h-[200px] 2xl:h-[250px] bg-red-200 rounded-xl overflow-hidden">
        <img src={props.source} alt="" />
      </div>
      <div className="py-2 text-lg font-bold">{props.name}</div>
      <div className="text-md">{props.class}</div>
      {/* <div className="text-md">{props.duration}</div> */}
      <div className="text-md">Target Year - {props.target}</div>
      <Link to={`${props.link}`}>
        <div className="px-2 py-2 mt-4 bg-red-600 hover:bg-red-700 text-white w-[120px] rounded-lg cursor-pointer">
          Explore More
        </div>
      </Link>
    </div>
  );
}
export default BatchCard;
