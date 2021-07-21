import axios from 'axios';
import React, { Component } from 'react';
import PortfolioItem from '../portfolio/portfolio-item';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {},
        }
    }

    UNSAFE_componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios
        .get(
            `https://hyrumadams.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
            { withCredentials: true }
            )
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item,

            })
        })
        .catch(error => {
            console.log("getPortfolioItem error", error);
        })
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url,
        } = this.state.portfolioItem

        const imageStyles = {
            backgroundImage: "url(" + thumb_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
        }

        const logoStyles = {
            width: "150px",
        }


        return (
            <div className="portfolio-detail-wrapper">
              <div className="banner" style={imageStyles}>
                <img src={logo_url} style={logoStyles} />
              </div>
          
              <div className="portfolio-detail-description-wrapper">
                <div classNaem="description">{description}</div>
              </div>
          
              <div className="bottom-content-wrapper">
                <a href={url} className="site-link" target="_blank">
                  Visit {name}
                </a>
              </div>
            </div>
          ); 
    }
}