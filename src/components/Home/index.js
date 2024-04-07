import {Component} from 'react'
import Header from '../Header'
import BuildACCE from '../BuildACCE'
import Wcu from '../Wcu'
import Placements from '../Placements'
import Learn  from '../Learn'
import KickStart from '../KickStart'
import './index.css'

class Home extends Component {


    render() {


        return (
            <div className='homeContainer'>
                <Header/>
                <BuildACCE/>
                <Wcu/>
                <Placements/>
                <Learn/>
                <KickStart/>
                
                
            </div>
        )
    }
}


export default Home