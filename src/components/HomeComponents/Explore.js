import React from "react";
import {MdCode, MdOutlineLibraryBooks,
    MdOutlineElectricalServices, MdOutlineBusiness,
    MdCloud, MdPhotoCamera, MdVideoSettings, MdOutlineMusicVideo
} from 'react-icons/md'

import {FaDatabase} from  'react-icons/fa'
import {GiHairStrands, GiClothes} from 'react-icons/gi'
import Service from "./ChildComponents/Service";
import  {SiAdobeindesign} from 'react-icons/si'



class Explore extends React.Component{

    render() {

        return(
            <>
                <h4 className="center" style={{marginLeft: 10}}><b>Explore the Services</b></h4>
                <hr/>

                <div className="row" style={{marginTop: 20}}>

                    <Service name="Programming" icon={<MdCode/>} />

                    <Service name="Accounting" icon={<MdOutlineLibraryBooks/>} />

                    <Service name="Graphic Design" icon={<SiAdobeindesign/>} />

                    <Service name="Electric & Electronics" icon={<MdOutlineElectricalServices/>} />

                    <Service name="Apparel & Clothing" icon={<GiClothes/>} />
                    <Service name="Hair & Beauty" icon={<GiHairStrands/>} />
                    <Service name="Business" icon={<MdOutlineBusiness/>} />
                    <Service name="Data" icon={<FaDatabase/>} />
                    <Service name="Software Engineering" icon={<MdCloud/>} />
                    <Service name="Music & Audio" icon={<MdOutlineMusicVideo/>} />

                    <Service name="Video and Animation" icon={<MdVideoSettings/>} />
                    <Service name="Photography" icon={<MdPhotoCamera/>} />
                </div>
            </>
        )
    }

}

export default Explore