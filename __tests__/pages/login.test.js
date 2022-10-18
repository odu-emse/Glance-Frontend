import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Login from '../../pages/login';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe('Login', () => {
	beforeEach(() => {
		render(
			<GoogleOAuthProvider clientId="179547029989-eueljn9jl5gqgforq4jpav2qddfhqhlu.apps.googleusercontent.com">
				<Login />
			</GoogleOAuthProvider>
		);
	})
	it('renders login button', () => {
		let btn = screen.getByRole("button")
		let classes = btn.getAttribute("class")
		expect(btn).toBeInTheDocument();
		expect(btn).toHaveTextContent("Login with Google");
		expect(btn).toHaveAttribute("type", "button");
		expect(classes.includes("bg-blue-700")).toBe(true);
		expect(classes.includes("cursor-pointer")).toBe(true);
		expect(classes.includes("focus:outline-dashed")).toBe(true);
	});
	it('renders welcome text', () => {
		let heading1 = screen.getByText("ALMP")
		let h1Classes = heading1.getAttribute("class")
		let heading2 = screen.getByText("You must be logged in to access this resource.")
		let h2Classes = heading2.getAttribute("class")
		expect(heading1).toBeInTheDocument();
		expect(heading2).toBeInTheDocument();
		expect(h1Classes.includes("text-7xl")).toBe(true);
		expect(h2Classes.includes("font-semibold")).toBe(true)
	});
	it('should route to oAuth on button click', async function() {

		}
	);
});