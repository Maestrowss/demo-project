import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*                {createField("Email","email", [required], Input)}
                {createField("PASSWORD","password",[required], Input, {type: "password"})}
                {createField(null,"rememberMe", Input, {type: "checkbox"}, "rememberMe")}
                    not work with func in FormsControl.jsx */}

            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"PASSWORD"}  name={"password"} type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) //передаем форму LoginForm для создания HOC с помощью reduxForm(устарело, надо перейти на react-hook-form или Formik)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);

    }
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);