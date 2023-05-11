import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import { Button } from '@/common/button/button';
let socket

function HotlineHomePage() {
	useEffect(() => {
		socketInitializer()
	}, [])

	const [input, setInput] = useState('')

	const onChangeHandler = (e) => {
		setInput(e.target.value)
		// socket.emit('input-change', e.target.value)
	}

	const socketInitializer = async () => {
		await fetch('/api/messages/socket')
		socket = io()

		socket.on('connect', () => {
			console.log('connected')
		})

		socket.on('update-input', msg => {
			setInput(msg)
		})
	}

	return <form
		onSubmit={e => {
			e.preventDefault()
			if (input) {
				socket.emit('message', input)
				setInput('')
			}
		}}
	>
		<input
		placeholder="Type something"
		value={input}
		onChange={onChangeHandler}
	/>
		<Button type={"submit"}>Send</Button>
	</form>
}

export default HotlineHomePage;