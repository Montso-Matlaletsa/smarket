import React from "react";
import Paralax from "./HomeComponents/Paralax";
import Cards from "./HomeComponents/Cards";
import Description from "./HomeComponents/Description";
import Explore from "./HomeComponents/Explore";
import LoginForm from "./HomeComponents/LoginForm";

class Index extends React.Component{
    render() {
        return(
            <>
                <Paralax />
                <br/>
                <br/>
                <Cards />
                <Description />
                <Explore />

                <LoginForm /></>
        )
    }

}

export default Index