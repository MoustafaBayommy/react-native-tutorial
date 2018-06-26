
  import HomeScreen from '../screens/HomeScreen'
  import IntroScreen from '../screens/IntroScreen'
   
  const nav = StackNavigator({
    Home: { screen: HomeScreen },
    Intro:{ screen: IntroScreen },
    
  }
,
,
  {
    initialRouteName: 'Intro',
  }

);


  export default nav;