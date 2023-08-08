import React from "react";
import { Component } from "react";

import { MyCoolButton } from "../MyCoolButton";
import "./style.css";

export class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            publisher:"",
            comment: ""
        };
        //lifecycle
        // console.log('constructor ---comment--->');
    };

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps---comment--->');
    //      return null;
    //   }

    


    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     console.log("shouldComponentUpdate------commment----->");
    //     //zaaval true , false butsaadag => true-> buh tohioldold urgeljluul
    //     return true;
    // }


    typeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({comment: e.target.value});
        //setState() marge hiij ugnu, niiluulne
    };

    render() {
        return <div className="CommentContainer">
            <div>{this.state.comment}</div>
            <div>Зохиогч: {this.props.zohiogch}</div>
            <br/>
            <textarea onChange={this.typeHandler}></textarea>
            <MyCoolButton 
            comment={this.state.comment}
            tovchNer="Комментоо бичээрэй..." text="Хадгалах"/>

            <MyCoolButton 
            comment={this.state.comment}
            tovchNer="Комментоо энд бичээрэй..." text="Илгээх"/>
        </div>;
    }
}