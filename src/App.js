import React from "react"

import ImageList from "./ImageList/ImageList"
import ImageSearch from "./ImageSearch/ImageSearch"

const API_KEY = "21612773-8b15b9c833adc818cfb32da5c"

class App extends React.Component {
  state = {
    images: [],
    error: null
  }
  handleMakeRequest = async (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.searchValue.value
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo`
    const request=await fetch(url)
    const results = await request.json()
    if (!searchValue) {
      this.setState({ error: "Please provide a value." })
    } else {
      this.setState({ images: results.hits, error: null })
    }
  }

  render() {
    return (
      <div>
        <ImageSearch handleMakeRequest={this.handleMakeRequest} />
        { 
          this.state.error !== null ? 
          <div style={{ color:"#fff", textAlign:"center" }}>{ this.state.error }</div> : 
          <ImageList images={this.state.images} /> 
        }
      </div>
    )
  }
}

export default App