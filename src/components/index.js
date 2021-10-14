import React from "react";
import Paralax from "./HomeComponents/Paralax";
import Cards from "./HomeComponents/Cards";
import Description from "./HomeComponents/Description";
import Explore from "./HomeComponents/Explore";
import LoginForm from "./HomeComponents/LoginForm";
import Pricing from "./HomeComponents/Pricing";

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
                <Pricing />


                </div>
        )
    }

}

export default Index