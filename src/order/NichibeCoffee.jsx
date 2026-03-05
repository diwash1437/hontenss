import {coffeeProducts} from '../data/nichibeCoffee.js';
import '../App.css';


export function NichibeCoffee() {
    return (
        <div className="order-page">
            <h1 className="order-title">日米珈琲(株) Nichibe Coffee</h1>
            <div className="product-list">  

            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name (JP)</th>
                        <th>Unit</th>
                        <th>Name (EN)</th>
                        <th>Category</th>
                        <th>Image</th>   
                    </tr>
                </thead>
                <tbody>
               {coffeeProducts.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.unit}</td>
                        <td>{product.english}</td>
                        <td>{product.category}</td>
                        <td className='product-image'>{product.image ? <img src={product.image} alt={product.name} width="50" /> : "No Image"}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        
            </div>
        </div>
    );
}