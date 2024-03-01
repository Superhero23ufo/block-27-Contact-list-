import './App.css'
import ContactDetails from './components/ContactDetails'
import ContactList from './components/ContactList'
import { useState, useEffect } from 'react'

function App() {
	const [selectedContactId, setSelectedContactId] = useState(null)
	const [detailedContact, setDetailedContact] = useState(null)

	useEffect(() => {
		async function fetchSelectedContact() {
			try {
				const response = await fetch(
					'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/' +
						selectedContactId
				)
				const result = await response.json()
				setDetailedContact(result)
			} catch (error) {
				console.error(error)
			}
		}
		if (selectedContactId) {
			fetchSelectedContact()
		}
	}, [selectedContactId])

	return (
		<>
			{detailedContact ? (
				<ContactDetails detailedContact={detailedContact} />
			) : (
				<ContactList setSelectedContactId={setSelectedContactId} />
			)}
		</>
	)
}

export default App
