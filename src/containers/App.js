import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import '../containers/App.css';


function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');        //setSearchfield i 27 de kullandik, searcfield = event.target.value a esitledik
    const [count, setCount] = useState(0);

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }

    useEffect(() => {                                                         //useEffect runs everytime app(9) run  
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[])                              //eger bunlardan biri degistiyse useEffecti calistir yani [] in icindekiler
                                    //sonsuz donguye girmemesi icin bos array koyuyoruz 
                                    //bos array degismedigi icin sadece bir kez calisiyor ama bos array koymassak [] sonsuz donguye girer

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading</h1>
        : (
            <div className="tc" >
                <h1 className="f1" >RoboFriends</h1>
                <button onClick={() => setCount(count+1)}>Click</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
}



export default App;