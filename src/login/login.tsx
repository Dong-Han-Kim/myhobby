import style from './Login.module.css';

export default function Login() {
	return (
		<div id={style.login_container}>
			<form action="#" className={style.login_form}>
				<fieldset>
					<input type="text" placeholder="아이디" autoFocus name="id" required />
					<input type="text" placeholder="비밀번호" name="password" required />
					<button>로그인</button>
				</fieldset>
			</form>
		</div>
	);
}
