import React, {ChangeEvent, MouseEvent} from "react";

export function User() {

    const deletedUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const onNameChanged = () => { console.log('name changed')}
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => { console.log('name changed: ' + e.currentTarget.value)}
    const focusLostHandler = () => { console.log('focus lost')}

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler} >Maxim</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name='delete' onClick={deletedUser}>delete</button>
        </div>
    )

}