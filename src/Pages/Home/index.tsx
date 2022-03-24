
import { Box, Wrap, WrapItem} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCard from '../../Components/ItemCard';
import { useGlobal } from '../../Context/Global/GlobalContext';



function Home() {
  const {products} = useGlobal()

  return (
    <Box 
    flex={4}
    height='100%'
    >
      <Wrap
      overflowY='scroll'
      overflowX='hidden'
      justify='flex-start'
      paddingLeft='1rem'
      height='100%'
      >
      
      {
        products?.map(
          item=>
          <Link to={`/home/${item.id}-${item.locale}`}>
            <WrapItem>
              <ItemCard property={item}/>
            </WrapItem>
          </Link>
        )
      }
    
      
      </Wrap>
    </Box>
  );
}

export default Home;
