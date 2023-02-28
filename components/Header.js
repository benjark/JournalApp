import React from "react";
import { View, Text, Image, TextInput,Pressable } from "react-native";
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{height: 70,flexDirection: "row",justifyContent: "space-between",alignItems: "center",paddingHorizontal: SIZES.font}}>
            <Image source={assets.JournalLogo} resizeMode="contain" style={{ width: 90, height: 25 }}/>

            <View style={{ width: 45, height: 45 }}>
                <Pressable onPress={() => navigation.navigate("UserAccount")}>
                    <Image source={assets.person04} resizeMode="contain" style={{ width: "100%", height: "100%", borderRadius: 50 }}/>
                </Pressable>

            </View>
        </View>
    )
};

export default Header;