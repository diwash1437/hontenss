import { useState } from "react";
import { alcohol } from "../data/fujimatsuColtd"
export function FujimatsuColtd() {
   const[search, setSearch]=useState('');

   const filterProduct=alcohol.filter(alchol=>
    alchol.enName.toLowerCase().includes(search)  || alchol.jpName.includes(search)
   )

    return (

        <div>

        <input type="text" placeholder="enter the product name"
        value={search}
        onChange={e=>setSearch(e.target.value)}
        />
        <p>{search}</p>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>English Name</th>
                        <th>category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {filterProduct.map((alcohol) => {
                        return (
                            <tr key={alcohol.id}>
                                <td>{alcohol.jpName}</td>
                                <td>{alcohol.enName}</td>
                                <td>{alcohol.category}</td>
                                <td> <img src={alcohol.image} alt="" width={100} /></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )




}