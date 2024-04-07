
import './index.css';

const BuildACCE=()=>{


    return(
        <div className='becomeaccaSection'>
                <div className='buildsec1'>
                <h1>Become ACCA in 18 months</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                <ul className='unorderedListBuild'>
                    <li className='listItemBuild'>
                        <div className='imgBuildContainer'>
                        <img className='bookIcon' src="https://i.pinimg.com/736x/e5/d5/c4/e5d5c4b5acb462a4080d3bf6f5f11652.jpg" alt="imgIcon"/>
                        <p className='parabuildlistItem'>Able to complete</p>
                        </div>
                        <h3 className='headdescription'>In Just 18 Months</h3>

                    </li>
                    <li className='listItemBuild'>
                        <div className='imgBuildContainer'>
                        <img className='bookIcon' src="https://www.freeiconspng.com/uploads/globe-icon-clip-art-at-clker-com-vector-clip-art-online-royalty--26.png" alt="imgIcon"/>
                        <p className='parabuildlistItem'>180+ countries</p>
                        </div>
                        <h3 className='headdescription'>200,000 members</h3>

                    </li>
                    <li className='listItemBuild'>
                        <div className='imgBuildContainer'>
                        <img className='bookIcon' src="https://www.freeiconspng.com/uploads/business-male-team-vector-icon--people-icons--icons-download-12.png" alt="imgIcon"/>
                        <p className='parabuildlistItem'>ACCA Organization</p>
                        </div>
                        <h3 className='headdescription'>15 lakhs annually</h3>

                    </li>
                    <li className='listItemBuild'>
                        <div className='imgBuildContainer'>
                        <img className='bookIcon' src="https://www.freeiconspng.
com/uploads/community-icon-6.png"  alt="imgCont" />
                        <p className='parabuildlistItem'>Large Community</p>
                        </div>
                        <h3 className='headdescription'>Many in Contact</h3>

                    </li>
                </ul>
                <div className='btnBuildContainer'>
                <button type="button" className='downloadBtn'>Download Broucher</button>
                <button type="button" className='downloadBtn nextBtnEl'>Book Demo <span className='spanBuildEl'> . Live</span></button>
                </div>
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

export default BuildACCE