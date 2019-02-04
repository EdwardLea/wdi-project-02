import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Map from './Map'
import Loader from '../common/Loader'

const zomatoKey = process.env.ZOMATO_USER_KEY

class PlacesShow extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  handleClick(){
    this.props.history.push('/places')
  }

  componentDidMount(){
    axios
      .get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.match.params.id}`, {headers: {'Content-Type': 'application/json', 'user-key': zomatoKey}})
      .then( res => {
        const zomato = res.data
        this.setState({ zomato })
      })
  }

  render(){

    if(!this.state.zomato) return <Loader />
    let {name, featured_image, cuisines, location, price_range, average_cost_for_two, user_rating, menu_url} = this.state.zomato

    featured_image = featured_image === '' ? `../../../assets/images/placeHolderImages/placeholder${(""+this.props.match.params.id).split('')[((""+this.props.match.params.id.length)-1)]}.jpg` : featured_image

    return(
      <div className="container">
        <div className="section show-section">
          <div className="left-pane">
            <Link to="/places" className="button back">BACK</Link>
            <div className="show">
              <h3 className="title is-1">{name}</h3>
              <div className="fsa-rating" style={ {backgroundImage: `url(\"/assets/images/fsa-full/fhrs_${this.props.match.params.fsa}_en-gb.jpg\")`}}>
              </div>
              <div className="level">
                <h4 className="level-item">{cuisines}</h4>
                <h4 className="level-item">|</h4>
                <h4 className="level-item">
                  {(price_range===1)&& " £ "}
                  {(price_range===2)&& " ££ "}
                  {(price_range===3)&& " £££ "}
                </h4>
                <h4 className="level-item">|</h4>
                <h4 className="level-item">
                {(user_rating.aggregate_rating>=0)&& '⭐️'}
                {(user_rating.aggregate_rating>1)&& '⭐️'}
                {(user_rating.aggregate_rating>2)&& '⭐️'}
                {(user_rating.aggregate_rating>3)&& '⭐️'}
                {(user_rating.aggregate_rating>4)&& '⭐️'}
                </h4>
              </div>
              <a className="button" target="blank" href={`${menu_url}`}>{ 'View Menu' }</a>
              <address className="address">{ `${location.address}` }</address>
            </div>
            <div className="card-bg" style={ {backgroundImage: `url(${featured_image})`}}></div>
          </div>
          <Map location={location} zoom="12" bound={true}/>
        </div>
      </div>
    )
  }
}

export default PlacesShow
