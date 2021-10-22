import React from 'react'

const Gallery = () => {
 
    const array=[{
        key:1,
        title:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://images.pexels.com/photos/9665619/pexels-photo-9665619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
        key:2,
        title:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://images.pexels.com/photos/9665619/pexels-photo-9665619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
        key:3,
        title:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://images.pexels.com/photos/9665619/pexels-photo-9665619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
        key:4,
        title:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://images.pexels.com/photos/9665619/pexels-photo-9665619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }]
  

    return (
        <div className="galleryContainer">

            <div className="gallery">
              {array.map((item,key)=>{
                 return(
                     <div className="galleryItem" key={key}>
                           <img src={item.imgUrl} key="GALLERY IMAGE"/>
                           <div className="text">
                               <div>
                                <h1>{item.title}</h1>
                                <p>{item.description.slice(0,20)+"......"}</p>
                               </div>
                           </div>
                     </div>
                 )
              })}
            </div>

        </div>
    )
}

export default Gallery
