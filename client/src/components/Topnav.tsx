import { FC,useState } from "react";
import '../components/comp.css'



const TopNav:FC = () => {

    const [changeColor,setColor] = useState<boolean>(false)


    const changeScroll = () => {

        if(window.scrollY >= 80){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll',changeScroll)
    

    return(
        <section>
            <div className={changeColor ? 'Topnav changeColor':'Topnav'}>
                <h2 className="logo">Notes Hub</h2>
                <ul className="elements">
                    <li className="active">Home</li>
                    <li>Notes</li>
                </ul>
                <span className="contact_us">
                <button >Contact Us</button>
                </span>
            </div>
        </section>
    )
}

export default TopNav