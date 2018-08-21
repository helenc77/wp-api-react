import DataStore from 'flux/stores/DataStore.js'

class About extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData); 

        return (
            <div>
                <h2>About page</h2>
            </div>
        );
    }
}

export default About;