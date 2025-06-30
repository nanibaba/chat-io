import { Paper, Text } from "@mantine/core";

export default function MessageBox({right, marginBottom, message}) {
    return (
        <Paper bg={right ? "blue.9" : "dark.5"}
            ml={right ? "auto" : 0}
            radius="xl" 
            py={5}
            px="xs"
            w="fit-content"
            mb={marginBottom}>
                <Text>{message}</Text>
        </Paper>
    )
}