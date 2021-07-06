import React,  { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/dropzone/dist/min/dropzone.min.css";
import"../../../node_modules/react-dropzone-component/styles/filepicker.css"


export default class POrtfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "Fun",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
    }

    componentConfig() {
        return {
            iconFileTypes: [".jpg", ".pgn"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post",
        }
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1,
        }
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);

        return formData;
    }

    handleSubmit(event) {
        axios
        .post(
            "https://hyrumadams.devcamp.space/portfolio/portfolio_items",
            this.buildForm(), 
            { withCredentials: true }
        ).then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
        })
        .catch(error => {
            console.log("Portfolio form handleSubmit error", error)
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>PortfolioItems</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Portfolio Item name"
                            value={this.state.name}
                            onChange={this.handleChange} 
                        />
                         <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.handleChange} 
                        />
                         <select
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange} 
                        >
                            <option value="Fun">Fun</option>
                            <option value="Project">Project</option>
                            <option value="Board-Game">Board Game</option>
                        </select>
                    </div>

                    <div>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange} 
                        />

                        <div className="image-uploaders">
                            <DropzoneComponent 
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                            >

                            </DropzoneComponent>

                        </div>
                    </div>
                    <div>
                    <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}