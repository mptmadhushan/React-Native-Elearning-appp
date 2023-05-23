import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Cources from "../screens/Cources";
import CoursePage from "../screens/CoursePage";
import VideoPage from "../screens/VideoPage";
import MotivationView from "../screens/MotivationView";
import Game from "../screens/Game";

const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Cources: { screen: Cources },
    CoursePage: { screen: CoursePage },
    VideoPage: { screen: VideoPage },
    MotivationView: { screen: MotivationView },
    Game: { screen: Game },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);
export default createAppContainer(AppNavigator);
