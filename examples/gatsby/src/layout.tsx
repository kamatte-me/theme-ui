/** @jsx jsx */
import { FC } from 'react'
import { Box, Container } from 'theme-ui'

export const Layout: FC = ({ children }) => {
  return (
    <Box sx={{ py: 2, px: 4 }}>
      <Box as="header">
        <h2>Theme UI Gatsby Example</h2>
      </Box>
      <Box as="main">
        <Container>{children}</Container>
      </Box>
    </Box>
  )
}
