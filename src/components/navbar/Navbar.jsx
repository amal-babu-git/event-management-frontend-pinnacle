import "./Navbar.css"
import {useNavigate} from "react-router-dom"

const Navbar = () => {

    const navigate=useNavigate()

    const onClickLogin = () =>{
        navigate('/signin')
    }

    const onClickLogout = () =>{
        navigate('/')
    }

    const onClickTeamRegister = () =>{
        navigate('/signup')
    }

    

const onClickTheme = (e) => {
	console.log(e.target.name);
	localStorage.setItem("theme", e.target.name);
	window.location.reload();
};

const themes = [
	"light",
    "dark",
	"night",
	"cupcake",
	"bumblebee",
	"emerald",
	"corporate",
	"synthwave",
	"retro",
	"cyberpunk",
	"valentine",
	"halloween",
	"garden",
	"forest",
	"aqua",
	"lofi",
	"pastel",
	"fantasy",
	"wireframe",
	"black",
	"luxury",
	"dracula",
	"cmyk",
	"autumn",
	"business",
	"acid",
	"lemonade",
	"coffee",
	"winter",
];

const menuItems = themes.map((theme, index) => (
	<li
		key={index}
		
	>
		<button
			id={theme}
			name={theme}
			onClick={onClickTheme}
		>
			{theme}
		</button>
	</li>
));


  return (
		<>
			<div className="navbar bg-base-100v fixed z-50  shadow-md">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>Events</a>
							</li>
							<li>
								<a>Results</a>
							</li>

							<li>
								<a>Theme</a>
								<ul className="p-2">{menuItems}</ul>
							</li>
							<li>
								<a>Gallery</a>
							</li>
						</ul>
					</div>

					<a className="btn btn-ghost normal-case text-xl font-bold hidden md:block">
						ST PHILOMENA COLLEGE
					</a>
					<a className="btn btn-ghost normal-case text-xl font-bold typing-animation">
						<span className="rainbow-text">
							P<span className="text-red-500">I</span>
							<span className="text-orange-500">N</span>
							<span className="text-yellow-500">N</span>
							<span className="text-green-500">A</span>
							<span className="text-blue-500">C</span>
							<span className="text-indigo-500">L</span>
							<span className="text-purple-500">E</span>
						</span>
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Events</a>
						</li>
						<li>
							<a>Results</a>
						</li>
						<li tabIndex={0}>
							<details>
								<summary>Theme</summary>
								<ul className="p-2">{menuItems}</ul>
							</details>
						</li>
						<li>
							<a>Gallery</a>
						</li>
						{/* <li tabIndex={0}>
							<button>
								Theme
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</button>
							<ul className="p-2">{menuItems}</ul>
						</li> */}
					</ul>
				</div>
				<div className="navbar-end p-1">
					<a
						className="btn btn-primary me-1"
						onClick={onClickLogin}
					>
						Login
					</a>
					<a
						className="btn btn-primary me-1"
						onClick={onClickLogout}
					>
						Logout
					</a>
					<a
						className="btn btn-primary"
						onClick={onClickTeamRegister}
					>
						Team Register
					</a>
				</div>
			</div>
		</>
	);
}

export default Navbar