/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainComponent from './app/index.js';

AppRegistry.registerComponent('webmontag', () => MainComponent);
AppRegistry.runApplication('webmontag', { rootTag: document.getElementById('react-app') });
