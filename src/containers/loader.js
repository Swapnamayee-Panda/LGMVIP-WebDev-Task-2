import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="Puff"
            color="red"
            height={400}
            width={400}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
