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

      this.props.actions.getMars('planetary/apod');

    }

    render() {
        const { mars } = this.props;
        console.log("PHOTO OF THE DAY", mars.data)
        return (
          <div className="container">
            <div className="row">
              <div className = "col-md-offset-1 col-md-10">
                <div className="text-center fadeIn">
                    {
                      (mars.data.media_type =="video" ) ?(<h3> Video Of The Day</h3>):(<h3> Photo Of The Day</h3>)
                    }
                    <h1>{mars.data.title}</h1>
                    {
                      mars.data.copyright && <p>by {mars.data.copyright}</p>
                    }

                    {
                      (mars.data.media_type =="video" ) ? (
                        <iframe width="520" height="355"src={mars.data.url}></iframe>
                      ):(
                        <img src={mars.data.url}/>
                      )
                    }





                    <p className="text-left">{mars.data.date}</p>
                    <p className="text-left">{mars.data.explanation}</p>
                </div>
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
