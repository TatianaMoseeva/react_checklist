import React from 'react';

import Header from '../header/Header';
import List from '../list/List';
import AddNew from '../add-new/AddNew';


function App() {
	return <div className='container'>
		<Header />
        <List />
        <AddNew />
	</div>;
}

export default App;
