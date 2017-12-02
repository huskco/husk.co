import React from 'react';
import {Link} from 'react-router';
import InlineSVG from './components/InlineSVG';

export const sourceIcon = function(icon) {
  if (icon) {
    return (
      <InlineSVG src={icon} className="article-source-icon" />
    );
  }
};

export const prettyDate = function(articleDate) {
  const date = new Date(articleDate);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[date.getMonth()];
  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
};

export const renderSource = function(article) {
  const date = prettyDate(article.date);

  if (article.source) {
    const icon = sourceIcon(article.source_icon);
    return (
      <div className="article-meta">
        <Link to={article.url} target="new">Published by {icon} {article.source} on {date}</Link>
      </div>
    )
  }

  return date;
};
