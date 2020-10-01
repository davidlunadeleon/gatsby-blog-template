import React from "react";
import { useIntl } from "gatsby-plugin-intl";
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

import { languages, languageName } from "../../config";

const Footer = ({ siteUrl, socialMedia }) => {
	const intl = useIntl();

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

	const addRssFeeds = () => {
		return languages.map((lang) => {
			const ref = `${siteUrl}/rss_${lang}.xml`;
			return (
				<li className={styles.footerElement} key={ref}>
					<FaRssSquare />{" "}
					<a href={ref} className="text-muted">
						RSS {languageName[lang]}
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
					<strong>{intl.formatMessage({ id: "source_code" })}</strong>
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
					<strong>
						{intl.formatMessage({ id: "social_media_and_more" })}
					</strong>
					<ul className={styles.footerColList}>
						{addSocialMediaLinks()}
						{addRssFeeds()}
					</ul>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
