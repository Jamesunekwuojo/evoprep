import { ReactNode } from "react";

const AuthLayout = ({children}: {children:ReactNode}) => {
    return ( 
        <html>
            <body>

                {children}
                
            </body>
         

        </html>
     );
}
 
export default AuthLayout;