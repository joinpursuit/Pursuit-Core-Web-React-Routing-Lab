import React from "react";
import axios from "axios";

class GetDogByBreed extends React.Component {
  state = {
    breed: []
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  populateSelect = async () => {
    try {
      let res = await axios.get("https://dog.ceo/api/breeds/list/all");

      this.setState({ breed: Object.keys(res.data.message) });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.populateSelect();
  }

  render() {
    const options = this.state.breed.map(breed => {
      return (
        <option value={breed} key={breed}>
          {breed}
        </option>
      );
    });
    return (
      <div>
        <form onChange={this.handleSubmit}>
          <select>
            <option disabled>Select Breed</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

export default GetDogByBreed;
