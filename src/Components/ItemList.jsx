// <<<<<<< HEAD
// import React, { useContext } from "react";
import { useContext } from "react";
import "./Footer.css";
import AuthContext from "./Store/Auth-Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemList = (props) => {
  const ctx = useContext(AuthContext);
  const addToCartHandler = (e) => {
    ctx.onCartData(props.props);

    // console.log(props)
    // props.onCartData(props.props)
  };
  // console.log(props.props.title);

  const params=useParams()
  // console.log(params.productId,'this is param id in itemlist')
    console.log(props.props.key,'this is key in itemlist');
    // console.log('checking itemlist')
 

  return (
    <>
      <div className="grid-rows-2 ani">
        <div className="mt-3   ml-12 w-auto   ">
          <h1 className="ml-12 m-auto  text-[20px]">{props.props.title}</h1>
          <Link to={`/products/${props.props.id}`}>
        
          <div className="h-80  w-80">
          {console.log(props.props.id,'this is id itemlist')}
            <img className=" hover:scale-110 transition duration-500 cursor-pointer object-cover" src={props.props.imageUrl} alt="" />
          </div>
          </Link>
          <div className=" flex justify-between w-[19rem] mt-2">
            <p className=" text-[20px] font-bold">${props.props.price}</p>

            <button
              onClick={addToCartHandler}
              className="bg-sky-500 text-white text-[14px] rounded-sm pr-1 pl-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
