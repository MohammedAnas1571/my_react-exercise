import React, { useState } from 'react'
import PhoneData from './Products.data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Products = () => {
    const [item,setItem]=useState(PhoneData)
    const decrement =(id)=>{
       const value =  item.map((item)=>{
            return (item.id===id && item.qty>1 ?{...item, qty:item.qty-=1}:item
            
            
         ) }
         )
         setItem(value);
    }
    const increment =(id)=>{
        const value =  item.map((item)=>{
             return (item.id===id?{...item, qty:item.qty+=1}:item
             
             
          ) }
          )
          setItem(value);
     }
 

  return (
    <div>
        <h1 className='bg-info text-white'>Products</h1>
     {item.map((item)=>{
        return(
            <div  className='d-inline-flex m-2'>
 <Card className="shadow p-3 mb-2 bg-body-tertiary rounded" key={item.id} style={{ width: '12rem'}}
>
<Card.Img  style={{ height: '15rem' }} variant="top" src={require(`./Saved Pictures/${item.image}.jpg`)} />
 <Card.Body>
   <Card.Title className='text-success'>{item.model}</Card.Title>
   <Card.Text>
{item.description}
   </Card.Text>
   <h3>₹{item.price} </h3>
   <p>
       
         <Button onClick={()=>{decrement(item.id)}} className='m-1' >-</Button>{item.qty}
         <Button onClick={()=>{increment(item.id)}} className='m-1' >+</Button>
   </p>
   <Button variant="primary">Add to cart</Button>
 </Card.Body>
</Card>
</div>
        )})}
    
   
  

    </div>
  )
}

export default Products