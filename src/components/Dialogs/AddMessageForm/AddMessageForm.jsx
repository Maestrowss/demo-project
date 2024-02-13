import {Field, reduxForm} from "redux-form";
import s from "../Dialogs.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="SEND" validate={[required, maxLength50]} />
            </div>
            <div><button className={s.myButton}>SEND</button></div>
        </form>
    )
}

export default reduxForm({form: "dialog-add-message-form"})(AddMessageForm);