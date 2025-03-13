import CatagoryList from "./components/CatagoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h3 className=" ">Featured Product</h3>
          <ProductList/>
      </div> 
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h3 className=" ">Catagories</h3>
          <CatagoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h3 className=" ">New Products </h3>
          <ProductList/>
      </div>
    </div>
  )
}

export default HomePage