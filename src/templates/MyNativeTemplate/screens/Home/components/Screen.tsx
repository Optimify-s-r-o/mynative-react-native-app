import {View} from "react-native";
import {styles} from "../styles";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export const Screen = () => {
    return (<View style={styles.container}>
        {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView>
         **/}

        <Header/>
        <Body/>
        <Footer/>

        {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView/>
         **/}
    </View>);
}