import React,{Component} from "react";
import RegisterForm from "../components/register-form";

class Register extends Component{
    render(){
        return(          
            <main className="minh-100vh user-s1">    
                <RegisterForm backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Register;