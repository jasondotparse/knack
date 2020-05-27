import React from 'react';
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SettingScreen from './src/settings';
import MainScreen from './src/main';
import LearnScreen from './src/learn';
import TabBar from './src/tabBar/TabBar';
import MarkdownArticleScreen from './src/articles/MarkdownArticleScreen'
import CheckUpSummaryScreen from './src/checkups';

const App = createBottomTabNavigator(
  {
    'MAIN_SCREEN': MainScreen,
    'SETTING_SCREEN': SettingScreen,
    'LEARN_SCREEN': LearnScreen,
    'MARKDOWN_ARTICLE_SCREEN': MarkdownArticleScreen,
    'CHECKUP_SCREEN': CheckUpSummaryScreen,
  },
  {
    initialRouteName: 'MAIN_SCREEN',
    tabBarComponent: (props: any) => {
      return <TabBar {...props} />;
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(App)
