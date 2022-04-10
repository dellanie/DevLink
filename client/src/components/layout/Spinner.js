import React, {Fragment} from 'react';
import spinner from './spinner.gif';

export default () => (
    <Fragment>
        <img
            src={spinner}
            style={{width:'200px',margin:'auto',display:'block'}}
            alt='Loading...'
        />
    </Fragment>
)

//<i class="fa fa-spinner fa-spin fa-4x"></i>  for gif spinner with font awesome