import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/marsActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const moment = require('moment');
const FontAwesome = require('react-fontawesome');


class Mars extends React.Component {
    constructor(props){
        super(props);
        this.showImg = this.showImg.bind(this);
        this.handleType = this.handleType.bind(this);
        this.showInfo= this.showInfo.bind(this);

        this.state={
          date: '',
          today: moment(),
          display: 'none',
          text: 'show more'
       };
    }

    componentDidMount(){
      this.showImg();
    }
    showImg(params=null){
      this.props.actions.getMars('planetary/apod', params);
    }
    handleType(date) {
      this.showImg({ date: date.format('YYYY-MM-DD') });
    }
    showInfo(){
    const  newDisplay =  this.state.display == "none" ? "block" : "none";
    const  newText =  this.state.text == 'show more' ? 'show less' : 'show more';
      this.setState({
        display: newDisplay,
        text: newText
      });
    }

    render() {
        const { mars } = this.props;
        return (
          <div className="container">

            <div className="col-md-offset-2 col-md-8">
              <div className=" allInfo">
                <div className="row">
                  <div className = "col-md-12">

                    <h3 className="text-center">{mars.data.title}</h3>
                    {
                      mars.data.copyright && <p className=" text-center cursive">by {mars.data.copyright}</p>
                    }
                    <div className="text-center">
                      <DatePicker
                        dateFormat="YYYY-MM-DD"
                        placeholderText ="Choose a day 📆"
                        maxDate={this.state.today}
                        selected={this.state.date}
                        onChange={this.handleType}
                      />
                    </div>
                    {  mars.isLoading  ? (<div className ='load'>
                                          <FontAwesome name="spinner" size='4x'spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                                         </div>) : (
                                              (mars.data.media_type =="video" ) ? (
                                                <iframe width="100%" height="455"src={mars.data.url}/>
                                              ):(
                                                <img className = "fadeIn"  src={mars.data.url}/>
                                          )

                                        )

                    }

                    <p  className = "fadeIn" style={{display:this.state.display}}> {mars.data.explanation} <hr/></p>
                    </div>
                    <div className="col-md-6">
                    {
                      (mars.data.media_type =="video" ) ?(<p> Video Of The Day</p>):(<p> Photo Of The Day, {mars.data.date}</p>)
                    }
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-default" onClick={this.showInfo}> {this.state.text}</button>
                  </div>

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
