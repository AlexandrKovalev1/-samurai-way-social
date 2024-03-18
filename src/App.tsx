import './App.css';
import { Header } from './layout/Header/Header';
import { Profile } from './layout/Profile/Profile';
import { Sidebar } from './layout/Sidebar/Sidebar';
import { Container } from './components/Container';
import { Messages } from './layout/Messages/Messages';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Container width={'1200px'} className={'contentContainer'}>
				<Header />
				<main className={'main'}>
					<Route path={'/profile'} component={Profile} />
					<Route path={'/messages/'} component={Messages} />
				</main>
				<Sidebar />
			</Container>
		</div>
	);
}

export default App;
