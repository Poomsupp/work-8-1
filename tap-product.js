import react from "react";
import {View,Text} from "react-native";
import globalStyles from "./global-style";

export default function TabProduct({navigation}){
    return(
        <View style={globalStyles}>
            <Text style={{fontSize:18}}>Product Screen</Text>
        </View>
    )
}