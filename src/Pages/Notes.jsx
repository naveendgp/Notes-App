import Topnav from "../Components/TopNavigation/Topnav"
import Sidenav from "../Components/SideNavigation/Sidenav"
const Notes = () => {

    return(
        <>
            <Topnav/>
            <Sidenav/>

            <div className="main">
                <h3 className="title">Notes Page</h3>
            </div>
        </>
    )
}

export default Notes