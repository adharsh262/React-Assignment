

import './index.css'




const Learn=()=>{


    return (
        <div className='LearnSection'>
                <div className="learnhead">
                    <h1>What will you Learn in ACCA?</h1>
                </div>
                <ul className='cardContainerLearn'>
                        <li className='cardLearn'>
                        <div>
                        <h3 className='headheadwerlearn'>Knowledge Level</h3>
                        <ul className='unorderedListLearn2'>
                        
                            <li className='listitemLearn'>Expericene Technologies</li>
                            <li className='listitemLearn'>Basics Concept</li>
                            <li className='listitemLearn'>Advanced Concepts</li>
                        
                        </ul>
                        </div>
                        <p className='learnfooter'>3 papers</p>
                        </li>
                        <li className='cardLearn'>
                        <div>
                        <h3 className='headheadwerlearn'>Skill Level</h3>
                        <ul className='unorderedListLearn2'>
                        
                            <li className='listitemLearn'>HTML</li>
                            <li className='listitemLearn'>Python</li>
                            <li className='listitemLearn'>CSS</li>
                            <li className='listitemLearn'>JavaScript</li>
                            <li className='listitemLearn'> REST API's</li>
                            <li className='listitemLearn'>Data Structures And Alogorithms</li>
                        
                        </ul>
                        </div>
                        <p className='learnfooter'>6 papers</p>
                        </li>
                        <li className='cardLearn'>
                        <div>
                        <h3 className='headheadwerlearn'>Professional Level</h3>
                        <ul className='unorderedListLearn2'>
                        <h3>Creativity</h3>
                            <li className='listitemLearn'>Expericene Technologies</li>
                            <li className='listitemLearn'>Basics Concept</li>
                            
                        <h3>Two Out of the Following</h3>
                            <li className='listitemLearn'>Expericene Technologies</li>
                            <li className='listitemLearn'>Basics Concept</li>
                            <li className='listitemLearn'>Advanced Concepts</li>
                            <li className='listitemLearn'>Problem Solving</li>
                        </ul>
                        </div>
                        <p className='learnfooter'>4 papers</p>
                        </li>
                </ul>
               
        </div>
    )
}

export default Learn