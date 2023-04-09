import classes from '../styles/HeaderCartButton.module.css';
import HomeIcon2 from '@mui/icons-material/Home';


const HomeIconButton = props => {
    return <button className={classes.button}>
    <span className={classes.icon}>
    <HomeIcon2 />
    </span>
    <span>Home</span>
    </button>
};

export default HomeIconButton;