import React from 'react';
import {
	View,
	Text
} from 'react-native';

import Header from '../components/header.js';

const ChangeSource = ({closeModal}) => {
	return (
		<View>
			<Header title="Change Source" onItemClicked={closeModal} iconType="cross"/>
		</View>
	);
};

export default ChangeSource;
