import { View , Text } from "react-native";
import { router } from 'expo-router';
import { SampleButton } from '@/components/Button';

export default function About(){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 44, fontWeight: '700'}}>Sobre</Text>
                <SampleButton />
        </View>
    )
}