import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData); 

        return (
            <div>
                <h2>Home page</h2>
            </div>
        );
    }
}

export default Home;