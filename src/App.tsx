import './App.css';
import { Header } from './layout/Header/Header';
import { Profile } from './layout/Profile/Profile';
import { Sidebar } from './layout/Sidebar/Sidebar';
import { Container } from './components/Container';

function App() {
	return (
		<div className='App'>
			<Container width={'1200px'} className={'contentContainer'}>
				<Header />
				<Profile />
				<Sidebar />
			</Container>
		</div>
	);
}

export default App;
