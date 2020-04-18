import React, { Component } from "react";
import gif from "../../assets/hero.gif";
import "../../styles.css";
import { NavLink } from "react-router-dom";

class Home extends Component {
    render (){
        const {auth} = this.props;
        if (auth.uid) return <Redirect to='/login' />
        return (
            <div className="home">
            <section className="container">
                <div className="text-center">
                    <img src={gif}/>
                </div>
            </section>
            <section className=" info container pr-5">
            <div className="container card pl-5">
                <h2 className="pt-5">WHY CODE ALONE</h2>
                <h3>when, YOU CAN GO ON A CODE DATE</h3>
                <h5>Find people to collaborate on your projects, browse through the profiles of enthusiastic makers and ping them to collaborate.</h5>
                <NavLink to="/dashboard" className="text-white"><button type="submit" className="btn btn-primary">Code Date</button></NavLink>
                <br />
                <NavLink to="/join" className="text-white"><button type="submit" className="btn btn-primary">Join</button></NavLink>
                <br />
            </div>
            </section>
            </div>
        )
    }
}

export default Home;
