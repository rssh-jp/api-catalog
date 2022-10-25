import React, { ReactNode, ReactText, useEffect, useState } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, FiTarget } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { gql, useQuery } from '@apollo/client'

interface LinkItemProps {
  name: string
  icon: IconType
  path: string
}

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const BaseLinkItems: Array<LinkItemProps> = [
  { path: '/', name: 'Home', icon: FiHome },
  { path: '/login?path="https://github.com/rssh-jp/test-react"', name: 'Trending', icon: FiTrendingUp },
  { path: '/b', name: 'Explore', icon: FiCompass },
  { path: '/c', name: 'Favourites', icon: FiStar },
  { path: '/swagger?url=https://petstore.swagger.io/v2/swagger.json', name: 'Settings', icon: FiSettings },
]

const QUERY_SETTINGS = gql`
  query settings {
    settings {
      id
      name
      url
    }
  }
`
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [linkItems, setLinkItems] = useState<Array<LinkItemProps>>([])
  const { loading, data, error } = useQuery(QUERY_SETTINGS)
  useEffect(() => {
    console.log('++++++++++++', data)
    if (data == null) {
      return
    }
    let list: LinkItemProps[] = BaseLinkItems
    data.settings.map((item: any) => {
      console.log('+++', item)
      list.push({ path: '/swagger?id=' + item.id, name: item.name, icon: FiTarget })
    })
    setLinkItems(list)
  }, [data])
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
  path: string
}
const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  return (
    <Link href={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}
    >
      <IconButton variant='outline' onClick={onOpen} aria-label='open menu' icon={<FiMenu />} />

      <Text fontSize='2xl' ml='8' fontFamily='monospace' fontWeight='bold'>
        Logo
      </Text>
    </Flex>
  )
}
