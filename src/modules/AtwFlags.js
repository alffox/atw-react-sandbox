import React from "react";

//import AtwFlag from "./AtwFlag.js";

class AtwFlags extends React.Component {

  state = {
    initialFlags: [],
    currentFlags: []
  }

  filterList = (event) => {
    let currentFlags = this.state.initialFlags;
    currentFlags = currentFlags.filter((location) => {
      return location.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ currentFlags: currentFlags });
  }

  componentDidMount() {
    this.setState({
      initialFlags: this.props.content,
      currentFlags: this.props.content
    })
  }

  render() {
    console.log("this.props: " + this.props)
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="location-tags">
            <form>
              <input type="text" placeholder="Search" onChange={this.filterList} />
            </form>

            {this.state.currentFlags.map((location, index) => {
              return (
                <button onClick={this.props.handleClick.bind(
                  this,
                  location.index,
                  location.title,
                  location.country,
                  location.ISO_3166_1_alpha_2,
                )}
                  key={index}
                  type="button"
                >
                  {location.title}, {location.country}
                </button>
              );
            })


              // onClick={this.props.handleClick.bind(
              //   this,
              //   location.index,
              //   location.title,
              //   location.country,
              //   location.ISO_3166_1_alpha_2,
              // )}
              // key={index}
              // type="button"
              // className="btn btn-info m-1 flag-top"

              //  {this.props.locationsData.locations.map((location, index) => {
              //   return (
              //     <button
              //       onClick={this.props.handleClick.bind(
              //         this,
              //         location.index,
              //         location.title,
              //         location.country,
              //         location.ISO_3166_1_alpha_2,
              //       )}
              //       key={index}
              //       type="button"
              //       className="btn btn-info m-1 flag-top"
              //     >
              //       <div className={this.props.classes} />
              //       {this.locationTitle}, {this.locationCountry}
              //     </button>

              // <AtwFlag
              //   key={index}
              //   handleClick={this.props.handleClick}
              //   currentLocationIndex={index}
              //   currentLocation={location.title}
              //   currentCountry={location.country}
              //   currentLocationISO_3166_1_alpha_2={
              //     location.ISO_3166_1_alpha_2
              //   }
              //   currentWikiDescription={location.wiki.description}
              //   locationTitle={location.title}
              //   locationCountry={location.country}
              //   content={this.props.locationsData}
              // />
            }
          </h3>
        </div>
      </div>
    );
  }
}

export default AtwFlags;
