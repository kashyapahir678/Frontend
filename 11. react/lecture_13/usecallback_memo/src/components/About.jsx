import React, { useState } from 'react'
import { useCallback } from 'react'

const About = () => {
    return (
        <>
            <div>This is About page</div>
            <ListData />
        </>
    )
}

const intialData = [
    {
        id: 1,
        name: 'Object-1'
    },
    {
        id: 2,
        name: 'Object-2'
    },
    {
        id: 3,
        name: 'Object-3'
    }
]

const List = React.memo(({ users, onRemove }) => {
    console.log("List component render!!")

    return (
        <div>
            <ul>
            {users.map((item) => {
                    <li key={item.id} >
                        {item.name}
                        <span onClick={() => onRemove(item.id)}>X</span>
                    </li>
                })}
            </ul>
        </div>
    )
}
)

// const MemoList = React.memo(List)

const ListData = () => {

    const [user, setUser] = useState(intialData)
    const [input, setInput] = useState("")

    const handleRemove = useCallback(
        (userId) => {
            const filterUser = user.filter((user) => user.id !== userId)
            setUser(filterUser)
        }, [user])

    return (
        <div>
            <input type="text" placeholder='enter the text' value={input} onChange={(e) => setInput(e.target.value)} />
            {/* <MemoList users={user} onRemove={handleRemove} /> */}
            <List users={user} onRemove={handleRemove} />
        </div>
    )
}



export default About