import styles from "./RegisterForm.module.scss";
import { useState } from "react";

export function RegisterForm({ completeRegister }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emptyInputOnSubmit, setEmptyInputOnSubmit] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		setEmptyInputOnSubmit(false);

		if (!firstName || !lastName || !email || !emptyInputOnSubmit) {
			setEmptyInputOnSubmit(true);
		} else {
			try {
				completeRegister(password, email, firstName, lastName);
				window.alert("Cadastro realizado com sucesso");
			} catch (error) {
				setEmptyInputOnSubmit(true);
			}
		}
	}

	return (
		<form className={styles.registerForm} onSubmit={handleSubmit}>
			<input
				type="text"
				className={!firstName && emptyInputOnSubmit ? styles.emptyInput : ""}
				placeholder={`${!firstName && emptyInputOnSubmit ? "" : "First Name"}`}
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			{!firstName && emptyInputOnSubmit ? (
				<p className={styles.inputEmptyMsg}>First Name cannot be empty</p>
			) : (
				""
			)}
			<input
				type="text"
				className={!lastName && emptyInputOnSubmit ? styles.emptyInput : ""}
				placeholder={`${!lastName && emptyInputOnSubmit ? "" : "Last Name"}`}
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			{!lastName && emptyInputOnSubmit ? (
				<p className={styles.inputEmptyMsg}>Last Name cannot be empty</p>
			) : (
				""
			)}
			<input
				type="email"
				className={!email && emptyInputOnSubmit ? styles.emptyInput : ""}
				placeholder={`${!email && emptyInputOnSubmit ? "email@example.com" : "Email Address"}`}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{!email && emptyInputOnSubmit ? (
				<p className={styles.inputEmptyMsg}>Looks like this is not an email</p>
			) : (
				""
			)}
			<input
				type="password"
				className={!password && emptyInputOnSubmit ? styles.emptyInput : ""}
				placeholder={`${!password && emptyInputOnSubmit ? "" : "Password"}`}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{!password && emptyInputOnSubmit ? (
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
