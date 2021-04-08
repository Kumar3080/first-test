import React, { useState } from 'react' 
import test from "./test"

const styles = {
  container: {display:'flex', justifyContent:'space-between', backgroundColor:'#282c34', color:'white', minHeight:'100vw', padding:'5%'},
  filterContainer: {display:'flex', flexDirection:'column', width:'20%', padding:'2%', margin:'2%', backgroundColor: '#49515f', height:'60vw'},
  displayContainer: {
    display:'flex',
    flexWrap:'wrap',
    width:'80%',
    margin:'2%',
    alignContent:'baseline'
  },
  chocolate: {
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'space-between', 
    backgroundColor:'#49515f', 
    padding:'2%', 
    margin:'1%', 
    border:'1px solid black', 
    height:'300px', 
    width:'300px'
  },
  chocolateInfo:{display:'flex', justifyContent:'space-between'}
}
function App() {


// const [brand, setBrand] = useState("");


const renderBrand = () => {

  const arr = [];
   const allBrands = test.map(obj=>obj.brand);
   const brands = [...new Set(allBrands)];
    console.log(brands);
    allBrands.map(ele=>{
        if(!arr.includes(ele)){
          arr.push(ele)
        }
    })
   return brands.map(brand => <span><input type="checkbox" value={brand} />{brand} </span>)
  //return allBrands.map(brand => 

}
const renderChocolates = () => {
  return test.map(chocolate=>
    <div style={styles.chocolate}>
    <img src={chocolate.imageUrl} />
    <span style={styles.chocolateInfo}>
      <span>INR {chocolate.price}</span>
      <span>{chocolate.name}</span>
    </span>
  </div>  
  )
}
  return (
    <div style={styles.container}>
      <div style={styles.filterContainer}>
            <h3>FILTERS</h3>
            <label style={{padding: '5%', color:'wheat'}}>Brand:</label>{renderBrand()} 
         

            <label style={{padding: '5%', color:'wheat'}}>Category:</label>
            <span><input type="checkbox" value="xyz" />{test[1].category}</span>
            <span><input type="checkbox" value="xyz" />ABC</span>
            <span><input type="checkbox" value="xyz" />JKL</span>
            <span><input type="checkbox" value="xyz" />MNO</span>
            <label style={{padding: '5%', color:'wheat'}}>Price:</label>
            <span><input type="checkbox" value="xyz" />0-20</span>
            <span><input type="checkbox" value="xyz" />20-50</span>
            <span><input type="checkbox" value="xyz" />50-100</span>
            <span><input type="checkbox" value="xyz" />100-200</span>
            <span><input type="checkbox" value="xyz" />200+</span>
      </div>
      <div style={styles.displayContainer}>
        {renderChocolates()}        
      </div>
    </div>
  );
}

export default App;
