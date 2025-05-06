import styles from "./Preloader.module.css";
const Preloader = () => {
	return (
		<div className={styles.ring}>
			Loading
			<span></span>
		</div>
	);
};
export default Preloader;
