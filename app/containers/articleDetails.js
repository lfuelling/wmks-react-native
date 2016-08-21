import React from 'react';
import {
	View,
	Text,
	WebView
} from 'react-native';

import Header from '../components/header.js';

const ChangeSource = ({closeModal, selectedArticle}) => {
	return (
		<View style={{flex: 1}}>
			<Header title="Article Details" onItemClicked={closeModal}/>
			<WebView source={{uri: 'https://github.com/facebook/react-native'}}/>
		</View>
	);
};

export default ChangeSource;
