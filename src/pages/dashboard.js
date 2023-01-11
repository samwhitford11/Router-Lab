import { Link } from "react-router-dom";
import data from "../data.json"

const Dashboard = (props) => {
  console.log(data)
  return (
    <div className="currencies">
        {data.map((coin) => {
            const { name, symbol } = coin;
            return (
                <Link to={`/stocks/${symbol}`}>
                    <h2>{name}</h2>
                </Link>
            );
        })}
    </div>
);
};
  export default Dashboard;