import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import Pagination from './Pagination'
// import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loading: true,
      page: 1,
    };
  }

  async update() {

    this.props.setProgress(20);

    this.setState({
      loading: true,
    });

    let url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
    );
    this.props.setProgress(30);

    let newdata = await url.json();
    this.props.setProgress(50);

    this.setState({
      data: newdata.articles,
      loading: false,
      total: newdata.totalResults,
    });

    this.props.setProgress(100);

  }

  componentDidMount() {
    console.log("componentDidMount");
    this.update();
  }

  // fetchMoreData = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //     loading: true,
  //   });

  //   let url = await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
  //   );

  //   let newdata = await url.json();

  //   this.setState({
  //     data: this.state.data.concat(newdata.articles),
  //     loading: false,
  //     total: newdata.totalResults,
  //   });
  // };

  nextPg = () => {
    this.setState({
      page: this.state.page + 1
    })

    this.update();
  }

  prevPg = () => {
    this.setState({
      page: this.state.page - 1
    })

    this.update();
  }


  render() {
    console.log("render");
    return (
      <div className="container d-flex flex-column p-0 mb-0">
        <div className="container row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">

          {/* <InfiniteScroll
            className=''
              dataLength={this.state.data.length}
              next={this.fetchMoreData}
              hasMore={this.state.data.length !== this.state.data.totalResults}
              loader={this.state.loading ? <Loading /> : ""}
              // scrollableTarget="scrollableDiv"
              > */}

          {this.state.loading ? <Loading /> : this.state.data.map((article) => {
            return (
              <div
                className="d-flex justify-content-center "
                key={article.url + Math.random()}
              >
                <Newsitem
                  title={article.title}
                  desc={article.description}
                  imgsrc={article.urlToImage}
                  url={article.url}
                  source={article.source.name}
                />
              </div>


            );
          })
          
          }
          {/* </InfiniteScroll> */}



        </div>
        <Pagination nextPg={this.nextPg} prevPg={this.prevPg} />
      </div>
    );
  }
}

News.defaultProps = {
  pageSize: 6,
  country: "",
  category: "general",
  apiKey: process.env.REACT_APP_API_KEY
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
