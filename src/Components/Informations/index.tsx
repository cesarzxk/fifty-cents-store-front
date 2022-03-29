import { Button, VStack, Text, Grid, GridItem, Link } from "@chakra-ui/react";

type userInfoType = {
  name: string;
  lastname: string;
  email: string;
};

type informationsProps = {
  userInfo: userInfoType | undefined;
  onSubmit: () => void;
};

function Informations({ userInfo, onSubmit }: informationsProps) {
  return (
    <VStack>
      <Grid templateColumns="3fr 1fr">
        <GridItem>Nome:</GridItem>
        <GridItem>{userInfo?.name}</GridItem>
        <GridItem>Sobrenome:</GridItem>
        <GridItem>{userInfo?.lastname}</GridItem>
        <GridItem>Email:</GridItem>
        <GridItem>{userInfo?.email}</GridItem>
      </Grid>

      <Link href="/orders">
        <Text textDecoration="underline" fontWeight="bold">
          Pedidos
        </Text>
      </Link>

      <Button w="100%" colorScheme="red" onClick={onSubmit}>
        Sair
      </Button>
    </VStack>
  );
}

export default Informations;
