import React from 'react'

const One = () => {


    const array=[{
        key:1,
        title:"テキスト",
        url:"https://en.pimg.jp/065/025/397/1/65025397.jpg"
    },{
        key:2,
        title:"テキスト",
        url:"https://en.pimg.jp/024/787/403/1/24787403.jpg"
    },{
        key:3,
        title:"テキスト",
        url:"https://en.pimg.jp/024/787/191/1/24787191.jpg"
    },{
        key:4,
        title:"テキスト",
        url:"https://en.pimg.jp/065/025/398/1/65025398.jpg"
    }]
     
    return (
        <div className="specificContainer">
                <div className="head">
                <h1>施工実績</h1>
                </div>
                <div className="body">
                    <p>テキスト</p>
                </div>
                 <div className="gridGallery">
                      {
                          array.map((item,key)=>{
                              return (
                                  <div key={key}>
                                      <img src={item.url}  alt="image"/>
                                      <p>{item.title}</p>
                                  </div>
                              )
                          })
                      }
                </div>                 
        </div>
    )
}

export default One
