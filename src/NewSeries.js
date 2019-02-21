import React, { Component } from 'react'
import api from './Api'

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genres: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        api.loadGenres()
            .then((res) => {
                this.setState({
                    isLoading: false,
                    genres: res.data
                })
            })
    }
    render() {
        return (
            <section className="intro-section">
                <h1>Nova Série</h1>
                <form>
                    Nome: <input type="text" className="form-control" /><br />
                    Status:&nbsp;&nbsp;
                    <select>
                        {Object
                            .keys(statuses)
                            .map(key => <option key={key} value={key}>{statuses[key]}</option>)

                        }                        
                    </select><br />
                    Gênero:&nbsp;&nbsp;
                    <select>
                        {this.state.genres
                            .map(key => <option key={key} value={key}>{key}</option>)

                        }                        
                    </select><br />
                    
                    Comentários: <textarea className="form-control"></textarea><br />

                </form>


            </section>
        )
    }
}
export default NewSeries