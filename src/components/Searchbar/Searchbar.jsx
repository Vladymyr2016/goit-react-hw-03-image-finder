import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return;
    <header className="searchbar">
      <form className="form">
        <button type="submit" class="button">
          <span className="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>;
  }
}

export default Searchbar;

// import React, { Component } from 'react';

// class Searchbar extends Component {
//   render() {
//     return (
//       <div>
//
//       </div>
//     );
//   }
// }
