import React from 'react';
//importing Card 
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

    //this component is designed to display the data 
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>this.props.movie.Title</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}