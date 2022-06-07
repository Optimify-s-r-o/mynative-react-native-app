import {Button, Text, View} from "react-native";
import {styles} from "../styles";
import {useNavigation} from "@react-navigation/native";

export const Body = () => {
    const navigator = useNavigation();

    const openModal = () => {
        navigator.navigate("Modal")
    }

    const signIn = () => {
        navigator.navigate("Portal")
    }

    return (<View style={styles.header}>
        {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeHeaderView>
         **/}

        {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeBody>
         **/}
        <Text>MyNative Body</Text>
        <Button onPress={openModal} title={"Open Modal"}/>
        <Button onPress={signIn} title={"Portal"}/>
        {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         </@MyNativeBody>
         **/}
        <Text>MyNative Footer</Text>
        {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeHeaderView/>
         **/}
    </View>);
}