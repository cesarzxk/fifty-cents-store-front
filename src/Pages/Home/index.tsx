
import { Box, Wrap, WrapItem} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCard from '../../Components/ItemCard';



function Home() {
  const items = [
    {
      hasDiscount: true,
      name: 'Rear view of modern home with pool',
      images: ['https://bit.ly/2Z4KKcF'],
      description: 'Modern home in city center in the heart of historic Los Angeles',
      price: '$1,900.00',
      discountValue:'0.05',
      material: 'concrete',
      category: 'Fantastic',
      id: '1',
      locale:'brazilian'
    },
    {
      hasDiscount: true,
      name: 'Rear view of modern home with pool',
      images: ['https://bit.ly/2Z4KKcF'],
      description: 'Modern home in city center in the heart of historic Los Angeles',
      price: '$1,900.00',
      discountValue:'0.05',
      material: 'concrete',
      category: 'Fantastic',
      id: '1',
      locale:'brazilian'
    },
    {
      hasDiscount: true,
      name: 'Rear view of modern home with pool',
      images: ['https://bit.ly/2Z4KKcF'],
      description: 'Modern home in city center in the heart of historic Los Angeles',
      price: '$1,900.00',
      discountValue:'0.05',
      material: 'concrete',
      category: 'Fantastic',
      id: '1',
      locale:'brazilian'
    },
    {
      hasDiscount: false,
      name: 'Rear view of modern home with pool',
      images: ['https://bit.ly/2Z4KKcF'],
      description: 'Modern home in city center in the heart of historic Los Angeles',
      price: '$1,900.00',
      discountValue:'0.05',
      material: 'concrete',
      category: 'Fantastic',
      id: '1',
      locale:'brazilian'
    }

  ]

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
        items.map(
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
