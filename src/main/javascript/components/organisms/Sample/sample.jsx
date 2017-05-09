import React from 'react';

import {connect} from '../../../redux/default-connect';

class Sample extends React.Component {
    render = () =>
        <div>
            {this.props.sample.message}
        </div>;
}

export default connect(Sample);