import { Calculator } from '@pages/Calculator';
import {Counter} from '@pages/Counter'; 

export const routes=[
    {
        path:"/",
        Component:Counter
    },
    {
        path:"/calculator",
        Component:Calculator
    }
]