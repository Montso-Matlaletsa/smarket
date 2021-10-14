import React from 'react'

class Pricing extends React.Component{
    render() {
        return (
            <>
                <div className="container">

                    <div className="row">

                        <div className=" col s12 m4">
                            <div className="card">

                                <div className="card-content center">
                                    <h5 className=''>Advertising</h5>
                                </div>
                                <div className="card-content center">
                                    <h2 className='blue-text '><small>M</small>70</h2>
                                </div>

                                <ul className='collection center'>
                                    <li className='collection-item'>
                                        <strong>1</strong> Week
                                    </li>
                                </ul>

                                <div className="card-content center">
                                    <div className="row">
                                        <div className="col s12">
                                            <button className='btn green'>Free trial</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className=" col s12 m4">
                            <div className="card">

                                <div className="card-content center">
                                    <h5 className=''>Business Registration</h5>
                                </div>
                                <div className="card-content center">
                                    <h2 className='red-text '><small>M</small>300   </h2>
                                </div>

                                <ul className='collection center'>
                                    <li className='collection-item'>
                                        <strong>Annual</strong>
                                    </li>
                                </ul>

                                <div className="card-content center">
                                    <div className="row">
                                        <div className="col s12">
                                            <button className='btn green'>Free trial</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className=" col s12 m4">
                            <div className="card">

                                <div className="card-content center">
                                    <h5 className=''>Events and Tender</h5>
                                </div>
                                <div className="card-content center">
                                    <h2 className='purple-text '><small>M</small>50</h2>
                                </div>

                                <ul className='collection center'>
                                    <li className='collection-item'>
                                        <strong>2</strong> Week
                                    </li>
                                </ul>

                                <div className="card-content center">
                                    <div className="row">
                                        <div className="col s12">
                                            <button className='btn green'>Free trial</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                    </>

        )
    }
}

export default Pricing
