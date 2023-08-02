import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";

type ButtonProps = {
    text: string
}

export const SampleButton = () => {
    return (
        <TouchableOpacity style={{padding: 10, backgroundColor : '#000', borderRadius: 7}}>
            <Text>Meu botão</Text>
        </TouchableOpacity>
    )
}