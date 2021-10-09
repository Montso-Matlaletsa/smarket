import React from "react";
import Paralax from "./HomeComponents/Paralax";
import Cards from "./HomeComponents/Cards";
import Description from "./HomeComponents/Description";
import Explore from "./HomeComponents/Explore";
import LoginForm from "./HomeComponents/LoginForm";

class Index extends React.Component{
    render() {
        return(
            <div>
                <Paralax />
                <br/>
                <br/>
                <Cards />
                <Description />
                <Explore />

                <LoginForm />
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>

                </div>
        )
    }

}

export default Index