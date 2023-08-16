import Container  from "@mui/material/Container"
import styles from './not-found.module.css'
export default function NotFound() {
  return (
    <>
      <Container maxWidth="sm">
        <h1>We couldn&#39;t find that page</h1>
        <img  id={styles.robot} src="/photos/mulyadi-ZnLprInKM7s-unsplash.jpg"  alt="Photo of robot on the table" ></img>
      </Container>
    </>
  );
}
