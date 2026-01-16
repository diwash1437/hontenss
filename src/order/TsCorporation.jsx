import { tsCorporation } from "../data/tsCorporation";

export function TsCorporation()
{
    return(
     <div>
   
        (
            <div>

              {/* <ul>
                <li>{item.name} <img src={item.image}></img></li>
              </ul> */}
              <table>
                <thead>
                <tr>
                    <td>name</td>
                    <td>image</td>
                </tr>
                </thead>
                <tbody>                
                
                    {tsCorporation.map((item)=>{
                        return(
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td> {<img src={item.image}></img>}</td>
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