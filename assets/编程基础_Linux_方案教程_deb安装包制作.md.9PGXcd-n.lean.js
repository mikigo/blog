import{_ as i,c as a,R as n,o as l}from"./chunks/framework.DEC0wfly.js";const g=JSON.parse('{"title":"前言","description":"","frontmatter":{"Author":"禄烨"},"headers":[],"relativePath":"编程基础/Linux/方案教程/deb安装包制作.md","filePath":"编程基础/Linux/方案教程/deb安装包制作.md","lastUpdated":1736789141000}'),h={name:"编程基础/Linux/方案教程/deb安装包制作.md"};function p(t,s,e,k,F,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>自己编写的 Python 脚本代码，自己运行还好，让别人用的时候，不方便传输，也不方便运行，制作成 deb 包后完美解决，网上搜索了很多文章，都没有一次打包成功过，故总结这样一份文档教程。</p><p>我当前使用的系统： uos专业版</p><h2 id="打包需要的库" tabindex="-1">打包需要的库 <a class="header-anchor" href="#打包需要的库" aria-label="Permalink to &quot;打包需要的库&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-essential</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debmake</span></span></code></pre></div><h2 id="制作-debian-配置文件目录" tabindex="-1">制作 debian 配置文件目录 <a class="header-anchor" href="#制作-debian-配置文件目录" aria-label="Permalink to &quot;制作 debian 配置文件目录&quot;">​</a></h2><p>源码目录下，创建 debian 的配置文件目录。在程序源代码目录下有一个叫做 debian 的新的子目录。这个目录中存放着许多文件，我们将要修改这些文件来定制软件包行为。其中最重要的文件当属 control, changelog, copyright, 以及 rules, 所有的软件包都必须有这几个文件。</p><p>执行命令快速创建配置文件目录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myemail@foxmail.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rekols-monitor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;my&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -e: 邮件地址</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -p: 软件包名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -u: 软件版本号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -f: 作者全名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -n:  这个参数是核心，直接从源码生成配置文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -x1: 这个参数的默认值就是 x1 ，这里是说明这个参数的作用，deb包的构建过程有很多钩子方法，x1只是包含一些项目信息和构建信息的版本，x0就只有构建信息，但是x0参数已经被弃用，x2、x3、x4你会发现生成文件很多，一般没有特殊情况，最简即可，即使用默认参数x1即可</span></span></code></pre></div><h2 id="deb包目录" tabindex="-1">deb包目录 <a class="header-anchor" href="#deb包目录" aria-label="Permalink to &quot;deb包目录&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MYDEB/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debian</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changelog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copyright</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.Debian</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-options</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script1.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script2.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script3.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script4.py</span></span></code></pre></div><h2 id="修改-control-文件" tabindex="-1">修改 control 文件 <a class="header-anchor" href="#修改-control-文件" aria-label="Permalink to &quot;修改 control 文件&quot;">​</a></h2><p>原始文件内容如下，第 1 – 7 行是源代码包的控制信息。第 9 – 13 行是二进制包的控制信息。 按照自己的需求可以修改描述信息、支持架构等等信息</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Source:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mydeb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Section:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unknown</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Priority:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> optional</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Maintainer:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mydeb@foxmail.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Build-Depends:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debhelper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (&gt;=11~)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Standards-Version:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Homepage:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">insert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relevan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Package:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mydeb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Architecture:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> any</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Multi-Arch:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foreign</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Depends:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${misc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Depends}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${shlibs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Depends}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Description:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auto-generated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Debian</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> binary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> was</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auto-generated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debmake</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provided</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>详细的设置可以查看文末官方文档（4.1，control部分）</p></div><h2 id="创建-install-文件" tabindex="-1">创建 install 文件 <a class="header-anchor" href="#创建-install-文件" aria-label="Permalink to &quot;创建 install 文件&quot;">​</a></h2><p>install文件的目的是，安装deb包的时候，能把对应的脚本文件和share文件安装到指定的目录 例如，假设某个二进制文件 src/bar没有被默认安装，则应让 install 呈现成这样：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/mydeb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">script1.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/mydeb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">script2.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/mydeb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">script3.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/mydeb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">script4.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/mydeb</span></span></code></pre></div><h2 id="创建-links-文件" tabindex="-1">创建 links 文件 <a class="header-anchor" href="#创建-links-文件" aria-label="Permalink to &quot;创建 links 文件&quot;">​</a></h2><p>links 文件的目的，对需要直接执行的脚本文件创建链接</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/lib/mydeb/script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/mydeb</span></span></code></pre></div><h2 id="进行打包" tabindex="-1">进行打包 <a class="header-anchor" href="#进行打包" aria-label="Permalink to &quot;进行打包&quot;">​</a></h2><p>debian 目录下还有很多文件可以按照自己的需求进行定制，不过这里用不上，暂时不做修改示列，比如最重要的 rules 文件，直接决定打包的成功与否</p><p>打包可以直接执行以下命令进行打包：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dpkg-buildpackage</span></span></code></pre></div><p>完成后，会在上级目录生成 mydeb_1.0.0_amd64.deb，自此，打包结束。</p><h2 id="debian-目录下文件说明" tabindex="-1">debian 目录下文件说明 <a class="header-anchor" href="#debian-目录下文件说明" aria-label="Permalink to &quot;debian 目录下文件说明&quot;">​</a></h2><p><code>changelog</code>：此文件用于记录软件包的版本和更新历史。每次对软件包进行更改时，都应更新此文件以包含新的版本号、日期、作者和更改描述。</p><p><code>compat</code>：此文件指定了软件包的兼容性级别。它定义了软件包与 Debian 操作系统版本之间的兼容性要求。该文件中的数字表示 Debian 版本号，例如 9 表示Debian 9 或更高版本。</p><p><code>control</code>：此文件是软件包的控制文件，包含了软件包的元数据和依赖关系。它定义了软件包的名称、描述、维护者、依赖关系和其他相关信息。</p><p><code>copyright</code>：此文件包含软件包的版权信息和许可证条款。它指定了软件包的版权所有者、许可证类型和许可证文本。</p><p><code>docs</code>：此目录用于存放软件包的文档文件。这些文件可以是用户手册、安装指南、示例配置文件等。</p><p><code>install</code>：此文件用于指定软件包的安装规则。它告诉 dpkg 工具在安装软件包时应该将哪些文件复制到系统的哪些位置。</p><p><code>rules</code>：此文件包含了构建软件包的规则和指令。它指定了如何编译、打包和安装软件包。</p><p>links文件用于创建符号链接（symbolic links）。符号链接是一种特殊类型的文件，它指向另一个文件或目录。通过创建符号链接，可以在文件系统中引用其他位置的文件或目录，而不需要复制或移动它们。</p><p><code>source</code>：此目录包含软件包的源代码。如果软件包是通过源代码构建的，那么源代码文件应该放在这个目录下。</p><p><code>preinst</code>:（pre-installation script）文件是 Debian 软件包中的一个脚本文件，用于在软件包安装之前执行一些预安装操作。</p><hr><p><a href="https://www.debian.org/doc/manuals/maint-guide/start.zh-cn.html" target="_blank" rel="noreferrer">官方制作deb的方法</a></p><hr>`,40)]))}const c=i(h,[["render",p]]);export{g as __pageData,c as default};
