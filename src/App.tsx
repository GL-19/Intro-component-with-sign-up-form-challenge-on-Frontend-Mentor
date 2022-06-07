import styles from "./App.module.scss";
import { RegisterForm } from "./components/RegisterForm";

type FormData = {
	password: string;
	email: string;
	firstName: string;
	lastName: string;
};

function App() {
	function printData({ password, email, firstName, lastName }: FormData): void {
		console.log(password, email, firstName, lastName);
	}

	return (
		<main>
			<div className={styles.infoWrapper}>
				<h1>Learn to code by watching others</h1>
				<p>
					See how experienced developers solve problems in real-time. Watching scripted
					tutorials is great, but understanding how developers think is invaluable.
				</p>
			</div>

			<div className={styles.registerWrapper}>
				<button className={styles.trialBtn}>
					Try it free 7 days <span>then $20/mo. thereafter</span>
				</button>
				<RegisterForm completeRegister={printData} />
			</div>
		</main>
	);
}

export default App;
