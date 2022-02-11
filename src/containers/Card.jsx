import { Flex, Text } from '@chakra-ui/react'
import { FaTimes } from "react-icons/fa"

const Card = () => {
    return (
        <Flex
            background="#E0E0E0"
            maxHeight="max-content"
            mx="25px"
            my="10px"
            borderRadius="8px"
            border="1px solid rgba(0,0,0,0.2)"
            boxShadow="3px 5px 5px rgba(0,0,0,0.1)"
            direction="column"
            px="15px"
            py="3px"

            position="relative"
        >
            <Text
                fontSize="14px"
                fontWeight={700}
            >
                Cartão de crédito
            </Text>
            <Text
                fontSize="14px"
                color="#272727"
            >
                R$ 516
            </Text>

            <Flex
                position="absolute"
                right={1}
            >
                <FaTimes color="red" />
            </Flex>
        </Flex>
    )
}

export default Card