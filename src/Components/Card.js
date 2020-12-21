import React from 'react';


const Card=({id,name,email})=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw 2 shadow-5'>
            
            <div>
                <img alt="" src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default Card;