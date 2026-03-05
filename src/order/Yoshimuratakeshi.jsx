import { products } from "../data/yoshimuraTakeshiCoLtd";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Yoshimuratakeshi()
{
   
        const [isChecked, setIsChecked] = useState([]);
        function handleCheckboxChange(productName)
        {
         if(isChecked.includes(productName))
        {         setIsChecked(isChecked.filter(name=>name !== productName))

        }
        else{
            setIsChecked([...isChecked, productName])
        }
        }


    return(
        

        
        <div>
            <title>(株)吉村武 Yoshimuratakeshi</title>
              <Link to="/">Home</Link>
                <br/><br/>
                <div>{isChecked.join(", ")}</div>
            <table>
                <thead>
                    <tr>
                        <th>S no</th>
                        <th>Japanese name</th>
                        <th>English name</th>
                        <th> category</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                        return(
                    <tr key={product.id}>
                        <td><input type="checkbox"  
                        name="product"
                        checked={isChecked.includes(product.name)}
                        onChange={()=>handleCheckboxChange(product.name)}
                         />
                         </td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.englishName}</td>
                        <td>{product.category}</td>
                        <td>{<img src={product.image} width={150}/>}</td>
                    </tr>
                    )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}