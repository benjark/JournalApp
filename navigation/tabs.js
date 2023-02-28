import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Add from '../src/Add';
import Home from '../src/Home';
import Settings from "../src/Settings";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top:-20,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow
    }}
    onPress={onPress}>

        {/* These are the settings to change to change the diary icon  */}
        <View
        style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor: '#e32f45',
            elevation: 5
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return(
        
        <Tab.Navigator
        screenOptions = {{
            tabBarShowLabel:false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
                bottom: 10,
                left: 25,
                right: 25,
                backgroundColor: "#ffffff",
                borderRadius:25,
                height: 80,
                ...styles.shadow}}}>
<Tab.Screen name="Home" component={Home}
            options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                            Home
                            </Text>
                    </View>
                ),
            }} 
            />

            <Tab.Screen name="Add" component={Add}
            options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                <Image source={require('../assets/icons/diary.png')} resizeMode="contain"
                    style={{
                        width:40,
                        height:40,
                        tintColor:'#fff'
                }}
                />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
            }}
            />

<Tab.Screen name="Settings" component={Settings} 
            options={{
                //  this is what removes the header! 
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                        source={require('../assets/icons/settings.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#e32f45' : '#748c94'}}/>

                        {/* This is what shows on the navbar */}
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                            Settings
                            </Text>
                    </View>
                ), }} />

            

        </Tab.Navigator>
        
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
        width: 0,
        height: 10, 
    },
    shadowOpacity: 0.45,
    shadowRadius: 6.5,
    elevation: 20
    }
});

export default Tabs;    