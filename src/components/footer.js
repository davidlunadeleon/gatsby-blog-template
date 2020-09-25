import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
	FaRssSquare,
	FaMastodon,
	FaInstagramSquare,
	FaTwitterSquare,
	FaFacebookSquare,
	FaYoutube,
	FaRedditSquare,
	FaSpotify,
	FaDiscord,
	FaLinkedin,
	FaTwitch
} from "react-icons/fa";
import { RiPixelfedFill } from "react-icons/ri";
import { SiPeertube } from "react-icons/si";
import { GrMail } from "react-icons/gr";

import styles from "./footer.module.css";

const Footer = ({ siteUrl, socialMedia }) => {
	const selectLogo = (name) => {
		switch (name) {
			case "Mastodon":
				return <FaMastodon />;
			case "Pixelfed":
				return <RiPixelfedFill />;
			case "Instagram":
				return <FaInstagramSquare />;
			case "Twitter":
				return <FaTwitterSquare />;
			case "Facebook":
				return <FaFacebookSquare />;
			case "Youtube":
				return <FaYoutube />;
			case "Peertube":
				return <SiPeertube />;
			case "Reddit":
				return <FaRedditSquare />;
			case "Spotify":
				return <FaSpotify />;
			case "Email":
				return <GrMail />;
			case "Discord":
				return <FaDiscord />;
			case "Linkedin":
				return <FaLinkedin />;
			case "Twitch":
				return <FaTwitch />;
			default:
				return <></>;
		}
	};

	const addSocialMediaLinks = () => {
		return socialMedia.map((mediaElement) => {
			return (
				<li className={styles.footerElement} key={mediaElement.name}>
					{selectLogo(mediaElement.name)}{" "}
					<a href={mediaElement.url} className="text-muted">
						{mediaElement.name} {mediaElement.description}
					</a>
				</li>
			);
		});
	};

	return (
		<footer
			className={`justify-content-center ${styles.footer} text-muted`}
		>
			<hr />
			<ul className={`list-unstyled row ${styles.footerList}`}>
				<li className="col-sm">
					<strong>Source Code</strong>
					<ul className={styles.footerColList}>
						<li className={styles.footerElement}>
							<AiFillGithub />{" "}
							<a
								href="https://github.com/davidlunadeleon/gatsby-blog-template"
								className="text-muted"
							>
								Github
							</a>
						</li>
					</ul>
				</li>
				<li className="col-sm">
					<strong>Social media, contact and feed</strong>
					<ul className={styles.footerColList}>
						<li className={styles.footerElement}>
							<FaRssSquare />{" "}
							<a
								href={`${siteUrl}/rss.xml`}
								className="text-muted"
							>
								RSS
							</a>
						</li>
						{addSocialMediaLinks()}
					</ul>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
