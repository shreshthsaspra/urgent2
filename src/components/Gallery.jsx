import React from 'react'
import {Slide} from "react-reveal"

const Gallery = () => {
 
    const array=[{
        key:1,
        title:"施工実績",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://en.pimg.jp/062/850/570/1/62850570.jpg",
        link:"/施工実績"
    },{
        key:2,
        title:"会社案内",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://en.pimg.jp/069/255/171/1/69255171.jpg",
        link:"/会社案内"
    },{
        key:3,
        title:"お問い合わせ",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        link:"/お問い合わせ",
        imgUrl:"https://en.pimg.jp/073/164/745/1/73164745.jpg"
    },{
        key:4,
        title:"",
        link:"",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum quisquam quia rerum explicabo accusantium quas ea nesciunt fuga error, iusto delectus dolores similique dignissimos ab ad aperiam esse harum!",
        imgUrl:"https://en.pimg.jp/078/776/816/1/78776816.jpg"
    }]
  

    return (
        <div className="galleryContainer">

            <div className="gallery">
              {array.map((item,key)=>{
                 return(
                     <Slide up>
                        <div className="galleryItem" key={key}
                        onClick={()=>window.location.href=item.link}
                        style={{cursor:"pointer"}}>
                            <img src={item.imgUrl} key="GALLERY IMAGE"/>
                            <div className="text">
                                <div>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        </div>
                     </Slide>
                 )
              })}
            </div>

        </div>
    )
}

export default Gallery
