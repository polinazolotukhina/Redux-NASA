import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/marsActions';
import List  from '../../components/List';
const FontAwesome = require('react-fontawesome');




class Mars extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
      const params = {
            sol: 1000,
            page: 3
          };
      this.props.actions.getMars('mars-photos/api/v1/rovers/curiosity/photos',params);

    }

    render() {
        const { mars } = this.props;
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <h3>Martian Rotation</h3>
                {  mars.isLoading  ? (<div className ="load">
                                      <FontAwesome name="spinner" size='4x'spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                                     </div>):(<List marsprops={mars}/>)}

              </div>



            </div>
          </div>

        );
    }
}

Mars.propTypes = {
    actions: PropTypes.object.isRequired,
    mars: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { mars, isLoading, error  } = state;
    return {
        mars,
        isLoading,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mars);
