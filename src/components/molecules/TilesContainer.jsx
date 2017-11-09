import React from 'react';

// import Tiles here!
import TubeStatus from 'react-tube-status';
//

class TilesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: [<TubeStatus />]
    }
  }

  componentWillMount() {
    // attach keys to all components added to tiles object in state
    this.setState(() => {
      let key = 0;
      const tilesWithKeys = this.state.tiles.map(tile => {
        key++;
        return React.cloneElement(
          tile,
          {key}
        )
      });

      return { tiles: tilesWithKeys }
    });
  }

  render() {
    return (
      <div>
        {this.state.tiles.map(tile => tile)}
      </div>
    );
  }
}

export default TilesContainer;
