import React from "react";
import "./plans.css"
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
function Plans({ data }) {

    return (
        <div>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                    <hr/>
                                    <ul className="fa-ul">
                                        <div>{data.freeplan.user[1] ? <BsCheckLg /> : <ImCross />}   {data.freeplan.user[0]} </div>
                                        <div>{data.freeplan.storage[1] ? <BsCheckLg /> : <ImCross />}   {data.freeplan.storage[0]}</div>
                                        <div>{data.freeplan.project[1] ? <BsCheckLg /> : <ImCross />} {data.freeplan.project[0]}</div>
                                        <div>{data.freeplan.access[1] ? <BsCheckLg /> : <ImCross />}  {data.freeplan.access[0]}</div>
                                        <div className="false" >{data.freeplan.private[1] ? <BsCheckLg /> : <ImCross />}  {data.freeplan.private[0]}</div>
                                        <div className="false" >{data.freeplan.support[1] ? <BsCheckLg /> : <ImCross />}  {data.freeplan.support[0]}</div>
                                        <div className="false" >{data.freeplan.domain[1] ? <BsCheckLg /> : <ImCross />}  {data.freeplan.domain[0]}</div>
                                        <div className="false" >{data.freeplan.reports[1] ? <BsCheckLg /> : <ImCross />} {data.freeplan.reports[0]} </div>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                                    <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                                    <hr/>
                                    <ul className="fa-ul">
                                    <div>{data.plus.user[1] ? <BsCheckLg /> : <ImCross />}   <strong> {data.plus.user[0]} </strong></div>
                                        <div>{data.plus.storage[1] ? <BsCheckLg /> : <ImCross />}     {data.plus.storage[0]} </div>
                                        <div>{data.plus.storage[1] ? <BsCheckLg /> : <ImCross />}     {data.plus.project[0]}  </div>
                                        <div>{data.plus.access[1] ? <BsCheckLg /> : <ImCross />}    {data.plus.access[0]}  </div>
                                        <div>{data.plus.private[1] ? <BsCheckLg /> : <ImCross />}     {data.plus.private[0]}  </div>
                                        <div>{data.plus.support[1] ? <BsCheckLg /> : <ImCross />}     {data.plus.support[0]}  </div>
                                        <div>{data.plus.domain[1] ? <BsCheckLg /> : <ImCross />}    {data.plus.domain[0]}   </div>
                                        <div className="false" > {data.plus.reports[1] ? <BsCheckLg /> : <ImCross />}   {data.plus.reports[0]}
                                        </div>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                    <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                                     <hr/> 
                                    <ul className="fa-ul">
                                        <div>{data.pro.user[1] ? <BsCheckLg /> : <ImCross />}  <strong> {data.pro.user[0]}</strong> </div>
                                       
                                        <div>{data.pro.storage[1] ? <BsCheckLg /> : <ImCross />}    {data.pro.storage[0]}   </div>
                                        <div>{data.pro.project[1] ? <BsCheckLg /> : <ImCross />}     {data.pro.project[0]}  </div>
                                        <div>{data.pro.access[1] ? <BsCheckLg /> : <ImCross />}     {data.pro.access[0]}  </div>
                                        <div>{data.pro.private[1] ? <BsCheckLg /> : <ImCross />}     {data.pro.private[0]}  </div>
                                        <div>{data.pro.support[1] ? <BsCheckLg /> : <ImCross />}    {data.pro.support[0]}   </div>
                                        <div>{data.pro.domain[1] ? <BsCheckLg /> : <ImCross />}    <strong> {data.pro.domain[0]}  </strong>
                                        </div>
                                        <div>{data.pro.reports[1] ? <BsCheckLg /> : <ImCross />}     {data.pro.reports[0]}  </div>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </section >

        </div >
    )
}

export default Plans;


// BsCheckLg
// ImCross    BiCheck