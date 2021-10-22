import React from 'react'

const One = () => {


    const array=[{
        key:1,
        title:"Lorem ipsum dolor sit amet",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil, quo dolorum beatae sed itaque praesentium quibusdam! Aut, repellendus tempora!",
        url:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
        key:2,
        title:"Lorem ipsum dolor sit amet",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil, quo dolorum beatae sed itaque praesentium quibusdam! Aut, repellendus tempora!",
        url:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
        key:3,
        title:"Lorem ipsum dolor sit amet",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil, quo dolorum beatae sed itaque praesentium quibusdam! Aut, repellendus tempora!",
        url:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
        key:4,
        title:"Lorem ipsum dolor sit amet",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil, quo dolorum beatae sed itaque praesentium quibusdam! Aut, repellendus tempora!",
        url:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }]
     
    return (
        <div className="particularContainer">
            <div className='head'>
                <h1>Lorem, ipsum.
                </h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nihil, quo dolorum beatae sed itaque praesentium quibusdam! Aut, repellendus tempora!\</p>
            <div className="list">
                 {
                     array.map((item,key)=>{
                         return(
                            <div className="listItem">
                                <img src={item.url} alt={"LIST ITEM IMAGE"+key}/>
                                <div>
                                     <h2>{item.title}</h2>
                                     <p>{item.description}</p>
                                </div>
                            </div>
                         )
                     })
                 }
            </div>
        </div>
    )
}

export default One
