import react from 'react'
//import ArrayMap from './array-map';
//import ColumnItem from './column-item';
//import RowItem from './row-item';
//import LayoutItem from './Layout-item';
//import Question from './Question';
//import Image from './image';
//import ButtonDemo from './button-demo';
//import ButtonStateDemo from './button-state-demo';
//import TextInputDemo from './text-input-demo';
//import ImageDemo from './image-demo';
//import Bmi from './bmi';
//import TouchableDemo from './touchable-demo';
//import List from './List';
//import Subject from './Subject';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons} from 'react-native-vector-icons';
import TabHome from './tap-home';
import TabProduct from './tap-product';
import TabMenu from './tap-menu';
import TabUser from './tab-user'
import TabAbout from './tab-about'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
/*import Home from './home';
import About from './About';
import Contact from './contact';*/

export default function App() {
  const Stack = createStackNavigator()
  return (
      //[<Question/>,<Image/>,<LayoutItem/>]
      //<ButtonDemo/>
      //<ButtonStateDemo/>
      //<TextInputDemo/>
      //<ImageDemo/>
      //<Bmi/>
      //<TouchableDemo/>
      /*<NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="About" component={About}
          options={{headerTitle: 'เกี่ยวกับ', headerBackTitle:'หน้าแรก'}}
          />
          <Stack.Screen name="Contact" component={Contact}
          options={{headerTitle: 'ข้อมูลส่วนตัว', headerBackTitle:'หน้าแรก'}}
          />

        </Stack.Navigator>
      </NavigationContainer>*/
      /*<NavigationContainer>
        <Stack.Navigator initialRouteName='List'>
          <Stack.Screen name="List" component={List}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="Subject" component={Subject}
          options={{headerTitle: 'รายละเอียดสินค้า', headerBackTitle:''}}
          />

        </Stack.Navigator>
      </NavigationContainer>*/
      <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            labelStyle: {fontSize: 18},//ขนาดตัวอักษร(บนปุ่ม)
            showLabel: true,//เเสดงข้อความหรือไม่เเสดงข้อความ
            inactiveTintColor: 'blue',//สีข้อความเเละไอคอนในสถานะปกติ
            activeTintColor: 'red',//สีข้อความเเละไอคอนในสถานะที่เลือกอยู่
          }}>
            <Tab.Screen name="TabHome" component={TabHome} options={{
              tabBarLabel:'หน้าเเรก', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="md-home"size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabProduct" component={TabProduct} options={{
              tabBarLabel:'สินค้า', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="cart"size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabUser" component={TabUser} options={{
              tabBarLabel:'ผู้ใช้', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <AntDesign name="user" size={24} color="blue"/>
              }
            }}/>
            <Tab.Screen name="TabAbout" component={TabAbout} options={{
              tabBarLabel:'เกี่ยวกับ', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Entypo name="info" size={24} color="blue"/>
              }
            }}/>
            <Tab.Screen name="TabMenu" component={TabMenu} options={{
              tabBarLabel:'เมนู', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="help"size={18} color={color}/>
              }
            }}/>
          </Tab.Navigator>
        </NavigationContainer>

  );
}