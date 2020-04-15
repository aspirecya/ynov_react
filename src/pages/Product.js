import React, {useState,useEffect} from 'react';

const Product = (props) => {

    const [title, setTitle] = useState("mon titre");

    // useEffect(() => {
    //     setTitle("Mon titre après généraion du composant");    
    // })

    const changeTitle = () => {
        setTitle("mon nouveau titre")
    }

    console.log(props.match.params.productId);

    return (
        <div className="product__card">
            <p>{title}</p>
            <button onClick={changeTitle}>Changer mon titre</button>
        </div>
    );
}

export default Product;
