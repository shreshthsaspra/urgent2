import React from 'react'

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="head">
                 <h1>お問い合わせ</h1>
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut.</p> */}
            <div className="contact"> 
                 <div>
                     <div>
                         <p>お名前</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>
                 <div>
                     <div>
                         <p>フリガナ</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>
                 <div>
                     <div>
                         <p>メールアドレス（半角）</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div>             
                <div>
                     <div>
                         <p>お電話番号（半角）</p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                </div>
                {/* <div>
                     <div>
                         <p></p>
                         <span>*</span>
                     </div>
                     <input type="text" required/>
                 </div> */}
                 <div>
                     <div>
                         <p>お問い合わせ内容</p>
                         <span>*</span>
                     </div>
                     <textarea type="text" rows="10" required>
                    </textarea>
                </div>
                
                <div className="gradientLine" style={{marginTop:"4rem "}}>

                </div>
                <div className="checkBoxContainer">
                     <p>​​【個人情報の取扱いについて】
                        *本フォームからお客様が記入登録された個人情報は、ご返答のためのメール送信電話連絡以外の目的で利用保管し、第三者に開示提供することはありません。
                        本フォームでのお客様の個人情報はSSL暗号化により保護されます。ロ個人情報の取扱いに同意する。
                        /</p>
                     <div>
                        <input type="checkbox" id="scales" name="scales"/>
                        <label for="scales">Lorem ipsum dolor sit amet.</label>
                     </div>
                </div>
                <center>
                  <button  className="std-button-fill" style={{padding:"0.75rem 3rem",  color:"white",borderRadius:"2rem",fontWeight:"bold"}}>送信内容を確認する</button>
                </center>
            </div>
        </div>
    )
}

export default Contact
