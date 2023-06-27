import './App.css'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import {ToastContainer} from 'react-toastify'

function App() {


  return (
		<div data-theme={localStorage.getItem("theme", "light")}>
			<BrowserRouter>
				<ToastContainer />
				{/* public */}
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/signup"
						element={<Signup />}
					/>
					<Route
						path="/signin"
						element={<Signin />}
					/>
					{/* <Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/activate/:id/:token/" element={<EmailActivation />} /> */}

					{/* private routs */}
					{/* <Route path="/user" element={<User />} >
						<Route path="/user/profile" element={<Profile />} />
						

					</Route>
					<Route path="/donar" element={<Donar />} >
						<Route path="/donar/donation" element={<Donation />} />

					</Route>
					<Route path="/agent" element={<Agent />} >
						<Route path="/agent/order" element={<Order />} />

					</Route> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
