import React from 'react'

type Props = {
    title: string // Required
    isActive?: boolean // Optional
    type3?: Array<string>
    type4?: string[] // same type3
}

export const Head = ({ title, isActive = true }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </div>
    )
}

