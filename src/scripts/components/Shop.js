import DataStore from 'flux/stores/DataStore.js'

class Shop extends React.Component {
    
    render() {
        
        let page = DataStore.getPageBySlug('shop');
        
        //let acf = page.acf; // Advanced Custom Fields data
        //<h1>{acf.yourCustomFieldName}</h1>

        console.log(page); 

        return (
            <div>
                <h2>{page.title.rendered}</h2>
                
            </div>
        );
    }
}

export default Shop;