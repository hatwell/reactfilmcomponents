import React from 'react'

class Film extends React.Component {
  render(){
    return(
      <div className="film">
        <button className="save-film"></button>
        <h4 className="film-title">
          {this.props.title}
        </h4>
        <a className="showtimes" href={this.props.showtimes}>
          showtimes
        </a>
      </div>
    )
  }


}

export default Film;
