import { Flex, Text } from '@chakra-ui/react'
import { FaTimes } from "react-icons/fa"

const Card = ({ accName, accValue, onClick, doubleClick, isPaid }) => {
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

            onDoubleClick={doubleClick}
        >
            <Text
                fontSize="14px"
                fontWeight={700}
                textDecoration={isPaid ? "line-through red 2px" : ""}
            >
                {accName}
            </Text>
            <Text
                fontSize="14px"
                color="#272727"
                textDecoration={isPaid ? "line-through red 2px" : ""}
            >
                R$ {accValue}
            </Text>

            <Flex
                position="absolute"
                right={1}

                onClick={onClick}
            >
                <FaTimes color="red" />
            </Flex>
        </Flex>
    )
}

export default Card