import Header from './HeaderComponent'
import HeroComponent from './HeroComponent'
import HomeOptionsComponent from './HomeOptionsComponent';
import Games from './GamesComponent';


const HomeComponent = () => {
    return (
        <div>
            <Header />
            <HeroComponent />
            <HomeOptionsComponent />
            <Games />
        </div>
      );
}
 
export default HomeComponent;