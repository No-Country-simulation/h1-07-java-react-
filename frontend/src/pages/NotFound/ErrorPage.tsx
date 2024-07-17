import ImageNotFound from "./Image/ImageNotFound";
import styles from '../../styles.module.css'

export function ErrorPage() {
	return (
		<main>
			<section className=" justify-center flex items-center flex-col mt-20">
				<ImageNotFound height={450} width={450}></ImageNotFound>
				<h1 className={`${styles.h1}`}>Not Found 404</h1>
			</section>
		</main>
	)
}