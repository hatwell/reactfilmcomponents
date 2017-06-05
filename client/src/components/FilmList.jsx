import React from 'react'
import Film from './Film.jsx'

class FilmList extends React.Component {
  render() {
  const filmNodes = this.props.data.map((film) => {
    return (
    <Film title={film.showtimes} key = {film.id}>
      {film.title}
    </Film>
  )
  })

  return (
    <div className="comment-list">
      { filmNodes }
    </div>
  )
}
}

export default FilmList;
