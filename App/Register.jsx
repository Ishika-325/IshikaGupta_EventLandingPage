export function Register() {
    return(
        <div id='register'>
            <div className='register'>
               
                <form className='form'>
                   < h1 className='mention'>📝Register Here</h1>
                    <label>Your Name : 
                        <br></br>
                        <input type="text" name='name' placeholder='Full name'></input>
                    </label>
                    <br></br>
                    <label>Email : 
                        <br></br>
                        <input type="email" name='mail' placeholder='abc@gmail.com'></input>
                    </label>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
            <hr className="boundary"></hr>
        </div>
    )
}