import { Flex, Button, Image } from "@chakra-ui/react"

const Header = ({ toggleForm, formState }) => {
    return (
        <Flex
            background="#323232"
            height="60px"
            paddingX="25px"
            align="center"
            justify="space-between"
        >
            <Image
                src="/logo.svg"
                alt="Logo"
                width="123px"
                height="34px"
            />

            <Button
                height="30px"
                borderRadius="2"
                background="#9FD7FF"

                onClick={toggleForm}
            >
                {formState ? 'FECHAR' : 'ADICIONAR'}
            </Button>
        </Flex>
    )
}

export default Header