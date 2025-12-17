// src/components/items/UploadImage.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UploadImage.css';

const UploadImage = ({ onUpload, multiple = false, maxFiles = 3 }) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []).slice(0, maxFiles);

    const previewsData = files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));

    setPreviews(previewsData);
    onUpload(previewsData.map(p => p.file));
  };

  const removeImage = (index) => {
    const updated = previews.filter((_, i) => i !== index);
    setPreviews(updated);
    onUpload(updated.map(p => p.file));
  };

  return (
    <div className="upload-image">
      <label className="upload-image__dropzone">
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
        />
        <div className="upload-image__text">
          <strong>Click to upload</strong> or drag & drop images<br />
          <span>Up to {maxFiles} image{maxFiles > 1 ? 's' : ''}</span>
        </div>
      </label>

      {previews.length > 0 && (
        <div className="upload-image__previews">
          {previews.map((p, index) => (
            <div key={index} className="upload-image__preview">
              <img
                src={p.url}
                alt={`Preview ${index + 1}`}
                className="upload-image__img"
              />
              <button
                type="button"
                className="upload-image__remove"
                onClick={() => removeImage(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

UploadImage.propTypes = {
  onUpload: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  maxFiles: PropTypes.number
};

export default UploadImage;
