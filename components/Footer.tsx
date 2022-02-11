import {FC} from 'react';
import Heading from "./H/H";
import {format} from 'date-fns'


export const Footer: FC = () => {
    // const copyDate: any = 'Created by'+ <a href="https://goodjob.space" target="_blank">GoodJob Space</a>+' © 2021, ' + format(new Date(), 'yyyy');

    return (
        <footer>
            {/*<Heading tag='h3' text={copyDate}/>*/}
            Created by G
            <a href="https://goodjob.space" target="_blank">oodJob Spac</a>e ©
            2021, {format(new Date(), 'yyyy')}
        </footer>
    );
};

