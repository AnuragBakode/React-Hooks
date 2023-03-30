import React, { useState } from 'react'

function HookCounter3() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={(event) => setName({...name , firstName: event.target.value })} />
                <input type="text" value={name.lastName} onChange={(event) => setName({ ...name ,lastName: event.target.value })} />
                <h2>Your First name is - {name.firstName}</h2>
                <h2>Your Last name is - {name.lastName}</h2>
            </form>
        </div>
    )
}

export default HookCounter3