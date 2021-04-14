import React from 'react'

const Message = (props) => {
    
    const getStyle = (props)=>{
        let baseClass = "alert ";
        if(props.message.msgError)
            baseClass = baseClass + "alert-danger";
        else
            baseClass = baseClass + "alert-danger";
        return baseClass + " text-center";
    }
    return (


        <div className={getStyle(props)} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Message
