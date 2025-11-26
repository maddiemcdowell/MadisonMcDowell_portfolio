import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectPage({
  title,
  description,
  slideId,
  googleDocsUrl,
  techTags,
  githubLink,
  projectImages,
  websiteLink,
  codeSection,
}) {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <button onClick={() => navigate(-1)} className="back-arrow">
        ←
      </button>
      <div className="project-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {slideId && slideId !== "YOUR_GOOGLE_SLIDES_ID_HERE" && (
        <div className="slides-container">
          <iframe
            src={`https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=5000&rm=minimal`}
            frameBorder="0"
            width="100%"
            height="600"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            title={`${title} Presentation`}
          ></iframe>
          {websiteLink && (
            <div className="website-link">
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Website Prototype
              </a>
            </div>
          )}
        </div>
      )}

      {googleDocsUrl && (
        <div className="docs-container">
          <iframe
            src={googleDocsUrl}
            frameBorder="0"
            width="100%"
            height="600"
            title={`${title} Document`}
          ></iframe>
        </div>
      )}

      {title === "Coral Bleaching Data Analysis" && (
        <div className="tableau-container">
          <div className="tableau-link" style={{textAlign: 'center'}}>
            <a
              href="https://public.tableau.com/shared/NFX4R69RW?:display_count=n&:origin=viz_share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Tableau Dashboard
            </a>
          </div>
        </div>
      )}

      {codeSection && (
        <div className="code-section">
          <h2>{codeSection.title}</h2>
          <div className="code-container">
            <pre>
              <code>{codeSection.code}</code>
            </pre>
          </div>
        </div>
      )}

      {projectImages && projectImages.length > 0 && (
        <div className="project-images">
          {projectImages.map((image, index) => (
            <div key={index} className="project-image-item">
              <img src={image.src} alt={image.alt} className="project-image" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
