import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h4>Signup form</h4>
            <form onSubmit={(e) => {
                e.preventDefault()
                axios.post('/signup', { email: 'abc@gmail.com', password: '123' }, {})
                    .then(res => {
                        console.log('res...', res)
                    })
            }}>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup