import React, { Component } from 'react';

export default class List extends Component {

  render() {
    const { marsprops } = this.props;
    console.log("LIST marsprops", marsprops.data.photos );

    return (
      <div>
            {
              marsprops.data.photos && marsprops.data.photos.slice(0, 18).map((item) =>
                <div key={item.id} className="col-sm-4 col-md-4 col-lg-2">
                  <div className="wrapper">
                  <a target="_blank" href={item.img_src}>
                      <img className="marsPic" src={item.img_src}/>
                  </a>
                  </div>
                      <p className="center">Name : {item.camera.full_name}</p>
                      <p className="center">Date:{item.earth_date}</p>
                </div>
              )
            }
      </div>
    )
  }
}
