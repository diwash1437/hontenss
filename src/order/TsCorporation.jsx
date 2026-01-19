import { useState } from "react";
import { tsCorporation } from "../data/tsCorporation";
import './tsCorporation.css';
import { Link } from "react-router-dom";
export function TsCorporation()
{

//     const kobeSirloin = tsCorporation.filter(item =>
//   item.name.includes('神戸牛') && item.name.includes('サーロイン')
// );

    const [search,setSearch]=useState('');
// console.log(kobeSirloin);
    const filterProduct= tsCorporation.filter(product=>
        // ✅ Nullish coalescing operator null ?? '' → ''

      product.name.toLowerCase().includes(search.toLowerCase())  || (product.ename ?? '').toLowerCase().includes(search.toLowerCase())
    )


    return(
     <div>
   
        (
            <div>

              {/* <ul>
                <li>{item.name} <img src={item.image}></img></li>
              </ul> */}
              <Link to="/">Home</Link>

                <br />
              <input className="tsSearchInput" type="text" placeholder="Enter the product name" 
              value={search} 
              onChange={(e)=>setSearch(e.target.value)}
              />
              <p>{search}</p>
              <table>
                <thead>
                <tr>
                    <td>name</td>
                    <td>English name</td>
                    <td>image</td>
                </tr>
                </thead>
                <tbody>                
                
                    {filterProduct.map((item)=>{
                        return(
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.ename}</td>
             
                    <td className="imgWrapper"> {<img src={item.image} width="90" className="tsCorporation"/>}</td>
                
                     </tr>
                    )})
                    }
               
                </tbody>

              </table>

              
            </div>
           
        )
        
     </div>
    )
}