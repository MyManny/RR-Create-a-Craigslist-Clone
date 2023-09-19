// Import data

// Import components
import './App.css';
import SearchBar from './Components/SearchBar'
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'
import SideBar from './Components/SideBar'



function App(){
  return (
    <div>
      
      <div className="App" style={{"display": "flex"}}>
        <SideBar></SideBar>
        <div>
          <SearchBar></SearchBar>
          <Directory></Directory>
          <Gallery></Gallery>
        </div>
       
        
      </div>
    </div>
  );
}

export default App;
