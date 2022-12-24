import React,{useState }from "react"
import { Link } from "react-router-dom"
import Datassearch from "../../components/Datassearch"

const productItems = Datassearch


const Search = ({ CartItem }) => {
  
  const [query, setQuery] = useState("")
  const [filteredItems,setFilteredItems] = useState(productItems)
  

  const onSearch=(event) =>{
    console.log(event.target.value)
    if(event.target.value!==''){
        console.log(productItems)
      setFilteredItems( productItems.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))) 
    }
    return productItems
  }

  console.log(filteredItems,123)
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input
            type='text'
            placeholder='Search and hit enter...'
            onChange={event => onSearch(event)}
            />
            
            {
  // productItems.filter(productItems => {
  //   if (query === '') {
  //     return productItems;
  //   } else if (productItems.name.toLowerCase().includes(query.toLowerCase())) {
  //     return productItems;
  //   }
  //)
  filteredItems.map((filteredItem) => {
    
      <div className='box' key={filteredItem.id}>
        <div className='product mtop'>
          <div className='img'>
            <span className='discount'>{filteredItem.discount}% Off</span>
            <img src={filteredItem.cover} alt='' />
          </div>
          <div className='product-details'>
            <h3>{filteredItem.name}</h3>
            <div className='rate'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
            <div className='price'>
              <h4>${filteredItem.price}.00 </h4>
              {}
            </div>
          </div>
        </div>
      </div>
   
  })}



            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
          <Link to='/user Account'>
            <i className='fa fa-user icon-circle'></i> 
          </Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
