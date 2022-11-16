import "./css/Card.css"

function BasicExample() {
  return (
<div>
    <div class='wrapper' >
        <div class='product-img'>
          <img 
         src="http://bit.ly/2tMBBTd" height={420} width={327} ></img>
        </div>
    
    <div class='product-info'>
        <div class='product-text'>
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p><span>hot product of week</span></p>
        </div>
        <div class="product-price-btn">
        <p><span>78</span>$</p>
         <button type="button">buy now</button>
       </div>
       </div>
    </div>
</div>  
  );
}

export default BasicExample;