import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    console.log(this.props.monster);

    return (
      <div className="card-container" key={id}>
        <img alt={`Monster ${name}`} src={`https://robohash.org/${id}/?set=set5&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
