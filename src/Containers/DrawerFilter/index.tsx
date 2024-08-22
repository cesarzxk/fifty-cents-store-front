import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Filters from "../../Components/Filters";
import { useGlobal } from "../../Context/Global/GlobalContext";

function DrawerFilter() {
  const { isFiltersOpen, onFiltersClose } = useGlobal();

  return (
    <Drawer
      size="sm"
      placement="left"
      onClose={onFiltersClose}
      isOpen={isFiltersOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color="White" />
        <Filters />
      </DrawerContent>
    </Drawer>
  );
}
export default DrawerFilter;
