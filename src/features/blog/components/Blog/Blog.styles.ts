import { Container, chakra, Divider, Heading, Text, UnorderedList, OrderedList } from '@chakra-ui/react'

export const BlogArea = chakra(Container, {
  baseStyle: {
    maxWidth: '100%',
    padding: 0,
  },
})

export const H1 = chakra(Heading, {
  baseStyle: {
    color: 'black',
    fontSize: 'h1',
    fontWeight: 700,
    lineHeight: 'h1',
    borderBottomWidth: 1,
    borderBottomColor: 'gray.150',
    marginTop: 4,
    marginBottom: 1,
  },
})

export const H2 = chakra(Heading, {
  baseStyle: {
    color: 'black',
    fontSize: 'h2',
    fontWeight: 700,
    lineHeight: 'h2',
    marginTop: 3.5,
    marginBottom: 0.5,
  },
})

// export const H3 = chakra(Heading, {
//   baseStyle: {
//     color: 'black',
//     fontSize: 'h1',
//     fontWeight: 700,
//     lineHeight: 'h1',
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//     marginTop: 4,
//     marginBottom: 1,
//   },
// })

// export const H4 = chakra(Heading, {
//   baseStyle: {
//     color: 'black',
//     fontSize: 'h1',
//     fontWeight: 700,
//     lineHeight: 'h1',
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//     marginTop: 4,
//     marginBottom: 1,
//   },
// })

// export const H5 = chakra(Heading, {
//   baseStyle: {
//     color: 'black',
//     fontSize: 'h1',
//     fontWeight: 700,
//     lineHeight: 'h1',
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//     marginTop: 4,
//     marginBottom: 1,
//   },
// })

export const P = chakra(Text, {
  baseStyle: {
    color: 'black',
    fontSize: 'p',
    lineHeight: 'p',
    marginTop: 0.5,
    marginBottom: 0.5,
    letterSpacing: 'wide',
  },
})

export const Ul = chakra(UnorderedList, {
  baseStyle: {
    paddingLeft: 1.5,
    marginLeft: 0,
    marginTop: 1,
    marginBottom: 1,
  },
})

export const Ol = chakra(OrderedList, {
  baseStyle: {
    paddingLeft: 1.5,
    marginLeft: 0,
    marginTop: 1,
    marginBottom: 1,
  },
})

export const BlockQuote = chakra('blockquote', {
  baseStyle: {
    color: 'gray.150',
    bgColor: 'gray.50',
    borderWidth: 1,
    borderColor: 'gray.150',
    borderRadius: 'base',
    padding: 1,
  },
})

export const Hr = chakra(Divider, {
  baseStyle: {
    borderColor: 'gray.150',
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
})

export const Bold = chakra('strong', {
  baseStyle: {
    fontWeight: 700,
  },
})

export const Italic = chakra('span', {
  baseStyle: {
    fontStyle: 'italic',
  },
})

export const Underline = chakra('span', {
  baseStyle: {
    textDecorationLine: 'underline',
  },
})

export const Pre = chakra('pre', {
  baseStyle: {
    paddingTop: 1,
    paddingBottom: 1,
    bgColor: 'code',
    borderRadius: 'base',
  },
})

export const Code = chakra('code', {
  baseStyle: {
    width: '100%',
    bgColor: 'code',
    color: 'white',
    padding: 1,
    borderRadius: 'base',
  },
})
