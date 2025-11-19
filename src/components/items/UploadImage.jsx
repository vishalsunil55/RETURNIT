// src/components/items/UploadImage.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UploadImage.css';


const UploadImage = ({ onUpload, multiple = false, maxFiles = 3 }) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files).slice(0, maxFiles);
    const previewsData = fileArray.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));

    setPreviews(previewsData);

    // Pass back only URLs or file objects as needed
    onUpload(previewsData.map(p => p.file));
  };

  return (
    <div className="upload-image">
      <label className="upload-image__label">
        Choose image{multiple ? 's' : ''}:
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
        />
      </label>

      <div className="upload-image__previews">
        {previews.map((p, index) => (
          <div key={index} className="upload-image__preview">
            <img
              src={p.url}
              alt={`Preview ${index + 1}`}
              className="upload-image__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

UploadImage.propTypes = {
  onUpload: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  maxFiles: PropTypes.number
};

export default UploadImage;
