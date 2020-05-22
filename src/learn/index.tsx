import { createStackNavigator } from 'react-navigation-stack';
import ArticleScreen from './ArticleScreen';
import LearnScreen from './LearnScreen';

export default createStackNavigator(
  {
    'ARTICLE_SCREEN': ArticleScreen,
    'INDEX_LEARN_SCREEN': LearnScreen,
  },
  {
    initialRouteName: 'INDEX_LEARN_SCREEN',
  }
);
