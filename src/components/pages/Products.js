import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import FileSaver from 'file-saver';

import './Products.css';

function Products() {

  let [markdownText, setMarkDownText] = useState("");
  let [renderedHTML, setRenderedHTML] = useState("");
  let [fileName, setFileName] = useState("untitled-note");
  function handleTextInput(e) {

    setMarkDownText(e.target.value);

    let md = new MarkdownIt();
    let renderedHTML = md.render(e.target.value);

    setRenderedHTML(renderedHTML);
  }

  function saveHTML() {

    let blobFile = new Blob([renderedHTML], {
    type: "text/html"
    });

    FileSaver.saveAs(blobFile, fileName);
  }

  function saveMarkdown() {
    let blobFile = new Blob([markdownText], {
    type: "text"
    });

    FileSaver.saveAs(blobFile, fileName);
  }
  return (
    <div className="container">
    <h2 className="app-heading text-center
            display-4 my-3">
      React Markdown Notes
    </h2>
    <div className="row">
      <div className="col col-sm-12 col-md-6">
  
      {/* Card for the markdown editor */}
      <div className="card bg-light markdown-editor">
        <h4 className="card-title text-center">
        Markdown
        </h4>
        <div className="card-body">
  
        {/* Textarea for the markdown editor */}
        <textarea
          className="form-control markdown-textarea"
          rows={20}
          value={markdownText}
          onChange={handleTextInput}
        ></textarea>
        </div>
      </div>
      </div>
      <div className="col col-sm-12 col-md-6">
  
      {/* Card for the markdown editor */}
      <div className="card bg-light rendered-output">
        <h4 className="card-title text-center">
        Output
        </h4>
  
        {/* Textarea for the markdown editor */}
        <div className="card-body">
        <div
          dangerouslySetInnerHTML={{ __html: renderedHTML }}
          className="rendered-html-output"
        >
        </div>
        </div>
      </div>
      </div>
    </div>
  
    <div className="row">
      <div className="col col-sm-12">
  
      {/* Card for the save files option */}
      <div className="card bg-light my-3">
        <div className="card-body">
        <div className="input-group">
          <h4>Save Content</h4>
          <input
          type="text"
          className="form-control"
          placeholder="File name"
          aria-label="File name"
          value={fileName}
          onChange={fname => setFileName(fname.target.value)}
          />
  
          {/* Buttons for saving the text */}
          <div className="input-group-append">
          <button className="btn btn-primary"
              type="button"
              onClick={saveMarkdown}>
                Save Markdown
          </button>
          <button className="btn btn-primary"
              type="button"
              onClick={saveHTML}>
                Save HTML
          </button>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Products;
