import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class Newsitem extends Component {


    render() {

        return (
            <div className='my-4'>

                <div className="card" style={{ width: "18rem" }}>
                    <span style={{position:"absolute",right:'0'}} className=" small badge rounded-pill bg-danger">
                        {this.props.source}
                    </span>

                    <img style={{ height: '10em' }} src={this.props.imgsrc === null || undefined? 'https://e3.365dm.com/21/09/768x432/skynews-breaking-news_5513713.jpg?20210915162827': this.props.imgsrc} className="card-img-top" alt="unknown img" />

                    <div className="card-body">
                        <h5 className="card-title">{!this.props.title ? '' : this.props.title.slice(0, 40)}...</h5>
                        <p className="card-text">{!this.props.desc ? '' : this.props.desc.slice(0, 100)}...</p>
                        <a href={!this.props.url ? this.props.imgsrc : this.props.url} target='_blank' rel='noreferrer' className="btn btn-primary">Read more</a>
                    </div>

                </div>

            </div>
        )
    }
}

Newsitem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    imgsrc: PropTypes.string,
    url: PropTypes.string
}

Newsitem.defaultProps = {
    source:'source',
    title: 'default Title',
    desc: 'default Description',
    imgsrc: 'https://e3.365dm.com/21/09/768x432/skynews-breaking-news_5513713.jpg?20210915162827',
    url: 'https://e3.365dm.com/21/09/768x432/skynews-breaking-news_5513713.jpg?20210915162827'
}


export default Newsitem
