import React from 'react';

class Typeahead extends React.Component {
    constructor(props){
        super(props);
        this.endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        this.cities = [];
        this.state = {
            lookup : ""
        }
    }

    componentDidMount() {
        fetch(this.endpoint)
            .then((data) => data.json())
            .then((data) => {
                this.cities = data;
            })
    }

    formatNumber(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    filterCity = (e) => {
        let find = e.target.value;
        this.setState({
            lookup : find
        })
    }

    simpleDebounce = (fn, interval) => {
        return (e) => {
            e.persist();
            if (this.debounce) {return ;}
            this.debounce = setTimeout(() => {
                fn(e);
                clearTimeout(this.debounce);
                this.debounce = undefined;
            }, interval)
        }
    }

    render() {
        const {lookup} = this.state;
        const regex = new RegExp(lookup, "ig");
        return (
            <form className="search-form">
                <input type="text"
                    onChange={this.simpleDebounce(this.filterCity, 300)}
                    className="search"
                    placeholder="City or State" />
                {lookup.length === 0 ?
                    <ul className="suggestions">
                        <li>Filter for a city</li>
                        <li>or a state</li>
                    </ul>
                :
                <ul className="suggestions">
                    {this.cities
                        .filter((data) => data.city.match(regex) || data.state.match(regex))
                        .map((data, idx) => {
                            let wordDisplay = `${data.city}, ${data.state}`;
                            wordDisplay = wordDisplay.replace(regex, `%${lookup}%`).split("%")
                                .map( (item, idx) => {
                                    if (item.match(regex)) {
                                        let key = `partial-${idx}`;
                                        return (
                                            <span key={key} className="hl">{item}</span>
                                        )
                                    } else return `${item}`;
                                });
                        return (
                            <li key={idx}>
                                <span className="name">
                                    {wordDisplay}
                                </span>
                                <span className="population">
                                    {this.formatNumber(data.population)}
                                </span>
                            </li>
                        )
                    })}
                </ul>
                }
            </form>
        );
    }
}

export default Typeahead;

