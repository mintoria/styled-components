import '../styles/globals.css'
import App, { Container } from 'next/app'
import { ThemeProvider } from "styled-components";
import size from '../component/fontsize'; // from Step #1
import colors from '../component/colors';
import { withTheme } from 'styled-components';
class AntApp extends App {
    static async getInitialProps( { Component } ) { 
        if(Component.getInitialProps){
            const pageProps = await Component.getInitialProps()
            return { pageProps }
        }else{ return {}}
    }
    
    render(){
        const { Component,pageProps } = this.props
        return(
            <Container>
                <ThemeProvider theme={size}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        )
    }
}
export default withTheme(AntApp);