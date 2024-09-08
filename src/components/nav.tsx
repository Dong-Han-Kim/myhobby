import style from './style/Nav.module.css';
import Logo from '/dhlogo.svg';

export default function Nav() {
	return (
		<section id={style.section_top}>
			<div className={style.logo}>
				<a href="/">
					<img src={Logo} />
				</a>
			</div>
			<div className={style.top_content}>
				<nav>
					<ul>
						<li>운동</li>
						<li>독서</li>
						<li>개발</li>
						<li>자동차</li>
						<li>오토바이</li>
					</ul>
				</nav>
				<div className={style.user_status}>
					<a href="../login/login.tsx">
						<img src="/user.png" alt="user_not_login" />
					</a>
				</div>
			</div>
		</section>
	);
}
