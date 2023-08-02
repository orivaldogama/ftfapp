import { View , Text, TouchableOpacity } from "react-native";
import { Link, router } from 'expo-router';


export default function Home(){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 44, fontWeight: '700'}}>Home</Text>
            <Link href='/about' asChild>
                <TouchableOpacity >
                    <Text>Sobre</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}