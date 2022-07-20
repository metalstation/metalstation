import React, { useState } from 'react'
import Context from './Context'

import { GetWishList } from '../urls';
import { useEffect } from 'react';

import { AddToWishlistUrl , RemoveFromWishlistUrl} from '../urls';
export default function GlobalState({ children }) {
    const [user, setuser] = useState({
        email: '',
        name: '',
        phone: ''
    });
    // wishlist 
    const [wishlist, setWishlist] = useState([]);
    // cart 
    const [cart, setCart] = useState([]);

    const fetchWishlist = async () => {
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetWishList, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        console.log('Wishlist : ', data);
        if (data.success) {
            // console.log(data.products);
            setWishlist(data.products);
        }
    }
    const fetchCart = async () => {
        return
        // cart backend yet to be done 
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetWishList, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        // let {resp} = await axios.post(UserLogin , input)
        const data = await res.json();
        console.log('ca : ', data);
        console.log(data);
        if (data.success) {
            console.log(data.products);
            setCart(data.products);
        }
    }

    const fetchUserData = async () => {
        fetchWishlist();
        fetchCart();
    }
    useEffect(() => {
        fetchUserData();
    }, [])


    // some functions 
    // remove from wishlist 
    const removeFromWishlist = async (id)=>{
        let authToken = localStorage.getItem('authToken'); 
        if(!authToken){
            router.push('/'); 
            return; 
        }
        let res = await fetch(RemoveFromWishlistUrl,{
            method:'DELETE',
            headers : {
            'Content-Type':'application/json',
            'authToken':authToken
            },
            body : JSON.stringify({
            productid:id  
            })
        })
        let data = await res.json(); 
        if(data.success){
        // remove item from the frontend 
        console.log(id);
        let newList = wishlist.filter((item)=>item._id != id);
        setWishlist(newList); 
        }
    }
    // add to wishlist 
    const addToWishlist = async (id , product)=>{
        console.log('addToWishList')
        let authToken = localStorage.getItem('authToken'); 
        if(!authToken){
            router.push('/'); 
            return; 
        }
        let res = await fetch(AddToWishlistUrl,{
            method:'POST',
            headers : {
            'Content-Type':'application/json',
            'authToken':authToken
            },
            body : JSON.stringify({
            productid:id  
            })
        })
        let data = await res.json(); 
        if(data.success){
            // Add item to the frontend 
            setWishlist([...wishlist , product])
        }
    }
    // Add to cart 
    const addToCart = async (id , product) => {
        let authToken = localStorage.getItem('authToken'); 
        if(!authToken){
            router.push('/'); 
            return; 
        }
        // let res = await fetch('add to cart url',{
        //     method:'POST',
        //     headers : {
        //       'Content-Type':'application/json',
        //       'authToken':authToken
        //     },
        //     body : JSON.stringify({
        //       productid:id  
        //     })
        // })
        // let data = await res.json(); 
        // if(data.success){
            // add item to the card in frontend 
            
            setCart({...cart , product}); 
        // }
        console.log('Added to Cart',cart); 
    }

    // remove from cart 
  const removeFromCart = async (id)=>{
    let authToken = localStorage.getItem('authToken'); 
    if(!authToken){
        router.push('/'); 
        return; 
    }
    // let res = await fetch('remove from cart url',{
    //     method:'DELETE',
    //     headers : {
    //       'Content-Type':'application/json',
    //       'authToken':authToken
    //     },
    //     body : JSON.stringify({
    //       productid:id  
    //     })
    // })
    // let data = await res.json(); 
    // if(data.success){
      // remove item from the frontend 
      console.log(id);
      let newList = cart.filter((item)=>item._id != id);
      setCart(newList); 
    // }
  }
    return (
        <Context.Provider value={{ user, setuser, wishlist, setWishlist, cart, setCart, fetchUserData ,removeFromCart ,  addToCart , removeFromWishlist, addToWishlist}}>
            {children}
        </Context.Provider>
    )
}
