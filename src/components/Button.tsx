import React from 'react'

// type Props = {
//     // onClick(): string method return string
//     // onClick(): void method return nothing
//     // onClick(text: string): void method with params
//     // onClick: () => void function return nothing
//     onClick: (text: string) => void // function with params
// }

// type Props = {
//     // onClick: (e: React.MouseEvent) => void // Basic Mouse Event
//     // onChange?: (e: React.FormEvent<HTMLInputElement>) => void // Dasic input event
//     onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
// }

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}
