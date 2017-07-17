import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/marsActions';
import List  from '../../components/List';




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
                <h1>Martian Rotation</h1>
              </div>
                <List marsprops={mars}/>
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
