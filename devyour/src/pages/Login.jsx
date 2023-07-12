import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import ButtonLogin from "../components/atoms/ButtonLogin";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleInput = (event) => {
		setForm((_form) => ({
			..._form,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const results = await axios({
				url: "http://localhost:6700/api/auth/token",
				method: "POST",
				data: {
					...form,
				},
			});
			const data = results.data; // -> { user: { ... }, token: ... }
			dispatch(login(data));
			navigate("/devyour");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="flex h-screen w-full items-center justify-center bg-gray-100">

			<div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
				<div className="flex justify-center items-center m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5">
					<Link to="/">
						<img src="log.png" alt="logo" className="w-[1000px]" />{" "}
					</Link>
				</div>

				<div className="w-full sm:w-3/5">
					<div className="p-8">
						<h1 className="flex justify-center items-center text-3xl font-black text-grey" >
							<img src="DevYour.png" alt="logo" />
						</h1>
						<p className="mt-2 mb-5 text-base leading-tight text-grey"></p>
						{/* <p className="text-red text-2xl font-semibold">{message}</p> */}
						<form className="mt-8" onSubmit={handleSubmit}>

							<div className="relative mt-2 w-full">
								<input
									className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
									id="email"
									name="email"
									type="email"
									placeholder=""
									value={form.email}
									onChange={handleInput}
								/>
								<label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Enter your Email</label>
							</div>

							<div className="relative mt-2 w-full">
								<input
									className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
									id="password"
									name="password"
									type="password"
									placeholder=""
									value={form.password}
									onChange={handleInput}
								/>
								<label htmlFor="password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Enter your Password</label>
							</div>

							<ButtonLogin value="Login" type="submit" />

						</form>

						<div className="mt-4 text-center">
							<p className="flex justify-center items-center gap-2 text-sm text-grey">
								<span>Create an account?</span>
								<span><Link to="/register" className="font-bold text-blue no-underline hover:text-pink">Sign up</Link></span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;