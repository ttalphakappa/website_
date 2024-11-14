import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {
                  <img
                    src={require(`../../assets/${projectsHeader["avatar_image_path"]}`)}
                    alt=""
                  />
                }
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>

        {/* <div className="profile-cards-div-main">
	  {ProjectsData.data.map((profile) => (
	    <div className="profile-card" key={profile.id}>
	      {profile.photo && (
	        <img
	          src={require(`../../${profile.photo}`)}
	          alt={profile.name}
	          className="profile-photo"
	        />
	      )}
	      <h2 style={{ color: theme.text }}>{profile.name}</h2>
	      <p style={{ color: theme.secondaryText }}>{profile.description}</p>
	      <a href={profile.url} target="_blank" rel="noopener noreferrer">
	        LinkedIn
	      </a>
	    </div>
	  ))}
	</div> */}

        {/* <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} key={pub.id}/>;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
