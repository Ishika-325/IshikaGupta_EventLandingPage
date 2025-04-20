export function Contact(){
    return(
        <div id="contact">
            <div className="contact">
            <h2 id="get">Get in Touch</h2>
        <p className="p">Whether you have a question, or want to give a feedback feel free to reach out.</p>
        
        <div className="arrange">


             <div  className="box"><a className="reach" target="_blank" href="#">
                <div>
                    <i className="fa-solid fa-phone"></i>
                </div>
                 <div className="detail">
                <p>Mobile</p>
                 </div>
             </a></div>

             <div  className="box"><a className="reach" target="_blank" href="#">
                <div>
                <i className="fa-solid fa-envelope"></i>
                </div>
                 <div className="detail">
                <p>Mail</p>
                 </div>
             </a></div>

             <div  className="box"><a className="reach" target="_blank" href="#">
                <div>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                 <div className="detail">
                <p>Instagram</p>
                
                 </div>
             </a></div>

             <div className="box"><a className="reach" target="_blank" href="#">
                <div>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
                 <div className="detail">
                <p>Linkedin</p>
                
                 </div>
             </a></div>



        </div>
            </div>
        </div>
    )
}