import React, { useEffect, useState } from 'react';

export default function ListData(){
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    const render = ()=>{
        items.map((items, i)=>{
            <li key={i}>{items}</li>
        })
    }

    
    return(
        <div>
            {items && 
                items.map((item)=>{
                    <div>
                        <h3>Item # {item}</h3>
                    </div>
                })}
            
        </div>
    )
}