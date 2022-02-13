import {
    Text,
    Flex,
    FormControl,
    Input,
    FormLabel,
    Button,
    Checkbox,
} from '@chakra-ui/react'

const Form = ({
    accountName,
    accountValue,
    isPaid,
    setAccName,
    setAccValue,
    setIsPaid,
    handleSubmit,
}) => {
    return (
        <Flex
            px="15px"
            mx="25px"
            mt="15px"
            direction="column"
            py="10px"
            border="1px solid rgba(0,0,0,0.1)"
            gridGap="15px"
        >
            <Text
                fontFamily="Open Sans"
                fontSize="20px"
                fontWeight={700}
                textAlign="center"
            >
                Adicionar nova conta
            </Text>

            <FormControl
                id="nomeDaConta"
            >
                <FormLabel>Nome da conta</FormLabel>
                <Input
                    value={accountName}
                    onChange={event => setAccName(event.target.value)}
                />
            </FormControl>

            <FormControl
                id="valorDaConta"
            >
                <FormLabel>Valor da conta</FormLabel>
                <Input
                    type="number"
                    value={accountValue}
                    onChange={event => setAccValue(event.target.value)}
                />
            </FormControl>

            <Checkbox
                value={isPaid}
                onChange={event => setIsPaid(event.target.checked)}
            >
                Pago?
            </Checkbox>

            <Button
                height="40px"
                borderRadius="2"
                background="#9FD7FF"

                onClick={handleSubmit}
            >
                ADICIONAR
            </Button>
        </Flex>
    )
}

export default Form