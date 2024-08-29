import styles from './NotFoundPage.module.css';
import {useNavigate} from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 id={styles.header}>404</h1>
      <h3 id={styles.header2}>Oops! Page not found.</h3>
      <p className={styles.subText}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <button className={styles.homebutton} onClick={()=>navigate('/Pocket-Notes')}>Go to Homepage</button>
    </div>
  )
}

export default NotFoundPage
