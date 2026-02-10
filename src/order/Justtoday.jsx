import { useState } from "react";
import { Link } from "react-router-dom";
import { drinksList } from "../data/todayreport";

export function Justtoday() {
   const[search, setSearch]=useState('');

   const filterProduct=drinksList.filter(alchol=>
    alchol.en.toLowerCase().includes(search)  || alchol.jp.includes(search)
   )

    return (

        <div>
        <title>just today</title>
        <Link to="/">Home</Link>

        <input type="text" placeholder="enter the product name"
        value={search}
        onChange={e=>setSearch(e.target.value)}
        />
        <p>{search}</p>

            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>English Name</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>
                    {filterProduct.map((alcohol) => {
                        return (
                            <tr key={alcohol.sn}>
                                <td>{alcohol.sn}</td>
                                <td>{alcohol.jp}</td>
                                <td>{alcohol.en}</td>
                                <td>{<img src={alcohol.image} width={200}></img>}</td>
                    
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )




}