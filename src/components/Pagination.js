import React, { Component } from 'react'

export class Pagination extends Component {

    render() {
        return (
            <div className="container d-flex justify-content-between mt-5 pb-5">
                <button onClick={this.props.prevPg} disabled={this.props.page <= 1 ? 'disabled' : ''} className='btn btn-danger'>← Previous</button>

                <button onClick={this.props.nextPg} className='btn btn-danger'>→ Next</button>
            </div>

            // disabled={this.props.page + 1 > Math.ceil(this.props.total / this.props.size)}
        )
    }
}

export default Pagination