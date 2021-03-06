import React from "react"
import { Link } from "react-router-dom"

// Create a Link such that when a Card is clicked, it renders the 'Card View'
// Added to Card Route to the Router
// Need to Build Back Functionality to go back to the Board View
const CardContainer = ({ card }) => {

  const dateToString = (inputdate) => {
    let date = new Date(inputdate)
    let month = date.toLocaleString('en-us', { month: 'short' });
    let day = date.getDate()
    return `${month} ${day}`
  }

  return (
    <>
      <div className="card-background">
        <Link to={`/cards/${card._id}`}>
          <div className="card ">
            <i className="edit-toggle edit-icon sm-icon"></i>
            <div className="card-info">
              {card.labels.map(label => (
                <div key={label} className={`card-label ${label} colorblindable`}></div>
              ))}
              <p>
                {card.title}
              </p>
            </div>
            <div className="card-icons">
              {(card.dueDate)
              ? (<i className="clock-icon sm-icon overdue-recent completed">
                  {dateToString(card.dueDate)}
                </i>)
              : ""}
              <i className="description-icon sm-icon"></i>
              <i className="comment-icon sm-icon"></i>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default CardContainer