import React, { useState, useEffect } from 'react'
import publicIp from 'public-ip'

function App() {
	const [ipAddress, setIpAddress] = useState('...')

	useEffect(() => {
		const getIPAddress = async () => {
			setIpAddress(await publicIp.v4())
		}
		getIPAddress()
	}, [])

	return <span>{`Current IP is: ${ipAddress}`}</span>
}

export default App
