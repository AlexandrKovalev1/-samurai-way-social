import './App.css';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { Sidebar } from './layout/Sidebar/Sidebar';
import { Container } from './components/Container';

function App() {
	return (
		<div className='App'>
			<Header />
			<Container width={'1200px'} className={'contentContainer'}>
				<Main />
				<Sidebar />
			</Container>
		</div>
	);
}

export default App;
