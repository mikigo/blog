import{_ as i,c as a,R as n,o as h}from"./chunks/framework.DEC0wfly.js";const y=JSON.parse('{"title":"Linux 上安装 Python 3.9.9","description":"","frontmatter":{"Author":"mikigo"},"headers":[],"relativePath":"编程基础/Python/Linux上安装Python3.9.9.md","filePath":"编程基础/Python/Linux上安装Python3.9.9.md","lastUpdated":1736789141000}'),t={name:"编程基础/Python/Linux上安装Python3.9.9.md"};function l(p,s,k,e,F,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="linux-上安装-python-3-9-9" tabindex="-1">Linux 上安装 Python 3.9.9 <a class="header-anchor" href="#linux-上安装-python-3-9-9" aria-label="Permalink to &quot;Linux 上安装 Python 3.9.9&quot;">​</a></h1><p>在 deepin 上默认是 Python 版本是 3.7.3 ，在做一些 Django 项目的时候需要用到 3.9 版本；</p><p>此脚本直接下载并安装 Python 3.9.9，复制以下脚本执行在本地执行即可；</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://python.p2hp.com/downloads/source/index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3.9.9&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python_into</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3.9&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib1g-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libbz2-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libssl-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libncurses5-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libsqlite3-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libreadline-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tk-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libgdbm-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libdb-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libpcap-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xz-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libexpat1-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> liblzma-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libffi-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libc6-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmmirror.com/-/binary/python/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_version}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Python-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_version}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Python-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_version}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.tgz</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 放在/usr/local/share/下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Python-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_version} </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/share/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /usr/local/share/Python-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_version}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=/usr/local/python\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python_into</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置优化选项--enable-optimizations</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ./configure --prefix=/usr/local/python\${python_into} --enable-optimizations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置软连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_into}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bin/python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_into} </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/bin/python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_into}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_into}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bin/python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_into}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${python_into}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-config</span></span></code></pre></div><hr>`,5)]))}const o=i(t,[["render",l]]);export{y as __pageData,o as default};
