import styles from "./RegisterForm.module.scss";
import { useState } from "react";

export function RegisterForm({ completeRegister }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emptyInputOnSubtmit, setEmptyInputOnSubtmit] = useState(false);

	function handleSubmit(event) {
		setEmptyInputOnSubtmit(false);
		event.preventDefault();
		if (!firstName || !lastName || !email || !emptyInputOnSubtmit) {
			setEmptyInputOnSubtmit(true);
		} else {
			completeRegister(password, email, firstName, lastName);
		}
	}

	return (
		<form className={styles.registerForm} onSubmit={handleSubmit}>
			<input
				type="text"
				className={!firstName && emptyInputOnSubtmit ? styles.emptyInput : ""}
				placeholder={`${!firstName && emptyInputOnSubtmit ? "" : "First Name"}`}
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			{!firstName && emptyInputOnSubtmit ? (
				<p className={styles.inputEmptyMsg}>First Name cannot be empty</p>
			) : (
				""
			)}
			<input
				type="text"
				className={!lastName && emptyInputOnSubtmit ? styles.emptyInput : ""}
				placeholder={`${!lastName && emptyInputOnSubtmit ? "" : "Last Name"}`}
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			{!lastName && emptyInputOnSubtmit ? (
				<p className={styles.inputEmptyMsg}>Last Name cannot be empty</p>
			) : (
				""
			)}
			<input
				type="email"
				className={!email && emptyInputOnSubtmit ? styles.emptyInput : ""}
				placeholder={`${!email && emptyInputOnSubtmit ? "email@example.com" : "Email Address"}`}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{!email && emptyInputOnSubtmit ? (
				<p className={styles.inputEmptyMsg}>Looks like this is not an email</p>
			) : (
				""
			)}
			<input
				type="password"
				className={!password && emptyInputOnSubtmit ? styles.emptyInput : ""}
				placeholder={`${!password && emptyInputOnSubtmit ? "" : "Password"}`}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{!password && emptyInputOnSubtmit ? (
				<p className={styles.inputEmptyMsg}>Password cannot be empty</p>
			) : (
				""
			)}
			<button type="submit">Claim your free trial</button>
			<p>
				By clicking the button, you are agreeing to our <span>Terms and Services</span>
			</p>
		</form>
	);
}
