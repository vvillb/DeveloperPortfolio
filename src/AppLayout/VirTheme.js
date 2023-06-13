import { createTheme } from "@mui/material";

export const VirTheme=createTheme(

    {
        palette:{
            background:{
                main:'',
                secondary:''
            },
            highlights:{
                main:'',
                secondary:''
            }
        },
        typography:{
            h1:{
                fontFamily: "'Karla' ,'Playfair Display'",
                color:'#2f365f'
            },
            h2:{
                fontFamily:  "'Karla','Playfair Display'",
                color:'#2f365f'
            },
            h3:{
                fontFamily:  "'Karla','Playfair Display'",
                color:'#2f365f'
            },h4:{
                fontFamily:  "'Karla','Playfair Display'",
                background:"#f7f1ed"
            },
            h5:{
                fontFamily: "'Inconsolata','Cormorant Garamond'"  
            },     
            h6:{
                fontFamily: "'Inconsolata','Cormorant Garamond'"       
            },
            subtitle1:{
                fontFamily: "'Inconsolata','Cormorant Garamond'" 
            },
            subtitle2:{
                fontFamily: "'Inconsolata','Cormorant Garamond'" 
            },
            body1:{
                fontFamily: "'Inconsolata','Cormorant Garamond'"         },
            body2:{
                fontFamily: "'Inconsolata','Cormorant Garamond'" 
            },
            button:{
                fontFamily: "'Inconsolata','Cormorant Garamond'" 
            },
            caption:{
                fontFamily: "'Inconsolata','Cormorant Garamond'" 
            },
            overline:{
                fontFamily: "'Inconsolata','Cormorant Garamond'" 
            },  
            h3Smaller:{
                fontFamily:  "'Karla','Playfair Display'",
                color:'#2f365f',
                fontSize:'200%'
            },
            h3med:{
                fontFamily:  "'Karla','Playfair Display'",
                color:'#2f365f',
                fontSize:'250%'
            },   
           
        },components:{
            MuiButton:{
                styleOverrides: {
                    root: {
                      fontSize: '0.8rem',
                      textDecoration:'none',
                      color:'#2f365f',
                      
                    },
                    contained:{
                        backgroundColor:'#2f365f',
                        color:'#f7f1ed',
                        ':hover':{
                            backgroundColor:'#febeb0'
                        }  
                        
                    },
                    outlined:{
                        borderColor:'#2f365f'
                    }
                 
                  },
            },
            MuiLink:{
                styleOverrides:{
                    root:{
                        textDecoration:'none',
                        textTransform:'lowercase',
                        
                    }
                }
            }
        }
    }
    )