

import './index.css'



const KickStart=()=>{



    return (
        <div className='kickStartSection'>
            <div className="secKickStart1">
            <h1> Kick off your ACCA Prep journey with IndigoLearn</h1>
            <p className="paraKick">Sign-in and get instant access to our FREE Courses.</p>
            <button type="button" className='downloadBtn nextBtnEl'>Book Demo <span className='spanBuildEl'> . Live</span></button>
            </div>
            <div className='formEL'>
                        <h1 className='heradFormEL'>Aspiring to be an ACCA ? Get in touch with us!</h1>
                        <input type='text' placeholder='Name' className='inputEl'/>
                        <input type='text' placeholder='Email'className='inputEl'/>
                        <input type='text' placeholder='Phone +91' className='inputEl'/>
                        <select className='inputEl'>
                            <option value="b.Tech">B.Tech</option>
                            <option value='degree'>Degree</option>
                        </select>
                        <button type="button" className='downloadBtn'>Request Call Back</button>
                </div>
        </div>
    )
}


export default KickStart