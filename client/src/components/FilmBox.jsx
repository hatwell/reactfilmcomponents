import React from 'react'
import FilmList from './FilmList.jsx'

class FilmBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [{id:1, title:"clueless", showtimes:"1300, 1800"}, {id:2, title:"american honey", showtimes:"1300, 1900"}]
    }
  }

  render() {
    return(
    <div className="comment-box">
      <FilmList data={this.state.data}/>
    </div>
  )

  return(
    <button id="get-showtimes">Get Showtimes!</button>
  )
  }

}

export default FilmBox
