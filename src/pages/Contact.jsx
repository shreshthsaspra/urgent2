import React from 'react'

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="head">
                 <h1>Lorem, ipsum dolor.</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut.</p>
            <div className="contact"> 
                 <div>
                     <div>
                         <p>Lorem, ipsum.</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>
                 <div>
                     <div>
                         <p>Lorem, ipsum.</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>
                 <div>
                     <div>
                         <p>Lorem, ipsum.</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>             
                <div>
                     <div>
                         <p>Lorem, ipsum.</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                </div>
                <div>
                     <div>
                         <p>Lorem, ipsum.</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>
                 <div>
                     <div>
                         <p>Lorem, ipsum.</p>
                         <span>*</span>
                     </div>
                     <textarea type="text" rows="10" required>
                    </textarea>
                </div>
                
                <div className="gradientLine" style={{marginTop:"4rem "}}>

                </div>
                <div className="checkBoxContainer">
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae?</p> 
                     <p>Lorem ipsum dolor sit amet.</p>
                     <div>
                        <input type="checkbox" id="scales" name="scales"/>
                        <label for="scales">Lorem ipsum dolor sit amet.</label>
                     </div>
                </div>
                <button  className="std-button-fill">Contact</button>
            </div>
        </div>
    )
}

export default Contact
