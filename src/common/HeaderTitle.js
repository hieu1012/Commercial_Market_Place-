// src/components/HeaderTitle.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderTitle = ({ title }) => (
  <Text style={styles.title_header}>{title}</Text>
);

const styles = StyleSheet.create({
  title_header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HeaderTitle;
