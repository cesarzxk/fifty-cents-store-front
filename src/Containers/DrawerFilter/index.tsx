import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Filters from "../../Components/Filters";

function DrawerFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        h="100%"
        w="1rem"
        data-testid="drawerFilterButton"
        onClick={onOpen}
      >
        {">"}
      </Button>

      <Drawer size="lg" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Filters />
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerFilter;
