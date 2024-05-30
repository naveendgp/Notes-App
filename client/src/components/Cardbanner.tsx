
import { FC } from "react"
import  batman from '../assets/batman.jpg'
import Cards from "./cards"

const CardBanner:FC = () => {

    return (
    <div>
      <div className='getNotes'>
        <h2>Get Notes Now</h2>
        <div className='notes-content'>
            <div className="notes-img">
                <img src={batman} alt=""/>
            </div>
            <div className="ai-notes">
              <div className="ai-con">
                <h3>AIML Notes</h3>
                <p>Get all your Notes for AIML in one place </p>
              </div>
              <div className="cards">
                <Cards/>
                <Cards/>
                <Cards/>

              </div>
            </div>
        </div>
      </div>
    </div>

    )
}

export default CardBanner