import styles from "./RegisterForm.module.scss";
import { FormEvent, useState } from "react";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

interface RegisterFormData {
	password: string;
	email: string;
	firstName: string;
	lastName: string;
}

interface RegisterFormProps {
	completeRegister(data: RegisterFormData): void;
}

export function RegisterForm({ completeRegister }: RegisterFormProps) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emptyInput, setEmptyInput] = useState(false);
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [shortPassword, setShortPassword] = useState(false);

	function formDataValidation({
		email,
		password,
		firstName,
		lastName,
	}: RegisterFormData): boolean {
		let validForm = true;

		if (!regex.test(email)) {
			setInvalidEmail(true);
			validForm = false;
		}

		if (password.length < 5) {
			setShortPassword(true);
			validForm = false;
		}

		if (!firstName || !lastName || !email || !password) {
			setEmptyInput(true);
			validForm = false;
		}
		return validForm;
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		setInvalidEmail(false);
		setEmptyInput(false);
		setShortPassword(false);

		const validForm = formDataValidation({ password, email, firstName, lastName });

		if (validForm) {
			try {
				completeRegister({ password, email, firstName, lastName });
				window.alert("Cadastro realizado com sucesso");
			} catch (error) {
				console.log("Erro ao cadastrar");
			}
		}
	}

	return (
		<form className={styles.registerForm} onSubmit={handleSubmit}>
			<input
				type="text"
				className={!firstName && emptyInput ? styles.emptyInput : ""}
				placeholder={`${!firstName && emptyInput ? "" : "First Name"}`}
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>

			{!firstName && emptyInput ? (
				<p className={styles.inputEmptyMsg}>First Name cannot be empty</p>
			) : (
				""
			)}

			<input
				type="text"
				className={!lastName && emptyInput ? styles.emptyInput : ""}
				placeholder={`${!lastName && emptyInput ? "" : "Last Name"}`}
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>

			{!lastName && emptyInput ? (
				<p className={styles.inputEmptyMsg}>Last Name cannot be empty</p>
			) : (
				""
			)}

			<input
				type="email"
				className={(!email && emptyInput) || invalidEmail ? styles.emptyInput : ""}
				placeholder={`${
					(!email && emptyInput) || invalidEmail ? "email@example.com" : "Email Address"
				}`}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			{(!email && emptyInput) || invalidEmail ? (
				<p className={styles.inputEmptyMsg}>Looks like this is not an email</p>
			) : (
				""
			)}

			<input
				type="password"
				className={(!password && emptyInput) || shortPassword ? styles.emptyInput : ""}
				placeholder={`${(!password && emptyInput) || shortPassword ? "" : "Password"}`}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			{!password && emptyInput ? (
				<p className={styles.inputEmptyMsg}>Password cannot be empty</p>
			) : shortPassword ? (
				<p className={styles.inputEmptyMsg}>Password should have at least 5 characters</p>
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
