import React from "react";

export type ManPropsType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

export type PropsType = {
    title: string
    man: ManPropsType
    food: Array<string>
    car: {model: string}
}


export const Destructuring: React.FC<PropsType> = ({title,man: {name},...props}) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <hr/>
            <div>
                {props.car}
            </div>
        </div>

    )
}