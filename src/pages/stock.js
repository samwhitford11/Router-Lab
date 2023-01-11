import data from "../data.json"
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Stock = (props) => {
  return <h1>Stocks Page</h1>;
};

// function Stock () {
//   const [stock, setStock] = useState ({name: {}});

//   const params = useParams();

//   const fetchDetails = () => {
//     fetch(`data${id}`)
//     .then(res = res.json())
//     .then (data => setStock(data))
//   };

//   useEffect(() => {
//     fetchStocks();
//   }, []);
// }

// const Stock = (props) => {
//   console.log (useParams(), data)
// // const coin is going to be equal to the element that we get from data using useParams
//   return (
//       <div>
//           {/* <h1>
//               {coin.asset_id_base}/{coin.asset_id_quote}
//           </h1>
//           <h2>{coin.rate}</h2> */}
//       </div>
//   )
// }

  
  export default Stock;