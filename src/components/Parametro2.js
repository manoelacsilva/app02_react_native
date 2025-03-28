import { Text } from "react-native"

function Parametro2(props){
    // Converte os valores de props para um array
    const valores = Object.values(props);
    return (
        <Text>
            O valor {valores[0]} e {valores[1]} com tamanho {valores.length}
        </Text>
    )
}

export default Parametro2
