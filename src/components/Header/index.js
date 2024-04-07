import {Component} from 'react'

import './index.css';

class Home extends Component {



    render() {



        return(
            
                <nav className='nav-bgContainer'>
                    
                        <div className='navBar'>
                            <img src="https://www.freeiconspng.com/uploads/burger-fast-food-food-hamburger-icon--icons--pinterest-4.png" alt="imgBurger" className='hamburgerIcon'/>
                        <h1>IndigoLearn</h1>
                        </div>
                        <ul className='unorderedHeardwer'>
                            <li className='headerList'>About</li>
                            <li className='headerList'>Learn More</li>
                            <li className='headerList'>Request Call</li>
                            <li className='headerList'>Contact</li>
                        </ul>
                    <button className='oneWhoLogin' type="button">
                            <img src="https://www.freeiconspng.com/uploads/register-secure-security-user-login-icon--7.png" alt="Login" className='LoginImage'/>
                            <p>Login OR Sign-Up</p>
                    </button>
                </nav>
            
        )
    }
}


export default Home