import React, { Component } from "react";
import "./FileDropper.css";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FileDropper extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    this.setState({
      files: files.map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }))
    });
  }

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    const { files } = this.state;
    for (let i = files.length; i >= 0; i--) {
      const file = files[0];
      URL.revokeObjectURL(file.preview);
    }
  }

  render() {
    const { files } = this.state;

    const thumbs = files.map(file => (
      <div className="thumb">
        
        <div className="thumbInner">
        
          <h5>Your Logo: </h5>
          <hr/>
          <img className="thumb-img" src={file.preview} alt="thumb"/>
        </div>
      </div>
    ));

    return (
      <div className="FileDropper">
        <section>
          <div className="dropzone">
            <Dropzone accept="image/*" onDrop={this.onDrop.bind(this)}>
              <FontAwesomeIcon icon="upload" />
              <p>Try dropping some files here, or click so select files to upload.</p>
            </Dropzone>
          </div>
          <aside className="thumbsContainer">{thumbs}</aside>
        </section>
      </div>
    );
  }
}
export default FileDropper;
