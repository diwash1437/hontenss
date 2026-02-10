import { products } from "../data/yoshimuraTakeshiCoLtd"

export function Yoshimuratakeshi()
{
    return(
        
// パフォーミー　2Ｌ　パウチ　希釈タイプ 
        <div>
            <title>(株)吉村武</title>
            <table>
                <thead>
                    <tr>
                        <th>Japanese name</th>
                        <th>English name</th>
                        <th> category</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                        return(
                    <tr>
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