import Logo from '/dhlogo.svg';
import style from './style/Footer.module.css';
export default function Footer() {
	return (
		<section id={style.footer}>
			<div>
				<img src={Logo} alt="로고 이미지" />
			</div>
		</section>
	);
}
