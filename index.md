---
layout: page.njk
title: Home
---

{% block content %}
<div class="pure-g">
  <div class="pure-u-1 pure-u-md-1-2">
    <h1 class="no-anchor"><b>Welcome to my blog!</b> 👋</h1>
    <b>My name is Christian, cri for short</b>
    <br/>
    A <a href="https://twitter.com/christian_fei" target="_blank">passionate web developer</a> from <b>Italy</b>
    <p>I am an agile enthusiast, clean code connoisseur & testing aficionado<p>
    <a class="cta" href="/subscribe/">Subscribe to my newsletter</a>
    <p>Read some <a href="/posts">featured blog posts</a>, <a href="/books">recommended books</a> and skim through <a href="/archive">the archive</a></p>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="cf">
      <a href="/about" class="no-underline">
        <img class="avatar-image no-shadow" alt="me with sunglasses" lazy="/assets/images/cf4.png"/>
      </a>
      <p>
        Read more <a href="/about">about me</a> and <a href="https://twitter.com/christian_fei" target="_blank">follow me <i class="icon icon-twitter"></i></a></br>
      </p>
    </div>
  </div>
</div>
<div>
  <p>
  You can <b>support me</b> through my <a href="https://github.com/sponsors/christian-fei">GitHub Sponsor page ✌️</a>
  See a <b>data visualization</b> of my <a href="/contributions">GitHub contributions 📈</a> over the years
  </p>
  {% include 'subscribe-to-newsletter.html' %}
</div>
{% endblock %}
