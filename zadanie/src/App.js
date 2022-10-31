import { useState } from 'react';
import './App.css';
import LogInSite from './sites/LogInSite';
import LogInSitePassword from './sites/LogInSitePassword';
import PickPeopleCount from './sites/PickPeopleCount';

function App() {

	const [CurrentSite, setCurrentSite] = useState('LoginEmail');
	const [user, setUser] = useState();

	
	switch (CurrentSite) {

		case 'LoginEmail':
			return (
				<div className="App">
					<LogInSite ChangeUser={setUser} ChangeSite={setCurrentSite}></LogInSite>
				</div>
			);

		case 'LoginEmailPassword':
			return (
				<div className="App">
					<LogInSitePassword CurrentUser={user} ChangeSite={setCurrentSite}></LogInSitePassword>
				</div>
			);	

		case 'PickPeopleCount':
			return (
				<div className="App">
					<PickPeopleCount CurrentUser={user} ChangeSite={setCurrentSite}></PickPeopleCount>
				</div>
			);	
	
		default:
			break;
	}

	
}

export default App;
