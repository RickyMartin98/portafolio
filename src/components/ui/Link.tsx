import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link, { LinkProps } from '@mui/material/Link';
import { IoDocumentTextSharp } from 'react-icons/io5';

const LinkBehavior = React.forwardRef<
  any,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
      styleOverrides: {
        root: {
          /*color: "#F037A5",*/
          border: "3px solid #F037A5",
          width: "25%",
          height: "2%",
          textDecoration: "none",
          borderRadius: "10px",
          /* fontSize: "calc(10px + 2vmin)", */
          fontSize: "1.2rem",
          padding: "1% 5%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          bgColor: "#F037A5",
          background: "#F037A5",
          color: "#FFF",
          "&:hover": {
            color: "#FFF",
            boxShadow: "0px 1px 10px #F037A5",
          }
        }
      }
    },
     /* MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
      styleOverrides: {
        root: {
          BackgroundColor: "#F037A5"
        }
      }
    }, */
  },
});

interface Props {
  children?: string,
  to: string,
  size?: string
};

const LinkRouterWithTheme: React.FC<Props> = (props) => {
  return (
      <ThemeProvider theme={theme}>
          <Link href={props.to} sx={{width: props.size}}>{ props.children } <IoDocumentTextSharp  /></Link>
          {/* <Button href={props.to} variant="contained" endIcon={<IoDocumentTextSharp />}>
            { props.children }
          </Button> */}
      </ThemeProvider>
  );
}

export default LinkRouterWithTheme;